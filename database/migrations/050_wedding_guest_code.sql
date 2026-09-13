-- ============================================================
-- Guests — código do casal para ligar uma conta de convidado
-- ============================================================
--
-- Pedido explícito do utilizador (2026-09-04): "quando crias conta deve
-- aparecer uma secção para colocar um referal code do casal! bem mais
-- eficaz" — reforça o que já tinha sido descrito antes (código composto
-- pelo nome de ambos + número gerado). Distinto de propósito do RSVP por
-- token de `mobile-app/guests/` (RN02 em requirements.md continua
-- válida: confirmar presença nunca exige conta) — isto liga uma conta
-- `UserRole.guest` (`048_guest_role.sql`, `role_selection_screen.dart`
-- "Sou convidado") a um casamento específico, para o convidado poder ver
-- o casamento de que faz parte sempre que voltar a entrar.

alter table public.weddings add column guest_code text unique;

-- Gerado automaticamente na criação do casamento (trigger, em vez de
-- exigir alteração ao `insert` já existente em
-- `core/wedding/wedding_controller.dart`) — nomes + número de 4 dígitos,
-- tal como descrito pelo utilizador. Repete até encontrar um código
-- livre (colisão extremamente rara, mas o nome sozinho não é garantido
-- único entre casais diferentes).
create or replace function public.set_wedding_guest_code()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
declare
  v_base text;
  v_code text;
begin
  if new.guest_code is not null then
    return new;
  end if;

  v_base := upper(regexp_replace(coalesce(new.partner_name_1, 'CASAL'), '[^A-Za-z]', '', 'g'));
  if new.partner_name_2 is not null and new.partner_name_2 <> '' then
    v_base := v_base || '-' || upper(regexp_replace(new.partner_name_2, '[^A-Za-z]', '', 'g'));
  end if;
  if v_base = '' then
    v_base := 'CASAL';
  end if;

  loop
    v_code := v_base || '-' || lpad(floor(random() * 10000)::text, 4, '0');
    exit when not exists (select 1 from public.weddings where guest_code = v_code);
  end loop;

  new.guest_code := v_code;
  return new;
end;
$$;

create trigger trg_set_wedding_guest_code
  before insert on public.weddings
  for each row execute function public.set_wedding_guest_code();

-- Backfill dos casamentos já existentes, sem código.
update public.weddings w
set guest_code = (
  select code from (
    select
      upper(regexp_replace(coalesce(w.partner_name_1, 'CASAL'), '[^A-Za-z]', '', 'g'))
      || case when w.partner_name_2 is not null and w.partner_name_2 <> ''
              then '-' || upper(regexp_replace(w.partner_name_2, '[^A-Za-z]', '', 'g'))
              else '' end
      || '-' || lpad(floor(random() * 10000)::text, 4, '0') as code
  ) generated
)
where guest_code is null;

-- ============================================================
-- wedding_guest_members — associação convidado ↔ casamento
-- ============================================================

create table public.wedding_guest_members (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  guest_id uuid not null references public.profiles(id) on delete cascade,
  joined_at timestamptz not null default now(),
  unique (wedding_id, guest_id)
);

create index wedding_guest_members_guest_idx on public.wedding_guest_members (guest_id);

alter table public.wedding_guest_members enable row level security;

create policy "Guest sees own membership, wedding members see their guests"
  on public.wedding_guest_members for select
  using (guest_id = auth.uid() or public.is_wedding_member(wedding_id) or public.is_admin());

-- Sem policy de insert direta — só via join_wedding_by_code(), mesmo
-- raciocínio de bookings/quote_requests (nunca escrita direta do
-- cliente numa tabela com regra de negócio a validar antes de gravar).

grant select on public.wedding_guest_members to authenticated;

-- ============================================================
-- lookup_wedding_by_guest_code() — valida o código ANTES de criar a
-- conta (chamado a partir de `register_screen.dart` antes de
-- `AuthController.register()`), para nunca criar uma conta real presa a
-- um código inválido. Público (`anon`) de propósito, mesmo raciocínio da
-- validação de token de RSVP — só devolve o nome do casal, nada
-- sensível.
-- ============================================================

create or replace function public.lookup_wedding_by_guest_code(p_code text)
returns table (wedding_id uuid, partner_name_1 text, partner_name_2 text)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select id, partner_name_1, partner_name_2
  from public.weddings
  where guest_code = upper(trim(p_code));
$$;

grant execute on function public.lookup_wedding_by_guest_code(text) to anon, authenticated;

-- ============================================================
-- join_wedding_by_code() — chamado já autenticado (logo depois do
-- signup, `auth_controller.dart#register`), grava a associação real sob
-- `auth.uid()`. Idempotente (`on conflict do nothing`) — seguro chamar
-- outra vez se o convidado repetir o código nas Definições no futuro.
-- ============================================================

create or replace function public.join_wedding_by_code(p_code text)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_wedding_id uuid;
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

  return v_wedding_id;
end;
$$;

revoke execute on function public.join_wedding_by_code(text) from public, anon;
grant execute on function public.join_wedding_by_code(text) to authenticated;
