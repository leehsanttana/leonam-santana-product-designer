import React from "react";

interface ColorSwatch{
  name: string;
  hex: string;
  isDark?: boolean;
}

const ColorSwatch = ({ name, hex, isDark }: ColorSwatch) => (
  <div 
    className="flex flex-col justify-between p-4 rounded-2xl h-[120px] border border-white/5"
    style={{ backgroundColor: hex }}
  >
    <span className={isDark ? "text-white/80 text-[14px]" : "text-[#904051]/80 text-[14px]"}>
      {name}
    </span>
    <span className={isDark ? "text-white font-medium text-[16px] tracking-wider" : "text-[#904051] font-medium text-[16px] tracking-wider"}>
      {hex.toUpperCase()}
    </span>
  </div>
);

export function ColorPaletteCard() {
  const primaryColors: ColorSwatch[] = [
    { name: "Primary Color", hex: "#904051", isDark: true },
    { name: "Surface", hex: "#FBF9F9" },
    { name: "White", hex: "#FFFFFF" },
  ];

  const accentColors: ColorSwatch[] = [
    { name: "Accent color 900", hex: "#33272A", isDark: true },
    { name: "Accent color 700", hex: "#62474E", isDark: true },
    { name: "Accent color 500", hex: "#9D8C90", isDark: true },
    { name: "Accent color 200", hex: "#F2E8E9" },
    { name: "Accent color 100", hex: "#FBF5F6" },
  ];

  return (
    <div className="bg-bg-elevated border border-border rounded-2xl p-4 md:p-8 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {primaryColors.map((color, idx) => (
          <ColorSwatch key={idx} {...color} />
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {accentColors.map((color, idx) => (
          <ColorSwatch key={idx} {...color} />
        ))}
      </div>
    </div>
  );
}
