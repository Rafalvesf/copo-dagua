-- ============================================================
-- 098 — Aparência do menu principal do organizador
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): o menu principal por defeito é o
-- "clássico"; Autocolantes, Polaroid Mural e Polaroid Estendal ficam como
-- opções que cada organizador pode escolher. A cor por defeito é o
-- verde-eucalipto para todos os eventos, com outras cores à escolha.

alter table public.weddings
  add column if not exists menu_layout text not null default 'classic',
  add column if not exists menu_color text not null default 'eucalyptus';

alter table public.weddings
  add constraint weddings_menu_layout_check
  check (menu_layout in ('classic', 'stickers', 'mural', 'clothesline'));
