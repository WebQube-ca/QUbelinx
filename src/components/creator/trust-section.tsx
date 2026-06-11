"use client";

import type { Profile } from "@/data/profiles";
import { motion } from "framer-motion";
import { easePremium } from "@/lib/profile-design-system";

export function TrustSection({ profile }: { profile: Profile }) {
  if (!profile.testimonials.length && !profile.workedWith.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.45, ease: easePremium }}
      className="mt-8 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.03] p-4 sm:p-5"
    >
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/38">
        Social proof
      </p>
      <h2 className="mt-1 font-[family-name:var(--font-profile)] text-lg font-bold text-white">
        Trusted by creators & brands
      </h2>

      {profile.testimonials.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {profile.testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4"
            >
              <blockquote className="text-sm leading-relaxed text-white/62">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-xs font-medium text-white/38">
                {testimonial.name} · {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {profile.workedWith.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.workedWith.map((brand) => (
            <span
              key={brand}
              className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/50 ring-1 ring-white/[0.07]"
            >
              {brand}
            </span>
          ))}
        </div>
      )}
    </motion.section>
  );
}
