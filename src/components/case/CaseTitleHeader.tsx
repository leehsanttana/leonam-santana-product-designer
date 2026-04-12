import React from "react";
import { SkillTag } from "@/components/ui/skill-tag";

export interface CaseTitleHeaderProps {
  title: string;
  description: string;
  skills: string[];
  metrics: Array<{ label: string; value: string }>;
  heroImage?: string;
}

export function CaseTitleHeader({
  title,
  description,
  skills,
  metrics,
  heroImage,
}: CaseTitleHeaderProps) {
  return (
    <section className="mb-20">
      <div className="flex flex-wrap gap-3 mb-8">
        {skills.map((skill) => (
          <SkillTag key={skill} variant="default">{skill}</SkillTag>
        ))}
      </div>
      
      <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-text-primary mb-6 leading-[1.1]">
        {title}
      </h1>
      
      <p className="text-xl text-text-secondary max-w-[750px] mb-16 leading-relaxed font-light">
        {description}
      </p>
      
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col gap-2 p-5 rounded-2xl bg-bg-elevated border border-border shadow-sm">
               <span className="text-[14px] font-medium tracking-[2px] uppercase text-text-muted">
                {metric.label}
              </span>
              <span className="text-xl font-light text-text-primary">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {heroImage && (
        <div className="w-full aspect-[21/9] bg-bg-elevated rounded-2xl overflow-hidden relative border border-border shadow-2xl overflow-clip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={heroImage} 
            alt={title} 
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </section>
  );
}
