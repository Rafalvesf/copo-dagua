-- ============================================================
-- 095 — O acompanhante vai instalar a app?
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): antes dos nomes, perguntar se a
-- pessoa vai instalar a app; se sim, o email ou o telemóvel passa a ser
-- obrigatório (é com ele que fica ligada à conta), senão é opcional.

alter table public.guest_companions
  add column if not exists will_install_app boolean not null default false;
