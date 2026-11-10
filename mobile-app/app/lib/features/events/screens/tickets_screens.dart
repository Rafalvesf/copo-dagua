import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:flutter/material.dart';
import '../../../core/payments/payments.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/events/event_pass.dart';
import '../../../core/events/events_providers.dart';
import '../../../core/events/tickets.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/payments/partner_connect.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'ticket_pass_screens.dart' show TicketPassCard;

// ───────────────────────── Comprar ─────────────────────────

/// Folha para comprar bilhetes de um evento pago (migração 149). Num evento
/// privado vai com o [code] ou o [inviteToken] com que a pessoa entrou (153).
Future<void> showBuyTicketSheet(BuildContext context, PublicEvent e, {String? code, String? inviteToken}) {
  return showIslandSheet<void>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _BuyTicketSheet(event: e, code: code, inviteToken: inviteToken),
  );
}

/// Entrada num evento pago sem bilhete: abre a compra (código, link ou id).
Future<bool> openTicketPurchase(BuildContext context, {String? weddingId, String? code, String? inviteToken}) async {
  final e = await ticketEventPreview(weddingId: weddingId, code: code, inviteToken: inviteToken);
  if (e == null || !context.mounted) return false;
  await showBuyTicketSheet(context, e, code: code, inviteToken: inviteToken);
  return true;
}

class _BuyTicketSheet extends StatefulWidget {
  final PublicEvent event;
  final String? code;
  final String? inviteToken;
  const _BuyTicketSheet({required this.event, this.code, this.inviteToken});
  @override
  State<_BuyTicketSheet> createState() => _BuyTicketSheetState();
}

class _BuyTicketSheetState extends State<_BuyTicketSheet> {
  int _qty = 1;
  bool _busy = false;
  String? _error;

  Future<void> _pay() async {
    Funnel.track('ticket_checkout_open', ref: widget.event.weddingId);
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      // Pagamento dentro da app (2026-11-09: nunca com link): o mesmo ecrã
      // das reservas — cartão, Apple Pay, Google Pay, MB WAY, Multibanco.
      final e = widget.event;
      final qty = _qty;
      String? ticketId;
      final args = PayArgs(
        paymentId: '',
        partnerName: e.displayNames,
        kind: 'ticket',
        amount: (e.entryPrice ?? 0) * qty,
        titleOverride: qty == 1 ? 'Bilhete' : '$qty bilhetes',
        create: (m, {phone}) async {
          final r = await createTicketIntent(
            weddingId: e.weddingId,
            quantity: qty,
            method: m,
            phone: phone,
            code: widget.code,
            inviteToken: widget.inviteToken,
            previousId: ticketId,
          );
          ticketId = r.ticketId;
          return r.info;
        },
        state: () async => ticketId == null ? ('open', null) : await ticketPayState(ticketId!),
        onPaid: (ctx) => ctx.pushReplacement('/bilhete/$ticketId'),
        errorText: (c) => const {'method_unavailable', 'invalid_phone', 'declined', 'processing', 'not_configured'}.contains(c)
            ? payErrorMessage(c)
            : TicketError(c).message,
      );
      if (!mounted) return;
      final router = GoRouter.of(context);
      Navigator.of(context).pop();
      router.push('/pay', extra: args);
    } on TicketError catch (e) {
      if (mounted) setState(() => _error = e.message);
    } catch (_) {
      if (mounted) setState(() => _error = const TicketError('unknown').message);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final e = widget.event;
    final unit = e.entryPrice ?? 0;
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Bilhetes · ${e.displayNames}',
                style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 4),
            Text('${euroLabel(unit)} por pessoa', style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
            const SizedBox(height: 20),
            Row(
              children: [
                const Expanded(child: Text('Quantos?', style: TextStyle(fontSize: 16, color: AppTheme.ink))),
                IconButton.outlined(
                  tooltip: 'Menos',
                  onPressed: _qty > 1 && !_busy ? () => setState(() => _qty--) : null,
                  icon: const Icon(Icons.remove_rounded),
                ),
                SizedBox(
                  width: 44,
                  child: Text('$_qty',
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
                IconButton.outlined(
                  tooltip: 'Mais',
                  onPressed: _qty < 10 && !_busy ? () => setState(() => _qty++) : null,
                  icon: const Icon(Icons.add_rounded),
                ),
              ],
            ),
            const Divider(height: 28),
            Row(children: [
              const Expanded(child: Text('Total', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700))),
              Text(euroLabel(unit * _qty), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700)),
            ]),
            if (_error != null) ...[
              const SizedBox(height: 10),
              Text(_error!, style: const TextStyle(color: Color(0xFFB3261E), fontSize: 13)),
            ],
            const SizedBox(height: 16),
            FilledButton(
              onPressed: _busy || unit <= 0 ? null : _pay,
              style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(52), backgroundColor: AppTheme.ink),
              child: _busy
                  ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                  : Text('Pagar ${euroLabel(unit * _qty)}'),
            ),
          ],
        ),
      ),
    );
  }
}

// ───────────────────────── Regresso da Stripe ─────────────────────────

class TicketReturnScreen extends ConsumerStatefulWidget {
  final String ticketId;
  const TicketReturnScreen({super.key, required this.ticketId});
  @override
  ConsumerState<TicketReturnScreen> createState() => _TicketReturnScreenState();
}

class _TicketReturnScreenState extends ConsumerState<TicketReturnScreen> {
  String _status = 'checking';
  String? _weddingId;

  @override
  void initState() {
    super.initState();
    _poll();
  }

  Future<void> _poll() async {
    // O pagamento pode demorar uns segundos a ficar confirmado.
    for (var i = 0; i < 8 && mounted; i++) {
      try {
        final r = await syncTicket(widget.ticketId);
        _weddingId = r.weddingId;
        if (r.status == 'paid') {
          ref.invalidate(guestWeddingsProvider);
          ref.invalidate(publicEventsProvider);
          if (r.weddingId != null) ref.invalidate(myEventPassProvider(r.weddingId!));
          if (mounted) setState(() => _status = 'paid');
          return;
        }
      } catch (_) {}
      await Future<void>.delayed(const Duration(seconds: 3));
    }
    if (mounted) setState(() => _status = 'pending');
  }

  @override
  Widget build(BuildContext context) {
    final paid = _status == 'paid';
    // O bilhete com o QR logo a seguir ao pagamento (migração 158).
    final ticket = paid && _weddingId != null ? ref.watch(myEventPassProvider(_weddingId!)).value?.ticket : null;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(28),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              if (_status == 'checking')
                const CircularProgressIndicator()
              else
                Icon(paid ? Icons.confirmation_number_rounded : Icons.hourglass_top_rounded,
                    size: 64, color: AppTheme.accentOliveDark),
              const SizedBox(height: 18),
              Text(
                switch (_status) {
                  'checking' => 'A confirmar o pagamento…',
                  'paid' => 'Bilhete comprado!',
                  _ => 'Pagamento ainda por confirmar',
                },
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w700, color: AppTheme.ink),
              ),
              const SizedBox(height: 8),
              Text(
                paid
                    ? (ticket != null
                        ? 'Já estás no evento. Mostra este QR à entrada; também o encontras no início do evento.'
                        : 'Já estás no evento. Vês o programa, a galeria e as novidades.')
                    : _status == 'pending'
                        ? 'Se pagaste com Multibanco ou MB WAY, pode demorar uns minutos. Avisamos quando ficar confirmado.'
                        : '',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 15, height: 1.4, color: AppTheme.inkMuted),
              ),
              if (ticket != null) ...[
                const SizedBox(height: 18),
                TicketPassCard(ticket: ticket, eventName: 'O teu evento'),
              ],
              const SizedBox(height: 24),
              if (_status != 'checking')
                FilledButton(
                  onPressed: () => paid && _weddingId != null
                      ? context.go('/guest-home/$_weddingId')
                      : context.go('/eventos'),
                  style: FilledButton.styleFrom(minimumSize: const Size(220, 50), backgroundColor: AppTheme.ink),
                  child: Text(paid ? 'Ver o evento' : 'Voltar aos eventos'),
                ),
            ]),
          ),
        ),
      ),
    );
  }
}

// ───────────────────────── Organizador ─────────────────────────

/// "Bilhetes e pagamentos" do evento ativo: ativar a conta Stripe,
/// vendas, comissão e taxa, saldo e levantar.
class OrganizerTicketsScreen extends ConsumerStatefulWidget {
  const OrganizerTicketsScreen({super.key});
  @override
  ConsumerState<OrganizerTicketsScreen> createState() => _OrganizerTicketsScreenState();
}

class _OrganizerTicketsScreenState extends ConsumerState<OrganizerTicketsScreen> {
  bool _paying = false;
  bool _cancelling = false;

  @override
  void initState() {
    super.initState();
    connectAsOrganizer = true;
    Future.microtask(() => ref.invalidate(partnerConnectStatusProvider));
  }

  @override
  void dispose() {
    connectAsOrganizer = false;
    super.dispose();
  }

  Future<void> _payout() async {
    setState(() => _paying = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      final p = await requestPayout();
      messenger.showSnackBar(SnackBar(content: Text('Levantamento de ${euroLabel(p.amountCents / 100)} pedido. Chega ao teu IBAN em 1–2 dias úteis.')));
      ref.invalidate(partnerConnectStatusProvider);
    } on ConnectError catch (e) {
      messenger.showSnackBar(SnackBar(
        content: Text(switch (e.code) {
          'no_balance' => 'Ainda não há saldo disponível.',
          'payouts_disabled' => 'A Stripe ainda está a verificar os teus dados.',
          _ => 'Não foi possível levantar. Tenta outra vez.',
        }),
      ));
    } finally {
      if (mounted) setState(() => _paying = false);
    }
  }

  /// Confirmação com motivo opcional. Devolve o motivo ('' sem motivo) ou null se cancelou.
  Future<String?> _confirm({required String title, required String message, required String action}) {
    final reason = TextEditingController();
    return showIslandDialog<String>(
      context: context,
      builder: (ctx) => IslandAlert(
        title: Text(title),
        content: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text(message),
          const SizedBox(height: 12),
          TextField(
            controller: reason,
            maxLength: 300,
            decoration: const InputDecoration(labelText: 'Motivo (opcional, quem comprou vê)'),
          ),
        ]),
        actions: [
          TextButton(onPressed: () => Navigator.of(ctx).pop(), child: const Text('Voltar')),
          FilledButton(onPressed: () => Navigator.of(ctx).pop(reason.text.trim()), child: Text(action)),
        ],
      ),
    );
  }

  Future<void> _refundOne(String weddingId, EventTicketRow t) async {
    final reason = await _confirm(
      title: 'Reembolsar ${t.buyerName}?',
      message: '${t.buyerName} recebe ${euroLabel(t.amount)} de volta e sai do evento. '
          'A taxa de serviço deste bilhete não é devolvida.',
      action: 'Reembolsar',
    );
    if (reason == null || !mounted) return;
    final messenger = ScaffoldMessenger.of(context);
    try {
      await refundTicket(t.id, reason: reason.isEmpty ? null : reason);
      messenger.showSnackBar(SnackBar(content: Text('Reembolso de ${euroLabel(t.amount)} feito. Chega ao cartão em 5 a 10 dias.')));
    } on TicketError {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível reembolsar. Tenta outra vez.')));
    }
    ref.invalidate(eventTicketListProvider(weddingId));
    ref.invalidate(ticketSummaryProvider(weddingId));
  }

  Future<void> _cancelEvent(String weddingId, TicketSummary summary) async {
    final reason = await _confirm(
      title: 'Cancelar o evento?',
      message: 'O evento sai do Descobrir e deixa de vender bilhetes. '
          '${summary.sold == 0 ? 'Ainda não há bilhetes vendidos.' : 'Os ${summary.sold} bilhetes vendidos são reembolsados (${euroLabel(summary.gross)}); a taxa de serviço não é devolvida.'} '
          'Não dá para desfazer.',
      action: 'Cancelar evento',
    );
    if (reason == null || !mounted) return;
    setState(() => _cancelling = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      final res = await cancelPaidEvent(weddingId, reason: reason.isEmpty ? null : reason);
      messenger.showSnackBar(SnackBar(
        content: Text(res.failed == 0
            ? 'Evento cancelado. ${res.refunded} ${res.refunded == 1 ? 'bilhete reembolsado' : 'bilhetes reembolsados'}.'
            : 'Evento cancelado, mas ${res.failed} reembolsos falharam. Toca outra vez em Cancelar para repetir.'),
      ));
      ref.invalidate(eventIsPublicProvider(weddingId));
    } on TicketError {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível cancelar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _cancelling = false);
    }
    ref.invalidate(eventTicketListProvider(weddingId));
    ref.invalidate(ticketSummaryProvider(weddingId));
  }

  Widget _line(String label, String value, {bool strong = false}) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 4),
        child: Row(children: [
          Expanded(child: Text(label, style: TextStyle(fontSize: 14, color: strong ? AppTheme.ink : AppTheme.inkMuted))),
          Text(value, style: TextStyle(fontSize: strong ? 17 : 14, fontWeight: strong ? FontWeight.w700 : FontWeight.w500, color: AppTheme.ink)),
        ]),
      );

  @override
  Widget build(BuildContext context) {
    final wedding = ref.watch(weddingControllerProvider).wedding;
    final statusAsync = ref.watch(partnerConnectStatusProvider);
    final s = statusAsync.value;
    final summary = wedding == null ? null : ref.watch(ticketSummaryProvider(wedding.id)).value;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 40),
          children: [
            const PageHeader(title: 'Bilhetes', centered: true),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: softCard(),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                const Text('RECEBER PAGAMENTOS',
                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.inkMuted)),
                const SizedBox(height: 6),
                if (statusAsync.isLoading && s == null)
                  const Padding(padding: EdgeInsets.all(12), child: Center(child: CircularProgressIndicator()))
                else ...[
                  Text(
                    s == null || !s.hasAccount
                        ? 'Ainda não ativaste a venda de bilhetes.'
                        : s.active
                            ? 'Ativo. Os bilhetes pagos entram na tua conta.'
                            : s.needsData
                                ? 'Faltam alguns dados para a Stripe.'
                                : 'A Stripe está a verificar os teus dados.',
                    style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink),
                  ),
                  if (s?.bankLast4 != null)
                    Text('IBAN terminado em ${s!.bankLast4}', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  const SizedBox(height: 12),
                  if (s == null || !s.active)
                    FilledButton(
                      onPressed: () => context.push('/bilhetes/ativar'),
                      style: FilledButton.styleFrom(backgroundColor: AppTheme.ink),
                      child: Text(s == null || !s.hasAccount ? 'Ativar venda de bilhetes' : 'Completar dados'),
                    ),
                ],
              ]),
            ),
            const SizedBox(height: 14),
            if (summary != null)
              Container(
                padding: const EdgeInsets.all(16),
                decoration: softCard(),
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  Text('VENDAS · ${wedding!.displayNames.toUpperCase()}',
                      style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.inkMuted)),
                  const SizedBox(height: 8),
                  _line('Bilhetes vendidos', '${summary.sold}'),
                  _line('Total pago pelos convidados', euroLabel(summary.gross)),
                  _line('Taxa de serviço', '− ${euroLabel(summary.platformFee + summary.stripeFee)}'),
                  if (summary.refunded > 0)
                    _line('Reembolsados (${summary.refunded})', '${euroLabel(summary.refundedAmount)} devolvidos'),
                  const Divider(height: 18),
                  _line('Recebes', euroLabel(summary.net), strong: true),
                ]),
              ),
            if (wedding != null) ...[
              const SizedBox(height: 14),
              _TicketList(weddingId: wedding.id, onRefund: (t) => _refundOne(wedding.id, t)),
            ],
            const SizedBox(height: 14),
            if (s != null && s.hasAccount)
              Container(
                padding: const EdgeInsets.all(16),
                decoration: softCard(),
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  const Text('SALDO', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.inkMuted)),
                  const SizedBox(height: 8),
                  _line('Disponível', euroLabel(s.availableCents / 100), strong: true),
                  _line('A caminho (ainda em processamento)', euroLabel(s.pendingCents / 100)),
                  const SizedBox(height: 10),
                  FilledButton(
                    onPressed: s.payoutsEnabled && s.availableCents > 0 && !_paying ? _payout : null,
                    style: FilledButton.styleFrom(backgroundColor: AppTheme.ink),
                    child: _paying
                        ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                        : const Text('Levantar para o IBAN'),
                  ),
                ]),
              ),
            const SizedBox(height: 16),
            const Text(
              'Quem compra paga só o preço do bilhete. Do que recebes descontamos a taxa de serviço. '
              'Se reembolsares um bilhete ou cancelares o evento, quem comprou recebe tudo de volta e a taxa de serviço não é devolvida.',
              style: TextStyle(fontSize: 12.5, height: 1.45, color: AppTheme.inkMuted),
            ),
            // Visível também depois de cancelar, enquanto houver bilhetes por reembolsar (repetir falhas).
            if (wedding != null && summary != null && ((ref.watch(eventIsPublicProvider(wedding.id)).value ?? false) || summary.sold > 0)) ...[
              const SizedBox(height: 18),
              OutlinedButton.icon(
                onPressed: _cancelling ? null : () => _cancelEvent(wedding.id, summary),
                icon: _cancelling
                    ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                    : const Icon(Icons.event_busy_outlined),
                label: const Text('Cancelar evento e reembolsar'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: const Color(0xFFB4432E),
                  side: const BorderSide(color: Color(0xFFE5B9AE)),
                  minimumSize: const Size.fromHeight(48),
                  shape: const StadiumBorder(),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

/// Bilhetes vendidos, com reembolso individual (migração 152).
class _TicketList extends ConsumerWidget {
  final String weddingId;
  final void Function(EventTicketRow) onRefund;
  const _TicketList({required this.weddingId, required this.onRefund});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final rows = ref.watch(eventTicketListProvider(weddingId)).value ?? const <EventTicketRow>[];
    if (rows.isEmpty) return const SizedBox.shrink();
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 14, 8, 8),
      decoration: softCard(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Text('BILHETES', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.inkMuted)),
        const SizedBox(height: 4),
        for (final t in rows)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 4),
            child: Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(t.buyerName,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontSize: 14.5,
                        fontWeight: FontWeight.w700,
                        color: t.refunded ? AppTheme.inkMuted : AppTheme.ink,
                        decoration: t.refunded ? TextDecoration.lineThrough : null,
                      )),
                  Text('${t.quantity} × · ${euroLabel(t.amount)}${t.refunded ? ' · reembolsado' : ''}${t.checkedInAt != null ? ' · entrou às ${t.checkedInAt!.hour.toString().padLeft(2, '0')}:${t.checkedInAt!.minute.toString().padLeft(2, '0')}' : ''}',
                      style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                ]),
              ),
              if (!t.refunded)
                TextButton(onPressed: () => onRefund(t), child: const Text('Reembolsar')),
            ]),
          ),
      ]),
    );
  }
}
