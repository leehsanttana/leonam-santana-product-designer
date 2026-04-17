import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  content: string;
  color?: string; // Hex — dynamic phase color. Falls back to accent-cyan token.
}

export function FeatureCard({ title, content, color }: FeatureCardProps) {
  const textStyle = color ? { color } : undefined;

  return (
    <div className="p-4 md:p-6 rounded-2xl bg-bg-elevated border border-border flex flex-col gap-3 group hover:border-border/60 transition-all">
      <h4
        className={cn("text-base md:text-lg font-normal", !color && "text-accent-orange")}
        style={textStyle}
      >
        {title}
      </h4>
      <p className="text-text-primary text-[15px] leading-relaxed font-light">
        {content}
      </p>
    </div>
  );
}
