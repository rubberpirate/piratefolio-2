"use client";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, Star, BookOpen, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SparklesCore } from "@/components/ui/sparkles";
import { NameFlip } from "@/components/ui/name-flip";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { useEffect, useState } from "react";
import type { GitHubRepo } from "@/types";

// Map project names to their image paths
const getProjectImage = (projectName: string): string => {
  const imageMap: { [key: string]: string } = {
    "KyOS": "/images/kyos.png",
    "SpiritBox": "/images/spiritbox.png",
    "IdenZero": "/images/iden-zero.png",
  };
  return imageMap[projectName] || "";
};

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  categories?: string[];
}

export default function Home() {
  const [featuredRepos, setFeaturedRepos] = useState<GitHubRepo[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function loadFeaturedRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${SITE_CONFIG.githubUsername}/repos?per_page=100`);
        const allRepos: GitHubRepo[] = await response.json();
        const FEATURED_PROJECTS = ["KyOS", "SpiritBox", "IdenZero"];
        const featured = FEATURED_PROJECTS.map(projectName => 
          allRepos.find(repo => repo.name === projectName)
        ).filter(Boolean) as GitHubRepo[];
        setFeaturedRepos(featured);
      } catch (error) {
        console.error("Error fetching featured repos:", error);
      }
    }

    async function loadBlogPosts() {
      try {
        // Replace with your Medium username or Hashnode publication slug
        // For Medium: https://medium.com/feed/@yourusername
        // For Hashnode: Use their GraphQL API or RSS feed
        const response = await fetch('/api/blog');
        const data = await response.json();
        setBlogPosts(data.posts || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }

    loadFeaturedRepos();
    loadBlogPosts();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden">`
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#52525B"
          speed={0.5}
        />
      </div>
      
      <div className="max-w-container mx-auto w-full relative z-10">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <NameFlip names={["Rubber Pirate", "Rahul Rajith"]} duration={3000} />
          </h1>
          
          {/* Text Reveal Card */}
          <div className="mb-4">
            <TextRevealCard
              text="I Break Stuff To"
              revealText="Feed My Curiosity"
            />
          </div>
          
          <p className="text-base md:text-lg max-w-content">
            Everything in this world is breakable & fixable | Breaking into systems ethically since 2023
          </p>
        </section>

        {/* Featured Projects from GitHub */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Featured Work
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredRepos.length > 0 ? (
              featuredRepos.slice(0, 3).map((repo) => (
                <CardSpotlight
                  key={repo.id}
                  className="border-border bg-background hover:border-accent transition-colors group"
                  radius={300}
                  color="#18181B"
                >
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      <LinkPreview
                        url={repo.html_url}
                        className="font-bold hover:underline"
                        width={400}
                        height={250}
                        isStatic={true}
                        imageSrc={getProjectImage(repo.name)}
                      >
                        {repo.name}
                      </LinkPreview>
                    </h3>
                    <p className="text-accent-muted mb-4 text-sm line-clamp-3">
                      {repo.description || "No description available"}
                    </p>
                    
                    {/* Tags */}
                    {repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span 
                            key={topic}
                            className="text-xs px-2 py-1 border border-border bg-background/50"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats & Links */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-accent-muted">
                        <Star size={14} />
                        <span>{repo.stargazers_count}</span>
                        {repo.language && (
                          <span className="ml-2">{repo.language}</span>
                        )}
                      </div>
                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline text-sm text-foreground"
                      >
                        <Github size={14} />
                        View
                      </a>
                    </div>
                  </div>
                </CardSpotlight>
              ))
            ) : (
              <p className="text-accent-muted">Loading projects...</p>
            )}
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="mb-16 md:mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-5xl font-bold">Latest Posts</h2>
            <Link
              href={SITE_CONFIG.social.medium || SITE_CONFIG.social.hashnode || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:underline text-sm"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.length > 0 ? (
              blogPosts.slice(0, 3).map((post, index) => (
                <a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-border p-6 hover:border-accent transition-colors bg-background"
                >
                  <div className="flex items-start gap-2 mb-3">
                    <BookOpen size={18} className="text-accent-muted flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold group-hover:underline line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  
                  {post.description && (
                    <p className="text-sm text-accent-muted mb-4 line-clamp-3">
                      {post.description}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-2 text-xs text-accent-muted">
                    <Calendar size={12} />
                    <span>{new Date(post.pubDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.categories.slice(0, 2).map((category) => (
                        <span 
                          key={category}
                          className="text-xs px-2 py-1 border border-border"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))
            ) : (
              <p className="text-accent-muted">No blog posts yet</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
