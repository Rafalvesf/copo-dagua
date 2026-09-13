# Dashboard (mobile-app) — Requisitos

## Funcionalidades

- Hero do casamento: nomes, data, contagem decrescente, local.
- Atalhos rápidos: Orçamento, Convidados, Lugares.
- Resumo financeiro: gasto/total do orçamento, nº de parceiros reservados.
- Assuntos urgentes — pagamentos: despesas por pagar com prazo mais próximo (top 3).
- Reservas: lista de parceiros contratados, valor de cada um.
- Suporte: contagem de pedidos em aberto/a aguardar resposta.
- Próximas tarefas: top-3 itens da checklist por prazo (já existia).

## Fora de âmbito

- Qualquer dado real — ver `README.md`, "Nota sobre dados". Todas as secções acima leem de `core/mock/mock_backend.dart`.
- Cancelar/gerir uma reserva a partir daqui — só leitura; gestão fica para quando `mobile-app/bookings/` tiver motor real ligado.

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | "Assuntos urgentes — pagamentos" mostra só despesas não pagas com `dueDate` definida, ordenadas por prazo — despesas sem prazo não aparecem aqui (não há como ordenar "urgência" sem data). |
| RN02 | Uma secção nunca aparece vazia com um card vazio — `_BookingsSection` e `_UpcomingPaymentsCard` colapsam (`SizedBox.shrink()`) quando não há nada a mostrar, em vez de um card "Sem reservas" — mais discreto para um ecrã já denso; distinto da decisão tomada em `admin-web/bookings/ui.md` (lá, um estado vazio explícito é preferido porque é a página inteira, aqui é uma de várias secções). |
