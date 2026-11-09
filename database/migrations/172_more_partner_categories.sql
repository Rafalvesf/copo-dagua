-- 172 · Mais categorias de parceiros
--
-- Pedido 2026-11-08: restaurantes e atividades (paintball, karting,
-- escalada…), para os eventos de grupo e o "Cada um paga o seu".

begin;

insert into public.partner_categories (slug, label_pt, is_active) values
  ('restaurants', 'Restaurantes', true),
  ('bars_nightlife', 'Bares e Discotecas', true),
  ('adventure_activities', 'Atividades Radicais', true),
  ('experiences_tours', 'Experiências e Passeios', true),
  ('games_escape', 'Jogos e Escape Rooms', true),
  ('lodging', 'Alojamento', true),
  ('spa_wellness', 'Spa e Bem-estar', true),
  ('kids_entertainment', 'Animação Infantil', true)
on conflict (slug) do update set label_pt = excluded.label_pt, is_active = true;

create table if not exists public.applied_migrations (id text primary key, applied_at timestamptz not null default now());
alter table public.applied_migrations enable row level security;
insert into public.applied_migrations (id) values ('172') on conflict do nothing;

commit;
