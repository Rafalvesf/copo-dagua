-- ============================================================
-- 093 — Acompanhantes com contacto e cruzamento de dados
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): quando alguém diz que vai e leva
-- acompanhantes, cada adulto tem de ter email e telemóvel (crianças e
-- seniores opcional, mas com "vai com quem?"). Estes dados servem para
-- cruzar: se o acompanhante criar conta, a app liga-o logo à entrada
-- já feita (só tem de confirmar) e não há duplicados; e, ao contrário,
-- se um acompanhante indicado já estiver na lista, liga-se a essa
-- pessoa em vez de a repetir.

alter table public.guest_companions
  add column if not exists email text,
  add column if not exists accompanied_by text,
  add column if not exists linked_guest_id uuid references public.guests(id) on delete set null;

create index if not exists guest_companions_email_idx on public.guest_companions (wedding_id, lower(email));

-- Telemóvel só com dígitos, sem o indicativo (últimos 9).
create or replace function public.phone_key(p text)
returns text
language sql
immutable
as $$
  select nullif(right(regexp_replace(coalesce(p, ''), '[^0-9]', '', 'g'), 9), '');
$$;

-- Ao indicar um acompanhante: se já estiver na lista do evento (mesmo
-- email ou telemóvel), liga-o a essa entrada e completa o que faltar.
create or replace function public.guest_companions_cross_reference()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_guest record;
begin
  if new.linked_guest_id is null and (coalesce(new.email, '') <> '' or public.phone_key(new.phone) is not null) then
    select g.* into v_guest
    from public.guests g
    where g.wedding_id = new.wedding_id
      and g.id <> new.guest_id
      and (
        (coalesce(new.email, '') <> '' and lower(g.email) = lower(new.email))
        or (public.phone_key(new.phone) is not null and public.phone_key(g.phone) = public.phone_key(new.phone))
      )
    limit 1;
    if found then
      new.linked_guest_id := v_guest.id;
      new.menu := coalesce(new.menu, v_guest.menu_selection);
      if new.age_group = 'adult' and v_guest.age_group is not null then
        new.age_group := v_guest.age_group;
      end if;
    end if;
  end if;
  return new;
end;
$$;

create trigger guest_companions_cross_reference
  before insert or update of email, phone on public.guest_companions
  for each row execute function public.guest_companions_cross_reference();

-- Entrar com o código: se a conta corresponder a um acompanhante já
-- indicado por alguém (email ou telemóvel), cria a entrada já com os
-- dados dele (menu, alergias, faixa etária, resposta "vai") e liga-os.
-- O onboarding fica por confirmar, já preenchido.
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
  v_comp record;
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

    if v_matched_guest_id is null and public.phone_key(v_phone) is not null then
      update public.guests
      set linked_profile_id = auth.uid()
      where wedding_id = v_wedding_id
        and linked_profile_id is null
        and public.phone_key(phone) = public.phone_key(v_phone)
      returning id into v_matched_guest_id;
    end if;
  end if;

  -- Acompanhante já indicado por outro convidado (vale em qualquer modo:
  -- foi convidado por quem o indicou).
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

  if v_matched_guest_id is null and v_join_mode = 'code_open' then
    insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id)
    values (v_wedding_id, coalesce(v_full_name, 'Convidado'), v_email, v_phone, auth.uid())
    on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing
    returning id into v_matched_guest_id;
  end if;

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

-- Companheiros já existentes: tenta ligar agora.
update public.guest_companions c
set linked_guest_id = g.id
from public.guests g
where c.linked_guest_id is null
  and g.wedding_id = c.wedding_id
  and g.id <> c.guest_id
  and public.phone_key(c.phone) is not null
  and public.phone_key(g.phone) = public.phone_key(c.phone);
