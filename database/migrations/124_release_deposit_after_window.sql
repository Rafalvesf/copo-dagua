-- ============================================================
-- Sinal libertado ao parceiro 48 h depois de pago — 2026-10-26
-- ============================================================
-- Pedido do utilizador: "liberta o sinal ao final de 48 horas". O sinal
-- serve ao parceiro para garantir a data; retê-lo até depois do evento
-- (às vezes mais de um ano) atrasava-o e obrigava a À Nossa! a guardar
-- dinheiro de terceiros demasiado tempo.
-- - Sinal: libertado quando acaba a janela em que o organizador ainda o
--   pode recuperar (`deposit_refund_window_hours`, 48 h por defeito,
--   migração 112) e a reserva está confirmada, sem disputa aberta.
-- - Restante: igual a antes (3 dias depois do evento, sem disputa).
-- - Se depois o parceiro cancelar, o reembolso recupera o sinal da conta
--   dele (`reverseReleasedShare` nas Edge Functions de reembolso).
-- - A tarefa passa a correr de hora a hora (antes 1x por dia).

begin;

create or replace function public.payments_to_release()
returns table (payment_id uuid, booking_id uuid, provider_payment_id text, amount numeric, partner_id uuid, partner_account text, booking_number text)
language sql stable security definer set search_path = public, pg_temp as $$
  select p.id, b.id, p.provider_payment_id, p.amount, b.partner_id, pp.stripe_account_id, b.booking_number
  from public.payments p
  join public.bookings b on b.id = p.booking_id
  join public.partner_profiles pp on pp.id = b.partner_id
  cross join lateral (
    select coalesce((select deposit_refund_window_hours from public.platform_settings where id = 1), 48) as window_hours
  ) s
  where p.status = 'paid' and p.released_at is null
    and p.provider_payment_id like 'pi_%'
    and not exists (select 1 from public.disputes d where d.booking_id = b.id and d.status = 'open')
    and pp.stripe_account_id is not null
    and (
      -- Sinal: 48 h depois de pago, reserva confirmada.
      (p.type = 'deposit'
        and b.status in ('confirmed', 'completed')
        and p.paid_at is not null
        and p.paid_at + make_interval(hours => s.window_hours) <= now())
      or
      -- Restante (e outros): 3 dias depois do evento.
      (p.type <> 'deposit'
        and b.status in ('confirmed', 'completed')
        and b.event_date + 3 <= (now() at time zone 'Europe/Lisbon')::date)
    );
$$;
revoke all on function public.payments_to_release() from public, anon, authenticated;

select cron.unschedule('release-partner-funds') where exists (select 1 from cron.job where jobname = 'release-partner-funds');
select cron.schedule('release-partner-funds', '5 * * * *', $$select public.trigger_release_partner_funds();$$);

commit;
