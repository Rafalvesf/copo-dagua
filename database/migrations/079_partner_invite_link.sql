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
