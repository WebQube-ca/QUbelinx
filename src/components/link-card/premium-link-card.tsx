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
  New: "bg-cyan-300 text-slate-950",
  Trending: "bg-fuchsia-300 text-slate-950",
  Limited: "bg-amber-300 text-slate-950",
  Popular: "bg-emerald-300 text-slate-950",
};

export function PremiumLinkCard({
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
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.08 * index, duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.012 }}
      whileTap={{ scale: 0.985 }}
      onClick={() => onTrack(link)}
      className="group relative block overflow-hidden rounded-[1.65rem] border border-white/12 bg-white/[0.085] p-3 text-left shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.16),rgba(168,85,247,0.22),rgba(236,72,153,0.18),rgba(34,211,238,0.16))] blur-2xl" />
      </div>
      <div className="relative flex min-h-[6.25rem] items-center gap-3">
        <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-[1.25rem] bg-slate-950 text-white ring-1 ring-white/10">
          {link.thumbnail ? (
            <>
              <Image src={link.thumbnail} alt="" fill sizes="64px" className="object-cover opacity-70 transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 bg-slate-950/30" />
              <Icon className="relative h-5 w-5" />
            </>
          ) : (
            <Icon className="h-6 w-6 text-cyan-200" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {link.badge && (
              <span className={cn("rounded-full px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em]", badgeStyles[link.badge])}>
                {link.badge}
              </span>
            )}
            <span className="text-xs font-bold text-white/42">{link.views}</span>
          </div>
          <h2 className="mt-2 text-base font-black leading-tight tracking-[-0.025em] text-white sm:text-lg">
            {link.title}
          </h2>
          <p className="mt-1 line-clamp-2 text-sm leading-5 text-white/52">{link.description}</p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-slate-950 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-cyan-200">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </motion.a>
  );
}
