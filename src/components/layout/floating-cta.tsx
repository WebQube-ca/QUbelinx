"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ShoppingBag, X, Building2, Users } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { BulkOrderForm } from "@/components/forms/bulk-order-form";
import { CorporateForm } from "@/components/forms/corporate-form";

export function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform md:bottom-8 md:right-24"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
      </a>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-8">
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="flex flex-col gap-2 mb-2"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="glass-panel flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium text-brand-text shadow-soft hover:shadow-luxury transition-shadow"
                  >
                    <Users className="w-4 h-4 text-brand-primary" />
                    Bulk Order
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Bulk Order Inquiry</DialogTitle>
                  </DialogHeader>
                  <BulkOrderForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="glass-panel flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium text-brand-text shadow-soft hover:shadow-luxury transition-shadow"
                  >
                    <Building2 className="w-4 h-4 text-brand-primary" />
                    Corporate Gifting
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Corporate Gifting</DialogTitle>
                  </DialogHeader>
                  <CorporateForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="glass-panel flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium text-brand-text shadow-soft hover:shadow-luxury transition-shadow"
                  >
                    <ShoppingBag className="w-4 h-4 text-brand-primary" />
                    General Inquiry
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Get in Touch</DialogTitle>
                  </DialogHeader>
                  <InquiryForm />
                </DialogContent>
              </Dialog>

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                className="flex items-center gap-3 rounded-full bg-brand-primary px-5 py-3 text-sm font-medium text-white shadow-luxury"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white shadow-glow hover:scale-105 transition-transform"
          aria-expanded={expanded}
          aria-label={expanded ? "Close order menu" : "Open order menu"}
          whileTap={{ scale: 0.95 }}
        >
          {expanded ? <X className="w-6 h-6" /> : <ShoppingBag className="w-6 h-6" />}
        </motion.button>
      </div>
    </>
  );
}
