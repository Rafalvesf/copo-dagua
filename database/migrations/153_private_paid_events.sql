-- ============================================================
-- 153 — Eventos privados e pagos
-- ============================================================
-- Pedido do utilizador (2026-11-03): "Pode ser privado e pago." e, para
-- quem recebe o código ou o link: "Paga e entra logo" — o pagamento conta
-- como confirmação do organizador.
--
--   • Evento pago (público OU privado): ninguém entra sem bilhete pago —
--     nem pelo código, nem pelo link individual, nem pelo Descobrir. O
--     organizador e quem organiza com ele entram sempre.
--   • Evento privado e pago: quem tem o código (ou o link individual)
--     compra o bilhete e entra logo. Sem código não se compra.
--   • Link individual (convite de uma pessoa da lista): ao pagar, a conta
--     liga-se a essa linha da lista em vez de criar outra.
--
-- Corre DEPOIS da 149 (bilhetes) e da 152 (cancelamento).

begin;

-- Bilhete comprado com o link individual de uma linha da lista.
alter table public.event_tickets
  add column if not exists invite_guest_id uuid references public.guests(id) on delete set null;

-- ---------- Sem bilhete pago, não se entra num evento pago ----------
create or replace function public.require_ticket_for_paid_event()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  -- Só pedidos de utilizadores (as Edge Functions entram como service_role).
  if coalesce(auth.role(), '') <> 'authenticated' then
    return new;
  end if;
  if not exists (select 1 from public.weddings w where w.id = new.wedding_id and w.is_paid) then
    return new;
  end if;
  if exists (select 1 from public.weddings w where w.id = new.wedding_id and w.owner_id = new.guest_id)
     or public.is_wedding_member(new.wedding_id) then
    return new;
  end if;
  if exists (select 1 from public.event_tickets t
             where t.wedding_id = new.wedding_id and t.buyer_id = new.guest_id and t.status = 'paid') then
    return new;
  end if;
  -- A app abre a compra do bilhete (detail = id do evento).
  raise exception 'ticket_required' using errcode = 'P0001', detail = new.wedding_id::text;
end;
$$;

drop trigger if exists require_ticket_for_paid_event on public.wedding_guest_members;
create trigger require_ticket_for_paid_event before insert on public.wedding_guest_members
  for each row execute function public.require_ticket_for_paid_event();

-- ---------- Dados do evento para a folha de compra ----------
-- Público e pago: qualquer pessoa com sessão. Privado e pago: só com o
-- código do evento ou um link individual desse evento.
create or replace function public.ticket_event_preview(p_wedding uuid default null, p_code text default null, p_token uuid default null)
returns table (
  wedding_id uuid, event_type text, partner_name_1 text, partner_name_2 text, wedding_date date,
  ceremony_time text, venue text, location text, cover_photo_url text, welcome_message text,
  is_paid boolean, entry_price numeric, is_public boolean
)
language plpgsql stable security definer set search_path = public, pg_temp as $$
declare
  v_id uuid := p_wedding;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_token is not null then
    select g.wedding_id into v_id from public.guests g where g.rsvp_token = p_token;
  elsif p_code is not null then
    select w.id into v_id from public.weddings w where w.guest_code = upper(trim(p_code));
  end if;
  if v_id is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  return query
  select w.id, w.event_type, w.partner_name_1, w.partner_name_2, w.wedding_date, w.ceremony_time,
         w.venue, w.location, w.cover_photo_url, w.welcome_message, w.is_paid, w.entry_price, w.is_public
  from public.weddings w
  where w.id = v_id
    and w.pending_deletion_at is null
    and w.cancelled_at is null
    and (w.is_public or p_code is not null or p_token is not null);
end;
$$;
revoke execute on function public.ticket_event_preview(uuid, text, uuid) from public, anon;
grant execute on function public.ticket_event_preview(uuid, text, uuid) to authenticated;

-- ---------- Confirmar o bilhete (substitui a da 149) ----------
-- Igual à 149, mas com link individual liga a linha da lista existente.
create or replace function public.confirm_event_ticket(p_session_id text, p_payment_intent_id text)
returns uuid
language plpgsql security definer set search_path = public, pg_temp
as $$
declare
  v_t record;
  v_email text;
  v_phone text;
  v_name text;
begin
  select * into v_t from public.event_tickets where checkout_session_id = p_session_id for update;
  if v_t is null then return null; end if;
  if v_t.status = 'paid' then return v_t.id; end if;

  update public.event_tickets
  set status = 'paid', payment_intent_id = p_payment_intent_id, paid_at = now()
  where id = v_t.id;

  -- Entra no evento e fica na lista de convidados (confirmado).
  insert into public.wedding_guest_members (wedding_id, guest_id)
  values (v_t.wedding_id, v_t.buyer_id)
  on conflict (wedding_id, guest_id) do nothing;

  select u.email, p.full_name, p.phone into v_email, v_name, v_phone
  from auth.users u join public.profiles p on p.id = u.id where u.id = v_t.buyer_id;

  -- Link individual: liga a pessoa à linha da lista que o organizador criou.
  if v_t.invite_guest_id is not null
     and not exists (select 1 from public.guests where wedding_id = v_t.wedding_id and linked_profile_id = v_t.buyer_id) then
    update public.guests
    set linked_profile_id = v_t.buyer_id,
        email = coalesce(email, v_email),
        phone = coalesce(phone, v_phone),
        rsvp_status = 'confirmed',
        updated_at = now()
    where id = v_t.invite_guest_id and wedding_id = v_t.wedding_id and linked_profile_id is null;
  end if;

  if not exists (select 1 from public.guests where wedding_id = v_t.wedding_id and linked_profile_id = v_t.buyer_id) then
    insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id, rsvp_status, notes)
    values (v_t.wedding_id, coalesce(v_name, 'Convidado'), v_email, v_phone, v_t.buyer_id, 'confirmed',
            'Bilhete pago · ' || v_t.quantity || (case when v_t.quantity = 1 then ' pessoa' else ' pessoas' end))
    on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing;
  else
    update public.guests set rsvp_status = 'confirmed', updated_at = now()
    where wedding_id = v_t.wedding_id and linked_profile_id = v_t.buyer_id;
  end if;
  delete from public.guest_join_requests where wedding_id = v_t.wedding_id and profile_id = v_t.buyer_id;

  insert into public.notifications (profile_id, type, title, body, link)
  select w.owner_id, 'ticket_sold', 'Bilhete vendido',
         v_t.quantity || (case when v_t.quantity = 1 then ' bilhete' else ' bilhetes' end) || ' · ' ||
         replace(to_char(v_t.amount, 'FM999990.00'), '.', ',') || ' € · ' || coalesce(v_name, 'Convidado'), '/bilhetes'
  from public.weddings w where w.id = v_t.wedding_id;

  return v_t.id;
end;
$$;
revoke execute on function public.confirm_event_ticket(text, text) from public, anon, authenticated;
grant execute on function public.confirm_event_ticket(text, text) to service_role;

commit;
