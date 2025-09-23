import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg focus-visible:ring-primary/50",
        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg focus-visible:ring-red-500/50",
        outline:
          "border-2 border-primary bg-transparent text-primary shadow-sm hover:bg-primary hover:text-white focus-visible:ring-primary/50",
        secondary:
          "bg-accent text-primary shadow-sm hover:bg-accent/80 hover:shadow-md focus-visible:ring-accent/50",
        ghost:
          "hover:bg-accent/50 hover:text-primary focus-visible:ring-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded px-3 text-sm",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Custom button styles for Trade Credit Bancorp
const customButtonClasses = {
  'cta-primary': 'bg-gradient-to-r from-highlight to-yellow-600 hover:from-yellow-600 hover:to-highlight text-primary font-semibold border-2 border-highlight hover:shadow-xl transform hover:scale-105 transition-all duration-300',
  'cta-outline': 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white font-semibold transform hover:scale-105 transition-all duration-300'
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }