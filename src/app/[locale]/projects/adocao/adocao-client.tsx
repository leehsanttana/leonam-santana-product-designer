"use client";

import React from "react";
import { CaseLayout } from "@/components/case/shared/CaseLayout";
import { CaseTitleHeader } from "@/components/case/shared/CaseTitleHeader";
import { cn } from "@/lib/utils";
import { ImageCard } from "@/components/case/shared/ImageCard";
import { DiscoverRenderer } from "@/components/case/renderers/DiscoverRenderer";
import { DefineRenderer } from "@/components/case/renderers/DefineRenderer";
import { IdeaRenderer } from "@/components/case/renderers/IdeaRenderer";
import { SolutionRenderer } from "@/components/case/renderers/SolutionRenderer";
import { NextStepsRenderer } from "@/components/case/renderers/NextStepsRenderer";
import { DataCard, DataGrid } from "@/components/case/shared/DataCard";
import { BenchmarkingTable } from "@/components/case/shared/BenchmarkingTable";
import { POVCard, HowMightWeCard } from "@/components/case/shared/ProblemComponents";
import { FeatureCard } from "@/components/case/shared/FeatureCard";
import { TypographyCard } from "@/components/case/shared/TypographyCard";
import { ColorPaletteCard } from "@/components/case/shared/ColorPaletteCard";
import { PrototypeCard } from "@/components/case/shared/PrototypeCard";
import { PHASE_COLORS } from "@/lib/phase-colors";
import { PROJECTS } from "@/data/projects";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function AdocaoCase() {
  const t = useTranslations("adocao");
  const tc = useTranslations("common");
  const tp = useTranslations("projects");

  const sections = [
    { id: "discover", label: t("sections.discover"), step: "DESCOBRIR", color: PHASE_COLORS.discover },
    { id: "define", label: t("sections.define"), step: "DEFINIR", color: PHASE_COLORS.define },
    { id: "idealize", label: t("sections.idealize"), step: "IDEALIZAR", color: PHASE_COLORS.idealize },
    { id: "solution", label: t("sections.solution"), step: "SOLUÇÃO", color: PHASE_COLORS.solution },
    { id: "next-steps", label: t("sections.nextSteps"), step: "PRÓXIMOS PASSOS", color: PHASE_COLORS.neutral },
  ];

  const metadata = [
    { label: t("metadata.role.label"), value: t("metadata.role.value") },
    { label: t("metadata.duration.label"), value: t("metadata.duration.value") },
    { label: t("metadata.platform.label"), value: t("metadata.platform.value") },
    { label: t("metadata.tools.label"), value: t("metadata.tools.value") },
  ];

  const skills = ["UX/UI", "Research", "Mobile App", "2025"];
  const heroImage = "/Adocao-case/adocao-banner.jpg";

  return (
    <CaseLayout
      projectName={t("projectName")}
      projectType={t("projectType")}
      sections={sections}
    >
      {/* HEADER SECTION */}
      <CaseTitleHeader
        title={t("title")}
        description={t("subtitle")}
        skills={skills}
        metrics={metadata}
        heroImage={heroImage}
      />

      {/* VISÃO GERAL */}
      <section className="mb-8 py-8 border-b border-border">
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">{t("overview.title")}</h2>
        <div className="text-body-01 text-text-secondary max-w-[750px] space-y-6">
          <p>{t("overview.p1")}</p>
          <p>{t("overview.p2")}</p>
        </div>
      </section>

      {/* 01. DESCOBRIR */}
      <DiscoverRenderer
        id="discover"
        title={t("discover.title")}
        description={t("discover.description")}
      >
        <DataGrid columns={3}>
          <DataCard
            title={t("discover.cards.genZ.title")}
            content={t("discover.cards.genZ.content")}
          />
          <DataCard
            title={t("discover.cards.cats.title")}
            content={t("discover.cards.cats.content")}
          />
          <DataCard
            title={t("discover.cards.radar.title")}
            content={t("discover.cards.radar.content")}
          />
        </DataGrid>

        <p className="text-body-01 text-text-secondary max-w-[750px] mb-6">
          {t("discover.stats.behavior.content")}
        </p>

        <DataGrid columns={3}>
          <DataCard
            value={t("discover.stats.behavior.value")}
            content={t("discover.stats.behavior.content")}
          />
          <DataCard
            value={t("discover.stats.change.value")}
            content={t("discover.stats.change.content")}
          />
          <DataCard
            value={t("discover.stats.total.value")}
            content={t("discover.stats.total.content")}
          />
        </DataGrid>

        <p className="text-body-01 text-text-secondary max-w-[750px] mb-6">
          {t("discover.benchmarkingTitle")}
        </p>

        <BenchmarkingTable
          columns={["Hyppet", "TiuTiu", "Petfinder", "weRescue"]}
          rows={[
            { type: "category", label: t("discover.benchmarking.category1") },
            {
              type: "content",
              cells: [
                { text: t("discover.benchmarking.hyppet.0") },
                { text: t("discover.benchmarking.tiutiu.0") },
                { text: t("discover.benchmarking.petfinder.0") },
                { text: t("discover.benchmarking.werescue.0") }
              ]
            },
            {
              type: "content",
              cells: [
                { text: t("discover.benchmarking.hyppet.1") },
                { text: t("discover.benchmarking.tiutiu.1") },
                { text: t("discover.benchmarking.petfinder.1") },
                { text: t("discover.benchmarking.werescue.1") }
              ]
            },
            {
              type: "content",
              cells: [
                { text: t("discover.benchmarking.hyppet.2") },
                { text: t("discover.benchmarking.tiutiu.2") },
                { text: t("discover.benchmarking.petfinder.2") },
                { text: t("discover.benchmarking.werescue.2") }
              ]
            },
            { type: "category", label: t("discover.benchmarking.positives") },
            {
              type: "content",
              cells: [
                { text: t("discover.benchmarking.positivesContent.0.0"), sentiment: "positive" },
                { text: t("discover.benchmarking.positivesContent.0.1"), sentiment: "positive" },
                { text: t("discover.benchmarking.positivesContent.0.2"), sentiment: "positive" },
                { text: t("discover.benchmarking.positivesContent.0.3"), sentiment: "positive" }
              ]
            },
            {
              type: "content",
              cells: [
                { text: t("discover.benchmarking.positivesContent.1.0"), sentiment: "positive" },
                { text: t("discover.benchmarking.positivesContent.1.1"), sentiment: "positive" },
                { text: t("discover.benchmarking.positivesContent.1.2"), sentiment: "positive" },
                { text: t("discover.benchmarking.positivesContent.1.3"), sentiment: "positive" }
              ]
            },
            {
              type: "content",
              cells: [
                { text: t("discover.benchmarking.positivesContent.2.0"), sentiment: "positive" },
                { text: t("discover.benchmarking.positivesContent.2.1"), sentiment: "positive" },
                { text: t("discover.benchmarking.positivesContent.2.2"), sentiment: "positive" },
                { text: t("discover.benchmarking.positivesContent.2.3"), sentiment: "positive" }
              ]
            },
            { type: "category", label: t("discover.benchmarking.negatives") },
            {
              type: "content",
              cells: [
                { text: t("discover.benchmarking.negativesContent.0.0"), sentiment: "negative" },
                { text: t("discover.benchmarking.negativesContent.0.1"), sentiment: "negative" },
                { text: t("discover.benchmarking.negativesContent.0.2"), sentiment: "negative" },
                { text: t("discover.benchmarking.negativesContent.0.3"), sentiment: "negative" }
              ]
            },
            {
              type: "content",
              cells: [
                { text: t("discover.benchmarking.negativesContent.1.0"), sentiment: "negative" },
                { text: t("discover.benchmarking.negativesContent.1.1"), sentiment: "negative" },
                { text: t("discover.benchmarking.negativesContent.1.2"), sentiment: "negative" },
                { text: t("discover.benchmarking.negativesContent.1.3"), sentiment: "negative" }
              ]
            },
            {
              type: "content",
              cells: [
                { text: t("discover.benchmarking.negativesContent.2.0"), sentiment: "negative" },
                { text: t("discover.benchmarking.negativesContent.2.1"), sentiment: "negative" },
                { text: t("discover.benchmarking.negativesContent.2.2"), sentiment: "negative" },
                { text: t("discover.benchmarking.negativesContent.2.3"), sentiment: "negative" }
              ]
            }
          ]}
        />
      </DiscoverRenderer>

      {/* 02. DEFINIR */}
      <DefineRenderer
        id="define"
        title={t("define.title")}
        description={t("define.description")}
      >
        <div className="grid grid-cols-1 gap-4 mb-6">
          <HowMightWeCard question={t("define.hmw.0")} />
          <HowMightWeCard question={t("define.hmw.1")} />
          <HowMightWeCard question={t("define.hmw.2")} />
        </div>

        <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("define.povTitle")}</h3>
        <p className="text-body-01 text-text-secondary max-w-[750px] mb-6">
          {t("define.povDesc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <POVCard quote={t("define.povs.0")} />
          <POVCard quote={t("define.povs.1")} />
          <POVCard quote={t("define.povs.2")} />
          <POVCard quote={t("define.povs.3")} />
          <POVCard className="md:col-span-2" quote={t("define.povs.4")} />
        </div>
      </DefineRenderer>

      {/* 03. IDEALIZAR */}
      <IdeaRenderer
        id="idealize"
        title={t("idealize.title")}
        description={t("idealize.description")}
      >
        <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("idealize.mvpTitle")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title={t("idealize.features.match.title")}
            content={t("idealize.features.match.content")}
          />
          <FeatureCard
            title={t("idealize.features.followUp.title")}
            content={t("idealize.features.followUp.content")}
          />
          <FeatureCard
            title={t("idealize.features.guide.title")}
            content={t("idealize.features.guide.content")}
          />
          <FeatureCard
            title={t("idealize.features.map.title")}
            content={t("idealize.features.map.content")}
          />
        </div>
      </IdeaRenderer>

      {/* 04. SOLUÇÃO */}
      <SolutionRenderer
        id="solution"
        title={t("solution.title")}
        description={t("solution.description")}
      >
        <div>
          <ImageCard
            imageDescription={t("solution.ia.title")}
            imageUrl="/Adocao-case/Arquitetura da informação da apliação..jpg"
            alt="Arquitetura da Informação"
            textDetails={t("solution.ia.desc")}
          />
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("solution.flows.title")}</h3>
          <p className="text-text-secondary mb-6 font-light">{t("solution.flows.intro")}</p>
          <div className="grid grid-cols-1 gap-8">
            <ImageCard
              imageDescription={t("solution.flows.flow1.title")}
              imageUrl="/Adocao-case/Userflow - Login + Match de adoção..jpg"
              alt="Userflow 1"
              textDetails={t("solution.flows.flow1.desc")}
            />
            <ImageCard
              imageDescription={t("solution.flows.flow2.title")}
              imageUrl="/Adocao-case/Userflow - Processo de adoção..jpg"
              alt="Userflow 2"
              textDetails={t("solution.flows.flow2.desc")}
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("solution.building.title")}</h3>
          <p className="text-text-secondary mb-6 font-light">{t("solution.building.intro")}</p>
          <div className="grid grid-cols-1 gap-8">
            <ImageCard
              imageDescription={t("solution.building.lofi.title")}
              imageUrl="/Adocao-case/lofi.jpg"
              alt="lo-fi design"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("solution.typography.title")}</h3>
          <p className="text-text-secondary mb-6 font-light">{t("solution.typography.intro")}</p>
          <TypographyCard />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("solution.colors.title")}</h3>
          <p className="text-text-secondary mb-6 font-light">{t("solution.colors.intro")}</p>
          <ColorPaletteCard />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("solution.components.title")}</h3>
          <ImageCard
            imageDescription={t("solution.components.title")}
            imageUrl="/Adocao-case/Components.jpg"
            alt="Compnentes"
          />
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <h3 className="text-3xl font-heading font-bold text-text-primary mb-4">{t("solution.result.title")}</h3>
          <div className="text-body-01 text-text-secondary max-w-[850px] space-y-6 mb-6">
            <p>{t("solution.result.p1")}</p>
            <p>{t("solution.result.p2")}</p>
          </div>

          <div className="space-y-12">
            <ImageCard
              imageDescription={t("solution.result.mockup1")}
              imageUrl="/Adocao-case/Mockups de Onbarding e tela te login.jpg"
              alt="Onboarding e Login"
            />

            <ImageCard
              imageDescription={t("solution.result.mockup2.title")}
              imageUrl="/Adocao-case/Mockups Assistente de adoção.jpg"
              alt="Assistente de Adoção"
              textDetails={t("solution.result.mockup2.desc")}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageCard
                imageDescription={t("solution.result.mockup3.title")}
                imageUrl="/Adocao-case/Home inicial + Tarefas diárias.jpg"
                alt="Home e Tarefas"
                textDetails={t("solution.result.mockup3.desc")}
              />
              <ImageCard
                imageDescription={t("solution.result.mockup4.title")}
                imageUrl="/Adocao-case/Guia de posse.jpg"
                alt="Guia de Posse"
                textDetails={t("solution.result.mockup4.desc")}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageCard
                imageDescription={t("solution.result.mockup5.title")}
                imageUrl="/Adocao-case/Lista de Matches.jpg"
                alt="Lista de Matches"
                textDetails={t("solution.result.mockup5.desc")}
              />
              <ImageCard
                imageDescription={t("solution.result.mockup6.title")}
                imageUrl="/Adocao-case/Mapa de eventos.jpg"
                alt="Mapa de Eventos"
                textDetails={t("solution.result.mockup6.desc")}
              />
            </div>

            <PrototypeCard
              title={t("solution.prototype.title")}
              embedUrl="https://embed.figma.com/proto/hRJf2wzqCmjWKiLJTTIwR6/Adoc%C3%A3o?node-id=56-725&p=f&viewport=201%2C229%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=293%3A3362&page-id=0%3A1&embed-host=share"
              textDetails={t("solution.prototype.desc")}
            />
          </div>
        </div>
      </SolutionRenderer>

      {/* PRÓXIMOS PASSOS */}
      <NextStepsRenderer
        id="next-steps"
        title={t("nextSteps.title")}
        description={t("nextSteps.description")}
      >
        <div className="space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="p-4 md:p-6 rounded-2xl bg-bg-elevated border border-border flex gap-4 md:gap-6 items-start">
              <span className="text-accent-cyan text-xl md:text-2xl font-heading font-bold">0{i + 1}</span>
              <div>
                <h4 className="text-text-primary text-base md:text-lg font-medium mb-1">{t(`nextSteps.steps.${i}.title`)}</h4>
                <p className="text-text-secondary font-light text-[14px] md:text-base leading-relaxed">{t(`nextSteps.steps.${i}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </NextStepsRenderer>

      {/* NEXT PROJECT BANNER */}
      {(() => {
        const currentIndex = PROJECTS.findIndex(p => p.title === "Adocão");
        const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

        return (
          <div className="mt-20 border-t border-border pt-12">
            <span className="text-[12px] font-medium tracking-[3px] uppercase text-text-muted mb-8 block">
              {tc("nextProject")}
            </span>

            <Link
              href={nextProject.href as any}
              className={cn(
                "group block w-full",
                nextProject.disabled && "pointer-events-none opacity-40"
              )}
            >
              <div className="flex flex-col gap-6">
                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-bg-subtle rounded-[24px] overflow-hidden border border-border">
                  <img
                    src={nextProject.imageAlt}
                    alt={nextProject.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent" />
                </div>

                {/* Content Below */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-medium tracking-wider text-accent-pink uppercase">
                      {tp(`list.${nextProject.slug}.type`)}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
                      {nextProject.title}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-full border border-border bg-bg-elevated flex items-center justify-center text-text-primary group-hover:border-accent-pink group-hover:bg-accent-pink/10 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-accent-pink transition-colors">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })()}
    </CaseLayout>
  );
}

