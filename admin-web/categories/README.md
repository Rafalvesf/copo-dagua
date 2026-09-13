# Módulo: Categories (admin-web)

**Estado:** ✅ Documentado (âmbito MVP)
**Camada:** Web admin
**Consumido por:** Administradores

## Objetivo

Permitir a um administrador gerir a taxonomia fixa de categorias do Marketplace (`partner_categories`) sem escrever diretamente na base de dados: ativar/desativar categorias existentes e criar novas.

Este módulo é simples por natureza: `partner_categories` já existe, já está semeada com 14 categorias (`database/migrations/005_partner_profile.sql`), e já tem RLS que permite leitura pública e não tem qualquer policy de escrita para clientes — só falta a via de escrita administrativa.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`ui.md`](./ui.md) | Wireframe e componentes |
| [`database.md`](./database.md) | RLS de escrita administrativa sobre `partner_categories` |
| [`api.md`](./api.md) | Contrato de escrita |
| [`edge-cases.md`](./edge-cases.md) | Casos limite |
| [`tasks.md`](./tasks.md) | Backlog e melhorias futuras |

## Resumo executivo

Lista simples com toggle de `is_active` e formulário de criação (`slug`, `label_pt`). Nunca eliminar uma categoria (RN02 de `partner-app/profile/edge-cases.md`: perfis existentes referenciam categorias por FK) — só desativar. Sem edição de `slug` depois de criada (é a chave estável referenciada por `partner_profile_categories`).
