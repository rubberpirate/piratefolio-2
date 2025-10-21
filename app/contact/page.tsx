"use client";
import { FaXTwitter, FaLinkedin, FaTelegram, FaDiscord } from "react-icons/fa6";
import { Cover } from "@/components/ui/cover";

export default function ContactPage() {
  const email = "rubberpirate27@gmail.com";

  const socialLinks = [
    {
      name: "X",
      handle: "@rubberpirate0",
      url: "https://x.com/rubberpirate0",
      icon: <FaXTwitter size={20} />,
    },
    {
      name: "GitHub",
      handle: "@rubberpirate",
      url: "https://github.com/rubberpirate",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      handle: "rahul-rajith",
      url: "https://linkedin.com/in/rahul-rajith",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "Telegram",
      handle: "@rubberpirate",
      url: "https://t.me/rubberpirate",
      icon: <FaTelegram size={20} />,
    },
    {
      name: "Discord",
      handle: "Join Server",
      url: "https://discord.gg/Q5Zeg5Wx7d",
      icon: <FaDiscord size={20} />,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16 bg-background">
      <div className="w-full text-center space-y-8 flex flex-col items-center">
        {/* Heading */}
        <div className="space-y-4 flex flex-col items-center">
          <p className="text-sm md:text-base text-accent-muted">
            Say hi or talk future projects
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight">
            <Cover>{email}</Cover>
          </h1>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 pt-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-accent/10 transition-colors rounded-full border border-border hover:border-accent"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
