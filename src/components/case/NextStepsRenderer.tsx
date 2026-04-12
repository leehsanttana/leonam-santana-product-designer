import React from "react";
import { SkillTag } from "@/components/ui/skill-tag";

interface Step {
  title: string;
  description: string;
}

interface NextStepsProps {
  id: string;
  phaseLabel: string;
  title: string;
  description: string;
  steps: Step[];
}

export function NextStepsRenderer({
  id,
  phaseLabel,
  title,
  description,
  steps,
}: NextStepsProps) {
  return (
    <section id={id} className="pt-20 pb-16">
      <div className="mb-12">
        <SkillTag variant="secondary" className="mb-6 font-mono tracking-widest uppercase text-[10px]">
          {phaseLabel}
        </SkillTag>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-foreground/80 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm flex items-start gap-6 transition-all hover:bg-secondary/20"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              {idx + 1}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
