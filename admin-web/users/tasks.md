# Users (admin-web) — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Banner "Conta suspensa" em `admin-web/partners/[id]` quando `profiles.status != active` | Média | Ver caso limite em `edge-cases.md` — evita um admin ver `partner_profiles.status = published` e assumir incorretamente que o perfil está visível. |
| Notificar utilizador da suspensão | Alta | Depende de `backend/notifications/` (⏳), mesmo bloqueio já identificado em `admin-web/partners/tasks.md`. |

## Melhorias futuras

- MFA obrigatório para contas admin antes de dar acesso de produção — já listado como pendente em `backend/auth/tasks.md`; este módulo é o primeiro a expor ações administrativas destrutivas o suficiente para tornar isto urgente.
