# Weddings (admin-web) — Requisitos

## Funcionalidades

- Listar casamentos com pesquisa por nome dos noivos, filtro por `status` (`planning`, etc. — ver `mobile-app/wedding/`), ordenável por `wedding_date`.
- Ver detalhe: dados do casamento, dono (`owner_id` → link para `admin-web/users/:id`), colaboradores (`wedding_collaborators`).

## Fora de âmbito (MVP)

- Qualquer ação de escrita sobre um casamento (editar, eliminar, mudar estado) — nenhum caso de uso identificado ainda; ações administrativas sobre o casal continuam a passar por `admin-web/users/`.

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Reutiliza `is_admin()` já presente na policy de leitura de `weddings` — nenhuma regra nova. |
