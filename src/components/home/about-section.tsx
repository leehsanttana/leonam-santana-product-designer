"use client";

import React from "react";
import Image from "next/image";
import { SkillTag } from "@/components/ui/skill-tag";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-8 max-w-[1440px] py-40 border-b border-border">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] bg-bg-subtle overflow-hidden border border-border shadow-2xl relative z-10">
            <Image
              src="/personal photo.jpg"
              alt="Leonam Santana"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 to-transparent pointer-events-none" />
          </div>
          {/* Decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-cyan/20 rounded-full blur-3xl -z-0" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-pink/20 rounded-full blur-3xl -z-0" />
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-text-primary tracking-tight">Sobre Mim</h2>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-light">
            <p>
              Sou o Leonam, um Product Designer que une a visão estratégica do design com a pragmática do desenvolvimento front-end.
            </p>
            <p>
              Foco em processos ágeis e assertivos, garantindo que cada pixel tenha um propósito funcional e que a transição do design para a engenharia seja impecável.
            </p>
            <p>Sou um apaixonado por tecnologia, que curte entender de tudo um pouco, desde o design até o desenvolvimento. Amo jogos, esportes e tudo que envolve criatividade e inovação.</p>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {["UI Design", "Figma", "Design Systems", "Prototyping", "Acessibility", "UX Research", "React", "Next.js"].map(skill => (
              <SkillTag key={skill} variant="soft">{skill}</SkillTag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
