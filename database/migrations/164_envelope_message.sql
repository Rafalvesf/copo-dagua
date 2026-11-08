-- 164 · Envelope com dinheiro avisa os organizadores por mensagem
--
-- Pedido 2026-11-08: quando um convidado escolhe e oferece um envelope,
-- os organizadores recebem uma MENSAGEM (em Mensagens › Grupos), não só
-- uma notificação. Cada convidado tem uma conversa privada com os
-- anfitriões do evento ("Nome · anfitriões"), criada na primeira vez e
-- reutilizada depois. A notificação e o push vêm do gatilho das
-- mensagens de grupo (114), por isso sai a notificação própria do envelope
-- (assim não chegam duas).

begin;

-- Conversa convidado ↔ anfitriões: uma por convidado e evento.
alter table public.chat_groups add column if not exists hosts_guest_id uuid references public.profiles(id) on delete cascade;
create unique index if not exists chat_groups_hosts_guest_uniq
  on public.chat_groups (wedding_id, hosts_guest_id) where hosts_guest_id is not null;

create or replace function public.guest_hosts_group(p_wedding uuid, p_guest uuid)
returns uuid
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_id uuid;
  v_name text;
begin
  select id into v_id from public.chat_groups where wedding_id = p_wedding and hosts_guest_id = p_guest;
  if v_id is null then
    select coalesce(nullif(split_part(trim(full_name), ' ', 1), ''), 'Convidado') into v_name
    from public.profiles where id = p_guest;
    insert into public.chat_groups (wedding_id, name, created_by, hosts_guest_id)
    values (p_wedding, left(v_name || ' · anfitriões', 60), p_guest, p_guest)
    returning id into v_id;
  end if;
  -- O convidado e todos os organizadores ativos (entram também os que
  -- começarem a organizar depois do primeiro envelope).
  insert into public.chat_group_members (group_id, profile_id, last_read_at)
  values (v_id, p_guest, now())
  on conflict do nothing;
  insert into public.chat_group_members (group_id, profile_id)
  select v_id, w.owner_id from public.weddings w where w.id = p_wedding
  union
  select v_id, c.user_id from public.wedding_collaborators c
  where c.wedding_id = p_wedding and c.status = 'active' and c.removed_at is null and c.user_id is not null
  on conflict do nothing;
  return v_id;
end;
$$;
revoke execute on function public.guest_hosts_group(uuid, uuid) from public, anon, authenticated;

create or replace function public.send_gift_envelope(p_wedding uuid, p_amount numeric, p_message text default null)
returns uuid
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_uid uuid := auth.uid();
  v_name text;
  v_id uuid;
  v_group uuid;
  v_amount text;
begin
  if v_uid is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not exists (select 1 from public.wedding_guest_members where wedding_id = p_wedding and guest_id = v_uid) then
    raise exception 'not_guest' using errcode = '42501';
  end if;
  if p_amount is null or p_amount <= 0 or p_amount > 100000 then
    raise exception 'invalid_amount' using errcode = 'P0001';
  end if;
  select coalesce(nullif(trim(full_name), ''), 'Convidado') into v_name from public.profiles where id = v_uid;
  insert into public.gift_envelopes (wedding_id, guest_profile_id, guest_name, amount, message)
  values (p_wedding, v_uid, v_name, round(p_amount, 2), nullif(trim(p_message), ''))
  returning id into v_id;

  -- Mensagem do convidado na conversa com os anfitriões.
  v_amount := replace(to_char(round(p_amount, 2), 'FM999990.00'), '.', ',');
  v_group := public.guest_hosts_group(p_wedding, v_uid);
  insert into public.chat_group_messages (group_id, sender_id, body)
  values (
    v_group, v_uid,
    'Ofereci-vos um envelope de ' || v_amount || ' € por transferência para o vosso IBAN.' ||
    coalesce(E'\n\n«' || left(nullif(trim(p_message), ''), 500) || '»', '')
  );
  return v_id;
end;
$$;
revoke execute on function public.send_gift_envelope(uuid, numeric, text) from public, anon;
grant execute on function public.send_gift_envelope(uuid, numeric, text) to authenticated;

commit;
