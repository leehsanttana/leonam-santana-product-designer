import React from "react";
import { cn } from "@/lib/utils";

interface BenchmarkingCell {
  text: string;
  sentiment?: "positive" | "negative" | "neutral";
}

interface BenchmarkingRow {
  type: "category" | "content";
  label?: string; // For Category headers
  cells?: BenchmarkingCell[]; // For content rows (should have same length as columns)
}

interface BenchmarkingTableProps {
  columns: string[];
  rows: BenchmarkingRow[];
}

export function BenchmarkingTable({ columns, rows }: BenchmarkingTableProps) {
  return (
    <div className="mb-12 overflow-x-auto">
      <div
        className="min-w-[900px] bg-bg-elevated border border-border rounded-[16px] p-4 grid grid-cols-4 gap-4"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {/* Table Headers */}
        {columns.map((col, idx) => (
          <div key={idx} className="pb-2">
            <h3 className="text-body-01 text-text-primary">
              {col}
            </h3>
          </div>
        ))}

        {/* Table Rows */}
        {rows.map((row, rowIdx) => {
          if (row.type === "category") {
            return (
              <div
                key={rowIdx}
                className="col-span-full bg-bg-subtle p-2 -mx-2 mb-2"
              >
                <span className="text-[14px] font-light text-text-primary">
                  {row.label}
                </span>
              </div>
            );
          }

          return (
            <React.Fragment key={rowIdx}>
              {row.cells?.map((cell, cellIdx) => {
                const isQuote = cell.text.startsWith('"');
                const sentimentColor =
                  cell.sentiment === "positive" ? "text-accent-green" :
                    cell.sentiment === "negative" ? "text-accent-red" :
                      "text-text-primary";

                return (
                  <div key={cellIdx} className="flex flex-col">
                    <p className={cn(
                      "text-[14px] leading-[20px] font-light",
                      isQuote ? "italic" : "",
                      sentimentColor
                    )}>
                      {cell.text}
                    </p>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
