import React from "react";
import { CaseSection } from "../shared/CaseSection";
import { PHASE_COLORS } from "@/lib/phase-colors";

interface SolutionProps {
  id: string;
  number?: string;
  label?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  color?: string;
}

export function SolutionRenderer({
  id,
  number = "04",
  label = "SOLUÇÃO",
  title,
  description,
  children,
  color = PHASE_COLORS.solution,
}: SolutionProps) {
  return (
    <CaseSection
      id={id}
      number={number}
      label={label}
      color={color}
      title={title}
      description={description}
    >
      <div className="space-y-6">
        {children}
      </div>
    </CaseSection>
  );
}
