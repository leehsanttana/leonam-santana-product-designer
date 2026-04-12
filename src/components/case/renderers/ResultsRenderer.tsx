import React from "react";
import { CaseSection } from "../shared/CaseSection";
import { PHASE_COLORS } from "@/lib/phase-colors";

interface ResultsProps {
  id: string;
  number?: string;
  label?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  color?: string;
}

export function ResultsRenderer({
  id,
  number = "06",
  label = "RESULTADOS",
  title,
  description,
  children,
  color = PHASE_COLORS.results,
}: ResultsProps) {
  return (
    <CaseSection
      id={id}
      number={number}
      label={label}
      color={color}
      title={title}
      description={description}
    >
      {children}
    </CaseSection>
  );
}
