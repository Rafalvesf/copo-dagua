# Módulo: Onboarding

**Estado:** ✅ Documentado
**Camada:** Mobile (Flutter) + Edge Functions (Supabase)
**Consumido por:** Noivos e Parceiros, imediatamente após verificação de email

## Objetivo

Conduzir um utilizador recém-registado (com email já verificado) desde o primeiro login até estar operacional na plataforma — com uma `wedding` criada (Noivos) ou um `partner_profile` iniciado (Parceiros) — no menor número de passos possível, sem sacrificar os dados mínimos necessários para o resto do produto funcionar.

Dois fluxos distintos consoante `profiles.role`: Noivos (cria `wedding`) e Parceiros (cria `partner_profile` em `draft`/`pending_review`).

**Fora de âmbito:** gestão contínua dos dados criados aqui — isso pertence a `mobile-app/wedding/` e a `backend/partners/` / `partner-app/profile/`. O Onboarding só faz a criação inicial.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`user-flow.md`](./user-flow.md) | Fluxos de utilizador (Noivos e Parceiros) |
| [`ui.md`](./ui.md) | Wireframes textuais e componentes UI |
| [`database.md`](./database.md) | Modelo de dados (progresso do wizard + sementes de wedding/partner_profile) |
| [`api.md`](./api.md) | Edge Functions |
| [`state.md`](./state.md) | Estados da aplicação |
| [`validations.md`](./validations.md) | Regras de validação de campos |
| [`edge-cases.md`](./edge-cases.md) | Casos limite identificados |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação e plano de testes |
| [`tasks.md`](./tasks.md) | Backlog técnico e melhorias futuras |
| [`dependencies.md`](./dependencies.md) | Dependências deste módulo e módulos que dependem dele |

## Decisão de arquitetura mais relevante

O Onboarding não é dono definitivo das tabelas `weddings` e `partner_profiles` — cria apenas os registos mínimos ("sementes"). Os módulos `mobile-app/wedding/` e `backend/partners/` estendem esses registos; não os recriam. Ver `database.md`.
