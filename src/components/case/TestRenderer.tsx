import React from "react";
import { SkillTag } from "@/components/ui/skill-tag";

interface UsabilityFeedback {
  severity: "Crítico" | "Moderado" | "Baixo" | "Outro";
  title: string;
  finding: string;
  solution: string;
}

interface TestProps {
  id: string;
  phaseLabel: string;
  title: string;
  description: string;
  feedbacks: UsabilityFeedback[];
}

export function TestRenderer({
  id,
  phaseLabel,
  title,
  description,
  feedbacks,
}: TestProps) {
  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case "Crítico":
        return "text-accent-red bg-accent-red/10 border-accent-red/20 shadow-[0_0_10px_rgba(255,107,107,0.1)]";
      case "Moderado":
        return "text-accent-yellow bg-accent-yellow/10 border-accent-yellow/20";
      case "Baixo":
        return "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20";
      default:
        return "text-text-muted bg-bg-subtle border-border";
    }
  };

  return (
    <section id={id} className="pt-24 pb-20 border-b border-border">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
           <div className="bg-accent-green/10 px-3 py-1 rounded-full border border-accent-green/20">
             <span className="text-[12px] font-medium tracking-[2px] uppercase text-accent-green">
                {phaseLabel}
             </span>
           </div>
        </div>
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-6 leading-tight">{title}</h2>
        <p className="text-[18px] text-text-secondary max-w-[750px] leading-[1.6] font-light">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {feedbacks.map((item, idx) => (
          <div key={idx} className="p-8 md:p-10 rounded-2xl bg-bg-elevated border border-border shadow-sm group hover:border-accent-green/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-5 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-[12px] font-medium tracking-[1px] uppercase border ${getSeverityStyle(item.severity)}`}>
                {item.severity}
              </span>
              <h3 className="text-2xl font-heading font-bold text-text-primary tracking-tight">{item.title}</h3>
            </div>
            
            <p className="text-text-secondary text-[15px] font-light leading-relaxed mb-8">{item.finding}</p>
            
            <div className="bg-bg-subtle/50 p-6 rounded-2xl border border-border/50">
              <p className="text-text-primary font-light flex gap-3 text-[15px]">
                <span className="text-accent-green font-medium">Solução:</span> 
                <span className="text-text-secondary italic">{item.solution}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
