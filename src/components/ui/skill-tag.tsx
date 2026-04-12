import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const skillTagVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[13px] font-light transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-accent-pink/10 text-accent-pink border-accent-pink/20 hover:bg-accent-pink/20",
        secondary:
          "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20 hover:bg-accent-cyan/20",
        yellow:
          "bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20 hover:bg-accent-yellow/20",
        green:
          "bg-accent-green/10 text-accent-green border-accent-green/20 hover:bg-accent-green/20",
        outline: "border-border bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5",
        soft: "bg-bg-subtle text-text-secondary border-border hover:bg-bg-elevated",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SkillTagProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof skillTagVariants> { }

function SkillTag({ className, variant, ...props }: SkillTagProps) {
  return (
    <div className={cn(skillTagVariants({ variant }), className)} {...props} />
  )
}

export { SkillTag, skillTagVariants }
