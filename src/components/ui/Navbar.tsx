"use client";

import React, { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

    if (isMobile && latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false); // Close mobile menu when scrolling down
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { label: t('projects'), href: "/#projects" },
    { label: t('about'), href: "/#about" },
    { label: t('faq'), href: "/#faq" },
    { label: t('contact'), href: "/#contact" },
  ];

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-[110] pointer-events-none"
    >
      {/* Desktop Pill Version */}
      <div className="hidden lg:flex justify-center w-full pt-ds-lg pointer-events-auto">
        <header className="bg-bg-elevated/80 backdrop-blur-md border border-border flex items-center gap-ds-sm p-ds-xs rounded-full shadow-2xl">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-ds-sm group">
            <div
              className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold font-heading text-sm shadow-[0px_2px_10px_0px_rgba(224,64,251,0.4)]"
              style={{ backgroundImage: "linear-gradient(135deg, #e040fb 0%, #8b2fc9 55%, #00e5ff 100%)" }}
            >
              L
            </div>
            <span className="font-heading font-bold tracking-tight text-text-primary text-base group-hover:text-accent-pink transition-colors">
              Leonam.
            </span>
          </Link>

          {/* Separator */}
          <div className="h-5 w-px bg-border/50" />

          {/* Navigation Links */}
          <nav className="flex items-center gap-ds-xs">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href as any}
                className="px-ds-sm py-ds-xs text-sm font-light text-text-primary hover:bg-white/5 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Separator */}
          <div className="h-5 w-px bg-border/50" />

          {/* Status Indicator */}
          <div className="flex items-center gap-ds-xs px-ds-xs">
            <div className="relative flex h-ds-xs w-ds-xs">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#00c87a] opacity-40 animate-pulse"></span>
              <span className="relative inline-flex rounded-full h-ds-xs w-ds-xs bg-[#00c87a] shadow-[0px_0px_6px_0px_#00c87a]"></span>
            </div>
            <span className="text-[14px] text-text-secondary font-normal">{t('available')}</span>
          </div>
        </header>
      </div>

      {/* Mobile Version - Current Design */}
      <div className="lg:hidden w-full pointer-events-auto">
        <header className="w-full bg-bg-elevated/90 backdrop-blur-xl border-b border-border flex items-center justify-between px-ds-md py-ds-sm shadow-lg">
          {/* Left Side: Logo */}
          <Link href="/" className="flex items-center gap-ds-sm group" onClick={() => setMobileMenuOpen(false)}>
            <div
              className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold font-heading text-sm shadow-[0px_2px_10px_0px_rgba(224,64,251,0.4)]"
              style={{ backgroundImage: "linear-gradient(135deg, #e040fb 0%, #8b2fc9 55%, #00e5ff 100%)" }}
            >
              L
            </div>
            <span className="font-heading font-bold tracking-tight text-text-primary text-base group-hover:text-accent-pink transition-colors">
              Leonam.
            </span>
          </Link>

          {/* Hamburger Button (Mobile) */}
          <button
            className="p-2 text-text-primary hover:bg-white/5 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </header>


        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden w-full bg-bg-elevated border-b border-border shadow-xl overflow-hidden"
            >
              <nav className="flex flex-col py-ds-lg px-ds-md space-y-ds-xs">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href as any}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-ds-sm py-ds-lg text-base font-normal text-text-primary hover:bg-white/5 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px w-full bg-border/50 my-ds-xs" />
                <div className="flex items-center justify-between px-ds-sm py-ds-lg mt-ds-lg">
                  <div className="flex items-center gap-ds-xs">
                    <div className="relative flex h-ds-xs w-ds-xs">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#00c87a] opacity-40 animate-pulse"></span>
                      <span className="relative inline-flex rounded-full h-ds-xs w-ds-xs bg-[#00c87a] shadow-[0px_0px_6px_0px_#00c87a]"></span>
                    </div>
                    <span className="text-[14px] text-text-secondary font-normal">{t('available')}</span>
                  </div>
                  <div className="flex items-center bg-bg-subtle rounded-full border border-border/50 p-ds-xs">
                    <Link href={pathname as any} locale="en" className={cn("px-ds-md py-ds-xs text-xs font-heading font-bold rounded-full transition-colors", locale === 'en' ? "bg-accent-pink text-white" : "text-text-secondary hover:text-text-primary")} onClick={() => setMobileMenuOpen(false)}>EN</Link>
                    <Link href={pathname as any} locale="pt" className={cn("px-ds-md py-ds-xs text-xs font-heading font-bold rounded-full transition-colors", locale === 'pt' ? "bg-accent-pink text-white" : "text-text-secondary hover:text-text-primary")} onClick={() => setMobileMenuOpen(false)}>PT</Link>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
