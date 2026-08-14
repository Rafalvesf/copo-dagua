# Módulo: Profile (partner-app)

**Estado:** ✅ Documentado
**Camada:** Frontend (Flutter, partner-app) + Backend (Supabase)
**Consumido por:** `mobile-app/partner-profile/`, `backend/marketplace/`, `admin-web/partners/`, restantes módulos da partner-app

## Objetivo

Permitir que um parceiro construa e mantenha o perfil de negócio que o representa na Copo d'Água — a base de dados que o Marketplace mostra aos noivos e que desbloqueia o resto da partner-app (sem perfil `published`, um parceiro não recebe pedidos). É a fonte de verdade dos dados de negócio do parceiro; `mobile-app/partner-profile/` é apenas a vista de leitura pública, não uma cópia.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio (RN01–RN11) |
| [`user-flow.md`](./user-flow.md) | Wizard de configuração, revisão, edição, pausa e suspensão |
| [`ui.md`](./ui.md) | Wireframes textuais e componentes UI |
| [`database.md`](./database.md) | Modelo de dados, RLS e decisões de arquitetura |
| [`api.md`](./api.md) | Endpoints Supabase, Storage e Edge Functions |
| [`state.md`](./state.md) | Máquina de estados do perfil e estados de ecrã (Flutter) |
| [`validations.md`](./validations.md) | Validações de campo, incluindo algoritmo do NIF |
| [`edge-cases.md`](./edge-cases.md) | Casos limite identificados |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação e plano de testes (incluindo RLS) |
| [`tasks.md`](./tasks.md) | Backlog técnico e melhorias futuras |
| [`dependencies.md`](./dependencies.md) | Dependências deste módulo e módulos que dependem dele |

## Resumo executivo

Um parceiro (`role = 'partner'`) tem exatamente um `partner_profiles`, criado automaticamente em estado `draft` no signup. Um wizard de 6 passos recolhe dados de negócio, categorias (1–5, de taxonomia fixa), área de atuação, portefólio, preços indicativos e dados fiscais, e submete o perfil a revisão administrativa manual. Só perfis `published`, não pausados e com conta ativa aparecem no Marketplace — regra centralizada numa única função (`is_partner_profile_visible()`) reutilizada por todas as tabelas relacionadas. Dados fiscais sensíveis (NIF, morada de faturação) vivem numa tabela separada (`partner_verification`) com RLS restrita ao próprio parceiro e a administradores, para tornar a fuga de dados estruturalmente impossível em vez de depender de disciplina de código.

**Decisões de arquitetura mais relevantes:**
- Separação de dados públicos e sensíveis em tabelas distintas (ver `database.md`).
- Limite de categorias (RN03) aplicado por trigger na base de dados, não só no cliente.
- Edição de campos críticos pós-publicação reabre revisão (RN08) — trade-off assumido conscientemente para o MVP, sem snapshot do estado anterior (ver `requirements.md` e `tasks.md`).

**Bloqueio de lançamento identificado:** `admin-web/partners/` ainda não existe — sem essa vista, nenhum perfil consegue sair de `pending_review` em produção. Ver `dependencies.md` e `tasks.md`.

Ver estado geral em `ROADMAP.md` na raiz do projeto.
