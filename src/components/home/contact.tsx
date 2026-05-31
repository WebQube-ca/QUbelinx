"use client";

import { MapPin, MessageCircle, Instagram, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { INSTAGRAM_URL, LOCATION, WHATSAPP_URL } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="section-padding section-surface">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Order & Visit"
          subtitle="Ballygunge, Kolkata — delivering sweetness across the city."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20 p-8 hover:shadow-luxury transition-all"
              >
                <MessageCircle className="w-8 h-8 text-[#25D366] mb-4" />
                <h3 className="font-display text-xl text-brand-text">WhatsApp</h3>
                <p className="text-sm text-brand-text/55 mt-2">
                  Fastest way to order — we reply within minutes.
                </p>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-brand-secondary p-8 hover:shadow-luxury transition-all"
              >
                <Instagram className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="font-display text-xl text-brand-text">Instagram</h3>
                <p className="text-sm text-brand-text/55 mt-2">
                  DM us for custom orders & seasonal drops.
                </p>
              </a>
            </div>

            <div className="rounded-3xl glass-panel p-8 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-text">Location</p>
                  <p className="text-brand-text/60">{LOCATION}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-text">Hours</p>
                  <p className="text-brand-text/60">
                    Tue–Sun: 11am – 9pm · Mon: Pre-orders only
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <MagneticButton asChild variant="whatsapp" className="flex-1">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Order on WhatsApp
                </a>
              </MagneticButton>
              <MagneticButton asChild variant="outline" className="flex-1">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Follow Us
                </a>
              </MagneticButton>
            </div>
          </div>

          <div className="rounded-4xl border border-brand-primary/10 bg-brand-neutral/50 p-8 md:p-10">
            <h3 className="font-display text-2xl text-brand-text mb-2">
              Send an Inquiry
            </h3>
            <p className="text-sm text-brand-text/55 mb-8">
              Custom cakes, bulk orders, or just saying hello — we&apos;ll respond
              via WhatsApp.
            </p>
            <InquiryForm />
          </div>
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden border border-brand-primary/10 aspect-[21/9] min-h-[240px] relative bg-brand-secondary">
          <iframe
            title="Plate Date location in Ballygunge, Kolkata"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29477.0!2d88.3654!3d22.5245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMxJzI4LjIiTiA4OMKwMjEnNTUuNCJF!5e0!3m2!1sen!2sin!4v1"
            className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
