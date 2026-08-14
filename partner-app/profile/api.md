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
| `on-partner-created` | Trigger DB (`after insert on public.profiles where role = 'partner'`) | Cria automaticamente a linha em `partner_profiles` (status `draft`) e a linha vazia correspondente em `partner_verification`. Mesmo padrão de `on-user-created` em `backend/auth/api.md`. |
| `validate-nif` | Chamada autenticada, antes de gravar `partner_verification.tax_id` | Valida o checksum (módulo 11) e verifica unicidade contra `partner_verification_tax_id_idx`. Autoritativa: o cliente também valida localmente para feedback imediato (ver `validations.md`), mas esta função é a fonte de verdade — impede bypass por chamada direta à tabela. |
| `submit-partner-profile-for-review` | Chamada autenticada, botão "Submeter para revisão" | Verifica os critérios de completude de RN04 num único ponto (não confia em cada ecrã do wizard ter validado tudo); se completo, transiciona `status` para `pending_review` e regista `submitted_at`. Se incompleto, devolve a lista de campos em falta. |
| `approve-partner-profile` / `reject-partner-profile` | Chamada autenticada (admin) | Documentada aqui como contrato de dados porque escreve em `partner_profiles`; a UI que a invoca vive em `admin-web/partners/` (⏳). `reject` exige `rejection_reason` (RN07); `approve` regista `reviewed_at`/`reviewed_by` e limpa `rejection_reason`. |

## Risco técnico

`submit-partner-profile-for-review` duplica, em PL/pgSQL ou TypeScript da Edge Function, as mesmas regras de completude que o wizard Flutter já valida passo a passo (RN04). É duplicação deliberada — mesmo trade-off documentado em `backend/auth/api.md` para RN07: validação só client-side de um requisito de negócio crítico (aqui, o que pode entrar em revisão) é contornável por quem chamar a tabela diretamente. Manter os dois sincronizados é um risco de manutenção a vigiar — ver `tasks.md`.
