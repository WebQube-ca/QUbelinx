"use client";

import { motion } from "framer-motion";
import {
  Copy,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Music2,
  Phone,
  Share2,
  Youtube,
} from "lucide-react";
import type { SocialLink } from "@/data/profiles";

const iconMap = {
  WhatsApp: MessageCircle,
  Email: Mail,
  Call: Phone,
  Instagram,
  YouTube: Youtube,
  TikTok: Music2,
  LinkedIn: Linkedin,
  Share: Share2,
};

export function SocialButtons({ links }: { links: SocialLink[] }) {
  return (
    <div className="sticky bottom-4 z-30 mx-auto mt-6 flex w-fit max-w-full gap-2 overflow-x-auto rounded-full border border-white/10 bg-slate-950/58 p-2 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      {links.map((link, index) => {
        const Icon = iconMap[link.label];
        const isShare = link.label === "Share";

        return (
          <motion.a
            key={link.label}
            href={isShare ? undefined : link.href}
            role={isShare ? "button" : undefined}
            aria-label={link.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={(event) => {
              if (!isShare) return;
              event.preventDefault();
              void navigator.clipboard?.writeText(window.location.href);
            }}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition hover:bg-white hover:text-slate-950"
          >
            {isShare ? <Copy className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
          </motion.a>
        );
      })}
    </div>
  );
}
