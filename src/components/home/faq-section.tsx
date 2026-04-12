"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "@/data/faq";
import { FaqCard } from "@/components/ui/faq-card";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="container mx-auto px-4 sm:px-8 max-w-[920px] py-40 border-b border-border">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-[28px] font-heading font-bold text-text-primary leading-[1.2]">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-text-secondary font-light">
            Tudo que você quer saber antes de entrar em contato.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {FAQ_DATA.map((item, index) => (
            <FaqCard
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
