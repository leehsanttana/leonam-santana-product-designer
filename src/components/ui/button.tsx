import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-light ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-accent-pink/18 text-[#F7CFFE] border border-accent-pink/20 hover:bg-accent-pink/35 transition-all",
        destructive:
          "bg-accent-red/20 text-accent-red border border-accent-red/30 hover:bg-accent-red/30",
        outline:
          "border border-border bg-transparent hover:bg-white/5 text-text-primary",
        secondary:
          "text-text-secondary bg-white/1 border border-border hover:bg-white/8 text-text-primary",
        ghost: "hover:bg-white/5 text-text-secondary hover:text-text-primary",
        link: "text-accent-pink underline-offset-4 hover:underline",
        cyan: "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 hover:bg-accent-cyan/20",
      },
      size: {
        default: "h-[44px] px-ds-md py-ds-xs",
        sm: "h-9 px-ds-sm text-xs",
        lg: "h-[54px] px-ds-xl text-base",
        icon: "h-[44px] w-[44px]",
        social: "h-[52px] w-[100px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
