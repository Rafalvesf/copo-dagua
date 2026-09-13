# Quotations — Critérios de Aceitação e Testes

## Critérios de aceitação

- [ ] Casal consegue pedir orçamento a um parceiro publicado, associado a um casamento próprio.
- [ ] Pedido com data a menos de 7 dias é rejeitado (`too_late`).
- [ ] Pedido em nome de um `wedding_id` alheio é rejeitado (`forbidden`).
- [ ] Parceiro só vê pedidos endereçados a si.
- [ ] Parceiro consegue enviar proposta; segunda proposta ao mesmo pedido sem a primeira ser recusada é rejeitada (`invalid_state`).
- [ ] Proposta com `deposit_amount > price` é rejeitada (`validation_error`).
- [ ] Casal consegue aceitar proposta; isso cria uma `booking` com os valores corretos (`total_amount = price`, `deposit_amount`, `hold_expires_at` = agora + 48h).
- [ ] Aceitar a mesma proposta duas vezes só cria um `booking`.

## Testes de RLS

Ver `database/tests/rls_test_suite.sql`, T34+ (a definir junto com `backend/bookings/test-cases.md`, testadas em conjunto por partilharem fixtures).
