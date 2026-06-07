"use client";

import { BarChart3, Eye, MousePointerClick, Trophy } from "lucide-react";
import type { Profile } from "@/data/profiles";

export function ProfileAnalytics({ analytics }: { analytics: Profile["analytics"] }) {
  const metrics = [
    { label: "Page views", value: analytics.pageViews.toLocaleString(), icon: Eye },
    { label: "Link clicks", value: analytics.totalClicks.toLocaleString(), icon: MousePointerClick },
    { label: "CTR", value: `${analytics.ctr}%`, icon: BarChart3 },
    { label: "Top link", value: analytics.topLink, icon: Trophy },
  ];

  return (
    <section className="mt-5 grid grid-cols-2 gap-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-[1.35rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl">
          <metric.icon className="h-4 w-4 text-cyan-200" />
          <p className="mt-3 truncate text-lg font-black text-white">{metric.value}</p>
          <p className="mt-1 text-xs font-semibold text-white/42">{metric.label}</p>
        </div>
      ))}
    </section>
  );
}
