-- ============================================================
-- 097 — Acompanhante "já tem a app?" + telemóvel obrigatório na conta
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): em vez de pedir email/telemóvel
-- de cada acompanhante, pergunta-se apenas se a pessoa já tem a app.
-- Quem cria conta dá sempre email e telemóvel, por isso o cruzamento
-- faz-se pela conta dessa pessoa:
--   * `guest_companions.will_install_app` passa a querer dizer "já tem
--     a app" — o acompanhante é ligado, pelo nome, ao convidado com
--     conta no mesmo evento (sem entradas duplicadas);
--   * o telemóvel indicado no registo fica no perfil (`profiles.phone`),
--     que o `join_wedding_by_code` já usa para cruzar dados.

comment on column public.guest_companions.will_install_app is
  'Já tem a app (conta própria) — liga-se pelo nome ao convidado com conta no mesmo evento.';

create or replace function public.guest_companions_cross_reference()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_guest record;
  v_hit boolean := false;
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
      v_hit := true;
    end if;
  end if;

  -- "Já tem a app": procura pelo nome entre os convidados com conta.
  if new.linked_guest_id is null and new.will_install_app and coalesce(trim(new.name), '') <> '' then
    select g.* into v_guest
    from public.guests g
    where g.wedding_id = new.wedding_id
      and g.id <> new.guest_id
      and g.linked_profile_id is not null
      and lower(regexp_replace(trim(g.full_name), '\s+', ' ', 'g')) = lower(regexp_replace(trim(new.name), '\s+', ' ', 'g'))
    order by g.created_at
    limit 1;
    if not found then
      -- Só o primeiro nome indicado ("Ana") também serve, se for único.
      select g.* into v_guest
      from public.guests g
      where g.wedding_id = new.wedding_id
        and g.id <> new.guest_id
        and g.linked_profile_id is not null
        and lower(split_part(trim(g.full_name), ' ', 1)) = lower(split_part(trim(new.name), ' ', 1))
        and (
          select count(*) from public.guests g2
          where g2.wedding_id = new.wedding_id and g2.id <> new.guest_id and g2.linked_profile_id is not null
            and lower(split_part(trim(g2.full_name), ' ', 1)) = lower(split_part(trim(new.name), ' ', 1))
        ) = 1
      limit 1;
    end if;
    if found then
      new.linked_guest_id := v_guest.id;
      v_hit := true;
    end if;
  end if;

  if v_hit then
    new.menu := coalesce(new.menu, v_guest.menu_selection);
    if new.age_group = 'adult' and v_guest.age_group is not null then
      new.age_group := v_guest.age_group;
    end if;
  end if;
  return new;
end;
$$;

create or replace trigger guest_companions_cross_reference
  before insert or update of email, phone, name, will_install_app on public.guest_companions
  for each row execute function public.guest_companions_cross_reference();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_requested_role text;
  v_role public.user_role;
  v_full_name text;
  v_phone text;
begin
  v_requested_role := new.raw_user_meta_data->>'role';
  v_full_name := coalesce(new.raw_user_meta_data->>'full_name', '');
  v_phone := nullif(trim(coalesce(new.raw_user_meta_data->>'phone', '')), '');

  if v_requested_role = 'admin' and new.invited_at is null then
    v_role := 'couple';
  else
    v_role := coalesce(v_requested_role::public.user_role, 'couple');
  end if;

  insert into public.profiles (id, role, full_name, phone)
  values (new.id, v_role, v_full_name, v_phone);

  if v_role = 'partner' then
    insert into public.partner_profiles (id, business_name)
    values (new.id, v_full_name);

    insert into public.partner_verification (partner_id, tax_id, billing_address)
    values (new.id, '', '');
  end if;

  return new;
end;
$$;
