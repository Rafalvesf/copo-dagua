# Módulo: Guests

**Estado:** ✅ Documentado — parte já implementada (conta/`guest_code`), wizard de RSVP proposto por implementar
**Camada:** Mobile (Flutter), autenticado + Backend (Supabase)
**Consumido por:** Noivos (owner e colaboradores) e Convidados (com conta na plataforma)

## Objetivo

Permitir ao casal gerir a lista de convidados do casamento — dados de contacto, grupos, lado, relação, acompanhantes com o respetivo menu e alergias — e recolher confirmações de presença (RSVP) de forma digital, substituindo o caderno físico ou a folha de Excel tradicional.

Este módulo teve uma particularidade importante na sua primeira versão: o convidado respondia sem conta, por token público. Essa abordagem foi revista (RN02, `requirements.md`, 2026-09-06) — hoje o convidado cria sempre conta com o `guest_code` do casal e responde já autenticado, através de um **wizard de RSVP** dentro da própria app (ver `user-flow.md`). A implicação de arquitetura mudou de "como servir uma página pública segura" para "como preservar os dados do convidado (acompanhantes, menu, alergias) entre mudanças de resposta" — ver RN09-RN13 em `requirements.md`.

**Fora de âmbito:** organização de mesas (`mobile-app/seating/`, módulo seguinte na cadeia de dependências) — este módulo só gere a lista de convidados e o estado de confirmação, não a disposição física no evento.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`user-flow.md`](./user-flow.md) | Fluxos de utilizador (casal e convidado, incluindo o wizard de RSVP) |
| [`ui.md`](./ui.md) | Wireframes textuais e componentes UI |
| [`database.md`](./database.md) | Modelo de dados e RLS (implementado + proposto para o wizard) |
| [`api.md`](./api.md) | RPCs do convidado e do casal |
| [`state.md`](./state.md) | Estados da aplicação |
| [`validations.md`](./validations.md) | Regras de validação de campos |
| [`edge-cases.md`](./edge-cases.md) | Casos limite identificados |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação e plano de testes |
| [`tasks.md`](./tasks.md) | Backlog técnico e melhorias futuras |
| [`dependencies.md`](./dependencies.md) | Dependências deste módulo e módulos que dependem dele |

## Decisão de arquitetura mais relevante

O acesso do convidado deixou de ser anónimo — passa sempre por `auth.uid()`, com `linked_profile_id` a ligar a conta à linha de `guests` correta (`067_guest_self_service.sql`). Isto elimina a necessidade de Edge Functions públicas com `service_role`, mas move a complexidade para outro lugar: como o convidado pode mudar de resposta livremente (RN05), os dados por pessoa (acompanhantes, menu, alergias) têm de sobreviver a um "Não vou" seguido de um "Afinal vou" sem obrigar a preencher tudo outra vez (RN11) — ver `database.md` e `api.md` para o desenho de `guest_companions`/`submit_own_rsvp` que resolve isto.
