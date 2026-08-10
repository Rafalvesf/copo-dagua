# Wedding — API

## Edge Functions custom

| Função | Trigger | Descrição |
|---|---|---|
| `update-wedding-details` | Edição de campos no ecrã de detalhes | Valida e atualiza `weddings` (aplica RN05 — bloqueia edição de data se `status = completed`) |
| `invite-collaborator` | "Convidar colaborador" | Cria linha em `wedding_collaborators` (`status = pending`), valida RN03, envia email com deep link |
| `accept-collaborator-invite` | Deep link de aceitação | Atualiza `wedding_collaborators.status = active`, associa `user_id`, notifica o owner |
| `remove-collaborator` | Owner remove colaborador | Marca `status = removed`; revoga acesso no próximo refresh de sessão do colaborador |
| `transfer-wedding-ownership` | Ação em "Zona de perigo" | Só executável pelo owner atual; exige que o novo owner já seja colaborador ativo; atualiza `owner_id` |
| `mark-wedding-completed` | Manual ou cron job | Atualiza `status = completed`, define `completed_at`, bloqueia edição de `wedding_date` (RN05/RN06) |
| `request-wedding-deletion` | "Eliminar casamento" | Aplica a mesma lógica de soft-delete de 30 dias de Authentication (RN07); bloqueia se houver contratos/pagamentos ativos |

## Uso de `is_wedding_member()`

Todas as queries diretas ao Supabase feitas pelo cliente Flutter para dados ligados a `wedding_id` (neste módulo e em todos os seguintes) confiam nas policies de RLS construídas sobre `is_wedding_member()` — não há necessidade de repetir esta verificação no cliente.
