import React from "react";
import { cn } from "@/lib/utils";
import { PhaseLabel } from "./PhaseLabel";

interface CaseSectionProps {
  id: string;
  number?: string;
  label?: string;
  color?: string;
  title: string;
  description: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function CaseSection({
  id,
  number,
  label,
  color,
  title,
  description,
  children,
  className,
}: CaseSectionProps) {
  return (
    <section id={id} className={cn("py-8 border-b border-border last:border-b-0", className)}>
      <div className="mb-6">
        {number && label && (
          <div className="mb-4">
            <PhaseLabel number={number} label={label} color={color} />
          </div>
        )}
        
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">{title}</h2>
        <div className="text-[18px] text-text-secondary max-w-[750px] leading-[1.6] font-light">
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      </div>

      {children}
    </section>
  );
}
