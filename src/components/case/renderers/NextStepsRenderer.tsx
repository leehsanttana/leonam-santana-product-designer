import React from "react";
import { CaseSection } from "../shared/CaseSection";
import { PHASE_COLORS } from "@/lib/phase-colors";

interface NextStepsProps {
  id: string;
  number?: string;
  label?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  color?: string;
}

export function NextStepsRenderer({
  id,
  number = "07",
  label = "PRÓXIMOS PASSOS",
  title,
  description,
  children,
  color = PHASE_COLORS.neutral,
}: NextStepsProps) {
  return (
    <CaseSection
      id={id}
      number={number}
      label={label}
      color={color}
      title={title}
      description={description}
    >
      <div className="space-y-4">
        {children}
      </div>
    </CaseSection>
  );
}
