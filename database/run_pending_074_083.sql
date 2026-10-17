-- ============================================================
-- Migrações 074 → 083 juntas, para colar de uma vez no Supabase
-- (SQL Editor → New query → colar → Run). Pode correr-se mais do
-- que uma vez: cada passo só faz o que ainda falta.
-- ============================================================


-- >>>>>>>>>>>>>>>>>>>> 074_wedding_event_type.sql >>>>>>>>>>>>>>>>>>>>
-- ============================================================
-- weddings.event_type — tipo de evento escolhido no onboarding
-- ============================================================
--
-- Pedido do utilizador (2026-10-16): "adiciona uma opção para as pessoas
-- escolherem entre eventos, e não só casamentos no onboarding". A tabela
-- continua a chamar-se `weddings` (é o "evento" do casal/organizador);
-- esta coluna só regista o tipo. Linhas existentes ficam 'wedding'.
alter table public.weddings
  add column if not exists event_type text not null default 'wedding';

alter table public.weddings
  drop constraint if exists weddings_event_type_check;

alter table public.weddings
  add constraint weddings_event_type_check
  check (event_type in ('wedding', 'baptism', 'birthday', 'other'));


-- >>>>>>>>>>>>>>>>>>>> 075_connect_remaining.sql >>>>>>>>>>>>>>>>>>>>
-- ============================================================
-- 075 — ligar o que ainda estava por ligar na app (2026-10-16)
-- ============================================================
--
-- Pedido do utilizador: "conecta toda a lógica da app que falta".
-- Tudo aqui é aditivo (colunas novas/funções novas), seguro correr mais
-- do que uma vez.

-- ------------------------------------------------------------
-- 1. Presentes — o separador "Presentes" do convidado só mostrava
--    "Em breve". O casal passa a poder indicar uma lista de presentes
--    (link) e/ou um IBAN para contribuições, e uma mensagem.
--    A leitura pelos convidados usa a mesma ligação que já existe
--    (`wedding_guest_members` → `weddings`), por isso não precisa de
--    policy nova.
-- ------------------------------------------------------------
alter table public.weddings add column if not exists gift_list_url text;
alter table public.weddings add column if not exists gift_iban text;
alter table public.weddings add column if not exists gift_message text;

-- ------------------------------------------------------------
-- 2. Distância máxima de deslocação do parceiro — o campo existia no
--    ecrã ("Em breve") mas não havia coluna.
-- ------------------------------------------------------------
alter table public.partner_profiles
  add column if not exists max_travel_distance_km integer
  check (max_travel_distance_km is null or max_travel_distance_km between 1 and 2000);

-- ------------------------------------------------------------
-- 3. Menu do convidado — `guests.menu_selection` já existia (073) mas
--    o convidado só o podia escrever no assistente inicial. Mesma
--    regra de `update_own_guest_info()` (067): só a própria linha, só
--    este campo.
-- ------------------------------------------------------------
create or replace function public.update_own_guest_menu(p_menu_selection text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  update public.guests
  set menu_selection = nullif(trim(p_menu_selection), ''),
      updated_at = now()
  where linked_profile_id = auth.uid();
end;
$$;

revoke execute on function public.update_own_guest_menu(text) from public, anon;
grant execute on function public.update_own_guest_menu(text) to authenticated;

-- ------------------------------------------------------------
-- 4. Página pública de convite (`/invite/<código>`) — antes lia um
--    casamento de exemplo em memória (MockBackend) e o link partilhado
--    apontava para um domínio que não existe. Agora usa o código de
--    convidado real (050). Público (`anon`) como
--    `lookup_wedding_by_guest_code()`: só devolve o que já aparece no
--    convite (nomes, data, local, foto), nada sensível.
-- ------------------------------------------------------------
create or replace function public.get_public_invite(p_code text)
returns table (
  wedding_id uuid,
  partner_name_1 text,
  partner_name_2 text,
  wedding_date date,
  location text,
  venue text,
  cover_photo_url text,
  quote text,
  guest_code text
)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select id, partner_name_1, partner_name_2, wedding_date, location, venue,
         cover_photo_url, quote, guest_code
  from public.weddings
  where guest_code = upper(trim(p_code));
$$;

grant execute on function public.get_public_invite(text) to anon, authenticated;


-- >>>>>>>>>>>>>>>>>>>> 076_guest_code_open_by_default.sql >>>>>>>>>>>>>>>>>>>>
-- ============================================================
-- 076 — o código do casal volta a funcionar para quem o recebe
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "o código do casal não funciona".
-- Desde a 071 o modo por omissão era 'code_with_match': quem entrava
-- com o código só ficava ligado a uma entrada da lista se o email ou o
-- telefone coincidissem com os que o casal escreveu. Para todos os
-- outros, o código "aceitava" mas o convidado ficava sem entrada na
-- lista — não conseguia confirmar presença, escolher menu nem ver mesa.
--
-- Agora o modo por omissão é 'code_open' (quem tem o código entra e é
-- acrescentado à lista, ou ligado à entrada que já existe com o mesmo
-- email/telefone). O casal pode voltar a restringir nas Definições
-- ("Quem pode entrar com o código").

alter table public.weddings alter column guest_join_mode set default 'code_open';

update public.weddings
set guest_join_mode = 'code_open'
where guest_join_mode = 'code_with_match';

-- Convidados que já entraram com o código e ficaram sem entrada na
-- lista: cria-lhes agora a entrada (mesma regra da `join_wedding_by_code`
-- em modo 'code_open').
insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id)
select m.wedding_id, coalesce(p.full_name, 'Convidado'), u.email, p.phone, m.guest_id
from public.wedding_guest_members m
join public.weddings w on w.id = m.wedding_id and w.guest_join_mode = 'code_open'
join public.profiles p on p.id = m.guest_id and p.role = 'guest'
join auth.users u on u.id = m.guest_id
where not exists (
  select 1 from public.guests g
  where g.wedding_id = m.wedding_id and g.linked_profile_id = m.guest_id
)
on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing;


-- >>>>>>>>>>>>>>>>>>>> 077_partner_key_figure.sql >>>>>>>>>>>>>>>>>>>>
-- ============================================================
-- 077 — número de referência do parceiro, por categoria
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): no perfil do parceiro, o quadrado
-- "Capacidade" só faz sentido para espaços/quintas. Para as outras
-- categorias deve mostrar o que faz sentido (florista: nº de arranjos,
-- catering: até quantas pessoas serve, etc.).
--
-- Um único número por parceiro; o significado (e o rótulo) vem da
-- categoria principal — ver `lib/core/partners/category_figure.dart`.
-- Para espaços continua a valer a soma dos lugares das mesas (022) e
-- este número só é usado quando não há mesas registadas.

alter table public.partner_profiles
  add column if not exists key_figure integer
  check (key_figure is null or key_figure between 1 and 100000);


-- >>>>>>>>>>>>>>>>>>>> 078_gallery_social.sql >>>>>>>>>>>>>>>>>>>>
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


-- >>>>>>>>>>>>>>>>>>>> 079_partner_invite_link.sql >>>>>>>>>>>>>>>>>>>>
-- ============================================================
-- 079 — "Convidar o teu par" por link (sem email)
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "convidar o teu par por partilha de
-- link! não por email. abre partilha de opções do telemóvel".
--
-- O casal gera um link (`/#/juntar/<token>`) e partilha-o pelo menu do
-- telemóvel (WhatsApp, SMS, …). Quem abre o link e entra/cria conta fica
-- colaborador ativo do casamento (`wedding_collaborators`, 003) — o
-- mesmo papel que o convite por email já previa, mas sem depender de um
-- email.

create table if not exists public.wedding_partner_invites (
  token uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '30 days',
  used_by uuid references public.profiles(id),
  used_at timestamptz
);

alter table public.wedding_partner_invites enable row level security;
-- Sem acesso direto: só pelas funções abaixo.

-- Link ativo do casamento (reaproveita um ainda válido e por usar).
create or replace function public.create_partner_invite(p_wedding_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_token uuid;
begin
  if auth.uid() is null or not public.is_wedding_member(p_wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select token into v_token
  from public.wedding_partner_invites
  where wedding_id = p_wedding_id and used_at is null and expires_at > now()
  order by created_at desc
  limit 1;

  if v_token is null then
    insert into public.wedding_partner_invites (wedding_id, created_by)
    values (p_wedding_id, auth.uid())
    returning token into v_token;
  end if;

  return v_token;
end;
$$;

revoke execute on function public.create_partner_invite(uuid) from public, anon;
grant execute on function public.create_partner_invite(uuid) to authenticated;

-- Nomes do casal para a página do link (pública: só os nomes).
create or replace function public.get_partner_invite(p_token uuid)
returns table (partner_name_1 text, partner_name_2 text, valid boolean)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select w.partner_name_1, w.partner_name_2, (i.used_at is null and i.expires_at > now())
  from public.wedding_partner_invites i
  join public.weddings w on w.id = i.wedding_id
  where i.token = p_token;
$$;

grant execute on function public.get_partner_invite(uuid) to anon, authenticated;

-- Aceitar: torna a conta atual colaboradora ativa do casamento e marca
-- o onboarding como feito (já há casamento — não precisa de criar outro).
create or replace function public.accept_partner_invite(p_token uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_invite public.wedding_partner_invites%rowtype;
  v_email text;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select * into v_invite from public.wedding_partner_invites where token = p_token;
  if not found then
    raise exception 'not_found' using errcode = 'P0002';
  end if;

  -- Já é do casamento (dono ou colaborador): nada a fazer.
  if exists (select 1 from public.weddings w where w.id = v_invite.wedding_id and w.owner_id = auth.uid())
     or exists (
       select 1 from public.wedding_collaborators c
       where c.wedding_id = v_invite.wedding_id and c.user_id = auth.uid() and c.status = 'active'
     ) then
    return v_invite.wedding_id;
  end if;

  if v_invite.used_at is not null then
    raise exception 'already_used' using errcode = 'P0007';
  end if;
  if v_invite.expires_at <= now() then
    raise exception 'expired' using errcode = 'P0008';
  end if;

  select email into v_email from auth.users where id = auth.uid();

  insert into public.wedding_collaborators (wedding_id, user_id, invited_email, status, accepted_at)
  values (v_invite.wedding_id, auth.uid(), coalesce(v_email, ''), 'active', now());

  update public.wedding_partner_invites
  set used_by = auth.uid(), used_at = now()
  where token = p_token;

  update public.profiles set onboarding_completed = true where id = auth.uid();

  return v_invite.wedding_id;
end;
$$;

revoke execute on function public.accept_partner_invite(uuid) from public, anon;
grant execute on function public.accept_partner_invite(uuid) to authenticated;


-- >>>>>>>>>>>>>>>>>>>> 080_partner_location.sql >>>>>>>>>>>>>>>>>>>>
-- ============================================================
-- 080 — Localização do parceiro (morada + coordenadas)
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "adiciona a opção da localização
-- nos parceiros. tanto como usar localização atual e mais opções como
-- escrever a morada e tudo".
--
-- Guardado no próprio perfil do parceiro. As coordenadas vêm da
-- localização atual do telemóvel ou da pesquisa de morada; servem mais
-- tarde para filtrar parceiros por distância ao local do evento.

alter table public.partner_profiles
  add column if not exists address_line text,
  add column if not exists postal_code text,
  add column if not exists city text,
  add column if not exists region text,
  add column if not exists latitude double precision,
  add column if not exists longitude double precision;


-- >>>>>>>>>>>>>>>>>>>> 081_onboarding_v2.sql >>>>>>>>>>>>>>>>>>>>
-- ============================================================
-- 081 — Onboarding v2 (desenhado no canvas, 2026-10-17)
-- ============================================================
--
-- * Organizadores: até 2 tipos de evento (+ "Qual?" quando é "Outro") e
--   os telemóveis de quem organiza.
-- * Convidados: vários acompanhantes, cada um com refeição, alergias e
--   telemóvel (opcional).
-- * Parceiros: o "passo 4" muda por categoria — um número (ou mínimo e
--   máximo) e o que oferecem.

-- ---------- organizadores ----------

alter table public.weddings
  drop constraint if exists weddings_event_type_check;

alter table public.weddings
  add constraint weddings_event_type_check
  check (event_type in (
    'wedding', 'baptism', 'birthday', 'communion', 'engagement',
    'vow_renewal', 'graduation', 'corporate', 'baby_shower', 'other'
  ));

alter table public.weddings
  add column if not exists event_types text[] not null default '{}',
  add column if not exists event_type_other text,
  add column if not exists partner1_phone text,
  add column if not exists partner2_phone text;

-- ---------- convidados ----------

create table if not exists public.guest_companions (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references public.guests(id) on delete cascade,
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  name text not null,
  is_child boolean not null default false,
  child_age integer,
  phone text,
  menu text,
  allergies text[] not null default '{}',
  created_at timestamptz not null default now()
);

create index if not exists guest_companions_guest_idx on public.guest_companions (guest_id);

alter table public.guest_companions enable row level security;

-- O próprio convidado (conta ligada à linha de `guests`) gere os seus
-- acompanhantes; quem organiza o evento pode vê-los.
drop policy if exists guest_companions_owner_all on public.guest_companions;
create policy guest_companions_owner_all on public.guest_companions
  for all
  using (exists (
    select 1 from public.guests g
    where g.id = guest_companions.guest_id and g.linked_profile_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.guests g
    where g.id = guest_companions.guest_id
      and g.linked_profile_id = auth.uid()
      and g.wedding_id = guest_companions.wedding_id
  ));

drop policy if exists guest_companions_members_read on public.guest_companions;
create policy guest_companions_members_read on public.guest_companions
  for select
  using (public.is_wedding_member(wedding_id));

-- ---------- parceiros ----------

alter table public.partner_profiles
  add column if not exists key_figure_max integer,
  add column if not exists offerings text[] not null default '{}';


-- >>>>>>>>>>>>>>>>>>>> 082_fix_join_by_code.sql >>>>>>>>>>>>>>>>>>>>
-- ============================================================
-- 082 — corrige "Não foi possível associar o código"
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): o código do casal dava sempre
-- "Não foi possível associar o código". Duas falhas nas funções da 071:
--
-- 1. `returns table (wedding_id …)` cria uma variável `wedding_id` que
--    choca com a coluna `wedding_id` nas consultas → erro 42702
--    ("column reference is ambiguous"). `#variable_conflict use_column`
--    resolve a favor da coluna.
-- 2. O índice único `guests_linked_profile_unique` é parcial
--    (`where linked_profile_id is not null`), por isso o `on conflict`
--    tem de repetir essa condição → senão erro 42P10.
--
-- A 076 tinha o mesmo `on conflict` e pode ter falhado; a parte final
-- desta migração repete-a de forma segura.

create or replace function public.join_wedding_by_code(p_code text)
returns table (wedding_id uuid, guest_matched boolean)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
#variable_conflict use_column
declare
  v_wedding_id uuid;
  v_join_mode guest_join_mode;
  v_email text;
  v_phone text;
  v_full_name text;
  v_matched_guest_id uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select id, guest_join_mode into v_wedding_id, v_join_mode
  from public.weddings where guest_code = upper(trim(p_code));
  if v_wedding_id is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;

  insert into public.wedding_guest_members (wedding_id, guest_id)
  values (v_wedding_id, auth.uid())
  on conflict (wedding_id, guest_id) do nothing;

  select u.email, p.full_name, p.phone
  into v_email, v_full_name, v_phone
  from auth.users u
  join public.profiles p on p.id = u.id
  where u.id = auth.uid();

  -- já ligado de uma vez anterior — idempotente, nada a fazer.
  select id into v_matched_guest_id
  from public.guests
  where wedding_id = v_wedding_id and linked_profile_id = auth.uid();

  if v_matched_guest_id is null and v_join_mode <> 'invite_only' then
    if v_email is not null then
      update public.guests
      set linked_profile_id = auth.uid()
      where wedding_id = v_wedding_id
        and linked_profile_id is null
        and lower(email) = lower(v_email)
      returning id into v_matched_guest_id;
    end if;

    if v_matched_guest_id is null and v_phone is not null and v_phone <> '' then
      update public.guests
      set linked_profile_id = auth.uid()
      where wedding_id = v_wedding_id
        and linked_profile_id is null
        and phone is not null
        and regexp_replace(phone, '[^0-9]', '', 'g') = regexp_replace(v_phone, '[^0-9]', '', 'g')
      returning id into v_matched_guest_id;
    end if;

    if v_matched_guest_id is null and v_join_mode = 'code_open' then
      insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id)
      values (v_wedding_id, coalesce(v_full_name, 'Convidado'), v_email, v_phone, auth.uid())
      on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing
      returning id into v_matched_guest_id;
    end if;
  end if;

  -- Preenche dados em falta a partir da conta (nunca substitui os que o
  -- casal já tinha colocado à mão na lista).
  if v_matched_guest_id is not null then
    update public.guests
    set email = coalesce(email, v_email),
        phone = coalesce(phone, v_phone),
        updated_at = now()
    where id = v_matched_guest_id;
  end if;

  return query select v_wedding_id, v_matched_guest_id is not null;
end;
$$;

revoke execute on function public.join_wedding_by_code(text) from public, anon;
grant execute on function public.join_wedding_by_code(text) to authenticated;

create or replace function public.join_wedding_by_invite_token(p_token uuid)
returns table (wedding_id uuid, guest_matched boolean)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
#variable_conflict use_column
declare
  v_guest record;
  v_email text;
  v_phone text;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select * into v_guest from public.guests where rsvp_token = p_token;
  if v_guest is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;

  if v_guest.linked_profile_id is not null and v_guest.linked_profile_id <> auth.uid() then
    raise exception 'already_linked' using errcode = 'P0007';
  end if;

  insert into public.wedding_guest_members (wedding_id, guest_id)
  values (v_guest.wedding_id, auth.uid())
  on conflict (wedding_id, guest_id) do nothing;

  if v_guest.linked_profile_id is null then
    select u.email, p.phone into v_email, v_phone
    from auth.users u
    join public.profiles p on p.id = u.id
    where u.id = auth.uid();

    update public.guests
    set linked_profile_id = auth.uid(),
        email = coalesce(email, v_email),
        phone = coalesce(phone, v_phone),
        updated_at = now()
    where id = v_guest.id;
  end if;

  return query select v_guest.wedding_id, true;
end;
$$;
revoke execute on function public.join_wedding_by_invite_token(uuid) from public, anon;
grant execute on function public.join_wedding_by_invite_token(uuid) to authenticated;

-- Repete o acerto da 076 (convidados que entraram com o código mas
-- ficaram sem entrada na lista).
insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id)
select m.wedding_id, coalesce(p.full_name, 'Convidado'), u.email, p.phone, m.guest_id
from public.wedding_guest_members m
join public.weddings w on w.id = m.wedding_id and w.guest_join_mode = 'code_open'
join public.profiles p on p.id = m.guest_id and p.role = 'guest'
join auth.users u on u.id = m.guest_id
where not exists (
  select 1 from public.guests g
  where g.wedding_id = m.wedding_id and g.linked_profile_id = m.guest_id
)
on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing;


-- >>>>>>>>>>>>>>>>>>>> 083_host_photos_auto_approved.sql >>>>>>>>>>>>>>>>>>>>
-- ============================================================
-- 083 — fotos de quem organiza ficam logo aprovadas
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "eu como organizador quando
-- publico uma foto ... tenho que verificar a minha própria fotografia".
-- Só as fotos dos convidados passam pela fila de moderação.

create or replace function public.gallery_photo_host_auto_approve()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if public.is_wedding_member(new.wedding_id) then
    new.status := 'approved';
    new.reviewed_by := new.uploaded_by;
    new.reviewed_at := now();
  end if;
  return new;
end;
$$;

drop trigger if exists gallery_photo_host_auto_approve on public.wedding_gallery_photos;
create trigger gallery_photo_host_auto_approve
  before insert on public.wedding_gallery_photos
  for each row execute function public.gallery_photo_host_auto_approve();

-- Fotos que quem organiza já publicou e ficaram à espera.
update public.wedding_gallery_photos p
set status = 'approved',
    reviewed_by = p.uploaded_by,
    reviewed_at = now()
where p.status = 'pending'
  and (
    exists (select 1 from public.weddings w where w.id = p.wedding_id and w.owner_id = p.uploaded_by)
    or exists (
      select 1 from public.wedding_collaborators wc
      where wc.wedding_id = p.wedding_id and wc.user_id = p.uploaded_by
    )
  );
