-- ============================================================
-- 087 — Morada do local escolhido na app
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "se o local foi escolhido na app,
-- adiciona logo a morada automaticamente e deixa escolher a app de
-- navegação". O local é o parceiro da categoria `venue` com reserva
-- ativa neste casamento (ou, sem reserva, o escolhido na tarefa da
-- checklist). As coordenadas ficam guardadas no casamento para o
-- "Como chegar" abrir o ponto exato.

alter table public.weddings
  add column if not exists venue_latitude double precision,
  add column if not exists venue_longitude double precision;

create or replace function public.get_wedding_venue(p_wedding_id uuid)
returns table (
  partner_id uuid,
  business_name text,
  address text,
  latitude double precision,
  longitude double precision
)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  with chosen as (
    (
      select b.partner_id, 0 as pri, b.created_at
      from public.bookings b
      join public.partner_profile_categories pc on pc.partner_id = b.partner_id
      join public.partner_categories c on c.id = pc.category_id and c.slug = 'venue'
      where b.wedding_id = p_wedding_id
        and b.status not in ('cancelled_by_couple', 'cancelled_by_partner', 'expired')
    )
    union all
    (
      select ci.selected_partner_id, 1, ci.created_at
      from public.checklist_items ci
      where ci.wedding_id = p_wedding_id
        and ci.partner_category = 'venue'
        and ci.selected_partner_id is not null
    )
  )
  select p.id,
         p.business_name,
         nullif(concat_ws(', ',
           nullif(trim(p.address_line), ''),
           nullif(trim(concat_ws(' ', nullif(trim(p.postal_code), ''), nullif(trim(p.city), ''))), '')
         ), ''),
         p.latitude,
         p.longitude
  from chosen ch
  join public.partner_profiles p on p.id = ch.partner_id
  where public.is_wedding_member(p_wedding_id) or public.is_wedding_guest_member(p_wedding_id)
  order by ch.pri, ch.created_at
  limit 1;
$$;

revoke execute on function public.get_wedding_venue(uuid) from public, anon;
grant execute on function public.get_wedding_venue(uuid) to authenticated;
