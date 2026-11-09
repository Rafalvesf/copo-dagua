-- 173 · Regras de cancelamento por parceiro
--
-- Pedido 2026-11-09: "todos os parceiros têm liberdade de mudar para as
-- suas regras". Cada categoria tem uma regra por defeito (na app,
-- core/partners/cancellation_rule.dart); o parceiro pode trocá-la.
-- null = usa a regra por defeito da categoria.
--   hours          → cancela grátis até `cancellation_hours` antes
--   until_purchase → até à compra; depois, segundo o parceiro
--   partner_terms  → segundo as condições do parceiro (`cancellation_note`)

begin;

alter table public.partner_profiles
  add column if not exists cancellation_rule text
    check (cancellation_rule in ('hours', 'until_purchase', 'partner_terms')),
  add column if not exists cancellation_hours integer
    check (cancellation_hours between 1 and 2160),
  add column if not exists cancellation_note text
    check (char_length(cancellation_note) <= 500);

create table if not exists public.applied_migrations (id text primary key, applied_at timestamptz not null default now());
alter table public.applied_migrations enable row level security;
insert into public.applied_migrations (id) values ('173') on conflict do nothing;

commit;
