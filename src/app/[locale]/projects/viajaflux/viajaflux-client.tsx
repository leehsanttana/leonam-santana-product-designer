"use client";

import React from "react";
import { CaseLayout } from "@/components/case/shared/CaseLayout";
import { CaseTitleHeader } from "@/components/case/shared/CaseTitleHeader";
import { ImageCard } from "@/components/case/shared/ImageCard";
import { DiscoverRenderer } from "@/components/case/renderers/DiscoverRenderer";
import { DefineRenderer } from "@/components/case/renderers/DefineRenderer";
import { SolutionRenderer } from "@/components/case/renderers/SolutionRenderer";
import { DataCard, DataGrid } from "@/components/case/shared/DataCard";
import { PHASE_COLORS } from "@/lib/phase-colors";
import { PROJECTS } from "@/data/projects";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export default function ViajafluxCase() {
  const t = useTranslations("viajaflux");
  const tc = useTranslations("common");
  const tp = useTranslations("projects");

  const sections = [
    { id: "discover", label: t("sections.discover"), step: tc("steps.discover"), color: PHASE_COLORS.discover },
    { id: "define", label: t("sections.define"), step: tc("steps.define"), color: PHASE_COLORS.define },
    { id: "solution", label: t("sections.solution"), step: tc("steps.solution"), color: PHASE_COLORS.solution },
  ];

  const metadata = [
    { label: t("metadata.role.label"), value: t("metadata.role.value") },
    { label: t("metadata.duration.label"), value: t("metadata.duration.value") },
    { label: t("metadata.platform.label"), value: t("metadata.platform.value") },
    { label: t("metadata.tools.label"), value: t("metadata.tools.value") },
  ];

  const skills = ["UX/UI", "Web App", "2024"];
  const heroImage = "/viajaflux/viajaflux-project-banner.jpg";

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

      {/* CONFIDENTIALITY NOTE */}
      <div className="bg-bg-elevated border border-border p-ds-md rounded-2xl mb-ds-xl">
        <p className="text-text-primary text-body-02 italic font-light">
          {t("confidentiality")}
        </p>
      </div>

      {/* 01. DESCOBRIR */}
      <DiscoverRenderer
        id="discover"
        title={t("discover.title")}
        description={t("discover.description")}
      >
        <div className="text-body-01 text-text-secondary max-w-[750px] space-y-6 mb-ds-xl leading-relaxed font-light">
          <p>{t("discover.p2")}</p>
          <p>{t("discover.p3")}</p>
        </div>

        <div className="space-y-ds-md">
          <ImageCard
            imageDescription={t("discover.images.homeBefore")}
            imageUrl="/viajaflux/viajaflux-pagina-inicial-antes.png"
            alt="Página Inicial Antes"
          />
          <ImageCard
            imageDescription={t("discover.images.resultsBefore")}
            imageUrl="/viajaflux/viajaflux-pagina-resultados-antes.png"
            alt="Página de Resultados Antes"
          />
        </div>
      </DiscoverRenderer>

      {/* 02. DEFINIR */}
      <DefineRenderer
        id="define"
        title={t("define.title")}
        description={t("define.description")}
      >
        <div className="text-body-01 text-text-secondary max-w-[750px] space-y-6 mb-ds-xl leading-relaxed font-light">
          <p>{t("define.p2")}</p>
        </div>

        <DataGrid columns={2}>
          <DataCard
            content={t("define.goals.colors")}
            color={PHASE_COLORS.define}
          />
          <DataCard
            content={t("define.goals.hierarchy")}
            color={PHASE_COLORS.define}
          />
          <DataCard
            content={t("define.goals.spacing")}
            color={PHASE_COLORS.define}
          />
          <DataCard
            content={t("define.goals.contrast")}
            color={PHASE_COLORS.define}
          />
        </DataGrid>

        <div className="text-body-01 text-text-secondary max-w-[750px] leading-relaxed font-light">
          <p>{t("define.p3")}</p>
        </div>
      </DefineRenderer>

      {/* 03. SOLUÇÃO */}
      <SolutionRenderer
        id="solution"
        title={t("solution.title")}
        description={t("solution.description")}
      >
        {/* HOMEPAGE AFTER */}
        <div className="space-y-ds-md mt-ds-md">
          <ImageCard
            imageDescription={t("solution.homeAfter.caption")}
            imageUrl="/viajaflux/viajaflux-pagina-inicial-depois.jpg"
            alt="Página Inicial Depois"
          />
          <DataGrid columns={2}>
            <DataCard
              content={t("solution.homeAfter.card1")}
              color={PHASE_COLORS.solution}
            />
            <DataCard
              content={t("solution.homeAfter.card2")}
              color={PHASE_COLORS.solution}
            />
          </DataGrid>
        </div>

        {/* RESULTS AFTER */}
        <div className="space-y-ds-md mt-ds-xl">
          <ImageCard
            imageDescription={t("solution.resultsAfter.caption")}
            imageUrl="/viajaflux/viajaflux-resultados-depois.png"
            alt="Página de Resultados Depois"
          />
          <div className="grid gap-ds-md grid-cols-1 md:grid-cols-2">
            <DataCard
              content={t("solution.resultsAfter.card1")}
              color={PHASE_COLORS.solution}
            />
            <DataCard
              content={t("solution.resultsAfter.card2")}
              color={PHASE_COLORS.solution}
            />
            <div className="md:col-span-2">
              <DataCard
                content={t("solution.resultsAfter.card3")}
                color={PHASE_COLORS.solution}
              />
            </div>
          </div>
        </div>
      </SolutionRenderer>

      {/* NEXT PROJECT BANNER */}
      {(() => {
        const currentIndex = PROJECTS.findIndex(p => p.title === "Viajaflux");
        const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

        return (
          <div className="pt-ds-2xl">
            <span className="text-[12px] font-medium tracking-[3px] uppercase text-text-muted mb-ds-lg block">
              {tc("nextProject")}
            </span>

            <Link
              href={nextProject.href as any}
              className={cn(
                "group block w-full",
                nextProject.disabled && "pointer-events-none opacity-40"
              )}
            >
              <div className="flex flex-col gap-ds-md">
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
