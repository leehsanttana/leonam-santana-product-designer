"use client";

import React from "react";
import { CaseLayout } from "@/components/case/shared/CaseLayout";
import { CaseTitleHeader } from "@/components/case/shared/CaseTitleHeader";
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

const CASE_DATA = {
  projectType: "Mobile App",
  projectName: "Core System",
  title: "Core System",
  subtitle: "Trazendo clareza em tomada de desições em processos de gestão de aposentadoria.",
  metadata: [
    { label: "PAPEL", value: "UX/UI Designer" },
    { label: "DURAÇÃO", value: "3 meses" },
    { label: "PLATAFORMA", value: "Web / Desktop" },
    { label: "FERRAMENTAS", value: "Figma, FigJam" },
  ],
  skills: ["UX/UI", "Web App", "Prototype", "2023"],
  heroImage: "/Core-system-case/core-system-banner.jpg",
  sections: [
    { id: "discover", label: "Identificando os gaps", step: "DESCOBRIR", color: PHASE_COLORS.discover },
    { id: "define", label: "Definindo as lacunas", step: "DEFINIR", color: PHASE_COLORS.define },
    { id: "solution", label: "Design da solução final", step: "SOLUÇÃO", color: PHASE_COLORS.solution },
    { id: "results", label: "Resultados e impacto", step: "RESULTADOS", color: PHASE_COLORS.results },
    { id: "next-steps", label: "O que vem a seguir", step: "PRÓXIMOS PASSOS", color: PHASE_COLORS.neutral },
  ],
};

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
      <span className={`text-[18px] leading-[30px] font-normal ${type === "improvement" ? "text-accent-green" : "text-accent-red"}`}>
        {text}
      </span>
    </li>
  );
}

export default function CoreSystemCase() {
  return (
    <CaseLayout
      projectName={CASE_DATA.projectName}
      projectType={CASE_DATA.projectType}
      sections={CASE_DATA.sections}
    >
      {/* HEADER SECTION */}
      <CaseTitleHeader
        title={CASE_DATA.title}
        description={CASE_DATA.subtitle}
        skills={CASE_DATA.skills}
        metrics={CASE_DATA.metadata}
        heroImage={CASE_DATA.heroImage}
      />

      <div className="mb-12 rounded-2xl border border-border bg-bg-elevated p-4">
        <p className="text-text-primary font-light leading-[28px]">
          “Alguns detalhes foram adaptados ou omitidos por questões de confidencialidade, mantendo o foco nos desafios de design e nas soluções propostas.”
        </p>
      </div>

      {/* VISÃO GERAL */}
      <section className="mb-12 py-8 border-b border-border">
        <h2 className="text-heading-02 text-text-primary mb-4">Visão geral</h2>
        <div className="text-body-01 text-text-secondary mb-12 max-w-[750px] space-y-6">
          <p>
            O Core System é a plataforma central responsável por gerenciar processos complexos relacionados à gestão de pensões e aposentadorias.
          </p>
          <p>
            O desafio deste projeto foi transformar uma estrutura já definida em uma interface clara, reduzindo a complexidade operacional e aumentando a confiança do usuário.
          </p>
        </div>

        <h3 className="text-xl font-heading font-bold text-text-primary mb-4">Meu papel na equipe</h3>
        <div className="text-body-01 text-text-secondary max-w-[750px] space-y-4">
          <p>
            Atuei como UX/UI Designer, sendo responsável por transformar a arquitetura existente em uma interface clara, consistente e utilizável.
          </p>
          <p>
            Trabalhei na construção das telas finais e protótipos utilizados tanto para validação com usuários quanto para comunicação do produto.
          </p>
          <p>
            O projeto foi desenvolvido em colaboração com um time multidisciplinar, incluindo um período de trabalho presencial na Suíça.
          </p>
        </div>
      </section>

      {/* 01. DESCOBRIR */}
      <DiscoverRenderer
        id="discover"
        title="Identificando os gaps"
        description="O projeto é constituído por algumas features como: Dashboard, Inbox (gerenciamento de documentos recebidos) e Processamento de casos. A partir da análise do sistema existente e dos resultados de testes de usabilidade, identifiquei pontos críticos que impactavam a compreensão e o fluxo de trabalho dos usuários."
      >
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">No Dashboard</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <NumberedContentCard number="01" text="Falta de ação direta (querem clicar e ir para inbox)" />
              <NumberedContentCard number="02" text="Algumas métricas pouco relevantes" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">No Inbox</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <NumberedContentCard number="01" text="Expectativa de criar algo novo (não só processar)" />
              <NumberedContentCard number="02" text="Conceito do inbox não é totalmente claro" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">Processamento de casos</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <NumberedContentCard number="01" text="O sistema não possui um bom feedback para o que foi realizado" />
              <NumberedContentCard number="02" text="Falta ações para que o usuário confirma que os passos foram realizados" />
            </div>
          </div>
        </div>

        <p className="text-body-01 text-text-secondary mb-6">
          Além disso, em relação a automação foi observador que:
        </p>

        <DataGrid columns={3}>
          <DataCard
            content="O modelo mental existe, mas não está sendo comunicado pelo UI"
            color="var(--color-accent-cyan)"
          />
          <DataCard
            content="A automação é boa, mas não passa total confiança"
            color="var(--color-accent-cyan)"
          />
          <DataCard
            content="O produto é funcionalmente bom, mas emocionalmente inseguro"
            color="var(--color-accent-cyan)"
          />
        </DataGrid>

        <p className="text-body-01 text-text-secondary mb-6 max-w-[750px]">
          Após a análise dos resultados, ficou evidente que:
        </p>

        <div className="space-y-4">
          <div className="bg-accent-cyan/10 border-l-[3px] border-accent-cyan p-8 rounded-2xl">
            <p className="text-body-01 text-text-primary">
              O sistema apresenta alta clareza visual e eficiência operacional, mas falha na orientação inicial e na construção de confiança.
            </p>
          </div>
          <div className="bg-accent-cyan/10 border-l-[3px] border-accent-cyan p-8 rounded-2xl">
            <p className="text-body-01 text-text-primary">
              Usuários entendem os fluxos após explicação, indicando um desalinhamento entre o modelo mental e a interface.
            </p>
          </div>
          <div className="bg-accent-cyan/10 border-l-[3px] border-accent-cyan p-8 rounded-2xl">
            <p className="text-body-01 text-text-primary">
              A maior oportunidade está em tornar a automação transparente e guiada, sem remover o senso de controle do usuário.
            </p>
          </div>
        </div>
      </DiscoverRenderer>

      {/* 02. DEFINIR */}
      <DefineRenderer
        id="define"
        title="Definindo as lacunas dos problemas"
        description="Após a análise dos resultados, ficou evidente que:"
      >
        <div className="space-y-12">
          {/* Dashboard Panel */}
          <div className="flex flex-col xl:flex-row gap-6 items-start">
            <div className="w-full xl:w-[650px] shrink-0">
              <ImageCard
                imageDescription="Core system - Dashboard"
                imageUrl="/Core-system-case/core-system-dashboard.png"
                alt="Dashboard"
              />
            </div>
            <div className="flex-1 space-y-4 w-full">
              <h3 className="text-3xl font-heading font-bold text-text-primary">Dashboard</h3>
              <p className="text-body-01 text-text-primary">Problemas</p>
              <ColoredContentCard 
                text="O dashboard não orienta o usuário para sua tarefa principal, dificultando o direcionamento inicial do fluxo de trabalho"
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
              <ColoredContentCard 
                text="A falta de hierarquia visual clara gera incerteza sobre prioridades, impactando a tomada de decisão"
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
            </div>
          </div>

          {/* Inbox Panel */}
          <div className="flex flex-col xl:flex-row gap-6 items-start">
            <div className="flex-1 space-y-4 w-full order-2 xl:order-1">
              <h3 className="text-3xl font-heading font-bold text-text-primary">Inbox</h3>
              <p className="text-body-01 text-text-primary">Problemas</p>
              <ColoredContentCard 
                text="Baixo contraste e ausência de padrões tornam difícil identificar elementos interativos e entender como executar ações no sistema"
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
              <ColoredContentCard 
                text="A priorização de áreas sem função clara desvia a atenção do usuário, aumentando a fricção no início da jornada"
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
              <ColoredContentCard 
                text="A organização visual não comunica adequadamente o fluxo de trabalho, dificultando a compreensão do processo como um todo"
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
            </div>
            <div className="w-full xl:w-[650px] shrink-0 order-1 xl:order-2">
              <ImageCard
                imageDescription="Core system - Inbox"
                imageUrl="/Core-system-case/core-system-inbox.png"
                alt="Inbox"
              />
            </div>
          </div>

          {/* Gerenciamento de casos Panel */}
          <div className="flex flex-col xl:flex-row gap-6 items-start">
            <div className="w-full xl:w-[650px] shrink-0">
              <ImageCard
                imageDescription="Core system - Processamento"
                imageUrl="/Core-system-case/core-syste-case-management.png"
                alt="Gerenciamento de casos"
              />
            </div>
            <div className="flex-1 space-y-4 w-full">
              <h3 className="text-3xl font-heading font-bold text-text-primary">Gerenciamento de casos</h3>
              <p className="text-body-01 text-text-primary">Problemas</p>
              <ColoredContentCard 
                text="O fluxo não é demonstrado corretamente, gerando confusão no que de fato precisa ser feito atualmente."
                bgClass="bg-accent-yellow/5"
                colorClass="border-accent-yellow"
              />
              <ColoredContentCard 
                text="Apesar dos status visuais do que precisa ser feito e do que está pronto, ainda é confuso quais ações tomar dentro do sistema, gerando insegurança."
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
        title="Redefinindo a estrutura visual"
        description=""
      >
        <div className="space-y-6">
          <VideoCard 
            videoDescription="PensionDynamics"
            videoUrl="/Core-system-case/CoreSystem-SalesVideo.mp4"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ColoredContentCard 
              text="Direcionei a atenção do usuário para as ações principais através de hierarquia visual e consistência do design system"
              bgClass="bg-accent-pink/10"
              colorClass="border-accent-pink"
            />
            <ColoredContentCard 
              text="Estruturei o fluxo de forma clara e progressiva, guiando o usuário ao longo das etapas do processo"
              bgClass="bg-accent-pink/10"
              colorClass="border-accent-pink"
            />
            <ColoredContentCard 
              text="Tornei elementos interativos e estados mais evidentes, reduzindo ambiguidade e erros"
              bgClass="bg-accent-pink/10"
              colorClass="border-accent-pink"
            />
            <ColoredContentCard 
              text="Introduzi interações diretas e contextuais, aumentando eficiência e reduzindo navegação desnecessária"
              bgClass="bg-accent-pink/10"
              colorClass="border-accent-pink"
            />
            <ColoredContentCard 
              text="Aumentei o foco na tarefa ativa com feedback visual e motion, reduzindo distrações"
              bgClass="bg-accent-pink/10"
              colorClass="border-accent-pink"
            />
            <ColoredContentCard 
              text="Reforcei transparência e controle com estados claros, validações e feedbacks de ação"
              bgClass="bg-accent-pink/10"
              colorClass="border-accent-pink"
            />
          </div>
        </div>
      </SolutionRenderer>

      {/* 06. RESULTADOS */}
      <ResultsRenderer
        id="results"
        title="Resultados e impacto"
        description="Após a implementação das melhorias, os testes indicaram avanços relevantes na compreensão do sistema e na execução das tarefas."
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-body-01 text-text-primary font-bold mb-8">Dashboard e Inbox</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                 <p className="text-body-02 text-text-primary mb-4">Melhorias</p>
                 <ul className="space-y-3">
                   <ResultListItem type="improvement" text="O fluxo ficou mais claro para a maioria dos usuários" />
                   <ResultListItem type="improvement" text="Inbox é reconhecida como local de tarefas" />
                 </ul>
              </div>
              <div>
                 <p className="text-body-02 text-text-primary mb-4">Pontos de atenção</p>
                 <ul className="space-y-3">
                   <ResultListItem type="attention" text="Inbox pessoal vs compartilhada" />
                   <ResultListItem type="attention" text="O que é editável direto" />
                 </ul>
              </div>
            </div>
          </div>

          <div>
             <h3 className="text-body-01 text-text-primary font-bold mb-8">Gerenciador de casos</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
               <div>
                 <p className="text-body-02 text-text-primary mb-4">Melhorias</p>
                 <ul className="space-y-3">
                   <ResultListItem type="improvement" text="Lista de pendências é percebida" />
                   <ResultListItem type="improvement" text="Estrutura geral compreendida" />
                   <ResultListItem type="improvement" text="Ação de &quot;processar dados&quot; é compreendida" />
                   <ResultListItem type="improvement" text="Usuários conseguem avançar no fluxo" />
                 </ul>
               </div>
               <div>
                 <p className="text-body-02 text-text-primary mb-4">Pontos de atenção</p>
                 <ul className="space-y-3">
                   <ResultListItem type="attention" text="Estados visuais (cinza) não são claros inicialmente" />
                   <ResultListItem type="attention" text="Ainda falta mais contexto de alguns dados" />
                   <ResultListItem type="attention" text="Dificuldade de identificar o status atual do caso" />
                 </ul>
               </div>
             </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-body-01 text-text-primary mb-4">Avaliação geral do teste: 8 de 10</p>
            <p className="text-body-01 text-text-secondary max-w-[750px]">
              O sistema mostrou alta eficiência e aprendizado rápido, permitindo que usuários realizem tarefas complexas rapidamente. Porém, falha em orientar decisões críticas e no onboarding, resultando em inconsistências. A transparência dos dados, como na lista de transações, foi um fator chave para a confiança e usabilidade.
            </p>
          </div>
        </div>
      </ResultsRenderer>

      {/* 07. PRÓXIMOS PASSOS */}
      <NextStepsRenderer
        id="next-steps"
        title="O que vem a seguir"
        description="A partir dos aprendizados do segundo ciclo de testes, foram identificadas oportunidades para evoluir o sistema em termos de orientação, confiança e robustez."
      >
        <div className="space-y-4 mt-6">
          <NumberedContentCard 
            number="01"
            text="Refinar a experiência inicial do usuário, tornando mais claras as ações disponíveis e o caminho a seguir desde o primeiro contato com o sistema."
          />
          <NumberedContentCard 
            number="02"
            text="Evoluir a forma como o sistema comunica automações e decisões, oferecendo maior visibilidade sobre o que está acontecendo e permitindo validação pelo usuário."
          />
          <NumberedContentCard 
            number="03"
            text="Tornar estados, confirmações e feedbacks mais consistentes ao longo da interface, garantindo que o usuário compreenda claramente o progresso e o impacto de suas ações."
          />
          <NumberedContentCard 
            number="04"
            text="Evoluir o sistema para lidar melhor com casos mais complexos e exceções, garantindo consistência mesmo em situações fora do fluxo padrão."
          />
        </div>
      </NextStepsRenderer>

      {/* NEXT PROJECT BANNER */}
      {(() => {
        const currentIndex = PROJECTS.findIndex(p => p.title === "Core System");
        const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

        return (
          <section
            className="mt-12 relative rounded-[24px] overflow-hidden group border border-border"
            style={{ cursor: nextProject && !nextProject.disabled ? 'pointer' : 'default' }}
            onClick={() => nextProject && !nextProject.disabled && (window.location.href = nextProject.href)}
          >
            {nextProject ? (
              <div className="w-full relative h-[300px]">
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="object-cover w-full h-full opacity-40 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-body-04 text-text-muted mb-2 block">PRÓXIMO PROJETO</span>
                  <h2 className="text-3xl font-heading font-bold text-text-primary mb-1">{nextProject.title}</h2>
                  <p className="text-text-secondary font-light">{nextProject.type}</p>
                </div>
                {!nextProject.disabled && (
                  <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-cyan">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                )}
              </div>
            ) : null}
          </section>
        );
      })()}
    </CaseLayout>
  );
}
