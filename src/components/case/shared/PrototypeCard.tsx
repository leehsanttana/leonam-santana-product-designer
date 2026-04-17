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
      {/* Header - View Text */}
      <div className="px-4 py-[10px] border-b border-border">
        <p className="text-body-04 text-text-secondary">
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
