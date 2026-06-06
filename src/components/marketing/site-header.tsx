"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appName } from "@/data/linkhub";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#collections", label: "Collections" },
  { href: "/#story", label: "Story" },
  { href: "/#signature", label: "Signature" },
  { href: "/#gifting", label: "Gifting" },
];

const instagramUrl = "https://www.instagram.com/melt.bombay?igsh=Y21oYjlnenl5cnFv";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 px-5 py-4 transition-all md:px-8 lg:px-12",
        scrolled
          ? "border-b border-[#4A2C2A]/10 bg-[#FFF8F3]/78 shadow-[0_18px_50px_rgba(74,44,42,0.10)] backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-black text-[#4A2C2A]">
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-[#C8A96B]/40 bg-[#4A2C2A] shadow-[0_0_35px_rgba(245,216,226,0.36)] backdrop-blur-xl">
            <Image
              src="/melt-bombay-logo-v2.png"
              alt="MELT BOMBAY logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-xl font-semibold tracking-[-0.04em]">
            {appName}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#4A2C2A]/62 transition hover:text-[#4A2C2A]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="outline"
            className="border-[#4A2C2A]/15 bg-white/35 text-[#4A2C2A] hover:bg-[#F5D8E2]/70"
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </Button>
          <Button asChild className="bg-[#4A2C2A] text-[#FFF8F3] hover:bg-[#2B1716]">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#4A2C2A]/10 bg-white/50 text-[#4A2C2A] backdrop-blur lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-4 max-w-7xl rounded-[2rem] border border-[#4A2C2A]/10 bg-[#FFF8F3]/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-semibold text-[#4A2C2A]/70 hover:bg-[#F5D8E2]/60 hover:text-[#4A2C2A]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              <Button asChild className="bg-[#4A2C2A] text-[#FFF8F3] hover:bg-[#2B1716]">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                  Order Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
