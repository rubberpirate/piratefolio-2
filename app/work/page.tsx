"use client";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SparklesCore } from "@/components/ui/sparkles";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LinkPreview } from "@/components/ui/link-preview";
import { LoaderTwo } from "@/components/ui/loader";
import { useEffect, useState } from "react";
import type { GitHubRepo } from "@/lib/github";

// Map project names to their image paths
const getProjectImage = (projectName: string): string | undefined => {
  const imageMap: { [key: string]: string } = {
    "KyOS": "/images/kyos.png",
    "SpiritBox": "/images/spiritbox.png",
    "IdenZero": "/images/iden-zero.png",
  };
  return imageMap[projectName];
};

export default function WorkPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${SITE_CONFIG.githubUsername}/repos?per_page=100&sort=updated`);
        const data: GitHubRepo[] = await response.json();
        const filtered = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
        setRepos(filtered);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    }
    loadRepos();
  }, []);

  return (
    <main className="min-h-screen p-8 md:p-16 relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="workSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#52525B"
          speed={0.5}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Work</h1>
        
        <p className="text-lg text-accent-muted mb-12">
          All projects from{" "}
          <a 
            href={SITE_CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            @{SITE_CONFIG.githubUsername}
          </a>
        </p>

        {repos.length > 0 ? (
          <BentoGrid className="max-w-7xl mx-auto">
            {repos.map((repo, idx) => (
              <BentoGridItem
                key={repo.id}
                className={`${
                  idx === 3 || idx === 6 ? "md:col-span-2" : ""
                } border-border bg-background hover:border-accent`}
                title={
                  getProjectImage(repo.name) ? (
                    <LinkPreview
                      url={repo.html_url}
                      className="font-bold hover:underline"
                      width={400}
                      height={250}
                      isStatic={true}
                      imageSrc={getProjectImage(repo.name)!}
                    >
                      {repo.name}
                    </LinkPreview>
                  ) : (
                    <LinkPreview
                      url={repo.html_url}
                      className="font-bold hover:underline"
                      width={400}
                      height={250}
                    >
                      {repo.name}
                    </LinkPreview>
                  )
                }
                description={
                  <div className="space-y-3">
                    <p className="text-sm line-clamp-2">
                      {repo.description || "No description available"}
                    </p>
                    
                    {/* Language & Topics */}
                    <div className="flex flex-wrap gap-2">
                      {repo.language && (
                        <span className="text-xs px-2 py-1 border border-border">
                          {repo.language}
                        </span>
                      )}
                      {repo.topics.slice(0, 2).map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 border border-border"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1">
                        <Star size={12} />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                }
                icon={
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline text-sm"
                  >
                    <Github size={16} />
                  </a>
                }
              />
            ))}
          </BentoGrid>
        ) : (
          <div className="flex items-center gap-3 text-accent-muted">
            {loading && <LoaderTwo />}
            <p>{loading ? "Loading projects..." : "No projects found."}</p>
          </div>
        )}
      </div>
    </main>
  );
}
