# Bookings — Modelo de Dados

```sql
create type booking_status as enum (
  'awaiting_deposit', 'confirmed', 'completed', 'expired',
  'cancelled_by_couple', 'cancelled_by_partner', 'payment_overdue', 'disputed'
);
create type booking_actor_type as enum ('couple', 'partner', 'admin', 'system');

create sequence public.booking_number_seq start 1000;

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_number text not null unique default ('WED-' || nextval('public.booking_number_seq')),
  couple_id uuid not null references public.profiles(id),
  partner_id uuid not null references public.partner_profiles(id),
  wedding_id uuid not null references public.weddings(id),
  proposal_id uuid not null references public.proposals(id),
  event_date date not null,
  total_amount numeric(10,2) not null,
  deposit_amount numeric(10,2) not null,
  status booking_status not null default 'awaiting_deposit',
  hold_started_at timestamptz not null default now(),
  hold_expires_at timestamptz not null,
  confirmed_at timestamptz,
  completed_at timestamptz,
  cancelled_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.booking_events (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  event_type text not null,
  old_status booking_status,
  new_status booking_status,
  actor_type booking_actor_type not null,
  actor_id uuid,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);
```

Ver migração completa (incl. RLS, funções e `pg_cron`) em `database/migrations/009_quotations_bookings.sql`.

- `booking_number` (`WED-1042`) gerado por `sequence`, não pelo `id` (`uuid`) — pensado para aparecer em conversas com o parceiro/casal e em suporte, tal como pedido na especificação original de admin panel (`#WED-1042`). `unique`, nunca reutilizado mesmo que a booking seja cancelada/expirada.
- `proposal_id` é `not null` — reforça RN01 de `requirements.md` ao nível do schema: é estruturalmente impossível existir uma `booking` sem uma proposta aceite por trás.
- `actor_type`/`actor_id` em `booking_events` separados (em vez de só `actor_id`) porque `'system'` (o cron de expiração) não tem um `actor_id` real — evita um `profiles.id` fictício "sistema" só para satisfazer uma FK.

## RLS

```sql
alter table public.bookings enable row level security;
alter table public.booking_events enable row level security;

create policy "Participants can view bookings"
  on public.bookings for select
  using (couple_id = auth.uid() or partner_id = auth.uid() or public.is_admin());

create policy "Participants can view booking events"
  on public.booking_events for select
  using (
    exists (
      select 1 from public.bookings b
      where b.id = booking_id and (b.couple_id = auth.uid() or b.partner_id = auth.uid())
    )
    or public.is_admin()
  );
```

Sem `insert`/`update`/`delete` para `authenticated` em nenhuma das duas — toda a escrita passa por `accept_proposal()` (cria), `admin_confirm_deposit(booking_id, amount_received)` (assinatura alterada em `010_deposit_cross_reference.sql` para exigir o valor a cruzar — ver `api.md`), `admin_complete_booking()` e `expire_overdue_bookings()`. `booking_events` nunca tem `update`/`delete` para ninguém, nem admin — mesmo princípio de `audit_logs` (`docs/architecture/RLS_POLICY.md`, "Auditoria"): histórico de negócio é tão intocável quanto histórico administrativo.
