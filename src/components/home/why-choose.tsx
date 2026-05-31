"use client";

import {
  Leaf,
  Sparkles,
  Gift,
  Gem,
  Users,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { features } from "@/data/products";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Sparkles,
  Gift,
  Gem,
  Users,
  Heart,
};

export function WhyChoose() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section-padding bg-brand-neutral relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Plate Date Promise"
          title="Why Choose Plate Date"
          subtitle="Luxury isn't a price tag — it's the care in every vegetarian bite we craft."
        />

        <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Sparkles;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group rounded-3xl glass-panel p-8 hover:shadow-luxury transition-shadow duration-500"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-brand-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-brand-text/55 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {[
            { end: 5000, suffix: "+", label: "Happy Customers" },
            { end: 4.9, decimals: 1, suffix: "", label: "Average Rating" },
            { end: 100, suffix: "%", label: "Vegetarian" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-brand-primary">
                {inView ? (
                  <CountUp
                    end={stat.end}
                    decimals={stat.decimals}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  "0"
                )}
              </p>
              <p className="text-sm text-brand-text/50 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
