import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

export const revalidate = 3600; // Cache for 1 hour

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  categories?: string[];
}

// Parse Medium RSS feed
async function fetchMediumPosts(username: string): Promise<BlogPost[]> {
  try {
    const rssUrl = `https://medium.com/feed/@${username}`;
    const response = await fetch(rssUrl);
    const xmlText = await response.text();
    
    // Parse RSS XML
    const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];
    
    return items.slice(0, 6).map(item => {
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || "";
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      const description = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] || "";
      const categories = [...item.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g)].map(m => m[1]);
      
      // Clean HTML from description
      const cleanDescription = description
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .trim()
        .substring(0, 200);
      
      return {
        title,
        link,
        pubDate,
        description: cleanDescription,
        categories,
      };
    });
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}

// Fetch Hashnode posts using GraphQL API
async function fetchHashnodePosts(username: string): Promise<BlogPost[]> {
  try {
    const query = `
      query {
        user(username: "${username}") {
          publications(first: 1) {
            edges {
              node {
                posts(first: 6) {
                  edges {
                    node {
                      title
                      url
                      publishedAt
                      brief
                      tags {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    const posts = data?.data?.user?.publications?.edges?.[0]?.node?.posts?.edges || [];

    return posts.map((edge: any) => ({
      title: edge.node.title,
      link: edge.node.url,
      pubDate: edge.node.publishedAt,
      description: edge.node.brief,
      categories: edge.node.tags?.map((tag: any) => tag.name) || [],
    }));
  } catch (error) {
    console.error("Error fetching Hashnode posts:", error);
    return [];
  }
}

export async function GET() {
  try {
    let posts: BlogPost[] = [];

    // Check which platform is configured
    if (SITE_CONFIG.social.medium) {
      const username = SITE_CONFIG.social.medium.split("@").pop()?.replace(/\/$/, "");
      if (username) {
        posts = await fetchMediumPosts(username);
      }
    } else if (SITE_CONFIG.social.hashnode) {
      const username = SITE_CONFIG.social.hashnode.split("@").pop()?.replace(/\/$/, "");
      if (username) {
        posts = await fetchHashnodePosts(username);
      }
    }

    return NextResponse.json(
      { posts },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch (error) {
    console.error("Error in blog API:", error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
