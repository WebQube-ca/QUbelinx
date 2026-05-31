"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appName } from "@/data/linkhub";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#templates", label: "Templates" },
  { href: "/#analytics", label: "Analytics" },
  { href: "/#pricing", label: "Pricing" },
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
        scrolled ? "bg-white/78 shadow-soft backdrop-blur-2xl" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-black text-slate-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
            <Zap className="h-5 w-5" />
          </span>
          <span>{appName}</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" className="border-slate-200 bg-white text-slate-800">
            <Link href="/#pricing">See Plans</Link>
          </Button>
          <Button asChild variant="ghost" className="text-slate-700">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-slate-950 hover:bg-slate-800">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-4 max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-3 gap-2">
              <Button asChild variant="outline" className="border-slate-200 text-slate-800">
                <Link href="/#pricing">Plans</Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-200 text-slate-800">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="bg-slate-950 hover:bg-slate-800">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
