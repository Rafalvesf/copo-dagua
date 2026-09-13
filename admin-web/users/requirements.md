# Users (admin-web) — Requisitos

## Funcionalidades

- Listar contas com filtro por `role` (couple/partner/admin) e `status`, pesquisa por `full_name`.
- Ver detalhe: dados de identidade, `email_verified_at`, `onboarding_completed`, `created_at`, e — quando `role = 'partner'` — link direto para `admin-web/partners/[id]`; quando `role = 'couple'` — link para a(s) `weddings` de que é `owner_id`.
- Suspender conta (`status: active → suspended`), com motivo.
- Reativar conta (`status: suspended → active`).

## Fora de âmbito (MVP)

- Editar dados de perfil (nome, telefone, etc.) em nome do utilizador.
- Criar contas manualmente (fora do fluxo de signup normal).
- Eliminar conta — já existe um fluxo próprio de soft-delete (`pending_deletion_at`, 30 dias, `backend/auth/requirements.md`) fora do âmbito deste módulo; este módulo não o substitui nem o duplica.
- Gestão de `role` (mudar um `couple` para `partner`) — não suportado por desenho (RN02 de `backend/auth/requirements.md`, contas não-híbridas).

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Suspender uma conta (`profiles.status = 'suspended'`) é diferente de suspender um perfil de parceiro (`partner_profiles.status = 'suspended'`, ver `admin-web/partners/`). A primeira bloqueia toda a atividade da conta na plataforma; a segunda só remove a visibilidade no Marketplace mantendo a conta ativa. |
| RN02 | Suspender uma conta com `role = 'partner'` **não** muda `partner_profiles.status` — o perfil de parceiro fica automaticamente invisível de qualquer forma (`is_partner_profile_visible()` já verifica `profiles.status = 'active'`), sem precisar de duas ações administrativas. Evita os dois estados ficarem dessincronizados por esquecimento (mesmo raciocínio já usado em `partner-app/profile/edge-cases.md` para o caso inverso). |
| RN03 | Não é possível suspender a própria conta (evita um admin acidentalmente bloquear-se a si próprio sem outro admin para reverter). |
| RN04 | Suspender exige motivo, visível apenas internamente (não há noção de "notificar o utilizador com o motivo" ainda — depende de `backend/notifications/`, ⏳); reativar não exige motivo — mesma assimetria já usada em `admin-web/partners/requirements.md` para suspender/restaurar (RN04/RN12 de `partner-app/profile/requirements.md`). Ambas ficam auditáveis em `audit_logs`. |
