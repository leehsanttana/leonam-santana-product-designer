"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { RetroGrid } from "@/components/ui/retro-grid";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function HeroSection() {
  const t = useTranslations('hero');
  return (
    <section id="hero" className="container mx-auto px-4 sm:px-8 max-w-[1440px] pt-48 pb-40 border-b border-border relative overflow-hidden">
      <RetroGrid />
      <div className="flex flex-col md:flex-row justify-between mb-20 text-[12px] font-medium tracking-[2px] uppercase text-text-muted">
        <div className="flex items-center gap-4">
          <span>{t('location')}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{t('since')}</span>
        </div>
      </div>

      <h1 className="text-7xl md:text-[128px] font-heading font-bold tracking-[-3px] mb-20 text-text-primary leading-[0.9]">
        {t('title1')} <br />
        {t('title2')}<span className="text-accent-cyan">.</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 justify-between items-end max-w-5xl">
        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light max-w-2xl" dangerouslySetInnerHTML={{ __html: t.raw('subtitle') }} />
        <div className="flex items-center gap-4">
          <Link href="/#projects">
            <Button size="lg" className="rounded-full shadow-[0px_4px_20px_0px_rgba(224,64,251,0.2)]">
              {t('viewProjects')}
            </Button>
          </Link>
          <Button variant="secondary" size="lg" className="rounded-full" asChild>
            <a href="mailto:leonamsanttana@gmail.com">
              {t('contact')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
