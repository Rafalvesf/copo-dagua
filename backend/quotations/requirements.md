# Quotations — Requisitos

## Funcionalidades

- Casal pede orçamento a um parceiro publicado, associado a um dos seus casamentos, com data desejada (opcional), local, orçamento estimado (min/max) e mensagem.
- Parceiro vê os pedidos recebidos (`partner_id = auth.uid()`), marca como visto.
- Parceiro responde com uma proposta: título, descrição, preço, valor do sinal, condições de pagamento, validade.
- Casal aceita ou recusa a proposta.

## Fora de âmbito (MVP)

- Contra-propostas / negociação com múltiplas rondas — um pedido só pode ter uma proposta ativa de cada vez (RN04).
- Anexos/orçamentos em PDF.
- Notificação push/email ao parceiro quando recebe um pedido, ou ao casal quando recebe uma proposta — depende de `backend/notifications/` (⏳).

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Um pedido de orçamento só pode ser feito com pelo menos 7 dias de antecedência da data do evento (quando a data é conhecida) — mesma regra explicitamente pedida pelo utilizador para "reservas", aplicada aqui porque é o ponto de entrada de todo o fluxo: bloquear só em `bookings` seria tarde de mais (o casal já teria negociado uma proposta inútil). |
| RN02 | Um casal só pode pedir orçamento em nome de um `wedding_id` do qual é dono ou colaborador ativo (`is_wedding_member()`) — nunca em nome do casamento de outra pessoa. |
| RN03 | Um parceiro só pode responder a pedidos endereçados a si (`partner_id = auth.uid()`), e só enquanto o perfil dele está publicado — reutiliza `is_partner_profile_visible()`, mesma condição usada para aparecer no Marketplace. |
| RN04 | Um `quote_request` só pode ter uma proposta "sent" de cada vez — enviar uma segunda proposta exige que a anterior tenha sido recusada/expirada primeiro (validado em `send_proposal`, RN de `status not in ('pending', 'viewed')`). |
| RN05 | Aceitar uma proposta cria imediatamente uma `booking` (RN01 de `backend/bookings/requirements.md`) — não há um estado intermédio "aceite mas ainda sem reserva". |
