-- ============================================================
-- 156 — Envelope digital
-- ============================================================
-- Pedido do utilizador (2026-11-03): "os convidados oferecem e enviam
-- dinheiro diretamente para o IBAN". O dinheiro NÃO passa pela À Nossa!
-- (transferência do convidado para o IBAN dos anfitriões, sem comissão).
-- A app guarda só o "envelope": quem ofereceu, quanto e a mensagem, para os
-- anfitriões saberem, confirmarem que chegou e agradecerem.
-- Independente das outras migrações.

begin;

create table if not exists public.gift_envelopes (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  guest_profile_id uuid not null references public.profiles(id) on delete cascade,
  guest_name text not null,
  amount numeric(10,2) not null check (amount > 0 and amount <= 100000),
  message text check (length(message) <= 600),
  received boolean not null default false,
  thanked boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists gift_envelopes_wedding_idx on public.gift_envelopes (wedding_id, created_at desc);

alter table public.gift_envelopes enable row level security;
drop policy if exists "Guest or hosts read envelopes" on public.gift_envelopes;
create policy "Guest or hosts read envelopes" on public.gift_envelopes for select to authenticated
  using (guest_profile_id = (select auth.uid()) or public.is_wedding_member(wedding_id) or public.is_admin());
-- Escrita só pelas funções abaixo.

-- Convidado: "Já fiz a transferência".
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

  insert into public.notifications (profile_id, type, title, body, link)
  select w.owner_id, 'gift_envelope', 'Envelope de ' || v_name,
         replace(to_char(round(p_amount, 2), 'FM999990.00'), '.', ',') || ' € por transferência para o vosso IBAN.' ||
         coalesce(' «' || left(nullif(trim(p_message), ''), 120) || '»', ''),
         '/envelopes'
  from public.weddings w where w.id = p_wedding;
  return v_id;
end;
$$;
revoke execute on function public.send_gift_envelope(uuid, numeric, text) from public, anon;
grant execute on function public.send_gift_envelope(uuid, numeric, text) to authenticated;

-- Anfitriões: "Chegou" e "Agradecido".
create or replace function public.update_gift_envelope(p_id uuid, p_received boolean default null, p_thanked boolean default null)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_wedding uuid;
begin
  select wedding_id into v_wedding from public.gift_envelopes where id = p_id;
  if v_wedding is null or not public.is_wedding_member(v_wedding) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  update public.gift_envelopes
  set received = coalesce(p_received, received), thanked = coalesce(p_thanked, thanked)
  where id = p_id;
end;
$$;
revoke execute on function public.update_gift_envelope(uuid, boolean, boolean) from public, anon;
grant execute on function public.update_gift_envelope(uuid, boolean, boolean) to authenticated;

commit;
