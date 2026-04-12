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
  const bgStyle = color ? { backgroundColor: `${color}14` } : undefined;

  return (
    <div className={cn("inline-flex gap-[8px] items-center", className)}>
      <p
        className={cn("font-heading font-light leading-[20px] text-[14px]", !color && "text-accent-cyan")}
        style={textStyle}
      >
        {number}
      </p>
      <div
        className={cn("px-[10px] py-[2px] rounded-[999px] flex items-center justify-center", !color && "bg-accent-cyan/[0.08]")}
        style={bgStyle}
      >
        <p
          className={cn("font-heading font-medium leading-[20px] text-[14px] tracking-[2px] uppercase", !color && "text-accent-cyan")}
          style={textStyle}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
