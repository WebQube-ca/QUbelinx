"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { occasions } from "@/data/products";
import { SectionHeading } from "@/components/shared/section-heading";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { WHATSAPP_URL } from "@/lib/utils";

export function Occasions() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section-padding section-surface relative overflow-hidden">
      <motion.span
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-20 right-10 text-4xl opacity-30 pointer-events-none hidden md:block"
      >
        💕
      </motion.span>
      <motion.span
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
        className="absolute bottom-32 left-10 text-3xl opacity-30 pointer-events-none hidden md:block"
      >
        🎁
      </motion.span>

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Celebrate Everything"
          title="Occasion Gifting"
          subtitle="From Valentine's whispers to corporate thank-yous — we design the emotion."
        />

        <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl aspect-[5/6] product-glow"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-section/90 to-transparent" />
              <div className="absolute top-5 right-5 text-2xl">{item.emoji}</div>
              <div className="absolute bottom-0 p-6">
                <h3 className="font-display text-2xl text-white">{item.title}</h3>
                <p className="text-white/70 text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <MagneticButton asChild size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Plan Your Gift
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
