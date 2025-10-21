"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const NameFlip = ({
  names = ["Rubber Pirate", "Rahul Rajith"],
  duration = 3000,
}: {
  names?: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, duration);

    return () => clearInterval(interval);
  }, [names.length, duration]);

  return (
    <div className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {names[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
