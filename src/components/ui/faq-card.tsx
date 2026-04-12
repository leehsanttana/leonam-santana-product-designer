"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FaqCard({ question, answer, isOpen, onClick }: FaqCardProps) {
  return (
    <div
      className={`rounded-[16px] overflow-hidden transition-all duration-300 border ${isOpen
        ? "bg-accent-pink/5 border-accent-pink/20"
        : "bg-bg-elevated border-border hover:border-accent-pink/30"
        }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
      >
        <span className={`text-lg font-light transition-colors ${isOpen ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
          }`}>
          {question}
        </span>
        <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent-pink" : "text-text-muted"
          }`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 text-text-secondary leading-relaxed font-light border-t border-border/50 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
