import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, Sparkles } from "lucide-react";
import { appName } from "@/data/linkhub";

const instagramUrl = "https://www.instagram.com/melt.bombay?igsh=Y21oYjlnenl5cnFv";

const footerLinks = [
  { href: "/#collections", label: "Collections" },
  { href: "/#story", label: "Our Story" },
  { href: "/#signature", label: "Signature Products" },
  { href: "/#gifting", label: "Corporate Gifting" },
  { href: "/#order", label: "Order Now" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#4A2C2A]/10 bg-[#FFF8F3] px-5 py-14 text-[#4A2C2A] md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-[#C8A96B]/40 bg-[#4A2C2A]">
              <Image
                src="/melt-bombay-logo-v2.png"
                alt="MELT BOMBAY logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-2xl font-semibold tracking-[-0.04em]">{appName}</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-[#4A2C2A]/62">
            Premium eggless desserts, cookie tins, brownies, and luxury gifting boxes handcrafted in Lower Parel,
            Mumbai.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: instagramUrl, label: "Instagram" },
              { Icon: Sparkles, href: "/#collections", label: "Collections" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5D8E2] text-[#4A2C2A]/70 transition hover:bg-[#4A2C2A] hover:text-[#FFF8F3]"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#C8A96B]">Explore</p>
          <div className="mt-5 grid gap-3 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#4A2C2A]/62 transition hover:text-[#4A2C2A]"
            >
              {link.label}
            </Link>
          ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#C8A96B]">Contact</p>
          <div className="mt-5 grid gap-3 text-sm text-[#4A2C2A]/62">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#4A2C2A]">
              <Instagram className="h-4 w-4" /> @melt.bombay
            </a>
            <a href="mailto:hello@meltbombay.com" className="inline-flex items-center gap-2 transition hover:text-[#4A2C2A]">
              <Mail className="h-4 w-4" /> hello@meltbombay.com
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Lower Parel, Mumbai
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#4A2C2A]/10 pt-6 text-sm text-[#4A2C2A]/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {appName}. All rights reserved.</p>
        <p>Eggless Desserts That Melt In Your Mouth.</p>
      </div>
    </footer>
  );
}
