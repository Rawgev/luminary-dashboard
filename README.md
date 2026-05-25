# Luminary — Futuristic Student Dashboard

A production-quality, animated education dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase**.

![Dashboard Preview](https://placehold.co/1200x630/050508/00d4ff?text=Luminary+Dashboard)

## ✨ Features

- **Bento Grid Layout** — responsive multi-column card system
- **Dark Futuristic UI** — deep blacks, glowing gradients, mesh backgrounds
- **Staggered Framer Motion animations** — spring physics, sequential reveals
- **Server-side Supabase integration** — data fetched in async Server Components
- **Collapsible sidebar** with `layoutId` highlight animation
- **Dynamic Lucide icon mapping** from database `icon_name`
- **Animated progress bars** — spring-driven, GPU-accelerated
- **Activity contribution graph** — like GitHub's green squares
- **Responsive** — Desktop, Tablet, Mobile with bottom navigation
- **Skeleton loaders** matching final layout
- **Error handling UI** with retry capability

---

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Backend | Supabase (PostgreSQL) |
| Icons | Lucide React |
| Fonts | Geist, Geist Mono |

---

## 🚀 Quick Start

### 1. Clone & install

```bash
git clone https://github.com/your-username/student-dashboard.git
cd student-dashboard
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **Settings → API** and copy:
   - `Project URL`
   - `anon/public key`
3. Open the **SQL Editor** and run the contents of `supabase/schema.sql`

### 3. Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure

```
student-dashboard/
├── app/
│   ├── layout.tsx          # Root layout, fonts, global providers
│   ├── page.tsx            # Dashboard page (async Server Component)
│   ├── loading.tsx         # Skeleton loading state
│   └── globals.css         # Tailwind + custom keyframes
│
├── components/
│   ├── dashboard/
│   │   ├── BentoGrid.tsx   # Staggered grid container
│   │   └── DashboardHeader.tsx
│   ├── sidebar/
│   │   └── Sidebar.tsx     # Collapsible sidebar + layoutId nav
│   ├── cards/
│   │   ├── HeroCard.tsx    # Welcome tile with glow orb
│   │   ├── CourseCard.tsx  # Dynamic course tile
│   │   ├── ActivityCard.tsx # Contribution graph
│   │   ├── StatsCard.tsx   # Mini metric card
│   │   └── QuickActionsCard.tsx
│   └── ui/
│       ├── ProgressBar.tsx # Animated spring progress
│       ├── SkeletonCard.tsx # Pulse skeleton loaders
│       ├── MobileNav.tsx   # Bottom navigation (mobile)
│       └── ErrorCard.tsx   # Error boundary UI
│
├── lib/
│   ├── supabase/
│   │   ├── server.ts       # @supabase/ssr server client
│   │   ├── client.ts       # Browser client
│   │   └── queries.ts      # Typed data-fetching functions
│   ├── icons.ts            # Lucide icon name → component map
│   ├── activity.ts         # Mock activity data generator
│   └── utils.ts            # cn() helper
│
├── animations/
│   └── variants.ts         # All Framer Motion variants + spring configs
│
├── types/
│   └── index.ts            # TypeScript interfaces
│
└── supabase/
    └── schema.sql          # Table + RLS + seed data
```

---

## 🗄 Database Schema

```sql
table courses (
  id          uuid        primary key default gen_random_uuid()
  title       text        not null
  progress    integer     not null  -- 0..100
  icon_name   text        not null  -- mapped to Lucide icons
  created_at  timestamptz not null default now()
)
```

### Supported `icon_name` values

`brain`, `code`, `database`, `globe`, `zap`, `layers`, `book`, `chart`, `cpu`, `terminal`, `palette`, `shield`, `atom`, `flask`, `rocket`, `music`, `camera`, `pen`

---

## 🎨 Design System

### Color Tokens (Tailwind)

| Token | Value | Use |
|---|---|---|
| `bg-base` | `#050508` | Page background |
| `bg-surface` | `#0c0c14` | Sidebar, cards |
| `bg-elevated` | `#111120` | Elevated cards |
| `accent-cyan` | `#00d4ff` | Primary accent |
| `accent-purple` | `#a855f7` | Secondary accent |
| `accent-green` | `#10d4a0` | Progress / success |
| `text-primary` | `#f0f0ff` | Main text |
| `text-secondary` | `#8888aa` | Supporting text |
| `text-muted` | `#44445a` | Labels, captions |

### Animation Presets (Framer Motion)

```ts
// Spring physics
springSnappy  → stiffness: 300, damping: 20
springGentle  → stiffness: 200, damping: 25
springBouncy  → stiffness: 400, damping: 15

// Page load
containerVariants  → staggerChildren: 0.08
cardVariants       → fade + translateY(24px) + scale(0.97)
```

---

## 🌐 Deploy to Vercel

### One-click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fstudent-dashboard)

### Manual

```bash
npm install -g vercel
vercel
```

Add environment variables in the Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 🔧 Development Commands

```bash
npm run dev      # Start dev server on :3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

---

## 🧩 Extending the Dashboard

### Add a new course icon

1. Open `lib/icons.ts`
2. Import the Lucide icon
3. Add it to the `iconMap` object

### Add a new Bento card

1. Create your component in `components/cards/`
2. Use `motion.article` with `variants={cardVariants}`
3. Import and place it inside `<BentoGrid>` in `app/page.tsx`

### Add more course data

Run in Supabase SQL Editor:

```sql
insert into public.courses (title, progress, icon_name)
values ('Your Course Title', 60, 'rocket');
```

---

## 📄 License

MIT — free for personal and commercial use.
