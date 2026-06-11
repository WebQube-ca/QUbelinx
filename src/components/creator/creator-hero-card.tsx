"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, CalendarDays, ShoppingBag, Sparkles, Users } from "lucide-react";
import type { Profile } from "@/data/profiles";
import { easePremium, stagger } from "@/lib/profile-design-system";

const quickActions = [
  { label: "Book call", icon: CalendarDays, href: "#links" },
  { label: "Shop templates", icon: ShoppingBag, href: "#links" },
  { label: "Join community", icon: Users, href: "#links" },
];

export function CreatorHeroCard({ profile }: { profile: Profile }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easePremium }}
      className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.04] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex items-start gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.45, ease: easePremium }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-violet-500/50 via-indigo-400/30 to-cyan-400/40 blur-md" />
          <Image
            src={profile.profileImage}
            alt={profile.name}
            width={96}
            height={96}
            priority
            className="relative h-[5.5rem] w-[5.5rem] rounded-[1.25rem] object-cover ring-1 ring-white/20 sm:h-24 sm:w-24"
          />
        </motion.div>

        <div className="min-w-0 flex-1 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/20">
              <Sparkles className="h-3 w-3" />
              Trending creator
            </span>
            <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[0.68rem] font-medium text-white/55 ring-1 ring-white/[0.08]">
              {profile.category}
            </span>
          </div>

          <div className="mt-3 flex min-w-0 items-center gap-2">
            <h1 className="truncate font-[family-name:var(--font-profile)] text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
              {profile.name}
            </h1>
            {profile.verified && (
              <BadgeCheck className="h-5 w-5 shrink-0 fill-cyan-400 text-[#07080f]" aria-label="Verified" />
            )}
          </div>

          <p className="mt-2 text-sm leading-relaxed text-white/58 line-clamp-3 sm:text-[0.9375rem]">
            {profile.bio}
          </p>
        </div>
      </div>

      {profile.socialProof.length > 0 && (
        <div className="relative mt-5 flex flex-wrap gap-2">
          {profile.socialProof.map((proof, index) => (
            <motion.span
              key={proof}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * stagger.fast }}
              className="max-w-full rounded-full bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/60 ring-1 ring-white/[0.07]"
            >
              {proof}
            </motion.span>
          ))}
        </div>
      )}

      <div className="relative mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {quickActions.map((action, index) => (
          <motion.a
            key={action.label}
            href={action.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * stagger.fast }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-white/[0.06] px-3 py-2.5 text-sm font-semibold text-white/90 ring-1 ring-white/[0.08] transition hover:bg-white/[0.1] hover:ring-violet-400/25"
          >
            <action.icon className="h-4 w-4 text-violet-300" />
            <span className="truncate">{action.label}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
