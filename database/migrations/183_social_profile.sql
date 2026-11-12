-- 183 — Perfil público e seguir amigos e parceiros (mockup "Perfil",
-- 2026-11-12).
--
-- * profiles ganha bio, cidade e se o perfil é público.
-- * follows: quem segue quem (uma pessoa ou um parceiro).
-- * public_profile(id): o que se mostra de uma pessoa (sem email nem
--   telefone): nome, @, foto, bio, cidade, números, se a sigo, amigos
--   em comum e os próximos eventos públicos dela.
-- * follow_list(id, kind): quem essa pessoa segue (pessoas ou parceiros).
-- * partner_follow_info(id): seguidores de um parceiro e amigos que o seguem.

begin;

alter table public.profiles
  add column if not exists bio text,
  add column if not exists city text,
  add column if not exists profile_public boolean not null default true;

alter table public.profiles drop constraint if exists profiles_bio_len;
alter table public.profiles add constraint profiles_bio_len check (bio is null or char_length(bio) <= 300);
alter table public.profiles drop constraint if exists profiles_city_len;
alter table public.profiles add constraint profiles_city_len check (city is null or char_length(city) <= 60);

create table if not exists public.follows (
  id uuid primary key default gen_random_uuid(),
  follower_id uuid not null references public.profiles(id) on delete cascade,
  profile_id uuid references public.profiles(id) on delete cascade,
  partner_id uuid references public.partner_profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint follows_one_target check ((profile_id is null) <> (partner_id is null)),
  constraint follows_not_self check (profile_id is null or profile_id <> follower_id)
);
create unique index if not exists follows_person_uq on public.follows (follower_id, profile_id) where profile_id is not null;
create unique index if not exists follows_partner_uq on public.follows (follower_id, partner_id) where partner_id is not null;
create index if not exists follows_profile_idx on public.follows (profile_id);
create index if not exists follows_partner_idx on public.follows (partner_id);

alter table public.follows enable row level security;

drop policy if exists "Follows visible to the people involved" on public.follows;
create policy "Follows visible to the people involved" on public.follows
  for select using (
    follower_id = (select auth.uid()) or profile_id = (select auth.uid()) or partner_id = (select auth.uid())
  );

drop policy if exists "Follow as myself" on public.follows;
create policy "Follow as myself" on public.follows
  for insert with check (follower_id = (select auth.uid()));

drop policy if exists "Unfollow as myself" on public.follows;
create policy "Unfollow as myself" on public.follows
  for delete using (follower_id = (select auth.uid()));

-- Nome a mostrar de um evento ("Sofia & Tiago").
create or replace function public.event_display_name(p_w public.weddings)
returns text
language sql
immutable
as $$
  select case
    when coalesce(trim(p_w.partner_name_2), '') = '' then coalesce(p_w.partner_name_1, 'Evento')
    else coalesce(p_w.partner_name_1, '') || ' & ' || p_w.partner_name_2
  end;
$$;

create or replace function public.public_profile(p_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_me uuid := auth.uid();
  v_p public.profiles;
  v_out jsonb;
begin
  if v_me is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select * into v_p from public.profiles where id = p_id and pending_deletion_at is null;
  if v_p.id is null then
    return null;
  end if;
  select jsonb_build_object(
    'id', v_p.id,
    'full_name', v_p.full_name,
    'username', v_p.username,
    'avatar_url', v_p.avatar_url,
    'bio', v_p.bio,
    'city', v_p.city,
    'profile_public', v_p.profile_public,
    'is_me', v_p.id = v_me,
    'followers', (select count(*) from public.follows f where f.profile_id = v_p.id),
    'following', (select count(*) from public.follows f where f.follower_id = v_p.id),
    'following_people', (select count(*) from public.follows f where f.follower_id = v_p.id and f.profile_id is not null),
    'following_partners', (select count(*) from public.follows f where f.follower_id = v_p.id and f.partner_id is not null),
    'events', (
      (select count(*) from public.weddings w where w.owner_id = v_p.id and w.pending_deletion_at is null)
      + (select count(*) from public.wedding_guest_members m where m.guest_id = v_p.id)
    ),
    'i_follow', exists (select 1 from public.follows f where f.follower_id = v_me and f.profile_id = v_p.id),
    'follows_me', exists (select 1 from public.follows f where f.follower_id = v_p.id and f.profile_id = v_me),
    'mutual', coalesce((
      select jsonb_agg(jsonb_build_object('id', x.id, 'full_name', x.full_name, 'avatar_url', x.avatar_url))
      from (
        select p.id, p.full_name, p.avatar_url
        from public.follows mine
        join public.follows theirs on theirs.follower_id = mine.profile_id and theirs.profile_id = v_p.id
        join public.profiles p on p.id = mine.profile_id
        where mine.follower_id = v_me and mine.profile_id is not null
        limit 3
      ) x
    ), '[]'::jsonb),
    'mutual_count', (
      select count(*)
      from public.follows mine
      join public.follows theirs on theirs.follower_id = mine.profile_id and theirs.profile_id = v_p.id
      where mine.follower_id = v_me and mine.profile_id is not null
    ),
    'upcoming', coalesce((
      select jsonb_agg(e order by e->>'wedding_date' nulls last)
      from (
        select jsonb_build_object(
          'wedding_id', w.id, 'event_type', w.event_type,
          'partner_name_1', w.partner_name_1, 'partner_name_2', w.partner_name_2,
          'wedding_date', w.wedding_date, 'ceremony_time', w.ceremony_time,
          'venue', w.venue, 'location', w.location, 'cover_photo_url', w.cover_photo_url,
          'is_paid', w.is_paid, 'entry_price', w.entry_price,
          'joined', exists (select 1 from public.wedding_guest_members m2 where m2.wedding_id = w.id and m2.guest_id = v_me),
          'mine', w.owner_id = v_me,
          'going_count', (select count(*) from public.wedding_guest_members m3 where m3.wedding_id = w.id)
        ) as e
        from public.weddings w
        where w.pending_deletion_at is null
          and (w.wedding_date is null or w.wedding_date >= current_date)
          and (w.owner_id = v_p.id or exists (select 1 from public.wedding_guest_members m where m.wedding_id = w.id and m.guest_id = v_p.id))
          and (w.is_public or w.owner_id = v_me or exists (select 1 from public.wedding_guest_members m4 where m4.wedding_id = w.id and m4.guest_id = v_me))
        limit 10
      ) s
    ), '[]'::jsonb)
  ) into v_out;
  return v_out;
end;
$$;
revoke execute on function public.public_profile(uuid) from public, anon;
grant execute on function public.public_profile(uuid) to authenticated;

-- Quem uma pessoa segue: 'people' ou 'partners'.
create or replace function public.follow_list(p_id uuid, p_kind text)
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case when p_kind = 'partners' then coalesce((
    select jsonb_agg(jsonb_build_object(
      'id', pp.id, 'name', pp.business_name, 'avatar_url', pp.cover_photo_url,
      'subtitle', coalesce(pp.city, ''),
      'i_follow', exists (select 1 from public.follows f2 where f2.follower_id = auth.uid() and f2.partner_id = pp.id),
      'is_me', false
    ) order by f.created_at desc)
    from public.follows f join public.partner_profiles pp on pp.id = f.partner_id
    where f.follower_id = p_id and auth.uid() is not null
  ), '[]'::jsonb)
  else coalesce((
    select jsonb_agg(jsonb_build_object(
      'id', p.id, 'name', p.full_name, 'avatar_url', p.avatar_url,
      'subtitle', case
        when p.id = auth.uid() then 'És tu'
        when exists (select 1 from public.follows f3 where f3.follower_id = p.id and f3.profile_id = auth.uid()) then 'Segue-te'
        else coalesce(p.city, '') end,
      'i_follow', exists (select 1 from public.follows f2 where f2.follower_id = auth.uid() and f2.profile_id = p.id),
      'is_me', p.id = auth.uid()
    ) order by f.created_at desc)
    from public.follows f join public.profiles p on p.id = f.profile_id
    where f.follower_id = p_id and auth.uid() is not null and p.pending_deletion_at is null
  ), '[]'::jsonb) end;
$$;
revoke execute on function public.follow_list(uuid, text) from public, anon;
grant execute on function public.follow_list(uuid, text) to authenticated;

create or replace function public.partner_follow_info(p_partner uuid)
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select jsonb_build_object(
    'followers', (select count(*) from public.follows f where f.partner_id = p_partner),
    'i_follow', exists (select 1 from public.follows f where f.follower_id = auth.uid() and f.partner_id = p_partner),
    'friends', coalesce((
      select jsonb_agg(jsonb_build_object('id', x.id, 'full_name', x.full_name, 'avatar_url', x.avatar_url))
      from (
        select p.id, p.full_name, p.avatar_url
        from public.follows mine
        join public.follows theirs on theirs.follower_id = mine.profile_id and theirs.partner_id = p_partner
        join public.profiles p on p.id = mine.profile_id
        where mine.follower_id = auth.uid() and mine.profile_id is not null
        limit 3
      ) x
    ), '[]'::jsonb),
    'friends_count', (
      select count(*)
      from public.follows mine
      join public.follows theirs on theirs.follower_id = mine.profile_id and theirs.partner_id = p_partner
      where mine.follower_id = auth.uid() and mine.profile_id is not null
    )
  )
  where auth.uid() is not null;
$$;
revoke execute on function public.partner_follow_info(uuid) from public, anon;
grant execute on function public.partner_follow_info(uuid) to authenticated;

insert into public.applied_migrations (id) values ('183') on conflict do nothing;

commit;
