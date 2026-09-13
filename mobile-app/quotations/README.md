# Módulo: Quotations (mobile-app)

**Estado:** ✅ Documentado — **sem implementação Flutter nesta ronda** (ver nota abaixo)
**Camada:** Mobile (Noivos)
**Consumido por:** Casal

## Objetivo

Permitir a um casal pedir orçamento a um parceiro e responder à proposta recebida. Lado casal de `backend/quotations/`.

## Nota sobre âmbito desta ronda

Este módulo foi documentado (2026-08-30) como parte de construir o motor de Quotations/Bookings a pedido do utilizador, mas **sem código Flutter** — pelo mesmo motivo que `mobile-app/partner-profile/` continua ⏳: não existe ainda um ecrã de perfil de parceiro no mobile a partir do qual um casal chegaria a "Pedir orçamento". Implementar só este ecrã, isolado, sem o Marketplace/perfil de parceiro à volta, produziria uma tela solta sem fluxo de entrada real. A prioridade dada nesta sessão foi ao motor (schema, RLS, regras de negócio, `admin-web/bookings/`), que já está completo e testável.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`ui.md`](./ui.md) | Wireframes |
| [`database.md`](./database.md) | Aponta para `backend/quotations/` — nenhuma tabela própria |
| [`tasks.md`](./tasks.md) | Backlog, incl. implementação Flutter |

## Resumo executivo

Consome diretamente `backend/quotations/` (`request_quote()`, leitura de `quote_requests`/`proposals`, `accept_proposal()`). Sem lógica de negócio própria — este módulo é só UI sobre um contrato já definido.
