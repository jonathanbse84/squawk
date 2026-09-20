-- Classement du jeu de contrôle aérien.
-- Préfixe atc_ : cohabite avec Bloop Drop, ne touche à AUCUNE table existante.
-- À exécuter dans Supabase (projet Cascade Tap) → SQL Editor → Run.

create table if not exists public.atc_leaderboard (
  id         bigint generated always as identity primary key,
  name       text        not null check (char_length(name) between 1 and 24),
  score      int         not null check (score >= 0 and score < 1000000),
  season     text        not null,                 -- ex. "2026-09" (reset mensuel)
  created_at timestamptz not null default now()
);

alter table public.atc_leaderboard enable row level security;

-- Lecture publique (le classement est visible par tous les clients anon)
drop policy if exists atc_read on public.atc_leaderboard;
create policy atc_read on public.atc_leaderboard
  for select to anon using (true);

-- Insertion publique avec garde-fous basiques.
-- (Anti-triche renforcée possible plus tard via Edge Function + signature HMAC,
--  comme sur Cascade Tap ; ceci est la version simple pour démarrer.)
drop policy if exists atc_insert on public.atc_leaderboard;
create policy atc_insert on public.atc_leaderboard
  for insert to anon
  with check (score >= 0 and score < 1000000 and char_length(name) between 1 and 24);

-- Index pour le "top de la saison"
create index if not exists atc_lb_season_score
  on public.atc_leaderboard (season, score desc);
