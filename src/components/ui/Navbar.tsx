"use client";

import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="fixed top-8 left-0 w-full z-50 flex justify-center px-4">
      <header className="bg-bg-elevated/80 backdrop-blur-md border border-border flex items-center gap-4 px-6 py-3 rounded-full shadow-2xl">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-4 group">
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
        <nav className="flex items-center gap-1">
          {[
            { label: t('projects'), href: "/#projects" },
            { label: t('about'), href: "/#about" },
            { label: t('faq'), href: "/#faq" },
            { label: t('contact'), href: "/#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href as any}
              className="px-4 py-1.5 text-sm font-light text-text-primary hover:bg-white/5 rounded-full transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Separator */}
        <div className="h-5 w-px bg-border/50" />

        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2 px-2">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00c87a] opacity-40 animate-pulse"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c87a] shadow-[0px_0px_6px_0px_#00c87a]"></span>
          </div>
          <span className="text-[14px] text-text-secondary font-normal">{t('available')}</span>
        </div>
      </header>
    </div>
  );
}
