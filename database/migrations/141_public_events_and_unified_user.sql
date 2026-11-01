-- ============================================================
-- 141 — Conta única "Utilizador" + eventos públicos
-- ============================================================
--
-- Pedido do utilizador (2026-11): juntar convidados e organizadores
-- numa só conta ("Utilizador"). A mesma conta junta-se a eventos de
-- outros e pode criar o seu. Novo separador "Eventos" com os eventos
-- da conta e os eventos públicos ("Aberto a todos").
--
-- 1. weddings.is_public — o organizador liga "Evento público".
-- 2. list_public_events() — só campos públicos, nunca contactos.
-- 3. join_public_event(p_wedding) — junta-se e fica na lista de convidados.
-- 4. become_organizer() — uma conta de utilizador passa a organizar
--    (abre o assistente de criação do evento).

alter table public.weddings
  add column if not exists is_public boolean not null default false;

create index if not exists weddings_public_idx
  on public.weddings (wedding_date) where is_public;

-- ---------- eventos públicos ----------
create or replace function public.list_public_events()
returns table (
  wedding_id uuid,
  event_type text,
  partner_name_1 text,
  partner_name_2 text,
  wedding_date date,
  ceremony_time text,
  venue text,
  location text,
  cover_photo_url text,
  welcome_message text,
  updated_at timestamptz,
  joined boolean
)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select w.id, w.event_type, w.partner_name_1, w.partner_name_2,
         w.wedding_date, w.ceremony_time, w.venue, w.location,
         w.cover_photo_url, w.welcome_message, w.updated_at,
         exists (select 1 from public.wedding_guest_members m
                 where m.wedding_id = w.id and m.guest_id = auth.uid()) as joined
  from public.weddings w
  where w.is_public
    and coalesce(w.status, 'active') not in ('deleted', 'cancelled')
    and w.pending_deletion_at is null
    and (w.wedding_date is null or w.wedding_date >= current_date - 1)
    and w.owner_id is distinct from auth.uid()
    and auth.uid() is not null
  order by w.wedding_date nulls last
  limit 200;
$$;

revoke execute on function public.list_public_events() from public, anon;
grant execute on function public.list_public_events() to authenticated;

-- ---------- entrar num evento público ----------
create or replace function public.join_public_event(p_wedding uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_email text;
  v_phone text;
  v_full_name text;
  v_guest uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not exists (select 1 from public.weddings
                 where id = p_wedding and is_public and pending_deletion_at is null) then
    raise exception 'not_public' using errcode = 'P0002';
  end if;

  insert into public.wedding_guest_members (wedding_id, guest_id)
  values (p_wedding, auth.uid())
  on conflict (wedding_id, guest_id) do nothing;

  select id into v_guest from public.guests
  where wedding_id = p_wedding and linked_profile_id = auth.uid();

  if v_guest is null then
    select u.email, p.full_name, p.phone
    into v_email, v_full_name, v_phone
    from auth.users u join public.profiles p on p.id = u.id
    where u.id = auth.uid();

    -- Já estava na lista com o mesmo email: liga em vez de duplicar.
    if v_email is not null then
      update public.guests set linked_profile_id = auth.uid(), updated_at = now()
      where wedding_id = p_wedding and linked_profile_id is null
        and lower(email) = lower(v_email)
      returning id into v_guest;
    end if;

    if v_guest is null then
      insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id)
      values (p_wedding, coalesce(v_full_name, 'Convidado'), v_email, v_phone, auth.uid())
      on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing
      returning id into v_guest;
    end if;
  end if;

  return p_wedding;
end;
$$;

revoke execute on function public.join_public_event(uuid) from public, anon;
grant execute on function public.join_public_event(uuid) to authenticated;

-- ---------- utilizador passa a organizar ----------
create or replace function public.become_organizer()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_role text;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select role::text into v_role from public.profiles where id = auth.uid();
  if v_role = 'couple' then
    return;
  end if;
  if v_role is distinct from 'guest' then
    -- Parceiros e admins têm contas próprias.
    raise exception 'invalid_role' using errcode = '42501';
  end if;
  update public.profiles
  set role = 'couple'::public.user_role, onboarding_completed = false
  where id = auth.uid();
end;
$$;

revoke execute on function public.become_organizer() from public, anon;
grant execute on function public.become_organizer() to authenticated;

-- ---------- desistir de criar o evento ----------
-- Sair do assistente sem criar nada volta a ser só "Utilizador".
create or replace function public.stop_organizing()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if exists (select 1 from public.weddings where owner_id = auth.uid()) then
    return;
  end if;
  update public.profiles set role = 'guest'::public.user_role
  where id = auth.uid() and role = 'couple';
end;
$$;

revoke execute on function public.stop_organizing() from public, anon;
grant execute on function public.stop_organizing() to authenticated;
