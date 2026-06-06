# MELT BOMBAY

Premium eggless dessert atelier website for MELT BOMBAY, built with cinematic motion, WebGL dessert visuals, luxury editorial sections, conversion-focused CTAs, and responsive storytelling.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy the example env file and fill in app-level auth credentials:

```bash
cp .env.example .env.local
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS + tailwindcss-animate
- Framer Motion
- React Three Fiber + Drei + Three.js
- Postprocessing effects
- GSAP
- Auth.js / NextAuth
- Prisma + SQLite for local auth storage
- Lenis smooth scroll
- Radix primitives
- Lucide Icons

## Project Structure

```
src/
├── app/           # Landing, auth, dashboard, public profile, SEO
├── components/
│   ├── app/       # Dashboard and public profile UI
│   ├── auth/      # Login and signup UI
│   ├── marketing/ # Landing page shell and sections
│   └── ui/        # Shadcn primitives
├── data/          # Shared brand and supporting content
└── lib/           # Auth, Prisma, utils, SEO config
```

## Performance & SEO

- `next/image` with AVIF/WebP
- `optimizePackageImports` for heavy libs
- JSON-LD brand schema
- OpenGraph + metadata in `src/lib/seo.ts`

## Build

```bash
npm run build
npm start
```
