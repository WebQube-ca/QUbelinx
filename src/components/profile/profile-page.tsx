"use client";

import { useState } from "react";
import { BarChart3, Eye, MousePointerClick, Trophy } from "lucide-react";
import type { Profile, ProfileLink } from "@/data/profiles";
import { AnimatedBackground } from "@/components/creator/animated-background";
import { CreatorHeroCard } from "@/components/creator/creator-hero-card";
import { FeaturedSection } from "@/components/creator/featured-card";
import { LinkActionCard } from "@/components/creator/link-action-card";
import { ResponsiveShell } from "@/components/creator/responsive-shell";
import { SocialActionBar } from "@/components/creator/social-action-bar";
import { StatCard } from "@/components/creator/stat-card";
import { TrustSection } from "@/components/creator/trust-section";

export function ProfilePage({ profile }: { profile: Profile }) {
  const [clicks, setClicks] = useState(profile.analytics.totalClicks);
  const [topLink, setTopLink] = useState(profile.analytics.topLink);

  function trackClick(link: ProfileLink) {
    setClicks((value) => value + 1);
    setTopLink(link.title);
    void fetch(`/api/links/${link.id}/click`, { method: "POST" });
  }

  const analytics = {
    ...profile.analytics,
    totalClicks: clicks,
    topLink,
  };

  return (
    <div className="relative isolate min-h-screen w-full max-w-[100vw] overflow-x-clip bg-[#07080f] font-[family-name:var(--font-profile)] text-white">
      <AnimatedBackground />

      <ResponsiveShell>
        <div className="grid min-w-0 w-full max-w-full gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start lg:gap-8 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]">
          <aside className="min-w-0 max-w-full lg:sticky lg:top-6 lg:self-start">
            <CreatorHeroCard profile={profile} />

            <div className="mt-4 grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3">
              <StatCard label="Page views" value={analytics.pageViews} icon={Eye} index={0} />
              <StatCard label="Link clicks" value={analytics.totalClicks} icon={MousePointerClick} index={1} />
              <StatCard label="CTR" value={analytics.ctr} icon={BarChart3} index={2} suffix="%" animate={false} />
              <StatCard label="Top link" value={analytics.topLink} icon={Trophy} index={3} animate={false} compact />
            </div>

            <SocialActionBar links={profile.socialLinks} variant="inline" />
          </aside>

          <main className="min-w-0 max-w-full overflow-x-clip" id="links">
            <section className="min-w-0 max-w-full">
              <div className="mb-4 flex min-w-0 items-end justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/38">
                    Links
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">Start here</h2>
                </div>
                <span className="shrink-0 rounded-full bg-cyan-400/10 px-2.5 py-1.5 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/20">
                  {analytics.ctr}% CTR
                </span>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {profile.links.map((link, index) => (
                  <LinkActionCard key={link.id} link={link} index={index} onTrack={trackClick} />
                ))}
              </div>
            </section>

            <FeaturedSection modules={profile.featuredModules} />
            <TrustSection profile={profile} />

            <p className="mt-10 pb-4 text-center text-[0.6875rem] font-medium text-white/28">
              Powered by QubeLinx
            </p>
          </main>
        </div>
      </ResponsiveShell>

      <SocialActionBar links={profile.socialLinks} variant="mobile-fixed" />
    </div>
  );
}
