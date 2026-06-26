-- ============================================================
-- 1. Run this in Supabase SQL Editor to create the table
-- ============================================================
create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'website_newsletter',
  created_at timestamptz default now()
);

-- Allow anonymous inserts (subscribe form), block reads/updates/deletes
alter table public.subscribers enable row level security;

create policy "Allow anonymous insert"
  on public.subscribers
  for insert
  to anon
  with check (true);

-- ============================================================
-- 2. Supabase Edge Function: sync new subscriber to MailerLite
--    Deploy as a Database Webhook (Database > Webhooks) on
--    INSERT to public.subscribers, pointing to this function.
--    File path: supabase/functions/sync-mailerlite/index.ts
-- ============================================================

-- (TypeScript below — save separately as index.ts, not SQL)
