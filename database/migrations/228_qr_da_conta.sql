-- ============================================================
-- 228 — Um QR por conta, rotativo (entrada, marcações e pagamento)
-- ============================================================
-- Pedidos do utilizador (2026-11-23):
--   • "o QR não pode ser copiado nem reutilizado por outra pessoa": token
--     assinado no servidor que muda a cada 30 s (estilo TOTP, mas o segredo
--     nunca sai do servidor).
--   • "apenas um qr code para todos os eventos é suficiente, visto que
--     atualiza de 30 em 30 sec e assim posso colocar na página principal".
--   • "quem o lê normalmente são os parceiros para verificar marcações
--     (restaurantes por exemplo)".
--
-- Como funciona:
--   • user_qr: um código curto e um segredo de 32 bytes por conta. Sem
--     políticas RLS e sem grants: só estas funções lhe tocam.
--   • my_qr(): o token da janela atual de 30 s, CÓDIGO.JANELA.HMAC
--     (HMAC-SHA256(segredo, id:janela), 16 hex). A app pede outro quando a
--     janela acaba. Um screenshot deixa de servir passado ~1 minuto.
--   • scan_qr(token): quem lê (parceiro ou organizador) recebe o nome da
--     pessoa e SÓ o que os liga: as marcações desse parceiro em eventos
--     onde a pessoa vai, ou a entrada nos eventos que esse organizador
--     gere. Cria uma leitura (qr_scans, 10 min) que autoriza as ações
--     seguintes: registar a entrada, registar a chegada à marcação ou uma
--     cobrança (migração 229). Quem lê não pode ler o mesmo código de 30 s
--     duas vezes (uma leitura por janela).
--   • my_entries(): a página «Entrada» (todos os eventos onde o QR dá
--     entrada) e o Realtime nas tabelas das entradas ("updates to all").
--   • check_in_ticket(código) (158): os códigos fixos antigos deixam de dar
--     entrada (decisão por omissão, 2026-11-23: o utilizador não escolheu e
--     seguiu-se a recomendada); apps antigas do organizador que leiam o QR
--     novo registam a entrada no evento dele.
--
-- Corre DEPOIS da 227.

begin;

-- ---------- O QR de cada conta ----------
create table if not exists public.user_qr (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  code text not null unique,
  secret bytea not null default extensions.gen_random_bytes(32),
  created_at timestamptz not null default now()
);
alter table public.user_qr enable row level security;
revoke all on table public.user_qr from public, anon, authenticated;

-- Leituras: autorizam as ações seguintes durante 10 minutos.
create table if not exists public.qr_scans (
  id uuid primary key default gen_random_uuid(),
  scanner_id uuid not null references public.profiles(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  qr_window bigint not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '10 minutes',
  charged_at timestamptz,
  unique (scanner_id, user_id, qr_window)
);
alter table public.qr_scans enable row level security;
revoke all on table public.qr_scans from public, anon, authenticated;

-- Entrada nos eventos (também nos gratuitos, sem bilhete).
create table if not exists public.event_checkins (
  wedding_id uuid not null references public.events(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  checked_in_at timestamptz not null default now(),
  checked_in_by uuid references public.profiles(id) on delete set null,
  primary key (wedding_id, user_id)
);
alter table public.event_checkins enable row level security;
revoke all on table public.event_checkins from public, anon, authenticated;
grant select on table public.event_checkins to authenticated;
drop policy if exists "Own or organizer reads" on public.event_checkins;
create policy "Own or organizer reads" on public.event_checkins for select to authenticated
  using (user_id = (select auth.uid()) or public.wedding_can(wedding_id, 'bilhetes'));

-- Chegada a uma marcação de parceiro (restaurante, etc.).
create table if not exists public.booking_arrivals (
  booking_id uuid not null references public.bookings(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  arrived_at timestamptz not null default now(),
  marked_by uuid references public.profiles(id) on delete set null,
  primary key (booking_id, user_id)
);
alter table public.booking_arrivals enable row level security;
revoke all on table public.booking_arrivals from public, anon, authenticated;
grant select on table public.booking_arrivals to authenticated;
drop policy if exists "Own, partner or organizer reads" on public.booking_arrivals;
create policy "Own, partner or organizer reads" on public.booking_arrivals for select to authenticated
  using (
    user_id = (select auth.uid())
    or exists (select 1 from public.bookings b where b.id = booking_id
               and (b.partner_id = (select auth.uid()) or public.wedding_can(b.wedding_id, 'convidados')))
  );

-- ---------- Ajudas (só internas) ----------
create or replace function public.qr_mac(p_user uuid, p_secret bytea, p_window bigint)
returns text language sql immutable set search_path = public, pg_temp as $$
  select left(encode(extensions.hmac(convert_to(p_user::text || ':' || p_window::text, 'UTF8'), p_secret, 'sha256'), 'hex'), 16);
$$;
revoke all on function public.qr_mac(uuid, bytea, bigint) from public, anon, authenticated;

-- A pessoa vai a este evento (convidada, com bilhete pago ou dona)?
create or replace function public.attends_event(p_user uuid, p_wedding uuid)
returns boolean language sql stable security definer set search_path = public, pg_temp as $$
  select exists (select 1 from public.wedding_guest_members m where m.wedding_id = p_wedding and m.guest_id = p_user)
      or exists (select 1 from public.event_tickets t where t.wedding_id = p_wedding and t.buyer_id = p_user and t.status = 'paid')
      or exists (select 1 from public.events e where e.id = p_wedding and e.owner_id = p_user);
$$;
revoke all on function public.attends_event(uuid, uuid) from public, anon, authenticated;

create or replace function public.event_label(p_wedding uuid)
returns text language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce(nullif(concat_ws(' & ', nullif(partner_name_1, ''), nullif(partner_name_2, '')), ''), 'Evento')
  from public.events where id = p_wedding;
$$;
revoke all on function public.event_label(uuid) from public, anon, authenticated;

-- Leitura válida, desta pessoa que lê e ainda dentro dos 10 minutos.
create or replace function public.valid_scan(p_scan uuid, p_scanner uuid)
returns public.qr_scans language sql stable security definer set search_path = public, pg_temp as $$
  select * from public.qr_scans where id = p_scan and scanner_id = p_scanner and expires_at > now();
$$;
revoke all on function public.valid_scan(uuid, uuid) from public, anon, authenticated;

-- ---------- O meu QR ----------
create or replace function public.my_qr()
returns jsonb
language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v_uid uuid := auth.uid();
  v_row public.user_qr%rowtype;
  v_epoch numeric := extract(epoch from clock_timestamp());
  v_window bigint := floor(v_epoch / 30);
  alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  v_code text;
begin
  if v_uid is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select * into v_row from public.user_qr where user_id = v_uid;
  if not found then
    loop
      v_code := '';
      for i in 1..10 loop
        v_code := v_code || substr(alphabet, 1 + (get_byte(extensions.gen_random_bytes(1), 0) % length(alphabet)), 1);
      end loop;
      begin
        insert into public.user_qr (user_id, code) values (v_uid, v_code)
        on conflict (user_id) do nothing;
        exit;
      exception when unique_violation then
        -- Colisão do código (rara): outro.
      end;
    end loop;
    select * into v_row from public.user_qr where user_id = v_uid;
  end if;
  return jsonb_build_object(
    'token', v_row.code || '.' || v_window || '.' || public.qr_mac(v_uid, v_row.secret, v_window),
    'refresh_in', greatest(1, ceil((v_window + 1) * 30 - v_epoch))::int,
    'name', (select nullif(trim(full_name), '') from public.profiles where id = v_uid)
  );
end;
$$;
revoke execute on function public.my_qr() from public, anon;
grant execute on function public.my_qr() to authenticated;

-- ---------- Quem lê ----------
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
  v_items jsonb;
begin
  if v_me is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  v_parts := string_to_array(trim(coalesce(p_token, '')), '.');
  if coalesce(array_length(v_parts, 1), 0) <> 3
     or v_parts[2] !~ '^[0-9]{1,12}$' or v_parts[3] !~ '^[0-9a-fA-F]{16}$' then
    -- Código fixo antigo (158) ou texto qualquer.
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

  -- Uma leitura por janela e por quem lê (reler devolve a mesma).
  insert into public.qr_scans (scanner_id, user_id, qr_window) values (v_me, v_qr.user_id, v_window)
  on conflict (scanner_id, user_id, qr_window) do nothing
  returning id into v_scan;
  if v_scan is null then
    select id into v_scan from public.qr_scans where scanner_id = v_me and user_id = v_qr.user_id and qr_window = v_window;
  end if;

  -- Antes da 229 a tabela de cartões ainda não existe.
  if to_regclass('public.payer_cards') is not null then
    execute 'select exists (select 1 from public.payer_cards where user_id = $1 and payment_method_id is not null)'
      into v_has_card using v_qr.user_id;
  end if;
  v_has_card := coalesce(v_has_card, false);

  select coalesce(jsonb_agg(x.item order by abs(x.item_date - current_date), x.item_date), '[]'::jsonb) into v_items
  from (
    -- Marcações deste parceiro em eventos onde a pessoa vai.
    select b.event_date as item_date, jsonb_build_object(
      'kind', 'booking', 'booking_id', b.id, 'wedding_id', b.wedding_id, 'event', public.event_label(b.wedding_id),
      'date', b.event_date, 'booking_number', b.booking_number, 'people', b.people,
      'arrived_at', (select a.arrived_at from public.booking_arrivals a where a.booking_id = b.id and a.user_id = v_qr.user_id),
      'can_charge', v_has_card and pp.stripe_charges_enabled) as item
    from public.bookings b
    join public.partner_profiles pp on pp.id = b.partner_id
    where b.partner_id = v_me and b.status in ('confirmed', 'completed')
      and public.attends_event(v_qr.user_id, b.wedding_id)
    union all
    -- Entrada nos eventos que eu organizo (permissão «bilhetes»).
    select coalesce(e.wedding_date, current_date), jsonb_build_object(
      'kind', 'entry', 'wedding_id', e.id, 'event', public.event_label(e.id), 'date', e.wedding_date,
      'is_paid', coalesce(e.is_paid, false),
      'ticket', (select jsonb_build_object('status', t.status, 'quantity', t.quantity)
                 from public.event_tickets t where t.wedding_id = e.id and t.buyer_id = v_qr.user_id
                 order by (t.status = 'paid') desc, t.paid_at desc nulls last limit 1),
      'checked_in_at', coalesce(
        (select c.checked_in_at from public.event_checkins c where c.wedding_id = e.id and c.user_id = v_qr.user_id),
        (select t.checked_in_at from public.event_tickets t where t.wedding_id = e.id and t.buyer_id = v_qr.user_id and t.status = 'paid'
         order by t.paid_at desc nulls last limit 1)),
      'can_charge', v_has_card and coalesce((select p.stripe_charges_enabled from public.profiles p where p.id = e.owner_id), false))
    from public.events e
    where public.wedding_can(e.id, 'bilhetes')
      and e.cancelled_at is null
      and e.owner_id <> v_qr.user_id
      and public.attends_event(v_qr.user_id, e.id)
  ) x;

  return jsonb_build_object(
    'result', 'ok',
    'scan_id', v_scan,
    'name', (select coalesce(nullif(trim(full_name), ''), 'Convidado') from public.profiles where id = v_qr.user_id),
    'avatar_url', (select avatar_url from public.profiles where id = v_qr.user_id),
    'items', v_items
  );
end;
$$;
revoke execute on function public.scan_qr(text) from public, anon;
grant execute on function public.scan_qr(text) to authenticated;

-- Registar a entrada num evento que eu organizo.
create or replace function public.scan_check_in(p_scan uuid, p_wedding uuid)
returns jsonb
language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v_scan public.qr_scans%rowtype;
  v_is_paid boolean;
  v_ticket public.event_tickets%rowtype;
  v_already timestamptz;
begin
  select * into v_scan from public.valid_scan(p_scan, auth.uid());
  if v_scan.id is null then
    return jsonb_build_object('result', 'expired');
  end if;
  if not public.wedding_can(p_wedding, 'bilhetes') then
    return jsonb_build_object('result', 'not_organizer');
  end if;
  if not public.attends_event(v_scan.user_id, p_wedding) then
    return jsonb_build_object('result', 'not_found');
  end if;
  select coalesce(is_paid, false) into v_is_paid from public.events where id = p_wedding;
  if v_is_paid then
    select * into v_ticket from public.event_tickets t
    where t.wedding_id = p_wedding and t.buyer_id = v_scan.user_id
    order by (t.status = 'paid') desc, t.paid_at desc nulls last limit 1
    for update;
    if v_ticket.id is null or v_ticket.status <> 'paid' then
      return jsonb_build_object('result', case when v_ticket.status = 'refunded' then 'refunded' else 'not_paid' end);
    end if;
  end if;
  select checked_in_at into v_already from public.event_checkins where wedding_id = p_wedding and user_id = v_scan.user_id;
  v_already := coalesce(v_already, v_ticket.checked_in_at);
  if v_already is null then
    insert into public.event_checkins (wedding_id, user_id, checked_in_by) values (p_wedding, v_scan.user_id, auth.uid())
    on conflict do nothing;
    if v_ticket.id is not null then
      update public.event_tickets set checked_in_at = now(), checked_in_by = auth.uid() where id = v_ticket.id;
    end if;
  end if;
  return jsonb_build_object(
    'result', case when v_already is null then 'ok' else 'already' end,
    'quantity', coalesce(v_ticket.quantity, 1),
    'checked_in_at', coalesce(v_already, now())
  );
end;
$$;
revoke execute on function public.scan_check_in(uuid, uuid) from public, anon;
grant execute on function public.scan_check_in(uuid, uuid) to authenticated;

-- Registar a chegada a uma marcação minha (parceiro).
create or replace function public.scan_booking_arrival(p_scan uuid, p_booking uuid)
returns jsonb
language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v_scan public.qr_scans%rowtype;
  v_wedding uuid;
  v_already timestamptz;
begin
  select * into v_scan from public.valid_scan(p_scan, auth.uid());
  if v_scan.id is null then
    return jsonb_build_object('result', 'expired');
  end if;
  select wedding_id into v_wedding from public.bookings
  where id = p_booking and partner_id = auth.uid() and status in ('confirmed', 'completed');
  if v_wedding is null then
    return jsonb_build_object('result', 'not_partner');
  end if;
  if not public.attends_event(v_scan.user_id, v_wedding) then
    return jsonb_build_object('result', 'not_found');
  end if;
  select arrived_at into v_already from public.booking_arrivals where booking_id = p_booking and user_id = v_scan.user_id;
  if v_already is null then
    insert into public.booking_arrivals (booking_id, user_id, marked_by) values (p_booking, v_scan.user_id, auth.uid())
    on conflict do nothing;
  end if;
  return jsonb_build_object('result', case when v_already is null then 'ok' else 'already' end,
                            'arrived_at', coalesce(v_already, now()));
end;
$$;
revoke execute on function public.scan_booking_arrival(uuid, uuid) from public, anon;
grant execute on function public.scan_booking_arrival(uuid, uuid) to authenticated;

-- Apps antigas do organizador: lêem o QR novo e chamam check_in_ticket.
-- Regista a entrada no evento mais próximo que essa pessoa organiza.
create or replace function public.check_in_ticket(p_code text)
returns jsonb
language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v_scan jsonb := public.scan_qr(p_code);
  v_item jsonb;
  v_res jsonb;
begin
  if v_scan ->> 'result' <> 'ok' then
    return jsonb_build_object('result', 'not_found');
  end if;
  select value into v_item from jsonb_array_elements(v_scan -> 'items') where value ->> 'kind' = 'entry' limit 1;
  if v_item is null then
    return jsonb_build_object('result', 'not_organizer');
  end if;
  v_res := public.scan_check_in((v_scan ->> 'scan_id')::uuid, (v_item ->> 'wedding_id')::uuid);
  return v_res || jsonb_build_object('name', v_scan ->> 'name', 'event', v_item ->> 'event');
end;
$$;
revoke execute on function public.check_in_ticket(text) from public, anon;
grant execute on function public.check_in_ticket(text) to authenticated;

-- ---------- Página «Entrada»: onde o meu QR dá entrada ----------
-- Pedido do utilizador (2026-11-23): "faz a pagina entrada do codigo qr para
-- todos os eventos, updates to all". Um QR, todos os eventos: os que
-- organizo e aqueles a que vou, com data, local, mesa (quando já revelada)
-- e o estado (entrada registada, chegadas às marcações dos parceiros).
create or replace function public.my_entries()
returns jsonb
language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce(jsonb_agg(x.item order by x.d nulls last, x.n), '[]'::jsonb)
  from (
    select e.wedding_date as d, public.event_label(e.id) as n, jsonb_build_object(
      'event_id', e.id,
      'event', public.event_label(e.id),
      'date', e.wedding_date,
      'location', nullif(trim(e.location), ''),
      'role', case when e.owner_id = (select auth.uid()) then 'organizer' else 'guest' end,
      'is_paid', coalesce(e.is_paid, false),
      'ticket', (select jsonb_build_object('status', t.status, 'quantity', t.quantity)
                 from public.event_tickets t where t.wedding_id = e.id and t.buyer_id = (select auth.uid())
                 order by (t.status = 'paid') desc, t.paid_at desc nulls last limit 1),
      'table', case when coalesce(e.guest_sections ->> 'mesa', 'true') <> 'false'
                     and case coalesce(e.guest_sections ->> 'opt_table_reveal', 'now')
                           when 'week' then e.wedding_date is null or current_date >= e.wedding_date - 7
                           when 'day' then e.wedding_date is null or current_date >= e.wedding_date
                           else true end
                    then (select st.position + 1 from public.seating_tables st
                          join public.guests g on g.wedding_id = st.wedding_id and g.id = any(st.guest_ids)
                          where st.wedding_id = e.id and g.linked_profile_id = (select auth.uid()) limit 1)
                  end,
      'checked_in_at', coalesce(
        (select c.checked_in_at from public.event_checkins c where c.wedding_id = e.id and c.user_id = (select auth.uid())),
        (select t.checked_in_at from public.event_tickets t
         where t.wedding_id = e.id and t.buyer_id = (select auth.uid()) and t.status = 'paid'
         order by t.paid_at desc nulls last limit 1)),
      'arrivals', coalesce((
        select jsonb_agg(jsonb_build_object('partner', coalesce(nullif(trim(pp.business_name), ''), 'Parceiro'), 'at', a.arrived_at)
                         order by a.arrived_at)
        from public.booking_arrivals a
        join public.bookings b on b.id = a.booking_id
        join public.partner_profiles pp on pp.id = b.partner_id
        where b.wedding_id = e.id and a.user_id = (select auth.uid())), '[]'::jsonb)
    ) as item
    from public.events e
    where public.attends_event((select auth.uid()), e.id)
      and e.cancelled_at is null
      and e.archived_at is null
      and (e.wedding_date is null or e.wedding_date >= current_date - 1)
  ) x;
$$;
revoke execute on function public.my_entries() from public, anon;
grant execute on function public.my_entries() to authenticated;

-- «Updates to all»: a página «Entrada» de quem tem o QR muda logo que um
-- organizador ou parceiro regista a entrada ou a chegada (Supabase Realtime;
-- cada um só recebe as linhas que a RLS lhe deixa ler).
do $$
declare
  t text;
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    foreach t in array array['event_checkins', 'booking_arrivals', 'event_tickets'] loop
      if not exists (select 1 from pg_publication_tables
                     where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t) then
        execute format('alter publication supabase_realtime add table public.%I', t);
      end if;
    end loop;
  end if;
end $$;

commit;
