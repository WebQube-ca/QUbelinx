"use client";

import { Slot } from "@radix-ui/react-slot";
import { useMagnetic } from "@/hooks/use-magnetic";
import { Button, buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  asChild = false,
  variant,
  size,
  ...props
}: ButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.25);
  const styles = cn(
    buttonVariants({ variant, size }),
    "magnetic-hover",
    className
  );

  if (asChild) {
    return (
      <Slot
        ref={ref as React.Ref<HTMLElement>}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={styles}
      >
        {children}
      </Slot>
    );
  }

  return (
    <Button
      ref={ref as React.Ref<HTMLButtonElement>}
      variant={variant}
      size={size}
      className={styles}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </Button>
  );
}
