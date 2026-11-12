-- 186 · Onboarding novo + palavras bloqueadas (2026-11-12).
--
-- * Perfil: país, faixa etária e tipos de eventos de interesse
--   (perguntados no início da app, antes de criar a conta). A cidade
--   já existe (`profiles.city`).
-- * Palavras bloqueadas: asneiras e ofensas não entram no nome/tipo do
--   evento, no nome/@/bio do perfil nem nas mensagens. A lista fica numa
--   tabela (gerida no admin → Palavras bloqueadas). Compara palavra a
--   palavra (nomes de pessoas passam), sem acentos, com 0/1/3/4/5/7/@/$
--   lidos como letras, letras repetidas e letras soltas separadas
--   ("p.u.t.a").
-- * Limites: tipo «Outro» até 24 caracteres; nome do evento até 40.

begin;

alter table public.profiles
  add column if not exists country text,
  add column if not exists age_range text,
  add column if not exists interest_types text[] not null default '{}';

alter table public.profiles drop constraint if exists profiles_age_range_check;
alter table public.profiles
  add constraint profiles_age_range_check
  check (age_range is null or age_range in ('18-24', '25-34', '35-44', '45-54', '55+'));

create table if not exists public.blocked_words (
  word text primary key,
  created_at timestamptz not null default now()
);
alter table public.blocked_words enable row level security;
-- Só a equipa (admin → Palavras bloqueadas) lê e escreve. A app usa a
-- função text_allowed().
drop policy if exists "Admins manage blocked words" on public.blocked_words;
create policy "Admins manage blocked words" on public.blocked_words
  for all using (public.is_admin()) with check (public.is_admin());

insert into public.blocked_words (word) values
  -- Português
  ('caralho'), ('caralhos'), ('crl'), ('krl'), ('foda'), ('fodas'), ('fodase'), ('fodasse'),
  ('foder'), ('fodido'), ('fodida'), ('fodidos'), ('fdp'), ('pqp'), ('merda'), ('merdas'),
  ('puta'), ('putas'), ('putaria'), ('cona'), ('conas'), ('pissa'), ('caralhinho'),
  ('cabrao'), ('cabroes'), ('cabrona'), ('porra'), ('paneleiro'), ('paneleiros'), ('maricas'),
  ('fufa'), ('cu'), ('cus'), ('corno'), ('cornudo'), ('punheta'), ('badalhoca'), ('badalhoco'),
  ('retardado'), ('retardada'), ('rabeta'), ('mamada'),
  -- Inglês
  ('fuck'), ('fucking'), ('fucker'), ('motherfucker'), ('fck'), ('shit'), ('bullshit'),
  ('bitch'), ('bitches'), ('cunt'), ('dick'), ('cock'), ('pussy'), ('asshole'), ('bastard'),
  ('whore'), ('slut'), ('nigger'), ('nigga'), ('faggot'), ('fag'), ('retard'), ('rape'),
  -- Ódio
  ('nazi'), ('nazis'), ('hitler')
on conflict do nothing;

-- Texto normalizado: minúsculas, sem acentos, números/símbolos lidos
-- como letras.
create or replace function public.bw_normalize(p text)
returns text
language sql
immutable
set search_path = public, pg_temp
as $$
  select translate(lower(coalesce(p, '')),
                   'áàâãäéèêëíìîïóòôõöúùûüçñ013457@$',
                   'aaaaaeeeeiiiiooooouuuucnoieastas');
$$;

create or replace function public.text_allowed(p_text text)
returns boolean
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_tokens text[];
  v_tok text;
  v_run text := '';
  v_check text[] := '{}';
begin
  if p_text is null or btrim(p_text) = '' then
    return true;
  end if;
  v_tokens := regexp_split_to_array(public.bw_normalize(p_text), '[^a-z]+');
  foreach v_tok in array v_tokens loop
    if v_tok = '' then
      continue;
    end if;
    v_check := v_check || v_tok || regexp_replace(v_tok, '(.)\1+', '\1', 'g');
    -- Letras soltas seguidas ("p u t a", "p.u.t.a") juntam-se numa palavra.
    if char_length(v_tok) = 1 then
      v_run := v_run || v_tok;
    else
      if char_length(v_run) > 1 then
        v_check := v_check || v_run;
      end if;
      v_run := '';
    end if;
  end loop;
  if char_length(v_run) > 1 then
    v_check := v_check || v_run;
  end if;
  return not exists (
    select 1 from public.blocked_words b
    where public.bw_normalize(b.word) = any (v_check)
  );
end;
$$;
grant execute on function public.text_allowed(text) to anon, authenticated;

-- Eventos: nome (partner_name_1/2) e tipo «Outro».
create or replace function public.weddings_check_text()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if tg_op = 'INSERT' or new.event_type_other is distinct from old.event_type_other then
    if char_length(coalesce(new.event_type_other, '')) > 24 then
      raise exception 'O tipo de evento tem no máximo 24 caracteres.';
    end if;
    if not public.text_allowed(new.event_type_other) then
      raise exception 'Esta palavra não é permitida. Escolhe outra.';
    end if;
  end if;
  if tg_op = 'INSERT'
     or new.partner_name_1 is distinct from old.partner_name_1
     or new.partner_name_2 is distinct from old.partner_name_2 then
    if char_length(coalesce(new.partner_name_1, '')) > 40 then
      raise exception 'O nome do evento tem no máximo 40 caracteres.';
    end if;
    if not public.text_allowed(new.partner_name_1) or not public.text_allowed(new.partner_name_2) then
      raise exception 'Esta palavra não é permitida. Escolhe outra.';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists weddings_check_text on public.weddings;
create trigger weddings_check_text
  before insert or update of partner_name_1, partner_name_2, event_type_other on public.weddings
  for each row execute function public.weddings_check_text();

-- Perfil: nome, @, bio e cidade.
create or replace function public.profiles_check_text()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if (tg_op = 'INSERT' or new.full_name is distinct from old.full_name) and not public.text_allowed(new.full_name)
     or (tg_op = 'INSERT' or new.username is distinct from old.username) and not public.text_allowed(new.username)
     or (tg_op = 'INSERT' or new.bio is distinct from old.bio) and not public.text_allowed(new.bio)
     or (tg_op = 'INSERT' or new.city is distinct from old.city) and not public.text_allowed(new.city) then
    raise exception 'Esta palavra não é permitida. Escolhe outra.';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_check_text on public.profiles;
create trigger profiles_check_text
  before insert or update of full_name, username, bio, city on public.profiles
  for each row execute function public.profiles_check_text();

-- Mensagens (conversas com parceiros e grupos).
create or replace function public.messages_check_text()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if not public.text_allowed(new.body) then
    raise exception 'Esta palavra não é permitida. Escolhe outra.';
  end if;
  return new;
end;
$$;

drop trigger if exists messages_check_text on public.messages;
create trigger messages_check_text
  before insert or update of body on public.messages
  for each row execute function public.messages_check_text();

drop trigger if exists chat_group_messages_check_text on public.chat_group_messages;
create trigger chat_group_messages_check_text
  before insert or update of body on public.chat_group_messages
  for each row execute function public.messages_check_text();

insert into public.applied_migrations (id) values ('186') on conflict do nothing;

commit;
