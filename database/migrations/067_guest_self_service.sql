-- ============================================================
-- Módulo: Guest self-service (perfil do próprio convidado)
-- ============================================================
--
-- Até agora, uma conta de convidado (`wedding_guest_members`, ligada a
-- `auth.uid()`) e uma linha de `guests` (a entrada na lista de
-- convidados do casal, sem conta própria) eram dois conceitos
-- completamente separados — nada ligava "o utilizador que iniciou
-- sessão" à linha da lista de convidados que é ele. Sem isso, um
-- convidado autenticado não tinha como ver/editar o seu próprio
-- acompanhante, restrições alimentares, telefone ou mesa atribuída.

alter table public.guests
  add column linked_profile_id uuid references public.profiles(id) on delete set null;

create unique index guests_linked_profile_unique
  on public.guests (wedding_id, linked_profile_id)
  where linked_profile_id is not null;

-- O convidado só vê a sua própria linha (nunca as dos outros convidados
-- do mesmo casamento) — política adicional à já existente ("Members
-- manage guests", só para o casal, `004_guests.sql`).
create policy "Guest can view own row"
  on public.guests for select
  using (linked_profile_id = auth.uid());

-- join_wedding_by_code() ganha um segundo passo best-effort: tenta
-- ligar automaticamente a linha de `guests` cujo email coincide com o
-- da conta que acabou de entrar. Convidados sem email registado na
-- lista, ou com um email diferente do da conta, ficam sem ligação
-- automática — o ecrã de perfil trata esse caso com um estado vazio
-- em vez de assumir dados errados.
create or replace function public.join_wedding_by_code(p_code text)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_wedding_id uuid;
  v_email text;
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

  select email into v_email from auth.users where id = auth.uid();
  if v_email is not null then
    update public.guests
    set linked_profile_id = auth.uid()
    where wedding_id = v_wedding_id
      and linked_profile_id is null
      and lower(email) = lower(v_email);
  end if;

  return v_wedding_id;
end;
$$;

-- update_own_guest_info() — RPC dedicada em vez de GRANT UPDATE direto
-- em `guests`: um convidado só pode alterar os campos que dizem
-- respeito à própria presença (telefone, restrições, nome do
-- acompanhante), nunca `rsvp_status`, `wedding_id` ou qualquer outro
-- campo gerido pelo casal — RLS não filtra colunas, só linhas, por
-- isso a única forma segura de limitar isto é uma função própria.
create or replace function public.update_own_guest_info(
  p_phone text,
  p_dietary_restrictions text,
  p_plus_one_name text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  update public.guests
  set phone = p_phone,
      dietary_restrictions = p_dietary_restrictions,
      plus_one_name = p_plus_one_name,
      updated_at = now()
  where linked_profile_id = auth.uid();
end;
$$;

revoke execute on function public.update_own_guest_info(text, text, text) from public, anon;
grant execute on function public.update_own_guest_info(text, text, text) to authenticated;

-- get_my_seating_table() — número da mesa (1-indexado, mesma numeração
-- de `seating_screen.dart`, `tableNumber: index + 1`) do convidado
-- autenticado, sem expor o resto do mapa de lugares (a policy de
-- `seating_tables` continua restrita ao casal).
create or replace function public.get_my_seating_table(p_wedding_id uuid)
returns int
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select t.position + 1
  from public.seating_tables t
  join public.guests g on g.wedding_id = t.wedding_id
  where t.wedding_id = p_wedding_id
    and g.linked_profile_id = auth.uid()
    and g.id = any(t.guest_ids)
  limit 1;
$$;

revoke execute on function public.get_my_seating_table(uuid) from public, anon;
grant execute on function public.get_my_seating_table(uuid) to authenticated;

-- Novos campos de "Detalhes do casamento" mostrados ao convidado —
-- opcionais, sem ecrã de edição próprio ainda (fora desta ronda); só a
-- coluna e a leitura ficam prontas agora.
alter table public.weddings
  add column ceremony_time text,
  add column welcome_message text,
  add column theme_colors text[];
