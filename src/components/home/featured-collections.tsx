"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/products";
import { SectionHeading } from "@/components/shared/section-heading";
import { TiltCard } from "@/components/shared/tilt-card";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

export function FeaturedCollections() {
  const ref = useGsapReveal<HTMLDivElement>({ stagger: 0.12 });

  return (
    <section id="collections" className="section-padding section-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/50 rounded-full blur-3xl -translate-y-1/2" />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          eyebrow="Curated for Craving"
          title="Featured Collections"
          subtitle="Six signature experiences — each designed to be unboxed, photographed, and devoured."
        />
        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => (
            <TiltCard key={item.id}>
              <Link
                href={item.href}
                data-reveal
                className="group block relative overflow-hidden rounded-4xl aspect-[4/5] product-glow"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-section/90 via-brand-dark-section/30 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-primary/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-brand-accent text-xs font-semibold uppercase tracking-wider">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-white mt-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-2">{item.subtitle}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
