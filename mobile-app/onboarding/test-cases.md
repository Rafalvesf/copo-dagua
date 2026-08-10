# Onboarding — Critérios de Aceitação e Testes

## Critérios de aceitação

- [ ] Um Noivo consegue completar o onboarding e chega ao Dashboard com uma `wedding` criada corretamente.
- [ ] Um Fornecedor consegue completar o onboarding e o `supplier_profile` fica em `pending_review`.
- [ ] Fechar a app a meio e reabrir retoma exatamente no passo correto.
- [ ] "Ainda não sei" na data de casamento não bloqueia a conclusão do onboarding.
- [ ] Convite ao parceiro é opcional e não bloqueia avanço.
- [ ] Fornecedor não consegue avançar do passo de portefólio sem pelo menos 1 foto.
- [ ] NIF inválido é rejeitado antes de submeter.
- [ ] `profiles.onboarding_completed` fica `true` apenas após o ecrã final, nunca antes.
- [ ] RLS impede um utilizador de ler/escrever `onboarding_progress` de outro utilizador.

## Testes unitários
- Validação de NIF (checksum)
- Validação de datas
- Lógica de retomar passo a partir de `draft_data`

## Testes de integração
- `save-onboarding-step` → `complete-couple-onboarding` cria `wedding` com dados corretos
- `create-supplier-profile-draft` cria registo em `draft` e não aparece em queries do Marketplace (filtro `status = active`)

## Testes E2E
- Onboarding completo de Noivo até ao Dashboard
- Onboarding completo de Fornecedor até ao ecrã "em revisão"
- Fechar app a meio e retomar
- Convite a parceiro com email já usado por Fornecedor
