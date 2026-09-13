# Módulo: Quotations (partner-app)

**Estado:** ✅ Documentado — **sem implementação Flutter nesta ronda** (mesma nota de `mobile-app/quotations/README.md`)
**Camada:** Partner-app
**Consumido por:** Parceiro

## Objetivo

Lado parceiro de `backend/quotations/`: receber pedidos de orçamento (leads) e responder com propostas. É, segundo `ROADMAP.md` ("Próximo módulo sugerido"), "o primeiro módulo de valor real para o parceiro" — agora com o motor por trás já pronto.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades |
| [`ui.md`](./ui.md) | Wireframes |
| [`database.md`](./database.md) | Aponta para `backend/quotations/` |
| [`tasks.md`](./tasks.md) | Backlog |

## Resumo executivo

Consome `backend/quotations/` (`send_proposal()`, leitura de `quote_requests` filtrada por `partner_id = auth.uid()`). Ao contrário do lado casal, este módulo **não** está bloqueado por nenhum outro módulo mobile em falta — um parceiro já consegue ter perfil publicado (`partner-app/profile/` ✅) e é diretamente endereçável via `partner_id`, mesmo sem `mobile-app/marketplace/` existir (o casal chegaria via um link direto, não via pesquisa). A implementação Flutter deste lado é candidata a vir primeiro que a do lado casal.
