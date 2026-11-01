-- ============================================================
-- 143 — Entrar com o código/link: entra logo, o organizador confirma
-- ============================================================
--
-- Pedido do utilizador (2026-11): "quem tem o link de convite entra
-- logo, mas o organizador tem que confirmar sempre caso seja privado".
--
-- • Quem usa o código/link entra no evento na hora (vê o programa, a
--   galeria e as novidades).
-- • Se já estava na lista (mesmo email/telemóvel, ou acompanhante de
--   alguém), fica ligado a essa linha: o organizador já o tinha posto lá.
-- • Evento público: fica na lista de convidados logo.
-- • Evento privado: fica um PEDIDO para o organizador confirmar. Só
--   depois de confirmado aparece na lista (resposta, menu e mesa).
--   Recusar tira-o do evento.
--
-- Substitui o comportamento por `guest_join_mode` no código.

create table if not exists public.guest_join_requests (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  created_at timestamptz not null default now(),
  unique (wedding_id, profile_id)
);

create index if not exists guest_join_requests_wedding_idx on public.guest_join_requests (wedding_id);

alter table public.guest_join_requests enable row level security;

drop policy if exists "Organizers and requester read join requests" on public.guest_join_requests;
create policy "Organizers and requester read join requests"
  on public.guest_join_requests for select
  using (public.is_wedding_member(wedding_id) or profile_id = (select auth.uid()));
-- Sem insert/update/delete diretos: só pelas funções abaixo.

-- ---------- entrar com o código ----------
create or replace function public.join_wedding_by_code(p_code text)
returns table (wedding_id uuid, guest_matched boolean)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
#variable_conflict use_column
declare
  v_wedding_id uuid;
  v_public boolean;
  v_owner uuid;
  v_email text;
  v_phone text;
  v_full_name text;
  v_matched_guest_id uuid;
  v_comp record;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select id, coalesce(is_public, false), owner_id into v_wedding_id, v_public, v_owner
  from public.weddings where guest_code = upper(trim(p_code));
  if v_wedding_id is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;

  -- Entra logo.
  insert into public.wedding_guest_members (wedding_id, guest_id)
  values (v_wedding_id, auth.uid())
  on conflict (wedding_id, guest_id) do nothing;

  -- Quem organiza o evento não precisa de linha na lista.
  if v_owner = auth.uid() or public.is_wedding_member(v_wedding_id) then
    return query select v_wedding_id, false;
    return;
  end if;

  select u.email, p.full_name, p.phone
  into v_email, v_full_name, v_phone
  from auth.users u
  join public.profiles p on p.id = u.id
  where u.id = auth.uid();

  select id into v_matched_guest_id
  from public.guests
  where wedding_id = v_wedding_id and linked_profile_id = auth.uid();

  -- Já estava na lista (o organizador pô-lo lá): liga.
  if v_matched_guest_id is null and v_email is not null then
    update public.guests
    set linked_profile_id = auth.uid()
    where wedding_id = v_wedding_id
      and linked_profile_id is null
      and lower(email) = lower(v_email)
    returning id into v_matched_guest_id;
  end if;

  if v_matched_guest_id is null and public.phone_key(v_phone) is not null then
    update public.guests
    set linked_profile_id = auth.uid()
    where wedding_id = v_wedding_id
      and linked_profile_id is null
      and public.phone_key(phone) = public.phone_key(v_phone)
    returning id into v_matched_guest_id;
  end if;

  -- Acompanhante que um convidado indicou.
  if v_matched_guest_id is null then
    select c.*, g.side as host_side, g.group_label as host_group into v_comp
    from public.guest_companions c
    join public.guests g on g.id = c.guest_id
    where c.wedding_id = v_wedding_id
      and c.linked_guest_id is null
      and (
        (v_email is not null and lower(c.email) = lower(v_email))
        or (public.phone_key(v_phone) is not null and public.phone_key(c.phone) = public.phone_key(v_phone))
      )
    order by c.created_at
    limit 1;

    if found then
      insert into public.guests (
        wedding_id, full_name, email, phone, linked_profile_id,
        side, group_label, menu_selection, dietary_restrictions, age_group, rsvp_status
      )
      values (
        v_wedding_id, coalesce(nullif(v_comp.name, ''), v_full_name, 'Convidado'), v_email, coalesce(v_phone, v_comp.phone), auth.uid(),
        v_comp.host_side, v_comp.host_group, v_comp.menu,
        nullif(array_to_string(v_comp.allergies, ', '), ''), v_comp.age_group, 'confirmed'
      )
      on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing
      returning id into v_matched_guest_id;

      if v_matched_guest_id is not null then
        update public.guest_companions set linked_guest_id = v_matched_guest_id where id = v_comp.id;
      end if;
    end if;
  end if;

  if v_matched_guest_id is null then
    if v_public then
      -- Público: fica na lista logo.
      insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id)
      values (v_wedding_id, coalesce(v_full_name, 'Convidado'), v_email, v_phone, auth.uid())
      on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing
      returning id into v_matched_guest_id;
    else
      -- Privado: o organizador confirma.
      insert into public.guest_join_requests (wedding_id, profile_id, full_name, email, phone)
      values (v_wedding_id, auth.uid(), v_full_name, v_email, v_phone)
      on conflict (wedding_id, profile_id) do nothing;
    end if;
  end if;

  if v_matched_guest_id is not null then
    update public.guests
    set email = coalesce(email, v_email),
        phone = coalesce(phone, v_phone),
        updated_at = now()
    where id = v_matched_guest_id;
    delete from public.guest_join_requests r
    where r.wedding_id = v_wedding_id and r.profile_id = auth.uid();
  end if;

  return query select v_wedding_id, v_matched_guest_id is not null;
end;
$$;

revoke execute on function public.join_wedding_by_code(text) from public, anon;
grant execute on function public.join_wedding_by_code(text) to authenticated;

-- ---------- o organizador confirma ou recusa ----------
create or replace function public.review_join_request(p_request uuid, p_approve boolean)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_req record;
  v_guest uuid;
begin
  select * into v_req from public.guest_join_requests where id = p_request;
  if v_req is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if not public.is_wedding_member(v_req.wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  if p_approve then
    insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id)
    values (v_req.wedding_id, coalesce(v_req.full_name, 'Convidado'), v_req.email, v_req.phone, v_req.profile_id)
    on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing
    returning id into v_guest;
  else
    delete from public.wedding_guest_members m
    where m.wedding_id = v_req.wedding_id and m.guest_id = v_req.profile_id;
  end if;

  delete from public.guest_join_requests where id = p_request;
  return v_guest;
end;
$$;

revoke execute on function public.review_join_request(uuid, boolean) from public, anon;
grant execute on function public.review_join_request(uuid, boolean) to authenticated;

-- ---------- quem já entrou sem estar na lista passa a pedido ----------
insert into public.guest_join_requests (wedding_id, profile_id, full_name, email, phone)
select m.wedding_id, m.guest_id, p.full_name, u.email, p.phone
from public.wedding_guest_members m
join public.weddings w on w.id = m.wedding_id
join public.profiles p on p.id = m.guest_id
join auth.users u on u.id = m.guest_id
where w.owner_id <> m.guest_id
  and not exists (select 1 from public.wedding_collaborators c
                  where c.wedding_id = m.wedding_id and c.user_id = m.guest_id and c.status = 'active')
  and not exists (select 1 from public.guests g
                  where g.wedding_id = m.wedding_id and g.linked_profile_id = m.guest_id)
on conflict (wedding_id, profile_id) do nothing;
