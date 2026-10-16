-- ============================================================
-- weddings.event_type — tipo de evento escolhido no onboarding
-- ============================================================
--
-- Pedido do utilizador (2026-10-16): "adiciona uma opção para as pessoas
-- escolherem entre eventos, e não só casamentos no onboarding". A tabela
-- continua a chamar-se `weddings` (é o "evento" do casal/organizador);
-- esta coluna só regista o tipo. Linhas existentes ficam 'wedding'.
alter table public.weddings
  add column if not exists event_type text not null default 'wedding';

alter table public.weddings
  drop constraint if exists weddings_event_type_check;

alter table public.weddings
  add constraint weddings_event_type_check
  check (event_type in ('wedding', 'baptism', 'birthday', 'other'));
