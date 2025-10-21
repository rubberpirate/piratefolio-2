"use client";
import { SITE_CONFIG } from "@/lib/constants";
import { Github, Linkedin, Mail, ExternalLink, Shield, Lock, Bug, Search, Terminal, Cpu, Network, Code, Wrench, Coffee, Database, GitBranch, Twitter } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FlipWords } from "@/components/ui/flip-words";

export default function AboutPage() {
  const allItems = [
    { quote: "Rust", icon: <i className="devicon-rust-original text-xl"></i>, hideText: true },
    { quote: "Python", icon: <i className="devicon-python-plain text-xl"></i>, hideText: true },
    { quote: "C++", icon: <i className="devicon-cplusplus-plain text-xl"></i>, hideText: true },
    { quote: "Pentesting", icon: <Bug size={18} /> },
    { quote: "Lua", icon: <i className="devicon-lua-plain text-xl"></i>, hideText: true },
    { quote: "Go", icon: <i className="devicon-go-original-wordmark text-xl"></i>, hideText: true },
    { quote: "Bash", icon: <i className="devicon-bash-plain text-xl"></i>, hideText: true },
    { quote: "Digital Forensics", icon: <Search size={18} /> },
    { quote: "Arduino", icon: <i className="devicon-arduino-plain text-xl"></i>, hideText: true },
    { quote: "AWS", icon: <i className="devicon-amazonwebservices-plain-wordmark text-xl"></i>, hideText: true },
    { quote: "npm", icon: <i className="devicon-npm-original-wordmark text-xl"></i>, hideText: true },
    { quote: "Embedded Security", icon: <Cpu size={18} /> },
    { quote: "Arch Linux", icon: <i className="devicon-archlinux-plain text-xl"></i>, hideText: true },
    { quote: "Neovim", icon: <i className="devicon-neovim-plain text-xl"></i>, hideText: true },
    { quote: "Exploit Development", icon: <Code size={18} /> },
    { quote: "JavaScript", icon: <i className="devicon-javascript-plain text-xl"></i>, hideText: true },
    { quote: "Debian", icon: <i className="devicon-debian-plain text-xl"></i>, hideText: true },
    { quote: "SQL", icon: <Database size={18} /> },
    { quote: "Reverse Engineering", icon: <Terminal size={18} /> },
    { quote: ".NET Core", icon: <i className="devicon-dotnetcore-plain text-xl"></i>, hideText: true },
    { quote: "Assembly", icon: <Cpu size={18} /> },
    { quote: "Linux", icon: <i className="devicon-linux-plain text-xl"></i>, hideText: true },
  ].map((item, idx) => ({
    ...item,
    name: "Tech",
    title: "Stack",
  }));

  const interests = [
    "Gaming",
    "Watching Anime & Movies",
    "Reading Manga and Manhwa's",
    "Gym and Powerlifting",
  ];

  const activities = [
    "gaming",
    "watching anime",
    "reading manga",
    "powerlifting",
  ];

  return (
    <main className="min-h-screen p-8 md:p-16 relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="aboutSparkles"
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
        <h1 className="text-5xl md:text-7xl font-bold mb-8">About</h1>
        
        <TracingBeam className="px-6">
          <div className="max-w-content space-y-12 antialiased pt-4 relative">
          {/* Bio */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">$ whoami</h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                A cybersecurity enthusiast and B.Tech CSE student at{" "}
                <span className="font-medium">SRM University AP</span> with hands-on
                experience in penetration testing, digital forensics, and CTF competitions.
              </p>
              <p>
                Currently working as an <span className="font-medium">Associate at Satoshi Lab</span>{" "}
                focusing on cybersecurity initiatives. Proficient in Pentesting, IoT, and Linux systems.
              </p>
            </div>
          </section>

          {/* Skills, Tools & Languages */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">$ cat tech-stack.txt</h2>
            <InfiniteMovingCards
              items={allItems}
              direction="left"
              speed="slow"
              pauseOnHover={true}
              className="mb-4"
            />
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">$ cat ~/education.md</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-1">B.Tech - CSE</h3>
                <p className="text-accent-muted mb-2">
                  SRM University AP, Guntur, Andhra Pradesh
                </p>
                <p className="text-sm">Expected Graduation: May 2028</p>
                <p className="text-sm mt-2">
                  🏆 Won Secure-X Hackathon Conducted by BSI Learning and SRMAP
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">12th - High School</h3>
                <p className="text-accent-muted mb-2">
                  Army Public School, Kanpur Cantt, Kanpur
                </p>
                <p className="text-sm">Completed: April 2024</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">$ cat ~/experience.log</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Associate</h3>
                <p className="text-accent-muted mb-2">
                  Satoshi Lab, Next Tech Lab · Vijayawada, Andhra Pradesh
                </p>
                <p className="text-sm mb-3">October 2024 - Present</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Pursuing advanced Cyber-Security initiatives</li>
                  <li>Developing multiple hardware penetration testing tools focused on ethical hacking</li>
                  <li>Contributing to team-based security research and development projects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Lead & Founder</h3>
                <p className="text-accent-muted mb-2">FOSS SRMAP · Full-time</p>
                <p className="text-sm mb-3">Aug 2025 - Present · 3 mos</p>
                <p className="text-sm mb-3 text-accent-muted">Amaravati, Andhra Pradesh, India · On-site</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Marked the beginning of FOSS-SRMAP Community Chapter at SRM University Ap</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              When I'm not hacking, I'm <FlipWords words={activities} className="text-2xl md:text-3xl font-bold text-foreground" />
            </h2>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">$ ls -la ~/social/</h2>
            <div className="flex flex-wrap gap-4">
              <HoverBorderGradient
                as="a"
                containerClassName="rounded-full"
                className="bg-background text-foreground flex items-center gap-2"
                {...({ href: SITE_CONFIG.social.github, target: "_blank", rel: "noopener noreferrer" } as any)}
              >
                <Github size={18} />
                <span>GitHub</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                as="a"
                containerClassName="rounded-full"
                className="bg-background text-foreground flex items-center gap-2"
                {...({ href: SITE_CONFIG.social.linkedin, target: "_blank", rel: "noopener noreferrer" } as any)}
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                as="a"
                containerClassName="rounded-full"
                className="bg-background text-foreground flex items-center gap-2"
                {...({ href: SITE_CONFIG.social.twitter, target: "_blank", rel: "noopener noreferrer" } as any)}
              >
                <Twitter size={18} />
                <span>Twitter</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                as="a"
                containerClassName="rounded-full"
                className="bg-background text-foreground flex items-center gap-2"
                {...({ href: SITE_CONFIG.social.discord, target: "_blank", rel: "noopener noreferrer" } as any)}
              >
                <i className="devicon-discord-plain text-xl"></i>
                <span>Discord</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                as="a"
                containerClassName="rounded-full"
                className="bg-background text-foreground flex items-center gap-2"
                {...({ href: `mailto:${SITE_CONFIG.email}` } as any)}
              >
                <Mail size={18} />
                <span>Email</span>
              </HoverBorderGradient>
            </div>
          </section>
          </div>
        </TracingBeam>
      </div>
    </main>
  );
}
