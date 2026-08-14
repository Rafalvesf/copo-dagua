# Authentication — Dependências

## Este módulo depende de

- Nada. É o módulo fundação — o primeiro a ser construído.

## Módulos que dependem deste

Praticamente todos. Em particular:

| Módulo | Como depende de Authentication |
|---|---|
| `mobile-app/onboarding/` | Só arranca depois de conta criada e email verificado |
| `mobile-app/wedding/` | `wedding.owner_id` referencia `profiles.id` |
| `backend/partners/` | Perfil de parceiro liga-se a `profiles.id` com `role = partner` |
| `mobile-app/payments/`, `mobile-app/contracts/`, `mobile-app/bookings/` | Bloqueados por RN04 (email verificado) |
| `admin-web/*` | Todo o painel de administração exige `role = admin`, validado via `is_admin()` |
| Todos os módulos com RLS | Dependem do padrão `auth.uid()` estabelecido aqui |

## Serviços externos

- **Supabase Auth** — provedor de identidade, sessões, OAuth.
- **Google OAuth / Apple Sign in** — login social.
- **Supabase Edge Functions** — lógica custom (rate limiting, deleção de conta).

## Bloqueios conhecidos

- `mobile-app/shared/design-system.md` deveria idealmente existir antes deste módulo ser implementado em UI (não em documentação), para que os componentes de `ui.md` já nasçam alinhados ao design system. Ver `tasks.md`.
