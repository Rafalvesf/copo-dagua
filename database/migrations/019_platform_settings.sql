-- ============================================================
-- Módulo: Platform Settings (admin-web)
-- ============================================================
--
-- Antes desta migração, o prazo mínimo de reserva (7 dias) e a janela de
-- sinal (48h) estavam escritos como literais dentro de `request_quote()`
-- e `accept_proposal()` (`009_quotations_bookings.sql`) — exatamente o
-- que o utilizador pediu para não fazer ("hardcode da regra dos 7 dias
-- em vários componentes"/"hardcode das 48 horas"). Esta migração cria
-- uma tabela singleton e reescreve as duas funções para lerem dela.
--
-- Singleton: uma só linha (`id = 1`, forçado por check constraint) em
-- vez de key-value — os 6 campos têm tipos e significados diferentes,
-- uma linha fixa com colunas nomeadas é mais simples de ler/validar do
-- que um key-value genérico para um conjunto tão pequeno e estável.

create table public.platform_settings (
  id smallint primary key default 1,
  booking_min_days_before_event integer not null default 7,
  default_booking_hold_hours integer not null default 48,
  payment_grace_period_days integer not null default 3,
  manual_partner_approval boolean not null default true,
  review_requires_completed_booking boolean not null default true,
  platform_commission_percentage numeric(5,2) not null default 0,
  updated_at timestamptz not null default now(),
  updated_by uuid references public.profiles(id),
  constraint platform_settings_singleton check (id = 1),
  constraint platform_settings_commission_range check (platform_commission_percentage >= 0 and platform_commission_percentage <= 100),
  constraint platform_settings_positive_days check (booking_min_days_before_event >= 0 and payment_grace_period_days >= 0),
  constraint platform_settings_positive_hours check (default_booking_hold_hours > 0)
);

insert into public.platform_settings (id) values (1);

alter table public.platform_settings enable row level security;

-- Leitura ampla: são parâmetros operacionais, não dados sensíveis, e o
-- mobile-app vai precisar de ler `booking_min_days_before_event` para
-- mostrar "reservas encerradas" ao casal quando fizer sentido.
create policy "Anyone authenticated can view platform settings"
  on public.platform_settings for select
  using (true);

-- Só super_admin (única role sem restrição em has_admin_permission,
-- 018_admin_rbac.sql) — alterar regras de negócio globais tem o maior
-- raio de ação de qualquer ação administrativa desta plataforma.
create policy "Super admin can update platform settings"
  on public.platform_settings for update
  using (public.has_admin_permission('platform.manage'));

-- ============================================================
-- request_quote() / accept_proposal() — só a fonte dos dois literais
-- muda; resto das funções fica igual ao que já estava em produção.
-- ============================================================

create or replace function public.request_quote(
  p_partner_id uuid, p_wedding_id uuid, p_event_date date,
  p_location text, p_budget_min numeric, p_budget_max numeric, p_message text
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote_id uuid;
  v_min_days integer;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not public.is_wedding_member(p_wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not public.is_partner_profile_visible(p_partner_id) then
    raise exception 'not_found' using errcode = 'P0002';
  end if;

  select booking_min_days_before_event into v_min_days from public.platform_settings where id = 1;
  if p_event_date is not null and p_event_date < (current_date + (v_min_days || ' days')::interval) then
    raise exception 'too_late' using errcode = 'P0003';
  end if;

  insert into public.quote_requests (couple_id, wedding_id, partner_id, event_date, location, budget_min, budget_max, message)
  values (auth.uid(), p_wedding_id, p_partner_id, p_event_date, p_location, p_budget_min, p_budget_max, p_message)
  returning id into v_quote_id;

  return v_quote_id;
end;
$$;

create or replace function public.accept_proposal(p_proposal_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_proposal record;
  v_quote record;
  v_booking_id uuid;
  v_hold_hours integer;
begin
  select * into v_proposal from public.proposals where id = p_proposal_id for update;
  if v_proposal is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_proposal.couple_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_proposal.status <> 'sent' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select * into v_quote from public.quote_requests where id = v_proposal.quote_request_id;
  select default_booking_hold_hours into v_hold_hours from public.platform_settings where id = 1;

  update public.proposals set status = 'accepted', updated_at = now() where id = p_proposal_id;
  update public.quote_requests set status = 'accepted', updated_at = now() where id = v_proposal.quote_request_id;

  insert into public.bookings (
    couple_id, partner_id, wedding_id, proposal_id, event_date,
    total_amount, deposit_amount, hold_expires_at
  )
  values (
    v_proposal.couple_id, v_proposal.partner_id, v_quote.wedding_id, p_proposal_id,
    coalesce(v_quote.event_date, current_date),
    v_proposal.price, v_proposal.deposit_amount, now() + (v_hold_hours || ' hours')::interval
  )
  returning id into v_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, 'awaiting_deposit', 'couple', auth.uid());

  return v_booking_id;
end;
$$;
