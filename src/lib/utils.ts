import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappLink(
  "Hi Plate Date! I'd like to place an order."
);
export const INSTAGRAM_URL = "https://instagram.com/platedate";
export const BRAND_NAME = "Plate Date";
export const CHEF_NAME = "Rhea Jaitha";
export const LOCATION = "Ballygunge, Kolkata";
