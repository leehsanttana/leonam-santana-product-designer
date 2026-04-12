import React from "react";
import { CaseSection } from "../shared/CaseSection";
import { PHASE_COLORS } from "@/lib/phase-colors";

interface DiscoverProps {
  id: string;
  number?: string;
  label?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  color?: string;
}

export function DiscoverRenderer({
  id,
  number = "01",
  label = "DESCOBRIR",
  title,
  description,
  children,
  color = PHASE_COLORS.discover,
}: DiscoverProps) {
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
