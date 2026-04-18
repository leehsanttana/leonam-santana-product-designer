"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";

interface CaseSubNavbarProps {
  sections: Array<{ id: string; label: string; step: string; color?: string }>;
  activeSection: string;
  projectName: string;
  projectType: string;
  onNavClick: (id: string) => void;
}

export function CaseSubNavbar({
  sections,
  activeSection,
  projectName,
  projectType,
  onNavClick,
}: CaseSubNavbarProps) {
  const t = useTranslations("common");
  const [isOpen, setIsOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const { scrollY } = useScroll();

  // Sync scroll behavior with global Navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHeaderHidden(true);
    } else {
      setHeaderHidden(false);
    }
  });

  const currentSection = sections.find((s) => s.id === activeSection) || sections[0];
  const activeColor = currentSection?.color || "#e040fb";

  return (
    <>
      {/* 1. Persistent Project Bar (Mobile Only) */}
      <motion.div
        initial={false}
        animate={{
          top: headerHidden ? 0 : 73,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden fixed left-0 w-full z-[100] bg-bg-elevated border-b border-border shadow-xl h-16 flex items-center"
      >
        <div className="container px-ds-md flex items-center justify-between">
          {/* Left: Back Arrow */}
          <Link
            href="/"
            className="hover:bg-white/5 text-text-secondary transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>

          {/* Center: Active Session Name */}
          <div className="flex items-center gap-ds-md overflow-hidden px-ds-sm">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{
                backgroundColor: activeColor,
                boxShadow: `0px 0px 8px color-mix(in srgb, ${activeColor} 60%, transparent)`
              }}
            />
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-text-primary truncate">
              {currentSection?.step}
            </span>
          </div>

          {/* Right: Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="hover:bg-white/5 text-text-secondary transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.div>

      {/* 2. Expanded Sidebar Overlay (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[130] bg-background/95 backdrop-blur-xl lg:hidden flex flex-col"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-ds-lg py-ds-md border-b border-border bg-bg-elevated">
              <div className="flex flex-col">
                <span className="text-[10px] font-medium tracking-[2.5px] uppercase text-accent-pink leading-none mb-1">
                  {projectType}
                </span>
                <h2 className="text-xl font-heading font-bold text-text-primary truncate max-w-[200px]">
                  {projectName}
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-border/20 text-text-primary"
              >
                <X size={24} />
              </button>
            </div>

            {/* Sections List (Desktop Style Sync) */}
            <div className="flex-1 overflow-y-auto px-ds-md py-ds-xl space-y-ds-lg">
              <div>
                <h3 className="font-medium tracking-[2px] uppercase mb-ds-md text-text-muted px-ds-xs">{t("sections")}</h3>
                <nav className="flex flex-col space-y-ds-md">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    const sectionColor = section.color || "#e040fb";

                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          onNavClick(section.id);
                          setIsOpen(false);
                        }}
                        className={cn(
                          "group flex items-center gap-ds-sm px-ds-sm py-ds-sm rounded-2xl transition-all duration-300 text-left",
                          isActive ? "bg-bg-elevated shadow-lg" : "hover:bg-white/5"
                        )}
                        style={isActive ? { backgroundColor: `color-mix(in srgb, ${sectionColor} 12%, #1a1a1a)` } : {}}
                      >
                        {/* Bullet */}
                        <div className="flex-shrink-0 flex items-center justify-center w-3 h-4">
                          <div
                            className={cn(
                              "rounded-full transition-all duration-300",
                              isActive ? "w-2.5 h-2.5" : "w-1.5 h-1.5 bg-border group-hover:bg-text-secondary"
                            )}
                            style={isActive ? { backgroundColor: sectionColor, boxShadow: `0px 0px 8px color-mix(in srgb, ${sectionColor} 60%, transparent)` } : {}}
                          />
                        </div>

                        <div className="flex flex-col gap-ds-xs min-w-0">
                          <span
                            className={cn(
                              "text-[10px] font-medium tracking-[2px] uppercase",
                              !isActive && "text-text-muted"
                            )}
                            style={isActive ? { color: sectionColor } : {}}
                          >
                            {section.step}
                          </span>
                          <span className={cn(
                            "text-base font-light leading-snug truncate",
                            isActive ? "text-text-primary font-medium" : "text-text-secondary"
                          )}>
                            {section.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Footer / Back link */}
            <div className="p-ds-lg border-t border-border bg-bg-elevated/50">
              <Link
                href="/"
                className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                <ArrowLeft size={18} />
                {t("backToProjects")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
