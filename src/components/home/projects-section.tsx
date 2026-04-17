"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const activeProject = PROJECTS.find(p => p.id === hoveredId);
  const t = useTranslations('projects');

  const handleNext = () => setMobileIndex((prev) => (prev + 1) % PROJECTS.length);
  const handlePrev = () => setMobileIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  const mobileProject = PROJECTS[mobileIndex];

  return (
    <section id="projects" className="container mx-auto px-4 max-w-[1440px] py-8 lg:py-32 border-b border-border">
      <div className="flex flex-col gap-12">
        <h2 className="text-[12px] font-medium tracking-[3px] uppercase text-text-muted">{t('sectionTitle')}</h2>

        <div className="flex flex-col lg:flex-row gap-24 items-start">
          {/* Desktop Projects List */}
          <div className="hidden lg:flex flex-1 flex-col w-full">
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group flex items-center justify-between py-10 border-b border-border hover:px-4 transition-all duration-500 overflow-hidden relative ${project.disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-8 md:gap-12 relative z-10">
                  <span className={`text-4xl md:text-6xl font-heading font-medium transition-colors ${hoveredId === project.id ? 'text-accent-pink' : 'text-text-muted/30'}`}>
                    {project.id}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-light text-text-secondary group-hover:text-text-primary transition-colors">
                      {t(`list.${project.slug}.type`)}
                    </span>
                    <h3 className="text-2xl md:text-[32px] font-heading font-bold text-text-primary">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border transition-all ${hoveredId === project.id ? 'border-accent-pink bg-accent-pink/10 shadow-[0_0_15px_rgba(224,64,251,0.3)]' : 'border-border'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={hoveredId === project.id ? 'translate-x-0.5 -translate-y-0.5' : ''}>
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Projects Slider */}
          <div className="block lg:hidden w-full relative">
            <div className="w-full flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <Link href={mobileProject.disabled ? "#" : mobileProject.href} className="block w-full group">
                    <div className="flex flex-col gap-6">
                      <div className="relative w-full aspect-[4/5] bg-bg-subtle rounded-[24px] overflow-hidden border border-border shadow-sm">
                        <img
                          src={mobileProject.image}
                          alt={mobileProject.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="text-[12px] font-medium tracking-wider text-accent-cyan uppercase">
                            {t(`list.${mobileProject.slug}.type`)}
                          </span>
                          <h3 className="text-2xl font-heading font-bold text-text-primary">
                            {mobileProject.title}
                          </h3>
                        </div>
                        {!mobileProject.disabled && (
                          <div className="w-10 h-10 shrink-0 rounded-full border border-border bg-bg-elevated flex items-center justify-center text-text-primary group-hover:border-accent-pink group-hover:bg-accent-pink/10 transition-all">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-accent-pink transition-colors">
                              <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-border bg-bg-elevated flex items-center justify-center text-text-primary hover:bg-white/5 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <div className="flex gap-2">
                  {PROJECTS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${idx === mobileIndex ? 'bg-accent-cyan' : 'bg-border'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-border bg-bg-elevated flex items-center justify-center text-text-primary hover:bg-white/5 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Project Viewer (Right Column) */}
          <div className="hidden lg:block w-[373px] h-[466px] shrink-0 sticky top-32">
            <div className={`w-full h-full rounded-[24px] bg-bg-elevated border transition-all duration-500 overflow-hidden flex items-center justify-center relative ${!hoveredId ? 'border-dashed border-border' : 'border-border shadow-2xl'}`}>
              <AnimatePresence mode="wait">
                {activeProject ? (
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 to-transparent" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-6"
                  >
                    <div className="w-16 h-16 bg-bg-subtle rounded-2xl flex items-center justify-center border border-border">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-text-muted">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                    <div className="text-center text-sm font-light text-text-muted leading-relaxed uppercase tracking-[1px]" dangerouslySetInnerHTML={{ __html: t.raw('hoverInstruction') }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
