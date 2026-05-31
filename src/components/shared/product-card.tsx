"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { whatsappLink } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: "default" | "horizontal";
}

export function ProductCard({
  product,
  index = 0,
  variant = "default",
}: ProductCardProps) {
  const orderUrl = whatsappLink(`Hi! I'd like to order: ${product.name}`);

  if (variant === "horizontal") {
    return (
      <motion.article
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.6 }}
        className="group relative flex-shrink-0 w-[85vw] sm:w-[380px] md:w-[420px]"
      >
        <div className="product-glow relative overflow-hidden rounded-3xl bg-brand-neutral aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 85vw, 420px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-section/80 via-brand-dark-section/20 to-transparent" />
          {product.badge && (
            <span className="absolute top-5 left-5 rounded-full bg-brand-primary px-4 py-1.5 text-xs font-semibold text-white">
              {product.badge}
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-brand-accent text-sm font-medium mb-1">
              {product.price}
            </p>
            <h3 className="font-display text-2xl text-white mb-2">
              {product.name}
            </h3>
            <p className="text-white/70 text-sm line-clamp-2 mb-4">
              {product.description}
            </p>
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white text-sm font-medium group/link"
            >
              Order Now
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group"
    >
      <div
        className={cn(
          "product-glow relative overflow-hidden rounded-3xl bg-brand-neutral",
          "aspect-square mb-5"
        )}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-500" />
        {product.badge && (
          <span className="absolute top-4 left-4 rounded-full glass-panel px-3 py-1 text-xs font-semibold text-brand-primary">
            {product.badge}
          </span>
        )}
        <Link
          href={orderUrl}
          target="_blank"
          className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-background text-brand-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-luxury"
          aria-label={`Order ${product.name}`}
        >
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary mb-1">
          {product.price}
        </p>
        <h3 className="font-display text-xl text-brand-text group-hover:text-brand-primary transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-brand-text/55 line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.article>
  );
}
