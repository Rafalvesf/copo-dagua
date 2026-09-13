-- ============================================================
-- Separa "tarefas obrigatórias" de "sugestões acionáveis" — pedido
-- explícito e extenso do utilizador (2026-09-01, continuação do motor
-- de tarefas de 039_task_engine.sql). Uma tarefa `cta_opened` (ex:
-- "Explorar fotógrafos") conclui-se no primeiro clique válido no CTA;
-- uma tarefa `action_completed` (ex: "Definir orçamento") só se
-- conclui quando os dados reais confirmarem a ação — nunca só por
-- ter sido aberta. `manual` fica reservado a tarefas que a app não
-- consegue verificar (hoje só as `wedding_tasks.source = 'user'`,
-- sempre concluídas via `completeTask()`).
-- ============================================================

alter table public.task_templates
  add column completion_behavior text not null default 'action_completed'
    check (completion_behavior in ('action_completed', 'cta_opened', 'manual'));

-- `wedding_tasks` guarda uma cópia do comportamento no momento em que
-- a tarefa nasce (não uma referência viva ao template) — para o motor
-- e a UI nunca precisarem de fazer join com `task_templates` só para
-- saber como uma tarefa concreta se conclui, e para uma alteração
-- futura ao template não mudar retroativamente tarefas já criadas.
alter table public.wedding_tasks
  add column completion_behavior text
    check (completion_behavior in ('action_completed', 'cta_opened', 'manual'));

update public.wedding_tasks wt
set completion_behavior = tt.completion_behavior
from public.task_templates tt
where wt.task_template_id = tt.id
  and wt.completion_behavior is null;

update public.wedding_tasks
set completion_behavior = 'manual'
where source = 'user' and completion_behavior is null;

-- Os templates "Explorar <categoria>" (RN21) eram, até agora, uma
-- tarefa `action_completed` disfarçada (só se concluía com
-- `has_interest_in_category`, ou seja, ao favoritar um parceiro) — o
-- pedido do utilizador é explícito: "Explorar" deve concluir-se ao
-- abrir o CTA, e só depois disso aparecer uma tarefa nova, dedicada, a
-- pedir para guardar favoritos. `completion_rule` deixa de ser
-- necessária aqui (o motor completa `cta_opened` diretamente, ver
-- `task_engine_controller.dart`).
update public.task_templates
set completion_behavior = 'cta_opened',
    completion_rule = null
where key like 'explore_%';

-- Novo passo intermédio "Guardar favoritos — <categoria>": só fica
-- elegível depois de o casal já ter explorado essa categoria (nova
-- eligibility_rule `save_favorite_category`, ver
-- `task_engine_controller.dart`) e continua a usar
-- `has_interest_in_category` como conclusão real — nunca só um clique
-- (favoritar é a ação que efetivamente conta).
do $$
declare
  cat record;
begin
  for cat in
    select slug, label_pt from public.partner_categories
    where slug in (
      'photography', 'venue', 'catering', 'music_dj',
      'flowers_decor', 'cake', 'beauty', 'videography'
    )
  loop
    insert into public.task_templates
      (key, title, description, category, task_type, priority, partner_category_slug,
       action_route, eligibility_rule, completion_rule, completion_behavior, position)
    values
      ('save_favorite_' || cat.slug, 'Guarda os teus favoritos de ' || lower(cat.label_pt),
       'Guarda os parceiros de ' || lower(cat.label_pt) || ' de que mais gostaste para os encontrares facilmente.',
       'parceiros', 'automatic', 'normal', cat.slug,
       '/partners?category=' || cat.slug,
       'save_favorite_category', 'has_interest_in_category', 'action_completed', 10)
    on conflict (key) do nothing;
  end loop;
end $$;
