-- 220 · Quantos vão, para os cartões de «Os meus eventos» (pedido do
-- Rafael, 2026-11-22): o convidado também vê «Ana + 30 confirmados» no
-- cartão. Só conta (sem nomes) e só nos eventos que a pessoa pode ver.

begin;

create or replace function public.event_going_counts(p_event_ids uuid[])
returns table(event_id uuid, total integer)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select e.id as event_id,
         (select count(*)::int from public.guests g
           where g.wedding_id = e.id and g.rsvp_status = 'confirmed') as total
    from public.events e
   where e.id = any(p_event_ids)
     and (e.is_public or public.is_event_member(e.id));
$$;

grant execute on function public.event_going_counts(uuid[]) to authenticated;

insert into public.applied_migrations (id) values ('220') on conflict do nothing;

commit;
