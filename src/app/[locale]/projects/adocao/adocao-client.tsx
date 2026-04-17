"use client";

import React from "react";
import { CaseLayout } from "@/components/case/shared/CaseLayout";
import { CaseTitleHeader } from "@/components/case/shared/CaseTitleHeader";
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

// DATA STRUCTURE ALIGNED WITH FINAL FIGMA DESIGN
const CASE_DATA = {
  projectType: "Mobile App",
  projectName: "Adocão",
  title: "Adocão",
  subtitle: "Um app que transforma a adoção responsável de pets numa jornada guiada — do primeiro swipe ao acompanhamento pós-lar.",
  metadata: [
    { label: "PAPEL", value: "UX/UI Designer (solo)" },
    { label: "DURAÇÃO", value: "3 meses" },
    { label: "PLATAFORMA", value: "Mobile" },
    { label: "FERRAMENTAS", value: "Figma, FigJam, ChatGPT" },
  ],
  skills: ["UX/UI", "Research", "Mobile App", "2025"],
  heroImage: "/Adocao-case/adocao-banner.jpg", // Placeholder
  sections: [
    { id: "discover", label: "Entendendo o ecossistema", step: "DESCOBRIR", color: PHASE_COLORS.discover },
    { id: "define", label: "Definando o problema real", step: "DEFINIR", color: PHASE_COLORS.define },
    { id: "idealize", label: "Explorando caminhos", step: "IDEALIZAR", color: PHASE_COLORS.idealize },
    { id: "solution", label: "Design da solução final", step: "SOLUÇÃO", color: PHASE_COLORS.solution },
    { id: "next-steps", label: "O que vem a seguir", step: "PRÓXIMOS PASSOS", color: PHASE_COLORS.neutral },
  ],
};

export default function AdocaoCase() {
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

      {/* VISÃO GERAL */}
      <section className="mb-8 py-8 border-b border-border">
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">Visão geral</h2>
        <div className="text-body-01 text-text-secondary max-w-[750px] space-y-6">
          <p>
            O processo de adoção de pets no Brasil é, na maioria das vezes, longo, burocrático e pouco guiado — o que faz muitas pessoas desistirem no meio do caminho. O Adocão nasceu para mudar isso.
          </p>
          <p>
            O app centraliza toda a jornada: da descoberta do pet ideal ao acompanhamento pós-adoção — e ainda funciona como uma rede colaborativa de resgate, conectando a comunidade em torno de animais em situação de risco.
          </p>
        </div>
      </section>

      {/* 01. DESCOBRIR */}
      <DiscoverRenderer
        id="discover"
        title="Identificando o fenômeno"
        description="O interesse por adoção de pets cresceu 400% durante a pandemia — um fenômeno impulsionado pelo isolamento e liderado pela Geração Z. Mais adoções também revelaram um lado preocupante: o abandono cresceu junto. A pesquisa começou aqui."
      >
        <DataGrid columns={3}>
          <DataCard
            title="Geração Z na Liderança"
            content="Jovens entre 18 e 24 anos lideram as adoções, com 32% adotando pets após encontrá-los nas ruas, superando as adoções feitas por meio de ONGs ou abrigos."
          />
          <DataCard
            title="Preferência pelos felinos"
            content="Os gatos representaram 65% das adoções de pets no país, indicando uma preferência crescente por felinos."
          />
          <DataCard
            title="Aumento na Adoção de Animais"
            content="A pesquisa Radar Pet 2021 revelou que 30% dos animais de estimação foram adquiridos durante o período de isolamento social."
          />
        </DataGrid>

        <p className="text-body-01 text-text-secondary max-w-[750px] mb-6">
          Apesar dos números positivos para as adoções, ainda existem números alarmantes quanto aos animais abandonados, com os cães dominando as estatísticas:
        </p>

        <DataGrid columns={3}>
          <DataCard
            value="46,8%"
            content="Dos cães abandonados se dá por problemas comportamentais com o animal."
          />
          <DataCard
            value="29,1%"
            content="Dos animais são abandonados por causa de mudanças e disponibilidade de espaço ou nas regras de conduta social."
          />
          <DataCard
            value="30 milhões"
            content="É o número estimado de animais abandonados no Brasil, sendo 20,2 milhões cães e 10 milhões gatos."
          />
        </DataGrid>

        <p className="text-body-01 text-text-secondary max-w-[750px] mb-6">
          Antes de propor qualquer solução, precisava entender o que já existia — e mais importante: o que faltava. Mapiei os principais apps de adoção do mercado para identificar padrões, gaps e oportunidades não atendidas:
        </p>

        <BenchmarkingTable
          columns={["Hyppet", "TiuTiu", "Petfinder", "weRescue"]}
          rows={[
            { type: "category", label: "Usabilidade e Fluxo de Adoção:" },
            {
              type: "content",
              cells: [
                { text: "Interface intuitiva com geolocalização." },
                { text: "Destaque para o \"Tiutiu Tok\", permitindo visualização de vídeos dos animais." },
                { text: "Plataforma robusta com extensa base de dados de animais." },
                { text: "Design moderno com filtros avançados para busca de animais." }
              ]
            },
            {
              type: "content",
              cells: [
                { text: "Processo de adoção simplificado, semelhante ao estilo de \"swipe\" de aplicativos de namoro." },
                { text: "Processo de adoção direto, com contato facilitado com os doadores." },
                { text: "Filtros detalhados por localização, raça, idade, tamanho, etc." },
                { text: "Parcerias com diversas organizações de resgate." }
              ]
            },
            {
              type: "content",
              cells: [
                { text: "Permite comunicação direta entre adotantes e responsáveis pelos animais." },
                { text: "Interface amigável e voltada para o público jovem." },
                { text: "Processo de adoção pode variar conforme a organização parceira." },
                { text: "Processo de adoção integrado com comunicação direta com abrigos." }
              ]
            },
            { type: "category", label: "Avaliações Positivas:" },
            {
              type: "content",
              cells: [
                { text: "\"Fácil de usar e encontrar animais próximos.\"", sentiment: "positive" },
                { text: "\"Adorei os vídeos dos animais, muito mais envolvente.\"", sentiment: "positive" },
                { text: "\"Ótimo recurso para encontrar animais para adoção.\"", sentiment: "positive" },
                { text: "\"Aplicativo fácil de usar com ótimos filtros.\"", sentiment: "positive" }
              ]
            },
            {
              type: "content",
              cells: [
                { text: "\"Design moderno e atrativo.\"", sentiment: "positive" },
                { text: "\"Aplicativo leve e fácil de navegar.\"", sentiment: "positive" },
                { text: "\"Interface amigável e fácil de usar.\"", sentiment: "positive" },
                { text: "\"Encontrei meu cachorro perfeito através do app.\"", sentiment: "positive" }
              ]
            },
            {
              type: "content",
              cells: [
                { text: "\"Facilitou muito o processo de adoção.\"", sentiment: "positive" },
                { text: "\"Consegui adotar meu pet rapidamente.\"", sentiment: "positive" },
                { text: "\"Grande variedade de animais disponíveis.\"", sentiment: "positive" },
                { text: "\"Design limpo e intuitivo.\"", sentiment: "positive" }
              ]
            },
            { type: "category", label: "Avaliações Negativas:" },
            {
              type: "content",
              cells: [
                { text: "\"Alguns bugs ao carregar perfis de animais.\"", sentiment: "negative" },
                { text: "\"Poderia ter mais filtros de busca.\"", sentiment: "negative" },
                { text: "\"Aplicativo trava e congela frequentemente.\"", sentiment: "negative" },
                { text: "\"Falta de resposta de alguns abrigos.\"", sentiment: "negative" }
              ]
            },
            {
              type: "content",
              cells: [
                { text: "\"Falta de informações detalhadas sobre os pets.\"", sentiment: "negative" },
                { text: "\"Alguns vídeos demoram para carregar.\"", sentiment: "negative" },
                { text: "\"Filtros de busca insuficientes.\"", sentiment: "negative" },
                { text: "\"Alguns perfis de animais desatualizados.\"", sentiment: "negative" }
              ]
            },
            {
              type: "content",
              cells: [
                { text: "\"Notificações poderiam ser mais personalizáveis.\"", sentiment: "negative" },
                { text: "\"Faltam informações sobre o histórico dos animais.\"", sentiment: "negative" },
                { text: "\"Problemas com a lista de favoritos.\"", sentiment: "negative" },
                { text: "\"Poderia ter mais informações sobre o processo de adoção.\"", sentiment: "negative" }
              ]
            }
          ]}
        />
      </DiscoverRenderer>

      {/* 02. DEFINIR */}
      <DefineRenderer
        id="define"
        title="Definindo o problema real"
        description="Com os dados em mãos, o desafio virou sintetizar o problema real: não era apenas burocracia — era a falta de suporte emocional e prático em cada etapa da adoção. As perguntas 'How Might We' ajudaram a transformar esse problema em oportunidades de design:"
      >
        <div className="grid grid-cols-1 gap-4 mb-6">
          <HowMightWeCard question="...tornar o processo de adoção mais acessível e atraente para diferentes perfis de adotantes?" />
          <HowMightWeCard question="...usar tecnologia para conectar cães abandonados a potenciais adotantes de forma mais eficiente?" />
          <HowMightWeCard question="...envolver a comunidade local para criar redes de apoio que reduzam o abandono de animais?" />
        </div>

        <h3 className="text-xl font-heading font-bold text-text-primary mb-4">Gerando POVs</h3>
        <p className="text-body-01 text-text-secondary max-w-[750px] mb-6">
          Através dos POVs, consigo aprofundar o foco no problema e gerar empatia entendendo corretamente os tipos de perfis dos usuários.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <POVCard quote="O usuário precisa de uma maneira prática e segura de encontrar e adotar animais, porque ela valoriza resgates responsáveis e quer incentivar mais adoções." />
          <POVCard quote="O usuário precisa de canais rápidos de comunicação e suporte, porque quer se sentir confiante ao adotar um novo pet." />
          <POVCard quote="O usuário precisa de uma plataforma que facilite o compartilhamento em redes sociais, porque acreditam que a visibilidade aumenta as chances de adoção." />
          <POVCard quote="O usuário precisa de orientações no período de adaptação pós-adoção, porque quer garantir uma boa integração do animal em sua rotina." />
          <POVCard className="md:col-span-2" quote="O usuário precisa de uma forma eficiente de encontrar o pet ideal, porque quer adotar mas tem pouco tempo e busca praticidade." />
        </div>
      </DefineRenderer>

      {/* 03. IDEALIZAR */}
      <IdeaRenderer
        id="idealize"
        title="Explorando caminhos e escolhendo direção"
        description="Com o problema definido, era hora de explorar caminhos. Avaliei diferentes abordagens antes de convergir: a direção escolhida foi criar uma jornada guiada e conversacional, capaz de reduzir a fricção, aumentar o match de compatibilidade e sustentar o vínculo pós-adoção."
      >
        <h3 className="text-xl font-heading font-bold text-text-primary mb-4">Features do MVP</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="💬 Assistente de Match"
            content="Sugere pets ideais com base no perfil do adotante, como rotina e espaço. Ajuda a tomar decisões conscientes."
          />
          <FeatureCard
            title="🐾 Acompanhamento Pós-Adoção"
            content="Suporte contínuo com lembretes e orientações para a adaptação nos primeiros meses."
          />
          <FeatureCard
            title="📚 Guia de Posse Responsável"
            content="Conteúdos práticos sobre cuidados e responsabilidades, preparando o usuário para uma adoção segura."
          />
          <FeatureCard
            title="🗺️ Mapa de Adoção e Resgate"
            content="Mostra pets, abrigos e alertas de animais em risco na região, conectando a comunidade."
          />
        </div>
      </IdeaRenderer>

      {/* 04. SOLUÇÃO */}
      <SolutionRenderer
        id="solution"
        title="Definindo a estrutura da experiência"
        description="Com as features definidas, organizei a arquitetura de forma que cada jornada tivesse um fluxo claro e progressivo — priorizando a adoção como fluxo central, com suporte e impacto social como camadas complementares."
      >
        <div>
          <ImageCard
            imageDescription="Arquitetura da informação"
            imageUrl="/Adocao-case/Arquitetura da informação da apliação..jpg"
            alt="Arquitetura da Informação"
            textDetails="Estrutura de navegação e hierarquia do app — organizada para facilitar o fluxo de adoção."
          />
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">Fluxos do usuário</h3>
          <p className="text-text-secondary mb-6 font-light">Antes de partir para os wireframes, mapiei os fluxos mais críticos do produto. Esse passo é fundamental para antecipar decisões de componentes e garantir que a estrutura funcione antes de qualquer pixel ser desenhado.</p>
          <div className="grid grid-cols-1 gap-8">
            <ImageCard
              imageDescription="Userflow - Login + Match de adoção"
              imageUrl="/Adocao-case/Userflow - Login + Match de adoção..jpg"
              alt="Userflow 1"
              textDetails="Jornada completa desde o login até o match ideal com o pet."
            />
            <ImageCard
              imageDescription="Userflow - Processo de adoção"
              imageUrl="/Adocao-case/Userflow - Processo de adoção..jpg"
              alt="Userflow 2"
              textDetails="Processo simplificado para formalização do interesse de adoção."
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">Construindo a solução</h3>
          <p className="text-text-secondary mb-6 font-light">Com o fluxo validado, passei para os esboços de baixa fidelidade das telas mais críticas. O objetivo não é precisão visual — é testar rapidamente se a estrutura de informação faz sentido antes de investir em alto fidelidade.</p>
          <div className="grid grid-cols-1 gap-8">
            <ImageCard
              imageDescription="Rascunhos para tirar transpor as ideias"
              imageUrl="/Adocao-case/lofi.jpg"
              alt="lo-fi design"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">Definindo a tipografia</h3>
          <p className="text-text-secondary mb-6 font-light">Escolhi a Lexend por sua excelente legibilidade em telas pequenas e pela ampla gama de pesos — de ExtraBold a Light — o que permite uma hierarquia visual clara sem precisar de fontes adicionais.</p>
          <TypographyCard />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">Paleta de cores</h3>
          <p className="text-text-secondary mb-6 font-light">A paleta de cores foi definida para transmitir acolhimento, segurança e empatia, reforçando o aspecto emocional da adoção e criando um ambiente confiável para o usuário.</p>
          <ColorPaletteCard />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">Componentes finais</h3>
          <ImageCard
            imageDescription="Componentes finais"
            imageUrl="/Adocao-case/Components.jpg"
            alt="Compnentes"
          />
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <h3 className="text-3xl font-heading font-bold text-text-primary mb-4">Resultado final</h3>
          <div className="text-body-01 text-text-secondary max-w-[850px] space-y-6 mb-6">
            <p>
              O Adocão nasce de uma convicção simples: adotar bem é tão importante quanto adotar bastante.
            </p>
            <p>
              A solução não se limita a conectar pessoas e pets — ela guia cada etapa, sustenta o vínculo pós-adoção e ainda serve como uma rede colaborativa de resgate. Três camadas de impacto, um único produto.
            </p>
          </div>

          <div className="space-y-12">
            <ImageCard
              imageDescription="Mockups de Onbarding e tela te login"
              imageUrl="/Adocao-case/Mockups de Onbarding e tela te login.jpg"
              alt="Onboarding e Login"
            />

            <ImageCard
              imageDescription="Mockups Assistente de adoção"
              imageUrl="/Adocao-case/Mockups Assistente de adoção.jpg"
              alt="Assistente de Adoção"
              textDetails="Transformei o processo de busca em um fluxo conversacional para reduzir a fricção inicial e tornar a experiência mais acolhedora. Formulários tradicionais podem gerar abandono em fluxos longos. O modelo de chat permite progressão gradual, além de criar uma sensação mais humana em um momento emocionalmente sensível."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageCard
                imageDescription="Home inicial + Tarefas diárias"
                imageUrl="/Adocao-case/Home inicial + Tarefas diárias.jpg"
                alt="Home e Tarefas"
                textDetails="Criei um sistema de acompanhamento de rotina para facilitar a adaptação do pet e do adotante. A proposta é reduzir ansiedade e incerteza no início da convivência, incentivando hábitos saudáveis e consistentes."
              />
              <ImageCard
                imageDescription="Guia de posse"
                imageUrl="/Adocao-case/Guia de posse.jpg"
                alt="Guia de Posse"
                textDetails="Após a adoção, inclui uma lista guiada de itens essenciais para apoiar adotantes de primeira viagem. A decisão surgiu da identificação de uma lacuna no pós-adoção, onde usuários frequentemente não sabem como preparar o ambiente para o pet."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageCard
                imageDescription="Lista de Matches"
                imageUrl="/Adocao-case/Lista de Matches.jpg"
                alt="Lista de Matches"
                textDetails="Escolhi uma lista ranqueada em vez de interações por swipe, como em apps de relacionamento, para evitar decisões impulsivas. O modelo de swipe pode desumanizar o processo, promovendo descartes rápidos. A lista permite uma comparação mais consciente, destacando a compatibilidade e ainda permitindo decisões emocionais, que são essenciais na adoção."
              />
              <ImageCard
                imageDescription="Mapa de eventos"
                imageUrl="/Adocao-case/Mapa de eventos.jpg"
                alt="Mapa de Eventos"
                textDetails="Desenvolvi um mapa colaborativo inspirado em sistemas como Waze, permitindo que usuários reportem animais em situação de abandono e encontrem serviços relevantes. A intenção foi ampliar o impacto do produto além da adoção, criando uma rede ativa de cuidado animal."
              />
            </div>

            <PrototypeCard
              title="Protótipo interativo de alta fidelidade"
              embedUrl="https://embed.figma.com/proto/hRJf2wzqCmjWKiLJTTIwR6/Adoc%C3%A3o?node-id=56-725&p=f&viewport=201%2C229%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=293%3A3362&page-id=0%3A1&embed-host=share"
              textDetails="Explore a experiência completa do Adocão diretamente no protótipo navegável."
            />
          </div>
        </div>
      </SolutionRenderer>

      {/* PRÓXIMOS PASSOS */}
      <NextStepsRenderer
        id="next-steps"
        title="O que vem a seguir"
        description="Próximas fases planejadas para o crescimento e autossustentação do produto."
      >
        <div className="space-y-4">
          {[
            { title: "Validação", description: "Realizar testes com usuários reais para coletar feedback e identificar pontos de melhoria na jornada 2.0." },
            { title: "Estratégias de monetização", description: "Criar benefícios e parcerias que incentivem o uso contínuo da aplicação e autossustentação do projeto." },
            { title: "Integração com veterinários parceiros", description: "Oferecer serviços integrados e descontos para assinantes, facilitando os cuidados iniciais do pet." },
          ].map((step, i) => (
            <div key={i} className="p-6 rounded-2xl bg-bg-elevated border border-border flex gap-6 items-start">
              <span className="text-accent-cyan text-2xl font-heading font-bold">0{i + 1}</span>
              <div>
                <h4 className="text-text-primary text-lg font-medium mb-1">{step.title}</h4>
                <p className="text-text-secondary font-light">{step.description}</p>
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
          <section
            className="mt-12 relative rounded-[24px] overflow-hidden group cursor-pointer border border-border"
            onClick={() => !nextProject.disabled && (window.location.href = nextProject.href)}
          >
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
              <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full border border-accent-pink/30 bg-accent-pink/10 flex items-center justify-center group-hover:bg-accent-pink/20 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-pink">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </section>
        );
      })()}
    </CaseLayout>
  );
}
