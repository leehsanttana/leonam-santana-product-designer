import React from "react";
import { Quote } from "lucide-react";

interface PersonaQuote {
  name: string;
  role: string;
  quote: string;
  needs: string[];
  pains: string[];
}

interface UserQuotesProps {
  id?: string;
  persona: PersonaQuote;
}

export function UserQuotesRenderer({ id, persona }: UserQuotesProps) {
  return (
    <section id={id} className="pt-24 pb-20 border-b border-border">
      <div className="bg-bg-elevated border border-border p-8 md:p-14 rounded-3xl shadow-xl">
        {/* Persona Header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-20 h-20 bg-bg-subtle rounded-3xl border border-border flex items-center justify-center text-4xl shadow-inner">
            👤
          </div>
          <div>
            <h3 className="text-3xl font-heading font-bold text-text-primary tracking-tight">{persona.name}</h3>
            <p className="text-accent-pink font-light tracking-wide uppercase text-sm mt-1">{persona.role}</p>
          </div>
        </div>

        {/* Quote Component */}
        <div className="relative mb-16 px-6 border-l-2 border-accent-pink/30">
          <Quote className="absolute -top-6 -left-2 w-10 h-10 text-accent-pink opacity-20 rotate-180" />
          <p className="text-xl md:text-2xl font-light text-text-primary italic leading-relaxed">
            "{persona.quote}"
          </p>
        </div>

        {/* Needs & Pains Grid */}
        <div className="grid md:grid-cols-2 gap-16 pt-12 border-t border-border/50">
          <div className="group">
            <h4 className="text-[12px] font-medium tracking-[2px] uppercase mb-6 flex items-center gap-3 text-text-muted group-hover:text-accent-green transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green shadow-[0_0_8px_rgba(48,209,88,0.6)]" />
              Necessidades
            </h4>
            <ul className="space-y-4">
              {persona.needs.map((need, idx) => (
                <li key={idx} className="flex gap-4 text-text-secondary text-[15px] font-light leading-relaxed">
                  <span className="text-accent-green opacity-40">→</span>
                  <span>{need}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group">
            <h4 className="text-[12px] font-medium tracking-[2px] uppercase mb-6 flex items-center gap-3 text-text-muted group-hover:text-accent-red transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red shadow-[0_0_8px_rgba(255,107,107,0.6)]" />
              Dores
            </h4>
            <ul className="space-y-4">
              {persona.pains.map((pain, idx) => (
                <li key={idx} className="flex gap-4 text-text-secondary text-[15px] font-light leading-relaxed">
                  <span className="text-accent-red opacity-40">×</span>
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
