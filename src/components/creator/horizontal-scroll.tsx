"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HorizontalScrollProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function HorizontalScroll({
  children,
  className,
  innerClassName,
}: HorizontalScrollProps) {
  return (
    <div className={cn("min-w-0 w-full max-w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-full max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth scrollbar-hide touch-pan-x",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
