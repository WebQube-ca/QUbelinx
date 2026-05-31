# Plate Date by Rhea Jaitha

Premium luxury cloud kitchen website — Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, Shadcn UI.

## Quick Start

```bash
cd ~/Projects/plate-date
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before Launch

1. **WhatsApp** — Update `WHATSAPP_NUMBER` in `src/lib/utils.ts`
2. **Instagram** — Update `INSTAGRAM_URL` in `src/lib/utils.ts`
3. **Domain** — Update `siteConfig.url` in `src/lib/seo.ts`
4. **OG Image** — Add `public/og-image.jpg` (1200×630)
5. **Photos** — Replace Unsplash URLs with real product photography from [@platedate](https://instagram.com/platedate)
6. **Google Maps** — Replace embed URL in `src/components/home/contact.tsx` with your exact Ballygunge pin

## Dark mode

Use the **sun/moon toggle** in the navbar. Preference is saved in `localStorage` (`plate-date-theme`). On first visit, the site follows your system appearance. Story and footer sections stay cinematic dark in both themes.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS + tailwindcss-animate
- Framer Motion + GSAP ScrollTrigger
- Lenis smooth scroll
- Shadcn UI (Radix primitives)
- Swiper.js, React CountUp, React Intersection Observer
- Lucide Icons

## Project Structure

```
src/
├── app/           # Routes, layout, SEO (sitemap, robots)
├── components/
│   ├── home/      # Landing sections
│   ├── menu/      # Menu filtering grid
│   ├── layout/    # Navbar, footer, CTAs
│   ├── forms/     # Lead gen → WhatsApp
│   ├── shared/    # Reusable UI patterns
│   └── ui/        # Shadcn primitives
├── data/          # Products, collections, testimonials
├── hooks/         # Lenis, GSAP reveal, magnetic buttons
└── lib/           # Utils, SEO config
```

## Performance & SEO

- `next/image` with AVIF/WebP
- Lazy loading on below-fold images
- `optimizePackageImports` for heavy libs
- JSON-LD LocalBusiness schema
- OpenGraph + metadata in `src/lib/seo.ts`
- Target keywords baked into copy and meta

## Build

```bash
npm run build
npm start
```
