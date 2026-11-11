-- 177: blocos do painel do evento que o organizador escondeu
-- (Definições → Painel do evento, 2026-11-11). Vazio = mostra tudo o que
-- se aplica ao tipo de evento.
begin;

alter table public.weddings add column if not exists panel_hidden text[] not null default '{}';

insert into public.applied_migrations (id) values ('177') on conflict do nothing;

commit;
