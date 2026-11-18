-- ============================================================================
-- Um parceiro só recebe UM pedido/proposta e UMA reserva por evento.
-- A UI do detalhe do parceiro já o impede (o evento onde já pediste/reservaste
-- deixa de aparecer para escolher); estes índices garantem-no também na base
-- de dados, por isso um pedido duplicado é rejeitado mesmo fora da UI.
-- Já aplicada por mim na Supabase (2026-11-18). Verificado: 0 duplicados.
-- ============================================================================

-- Pedido de orçamento/proposta ATIVO: um por (evento, parceiro).
create unique index if not exists quote_requests_one_active_per_event
  on public.quote_requests (wedding_id, partner_id)
  where status in ('pending','viewed','proposal_sent') and wedding_id is not null;

-- Reserva ATIVA: uma por (evento, parceiro).
create unique index if not exists bookings_one_active_per_event
  on public.bookings (wedding_id, partner_id)
  where status in ('awaiting_deposit','confirmed','completed') and wedding_id is not null;
