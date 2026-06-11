"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { easePremium } from "@/lib/profile-design-system";

export function ResponsiveShell({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easePremium }}
      className="relative z-10 box-border mx-auto w-full min-w-0 max-w-6xl overflow-x-clip px-4 pb-28 pt-6 sm:px-5 sm:pt-8 md:px-8 lg:pb-12 lg:pt-10"
    >
      {children}
    </motion.div>
  );
}
