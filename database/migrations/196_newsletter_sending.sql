-- 196 · Envio de emails aos pré-registos a partir do admin (Resend)
-- Pedido 2026-11-16: «implementar o resend dentro do admin» com um criador
-- de email personalizado.
--
-- • newsletter_signups: quando foi o último envio, quantos, e o
--   «Deixar de receber» (token por pessoa, obrigatório pelo RGPD).
-- • newsletter_templates: o assunto/mensagem guardados de cada tipo.
-- • newsletter_sends: histórico de cada envio (quem, quando, quantos).
-- • newsletter_unsubscribe(token): chamado pela página do site, sem sessão.
-- O envio em si é a Edge Function `send-newsletter` (chave RESEND_API_KEY
-- nos segredos do Supabase).

begin;

alter table public.newsletter_signups
  add column if not exists unsub_token uuid not null default gen_random_uuid(),
  add column if not exists unsubscribed_at timestamptz,
  add column if not exists last_sent_at timestamptz,
  add column if not exists sent_count int not null default 0;

create unique index if not exists newsletter_signups_unsub_token_idx
  on public.newsletter_signups (unsub_token);

create table if not exists public.newsletter_templates (
  kind text primary key check (kind in ('organizador', 'parceiro')),
  subject text not null default '',
  body text not null default '',
  button_label text,
  button_url text,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users (id) on delete set null
);

alter table public.newsletter_templates enable row level security;
drop policy if exists "Admins manage newsletter templates" on public.newsletter_templates;
create policy "Admins manage newsletter templates" on public.newsletter_templates
  for all using (public.is_admin()) with check (public.is_admin());

create table if not exists public.newsletter_sends (
  id uuid primary key default gen_random_uuid(),
  kind text not null,
  subject text not null,
  test boolean not null default false,
  recipients int not null default 0,
  sent int not null default 0,
  failed int not null default 0,
  error text,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.newsletter_sends enable row level security;
drop policy if exists "Admins read newsletter sends" on public.newsletter_sends;
create policy "Admins read newsletter sends" on public.newsletter_sends
  for select using (public.is_admin());

-- «Deixar de receber» no fim de cada email (página do site, sem sessão).
create or replace function public.newsletter_unsubscribe(p_token uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_token is null then
    return false;
  end if;
  update public.newsletter_signups
     set unsubscribed_at = now()
   where unsub_token = p_token and unsubscribed_at is null;
  return exists (select 1 from public.newsletter_signups where unsub_token = p_token);
end;
$$;

revoke all on function public.newsletter_unsubscribe(uuid) from public;
grant execute on function public.newsletter_unsubscribe(uuid) to anon, authenticated;

-- Quem volta a fazer o pré-registo (newsletter_signup muda updated_at)
-- volta a receber.
create or replace function public.newsletter_resubscribe()
returns trigger
language plpgsql
as $$
begin
  if old.unsubscribed_at is not null
     and new.unsubscribed_at is not distinct from old.unsubscribed_at
     and new.updated_at is distinct from old.updated_at then
    new.unsubscribed_at := null;
  end if;
  return new;
end;
$$;

drop trigger if exists newsletter_resubscribe on public.newsletter_signups;
create trigger newsletter_resubscribe before update on public.newsletter_signups
  for each row execute function public.newsletter_resubscribe();

insert into public.applied_migrations (id) values ('196') on conflict do nothing;

commit;
