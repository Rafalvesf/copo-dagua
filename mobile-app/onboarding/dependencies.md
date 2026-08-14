# Onboarding — Dependências

## Este módulo depende de

| Módulo | Como |
|---|---|
| `backend/auth/` | Só arranca com `profiles.role` definido e email verificado (RN04 de Authentication) |

## Módulos que dependem deste

| Módulo | Como depende de Onboarding |
|---|---|
| `mobile-app/wedding/` | A `wedding` nasce aqui (registo semente); Wedding estende o modelo |
| `backend/partners/` | O `partner_profile` nasce aqui em `draft`; Partners estende o modelo |
| `mobile-app/dashboard/` | Só é acessível depois de `profiles.onboarding_completed = true` |
| `admin-web/moderation/` | Recebe os `partner_profile` em `pending_review` criados no fim do wizard de Parceiros |

## Serviços externos

- Serviço de autocomplete de localização (a escolher — ver `tasks.md`)
- Supabase Storage (upload de fotos de portefólio)
