# Quotations — Modelo de Dados

```sql
create type quote_request_status as enum ('pending', 'viewed', 'proposal_sent', 'accepted', 'declined', 'expired');
create type proposal_status as enum ('sent', 'accepted', 'rejected', 'expired');

create table public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  couple_id uuid not null references public.profiles(id),
  wedding_id uuid not null references public.weddings(id),
  partner_id uuid not null references public.partner_profiles(id),
  event_date date,
  location text,
  budget_min numeric(10,2),
  budget_max numeric(10,2),
  message text,
  status quote_request_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.proposals (
  id uuid primary key default gen_random_uuid(),
  quote_request_id uuid not null references public.quote_requests(id) on delete cascade,
  partner_id uuid not null references public.partner_profiles(id),
  couple_id uuid not null references public.profiles(id),
  title text not null,
  description text,
  price numeric(10,2) not null,
  deposit_amount numeric(10,2) not null,
  payment_terms text,
  expires_at timestamptz,
  status proposal_status not null default 'sent',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

Ver migração completa (incl. RLS e funções) em `database/migrations/009_quotations_bookings.sql`.

- `partner_id`/`couple_id` duplicados em `proposals` (já presentes via `quote_request_id`) — desnormalização deliberada: evita um `join` a `quote_requests` em toda policy de RLS de `proposals`, mesmo raciocínio que levou `partner_verification.partner_id` a existir em vez de só `partner_profiles.id`.
- Sem tabela de "mensagens" dentro do pedido — RN de "sem negociação multi-ronda" (RN04 de `requirements.md`) torna isso desnecessário no MVP; se `Chat` (⏳) vier a cobrir isto, `quote_requests`/`proposals` passam a ser o "assunto" de uma conversa, não o storage do texto.

## RLS

```sql
alter table public.quote_requests enable row level security;
alter table public.proposals enable row level security;

create policy "Participants can view quote requests"
  on public.quote_requests for select
  using (couple_id = auth.uid() or partner_id = auth.uid() or public.is_admin());

create policy "Participants can view proposals"
  on public.proposals for select
  using (couple_id = auth.uid() or partner_id = auth.uid() or public.is_admin());
```

Sem `insert`/`update` policy para `authenticated` em nenhuma das duas — toda a escrita passa por `request_quote()`/`send_proposal()`/`accept_proposal()` (ver `api.md`), que correm `security definer` e validam as regras de `requirements.md` num único sítio.
