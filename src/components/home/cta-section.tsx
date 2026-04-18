"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";

export function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale();
  const cvLink = locale === 'en' ? '/leonam_santana_resume.pdf' : '/leonam_santana_curriculo.pdf';

  return (
    <section id="contact" className="container mx-auto px-ds-sm max-w-[1440px] py-ds-lg lg:py-ds-3xl">
      <div className="bg-bg-elevated border border-border p-ds-md md:p-ds-xl lg:p-ds-2xl rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-ds-xl relative overflow-hidden shadow-2xl group">

        <h2 className="text-[32px] md:text-[56px] font-heading font-bold tracking-[-3px] text-text-primary leading-[1.1] max-w-md">
          {t('title')}
        </h2>

        <div className="flex flex-col gap-ds-sm w-full lg:w-auto">
          {/* Email Pill */}
          <Button asChild className="w-full lg:w-auto h-[48px] px-8">
            <a href="mailto:leonamsanttana@gmail.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="font-light text-base tracking-wide">leonamsanttana@gmail.com</span>
            </a>
          </Button>

          {/* Social Links Row */}
          <div className="flex items-center gap-ds-xs">
            {[
              { icon: "whatsapp", href: "https://wa.me/5521976370007" },
              { icon: "linkedin", href: "https://www.linkedin.com/in/leonamsantana/" },
              { icon: "instagram", href: "https://www.instagram.com/leonam.santtana/" },
              { icon: "cv", href: cvLink, download: true },
            ].map((social) => (
              <Button
                key={social.icon}
                variant="secondary"
                size="social"
                asChild
                className="flex-1 lg:flex-none"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={social.download ? `CV_Leonam_Santana_${locale.toUpperCase()}.pdf` : undefined}
                >
                  {social.icon === 'whatsapp' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  )}
                  {social.icon === 'cv' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" />
                    </svg>
                  )}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
