import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Briefcase, Mail } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rubber Pirate | Cybersecurity Specialist",
  description: "Penetration testing & security research specialist, bug bounty hunter, and CTF competitor. Check out my projects and security research.",
  keywords: ["cybersecurity", "ethical hacking", "penetration testing", "CTF", "bug bounty", "security research"],
  authors: [{ name: "Rubber Pirate", url: "https://github.com/rubberpirate" }],
  openGraph: {
    title: "Rubber Pirate | Cybersecurity Specialist",
    description: "Penetration testing & security research specialist",
    type: "website",
  },
};

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home size={16} />,
  },
  {
    name: "About Me",
    link: "/about",
    icon: <User size={16} />,
  },
  {
    name: "Work",
    link: "/work",
    icon: <Briefcase size={16} />,
  },
  {
    name: "Get In Touch",
    link: "/contact",
    icon: <Mail size={16} />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          type="text/css" 
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" 
        />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
        <FloatingNav navItems={navItems} />
      </body>
    </html>
  );
}
