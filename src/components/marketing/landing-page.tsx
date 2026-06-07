"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Eye,
  Link2,
  MessageCircle,
  MousePointerClick,
  Phone,
  Play,
  Share2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  features,
  howItWorks,
  premiumCards,
  pricingPlans,
  templates,
  testimonials,
} from "@/data/linkhub";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=88";
const creatorImage =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=86";

export function LandingPage() {
  const [annual, setAnnual] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.24], [0, 110]);
  const orb = useMemo(
    () => ({
      background:
        "radial-gradient(circle at 30% 10%, rgba(129,140,248,0.42), transparent 28%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.24), transparent 30%), radial-gradient(circle at 50% 70%, rgba(236,72,153,0.20), transparent 35%)",
    }),
    []
  );

  return (
    <div className="relative overflow-hidden bg-[#f7f8ff] text-slate-950">
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="pointer-events-none fixed inset-0 opacity-80" style={orb} />
      <HeroSection heroY={heroY} />
      <LogoCloud />
      <FeatureCards />
      <HowItWorks />
      <TemplatesPreview />
      <AnalyticsPreview />
      <Testimonials />
      <Pricing annual={annual} setAnnual={setAnnual} />
      <FinalCta />
    </div>
  );
}

function HeroSection({ heroY }: { heroY: MotionValue<number> }) {
  return (
    <section className="relative z-10 min-h-screen px-5 pb-16 pt-28 md:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-sm font-bold text-violet-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Not just a link tool. A conversion engine for Instagram traffic.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.08, duration: 0.85 }}
            className="mt-7 max-w-5xl text-balance text-6xl font-black leading-[0.9] tracking-[-0.075em] text-slate-950 md:text-8xl"
          >
            Turn your Instagram bio into a high-converting link hub
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
          >
            QubeLinx helps creators, local businesses, and growth teams turn profile visits into clicks, bookings,
            WhatsApp conversations, lead captures, and paid offers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.65 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <CtaButton href="/signup">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </CtaButton>
            <CtaButton href="/avastudio" variant="secondary">
              View Demo <Play className="h-4 w-4" />
            </CtaButton>
          </motion.div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["12.8k", "tracked page views"],
              ["18.1%", "sample link CTR"],
              ["5 links", "included free"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white bg-white/70 p-5 shadow-soft backdrop-blur">
                <p className="text-3xl font-black tracking-[-0.04em]">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -left-12 top-16 hidden rounded-[2rem] border border-white bg-white/80 p-4 shadow-2xl backdrop-blur-xl lg:block">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black">WhatsApp lead</p>
                <p className="text-xs text-slate-500">Booked from Instagram</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-5 bottom-24 z-20 hidden rounded-[2rem] border border-white bg-slate-950 p-4 text-white shadow-2xl lg:block">
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">Live CTR</p>
            <p className="mt-1 text-3xl font-black">18.1%</p>
          </div>
          <div className="relative mx-auto max-w-[31rem] rounded-[3.25rem] bg-slate-950 p-4 shadow-[0_50px_140px_rgba(15,23,42,0.28)]">
            <div className="overflow-hidden rounded-[2.75rem] bg-gradient-to-b from-violet-950 via-slate-950 to-slate-900 p-5 text-white">
              <div className="relative h-48 overflow-hidden rounded-[2rem]">
                <Image src={heroImage} alt="Modern creator workspace" fill priority sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/14 p-3 backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">QubeLinx profile</p>
                  <p className="mt-1 text-lg font-black">Ava Studio</p>
                </div>
              </div>
              <ProfileMini />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProfileMini() {
  const links = ["Book a 1:1 strategy call", "Shop the template pack", "WhatsApp for collaborations"];

  return (
    <div className="pt-6">
      <div className="flex items-center gap-4">
        <Image
          src={creatorImage}
          alt="Creator profile"
          width={72}
          height={72}
          className="h-16 w-16 rounded-full object-cover ring-4 ring-white/10"
        />
        <div>
          <p className="text-xl font-black">Ava Studio</p>
          <p className="text-sm text-white/55">Creator systems + launch templates</p>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {links.map((link, index) => (
          <motion.div
            key={link}
            animate={{ y: [0, index === 0 ? -3 : 0, 0] }}
            transition={{ duration: 2.8, delay: index * 0.22, repeat: Infinity }}
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-black",
              index === 0 ? "bg-white text-slate-950" : "bg-white/10 text-white ring-1 ring-white/10"
            )}
          >
            {link}
            <ChevronRight className="h-4 w-4 opacity-60" />
          </motion.div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["WhatsApp", "Call", "Share"].map((item) => (
          <div key={item} className="rounded-2xl bg-white/10 py-3 text-center text-xs font-bold text-white/70">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoCloud() {
  return (
    <section className="relative z-10 px-5 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white bg-white/65 p-5 shadow-soft backdrop-blur-xl">
        <div className="flex flex-col gap-4 text-sm font-bold text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>Built for Instagram-first growth teams</span>
          <div className="flex flex-wrap gap-3">
            {["Creators", "Studios", "Coaches", "Restaurants", "Consultants"].map((item) => (
              <span key={item} className="rounded-full bg-slate-950 px-4 py-2 text-white/76">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <section id="features" className="relative z-10 px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Features"
          title="Everything your Instagram traffic needs after the tap."
          copy="Premium pages, instant contact actions, and analytics that keep creators and businesses focused on revenue."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -8 }}
              className="group rounded-[2.25rem] border border-white bg-white/72 p-6 shadow-soft backdrop-blur-xl transition hover:shadow-2xl"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-400 text-white shadow-lg">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-7 text-2xl font-black tracking-[-0.04em]">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {premiumCards.map((card) => (
            <div key={card.title} className="relative min-h-[25rem] overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl">
              <Image src={card.image} alt={card.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-55" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">{card.label}</p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.055em]">{card.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 bg-slate-950 px-5 py-24 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="How it works"
          title="Launch a better bio funnel in three steps."
          copy="Create your profile, stack conversion links, then use performance signals to keep improving."
          dark
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {howItWorks.map((step, index) => (
            <div key={step.title} className="rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
              <span className="text-6xl font-black tracking-[-0.08em] text-white/12">0{index + 1}</span>
              <h3 className="mt-12 text-3xl font-black tracking-[-0.045em]">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/62">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplatesPreview() {
  return (
    <section id="templates" className="relative z-10 px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Templates preview"
          title="Start from a page that already knows what should convert."
          copy="Creator launches, local business contact flows, and premium brand pages all come with high-intent blocks."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {templates.map((template) => (
            <motion.div
              key={template.name}
              whileHover={{ y: -10, rotate: -0.35 }}
              className="rounded-[2.5rem] border border-white bg-white p-4 shadow-2xl"
            >
              <div className={cn("rounded-[2rem] bg-gradient-to-br p-5 text-white", template.gradient)}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/18 px-3 py-1 text-xs font-bold backdrop-blur">{template.audience}</span>
                  <Share2 className="h-4 w-4" />
                </div>
                <div className="mt-16">
                  <div className="h-16 w-16 rounded-full bg-white/25 ring-4 ring-white/20" />
                  <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]">{template.name}</h3>
                  <div className="mt-6 space-y-3">
                    {template.links.map((link) => (
                      <div key={link} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-950">
                        {link}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalyticsPreview() {
  const rows = [
    ["Book a 1:1 strategy call", 428, 18.4],
    ["Shop the digital template pack", 316, 13.6],
    ["Chat on WhatsApp", 285, 12.2],
    ["Download free growth checklist", 194, 8.3],
  ] as const;

  return (
    <section id="analytics" className="relative z-10 px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionIntro
            eyebrow="Analytics preview"
            title="Simple MVP analytics that show what visitors actually do."
            copy="Track total page views, clicks per link, and basic CTR without burying the signal in enterprise dashboards."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {["Total page views", "Clicks per link", "Basic CTR %"].map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-soft">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[2.75rem] border border-white bg-white/82 p-5 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: TrendingUp, value: "12,842", label: "Page views" },
              { icon: MousePointerClick, value: "2,326", label: "Link clicks" },
              { icon: BarChart3, value: "18.1%", label: "Avg CTR" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-[1.75rem] bg-slate-950 p-5 text-white">
                <Icon className="h-5 w-5 text-cyan-300" />
                <p className="mt-5 text-3xl font-black">{value}</p>
                <p className="mt-1 text-sm text-white/50">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[2rem] bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <p className="font-black">Link performance</p>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">+18%</span>
            </div>
            <div className="mt-5 space-y-4">
              {rows.map(([title, clicks, ctr]) => (
                <div key={title}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-700">{title}</span>
                    <span className="text-slate-500">{clicks} clicks · {ctr}% CTR</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-400" style={{ width: `${ctr * 4}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Testimonials"
          title="Built for founders who care about the click after the click."
          copy="Realistic placeholder stories for creators and businesses moving beyond generic link pages."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2.25rem] border border-white bg-white/78 p-6 shadow-soft backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-black">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-600">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({
  annual,
  setAnnual,
}: {
  annual: boolean;
  setAnnual: (value: boolean) => void;
}) {
  return (
    <section id="pricing" className="relative z-10 px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Pricing"
            title="Start free. Upgrade when Instagram becomes a revenue channel."
            copy="Transparent tiers for creators, solo businesses, and teams that need lead tracking and priority conversion blocks."
          />
          <div className="flex w-fit items-center rounded-full border border-white bg-white p-1 shadow-soft">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn("rounded-full px-5 py-2 text-sm font-black transition", !annual ? "bg-slate-950 text-white" : "text-slate-500")}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn("rounded-full px-5 py-2 text-sm font-black transition", annual ? "bg-slate-950 text-white" : "text-slate-500")}
            >
              Annual - save 20%
            </button>
          </div>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const monthly = Number(plan.price.replace("$", ""));
            const price = plan.price === "$0" || !annual ? plan.price : `$${Math.round(monthly * 0.8)}`;

            return (
              <motion.div
                key={plan.name}
                whileHover={{ y: -8 }}
                className={cn(
                  "relative rounded-[2.5rem] border p-6 shadow-soft",
                  plan.highlighted
                    ? "border-violet-300 bg-slate-950 text-white shadow-2xl"
                    : "border-white bg-white/78 text-slate-950 backdrop-blur-xl"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">{plan.name}</h3>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-black",
                      plan.highlighted ? "bg-cyan-300 text-slate-950" : "bg-violet-100 text-violet-700"
                    )}
                  >
                    {plan.badge}
                  </span>
                </div>
                <p className={cn("mt-4 leading-7", plan.highlighted ? "text-white/62" : "text-slate-600")}>{plan.description}</p>
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-6xl font-black tracking-[-0.07em]">{price}</span>
                  <span className={cn("pb-2 text-sm font-semibold", plan.highlighted ? "text-white/45" : "text-slate-500")}>{plan.period}</span>
                </div>
                <Link
                  href="/signup"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black transition",
                    plan.highlighted ? "bg-white text-slate-950 hover:bg-cyan-100" : "bg-slate-950 text-white hover:bg-slate-800"
                  )}
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className={cn("mt-0.5 h-5 w-5", plan.highlighted ? "text-cyan-300" : "text-emerald-500")} />
                      <span className={cn("text-sm", plan.highlighted ? "text-white/75" : "text-slate-600")}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative z-10 px-5 pb-24 pt-4 md:px-8 lg:px-12">
      <div className="mx-auto overflow-hidden rounded-[3rem] bg-slate-950 p-8 text-white shadow-[0_45px_120px_rgba(15,23,42,0.28)] md:p-14 lg:p-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">Conversion engine</p>
            <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.065em] md:text-7xl">
              Give every Instagram visitor a next best action.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
              Build a beautiful public profile, publish up to 5 links free, and upgrade when you are ready for deeper analytics,
              themes, lead tracking, and priority placements.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/signup" light>
                Get Started Free <ArrowRight className="h-4 w-4" />
              </CtaButton>
              <CtaButton href="/dashboard" variant="secondary" dark>
                Open Dashboard <Eye className="h-4 w-4" />
              </CtaButton>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-white/8 p-5 ring-1 ring-white/10">
            <div className="grid gap-3">
              {[
                { icon: Link2, text: "Unlimited link strategy" },
                { icon: MessageCircle, text: "WhatsApp and call conversion" },
                { icon: Phone, text: "Booking-ready business blocks" },
                { icon: BarChart3, text: "Analytics that improve placement" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <span className="font-bold text-white/75">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <p className={cn("text-sm font-black uppercase tracking-[0.3em]", dark ? "text-cyan-300" : "text-violet-600")}>
        {eyebrow}
      </p>
      <h2 className={cn("mt-5 text-balance text-5xl font-black leading-[0.94] tracking-[-0.06em] md:text-7xl", dark ? "text-white" : "text-slate-950")}>
        {title}
      </h2>
      <p className={cn("mt-6 max-w-2xl text-lg leading-8", dark ? "text-white/62" : "text-slate-600")}>{copy}</p>
    </div>
  );
}

function CtaButton({
  href,
  variant = "primary",
  light,
  dark,
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  light?: boolean;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-black shadow-lg transition hover:-translate-y-0.5",
        variant === "primary" && !light && "bg-slate-950 text-white hover:bg-slate-800",
        light && "bg-white text-slate-950 hover:bg-cyan-100",
        variant === "secondary" && !dark && "border border-slate-200 bg-white/70 text-slate-950 backdrop-blur hover:bg-white",
        dark && "border border-white/15 bg-white/10 text-white hover:bg-white/15"
      )}
    >
      {children}
    </Link>
  );
}
