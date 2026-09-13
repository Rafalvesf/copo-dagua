# Profile (partner-app) — API

Tal como em Authentication e Wedding, a maioria das operações usa diretamente o SDK Supabase (tabelas + Storage) no cliente Flutter. Só a validação server-side de regras que não podem confiar no cliente (NIF, completude de submissão) passa por Edge Functions.

## Leitura/escrita direta via SDK (tabelas)

- `supabase.from('partner_profiles').select().eq('id', myId).single()` — carregar o próprio perfil.
- `supabase.from('partner_profiles').update({...}).eq('id', myId)` — editar campos (RLS garante que só o dono edita).
- `supabase.from('partner_categories').select().eq('is_active', true)` — listar taxonomia para o `CategoryChipPicker`.
- `supabase.from('partner_profile_categories').upsert([...])` / `.delete()` — gerir categorias selecionadas (RN03 aplicado por trigger na base de dados).
- `supabase.from('partner_portfolio_items').insert(...)` / `.update({ position })` / `.delete()` — gerir portefólio.
- `supabase.from('partner_verification').select().eq('partner_id', myId).single()` / `.update(...)` — dados fiscais (só visível ao próprio, ver `database.md`).

## Storage (Supabase Storage)

- Bucket `partner-portfolio` — upload de fotos/vídeos, path `{partner_id}/{uuid}.{ext}`, depois grava-se a `media_url` pública/assinada em `partner_portfolio_items`.
- Bucket `partner-covers` — imagem de capa do perfil.
- Ambos dependem de `backend/storage/` (ainda ⏳) para políticas de bucket e limites de tamanho — ver `dependencies.md`.

## Edge Functions custom (Supabase Functions)

| Função | Trigger | Descrição |
|---|---|---|
| `validate-nif` | Chamada autenticada, antes de gravar `partner_verification.tax_id` | Valida o checksum (módulo 11) e verifica unicidade contra `partner_verification_tax_id_idx`. Autoritativa: o cliente também valida localmente para feedback imediato (ver `validations.md`), mas esta função é a fonte de verdade — impede bypass por chamada direta à tabela. Ainda ⏳. |
| `approve-partner-profile` / `reject-partner-profile` | Chamada autenticada (admin) | Documentada aqui como contrato de dados porque escreve em `partner_profiles`; a UI que a invoca vive em `admin-web/partners/`. `reject` exige `rejection_reason` (RN07); `approve` regista `reviewed_at`/`reviewed_by` e limpa `rejection_reason`. Ambas transicionam a partir de `pending_review` (RN06). |
| `suspend-partner-profile` / `restore-partner-profile` | Chamada autenticada (admin) | Mesmo padrão das duas funções acima; a UI vive em `admin-web/partners/`. `suspend` transiciona `published → suspended` e exige um motivo (RN09); `restore` transiciona `suspended → published` sem reavaliar completude (RN12) e não reaproveita `rejection_reason`. Todas as quatro funções desta linha e da anterior escrevem uma linha em `public.audit_logs` (`actor_id`, `action`, `target_table = 'partner_profiles'`, `target_id`, `metadata` com o motivo/estado anterior) na mesma transação da mudança de `status` — ver `docs/architecture/RLS_POLICY.md` ("Auditoria") e `admin-web/partners/api.md`. |

## `on-partner-created` e `submit-partner-profile-for-review` (implementados, não são Edge Functions)

Tal como `on-user-created` em `backend/auth/api.md`, ambos acabaram por ser implementados como funções Postgres simples (`database/migrations/011_auth_provisioning.sql`) em vez de Edge Functions — sem cold start, sem chamada de rede extra a partir do cliente:

- `on-partner-created` não é um trigger próprio — é a mesma `handle_new_user()` que já trata `on-user-created`: quando `role = 'partner'`, a seguir a inserir `profiles`, insere também a linha inicial em `partner_profiles` (status `draft`) e a linha vazia em `partner_verification`, na mesma transação.
- `submit-partner-profile-for-review` é `public.submit_partner_profile_for_review()`, `security definer`, chamada via `supabase.rpc('submit_partner_profile_for_review')`. Verifica os critérios de completude de RN04 (nome, descrição ≥ 50 carateres, ≥ 1 categoria, ≥ 3 itens de portefólio, área de serviço ou `nationwide`, NIF preenchido); se completo, transiciona `status` para `pending_review` e regista `submitted_at`; se incompleto, lança `incomplete_profile` (`errcode P0005`) com a lista de campos em falta em `detail`. Testado 2026-08-30 via signup real (`backend/auth/api.md`).

## Risco técnico

`submit_partner_profile_for_review()` duplica, em PL/pgSQL, as mesmas regras de completude que o wizard Flutter já valida passo a passo (RN04). É duplicação deliberada — mesmo trade-off documentado em `backend/auth/api.md` para RN07: validação só client-side de um requisito de negócio crítico (aqui, o que pode entrar em revisão) é contornável por quem chamar a tabela diretamente. Manter os dois sincronizados é um risco de manutenção a vigiar — ver `tasks.md`.
