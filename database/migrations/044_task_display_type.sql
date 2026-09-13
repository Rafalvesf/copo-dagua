-- ============================================================
-- Torna imediatamente percetível para os noivos se uma tarefa é uma
-- sugestão ou algo que precisam mesmo de concluir — pedido explícito
-- do utilizador (2026-09-01, continuação de 043_task_completion_
-- behavior.sql). `display_type` é um conceito de apresentação, distinto
-- de `completion_behavior` (como a tarefa se conclui) e de
-- `action_type` (que ação a app está a pedir, só descritivo/admin,
-- ver `lib/types.ts` no admin-web — o motor da app nunca lê
-- `action_type`).
-- ============================================================

alter table public.task_templates
  add column if not exists display_type text not null default 'required'
    check (display_type in ('suggestion', 'required'));

alter table public.task_templates
  add column if not exists action_type text
    check (action_type in (
      'explore', 'create', 'edit', 'book', 'request_quote', 'review',
      'pay', 'confirm', 'contact', 'complete_manually', 'open_section', 'none'
    ));

alter table public.task_templates
  add column if not exists cta_label text;

-- Soft delete (RN: eliminar template nunca deve apagar tarefas nem
-- histórico dos casais) — `active = false` já impede a criação de
-- novas tarefas; `deleted_at` distingue "desativado temporariamente"
-- de "eliminado" na listagem do Admin sem tocar em `wedding_tasks`.
alter table public.task_templates
  add column if not exists deleted_at timestamptz;

alter table public.wedding_tasks
  add column if not exists display_type text
    check (display_type in ('suggestion', 'required'));

update public.wedding_tasks wt
set display_type = tt.display_type
from public.task_templates tt
where wt.task_template_id = tt.id
  and wt.display_type is null;

-- Os templates "Explorar <categoria>" são a sugestão canónica do
-- catálogo (RN: primeiro clique conclui, nunca obrigatório); todo o
-- resto já seedado fica `required` (o default), que é o comportamento
-- correto para orçamento/convidados/lugares/guardar-favoritos/pedir-
-- orçamento/reservar.
update public.task_templates
set display_type = 'suggestion',
    action_type = 'explore',
    cta_label = 'Explorar'
where key like 'explore_%';

update public.task_templates set action_type = 'create', cta_label = 'Definir orçamento' where key = 'define_budget';
update public.task_templates set action_type = 'create', cta_label = 'Adicionar convidados' where key = 'create_guest_list';
update public.task_templates set action_type = 'contact', cta_label = 'Ver convidados' where key = 'chase_rsvp';
update public.task_templates set action_type = 'open_section', cta_label = 'Ver lugares' where key = 'start_seating';
update public.task_templates set action_type = 'confirm', cta_label = 'Guardar favoritos' where key like 'save_favorite_%';
update public.task_templates set action_type = 'request_quote', cta_label = 'Pedir orçamento' where key like 'quote_%';
update public.task_templates set action_type = 'book', cta_label = 'Ver propostas' where key like 'book_%';

update public.wedding_tasks
set display_type = 'required'
where source = 'user' and display_type is null;
