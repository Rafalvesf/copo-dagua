# Módulo: Partners (admin-web)

**Estado:** ✅ Documentado (âmbito MVP)
**Camada:** Web admin (React/Next.js — a confirmar em `docs/architecture/`)
**Consumido por:** Administradores (`profiles.role = 'admin'`)

## Objetivo

Dar a um administrador uma vista mínima e segura sobre os perfis de parceiros do Marketplace, para que consiga aprovar, rejeitar, suspender e restaurar um perfil sem precisar de escrever diretamente na base de dados.

Este módulo existe porque **é o único bloqueador de lançamento já identificado no projeto**: sem ele, nenhum parceiro consegue sair de `pending_review` em produção (ver `partner-app/profile/tasks.md`, "Nota de arquiteto"). É tratado como parte do MVP mínimo viável do Marketplace, não como uma funcionalidade administrativa opcional.

**Fora de âmbito deste módulo (MVP):** dashboard com KPIs, gestão de casais, reservas, pagamentos, disputas, reviews, categorias, comissões, analytics, definições de plataforma, RBAC granular multi-role. Estas áreas pedem entidades (bookings, payments, quotations, reviews) que ainda não existem em nenhuma parte da plataforma — ver `ROADMAP.md` para a ordem de dependência em que serão retomadas, um módulo de cada vez.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`user-flow.md`](./user-flow.md) | Fluxo do administrador (login, lista, decisão) |
| [`ui.md`](./ui.md) | Wireframes textuais e componentes UI |
| [`database.md`](./database.md) | Tabela nova (`audit_logs`) e queries sobre `partner_profiles` já existente |
| [`api.md`](./api.md) | Contrato das Edge Functions de transição de estado |
| [`state.md`](./state.md) | Estados da aplicação (lista, detalhe, ações) |
| [`validations.md`](./validations.md) | Regras de validação de campos (motivo de rejeição/suspensão) |
| [`edge-cases.md`](./edge-cases.md) | Casos limite identificados |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação e plano de testes |
| [`tasks.md`](./tasks.md) | Backlog técnico |
| [`dependencies.md`](./dependencies.md) | Dependências deste módulo e módulos que dependem dele |

## Resumo executivo

Uma tabela filtrável por `partner_profiles.status`, um ecrã de detalhe com os dados de negócio e de verificação (NIF, morada — visíveis a admin por RLS já existente), e quatro ações que chamam Edge Functions já contratadas em `partner-app/profile/api.md`: `approve-partner-profile`, `reject-partner-profile`, `suspend-partner-profile`, `restore-partner-profile`. Cada ação regista uma linha em `public.audit_logs` (nova, append-only) na mesma transação.

**Decisão de arquitetura mais relevante:** autorização continua a usar `is_admin()` flat (ver `docs/architecture/RLS_POLICY.md`) — este módulo não introduz RBAC granular. As transições de estado vivem em Edge Functions `security definer`, nunca em escrita direta à tabela a partir do cliente, para garantir atomicidade com o registo de auditoria e para não duplicar a lógica de "que motivo é obrigatório em que transição" no frontend.
