"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const locales = [
    { id: "en", label: "EN" },
    { id: "pt", label: "PT" },
  ];

  return (
    <div className="hidden md:flex absolute top-8 right-8 z-[100] items-center bg-bg-elevated/80 backdrop-blur-md border border-border p-1 rounded-full shadow-2xl">
      <div className="flex items-center relative gap-1">
        {locales.map((l) => {
          const isActive = locale === l.id;
          
          return (
            <Link
              key={l.id}
              href={pathname as any}
              locale={l.id}
              className={`
                relative px-3 py-1 text-[12px] font-heading font-bold rounded-full transition-colors duration-300
                ${isActive ? "text-white" : "text-text-secondary hover:text-text-primary"}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeLocaleBg"
                  className="absolute inset-0 bg-accent-pink rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
