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

Optional auth providers:

| Variable | Purpose |
|----------|---------|
| `EMAIL_SERVER` | SMTP for magic-link login. Leave empty in dev — links print to the terminal. |
| `EMAIL_FROM` | From address for magic-link emails |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth |
| `APPLE_CLIENT_ID` / `APPLE_CLIENT_SECRET` | Apple OAuth |

## Local login (no SMTP)

1. Go to `/login`
2. Enter any email and submit
3. Copy the magic link from your terminal output
4. Open it in the browser — you'll land on `/dashboard`

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
