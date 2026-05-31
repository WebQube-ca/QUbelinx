import Link from "next/link";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, LOCATION, WHATSAPP_URL, CHEF_NAME } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-section text-white section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-semibold mb-4">
              Plate <span className="text-brand-accent">Date</span>
            </p>
            <p className="text-white/60 max-w-md leading-relaxed">
              Handcrafted vegetarian desserts & unforgettable gifting by{" "}
              {CHEF_NAME}. Kolkata&apos;s premium cloud kitchen for every
              celebration.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/#collections" className="hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/#story" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {LOCATION}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/40">
          <p>© {year} Plate Date by {CHEF_NAME}. All rights reserved.</p>
          <p>100% Vegetarian · Made in Kolkata with love</p>
        </div>
      </div>
    </footer>
  );
}
