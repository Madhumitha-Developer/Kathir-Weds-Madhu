-- Kathir & Madhu wedding site — run once in Supabase → SQL Editor
-- Creates the Wishes table, the Photos table and a public "memories" storage bucket.

create table if not exists public.wishes (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 60),
  relation text check (char_length(relation) <= 40),
  message text not null check (char_length(message) between 1 and 500),
  created_at timestamptz not null default now()
);

create table if not exists public.photos (
  id bigint generated always as identity primary key,
  path text not null check (char_length(path) <= 200),
  uploader text check (char_length(uploader) <= 40),
  created_at timestamptz not null default now()
);

alter table public.wishes enable row level security;
alter table public.photos enable row level security;

-- Guests (anon key) can read and add, but never edit or delete
create policy "wishes read"   on public.wishes for select to anon using (true);
create policy "wishes insert" on public.wishes for insert to anon with check (true);
create policy "photos read"   on public.photos for select to anon using (true);
create policy "photos insert" on public.photos for insert to anon with check (true);

-- Public bucket for guest photos (max 5 MB, images only)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('memories', 'memories', true, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

create policy "memories upload" on storage.objects for insert to anon
  with check (bucket_id = 'memories');
create policy "memories read" on storage.objects for select to anon
  using (bucket_id = 'memories');

-- To remove an unwanted wish or photo, delete the row in Table Editor (you are the admin).
