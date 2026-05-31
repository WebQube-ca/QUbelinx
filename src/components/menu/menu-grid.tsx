"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import {
  menuCategoryCards,
  menuCategories,
  products,
  type MenuCategory,
} from "@/data/products";
import { ProductCard } from "@/components/shared/product-card";
import { cn } from "@/lib/utils";

interface MenuGridProps {
  initialCategory?: MenuCategory;
}

export function MenuGrid({ initialCategory = "all" }: MenuGridProps) {
  const [active, setActive] = useState<MenuCategory>(initialCategory);
  const activeCard = menuCategoryCards.find((cat) => cat.id === active);

  const filtered = useMemo(() => {
    if (active === "all") return products;
    if (active === "desserts") {
      return products.filter((p) =>
        ["brownies", "cookies", "fudge"].includes(p.category)
      );
    }
    return products.filter((p) => p.category === active);
  }, [active]);

  const productCount = (category: MenuCategory) => {
    if (category === "desserts") {
      return products.filter((p) =>
        ["brownies", "cookies", "fudge"].includes(p.category)
      ).length;
    }

    return products.filter((p) => p.category === category).length;
  };

  if (active === "all") {
    return (
      <div>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Pick your craving
          </p>
          <h2 className="font-display text-4xl font-semibold text-brand-text md:text-5xl">
            Browse by Mood, Not by a Long List
          </h2>
          <p className="mt-4 text-brand-text/60">
            Choose a category first. Then we open a focused menu with images,
            prices and easy WhatsApp ordering.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategoryCards.map((category, index) => (
            <motion.button
              key={category.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onClick={() => setActive(category.id)}
              className="group relative overflow-hidden rounded-[2rem] text-left shadow-soft product-glow"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-section/90 via-brand-dark-section/25 to-transparent" />
                <div className="absolute inset-0 bg-brand-primary/0 transition-colors duration-500 group-hover:bg-brand-primary/15" />
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full glass-panel px-3 py-1 text-xs font-semibold text-brand-primary">
                    {productCount(category.id)} items
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-primary shadow-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
                    {category.eyebrow}
                  </p>
                  <h3 className="font-display text-3xl text-white">
                    {category.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 rounded-[2rem] border border-brand-primary/10 bg-brand-neutral/80 p-5 md:flex-row md:items-center md:justify-between md:p-7">
        <div>
          <button
            type="button"
            onClick={() => setActive("all")}
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-brand-primary transition-colors hover:text-brand-text"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to categories
          </button>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            {activeCard?.eyebrow ?? "Plate Date Menu"}
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-brand-text md:text-5xl">
            {activeCard?.label ?? "Menu"}
          </h2>
          <p className="mt-3 max-w-2xl text-brand-text/60">
            {activeCard?.description ??
              "Choose a dish and order directly on WhatsApp."}
          </p>
        </div>

        {activeCard && (
          <div className="relative hidden h-28 w-28 shrink-0 overflow-hidden rounded-3xl md:block">
            <Image
              src={activeCard.image}
              alt={activeCard.label}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div
        className="flex gap-2 overflow-x-auto scrollbar-hide pb-8 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap md:justify-center"
        role="tablist"
        aria-label="Menu categories"
      >
        {menuCategories.filter((cat) => cat.id !== "all").map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            className={cn(
              "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
              active === cat.id
                ? "bg-brand-primary text-white shadow-luxury"
                : "bg-brand-secondary/80 text-brand-text/70 hover:bg-brand-accent/50"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-brand-text/50 py-20">
          No items in this category yet. Check back soon!
        </p>
      )}
    </div>
  );
}
