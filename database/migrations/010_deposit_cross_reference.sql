-- ============================================================
-- Módulo: Bookings (admin-web) — verificação cruzada do sinal
-- (backend/bookings/api.md, admin-web/bookings/api.md)
-- ============================================================
--
-- Continua a ser um stub sem pagamento real (backend/bookings/api.md,
-- "STUB DE PAGAMENTO") — não há Stripe a confirmar nada. O que muda: em
-- vez de o admin clicar "confirmar" às cegas, tem de introduzir o valor
-- que recebeu (ex: de uma referência de transferência bancária); a
-- função cruza automaticamente esse valor com bookings.deposit_amount e
-- só avança se coincidirem — a verificação humana (o admin ver o
-- extrato/referência e escrever o valor) continua a ser a fonte de
-- verdade, mas a decisão de avançar deixa de ser manual.

create or replace function public.admin_confirm_deposit(p_booking_id uuid, p_amount_received numeric)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status booking_status;
  v_deposit_amount numeric;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status, deposit_amount into v_status, v_deposit_amount
  from public.bookings where id = p_booking_id for update;

  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'awaiting_deposit' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_amount_received is null or p_amount_received <> v_deposit_amount then
    raise exception 'amount_mismatch' using errcode = 'P0004';
  end if;

  update public.bookings set status = 'confirmed', confirmed_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'deposit_confirmed_stub', 'awaiting_deposit', 'confirmed', 'admin', auth.uid(),
          jsonb_build_object(
            'note', 'Confirmado manualmente — sem integração de pagamento real ainda',
            'amount_received', p_amount_received,
            'expected_deposit_amount', v_deposit_amount
          ));
end;
$$;

revoke execute on function public.admin_confirm_deposit(uuid, numeric) from public, anon;
grant execute on function public.admin_confirm_deposit(uuid, numeric) to authenticated;

-- A assinatura antiga (sem p_amount_received) fica órfã — remover para
-- não deixar duas formas de confirmar um sinal, uma sem verificação.
drop function if exists public.admin_confirm_deposit(uuid);
