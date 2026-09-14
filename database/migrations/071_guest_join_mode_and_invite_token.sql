-- ============================================================
-- Guest join mode + invite token — associação de conta mais segura
-- ============================================================
--
-- Pedido explícito do utilizador (2026-09-14, spec detalhada em chat):
-- `join_wedding_by_code()` (`070_guest_auto_provision.sql`) hoje cria
-- sempre uma linha nova em `guests` quando não encontra correspondência
-- por email — qualquer pessoa com o `guest_code` partilhado passa a
-- constar da lista, sem validação por telefone e sem nenhum conceito de
-- convite individual. Esta migração:
--
--   1. Dá a cada casamento um `guest_join_mode` configurável em vez de
--      uma única regra fixa para todos.
--   2. Reaproveita `guests.rsvp_token` (já único por convidado, já usado
--      na página pública de RSVP) como o "link/token individual" pedido —
--      em vez de inventar um terceiro conceito de token, um token só
--      pode ligar a uma linha de `guests` que já existe (nunca cria).
--   3. Reforça a prioridade de correspondência: email exato > telefone
--      exato > nunca só por nome, tal como pedido.
--   4. Prepara os campos que o futuro wizard "Vais ao casamento?" vai
--      precisar (`menu_selection`, `onboarding_completed_at`) — o
--      "lado" e a "relação" já existem (`side`, `group_label`).

-- ------------------------------------------------------------
-- 1. guest_join_mode
-- ------------------------------------------------------------
-- Default 'code_with_match' para TODOS os casamentos (incluindo os já
-- criados) — mais seguro do que o comportamento atual (equivalente a
-- 'code_open'), aceitável porque a app ainda não tem utilizadores reais
-- em produção. O casal pode relaxar para 'code_open' mais tarde (sem
-- ecrã de definições dedicado ainda — fora desta ronda).
create type guest_join_mode as enum ('invite_only', 'code_with_match', 'code_open');

alter table public.weddings
  add column guest_join_mode guest_join_mode not null default 'code_with_match';

-- ------------------------------------------------------------
-- 2. Campos novos em guests para o onboarding futuro
-- ------------------------------------------------------------
alter table public.guests
  add column menu_selection text,
  add column onboarding_completed_at timestamptz;

-- ------------------------------------------------------------
-- 3. join_wedding_by_code() v4
-- ------------------------------------------------------------
-- Substitui a v3 (070): passa a corresponder por telefone além de
-- email, nunca por nome, e o comportamento de auto-criar uma linha nova
-- passa a depender de `guest_join_mode` em vez de ser sempre ligado.
-- Devolve (wedding_id, guest_matched) em vez de um uuid simples, para o
-- cliente saber se deve mostrar o onboarding ou o estado "ainda não
-- encontrámos a tua entrada".
drop function if exists public.join_wedding_by_code(text);

create or replace function public.join_wedding_by_code(p_code text)
returns table (wedding_id uuid, guest_matched boolean)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
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
      on conflict (wedding_id, linked_profile_id) do nothing
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

-- ------------------------------------------------------------
-- 4. join_wedding_by_invite_token() — link individual
-- ------------------------------------------------------------
-- Um token (`guests.rsvp_token`) só existe para uma linha que o casal já
-- criou, por isso este caminho nunca cria uma linha nova — só liga. Se o
-- token já pertence a outra conta, falha com um erro claro em vez de
-- roubar silenciosamente a linha.
create or replace function public.join_wedding_by_invite_token(p_token uuid)
returns table (wedding_id uuid, guest_matched boolean)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
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
