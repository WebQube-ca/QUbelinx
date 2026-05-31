import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  MessageCircle,
  Play,
  Smartphone,
  Sparkles,
  Tags,
} from "lucide-react";
import {
  analyticsCards,
  features,
  howItWorks,
  pricingPlans,
  templates,
  testimonials,
} from "@/data/linkhub";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandingPage() {
  return (
    <div className="overflow-hidden bg-[#f7f8ff] text-slate-950">
      <HeroSection />
      <LogoStrip />
      <FeaturesSection />
      <HowItWorksSection />
      <TemplatesSection />
      <AnalyticsSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCta />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-5 pb-20 pt-32 md:px-8 lg:px-12 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.20),transparent_30%),linear-gradient(180deg,#ffffff_0%,#eef2ff_100%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-300/30 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-soft backdrop-blur">
            <Sparkles className="h-4 w-4 text-violet-600" />
            Not just a link tool — a conversion engine for Instagram traffic.
          </div>
          <h1 className="max-w-5xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] text-slate-950 md:text-7xl lg:text-8xl">
            Turn your Instagram bio into a high-converting link hub
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Built for creators, local businesses, coaches, and modern brands
            that need every Instagram visit to become a click, lead, call,
            booking, or sale.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-slate-950 hover:bg-slate-800">
              <Link href="/signup">
                Sign Up
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-violet-100 text-violet-800 hover:bg-violet-200"
            >
              <Link href="/#pricing">
                <Tags className="h-4 w-4" />
                See Plans
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 bg-white/70 text-slate-900 hover:bg-white"
            >
              <Link href="/demo">
                <Play className="h-4 w-4" />
                View Demo
              </Link>
            </Button>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 text-sm text-slate-600">
            {["5-min setup", "No-code analytics", "Mobile-perfect pages"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-emerald-500" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-10 top-10 hidden h-48 w-48 rounded-[3rem] bg-gradient-to-br from-cyan-300 to-blue-600 opacity-80 blur-2xl md:block" />
      <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-gradient-to-br from-fuchsia-400 to-orange-300 opacity-70 blur-2xl" />
      <div className="relative rounded-[2.5rem] border border-white/70 bg-white/55 p-5 shadow-2xl backdrop-blur-2xl">
        <div className="grid gap-5 md:grid-cols-[0.72fr_1fr]">
          <div className="rounded-[2rem] bg-slate-950 p-3 shadow-2xl">
            <div className="overflow-hidden rounded-[1.55rem] bg-gradient-to-b from-indigo-950 to-slate-950 p-4 text-white">
              <Image
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=320&q=80"
                alt="Creator profile preview"
                width={96}
                height={96}
                className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white/10"
                priority
              />
              <div className="mt-4 text-center">
                <p className="font-semibold">Ava Studio</p>
                <p className="text-xs text-white/55">
                  Creator growth systems + brand partnerships
                </p>
              </div>
              <div className="mt-5 space-y-3">
                {["Book a growth audit", "Shop template pack", "WhatsApp collabs"].map(
                  (link, index) => (
                    <div
                      key={link}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm font-semibold shadow-lg",
                        index === 0
                          ? "bg-white text-slate-950"
                          : "bg-white/10 text-white ring-1 ring-white/10"
                      )}
                    >
                      {link}
                    </div>
                  )
                )}
              </div>
              <div className="mt-5 rounded-2xl bg-emerald-400/15 px-4 py-3 text-xs text-emerald-100 ring-1 ring-emerald-300/20">
                WhatsApp CTA converts 2.4x higher this week
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/60">Live analytics</p>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">
                  +24%
                </span>
              </div>
              <p className="mt-3 text-4xl font-black tracking-tight">12,842</p>
              <div className="mt-5 flex h-28 items-end gap-2">
                {[38, 52, 46, 66, 58, 88, 76, 96].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-500 to-cyan-300"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">Lead captured</p>
                  <p className="text-xs text-slate-500">
                    Business visitor requested a quote
                  </p>
                </div>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=820&q=80"
              alt="Business owner reviewing creator analytics"
              width={640}
              height={360}
              className="h-36 rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoStrip() {
  return (
    <section className="border-y border-slate-200 bg-white/70 px-5 py-6 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 text-sm font-semibold text-slate-500 md:justify-between">
        {["Creators", "Studios", "Coaches", "Restaurants", "Boutiques", "Agencies"].map(
          (item) => (
            <span key={item} className="rounded-full bg-slate-100 px-4 py-2">
              {item}
            </span>
          )
        )}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="px-5 py-24 md:px-8 lg:px-12">
      <SectionIntro
        eyebrow="Premium link hub"
        title="Everything your Instagram traffic needs after the tap."
        description="Replace passive link lists with a branded conversion path for discovery, sales, calls, and creator monetization."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group rounded-[2rem] border border-white bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 text-violet-700">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-black tracking-tight text-slate-950">
              {feature.title}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-slate-950 px-5 py-24 text-white md:px-8 lg:px-12">
      <SectionIntro
        eyebrow="How it works"
        title="Launch a revenue-ready bio in three focused steps."
        description="BioBoost keeps the setup simple while giving every link a job: convert, capture, or qualify."
        dark
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
        {howItWorks.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950">
              {index + 1}
            </span>
            <h3 className="mt-7 text-2xl font-black tracking-tight">{step.title}</h3>
            <p className="mt-3 leading-7 text-white/60">{step.description}</p>
            {index < howItWorks.length - 1 && (
              <ChevronRight className="absolute -right-5 top-1/2 hidden h-8 w-8 text-white/20 md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function TemplatesSection() {
  return (
    <section id="templates" className="px-5 py-24 md:px-8 lg:px-12">
      <SectionIntro
        eyebrow="Templates preview"
        title="Start with layouts that already understand intent."
        description="Choose polished creator, business, and brand templates designed around the actions your audience actually takes."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
        {templates.map((template) => (
          <div
            key={template.name}
            className="rounded-[2.25rem] border border-slate-200 bg-white p-4 shadow-xl"
          >
            <div
              className={cn(
                "rounded-[1.75rem] bg-gradient-to-br p-5 text-white",
                template.gradient
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Template
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{template.name}</h3>
                </div>
                <Smartphone className="h-7 w-7 text-white/70" />
              </div>
              <p className="mt-3 text-sm text-white/70">{template.audience}</p>
              <div className="mt-8 space-y-3">
                {template.links.map((link) => (
                  <div
                    key={link}
                    className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnalyticsSection() {
  return (
    <section id="analytics" className="px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-violet-600">
            Simple MVP analytics
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">
            See what people tap after they leave Instagram.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Track total page views, clicks per link, and basic CTR so creators
            can optimize launches while businesses find the buttons that create
            revenue.
          </p>
        </div>
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-5 shadow-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {analyticsCards.map((card) => (
              <div key={card.label} className="rounded-[1.5rem] bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <card.icon className="h-5 w-5 text-violet-600" />
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                    {card.delta}
                  </span>
                </div>
                <p className="mt-5 text-3xl font-black tracking-tight">{card.value}</p>
                <p className="mt-1 text-sm text-slate-500">{card.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[1.75rem] bg-slate-950 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/55">Clicks per link</p>
                <p className="mt-1 text-2xl font-black">Top CTAs</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                CTR %
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                ["Book a growth audit", 84, "18.4%"],
                ["Template pack", 66, "13.6%"],
                ["WhatsApp collabs", 58, "12.2%"],
              ].map(([label, width, ctr]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span>{label}</span>
                    <span className="text-cyan-200">{ctr}</span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-300"
                      style={{ width: `${width}%` }}
                    />
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

function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-5 py-24 md:px-8 lg:px-12">
      <SectionIntro
        eyebrow="Trusted by early users"
        title="Built for creators and businesses that care about outcomes."
        description="Realistic launch placeholders for customer proof as the product starts collecting case studies."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft"
          >
            <blockquote className="text-lg font-medium leading-8 text-slate-800">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-slate-950">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="px-5 py-24 md:px-8 lg:px-12">
      <SectionIntro
        eyebrow="Pricing"
        title="Choose a plan that matches your growth stage."
        description="Three paid plans from $10 to $60/month with clear link limits, analytics depth, tech support, and live chat support as you grow."
      />
      <div className="mx-auto mt-8 flex w-fit rounded-full border border-slate-200 bg-white p-1 shadow-soft">
        <button className="rounded-full bg-slate-950 px-5 py-2 text-sm font-bold text-white">
          Monthly
        </button>
        <button className="rounded-full px-5 py-2 text-sm font-bold text-slate-500">
          Annual - save 20%
        </button>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "relative rounded-[2.25rem] border bg-white p-7 shadow-xl",
              plan.highlighted
                ? "border-violet-500 bg-slate-950 text-white shadow-2xl lg:-mt-6"
                : "border-slate-200 text-slate-950"
            )}
          >
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.18em]",
                plan.highlighted
                  ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-white"
                  : "bg-slate-100 text-slate-500"
              )}
            >
              {plan.badge}
            </span>
            <h3 className="mt-6 text-2xl font-black">{plan.name}</h3>
            <p
              className={cn(
                "mt-3 leading-7",
                plan.highlighted ? "text-white/65" : "text-slate-600"
              )}
            >
              {plan.description}
            </p>
            <div className="mt-8 flex items-end gap-2">
              <span className="text-5xl font-black tracking-tight">{plan.price}</span>
              <span
                className={cn(
                  "pb-2 text-sm",
                  plan.highlighted ? "text-white/55" : "text-slate-500"
                )}
              >
                /month
              </span>
            </div>
            <Button
              asChild
              className={cn(
                "mt-8 w-full",
                plan.highlighted
                  ? "bg-white text-slate-950 hover:bg-white/90"
                  : "bg-slate-950 hover:bg-slate-800"
              )}
            >
              <Link href={`/signup?plan=${plan.name.toLowerCase()}`}>
                {plan.cta}
              </Link>
            </Button>
            <ul className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 pb-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">
              Ready for Instagram traffic that converts?
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Build a smarter bio page before your next launch.
            </h2>
          </div>
          <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-white/90">
            <Link href="/signup">
              Sign Up
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={cn(
          "text-sm font-bold uppercase tracking-[0.28em]",
          dark ? "text-cyan-200" : "text-violet-600"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-balance text-4xl font-black tracking-[-0.04em] md:text-6xl",
          dark ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 text-lg leading-8",
          dark ? "text-white/60" : "text-slate-600"
        )}
      >
        {description}
      </p>
    </div>
  );
}
