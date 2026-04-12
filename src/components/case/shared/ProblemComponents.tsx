import React from "react";
import { cn } from "@/lib/utils";

interface POVCardProps {
  quote: string;
  color?: string; // Hex — dynamic phase color. Falls back to accent-yellow token.
  className?: string;
}

export function POVCard({ quote, color, className }: POVCardProps) {
  const borderStyle = color
    ? { borderLeft: `4px solid ${color}` }
    : undefined;

  return (
    <div
      className={cn(
        "p-8 rounded-2xl bg-bg-elevated border-y border-r border-border",
        !color && "border-l-4 border-l-accent-yellow",
        className
      )}
      style={borderStyle}
    >
      <p className="text-text-primary text-[18px] leading-relaxed font-light italic">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

interface HowMightWeCardProps {
  question: string;
  color?: string; // Hex — dynamic phase color. Falls back to accent-yellow token.
}

export function HowMightWeCard({ question, color }: HowMightWeCardProps) {
  const textStyle = color ? { color } : undefined;

  return (
    <div className="p-6 rounded-2xl bg-bg-elevated border border-border">
      <span className="text-xs text-text-muted tracking-[2px] uppercase block mb-2">
        COMO PODERÍAMOS...
      </span>
      <p
        className={cn("text-lg font-light leading-relaxed", !color && "text-accent-yellow")}
        style={textStyle}
      >
        {question}
      </p>
    </div>
  );
}
