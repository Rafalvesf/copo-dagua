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
