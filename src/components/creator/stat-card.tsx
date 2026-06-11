"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { cn } from "@/lib/utils";
import { easePremium, stagger } from "@/lib/profile-design-system";

type StatCardProps = {
  label: string;
  value: number | string;
  icon: LucideIcon;
  index: number;
  suffix?: string;
  animate?: boolean;
  compact?: boolean;
};

export function StatCard({
  label,
  value,
  icon: Icon,
  index,
  suffix = "",
  animate = true,
  compact = false,
}: StatCardProps) {
  const numericValue = typeof value === "number" ? value : null;
  const animated = useAnimatedCounter(numericValue ?? 0, 1200);
  const display =
    numericValue !== null && animate
      ? `${animated.toLocaleString()}${suffix}`
      : `${value}${suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 + index * stagger.base, duration: 0.45, ease: easePremium }}
      className="min-w-0 max-w-full overflow-hidden rounded-[1.25rem] border border-white/[0.07] bg-white/[0.035] p-3.5 backdrop-blur-md sm:p-4"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/20">
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p
        className={cn(
          "mt-3 font-[family-name:var(--font-profile)] font-bold tracking-tight text-white",
          compact
            ? "line-clamp-2 text-sm leading-snug sm:text-base"
            : "truncate text-lg sm:text-xl"
        )}
      >
        {display}
      </p>
      <p className="mt-0.5 truncate text-[0.6875rem] font-medium uppercase tracking-wider text-white/40">
        {label}
      </p>
    </motion.div>
  );
}
