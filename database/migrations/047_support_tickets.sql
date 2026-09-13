-- ============================================================
-- Support — pedido explícito do utilizador (2026-09-01): "adiciona
-- Disputa/atraso aos pedidos de suporte para se resolver diretamente
-- nessa aba". Até agora `SupportTicket` só existia como mock (contagem
-- fixa nos dashboards do casal/parceiro, `MockBackend`), sem tabela
-- real nem categoria nenhuma — construído de raiz aqui.
--
-- Decisão de âmbito: em vez de um módulo `admin-web/disputes/`
-- separado (que o ROADMAP já tinha identificado como dependente de
-- "um sistema de suporte, ainda não iniciado"), uma disputa/atraso é
-- só mais uma categoria de `support_tickets` — resolve-se na mesma
-- aba do admin, sem duplicar fluxo de moderação.
-- ============================================================

create type public.support_ticket_status as enum ('open', 'pending', 'resolved');
create type public.support_ticket_category as enum ('general', 'dispute_delay');

create table public.support_tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  -- Contexto opcional — uma disputa/atraso normalmente refere-se a uma
  -- reserva concreta; geral não precisa de nenhum.
  booking_id uuid references public.bookings(id) on delete set null,
  category public.support_ticket_category not null default 'general',
  subject text not null,
  description text not null,
  status public.support_ticket_status not null default 'open',
  resolution_note text,
  resolved_at timestamptz,
  resolved_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index support_tickets_user_id_idx on public.support_tickets (user_id, created_at desc);
create index support_tickets_status_idx on public.support_tickets (status);

alter table public.support_tickets enable row level security;

create policy "Users manage own support tickets"
  on public.support_tickets for all
  using (user_id = auth.uid() or public.has_admin_permission('support.manage'))
  with check (user_id = auth.uid() or public.has_admin_permission('support.manage'));

grant select, insert, update on public.support_tickets to authenticated;

-- Casal/parceiro pode escrever `subject`/`description`/`category`
-- livremente (é o autor), mas nunca `status`/`resolution_note`/
-- `resolved_at`/`resolved_by` diretamente — só via `resolve_support_ticket()`
-- abaixo, restrito a `support.manage`. A policy "for all" acima já
-- deixaria o autor fazer update de qualquer coluna (RLS não distingue
-- colunas), por isso a resolução real fica sempre pela RPC, nunca
-- documentada/usada como um update direto do lado da app do casal/parceiro.
create or replace function public.resolve_support_ticket(p_ticket_id uuid, p_resolution_note text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if not public.has_admin_permission('support.manage') then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  update public.support_tickets
  set status = 'resolved',
      resolution_note = p_resolution_note,
      resolved_at = now(),
      resolved_by = auth.uid(),
      updated_at = now()
  where id = p_ticket_id;

  if not found then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
end;
$$;

grant execute on function public.resolve_support_ticket(uuid, text) to authenticated;

-- `admin` (não só `support`) também deve ver/gerir pedidos de suporte
-- — gap real: 018_admin_rbac.sql só tinha dado `support.manage` ao
-- sub-role `support`, deixando um admin geral sem acesso a esta aba
-- nova. Redefinição completa (mesmo padrão de 018/046 — sem ALTER
-- FUNCTION para lógica, só create or replace).
create or replace function public.has_admin_permission(p_permission text)
returns boolean
language plpgsql
security definer
stable
set search_path = public, pg_temp
as $$
declare
  v_role public.user_role;
  v_admin_role public.admin_role;
begin
  select role, admin_role into v_role, v_admin_role from public.profiles where id = auth.uid();
  if v_role is distinct from 'admin' then
    return false;
  end if;

  v_admin_role := coalesce(v_admin_role, 'admin');

  return case v_admin_role
    when 'super_admin' then true
    when 'admin' then p_permission in (
      'partner.read', 'partner.approve', 'partner.suspend',
      'booking.read', 'booking.manage',
      'user.read', 'user.suspend', 'user.create',
      'review.moderate',
      'payment.read',
      'support.manage'
    )
    when 'support' then p_permission in ('booking.read', 'user.read', 'user.suspend', 'support.manage')
    when 'finance' then p_permission in ('payment.read', 'payment.write', 'payment.refund', 'booking.read')
    when 'moderator' then p_permission in ('partner.read', 'partner.approve', 'partner.suspend', 'review.moderate')
    else false
  end;
end;
$$;
