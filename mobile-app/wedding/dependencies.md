# Wedding — Dependências

## Este módulo depende de

| Módulo | Como |
|---|---|
| `backend/auth/` | `weddings.owner_id` e `wedding_collaborators.user_id` referenciam `profiles.id`; usa o padrão `is_admin()` como referência para `is_wedding_member()` |
| `mobile-app/onboarding/` | A tabela `weddings` nasce aqui como registo semente; este módulo estende-a, não a recria |

## Módulos que dependem deste

Praticamente todos os módulos de organização do casamento e de transação. Em particular:

| Módulo | Como depende de Wedding |
|---|---|
| `mobile-app/guests/`, `mobile-app/seating/`, `mobile-app/checklist/`, `mobile-app/budget/` | Todas as tabelas destes módulos terão `wedding_id` e usarão `is_wedding_member()` nas suas policies de RLS |
| `mobile-app/marketplace/`, `mobile-app/quotations/`, `mobile-app/bookings/`, `mobile-app/contracts/`, `mobile-app/payments/` | Pedidos, propostas, contratos e pagamentos ficam sempre associados a um `wedding_id` |
| `mobile-app/chat/` | Conversas com fornecedores ficam associadas ao `wedding_id` do casal |
| `mobile-app/dashboard/` | Lê `ActiveWeddingContext` (ver `state.md`) para mostrar o resumo do casamento ativo |
| `admin-web/weddings/` | Painel de administração para gestão/consulta de casamentos, incluindo resolução de disputas de propriedade |

## Bloqueios conhecidos

- A integração entre eliminação de conta (Authentication) e transferência obrigatória de propriedade (ver `edge-cases.md` e `tasks.md`) exige uma alteração retroativa ao módulo Authentication (`request-account-deletion`). Deve ser tratada antes de qualquer um dos dois módulos ir para produção.
- `docs/architecture/RLS_POLICY.md` continua pendente — agora com contexto suficiente (dois exemplos reais: `is_admin()` e `is_wedding_member()`) para ser finalmente escrito.
