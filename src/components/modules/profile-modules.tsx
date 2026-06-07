"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Gift, Mail, Play, ShoppingBag, WalletCards } from "lucide-react";
import type { FeaturedModule, Profile } from "@/data/profiles";

const moduleIcons = {
  video: Play,
  product: ShoppingBag,
  newsletter: Mail,
  booking: CalendarDays,
  offer: Gift,
  tip: WalletCards,
};

export function FeaturedModules({ modules }: { modules: FeaturedModule[] }) {
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-black uppercase tracking-[0.24em] text-white/52">Featured</h2>
        <span className="text-xs font-bold text-cyan-200">Swipe on mobile</span>
      </div>
      <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
        {modules.map((module, index) => {
          const Icon = moduleIcons[module.type];

          return (
            <motion.article
              key={module.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * index }}
              className="relative min-h-[13rem] w-[82%] shrink-0 snap-center overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.08] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:w-auto"
            >
              {module.image && (
                <>
                  <Image src={module.image} alt="" fill sizes="260px" className="object-cover opacity-35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/58 to-transparent" />
                </>
              )}
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/14 text-cyan-200 ring-1 ring-white/10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-black text-white/72">{module.metric}</span>
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-black tracking-[-0.035em] text-white">{module.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-5 text-white/58">{module.description}</p>
                  <button type="button" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-200">
                    {module.cta} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export function MonetizationModules() {
  const modules = [
    ["Tip jar", "Let loyal followers support your work in one tap."],
    ["Book a call", "Route high-intent visitors to paid consultation slots."],
    ["Digital products", "Sell templates, guides, courses, and affiliate offers."],
    ["Newsletter capture", "Turn anonymous Instagram traffic into owned audience."],
  ];

  return (
    <section className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl">
      <h2 className="text-sm font-black uppercase tracking-[0.24em] text-white/52">Creator monetization</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {modules.map(([title, copy]) => (
          <div key={title} className="rounded-[1.25rem] bg-white/[0.07] p-4 ring-1 ring-white/10">
            <p className="font-black text-white">{title}</p>
            <p className="mt-1 text-sm leading-5 text-white/52">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrustSection({ profile }: { profile: Profile }) {
  return (
    <section className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl">
      <h2 className="text-sm font-black uppercase tracking-[0.24em] text-white/52">Trust and proof</h2>
      <div className="mt-4 grid gap-3">
        {profile.testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="rounded-[1.3rem] bg-white/[0.07] p-4 ring-1 ring-white/10">
            <blockquote className="text-sm leading-6 text-white/70">&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <figcaption className="mt-3 text-xs font-bold text-white/40">
              {testimonial.name} · {testimonial.role}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.workedWith.map((brand) => (
          <span key={brand} className="rounded-full bg-white/10 px-3 py-2 text-xs font-black text-white/62 ring-1 ring-white/10">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
