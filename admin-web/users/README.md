# Módulo: Users (admin-web)

**Estado:** ✅ Documentado (âmbito MVP)
**Camada:** Web admin
**Consumido por:** Administradores

## Objetivo

Dar visibilidade e controlo básico sobre todas as contas da plataforma (`profiles` — casais, parceiros e admins), independentemente do seu papel. É a vista "conta" — dados de identidade e estado de acesso; dados de negócio específicos (perfil de parceiro, casamento) já têm as suas próprias vistas em `admin-web/partners/` e `admin-web/weddings/`.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`user-flow.md`](./user-flow.md) | Fluxo do admin |
| [`ui.md`](./ui.md) | Wireframe e componentes |
| [`database.md`](./database.md) | RLS de suspensão/reativação |
| [`api.md`](./api.md) | Contrato (funções Postgres de transição) |
| [`edge-cases.md`](./edge-cases.md) | Casos limite |
| [`tasks.md`](./tasks.md) | Backlog e melhorias futuras |

## Resumo executivo

Lista de `profiles` filtrável por `role` (casal/parceiro/admin) e `status`, pesquisa por nome/email, ecrã de detalhe com suspender/reativar conta. Segue exatamente o mesmo padrão arquitetural de `admin-web/partners/`: transição de estado via função Postgres `security definer`, registada em `audit_logs`, nunca update direto do cliente.

**Relação com `admin-web/partners/`:** suspender uma conta em `profiles.status` (aqui) é diferente de suspender um perfil de parceiro em `partner_profiles.status` (lá) — a primeira bloqueia o acesso à plataforma por completo (login continua a funcionar mas `is_partner_profile_visible()` e outras policies já verificam `profiles.status = 'active'`), a segunda só remove o perfil do Marketplace. Duas ações distintas, não devem ser confundidas na UI.
