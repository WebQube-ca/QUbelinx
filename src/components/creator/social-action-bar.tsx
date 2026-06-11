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
import { cn } from "@/lib/utils";
import { easePremium, stagger } from "@/lib/profile-design-system";
import { HorizontalScroll } from "@/components/creator/horizontal-scroll";

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

type SocialActionBarProps = {
  links: SocialLink[];
  variant?: "inline" | "mobile-fixed";
};

function SocialButton({
  link,
  index,
  compact,
}: {
  link: SocialLink;
  index: number;
  compact?: boolean;
}) {
  const Icon = iconMap[link.label];
  const isShare = link.label === "Share";

  return (
    <motion.a
      href={isShare ? undefined : link.href}
      role={isShare ? "button" : undefined}
      aria-label={link.label}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * stagger.fast, ease: easePremium }}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
      onClick={(event) => {
        if (!isShare) return;
        event.preventDefault();
        void navigator.clipboard?.writeText(window.location.href);
      }}
      className={cn(
        "grid shrink-0 place-items-center rounded-full bg-white/[0.06] text-white/75 ring-1 ring-white/[0.08] transition hover:bg-white hover:text-[#07080f]",
        compact ? "h-11 w-11" : "h-12 w-12"
      )}
    >
      {isShare ? <Copy className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
    </motion.a>
  );
}

export function SocialActionBar({ links, variant = "inline" }: SocialActionBarProps) {
  if (variant === "mobile-fixed") {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 w-full max-w-[100vw] overflow-x-clip border-t border-white/[0.06] bg-[#07080f]/92 px-3 py-3 backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <HorizontalScroll innerClassName="justify-start gap-2 px-1">
          {links.map((link, index) => (
            <SocialButton key={link.label} link={link} index={index} compact />
          ))}
        </HorizontalScroll>
      </div>
    );
  }

  return (
    <div className="mt-6 hidden min-w-0 max-w-full lg:block">
      <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/38">
        Connect
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => (
          <SocialButton key={link.label} link={link} index={index} />
        ))}
      </div>
    </div>
  );
}
