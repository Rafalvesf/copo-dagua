-- ============================================================
-- Módulo: Checklist (mobile-app/checklist/README.md)
-- ============================================================
--
-- Pedido explícito do utilizador: "switch them to real live data" —
-- substitui `MockBackend.listChecklistItems/addChecklistItem/
-- updateChecklistItem/removeChecklistItem`. Mesmo padrão de
-- `004_guests.sql` (RLS via `is_wedding_member()`, sem Edge Function).
--
-- `selected_partner_id` sem `references partner_profiles` de propósito
-- — a navegação de parceiros do lado do casal (`core/partners/`) ainda
-- é 100% mock nesta ronda (ids fictícios, não UUIDs reais de
-- `partner_profiles`); uma FK aqui rejeitaria qualquer seleção feita
-- através dessa navegação ainda não migrada. Apertar para FK real
-- quando o Marketplace for wired.
--
-- `assignee_seeds` (avatares ilustrativos de responsáveis, sem modelo
-- de colaborador próprio — já documentado assim no modelo Dart) não
-- tem coluna nenhuma: não existe nenhum conceito real de "responsável"
-- por tarefa ainda, por isso a versão real simplesmente não mostra
-- avatares em vez de continuar a inventá-los.

create table public.checklist_items (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  title text not null,
  category text not null default 'Geral',
  done boolean not null default false,
  due_date date,
  partner_category text,
  selected_partner_id uuid,
  progress_percent integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index checklist_items_wedding_idx on public.checklist_items (wedding_id);

alter table public.checklist_items enable row level security;

create policy "Members manage checklist"
  on public.checklist_items for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

grant select, insert, update, delete on public.checklist_items to authenticated;
