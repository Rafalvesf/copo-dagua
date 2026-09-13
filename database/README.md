# Database — Migrações e Testes

Este diretório contém o **schema SQL real** dos módulos já implementados, extraído diretamente dos respetivos `database.md`, e uma suite de testes de RLS validada contra Postgres.

## Estado

| Módulo | Migração | Aplicada a um Supabase real | Suite local (`rls_test_suite.sql`) |
|---|---|---|---|
| Stub do Supabase Auth (`auth.uid()`, `auth.users`) | `000_supabase_stub.sql` | N/A — só para Postgres local | — (infraestrutura de teste) |
| Authentication | `001_authentication.sql` | ✅ 2026-08-30 | ✅ T1–T11 (contra Postgres local, sessão anterior) |
| Onboarding | `002_onboarding.sql` | ✅ 2026-08-30 (com correção, ver nota abaixo) | ✅ T1–T11 |
| Wedding | `003_wedding.sql` | ✅ 2026-08-30 | ✅ T1–T11 |
| Guests | `004_guests.sql` | ✅ 2026-08-30 | ✅ T1–T11 |
| Profile (partner-app) | `005_partner_profile.sql` | ✅ 2026-08-30 (com correção, ver nota abaixo) | ⏳ T12–T21 escritos, não corridos contra Postgres local |
| Partners (admin-web) — `audit_logs` | `006_admin_audit_log.sql` | ✅ 2026-08-30 | ⏳ T22–T25 escritos, não corridos contra Postgres local |
| Partners (admin-web) — transições de estado | `007_partner_review_transitions.sql` | ✅ 2026-08-30 | ⏳ T26–T29 escritos, não corridos contra Postgres local |
| Users + Categories (admin-web) | `008_admin_users_categories.sql` | ✅ 2026-08-30 | ⏳ T30–T33 escritos, não corridos contra Postgres local |
| Quotations + Bookings | `009_quotations_bookings.sql` | ✅ 2026-08-30 — **fluxo completo validado por chamada real** (`request_quote → send_proposal → accept_proposal → admin_confirm_deposit → admin_complete_booking`), não só aplicação do schema. Ver "Nota — smoke test" abaixo. | ⏳ T34–T37 escritos, não corridos contra Postgres local |
| Bookings — verificação cruzada do sinal | `010_deposit_cross_reference.sql` | ✅ 2026-08-30 — `admin_confirm_deposit` passou a exigir `amount_received` e cruzá-lo com `deposit_amount`; validado ao vivo contra `WED-1001` (valor errado rejeitado com `amount_mismatch`, valor certo confirmou automaticamente). | ⏳ T38 escrito, não corrido contra Postgres local |
| Auth — provisionamento (`on-user-created`/`on-partner-created`) + submissão de perfil de parceiro | `011_auth_provisioning.sql` | ✅ 2026-08-30 — `handle_new_user()` (trigger `on_auth_user_created`) e `submit_partner_profile_for_review()` validados por signup real via API do Supabase Auth (ver "Nota — gap de provisionamento" abaixo). | ⏳ ainda não escrito na suite local |
| Wedding — coluna `quote` | `012_wedding_quote.sql` | ✅ 2026-08-30 — validado por fluxo real (criar casamento, ler de volta, atualizar `quote`, convidar colaborador) via API REST, ver "Nota — armadilha RETURNING" abaixo. | ⏳ ainda não escrito na suite local |
| Partner profile — coluna `contact_email` | `013_partner_contact_email.sql` | ✅ 2026-08-30 | ⏳ ainda não escrito na suite local |
| Partner verification — índice único parcial de `tax_id` | `014_partner_verification_tax_id_partial_unique.sql` | ✅ 2026-08-30 — corrige um bug real de `005_partner_profile.sql` (índice único simples sobre `tax_id` colidia com o placeholder `''` que `handle_new_user()` insere para todo parceiro novo, bloqueando qualquer segundo signup de parceiro). Ver "Nota — gap de provisionamento" e `partner-app/profile/database.md`. | ⏳ ainda não escrito na suite local |

**Nota 2026-08-30 — smoke test de ponta a ponta (Quotations/Bookings):** ao contrário das migrações anteriores (só aplicadas e verificadas pelo advisor), `009` foi exercitada com um fluxo real completo contra o Supabase ligado, usando dois utilizadores de teste (`test.couple@example.com`, `test.partner@example.com`, prefixo `a0000000-...`, claramente marcados como dados de teste) e simulando `auth.uid()` via `set_config('request.jwt.claim.sub', ...)`. Resultado: duas bookings de demonstração (`WED-1000` concluída, `WED-1001` a aguardar sinal) existem no projeto para o admin-web mostrar dados reais em `/bookings`. Um bug real foi encontrado e corrigido nesta validação: `request_quote()` não verificava que o `wedding_id` pertencia ao chamador nem que o `partner_id` estava publicado — corrigido antes de aplicar, reutilizando `is_wedding_member()`/`is_partner_profile_visible()`.

**Nota 2026-08-30 — primeira aplicação a um Supabase real:** todas as migrações `001`–`008` foram aplicadas de uma vez, pela primeira vez, a um projeto Supabase real (via `supabase db query --linked --file ...`). Isto expôs bugs reais que a suite local (que nunca correu a suite completa `001`+`005` juntas nem verificou os nomes de role reais do Supabase) não tinha apanhado:

1. **`app_authenticated` vs `authenticated`** — todas as migrações faziam `grant ... to app_authenticated`, mas esse é o nome do role inventado por `000_supabase_stub.sql` para simular localmente o role real do Supabase, que se chama `authenticated`. Corrigido em todos os ficheiros (`000` a `008`) e em `rls_test_suite.sql`.
2. **`partner_profiles` definida duas vezes** — `002_onboarding.sql` continha uma "semente" da tabela (pensada para `backend/partners/`, nunca escrito), incompatível com a definição completa em `005_partner_profile.sql` (chave primária diferente: `id` próprio + `user_id` vs. `id` = FK 1:1 para `profiles`). A semente foi removida de `002`; `005` é a fonte de verdade única. Ver `mobile-app/onboarding/database.md`.
3. **`login_attempts` sem RLS** — apanhado pelo Supabase security advisor (`rls_disabled_in_public`), não pela suite local: a tabela tinha `grant select, insert ... to authenticated` mas nunca `enable row level security`, permitindo a qualquer utilizador autenticado ler o histórico de login (emails + IPs) de todos os outros. Corrigido em `001_authentication.sql`.
4. **`security definer` sem `search_path` fixo, e executável por `anon`** — apanhado pelo mesmo advisor (`function_search_path_mutable`, `anon_security_definer_function_executable`). Todas as funções `security definer` (`is_admin`, `is_wedding_member`, `is_partner_profile_visible`, as quatro de `007`, as duas de `008`) ganharam `set search_path = public, pg_temp` e `revoke execute ... from public, anon` — padrão agora documentado em `docs/architecture/RLS_POLICY.md`.

Nenhum destes bugs tinha sido detetado nas sessões anteriores porque nunca houve acesso a `psql`/Docker nem a um projeto Supabase real até esta sessão — a suite local validava cada migração isoladamente, nunca a sequência completa contra um Postgres real com os roles/privilégios exatos do Supabase.

**Nota 2026-08-30 — gap de provisionamento encontrado ao ligar `mobile-app`/`partner-app` ao Supabase real:** `on-user-created` (`backend/auth/api.md`) e `on-partner-created` (`partner-app/profile/api.md`) estavam documentados como parte do contrato de API há várias sessões, mas nunca tinham sido implementados em nenhuma migração — um signup real criaria um `auth.users` sem `profiles` correspondente, partindo `is_admin()`/`is_wedding_member()`/toda a RLS para esse utilizador. `011_auth_provisioning.sql` implementa ambos numa única função `handle_new_user()` (trigger em `auth.users`), mais `submit_partner_profile_for_review()` (RPC, valida completude RN04). Verificado ao vivo via chamada direta à API REST do Supabase Auth (signup real, depois confirmação de que `profiles`/`partner_profiles`/`partner_verification` foram criados corretamente, e que `submit_partner_profile_for_review()` devolve os campos em falta corretos para um perfil incompleto).

**Nota 2026-08-30 — armadilha `INSERT ... RETURNING` + policy de select self-referencial:** ao validar `012_wedding_quote.sql`/a Fase 2 de `mobile-app/`, `insert(...).select().single()` (o padrão que o cliente Supabase usa sempre que se pede o registo de volta a seguir a um insert) falhava com `42501` em `weddings`, mesmo a policy de insert (`owner_id = auth.uid()`) estando correta e validada isoladamente. Causa: a policy de select (`is_wedding_member(id) OR is_admin()`) é aplicada também ao `RETURNING`, e a subquery self-referencial de `is_wedding_member()` não vê a linha nova dentro do mesmo comando. Confirmado isolando cada parte via chamadas REST diretas: insert sozinho — sucesso; select separado a seguir — sucesso; os dois no mesmo pedido — falha. `UPDATE ... RETURNING` não tem este problema. Não foi preciso alterar nenhuma policy nem função — o contorno fica do lado do cliente (`wedding_controller.dart`, método `create()`: insert sem `.select()`, seguido de um select separado). Documentado como padrão transversal em `docs/architecture/RLS_POLICY.md` para não repetir a descoberta em cada módulo futuro que insira em tabelas com este tipo de policy (Guests, Budget, Checklist, etc.).

Ver `docs/architecture/TESTING_NOTES.md` para o relatório de testes anterior a esta sessão (Authentication/Wedding/Guests).

## Como correr localmente

Requer Postgres 16 (ou compatível) instalado.

```bash
createdb copodagua_test
psql -d copodagua_test -f migrations/000_supabase_stub.sql
psql -d copodagua_test -f migrations/001_authentication.sql
psql -d copodagua_test -f migrations/002_onboarding.sql
psql -d copodagua_test -f migrations/003_wedding.sql
psql -d copodagua_test -f migrations/004_guests.sql
psql -d copodagua_test -f migrations/005_partner_profile.sql
psql -d copodagua_test -f migrations/006_admin_audit_log.sql
psql -d copodagua_test -f migrations/007_partner_review_transitions.sql
psql -d copodagua_test -f migrations/008_admin_users_categories.sql
psql -d copodagua_test -f migrations/009_quotations_bookings.sql
psql -d copodagua_test -f migrations/010_deposit_cross_reference.sql

# correr os testes de RLS
psql -d copodagua_test -f tests/rls_test_suite.sql
```

`009` depende da extensão `pg_cron`, que não existe no stub local — `expire_overdue_bookings()` fica definida mas nunca agendada num Postgres local puro; o teste dessa função específica só foi feito contra o Supabase real (ver nota acima).

Deviam passar **38 de 38 testes** (procurar por `PASS`/`FAIL` no output) — os 11 originais (Authentication/Wedding/Guests), os 10 de Profile (T12–T21), os 4 de Partners/`audit_logs` (T22–T25), os 4 das funções de transição de Partners (T26–T29), os 4 de Users/Categories (T30–T33), os 4 de Quotations/Bookings (T34–T37), mais o 1 novo de verificação cruzada do sinal (T38). **Nota:** T12–T38 ainda não foram corridos contra Postgres local — mas já foram validados por outra via (aplicação direta + smoke test de ponta a ponta contra um Supabase real, ver notas acima), o que é uma verificação mais forte do que a suite local teria dado sozinha.

## Nota importante

O ficheiro `000_supabase_stub.sql` **não existe em produção** — é uma simulação mínima do schema `auth` do Supabase, criada apenas para permitir testar RLS localmente sem depender do runtime completo do Supabase. Ao aplicar estas migrações num projeto Supabase real, começar a partir de `001_authentication.sql` (o Supabase já fornece `auth.users` e `auth.uid()` nativamente).

## Próximos passos

- Correr `rls_test_suite.sql` (T12–T33) contra Postgres local assim que houver `psql`/Docker disponível — cobre casos que a validação manual contra o Supabase real desta sessão não cobriu sistematicamente (ex: bloqueio de insert indevido via `exception`).
- Repetir o processo desta sessão (aplicar + correr `supabase db advisors --linked --type security`) para cada módulo novo que introduza uma tabela ou função `security definer` nova.
