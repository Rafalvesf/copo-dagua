-- ============================================================
-- 157 — Notificações mais bonitas (versão B do mockup)
-- ============================================================
-- Pedidos do utilizador (2026-11-03): "aparece R-2026-0142 nao gosto" e
-- "faz todos" (versão B: título curto + subtítulo com quem + o essencial;
-- valores sem ",00" e datas por extenso). As versões C, D e E (imagem,
-- conversa e botões) ficam pendentes até a app iOS estar no Xcode/TestFlight
-- (página Pendentes do admin).
--
-- Nova coluna notifications.subtitle; as funções são as mesmas das
-- migrações 109–156, só com o texto novo.
-- Corre DEPOIS da 156.

begin;

-- Marca para a página Migrações do admin saber que esta já correu.
alter table public.platform_settings add column if not exists notification_copy_version int not null default 157;

alter table public.notifications add column if not exists subtitle text check (length(subtitle) <= 120);

-- "15 000 €", "4 500,50 €" (espaço inquebrável entre milhares).
create or replace function public.fmt_eur(p numeric)
returns text language sql immutable set search_path = public, pg_temp as $$
  select case when p is null then null else
    replace(to_char(trunc(abs(p)), 'FM999G999G990'), ',', chr(160))
    || case when round(abs(p) - trunc(abs(p)), 2) > 0
            then ',' || lpad((round((abs(p) - trunc(abs(p))) * 100))::int::text, 2, '0') else '' end
    || chr(160) || '€'
  end;
$$;

-- "10 nov., às 18:00" (hora de Lisboa).
create or replace function public.fmt_quando(p timestamptz)
returns text language sql stable set search_path = public, pg_temp as $$
  select case when p is null then null else
    extract(day from p at time zone 'Europe/Lisbon')::int || ' '
    || (array['jan.','fev.','mar.','abr.','mai.','jun.','jul.','ago.','set.','out.','nov.','dez.'])[extract(month from p at time zone 'Europe/Lisbon')::int]
    || ', às ' || to_char(p at time zone 'Europe/Lisbon', 'HH24:MI')
  end;
$$;

-- "14 jun. 2027".
create or replace function public.fmt_data(p date)
returns text language sql immutable set search_path = public, pg_temp as $$
  select case when p is null then null else
    extract(day from p)::int || ' '
    || (array['jan.','fev.','mar.','abr.','mai.','jun.','jul.','ago.','set.','out.','nov.','dez.'])[extract(month from p)::int]
    || ' ' || extract(year from p)::int
  end;
$$;

-- Perfil do parceiro
create or replace function public.notify_partner_profile_decision()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_title text;
  v_body text;
begin
  if new.status is not distinct from old.status then
    return new;
  end if;

  if new.status = 'published' then
    v_title := case when old.status = 'suspended' then 'Perfil reativado' else 'Perfil aprovado' end;
    v_body := 'O teu perfil já aparece no Marketplace da À Nossa!.';
  elsif new.status = 'changes_required' then
    v_title := 'Alterações pedidas';
    v_body := coalesce(nullif(trim(new.rejection_reason), ''), 'Abre o teu perfil para ver o que falta.');
  elsif new.status = 'rejected' then
    v_title := 'Perfil não aprovado';
    v_body := coalesce(nullif(trim(new.rejection_reason), ''), 'Abre o teu perfil para ver o motivo.');
  elsif new.status = 'suspended' then
    v_title := 'Perfil suspenso';
    v_body := coalesce(nullif(trim(new.rejection_reason), ''), 'Fala com a equipa À Nossa! para saber mais.');
  else
    return new;
  end if;

  insert into public.notifications (wedding_id, partner_id, type, title, subtitle, body)
  values (null, new.id, 'partner_profile_' || new.status::text, v_title, 'Equipa À Nossa!', v_body);
  return new;
end;
$$;
-- Mensagens: título «Nova mensagem», subtítulo = quem escreve (p_title)
create or replace function public.upsert_message_notification(
  p_wedding_id uuid, p_partner_id uuid, p_profile_id uuid, p_title text, p_body text, p_link text
) returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_id uuid;
begin
  select id into v_id from public.notifications
  where type = 'new_message' and not read and link is not distinct from p_link
    and wedding_id is not distinct from p_wedding_id
    and partner_id is not distinct from p_partner_id
    and profile_id is not distinct from p_profile_id
    and created_at > now() - interval '1 day'
  order by created_at desc limit 1;

  if v_id is not null then
    update public.notifications set title = 'Nova mensagem', subtitle = p_title, body = p_body, created_at = now() where id = v_id;
  else
    insert into public.notifications (wedding_id, partner_id, profile_id, type, title, subtitle, body, link)
    values (p_wedding_id, p_partner_id, p_profile_id, 'new_message', 'Nova mensagem', p_title, p_body, p_link);
  end if;
end;
$$;
-- Mensagens diretas
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
      coalesce(v_name, 'Parceiro'), v_preview, '/chat');
  else
    select nullif(concat_ws(' & ', nullif(partner_name_1, ''), nullif(partner_name_2, '')), '')
      into v_name from public.weddings where id = v_conv.wedding_id;
    perform public.upsert_message_notification(
      null, v_conv.partner_id, null,
      coalesce(v_name, 'Organizador'), v_preview, '/partner-messages');
  end if;
  return new;
end;
$$;
-- Resposta do suporte
create or replace function public.notify_support_reply()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if new.resolution_note is not null and new.resolution_note is distinct from old.resolution_note then
    insert into public.notifications (profile_id, type, title, subtitle, body, link)
    values (new.user_id, 'support_reply', 'Resposta ao teu pedido', 'Equipa À Nossa!', left(new.resolution_note, 140), '/support');
  end if;
  return new;
end;
$$;
-- Pedido de orçamento
create or replace function public.notify_quote_request()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  insert into public.notifications (partner_id, type, title, subtitle, body, link)
  values (new.partner_id, 'quote_request', 'Novo pedido de orçamento', public.couple_label(new.wedding_id),
          coalesce(nullif(concat_ws(' · ', public.fmt_data(new.event_date), left(nullif(trim(new.message), ''), 100)), ''),
                   'Abre para ver o pedido.'),
          '/partner-requests');
  return new;
end;
$$;
-- Propostas
create or replace function public.notify_proposal()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_wedding uuid;
  v_partner text;
begin
  select wedding_id into v_wedding from public.quote_requests where id = new.quote_request_id;
  if tg_op = 'INSERT' and new.status = 'sent' then
    select business_name into v_partner from public.partner_profiles where id = new.partner_id;
    insert into public.notifications (wedding_id, type, title, subtitle, body, link)
    values (v_wedding, 'proposal_received', 'Nova proposta', coalesce(v_partner, 'Parceiro'),
            new.title || ' · ' || public.fmt_eur(new.price), '/bookings');
  elsif tg_op = 'UPDATE' and new.status = 'accepted' and old.status is distinct from 'accepted' then
    insert into public.notifications (partner_id, type, title, subtitle, body, link)
    values (new.partner_id, 'proposal_accepted', 'Proposta aceite', public.couple_label(v_wedding),
            '“' || new.title || '”. Aguarda o pagamento do sinal.',
            '/partner-contracts');
  end if;
  return new;
end;
$$;
-- Pagamentos
create or replace function public.notify_payment_paid()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  b record;
  v_partner text;
  v_label text;
begin
  if new.status <> 'paid' or old.status = 'paid' then return new; end if;
  select * into b from public.bookings where id = new.booking_id;
  if b is null then return new; end if;
  select business_name into v_partner from public.partner_profiles where id = b.partner_id;
  v_label := case when new.type = 'deposit' then 'Sinal' else 'Restante' end;
  insert into public.notifications (partner_id, type, title, subtitle, body, link)
  values (b.partner_id, 'payment_received', v_label || ' recebido', public.couple_label(b.wedding_id),
          public.fmt_eur(new.amount), '/partner-payments');
  insert into public.notifications (wedding_id, type, title, subtitle, body, link)
  values (b.wedding_id, 'payment_confirmed', v_label || ' pago', coalesce(v_partner, 'Parceiro'),
          public.fmt_eur(new.amount) || '. Obrigado!', '/bookings');
  return new;
end;
$$;
-- Lembretes diários
create or replace function public.daily_reminders()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $function$
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
    insert into public.notifications (wedding_id, profile_id, type, title, subtitle, body, link)
    values (p.wedding_id, p.private_owner, 'payment_due',
            case when p.type = 'deposit' then 'Sinal por pagar' else 'Restante por pagar' end,
            coalesce(p.business_name, 'Parceiro'),
            public.fmt_eur(p.amount) || ' até ' || public.fmt_quando(p.due_at), '/bookings');
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
    select distinct gu.linked_profile_id as profile_id, wd.id as wedding_id
    from public.guests gu join public.weddings wd on wd.id = gu.wedding_id
    where gu.linked_profile_id is not null and wd.wedding_date = current_date + 1
      and coalesce(gu.rsvp_status::text, '') <> 'declined'
  loop
    insert into public.notifications (profile_id, type, title, body, link)
    values (g.profile_id, 'event_reminder', 'É amanhã!', 'Vê o programa e onde ficas sentado.', '/guest-home/' || g.wedding_id);
  end loop;
end;
$function$;
-- Organizador cancela
create or replace function public.cancel_booking_by_couple(p_booking_id uuid, p_reason text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_penalty_days integer;
  v_window_hours integer;
  v_days_until_event integer;
  v_refundable boolean;
  v_deposit_paid_at timestamptz;
  v_final_paid boolean;
  v_refund_deposit boolean;
  v_refund_final boolean;
begin
  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_booking.couple_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_booking.status not in ('awaiting_deposit', 'confirmed') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select cancellation_penalty_days, coalesce(deposit_refund_window_hours, 48)
    into v_penalty_days, v_window_hours
    from public.platform_settings where id = 1;
  v_days_until_event := v_booking.event_date - current_date;

  select coalesce((select deposit_refundable from public.proposals where id = v_booking.proposal_id), true)
    into v_refundable;

  select max(coalesce(paid_at, updated_at)) into v_deposit_paid_at
  from public.payments
  where booking_id = p_booking_id and type = 'deposit' and status = 'paid';

  select exists (
    select 1 from public.payments
    where booking_id = p_booking_id and type <> 'deposit' and status = 'paid'
  ) into v_final_paid;

  v_refund_deposit := v_deposit_paid_at is not null
    and v_refundable
    and now() <= v_deposit_paid_at + make_interval(hours => v_window_hours);
  v_refund_final := v_final_paid and v_days_until_event >= v_penalty_days;

  update public.bookings set status = 'cancelled_by_couple', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_couple', v_booking.status, 'cancelled_by_couple', 'couple', auth.uid(),
          jsonb_build_object(
            'reason', p_reason,
            'refund_required', v_refund_deposit or v_refund_final,
            'refund_deposit', v_refund_deposit,
            'refund_final', v_refund_final,
            'deposit_refundable', v_refundable,
            'deposit_paid_at', v_deposit_paid_at,
            'deposit_window_hours', v_window_hours,
            'days_until_event', v_days_until_event,
            'penalty_days', v_penalty_days,
            'penalty_applied', (v_deposit_paid_at is not null and not v_refund_deposit)
          ));

  update public.payments
  set status = 'failed', updated_at = now()
  where booking_id = p_booking_id and status in ('pending', 'overdue');

  insert into public.notifications (wedding_id, partner_id, type, title, subtitle, body)
  values (
    v_booking.wedding_id, v_booking.partner_id, 'booking_cancelled',
    'Reserva cancelada', public.couple_label(v_booking.wedding_id),
    'O organizador cancelou a reserva.'
      || case
           when v_deposit_paid_at is not null and not v_refund_deposit then ' O sinal fica contigo.'
           when v_refund_deposit then ' O sinal é devolvido (cancelou nas primeiras ' || v_window_hours || ' h).'
           else ''
         end
  );
end;
$$;
-- Parceiro cancela
create or replace function public.cancel_booking_by_partner(p_booking_id uuid, p_reason text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_refund_required boolean;
begin
  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_booking.partner_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_booking.status not in ('awaiting_deposit', 'confirmed') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  -- Já recebeu dinheiro desta reserva: tem de o devolver primeiro.
  if exists (
    select 1 from public.payments
    where booking_id = p_booking_id and status = 'paid'
      and released_at is not null and transfer_id like 'tr_%' and returned_at is null
  ) then
    raise exception 'funds_released' using errcode = 'P0001';
  end if;

  -- O parceiro cancelar devolve sempre tudo o que o organizador pagou.
  select exists (
    select 1 from public.payments where booking_id = p_booking_id and status = 'paid'
  ) into v_refund_required;

  update public.bookings set status = 'cancelled_by_partner', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_partner', v_booking.status, 'cancelled_by_partner', 'partner', auth.uid(),
          jsonb_build_object('reason', p_reason, 'refund_required', v_refund_required,
                             'refund_deposit', v_refund_required, 'refund_final', v_refund_required));

  update public.payments
  set status = 'failed', updated_at = now()
  where booking_id = p_booking_id and status in ('pending', 'overdue');

  insert into public.notifications (wedding_id, type, title, subtitle, body)
  values (
    v_booking.wedding_id, 'booking_cancelled',
    'Reserva cancelada', coalesce((select pp.business_name from public.partner_profiles pp where pp.id = v_booking.partner_id), 'Parceiro'),
    'O parceiro cancelou a reserva.'
      || (case when v_refund_required then ' O que pagaste é devolvido.' else '' end)
      || ' Podes pedir uma nova proposta a outro parceiro (ou ao mesmo).'
  );
end;
$$;
-- Disputa aberta
create or replace function public.open_dispute(p_booking_id uuid, p_reason text, p_description text)
returns uuid language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_booking record;
  v_role text;
  v_id uuid;
begin
  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_booking.couple_id = auth.uid() then
    v_role := 'couple';
  elsif v_booking.partner_id = auth.uid() then
    v_role := 'partner';
  else
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_booking.status not in ('confirmed', 'completed', 'payment_overdue') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if length(trim(coalesce(p_description, ''))) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  insert into public.disputes (booking_id, opened_by, opened_by_role, reason, description, previous_booking_status)
  values (p_booking_id, auth.uid(), v_role, p_reason, trim(p_description), v_booking.status)
  returning id into v_id;

  update public.bookings set status = 'disputed' where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'dispute_opened', v_booking.status, 'disputed', v_role::public.booking_actor_type, auth.uid(),
          jsonb_build_object('dispute_id', v_id, 'reason', p_reason));

  if v_role = 'couple' then
    insert into public.notifications (wedding_id, partner_id, type, title, subtitle, body)
    values (v_booking.wedding_id, v_booking.partner_id, 'dispute_opened', 'Disputa aberta', public.couple_label(v_booking.wedding_id),
            'O organizador abriu uma disputa sobre a reserva. A equipa À Nossa! vai analisar.');
  else
    insert into public.notifications (wedding_id, type, title, subtitle, body)
    values (v_booking.wedding_id, 'dispute_opened', 'Disputa aberta', coalesce((select pp.business_name from public.partner_profiles pp where pp.id = v_booking.partner_id), 'Parceiro'),
            'O parceiro abriu uma disputa sobre a reserva. A equipa À Nossa! vai analisar.');
  end if;

  return v_id;
end;
$$;
-- Disputa resolvida
create or replace function public.admin_resolve_dispute(
  p_dispute_id uuid, p_resolution text, p_refund_amount numeric, p_note text
)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_dispute record;
  v_booking record;
  v_text text;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_resolution not in ('refund_full', 'refund_partial', 'partner_favor') then
    raise exception 'validation_error' using errcode = '22023';
  end if;
  if length(trim(coalesce(p_note, ''))) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select * into v_dispute from public.disputes where id = p_dispute_id for update;
  if v_dispute is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_dispute.status <> 'open' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  select * into v_booking from public.bookings where id = v_dispute.booking_id for update;

  update public.disputes
  set status = 'resolved', resolution = p_resolution, refund_amount = p_refund_amount,
      admin_note = trim(p_note), resolved_by = auth.uid(), resolved_at = now()
  where id = p_dispute_id;

  -- A reserva volta ao estado em que estava antes da disputa.
  update public.bookings set status = v_dispute.previous_booking_status
  where id = v_dispute.booking_id and status = 'disputed';

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (v_dispute.booking_id, 'dispute_resolved', 'disputed', v_dispute.previous_booking_status, 'admin', auth.uid(),
          jsonb_build_object('dispute_id', p_dispute_id, 'resolution', p_resolution, 'refund_amount', p_refund_amount));

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'dispute_' || p_resolution, 'disputes', p_dispute_id,
          jsonb_build_object('booking_id', v_dispute.booking_id, 'refund_amount', p_refund_amount));

  v_text := case p_resolution
    when 'refund_full' then 'Reembolso total ao organizador.'
    when 'refund_partial' then 'Reembolso de ' || public.fmt_eur(p_refund_amount) || ' ao organizador.'
    else 'Decidida a favor do parceiro.'
  end;
  insert into public.notifications (wedding_id, type, title, subtitle, body)
  values (v_booking.wedding_id, 'dispute_resolved', 'Disputa resolvida', coalesce((select pp.business_name from public.partner_profiles pp where pp.id = v_booking.partner_id), 'Parceiro'), v_text || ' ' || trim(p_note));
  insert into public.notifications (wedding_id, partner_id, type, title, subtitle, body)
  values (v_booking.wedding_id, v_booking.partner_id, 'dispute_resolved', 'Disputa resolvida', public.couple_label(v_booking.wedding_id), v_text || ' ' || trim(p_note));
end;
$$;
-- Mensagens da equipa
create or replace function public.admin_send_message(
  p_audience text, p_title text, p_body text, p_recipient uuid default null, p_link text default null,
  p_style text default 'notification', p_expires_at timestamptz default null, p_image_url text default null
) returns int
language plpgsql security definer set search_path = public, pg_temp
as $$
declare
  v_ids uuid[];
  v_count int;
  v_msg uuid;
begin
  if not public.is_admin() then raise exception 'forbidden'; end if;
  if p_style not in ('notification', 'banner', 'direct') then raise exception 'invalid_style'; end if;
  if coalesce(p_image_url, '') <> '' and p_image_url !~ '^https://[a-z0-9.-]+/storage/v1/object/public/team-media/' then
    raise exception 'invalid_image';
  end if;
  if p_audience = 'user' then
    if p_recipient is null then raise exception 'recipient_required'; end if;
    v_ids := array[p_recipient];
  elsif p_audience in ('all', 'couple', 'partner', 'guest') then
    select array_agg(id) into v_ids from public.profiles
     where status is distinct from 'deleted'
       and role <> 'admin'
       and (p_audience = 'all' or role::text = p_audience);
  else
    raise exception 'invalid_audience';
  end if;
  v_ids := coalesce(v_ids, '{}');

  insert into public.admin_messages (sent_by, audience, recipient_id, title, body, link, recipients, style, expires_at, image_url)
  values ((select auth.uid()), p_audience, p_recipient, btrim(p_title), btrim(p_body), nullif(btrim(p_link), ''),
          cardinality(v_ids), p_style, case when p_style = 'banner' then p_expires_at end, nullif(btrim(p_image_url), ''))
  returning id into v_msg;

  if p_style = 'notification' then
    insert into public.notifications (profile_id, type, title, subtitle, body, link, image_url)
    select x, 'admin_message', btrim(p_title), 'Equipa À Nossa!', btrim(p_body), '/mensagem/' || v_msg, nullif(btrim(p_image_url), '')
    from unnest(v_ids) x;
  elsif p_style = 'direct' then
    insert into public.notifications (profile_id, type, title, subtitle, body, link, image_url)
    select x, 'admin_message', btrim(p_title), 'Equipa À Nossa!', btrim(p_body), '/equipa', nullif(btrim(p_image_url), '')
    from unnest(v_ids) x;
  end if;
  v_count := cardinality(v_ids);

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values ((select auth.uid()), 'admin_message_sent', 'admin_messages', v_msg,
          jsonb_build_object('audience', p_audience, 'recipient', p_recipient, 'count', v_count, 'style', p_style));
  return v_count;
end;
$$;
-- Convite de parceiro: alguém entra
create or replace function public.claim_partner_referral(p_code text)
returns table (partner_id uuid, business_name text, valid boolean)
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_partner uuid;
  v_name text;
  v_valid boolean;
  v_min numeric;
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select p.id, p.business_name into v_partner, v_name
  from public.partner_profiles p
  where upper(p.referral_code) = upper(trim(p_code)) and p.status = 'published';
  if v_partner is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_partner = v_uid then
    raise exception 'own_code' using errcode = 'P0001';
  end if;

  -- Já registado: devolve o que estava (não muda depois de existir).
  select r.valid into v_valid from public.partner_referrals r
  where r.partner_id = v_partner and r.profile_id = v_uid;
  if v_valid is null then
    v_valid := not exists (select 1 from public.quote_requests q where q.partner_id = v_partner and q.couple_id = v_uid)
           and not exists (select 1 from public.bookings b where b.partner_id = v_partner and b.couple_id = v_uid);
    insert into public.partner_referrals (partner_id, profile_id, valid) values (v_partner, v_uid, v_valid)
    on conflict on constraint partner_referrals_pkey do nothing;
    if v_valid then
      insert into public.notifications (profile_id, type, title, subtitle, body, link)
      values (v_partner, 'partner_referral', 'Novo cliente pelo teu convite',
              coalesce((select full_name from public.profiles where id = v_uid), 'Um cliente'),
              'Entrou na À Nossa! pelo teu link. Conta para o teu próximo cliente sem comissão quando pagar a primeira reserva contigo.',
              '/partner-home');
    end if;
  end if;

  return query select v_partner, v_name, v_valid;
end;
$$;
-- Convite de parceiro: cliente paga
create or replace function public.count_partner_referral()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_b record;
  v_ref record;
  v_min numeric;
  v_every integer;
  v_seq integer;
begin
  if new.status <> 'paid' or old.status = 'paid' then
    return new;
  end if;
  select b.couple_id, b.partner_id, b.total_amount into v_b from public.bookings b where b.id = new.booking_id;
  if v_b is null or v_b.couple_id is null then
    return new;
  end if;
  select r.* into v_ref from public.partner_referrals r
  where r.partner_id = v_b.partner_id and r.profile_id = v_b.couple_id;
  if v_ref is null or not v_ref.valid or v_ref.seq is not null then
    return new;
  end if;
  select coalesce(referral_min_booking, 0), greatest(coalesce(referral_free_every, 5), 1)
  into v_min, v_every from public.platform_settings where id = 1;
  if coalesce(v_b.total_amount, 0) < v_min then
    return new;
  end if;

  perform pg_advisory_xact_lock(hashtext('partner_referral_seq:' || v_b.partner_id::text));
  select coalesce(max(pr.seq), 0) + 1 into v_seq from public.partner_referrals pr where pr.partner_id = v_b.partner_id;
  update public.partner_referrals pr set seq = v_seq, counted_at = now()
  where pr.partner_id = v_b.partner_id and pr.profile_id = v_b.couple_id and pr.seq is null;

  insert into public.notifications (profile_id, type, title, subtitle, body, link)
  values (v_b.partner_id, 'partner_referral', 'Cliente do teu convite conta',
          coalesce((select full_name from public.profiles where id = v_b.couple_id), 'Um cliente'),
          'Pagou a primeira reserva contigo.' ||
          case when v_seq % v_every = 0 then ''
               else ' Faltam ' || (v_every - v_seq % v_every) || ' para o próximo cliente sem comissão.' end,
          '/partner-home');
  return new;
end;
$$;
-- Bilhete reembolsado / evento cancelado
create or replace function public.mark_event_ticket_refunded(
  p_ticket uuid, p_refund_id text, p_reason text default null, p_event_cancelled boolean default false
)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_t record;
  v_name text;
begin
  select * into v_t from public.event_tickets where id = p_ticket for update;
  if v_t is null or v_t.status = 'refunded' then
    return;
  end if;
  update public.event_tickets
  set status = 'refunded', refunded_at = now(), refund_id = p_refund_id, refund_reason = nullif(trim(p_reason), '')
  where id = p_ticket;

  select coalesce(nullif(concat_ws(' & ', nullif(trim(w.partner_name_1), ''), nullif(trim(w.partner_name_2), '')), ''), 'o evento') into v_name
  from public.weddings w where w.id = v_t.wedding_id;

  -- Bilhete reembolsado sem o evento ser cancelado: sai do evento, se não
  -- tiver outro bilhete pago.
  if not p_event_cancelled and not exists (
    select 1 from public.event_tickets t
    where t.wedding_id = v_t.wedding_id and t.buyer_id = v_t.buyer_id and t.status = 'paid'
  ) then
    delete from public.wedding_guest_members where wedding_id = v_t.wedding_id and guest_id = v_t.buyer_id;
    update public.guests set rsvp_status = 'declined', updated_at = now()
    where wedding_id = v_t.wedding_id and linked_profile_id = v_t.buyer_id;
  end if;

  insert into public.notifications (profile_id, type, title, subtitle, body, link)
  values (v_t.buyer_id, 'ticket_refunded',
          case when p_event_cancelled then 'Evento cancelado' else 'Bilhete reembolsado' end,
          v_name,
          'Devolvemos ' || public.fmt_eur(v_t.amount) || ' ao teu cartão (pode demorar 5 a 10 dias).' ||
          coalesce(' Motivo: ' || nullif(trim(p_reason), ''), ''),
          '/eventos');
end;
$$;
-- Bilhete vendido
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

  insert into public.notifications (profile_id, type, title, subtitle, body, link)
  select w.owner_id, 'ticket_sold', 'Bilhete vendido', coalesce(v_name, 'Convidado'),
         v_t.quantity || (case when v_t.quantity = 1 then ' bilhete' else ' bilhetes' end) || ' · ' ||
         public.fmt_eur(v_t.amount), '/bilhetes'
  from public.weddings w where w.id = v_t.wedding_id;

  return v_t.id;
end;
$$;
-- Destaque ativo (igual; texto já curto)
create or replace function public.promote_next_in_queue(p_category text, p_region text)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_slots integer;
  v_next record;
begin
  select coalesce(promotion_slots, 6) into v_slots from public.platform_settings where id = 1;
  perform pg_advisory_xact_lock(hashtext('promo:' || p_category || ':' || coalesce(p_region, '')));
  loop
    exit when (select count(*) from public.partner_promotions
               where category_slug = p_category and coalesce(region, '') = coalesce(p_region, '') and status = 'active') >= v_slots;
    select * into v_next from public.partner_promotions
    where category_slug = p_category and coalesce(region, '') = coalesce(p_region, '') and status = 'waiting'
    order by created_at limit 1;
    exit when v_next is null;
    update public.partner_promotions set status = 'active', started_at = now() where id = v_next.id;
    insert into public.notifications (profile_id, type, title, body, link)
    values (v_next.partner_id, 'promotion_active', 'Já estás em destaque',
            'Abriu um lugar e o teu destaque está ativo.', '/partner-home');
  end loop;
end;
$$;
-- Envelope digital
create or replace function public.send_gift_envelope(p_wedding uuid, p_amount numeric, p_message text default null)
returns uuid
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_uid uuid := auth.uid();
  v_name text;
  v_id uuid;
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

  insert into public.notifications (profile_id, type, title, subtitle, body, link)
  select w.owner_id, 'gift_envelope', 'Envelope recebido', v_name,
         public.fmt_eur(p_amount) || coalesce(' · «' || left(nullif(trim(p_message), ''), 120) || '»', ' por transferência para o vosso IBAN.'),
         '/envelopes'
  from public.weddings w where w.id = p_wedding;
  return v_id;
end;
$$;
commit;
