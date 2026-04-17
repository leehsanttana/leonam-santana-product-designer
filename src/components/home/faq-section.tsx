"use client";

import React, { useState } from "react";
import { FaqCard } from "@/components/ui/faq-card";
import { useTranslations } from "next-intl";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faq');

  const faqItems = [
    { question: t('q1.question'), answer: t('q1.answer') },
    { question: t('q2.question'), answer: t('q2.answer') },
    { question: t('q3.question'), answer: t('q3.answer') }
  ];

  return (
    <section id="faq" className="container mx-auto px-4 max-w-[920px] py-8 lg:py-32 border-b border-border">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-[28px] font-heading font-bold text-text-primary leading-[1.2]">
            {t('sectionTitle')}
          </h2>
          <p className="text-base md:text-lg text-text-secondary font-light">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {faqItems.map((item, index) => (
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
