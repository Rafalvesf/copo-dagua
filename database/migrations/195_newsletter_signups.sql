-- ============================================================
-- 195 · Pré-registo no site antes das lojas
-- ============================================================
--
-- Pedido do Rafael (2026-11-16): no site de apresentação, organizadores
-- e parceiros fazem o pré-registo com as mesmas perguntas do onboarding
-- da app (papel, eventos ou categorias, de onde são, idade / negócio) e
-- deixam nome e email. A lista vê-se no admin («Pré-registos»). Ainda não
-- se enviam emails.
-- ============================================================

begin;

create table if not exists public.newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null check (char_length(email) between 5 and 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  kind text not null default 'organizador' check (kind in ('organizador', 'parceiro')),
  source text,
  name text,
  interests text[] not null default '{}',
  business_name text,
  country text,
  city text,
  age_range text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists newsletter_signups_email_uidx on public.newsletter_signups (lower(email));

alter table public.newsletter_signups enable row level security;

drop policy if exists "Admins read newsletter" on public.newsletter_signups;
create policy "Admins read newsletter" on public.newsletter_signups for select using (public.is_admin());

drop policy if exists "Admins delete newsletter" on public.newsletter_signups;
create policy "Admins delete newsletter" on public.newsletter_signups for delete using (public.is_admin());

grant select, delete on public.newsletter_signups to authenticated;

-- Inscrição pública (site): só por esta função. O mesmo email outra vez
-- não dá erro nem cria linha nova.
create or replace function public.newsletter_signup(
  p_email text,
  p_kind text default 'organizador',
  p_source text default 'site',
  p_name text default null,
  p_interests text[] default '{}',
  p_business text default null,
  p_country text default null,
  p_city text default null,
  p_age text default null
)
returns boolean
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_email text := lower(trim(coalesce(p_email, '')));
  v_interests text[];
begin
  if v_email !~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' or char_length(v_email) > 254 then
    raise exception 'invalid_email' using errcode = '22023';
  end if;
  -- Travão simples contra abuso: no máximo 200 por hora.
  if (select count(*) from public.newsletter_signups where created_at > now() - interval '1 hour') >= 200 then
    raise exception 'rate_limited' using errcode = 'P0001';
  end if;
  select coalesce(array_agg(left(trim(x), 40)), '{}') into v_interests
  from (select unnest(coalesce(p_interests, '{}')) x limit 15) t
  where trim(x) <> '';

  insert into public.newsletter_signups (email, kind, source, name, interests, business_name, country, city, age_range)
  values (
    v_email,
    case when p_kind = 'parceiro' then 'parceiro' else 'organizador' end,
    left(coalesce(p_source, 'site'), 40),
    nullif(left(trim(coalesce(p_name, '')), 80), ''),
    v_interests,
    nullif(left(trim(coalesce(p_business, '')), 80), ''),
    nullif(left(trim(coalesce(p_country, '')), 60), ''),
    nullif(left(trim(coalesce(p_city, '')), 80), ''),
    nullif(left(trim(coalesce(p_age, '')), 10), '')
  )
  -- O mesmo email outra vez: atualiza as respostas.
  on conflict (lower(email)) do update set
    kind = excluded.kind, name = excluded.name, interests = excluded.interests,
    business_name = excluded.business_name, country = excluded.country,
    city = excluded.city, age_range = excluded.age_range, updated_at = now();
  return true;
end;
$$;

grant execute on function public.newsletter_signup(text, text, text, text, text[], text, text, text, text) to anon, authenticated;

insert into public.applied_migrations (id) values ('195') on conflict do nothing;

commit;
