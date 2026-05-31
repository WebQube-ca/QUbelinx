import Link from "next/link";
import { Instagram, Linkedin, Twitter, Zap } from "lucide-react";
import { appName } from "@/data/linkhub";

const webqubeInstagram =
  "https://www.instagram.com/webqube.ca?igsh=Y3I2cWwybHNyc3Rr";

const footerLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#templates", label: "Templates" },
  { href: "/#analytics", label: "Analytics" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/demo", label: "View demo" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#080b16] px-5 py-14 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 font-black">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-950">
              <Zap className="h-5 w-5" />
            </span>
            <span>{appName}</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/60">
            The conversion-focused link hub for creators and businesses turning
            Instagram traffic into clicks, leads, calls, bookings, and sales.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: webqubeInstagram, label: "WebQube Instagram" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noopener noreferrer"}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white hover:text-slate-950"
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
        <p>
          Created by{" "}
          <a
            href="https://webqube.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/70 transition hover:text-white"
          >
            WebQube.ca
          </a>
        </p>
      </div>
    </footer>
  );
}
