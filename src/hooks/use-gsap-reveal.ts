"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGsapRevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
}

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    y = 60,
    duration = 1,
    stagger = 0.1,
    delay = 0,
    start = "top 85%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll("[data-reveal]");
    const targets = children.length > 0 ? children : [el];

    gsap.set(targets, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, duration, stagger, delay, start]);

  return ref;
}
