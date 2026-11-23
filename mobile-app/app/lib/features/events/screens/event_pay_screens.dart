import 'dart:async';

import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart'
    show PostgresChangeEvent, PostgresChangeFilter, PostgresChangeFilterType, RealtimeChannel;

import '../../../core/auth/auth_controller.dart';
import '../../../core/events/event_pay.dart';
import '../../../core/payments/payments.dart' show stripePublishableKey;
import '../../../core/payments/stripe_element.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/skeleton.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../core/events/my_qr.dart';
import 'ticket_pass_screens.dart' show MyQrCard;

/// «Pagamentos no evento» (2026-11-23). Sem saldo (decisão do utilizador:
/// nada de moeda eletrónica): para pagar mostra-se o QR da conta (migração
/// 228, o mesmo da página principal); quem cobra lê-o, escreve o valor e o
/// servidor cobra na hora o cartão guardado. Em vez de saldo: «Gasto neste
/// evento», os movimentos e «Cartão: •••• 4242 · mudar».
class EventPayScreen extends ConsumerStatefulWidget {
  final String eventId;
  const EventPayScreen({super.key, required this.eventId});

  @override
  ConsumerState<EventPayScreen> createState() => _EventPayScreenState();
}

class _EventPayScreenState extends ConsumerState<EventPayScreen> with WidgetsBindingObserver {
  EventPayState? _state;
  bool _busy = false;
  Timer? _poll;
  RealtimeChannel? _channel;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _load();
    // Novos movimentos e pedidos para confirmar chegam por Realtime
    // («updates to all», migração 229); a leitura de 30 em 30 s fica de reserva.
    _poll = Timer.periodic(const Duration(seconds: 30), (_) => _load());
    final me = supabase.auth.currentUser?.id;
    if (me != null) {
      _channel = supabase
          .channel('event-pay-$me-${widget.eventId}')
          .onPostgresChanges(
            event: PostgresChangeEvent.all,
            schema: 'public',
            table: 'event_payments',
            filter: PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: 'payer_id', value: me),
            callback: (_) => _load(),
          )
          .subscribe();
    }
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _poll?.cancel();
    final c = _channel;
    if (c != null) supabase.removeChannel(c);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) _load();
  }

  Future<void> _load() async {
    final s = await fetchEventPay(widget.eventId);
    if (mounted) setState(() => _state = s);
  }

  Future<void> _saveCard() async {
    final saved = await showIslandSheet<bool>(
      context: context,
      isScrollControlled: true,
      confirmExit: true,
      builder: (_) => const _SaveCardSheet(),
    );
    if (saved == true) await _load();
  }

  Future<void> _approve(EventPayment p, {required bool accept}) async {
    setState(() => _busy = true);
    try {
      if (!accept) {
        await eventPay({'action': 'decline', 'payment_id': p.id});
        return;
      }
      final r = await eventPay({'action': 'approve', 'payment_id': p.id});
      if (r['status'] == 'requires_action' && r['client_secret'] is String) {
        final pk = await stripePublishableKey();
        if (pk == null) {
          _toast('Não foi possível abrir a confirmação do banco.');
          return;
        }
        final stripe = createStripePay();
        final res = await stripe.confirmAction(pk, r['client_secret'] as String);
        stripe.dispose();
        if (res['error'] != null) _toast('${res['error']}');
        await eventPay({'action': 'sync', 'payment_id': p.id});
      } else if (r['status'] == 'failed' || r['error'] != null) {
        _toast('O banco recusou o pagamento.');
      }
    } finally {
      if (mounted) setState(() => _busy = false);
      await _load();
    }
  }

  void _toast(String m) {
    if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(m)));
  }

  @override
  Widget build(BuildContext context) {
    final s = _state;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        top: false,
        child: ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40)
              .add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            Row(children: [
              V2RoundButton(icon: Hi.arrowLeft, tooltip: 'Voltar', onTap: () => Navigator.of(context).maybePop()),
              const SizedBox(width: 12),
              const Expanded(
                child: Text('Pagamentos', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ]),
            const SizedBox(height: 16),
            const MyQrCard(),
            const SizedBox(height: 16),
            if (s == null)
              const SkeletonList(count: 4, padding: EdgeInsets.zero)
            else if (!s.enabled)
              const Text('Ainda não há pagamentos com QR neste evento.',
                  textAlign: TextAlign.center, style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted))
            else ...[
              if (s.card == null) ...[_noCard(), const SizedBox(height: 16)],
              for (final p in s.payments.where((p) => p.needsMe)) ...[_pending(p), const SizedBox(height: 12)],
              _summary(s),
              const SizedBox(height: 20),
              ..._history(s),
            ],
          ],
        ),
      ),
    );
  }

  Widget _noCard() => _WhiteCard(
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Text('Paga com o teu QR', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 4),
          const Text(
            'Guarda um cartão uma vez. No bar mostras o teu QR, o parceiro escreve o valor e o cartão é cobrado na hora. Não há saldo para carregar.',
            style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.ink),
          ),
          const SizedBox(height: 14),
          SizedBox(
            height: 44,
            width: double.infinity,
            child: FilledButton(onPressed: _saveCard, child: const Text('Guardar cartão', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700))),
          ),
        ]),
      );

  Widget _summary(EventPayState s) => _WhiteCard(
        child: Column(children: [
          Row(children: [
            const Expanded(child: Text('Gasto neste evento', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            Text(euros(s.spentCents), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
          const Divider(height: 24, color: AppTheme.line),
          InkWell(
            onTap: _saveCard,
            child: Row(children: [
              const Icon(Hi.creditCard, size: 20, color: AppTheme.ink),
              const SizedBox(width: 10),
              Expanded(
                child: Text('Cartão: ${s.card?.label ?? '—'}', style: const TextStyle(fontSize: 14, color: AppTheme.ink)),
              ),
              Text('mudar', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
            ]),
          ),
          const SizedBox(height: 8),
          const Text('Até 50 € por pagamento e 300 € por evento. Acima de 25 € confirmas aqui.',
              style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ]),
      );

  Widget _pending(EventPayment p) => _WhiteCard(
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('Confirmar ${euros(p.amountCents)}', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 2),
          Text([p.merchant, if (p.description != null) p.description!].join(' · '),
              style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(height: 12),
          Row(children: [
            Expanded(
              child: SizedBox(
                height: 44,
                child: OutlinedButton(
                  onPressed: _busy ? null : () => _approve(p, accept: false),
                  child: const Text('Recusar', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                ),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: SizedBox(
                height: 44,
                child: FilledButton(
                  onPressed: _busy ? null : () => _approve(p, accept: true),
                  child: const Text('Pagar', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                ),
              ),
            ),
          ]),
        ]),
      );

  List<Widget> _history(EventPayState s) {
    final done = s.payments.where((p) => !p.needsMe).toList();
    if (done.isEmpty) return const [];
    return [
      const Text('MOVIMENTOS', style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      const SizedBox(height: 8),
      for (var i = 0; i < done.length; i++) ...[
        if (i > 0) const Divider(height: 1, color: AppTheme.line),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 12),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(done[i].merchant, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(
                  [
                    if (done[i].description != null) done[i].description!,
                    if (done[i].createdAt != null) _hhmm(done[i].createdAt!),
                    switch (done[i].status) {
                      'failed' => 'Recusado',
                      'cancelled' => 'Cancelado',
                      'refunded' => 'Reembolsado',
                      'processing' => 'A processar',
                      _ => null,
                    },
                  ].whereType<String>().join(' · '),
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                ),
              ]),
            ),
            Text(
              euros(done[i].amountCents),
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w700,
                color: done[i].status == 'succeeded' ? AppTheme.ink : AppTheme.inkMuted,
                decoration: done[i].status == 'succeeded' || done[i].status == 'processing' ? null : TextDecoration.lineThrough,
              ),
            ),
          ]),
        ),
      ],
    ];
  }
}

String _hhmm(DateTime d) => '${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';

class _WhiteCard extends StatelessWidget {
  final Widget child;
  const _WhiteCard({required this.child});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: child,
      );
}

/// Guardar (ou mudar) o cartão: campos da Stripe → SetupIntent no servidor
/// → 3DS na app se o banco pedir. O número nunca passa pela app.
class _SaveCardSheet extends ConsumerStatefulWidget {
  const _SaveCardSheet();

  @override
  ConsumerState<_SaveCardSheet> createState() => _SaveCardSheetState();
}

class _SaveCardSheetState extends ConsumerState<_SaveCardSheet> {
  final StripePay _stripe = createStripePay();
  String? _pk;
  CardFieldsState _card = const CardFieldsState();
  bool _mounted = false;
  bool _busy = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _mount();
  }

  @override
  void dispose() {
    _stripe.dispose();
    super.dispose();
  }

  Future<void> _mount() async {
    final pk = await stripePublishableKey();
    if (!mounted) return;
    if (pk == null || !_stripe.supported) {
      setState(() => _error = 'Não foi possível preparar os campos do cartão.');
      return;
    }
    _pk = pk;
    await Future<void>.delayed(const Duration(milliseconds: 60));
    try {
      await _stripe.mountCard(pk, (s) {
        if (mounted) setState(() => _card = s);
      });
      if (mounted) setState(() => _mounted = true);
    } catch (_) {
      if (mounted) setState(() => _error = 'Não foi possível carregar os campos do cartão.');
    }
  }

  Future<void> _save() async {
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final email = ref.read(authControllerProvider).profile?.email;
      final pm = await _stripe.cardMethod(email);
      if (pm['id'] is! String) {
        setState(() => _error = '${pm['error'] ?? 'O cartão não é válido.'}');
        return;
      }
      var r = await eventPay({'action': 'save_card', 'payment_method': pm['id']});
      if (r['status'] == 'requires_action' && r['client_secret'] is String) {
        final c = await _stripe.confirmAction(_pk!, r['client_secret'] as String, setup: true);
        if (c['error'] != null) {
          setState(() => _error = '${c['error']}');
          return;
        }
        r = await eventPay({'action': 'finish_card', 'setup_intent_id': r['setup_intent_id']});
      }
      if (r['status'] == 'saved') {
        if (mounted) Navigator.of(context).pop(true);
        return;
      }
      setState(() => _error = 'O banco não aceitou este cartão. Tenta outro.');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _remove() async {
    setState(() => _busy = true);
    await eventPay({'action': 'remove_card'});
    if (mounted) Navigator.of(context).pop(true);
  }

  Widget _box(Widget child) => Container(
        height: 52,
        padding: const EdgeInsets.symmetric(horizontal: 18),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(26), border: Border.all(color: AppTheme.line)),
        alignment: Alignment.centerLeft,
        child: SizedBox(height: 24, width: double.infinity, child: child),
      );

  @override
  Widget build(BuildContext context) {
    final error = _error ?? _card.error;
    return Padding(
      padding: EdgeInsets.fromLTRB(20, 20, 20, 20 + MediaQuery.viewInsetsOf(context).bottom),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Text('Cartão para pagar no evento', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 6),
        const Text(
          'Fica guardado na Stripe, não na À Nossa!. Só é cobrado quando mostras o QR (acima de 25 €, só depois de confirmares).',
          style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.ink),
        ),
        const SizedBox(height: 16),
        if (!_stripe.splitFields)
          _box(_stripe.cardPart(CardPart.number))
        else ...[
          _box(_stripe.cardPart(CardPart.number)),
          const SizedBox(height: 10),
          Row(children: [
            Expanded(child: _box(_stripe.cardPart(CardPart.expiry))),
            const SizedBox(width: 10),
            Expanded(child: _box(_stripe.cardPart(CardPart.cvc))),
          ]),
        ],
        if (error.isNotEmpty) ...[
          const SizedBox(height: 10),
          Text(error, style: const TextStyle(fontSize: 13, color: Color(0xFFB3261E))),
        ],
        const SizedBox(height: 18),
        SizedBox(
          height: 52,
          child: FilledButton(
            onPressed: _busy || !_mounted || !_card.complete ? null : _save,
            child: _busy
                ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Text('Guardar cartão', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700)),
          ),
        ),
        TextButton(onPressed: _busy ? null : _remove, child: const Text('Remover o cartão guardado')),
      ]),
    );
  }
}

/// Cobrar a partir de uma leitura do QR da conta (`ScanScreen`): quem
/// cobra escreve o valor e confirma; o servidor cobra o cartão guardado.
/// Uma leitura = uma cobrança (migração 229).
class ChargeScreen extends StatefulWidget {
  final String scanId;
  final String eventId;
  final String? payerName;
  const ChargeScreen({super.key, required this.scanId, required this.eventId, this.payerName});

  @override
  State<ChargeScreen> createState() => _ChargeScreenState();
}

class _ChargeScreenState extends State<ChargeScreen> {
  final _amount = TextEditingController();
  final _description = TextEditingController();
  bool _busy = false;
  String? _error;
  String? _status;
  String? _paymentId;
  String? _payer;
  int _cents = 0;
  Timer? _poll;
  int _polls = 0;

  @override
  void dispose() {
    _poll?.cancel();
    _amount.dispose();
    _description.dispose();
    super.dispose();
  }

  int? get _parsed {
    final v = double.tryParse(_amount.text.trim().replaceAll('€', '').replaceAll(',', '.'));
    return v == null ? null : (v * 100).round();
  }

  Future<void> _charge() async {
    final cents = _parsed;
    if (cents == null || cents < 50) {
      setState(() => _error = 'Escreve um valor a partir de 0,50 €.');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    final r = await eventPay({
      'action': 'charge',
      'scan_id': widget.scanId,
      'wedding_id': widget.eventId,
      'amount_cents': cents,
      'description': _description.text.trim(),
    });
    if (!mounted) return;
    setState(() {
      _busy = false;
      if (r['result'] != 'ok') {
        _error = chargeErrorText('${r['result'] ?? r['error']}');
        return;
      }
      _cents = cents;
      _paymentId = r['payment_id'] as String?;
      _payer = (r['payer_name'] as String?) ?? widget.payerName;
      _status = r['status'] as String?;
    });
    if (_status == 'awaiting_payer' || _status == 'requires_action' || _status == 'processing') _startPolling();
  }

  void _startPolling() {
    _poll?.cancel();
    _polls = 0;
    _poll = Timer.periodic(const Duration(seconds: 3), (t) async {
      if (++_polls > 60) {
        t.cancel();
        return;
      }
      final r = await eventPay({'action': 'sync', 'payment_id': _paymentId});
      if (!mounted) return;
      final s = r['status'] as String?;
      if (s != null && s != _status) setState(() => _status = s);
      if (s == 'succeeded' || s == 'failed' || s == 'cancelled') t.cancel();
    });
  }

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40),
          children: [
            Row(children: [
              V2RoundButton(icon: Hi.arrowLeft, tooltip: 'Voltar', onTap: () => Navigator.of(context).maybePop()),
              const SizedBox(width: 12),
              const Text('Cobrar', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
            const SizedBox(height: 24),
            if (_status == null) ..._form() else ..._result(),
          ],
        ),
      ),
    );
  }

  List<Widget> _form() => [
        const Text('Valor', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 8),
        TextField(
          controller: _amount,
          autofocus: true,
          keyboardType: const TextInputType.numberWithOptions(decimal: true),
          inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[0-9.,]'))],
          style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink),
          decoration: const InputDecoration(hintText: '0,00', suffixText: '€'),
          onSubmitted: (_) => _charge(),
        ),
        const SizedBox(height: 16),
        const Text('O quê (opcional)', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 8),
        TextField(
          controller: _description,
          maxLength: 80,
          decoration: const InputDecoration(hintText: 'Ex.: 2 cervejas'),
        ),
        const SizedBox(height: 4),
        const Text('Máximo 50 € por cobrança. Acima de 25 €, a pessoa confirma na app dela.',
            style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        if (_error != null) ...[
          const SizedBox(height: 12),
          Text(_error!, style: const TextStyle(fontSize: 14, color: Color(0xFFB3261E))),
        ],
        const SizedBox(height: 20),
        SizedBox(
          height: 52,
          child: FilledButton(
            onPressed: _busy ? null : _charge,
            child: _busy
                ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Text('Cobrar', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700)),
          ),
        ),
      ];

  List<Widget> _result() {
    final who = _payer ?? 'A pessoa';
    final (IconData icon, Color color, String title, String text) = switch (_status) {
      'succeeded' => (Hi.checkCircle, AppTheme.accentOliveDark, 'Pago', '${euros(_cents)} · $who'),
      'awaiting_payer' => (Hi.clock, const Color(0xFF9A5B00), 'À espera de confirmação', '$who tem de confirmar ${euros(_cents)} na app.'),
      'requires_action' => (Hi.clock, const Color(0xFF9A5B00), 'O banco pediu confirmação', '$who tem de confirmar na app.'),
      'processing' => (Hi.clock, AppTheme.inkMuted, 'A processar', '${euros(_cents)} · $who'),
      'cancelled' => (Hi.xCircle, const Color(0xFFB3261E), 'Recusado', '$who recusou o pagamento.'),
      _ => (Hi.xCircle, const Color(0xFFB3261E), 'Cartão recusado', 'Não foi cobrado nada. Pede outro meio de pagamento.'),
    };
    return [
      const SizedBox(height: 24),
      Icon(icon, size: 96, color: color),
      const SizedBox(height: 16),
      Text(title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      const SizedBox(height: 8),
      Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, height: 1.4, color: AppTheme.ink)),
      const SizedBox(height: 32),
      SizedBox(
        height: 52,
        child: OutlinedButton(
          onPressed: () => Navigator.of(context).maybePop(),
          child: const Text('Feito', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700)),
        ),
      ),
    ];
  }
}


/// «Quem é» (migração 228): quem lê o QR da conta de alguém (sobretudo o
/// parceiro, para verificar a marcação; o organizador à entrada) vê o nome
/// da pessoa e só o que os liga: as suas marcações em eventos onde ela vai,
/// ou a entrada nos eventos que organiza. Daqui regista a chegada/entrada
/// ou cobra (uma cobrança por leitura).
class ScanScreen extends StatefulWidget {
  final String token;
  const ScanScreen({super.key, required this.token});

  @override
  State<ScanScreen> createState() => _ScanScreenState();
}

class _ScanScreenState extends State<ScanScreen> {
  late Future<ScanResult> _future = scanQr(widget.token);
  final Map<String, ({String result, DateTime? at})> _done = {};
  String? _busy;

  String _key(ScanItem i) => i.bookingId ?? 'e${i.eventId}';

  Future<void> _confirm(ScanResult r, ScanItem i) async {
    setState(() => _busy = _key(i));
    final res = await scanConfirm(r.scanId!, i);
    if (!mounted) return;
    setState(() {
      _busy = null;
      _done[_key(i)] = res;
    });
  }

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: FutureBuilder<ScanResult>(
          future: _future,
          builder: (context, snap) {
            if (!snap.hasData) return const SkeletonPage(carousel: false, rows: 3);
            final r = snap.data!;
            return ListView(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40),
              children: [
                Row(children: [
                  V2RoundButton(icon: Hi.arrowLeft, tooltip: 'Voltar', onTap: () => Navigator.of(context).maybePop()),
                ]),
                const SizedBox(height: 16),
                if (r.result != 'ok') ..._problem(r) else ..._person(r),
              ],
            );
          },
        ),
      ),
    );
  }

  List<Widget> _problem(ScanResult r) {
    final (IconData icon, String title, String text) = switch (r.result) {
      'expired' => (Hi.clock, 'QR expirado', 'Este QR já mudou. Pede para mostrar o QR outra vez e lê de novo.'),
      'own_code' => (Hi.informationCircle, 'É o teu QR', 'Este é o teu próprio QR.'),
      'not_found' => (Hi.xCircle, 'QR inválido', 'Este código não é um QR da À Nossa! válido.'),
      _ => (Hi.signalSlash, 'Não foi possível ler', 'Verifica a ligação e tenta outra vez.'),
    };
    return [
      const SizedBox(height: 40),
      Icon(icon, size: 96, color: r.result == 'error' ? AppTheme.inkMuted : const Color(0xFFB3261E)),
      const SizedBox(height: 16),
      Text(title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      const SizedBox(height: 8),
      Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, height: 1.4, color: AppTheme.ink)),
      if (r.result == 'error') ...[
        const SizedBox(height: 24),
        FilledButton(onPressed: () => setState(() => _future = scanQr(widget.token)), child: const Text('Tentar outra vez')),
      ],
    ];
  }

  List<Widget> _person(ScanResult r) {
    final name = r.name ?? 'Convidado';
    return [
      Center(
        child: CircleAvatar(
          radius: 44,
          backgroundColor: AppTheme.ink,
          foregroundImage: r.avatarUrl != null && r.avatarUrl!.isNotEmpty ? NetworkImage(r.avatarUrl!) : null,
          child: Text(name.trim().isEmpty ? '?' : name.trim()[0].toUpperCase(),
              style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: Colors.white)),
        ),
      ),
      const SizedBox(height: 12),
      Text(name, textAlign: TextAlign.center, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      const SizedBox(height: 4),
      const Text('QR verificado agora', textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
      const SizedBox(height: 24),
      if (r.items.isEmpty)
        const Text(
          'Esta pessoa não tem marcações contigo nem entradas em eventos que organizas.',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 16, height: 1.4, color: AppTheme.ink),
        )
      else
        for (final i in r.items) ...[_item(r, i), const SizedBox(height: 12)],
    ];
  }

  Widget _item(ScanResult r, ScanItem i) {
    final key = _key(i);
    final done = _done[key];
    final at = done?.at ?? i.doneAt;
    final booking = i.kind == 'booking';
    final already = done == null && i.doneAt != null;
    final blocked = !booking && i.isPaid && i.ticketStatus != 'paid';
    final meta = [
      if (i.date != null) '${i.date!.day.toString().padLeft(2, '0')}/${i.date!.month.toString().padLeft(2, '0')}/${i.date!.year}',
      if (booking && i.bookingNumber != null) 'Marcação ${i.bookingNumber}',
      if (booking && i.people != null) '${i.people} pessoas',
      if (!booking && i.isPaid) i.ticketStatus == 'paid' ? (i.quantity == 1 ? 'Bilhete pago · 1 pessoa' : 'Bilhete pago · ${i.quantity} pessoas') : 'Sem bilhete pago',
    ].join(' · ');
    final (String? statusText, Color statusColor) = switch (done?.result) {
      'ok' => ('${booking ? 'Chegada' : 'Entrada'} registada às ${_hhmm(done!.at ?? DateTime.now())}', AppTheme.accentOliveDark),
      'already' => ('Já ${booking ? 'chegou' : 'entrou'} às ${at == null ? '—' : _hhmm(at)}', const Color(0xFF9A5B00)),
      'expired' => ('A leitura expirou. Lê o QR outra vez.', const Color(0xFFB3261E)),
      'not_paid' => ('Bilhete por pagar.', const Color(0xFFB3261E)),
      'refunded' => ('Bilhete reembolsado.', const Color(0xFFB3261E)),
      null => already
          ? ('Já ${booking ? 'chegou' : 'entrou'} às ${_hhmm(i.doneAt!)}', const Color(0xFF9A5B00))
          : blocked
              ? ('Sem bilhete pago: não dá entrada.', const Color(0xFFB3261E))
              : (null, AppTheme.ink),
      _ => ('Não foi possível registar. Tenta outra vez.', const Color(0xFFB3261E)),
    };
    final showConfirm = !already && !blocked && (done == null || done.result == 'error');
    return _WhiteCard(
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(booking ? 'A TUA MARCAÇÃO' : 'ENTRADA NO TEU EVENTO',
            style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        const SizedBox(height: 4),
        Text(i.event, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        if (statusText != null) ...[
          const SizedBox(height: 8),
          Text(statusText, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: statusColor)),
        ],
        const SizedBox(height: 12),
        Row(children: [
          if (showConfirm)
            Expanded(
              child: SizedBox(
                height: 44,
                child: FilledButton(
                  onPressed: _busy == null ? () => _confirm(r, i) : null,
                  child: _busy == key
                      ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                      : Text(booking ? 'Registar chegada' : 'Registar entrada', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                ),
              ),
            ),
          if (showConfirm && i.canCharge) const SizedBox(width: 10),
          if (i.canCharge)
            Expanded(
              child: SizedBox(
                height: 44,
                child: OutlinedButton(
                  onPressed: () => Navigator.of(context).push(MaterialPageRoute(
                    builder: (_) => ChargeScreen(scanId: r.scanId!, eventId: i.eventId, payerName: r.name),
                  )),
                  child: const Text('Cobrar', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                ),
              ),
            ),
        ]),
      ]),
    );
  }
}
