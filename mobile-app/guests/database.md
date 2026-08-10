# Guests — Modelo de Dados

```sql
create type rsvp_status as enum ('pending', 'invited', 'confirmed', 'declined');
create type guest_side as enum ('couple_a', 'couple_b', 'both');

create table public.guests (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  full_name text not null,
  email text,
  phone text,
  group_label text,
  side guest_side not null default 'both',
  plus_one_allowed boolean not null default false,
  plus_one_name text,
  dietary_restrictions text,
  guest_message text,
  rsvp_status rsvp_status not null default 'pending',
  rsvp_token uuid not null default gen_random_uuid(),
  invite_sent_at timestamptz,
  rsvp_responded_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index guests_rsvp_token_idx on public.guests (rsvp_token);
create index guests_wedding_idx on public.guests (wedding_id);
create index guests_rsvp_status_idx on public.guests (wedding_id, rsvp_status);
```

## RLS

```sql
alter table public.guests enable row level security;

-- Só membros do casamento (owner + colaboradores ativos) gerem convidados
create policy "Members manage guests"
  on public.guests for all
  using (public.is_wedding_member(wedding_id));
```

**Nota crítica:** esta policy cobre exclusivamente o acesso do **casal** (autenticado, via `auth.uid()`). O acesso do **convidado** ao seu próprio registo via `rsvp_token` **não passa por aqui** — o convidado não tem `auth.uid()`. Esse acesso é feito exclusivamente através de Edge Functions com `service_role`, que fazem a sua própria validação (comparar o token recebido com `rsvp_token` na base de dados) antes de ler/escrever o registo. Nunca expor uma policy RLS que permita leitura da tabela `guests` sem autenticação — isso permitiria enumerar convidados de outros casamentos.

## Decisão de arquitetura

O `rsvp_token` é um UUID v4 — imprevisível o suficiente para servir de "password de utilização única" sem necessitar de conta. Isto evita criar utilizadores fantasma em `auth.users` só para permitir RSVP, o que poluiria a tabela de autenticação com identidades que nunca fazem login.
