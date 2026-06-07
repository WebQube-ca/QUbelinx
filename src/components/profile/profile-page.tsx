"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProfileAnalytics } from "@/components/analytics/profile-analytics";
import { ProfileHero } from "@/components/hero/profile-hero";
import { PremiumLinkCard } from "@/components/link-card/premium-link-card";
import { FeaturedModules, MonetizationModules, TrustSection } from "@/components/modules/profile-modules";
import { SocialButtons } from "@/components/social-buttons/social-buttons";
import type { Profile, ProfileLink } from "@/data/profiles";

export function ProfilePage({ profile }: { profile: Profile }) {
  const [clicks, setClicks] = useState(profile.analytics.totalClicks);
  const [topLink, setTopLink] = useState(profile.analytics.topLink);

  function trackClick(link: ProfileLink) {
    setClicks((value) => value + 1);
    setTopLink(link.title);
  }

  const liveAnalytics = {
    ...profile.analytics,
    totalClicks: clicks,
    topLink,
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-5 text-white sm:py-8">
      <div className="pointer-events-none fixed inset-0" style={{ background: profile.theme.gradient }} />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.15),rgba(15,23,42,0.92))]" />
      <ParticleField />
      <FloatingElements />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-5 lg:grid-cols-[minmax(0,26rem)_1fr] lg:items-start">
        <div className="lg:sticky lg:top-6">
          <ProfileHero profile={profile} />
          <ProfileAnalytics analytics={liveAnalytics} />
          <SocialButtons links={profile.socialLinks} />
        </div>

        <div className="min-w-0">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-4">
            <div className="mb-4 flex items-center justify-between px-1">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-white/50">Start here</p>
                <h2 className="mt-1 text-2xl font-black tracking-[-0.045em] text-white">Choose your next move</h2>
              </div>
              <span className="rounded-full bg-cyan-300/14 px-3 py-2 text-xs font-black text-cyan-100 ring-1 ring-cyan-200/15">
                {profile.analytics.ctr}% CTR
              </span>
            </div>
            <div className="space-y-3">
              {profile.links.map((link, index) => (
                <PremiumLinkCard key={link.id} link={link} index={index} onTrack={trackClick} />
              ))}
            </div>
          </section>

          <FeaturedModules modules={profile.featuredModules} />
          <MonetizationModules />
          <TrustSection profile={profile} />
          <p className="pb-24 pt-6 text-center text-xs font-semibold text-white/32 sm:pb-8">
            Powered by QubeLinx · A conversion engine for Instagram traffic
          </p>
        </div>
      </div>
    </main>
  );
}

function ParticleField() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/30"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 53) % 100}%`,
          }}
          animate={{
            y: [0, -28, 0],
            opacity: [0.12, 0.52, 0.12],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 5 + (index % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.18,
          }}
        />
      ))}
    </div>
  );
}

function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 hidden overflow-hidden sm:block">
      <motion.div
        className="absolute left-[8%] top-[18%] h-24 w-24 rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl"
        animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[12%] h-16 w-44 rounded-full border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl"
        animate={{ y: [0, 20, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[16%] h-28 w-28 rounded-full border border-cyan-200/20 bg-cyan-300/10 blur-sm"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
