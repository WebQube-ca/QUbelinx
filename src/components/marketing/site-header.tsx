"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appName } from "@/data/linkhub";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#story", label: "Story" },
  { href: "/#collection", label: "Collection" },
  { href: "/#process", label: "Process" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

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
          ? "border-b border-white/10 bg-[#080808]/78 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-black text-white">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/35 bg-white shadow-lg">
            <Image
              src="/resin-passion-logo.png"
              alt="Resin Passion logo"
              width={48}
              height={48}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            {appName}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/62 transition hover:text-[#E5C77D]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="outline"
            className="border-[#D4AF37]/35 bg-transparent text-[#E5C77D] hover:bg-[#D4AF37]/10"
          >
            <a
              href="https://www.instagram.com/resinpassion2026?igsh=aDFqajdhcThxazd1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </Button>
          <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#E5C77D]">
            <Link href="/#contact">
              <MessageCircle className="h-4 w-4" />
              Custom Order
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-4 max-w-7xl rounded-[2rem] border border-white/10 bg-[#111111]/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-semibold text-white/70 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#E5C77D]">
                <Link href="/#contact" onClick={() => setOpen(false)}>
                  Custom Order
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
