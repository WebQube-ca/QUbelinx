import type { Metadata } from "next";
import Image from "next/image";
import { MenuGrid } from "@/components/menu/menu-grid";
import { PageTransition } from "@/components/layout/page-transition";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { WHATSAPP_URL } from "@/lib/utils";
import type { MenuCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Menu — Vegetarian Starters, Mains & Desserts",
  description:
    "Explore Plate Date's 100% vegetarian menu: starters, pastas, risotto, Mexican bowls, brownies, cookies and fudge in Kolkata.",
  keywords: [
    "Vegetarian Menu Kolkata",
    "Cloud Kitchen Kolkata",
    "Brownie Boxes Kolkata",
    "Vegetarian Mains Kolkata",
    "Vegetarian Desserts Kolkata",
  ],
};

const validCategories: MenuCategory[] = [
  "all",
  "starters",
  "mains",
  "desserts",
  "brownies",
  "cookies",
  "fudge",
];

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const categoryParam = params.category as MenuCategory | undefined;
  const initialCategory =
    categoryParam && validCategories.includes(categoryParam)
      ? categoryParam
      : "all";

  return (
    <PageTransition>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-brand-neutral">
        <Image
          src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1920&q=85"
          alt="Plate Date menu"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-brand-background/60 to-brand-secondary/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-32 pb-16 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary mb-4">
            The Collection
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-brand-text text-balance max-w-3xl">
            A Menu Worth{" "}
            <span className="luxury-gradient-text italic">Craving</span>
          </h1>
          <p className="mt-6 max-w-xl text-brand-text/60 text-lg">
            A cute, curated vegetarian menu. Pick a category first, then explore
            the dishes inside.
          </p>
          <div className="mt-8">
            <MagneticButton asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="section-padding section-surface">
        <div className="mx-auto max-w-7xl">
          <MenuGrid initialCategory={initialCategory} />
        </div>
      </section>

    </PageTransition>
  );
}
