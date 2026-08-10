# Módulo: Guests

**Estado:** ✅ Documentado
**Camada:** Mobile (Flutter) + Página pública de RSVP (web) + Backend (Supabase)
**Consumido por:** Noivos (owner e colaboradores) e Convidados (sem conta na plataforma)

## Objetivo

Permitir ao casal gerir a lista de convidados do casamento — dados de contacto, grupos, acompanhantes, restrições alimentares — e recolher confirmações de presença (RSVP) de forma digital, substituindo o caderno físico ou a folha de Excel tradicional.

Este módulo tem uma particularidade importante face a todos os anteriores: **uma das suas superfícies é usada por pessoas que não têm conta na plataforma** — o convidado. O convidado recebe um link único e responde ao RSVP sem nunca passar por Authentication. Isto tem implicações diretas de arquitetura, detalhadas em `database.md` e `api.md`.

**Fora de âmbito:** organização de mesas (`mobile-app/seating/`, módulo seguinte na cadeia de dependências) — este módulo só gere a lista de convidados e o estado de confirmação, não a disposição física no evento.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`user-flow.md`](./user-flow.md) | Fluxos de utilizador (casal e convidado) |
| [`ui.md`](./ui.md) | Wireframes textuais e componentes UI |
| [`database.md`](./database.md) | Modelo de dados e RLS (incluindo acesso público por token) |
| [`api.md`](./api.md) | Edge Functions |
| [`state.md`](./state.md) | Estados da aplicação |
| [`validations.md`](./validations.md) | Regras de validação de campos |
| [`edge-cases.md`](./edge-cases.md) | Casos limite identificados |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação e plano de testes |
| [`tasks.md`](./tasks.md) | Backlog técnico e melhorias futuras |
| [`dependencies.md`](./dependencies.md) | Dependências deste módulo e módulos que dependem dele |

## Decisão de arquitetura mais relevante

O RSVP público não pode depender de `is_wedding_member()` nem de `auth.uid()`, porque o convidado não está autenticado. A solução adotada é um **token único e imprevisível por convidado**, validado por uma Edge Function com privilégios de serviço (`service_role`), nunca por RLS direta do cliente. A página de RSVP em si deve ser servida como web pública leve (fora do binário da app mobile), para não exigir instalação da app a quem só quer confirmar presença. Ver `database.md` e `tasks.md`.
