import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, Youtube } from "lucide-react";
import { appName } from "@/data/linkhub";

const instagramUrl =
  "https://www.instagram.com/resinpassion2026?igsh=aDFqajdhcThxazd1";

const footerLinks = [
  { href: "/#story", label: "Story" },
  { href: "/#collection", label: "Collection" },
  { href: "/#process", label: "Process" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-5 py-14 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/35 bg-white">
              <Image
                src="/resin-passion-logo.png"
                alt="Resin Passion logo"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-display text-2xl font-semibold">{appName}</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/60">
            Premium handmade resin clocks, personalized name plates, and custom
            gifts crafted in Mumbai for life&apos;s most meaningful moments.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: instagramUrl, label: "Instagram" },
              { Icon: Youtube, href: "#", label: "YouTube" },
              { Icon: MessageCircle, href: "https://wa.me/?text=Hello%20Resin%20Passion%2C%20I%20would%20like%20to%20start%20a%20custom%20order.", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noopener noreferrer"}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-[#D4AF37] hover:text-black"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/60 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {appName}. All rights reserved.</p>
        <p>Handcrafted in Mumbai, Maharashtra, India.</p>
      </div>
    </footer>
  );
}
