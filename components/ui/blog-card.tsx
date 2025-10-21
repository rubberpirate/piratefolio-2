"use client";
import { cn } from "@/lib/utils";
import { Calendar, BookOpen } from "lucide-react";

interface BlogCardProps {
  title: string;
  description?: string;
  link: string;
  pubDate: string;
  categories?: string[];
  coverImage?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  readTime?: string;
}

export function BlogCard({
  title,
  description,
  link,
  pubDate,
  categories,
  coverImage,
  author,
  readTime,
}: BlogCardProps) {
  const formattedDate = new Date(pubDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-xs w-full group/card"
    >
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          coverImage
            ? "bg-cover bg-center"
            : "bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"
        )}
        style={
          coverImage
            ? { backgroundImage: `url(${coverImage})` }
            : undefined
        }
      >
        {/* Dark overlay on hover */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black/40 group-hover/card:bg-black/60"></div>

        {/* Author info */}
        {author && (
          <div className="flex flex-row items-center space-x-4 z-10">
            {author.avatar ? (
              <img
                height="40"
                width="40"
                alt={author.name}
                src={author.avatar}
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full border-2 border-white bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {author.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {author.name}
              </p>
              <p className="text-sm text-gray-300 flex items-center gap-1">
                {readTime || "5 min read"}
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="text-content z-10">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 mb-2 line-clamp-2 group-hover/card:underline">
            {title}
          </h1>
          {description && (
            <p className="font-normal text-sm text-gray-50 relative z-10 mb-3 line-clamp-3">
              {description}
            </p>
          )}

          {/* Date and categories */}
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex items-center gap-2 text-xs text-gray-200">
              <Calendar size={12} />
              <span>{formattedDate}</span>
            </div>
            {categories && categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 2).map((category) => (
                  <span
                    key={category}
                    className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded border border-white/30"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
