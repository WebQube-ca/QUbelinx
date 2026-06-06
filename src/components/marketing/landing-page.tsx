"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Building2,
  CakeSlice,
  ChefHat,
  Gift,
  Instagram,
  PackageCheck,
  Quote,
  Send,
  Sparkles,
  Star,
  Timer,
  WheatOff,
} from "lucide-react";
import { cn } from "@/lib/utils";

const instagramUrl = "https://www.instagram.com/melt.bombay?igsh=Y21oYjlnenl5cnFv";

const heroImage =
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1600&q=88";

const collections = [
  {
    title: "Stuffed Cookies",
    copy: "Molten centres, crisp edges, and flavours that feel made for late-night gifting.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=86",
    accent: "from-[#F5D8E2]/80 to-[#C8A96B]/40",
  },
  {
    title: "Cookie Tins",
    copy: "Keepsake tins layered with handcrafted cookies, tissue, ribbon, and a quiet sense of occasion.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=86",
    accent: "from-[#DFA8B6]/70 to-[#4A2C2A]/40",
  },
  {
    title: "Brownies",
    copy: "Dense, glossy, chocolate-rich squares baked in small batches for a deep cocoa finish.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=86",
    accent: "from-[#4A2C2A]/70 to-[#C8A96B]/40",
  },
  {
    title: "Gifting Boxes",
    copy: "Pink, polished, and personal. Designed for birthdays, weddings, launches, and boardroom thank-yous.",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=86",
    accent: "from-[#F5D8E2]/90 to-[#DFA8B6]/50",
  },
];

const signatureProducts = [
  {
    name: "Biscoff Melt Cookie",
    note: "Spiced caramel core, vanilla crumb, gold-dusted finish",
    price: "From ₹240",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1100&q=86",
  },
  {
    name: "Dark Chocolate Brownies",
    note: "Fudgy eggless chocolate, sea salt, glossy crackle top",
    price: "From ₹620",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=1100&q=86",
  },
  {
    name: "Celebration Dessert Box",
    note: "Cookies, brownies, note card, ribboned luxury packaging",
    price: "From ₹1,450",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1100&q=86",
  },
  {
    name: "Signature Cookie Tin",
    note: "A curated tin for hosts, founders, families, and clients",
    price: "From ₹1,250",
    image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&w=1100&q=86",
  },
];

const storyMoments = [
  ["01", "A Mumbai kitchen", "MELT BOMBAY began with the feeling of a warm cookie being broken open at the table."],
  ["02", "Eggless, without compromise", "Every recipe is developed to feel rich, tender, and indulgent while remaining 100% eggless."],
  ["03", "Wrapped like a keepsake", "Packaging is treated as part of the dessert: tactile, pink, polished, and gift-ready."],
];

const reasons = [
  ["100% Eggless", "No eggs, no compromise on texture, structure, or indulgence.", WheatOff],
  ["Small Batch", "Baked in measured runs so every box feels fresh and intentional.", Timer],
  ["Handcrafted", "Piped, folded, filled, packed, and finished by human hands.", ChefHat],
  ["Premium Ingredients", "Couverture chocolate, real butter notes, nuts, spices, and curated fillings.", Sparkles],
  ["Luxury Packaging", "Designed to arrive like a present before the first bite.", PackageCheck],
  ["Freshly Baked", "Made close to dispatch for that just-baked fragrance and softness.", CakeSlice],
] as const;

const testimonials = [
  {
    name: "Rhea M.",
    role: "Birthday gifting order",
    quote: "The box looked like a luxury beauty drop and tasted even better. Everyone asked where it was from.",
  },
  {
    name: "Aarav S.",
    role: "Corporate client",
    quote: "We sent MELT BOMBAY tins to partners and the response was immediate. Premium, polished, memorable.",
  },
  {
    name: "Naina K.",
    role: "Cookie obsessive",
    quote: "I usually avoid eggless desserts. These changed my mind in one bite. The stuffed cookies are unreal.",
  },
];

const socialPosts = [
  "https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=86",
];

const process = ["Choose", "Order", "Bake", "Deliver", "Enjoy"];

export function LandingPage() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.18]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 64, filter: "blur(18px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 84%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: "inset(18% 18% 18% 18% round 42px)", scale: 1.08 },
          {
            clipPath: "inset(0% 0% 0% 0% round 42px)",
            scale: 1,
            duration: 1.35,
            ease: "power4.out",
            scrollTrigger: { trigger: element, start: "top 82%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((element) => {
        gsap.to(element, {
          yPercent: Number(element.dataset.drift) || -12,
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
    }, 4400);
    return () => window.clearInterval(timer);
  }, []);

  const spotlight = useMemo(
    () => ({
      background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(200,169,107,0.22), transparent 25%)`,
    }),
    [cursor]
  );

  return (
    <div
      ref={pageRef}
      className="melt-surface noise-overlay relative overflow-hidden bg-[#FFF8F3] text-[#4A2C2A]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setCursor({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-[#DFA8B6] via-[#C8A96B] to-[#4A2C2A]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80" style={spotlight} />
      <AmbientLightField />

      <HeroSection heroY={heroY} heroOpacity={heroOpacity} />
      <FeaturedCollections />
      <StorySection />
      <SignatureProducts active={activeProduct} setActive={setActiveProduct} />
      <WhyMelt />
      <CorporateGifting />
      <CustomerLove active={activeTestimonial} setActive={setActiveTestimonial} />
      <InstagramExperience />
      <OrderProcess />
      <FinalCta />
    </div>
  );
}

function AmbientLightField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#F5D8E2]/60 blur-3xl"
        animate={{ x: [0, 54, 0], y: [0, -32, 0], opacity: [0.45, 0.72, 0.45] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#C8A96B]/24 blur-3xl"
        animate={{ x: [0, -48, 0], y: [0, 36, 0], opacity: [0.28, 0.58, 0.28] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-[#DFA8B6]/28 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.42, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function HeroSection({
  heroY,
  heroOpacity,
}: {
  heroY: MotionValue<number>;
  heroOpacity: MotionValue<number>;
}) {
  return (
    <section className="relative z-10 min-h-screen overflow-hidden px-5 pb-16 pt-28 md:px-8 lg:px-12">
      <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
        <Image src={heroImage} alt="Luxury cookies styled on a warm bakery table" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,248,243,0.96)_0%,rgba(255,248,243,0.78)_42%,rgba(255,248,243,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(245,216,226,0.62),transparent_36%)]" />
      </motion.div>

      <FloatingCookie className="left-[7%] top-[22%]" delay={0} />
      <FloatingCookie className="right-[10%] top-[18%] hidden md:block" delay={1.2} />
      <FloatingCookie className="bottom-[16%] right-[33%] hidden lg:block" delay={2.1} />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-[#C8A96B]/30 bg-white/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.34em] text-[#4A2C2A]/75 shadow-sm backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-[#C8A96B]" />
            Lower Parel, Mumbai
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.12, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-5xl font-display text-[clamp(4rem,12vw,10.5rem)] leading-[0.82] tracking-[-0.075em] text-[#4A2C2A]"
          >
            Eggless Desserts That Melt In Your Mouth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-lg leading-8 text-[#4A2C2A]/72 md:text-xl"
          >
            Thoughtfully baked in Mumbai using premium ingredients, handcrafted recipes, and gift-ready packaging
            designed to make every box feel like a love letter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton href={instagramUrl} external>
              Order Now <Send className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#collections" variant="outline">
              Explore Collection <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-sm text-[#4A2C2A]/68">
            {["100% Eggless", "Small Batch", "Luxury Gifting"].map((item) => (
              <div key={item} className="rounded-3xl border border-[#4A2C2A]/10 bg-white/42 p-4 shadow-sm backdrop-blur-xl">
                <Star className="mb-3 h-4 w-4 fill-[#C8A96B] text-[#C8A96B]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[34rem]"
        >
          <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-br from-[#F5D8E2]/72 via-white/30 to-[#C8A96B]/22 shadow-[0_45px_120px_rgba(74,44,42,0.18)] backdrop-blur-2xl" />
          <div className="absolute inset-3 overflow-hidden rounded-[3.1rem]">
            <Image
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1300&q=88"
              alt="Molten stuffed cookies arranged in a premium dessert box"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/68 via-[#4A2C2A]/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(245,216,226,0.42),transparent_34%)]" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/50 bg-white/55 p-5 shadow-xl backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[#4A2C2A]/50">Today&apos;s signature</p>
            <p className="mt-2 font-display text-3xl tracking-[-0.04em]">Molten cookie boxes, baked to order.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedCollections() {
  return (
    <section id="collections" className="relative z-10 px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Featured collections"
          title="A dessert wardrobe for every kind of craving."
          copy="Editorial, indulgent, and designed to convert impulse into an order. Each collection is built for taste, texture, and the moment it is unboxed."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {collections.map((collection, index) => (
            <motion.a
              key={collection.title}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className={cn(
                "group relative min-h-[30rem] overflow-hidden rounded-[2.75rem] bg-[#4A2C2A] p-6 text-white shadow-[0_28px_80px_rgba(74,44,42,0.14)]",
                index === 0 && "md:row-span-2 md:min-h-[42rem]"
              )}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={collection.image} alt={collection.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className={cn("absolute inset-0 bg-gradient-to-t", collection.accent)} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1716]/80 via-[#2B1716]/16 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="w-fit rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.28em] backdrop-blur-xl">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-5xl tracking-[-0.055em] md:text-6xl">{collection.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-white/78">{collection.copy}</p>
                  <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#4A2C2A] transition group-hover:bg-[#F5D8E2]">
                    Order this collection <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="relative z-10 overflow-hidden bg-[#4A2C2A] px-5 py-24 text-[#FFF8F3] md:px-8 lg:px-12 lg:py-32">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_18%_12%,rgba(245,216,226,0.20),transparent_32%),radial-gradient(circle_at_82%_78%,rgba(200,169,107,0.18),transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <SectionKicker>Our story</SectionKicker>
          <h2 className="mt-6 font-display text-6xl leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Born from the pause before the first bite.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#FFF8F3]/70">
            MELT BOMBAY is a founder-led dessert atelier in Lower Parel, created for people who believe a dessert
            box should feel as considered as perfume, jewellery, or flowers.
          </p>
          <MagneticButton href={instagramUrl} external className="mt-9 bg-[#F5D8E2] text-[#4A2C2A] hover:bg-white">
            Meet us on Instagram <Instagram className="h-4 w-4" />
          </MagneticButton>
        </div>
        <div className="grid gap-5">
          {storyMoments.map(([step, title, copy], index) => (
            <div
              key={title}
              data-reveal
              className="group grid gap-5 rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl md:grid-cols-[8rem_1fr]"
            >
              <span className="font-display text-6xl italic tracking-[-0.08em] text-[#C8A96B]">{step}</span>
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-[#F5D8E2]/70">Chapter {index + 1}</p>
                <h3 className="mt-3 font-display text-4xl tracking-[-0.05em]">{title}</h3>
                <p className="mt-3 leading-7 text-[#FFF8F3]/64">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignatureProducts({
  active,
  setActive,
}: {
  active: number;
  setActive: (index: number) => void;
}) {
  return (
    <section id="signature" className="relative z-10 px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Signature products"
          title="Built like objects of desire. Baked like comfort."
          copy="A product gallery that gives shoppers the confidence to DM, enquire, and order without needing a conventional catalogue."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-image-reveal className="relative min-h-[42rem] overflow-hidden rounded-[3rem] bg-[#F5D8E2] shadow-[0_35px_90px_rgba(74,44,42,0.16)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={signatureProducts[active].name}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image src={signatureProducts[active].image} alt={signatureProducts[active].name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/72 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-7 left-7 right-7 rounded-[2rem] border border-white/45 bg-white/55 p-6 text-[#4A2C2A] backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[#4A2C2A]/52">Quick view</p>
              <h3 className="mt-3 font-display text-4xl tracking-[-0.05em]">{signatureProducts[active].name}</h3>
              <p className="mt-3 leading-7 text-[#4A2C2A]/68">{signatureProducts[active].note}</p>
            </div>
          </div>
          <div className="grid content-center gap-4">
            {signatureProducts.map((product, index) => (
              <button
                key={product.name}
                type="button"
                data-reveal
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={cn(
                  "group rounded-[2rem] border p-5 text-left transition duration-500",
                  active === index
                    ? "border-[#C8A96B]/55 bg-[#4A2C2A] text-[#FFF8F3] shadow-[0_24px_70px_rgba(74,44,42,0.16)]"
                    : "border-[#4A2C2A]/10 bg-white/50 text-[#4A2C2A] hover:border-[#DFA8B6]"
                )}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] opacity-55">0{index + 1}</p>
                    <h3 className="mt-3 font-display text-4xl tracking-[-0.05em]">{product.name}</h3>
                    <p className="mt-2 max-w-xl leading-7 opacity-68">{product.note}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#F5D8E2] px-4 py-2 text-sm font-bold text-[#4A2C2A]">
                    {product.price}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyMelt() {
  return (
    <section id="why" className="relative z-10 px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl rounded-[3.25rem] border border-[#4A2C2A]/10 bg-white/42 p-6 shadow-[0_30px_100px_rgba(74,44,42,0.10)] backdrop-blur-2xl md:p-10">
        <SectionIntro
          eyebrow="Why Melt"
          title="The trust signals that make premium feel easy to buy."
          copy="Every reason to order is embedded into the experience: ingredients, craft, freshness, packaging, and the comfort of an eggless promise."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, copy, Icon]) => (
            <motion.div
              key={title}
              data-reveal
              whileHover={{ y: -8, rotate: -0.35 }}
              className="group rounded-[2.25rem] border border-[#4A2C2A]/10 bg-[#FFF8F3]/72 p-6 transition hover:border-[#C8A96B]/50"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#F5D8E2] text-[#4A2C2A] shadow-[0_16px_35px_rgba(223,168,182,0.35)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-7 font-display text-3xl tracking-[-0.045em]">{title}</h3>
              <p className="mt-3 leading-7 text-[#4A2C2A]/66">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CorporateGifting() {
  return (
    <section id="gifting" className="relative z-10 overflow-hidden bg-[#F5D8E2] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-[#C8A96B]/35 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div data-reveal>
          <SectionKicker>Corporate gifting</SectionKicker>
          <h2 className="mt-6 font-display text-6xl leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Gifts that feel personal at enterprise scale.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4A2C2A]/72">
            From launch hampers and wedding favours to festive client boxes, MELT BOMBAY builds dessert gifting
            experiences for companies, events, founders, and celebrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Corporate Gifts", "Events", "Weddings", "Celebrations"].map((item) => (
              <span key={item} className="rounded-full border border-[#4A2C2A]/12 bg-white/45 px-5 py-3 text-sm font-bold text-[#4A2C2A]/72 backdrop-blur">
                {item}
              </span>
            ))}
          </div>
          <MagneticButton href={instagramUrl} external className="mt-10">
            Enquire for gifting <Building2 className="h-4 w-4" />
          </MagneticButton>
        </div>
        <div data-image-reveal className="relative min-h-[38rem] overflow-hidden rounded-[3rem] shadow-[0_35px_100px_rgba(74,44,42,0.22)]">
          <Image src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1300&q=88" alt="Premium pink gift boxes and ribbons" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/72 via-transparent to-transparent" />
          <div className="absolute bottom-7 left-7 right-7 rounded-[2rem] bg-white/62 p-6 backdrop-blur-2xl">
            <Gift className="h-8 w-8 text-[#C8A96B]" />
            <p className="mt-5 font-display text-4xl tracking-[-0.055em]">Custom notes, ribbons, tins, sleeves, and delivery coordination.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomerLove({
  active,
  setActive,
}: {
  active: number;
  setActive: (index: number) => void;
}) {
  return (
    <section id="love" className="relative z-10 bg-[#4A2C2A] px-5 py-24 text-[#FFF8F3] md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <SectionKicker>Customer love</SectionKicker>
        <div className="relative mx-auto mt-10 min-h-[24rem] max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={testimonials[active].name}
              initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(14px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[3rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_35px_100px_rgba(0,0,0,0.24)] backdrop-blur-2xl md:p-14"
            >
              <Quote className="mx-auto h-10 w-10 text-[#C8A96B]" />
              <blockquote className="mt-8 font-display text-4xl leading-[1.02] tracking-[-0.055em] md:text-7xl">
                “{testimonials[active].quote}”
              </blockquote>
              <figcaption className="mt-8 text-[#FFF8F3]/62">
                <span className="font-bold text-[#FFF8F3]">{testimonials[active].name}</span> · {testimonials[active].role}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActive(index)}
              className={cn("h-2.5 rounded-full transition-all", active === index ? "w-10 bg-[#F5D8E2]" : "w-2.5 bg-white/24")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramExperience() {
  return (
    <section id="instagram" className="relative z-10 px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Instagram experience"
            title="A feed made for cravings, screenshots, and DMs."
            copy="Masonry-style moments bring social proof into the site while keeping the brand world tactile and warm."
          />
          <MagneticButton href={instagramUrl} external variant="outline">
            Follow @melt.bombay <Instagram className="h-4 w-4" />
          </MagneticButton>
        </div>
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {socialPosts.map((image, index) => (
            <motion.a
              key={image}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              whileHover={{ y: -8 }}
              className={cn(
                "group relative mb-5 block overflow-hidden rounded-[2.5rem] bg-[#F5D8E2] shadow-[0_22px_70px_rgba(74,44,42,0.12)]",
                index % 3 === 1 ? "h-[31rem]" : "h-[24rem]"
              )}
            >
              <Image src={image} alt="MELT BOMBAY Instagram dessert moment" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#4A2C2A]/0 transition group-hover:bg-[#4A2C2A]/30" />
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-[#4A2C2A] opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
                View post <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderProcess() {
  return (
    <section id="process" className="relative z-10 px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Order process"
          title="From craving to doorstep, beautifully choreographed."
          copy="A simple ordering rhythm that keeps the craft visible and the next step obvious."
        />
        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {process.map((step, index) => (
            <div key={step} data-reveal className="relative rounded-[2rem] border border-[#4A2C2A]/10 bg-white/52 p-5 shadow-sm backdrop-blur">
              <span className="font-display text-5xl italic tracking-[-0.08em] text-[#DFA8B6]">0{index + 1}</span>
              <h3 className="mt-8 font-display text-3xl tracking-[-0.05em]">{step}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4A2C2A]/62">
                {index === 0 && "Pick a collection, box, or gifting format."}
                {index === 1 && "DM the team and confirm details."}
                {index === 2 && "Your desserts are freshly baked in small batches."}
                {index === 3 && "Packed, ribboned, and sent across Mumbai."}
                {index === 4 && "Break, share, melt, repeat."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="order" className="relative z-10 px-5 pb-24 pt-8 md:px-8 lg:px-12 lg:pb-32">
      <div className="mx-auto overflow-hidden rounded-[3.25rem] bg-[#4A2C2A] p-8 text-center text-[#FFF8F3] shadow-[0_45px_120px_rgba(74,44,42,0.22)] md:p-16 lg:p-24">
        <div className="mx-auto max-w-5xl">
          <SectionKicker>Fresh batches open weekly</SectionKicker>
          <h2 className="mt-7 font-display text-6xl leading-[0.88] tracking-[-0.065em] md:text-9xl">
            Your Next Favorite Dessert Awaits.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#FFF8F3]/68">
            Order premium eggless cookies, brownies, tins, and gifting boxes from Lower Parel, Mumbai.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href={instagramUrl} external className="bg-[#F5D8E2] text-[#4A2C2A] hover:bg-white">
              Order on Instagram <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div data-reveal className="max-w-4xl">
      <SectionKicker>{eyebrow}</SectionKicker>
      <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.06em] text-[#4A2C2A] md:text-7xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4A2C2A]/68">{copy}</p>
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.36em] text-[#C8A96B]">
      <span className="h-px w-10 bg-[#C8A96B]" />
      {children}
    </p>
  );
}

function MagneticButton({
  href,
  external,
  variant = "solid",
  className,
  children,
}: {
  href: string;
  external?: boolean;
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.035, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-black uppercase tracking-[0.2em] shadow-[0_18px_45px_rgba(74,44,42,0.16)] transition",
        variant === "solid"
          ? "bg-[#4A2C2A] text-[#FFF8F3] hover:bg-[#2B1716]"
          : "border border-[#4A2C2A]/16 bg-white/45 text-[#4A2C2A] backdrop-blur-xl hover:border-[#C8A96B]/60 hover:bg-white",
        className
      )}
    >
      {children}
    </motion.a>
  );
}

function FloatingCookie({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      aria-hidden
      className={cn("absolute z-10 h-20 w-20 rounded-full bg-[#9B5A3C] shadow-[inset_-12px_-16px_24px_rgba(74,44,42,0.28),0_22px_45px_rgba(74,44,42,0.16)]", className)}
      animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="absolute left-5 top-5 h-3 w-3 rounded-full bg-[#4A2C2A]" />
      <span className="absolute right-5 top-8 h-2.5 w-2.5 rounded-full bg-[#4A2C2A]" />
      <span className="absolute bottom-5 left-8 h-3.5 w-3.5 rounded-full bg-[#4A2C2A]" />
    </motion.div>
  );
}

