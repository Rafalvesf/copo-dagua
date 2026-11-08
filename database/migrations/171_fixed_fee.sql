-- 171 · + 1 € por transação em todas as taxas
--
-- Pedido 2026-11-08: "4% + 1 €, tal como 3% + 1 €" — taxa de serviço do
-- organizador, comissão do parceiro, bilhetes e Loja. As Edge Functions
-- já usam 100 cêntimos quando a coluna não existe; aqui fica editável.

begin;

alter table public.platform_settings
  add column if not exists fixed_fee_cents integer not null default 100
  check (fixed_fee_cents between 0 and 1000);

create table if not exists public.applied_migrations (id text primary key, applied_at timestamptz not null default now());
alter table public.applied_migrations enable row level security;
insert into public.applied_migrations (id) values ('171') on conflict do nothing;

commit;
