"use client";

import Image from "next/image";
import type { FormEvent, ReactNode, RefObject } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Crown,
  Gift,
  Heart,
  Home,
  Instagram,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const instagramUrl =
  "https://www.instagram.com/resinpassion2026?igsh=aDFqajdhcThxazd1";

const logoSrc = "/resin-passion-logo.png";

const whatsappNumber = "";

const whatsappText =
  "Hello Resin Passion, I would like to start a custom resin art order.";

function getWhatsappUrl(message = whatsappText) {
  const encodedMessage = encodeURIComponent(message);
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}

type ArtworkKind = "clock" | "nameplate" | "gift" | "decor";

const products = [
  {
    title: "Resin Wall Clocks",
    copy: "Sculptural clocks with metallic pigments, preserved florals, initials, and luminous gold detailing.",
    artwork: "clock" as ArtworkKind,
  },
  {
    title: "Personalized Name Plates",
    copy: "Elegant entry pieces crafted to introduce a home with warmth, ceremony, and individuality.",
    artwork: "nameplate" as ArtworkKind,
  },
  {
    title: "Custom Gifts",
    copy: "Wedding, anniversary, birthday, and housewarming keepsakes designed around a memory.",
    artwork: "gift" as ArtworkKind,
  },
  {
    title: "Luxury Home Decor",
    copy: "Statement resin pieces for console tables, walls, foyers, bedrooms, and styled interiors.",
    artwork: "decor" as ArtworkKind,
  },
];

const processSteps = [
  "Share Your Idea",
  "Design Consultation",
  "Handcrafted Creation",
  "Quality Check",
  "Delivered To Your Door",
];

const galleryImages = [
  {
    artwork: "clock" as ArtworkKind,
    title: "Luxury Resin Wall Clock",
    span: "md:row-span-2",
  },
  {
    artwork: "nameplate" as ArtworkKind,
    title: "Personalized Gold Name Plate",
    span: "",
  },
  {
    artwork: "gift" as ArtworkKind,
    title: "Wedding Resin Gift",
    span: "",
  },
  {
    artwork: "decor" as ArtworkKind,
    title: "Luxury Resin Decor Panel",
    span: "md:row-span-2",
  },
  {
    artwork: "clock" as ArtworkKind,
    title: "Floral Resin Clock Detail",
    span: "",
  },
  {
    artwork: "nameplate" as ArtworkKind,
    title: "Custom Home Name Plate",
    span: "",
  },
];

type Reason = [string, string, LucideIcon];

const reasons: Reason[] = [
  ["Handmade Excellence", "Every pour, polish, and gold detail is finished by hand.", WandSparkles],
  ["Premium Materials", "High-gloss resin, metallic pigments, florals, stones, and durable finishes.", ShieldCheck],
  ["Fully Customized", "Names, colors, dates, themes, symbols, and gift stories are designed around you.", Sparkles],
  ["Made In India", "Crafted in Mumbai for homes and celebrations across India.", Crown],
  ["Perfect For Gifting", "Designed to feel personal, premium, and emotionally memorable.", Gift],
  ["Unique Designs", "No two resin pieces are ever exactly the same.", Star],
];

const testimonials = [
  {
    name: "Rhea & Kunal",
    role: "Wedding gift order",
    quote:
      "The clock felt like a memory preserved in gold. Everyone asked where we got it made.",
    image: logoSrc,
  },
  {
    name: "Ananya Mehta",
    role: "New home name plate",
    quote:
      "It made our entrance look premium instantly. The finish is glossy, rich, and beautifully personal.",
    image: logoSrc,
  },
  {
    name: "Vikram Shah",
    role: "Anniversary keepsake",
    quote:
      "The consultation was thoughtful and the final piece looked far more luxurious than a regular gift.",
    image: logoSrc,
  },
];

type Occasion = [string, LucideIcon];

const occasions: Occasion[] = [
  ["Weddings", Heart],
  ["Anniversaries", Clock3],
  ["Birthdays", Gift],
  ["Housewarming", Home],
  ["Corporate Gifts", Crown],
  ["Festivals", Sparkles],
];

const faqs = [
  {
    q: "Can every resin piece be customized?",
    a: "Yes. Colors, names, dates, florals, gold detailing, size, theme, and product type can be personalized after a design consultation.",
  },
  {
    q: "How long does a custom order take?",
    a: "Most custom pieces take 7-15 working days depending on size, complexity, curing time, and finishing requirements.",
  },
  {
    q: "Do you deliver outside Mumbai?",
    a: "Yes. Orders can be packed carefully and shipped across India, subject to product size and courier availability.",
  },
  {
    q: "How do I place an order?",
    a: "Share your idea on WhatsApp, select the product type, confirm the design direction, and the piece is handcrafted after confirmation.",
  },
];

const instagramPosts = [
  "Clock collection",
  "Name plate reveal",
  "Wedding gift edit",
  "Gold pour detail",
];

export function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [light, setLight] = useState({ x: 50, y: 20 });
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 150]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 44, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: Number(element.dataset.parallax) || -12,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((value) => (value + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const shimmerStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${light.x}% ${light.y}%, rgba(229,199,125,0.18), transparent 28%)`,
    }),
    [light]
  );

  return (
    <div
      ref={pageRef}
      className="relative overflow-hidden bg-[#080808] text-white"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setLight({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-[#D4AF37] via-[#fff0b8] to-[#D4AF37]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80" style={shimmerStyle} />
      <FloatingParticles />
      <HeroSection refProp={heroRef} heroY={heroY} />
      <StorySection />
      <ProductsSection />
      <ProcessSection />
      <GallerySection />
      <WhyChooseUsSection />
      <TestimonialsSection
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      <OccasionsSection />
      <InstagramSection />
      <FaqSection />
      <ContactSection />
      <StickyWhatsapp />
    </div>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#080808]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="text-center"
      >
        <div className="mx-auto mb-6 grid h-24 w-24 place-items-center overflow-hidden rounded-full border border-[#D4AF37]/40 bg-white shadow-[0_0_60px_rgba(212,175,55,0.22)]">
          <Image
            src={logoSrc}
            alt="Resin Passion logo"
            width={96}
            height={96}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <p className="font-display text-3xl italic text-[#E5C77D]">Resin Passion</p>
        <div className="mx-auto mt-5 h-px w-48 overflow-hidden bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {Array.from({ length: 28 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-[#E5C77D]"
          initial={{
            x: `${(index * 37) % 100}vw`,
            y: `${(index * 19) % 100}vh`,
            opacity: 0.12,
            scale: 0.8,
          }}
          animate={{
            y: ["0vh", "-12vh", "0vh"],
            opacity: [0.12, 0.55, 0.12],
            scale: [0.7, 1.6, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + (index % 6),
            delay: index * 0.13,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ProductArtwork({
  kind,
  label,
  featured = false,
}: {
  kind: ArtworkKind;
  label: string;
  featured?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "absolute inset-0 overflow-hidden bg-[#0a0a0a]",
        featured && "rounded-[3rem]"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(229,199,125,0.22),transparent_28%),linear-gradient(135deg,#050505_0%,#18120a_45%,#060606_100%)]" />
      <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl" />
      <div className="absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      {kind === "clock" && (
        <motion.div
          className="absolute left-1/2 top-1/2 aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/45 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.95),rgba(239,225,179,0.74)_26%,rgba(69,46,10,0.88)_27%,rgba(12,12,12,0.88)_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.55),inset_0_0_50px_rgba(212,175,55,0.22)]"
          whileHover={{ scale: 1.04, rotate: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="absolute inset-[9%] rounded-full border border-[#E5C77D]/35" />
          <span className="absolute left-1/2 top-1/2 h-[28%] w-px origin-bottom -translate-x-1/2 -translate-y-full bg-[#E5C77D]" />
          <span className="absolute left-1/2 top-1/2 h-px w-[24%] origin-left bg-[#E5C77D]" />
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]" />
          {["12", "3", "6", "9"].map((hour, index) => (
            <span
              key={hour}
              className={cn(
                "absolute font-display text-lg text-[#fff0b8]/85",
                index === 0 && "left-1/2 top-[9%] -translate-x-1/2",
                index === 1 && "right-[10%] top-1/2 -translate-y-1/2",
                index === 2 && "bottom-[7%] left-1/2 -translate-x-1/2",
                index === 3 && "left-[10%] top-1/2 -translate-y-1/2"
              )}
            >
              {hour}
            </span>
          ))}
        </motion.div>
      )}

      {kind === "nameplate" && (
        <motion.div
          className="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-[#D4AF37]/45 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(212,175,55,0.20)_36%,rgba(9,9,9,0.94)_100%)] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.55),inset_0_0_45px_rgba(212,175,55,0.18)]"
          whileHover={{ scale: 1.04, y: -4 }}
        >
          <div className="mx-auto mb-5 h-px w-24 bg-gradient-to-r from-transparent via-[#E5C77D] to-transparent" />
          <p className="font-display text-4xl italic text-[#fff0b8]">The Mehtas</p>
          <p className="mt-3 text-xs uppercase tracking-[0.32em] text-white/58">
            Custom Name Plate
          </p>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#E5C77D] to-transparent" />
        </motion.div>
      )}

      {kind === "gift" && (
        <motion.div
          className="absolute left-1/2 top-1/2 grid h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-[#D4AF37]/45 bg-[linear-gradient(145deg,rgba(212,175,55,0.88),rgba(111,73,13,0.78)_48%,rgba(15,15,15,0.92)_49%)] shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
          whileHover={{ scale: 1.04, rotate: -1 }}
        >
          <span className="absolute left-1/2 top-0 h-full w-7 -translate-x-1/2 bg-[#fff0b8]/70" />
          <span className="absolute left-0 top-1/2 h-7 w-full -translate-y-1/2 bg-[#fff0b8]/70" />
          <span className="relative z-10 rounded-full border border-black/15 bg-black/40 px-5 py-3 font-display text-2xl text-[#fff0b8] backdrop-blur">
            With Love
          </span>
        </motion.div>
      )}

      {kind === "decor" && (
        <motion.div
          className="absolute left-1/2 top-1/2 h-[72%] w-[66%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.2rem] border border-[#D4AF37]/45 bg-[#080808] shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
          whileHover={{ scale: 1.035 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.82),transparent_12%),radial-gradient(circle_at_64%_42%,rgba(229,199,125,0.78),transparent_16%),radial-gradient(circle_at_42%_68%,rgba(212,175,55,0.52),transparent_18%),linear-gradient(135deg,#050505,#2b210f_48%,#070707)]" />
          <div className="absolute inset-x-[-20%] top-1/2 h-10 -rotate-12 bg-[#fff0b8]/40 blur-sm" />
          <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#E5C77D] to-transparent" />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

function HeroSection({
  refProp,
  heroY,
}: {
  refProp: RefObject<HTMLElement | null>;
  heroY: MotionValue<number>;
}) {
  return (
    <section
      ref={refProp}
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32 md:px-8 lg:px-12 lg:pt-36"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_30%,rgba(229,199,125,0.22),transparent_28%),radial-gradient(circle_at_20%_14%,rgba(255,255,255,0.09),transparent_26%),linear-gradient(90deg,#080808_0%,rgba(8,8,8,0.82)_48%,rgba(8,8,8,0.42)_100%),linear-gradient(180deg,rgba(8,8,8,0.10)_0%,#080808_94%)]" />
        <div className="absolute right-[-12%] top-24 hidden h-[720px] w-[720px] opacity-80 lg:block">
          <ProductArtwork kind="clock" label="Resin Passion luxury resin wall clock" featured />
        </div>
      </motion.div>
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/25 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C77D] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.9)]" />
            Handmade in Mumbai
          </div>
          <h1 className="text-balance font-display text-6xl leading-[0.88] tracking-[-0.055em] text-white md:text-8xl lg:text-[8.5rem]">
            Every Memory Deserves Resin Passion
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Handcrafted resin clocks, personalized name plates, and luxury gifts
            designed to celebrate life&apos;s most meaningful moments.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="#contact" variant="gold">
              Customize Your Piece
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#collection" variant="glass">
              <Play className="h-4 w-4" />
              Explore Collection
            </MagneticButton>
          </div>
          <div className="mt-10 grid max-w-3xl gap-3 text-sm text-white/62 sm:grid-cols-3">
            {["Custom orders", "Premium materials", "WhatsApp consultation"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#E5C77D]" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 text-center text-xs uppercase tracking-[0.4em] text-white/45 md:block">
        <span>Scroll</span>
        <motion.div
          className="mx-auto mt-3 h-12 w-px bg-gradient-to-b from-[#E5C77D] to-transparent"
          animate={{ scaleY: [0.45, 1, 0.45], opacity: [0.35, 1, 0.35] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        />
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="relative px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="The atelier"
          title="Crafted By Hand. Made With Heart."
          description="Each creation begins as a conversation: a home, a celebration, a name, a date, a feeling. Then it is poured, layered, cured, finished, and polished until the memory feels permanent."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            ["The idea", "We translate your story into colors, materials, initials, textures, florals, and gold accents."],
            ["The making", "Every piece is poured slowly, watched carefully, and finished by hand for depth and shine."],
            ["The reveal", "The final artwork arrives ready to gift, style, and keep as an heirloom-worthy object."],
          ].map(([title, copy], index) => (
            <article
              key={title}
              data-reveal
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5",
                index === 1 && "lg:mt-16"
              )}
            >
              <div className="relative h-80 overflow-hidden rounded-[2rem]">
                <ProductArtwork
                  kind={(["nameplate", "decor", "gift"] as ArtworkKind[])[index]}
                  label={`${title} resin art process`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
              <div className="p-3 pt-6">
                <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-3xl text-white">{title}</h3>
                <p className="mt-3 leading-7 text-white/62">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="collection" className="relative bg-[#0d0d0d] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Featured products"
          title="These are not products. These are handcrafted memories."
          description="Explore custom pieces made for homes, couples, gifting moments, and luxury interiors."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.title}
              data-reveal
              className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#111111] p-3 transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_24px_80px_rgba(212,175,55,0.14)]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5C77D] to-transparent" />
              </div>
              <div className="relative h-72 overflow-hidden rounded-[1.75rem]">
                <ProductArtwork kind={product.artwork} label={product.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-2xl text-white">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{product.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Commission journey"
          title="A refined process for a personal work of art."
          description="From first WhatsApp message to final delivery, the experience is designed to feel clear, premium, and deeply personal."
        />
        <div className="relative mt-16 grid gap-5 lg:grid-cols-5">
          <div className="absolute left-0 top-12 hidden h-px w-full bg-white/10 lg:block" />
          <motion.div
            className="absolute left-0 top-12 hidden h-px bg-gradient-to-r from-[#D4AF37] to-transparent lg:block"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          {processSteps.map((step, index) => (
            <div
              key={step}
              data-reveal
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur"
            >
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-[#D4AF37]/40 bg-[#0d0d0d] font-display text-xl text-[#E5C77D]">
                {index + 1}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-white">{step}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                {index === 0 && "Send references, size, occasion, name/date, and color direction."}
                {index === 1 && "Receive guidance on styling, materials, budget, and feasibility."}
                {index === 2 && "Your piece is layered, cured, detailed, and polished by hand."}
                {index === 3 && "Finish, shine, edges, personalization, and packaging are checked."}
                {index === 4 && "Delivered carefully so the unboxing feels as special as the piece."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [activeGallery, setActiveGallery] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-[#0b0b0b] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Gallery"
          title="Editorial details, luminous finishes, and pieces made to be remembered."
          description="A visual moodboard for clocks, name plates, keepsakes, and luxury resin decor."
        />
        <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.title}
              type="button"
              data-reveal
              onClick={() => setActiveGallery(index)}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-white/10 text-left",
                image.span
              )}
            >
              <ProductArtwork kind={image.artwork} label={image.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full border border-[#D4AF37]/40 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#E5C77D] backdrop-blur">
                  View detail
                </span>
                <p className="mt-3 font-display text-2xl text-white">{image.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeGallery !== null && (
          <motion.button
            type="button"
            className="fixed inset-0 z-[90] grid cursor-zoom-out place-items-center bg-black/88 p-5 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveGallery(null)}
            aria-label="Close gallery image"
          >
            <motion.div
              className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10"
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
            >
              <ProductArtwork
                kind={galleryImages[activeGallery].artwork}
                label={galleryImages[activeGallery].title}
                featured
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Why choose us"
          title="A premium gifting experience from concept to creation."
          description="Luxury comes from restraint, patience, quality, and emotional precision."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, copy, Icon]) => (
            <article
              key={title as string}
              data-reveal
              className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 transition duration-500 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/[0.06]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#D4AF37]/10 text-[#E5C77D] ring-1 ring-[#D4AF37]/20 transition group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-white/58">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({
  activeTestimonial,
  setActiveTestimonial,
}: {
  activeTestimonial: number;
  setActiveTestimonial: (index: number) => void;
}) {
  const testimonial = testimonials[activeTestimonial];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#101010] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <SectionIntro
          eyebrow="Client words"
          title="Proof that personal can still feel premium."
          description="Custom orders made for people who care about meaning, finish, and a memorable reveal."
        />
        <div data-reveal className="mt-14 rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl md:p-10">
          <div className="mx-auto mb-7 flex w-fit gap-1 text-[#E5C77D]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.55 }}
            >
              <blockquote className="mx-auto max-w-3xl font-display text-3xl leading-tight text-white md:text-5xl">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-[#D4AF37]/30"
                />
                <div className="text-left">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  activeTestimonial === index ? "w-9 bg-[#D4AF37]" : "w-2.5 bg-white/20"
                )}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OccasionsSection() {
  return (
    <section id="occasions" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Perfect for"
          title="When the occasion deserves more than a standard gift."
          description="Each piece is designed to carry the emotion of a milestone into a home."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map(([title, Icon]) => (
            <div
              key={title as string}
              data-reveal
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-7"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#D4AF37]/10 blur-2xl transition group-hover:bg-[#D4AF37]/20" />
              <Icon className="h-8 w-8 text-[#E5C77D]" />
              <h3 className="mt-8 font-display text-3xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Personalized resin art made to feel intimate, polished, and unforgettable.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="bg-[#0b0b0b] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <SectionIntro
            align="left"
            eyebrow="Instagram"
            title="Follow the latest pours, reveals, and behind-the-scenes craft."
            description="Connected to the Resin Passion Instagram presence for high-intent visitors coming from social."
          />
          <MagneticButton href={instagramUrl} external variant="glass">
            <Instagram className="h-4 w-4" />
            Open Instagram
          </MagneticButton>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {instagramPosts.map((post, index) => (
            <a
              key={post}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
            >
              <div className="relative aspect-[4/5]">
                <ProductArtwork
                  kind={galleryImages[index % galleryImages.length].artwork}
                  label={post}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-semibold text-white">{post}</p>
                <p className="mt-1 text-sm text-white/50">@resinpassion2026</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          align="left"
          eyebrow="FAQ"
          title="Everything you need to know before commissioning."
          description="Clear answers for custom resin clocks, name plates, gifting timelines, and ordering."
        />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              data-reveal
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.045]"
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-[#E5C77D] transition",
                    open === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 leading-7 text-white/58">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [productType, setProductType] = useState("Resin Wall Clock");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello Resin Passion, I would like to start a custom order.",
      `Name: ${formData.get("name") || ""}`,
      `Phone: ${formData.get("phone") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Product Type: ${productType}`,
      `Requirements: ${formData.get("requirements") || ""}`,
    ].join("\n");

    window.open(getWhatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.14),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-[#D4AF37]/20 bg-[#111111]/80 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
            Start your custom order
          </p>
          <h2 className="mt-5 font-display text-5xl leading-none tracking-[-0.04em] text-white md:text-7xl">
            Let&apos;s turn your story into a piece of art.
          </h2>
          <p className="mt-6 max-w-xl leading-8 text-white/62">
            Share your occasion, preferred colors, names or dates, and reference
            ideas. You&apos;ll receive a guided consultation before the piece is made.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-white/64 sm:grid-cols-2">
            {["Limited custom slots", "Mumbai-based craft", "Premium gift packaging", "Fast WhatsApp response"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#E5C77D]" />
                  {item}
                </div>
              )
            )}
          </div>
        </div>
        <form data-reveal onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-black/30 p-5 md:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" required placeholder="Name" className="border-white/10 bg-white/[0.06] text-white placeholder:text-white/35" />
            <Input name="phone" required placeholder="Phone" className="border-white/10 bg-white/[0.06] text-white placeholder:text-white/35" />
            <Input name="email" type="email" placeholder="Email" className="border-white/10 bg-white/[0.06] text-white placeholder:text-white/35" />
            <select
              value={productType}
              onChange={(event) => setProductType(event.target.value)}
              className="h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none focus:ring-2 focus:ring-[#D4AF37]/30"
            >
              {["Resin Wall Clock", "Personalized Name Plate", "Wedding Gift", "Anniversary Gift", "Housewarming Gift", "Luxury Decor Piece"].map(
                (item) => (
                  <option key={item} className="bg-[#111111] text-white">
                    {item}
                  </option>
                )
              )}
            </select>
          </div>
          <Textarea
            name="requirements"
            required
            placeholder="Tell us about your custom requirements, size, colors, names, dates, or occasion..."
            className="mt-4 min-h-36 border-white/10 bg-white/[0.06] text-white placeholder:text-white/35"
          />
          <Button type="submit" size="lg" className="mt-5 w-full bg-[#D4AF37] text-black hover:bg-[#E5C77D]">
            <MessageCircle className="h-4 w-4" />
            Start Your Custom Order
          </Button>
        </form>
      </div>
    </section>
  );
}

function StickyWhatsapp() {
  return (
    <motion.a
      href={getWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.35)] md:h-16 md:w-16"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Start WhatsApp inquiry"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}

function MagneticButton({
  href,
  children,
  variant,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant: "gold" | "glass";
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.035, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold transition",
        variant === "gold"
          ? "bg-[#D4AF37] text-black shadow-[0_18px_55px_rgba(212,175,55,0.28)] hover:bg-[#E5C77D]"
          : "border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl hover:border-[#D4AF37]/50"
      )}
    >
      {children}
    </motion.a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      data-reveal
      className={cn(
        "max-w-4xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance font-display text-4xl leading-[0.98] tracking-[-0.045em] text-white md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/58 md:text-xl">
        {description}
      </p>
    </div>
  );
}
