-- Lugares (pedido do utilizador, 2026-10-19): o organizador dá nome às
-- mesas ("Amigos da faculdade" em vez de "Mesa 3"), escolhe a forma
-- (redonda, quadrada, retangular) e dá um nome carinhoso a cada
-- convidado ("Avó Lurdes"), que aparece nos Lugares.

alter table public.seating_tables
  add column if not exists name text,
  add column if not exists shape text;

alter table public.seating_tables
  drop constraint if exists seating_tables_shape_check;
alter table public.seating_tables
  add constraint seating_tables_shape_check
  check (shape is null or shape in ('round', 'square', 'rectangular'));

alter table public.guests
  add column if not exists nickname text;
