import React from "react";
import { cn } from "@/lib/utils";

interface PhaseLabelProps {
  number: string;
  label: string;
  color?: string; // Hex color — passed from section theme (e.g. token value)
  className?: string;
}

export function PhaseLabel({ number, label, color, className }: PhaseLabelProps) {
  // When a color is passed, use it as inline style (dynamic theming).
  // When no color is passed, fall back to the design token: --color-accent-cyan.
  const textStyle = color ? { color } : undefined;
  const bgStyle = color ? { backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)` } : undefined;

  return (
    <div className={cn("inline-flex gap-ds-xs items-center", className)}>
      <p
        className={cn("text-[12px] font-medium tracking-[2px] uppercase", !color && "text-accent-cyan")}
        style={textStyle}
      >
        {number?.padStart(2, '0')}
      </p>
      <div
        className={cn("px-ds-sm py-ds-xs rounded-full flex items-center justify-center", !color && "bg-accent-cyan/10")}
        style={bgStyle}
      >
        <p
          className={cn("text-[11px] font-bold tracking-[2.5px] uppercase", !color && "text-accent-cyan")}
          style={textStyle}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
