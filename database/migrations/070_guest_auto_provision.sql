-- ============================================================
-- Guests — auto-provisionar entrada na lista quando ninguém
-- corresponde por email
-- ============================================================
--
-- Pedido explícito do utilizador (2026-09-14): quem entra por um
-- link/código de casamento REAL (`join_wedding_by_code()`, já
-- autenticado) deve ficar sempre com uma linha em `guests` própria,
-- em vez de poder ficar "sem entrada encontrada" quando o casal não
-- tinha adicionado esse email antecipadamente. `067_guest_self_service.sql`
-- só tentava LIGAR a uma linha já existente (match por email); esta
-- versão, quando não encontra nenhuma, CRIA uma nova linha a partir do
-- nome/email reais da conta — nunca a partir de dados inventados, e só
-- para quem passou mesmo por este RPC (nunca para convidados
-- adicionados à mão pelo casal sem conta).
--
-- `side` fica `both` e `companions_limit`/`plus_one_allowed` ficam nos
-- valores por omissão (sem acompanhante) — o casal continua a poder
-- editar a linha depois, exatamente como qualquer outro convidado.

create or replace function public.join_wedding_by_code(p_code text)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_wedding_id uuid;
  v_email text;
  v_full_name text;
  v_matched_guest_id uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select id into v_wedding_id from public.weddings where guest_code = upper(trim(p_code));
  if v_wedding_id is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;

  insert into public.wedding_guest_members (wedding_id, guest_id)
  values (v_wedding_id, auth.uid())
  on conflict (wedding_id, guest_id) do nothing;

  select u.email, p.full_name
  into v_email, v_full_name
  from auth.users u
  join public.profiles p on p.id = u.id
  where u.id = auth.uid();

  if v_email is not null then
    update public.guests
    set linked_profile_id = auth.uid()
    where wedding_id = v_wedding_id
      and linked_profile_id is null
      and lower(email) = lower(v_email)
    returning id into v_matched_guest_id;
  end if;

  if v_matched_guest_id is null then
    insert into public.guests (wedding_id, full_name, email, linked_profile_id)
    values (v_wedding_id, coalesce(v_full_name, 'Convidado'), v_email, auth.uid())
    returning id into v_matched_guest_id;
  end if;

  return v_wedding_id;
end;
$$;
