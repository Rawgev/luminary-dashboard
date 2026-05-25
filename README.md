# Luminary - Futuristic Student Dashboard

A production-quality animated education dashboard built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and Supabase.

## Features

- Futuristic dark UI with glow effects, mesh gradients, and a Bento-style dashboard.
- Next.js App Router routes for dashboard, courses, progress, achievements, notifications, and settings.
- Server-side Supabase course fetching through `@supabase/ssr`.
- Framer Motion animations isolated in client components and protected by a mount-safe motion provider.
- Responsive navigation: expanded desktop sidebar, compact tablet rail, and mobile bottom navigation.
- Dynamic Lucide icon mapping through plain string names to avoid server/client serialization issues.
- Skeleton loading states that match the final dashboard layout.
- Custom SVG favicon in `public/favicon.svg`.

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Backend | Supabase |
| Icons | Lucide React |
| Fonts | Geist and Geist Mono |

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Supabase

Create a Supabase project, then run the SQL in:

```text
backend/database/schema.sql
```

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Add your keys:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```text
student-dashboard/
├── app/                              # Next.js App Router entrypoints
│   ├── achievements/page.tsx          # Achievements route
│   ├── courses/page.tsx               # Courses route
│   ├── notifications/page.tsx         # Notifications route
│   ├── progress/page.tsx              # Progress route
│   ├── settings/page.tsx              # Settings route
│   ├── globals.css                    # Tailwind directives and keyframes
│   ├── layout.tsx                     # Root layout, fonts, sidebar, mobile nav
│   ├── loading.tsx                    # Global dashboard skeleton loader
│   └── page.tsx                       # Main dashboard route
│
├── frontend/                          # Frontend-only UI, animation, and display data
│   ├── animations/
│   │   └── variants.ts                # Shared Framer Motion variants and springs
│   ├── components/
│   │   ├── cards/                     # Dashboard card components
│   │   │   ├── ActivityCard.tsx
│   │   │   ├── CourseCard.tsx
│   │   │   ├── HeroCard.tsx
│   │   │   ├── QuickActionsCard.tsx
│   │   │   └── StatsCard.tsx
│   │   ├── dashboard/                 # Page/grid/header shells
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── DashboardHeader.tsx
│   │   │   └── RoutePageShell.tsx
│   │   ├── providers/
│   │   │   └── motion-provider.tsx    # Mount gate for hydration-safe animations
│   │   ├── sidebar/
│   │   │   └── Sidebar.tsx            # Desktop/tablet navigation
│   │   └── ui/                        # Reusable UI primitives
│   │       ├── ErrorCard.tsx
│   │       ├── MobileNav.tsx
│   │       ├── ProgressBar.tsx
│   │       └── SkeletonCard.tsx
│   ├── data/
│   │   ├── activity.ts                # Deterministic mock dashboard metrics
│   │   └── route-pages.ts             # Serializable route page content
│   └── lib/
│       ├── icons.ts                   # iconName string to Lucide icon map
│       └── utils.ts                   # cn() helper
│
├── backend/                           # Backend clients, queries, and database assets
│   ├── database/
│   │   └── schema.sql                 # Courses table, RLS, and seed data
│   └── supabase/
│       ├── client.ts                  # Browser Supabase client
│       ├── queries.ts                 # Server-side typed data queries
│       └── server.ts                  # Server Supabase client via next/headers cookies
│
├── shared/                            # Cross-layer TypeScript contracts
│   └── types/
│       └── index.ts                   # Course, nav, activity, and stats interfaces
│
├── public/
│   └── favicon.svg                    # Neon book favicon
│
├── .env.example                       # Required environment variables
├── .eslintrc.json                     # Next.js ESLint config
├── next.config.ts                     # Next.js config
├── package.json                       # Scripts and dependencies
├── postcss.config.mjs                 # Tailwind/PostCSS setup
├── tailwind.config.ts                 # Design tokens and content globs
└── tsconfig.json                      # TypeScript and path aliases
```

## Frontend vs Backend Map

- Frontend lives in `frontend/`: React components, Framer Motion variants, route display data, icon mapping, and UI helpers.
- Backend lives in `backend/`: Supabase clients, server queries, and database schema.
- Shared contracts live in `shared/`: TypeScript interfaces used by both frontend and backend code.
- App Router files stay in `app/`: route composition, layouts, loading states, and server component entrypoints.

## Database Schema

```sql
create table public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress between 0 and 100),
  icon_name text not null,
  created_at timestamptz not null default now()
);
```

Supported `icon_name` values include `brain`, `code`, `database`, `globe`, `zap`, `layers`, `book`, `chart`, `cpu`, `terminal`, `palette`, `shield`, `atom`, `flask`, `rocket`, `music`, `camera`, `pen`, `award`, `bell`, and `settings`.

## Development Commands

```bash
npm run dev      # Start local dev server
npm run build    # Create production build
npm run start    # Serve production build
npm run lint     # Run Next.js ESLint checks
```

## Notes for Future Changes

- Add frontend UI in `frontend/components/`.
- Add backend queries in `backend/supabase/queries.ts`.
- Add shared interfaces in `shared/types/index.ts`.
- Add new Lucide icons by updating `frontend/lib/icons.ts`.
- Keep server-to-client props serializable; pass `iconName` strings instead of icon components.
