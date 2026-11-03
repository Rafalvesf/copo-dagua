-- ============================================================
-- 158 — Bilhete com código QR + o que os convidados veem
-- ============================================================
-- Pedido do utilizador (2026-11-03): "apos pagar o bilhete deves conseguir
-- ver um codigo QR" e "o organizador conseguir editar o que apresentar aos
-- convidados, como galeria, presentes, etc".
--
--   • Cada bilhete pago tem um código de entrada (no QR). O organizador
--     lê o QR com a câmara do telemóvel: abre a app e marca a entrada.
--   • weddings.guest_sections: que partes da página do evento os
--     convidados veem (programa, mesa, presentes, galeria, grupos,
--     estadia). Tudo desligado = só o bilhete.
--
-- Corre DEPOIS da 152 (bilhetes e reembolsos).

begin;

-- ---------- Código de entrada ----------
create or replace function public.gen_ticket_code()
returns text language plpgsql volatile set search_path = public, pg_temp as $$
declare
  alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  v text;
begin
  loop
    v := '';
    for i in 1..10 loop
      v := v || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
    end loop;
    exit when not exists (select 1 from public.event_tickets where check_in_code = v);
  end loop;
  return v;
end;
$$;
revoke all on function public.gen_ticket_code() from public, anon, authenticated;

alter table public.event_tickets
  add column if not exists check_in_code text,
  add column if not exists checked_in_at timestamptz,
  add column if not exists checked_in_by uuid references public.profiles(id) on delete set null;
update public.event_tickets set check_in_code = public.gen_ticket_code() where check_in_code is null;
alter table public.event_tickets alter column check_in_code set default public.gen_ticket_code();
alter table public.event_tickets alter column check_in_code set not null;
create unique index if not exists event_tickets_check_in_code_idx on public.event_tickets (check_in_code);

-- ---------- O que os convidados veem ----------
-- Chave a false = escondido. Chaves que faltam = visíveis.
alter table public.weddings
  add column if not exists guest_sections jsonb not null default '{}'::jsonb;

-- O convidado: o que mostrar e o meu bilhete (se o evento for pago).
create or replace function public.my_event_pass(p_wedding uuid)
returns jsonb
language sql stable security definer set search_path = public, pg_temp as $$
  select jsonb_build_object(
    'sections', coalesce(w.guest_sections, '{}'::jsonb),
    'is_paid', coalesce(w.is_paid, false),
    'ticket', (
      select jsonb_build_object('id', t.id, 'quantity', t.quantity, 'code', t.check_in_code,
                                'checked_in_at', t.checked_in_at, 'paid_at', t.paid_at)
      from public.event_tickets t
      where t.wedding_id = w.id and t.buyer_id = (select auth.uid()) and t.status = 'paid'
      order by t.paid_at desc nulls last limit 1
    )
  )
  from public.weddings w
  where w.id = p_wedding
    and (exists (select 1 from public.wedding_guest_members m where m.wedding_id = w.id and m.guest_id = (select auth.uid()))
         or public.is_wedding_member(w.id));
$$;
revoke execute on function public.my_event_pass(uuid) from public, anon;
grant execute on function public.my_event_pass(uuid) to authenticated;

-- O organizador guarda o que os convidados veem.
create or replace function public.set_guest_sections(p_wedding uuid, p_sections jsonb)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if not public.is_wedding_member(p_wedding) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if jsonb_typeof(p_sections) <> 'object' or pg_column_size(p_sections) > 1000 then
    raise exception 'invalid_sections' using errcode = 'P0001';
  end if;
  update public.weddings set guest_sections = p_sections, updated_at = now() where id = p_wedding;
end;
$$;
revoke execute on function public.set_guest_sections(uuid, jsonb) from public, anon;
grant execute on function public.set_guest_sections(uuid, jsonb) to authenticated;

-- ---------- Validar a entrada (organizador lê o QR) ----------
create or replace function public.check_in_ticket(p_code text)
returns jsonb
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_t record;
  v_name text;
  v_event text;
  v_already timestamptz;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select * into v_t from public.event_tickets where check_in_code = upper(trim(p_code)) for update;
  if v_t is null then
    return jsonb_build_object('result', 'not_found');
  end if;
  if not public.is_wedding_member(v_t.wedding_id) then
    return jsonb_build_object('result', 'not_organizer');
  end if;
  select coalesce(nullif(trim(full_name), ''), 'Convidado') into v_name from public.profiles where id = v_t.buyer_id;
  select coalesce(nullif(concat_ws(' & ', nullif(partner_name_1, ''), nullif(partner_name_2, '')), ''), 'Evento')
    into v_event from public.weddings where id = v_t.wedding_id;
  if v_t.status <> 'paid' then
    return jsonb_build_object('result', case when v_t.status = 'refunded' then 'refunded' else 'not_paid' end,
                              'name', v_name, 'quantity', v_t.quantity, 'event', v_event);
  end if;
  v_already := v_t.checked_in_at;
  if v_already is null then
    update public.event_tickets set checked_in_at = now(), checked_in_by = auth.uid() where id = v_t.id;
  end if;
  return jsonb_build_object(
    'result', case when v_already is null then 'ok' else 'already' end,
    'name', v_name, 'quantity', v_t.quantity, 'event', v_event,
    'checked_in_at', coalesce(v_already, now())
  );
end;
$$;
revoke execute on function public.check_in_ticket(text) from public, anon;
grant execute on function public.check_in_ticket(text) to authenticated;

-- Lista do organizador com a entrada (substitui a da 152; mais uma coluna).
drop function if exists public.event_ticket_list(uuid);
create or replace function public.event_ticket_list(p_wedding uuid)
returns table (id uuid, buyer_name text, quantity int, amount numeric, status text, paid_at timestamptz,
               refunded_at timestamptz, checked_in_at timestamptz)
language sql stable security definer set search_path = public, pg_temp as $$
  select t.id, coalesce(p.full_name, 'Convidado'), t.quantity, t.amount, t.status, t.paid_at, t.refunded_at, t.checked_in_at
  from public.event_tickets t
  left join public.profiles p on p.id = t.buyer_id
  where t.wedding_id = p_wedding and t.status in ('paid', 'refunded') and public.is_wedding_member(p_wedding)
  order by coalesce(t.paid_at, t.created_at) desc;
$$;
revoke execute on function public.event_ticket_list(uuid) from public, anon;
grant execute on function public.event_ticket_list(uuid) to authenticated;

commit;
