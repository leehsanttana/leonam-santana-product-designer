import React from "react";
import { cn } from "@/lib/utils";

interface DataCardProps {
  title?: string;
  value?: string;
  content: string;
  color?: string; // Hex — dynamic phase color. Falls back to accent-cyan token.
}

export function DataCard({ title, value, content, color }: DataCardProps) {
  const textStyle = color ? { color } : undefined;

  return (
    <div className="p-6 rounded-2xl bg-bg-elevated border border-border group hover:border-border/60 transition-all">
      {value && (
        <span
          className={cn("text-2xl font-normal block mb-2", !color && "text-accent-cyan")}
          style={textStyle}
        >
          {value}
        </span>
      )}
      {title && (
        <h3
          className={cn("text-base font-light mb-3", !color && "text-accent-cyan")}
          style={textStyle}
        >
          {title}
        </h3>
      )}
      <p className="text-text-primary text-[14px] leading-relaxed font-light">
        {content}
      </p>
    </div>
  );
}

export function DataGrid({ children, columns = 3 }: { children: React.ReactNode; columns?: number }) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
  };

  return (
    <div className={cn("grid gap-6 mb-12", gridCols[columns as keyof typeof gridCols])}>
      {children}
    </div>
  );
}
