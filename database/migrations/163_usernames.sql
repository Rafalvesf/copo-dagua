-- ============================================================
-- 163 — @ único para parceiros e utilizadores
-- ============================================================
--
-- Pedido do utilizador (2026-11-07): "permite aos parceiros e aos
-- utilizadores criar um @ único e verificado".
--
-- • `profiles.username`: minúsculas, letras/números/ponto/underscore,
--   3 a 30, sem ponto no início/fim nem dois seguidos. Único sem
--   distinguir maiúsculas.
-- • Só a própria conta o escolhe (`set_my_username`); nunca escrita
--   direta (trigger). Mudar no máximo 1 vez a cada 30 dias, para não se
--   andar a trocar de @ para se fazer passar por outro.
-- • Nomes reservados (marca, suporte, sistema) não se podem usar.
-- • O @ fica "verificado": é da conta que o escolheu e mais ninguém o
--   pode ter. Os parceiros com o plano Verificado mostram ainda o visto.

alter table public.profiles
  add column if not exists username text,
  add column if not exists username_changed_at timestamptz;

create unique index if not exists profiles_username_lower_idx
  on public.profiles (lower(username)) where username is not null;

alter table public.profiles drop constraint if exists profiles_username_format;
alter table public.profiles add constraint profiles_username_format check (
  username is null or (
    username ~ '^[a-z0-9._]{3,30}$'
    and username !~ '^\.' and username !~ '\.$' and username !~ '\.\.'
  )
);

create table if not exists public.reserved_usernames (
  name text primary key
);
alter table public.reserved_usernames enable row level security;
insert into public.reserved_usernames (name) values
  ('admin'), ('administrador'), ('anossa'), ('a_nossa'), ('a.nossa'), ('anossa.app'), ('anossaapp'),
  ('tchin'), ('tchintchin'), ('copodagua'), ('copo_dagua'), ('suporte'), ('support'), ('ajuda'),
  ('help'), ('equipa'), ('team'), ('oficial'), ('official'), ('verificado'), ('verified'),
  ('sistema'), ('system'), ('root'), ('api'), ('www'), ('app'), ('null'), ('undefined'),
  ('moderador'), ('moderacao'), ('seguranca'), ('security'), ('pagamentos'), ('payments'),
  ('stripe'), ('noreply'), ('no_reply'), ('info'), ('geral'), ('contacto'), ('parceiros'),
  ('convidados'), ('organizador'), ('eventos'), ('convite'), ('invite'), ('rsvp')
on conflict do nothing;

-- Escrita só pela função abaixo.
create or replace function public.protect_username()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if new.username is distinct from old.username
     and coalesce(current_setting('app.username_write', true), '') <> 'on'
     and coalesce(auth.role(), '') in ('authenticated', 'anon')
     and not public.is_admin() then
    new.username := old.username;
    new.username_changed_at := old.username_changed_at;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_username on public.profiles;
create trigger protect_username
  before update of username, username_changed_at on public.profiles
  for each row execute function public.protect_username();

create or replace function public.normalize_username(p text)
returns text
language sql
immutable
set search_path = public, pg_temp
as $$
  select lower(btrim(regexp_replace(coalesce(p, ''), '^@+', '')));
$$;

-- invalid | reserved | taken | ok | mine
create or replace function public.username_status(p_username text)
returns text
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v text := public.normalize_username(p_username);
  v_owner uuid;
begin
  if v !~ '^[a-z0-9._]{3,30}$' or v ~ '^\.' or v ~ '\.$' or v ~ '\.\.' then
    return 'invalid';
  end if;
  if exists (select 1 from public.reserved_usernames r where r.name = v or replace(r.name, '.', '') = replace(replace(v, '.', ''), '_', '')) then
    return 'reserved';
  end if;
  select id into v_owner from public.profiles where lower(username) = v;
  if v_owner is null then return 'ok'; end if;
  if v_owner = auth.uid() then return 'mine'; end if;
  return 'taken';
end;
$$;

revoke execute on function public.username_status(text) from public, anon;
grant execute on function public.username_status(text) to authenticated;

create or replace function public.set_my_username(p_username text)
returns text
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v text := public.normalize_username(p_username);
  v_status text;
  v_current text;
  v_changed timestamptz;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  v_status := public.username_status(v);
  if v_status = 'mine' then return v; end if;
  if v_status <> 'ok' then
    raise exception '%', v_status using errcode = '22023';
  end if;

  select username, username_changed_at into v_current, v_changed
  from public.profiles where id = auth.uid();
  if v_current is not null and v_changed is not null and v_changed > now() - interval '30 days' then
    raise exception 'too_soon' using errcode = '22023',
      detail = to_char(v_changed + interval '30 days', 'YYYY-MM-DD');
  end if;

  perform set_config('app.username_write', 'on', true);
  begin
    update public.profiles
    set username = v, username_changed_at = now()
    where id = auth.uid();
  exception when unique_violation then
    raise exception 'taken' using errcode = '22023';
  end;
  perform set_config('app.username_write', 'off', true);
  return v;
end;
$$;

revoke execute on function public.set_my_username(text) from public, anon;
grant execute on function public.set_my_username(text) to authenticated;

-- O meu @ e quando o posso voltar a mudar.
create or replace function public.my_username()
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select jsonb_build_object(
    'username', p.username,
    'changed_at', p.username_changed_at,
    'next_change_at', case when p.username is not null and p.username_changed_at is not null
                           then p.username_changed_at + interval '30 days' end
  )
  from public.profiles p
  where p.id = auth.uid();
$$;

revoke execute on function public.my_username() from public, anon;
grant execute on function public.my_username() to authenticated;

-- O @ de outra conta (para mostrar no perfil do parceiro, por exemplo).
create or replace function public.username_of(p_profile uuid)
returns text
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select username from public.profiles where id = p_profile;
$$;

revoke execute on function public.username_of(uuid) from public, anon;
grant execute on function public.username_of(uuid) to authenticated;

-- Procurar uma conta pelo @ (devolve só o id e o tipo).
create or replace function public.profile_by_username(p_username text)
returns table (profile_id uuid, role text)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select p.id, p.role::text
  from public.profiles p
  where lower(p.username) = public.normalize_username(p_username);
$$;

revoke execute on function public.profile_by_username(text) from public, anon;
grant execute on function public.profile_by_username(text) to authenticated;
