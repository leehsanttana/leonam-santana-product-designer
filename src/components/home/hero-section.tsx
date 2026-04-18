"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { RetroGrid } from "@/components/ui/retro-grid";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const cvLink = locale === 'en' ? '/leonam_santana_resume.pdf' : '/leonam_santana_curriculo.pdf';

  return (
    <section id="hero" className="container mx-auto px-ds-sm max-w-[1440px] min-h-screen py-ds-2xl flex flex-col justify-center border-b border-border relative overflow-hidden">
      <RetroGrid />
      <div className="relative z-10 w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between mb-ds-xl text-[12px] font-medium tracking-[2px] uppercase text-text-muted">
          <div className="flex items-center gap-ds-sm">
            <span>{t('location')}</span>
          </div>
          <div className="flex items-center gap-ds-sm">
            <span>{t('since')}</span>
          </div>
        </div>

        <h1 className="text-7xl md:text-[128px] font-heading font-bold tracking-[-3px] mb-ds-xl text-text-primary leading-[0.9]">
          {t('title1')} <br />
          {t('title2')}<span className="text-accent-cyan">.</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-ds-lg justify-between items-end max-w-5xl">
          <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-light max-w-2xl" dangerouslySetInnerHTML={{ __html: t.raw('subtitle') }} />
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-ds-sm w-full lg:w-auto mt-ds-lg lg:mt-0">
            <Link href="/#projects" className="w-full md:w-auto">
              <Button size="lg" className="w-full md:w-auto rounded-full shadow-[0px_4px_20px_0px_rgba(224,64,251,0.2)]">
                {t('viewProjects')}
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full md:w-auto rounded-full" asChild>
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                download={`CV_Leonam_Santana_${locale.toUpperCase()}.pdf`}
                className="w-full justify-center"
              >
                {t('resume')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
