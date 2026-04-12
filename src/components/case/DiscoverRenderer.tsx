import React from "react";
import { SkillTag } from "@/components/ui/skill-tag";

interface DiscoverProps {
  id: string;
  phaseLabel: string;
  title: string;
  description: string;
  cards: Array<{ title: string; content: string }>;
}

export function DiscoverRenderer({
  id,
  phaseLabel,
  title,
  description,
  cards,
}: DiscoverProps) {
  return (
    <section id={id} className="pt-24 pb-20 border-b border-border">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
           <div className="bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20">
             <span className="text-[12px] font-medium tracking-[2px] uppercase text-accent-cyan">
                {phaseLabel}
             </span>
           </div>
        </div>
        
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">{title}</h2>
        <p className="text-[18px] text-text-secondary max-w-[750px] leading-[1.6] font-light">
          {description}
        </p>
      </div>

      {cards && cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-bg-elevated border border-border flex flex-col gap-4 shadow-sm group hover:border-accent-cyan/40 transition-all"
            >
              <div className="text-3xl font-heading font-bold text-accent-cyan mb-2 opacity-50">
                0{idx + 1}
              </div>
              <h3 className="font-heading font-bold text-text-primary text-xl leading-snug">{card.title}</h3>
              <p className="text-text-secondary text-[14px] font-light leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
