import React from "react";
import { SkillTag } from "@/components/ui/skill-tag";

interface Metric {
  label: string;
  before?: string;
  after: string;
  improvement?: string;
}

interface ResultsProps {
  id: string;
  phaseLabel: string;
  title: string;
  description: string;
  metrics: Metric[];
}

export function ResultsRenderer({
  id,
  phaseLabel,
  title,
  description,
  metrics,
}: ResultsProps) {
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
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-6 leading-tight">{title}</h2>
        <p className="text-[18px] text-text-secondary max-w-[750px] leading-[1.6] font-light">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className="p-10 rounded-3xl bg-bg-elevated border border-border shadow-xl flex flex-col justify-between group hover:border-accent-cyan/40 transition-all">
            <div>
              {metric.before && (
                <div className="text-[12px] text-text-muted font-medium tracking-[1px] uppercase mb-1 line-through opacity-60">
                  Antes: {metric.before}
                </div>
              )}
              <div className="flex items-baseline gap-3 flex-wrap mb-6">
                <span className="text-5xl md:text-6xl font-heading font-bold text-accent-cyan tracking-tighter shadow-accent-cyan/10 group-hover:scale-105 transition-transform">
                  {metric.after}
                </span>
                {metric.improvement && (
                  <span className="text-[13px] font-bold text-accent-green bg-accent-green/10 px-3 py-1 rounded-full border border-accent-green/20">
                    +{metric.improvement}
                  </span>
                )}
              </div>
            </div>
            <p className="text-text-primary font-medium text-lg leading-tight">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
