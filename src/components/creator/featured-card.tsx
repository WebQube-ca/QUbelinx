"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Gift, Mail, Play, ShoppingBag, WalletCards } from "lucide-react";
import type { FeaturedModule } from "@/data/profiles";
import { HorizontalScroll } from "@/components/creator/horizontal-scroll";
import { easePremium } from "@/lib/profile-design-system";

const moduleIcons = {
  video: Play,
  product: ShoppingBag,
  newsletter: Mail,
  booking: CalendarDays,
  offer: Gift,
  tip: WalletCards,
};

export function FeaturedCard({ module, index }: { module: FeaturedModule; index: number }) {
  const Icon = moduleIcons[module.type];

  return (
    <motion.article
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.45, ease: easePremium }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      className="group relative flex min-h-[11.5rem] w-[82%] max-w-[18rem] shrink-0 snap-start flex-col overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-white/[0.04] p-4 sm:w-auto sm:max-w-none sm:shrink"
    >
      {module.image && (
        <>
          <Image
            src={module.image}
            alt=""
            fill
            sizes="280px"
            className="object-cover opacity-25 transition duration-500 group-hover:scale-105 group-hover:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080f] via-[#07080f]/75 to-[#07080f]/20" />
        </>
      )}

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.08] text-violet-300 ring-1 ring-white/[0.08]">
            <Icon className="h-4 w-4" />
          </span>
          <span className="shrink-0 rounded-full bg-white/[0.08] px-2.5 py-1 text-[0.6875rem] font-semibold text-white/65 ring-1 ring-white/[0.07]">
            {module.metric}
          </span>
        </div>

        <div className="mt-auto pt-6">
          <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white">
            {module.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/48">
            {module.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 transition group-hover:text-cyan-300">
            {module.cta}
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedSection({ modules }: { modules: FeaturedModule[] }) {
  if (!modules.length) return null;

  return (
    <section className="mt-8 min-w-0 max-w-full">
      <div className="mb-4 flex min-w-0 items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/38">
            Featured
          </p>
          <h2 className="mt-1 font-[family-name:var(--font-profile)] text-lg font-bold text-white sm:text-xl">
            Premium picks
          </h2>
        </div>
        <span className="hidden shrink-0 text-xs text-white/35 sm:inline">
          Curated for conversion
        </span>
      </div>

      <HorizontalScroll className="sm:hidden">
        {modules.map((module, index) => (
          <FeaturedCard key={module.id} module={module} index={index} />
        ))}
      </HorizontalScroll>

      <div className="hidden min-w-0 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <FeaturedCard key={module.id} module={module} index={index} />
        ))}
      </div>
    </section>
  );
}
