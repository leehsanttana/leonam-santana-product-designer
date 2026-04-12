import React from "react";
import { CaseSection } from "../shared/CaseSection";
import { PHASE_COLORS } from "@/lib/phase-colors";

interface TestProps {
  id: string;
  number?: string;
  label?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  color?: string;
}

export function TestRenderer({
  id,
  number = "05",
  label = "TESTAR",
  title,
  description,
  children,
  color = PHASE_COLORS.test,
}: TestProps) {
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
