"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { LoaderThree } from "@/components/ui/loader";
import { Calendar, Tag } from "lucide-react";

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
  tags?: string[];
}

export default function GalleryPage() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [displayCount, setDisplayCount] = useState(12); // Initial load: 12 images
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/gallery");
      const data = await response.json();
      setImages(data.images || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get unique tags from all images
  const allTags = Array.from(
    new Set(images.flatMap((img) => img.tags || []))
  );

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.tags?.includes(filter));

  // Show only limited images initially
  const displayedImages = filteredImages.slice(0, displayCount);
  const hasMore = filteredImages.length > displayCount;

  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;
    
    setIsLoadingMore(true);
    // Simulate a small delay for smooth UX
    setTimeout(() => {
      setDisplayCount(prev => prev + 12);
      setIsLoadingMore(false);
    }, 300);
  }, [isLoadingMore, hasMore]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoadingMore, loadMore]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Convert Cloudinary images to LayoutGrid cards format
  const cards = displayedImages.map((image, index) => ({
    id: index,
    content: (
      <div className="text-white">
        <p className="font-bold text-xl mb-2">
          Image {index + 1}
        </p>
        <div className="flex items-center gap-2 text-sm mb-2">
          <Calendar size={14} />
          <span>{formatDate(image.created_at)}</span>
        </div>
        {image.tags && image.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Tag size={14} />
            {image.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-white/20 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    ),
    className: "",
    thumbnail: image.secure_url,
  }));

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="gallerySparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#52525B"
          speed={0.5}
        />
      </div>

      <div className="relative z-10">
        <div className="p-8 md:p-16 max-w-7xl mx-auto mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Gallery</h1>
          <p className="text-base md:text-lg text-accent-muted">
            My daily work, workstation, and moments captured
          </p>
        </div>

        {/* Filter Tags */}
        {allTags.length > 0 && (
          <div className="px-8 md:px-16 max-w-7xl mx-auto mb-8 flex flex-wrap gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm border transition-all ${
                filter === "all"
                  ? "border-accent bg-accent text-background"
                  : "border-border hover:border-accent"
              }`}
            >
              All ({images.length})
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 text-sm border transition-all ${
                  filter === tag
                    ? "border-accent bg-accent text-background"
                    : "border-border hover:border-accent"
                }`}
              >
                {tag} ({images.filter((img) => img.tags?.includes(tag)).length})
              </button>
            ))}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <LoaderThree />
          </div>
        )}

        {/* Empty State */}
        {!loading && images.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl font-bold mb-2">No images yet</p>
            <p className="text-accent-muted">
              Upload images to your Cloudinary gallery folder to see them here
            </p>
          </div>
        )}

        {/* Gallery Grid with LayoutGrid */}
        {!loading && filteredImages.length > 0 && (
          <>
            <LayoutGrid cards={cards} />
            
            {/* Infinite Scroll Trigger */}
            {hasMore && (
              <div ref={observerTarget} className="text-center py-12">
                {isLoadingMore && (
                  <div className="flex justify-center items-center">
                    <LoaderThree />
                  </div>
                )}
                {!isLoadingMore && (
                  <p className="text-accent-muted text-sm">
                    {filteredImages.length - displayCount} more images
                  </p>
                )}
              </div>
            )}
          </>
        )}

        {/* No Results for Filter */}
        {!loading && images.length > 0 && filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl font-bold mb-2">No images found</p>
            <p className="text-accent-muted">
              No images match the selected filter
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
