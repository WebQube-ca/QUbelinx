"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn, WHATSAPP_URL } from "@/lib/utils";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#platters", label: "Platters" },
  { href: "/#collections", label: "Special Collections" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#story", label: "About Chef" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-brand-background/80 backdrop-blur-xl border-b border-brand-primary/10 shadow-soft"
            : "py-5 bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-display text-xl md:text-2xl font-semibold text-brand-text hover:text-brand-primary transition-colors"
          >
            Plate <span className="text-brand-primary">Date</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-text/70 hover:text-brand-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <MagneticButton asChild variant="default" size="sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </MagneticButton>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
          <button
            type="button"
            className="p-2 text-brand-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[min(100%,320px)] bg-brand-background shadow-luxury p-8 pt-24 border-l border-brand-primary/10"
              data-lenis-prevent
            >
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-display text-2xl text-brand-text hover:text-brand-primary"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <MagneticButton
                asChild
                className="w-full mt-10"
                variant="default"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  Order Now
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
