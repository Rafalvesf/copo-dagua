import 'dart:async';

import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/events/event_pay.dart';
import '../../../core/payments/payments.dart' show stripePublishableKey;
import '../../../core/payments/stripe_element.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'ticket_pass_screens.dart' show EntryQrPanel, brandQr;

/// «No evento» (mockup aprovado, 2026-11-23): o QR de entrada (roda a cada
/// 30 s, com nome e mesa) e o QR de pagamento de uso único, com o código por
/// baixo. Sem saldo (decisão do utilizador: nada de moeda eletrónica): o QR
/// só identifica quem paga; quem cobra escreve o valor e o servidor cobra
/// na hora o cartão guardado. Em vez de saldo: «Gasto neste evento» e os
/// movimentos.
class EventPayScreen extends ConsumerStatefulWidget {
  final String weddingId;
  final bool startOnEntry;
  const EventPayScreen({super.key, required this.weddingId, this.startOnEntry = false});

  @override
  ConsumerState<EventPayScreen> createState() => _EventPayScreenState();
}

class _EventPayScreenState extends ConsumerState<EventPayScreen> with WidgetsBindingObserver {
  late bool _entry = widget.startOnEntry;
  EventPayState? _state;
  String? _code;
  String? _codeError;
  bool _busy = false;
  Timer? _poll;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _load(newCode: true);
    // Enquanto o ecrã está aberto: novos movimentos e QR já usado.
    _poll = Timer.periodic(const Duration(seconds: 4), (_) => _load());
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _poll?.cancel();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) _load();
  }

  Future<void> _load({bool newCode = false}) async {
    final s = await fetchEventPay(widget.weddingId, code: _code);
    if (!mounted) return;
    setState(() => _state = s);
    // O QR muda depois de cada utilização (ou quando expira).
    if (s.enabled && s.card != null && (newCode || _code == null || !s.codeValid)) {
      final r = await issuePayCode(widget.weddingId);
      if (!mounted) return;
      setState(() {
        _code = r.error == null ? r.code : null;
        _codeError = r.error;
      });
    }
  }

  Future<void> _saveCard() async {
    final saved = await showIslandSheet<bool>(
      context: context,
      isScrollControlled: true,
      confirmExit: true,
      builder: (_) => const _SaveCardSheet(),
    );
    if (saved == true) await _load(newCode: true);
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
              const Text('No evento', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
            const SizedBox(height: 16),
            Row(children: [
              _Pill(label: 'Entrada', selected: _entry, onTap: () => setState(() => _entry = true)),
              const SizedBox(width: 8),
              _Pill(label: 'Pagar', selected: !_entry, onTap: () => setState(() => _entry = false)),
            ]),
            const SizedBox(height: 20),
            if (_entry)
              EntryQrPanel(weddingId: widget.weddingId)
            else if (s == null)
              const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
            else if (!s.enabled)
              const Text('Ainda não há pagamentos com QR neste evento.',
                  textAlign: TextAlign.center, style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted))
            else ...[
              ..._payQr(s),
              const SizedBox(height: 20),
              _summary(s),
              for (final p in s.payments.where((p) => p.needsMe)) ...[const SizedBox(height: 12), _pending(p)],
              const SizedBox(height: 20),
              ..._history(s),
            ],
          ],
        ),
      ),
    );
  }

  List<Widget> _payQr(EventPayState s) {
    if (s.card == null) {
      return [
        _WhiteCard(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Paga com o QR', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 4),
            const Text(
              'Guarda um cartão uma vez. No bar mostras o QR, o parceiro escreve o valor e o cartão é cobrado na hora. Não há saldo para carregar.',
              style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.ink),
            ),
            const SizedBox(height: 14),
            SizedBox(
              height: 44,
              width: double.infinity,
              child: FilledButton(onPressed: _saveCard, child: const Text('Guardar cartão', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700))),
            ),
          ]),
        ),
      ];
    }
    final w = MediaQuery.sizeOf(context).width;
    final size = (w - 2 * AppTheme.screenMargin - 48).clamp(180.0, 260.0);
    final code = _code;
    return [
      Center(
        child: Container(
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.lg), boxShadow: AppTheme.searchBarShadow),
          child: Column(children: [
            SizedBox(
              width: size,
              height: size,
              child: code != null
                  ? brandQr(payQrData(code), size, label: 'Código QR para pagar')
                  : Center(
                      child: _codeError == null
                          ? const CircularProgressIndicator()
                          : TextButton(onPressed: () => _load(newCode: true), child: const Text('Tentar outra vez')),
                    ),
            ),
            const SizedBox(height: 14),
            if (code != null)
              SelectableText(code,
                  style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, letterSpacing: 3, color: AppTheme.ink)),
            const SizedBox(height: 4),
            const Text('Uso único: muda depois de cada pagamento.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
      ),
    ];
  }

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

class _Pill extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;
  const _Pill({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: selected,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(20),
          child: Container(
            height: 36,
            padding: const EdgeInsets.symmetric(horizontal: 18),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: selected ? AppTheme.ink : Colors.white,
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: AppTheme.ink, width: 1.5),
            ),
            child: Text(label,
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
          ),
        ),
      );
}

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

/// Quem cobra (bar, parceiro, organizador) leu o QR de pagamento com a
/// câmara: escreve o valor e confirma. O servidor cobra o cartão guardado.
class ChargeScreen extends StatefulWidget {
  final String code;
  const ChargeScreen({super.key, required this.code});

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
      'code': widget.code,
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
      _payer = r['payer_name'] as String?;
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
