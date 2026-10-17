-- ============================================================
-- 077 — número de referência do parceiro, por categoria
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): no perfil do parceiro, o quadrado
-- "Capacidade" só faz sentido para espaços/quintas. Para as outras
-- categorias deve mostrar o que faz sentido (florista: nº de arranjos,
-- catering: até quantas pessoas serve, etc.).
--
-- Um único número por parceiro; o significado (e o rótulo) vem da
-- categoria principal — ver `lib/core/partners/category_figure.dart`.
-- Para espaços continua a valer a soma dos lugares das mesas (022) e
-- este número só é usado quando não há mesas registadas.

alter table public.partner_profiles
  add column if not exists key_figure integer
  check (key_figure is null or key_figure between 1 and 100000);
