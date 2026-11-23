-- ============================================================
-- 231 — Referência global das reservas: código do parceiro + curta
-- ============================================================
-- Pedido do utilizador (2026-11-23): "pode haver um EMP-12 noutro
-- parceiro? para identificar facilmente depois adiciona o nome do parceiro
-- na referência? acho que devíamos ter um sistema secundário de
-- referências" → escolheu "Código do parceiro + curta".
--
--   • A referência curta (EMP-12, migrações 107 e 230) continua a ser a do
--     dia a dia de cada parceiro: repete-se entre parceiros.
--   • partner_profiles.ref_code: 4 letras únicas tiradas do nome do
--     negócio (3 da primeira palavra + 1 da última: «Tasca do Largo» →
--     TASL; uma só palavra: 4 letras, «Cravos» → CRAV). Se já existir,
--     troca a última por um algarismo (TAS2…TAS9) e depois cresce (TASL2…).
--     Gera-se quando o parceiro tem nome e fica fixa, mesmo que mude de nome.
--   • bookings.reference: <ref_code>-<curta> (TASL-EMP-12), única em toda
--     a À Nossa!. É a que vai para comprovativos, suporte e pesquisa no
--     admin. Atualiza-se sozinha se a curta mudar.
--
-- Corre DEPOIS da 230.

begin;

alter table public.partner_profiles add column if not exists ref_code text;
alter table public.bookings add column if not exists reference text;

-- Letras A–Z a partir do nome (sem acentos nem símbolos).
create or replace function public.partner_ref_base(p_name text)
returns text language plpgsql immutable set search_path = public, pg_temp as $$
declare
  v text := upper(translate(coalesce(p_name, ''),
    'áàâãäéèêëíìîïóòôõöúùûüçñÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑ',
    'aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN'));
  w text[];
  v_first text;
begin
  w := regexp_split_to_array(trim(regexp_replace(v, '[^A-Z ]', ' ', 'g')), '\s+');
  w := array(select x from unnest(w) x where length(x) > 0);
  if coalesce(array_length(w, 1), 0) = 0 then
    return 'PARC';
  end if;
  v_first := w[1];
  if array_length(w, 1) = 1 or length(v_first) < 3 then
    return rpad(left(array_to_string(w, ''), 4), 4, 'X');
  end if;
  return left(v_first, 3) || left(w[array_length(w, 1)], 1);
end;
$$;
revoke all on function public.partner_ref_base(text) from public, anon, authenticated;

-- Código único para um parceiro (tenta a base, depois troca/junta algarismos).
create or replace function public.next_partner_ref_code(p_partner uuid, p_name text)
returns text language plpgsql volatile set search_path = public, pg_temp as $$
declare
  v_base text := public.partner_ref_base(p_name);
  v_try text := v_base;
  i int := 2;
begin
  while exists (select 1 from public.partner_profiles where ref_code = v_try and id <> p_partner) loop
    v_try := case when i <= 9 then left(v_base, 3) || i else v_base || (i - 8) end;
    i := i + 1;
  end loop;
  return v_try;
end;
$$;
revoke all on function public.next_partner_ref_code(uuid, text) from public, anon, authenticated;

-- Parceiros que já têm nome (os mais antigos ficam com o código "limpo").
do $$
declare
  r record;
begin
  for r in
    select id, business_name from public.partner_profiles
    where ref_code is null and coalesce(trim(business_name), '') <> ''
    order by created_at, id
  loop
    update public.partner_profiles set ref_code = public.next_partner_ref_code(r.id, r.business_name) where id = r.id;
  end loop;
end $$;

create unique index if not exists partner_profiles_ref_code_uniq on public.partner_profiles (ref_code);

-- Gera o código quando o parceiro passa a ter nome; depois fica fixo.
create or replace function public.trg_partner_ref_code()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if tg_op = 'UPDATE' and old.ref_code is not null then
    new.ref_code := old.ref_code;
  elsif new.ref_code is null and coalesce(trim(new.business_name), '') <> '' then
    perform pg_advisory_xact_lock(hashtext('partner_ref_code'));
    new.ref_code := public.next_partner_ref_code(new.id, new.business_name);
  end if;
  return new;
end;
$$;
drop trigger if exists partner_ref_code on public.partner_profiles;
create trigger partner_ref_code before insert or update of business_name, ref_code on public.partner_profiles
  for each row execute function public.trg_partner_ref_code();

-- Código a usar numa reserva (parceiro ainda sem nome: parte do id, único).
create or replace function public.partner_ref_or_id(p_partner uuid)
returns text language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce((select ref_code from public.partner_profiles where id = p_partner),
                  upper(left(replace(p_partner::text, '-', ''), 6)));
$$;
revoke all on function public.partner_ref_or_id(uuid) from public, anon, authenticated;

-- Referência global da reserva: corre depois do número curto
-- (booking_number_per_partner < booking_reference_global, por ordem alfabética).
create or replace function public.trg_booking_reference()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  new.reference := public.partner_ref_or_id(new.partner_id) || '-' || new.booking_number;
  return new;
end;
$$;
drop trigger if exists booking_reference_global on public.bookings;
create trigger booking_reference_global before insert or update of booking_number, partner_id on public.bookings
  for each row execute function public.trg_booking_reference();

-- Reservas que já existem.
update public.bookings
set reference = public.partner_ref_or_id(partner_id) || '-' || booking_number
where reference is distinct from public.partner_ref_or_id(partner_id) || '-' || booking_number;

create unique index if not exists bookings_reference_uniq on public.bookings (reference);

insert into public.applied_migrations (id) values ('231') on conflict do nothing;

commit;
