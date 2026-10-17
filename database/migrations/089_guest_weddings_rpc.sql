-- ============================================================
-- 089 — Convidados veem o que o organizador preparou
-- ============================================================
--
-- Reportado (2026-10-17): "quando coloco o código do evento não vejo
-- nada do que o organizador colocou quando sou convidado". A policy de
-- leitura de `weddings` só cobre o casal (dono/colaboradores), por isso
-- o `select … weddings(...)` do convidado vinha sempre a `null`.
--
-- Em vez de abrir a tabela inteira aos convidados (orçamento, telefones
-- do casal…), esta função devolve só os campos pensados para eles, e só
-- dos eventos a que a conta está ligada (`wedding_guest_members`).

create or replace function public.get_my_guest_weddings()
returns table (wedding_id uuid, joined_at timestamptz, wedding jsonb)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select m.wedding_id,
         m.joined_at,
         jsonb_build_object(
           'partner_name_1', w.partner_name_1,
           'partner_name_2', w.partner_name_2,
           'wedding_date', w.wedding_date,
           'venue', w.venue,
           'location', w.location,
           'quote', w.quote,
           'cover_photo_url', w.cover_photo_url,
           'ceremony_time', w.ceremony_time,
           'welcome_message', w.welcome_message,
           'theme_colors', w.theme_colors,
           'updated_at', w.updated_at,
           'gift_list_url', w.gift_list_url,
           'gift_iban', w.gift_iban,
           'gift_message', w.gift_message,
           'event_type', w.event_type,
           'program', w.program,
           'dress_code', w.dress_code,
           'venue_address', w.venue_address,
           'venue_latitude', w.venue_latitude,
           'venue_longitude', w.venue_longitude
         )
  from public.wedding_guest_members m
  join public.weddings w on w.id = m.wedding_id
  where m.guest_id = auth.uid()
  order by m.joined_at desc;
$$;

revoke execute on function public.get_my_guest_weddings() from public, anon;
grant execute on function public.get_my_guest_weddings() to authenticated;
