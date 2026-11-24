-- ============================================================
-- 232 — Ler o QR da conta: entrada, parceiro ou perfil
-- ============================================================
-- Pedido do utilizador (2026-11-24): "Organizadores que vendam bilhetes
-- usam os Codigos QR para verificar a entrada. Users que nao vendam
-- bilhetes e facam scan sao ridirecionados para o perfil da conta dessa
-- pessoa. os que fazem scan do bilhete tambem teem um link para ver o
-- perfil".
--
-- scan_qr passa a devolver `mode`, decidido no servidor:
--   • 'entry'   — quem lê organiza (permissão «bilhetes») um evento PAGO
--                 onde a pessoa vai: verificação de entrada (como antes).
--   • 'partner' — quem lê é parceiro com marcação num evento onde a pessoa
--                 vai: «Quem é» (registar chegada, cobrar).
--   • 'profile' — qualquer outro caso: só o id e o @ públicos da pessoa,
--                 para abrir o perfil. Sem items nem scan_id (não fica
--                 nenhuma leitura que autorize ações).
-- Os eventos gratuitos deixam de aparecer como entrada para organizadores.
-- A app mostra «Ver perfil» nos modos 'entry' e 'partner' (`profile_id`).
--
-- Corre DEPOIS da 228 e da 229.

begin;

create or replace function public.scan_qr(p_token text)
returns jsonb
language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v_me uuid := auth.uid();
  v_parts text[];
  v_window bigint;
  v_now_window bigint := floor(extract(epoch from clock_timestamp()) / 30);
  v_qr public.user_qr%rowtype;
  v_scan uuid;
  v_has_card boolean;
  v_bookings jsonb;
  v_entries jsonb;
  v_mode text;
begin
  if v_me is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  v_parts := string_to_array(trim(coalesce(p_token, '')), '.');
  if coalesce(array_length(v_parts, 1), 0) <> 3
     or v_parts[2] !~ '^[0-9]{1,12}$' or v_parts[3] !~ '^[0-9a-fA-F]{16}$' then
    return jsonb_build_object('result', 'not_found');
  end if;
  v_window := v_parts[2]::bigint;
  select * into v_qr from public.user_qr where code = upper(v_parts[1]);
  -- HMAC antes da janela: um token falso nunca ouve «expirado».
  if not found or public.qr_mac(v_qr.user_id, v_qr.secret, v_window) <> lower(v_parts[3]) then
    return jsonb_build_object('result', 'not_found');
  end if;
  if abs(v_now_window - v_window) > 1 then
    return jsonb_build_object('result', 'expired');
  end if;
  if v_qr.user_id = v_me then
    return jsonb_build_object('result', 'own_code');
  end if;

  if to_regclass('public.payer_cards') is not null then
    execute 'select exists (select 1 from public.payer_cards where user_id = $1 and payment_method_id is not null)'
      into v_has_card using v_qr.user_id;
  end if;
  v_has_card := coalesce(v_has_card, false);

  -- Entrada nos eventos PAGOS que eu organizo (permissão «bilhetes»).
  select coalesce(jsonb_agg(x.item order by abs(x.item_date - current_date), x.item_date), '[]'::jsonb) into v_entries
  from (
    select coalesce(e.wedding_date, current_date) as item_date, jsonb_build_object(
      'kind', 'entry', 'wedding_id', e.id, 'event', public.event_label(e.id), 'date', e.wedding_date,
      'is_paid', true,
      'ticket', (select jsonb_build_object('status', t.status, 'quantity', t.quantity)
                 from public.event_tickets t where t.wedding_id = e.id and t.buyer_id = v_qr.user_id
                 order by (t.status = 'paid') desc, t.paid_at desc nulls last limit 1),
      'checked_in_at', coalesce(
        (select c.checked_in_at from public.event_checkins c where c.wedding_id = e.id and c.user_id = v_qr.user_id),
        (select t.checked_in_at from public.event_tickets t where t.wedding_id = e.id and t.buyer_id = v_qr.user_id and t.status = 'paid'
         order by t.paid_at desc nulls last limit 1)),
      'can_charge', v_has_card and coalesce((select p.stripe_charges_enabled from public.profiles p where p.id = e.owner_id), false)) as item
    from public.events e
    where coalesce(e.is_paid, false)
      and public.wedding_can(e.id, 'bilhetes')
      and e.cancelled_at is null
      and e.owner_id <> v_qr.user_id
      and public.attends_event(v_qr.user_id, e.id)
  ) x;

  -- Marcações deste parceiro em eventos onde a pessoa vai.
  select coalesce(jsonb_agg(x.item order by abs(x.item_date - current_date), x.item_date), '[]'::jsonb) into v_bookings
  from (
    select b.event_date as item_date, jsonb_build_object(
      'kind', 'booking', 'booking_id', b.id, 'wedding_id', b.wedding_id, 'event', public.event_label(b.wedding_id),
      'date', b.event_date, 'booking_number', b.booking_number, 'people', b.people,
      'arrived_at', (select a.arrived_at from public.booking_arrivals a where a.booking_id = b.id and a.user_id = v_qr.user_id),
      'can_charge', v_has_card and pp.stripe_charges_enabled) as item
    from public.bookings b
    join public.partner_profiles pp on pp.id = b.partner_id
    where b.partner_id = v_me and b.status in ('confirmed', 'completed')
      and public.attends_event(v_qr.user_id, b.wedding_id)
  ) x;

  v_mode := case
    when jsonb_array_length(v_entries) > 0 then 'entry'
    when jsonb_array_length(v_bookings) > 0 then 'partner'
    else 'profile'
  end;

  -- Perfil: nada de leitura guardada, bilhetes ou marcações.
  if v_mode = 'profile' then
    return jsonb_build_object(
      'result', 'ok',
      'mode', 'profile',
      'profile_id', v_qr.user_id,
      'username', (select username from public.profiles where id = v_qr.user_id)
    );
  end if;

  -- Uma leitura por janela e por quem lê (reler devolve a mesma).
  insert into public.qr_scans (scanner_id, user_id, qr_window) values (v_me, v_qr.user_id, v_window)
  on conflict (scanner_id, user_id, qr_window) do nothing
  returning id into v_scan;
  if v_scan is null then
    select id into v_scan from public.qr_scans where scanner_id = v_me and user_id = v_qr.user_id and qr_window = v_window;
  end if;

  return jsonb_build_object(
    'result', 'ok',
    'mode', v_mode,
    'scan_id', v_scan,
    'profile_id', v_qr.user_id,
    'username', (select username from public.profiles where id = v_qr.user_id),
    'name', (select coalesce(nullif(trim(full_name), ''), 'Convidado') from public.profiles where id = v_qr.user_id),
    'avatar_url', (select avatar_url from public.profiles where id = v_qr.user_id),
    'items', v_entries || v_bookings
  );
end;
$$;
revoke execute on function public.scan_qr(text) from public, anon;
grant execute on function public.scan_qr(text) to authenticated;

insert into public.applied_migrations (id) values ('232') on conflict do nothing;

commit;
