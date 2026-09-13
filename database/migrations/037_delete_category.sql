-- ============================================================
-- Eliminar categoria no CRM, quando ainda não tem parceiros — pedido
-- explícito do utilizador: "dá-me a capacidade de apagar a
-- categoria, no crm, se não tiver nenhum parceiro ainda". Inverte
-- deliberadamente a RN01 documentada em `admin-web/categories/
-- requirements.md` ("categorias nunca são eliminadas, só
-- desativadas") — decisão do próprio utilizador, dono do produto,
-- não um bug a corrigir.
--
-- Proteção real fica ao nível do Postgres, não duplicada na policy:
-- `partner_profile_categories.category_id` já referencia
-- `partner_categories(id)` sem `on delete cascade`/`set null`
-- (005_partner_profile.sql) — o comportamento por omissão `no
-- action` já bloqueia sozinho qualquer DELETE enquanto existir pelo
-- menos um parceiro com essa categoria, com
-- `foreign_key_violation`. A policy só precisa de verificar
-- `is_admin()`, mesmo padrão de "Admins can insert/update
-- categories" (008_admin_users_categories.sql).
-- ============================================================

create policy "Admins can delete categories"
  on public.partner_categories for delete
  using (public.is_admin());

grant delete on public.partner_categories to authenticated;

-- ------------------------------------------------------------
-- Reconciliação da lista real pedida pelo utilizador: acrescenta as
-- duas categorias que faltavam e remove "Outro" (não fazia parte da
-- lista dada, já estava inativa e sem nenhum parceiro — confirmado
-- antes desta migração).
-- ------------------------------------------------------------

insert into public.partner_categories (slug, label_pt, is_active)
values
  ('bands_musicians', 'Bandas e Músicos', true),
  ('photobooth_entertainment', 'Fotobooth e Animação', true)
on conflict (slug) do nothing;

delete from public.partner_categories where slug = 'other';
