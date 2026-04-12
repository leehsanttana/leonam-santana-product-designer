export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Como você estrutura seu processo de design?",
    answer: "Trabalho com processos enxutos e ágeis, focando em entregar valor rapidamente através de ciclos de descoberta e validação constantes, garantindo que o design evolua junto com o produto."
  },
  {
    question: "Quais ferramentas você usa?",
    answer: "Minha ferramenta principal é o Figma, onde desenvolvo meus designs e ideias. Para prototipagem, utilizo figma ou uso IAs para auxiliar no processo. Tenho prática com ferramentas como Notion ou confluence para documentação e organização de projetos. No desenvolvimento, utilizo como base o React e o Next.js."
  },
  {
    question: "Você trabalha remotamente?",
    answer: "Sim, tenho uma estrutura completa para colaboração assíncrona e reuniões em tempo real, mas com possibilidade de trabalho presencial caso houver a necessidade."
  }
];
