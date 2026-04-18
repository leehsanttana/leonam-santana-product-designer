"use client";

import React from "react";
import Image from "next/image";
import { SkillTag } from "@/components/ui/skill-tag";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations('about');
  return (
    <section id="about" className="container mx-auto px-ds-sm max-w-[1440px] py-ds-lg lg:py-ds-3xl border-b border-border">
      <div className="grid lg:grid-cols-2 gap-ds-3xl items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] bg-bg-subtle overflow-hidden border border-border shadow-2xl relative z-10">
            <img
              src="/personal-photo.jpg"
              alt="Leonam Santana"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 to-transparent pointer-events-none" />
          </div>
          {/* Decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-cyan/20 rounded-full blur-3xl -z-0" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-pink/20 rounded-full blur-3xl -z-0" />
        </div>

        <div className="flex flex-col gap-ds-lg">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-text-primary tracking-tight">{t('sectionTitle')}</h2>
          <div className="space-y-ds-xs text-base md:text-lg text-text-secondary leading-relaxed font-light">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>

          <div className="flex flex-wrap gap-ds-xs mt-ds-sm">
            {t.raw('skills').map((skill: string) => (
              <SkillTag key={skill} variant="soft">{skill}</SkillTag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
