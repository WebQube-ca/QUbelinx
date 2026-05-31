import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-primary text-white shadow-luxury hover:bg-brand-primary/90 hover:shadow-glow",
        secondary:
          "bg-brand-secondary text-brand-primary hover:bg-brand-accent/50",
        outline:
          "border-2 border-brand-primary/20 bg-transparent text-brand-primary hover:border-brand-primary hover:bg-brand-secondary/50",
        ghost: "hover:bg-brand-secondary text-brand-primary",
        glass:
          "glass-panel text-brand-text hover:bg-brand-neutral/80 border-brand-primary/10",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 px-5 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
