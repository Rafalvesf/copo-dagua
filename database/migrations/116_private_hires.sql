-- ============================================================
-- Contratações em segredo ("surpresa")
-- ============================================================
-- Pedido do utilizador (2026-10-21): ao contratar um parceiro, o
-- organizador escolhe se partilha a contratação com os outros
-- organizadores do evento. Ex.: fogo de artifício surpresa — a outra
-- pessoa não pode saber.
--
-- `private_owner` (null = partilhado) em:
--   - bookings       → a reserva (já só era vista por quem reservou);
--   - conversations  → a conversa com esse parceiro deixa de aparecer aos
--                      outros organizadores (mensagens incluídas);
--   - wedding_tasks  → tarefas criadas a partir da reserva (pagar sinal,
--                      avaliar…) só aparecem a quem reservou.
-- Notificações do evento sobre uma contratação em segredo vão só para
-- quem a fez (`notifications.profile_id`, migração 114).
-- Requer as migrações 114 e 115.

alter table public.bookings add column if not exists private_owner uuid references public.profiles(id) on delete set null;
alter table public.conversations add column if not exists private_owner uuid references public.profiles(id) on delete set null;
alter table public.wedding_tasks add column if not exists private_owner uuid references public.profiles(id) on delete set null;

-- ---------- Visibilidade ----------
drop policy if exists "Members can view own conversations" on public.conversations;
create policy "Members can view own conversations" on public.conversations for select
  using (
    (public.is_wedding_member(wedding_id) and (private_owner is null or private_owner = auth.uid()))
    or partner_id = auth.uid()
    or public.is_admin()
  );

drop policy if exists "Members can view own messages" on public.messages;
create policy "Members can view own messages" on public.messages for select
  using (exists (
    select 1 from public.conversations c
    where c.id = messages.conversation_id
      and (
        (public.is_wedding_member(c.wedding_id) and (c.private_owner is null or c.private_owner = auth.uid()))
        or c.partner_id = auth.uid()
        or public.is_admin()
      )
  ));

drop policy if exists "Members can send own messages" on public.messages;
create policy "Members can send own messages" on public.messages for insert
  with check (
    sender_id = auth.uid() and exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id
        and (
          (messages.sender_role = 'couple' and public.is_wedding_member(c.wedding_id)
             and (c.private_owner is null or c.private_owner = auth.uid()))
          or (messages.sender_role = 'partner' and c.partner_id = auth.uid())
        )
    )
  );

drop policy if exists "Members manage wedding tasks" on public.wedding_tasks;
create policy "Members manage wedding tasks" on public.wedding_tasks for all
  using (public.is_wedding_member(wedding_id) and (private_owner is null or private_owner = auth.uid()))
  with check (public.is_wedding_member(wedding_id) and (private_owner is null or private_owner = auth.uid()));

-- ---------- Quem guarda o segredo ----------
-- Dono do segredo de uma reserva/pagamento/conversa (null = partilhado).
create or replace function public.booking_private_owner(p_booking_id uuid)
returns uuid language sql stable security definer set search_path = public, pg_temp as $$
  select private_owner from public.bookings where id = p_booking_id;
$$;

create or replace function public.hire_private_owner(p_wedding_id uuid, p_partner_id uuid)
returns uuid language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce(
    (select private_owner from public.conversations
      where wedding_id = p_wedding_id and partner_id = p_partner_id and private_owner is not null limit 1),
    (select private_owner from public.bookings
      where wedding_id = p_wedding_id and partner_id = p_partner_id and private_owner is not null
      order by created_at desc limit 1)
  );
$$;

-- Guarda, durante a transação, o dono do segredo do que está a mudar
-- (reserva, pagamento, proposta, mensagem, disputa). As notificações do
-- evento criadas a seguir na mesma transação seguem esse valor.
create or replace function public.set_private_context(p_owner uuid)
returns void language sql as $$
  select set_config('app.private_owner', coalesce(p_owner::text, ''), true);
$$;

create or replace function public.private_ctx_booking()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  perform public.set_private_context(new.private_owner);
  return new;
end;
$$;
drop trigger if exists private_ctx on public.bookings;
create trigger private_ctx before insert or update on public.bookings
  for each row execute function public.private_ctx_booking();

create or replace function public.private_ctx_by_booking_id()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  perform public.set_private_context(public.booking_private_owner(new.booking_id));
  return new;
end;
$$;
drop trigger if exists private_ctx on public.payments;
create trigger private_ctx before insert or update on public.payments
  for each row execute function public.private_ctx_by_booking_id();
drop trigger if exists private_ctx on public.disputes;
create trigger private_ctx before insert or update on public.disputes
  for each row execute function public.private_ctx_by_booking_id();

create or replace function public.private_ctx_proposal()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  perform public.set_private_context(public.hire_private_owner(
    (select wedding_id from public.quote_requests where id = new.quote_request_id), new.partner_id));
  return new;
end;
$$;
drop trigger if exists private_ctx on public.proposals;
create trigger private_ctx before insert or update on public.proposals
  for each row execute function public.private_ctx_proposal();

create or replace function public.private_ctx_message()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  perform public.set_private_context((select private_owner from public.conversations where id = new.conversation_id));
  return new;
end;
$$;
drop trigger if exists private_ctx on public.messages;
create trigger private_ctx before insert on public.messages
  for each row execute function public.private_ctx_message();

-- Tarefas criadas a partir de uma reserva em segredo (pagar, avaliar)
-- ficam também em segredo.
create or replace function public.private_wedding_task()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if new.private_owner is null and new.source_entity_id is not null then
    new.private_owner := coalesce(
      public.booking_private_owner(new.source_entity_id),
      (select b.private_owner from public.payments p join public.bookings b on b.id = p.booking_id
        where p.id = new.source_entity_id)
    );
  end if;
  return new;
end;
$$;
drop trigger if exists private_wedding_task on public.wedding_tasks;
create trigger private_wedding_task before insert on public.wedding_tasks
  for each row execute function public.private_wedding_task();

-- Notificação do evento sobre algo em segredo → só para quem o guarda.
create or replace function public.route_private_notification()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_owner uuid;
begin
  if new.wedding_id is null or new.partner_id is not null or new.profile_id is not null then
    return new;
  end if;
  if new.wedding_task_id is not null then
    select private_owner into v_owner from public.wedding_tasks where id = new.wedding_task_id;
  end if;
  if v_owner is null then
    v_owner := nullif(current_setting('app.private_owner', true), '')::uuid;
  end if;
  if v_owner is not null then
    new.profile_id := v_owner;
  end if;
  return new;
end;
$$;
drop trigger if exists route_private_notification on public.notifications;
create trigger route_private_notification before insert on public.notifications
  for each row execute function public.route_private_notification();

-- Mensagens do parceiro numa conversa em segredo: notificação só para
-- quem a guarda (e não se junta à notificação partilhada "Mensagem de…").
create or replace function public.notify_direct_message()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_conv record;
  v_name text;
  v_preview text;
begin
  if coalesce(new.is_quote_request_notice, false) or new.proposal_id is not null then
    return new;
  end if;
  select * into v_conv from public.conversations where id = new.conversation_id;
  if v_conv is null then return new; end if;
  v_preview := public.message_preview(new.body, new.attachment_type);

  if new.sender_role = 'partner' then
    select business_name into v_name from public.partner_profiles where id = v_conv.partner_id;
    perform public.upsert_message_notification(
      v_conv.wedding_id, null, v_conv.private_owner,
      'Mensagem de ' || coalesce(v_name, 'um parceiro'), v_preview, '/chat');
  else
    select nullif(concat_ws(' & ', nullif(partner_name_1, ''), nullif(partner_name_2, '')), '')
      into v_name from public.weddings where id = v_conv.wedding_id;
    perform public.upsert_message_notification(
      null, v_conv.partner_id, null,
      'Mensagem de ' || coalesce(v_name, 'um organizador'), v_preview, '/partner-messages');
  end if;
  return new;
end;
$$;

-- Lembretes diários: o lembrete de pagamento de uma reserva em segredo
-- vai só para quem a fez; o do dia do evento é para todos.
create or replace function public.daily_reminders()
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  p record;
  w record;
  g record;
begin
  for p in
    select pay.id, pay.type, pay.amount, pay.due_at, b.wedding_id, b.booking_number, b.private_owner, pp.business_name
    from public.payments pay
    join public.bookings b on b.id = pay.booking_id
    left join public.partner_profiles pp on pp.id = b.partner_id
    where pay.status = 'pending' and pay.reminder_sent_at is null
      and pay.due_at is not null and pay.due_at between now() and now() + interval '48 hours'
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  loop
    perform public.set_private_context(null);
    insert into public.notifications (wedding_id, profile_id, type, title, body, link)
    values (p.wedding_id, p.private_owner, 'payment_due',
            case when p.type = 'deposit' then 'Sinal por pagar' else 'Restante por pagar' end,
            coalesce(p.business_name, 'Parceiro') || ' · ' || p.booking_number || ' · até '
            || to_char(p.due_at at time zone 'Europe/Lisbon', 'DD/MM HH24:MI'), '/bookings');
    update public.payments set reminder_sent_at = now() where id = p.id;
  end loop;
  perform public.set_private_context(null);

  for w in
    select id, wedding_date - current_date as days from public.weddings
    where wedding_date - current_date in (1, 7)
  loop
    insert into public.notifications (wedding_id, type, title, body, link)
    values (w.id, 'event_reminder',
            case when w.days = 1 then 'O grande dia é amanhã!' else 'Falta uma semana!' end,
            case when w.days = 1 then 'Confirma os últimos detalhes com os parceiros.'
                 else 'Revê as tarefas e os pagamentos que faltam.' end,
            '/tasks');
  end loop;

  for g in
    select distinct gu.linked_profile_id as profile_id, w.id as wedding_id
    from public.guests gu join public.weddings w on w.id = gu.wedding_id
    where gu.linked_profile_id is not null and w.wedding_date = current_date + 1
      and coalesce(gu.rsvp_status::text, '') <> 'declined'
  loop
    insert into public.notifications (profile_id, type, title, body, link)
    values (g.profile_id, 'event_reminder', 'É amanhã!', 'Vê o programa e onde ficas sentado.', '/guest-home/' || g.wedding_id);
  end loop;
end;
$$;
revoke all on function public.daily_reminders() from public, anon, authenticated;

-- ---------- Escolher / mudar ----------
-- Quantos outros organizadores tem o evento (0 = não vale a pena perguntar).
create or replace function public.other_organizers_count(p_wedding_id uuid)
returns integer language sql stable security definer set search_path = public, pg_temp as $$
  select case when not public.is_wedding_member(p_wedding_id) then 0 else
    (select count(*) from public.weddings where id = p_wedding_id and owner_id <> auth.uid())::int
    + (select count(*) from public.wedding_collaborators
        where wedding_id = p_wedding_id and status = 'active' and user_id is not null and user_id <> auth.uid())::int
  end;
$$;
grant execute on function public.other_organizers_count(uuid) to authenticated;

-- Põe (ou tira) uma contratação em segredo. Só quem a fez.
create or replace function public.set_booking_private(p_booking_id uuid, p_private boolean)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  b record;
  v_owner uuid := case when p_private then auth.uid() else null end;
  v_name text;
  v_tasks uuid[];
begin
  select * into b from public.bookings where id = p_booking_id for update;
  if b is null then raise exception 'not_found' using errcode = 'P0002'; end if;
  if b.couple_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;

  update public.bookings set private_owner = v_owner where id = p_booking_id;
  update public.conversations set private_owner = v_owner
    where wedding_id = b.wedding_id and partner_id = b.partner_id;

  select array_agg(id) into v_tasks from public.wedding_tasks
  where wedding_id = b.wedding_id
    and (source_entity_id = p_booking_id
         or source_entity_id in (select id from public.payments where booking_id = p_booking_id));
  update public.wedding_tasks set private_owner = v_owner where id = any(coalesce(v_tasks, '{}'));

  -- Notificações já enviadas sobre este parceiro/reserva.
  select business_name into v_name from public.partner_profiles where id = b.partner_id;
  if p_private then
    update public.notifications set profile_id = auth.uid()
    where wedding_id = b.wedding_id and profile_id is null and partner_id is null
      and (wedding_task_id = any(coalesce(v_tasks, '{}'))
           or (v_name is not null and (title ilike '%' || v_name || '%' or body ilike '%' || v_name || '%'))
           or (b.booking_number is not null and body ~ ('\m' || b.booking_number || '\M')));
  else
    update public.notifications set profile_id = null
    where wedding_id = b.wedding_id and profile_id = auth.uid() and partner_id is null
      and (wedding_task_id = any(coalesce(v_tasks, '{}'))
           or (v_name is not null and (title ilike '%' || v_name || '%' or body ilike '%' || v_name || '%'))
           or (b.booking_number is not null and body ~ ('\m' || b.booking_number || '\M')));
  end if;
end;
$$;
grant execute on function public.set_booking_private(uuid, boolean) to authenticated;
