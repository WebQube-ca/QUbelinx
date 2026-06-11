"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Headphones,
  Mail,
  MessageCircle,
  Play,
  ShoppingBag,
} from "lucide-react";
import type { ProfileLink } from "@/data/profiles";
import { cn } from "@/lib/utils";
import { easePremium } from "@/lib/profile-design-system";

const iconMap = {
  video: Play,
  shop: ShoppingBag,
  calendar: CalendarDays,
  whatsapp: MessageCircle,
  podcast: Headphones,
  portfolio: BriefcaseBusiness,
  course: BookOpen,
  mail: Mail,
};

const badgeStyles = {
  New: "bg-cyan-400/15 text-cyan-200 ring-cyan-400/25",
  Trending: "bg-fuchsia-400/15 text-fuchsia-200 ring-fuchsia-400/25",
  Limited: "bg-amber-400/15 text-amber-200 ring-amber-400/25",
  Popular: "bg-emerald-400/15 text-emerald-200 ring-emerald-400/25",
  Sponsored: "bg-violet-400/15 text-violet-200 ring-violet-400/25",
};

export function LinkActionCard({
  link,
  index,
  onTrack,
}: {
  link: ProfileLink;
  index: number;
  onTrack: (link: ProfileLink) => void;
}) {
  const Icon = iconMap[link.icon];

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 + index * 0.05, duration: 0.42, ease: easePremium }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.985 }}
      onClick={() => onTrack(link)}
      className="group relative flex w-full min-w-0 max-w-full min-h-[72px] items-center gap-2.5 overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-white/[0.04] p-3 ring-0 transition hover:border-violet-400/25 hover:bg-white/[0.06] hover:shadow-[0_8px_32px_rgba(0,0,0,0.24)] sm:min-h-[80px] sm:gap-4 sm:p-3.5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-cyan-400/5" />
      </div>

      <div className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-[#0c0d14] ring-1 ring-white/[0.08] sm:h-14 sm:w-14">
        {link.thumbnail ? (
          <>
            <Image src={link.thumbnail} alt="" fill sizes="56px" className="object-cover opacity-60" />
            <span className="absolute inset-0 bg-[#07080f]/40" />
            <Icon className="relative h-4 w-4 text-white" />
          </>
        ) : (
          <Icon className="h-5 w-5 text-violet-300" />
        )}
      </div>

      <div className="relative min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5">
          {link.badge && (
            <span
              className={cn(
                "rounded-md px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider ring-1",
                badgeStyles[link.badge]
              )}
            >
              {link.badge}
            </span>
          )}
          <span className="text-[0.6875rem] font-medium text-white/35">
            {link.clicks.toLocaleString()} clicks
          </span>
        </div>
        <h3 className="mt-1 truncate text-[0.9375rem] font-semibold leading-snug text-white sm:text-base">
          {link.title}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-xs leading-relaxed text-white/45 sm:text-[0.8125rem]">
          {link.description}
        </p>
      </div>

      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.08] text-white/70 ring-1 ring-white/[0.08] transition group-hover:bg-white group-hover:text-[#07080f] sm:h-11 sm:w-11">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </motion.a>
  );
}
