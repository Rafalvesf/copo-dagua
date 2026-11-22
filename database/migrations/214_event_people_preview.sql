-- ============================================================
-- 214 · Quem confirmou e quem criou o evento, para os cartões
-- ============================================================
--
-- Pedido do Rafael (2026-11-22), mockup «Quem vai nos eventos» (forma D):
--   * o rodapé dos cartões de evento mostra as fotos de quem confirmou,
--     amigos primeiro («Ana e João + 10 confirmados»);
--   * o círculo do cartão é a foto de quem criou o evento, como o
--     logótipo nos cartões de parceiro.
--
-- Privacidade: só se vê a foto e o nome de quem tu segues ou tem o perfil
-- público; os outros contam no número, sem foto. Só para eventos públicos
-- ou de que fazes parte.
-- ============================================================

begin;

create or replace function public.event_attendees_preview(p_event_ids uuid[])
returns table (event_id uuid, profile_id uuid, name text, avatar_url text, is_friend boolean)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  with visible_events as (
    select e.id from public.events e
     where e.id = any(p_event_ids)
       and (e.is_public or public.is_event_member(e.id))
  ),
  att as (
    select g.wedding_id as event_id,
           p.id as profile_id,
           coalesce(nullif(trim(p.full_name), ''), g.full_name) as name,
           p.avatar_url,
           exists (select 1 from public.follows f where f.follower_id = auth.uid() and f.profile_id = p.id) as is_friend,
           coalesce(p.profile_public, false) as is_public
      from public.guests g
      join visible_events v on v.id = g.wedding_id
      join public.profiles p on p.id = g.linked_profile_id
     where g.rsvp_status = 'confirmed'
       and p.id is distinct from auth.uid()
  ),
  ranked as (
    select a.*, row_number() over (partition by a.event_id order by a.is_friend desc, a.name) as rn
      from att a
     where a.is_friend or a.is_public
  )
  select event_id, profile_id, name, avatar_url, is_friend from ranked where rn <= 5;
$$;

revoke all on function public.event_attendees_preview(uuid[]) from public;
grant execute on function public.event_attendees_preview(uuid[]) to authenticated;

-- Quem criou o evento (o círculo do cartão).
create or replace function public.event_hosts_preview(p_event_ids uuid[])
returns table (event_id uuid, profile_id uuid, name text, avatar_url text)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select e.id, p.id, nullif(trim(p.full_name), ''), p.avatar_url
    from public.events e
    join public.profiles p on p.id = e.owner_id
   where e.id = any(p_event_ids)
     and (e.is_public or public.is_event_member(e.id));
$$;

revoke all on function public.event_hosts_preview(uuid[]) from public;
grant execute on function public.event_hosts_preview(uuid[]) to authenticated;

insert into public.applied_migrations (id) values ('214') on conflict do nothing;

commit;
