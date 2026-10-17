-- ============================================================
-- 085 — Programa do evento editado pelo casal
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "o programa para os convidados
-- existe, mas os organizadores não o fizeram". Até aqui o Programa do
-- convidado só tinha a hora da cerimónia. Agora o casal define vários
-- momentos (hora, título, local), o dress code e a morada do local.
--
-- `program` é uma lista de objetos {time, title, place}. Os convidados
-- leem estas colunas pela mesma policy de leitura de `weddings` que já
-- usam para o resto do Programa.

alter table public.weddings
  add column if not exists program jsonb not null default '[]'::jsonb,
  add column if not exists dress_code text,
  add column if not exists venue_address text;

alter table public.weddings
  drop constraint if exists weddings_program_is_array;
alter table public.weddings
  add constraint weddings_program_is_array
  check (jsonb_typeof(program) = 'array' and jsonb_array_length(program) <= 30);
