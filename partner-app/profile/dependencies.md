# Profile (partner-app) — Dependências

## Este módulo depende de

| Módulo | Como |
|---|---|
| `backend/auth/` | `partner_profiles.id` é FK 1:1 para `profiles.id`; reutiliza `is_admin()`; `is_partner_profile_visible()` verifica `profiles.status = 'active'` (RN08 de Authentication) |
| `backend/storage/` (⏳) | Upload de portefólio e foto de capa depende de buckets e políticas ainda não documentados — ver bloqueio abaixo |
| `docs/architecture/` (⏳) | `RLS_POLICY.md` continua pendente; este módulo introduz um terceiro exemplo de função `security definer` de referência (`is_partner_profile_visible()`, a par de `is_admin()` e `is_wedding_member()`) |

## Módulos que dependem deste

| Módulo | Como depende de Profile |
|---|---|
| `mobile-app/partner-profile/` (⏳) | Vista de leitura pública para os noivos — consome `partner_profiles`, `partner_profile_categories`, `partner_portfolio_items` diretamente via RLS pública (`is_partner_profile_visible()`), não duplica dados |
| `backend/marketplace/` / `mobile-app/marketplace/` (⏳) | Pesquisa e filtros de parceiros fazem query direta às mesmas tabelas, filtrando por `status`, `is_paused`, categorias e `service_areas` |
| `partner-app/quotations/`, `partner-app/bookings/`, `partner-app/dashboard/` (⏳) | Devem verificar `ProfileScreenState.status` antes de permitir a funcionalidade normal — um parceiro sem perfil `published` não deve conseguir aceder a estes ecrãs (ver `state.md`) |
| `partner-app/payouts/` (⏳) | O onboarding de Stripe Connect Express vai reutilizar `business_type` e os dados de `partner_verification` (NIF, morada) como ponto de partida, evitando pedir os mesmos dados duas vezes |
| `admin-web/partners/` (⏳) | Consome e escreve diretamente em `partner_profiles` (aprovar/rejeitar/suspender) — ver contrato em `api.md` |

## Bloqueios conhecidos

- **`backend/storage/` por documentar** — sem políticas de bucket definidas, o upload de portefólio fica sem limites de tamanho/formato garantidos ao nível da infraestrutura (só validado no cliente, ver `validations.md`). Tratar antes de qualquer teste com uploads reais.
- **`admin-web/partners/` por implementar** — sem ele, não há forma de um perfil sair de `pending_review` em produção. Ver nota de arquiteto em `tasks.md`; é o bloqueio mais crítico deste módulo para lançamento, mais do que qualquer detalhe técnico de `partner_profiles` em si.
- **`docs/architecture/RLS_POLICY.md` continua pendente** — agora com três funções de referência (`is_admin()`, `is_wedding_member()`, `is_partner_profile_visible()`), há padrão suficiente para finalmente escrever esse documento; sugerido como próximo passo transversal independentemente de qual módulo de negócio se segue.
