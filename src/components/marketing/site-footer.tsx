import Link from "next/link";
import { Mail, Sparkles, Twitter, Youtube } from "lucide-react";
import { appName } from "@/data/linkhub";

const footerLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#templates", label: "Templates" },
  { href: "/#analytics", label: "Analytics" },
  { href: "/#pricing", label: "Pricing" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-14 text-slate-950 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-400 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-2xl font-black tracking-[-0.04em]">{appName}</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-slate-600">
            A premium link-in-bio platform for creators and businesses that want Instagram traffic to convert into
            clicks, bookings, leads, and sales.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Youtube, href: "#", label: "YouTube" },
              { Icon: Sparkles, href: "/#templates", label: "Templates" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-950 hover:text-white"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-600">Explore</p>
          <div className="mt-5 grid gap-3 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-600">Product</p>
          <div className="mt-5 grid gap-3 text-sm text-slate-600">
            <Link href="/login" className="transition hover:text-slate-950">
              Login
            </Link>
            <Link href="/signup" className="transition hover:text-slate-950">
              Get Started Free
            </Link>
            <Link href="/dashboard" className="transition hover:text-slate-950">
              Dashboard preview
            </Link>
            <a href="mailto:hello@qubelinx.com" className="inline-flex items-center gap-2 transition hover:text-slate-950">
              <Mail className="h-4 w-4" /> hello@qubelinx.com
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {appName}. All rights reserved.</p>
        <p>Not just a link tool. A conversion engine for Instagram traffic.</p>
      </div>
    </footer>
  );
}
