# Quotations — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| `decline_proposal()` — função própria para o casal recusar explicitamente | Média | Hoje uma proposta só fica `rejected` se nunca for aceite antes de expirar; não há recusa ativa. Sem isto o parceiro nunca sabe que foi recusado, só que ficou em silêncio. |
| Marcar `quote_requests.status = 'viewed'` quando o parceiro abre o pedido | Baixa | Puramente informativo para o casal ("o parceiro já viu"); sem função própria no MVP. |
| Expiração automática de `proposals.expires_at` | Baixa | Ao contrário de `bookings` (dinheiro/data em jogo), uma proposta sem resposta não bloqueia nada — não justifica `pg_cron` ainda. |
| `send_proposal()` não revalida `is_partner_profile_visible()` | Baixa | Ver caso limite em `edge-cases.md`. |
| Notificar parceiro/casal (push/email) | Alta | Depende de `backend/notifications/` (⏳). |

## Melhorias futuras

- Contra-propostas (negociação multi-ronda) — fora de âmbito do MVP (RN04).
- Anexar orçamento em PDF a uma proposta.
