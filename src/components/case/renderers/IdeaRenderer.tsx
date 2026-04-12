import React from "react";
import { CaseSection } from "../shared/CaseSection";

interface IdeaProps {
  id: string;
  number?: string;
  label?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  color?: string;
}

export function IdeaRenderer({
  id,
  number = "03",
  label = "IDEALIZAR",
  title,
  description,
  children,
  color = "#ff9f0a",
}: IdeaProps) {
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
