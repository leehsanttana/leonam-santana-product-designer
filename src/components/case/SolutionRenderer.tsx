import React from "react";
import { SkillTag } from "@/components/ui/skill-tag";
import { ImageBlock } from "./ImageBlock";

interface SolutionSection {
  title: string;
  description: string;
  images: Array<{ url: string; alt: string; caption?: string }>;
}

interface SolutionProps {
  id: string;
  phaseLabel: string;
  title: string;
  description: string;
  sections: SolutionSection[];
}

export function SolutionRenderer({
  id,
  phaseLabel,
  title,
  description,
  sections,
}: SolutionProps) {
  return (
    <section id={id} className="pt-24 pb-20 border-b border-border">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
           <div className="bg-accent-pink/10 px-3 py-1 rounded-full border border-accent-pink/20">
             <span className="text-[12px] font-medium tracking-[2px] uppercase text-accent-pink">
                {phaseLabel}
             </span>
           </div>
        </div>
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-6 leading-tight">{title}</h2>
        <p className="text-[18px] text-text-secondary max-w-[750px] leading-[1.6] font-light">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-10">
            <div>
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">{section.title}</h3>
              <p className="text-text-secondary max-w-[750px] font-light leading-relaxed">{section.description}</p>
            </div>
            
            <div className="bg-bg-elevated border border-border rounded-2xl overflow-hidden p-0 group">
              <ImageBlock 
                images={section.images} 
                layout={section.images.length === 1 ? "single" : "grid-2"} 
                className="py-0"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
