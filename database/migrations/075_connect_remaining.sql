-- ============================================================
-- 075 — ligar o que ainda estava por ligar na app (2026-10-16)
-- ============================================================
--
-- Pedido do utilizador: "conecta toda a lógica da app que falta".
-- Tudo aqui é aditivo (colunas novas/funções novas), seguro correr mais
-- do que uma vez.

-- ------------------------------------------------------------
-- 1. Presentes — o separador "Presentes" do convidado só mostrava
--    "Em breve". O casal passa a poder indicar uma lista de presentes
--    (link) e/ou um IBAN para contribuições, e uma mensagem.
--    A leitura pelos convidados usa a mesma ligação que já existe
--    (`wedding_guest_members` → `weddings`), por isso não precisa de
--    policy nova.
-- ------------------------------------------------------------
alter table public.weddings add column if not exists gift_list_url text;
alter table public.weddings add column if not exists gift_iban text;
alter table public.weddings add column if not exists gift_message text;

-- ------------------------------------------------------------
-- 2. Distância máxima de deslocação do parceiro — o campo existia no
--    ecrã ("Em breve") mas não havia coluna.
-- ------------------------------------------------------------
alter table public.partner_profiles
  add column if not exists max_travel_distance_km integer
  check (max_travel_distance_km is null or max_travel_distance_km between 1 and 2000);

-- ------------------------------------------------------------
-- 3. Menu do convidado — `guests.menu_selection` já existia (073) mas
--    o convidado só o podia escrever no assistente inicial. Mesma
--    regra de `update_own_guest_info()` (067): só a própria linha, só
--    este campo.
-- ------------------------------------------------------------
create or replace function public.update_own_guest_menu(p_menu_selection text)
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
  set menu_selection = nullif(trim(p_menu_selection), ''),
      updated_at = now()
  where linked_profile_id = auth.uid();
end;
$$;

revoke execute on function public.update_own_guest_menu(text) from public, anon;
grant execute on function public.update_own_guest_menu(text) to authenticated;

-- ------------------------------------------------------------
-- 4. Página pública de convite (`/invite/<código>`) — antes lia um
--    casamento de exemplo em memória (MockBackend) e o link partilhado
--    apontava para um domínio que não existe. Agora usa o código de
--    convidado real (050). Público (`anon`) como
--    `lookup_wedding_by_guest_code()`: só devolve o que já aparece no
--    convite (nomes, data, local, foto), nada sensível.
-- ------------------------------------------------------------
create or replace function public.get_public_invite(p_code text)
returns table (
  wedding_id uuid,
  partner_name_1 text,
  partner_name_2 text,
  wedding_date date,
  location text,
  venue text,
  cover_photo_url text,
  quote text,
  guest_code text
)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select id, partner_name_1, partner_name_2, wedding_date, location, venue,
         cover_photo_url, quote, guest_code
  from public.weddings
  where guest_code = upper(trim(p_code));
$$;

grant execute on function public.get_public_invite(text) to anon, authenticated;
