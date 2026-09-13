-- ============================================================
-- Catálogo inicial de `task_templates` — cobre o essencial pedido:
-- tarefas iniciais (orçamento/convidados), pipeline genérico por
-- categoria real (explorar → pedir orçamento → reservar, RN21-25),
-- convidados/RSVP e lugares. `eligibility_rule`/`completion_rule` são
-- chaves fixas interpretadas pelo motor (`mobile-app/app/lib/core/
-- tasks/task_engine.dart`) — nunca código armazenado na base de
-- dados. Mais categorias/templates podem ser acrescentados por SQL
-- (ou, no futuro, por um admin) sem tocar no motor, desde que usem
-- uma das chaves já suportadas.
-- ============================================================

insert into public.task_templates
  (key, title, description, category, task_type, priority, partner_category_slug,
   recommended_days_before_event, action_route, eligibility_rule, completion_rule, position)
values
  ('define_budget', 'Definir orçamento',
   'Começa por definir quanto pretendem investir no casamento.',
   'orcamento', 'automatic', 'high', null, null, '/budget',
   'always', 'budget_defined', 0),

  ('create_guest_list', 'Criar lista de convidados',
   'Adiciona família e amigos para começares a ter uma estimativa do casamento.',
   'convidados', 'automatic', 'high', null, null, '/guests',
   'always', 'has_guests', 1),

  ('chase_rsvp', 'Convidados por confirmar',
   'Ainda há convidados sem resposta — vale a pena dar-lhes um empurrão.',
   'convidados', 'automatic', 'normal', null, null, '/guests',
   'guests_with_pending_rsvp', 'no_pending_rsvp', 2),

  ('start_seating', 'Começar o plano de mesas',
   'Já têm confirmações suficientes para começar a organizar os lugares.',
   'lugares', 'automatic', 'normal', null, null, '/seating',
   'enough_confirmed_guests_for_seating', 'seating_started', 3)
on conflict (key) do nothing;

-- Pipeline genérico por categoria real (RN21-25): "Explorar" →
-- "Pedir orçamento" → "Reservar", parametrizado por
-- `partner_category_slug` em vez de repetir lógica por categoria.
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
       action_route, eligibility_rule, completion_rule, position)
    values
      ('explore_' || cat.slug, 'Explorar ' || lower(cat.label_pt),
       'Descobre parceiros de ' || lower(cat.label_pt) || ' e guarda os teus favoritos.',
       'parceiros', 'automatic', 'normal', cat.slug,
       '/partners?category=' || cat.slug,
       'explore_category', 'has_interest_in_category', 10),

      ('quote_' || cat.slug, 'Pedir orçamento — ' || lower(cat.label_pt),
       'Já guardaste favoritos de ' || lower(cat.label_pt) || '. Pede propostas para comparar.',
       'parceiros', 'automatic', 'normal', cat.slug,
       '/partners?category=' || cat.slug,
       'quote_category', 'has_quote_for_category', 11),

      ('book_' || cat.slug, 'Reservar ' || lower(cat.label_pt),
       'Tens uma proposta de ' || lower(cat.label_pt) || ' — está na altura de confirmar.',
       'parceiros', 'automatic', 'high', cat.slug,
       '/bookings',
       'book_category', 'has_confirmed_booking_for_category', 12)
    on conflict (key) do nothing;
  end loop;
end $$;
