-- ============================================================
-- Reviews — editar a própria avaliação + só depois do casamento
-- ============================================================
-- Dois pedidos explícitos do utilizador nesta ronda:
-- 1. "faz com que os casais possam editar as suas reviews no local das
--    reservas apos clicar em detalhes da reserva" — até agora só
--    existia `submit_review()` (uma vez por `booking_id`,
--    `on conflict do nothing` + `already_reviewed` numa segunda
--    tentativa), nunca uma forma de corrigir depois. Mesmo padrão de
--    `respond_to_review()` (dono verificado, sem tocar em `status`/
--    moderação, que continuam só do admin).
-- 2. "os casais so podem fazer review depois da data do seu
--    casamento" — `submit_review()` só verificava
--    `booking.status = 'completed'` (o parceiro/admin marcou o serviço
--    concluído), nunca a data real do casamento em si. Usa
--    `weddings.wedding_date` (a data real do casamento, não
--    `bookings.event_date`, que é a data desse serviço específico e
--    pode divergir, ex: uma sessão fotográfica pré-casamento);
--    cai em `bookings.event_date` só se `wedding_date` nunca tiver sido
--    definida.

create or replace function public.submit_review(
  p_booking_id uuid, p_rating smallint, p_comment text
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_wedding_date date;
  v_review_id uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if not public.is_wedding_member(v_booking.wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_booking.status <> 'completed' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_rating is null or p_rating < 1 or p_rating > 5 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select wedding_date into v_wedding_date from public.weddings where id = v_booking.wedding_id;
  if current_date <= coalesce(v_wedding_date, v_booking.event_date) then
    raise exception 'wedding_not_yet_held' using errcode = 'P0008';
  end if;

  insert into public.reviews (booking_id, wedding_id, partner_id, couple_id, rating, comment)
  values (p_booking_id, v_booking.wedding_id, v_booking.partner_id, auth.uid(), p_rating, nullif(trim(p_comment), ''))
  on conflict (booking_id) do nothing
  returning id into v_review_id;

  if v_review_id is null then
    raise exception 'already_reviewed' using errcode = 'P0001';
  end if;

  return v_review_id;
end;
$$;

create or replace function public.update_review(
  p_review_id uuid, p_rating smallint, p_comment text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_review record;
begin
  select * into v_review from public.reviews where id = p_review_id for update;
  if v_review is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_review.couple_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_rating is null or p_rating < 1 or p_rating > 5 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  update public.reviews
  set rating = p_rating, comment = nullif(trim(p_comment), ''), updated_at = now()
  where id = p_review_id;
end;
$$;

revoke execute on function public.update_review(uuid, smallint, text) from public, anon;
grant execute on function public.update_review(uuid, smallint, text) to authenticated;
