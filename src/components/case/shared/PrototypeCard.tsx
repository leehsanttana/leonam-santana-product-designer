import React from "react";
import { cn } from "@/lib/utils";

interface PrototypeCardProps {
  title: string;
  embedUrl: string;
  className?: string;
  textDetails?: string;
}

export function PrototypeCard({
  title,
  embedUrl,
  className,
  textDetails
}: PrototypeCardProps) {
  return (
    <div className={cn(
      "bg-bg-elevated border border-border rounded-[16px] overflow-hidden flex flex-col w-full",
      className
    )}>
      {/* Header - Title */}
      <div className="px-4 py-[10px] border-b border-border">
        <p className="font-heading font-normal text-[14px] text-text-secondary tracking-[1.25px] uppercase">
          {title}
        </p>
      </div>

      {/* Main Prototype Area */}
      <div className="w-full relative aspect-video bg-black/20">
        <iframe 
          src={embedUrl}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>

      {/* Footer - Optional Details */}
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
