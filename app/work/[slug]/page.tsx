import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { fetchGitHubRepo } from "@/lib/github";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const repo = await fetchGitHubRepo(SITE_CONFIG.githubUsername, slug);

  if (!repo) {
    return (
      <main className="min-h-screen p-8 md:p-16 relative overflow-hidden">
        {/* Sparkles Background */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="projectSparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#52525B"
            speed={0.5}
          />
        </div>
        
        <div className="max-w-container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Project Not Found
          </h1>
          <p className="text-lg mb-8">
            The project "{slug}" could not be found.
          </p>
          <Link 
            href="/work"
            className="px-6 py-3 border border-border hover:border-accent transition-colors inline-block"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 md:p-16 relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="projectSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#52525B"
          speed={0.5}
        />
      </div>
      
      <div className="max-w-container mx-auto relative z-10">
        {/* Back Link */}
        <Link 
          href="/work"
          className="inline-flex items-center gap-2 mb-8 hover:underline text-accent-muted"
        >
          ← Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {repo.name}
          </h1>
          <p className="text-xl md:text-2xl text-accent-muted max-w-content mb-6">
            {repo.description || "No description available"}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 text-accent-muted mb-6">
            <span className="flex items-center gap-2">
              <Star size={18} />
              {repo.stargazers_count} stars
            </span>
            <span className="flex items-center gap-2">
              <GitFork size={18} />
              {repo.forks_count} forks
            </span>
            {repo.language && (
              <span className="px-3 py-1 border border-border text-sm">
                {repo.language}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-accent transition-colors"
            >
              <Github size={18} />
              View on GitHub
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Topics */}
        {repo.topics.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technologies & Topics</h2>
            <div className="flex flex-wrap gap-3">
              {repo.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 border border-border text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Project Details */}
        <section className="prose prose-lg max-w-content">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <div className="space-y-4 text-base">
            <p>
              <strong>Repository:</strong> {repo.full_name}
            </p>
            <p>
              <strong>Created:</strong> {new Date(repo.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p>
              <strong>Last Updated:</strong> {new Date(repo.pushed_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
