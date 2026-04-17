import React from "react";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  imageDescription: string;
  imageUrl: string;
  alt?: string;
  textDetails?: string;
  className?: string;
}

export function ImageCard({
  imageDescription,
  imageUrl,
  alt = "Imagem do case",
  textDetails,
  className
}: ImageCardProps) {
  return (
    <div className={cn(
      "bg-bg-elevated border border-border rounded-[16px] overflow-hidden flex flex-col w-full",
      className
    )}>
      {/* Header - Image Description */}
      <div className="px-4 py-[10px] border-b border-border">
        <p className="text-body-04 text-text-secondary">
          {imageDescription}
        </p>
      </div>

      {/* Main Image Area */}
      <div className="w-full relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={alt} 
          className="w-full h-auto block object-cover"
        />
      </div>

      {/* Footer - Text Details (Optional) */}
      {textDetails && (
        <div className="px-4 py-[10px] border-t border-border">
          <p className="text-body-02 text-text-primary">
            {textDetails}
          </p>
        </div>
      )}
    </div>
  );
}
