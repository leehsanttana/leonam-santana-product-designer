"use client";

import React, { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { CaseSubNavbar } from "./CaseSubNavbar";

export interface CaseLayoutProps {
  sections: Array<{ id: string; label: string; step: string; color?: string }>;
  children: React.ReactNode;
  projectType: string;
  projectName: string;
}

export function CaseLayout({ sections, children, projectType, projectName }: CaseLayoutProps) {
  const t = useTranslations('common');
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
    if (typeof window === 'undefined') return;

    const el = document.getElementById(id);
    if (el) {
      const isMobile = window.innerWidth < 1024;
      // On mobile, the project bar is always fixed at h-16 (64px).
      // If the global header is also visible (scrolling up), we need more offset.
      // But for the target landing, we'll use a conservative 120px to avoid overlap.
      const offset = isMobile ? 130 : 100;

      const targetPos = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Mobile Sticky Project Bar & Drawer */}
      <CaseSubNavbar
        sections={sections}
        activeSection={activeSection}
        projectName={projectName}
        projectType={projectType}
        onNavClick={handleNavClick}
      />

      <div className="container mx-auto px-4 sm:px-8 max-w-[1440px] pt-40 lg:pt-32 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          {/* Sidebar Navigation (Desktop Only) */}
          <aside className="hidden lg:block w-full lg:w-[260px] shrink-0">
            <div className="sticky top-32">
              {/* Desktop Back Button - Now in Sidebar */}
              <Button variant="ghost" size="default" asChild className="mb-8 gap-2 text-text-secondary hover:text-text-primary h-auto p-0 hover:bg-transparent -ml-1">
                <Link href="/">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  {t('backHome')}
                </Link>
              </Button>

              <div className="mb-6">
                <span className="text-sm font-light text-accent-pink mb-1 block">{projectType}</span>
                <h2 className="text-3xl font-heading font-bold text-text-primary tracking-tight">{projectName}</h2>
              </div>

              <div className="h-px w-full bg-border mb-8" />

              <h3 className="font-medium tracking-[2px] uppercase mb-6 text-text-muted">{t('sections')}</h3>
              <nav className="flex flex-col space-y-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  const activeColor = section.color || "#e040fb";

                  return (
                    <button
                      key={section.id}
                      onClick={() => handleNavClick(section.id)}
                      className={cn(
                        "group flex items-center gap-4 px-3 py-3 rounded-2xl transition-all duration-300 text-left",
                        isActive ? "bg-bg-elevated" : "hover:bg-white/5"
                      )}
                      style={isActive ? { backgroundColor: `color-mix(in srgb, ${activeColor} 8%, transparent)` } : {}}
                    >
                      {/* Bullet */}
                      <div className="flex-shrink-0 flex items-center justify-center w-2 h-4">
                        <div
                          className={cn(
                            "rounded-full transition-all duration-300",
                            isActive ? "w-2 h-2" : "w-1.5 h-1.5 bg-border group-hover:bg-text-secondary"
                          )}
                          style={isActive ? { backgroundColor: activeColor, boxShadow: `0px 0px 8px color-mix(in srgb, ${activeColor} 60%, transparent)` } : {}}
                        />
                      </div>

                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span
                          className={cn(
                            "text-[10px] font-medium tracking-[2px] uppercase",
                            !isActive && "text-text-muted"
                          )}
                          style={isActive ? { color: activeColor } : {}}
                        >
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
    </div>
  );
}
