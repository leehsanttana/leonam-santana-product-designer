import React from "react";
import { cn } from "@/lib/utils";

interface TypographyRowProps {
  name: string;
  weight: string;
  size: string;
  isHeader?: boolean;
}

const TypographyRow = ({ name, weight, size, isHeader }: TypographyRowProps) => (
  <div className={cn(
    "grid grid-cols-3 gap-8 py-3",
    isHeader ? "border-b border-border/30 mb-4" : "border-b border-border/5"
  )}>
    <span className={cn(
      "text-[14px] font-normal",
      isHeader ? "text-text-muted uppercase tracking-wider" : "text-text-primary"
    )}>
      {name}
    </span>
    <span className={cn(
      "text-[14px] font-normal",
      isHeader ? "text-text-muted uppercase tracking-wider" : "text-text-secondary"
    )}>
      {weight}
    </span>
    <span className={cn(
      "text-[14px] font-normal",
      isHeader ? "text-text-muted uppercase tracking-wider" : "text-text-secondary"
    )}>
      {size}
    </span>
  </div>
);

export function TypographyCard() {
  const data: TypographyRowProps[] = [
    { name: "Display", weight: "ExtraBold (800)", size: "32px" },
    { name: "Heading 1", weight: "SemiBold (600)", size: "24px" },
    { name: "Heading 2", weight: "Medium (500)", size: "20px" },
    { name: "Heading 3", weight: "Light (300)", size: "18px" },
    { name: "Body Default", weight: "Light (300)", size: "16px" },
    { name: "Body Medium", weight: "Light (300)", size: "14px" },
    { name: "Caption", weight: "Regular (400)", size: "12px" },
    { name: "16px", weight: "Button", size: "Regular (400)" },
    { name: "14px", weight: "Input", size: "Regular (400)" },
    { name: "14px", weight: "Placeholder", size: "Light (300)" },
    { name: "12px", weight: "Tag | Label | Badge", size: "Regular (400)" },
  ];

  return (
    <div className="bg-bg-elevated border border-border rounded-2xl p-4 md:p-8 mb-12">
      <div className="flex justify-between items-start mb-12">
        <span className="text-4xl md:text-[64px] font-extrabold text-text-primary leading-none">Aa</span>
        <span className="text-base md:text-[18px] font-normal text-text-primary">Fonte : Lexend</span>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          <TypographyRow name="Name" weight="Font-Weight" size="Font-size" isHeader />
          {data.map((row, idx) => (
            <TypographyRow key={idx} {...row} />
          ))}
        </div>
      </div>
    </div>
  );
}
