-- ============================================================
-- Luminary Student Dashboard — Supabase Schema & Seed
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Create the courses table
create table if not exists public.courses (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  progress    integer not null default 0 check (progress between 0 and 100),
  icon_name   text not null default 'book',
  created_at  timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.courses enable row level security;

-- Allow anonymous reads (for this demo dashboard)
create policy "Allow anonymous read"
  on public.courses
  for select
  using (true);

-- ── Seed realistic course data ──────────────────────────────────────
insert into public.courses (title, progress, icon_name) values
  ('Machine Learning Fundamentals',       72, 'brain'),
  ('Full-Stack TypeScript Engineering',   45, 'code'),
  ('Distributed Systems & Databases',     91, 'database'),
  ('Advanced Algorithms & Data Structures', 28, 'cpu')
on conflict do nothing;
