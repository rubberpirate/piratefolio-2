/**
 * Project data structure
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

/**
 * GitHub repository structure (from GitHub API)
 */
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
 * Social media link structure
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

/**
 * Navigation link structure
 */
export interface NavLink {
  label: string;
  href: string;
}
