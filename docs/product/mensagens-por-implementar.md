# Mensagens, notificações, orçamento e convidados — o que falta na app

Página de design: «À Nossa! — Mensagens, notificações, orçamento e
convidados» (canvas de 2026-11-24). Esta nota diz o que já está na app, o
que é só desenho e o que precisa de código novo (app e servidor) para
funcionar.

## Já na app (PR «Mensagens: teclado, descida rápida e vistos»)

- **Ícones de estado** nas minhas mensagens (`chatTimeline`,
  `shared/widgets/chat_ui.dart`): um visto cinzento = enviada; dois verdes
  = vista. Usa o `seenUntil` que já existe (quando a outra parte leu).
  Nos grupos fica «Visto por N».
- **Descida rápida** (`JumpToLatest`): nas conversas com parceiros (dos dois
  lados) e nos grupos.
- **Teclado — regra** (`DESIGN.md` §6): a caixa de escrever sobe por cima do
  teclado. Na web, `#app-host` encolhe até ao teclado; os campos auxiliares
  do Safari passaram a ter `data-kbnav` (antes a regra dependia de
  `pointer-events` e podia falhar) e o Android usa
  `interactive-widget=resizes-content`.

## Só desenho — falta passar para a app (sem servidor novo)

| Prancheta | Ecrã na app | O que muda |
|---|---|---|
| Mensagens | `chat_list_screen.dart` | sino com contador no topo, filtros com contador («Não lidas · 3»), grupos HOJE / ESTA SEMANA / ANTES com a linha 2 px, etiqueta de estado por conversa (proposta por responder, sinal por pagar, reserva confirmada) |
| Conversa | `chat_thread_screen.dart` | cabeçalho branco com cantos 35 e «Responde em ~1 h»; ilha do evento com «Ver evento»; cartão da proposta com a linha amarela e o estado |
| Popup das notificações | `partner_notification_bell.dart` | pílulas «Todas» / «Por ler», cartão «Avisos no telemóvel», grupos por dia, ação direta («Ver proposta», «Pagar», «Ver») |
| Orçamento · adicionar despesa | `budget_screen.dart` (popup «Adicionar despesa») | valor grande com «Ainda tens X no teto», categoria em pílulas, «Por pagar» / «Já está pago», prazo opcional, «Guardar · 350 €» |
| Convidados · adicionar convidado | `shared/widgets/guest_widgets.dart` | campos em pílula com o rótulo dentro, grupo em pílulas, «Pode trazer» num grupo, «Guardar e outro» |
| Cartões nas mensagens (os que já existem) | `chat_thread_screen.dart`, `partner_chat_thread_screen.dart` | o mesmo cartão para pedido de orçamento, pedido de reserva, proposta (por responder / aceite / recusada), reserva confirmada (linha verde) e pagamento do resto, com o texto de cada lado (organizador / parceiro) |
| «Por tratar» por cima da caixa de escrever | as duas conversas | lista dos cartões em aberto, uma linha cada, abre o cartão todo, «Esconder» / «Mostrar». Só precisa dos dados que a conversa já carrega (propostas e reservas) |

## Precisa de código novo no servidor

| Funcionalidade | O que falta |
|---|---|
| **Editar pedido de orçamento** | RPC para mudar `quote_requests` (pessoas, hora, mensagem) só enquanto não houver reserva; se já houver proposta, marcá-la como «substituída» e avisar o parceiro (mensagem na conversa + notificação) |
| **Editar / retirar proposta** | hoje `send_proposal` só cria. Falta `update_proposal` (enquanto ninguém respondeu) e `withdraw_proposal`; a mensagem da proposta na conversa tem de apontar para a versão nova |
| **Cancelar pedido de reserva** (antes de o parceiro aceitar) | RPC que cancela e liberta o sinal cativo (Stripe) |
| **Pedido de alteração** (pessoas, hora, o que inclui) | tabela nova (`booking_change_requests`: reserva, quem pede, o quê, de → para, estado, mensagem), RPCs pedir / editar / cancelar / aceitar / recusar, mensagem de tipo cartão na conversa, notificação; se mudar o preço, o parceiro envia proposta nova |
| **Propor outro dia** (parceiro) | o mesmo modelo com o tipo «dia»; dias livres a partir da agenda do parceiro; aceitar muda o dia do pedido (não o do evento) |
| **Cartões automáticos** (sugestões): menus e alergias prontos, lembrete na véspera, reserva cancelada com devolução, avaliar depois do evento | mensagens de sistema na conversa (tipo + dados), criadas por gatilhos ou tarefas agendadas |

## Verificação das páginas do desenho

Todos os botões dos cartões têm a página desenhada ou já existente na app:
«Pagar» (folha de pagamento), «Recusar» (motivo, `reject_proposal.dart`),
«Ver reserva», «Informação do evento», «Como chegar», «Escolher o menu»,
«Avaliar». As que faltavam e foram desenhadas: «Editar pedido», «Enviar /
editar proposta», «Pedir alteração», «Propor outro dia». A ação «Pedir
pagamento» do parceiro saiu do desenho: não existe na app.
