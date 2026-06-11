# QubeLinx

Link-in-bio platform for creators — premium profile pages, link management, analytics, and auth-backed dashboards.

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run setup
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Demo profile

After seeding, visit [http://localhost:3000/avastudio](http://localhost:3000/avastudio) for a sample public profile.

## Environment

Copy the example env file:

```bash
cp .env.example .env.local
```

Required for local development:

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | SQLite database path (`file:./dev.db`) |
| `NEXTAUTH_URL` | App URL (`http://localhost:3000`) |
| `NEXTAUTH_SECRET` | Random secret for session encryption |

Optional OAuth:

| Variable | Purpose |
|----------|---------|
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth |
| `APPLE_CLIENT_ID` / `APPLE_CLIENT_SECRET` | Apple OAuth |

## Sign up / login

Use **email + password** at `/signup` and `/login`. Passwords must be at least 8 characters. No SMTP required.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Auth.js / NextAuth
- Prisma + SQLite

## Project Structure

```
src/
├── app/           # Landing, auth, dashboard, public profiles, API routes
├── components/    # UI, marketing, dashboard, profile pages
├── data/          # Marketing content and demo profile styling
└── lib/           # Auth, Prisma, profile helpers, SEO
```

## Scripts

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run setup     # Push schema + seed demo data
npm run db:push   # Sync Prisma schema to database
npm run db:seed   # Seed demo profile
```

## Deploy on Laravel Forge

Your production `.env` on Forge must **not** use localhost values. The 500 on `/api/auth/signin/email` is almost always misconfigured env or a missing database.

### Forge environment variables

Set these in **Forge → Site → Environment**:

```env
DATABASE_URL="file:./production.db"
NEXTAUTH_URL="https://qubelinx.on-forge.com"
NEXTAUTH_SECRET="paste-output-of-openssl-rand-hex-32"
```

No email/SMTP setup is required for password login.

Generate a secret locally:

```bash
openssl rand -hex 32
```

### Forge deploy script

Add **before** `npm run build`:

```bash
cd $FORGE_SITE_PATH
npm ci
npm run forge:setup
npm run build
pm2 reload ...
```

`forge:setup` runs `prisma generate` and `prisma db push` so auth tables exist.

### After updating env on Forge

1. Save environment in Forge
2. Redeploy the site
3. Try login again — errors now show in the UI instead of hanging on "Sending..."
