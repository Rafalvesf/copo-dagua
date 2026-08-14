# Profile (partner-app) — Critérios de Aceitação e Testes

## Critérios de aceitação

- [ ] Um parceiro recém-registado é redirecionado automaticamente para o wizard e não consegue aceder ao resto da partner-app antes de submeter o perfil.
- [ ] O wizard bloqueia "Seguinte" em cada passo até os campos obrigatórios desse passo serem válidos.
- [ ] Submeter um perfil incompleto devolve exatamente os campos em falta (não uma mensagem genérica).
- [ ] Um perfil `pending_review` aprovado por um admin passa a `published` e fica pesquisável no Marketplace (`is_partner_profile_visible()` retorna `true`).
- [ ] Um perfil rejeitado mostra o motivo ao parceiro e permite corrigir e re-submeter sem perder os dados já preenchidos.
- [ ] Editar um campo não-crítico de um perfil `published` não muda o `status`.
- [ ] Editar um campo crítico (nome/NIF/categorias) de um perfil `published` muda o `status` para `pending_review` e mostra o aviso de confirmação antes de gravar.
- [ ] Pausar o perfil (`is_paused`) remove-o da pesquisa do Marketplace sem alterar `status`; despausar repõe a visibilidade imediatamente (se `published`).
- [ ] Um NIF inválido (checksum) é rejeitado antes de chegar ao servidor; um NIF válido mas já registado noutra conta é rejeitado pelo servidor com mensagem distinta.
- [ ] RLS impede um parceiro de ler `partner_verification` de outro parceiro, mesmo por chamada direta à API.
- [ ] RLS impede qualquer utilizador (exceto o próprio ou admin) de ler um perfil `draft`, `pending_review`, `rejected` ou `suspended`.
- [ ] Um admin consegue ler e atualizar qualquer `partner_profiles`, incluindo aprovar/rejeitar.

## Testes unitários

- Algoritmo de checksum do NIF (casos válidos e inválidos, incluindo dígitos de controlo limite)
- `stepValidation` do wizard (cada passo isoladamente)
- Lógica de deteção de "campo crítico vs. não-crítico" que decide se uma edição pós-publicação exige nova revisão

## Testes de integração

- Signup como Parceiro → trigger `on-partner-created` → linha criada em `partner_profiles` (`draft`) e `partner_verification` (vazia)
- Wizard completo → `submit-partner-profile-for-review` → `status = pending_review`, `submitted_at` preenchido
- `approve-partner-profile` → `status = published`, `reviewed_at`/`reviewed_by` preenchidos, perfil passa a aparecer em queries do Marketplace
- `reject-partner-profile` sem `rejection_reason` → deve falhar (RN07)
- Inserir uma 6ª categoria em `partner_profile_categories` para o mesmo `partner_id` → deve falhar (trigger `partner_category_limit_check`, RN03)
- Inserir um segundo `partner_verification.tax_id` igual a um já existente → deve falhar (`partner_verification_tax_id_idx`, RN05)

## Testes de RLS (contra Postgres real, seguindo o padrão de `database/tests/rls_test_suite.sql`)

- Parceiro A consegue `select`/`update` o próprio `partner_profiles` — PASS esperado
- Parceiro A tenta `update` no `partner_profiles` do Parceiro B — deve retornar 0 linhas afetadas
- Utilizador autenticado (Noivo) consegue `select` um `partner_profiles` com `status = published` e `is_paused = false` — PASS esperado
- Utilizador autenticado (Noivo) tenta `select` um `partner_profiles` com `status = draft` — deve retornar 0 linhas
- Utilizador autenticado (Noivo) tenta `select` `partner_verification` de qualquer parceiro — deve retornar 0 linhas sempre, mesmo para perfis publicados
- Admin consegue `select` e `update` qualquer `partner_profiles`, incluindo em estado `draft`
- Parceiro A tenta inserir uma linha em `partner_profile_categories` com `partner_id` do Parceiro B — deve falhar

## Testes E2E (mobile)

- Fluxo completo: signup Parceiro → wizard 6 passos → submissão → ecrã "em revisão"
- Fluxo de rejeição → correção → re-submissão → aprovação (simulada) → perfil visível
- Edição de campo crítico num perfil publicado → aviso → confirmação → perfil volta a "em revisão"
- Pausar/despausar visibilidade e confirmar reflexo imediato (mock do lado do Marketplace, já que `mobile-app/marketplace/` ainda não existe)
