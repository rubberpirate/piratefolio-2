import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Briefcase, Image as ImageIcon, Mail } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rubber Pirate | Cybersecurity Specialist",
  description: "Everything in this world is breakable and fixable | Breaking into systems ethically since 2023",
};

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home size={18} />,
  },
  {
    name: "About Me",
    link: "/about",
    icon: <User size={18} />,
  },
  {
    name: "Work",
    link: "/work",
    icon: <Briefcase size={18} />,
  },
  {
    name: "Gallery",
    link: "/gallery",
    icon: <ImageIcon size={18} />,
  },
  {
    name: "Get In Touch",
    link: "/contact",
    icon: <Mail size={18} />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
