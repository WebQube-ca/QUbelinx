"use client";

import { useRef } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shared/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bestSellers = products.filter((p) => p.featured);

export function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="platters" className="section-padding section-surface overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Crave-Worthy"
            title="Best Sellers"
            subtitle="The creations Kolkata can't stop ordering — scroll to explore."
            align="left"
            className="mb-0"
          />
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="h-12 w-12 rounded-full border border-brand-primary/20 flex items-center justify-center hover:bg-brand-secondary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-brand-primary" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="h-12 w-12 rounded-full border border-brand-primary/20 flex items-center justify-center hover:bg-brand-secondary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-brand-primary" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-5 px-5 md:-mx-0 md:px-0 snap-x snap-mandatory"
          data-lenis-prevent
        >
          {bestSellers.map((product, index) => (
            <div key={product.id} className="snap-start">
              <ProductCard
                product={product}
                index={index}
                variant="horizontal"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <MagneticButton asChild variant="outline" size="lg">
            <Link href="/menu">View Full Menu</Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
