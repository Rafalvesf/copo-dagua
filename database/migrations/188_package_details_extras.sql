-- ============================================================
-- 188 · Pacotes detalhados, extras e pedido com pacote escolhido
-- ============================================================
--
-- Mockups «Perfis dos parceiros» e «Páginas do parceiro» (2026-11-15):
--   * Cada pacote/menu diz exatamente o que inclui (uma linha por
--     coisa), o que não inclui, a unidade do preço (total / por pessoa /
--     por unidade) e para quantas pessoas.
--   * Extras do parceiro, ligados aos pacotes: só aparecem ao cliente
--     depois de ele escolher um desses pacotes.
--   * O cliente pode «Pedir este pacote» (com extras e nº de pessoas) em
--     vez de pedir orçamento. O pedido guarda uma cópia do pacote e dos
--     extras tal como estavam (se o parceiro mudar depois, o pedido não
--     muda) e o total.
--   * O parceiro vê sempre o que foi escolhido e aceita ou recusa.
--     Pacote de preço fixo: «Aceitar pacote» cria logo a reserva ao preço
--     do pedido (com o sinal pendente), sem proposta pelo meio. Pacote
--     «desde»: continua a ser uma proposta (send_proposal).
-- ============================================================

begin;

-- ---------- pacotes: detalhe ----------
alter table public.partner_service_packages
  add column if not exists includes text[] not null default '{}',
  add column if not exists excludes text,
  add column if not exists price_unit text not null default 'total',
  add column if not exists min_people integer,
  add column if not exists max_people integer;

do $$ begin
  alter table public.partner_service_packages
    add constraint partner_service_packages_price_unit_check check (price_unit in ('total', 'person', 'unit'));
exception when duplicate_object then null; end $$;

-- ---------- extras ----------
create table if not exists public.partner_service_extras (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 40),
  -- O que é, exatamente: uma linha por coisa.
  details text[] not null default '{}',
  price numeric(10,2) not null check (price >= 0),
  price_unit text not null default 'total' check (price_unit in ('total', 'person', 'unit')),
  -- Depois de que pacotes aparece. Vazio = depois de qualquer pacote.
  package_ids uuid[] not null default '{}',
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists partner_service_extras_partner_idx
  on public.partner_service_extras (partner_id, position);

alter table public.partner_service_extras enable row level security;

drop policy if exists "Extras visible when parent profile visible" on public.partner_service_extras;
create policy "Extras visible when parent profile visible"
  on public.partner_service_extras for select
  using (
    partner_id = auth.uid()
    or public.is_partner_profile_visible(partner_id)
    or public.is_admin()
  );

drop policy if exists "Owner manages own extras" on public.partner_service_extras;
create policy "Owner manages own extras"
  on public.partner_service_extras for all
  using (partner_id = auth.uid())
  with check (partner_id = auth.uid());

grant select, insert, update, delete on public.partner_service_extras to authenticated;
grant select on public.partner_service_extras to anon;

-- ---------- pedidos com pacote ----------
alter table public.quote_requests
  add column if not exists package_id uuid references public.partner_service_packages(id) on delete set null,
  add column if not exists package_snapshot jsonb,
  add column if not exists extras_snapshot jsonb,
  add column if not exists people integer,
  add column if not exists total_amount numeric(12,2);

-- Pedir um pacote (com extras e nº de pessoas). Mesmas regras de
-- request_quote(): permissão no evento, parceiro visível, sem bloqueio
-- secreto, um pedido ativo por parceiro e evento, antecedência mínima.
create or replace function public.request_package(
  p_partner_id uuid,
  p_wedding_id uuid,
  p_package_id uuid,
  p_extra_ids uuid[],
  p_people integer,
  p_event_date date,
  p_message text
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote_id uuid;
  v_min_days integer;
  v_pkg public.partner_service_packages%rowtype;
  v_people integer;
  v_extras jsonb;
  v_total numeric(12,2);
  v_extras_total numeric(12,2);
begin
  if auth.uid() is null then raise exception 'forbidden' using errcode = '42501'; end if;
  if not public.wedding_can(p_wedding_id, 'conversas'::text) then raise exception 'forbidden' using errcode = '42501'; end if;
  if not public.is_partner_profile_visible(p_partner_id) then raise exception 'not_found' using errcode = 'P0002'; end if;
  if public.partner_blocked_by_secret(p_wedding_id, p_partner_id) then
    raise exception 'partner_unavailable' using errcode = 'P0010';
  end if;

  select * into v_pkg from public.partner_service_packages where id = p_package_id and partner_id = p_partner_id;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;

  if exists (
    select 1 from public.quote_requests q
    where q.wedding_id = p_wedding_id and q.partner_id = p_partner_id
      and q.status in ('pending', 'viewed', 'proposal_sent')
  ) or exists (
    select 1 from public.bookings b
    where b.wedding_id = p_wedding_id and b.partner_id = p_partner_id
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  ) then
    raise exception 'quote_already_requested' using errcode = 'P0009';
  end if;

  select booking_min_days_before_event into v_min_days from public.platform_settings where id = 1;
  if p_event_date is not null and p_event_date < (current_date + (v_min_days || ' days')::interval) then
    raise exception 'too_late' using errcode = 'P0003';
  end if;

  v_people := greatest(coalesce(p_people, 1), 1);
  if v_pkg.min_people is not null and v_people < v_pkg.min_people then
    raise exception 'too_few_people' using errcode = '22023';
  end if;
  if v_pkg.max_people is not null and v_people > v_pkg.max_people then
    raise exception 'too_many_people' using errcode = '22023';
  end if;

  -- Só extras deste parceiro, ligados a este pacote (ou a todos).
  select coalesce(jsonb_agg(jsonb_build_object(
           'id', e.id, 'name', e.name, 'details', to_jsonb(e.details),
           'price', e.price, 'price_unit', e.price_unit) order by e.position, e.name), '[]'::jsonb),
         coalesce(sum(case e.price_unit when 'person' then e.price * v_people else e.price end), 0)
    into v_extras, v_extras_total
  from public.partner_service_extras e
  where e.partner_id = p_partner_id
    and e.id = any(coalesce(p_extra_ids, '{}'))
    and (cardinality(e.package_ids) = 0 or p_package_id = any(e.package_ids));

  v_total := case v_pkg.price_unit when 'person' then v_pkg.price * v_people else v_pkg.price end + v_extras_total;

  insert into public.quote_requests (
    couple_id, wedding_id, partner_id, event_date, message,
    package_id, package_snapshot, extras_snapshot, people, total_amount
  ) values (
    auth.uid(), p_wedding_id, p_partner_id, p_event_date, nullif(trim(coalesce(p_message, '')), ''),
    p_package_id,
    jsonb_build_object(
      'id', v_pkg.id, 'name', v_pkg.name, 'description', v_pkg.description,
      'price', v_pkg.price, 'price_unit', v_pkg.price_unit,
      'is_starting_price', v_pkg.is_starting_price,
      'includes', to_jsonb(v_pkg.includes), 'excludes', v_pkg.excludes
    ),
    v_extras, v_people,
    case when v_pkg.is_starting_price then null else v_total end
  )
  returning id into v_quote_id;

  return v_quote_id;
end;
$$;

grant execute on function public.request_package(uuid, uuid, uuid, uuid[], integer, date, text) to authenticated;

-- O parceiro aceita um pedido de pacote de preço fixo: cria a proposta
-- (já aceite) e a reserva com o sinal pendente, como accept_proposal().
create or replace function public.accept_package_request(p_quote_request_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote public.quote_requests%rowtype;
  v_deposit_pct numeric;
  v_deposit numeric;
  v_proposal_id uuid;
  v_booking_id uuid;
  v_hold_hours integer;
  v_hold_expires_at timestamptz;
  v_event_date date;
  v_desc text;
begin
  select * into v_quote from public.quote_requests where id = p_quote_request_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v_quote.partner_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_quote.status not in ('pending', 'viewed') then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if v_quote.package_snapshot is null or v_quote.total_amount is null or v_quote.total_amount <= 0 then
    -- Pacote «desde» ou pedido de orçamento: tem de ir por proposta.
    raise exception 'needs_proposal' using errcode = 'P0001';
  end if;
  if public.couple_has_booking_with_partner(v_quote.couple_id, v_quote.partner_id) then
    raise exception 'already_booked_with_partner' using errcode = 'P0008';
  end if;
  if public.partner_blocked_by_secret(v_quote.wedding_id, v_quote.partner_id) then
    raise exception 'partner_unavailable' using errcode = 'P0010';
  end if;

  v_event_date := coalesce(v_quote.event_date, current_date);
  if exists (select 1 from public.bookings where partner_id = v_quote.partner_id and event_date = v_event_date and status in ('awaiting_deposit', 'confirmed')) then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end if;

  select deposit_percentage, default_booking_hold_hours into v_deposit_pct, v_hold_hours from public.platform_settings where id = 1;
  v_deposit := round(v_quote.total_amount * (v_deposit_pct / 100.0), 2);
  v_hold_expires_at := now() + (v_hold_hours || ' hours')::interval;

  select string_agg(x, ' · ') into v_desc
  from jsonb_array_elements_text(coalesce(v_quote.package_snapshot->'includes', '[]'::jsonb)) as x;

  insert into public.proposals (quote_request_id, partner_id, couple_id, title, description, price, deposit_amount, payment_terms, deposit_refundable, status)
  values (p_quote_request_id, v_quote.partner_id, v_quote.couple_id,
          v_quote.package_snapshot->>'name', coalesce(v_desc, v_quote.package_snapshot->>'description', ''),
          v_quote.total_amount, v_deposit, null, true, 'accepted')
  returning id into v_proposal_id;

  update public.quote_requests set status = 'accepted', updated_at = now() where id = p_quote_request_id;

  begin
    insert into public.bookings (couple_id, partner_id, wedding_id, proposal_id, event_date, total_amount, deposit_amount, hold_expires_at)
    values (v_quote.couple_id, v_quote.partner_id, v_quote.wedding_id, v_proposal_id, v_event_date, v_quote.total_amount, v_deposit, v_hold_expires_at)
    returning id into v_booking_id;
  exception when unique_violation then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, 'awaiting_deposit', 'partner', auth.uid());

  insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
  values (v_booking_id, v_quote.couple_id, v_quote.partner_id, 'deposit', v_deposit, v_hold_expires_at, 'pending');

  return v_booking_id;
end;
$$;

grant execute on function public.accept_package_request(uuid) to authenticated;

insert into public.applied_migrations (id) values ('188') on conflict do nothing;

commit;
