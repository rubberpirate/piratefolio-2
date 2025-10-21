import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Github, Linkedin, ExternalLink, MessageSquare } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8 md:p-16 relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="contactSparkles"
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
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Contact</h1>
        
        <div className="max-w-narrow space-y-12">
          <section>
            <p className="text-lg md:text-xl mb-8">
              Interested in collaborating on cybersecurity projects, CTF teams, 
              or discussing security research? Feel free to reach out!
            </p>

            {/* Email */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">$ echo $EMAIL</h2>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-xl hover:underline text-accent flex items-center gap-2"
              >
                <Mail size={24} />
                {SITE_CONFIG.email}
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-bold mb-4">$ ls ~/social/</h2>
              <div className="space-y-4">
                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border hover:border-accent transition-colors group"
                >
                  <Github size={24} />
                  <div>
                    <div className="font-medium group-hover:underline">GitHub</div>
                    <div className="text-sm text-accent-muted">@{SITE_CONFIG.githubUsername}</div>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border hover:border-accent transition-colors group"
                >
                  <Linkedin size={24} />
                  <div>
                    <div className="font-medium group-hover:underline">LinkedIn</div>
                    <div className="text-sm text-accent-muted">Connect professionally</div>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border hover:border-accent transition-colors group"
                >
                  <MessageSquare size={24} />
                  <div>
                    <div className="font-medium group-hover:underline">Discord</div>
                    <div className="text-sm text-accent-muted">Join the community</div>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.social.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border hover:border-accent transition-colors group"
                >
                  <ExternalLink size={24} />
                  <div>
                    <div className="font-medium group-hover:underline">TryHackMe</div>
                    <div className="text-sm text-accent-muted">View my progress</div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Quick Info */}
          <section className="border-l-2 border-accent pl-6">
            <p className="text-sm text-accent-muted mb-2">
              📍 Based in Andhra Pradesh, India
            </p>
            <p className="text-sm text-accent-muted mb-2">
              🎓 B.Tech CSE @ SRM University AP
            </p>
            <p className="text-sm text-accent-muted">
              💼 Currently: Associate @ Satoshi Lab
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
