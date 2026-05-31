"use client";

import Image from "next/image";
import { Heart, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { instagramPosts } from "@/data/products";
import { INSTAGRAM_URL } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";

export function InstagramFeed() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section-padding bg-brand-neutral">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="@platedate"
          title="Instagram Feed"
          subtitle="Follow the cravings — new drops, behind-the-scenes, and customer unboxings daily."
        />

        <div
          ref={ref}
          className="columns-2 md:columns-3 gap-4 space-y-4"
        >
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`group relative block overflow-hidden rounded-2xl break-inside-avoid product-glow ${
                i % 3 === 0 ? "aspect-square" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[3/4]"
              }`}
            >
              <Image
                src={post.image}
                alt="Plate Date Instagram post"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-4 h-4 fill-current" />
                {post.likes.toLocaleString()}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
