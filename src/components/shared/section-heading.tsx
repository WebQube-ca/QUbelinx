"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Use on dark section backgrounds (story, footer) */
  inverted?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverted = false,
  className,
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "left" && "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={cn(
          "font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl text-balance",
          inverted ? "text-white" : "text-brand-text"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            inverted ? "text-white/65" : "text-brand-text/60"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
