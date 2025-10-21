import { SITE_CONFIG } from "./constants";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

/**
 * Fetch all public repositories for a GitHub user
 * @param username GitHub username
 * @param options Additional fetch options
 * @returns Array of GitHub repositories
 */
export async function fetchGitHubRepos(
  username: string = SITE_CONFIG.githubUsername,
  options?: RequestInit
): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        ...options,
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...options?.headers,
        },
        // Cache for 1 hour to avoid rate limiting
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forks and archived repos, sort by updated date
    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => 
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      );
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

/**
 * Fetch a specific repository by name
 * @param username GitHub username
 * @param repoName Repository name
 * @returns GitHub repository or null if not found
 */
export async function fetchGitHubRepo(
  username: string,
  repoName: string
): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub repo:", error);
    return null;
  }
}

/**
 * Get featured projects (manually curated list)
 */
export const FEATURED_PROJECTS = [
  "KyOS",
  "SpiritBox",
  "IdenZero",
] as const;

/**
 * Fetch only featured projects
 */
export async function fetchFeaturedRepos(): Promise<GitHubRepo[]> {
  const allRepos = await fetchGitHubRepos();
  return allRepos.filter((repo) => 
    FEATURED_PROJECTS.some((featured) => 
      repo.name.toLowerCase() === featured.toLowerCase()
    )
  );
}
