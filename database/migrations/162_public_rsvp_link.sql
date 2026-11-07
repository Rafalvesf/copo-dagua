-- ============================================================
-- 162 — Convite geral: responder sem conta pelo link do evento
-- ============================================================
--
-- Pedido do utilizador (2026-11-07): "ninguém vai ter link pessoal, vão
-- ser todos iguais, mudam apenas após colocarem o nome". O convidado
-- abre o link do evento (/invite/<código>), vê o convite completo e
-- responde sem conta: nome, acompanhantes, menu e alergias. A conta é
-- sempre sugerida, nunca obrigatória.
--
-- • Evento público (is_public): a pessoa fica logo na lista.
-- • Evento privado: fica um PEDIDO (143) com as respostas; o organizador
--   aceita e a pessoa passa para a lista com tudo o que respondeu.
-- • Evento pago: continua a ser preciso bilhete (ticket_required).
--
-- Cada resposta tem um token (o mesmo `rsvp_token` de 060/096) que a app
-- guarda no telemóvel: serve para mudar a resposta e para a ligar à conta
-- se a pessoa a criar depois (`claim_public_rsvp`).

alter table public.guest_join_requests alter column profile_id drop not null;
alter table public.guest_join_requests
  add column if not exists rsvp_token uuid not null default gen_random_uuid(),
  add column if not exists answers jsonb,
  add column if not exists source text not null default 'account';
create unique index if not exists guest_join_requests_token_idx on public.guest_join_requests (rsvp_token);

alter table public.guests
  add column if not exists self_registered boolean not null default false;

-- ---------- o convite completo, sem sessão ----------
-- Só o que já aparece no convite que o organizador partilhou.
create or replace function public.get_public_event(p_code text)
returns jsonb
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select jsonb_build_object(
    'wedding_id', w.id,
    'guest_code', w.guest_code,
    'event_type', w.event_type,
    'partner_name_1', w.partner_name_1,
    'partner_name_2', w.partner_name_2,
    'wedding_date', w.wedding_date,
    'ceremony_time', w.ceremony_time,
    'venue', w.venue,
    'location', w.location,
    'venue_address', w.venue_address,
    'venue_latitude', w.venue_latitude,
    'venue_longitude', w.venue_longitude,
    'cover_photo_url', w.cover_photo_url,
    'quote', w.quote,
    'welcome_message', w.welcome_message,
    'program', w.program,
    'dress_code', w.dress_code,
    'max_companions', w.default_max_companions,
    'is_paid', w.is_paid,
    'entry_price', w.entry_price,
    'is_public', w.is_public
  )
  from public.weddings w
  where w.guest_code = upper(trim(p_code));
$$;

revoke execute on function public.get_public_event(text) from public;
grant execute on function public.get_public_event(text) to anon, authenticated;

-- ---------- começar a responder (só o nome) ----------
create or replace function public.start_public_rsvp(p_code text, p_name text)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_w record;
  v_name text := btrim(regexp_replace(coalesce(p_name, ''), '\s+', ' ', 'g'));
  v_token uuid;
  v_recent int;
begin
  if char_length(v_name) < 2 or char_length(v_name) > 80 then
    raise exception 'invalid_name' using errcode = '22023';
  end if;

  select id, coalesce(is_public, false) as is_public, coalesce(is_paid, false) as is_paid,
         greatest(coalesce(default_max_companions, 0), 0) as max_companions
  into v_w
  from public.weddings
  where guest_code = upper(trim(p_code));
  if v_w.id is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_w.is_paid then
    raise exception 'ticket_required' using errcode = 'P0001';
  end if;

  -- Travão contra abuso do link: no máximo 60 respostas sem conta por
  -- hora em cada evento.
  select (select count(*) from public.guest_join_requests
          where wedding_id = v_w.id and source = 'link' and created_at > now() - interval '1 hour')
       + (select count(*) from public.guests
          where wedding_id = v_w.id and self_registered and linked_profile_id is null
            and created_at > now() - interval '1 hour')
  into v_recent;
  if v_recent >= 60 then
    raise exception 'rate_limited' using errcode = 'P0001';
  end if;

  if v_w.is_public then
    insert into public.guests (wedding_id, full_name, self_registered, max_companions, plus_one_allowed)
    values (v_w.id, v_name, true, v_w.max_companions, v_w.max_companions > 0)
    returning rsvp_token into v_token;
    return jsonb_build_object('token', v_token, 'pending', false, 'wedding_id', v_w.id, 'max_companions', v_w.max_companions);
  end if;

  insert into public.guest_join_requests (wedding_id, full_name, source)
  values (v_w.id, v_name, 'link')
  returning rsvp_token into v_token;
  return jsonb_build_object('token', v_token, 'pending', true, 'wedding_id', v_w.id, 'max_companions', v_w.max_companions);
end;
$$;

revoke execute on function public.start_public_rsvp(text, text) from public;
grant execute on function public.start_public_rsvp(text, text) to anon, authenticated;

-- ---------- a resposta (096), agora também para pedidos ----------
-- Mesmo comportamento para quem já está na lista. Se o token for de um
-- pedido à espera do organizador, guarda as respostas no pedido.
create or replace function public.submit_rsvp_full(
  p_token uuid,
  p_attending boolean,
  p_menu text,
  p_dietary text,
  p_age_group text,
  p_side text,
  p_group_label text,
  p_message text,
  p_companions jsonb
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_guest public.guests%rowtype;
  v_c jsonb;
  v_req uuid;
  v_max int;
begin
  select * into v_guest from public.guests where rsvp_token = p_token;
  if not found then
    select r.id, greatest(coalesce(w.default_max_companions, 0), 0)
    into v_req, v_max
    from public.guest_join_requests r
    join public.weddings w on w.id = r.wedding_id
    where r.rsvp_token = p_token;
    if v_req is null then
      raise exception 'not_found' using errcode = 'P0002';
    end if;
    if p_attending and jsonb_typeof(coalesce(p_companions, '[]'::jsonb)) = 'array'
       and jsonb_array_length(coalesce(p_companions, '[]'::jsonb)) > v_max then
      raise exception 'too_many_companions' using errcode = '22023';
    end if;
    update public.guest_join_requests
    set answers = jsonb_build_object(
          'attending', p_attending,
          'menu', p_menu,
          'dietary', p_dietary,
          'age_group', p_age_group,
          'side', p_side,
          'group_label', p_group_label,
          'message', p_message,
          'companions', case when p_attending then coalesce(p_companions, '[]'::jsonb) else '[]'::jsonb end,
          'answered_at', now()
        )
    where id = v_req;
    return;
  end if;

  update public.guests
  set rsvp_status = (case when p_attending then 'confirmed' else 'declined' end)::public.rsvp_status,
      menu_selection = case when p_attending then p_menu else null end,
      dietary_restrictions = case when p_attending then p_dietary else null end,
      age_group = case when p_age_group in ('child', 'teen', 'adult', 'senior') then p_age_group else age_group end,
      side = coalesce(p_side::public.guest_side, side),
      group_label = coalesce(nullif(p_group_label, ''), group_label),
      guest_message = coalesce(nullif(p_message, ''), guest_message),
      rsvp_responded_at = now(),
      onboarding_completed_at = coalesce(onboarding_completed_at, now()),
      updated_at = now()
  where id = v_guest.id;

  delete from public.guest_companions where guest_id = v_guest.id;
  if p_attending and p_companions is not null then
    for v_c in select * from jsonb_array_elements(p_companions) loop
      insert into public.guest_companions (
        guest_id, wedding_id, name, age_group, is_child, child_age, phone, email,
        menu, allergies, accompanied_by, will_install_app
      ) values (
        v_guest.id, v_guest.wedding_id, v_c->>'name',
        coalesce(v_c->>'age_group', 'adult'),
        coalesce(v_c->>'age_group', 'adult') = 'child',
        nullif(v_c->>'child_age', '')::int,
        nullif(v_c->>'phone', ''), nullif(v_c->>'email', ''), nullif(v_c->>'menu', ''),
        coalesce(array(select jsonb_array_elements_text(coalesce(v_c->'allergies', '[]'::jsonb))), '{}'),
        nullif(v_c->>'accompanied_by', ''),
        coalesce((v_c->>'will_install_app')::boolean, false)
      );
    end loop;
  end if;
end;
$$;

revoke execute on function public.submit_rsvp_full(uuid, boolean, text, text, text, text, text, text, jsonb) from public;
grant execute on function public.submit_rsvp_full(uuid, boolean, text, text, text, text, text, text, jsonb) to anon, authenticated;

-- ---------- voltar ao convite: o que já respondi ----------
create or replace function public.get_public_rsvp(p_token uuid)
returns jsonb
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select coalesce(
    (select jsonb_build_object(
       'state', g.rsvp_status::text,
       'name', g.full_name,
       'wedding_id', g.wedding_id,
       'max_companions', g.max_companions,
       'menu', g.menu_selection,
       'dietary', g.dietary_restrictions,
       'age_group', g.age_group,
       'companions', coalesce((
         select jsonb_agg(jsonb_build_object(
           'name', c.name, 'age_group', c.age_group, 'child_age', c.child_age,
           'menu', c.menu, 'allergies', c.allergies
         ) order by c.created_at)
         from public.guest_companions c where c.guest_id = g.id
       ), '[]'::jsonb)
     )
     from public.guests g where g.rsvp_token = p_token),
    (select jsonb_build_object(
       'state', case
                  when r.answers is null then 'awaiting_approval'
                  when (r.answers->>'attending')::boolean then 'awaiting_approval_confirmed'
                  else 'awaiting_approval_declined'
                end,
       'name', r.full_name,
       'wedding_id', r.wedding_id,
       'max_companions', greatest(coalesce(w.default_max_companions, 0), 0),
       'menu', r.answers->>'menu',
       'dietary', r.answers->>'dietary',
       'age_group', r.answers->>'age_group',
       'companions', coalesce(r.answers->'companions', '[]'::jsonb)
     )
     from public.guest_join_requests r
     join public.weddings w on w.id = r.wedding_id
     where r.rsvp_token = p_token)
  );
$$;

revoke execute on function public.get_public_rsvp(uuid) from public;
grant execute on function public.get_public_rsvp(uuid) to anon, authenticated;

-- ---------- o organizador aceita ou recusa (143) ----------
-- Aceitar um pedido feito pelo link passa as respostas para a lista.
-- Se o organizador já tinha a pessoa na lista com o mesmo nome (e sem
-- resposta nem conta), usa essa linha em vez de a duplicar.
create or replace function public.review_join_request(p_request uuid, p_approve boolean)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_req record;
  v_guest uuid;
  v_max int;
  a jsonb;
begin
  select * into v_req from public.guest_join_requests where id = p_request;
  if v_req is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if not public.wedding_can(v_req.wedding_id, 'convidados'::text) then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  if not p_approve then
    if v_req.profile_id is not null then
      delete from public.wedding_guest_members m
      where m.wedding_id = v_req.wedding_id and m.guest_id = v_req.profile_id;
    end if;
    delete from public.guest_join_requests where id = p_request;
    return null;
  end if;

  select greatest(coalesce(default_max_companions, 0), 0) into v_max
  from public.weddings where id = v_req.wedding_id;

  if v_req.profile_id is not null then
    select id into v_guest from public.guests
    where wedding_id = v_req.wedding_id and linked_profile_id = v_req.profile_id;
  end if;

  if v_guest is null then
    select id into v_guest from public.guests
    where wedding_id = v_req.wedding_id
      and linked_profile_id is null
      and rsvp_status = 'pending'
      and lower(btrim(full_name)) = lower(btrim(coalesce(v_req.full_name, '')))
    order by created_at
    limit 1;
  end if;

  if v_guest is null then
    insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id,
                               self_registered, max_companions, plus_one_allowed)
    values (v_req.wedding_id, coalesce(v_req.full_name, 'Convidado'), v_req.email, v_req.phone, v_req.profile_id,
            v_req.source = 'link', v_max, v_max > 0)
    returning id into v_guest;
  else
    update public.guests
    set linked_profile_id = coalesce(linked_profile_id, v_req.profile_id),
        email = coalesce(email, v_req.email),
        phone = coalesce(phone, v_req.phone),
        max_companions = greatest(max_companions, case when v_req.source = 'link' then v_max else 0 end),
        plus_one_allowed = plus_one_allowed or (v_req.source = 'link' and v_max > 0),
        updated_at = now()
    where id = v_guest;
  end if;

  delete from public.guest_join_requests where id = p_request;

  -- Pedido do link: o token que o convidado tem no telemóvel passa a ser
  -- o da linha na lista, e as respostas entram como se respondesse agora.
  if v_req.source = 'link' then
    update public.guests set rsvp_token = v_req.rsvp_token where id = v_guest;
    a := v_req.answers;
    if a is not null then
      perform public.submit_rsvp_full(
        v_req.rsvp_token,
        coalesce((a->>'attending')::boolean, true),
        a->>'menu', a->>'dietary', a->>'age_group', a->>'side',
        a->>'group_label', a->>'message', a->'companions'
      );
    end if;
  end if;

  return v_guest;
end;
$$;

revoke execute on function public.review_join_request(uuid, boolean) from public, anon;
grant execute on function public.review_join_request(uuid, boolean) to authenticated;

-- ---------- criou conta depois de responder ----------
-- Liga a resposta feita sem conta à conta nova (ou já existente).
create or replace function public.claim_public_rsvp(p_token uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_wedding uuid;
  v_email text;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select email into v_email from auth.users where id = auth.uid();

  begin
    update public.guests
    set linked_profile_id = auth.uid(), email = coalesce(email, v_email), updated_at = now()
    where rsvp_token = p_token and linked_profile_id is null
    returning wedding_id into v_wedding;
  exception when unique_violation then
    v_wedding := null;
  end;

  if v_wedding is null then
    begin
      update public.guest_join_requests
      set profile_id = auth.uid(), email = coalesce(email, v_email)
      where rsvp_token = p_token and profile_id is null
      returning wedding_id into v_wedding;
    exception when unique_violation then
      v_wedding := null;
    end;
  end if;

  if v_wedding is not null then
    insert into public.wedding_guest_members (wedding_id, guest_id)
    values (v_wedding, auth.uid())
    on conflict (wedding_id, guest_id) do nothing;
  end if;
  return v_wedding;
end;
$$;

revoke execute on function public.claim_public_rsvp(uuid) from public, anon;
grant execute on function public.claim_public_rsvp(uuid) to authenticated;
