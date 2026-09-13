-- ============================================================
-- Guests — RSVP público por token (mobile-app/guests/api.md,
-- get-rsvp-by-token / submit-rsvp), a página pública de RSVP que
-- `guest_detail_screen.dart` documentava como "fora desta primeira
-- versão" (simulação manual dentro da app, "Reenviar convite" era um
-- botão sem efeito nenhum).
-- ============================================================
-- `guests.rsvp_token` já existia desde 004_guests.sql (uuid, único,
-- gerado automaticamente) — nunca tinha nenhuma função pública por
-- trás. As duas funções abaixo são a única superfície desta base de
-- dados acessível sem sessão nenhuma (mesmo aviso já documentado em
-- api.md, "Risco técnico") — por isso só têm `execute` para
-- `service_role`, nunca `anon`/`authenticated`: quem as chama é sempre
-- a Edge Function (`get-rsvp-by-token`/`submit-rsvp`), nunca o cliente
-- diretamente, mesmo padrão de `confirm_stripe_deposit_payment()`
-- (021_stripe_connect.sql) — a autenticação real aqui é "conhecer o
-- token", não uma sessão Supabase.

create table public.rsvp_attempts (
  id bigint generated always as identity primary key,
  ip_address inet,
  token uuid,
  event_type text not null check (event_type in ('lookup', 'submit')),
  success boolean not null,
  attempted_at timestamptz not null default now()
);

create index rsvp_attempts_ip_idx on public.rsvp_attempts (ip_address, attempted_at);

-- Mesmo padrão de `login_attempts` (001_authentication.sql, corrigido
-- 2026-08-30 por não ter RLS nenhuma): nunca deve ter grants de
-- cliente, a escrita é sempre via `service_role` (que ignora RLS por
-- completo), só existe aqui para o admin poder auditar abuso.
alter table public.rsvp_attempts enable row level security;

create policy "Admins can view rsvp attempts"
  on public.rsvp_attempts for select
  using (public.is_admin());

create or replace function public.get_rsvp_by_token(p_token uuid)
returns table (
  guest_name text,
  plus_one_allowed boolean,
  plus_one_name text,
  dietary_restrictions text,
  guest_message text,
  rsvp_status rsvp_status,
  wedding_partner_name_1 text,
  wedding_partner_name_2 text,
  wedding_date date,
  wedding_location text
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  return query
  select
    g.full_name, g.plus_one_allowed, g.plus_one_name, g.dietary_restrictions,
    g.guest_message, g.rsvp_status,
    w.partner_name_1, w.partner_name_2, w.wedding_date, w.location
  from public.guests g
  join public.weddings w on w.id = g.wedding_id
  where g.rsvp_token = p_token;
end;
$$;

-- `p_rsvp_status` restrito a 'confirmed'/'declined' — um convidado nunca
-- deve conseguir escrever-se de volta a 'pending'/'invited' (esses são
-- geridos pelo casal, RN da máquina de estados do módulo). `plus_one_name`
-- só é gravado quando `plus_one_allowed`, mesmo que enviado — nunca dar
-- a um convidado sem acompanhante permitido uma forma de inserir um na
-- mesma.
create or replace function public.submit_rsvp(
  p_token uuid, p_rsvp_status text, p_plus_one_name text,
  p_dietary_restrictions text, p_guest_message text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_guest record;
begin
  if p_rsvp_status not in ('confirmed', 'declined') then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select * into v_guest from public.guests where rsvp_token = p_token for update;
  if v_guest is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;

  update public.guests set
    rsvp_status = p_rsvp_status::rsvp_status,
    plus_one_name = case when v_guest.plus_one_allowed then p_plus_one_name else null end,
    dietary_restrictions = p_dietary_restrictions,
    guest_message = p_guest_message,
    rsvp_responded_at = now(),
    updated_at = now()
  where id = v_guest.id;
end;
$$;

revoke execute on function public.get_rsvp_by_token(uuid) from public, anon, authenticated;
revoke execute on function public.submit_rsvp(uuid, text, text, text, text) from public, anon, authenticated;
grant execute on function public.get_rsvp_by_token(uuid) to service_role;
grant execute on function public.submit_rsvp(uuid, text, text, text, text) to service_role;
