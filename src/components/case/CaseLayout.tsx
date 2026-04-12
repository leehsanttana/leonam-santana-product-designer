"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface CaseLayoutProps {
  sections: Array<{ id: string; label: string; step: string }>;
  children: React.ReactNode;
  projectType: string;
  projectName: string;
}

export function CaseLayout({ sections, children, projectType, projectName }: CaseLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120, // Adjusted offset for fixed navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-[1440px] pt-32 pb-24">
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-[260px] shrink-0">
          <div className="sticky top-32">
            <div className="mb-6">
              <span className="text-sm font-light text-accent-pink mb-1 block">{projectType}</span>
              <h2 className="text-3xl font-heading font-bold text-text-primary tracking-tight">{projectName}</h2>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <h3 className="text-[12px] font-medium tracking-[2px] uppercase mb-6 text-text-muted">Seções</h3>
            <nav className="flex flex-col space-y-2">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    className={cn(
                      "group flex items-center gap-4 px-3 py-3 rounded-2xl transition-all duration-300 text-left",
                      isActive ? "bg-accent-cyan/10" : "hover:bg-white/5"
                    )}
                  >
                    {/* Bullet */}
                    <div className="flex-shrink-0 flex items-center justify-center w-2 h-4">
                      <div className={cn(
                        "rounded-full transition-all duration-300",
                        isActive ? "w-2 h-2 bg-accent-cyan shadow-[0px_0px_8px_rgba(0,229,255,0.6)]" : "w-1.5 h-1.5 bg-border group-hover:bg-text-secondary"
                      )} />
                    </div>

                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className={cn(
                        "text-[10px] font-medium tracking-[2px] uppercase",
                        isActive ? "text-accent-cyan" : "text-text-muted"
                      )}>
                        {section.step}
                      </span>
                      <span className={cn(
                        "text-[13px] font-light leading-snug whitespace-nowrap overflow-hidden text-ellipsis",
                        isActive ? "text-text-primary" : "text-text-secondary"
                      )}>
                        {section.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
