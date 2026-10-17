-- ============================================================
-- 080 — Localização do parceiro (morada + coordenadas)
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "adiciona a opção da localização
-- nos parceiros. tanto como usar localização atual e mais opções como
-- escrever a morada e tudo".
--
-- Guardado no próprio perfil do parceiro. As coordenadas vêm da
-- localização atual do telemóvel ou da pesquisa de morada; servem mais
-- tarde para filtrar parceiros por distância ao local do evento.

alter table public.partner_profiles
  add column if not exists address_line text,
  add column if not exists postal_code text,
  add column if not exists city text,
  add column if not exists region text,
  add column if not exists latitude double precision,
  add column if not exists longitude double precision;
