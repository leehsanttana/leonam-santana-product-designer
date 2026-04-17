"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  videoDescription: string;
  videoUrl?: string; // Opcional, para aceitar placeholder
  textDetails?: string;
  className?: string;
}

export function VideoCard({
  videoDescription,
  videoUrl,
  textDetails,
  className
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Play the video if it is visible on the screen, otherwise pause it
          if (entry.isIntersecting) {
            videoElement.play().catch(console.error);
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% of the video is visible
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [videoUrl]);

  return (
    <div className={cn(
      "bg-bg-elevated border border-border rounded-[16px] overflow-hidden flex flex-col w-full",
      className
    )}>
      {/* Header - Video Description */}
      <div className="px-4 py-[10px] border-b border-border">
        <p className="text-body-04 text-text-secondary">
          {videoDescription}
        </p>
      </div>

      {/* Main Video Area */}
      <div className="w-full relative overflow-hidden bg-bg-subtle aspect-video flex items-center justify-center">
        {videoUrl ? (
          <video 
            ref={videoRef}
            src={videoUrl} 
            className="w-full h-full block object-cover"
            muted 
            loop 
            playsInline 
            controlsList="nodownload"
          />
        ) : (
          <div className="text-text-muted flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-bg-subtle to-bg-elevated">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 opacity-50">
              <path d="M22 8.5V15.5L16 11V8.5C16 7.67157 15.3284 7 14.5 7H3.5C2.67157 7 2 7.67157 2 8.5V15.5C2 16.3284 2.67157 17 3.5 17H14.5C15.3284 17 16 16.3284 16 15.5V13L22 8.5Z" />
            </svg>
            <span className="font-medium text-sm">Vídeo placeholder</span>
          </div>
        )}
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
