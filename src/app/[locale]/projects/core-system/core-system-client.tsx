"use client";

import React from "react";
import { CaseLayout } from "@/components/case/shared/CaseLayout";
import { CaseTitleHeader } from "@/components/case/shared/CaseTitleHeader";
import { cn } from "@/lib/utils";
import { ImageCard } from "@/components/case/shared/ImageCard";
import { VideoCard } from "@/components/case/shared/VideoCard";
import { DiscoverRenderer } from "@/components/case/renderers/DiscoverRenderer";
import { DefineRenderer } from "@/components/case/renderers/DefineRenderer";
import { SolutionRenderer } from "@/components/case/renderers/SolutionRenderer";
import { ResultsRenderer } from "@/components/case/renderers/ResultsRenderer";
import { NextStepsRenderer } from "@/components/case/renderers/NextStepsRenderer";
import { DataCard, DataGrid } from "@/components/case/shared/DataCard";
import { PHASE_COLORS } from "@/lib/phase-colors";
import { PROJECTS } from "@/data/projects";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

function NumberedContentCard({ number, text, colorClass = "border-border", bgClass = "bg-bg-elevated" }: { number: string, text: string, colorClass?: string, bgClass?: string }) {
  return (
    <div className={`p-4 rounded-2xl ${bgClass} border ${colorClass} flex flex-col md:flex-row gap-4 items-start md:items-center w-full`}>
      <span className="text-[28px] font-heading font-bold leading-none shrink-0 text-text-muted">{number}</span>
      <p className="font-light text-[16px] leading-[28px] text-text-primary flex-1">
        {text}
      </p>
    </div>
  );
}

function ColoredContentCard({ text, colorClass, bgClass, label }: { text: string, colorClass: string, bgClass: string, label?: string }) {
  return (
    <div className={`p-4 rounded-2xl ${bgClass} border ${colorClass} w-full flex gap-4 items-start`}>
      {label && <span className={`text-4xl font-heading font-bold leading-none shrink-0 opacity-0`}>{label}</span>}
      <p className="font-light text-base leading-7 text-text-primary flex-1">
        {text}
      </p>
    </div>
  );
}

function ResultListItem({ text, type }: { text: string; type: "improvement" | "attention" }) {
  return (
    <li className="flex items-start gap-3">
      {type === "improvement" ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1 text-accent-green">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1 text-accent-red">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      )}
      <span className={`text-base md:text-[18px] leading-[30px] font-normal ${type === "improvement" ? "text-accent-green" : "text-accent-red"}`}>
        {text}
      </span>
    </li>
  );
}

export default function CoreSystemCase() {
  const t = useTranslations("core-system");
  const tc = useTranslations("common");
  const tp = useTranslations("projects");

  const sections = [
    { id: "discover", label: t("sections.discover"), step: tc("steps.discover"), color: PHASE_COLORS.discover },
    { id: "define", label: t("sections.define"), step: tc("steps.define"), color: PHASE_COLORS.define },
    { id: "solution", label: t("sections.solution"), step: tc("steps.solution"), color: PHASE_COLORS.solution },
    { id: "results", label: t("sections.results"), step: tc("steps.results"), color: PHASE_COLORS.results },
    { id: "next-steps", label: t("sections.nextSteps"), step: tc("steps.nextSteps"), color: PHASE_COLORS.neutral },
  ];

  const metadata = [
    { label: t("metadata.role.label"), value: t("metadata.role.value") },
    { label: t("metadata.duration.label"), value: t("metadata.duration.value") },
    { label: t("metadata.platform.label"), value: t("metadata.platform.value") },
    { label: t("metadata.tools.label"), value: t("metadata.tools.value") },
  ];

  const skills = ["UX/UI", "Web App", "Prototype", "2023"];
  const heroImage = "/Core-system-case/core-system-banner.jpg";

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

      <div className="rounded-2xl border border-border bg-bg-elevated p-4">
        <p className="text-text-primary font-light leading-[28px]">
          {t("confidentiality")}
        </p>
      </div>

      {/* VISÃO GERAL */}
      <section className="py-8 border-b border-border">
        <h2 className="text-heading-02 text-text-primary mb-4">{t("overview.title")}</h2>
        <div className="text-body-01 text-text-secondary mb-12 max-w-[750px] space-y-6">
          <p>{t("overview.p1")}</p>
          <p>{t("overview.p2")}</p>
        </div>

        <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("role.title")}</h3>
        <div className="text-body-01 text-text-secondary max-w-[750px] space-y-4">
          <p>{t("role.p1")}</p>
          <p>{t("role.p2")}</p>
          <p>{t("role.p3")}</p>
        </div>
      </section>

      {/* 01. DESCOBRIR */}
      <DiscoverRenderer
        id="discover"
        title={t("discover.title")}
        description={t("discover.description")}
      >
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("discover.dashboard.title")}</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <NumberedContentCard number="01" text={t("discover.dashboard.gaps.0")} />
              <NumberedContentCard number="02" text={t("discover.dashboard.gaps.1")} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("discover.inbox.title")}</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <NumberedContentCard number="01" text={t("discover.inbox.gaps.0")} />
              <NumberedContentCard number="02" text={t("discover.inbox.gaps.1")} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">{t("discover.processing.title")}</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <NumberedContentCard number="01" text={t("discover.processing.gaps.0")} />
              <NumberedContentCard number="02" text={t("discover.processing.gaps.1")} />
            </div>
          </div>
        </div>

        <p className="text-body-01 text-text-secondary mb-6">
          {t("discover.automation")}
        </p>

        <DataGrid columns={3}>
          <DataCard
            content={t("discover.cards.0")}
            color="var(--color-accent-cyan)"
          />
          <DataCard
            content={t("discover.cards.1")}
            color="var(--color-accent-cyan)"
          />
          <DataCard
            content={t("discover.cards.2")}
            color="var(--color-accent-cyan)"
          />
        </DataGrid>

        <p className="text-body-01 text-text-secondary mb-6 max-w-[750px]">
          {t("discover.evident")}
        </p>

        <div className="space-y-4">
          <div className="bg-accent-cyan/10 border-l-[3px] border-accent-cyan p-4 md:p-8 rounded-2xl">
            <p className="text-body-01 text-text-primary">
              {t("discover.findings.0")}
            </p>
          </div>
          <div className="bg-accent-cyan/10 border-l-[3px] border-accent-cyan p-4 md:p-8 rounded-2xl">
            <p className="text-body-01 text-text-primary">
              {t("discover.findings.1")}
            </p>
          </div>
          <div className="bg-accent-cyan/10 border-l-[3px] border-accent-cyan p-4 md:p-8 rounded-2xl">
            <p className="text-body-01 text-text-primary">
              {t("discover.findings.2")}
            </p>
          </div>
        </div>
      </DiscoverRenderer>

      {/* 02. DEFINIR */}
      <DefineRenderer
        id="define"
        title={t("define.title")}
        description={t("define.description")}
      >
        <div className="space-y-12">
          {/* Dashboard Panel */}
          <div className="flex flex-col xl:flex-row gap-6 items-start">
            <div className="w-full xl:w-[650px] shrink-0">
              <ImageCard
                imageDescription={t("define.dashboard.title")}
                imageUrl="/Core-system-case/core-system-dashboard.png"
                alt="Dashboard"
              />
            </div>
            <div className="flex-1 space-y-4 w-full">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">{t("define.dashboard.title")}</h3>
              <p className="text-base md:text-body-01 text-text-primary">{t("define.dashboard.subtitle")}</p>
              <ColoredContentCard
                text={t("define.dashboard.cards.0")}
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
              <ColoredContentCard
                text={t("define.dashboard.cards.1")}
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
            </div>
          </div>

          {/* Inbox Panel */}
          <div className="flex flex-col xl:flex-row gap-6 items-start">
            <div className="flex-1 space-y-4 w-full order-2 xl:order-1">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">{t("define.inbox.title")}</h3>
              <p className="text-base md:text-body-01 text-text-primary">{t("define.inbox.subtitle")}</p>
              <ColoredContentCard
                text={t("define.inbox.cards.0")}
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
              <ColoredContentCard
                text={t("define.inbox.cards.1")}
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
              <ColoredContentCard
                text={t("define.inbox.cards.2")}
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
            </div>
            <div className="w-full xl:w-[650px] shrink-0 order-1 xl:order-2">
              <ImageCard
                imageDescription={t("define.inbox.title")}
                imageUrl="/Core-system-case/core-system-inbox.png"
                alt="Inbox"
              />
            </div>
          </div>

          {/* Gerenciamento de casos Panel */}
          <div className="flex flex-col xl:flex-row gap-6 items-start">
            <div className="w-full xl:w-[650px] shrink-0">
              <ImageCard
                imageDescription={t("define.management.title")}
                imageUrl="/Core-system-case/core-syste-case-management.png"
                alt="Gerenciamento de casos"
              />
            </div>
            <div className="flex-1 space-y-4 w-full">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">{t("define.management.title")}</h3>
              <p className="text-base md:text-body-01 text-text-primary">{t("define.management.subtitle")}</p>
              <ColoredContentCard
                text={t("define.management.cards.0")}
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
              <ColoredContentCard
                text={t("define.management.cards.1")}
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
            </div>
          </div>

        </div>
      </DefineRenderer>

      {/* 04. SOLUÇÃO */}
      <SolutionRenderer
        id="solution"
        title={t("solution.title")}
        description=""
      >
        <div className="space-y-6">
          <VideoCard
            videoDescription="PensionDynamics"
            videoUrl="/Core-system-case/CoreSystem-SalesVideo.mp4"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <ColoredContentCard
                key={i}
                text={t(`solution.cards.${i}`)}
                bgClass="bg-accent-pink/10"
                colorClass="border-accent-pink"
              />
            ))}
          </div>
        </div>
      </SolutionRenderer>

      {/* 06. RESULTADOS */}
      <ResultsRenderer
        id="results"
        title={t("results.title")}
        description={t("results.description")}
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-base md:text-body-01 text-text-primary font-bold mb-4">{t("results.dashboardInbox.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <p className="text-body-02 text-text-primary mb-2">{t("results.labels.improvements")}</p>
                <ul className="space-y-3">
                  <ResultListItem type="improvement" text={t("results.improvements.0")} />
                  <ResultListItem type="improvement" text={t("results.improvements.1")} />
                </ul>
              </div>
              <div>
                <p className="text-body-02 text-text-primary mb-2">{t("results.labels.attention")}</p>
                <ul className="space-y-3">
                  <ResultListItem type="attention" text={t("results.attentions.0")} />
                  <ResultListItem type="attention" text={t("results.attentions.1")} />
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-body-01 text-text-primary font-bold mb-4">{t("results.caseManager.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <p className="text-body-02 text-text-primary mb-2">{t("results.labels.improvements")}</p>
                <ul className="space-y-3">
                  <ResultListItem type="improvement" text={t("results.improvements.2")} />
                  <ResultListItem type="improvement" text={t("results.improvements.3")} />
                  <ResultListItem type="improvement" text={t("results.improvements.4")} />
                  <ResultListItem type="improvement" text={t("results.improvements.5")} />
                </ul>
              </div>
              <div>
                <p className="text-body-02 text-text-primary mb-2">{t("results.labels.attention")}</p>
                <ul className="space-y-3">
                  <ResultListItem type="attention" text={t("results.attentions.2")} />
                  <ResultListItem type="attention" text={t("results.attentions.3")} />
                  <ResultListItem type="attention" text={t("results.attentions.4")} />
                </ul>
              </div>
            </div>
          </div>

          <p className="text-base md:text-body-01 text-text-primary mb-4">{t("results.overall.score")}</p>
          <p className="text-base md:text-body-01 text-text-secondary max-w-[750px]">
            {t("results.overall.desc")}
          </p>
        </div>
      </ResultsRenderer>

      {/* 07. PRÓXIMOS PASSOS */}
      <NextStepsRenderer
        id="next-steps"
        title={t("nextSteps.title")}
        description={t("nextSteps.description")}
      >
        <div className="space-y-4 mt-6">
          {[0, 1, 2, 3].map((i) => (
            <NumberedContentCard
              key={i}
              number={`0${i + 1}`}
              text={t(`nextSteps.steps.${i}`)}
            />
          ))}
        </div>
      </NextStepsRenderer>

      {/* NEXT PROJECT BANNER */}
      {(() => {
        const currentIndex = PROJECTS.findIndex(p => p.title === "Core System");
        const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

        return (
          <div className="pt-12">
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
                <div className="relative w-full h-[300px] bg-bg-subtle rounded-[24px] overflow-hidden border border-border">
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
                    <span className="text-[12px] font-medium tracking-wider text-accent-cyan uppercase">
                      {tp(`list.${nextProject.slug}.type`)}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
                      {nextProject.title}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-full border border-border bg-bg-elevated flex items-center justify-center text-text-primary group-hover:border-accent-cyan group-hover:bg-accent-cyan/10 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-accent-cyan transition-colors">
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

