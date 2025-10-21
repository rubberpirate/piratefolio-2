"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
 
type Card = {
  id: number;
  content: React.ReactNode | string;
  className: string;
  thumbnail: string;
};
 
export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
 
  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };
 
  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };
 
  return (
    <div className="w-full h-full p-10 columns-1 md:columns-2 lg:columns-3 max-w-7xl mx-auto gap-4 relative space-y-4">
      {cards.map((card, i) => (
        <div key={i} className="break-inside-avoid mb-4">
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden cursor-pointer rounded-lg border border-border hover:border-accent transition-all",
              selected?.id === card.id
                ? "fixed inset-0 h-screen w-screen m-auto z-50 flex justify-center items-center p-4"
                : "w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} selected={selected?.id === card.id} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.8 : 0 }}
      />
    </div>
  );
};
 
const ImageComponent = ({ card, selected }: { card: Card; selected: boolean }) => {
  // Add Cloudinary optimization parameters
  const optimizedUrl = card.thumbnail.includes('cloudinary.com')
    ? card.thumbnail.replace('/upload/', '/upload/f_auto,q_auto,w_800/')
    : card.thumbnail;

  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={optimizedUrl}
      className={cn(
        "object-cover w-full transition duration-200",
        selected ? "h-auto max-h-[80vh] object-contain" : "h-auto"
      )}
      alt="thumbnail"
      loading="lazy"
    />
  );
};
 
const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
