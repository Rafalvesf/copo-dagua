# Categories (admin-web) — Requisitos

## Funcionalidades

- Listar todas as categorias (ativas e inativas), com contagem de parceiros por categoria.
- Criar categoria nova (`slug`, `label_pt`).
- Desativar/reativar categoria (`is_active`).

## Fora de âmbito

- Editar `slug` ou `label_pt` de uma categoria existente — evita quebrar referências e traduções já em uso; se o nome estiver errado, desativar e criar de novo.
- Eliminar categoria — nunca (RN01 abaixo).
- Reordenação manual — a lista não tem `sort_order` na tabela atual; fica para quando existir necessidade real de curadoria de exibição no Marketplace.

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Categorias nunca são eliminadas, só desativadas (`is_active = false`) — `partner_profile_categories` referencia `partner_categories.id` por FK; eliminar quebraria perfis existentes. Mesma regra já identificada em `partner-app/profile/edge-cases.md`. |
| RN02 | `slug` é único, imutável após criação, `snake_case`, gerado a partir do `label_pt` no momento da criação (ex: "Wedding Planner" → `wedding_planner`) mas editável antes de submeter, caso o administrador prefira outro valor. |
| RN03 | Desativar uma categoria não afeta parceiros que já a têm selecionada (RN03 de `partner-app/profile/requirements.md` sobre o limite de 5 continua a aplicar-se só a novas seleções) — só deixa de aparecer como opção nova no `CategoryChipPicker` do wizard. Mesmo padrão já descrito em `partner-app/profile/edge-cases.md` para este exato cenário. |
