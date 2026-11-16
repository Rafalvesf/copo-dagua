-- ============================================================
-- 195 · Pré-registo no site antes das lojas
-- ============================================================
--
-- Pedido do Rafael (2026-11-16): no site de apresentação, os parceiros
-- (só parceiros) deixam o email para o pré-registo. A
-- lista vê-se no admin («Pré-registos»). Ainda não se enviam emails.
-- ============================================================

begin;

create table if not exists public.newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null check (char_length(email) between 5 and 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  kind text not null default 'organizador' check (kind in ('organizador', 'parceiro')),
  source text,
  created_at timestamptz not null default now()
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
create or replace function public.newsletter_signup(p_email text, p_kind text default 'organizador', p_source text default 'site')
returns boolean
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_email text := lower(trim(coalesce(p_email, '')));
begin
  if v_email !~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' or char_length(v_email) > 254 then
    raise exception 'invalid_email' using errcode = '22023';
  end if;
  -- Travão simples contra abuso: no máximo 200 inscrições por hora.
  if (select count(*) from public.newsletter_signups where created_at > now() - interval '1 hour') >= 200 then
    raise exception 'rate_limited' using errcode = 'P0001';
  end if;
  insert into public.newsletter_signups (email, kind, source)
  values (v_email, case when p_kind = 'parceiro' then 'parceiro' else 'organizador' end, left(coalesce(p_source, 'site'), 40))
  on conflict (lower(email)) do nothing;
  return true;
end;
$$;

grant execute on function public.newsletter_signup(text, text, text) to anon, authenticated;

insert into public.applied_migrations (id) values ('195') on conflict do nothing;

commit;
