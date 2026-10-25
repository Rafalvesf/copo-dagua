-- ============================================================
-- Tarefas sugeridas por tipo de evento
-- ============================================================
-- Pedido do utilizador (2026-10-20): cada tipo de evento tem as suas
-- tarefas por defeito (as do canvas "Menu principal por tipo de evento",
-- ex: "Marcar a data na paróquia" no batizado, "Definir os oradores" no
-- evento de empresa), editáveis no admin (Templates de tarefas).
-- `event_types` vazio = o template vale para todos os tipos.

-- Parte 1 — coluna
alter table public.task_templates
  add column if not exists event_types text[] not null default '{}';

-- Parte 2 — textos gerais deixam de falar só em casamento
update public.task_templates
set description = 'Começa por definir quanto pretendem investir no evento.'
where key = 'define_budget';
update public.task_templates
set description = 'Adiciona família e amigos para começares a ter uma estimativa do evento.'
where key = 'create_guest_list';

-- Parte 3 — tarefas por defeito de cada tipo (o organizador marca "Feito")
insert into public.task_templates
  (key, title, description, category, priority, task_type, display_type, eligibility_rule,
   completion_rule, completion_behavior, action_type, action_route, cta_label, position, active, event_types)
values
  ('wedding_civil_process', 'Tratar do processo na conservatória', 'Marcar a data e entregar os documentos com tempo.', 'cerimonia', 'high', 'manual', 'required', 'always', null, 'manual', 'complete_manually', null, null, 4, true, '{wedding}'),
  ('wedding_rings', 'Escolher as alianças', 'Ver modelos, medidas e gravação.', 'cerimonia', 'normal', 'manual', 'suggestion', 'always', null, 'manual', 'complete_manually', null, null, 5, true, '{wedding}'),
  ('baptism_parish_date', 'Marcar a data na paróquia', 'Confirma o dia e a hora com o padre.', 'cerimonia', 'high', 'manual', 'required', 'always', null, 'manual', 'complete_manually', null, null, 4, true, '{baptism}'),
  ('baptism_godparents', 'Escolher os padrinhos', 'Convida-os e combina o que precisam de levar.', 'cerimonia', 'normal', 'manual', 'required', 'always', null, 'manual', 'complete_manually', null, null, 5, true, '{baptism}'),
  ('baptism_cake', 'Encomendar o bolo', 'Escolhe sabor e tamanho para os convidados.', 'festa', 'normal', 'manual', 'suggestion', 'always', null, 'manual', 'complete_manually', '/partners?category=cake', 'Ver pastelarias', 6, true, '{baptism}'),
  ('birthday_cake', 'Escolher o bolo', 'Sabor e tamanho para todos os convidados.', 'festa', 'normal', 'manual', 'required', 'always', null, 'manual', 'complete_manually', '/partners?category=cake', 'Ver pastelarias', 4, true, '{birthday}'),
  ('birthday_theme', 'Escolher o tema da festa', 'Cores, decoração e música a condizer.', 'festa', 'normal', 'manual', 'suggestion', 'always', null, 'manual', 'complete_manually', null, null, 5, true, '{birthday}'),
  ('communion_parish_date', 'Confirmar a data com a paróquia', 'Hora da missa e ensaios da catequese.', 'cerimonia', 'high', 'manual', 'required', 'always', null, 'manual', 'complete_manually', null, null, 4, true, '{communion}'),
  ('communion_outfit', 'Escolher a roupa da comunhão', 'Vestido ou fato e acessórios.', 'cerimonia', 'normal', 'manual', 'suggestion', 'always', null, 'manual', 'complete_manually', null, null, 5, true, '{communion}'),
  ('engagement_venue', 'Escolher o local da festa', 'Um jantar, um jardim ou em casa.', 'festa', 'high', 'manual', 'required', 'always', null, 'manual', 'complete_manually', '/partners?category=venue', 'Ver espaços', 4, true, '{engagement}'),
  ('engagement_announce', 'Anunciar o noivado', 'Combinar como e quando contar à família e amigos.', 'festa', 'normal', 'manual', 'suggestion', 'always', null, 'manual', 'complete_manually', null, null, 5, true, '{engagement}'),
  ('vows_officiant', 'Escolher quem conduz os votos', 'Um amigo, um padre ou um celebrante.', 'cerimonia', 'high', 'manual', 'required', 'always', null, 'manual', 'complete_manually', null, null, 4, true, '{vow_renewal}'),
  ('vows_photos', 'Juntar fotos de então e de hoje', 'Para a galeria e a decoração.', 'festa', 'normal', 'manual', 'suggestion', 'always', null, 'manual', 'complete_manually', '/gallery', 'Abrir galeria', 5, true, '{vow_renewal}'),
  ('graduation_committee', 'Definir a comissão da festa', 'Quem trata de quê e quanto paga cada um.', 'festa', 'high', 'manual', 'required', 'always', null, 'manual', 'complete_manually', null, null, 4, true, '{graduation}'),
  ('graduation_attire', 'Tratar do traje e das fitas', 'Encomendas e pagamentos com tempo.', 'festa', 'normal', 'manual', 'suggestion', 'always', null, 'manual', 'complete_manually', null, null, 5, true, '{graduation}'),
  ('corporate_budget', 'Aprovar o orçamento', 'Validar com a direção e guardar as faturas.', 'orcamento', 'high', 'manual', 'required', 'always', null, 'manual', 'complete_manually', '/budget', 'Abrir orçamento', 4, true, '{corporate}'),
  ('corporate_speakers', 'Definir os oradores', 'Quem fala, por que ordem e quanto tempo.', 'programa', 'normal', 'manual', 'required', 'always', null, 'manual', 'complete_manually', null, null, 5, true, '{corporate}'),
  ('corporate_invites', 'Enviar os convites à equipa', 'Partilhar o convite e pedir confirmação.', 'convidados', 'normal', 'manual', 'suggestion', 'always', null, 'manual', 'complete_manually', '/guests', 'Ver convidados', 6, true, '{corporate}'),
  ('babyshower_theme', 'Escolher o tema', 'Cores, decoração e jogos.', 'festa', 'normal', 'manual', 'required', 'always', null, 'manual', 'complete_manually', null, null, 4, true, '{baby_shower}'),
  ('babyshower_gifts', 'Fazer a lista de presentes', 'Para os convidados saberem o que oferecer.', 'convidados', 'normal', 'manual', 'suggestion', 'always', null, 'manual', 'complete_manually', '/guest-page', 'Abrir lista', 5, true, '{baby_shower}'),
  ('other_program', 'Definir o programa do dia', 'Horários e o que acontece em cada momento.', 'programa', 'normal', 'manual', 'required', 'always', null, 'manual', 'complete_manually', '/guest-page', 'Abrir programa', 4, true, '{other}')
on conflict (key) do nothing;
