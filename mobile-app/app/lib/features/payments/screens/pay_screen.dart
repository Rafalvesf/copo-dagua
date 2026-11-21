import '../../../shared/widgets/estrela.dart';
import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'dart:async';

import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/invites/invites.dart';
import '../../../core/payments/payments.dart';
import '../../../core/payments/stripe_element.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/pay_later_sheet.dart';
import '../../../shared/widgets/line_icon.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart' show V2Avatar;

enum _Step { checking, select, loading, card, confirming, mbWayPhone, mbWayWaiting, multibanco, done }

/// Pagamento dentro da app. 2026-10-25 ("quero tudo feito na app"): o ecrã
/// é todo desenhado pela app — nada de formulários da Stripe.
/// - Apple Pay / Google Pay: botão da app → janela do próprio telemóvel.
/// - Cartão: campos da app; o número, a validade e o CVC são campos
///   mínimos da Stripe com a letra e as cores da app (regras PCI: o número
///   do cartão nunca passa pela app).
/// - MB WAY: a app pede o telemóvel e o pedido é enviado pelo servidor.
/// - Multibanco: a referência é gerada no servidor e mostrada aqui.
class PayScreen extends ConsumerStatefulWidget {
  final PayArgs args;
  const PayScreen({super.key, required this.args});

  @override
  ConsumerState<PayScreen> createState() => _PayScreenState();
}

class _PayScreenState extends ConsumerState<PayScreen> {
  _Step _step = _Step.checking;
  PayMethod _method = PayMethod.card;
  final StripePay _stripe = createStripePay();
  String? _pk;
  String _wallet = ''; // apple_pay | google_pay | ''
  bool _cardMounted = false;
  CardFieldsState _card = const CardFieldsState();
  final _phone = TextEditingController();
  String? _error;
  int? _amountCents;
  double _discountPct = 0;
  // Prémio de convites (migração 210): pontos a menos na percentagem.
  double _discountPoints = 0;
  // A taxa desta transação, como fica (ex.: «2 % + 1 €»).
  String? _feeNow;
  MultibancoRef? _mb;
  Timer? _poll;

  /// Prazo deste pagamento (sinal, resto ou a parte de um convidado):
  /// enquanto houver tempo, dá para «Pagar mais tarde» (mockups «Reservar
  /// por categoria», 2026-11-21).
  DateTime? _dueAt;
  bool _deposit = false;

  PayArgs get a => widget.args;

  /// 191: sem sinal nesta categoria — paga-se tudo de uma vez.
  bool get _full => a.isBooking && a.kind == 'deposit' && (ref.watch(paymentIsFullProvider(a.paymentId)).value ?? false);
  String get _amountLabel => euros((_amountCents ?? (a.amount * 100).round()) / 100, cents: true);
  String? get _email => ref.read(authControllerProvider).profile?.email;
  String get _walletName => _wallet == 'apple_pay' ? 'Apple Pay' : 'Google Pay';

  List<PayMethod> get _methods => [
        if (_wallet.isNotEmpty) PayMethod.wallet,
        PayMethod.card,
        // Reservas podem ter de ser devolvidas: só cartão e Apple Pay /
        // Google Pay, que ficam cativos. MB WAY e Multibanco cobram logo
        // (pedido do Rafael, 2026-11-20).
        if (!a.isBooking) PayMethod.mbWay,
        if (!a.isBooking) PayMethod.multibanco,
      ].where((m) => a.methods == null || a.methods!.contains(m)).toList();

  @override
  void initState() {
    super.initState();
    Funnel.track('checkout_open');
    _phone.text = ref.read(authControllerProvider).profile?.phone ?? '';
    _checkExisting();
    _prepare();
    if (a.isBooking) _loadDue();
  }

  Future<void> _loadDue() async {
    try {
      final r = await supabase
          .from('payments')
          .select('due_at, type, booking_id, bookings(choice_deadline, deposit_amount, total_amount)')
          .eq('id', a.paymentId)
          .maybeSingle();
      // Sinal pago ao pedir (sem reserva ainda, migração 207): o «Pagar mais
      // tarde» já foi oferecido no fim do pedido.
      if (r == null || r['booking_id'] == null || !mounted) return;
      final b = r['bookings'] as Map?;
      final raw = r['due_at'] ?? ((a.isGuestShare && b != null) ? b['choice_deadline'] : null);
      final due = raw == null ? null : DateTime.tryParse(raw.toString())?.toLocal();
      final dep = (b?['deposit_amount'] as num?)?.toDouble() ?? 0;
      final tot = (b?['total_amount'] as num?)?.toDouble() ?? 0;
      setState(() {
        _dueAt = due;
        _deposit = r['type'] == 'deposit' && dep < tot;
      });
    } catch (_) {}
  }

  bool get _canPayLater {
    final d = _dueAt;
    return d != null && d.isAfter(DateTime.now());
  }

  /// «Pagar mais tarde?»: o aviso do que acontece sem pagamento (amarelo;
  /// vermelho nos últimos 3 dias — DESIGN.md §7). «Pagar mais tarde» fecha.
  Future<void> _payLater() async {
    final due = _dueAt;
    if (due == null) return;
    final tone = toneForDue(due);
    final left = payLaterDaysLeft(due);
    final when = payLaterDay(due);
    final urgent = tone == AlertTone.urgent;
    final (String head, String sub) = a.isGuestShare
        ? (
            urgent ? '$left · sem pagamento, sais da reserva' : 'Sem pagamento até $when, sais da reserva',
            'Tu e quem vem no teu convite. Os outros convidados vão na mesma.',
          )
        : _deposit
            ? (
                urgent ? '$left para pagar o sinal' : 'Sem o sinal, podes perder a reserva',
                '${a.partnerName} pode aceitar outro pedido para este dia.',
              )
            : (
                urgent ? '$left · sem pagamento, perdes a reserva' : 'Sem pagamento até $when, perdes a reserva',
                a.kind == 'final_payment'
                    ? 'A reserva é cancelada e o sinal não é devolvido.'
                    : 'A reserva é cancelada e o dia fica livre.',
              );
    final later = await askPayLater(
      context,
      partnerName: a.partnerName,
      tone: tone,
      head: head,
      sub: sub,
      note: '${_deposit && !urgent ? 'Tens até $when (30 dias antes do evento)' : 'Podes pagar até $when'}. '
          'Avisamos-te 6 dias antes do prazo e nos últimos 3 dias. '
          '${a.isGuestShare ? 'Pagas no convite, na app.' : 'Pagas em Reservas, no evento.'}',
    );
    if (later && mounted) context.pop();
  }

  @override
  void dispose() {
    _poll?.cancel();
    _stripe.dispose();
    _phone.dispose();
    super.dispose();
  }

  /// Chave pública + Apple Pay / Google Pay disponível neste telemóvel.
  Future<void> _prepare() async {
    if (!_stripe.supported) return;
    // Só cartão (ex.: Premium grátis, migração 209): sem Apple/Google Pay.
    if (a.methods != null && !a.methods!.contains(PayMethod.wallet)) return;
    final pk = await stripePublishableKey();
    if (pk == null || !mounted) return;
    _pk = pk;
    final w = await _stripe.wallet(pk, (a.amount * 100).round(), 'À Nossa! · ${a.title} ${a.partnerName}');
    if (!mounted || w.isEmpty) return;
    setState(() {
      _wallet = w;
      if (_step == _Step.select || _step == _Step.checking) _method = PayMethod.wallet;
    });
  }

  /// Pode já estar pago (ou ter uma referência Multibanco por pagar).
  Future<void> _checkExisting() async {
    final (state, mb) = await a.currentState();
    if (!mounted) return;
    switch (state) {
      case 'paid':
        _done();
      case 'processing':
        setState(() => _step = _Step.mbWayWaiting);
        _startPolling();
      case 'awaiting_multibanco':
        setState(() {
          _mb = mb;
          _amountCents = mb?.amountCents;
          _method = PayMethod.multibanco;
          _step = _Step.multibanco;
        });
        _startPolling(slow: true);
      default:
        setState(() => _step = _Step.select);
    }
  }

  void _fail(Object e, _Step back) {
    if (!mounted) return;
    if (e is CheckoutUnavailable && e.reason == 'invalid_state') return _done();
    setState(() {
      _step = back;
      _error = e is CheckoutUnavailable ? a.error(e.reason) : 'Não foi possível iniciar o pagamento. Verifica a ligação.';
    });
  }

  /// "Continuar" no ecrã de escolha.
  Future<void> _continue() async {
    setState(() => _error = null);
    switch (_method) {
      case PayMethod.wallet:
        _payWallet();
      case PayMethod.card:
        setState(() => _step = _Step.card);
        await _mountCard();
      case PayMethod.mbWay:
        setState(() => _step = _Step.mbWayPhone);
      case PayMethod.multibanco:
        setState(() => _step = _Step.loading);
        try {
          final info = await a.createIntent(PayMethod.multibanco);
          if (!mounted) return;
          _amountCents = info.amountCents;
      _discountPct = info.feeDiscountPct;
      _discountPoints = info.feeDiscountPoints;
      _feeNow = info.feePctNow == null ? null : '${_pts(info.feePctNow!)} % + ${_eur((info.feeFixedCents ?? 100) / 100)}';
          setState(() {
            _mb = info.multibanco;
            _step = info.multibanco == null ? _Step.select : _Step.multibanco;
            if (info.multibanco == null) _error = 'Não foi possível gerar a referência. Tenta outra vez.';
          });
          if (info.multibanco != null) _startPolling(slow: true);
        } catch (e) {
          _fail(e, _Step.select);
        }
    }
  }

  Future<void> _mountCard() async {
    final pk = _pk ?? await stripePublishableKey();
    if (!mounted) return;
    if (pk == null || !_stripe.supported) {
      setState(() {
        _step = _Step.select;
        _error = 'Não foi possível preparar o pagamento com cartão.';
      });
      return;
    }
    _pk = pk;
    if (_cardMounted) return;
    // Deixa os campos entrarem no ecrã antes de os ligar.
    await Future<void>.delayed(const Duration(milliseconds: 60));
    try {
      await _stripe.mountCard(pk, (s) {
        if (mounted) setState(() => _card = s);
      });
      if (mounted) setState(() => _cardMounted = true);
    } catch (_) {
      if (mounted) {
        setState(() {
          _step = _Step.select;
          _error = 'Não foi possível carregar os campos do cartão.';
        });
      }
    }
  }

  Future<void> _payCard() async {
    setState(() {
      _step = _Step.confirming;
      _error = null;
    });
    try {
      // Reservas (migração 181): primeiro o cartão, para a taxa de serviço
      // seguir o país do cartão (Reino Unido e fora da Europa pagam mais;
      // cartões europeus pagam sempre a base).
      String? pmId;
      if (a.feeByCard) {
        final pm = await _stripe.cardMethod(_email);
        if (!mounted) return;
        if (pm['id'] is! String) {
          setState(() {
            _step = _Step.card;
            _error = (pm['error'] as String?) ?? 'O cartão não é válido.';
          });
          return;
        }
        pmId = pm['id'] as String;
      }
      final info = await a.createIntent(PayMethod.card, paymentMethodId: pmId);
      if (!mounted) return;
      final before = _amountCents ?? (a.amount * 100).round();
      _amountCents = info.amountCents;
      _discountPct = info.feeDiscountPct;
      _discountPoints = info.feeDiscountPoints;
      _feeNow = info.feePctNow == null ? null : '${_pts(info.feePctNow!)} % + ${_eur((info.feeFixedCents ?? 100) / 100)}';
      if (pmId != null && info.cardRegion != null && info.cardRegion != 'EEA' && info.amountCents > before) {
        final ok = await _confirmCardFee(info);
        if (!mounted) return;
        if (!ok) {
          setState(() {
            _amountCents = info.baseAmountCents;
            _step = _Step.card;
          });
          return;
        }
      }
      // Já feito no servidor (Premium grátis com cartão: nada a cobrar agora).
      if (info.status == 'succeeded') return _done();
      final r = await _stripe.payCard(info.clientSecret, _email, paymentMethodId: pmId);
      _handleResult(r, back: _Step.card);
    } catch (e) {
      _fail(e, _Step.card);
    }
  }

  /// Cartão do Reino Unido ou de fora da Europa: mostra o novo total antes
  /// de cobrar.
  Future<bool> _confirmCardFee(PaymentIntentInfo info) async {
    final where = info.cardRegion == 'GB' ? 'do Reino Unido' : 'de fora da Europa';
    final total = euros(info.amountCents / 100, cents: true);
    final ok = await showIslandDialog<bool>(
      context: context,
      builder: (ctx) => IslandAlert(
        title: Text('Total: $total'),
        content: Text('Os cartões $where têm uma taxa de serviço mais alta. Com este cartão pagas $total.'),
        actions: [
          TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Usar outro cartão')),
          FilledButton(onPressed: () => Navigator.of(ctx).pop(true), child: Text('Pagar $total')),
        ],
      ),
    );
    return ok == true;
  }

  /// Tem de abrir a janela do telemóvel logo no toque (sem esperas antes).
  void _payWallet() {
    setState(() => _error = null);
    final future = _stripe.payWallet(() async {
      try {
        final info = await a.createIntent(PayMethod.wallet);
        _amountCents = info.amountCents;
      _discountPct = info.feeDiscountPct;
      _discountPoints = info.feeDiscountPoints;
      _feeNow = info.feePctNow == null ? null : '${_pts(info.feePctNow!)} % + ${_eur((info.feeFixedCents ?? 100) / 100)}';
        return info.clientSecret;
      } catch (e) {
        _fail(e, _Step.select);
        return null;
      }
    });
    future.then((r) {
      if (!mounted) return;
      if (r['cancelled'] == true) return;
      _handleResult(r, back: _Step.select);
    });
  }

  Future<void> _sendMbWay() async {
    final phone = _phone.text.trim();
    if (phone.replaceAll(RegExp(r'\D'), '').length < 9) {
      setState(() => _error = 'Escreve o teu número de telemóvel com MB WAY.');
      return;
    }
    setState(() {
      _step = _Step.loading;
      _error = null;
    });
    try {
      final info = await a.createIntent(PayMethod.mbWay, phone: phone);
      if (!mounted) return;
      _amountCents = info.amountCents;
      _discountPct = info.feeDiscountPct;
      _discountPoints = info.feeDiscountPoints;
      _feeNow = info.feePctNow == null ? null : '${_pts(info.feePctNow!)} % + ${_eur((info.feeFixedCents ?? 100) / 100)}';
      if (info.status == 'succeeded') return _done();
      setState(() => _step = _Step.mbWayWaiting);
      _startPolling();
    } catch (e) {
      _fail(e, _Step.mbWayPhone);
    }
  }

  Future<void> _handleResult(Map<String, dynamic> r, {required _Step back}) async {
    if (!mounted) return;
    if (r['error'] != null) {
      setState(() {
        _step = back;
        _error = r['error'] as String;
      });
      return;
    }
    if (r['status'] == 'succeeded') {
      await a.currentState(); // confirma já na base de dados
      if (mounted) _done();
    } else {
      setState(() => _step = _Step.mbWayWaiting);
      _startPolling();
    }
  }

  void _startPolling({bool slow = false}) {
    _poll?.cancel();
    _poll = Timer.periodic(Duration(seconds: slow ? 15 : 3), (_) async {
      final (state, _) = await a.currentState();
      if (!mounted) return;
      if (state == 'paid') {
        _poll?.cancel();
        _done();
      } else if (state == 'open' && _step == _Step.mbWayWaiting) {
        // MB WAY recusado ou expirado.
        _poll?.cancel();
        setState(() {
          _step = _Step.select;
          _error = 'O pedido MB WAY não foi aprovado a tempo. Tenta outra vez.';
        });
      }
    });
  }

  void _backToSelect() {
    _poll?.cancel();
    setState(() {
      _error = null;
      _step = _Step.select;
    });
  }

  void _done() {
    _poll?.cancel();
    final onPaid = a.onPaid;
    if (onPaid != null) {
      onPaid(context);
      return;
    }
    ref.invalidate(coupleBookingsProvider);
    ref.read(taskEngineControllerProvider.notifier).recompute();
    // O fim também é na folha (mockup "Pagamentos · Pago").
    if (mounted) setState(() => _step = _Step.done);
  }

  bool _more = false;

  /// O método recomendado: a carteira do aparelho (Apple Pay no iPhone,
  /// Google Pay no Android, a do browser na web); sem carteira, o cartão.
  PayMethod get _recommended => _methods.contains(PayMethod.wallet) ? PayMethod.wallet : _methods.first;

  String get _sheetTitle => switch (_step) {
        _Step.card || _Step.confirming => 'Pagar com cartão',
        _Step.mbWayPhone => 'MB WAY',
        _Step.mbWayWaiting => 'Aprova na app MB WAY',
        _Step.multibanco => 'Referência Multibanco',
        _Step.done => _full ? 'Pago' : '${a.title} pago',
        _ => a.isGuestShare
            ? 'Pagar a tua parte'
            : a.isBooking
                ? (a.kind == 'deposit' ? (_full ? 'Pagar' : 'Pagar sinal') : 'Pagar o resto')
                : 'Pagar',
      };

  bool get _canGoBack =>
      _step == _Step.card || _step == _Step.mbWayPhone || _step == _Step.mbWayWaiting || _step == _Step.multibanco;

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.of(context).padding.bottom;
    final maxH = MediaQuery.sizeOf(context).height * 0.92;
    return Material(
      type: MaterialType.transparency,
      child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
        // Toque fora da folha fecha.
        Expanded(child: GestureDetector(behavior: HitTestBehavior.opaque, onTap: () => context.pop())),
        ConstrainedBox(
          constraints: BoxConstraints(maxHeight: maxH),
          child: Container(
            width: double.infinity,
            decoration: const BoxDecoration(
              color: AppTheme.background,
              borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
            ),
            padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 10, AppTheme.screenMargin, 20 + bottom),
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Center(
                child: Container(
                  width: 40,
                  height: 5,
                  decoration: BoxDecoration(color: const Color(0xFFD8D3C9), borderRadius: BorderRadius.circular(3)),
                ),
              ),
              const SizedBox(height: 14),
              Row(children: [
                if (_canGoBack) ...[
                  _SheetRound(
                    icon: Hi.chevronLeft,
                    label: 'Voltar',
                    onTap: _step == _Step.confirming ? null : _backToSelect,
                  ),
                  const SizedBox(width: 10),
                ],
                Expanded(
                  child: Text(_sheetTitle,
                      style: const TextStyle(fontSize: 23, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
                _SheetRound(icon: Hi.xMark, label: 'Fechar', onTap: () => context.pop()),
              ]),
              Flexible(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.only(top: 16),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: _body()),
                ),
              ),
              _bottomBar(),
            ]),
          ),
        ),
      ]),
    );
  }


  Widget _partnerRow() {
    final name = a.partnerName.trim();
    return Row(children: [
      V2Avatar(name.isEmpty ? '?' : name, size: 40),
      const SizedBox(width: 12),
      Expanded(
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(name, maxLines: 1, overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          Text(a.title, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
        ]),
      ),
    ]);
  }

  Widget _totals() {
    final base = a.baseAmount;
    final total = (_amountCents ?? (a.amount * 100).round()) / 100;
    Widget line(String l, String v) => Padding(
          padding: const EdgeInsets.only(bottom: 8),
          child: Row(children: [
            Text(l, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
            const Spacer(),
            Text(v, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
          ]),
        );
    return _WhiteCard(
      child: Column(children: [
        if (base != null && total > base) ...[
          line(a.title, euros(base, cents: true)),
          line(_discountPct > 0
                  ? 'Taxa de serviço (−${_discountPct.toStringAsFixed(0)} %)'
                  : _discountPoints > 0
                      ? 'Taxa de serviço (${_feeNow ?? '−${_pts(_discountPoints)} %'} · oferta)'
                      : 'Taxa de serviço',
              euros(total - base, cents: true)),
          const Divider(height: 8, color: Color(0xFFD9D9D9)),
          const SizedBox(height: 8),
        ],
        Row(children: [
          const Text('Total', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const Spacer(),
          Text(_amountLabel, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        if (_discountPoints > 0) _inviteOffer(),
      ]),
    );
  }

  static String _eur(double v) => v == v.roundToDouble() ? '${v.toStringAsFixed(0)} €' : '${v.toStringAsFixed(2).replaceAll('.', ',')} €';

  static String _pts(double v) => v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(1).replaceAll('.', ',');

  /// Oferta de convites (pedido 2026-11-21): quantas pessoas convidou e em
  /// quantas transações ainda tem a taxa mais baixa (esta incluída).
  Widget _inviteOffer() {
    final s = ref.watch(myInviteStatsProvider).value;
    final times = s == null ? 0 : s.credits;
    final who = s == null || s.counted <= 0 ? '' : 'Convidaste ${s.counted} ${s.counted == 1 ? 'pessoa' : 'pessoas'} que já ${s.counted == 1 ? 'pagou' : 'pagaram'} na app. ';
    final fee = _feeNow ?? '${_pts(_discountPoints)} % mais baixa';
    final when = times > 1 ? 'Tens a taxa a $fee em $times transações, esta incluída.' : 'Nesta transação a taxa fica a $fee.';
    return Padding(
      padding: const EdgeInsets.only(top: 10),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
          decoration: const BoxDecoration(color: Color(0xFFE6EDE1), borderRadius: BorderRadius.all(Radius.circular(999))),
          child: const Text('Oferta', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Text('$who$when', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted, height: 1.35)),
        ),
      ]),
    );
  }

  List<Widget> _body() {
    switch (_step) {
      case _Step.checking:
      case _Step.loading:
        return [
          const SizedBox(height: 40),
          const Center(child: CircularProgressIndicator(color: Color(0xFF4F6B4A))),
          const SizedBox(height: 14),
          Center(
            child: Text(_step == _Step.checking ? 'A verificar o pagamento…' : 'A preparar o pagamento…',
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
          ),
          const SizedBox(height: 40),
        ];
      case _Step.select:
        final rec = _recommended;
        final others = [for (final m in _methods) if (m != rec) m];
        final shown = [rec, if (_more) ...others];
        return [
          _partnerRow(),
          const SizedBox(height: 18),
          const Text('COMO QUERES PAGAR',
              style: TextStyle(fontSize: 13, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          const SizedBox(height: 8),
          _WhiteCard(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            child: Column(children: [
              for (final m in shown)
                _MethodRow(
                  method: m,
                  label: m == PayMethod.wallet ? _walletName : null,
                  recommended: m == rec,
                  hint: m == rec && m == PayMethod.wallet ? 'Pagas com o ${_wallet == 'apple_pay' ? 'Face ID' : 'teu telemóvel'}, sem escrever nada.' : null,
                  selected: m == _method,
                  onTap: () => setState(() => _method = m),
                ),
              if (others.isNotEmpty)
                SnappyTap(
                  onTap: () => setState(() {
                    _more = !_more;
                    if (!_more) _method = rec;
                  }),
                  child: SizedBox(
                    height: 48,
                    child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Text(_more ? 'Menos opções' : 'Mais opções',
                          style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      const SizedBox(width: 6),
                      LineIcon(_more ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6', size: 16, color: AppTheme.inkMuted),
                    ]),
                  ),
                ),
            ]),
          ),
          const SizedBox(height: 12),
          _totals(),
          if (_error != null) ...[const SizedBox(height: 12), _ErrorNote(_error!)],
        ];
      case _Step.card:
      case _Step.confirming:
        return [
          if (!_stripe.splitFields) ...[
            const _FieldLabel('Dados do cartão'),
            _CardBox(child: _stripe.cardPart(CardPart.number)),
          ] else ...[
            const _FieldLabel('Número do cartão'),
            _CardBox(child: _stripe.cardPart(CardPart.number)),
            const SizedBox(height: 12),
            Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  const _FieldLabel('Validade'),
                  _CardBox(child: _stripe.cardPart(CardPart.expiry)),
                ]),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  const _FieldLabel('CVC'),
                  _CardBox(child: _stripe.cardPart(CardPart.cvc)),
                ]),
              ),
            ]),
          ],
          if (_card.error.isNotEmpty) ...[const SizedBox(height: 10), _ErrorNote(_card.error)],
          const SizedBox(height: 12),
          _totals(),
          if (_error != null) ...[const SizedBox(height: 12), _ErrorNote(_error!)],
        ];
      case _Step.mbWayPhone:
        return [
          const _FieldLabel('Telemóvel com MB WAY'),
          Container(
            height: 52,
            padding: const EdgeInsets.symmetric(horizontal: 18),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(26)),
            child: Row(children: [
              const Text('+351', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
              const SizedBox(width: 10),
              Expanded(
                child: TextField(
                  controller: _phone,
                  keyboardType: TextInputType.phone,
                  autofillHints: const [AutofillHints.telephoneNumber],
                  inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[\d +]'))],
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600, color: AppTheme.ink),
                  decoration: const InputDecoration(
                    isCollapsed: true,
                    filled: false,
                    border: InputBorder.none,
                    enabledBorder: InputBorder.none,
                    focusedBorder: InputBorder.none,
                    hintText: '912 345 678',
                  ),
                  onSubmitted: (_) => _sendMbWay(),
                ),
              ),
            ]),
          ),
          const SizedBox(height: 10),
          const Text('Vais receber um pedido de pagamento na app MB WAY para aprovar.',
              style: TextStyle(fontSize: 14, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
          const SizedBox(height: 12),
          _totals(),
          if (_error != null) ...[const SizedBox(height: 12), _ErrorNote(_error!)],
        ];
      case _Step.mbWayWaiting:
        return [
          const SizedBox(height: 12),
          Center(
            child: Text(_amountLabel,
                style: const TextStyle(fontSize: 40, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          const SizedBox(height: 10),
          const Text('Enviámos o pedido para o teu telemóvel. Tens 4 minutos para aprovar.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 15, height: 1.45, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
          const SizedBox(height: 14),
          const Center(child: _PendingTag('À espera da aprovação')),
          const SizedBox(height: 12),
        ];
      case _Step.done:
        return [
          const SizedBox(height: 8),
          // Estrela a festejar (2026-11-14), no lugar do visto verde.
          const Center(child: EstrelaMascot(Estrela.parabens, size: 120)),
          const SizedBox(height: 12),
          Text(
            a.isGuestShare
                ? 'A tua parte a ${a.partnerName} está paga.'
                : a.isBooking
                ? (a.kind == 'deposit'
                    ? (_full
                        ? '${a.partnerName} está reservado e pago.'
                        : '${a.partnerName} está reservado. O resto paga-se mais perto do evento e avisamos-te.')
                    : 'Está tudo pago a ${a.partnerName}.')
                : 'Pagamento feito.',
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 15, height: 1.45, fontWeight: FontWeight.w600, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 16),
          _WhiteCard(
            child: Column(children: [
              Row(children: [
                const Text('Pago', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                const Spacer(),
                Text(_amountLabel, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
              ]),
              const SizedBox(height: 8),
              const Row(children: [
                Text('Fatura', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                Spacer(),
                Text('Enviada por email', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ]),
            ]),
          ),
        ];
      case _Step.multibanco:
        final mb = _mb;
        return [
          _WhiteCard(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            child: Column(children: [
              _RefRow(label: 'Entidade', value: mb?.entity ?? '—'),
              _RefRow(label: 'Referência', value: _groupRef(mb?.reference ?? '—'), copy: mb?.reference),
              _RefRow(label: 'Montante', value: _amountLabel),
              if (mb?.expiresAt != null) _RefRow(label: 'Pagar até', value: _date(mb!.expiresAt!), last: true),
            ]),
          ),
          const SizedBox(height: 12),
          const Text(
            'Paga no multibanco ou no homebanking em "Pagamento de serviços". Confirmamos sozinhos quando o pagamento chegar (pode demorar algumas horas).',
            style: TextStyle(fontSize: 14, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.inkMuted),
          ),
        ];
    }
  }

  Widget _bottomBar() {
    Widget? button;
    final extras = <Widget>[];
    switch (_step) {
      case _Step.select:
        if (_method == PayMethod.wallet) {
          button = _stripe.walletButton(_payWallet) ?? _SheetButton(label: 'Pagar com $_walletName', onTap: _payWallet);
        } else {
          button = _SheetButton(label: _method == PayMethod.card ? (a.actionLabel ?? 'Pagar $_amountLabel') : 'Continuar', onTap: _continue);
        }
        // Enquanto houver tempo: «Pagar mais tarde» ao lado de «Pagar».
        if (_canPayLater) {
          button = Row(children: [
            Expanded(child: _SheetButton(label: 'Pagar mais tarde', secondary: true, onTap: _payLater)),
            const SizedBox(width: 8),
            Expanded(child: button),
          ]);
        }
        extras.add(const _SecureNote('Pagamento seguro pela Stripe, dentro da app.'));
        if (a.isBooking && !a.isGuestShare) extras.add(_CancelNote(paymentId: a.paymentId, deposit: a.kind == 'deposit' && !_full));
      case _Step.card:
        button = _SheetButton(label: a.actionLabel ?? 'Pagar $_amountLabel', onTap: _cardMounted && _card.complete ? _payCard : null);
        extras.add(const _SecureNote('O número do cartão vai direto para a Stripe.'));
      case _Step.confirming:
        button = const _SheetButton(label: 'A pagar…', busy: true);
      case _Step.mbWayPhone:
        button = _SheetButton(label: 'Enviar pedido MB WAY', onTap: _sendMbWay);
      case _Step.done:
        final toBooking = a.isBooking && !a.isGuestShare;
        button = _SheetButton(label: toBooking ? 'Ver reserva' : 'Fechar', onTap: () => toBooking ? context.go('/bookings') : context.pop());
        if (toBooking) {
          final chat = a.onChat;
          extras.add(chat != null
              ? _SheetButton(label: 'Falar com ${a.partnerName}', secondary: true, onTap: () => chat(context))
              : _SheetButton(label: 'Fechar', secondary: true, onTap: () => context.pop()));
        }
      case _Step.mbWayWaiting:
        button = _SheetButton(label: 'Escolher outro método', secondary: true, onTap: _backToSelect);
      case _Step.multibanco:
        button = _SheetButton(
          label: 'Já paguei',
          onTap: () async {
            final (state, _) = await a.currentState();
            if (!mounted) return;
            if (state == 'paid') {
              _done();
            } else {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                content: Text('Ainda não recebemos o pagamento. Pode demorar algumas horas — avisamos-te.'),
              ));
            }
          },
        );
      default:
        return const SizedBox(height: 4);
    }
    return Padding(
      padding: const EdgeInsets.only(top: 16),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        button,
        for (final e in extras) ...[const SizedBox(height: 10), e],
      ]),
    );
  }

  static String _groupRef(String r) {
    final digits = r.replaceAll(' ', '');
    final b = StringBuffer();
    for (var i = 0; i < digits.length; i++) {
      if (i > 0 && i % 3 == 0) b.write(' ');
      b.write(digits[i]);
    }
    return b.toString();
  }

  static String _date(DateTime d) =>
      '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}';
}

class _FieldLabel extends StatelessWidget {
  final String text;
  const _FieldLabel(this.text);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(text.toUpperCase(),
            style: const TextStyle(fontSize: 13, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      );
}

/// Pílula branca 52 à volta de um campo de cartão (o campo é da Stripe).
class _CardBox extends StatelessWidget {
  final Widget child;
  const _CardBox({required this.child});

  @override
  Widget build(BuildContext context) => Container(
        height: 52,
        padding: const EdgeInsets.symmetric(horizontal: 18),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(26)),
        alignment: Alignment.centerLeft,
        child: SizedBox(height: 24, width: double.infinity, child: child),
      );
}

class _WhiteCard extends StatelessWidget {
  final Widget child;
  final EdgeInsets padding;
  const _WhiteCard({required this.child, this.padding = const EdgeInsets.all(16)});

  @override
  Widget build(BuildContext context) => Container(
        padding: padding,
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: child,
      );
}

/// Botão redondo 36 do topo da folha (voltar / fechar).
class _SheetRound extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback? onTap;
  const _SheetRound({required this.icon, required this.label, this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        label: label,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            // Botão redondo preto 44, ícone branco sólido 20 (DESIGN.md §2/§6.3).
            width: 44,
            height: 44,
            decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
            alignment: Alignment.center,
            child: Icon(icon, size: 20, color: Colors.white),
          ),
        ),
      );
}

/// Botão 52 da folha: preto, ou branco com contorno.
class _SheetButton extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  final bool secondary;
  final bool busy;
  const _SheetButton({required this.label, this.onTap, this.secondary = false, this.busy = false});

  @override
  Widget build(BuildContext context) {
    const text = TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 16, fontWeight: FontWeight.w700);
    final child = busy
        ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
        : Text(label);
    return SizedBox(
      height: 52,
      child: secondary
          ? OutlinedButton(
              onPressed: onTap,
              style: OutlinedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: AppTheme.ink,
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                shape: const StadiumBorder(),
                textStyle: text,
              ),
              child: child,
            )
          : FilledButton(
              onPressed: busy ? () {} : onTap,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                disabledBackgroundColor: AppTheme.ink.withValues(alpha: 0.35),
                disabledForegroundColor: Colors.white,
                shape: const StadiumBorder(),
                textStyle: text,
              ),
              child: child,
            ),
    );
  }
}

/// Linha de um método de pagamento (mockup "Pagamentos").
class _MethodRow extends StatelessWidget {
  final PayMethod method;
  final String? label;
  final String? hint;
  final bool recommended;
  final bool selected;
  final VoidCallback onTap;
  const _MethodRow({
    required this.method,
    this.label,
    this.hint,
    required this.recommended,
    required this.selected,
    required this.onTap,
  });

  static const _paths = {
    PayMethod.wallet: 'M4 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4zM4 7l11-3v3M16 13h.01',
    PayMethod.card: 'M5 6h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM3 10h18M7 15h4',
    PayMethod.mbWay: 'M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 18h2',
    PayMethod.multibanco: 'M4 6h16v12H4zM8 10h8M8 14h5',
  };

  @override
  Widget build(BuildContext context) {
    final sub = hint ?? (method == PayMethod.multibanco ? 'Referência para pagar até 3 dias.' : null);
    return Semantics(
      button: true,
      selected: selected,
      child: SnappyTap(
        onTap: onTap,
        child: Container(
          constraints: const BoxConstraints(minHeight: 56),
          padding: const EdgeInsets.symmetric(vertical: 6),
          decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFD9D9D9)))),
          child: Row(children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(12)),
              alignment: Alignment.center,
              child: LineIcon(_paths[method]!, size: 20, color: AppTheme.ink),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Wrap(spacing: 6, runSpacing: 4, crossAxisAlignment: WrapCrossAlignment.center, children: [
                  Text(label ?? method.label,
                      style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (recommended)
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
                      child: const Text('Recomendado',
                          style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
                    ),
                ]),
                if (sub != null) ...[
                  const SizedBox(height: 3),
                  Text(sub, style: const TextStyle(fontSize: 14, height: 1.35, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                ],
              ]),
            ),
            const SizedBox(width: 8),
            Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: selected ? const Color(0xFF4F6B4A) : null,
                border: selected ? null : Border.all(color: const Color(0xFFC9C3B8), width: 1.5),
              ),
              alignment: Alignment.center,
              child: selected ? const LineIcon(LineIcon.check, size: 14, color: Colors.white, stroke: 3) : null,
            ),
          ]),
        ),
      ),
    );
  }
}

class _RefRow extends StatelessWidget {
  final String label;
  final String value;
  final String? copy;
  final bool last;
  const _RefRow({required this.label, required this.value, this.copy, this.last = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(minHeight: 56),
      decoration: last ? null : const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFD9D9D9)))),
      child: Row(children: [
        Text(label, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const Spacer(),
        Text(value, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.inkMuted, letterSpacing: 0.5)),
        if (copy != null)
          IconButton(
            tooltip: 'Copiar',
            visualDensity: VisualDensity.compact,
            icon: const Icon(Hi.documentDuplicate, size: 18, color: AppTheme.inkMuted),
            onPressed: () async {
              await copyText(copy!);
              if (context.mounted) {
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Referência copiada')));
              }
            },
          ),
      ]),
    );
  }
}

class _SecureNote extends StatelessWidget {
  final String text;
  const _SecureNote(this.text);

  @override
  Widget build(BuildContext context) {
    return Row(mainAxisAlignment: MainAxisAlignment.center, children: [
      const LineIcon('M7 11h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM8 11V7a4 4 0 0 1 8 0v4',
          size: 14, color: AppTheme.inkMuted),
      const SizedBox(width: 6),
      Flexible(
        child: Text(text, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
      ),
    ]);
  }
}

/// Erro: branco com linha vermelha 1,5 e ponto (DESIGN.md §7).
class _ErrorNote extends StatelessWidget {
  final String text;
  const _ErrorNote(this.text);

  @override
  Widget build(BuildContext context) {
    const red = Color(0xFFC8553D);
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: red, width: 1.5),
      ),
      child: Row(children: [
        Container(width: 8, height: 8, decoration: const BoxDecoration(color: red, shape: BoxShape.circle)),
        const SizedBox(width: 10),
        Expanded(child: Text(text, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.ink))),
      ]),
    );
  }
}

/// Etiqueta pendente: branca, linha amarela, ponto.
class _PendingTag extends StatelessWidget {
  final String text;
  const _PendingTag(this.text);

  @override
  Widget build(BuildContext context) {
    const y = Color(0xFFF2A01B);
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: y, width: 1.5),
      ),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        Container(width: 8, height: 8, decoration: const BoxDecoration(color: y, shape: BoxShape.circle)),
        const SizedBox(width: 6),
        Text(text, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      ]),
    );
  }
}

/// Até quando se cancela de graça (servidor, regra do parceiro).
final _freeUntilProvider = FutureProvider.autoDispose.family<DateTime?, String>((ref, paymentId) async {
  try {
    final p = await supabase.from('payments').select('booking_id').eq('id', paymentId).maybeSingle();
    final bookingId = p?['booking_id'] as String?;
    if (bookingId == null) return null;
    final d = await supabase.rpc('booking_cancel_preview', params: {'p_booking_id': bookingId});
    final v = d is Map ? d['free_until'] as String? : null;
    return v == null ? null : DateTime.tryParse(v)?.toLocal();
  } catch (_) {
    return null;
  }
});

class _CancelNote extends ConsumerWidget {
  const _CancelNote({required this.paymentId, required this.deposit});
  final String paymentId;
  final bool deposit;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final until = ref.watch(_freeUntilProvider(paymentId)).value;
    final free = until != null && until.isAfter(DateTime.now());
    String two(int n) => n.toString().padLeft(2, '0');
    final text = free
        ? 'Cancelamento grátis até ${two(until.day)}/${two(until.month)} às ${two(until.hour)}:${two(until.minute)}. '
            'Com cartão, Apple Pay ou Google Pay, o valor fica cativo e só é cobrado mais tarde.'
        : deposit
            ? 'Com cartão, Apple Pay ou Google Pay, o sinal fica cativo 48 h e só é cobrado depois.'
            : null;
    return Column(children: [
      if (text != null)
        Text(text,
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 14, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
      SnappyTap(
        onTap: () => context.push('/termos'),
        child: const Padding(
          padding: EdgeInsets.symmetric(vertical: 8),
          child: Text('Condições de cancelamento',
              style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink, decoration: TextDecoration.underline)),
        ),
      ),
    ]);
  }
}
