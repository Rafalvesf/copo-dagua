# Módulo: Weddings (admin-web)

**Estado:** ✅ Documentado (âmbito MVP: só leitura)
**Camada:** Web admin
**Consumido por:** Administradores

## Objetivo

Dar visibilidade sobre os casamentos criados na plataforma (`weddings`) — data, local, orçamento estimado, dono. Vista só de leitura no MVP: não há ainda nenhuma ação administrativa identificada sobre um casamento que não passe por agir sobre a conta do casal (`admin-web/users/`).

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades |
| [`ui.md`](./ui.md) | Wireframe |
| [`database.md`](./database.md) | Queries (RLS já cobre `is_admin()`, nenhuma tabela/policy nova) |
| [`tasks.md`](./tasks.md) | Backlog e melhorias futuras |

## Resumo executivo

`weddings` já tem uma policy `"Members can view wedding" using (is_wedding_member(id) or is_admin())` desde `database/migrations/003_wedding.sql` — este módulo não precisa de nenhuma migração nova, só consome o que já existe. Isto é o inverso do que aconteceu com `admin-web/partners/`: aqui a fundação já foi bem desenhada desde o início para incluir o caso de uso admin.
