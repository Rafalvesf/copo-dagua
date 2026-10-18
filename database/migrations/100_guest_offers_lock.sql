-- ============================================================
-- 100 — Reservas dos convidados bloqueadas ("Em breve")
-- ============================================================
--
-- Pedido do utilizador (2026-10-18): a funcionalidade de alojamento e
-- transporte para os convidados (099) fica publicada mas BLOQUEADA para
-- convidados e organizadores até ser ligada. Um único interruptor em
-- `platform_settings` (legível por qualquer autenticado); com ele
-- desligado não se criam ofertas nem reservas, nem pela app nem
-- chamando a API diretamente.

alter table public.platform_settings
  add column if not exists guest_offers_enabled boolean not null default false;

create or replace function public.guest_offers_enabled()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select coalesce((select guest_offers_enabled from public.platform_settings where id = 1), false);
$$;

revoke execute on function public.guest_offers_enabled() from public, anon;
grant execute on function public.guest_offers_enabled() to authenticated;

alter policy "Members create guest offers"
  on public.guest_offers
  with check (
    public.guest_offers_enabled()
    and public.is_wedding_member(wedding_id)
    and exists (select 1 from public.bookings b
                where b.wedding_id = guest_offers.wedding_id and b.partner_id = guest_offers.partner_id)
  );

create or replace function public.reserve_guest_offer(
  p_offer_id uuid, p_quantity integer, p_nights integer default 1
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_offer public.guest_offers;
  v_nights integer;
  v_id uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden';
  end if;
  if not public.guest_offers_enabled() then
    raise exception 'feature_locked';
  end if;

  select * into v_offer from public.guest_offers where id = p_offer_id for update;
  if v_offer is null or not v_offer.is_active then
    raise exception 'offer_unavailable';
  end if;
  if not (public.is_wedding_guest_member(v_offer.wedding_id) or public.is_wedding_member(v_offer.wedding_id)) then
    raise exception 'forbidden';
  end if;
  if p_quantity is null or p_quantity < 1 or p_quantity > 20 then
    raise exception 'invalid_quantity';
  end if;

  v_nights := case when v_offer.kind = 'lodging' then coalesce(p_nights, 1) else 1 end;
  if v_nights < 1 or v_nights > 30 then
    raise exception 'invalid_nights';
  end if;

  if public.guest_offer_taken(v_offer.id) + p_quantity > v_offer.capacity then
    raise exception 'sold_out';
  end if;

  insert into public.guest_offer_reservations (offer_id, wedding_id, guest_id, quantity, nights, amount)
  values (v_offer.id, v_offer.wedding_id, auth.uid(), p_quantity, v_nights,
          round(v_offer.price * p_quantity * v_nights, 2))
  returning id into v_id;

  return v_id;
end;
$$;
