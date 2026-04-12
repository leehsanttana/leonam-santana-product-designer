"use client";

import React from "react";
import { CaseLayout } from "@/components/case/CaseLayout";
import { CaseTitleHeader } from "@/components/case/CaseTitleHeader";
import { DiscoverRenderer } from "@/components/case/DiscoverRenderer";
import { UserQuotesRenderer } from "@/components/case/UserQuotesRenderer";
import { SolutionRenderer } from "@/components/case/SolutionRenderer";
import { TestRenderer } from "@/components/case/TestRenderer";
import { ResultsRenderer } from "@/components/case/ResultsRenderer";
import { NextStepsRenderer } from "@/components/case/NextStepsRenderer";

// DADOS MOCKADOS BASEADOS NO DESIGN
const CASE_DATA = {
  projectType: "Mobile App",
  projectName: "Adocão",
  title: "Conectando famílias a animais que precisam de um lar",
  description:
    "Adoção é um aplicativo mobile que facilita o processo de adoção de animais de estimação, conectando abrigos a potenciais adotantes através de uma jornada guiada, segura e transparente.",
  skills: ["UX Research", "UI Design", "Prototyping", "Usability Testing"],
  metrics: [
    { label: "Aumento na taxa de conclusão", value: "+122%" },
    { label: "Redução no tempo de aprovação", value: "-69%" },
    { label: "Aumento no NPS (Satisfação)", value: "+47%" },
    { label: "Adoções realizadas via app", value: "240+" },
  ],
  heroImage: "", // Mock
  sections: [
    { id: "discover", label: "Entendendo o ecossistema", step: "Etapa 01" },
    { id: "define", label: "Definindo o problema real", step: "Etapa 02" },
    { id: "explore", label: "Explorando caminhos", step: "Etapa 03" },
    { id: "solution", label: "Design da solução final", step: "Etapa 04" },
    { id: "test", label: "Testes e iterações", step: "Etapa 05" },
    { id: "results", label: "Resultados e impacto", step: "Etapa 06" },
    { id: "next-steps", label: "O que vem a seguir", step: "Etapa 07" },
  ],
};

export default function AdocaoCase() {
  return (
    <CaseLayout 
      projectName={CASE_DATA.projectName} 
      projectType={CASE_DATA.projectType} 
      sections={CASE_DATA.sections}
    >
      <CaseTitleHeader 
        title={CASE_DATA.title}
        description={CASE_DATA.description}
        skills={CASE_DATA.skills}
        metrics={CASE_DATA.metrics}
        heroImage={CASE_DATA.heroImage}
      />

      <DiscoverRenderer
        id="discover"
        phaseLabel="01. Discovery"
        title="Entendendo o ecossistema da adoção"
        description="Antes de qualquer sketch, mergulhei no universo do voluntariado animal para entender as reais dores de quem doa e de quem adota."
        cards={[
          { title: "Entrevistas", content: "Realizei entrevistas em profundidade com 12 potencias adotantes e 4 voluntários de ONGs." },
          { title: "Desk Research", content: "Análise de processos de adoção em 15 abrigos espalhados pelo Brasil." },
          { title: "Shadowing", content: "Acompanhamento de 3 processos físicos de adoção desde a triagem até a entrega do pet." },
        ]}
      />

      <div id="define">
        <UserQuotesRenderer
          persona={{
            name: "Marina Silva",
            role: "32 anos · Professora, mora em apartamento",
            quote: "Quero dar um lar a um animal, mas tenho medo de ser reprovada no processo gigantesco e invasivo dos abrigos.",
            needs: [
              "Entender o processo antes de se comprometer",
              "Conhecer o animal antes da visita presencial",
              "Sentir que está sendo acompanhada, não julgada",
              "Processo flexível para sua agenda",
            ],
            pains: [
              "Formulários longos e intimidadores",
              "Sem feedback do status da solicitação",
              "Medo de reprovação na entrevista",
              "Informações espalhadas em múltiplos canais",
            ]
          }}
        />
      </div>

      <DiscoverRenderer
        id="explore"
        phaseLabel="02. Ideação"
        title="Explorando caminhos e escolhendo direção"
        description="Com o problema bem definido, partimos para explorar soluções focadas em construir confiança gradativamente durante a jornada."
        cards={[
          { title: "Jornada Guiada", content: "Transformar os extensos formulários em um onboarding interativo em pílulas." },
          { title: "Transparência de Status", content: "Dashboard simples para o adotante acompanhar seu processo em tempo real." },
          { title: "Educação Integrada", content: "Dicas de posse responsável entregues nos momentos certos do fluxo." },
        ]}
      />

      <SolutionRenderer
        id="solution"
        phaseLabel="03. Interface"
        title="Design da solução final"
        description="A solução escolhida foi um app mobile com jornada dividida em micro interações para reduzir a carga cognitiva, mantendo o rigor exigido pelas ONGs."
        sections={[
          {
            title: "Onboarding e descoberta de animais",
            description: "O fluxo de entrada apresenta o app com linguagem empática e um quiz rápido para alinhar expectativas antes de mostrar os animais disponíveis.",
            images: [
              { url: "", alt: "Onboarding Screens Flow" }
            ]
          },
          {
            title: "Jornada de adoção guiada",
            description: "O processo é dividido em 5 micropassos com linguagem clara, informando o porquê de cada pergunta e o que esperar em seguida.",
            images: [
              { url: "", alt: "Step 1" },
              { url: "", alt: "Step 2" }
            ]
          }
        ]}
      />

      <TestRenderer
        id="test"
        phaseLabel="04. Validação"
        title="Testes de usabilidade e iterações"
        description="Realizei dois rounds de testes: um com protótipo de baixa e outro com alta fidelidade, envolvendo 10 participantes no total."
        feedbacks={[
          {
            severity: "Crítico",
            title: "Campo 'raça' obrigatório confunde adotantes de SRD",
            finding: "4/6 participantes não souberam preencher o campo ou hesitaram consideravelmente.",
            solution: "Tornei o campo opcional e adicionei opções pré-definidas focadas em porte e energia, removendo o foco em raça."
          },
          {
            severity: "Moderado",
            title: "Ícone de 'favoritos' não foi reconhecido",
            finding: "3/6 participantes não associaram o ícone de coração com a funcionalidade de salvar o perfil do animal para mais tarde.",
            solution: "Adicionei label 'Salvar' ao lado do ícone para esclarecer a ação."
          },
          {
            severity: "Baixo",
            title: "Texto de aprovação legal muito longo",
            finding: "Usuários davam scroll rápido sem ler — comportamento arriscado para termos de adoção.",
            solution: "Adicionei um checkbox explícito com resumo dos 3 pontos principais da posse responsável."
          }
        ]}
      />

      <ResultsRenderer
        id="results"
        phaseLabel="05. Métricas"
        title="Resultados e impacto"
        description="Após o lançamento do MVP com 3 abrigos parceiros em um teste beta de 45 dias, medimos os seguintes resultados:"
        metrics={[
          { label: "Taxa de conclusão do processo", before: "32%", after: "71%", improvement: "+122%" },
          { label: "Tempo médio até aprovação", before: "8 dias", after: "2.5 dias", improvement: "-69%" },
          { label: "Satisfação dos adotantes (NPS)", before: "3.2 ★", after: "4.7 ★", improvement: "+47%" },
          { label: "Taxa de abandono do processo", before: "41%", after: "12%", improvement: "-71%" }
        ]}
      />

      <NextStepsRenderer
        id="next-steps"
        phaseLabel="06. Futuro"
        title="O que vem a seguir"
        description="Com os resultados do MVP validados, o roadmap para futuras iterações inclui melhorias focadas na retenção pós-adoção."
        steps={[
          { title: "Módulo Pós-Adoção", description: "Área de acompanhamento vacinal e dicas de treinamento para os primeiros 30 dias do pet na nova casa." },
          { title: "Portal para Abrigos", description: "Desenvolver uma versão web otimizada para os voluntários gerenciarem múltiplos perfis e entrevistas simultaneamente." },
          { title: "Comunidade", description: "Espaço para adotantes compartilharem atualizações do pet com o abrigo responsável." },
          { title: "Acessibilidade", description: "Realizar auditoria aprofundada de contraste e navegação por voz para a versão 1.2." },
        ]}
      />

    </CaseLayout>
  );
}
