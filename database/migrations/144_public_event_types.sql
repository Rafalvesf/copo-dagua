-- ============================================================
-- 144 — Tipos de evento públicos + os meus eventos em Descobrir
-- ============================================================
--
-- Pedido do utilizador (2026-11): só podem ser públicos eventos como
-- festas, discotecas/noite, concertos, festivais, eventos de empresa e
-- "Outro". Casamentos, batizados, aniversários, etc. são sempre privados.
-- E o organizador vê também o seu evento público em Descobrir.
--
-- Corre DEPOIS da 141–143.

-- 1. Novos tipos.
alter table public.weddings drop constraint if exists weddings_event_type_check;
alter table public.weddings
  add constraint weddings_event_type_check
  check (event_type = any (array[
    'wedding','baptism','birthday','communion','engagement','vow_renewal',
    'graduation','corporate','baby_shower',
    'party','nightlife','concert','festival',
    'other'
  ]));

-- 2. Só estes tipos podem ser públicos.
update public.weddings set is_public = false
where is_public and event_type not in ('corporate','party','nightlife','concert','festival','other');

alter table public.weddings drop constraint if exists weddings_public_type_check;
alter table public.weddings
  add constraint weddings_public_type_check
  check (not is_public or event_type in ('corporate','party','nightlife','concert','festival','other'));

-- 3. Descobrir inclui os meus eventos públicos (marcados com `mine`).
drop function if exists public.list_public_events();
create or replace function public.list_public_events()
returns table (
  wedding_id uuid,
  event_type text,
  partner_name_1 text,
  partner_name_2 text,
  wedding_date date,
  ceremony_time text,
  venue text,
  location text,
  cover_photo_url text,
  welcome_message text,
  updated_at timestamptz,
  joined boolean,
  is_paid boolean,
  entry_price numeric,
  mine boolean
)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select w.id, w.event_type, w.partner_name_1, w.partner_name_2,
         w.wedding_date, w.ceremony_time, w.venue, w.location,
         w.cover_photo_url, w.welcome_message, w.updated_at,
         exists (select 1 from public.wedding_guest_members m
                 where m.wedding_id = w.id and m.guest_id = auth.uid()) as joined,
         w.is_paid, w.entry_price,
         public.is_wedding_member(w.id) as mine
  from public.weddings w
  where w.is_public
    and w.pending_deletion_at is null
    and (w.wedding_date is null or w.wedding_date >= current_date - 1)
    and auth.uid() is not null
  order by w.wedding_date nulls last
  limit 200;
$$;

revoke execute on function public.list_public_events() from public, anon;
grant execute on function public.list_public_events() to authenticated;
