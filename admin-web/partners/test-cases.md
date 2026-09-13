# Partners (admin-web) — Critérios de Aceitação e Testes

## Critérios de aceitação

- [ ] Um utilizador com `role != 'admin'` não consegue aceder a nenhum ecrã de `admin-web/`, mesmo sabendo o URL direto.
- [ ] A lista de parceiros mostra, por omissão, só `pending_review`, ordenados do mais antigo para o mais recente.
- [ ] `draft` nunca aparece na lista, em nenhum filtro.
- [ ] Aprovar um perfil `pending_review` muda o `status` para `published` e regista `reviewed_at`/`reviewed_by`.
- [ ] Rejeitar sem preencher motivo é bloqueado no cliente antes de chamar a Edge Function.
- [ ] Rejeitar com motivo válido muda `status` para `rejected`, grava `rejection_reason`, e o motivo fica visível para o parceiro em `partner-app/profile/`.
- [ ] Suspender só está disponível quando `status = published`; restaurar só quando `status = suspended`.
- [ ] Toda ação de aprovar/rejeitar/suspender/restaurar produz exatamente uma linha nova em `audit_logs`.
- [ ] Um segundo admin a tentar decidir sobre um perfil já decidido recebe `invalid_state` e o ecrã atualiza para refletir o estado real.
- [ ] Dados de `partner_verification` (NIF, morada) só aparecem no ecrã de detalhe para admin — confirmar via RLS direta (chamada API, não só UI) que um `couple` ou `partner` não consegue lê-los.

## Testes de RLS (Postgres real)

Ver `database/tests/rls_test_suite.sql`, T22–T29:
- T22: `is_admin()` é `true` só para `role = 'admin'`.
- T23: admin consegue inserir e ler a sua própria entrada em `audit_logs`.
- T24: nem o parceiro visado nem um noivo qualquer conseguem ler `audit_logs`.
- T25: um não-admin não consegue inserir em `audit_logs` (bloqueado por RLS, não só por ausência do botão na UI).
- T26: `approve_partner_profile()` transiciona `status` e regista `audit_logs` na mesma chamada (atomicidade, RN06).
- T27: `approve_partner_profile()` falha com `invalid_state` fora de `pending_review`.
- T28: um não-admin não consegue chamar `approve_partner_profile()` (`forbidden`).
- T29: `reject_partner_profile()` falha com `validation_error` para um motivo com menos de 10 caracteres.

**Nota:** tal como T12–T21 (`partner-app/profile/`), estes testes ainda não foram corridos contra Postgres real neste ambiente de trabalho (sem `psql`/Docker disponíveis) — ver `database/README.md`.

## Testes de integração (Edge Functions)

- `approve-partner-profile` chamado por não-admin → `forbidden`.
- `approve-partner-profile` chamado sobre um perfil `published` (já aprovado) → `invalid_state`, não um sucesso silencioso (idempotência explícita: repetir aprovação não é a mesma coisa que repetir uma submissão, RN03).
- `reject-partner-profile` com `reason` vazio ou só espaços → `validation_error`.
- `suspend-partner-profile` sobre um perfil `pending_review` (nunca foi publicado) → `invalid_state`.
- `restore-partner-profile` sobre um perfil `rejected` → `invalid_state` (restauro só existe a partir de `suspended`).

## Testes E2E (admin-web)

- Login como admin → lista `pending_review` → abrir perfil → aprovar → confirmar que desaparece da lista filtrada por `pending_review`.
- Login como admin → rejeitar um perfil com motivo → logout → login como o parceiro (`partner-app`) → confirmar que o motivo aparece no ecrã "Perfil rejeitado" (`RejectionReasonCard`, ver `partner-app/profile/ui.md`).
- Login como conta `couple` → tentar aceder a `/partners` diretamente pelo URL → redirecionado/bloqueado.
