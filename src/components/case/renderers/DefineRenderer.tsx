import React from "react";
import { CaseSection } from "../shared/CaseSection";
import { PHASE_COLORS } from "@/lib/phase-colors";

interface DefineProps {
  id: string;
  number?: string;
  label?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  color?: string;
}

export function DefineRenderer({
  id,
  number = "02",
  label = "DEFINIR",
  title,
  description,
  children,
  color = PHASE_COLORS.define,
}: DefineProps) {
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
