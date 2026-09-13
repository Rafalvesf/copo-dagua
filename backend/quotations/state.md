# Quotations — Estados

```
quote_requests.status:

pending ──(send_proposal)──▶ proposal_sent
pending/proposal_sent ──(parceiro abre o pedido)──▶ viewed   [transição de UI, não modelada como função própria — ver tasks.md]
proposal_sent ──(accept_proposal na proposta associada)──▶ accepted
proposal_sent ──(casal recusa — sem função própria, ver api.md)──▶ (fica proposal_sent; recusa não muda o quote_request)
```

```
proposals.status:

sent ──(accept_proposal)──▶ accepted
sent ──(recusa)──▶ rejected   [sem função própria no MVP — ver tasks.md]
sent ──(expires_at ultrapassado)──▶ expired   [sem job automático no MVP — ver tasks.md]
```

Ao contrário de `bookings` (`backend/bookings/state.md`), nenhuma destas transições tem urgência financeira — por isso o MVP aceita não ter todas as transições como funções explícitas nem expiração automática; recusar/expirar um pedido de orçamento não bloqueia dinheiro nem uma data.
