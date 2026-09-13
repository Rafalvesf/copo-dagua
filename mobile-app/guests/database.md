# Guests — Modelo de Dados

## Implementado ✅

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
  -- 067_guest_self_service.sql
  linked_profile_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index guests_rsvp_token_idx on public.guests (rsvp_token);
create index guests_wedding_idx on public.guests (wedding_id);
create index guests_rsvp_status_idx on public.guests (wedding_id, rsvp_status);
create unique index guests_linked_profile_unique
  on public.guests (wedding_id, linked_profile_id)
  where linked_profile_id is not null;

-- 050_wedding_guest_code.sql
alter table public.weddings add column guest_code text unique;

create table public.wedding_guest_members (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  guest_id uuid not null references public.profiles(id) on delete cascade,
  joined_at timestamptz not null default now(),
  unique (wedding_id, guest_id)
);
```

`rsvp_token` continua na tabela por compatibilidade histórica, mas **deixou de ser o mecanismo de acesso do convidado** (RN02 revista, `requirements.md`) — o convidado autentica-se normalmente e o acesso é feito por `linked_profile_id = auth.uid()`. Ver "Superseded" em `api.md`.

## RLS (implementado ✅)

```sql
alter table public.guests enable row level security;
alter table public.wedding_guest_members enable row level security;

-- Casal: gestão total dos seus convidados
create policy "Members manage guests"
  on public.guests for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

-- Convidado: só a própria linha, só leitura
create policy "Guest can view own row"
  on public.guests for select
  using (linked_profile_id = auth.uid());

-- Convidado vê a própria associação; casal vê as suas
create policy "Guest sees own membership, wedding members see their guests"
  on public.wedding_guest_members for select
  using (guest_id = auth.uid() or public.is_wedding_member(wedding_id) or public.is_admin());
```

O convidado nunca tem `update`/`insert`/`delete` diretos em `guests` — toda a escrita do lado do convidado passa por RPCs `security definer` (`update_own_guest_info`, e a proposta `submit_own_rsvp` abaixo), que limitam explicitamente que colunas podem ser alteradas. RLS filtra linhas, não colunas — sem esta camada de RPC, o convidado poderia escrever em `rsvp_status`, `wedding_id` ou nos dados de outro convidado.

## Proposto — wizard de RSVP inteligente (ainda não migrado)

Próxima migração livre: `070_guest_rsvp_wizard.sql` (069 já usado por `069_public_review_authors.sql`).

```sql
-- Substitui o booleano por um limite numérico (RN03 revista).
alter table public.guests
  add column companions_limit integer not null default 0,
  add column menu_choice text,               -- menu do PRÓPRIO convidado principal
  add column relationship_label text,        -- "como conhece o casal" (RN13)
  add column rsvp_wizard_completed_at timestamptz;

-- Backfill: quem já tinha plus_one_allowed = true passa a limite 1.
update public.guests set companions_limit = 1 where plus_one_allowed;

-- Um acompanhante é uma pessoa própria, com o seu menu/alergias (RN12) —
-- deixa de caber num único `plus_one_name text`.
create table public.guest_companions (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references public.guests(id) on delete cascade,
  full_name text not null,
  menu_choice text,
  dietary_restrictions text,
  created_at timestamptz not null default now()
);

create index guest_companions_guest_idx on public.guest_companions (guest_id);

-- Histórico mostrado em "O meu perfil" (RSVP confirmado, acompanhante
-- adicionado, menu escolhido, presente enviado, fotos adicionadas, ...).
create table public.guest_rsvp_events (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references public.guests(id) on delete cascade,
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  kind text not null,      -- 'rsvp_confirmed' | 'rsvp_declined' | 'companion_added' | 'menu_selected' | ...
  detail text,
  created_at timestamptz not null default now()
);

create index guest_rsvp_events_guest_idx on public.guest_rsvp_events (guest_id, created_at);

alter table public.guest_companions enable row level security;
alter table public.guest_rsvp_events enable row level security;

create policy "Members manage guest companions"
  on public.guest_companions for all
  using (public.is_wedding_member((select wedding_id from public.guests where id = guest_id)))
  with check (public.is_wedding_member((select wedding_id from public.guests where id = guest_id)));

create policy "Guest manages own companions"
  on public.guest_companions for all
  using (guest_id in (select id from public.guests where linked_profile_id = auth.uid()))
  with check (guest_id in (select id from public.guests where linked_profile_id = auth.uid()));

create policy "Members and guest read own rsvp events"
  on public.guest_rsvp_events for select
  using (
    public.is_wedding_member(wedding_id)
    or guest_id in (select id from public.guests where linked_profile_id = auth.uid())
  );

-- Escrita em guest_rsvp_events só via RPC security definer (submit_own_rsvp,
-- update_own_guest_info) — nunca insert direto do cliente, mesmo princípio
-- de sempre da tabela guests.
```

**Nota de migração:** `plus_one_allowed`/`plus_one_name` ficam como colunas obsoletas (não removidas nesta migração, para não partir leituras existentes de `guest_controller.dart`) até o wizard e o ecrã de perfil serem migrados para `companions_limit`/`guest_companions`; remoção definitiva fica para uma migração de limpeza posterior.

## Decisão de arquitetura

O acesso do convidado já não depende de um token público (ver `api.md`) — depende de `auth.uid()` como qualquer outro utilizador da plataforma, com `linked_profile_id` a fazer a ponte entre a conta e a linha de `guests`. Isto simplificou a arquitetura (uma única superfície de autenticação, sem Edge Functions `service_role` expostas ao público) ao custo de exigir sempre uma conta, mesmo para quem só quer responder "não vou".
