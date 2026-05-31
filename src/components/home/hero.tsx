"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { WHATSAPP_URL } from "@/lib/utils";

const floatingItems = [
  {
    src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=200&q=80",
    className: "top-[18%] left-[8%] w-20 h-20 md:w-28 md:h-28",
    delay: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200&q=80",
    className: "top-[25%] right-[10%] w-16 h-16 md:w-24 md:h-24",
    delay: 0.5,
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80",
    className: "bottom-[30%] left-[12%] w-14 h-14 md:w-20 md:h-20",
    delay: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&q=80",
    className: "bottom-[35%] right-[8%] w-24 h-24 md:w-32 md:h-32",
    delay: 0.3,
  },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.9,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] overflow-hidden bg-brand-neutral noise-overlay"
    >
      <div className="absolute inset-0 bg-luxury-mesh" />
      <div className="absolute inset-0 bg-hero-gradient" />

      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1920&q=85"
          alt="Luxury desserts by Plate Date"
          fill
          priority
          className="object-cover opacity-30 mix-blend-multiply"
          sizes="100vw"
        />
      </motion.div>

      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + item.delay, duration: 0.8 }}
          className={`absolute z-10 hidden md:block rounded-2xl overflow-hidden shadow-luxury animate-float ${item.className}`}
          style={{ animationDelay: `${item.delay}s` }}
        >
          <Image
            src={item.src}
            alt=""
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 glass-panel opacity-40" />
        </motion.div>
      ))}

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-20 flex min-h-[100dvh] flex-col items-center justify-center px-5 pt-24 pb-16 text-center"
      >
        <div className="glass-panel rounded-full px-5 py-2 mb-8 hero-line inline-block">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            by Rhea Jaitha · Kolkata
          </span>
        </div>

        <h1 className="hero-line font-display text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[1.05] text-brand-text max-w-5xl text-balance">
          Every Bite Deserves a{" "}
          <span className="luxury-gradient-text italic">Plate Date</span>
        </h1>

        <p className="hero-line mt-6 max-w-2xl text-base md:text-lg text-brand-text/65 leading-relaxed">
          Handcrafted vegetarian desserts, gourmet platters and unforgettable
          gifting experiences in Kolkata.
        </p>

        <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4">
          <MagneticButton asChild size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </MagneticButton>
          <MagneticButton asChild variant="outline" size="lg">
            <Link href="/menu">Explore Menu</Link>
          </MagneticButton>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-brand-text/40">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-10 bg-gradient-to-b from-brand-primary/50 to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
