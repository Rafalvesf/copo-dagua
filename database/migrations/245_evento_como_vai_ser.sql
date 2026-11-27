-- «Como vai ser?» ao criar um evento (pedido do Rafael, 2026-11-27):
-- comer fora, num espaço ou em casa. Ajuda o painel e as sugestões a falar
-- do sítio certo (restaurante, espaço ou casa).
alter table public.events
  add column if not exists event_format text
  check (event_format is null or event_format in ('fora', 'espaco', 'casa'));

comment on column public.events.event_format is
  '«Como vai ser?»: fora (comer fora), espaco (num espaço) ou casa (em casa).';
