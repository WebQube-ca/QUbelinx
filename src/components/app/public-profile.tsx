"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Copy,
  ExternalLink,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Share2,
  Sparkles,
} from "lucide-react";
import { profileLinks } from "@/data/linkhub";

export function PublicProfile() {
  return (
    <section className="min-h-screen bg-[#080b16] px-4 py-6 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.35),transparent_34%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.18),transparent_34%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-md flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-2xl"
        >
          <div className="rounded-[2rem] bg-gradient-to-b from-white/14 to-white/[0.04] px-5 py-8">
            <div className="flex justify-end">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
                aria-label="Share profile"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=260&q=80"
              alt="Ava Studio profile"
              width={112}
              height={112}
              priority
              className="mx-auto -mt-3 h-28 w-28 rounded-full object-cover ring-4 ring-white/12"
            />
            <div className="mt-5 text-center">
              <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-bold text-emerald-200">
                <Sparkles className="h-3.5 w-3.5" />
                Taking May bookings
              </div>
              <h1 className="text-3xl font-black tracking-[-0.04em]">Ava Studio</h1>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/60">
                Creator growth systems, brand partnerships, and launch templates
                for founders turning Instagram attention into revenue.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { label: "WhatsApp", icon: MessageCircle },
                { label: "Call", icon: Phone },
                { label: "Email", icon: Mail },
              ].map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="rounded-2xl bg-white/10 px-3 py-3 text-xs font-bold text-white/72 ring-1 ring-white/10 transition hover:bg-white hover:text-slate-950"
                >
                  <action.icon className="mx-auto mb-1 h-4 w-4" />
                  {action.label}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {profileLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href="#"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 rounded-[1.35rem] bg-white p-3 text-left text-slate-950 shadow-xl"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <link.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-black leading-tight">{link.title}</span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {link.subtitle} · {link.clicks}
                    </span>
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-violet-600" />
                </motion.a>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-gradient-to-r from-violet-500 to-cyan-400 p-4 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[0.2em]">
                Creator monetization ready
              </p>
              <p className="mt-2 text-sm font-semibold">
                Join the private waitlist for new templates, brand deal pricing,
                and launch strategy drops.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-bold text-white"
              >
                <Copy className="h-4 w-4" />
                Copy link
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
