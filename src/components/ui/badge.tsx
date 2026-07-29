import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-sm",
        outline: "text-foreground",
        success: "border-transparent bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-sm",
        warning: "border-transparent bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-sm",
        easy: "border-transparent bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-sm",
        medium: "border-transparent bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-sm",
        complex: "border-transparent bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-sm",
        violet: "border-transparent bg-gradient-to-r from-violet-400 to-purple-500 text-white shadow-sm",
        fuchsia: "border-transparent bg-gradient-to-r from-fuchsia-400 to-pink-500 text-white shadow-sm",
        cyan: "border-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
