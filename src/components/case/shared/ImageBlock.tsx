import React from "react";
import { cn } from "@/lib/utils";

interface ImageItem {
  url: string;
  caption?: string;
  alt: string;
}

interface ImageBlockProps {
  id?: string;
  images: ImageItem[];
  layout?: "single" | "grid-2" | "grid-3";
  className?: string;
}

export function ImageBlock({ id, images, layout = "single", className }: ImageBlockProps) {
  const gridClass = {
    single: "grid-cols-1",
    "grid-2": "grid-cols-1 md:grid-cols-2",
    "grid-3": "grid-cols-1 md:grid-cols-3",
  };

  return (
    <section id={id} className={cn("py-12", className)}>
      <div className={cn("grid gap-8", gridClass[layout])}>
        {images?.map((img, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <div className="w-full bg-muted rounded-2xl overflow-hidden shadow-sm border border-border aspect-[4/3] flex items-center justify-center relative">
              {/* Fallback image style for when url is empty or mocked */}
              {img.url ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={img.url}
                  alt={img.alt}
                  className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-secondary/60 flex items-center justify-center text-muted-foreground">
                  [Image Placehoder: {img.alt}]
                </div>
              )}
            </div>
            {img.caption && (
              <p className="text-sm text-center text-foreground/60">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
