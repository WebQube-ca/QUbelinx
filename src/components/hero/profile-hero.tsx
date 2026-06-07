"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";
import type { Profile } from "@/data/profiles";

export function ProfileHero({ profile }: { profile: Profile }) {
  return (
    <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.075] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-6">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-300 opacity-60 blur-lg" />
          <Image
            src={profile.profileImage}
            alt={`${profile.name} profile image`}
            width={132}
            height={132}
            priority
            className="relative h-28 w-28 rounded-[1.75rem] object-cover ring-1 ring-white/20 sm:h-32 sm:w-32"
          />
        </motion.div>
        <div className="rounded-full bg-white/10 px-3 py-2 text-xs font-black text-white/72 ring-1 ring-white/10">
          {profile.category}
        </div>
      </div>

      <div className="relative mt-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mb-3 flex w-fit items-center gap-2 rounded-full bg-emerald-300/12 px-3 py-1.5 text-xs font-black text-emerald-100 ring-1 ring-emerald-200/15"
        >
          <Sparkles className="h-3.5 w-3.5" />
          High-converting creator page
        </motion.div>
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-black leading-none tracking-[-0.055em] text-white sm:text-5xl">
            {profile.name}
          </h1>
          {profile.verified && <BadgeCheck className="h-6 w-6 fill-cyan-300 text-slate-950" />}
        </div>
        <p className="mt-4 text-base leading-7 text-white/62">{profile.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.socialProof.map((proof) => (
            <span key={proof} className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white/70 ring-1 ring-white/10">
              {proof}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
