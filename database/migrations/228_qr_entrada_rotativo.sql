-- ============================================================
-- 228 — QR de entrada rotativo (evento + utilizador)
-- ============================================================
-- Pedido do utilizador (2026-11-23): o QR de cada evento é gerado para o
-- par evento + utilizador e não pode ser copiado nem reutilizado por
-- outra pessoa. Até aqui o QR levava um código fixo (migração 158):
-- quem tivesse um screenshot entrava no lugar de outro.
--
-- Como funciona agora (estilo TOTP, mas o segredo nunca sai do servidor):
--   • event_passes: uma linha por evento + utilizador, com um código curto
--     e um segredo aleatório de 32 bytes. Sem políticas RLS e sem grants:
--     ninguém lê a tabela diretamente, só estas funções.
--   • my_entry_qr(evento): a app pede o token da janela atual de 30 s:
--         CÓDIGO.JANELA.HMAC   (HMAC-SHA256(segredo, id:janela), 16 hex)
--     e pede outro quando a janela acaba. Um screenshot deixa de servir
--     passado ~1 minuto.
--   • check_in_entry(token): o organizador (permissão «bilhetes») lê o QR.
--     O servidor confirma o HMAC, aceita a janela atual ±1 (relógio e
--     leitura lenta) e regista a entrada UMA vez. Nos eventos pagos exige
--     bilhete pago e marca também o bilhete.
--   • check_in_ticket(código) (158) passa a usar check_in_entry: os
--     códigos fixos antigos deixam de dar entrada (decisão por omissão,
--     2026-11-23 — o utilizador não escolheu e seguiu-se a recomendada);
--     apps antigas do organizador continuam a ler os QR novos.
--
-- Corre DEPOIS da 227.

begin;

create table if not exists public.event_passes (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.events(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  code text not null unique,
  secret bytea not null default extensions.gen_random_bytes(32),
  checked_in_at timestamptz,
  checked_in_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (wedding_id, user_id)
);
alter table public.event_passes enable row level security;
-- Sem políticas de propósito: o segredo só é usado dentro das funções.
revoke all on table public.event_passes from public, anon, authenticated;

create or replace function public.gen_pass_code()
returns text language plpgsql volatile set search_path = public, pg_temp as $$
declare
  alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  v text;
begin
  loop
    v := '';
    for i in 1..10 loop
      v := v || substr(alphabet, 1 + (get_byte(extensions.gen_random_bytes(1), 0) % length(alphabet)), 1);
    end loop;
    exit when not exists (select 1 from public.event_passes where code = v);
  end loop;
  return v;
end;
$$;
revoke all on function public.gen_pass_code() from public, anon, authenticated;

-- HMAC de uma janela (16 hex = 64 bits). Só para uso interno.
create or replace function public.entry_pass_mac(p_id uuid, p_secret bytea, p_window bigint)
returns text language sql immutable set search_path = public, pg_temp as $$
  select left(encode(extensions.hmac(convert_to(p_id::text || ':' || p_window::text, 'UTF8'), p_secret, 'sha256'), 'hex'), 16);
$$;
revoke all on function public.entry_pass_mac(uuid, bytea, bigint) from public, anon, authenticated;

-- ---------- O convidado: token da janela atual ----------
create or replace function public.my_entry_qr(p_wedding uuid)
returns jsonb
language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v_uid uuid := auth.uid();
  v_is_paid boolean;
  v_ticket public.event_tickets%rowtype;
  v_pass public.event_passes%rowtype;
  v_epoch numeric := extract(epoch from clock_timestamp());
  v_window bigint := floor(v_epoch / 30);
begin
  if v_uid is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select coalesce(is_paid, false) into v_is_paid from public.events where id = p_wedding;
  if not found then
    return jsonb_build_object('result', 'not_found');
  end if;

  select * into v_ticket
  from public.event_tickets t
  where t.wedding_id = p_wedding and t.buyer_id = v_uid and t.status = 'paid'
  order by t.paid_at desc nulls last limit 1;

  if v_is_paid then
    if v_ticket.id is null then
      return jsonb_build_object('result', 'no_ticket');
    end if;
  elsif not exists (select 1 from public.wedding_guest_members m where m.wedding_id = p_wedding and m.guest_id = v_uid) then
    return jsonb_build_object('result', 'not_guest');
  end if;

  insert into public.event_passes (wedding_id, user_id, code)
  values (p_wedding, v_uid, public.gen_pass_code())
  on conflict (wedding_id, user_id) do nothing;
  select * into v_pass from public.event_passes where wedding_id = p_wedding and user_id = v_uid;

  return jsonb_build_object(
    'result', 'ok',
    'token', v_pass.code || '.' || v_window || '.' || public.entry_pass_mac(v_pass.id, v_pass.secret, v_window),
    -- Segundos até esta janela acabar: a app pede o próximo nessa altura.
    'refresh_in', greatest(1, ceil((v_window + 1) * 30 - v_epoch))::int,
    'quantity', coalesce(v_ticket.quantity, 1),
    'checked_in_at', coalesce(v_pass.checked_in_at, v_ticket.checked_in_at)
  );
end;
$$;
revoke execute on function public.my_entry_qr(uuid) from public, anon;
grant execute on function public.my_entry_qr(uuid) to authenticated;

-- ---------- O organizador lê o QR ----------
create or replace function public.check_in_entry(p_token text)
returns jsonb
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_parts text[];
  v_window bigint;
  v_now_window bigint := floor(extract(epoch from clock_timestamp()) / 30);
  v_pass public.event_passes%rowtype;
  v_ticket public.event_tickets%rowtype;
  v_is_paid boolean;
  v_name text;
  v_event text;
  v_already timestamptz;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  v_parts := string_to_array(trim(coalesce(p_token, '')), '.');
  if coalesce(array_length(v_parts, 1), 0) <> 3
     or v_parts[2] !~ '^[0-9]{1,12}$' or v_parts[3] !~ '^[0-9a-fA-F]{16}$' then
    -- Código fixo antigo (158) ou texto qualquer.
    return jsonb_build_object('result', 'not_found');
  end if;
  v_window := v_parts[2]::bigint;

  select * into v_pass from public.event_passes where code = upper(v_parts[1]) for update;
  if not found then
    return jsonb_build_object('result', 'not_found');
  end if;
  if not public.wedding_can(v_pass.wedding_id, 'bilhetes') then
    return jsonb_build_object('result', 'not_organizer');
  end if;
  -- HMAC antes da janela: um token falso nunca ouve «expirado».
  if public.entry_pass_mac(v_pass.id, v_pass.secret, v_window) <> lower(v_parts[3]) then
    return jsonb_build_object('result', 'not_found');
  end if;

  select coalesce(nullif(trim(full_name), ''), 'Convidado') into v_name from public.profiles where id = v_pass.user_id;
  select coalesce(nullif(concat_ws(' & ', nullif(partner_name_1, ''), nullif(partner_name_2, '')), ''), 'Evento'),
         coalesce(is_paid, false)
    into v_event, v_is_paid
    from public.events where id = v_pass.wedding_id;

  if abs(v_now_window - v_window) > 1 then
    return jsonb_build_object('result', 'expired', 'name', v_name, 'event', v_event);
  end if;

  if v_is_paid then
    select * into v_ticket from public.event_tickets t
    where t.wedding_id = v_pass.wedding_id and t.buyer_id = v_pass.user_id
    order by (t.status = 'paid') desc, t.paid_at desc nulls last limit 1
    for update;
    if v_ticket.id is null or v_ticket.status <> 'paid' then
      return jsonb_build_object('result', case when v_ticket.status = 'refunded' then 'refunded' else 'not_paid' end,
                                'name', v_name, 'quantity', coalesce(v_ticket.quantity, 1), 'event', v_event);
    end if;
  end if;

  v_already := coalesce(v_pass.checked_in_at, v_ticket.checked_in_at);
  if v_already is null then
    update public.event_passes set checked_in_at = now(), checked_in_by = auth.uid() where id = v_pass.id;
    if v_ticket.id is not null then
      update public.event_tickets set checked_in_at = now(), checked_in_by = auth.uid() where id = v_ticket.id;
    end if;
  end if;
  return jsonb_build_object(
    'result', case when v_already is null then 'ok' else 'already' end,
    'name', v_name, 'quantity', coalesce(v_ticket.quantity, 1), 'event', v_event,
    'checked_in_at', coalesce(v_already, now())
  );
end;
$$;
revoke execute on function public.check_in_entry(text) from public, anon;
grant execute on function public.check_in_entry(text) to authenticated;

-- Apps antigas do organizador chamam check_in_ticket com o que leram no QR.
-- Passa a aceitar só o token rotativo; os códigos fixos dão «not_found».
create or replace function public.check_in_ticket(p_code text)
returns jsonb
language sql security definer set search_path = public, pg_temp as $$
  select public.check_in_entry(p_code);
$$;
revoke execute on function public.check_in_ticket(text) from public, anon;
grant execute on function public.check_in_ticket(text) to authenticated;

commit;
