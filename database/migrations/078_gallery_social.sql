-- ============================================================
-- 078 — Galeria social: gostos, comentários e quem publicou
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "a galeria ficava engraçado fazer
-- como se fosse uma rede social como o Instagram, onde cada convidado e
-- casal pode colocar gosto, comentar e ver quem postou a foto e ver o
-- seu perfil".
--
-- Quem pode ver/gostar/comentar uma foto: exatamente quem a pode ver
-- (mesma regra da policy "Gallery visibility" de 061) — casal (membros
-- do casamento) e convidados ligados ao casamento, e só fotos aprovadas
-- (o autor também vê as dele por aprovar, mas não recebe gostos nelas).

create or replace function public.can_see_gallery_photo(p_photo_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.wedding_gallery_photos p
    where p.id = p_photo_id
      and (
        public.is_wedding_member(p.wedding_id)
        or p.uploaded_by = auth.uid()
        or (p.status = 'approved' and public.is_wedding_guest_member(p.wedding_id))
      )
  );
$$;

revoke execute on function public.can_see_gallery_photo(uuid) from public, anon;
grant execute on function public.can_see_gallery_photo(uuid) to authenticated;

-- ------------------------------------------------------------
-- Gostos
-- ------------------------------------------------------------
create table if not exists public.gallery_photo_likes (
  photo_id uuid not null references public.wedding_gallery_photos(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (photo_id, profile_id)
);

alter table public.gallery_photo_likes enable row level security;

drop policy if exists "See likes of visible photos" on public.gallery_photo_likes;
create policy "See likes of visible photos"
  on public.gallery_photo_likes for select
  using (public.can_see_gallery_photo(photo_id));

drop policy if exists "Like visible approved photos" on public.gallery_photo_likes;
create policy "Like visible approved photos"
  on public.gallery_photo_likes for insert
  with check (
    profile_id = auth.uid()
    and public.can_see_gallery_photo(photo_id)
    and exists (select 1 from public.wedding_gallery_photos p where p.id = photo_id and p.status = 'approved')
  );

drop policy if exists "Remove own like" on public.gallery_photo_likes;
create policy "Remove own like"
  on public.gallery_photo_likes for delete
  using (profile_id = auth.uid());

grant select, insert, delete on public.gallery_photo_likes to authenticated;

-- ------------------------------------------------------------
-- Comentários
-- ------------------------------------------------------------
create table if not exists public.gallery_photo_comments (
  id uuid primary key default gen_random_uuid(),
  photo_id uuid not null references public.wedding_gallery_photos(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (length(trim(body)) between 1 and 1000),
  created_at timestamptz not null default now()
);

create index if not exists gallery_photo_comments_photo_idx
  on public.gallery_photo_comments (photo_id, created_at);

alter table public.gallery_photo_comments enable row level security;

drop policy if exists "See comments of visible photos" on public.gallery_photo_comments;
create policy "See comments of visible photos"
  on public.gallery_photo_comments for select
  using (public.can_see_gallery_photo(photo_id));

drop policy if exists "Comment on visible approved photos" on public.gallery_photo_comments;
create policy "Comment on visible approved photos"
  on public.gallery_photo_comments for insert
  with check (
    profile_id = auth.uid()
    and public.can_see_gallery_photo(photo_id)
    and exists (select 1 from public.wedding_gallery_photos p where p.id = photo_id and p.status = 'approved')
  );

-- O autor do comentário apaga o seu; o casal apaga qualquer um.
drop policy if exists "Delete own comment or as couple" on public.gallery_photo_comments;
create policy "Delete own comment or as couple"
  on public.gallery_photo_comments for delete
  using (
    profile_id = auth.uid()
    or exists (
      select 1 from public.wedding_gallery_photos p
      where p.id = photo_id and public.is_wedding_member(p.wedding_id)
    )
  );

grant select, insert, delete on public.gallery_photo_comments to authenticated;

-- Ajuda: um perfil é do casal (dono ou colaborador ativo) deste casamento?
create or replace function public.is_wedding_member_profile(p_wedding_id uuid, p_profile_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select exists (select 1 from public.weddings w where w.id = p_wedding_id and w.owner_id = p_profile_id)
      or exists (
        select 1 from public.wedding_collaborators c
        where c.wedding_id = p_wedding_id and c.user_id = p_profile_id
          and c.status = 'active' and c.removed_at is null
      );
$$;

-- ------------------------------------------------------------
-- Feed: fotos + autor + contagens, numa chamada
-- ------------------------------------------------------------
-- `profiles` só deixa cada pessoa ler a própria linha — por isso o nome
-- e a foto de quem publicou vêm daqui (security definer), e só para
-- fotos que quem pede já pode ver.
create or replace function public.get_gallery_feed(p_wedding_id uuid)
returns table (
  photo_id uuid,
  uploaded_by uuid,
  author_name text,
  author_avatar_url text,
  author_is_couple boolean,
  like_count integer,
  liked_by_me boolean,
  comment_count integer
)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select
    p.id,
    p.uploaded_by,
    coalesce(pr.full_name, 'Convidado'),
    pr.avatar_url,
    public.is_wedding_member_profile(p.wedding_id, p.uploaded_by),
    (select count(*)::int from public.gallery_photo_likes l where l.photo_id = p.id),
    exists (select 1 from public.gallery_photo_likes l where l.photo_id = p.id and l.profile_id = auth.uid()),
    (select count(*)::int from public.gallery_photo_comments c where c.photo_id = p.id)
  from public.wedding_gallery_photos p
  left join public.profiles pr on pr.id = p.uploaded_by
  where p.wedding_id = p_wedding_id
    and public.can_see_gallery_photo(p.id);
$$;

revoke execute on function public.get_gallery_feed(uuid) from public, anon;
grant execute on function public.get_gallery_feed(uuid) to authenticated;
revoke execute on function public.is_wedding_member_profile(uuid, uuid) from public, anon;
grant execute on function public.is_wedding_member_profile(uuid, uuid) to authenticated;

-- ------------------------------------------------------------
-- Comentários de uma foto, com autor
-- ------------------------------------------------------------
create or replace function public.get_gallery_comments(p_photo_id uuid)
returns table (
  comment_id uuid,
  profile_id uuid,
  author_name text,
  author_avatar_url text,
  body text,
  created_at timestamptz
)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select c.id, c.profile_id, coalesce(pr.full_name, 'Convidado'), pr.avatar_url, c.body, c.created_at
  from public.gallery_photo_comments c
  left join public.profiles pr on pr.id = c.profile_id
  where c.photo_id = p_photo_id
    and public.can_see_gallery_photo(p_photo_id)
  order by c.created_at;
$$;

revoke execute on function public.get_gallery_comments(uuid) from public, anon;
grant execute on function public.get_gallery_comments(uuid) to authenticated;

-- ------------------------------------------------------------
-- "Perfil" de quem publicou, dentro deste casamento
-- ------------------------------------------------------------
-- Só nome, foto, se é do casal ou convidado, e o grupo/lado em que o
-- casal o pôs na lista (nada de contactos). Só responde a quem é do
-- mesmo casamento.
create or replace function public.get_gallery_member(p_wedding_id uuid, p_profile_id uuid)
returns table (
  profile_id uuid,
  full_name text,
  avatar_url text,
  is_couple boolean,
  group_label text,
  approved_photos integer,
  likes_received integer
)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select
    pr.id,
    coalesce(pr.full_name, 'Convidado'),
    pr.avatar_url,
    public.is_wedding_member_profile(p_wedding_id, pr.id),
    (select g.group_label from public.guests g
      where g.wedding_id = p_wedding_id and g.linked_profile_id = pr.id limit 1),
    (select count(*)::int from public.wedding_gallery_photos p
      where p.wedding_id = p_wedding_id and p.uploaded_by = pr.id and p.status = 'approved'),
    (select count(*)::int from public.gallery_photo_likes l
      join public.wedding_gallery_photos p on p.id = l.photo_id
      where p.wedding_id = p_wedding_id and p.uploaded_by = pr.id and p.status = 'approved')
  from public.profiles pr
  where pr.id = p_profile_id
    and (public.is_wedding_member(p_wedding_id) or public.is_wedding_guest_member(p_wedding_id));
$$;

revoke execute on function public.get_gallery_member(uuid, uuid) from public, anon;
grant execute on function public.get_gallery_member(uuid, uuid) to authenticated;
