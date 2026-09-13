# Quotations — Dependências

## Este módulo depende de

| Módulo | Como |
|---|---|
| `backend/auth/` | `is_admin()`, `profiles` |
| `mobile-app/wedding/` | `is_wedding_member()`, `weddings` — RN02 |
| `partner-app/profile/` | `is_partner_profile_visible()`, `partner_profiles` — RN03 |
| `docs/architecture/RLS_POLICY.md` | Padrão `security definer` seguido pelas três funções |

## Módulos que dependem deste

| Módulo | Como |
|---|---|
| `backend/bookings/` | `accept_proposal()` cria a `booking`; `bookings.proposal_id` referencia `proposals` |
| `mobile-app/quotations/`, `partner-app/quotations/` (⏳, docs sem código Flutter) | Consomem estas funções e tabelas diretamente |
| `admin-web/bookings/` | Mostra o histórico de `quote_requests`/`proposals` que antecederam uma reserva, quando relevante |
