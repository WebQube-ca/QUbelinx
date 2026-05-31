"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/data/products";
import { CHEF_NAME } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";

gsap.registerPlugin(ScrollTrigger);

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          sectionRef.current?.classList.add("story-active");
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-brand-dark-section text-white transition-colors duration-1000"
    >
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80"
          alt="Chef in kitchen"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-section via-brand-dark-section/95 to-brand-dark-section/80" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Journey"
          title="Story of Plate Date"
          subtitle={`Founded by ${CHEF_NAME} — where home-kitchen passion became Kolkata's most coveted dessert destination.`}
          inverted
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-4xl overflow-hidden shadow-glow">
            <Image
              src="https://images.unsplash.com/photo-1577218491135-391b9f8170ff?w=800&q=80"
              alt={`Chef ${CHEF_NAME}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 glass-panel-dark">
              <p className="font-display text-2xl">{CHEF_NAME}</p>
              <p className="text-white/60 text-sm">Founder & Head Chef</p>
            </div>
          </div>

          <div ref={timelineRef} className="relative space-y-10 pl-8 border-l border-brand-primary/30">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-item relative">
                <span className="absolute -left-8 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-brand-primary ring-4 ring-brand-dark-section" />
                <span className="text-brand-accent text-sm font-semibold tracking-widest">
                  {item.year}
                </span>
                <h3 className="font-display text-2xl mt-2 mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
