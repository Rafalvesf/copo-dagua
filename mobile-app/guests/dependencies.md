# Guests — Dependências

## Este módulo depende de

| Módulo | Como |
|---|---|
| `mobile-app/wedding/` | `guests.wedding_id` referencia `weddings.id`; usa `is_wedding_member()` para todo o acesso do casal |
| `backend/auth/` | Indiretamente, via `is_wedding_member()` — mas o fluxo de RSVP do convidado **não** depende de Authentication |

## Módulos que dependem deste

| Módulo | Como depende de Guests |
|---|---|
| `mobile-app/seating/` | A organização de mesas usa a lista de convidados confirmados (`rsvp_status = confirmed`) como base |
| `mobile-app/budget/` | O nº de convidados confirmados (com acompanhantes) influencia estimativas de custo por convidado (catering, por exemplo) |
| `mobile-app/dashboard/` | Mostra o resumo agregado de RSVP (`RsvpSummaryBar`) |
| `mobile-app/chat/` (indireto, futuro) | Restrições alimentares agregadas podem ser partilhadas com parceiros de catering — ver melhorias futuras |

## Serviços externos

- Serviço de envio de email (já usado por Authentication para verificação/reset — reutilizável aqui)
- WhatsApp Business API ou equivalente (pendente, ver `tasks.md`)
- Serviço de SMS (pendente, ver `tasks.md`)
- Hospedagem da página pública de RSVP — decisão de stack pendente (ver `tasks.md`)

## Bloqueios conhecidos

- A página pública de RSVP não pode viver dentro do binário Flutter mobile sem obrigar o convidado a instalar a app — isto é uma decisão de arquitetura que precisa de validação em `docs/architecture/` antes da implementação.
