"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden bg-[#07080f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(34,211,238,0.1),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_0%_100%,rgba(139,92,246,0.12),transparent_50%)]" />

      <motion.div
        className="absolute -left-24 top-[12%] h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 top-[38%] h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]"
        animate={{ x: [0, -32, 0], y: [0, -20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] left-[30%] h-56 w-56 rounded-full bg-indigo-500/12 blur-[80px]"
        animate={{ x: [0, 24, 0], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07080f]/80" />
    </div>
  );
}
