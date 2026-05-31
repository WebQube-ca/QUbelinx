"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, menuCategories, type MenuCategory } from "@/data/products";
import { ProductCard } from "@/components/shared/product-card";
import { cn } from "@/lib/utils";

interface MenuGridProps {
  initialCategory?: MenuCategory;
}

export function MenuGrid({ initialCategory = "all" }: MenuGridProps) {
  const [active, setActive] = useState<MenuCategory>(initialCategory);

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto scrollbar-hide pb-8 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap md:justify-center"
        role="tablist"
        aria-label="Menu categories"
      >
        {menuCategories.map((cat) => (
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
