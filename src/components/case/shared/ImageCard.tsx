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
        <p className="font-heading font-normal text-[14px] text-text-secondary tracking-[1.25px] uppercase">
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
          <p className="font-heading font-light text-[16px] text-text-primary leading-[28px]">
            {textDetails}
          </p>
        </div>
      )}
    </div>
  );
}
