# Partners (admin-web) — Dependências

## Este módulo depende de

| Módulo | Como |
|---|---|
| `backend/auth/` | `is_admin()`, `profiles.role`, sessão via Supabase Auth — mesma base que `mobile-app/`/`partner-app/`, sem sistema de auth próprio |
| `partner-app/profile/` | Consome diretamente `partner_profiles`, `partner_verification`, `partner_categories`, `partner_profile_categories`, `partner_portfolio_items` (RLS já concede acesso a `is_admin()`); reutiliza o contrato de Edge Functions já anunciado em `partner-app/profile/api.md` |
| `docs/architecture/RLS_POLICY.md` | Define o padrão `is_admin()`/`security definer` que este módulo segue; decisão de manter autorização flat (não RBAC) registada lá, não repetida aqui |
| `mobile-app/shared/design-system.md` | Fonte de verdade de paleta/tipografia, adaptada a layout desktop — ver `ui.md` |

## Módulos que dependem deste

| Módulo | Como depende de Partners (admin-web) |
|---|---|
| `partner-app/profile/` | Só este módulo permite um perfil sair de `pending_review` em produção — sem ele, o ciclo de vida documentado em `partner-app/profile/state.md` fica bloqueado a meio (era o bloqueio mais crítico já identificado, agora resolvido) |
| `mobile-app/marketplace/` (⏳) | Só vê parceiros `published` — a existência deste módulo é o que torna possível haver algum parceiro `published` fora de escrita manual na BD |
| Futuros módulos `admin-web/` (Bookings, Payments, Disputes, ...) | Reutilizam `audit_logs` (tabela transversal, não específica de parceiros) e o mesmo padrão de Edge Function "verificar admin → verificar pré-condição → update → auditoria" |

## Bloqueios conhecidos

- **`backend/notifications/` por documentar** — sem ele, o parceiro só descobre a decisão do admin ao reabrir a app (lendo `partner_profiles.status`/`rejection_reason`), não recebe push/email. Aceitável para o MVP, listado em `tasks.md`.
- **Nenhum projeto Supabase real provisionado** — todo o schema (`database/migrations/000` a `006`) só foi testado contra Postgres local ad hoc, nunca contra uma instância Supabase real; o esqueleto de código de `admin-web/` (ver `README.md` raiz, stack "a confirmar") fica escrito contra este contrato mas sem poder ser testado ponta a ponta nesta sessão de trabalho — mesma limitação já documentada para a app Flutter em `ROADMAP.md` ("Marco: implementação e testes da fundação").
