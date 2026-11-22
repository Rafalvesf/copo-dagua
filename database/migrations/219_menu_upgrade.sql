-- ============================================================
-- 219 · Trocar o menu que outro paga (precisa da 218)
-- ============================================================
--
-- Pedido do Rafael (2026-11-22): quem tem o menu pago por outros pode
-- trocá-lo por um do mesmo valor ou mais caro; a diferença paga-a quem
-- troca (à parte, como os extras). Se quem paga mudar o menu, a troca sai.
-- ============================================================

begin;

alter table public.booking_guest_choices
  add column if not exists base_package_id uuid references public.partner_service_packages(id) on delete set null,
  add column if not exists upgrade_amount numeric(12,2) not null default 0,
  add column if not exists upgrade_payer uuid references public.profiles(id) on delete set null,
  add column if not exists upgrade_payment_id uuid references public.payments(id) on delete set null;

create or replace function public.menu_people(p_booking_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
begin
  select * into v_b from public.bookings where id = p_booking_id;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not public.is_event_member(v_b.wedding_id) then raise exception 'forbidden' using errcode = '42501'; end if;

  return coalesce((
    select jsonb_agg(x.j order by x.me desc, x.mine desc, x.name)
    from (
      select
        coalesce(p.profile_id = auth.uid(), false) as me,
        (coalesce(p.profile_id = auth.uid(), false) or (p.person_key like 'c:%' and coalesce(p.owner_profile_id = auth.uid(), false))) as mine,
        public.can_choose_menu(v_b, p.person_key, p.owner_profile_id) as menu,
        p.name,
        p.person_key,
        jsonb_build_object(
          'key', p.person_key,
          'name', p.name,
          'age_group', p.age_group,
          'is_me', coalesce(p.profile_id = auth.uid(), false),
          'mine', coalesce(p.profile_id = auth.uid(), false) or (p.person_key like 'c:%' and coalesce(p.owner_profile_id = auth.uid(), false)),
          'menu', public.can_choose_menu(v_b, p.person_key, p.owner_profile_id),
          'owner_name', p.owner_name,
          'pays', case when public.menu_payer(v_b, p.person_key, p.owner_profile_id) = auth.uid() then 'me'
                       when public.menu_payer(v_b, p.person_key, p.owner_profile_id) = v_b.couple_id then 'organizers'
                       else 'other' end,
          'choice', (select jsonb_build_object(
                              'package_id', c.package_id,
                              'base_package_id', coalesce(c.base_package_id, c.package_id),
                              'base_price', c.amount,
                              'upgrade', c.upgrade_amount,
                              'package_name', c.package_snapshot->>'name',
                              'allergies', c.allergies,
                              'amount', c.amount,
                              'extras', case when c.extras_payer = auth.uid() or c.chosen_by = auth.uid() then c.extras_snapshot else '[]'::jsonb end)
                     from public.booking_guest_choices c
                     where c.booking_id = v_b.id and c.person_key = p.person_key)
        ) as j
      from public.event_menu_people(v_b.wedding_id) p
    ) x
    where x.mine or x.menu
  ), '[]'::jsonb);
end;
$$;

grant execute on function public.menu_people(uuid) to authenticated;

create or replace function public.refresh_menu_payments(p_booking_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
  v_sum numeric(12,2);
  v_due timestamptz;
  r record;
  v_type text;
  v_payment uuid;
begin
  select * into v_b from public.bookings where id = p_booking_id for update;
  select coalesce(sum(amount + extras_amount + upgrade_amount), 0) into v_sum from public.booking_guest_choices where booking_id = v_b.id;
  update public.bookings set total_amount = v_sum, updated_at = now() where id = v_b.id;
  v_due := (coalesce(v_b.choice_deadline, v_b.event_date) + 1)::timestamptz;

  for r in
    select payer, sum(total) as total from (
      select c.payer_id as payer, c.amount as total
      from public.booking_guest_choices c
      where c.booking_id = v_b.id and c.payer_id is not null
        and not exists (select 1 from public.payments p where p.id = c.payment_id and p.status = 'paid')
      union all
      select c.upgrade_payer, c.upgrade_amount
      from public.booking_guest_choices c
      where c.booking_id = v_b.id and c.upgrade_payer is not null and c.upgrade_amount > 0
        and not exists (select 1 from public.payments p where p.id = c.upgrade_payment_id and p.status = 'paid')
      union all
      select c.extras_payer, c.extras_amount
      from public.booking_guest_choices c
      where c.booking_id = v_b.id and c.extras_payer is not null and c.extras_amount > 0
        and not exists (select 1 from public.payments p where p.id = c.extras_payment_id and p.status = 'paid')
    ) t
    group by payer
  loop
    v_type := case when v_b.payer_mode = 'organizer' and r.payer = v_b.couple_id then 'final_payment' else 'guest_share' end;
    select id into v_payment from public.payments
    where booking_id = v_b.id and payer_id = r.payer and type::text = v_type and status = 'pending'
    order by created_at desc limit 1;
    if v_payment is null then
      if r.total > 0 then
        insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
        values (v_b.id, r.payer, v_b.partner_id, v_type::public.payment_type, r.total, v_due, 'pending')
        returning id into v_payment;
      end if;
    else
      update public.payments set amount = r.total, due_at = v_due, updated_at = now() where id = v_payment;
    end if;
    if v_payment is not null then
      update public.booking_guest_choices c set payment_id = v_payment
      where c.booking_id = v_b.id and c.payer_id = r.payer
        and not exists (select 1 from public.payments p where p.id = c.payment_id and p.status = 'paid');
      update public.booking_guest_choices c set upgrade_payment_id = v_payment
      where c.booking_id = v_b.id and c.upgrade_payer = r.payer and c.upgrade_amount > 0
        and not exists (select 1 from public.payments p where p.id = c.upgrade_payment_id and p.status = 'paid');
      update public.booking_guest_choices c set extras_payment_id = v_payment
      where c.booking_id = v_b.id and c.extras_payer = r.payer
        and not exists (select 1 from public.payments p where p.id = c.extras_payment_id and p.status = 'paid');
    end if;
    v_payment := null;
  end loop;
end;
$$;

revoke execute on function public.refresh_menu_payments(uuid) from public, anon, authenticated;

create or replace function public.choose_menus(p_booking_id uuid, p_people jsonb, p_extra_ids uuid[])
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
  v_org boolean;
  v_item jsonb;
  v_key text;
  v_person record;
  v_mine boolean;
  v_menu boolean;
  v_pkg public.partner_service_packages%rowtype;
  v_has_pkg boolean;
  v_has_allergies boolean;
  v_extras jsonb := '[]'::jsonb;
  v_extras_total numeric(12,2) := 0;
  v_self text;
  v_self_person record;
  v_extras_payer uuid;
  v_payment public.payments%rowtype;
  v_cur public.booking_guest_choices%rowtype;
  v_upgrade boolean;
begin
  select * into v_b from public.bookings where id = p_booking_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not public.is_event_member(v_b.wedding_id) then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_b.choice_mode <> 'each' or v_b.status <> 'confirmed' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if v_b.choice_deadline is not null and current_date > v_b.choice_deadline then
    raise exception 'closed' using errcode = 'P0001';
  end if;
  if v_b.payer_mode = 'organizer' and exists (
    select 1 from public.payments where booking_id = v_b.id and type = 'final_payment' and status = 'paid'
  ) then
    raise exception 'closed' using errcode = 'P0001';
  end if;
  if jsonb_typeof(coalesce(p_people, '[]'::jsonb)) <> 'array' then
    raise exception 'validation_error' using errcode = '22023';
  end if;
  v_org := public.is_event_organizer(v_b.wedding_id);

  for v_item in select * from jsonb_array_elements(coalesce(p_people, '[]'::jsonb)) loop
    v_key := v_item->>'key';
    select * into v_person from public.event_menu_people(v_b.wedding_id) p where p.person_key = v_key;
    if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
    v_mine := coalesce(v_person.profile_id = auth.uid(), false)
              or (v_key like 'c:%' and coalesce(v_person.owner_profile_id = auth.uid(), false));
    v_menu := public.can_choose_menu(v_b, v_key, v_person.owner_profile_id);
    v_has_pkg := nullif(v_item->>'package_id', '') is not null;
    v_has_allergies := v_item ? 'allergies' and jsonb_typeof(v_item->'allergies') = 'string';
    -- Trocar o menu que outro paga (pedido 2026-11-22): só por um do mesmo
    -- valor ou mais caro, e a diferença paga-a quem troca.
    v_upgrade := v_has_pkg and not v_menu;
    if v_upgrade and not v_mine then raise exception 'forbidden' using errcode = '42501'; end if;
    if v_has_allergies and not (v_mine or v_menu) then raise exception 'forbidden' using errcode = '42501'; end if;
    if not v_has_pkg and not v_has_allergies then continue; end if;

    if v_has_pkg then
      if not v_upgrade and exists (
        select 1 from public.booking_guest_choices c join public.payments p on p.id = c.payment_id
        where c.booking_id = v_b.id and c.person_key = v_key and p.status = 'paid'
      ) then
        raise exception 'already_paid' using errcode = 'P0001';
      end if;
      select * into v_pkg from public.partner_service_packages
      where id = (v_item->>'package_id')::uuid and partner_id = v_b.partner_id;
      if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
    end if;

    if v_upgrade then
      select * into v_cur from public.booking_guest_choices where booking_id = v_b.id and person_key = v_key for update;
      if not found or v_cur.package_id is null then
        raise exception 'menu_not_chosen' using errcode = 'P0001';
      end if;
      if exists (select 1 from public.payments p where p.id = v_cur.upgrade_payment_id and p.status = 'paid') then
        raise exception 'already_paid' using errcode = 'P0001';
      end if;
      if v_pkg.price < v_cur.amount then
        raise exception 'cheaper_menu' using errcode = '22023';
      end if;
      update public.booking_guest_choices
        set base_package_id = coalesce(base_package_id, package_id),
            package_id = v_pkg.id,
            package_snapshot = jsonb_build_object('id', v_pkg.id, 'name', v_pkg.name, 'description', v_pkg.description,
                                                  'price', v_pkg.price, 'price_unit', v_pkg.price_unit,
                                                  'includes', to_jsonb(v_pkg.includes), 'excludes', v_pkg.excludes),
            upgrade_amount = v_pkg.price - amount,
            upgrade_payer = case when v_pkg.price > amount then auth.uid() end,
            allergies = case when v_has_allergies then trim(v_item->>'allergies') else allergies end,
            updated_at = now()
      where id = v_cur.id;
      continue;
    end if;

    insert into public.booking_guest_choices (
      booking_id, profile_id, guest_id, companion_id, person_name, chosen_by, payer_id,
      package_id, package_snapshot, allergies, amount
    ) values (
      v_b.id,
      case when v_key like 'p:%' then substr(v_key, 3)::uuid else v_person.profile_id end,
      case when v_key like 'g:%' then substr(v_key, 3)::uuid end,
      case when v_key like 'c:%' then substr(v_key, 3)::uuid end,
      v_person.name,
      auth.uid(),
      public.menu_payer(v_b, v_key, v_person.owner_profile_id),
      case when v_has_pkg then v_pkg.id end,
      case when v_has_pkg then jsonb_build_object('id', v_pkg.id, 'name', v_pkg.name, 'description', v_pkg.description,
                                                  'price', v_pkg.price, 'price_unit', v_pkg.price_unit,
                                                  'includes', to_jsonb(v_pkg.includes), 'excludes', v_pkg.excludes)
           else '{}'::jsonb end,
      case when v_has_allergies then trim(v_item->>'allergies') end,
      case when v_has_pkg then v_pkg.price else 0 end
    )
    on conflict (booking_id, person_key) do update
      set package_id = case when v_has_pkg then excluded.package_id else public.booking_guest_choices.package_id end,
          package_snapshot = case when v_has_pkg then excluded.package_snapshot else public.booking_guest_choices.package_snapshot end,
          amount = case when v_has_pkg then excluded.amount else public.booking_guest_choices.amount end,
          base_package_id = case when v_has_pkg then null else public.booking_guest_choices.base_package_id end,
          upgrade_amount = case when v_has_pkg then 0 else public.booking_guest_choices.upgrade_amount end,
          upgrade_payer = case when v_has_pkg then null else public.booking_guest_choices.upgrade_payer end,
          allergies = case when v_has_allergies then excluded.allergies else public.booking_guest_choices.allergies end,
          person_name = excluded.person_name,
          chosen_by = case when v_has_pkg then excluded.chosen_by else public.booking_guest_choices.chosen_by end,
          payer_id = excluded.payer_id,
          updated_at = now();
  end loop;

  -- Os meus extras: na minha linha; paga-os quem os junta (com «Pagamos
  -- nós», os organizadores juntam para a conta deles).
  if p_extra_ids is not null then
    select * into v_self_person from public.event_menu_people(v_b.wedding_id) p where p.profile_id = auth.uid() limit 1;
    v_self := coalesce(v_self_person.person_key, 'p:' || auth.uid()::text);
    if v_self_person.person_key is null and not v_org then raise exception 'forbidden' using errcode = '42501'; end if;
    if exists (
      select 1 from public.booking_guest_choices c join public.payments p on p.id = c.extras_payment_id
      where c.booking_id = v_b.id and c.person_key = v_self and p.status = 'paid'
    ) then
      raise exception 'already_paid' using errcode = 'P0001';
    end if;

    select coalesce(jsonb_agg(jsonb_build_object(
             'id', e.id, 'name', e.name, 'details', to_jsonb(e.details),
             'price', e.price, 'price_unit', e.price_unit) order by e.position, e.name), '[]'::jsonb),
           coalesce(sum(e.price), 0)
      into v_extras, v_extras_total
    from public.partner_service_extras e
    where e.partner_id = v_b.partner_id and e.id = any(p_extra_ids);

    v_extras_payer := case when v_b.payer_mode = 'organizer' and v_org then v_b.couple_id else auth.uid() end;

    insert into public.booking_guest_choices (
      booking_id, profile_id, guest_id, person_name, chosen_by, payer_id,
      extras_snapshot, extras_amount, extras_payer
    ) values (
      v_b.id,
      case when v_self like 'p:%' then substr(v_self, 3)::uuid else auth.uid() end,
      case when v_self like 'g:%' then substr(v_self, 3)::uuid end,
      v_self_person.name, auth.uid(),
      public.menu_payer(v_b, v_self, auth.uid()),
      v_extras, v_extras_total, v_extras_payer
    )
    on conflict (booking_id, person_key) do update
      set extras_snapshot = excluded.extras_snapshot,
          extras_amount = excluded.extras_amount,
          extras_payer = excluded.extras_payer,
          updated_at = now();
  end if;

  perform public.refresh_menu_payments(v_b.id);

  select * into v_payment from public.payments
  where booking_id = v_b.id and payer_id = auth.uid() and status = 'pending'
    and type::text in ('guest_share', 'final_payment')
  order by created_at desc limit 1;

  return jsonb_build_object('payment_id', v_payment.id, 'amount', coalesce(v_payment.amount, 0));
end;
$$;

grant execute on function public.choose_menus(uuid, jsonb, uuid[]) to authenticated;

-- O que escolheram: o valor com a troca e os extras.
create or replace function public.booking_choices(p_booking_id uuid)
returns table (profile_id uuid, full_name text, package_name text, extras text[], allergies text, amount numeric, paid boolean)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select c.profile_id,
         coalesce(nullif(trim(c.person_name), ''), nullif(trim(pr.full_name), ''), 'Convidado'),
         c.package_snapshot->>'name',
         array(select x->>'name' from jsonb_array_elements(c.extras_snapshot) x),
         c.allergies, c.amount + c.upgrade_amount + c.extras_amount,
         coalesce(p.status = 'paid', false)
  from public.booking_guest_choices c
  join public.bookings b on b.id = c.booking_id
  left join public.profiles pr on pr.id = c.profile_id
  left join public.payments p on p.id = c.payment_id
  where c.booking_id = p_booking_id
    and (b.partner_id = auth.uid() or b.couple_id = auth.uid() or public.wedding_can(b.wedding_id, 'convidados'::text) or public.is_admin())
  order by 2;
$$;

-- «Por quem pagamos?»: cada pessoa com o convite a que pertence
-- (owner_key), para agrupar «João traz Ana e Manuel».
create or replace function public.event_people_for_paying(p_wedding_id uuid)
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case when public.is_event_organizer(p_wedding_id) then coalesce((
    select jsonb_agg(jsonb_build_object('key', p.person_key, 'name', p.name, 'age_group', p.age_group,
                                        'owner_name', p.owner_name, 'is_organizer', p.is_organizer,
                                        'owner_key', case when p.person_key like 'c:%'
                                                          then 'g:' || (select c.guest_id::text from public.guest_companions c
                                                                        where c.id = substr(p.person_key, 3)::uuid) end)
                     order by coalesce(p.owner_name, p.name), p.owner_name nulls first, p.name)
    from public.event_menu_people(p_wedding_id) p
  ), '[]'::jsonb) else '[]'::jsonb end;
$$;

grant execute on function public.event_people_for_paying(uuid) to authenticated;

insert into public.applied_migrations (id) values ('219') on conflict do nothing;

commit;
