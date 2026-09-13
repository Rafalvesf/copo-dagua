# Partners (admin-web) — Validações

Este módulo não introduz validação de dados de negócio (nome, NIF, etc. — já validados em `partner-app/profile/validations.md` no momento em que o parceiro os escreve). As únicas validações aqui são sobre o input das próprias ações administrativas.

| Campo | Regra | Onde é aplicada |
|---|---|---|
| `reason` (rejeitar) | Obrigatório, não vazio após `trim()`, mínimo 10 caracteres | Cliente (feedback imediato) e Edge Function `reject-partner-profile` (autoritativo — RN04) |
| `reason` (suspender) | Mesma regra que rejeitar | Cliente e Edge Function `suspend-partner-profile` |
| `partner_id` | Deve existir em `partner_profiles` | Edge Function (`not_found` se não existir) |
| Transição de estado | Só a partir do `status` de origem esperado (ver `state.md`, tabela de ações por estado) | Cliente (esconde botões inválidos) **e** Edge Function (autoritativa — RN03/RN05; ver `invalid_state` em `api.md`) |

Mínimo de 10 caracteres para o motivo é deliberado: força uma frase mínima ("Fotos com marca de água de outra plataforma") em vez de uma palavra solta ("não"), sem impor um formulário estruturado que atrasaria o fluxo de revisão. Mesma filosofia de validação leve usada em `partner-app/profile/validations.md` para campos de texto livre.
