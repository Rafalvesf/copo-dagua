# Wedding — Critérios de Aceitação e Testes

## Critérios de aceitação

- [ ] O owner consegue editar todos os campos do casamento e as alterações persistem.
- [ ] Um colaborador consegue editar dados do casamento mas não consegue eliminar nem transferir propriedade (bloqueado por RLS, não só por UI).
- [ ] Convite a colaborador por email funciona ponta a ponta, incluindo deep link de aceitação.
- [ ] Convite a um email já registado como Parceiro falha com mensagem clara.
- [ ] `is_wedding_member()` bloqueia corretamente o acesso de um utilizador que não é owner nem colaborador ativo (testado via chamada direta à API).
- [ ] Transição para `completed` bloqueia edição posterior de `wedding_date`.
- [ ] Eliminação do casamento é bloqueada quando existem contratos/pagamentos ativos.
- [ ] Transferência de propriedade só é possível para um colaborador `active`.
- [ ] O seletor de casamentos mostra corretamente todos os casamentos em que o utilizador é owner ou colaborador ativo.

## Testes unitários
- Validação de campos (data, email de convite, tipo de cerimónia)
- Lógica de transição de estado `planning → completed`

## Testes de integração
- `is_wedding_member()`: owner, colaborador ativo, colaborador removido, não-membro — quatro cenários testados diretamente contra a base de dados
- `invite-collaborator` → `accept-collaborator-invite` cria corretamente a associação `user_id`
- `transfer-wedding-ownership` atualiza `owner_id` e mantém o antigo owner como colaborador `active`

## Testes E2E
- Fluxo completo: owner convida colaborador → colaborador aceita → colaborador edita dados do casamento
- Fluxo completo: owner tenta eliminar casamento com contrato ativo → bloqueado
- Fluxo completo: owner transfere propriedade → antigo owner perde permissões de eliminação
