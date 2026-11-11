-- 178 — Descobrir: quantas pessoas vão a cada evento aberto
-- (cartões densos, 2026-11-11). Acrescenta going_count a
-- list_public_events(); muda o tipo devolvido, por isso é preciso
-- apagar a função antes de a recriar.

begin;

drop function if exists public.list_public_events();

create function public.list_public_events()
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
  mine boolean,
  going_count integer
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
         public.is_wedding_member(w.id) as mine,
         (select count(*)::int from public.wedding_guest_members m
           where m.wedding_id = w.id) as going_count
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

insert into public.applied_migrations (id) values ('178') on conflict do nothing;

commit;
