-- ============================================================
-- Um pedido de orçamento de cada vez por parceiro
-- ============================================================
-- O organizador só pode pedir orçamento outra vez ao mesmo parceiro se o
-- pedido anterior foi recusado/expirou ou se a reserva foi cancelada
-- (pedido do utilizador, 2026-10-20). Bloqueia com 'quote_already_requested'
-- (P0009) se já há um pedido em curso (pending/viewed/proposal_sent) ou uma
-- reserva ativa/concluída (awaiting_deposit/confirmed/completed) para o
-- mesmo casamento e parceiro. Mesma regra que a app já mostra
-- (`partnerRelationshipStatusProvider`).

create or replace function public.request_quote(p_partner_id uuid, p_wedding_id uuid, p_event_date date, p_location text, p_budget_min numeric, p_budget_max numeric, p_message text)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'pg_temp'
as $function$
declare
  v_quote_id uuid;
  v_min_days integer;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not public.is_wedding_member(p_wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not public.is_partner_profile_visible(p_partner_id) then
    raise exception 'not_found' using errcode = 'P0002';
  end if;

  if exists (
    select 1 from public.quote_requests q
    where q.wedding_id = p_wedding_id and q.partner_id = p_partner_id
      and q.status in ('pending', 'viewed', 'proposal_sent')
  ) or exists (
    select 1 from public.bookings b
    where b.wedding_id = p_wedding_id and b.partner_id = p_partner_id
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  ) then
    raise exception 'quote_already_requested' using errcode = 'P0009';
  end if;

  select booking_min_days_before_event into v_min_days from public.platform_settings where id = 1;
  if p_event_date is not null and p_event_date < (current_date + (v_min_days || ' days')::interval) then
    raise exception 'too_late' using errcode = 'P0003';
  end if;

  insert into public.quote_requests (couple_id, wedding_id, partner_id, event_date, location, budget_min, budget_max, message)
  values (auth.uid(), p_wedding_id, p_partner_id, p_event_date, p_location, p_budget_min, p_budget_max, p_message)
  returning id into v_quote_id;

  return v_quote_id;
end;
$function$;
