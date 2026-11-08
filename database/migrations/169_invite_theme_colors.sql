-- 169 · Convite mostra as cores do evento
--
-- Pedido 2026-11-08: no convite (/invite/<código>) não apareciam as cores
-- escolhidas pelo organizador. get_public_event passa a devolver
-- theme_colors (igual à 162 + esse campo).

begin;

create or replace function public.get_public_event(p_code text)
returns jsonb
language sql stable security definer set search_path = public, pg_temp as $$
  select jsonb_build_object(
    'wedding_id', w.id,
    'guest_code', w.guest_code,
    'event_type', w.event_type,
    'partner_name_1', w.partner_name_1,
    'partner_name_2', w.partner_name_2,
    'wedding_date', w.wedding_date,
    'ceremony_time', w.ceremony_time,
    'venue', w.venue,
    'location', w.location,
    'venue_address', w.venue_address,
    'venue_latitude', w.venue_latitude,
    'venue_longitude', w.venue_longitude,
    'cover_photo_url', w.cover_photo_url,
    'quote', w.quote,
    'welcome_message', w.welcome_message,
    'program', w.program,
    'dress_code', w.dress_code,
    'theme_colors', coalesce(to_jsonb(w.theme_colors), '[]'::jsonb),
    'max_companions', w.default_max_companions,
    'is_paid', w.is_paid,
    'entry_price', w.entry_price,
    'is_public', w.is_public
  )
  from public.weddings w
  where w.guest_code = upper(trim(p_code));
$$;

commit;
