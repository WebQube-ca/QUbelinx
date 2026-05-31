"use client";

import { Star, Instagram } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { testimonials } from "@/data/products";
import { SectionHeading } from "@/components/shared/section-heading";
import "swiper/css";
import "swiper/css/free-mode";

export function Testimonials() {
  return (
    <section id="reviews" className="section-padding bg-brand-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl mb-14">
        <SectionHeading
          eyebrow="Customer Love"
          title="Stories That Sweeten"
          subtitle="Real celebrations. Real cravings satisfied. Real five-star moments."
        />
      </div>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        freeMode
        loop
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={8000}
        className="!px-5 md:!px-8"
        data-lenis-prevent
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <SwiperSlide key={`${t.id}-${i}`}>
            <article className="glass-panel rounded-3xl p-8 h-full min-h-[280px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-brand-primary text-brand-primary"
                    />
                  ))}
                </div>
                {t.source === "instagram" ? (
                  <Instagram className="w-5 h-5 text-brand-primary/60" />
                ) : (
                  <span className="text-xs font-bold text-brand-primary/80">G</span>
                )}
              </div>
              <p className="text-brand-text/80 leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-brand-primary/10">
                <p className="font-semibold text-brand-text">{t.name}</p>
                <p className="text-sm text-brand-text/50">{t.role}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
