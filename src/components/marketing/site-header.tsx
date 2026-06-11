"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Menu, Sparkles, X } from "lucide-react";
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
  const { status } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isAuthenticated = status === "authenticated";

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
          ? "border-b border-slate-200/70 bg-white/78 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-black text-slate-950">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-400 text-white shadow-[0_18px_45px_rgba(124,58,237,0.24)]">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-xl font-black tracking-[-0.04em]">{appName}</span>
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
          {isAuthenticated ? (
            <Button asChild className="bg-slate-950 text-white hover:bg-slate-800">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button
                asChild
                variant="outline"
                className="border-slate-200 bg-white/60 text-slate-950 hover:bg-white"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="bg-slate-950 text-white hover:bg-slate-800">
                <Link href="/signup">Get Started Free</Link>
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 text-slate-950 backdrop-blur lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-4 max-w-7xl rounded-[2rem] border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              {isAuthenticated ? (
                <Button asChild className="bg-slate-950 text-white hover:bg-slate-800">
                  <Link href="/dashboard" onClick={() => setOpen(false)}>
                    Dashboard
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild variant="outline">
                    <Link href="/login" onClick={() => setOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button asChild className="bg-slate-950 text-white hover:bg-slate-800">
                    <Link href="/signup" onClick={() => setOpen(false)}>
                      Get Started Free
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
