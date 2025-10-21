"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
 
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
 
  const [visible, setVisible] = useState(true);
  
  const isHomePage = pathname === "/";
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Always show navbar on home page
    if (isHomePage) {
      setVisible(true);
      return;
    }
    
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
 
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
 
  return (
    <AnimatePresence mode="wait">
      {visible && (
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 100,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "group fixed bottom-10 inset-x-0 mx-auto z-[5000] flex max-w-fit",
          className
        )}
      >
        {/* Outer glow container */}
        <div className="relative flex items-center justify-center rounded-full p-[1px] shadow-2xl shadow-zinc-900/50">
          {/* Gradient glow on hover */}
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(24,24,27,0.6)_0%,rgba(24,24,27,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          
          {/* Glass island container */}
          <div className="relative flex items-center justify-center z-10 rounded-full bg-background/40 backdrop-blur-xl border border-border/50 ring-1 ring-white/5 px-8 py-3 shadow-lg">
            <div className="flex items-center justify-center space-x-6">
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative items-center flex space-x-2 text-foreground/70 hover:text-foreground transition-all duration-200 hover:scale-105"
                  )}
                >
                  {navItem.icon && <span className="text-lg">{navItem.icon}</span>}
                  <span className="text-sm font-medium">{navItem.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Bottom gradient line */}
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};
