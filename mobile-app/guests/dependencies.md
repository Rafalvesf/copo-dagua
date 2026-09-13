# Guests — Dependências

## Este módulo depende de

| Módulo | Como |
|---|---|
| `mobile-app/wedding/` | `guests.wedding_id` referencia `weddings.id`; usa `is_wedding_member()` para todo o acesso do casal |
| `backend/auth/` | O acesso do convidado já depende diretamente de Authentication (RN02 revista) — `linked_profile_id` liga a linha de `guests` a `auth.uid()`, e o wizard de RSVP só corre com sessão iniciada |

## Módulos que dependem deste

| Módulo | Como depende de Guests |
|---|---|
| `mobile-app/seating/` | A organização de mesas usa a lista de convidados confirmados (`rsvp_status = confirmed`), incluindo acompanhantes (`guest_companions`), como base |
| `mobile-app/budget/` | O nº de convidados confirmados (com acompanhantes) influencia estimativas de custo por convidado (catering, por exemplo) |
| `mobile-app/dashboard/` | Mostra o resumo agregado de RSVP (`RsvpSummaryBar`) |
| `mobile-app/chat/` (indireto, futuro) | Restrições alimentares agregadas podem ser partilhadas com parceiros de catering — ver melhorias futuras |

## Serviços externos

- Serviço de envio de email (já usado por Authentication para verificação/reset — reutilizável para partilhar convites, ver `tasks.md`)
- WhatsApp Business API ou equivalente (pendente, ver `tasks.md`)
- Serviço de SMS (pendente, ver `tasks.md`)

## Bloqueios conhecidos

Nenhum bloqueio de arquitetura pendente — ao contrário da versão anterior desta spec, o wizard de RSVP vive dentro do binário Flutter mobile (o convidado já está autenticado quando o vê), sem precisar de uma superfície web pública separada. `InvitePageScreen` continua a ser a única peça acessível sem sessão, e só encaminha para o registo.
