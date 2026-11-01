-- ============================================================
-- 142 — Vários eventos por conta + evento grátis ou pago
-- ============================================================
--
-- Pedido do utilizador (2026-11): cada conta pode criar mais do que um
-- evento; na criação escolhe o tipo, público ou privado, grátis ou pago.
-- O onboarding pergunta se quer criar já um evento ou mais tarde.
--
-- Corre DEPOIS da 141.
--
-- 1. weddings.is_paid + entry_price (preço por pessoa, IVA incluído).
-- 2. list_public_events() passa a devolver o preço.
-- 3. become_organizer() já não manda de volta ao onboarding: agora o
--    evento é criado primeiro e só depois a conta passa a organizar.
-- (A base de dados já aceitava vários eventos por dono; o limite era
--  só da app.)

alter table public.weddings
  add column if not exists is_paid boolean not null default false,
  add column if not exists entry_price numeric(10,2);

alter table public.weddings drop constraint if exists weddings_entry_price_check;
alter table public.weddings
  add constraint weddings_entry_price_check
  check (entry_price is null or (entry_price > 0 and entry_price <= 100000));

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
  entry_price numeric
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
         w.is_paid, w.entry_price
  from public.weddings w
  where w.is_public
    and coalesce(w.status, 'active') not in ('deleted', 'cancelled')
    and w.pending_deletion_at is null
    and (w.wedding_date is null or w.wedding_date >= current_date - 1)
    and w.owner_id is distinct from auth.uid()
    and auth.uid() is not null
  order by w.wedding_date nulls last
  limit 200;
$$;

revoke execute on function public.list_public_events() from public, anon;
grant execute on function public.list_public_events() to authenticated;

create or replace function public.become_organizer()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_role text;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select role::text into v_role from public.profiles where id = auth.uid();
  if v_role = 'couple' then
    return;
  end if;
  if v_role is distinct from 'guest' then
    raise exception 'invalid_role' using errcode = '42501';
  end if;
  update public.profiles
  set role = 'couple'::public.user_role, onboarding_completed = true
  where id = auth.uid();
end;
$$;

revoke execute on function public.become_organizer() from public, anon;
grant execute on function public.become_organizer() to authenticated;
