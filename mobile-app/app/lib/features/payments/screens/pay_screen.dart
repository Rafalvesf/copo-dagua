import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/payments/payments.dart';
import '../../../core/payments/stripe_element.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/sticker_icon.dart';
import 'pay_done_screen.dart';

enum _Step { checking, select, loading, card, confirming, mbWayPhone, mbWayWaiting, multibanco }

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
  MultibancoRef? _mb;
  Timer? _poll;

  PayArgs get a => widget.args;
  String get _amountLabel => euros((_amountCents ?? (a.amount * 100).round()) / 100, cents: true);
  String? get _email => ref.read(authControllerProvider).profile?.email;
  String get _walletName => _wallet == 'apple_pay' ? 'Apple Pay' : 'Google Pay';

  List<PayMethod> get _methods => [
        if (_wallet.isNotEmpty) PayMethod.wallet,
        PayMethod.card,
        PayMethod.mbWay,
        PayMethod.multibanco,
      ];

  @override
  void initState() {
    super.initState();
    _phone.text = ref.read(authControllerProvider).profile?.phone ?? '';
    _checkExisting();
    _prepare();
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
    final (state, mb) = await paymentState(a.paymentId);
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
      _error = e is CheckoutUnavailable ? payErrorMessage(e.reason) : 'Não foi possível iniciar o pagamento. Verifica a ligação.';
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
          final info = await createPaymentIntent(a.paymentId, PayMethod.multibanco);
          if (!mounted) return;
          _amountCents = info.amountCents;
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
      final info = await createPaymentIntent(a.paymentId, PayMethod.card);
      _amountCents = info.amountCents;
      final r = await _stripe.payCard(info.clientSecret, _email);
      _handleResult(r, back: _Step.card);
    } catch (e) {
      _fail(e, _Step.card);
    }
  }

  /// Tem de abrir a janela do telemóvel logo no toque (sem esperas antes).
  void _payWallet() {
    setState(() => _error = null);
    final future = _stripe.payWallet(() async {
      try {
        final info = await createPaymentIntent(a.paymentId, PayMethod.wallet);
        _amountCents = info.amountCents;
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
      final info = await createPaymentIntent(a.paymentId, PayMethod.mbWay, phone: phone);
      if (!mounted) return;
      _amountCents = info.amountCents;
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
      await paymentState(a.paymentId); // confirma já na base de dados
      if (mounted) _done();
    } else {
      setState(() => _step = _Step.mbWayWaiting);
      _startPolling();
    }
  }

  void _startPolling({bool slow = false}) {
    _poll?.cancel();
    _poll = Timer.periodic(Duration(seconds: slow ? 15 : 3), (_) async {
      final (state, _) = await paymentState(a.paymentId);
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
    ref.invalidate(coupleBookingsProvider);
    ref.read(taskEngineControllerProvider.notifier).recompute();
    context.pushReplacement(
      '/pay/done',
      extra: PayDoneArgs(
        partnerName: a.partnerName,
        title: a.title,
        amountLabel: _amountLabel,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(
          children: [
            PageHeader(title: 'Pagamento', centered: true),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 24),
                children: [
                  GreenHero(
                    label: '${a.title.toUpperCase()} · ${a.partnerName.toUpperCase()}',
                    value: _amountLabel,
                    doodles: const [Icons.lock_outline, Icons.auto_awesome_outlined, Icons.favorite_border],
                    footer: Wrap(spacing: 6, runSpacing: 6, children: [
                      const HeroPill('Pagamento seguro', solid: true),
                      HeroPill(a.kind == 'deposit' ? 'Confirma a reserva' : 'Fecha a reserva'),
                    ]),
                  ),
                  ..._body(),
                ],
              ),
            ),
            _bottomBar(),
          ],
        ),
      ),
    );
  }

  Widget _changeMethod() => TextButton(
        onPressed: _step == _Step.confirming ? null : _backToSelect,
        child: Text('Mudar método', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
      );

  List<Widget> _body() {
    switch (_step) {
      case _Step.checking:
      case _Step.loading:
        return [
          const SizedBox(height: 60),
          Center(child: CircularProgressIndicator(color: AppTheme.accentOliveDark)),
          const SizedBox(height: 14),
          Center(
            child: Text(_step == _Step.checking ? 'A verificar o pagamento…' : 'A preparar o pagamento…',
                style: const TextStyle(color: AppTheme.inkMuted)),
          ),
        ];
      case _Step.select:
        return [
          const SectionTitle('Como queres pagar?'),
          for (final m in _methods) ...[
            _MethodTile(
              method: m,
              label: m == PayMethod.wallet ? _walletName : null,
              icon: m == PayMethod.wallet && _wallet == 'apple_pay' ? Icons.apple : null,
              selected: m == _method,
              onTap: () => setState(() => _method = m),
            ),
            const SizedBox(height: 10),
          ],
          if (_error != null) _ErrorNote(_error!),
          const SizedBox(height: 8),
          const _SecureNote(),
        ];
      case _Step.card:
      case _Step.confirming:
        return [
          SectionTitle('Cartão', trailing: _changeMethod()),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: whiteLineCard(),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const _FieldLabel('Número do cartão'),
              _CardBox(child: _stripe.cardPart(CardPart.number)),
              const SizedBox(height: 12),
              Row(children: [
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    const _FieldLabel('Validade'),
                    _CardBox(child: _stripe.cardPart(CardPart.expiry)),
                  ]),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    const _FieldLabel('CVC'),
                    _CardBox(child: _stripe.cardPart(CardPart.cvc)),
                  ]),
                ),
              ]),
              if (_card.error.isNotEmpty) ...[
                const SizedBox(height: 10),
                Text(_card.error, style: const TextStyle(fontSize: AppFontSize.sm, color: Color(0xFFB3261E))),
              ],
            ]),
          ),
          if (_error != null) ...[const SizedBox(height: 10), _ErrorNote(_error!)],
          const SizedBox(height: 12),
          const _SecureNote(),
        ];
      case _Step.mbWayPhone:
        return [
          SectionTitle('MB WAY', trailing: _changeMethod()),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: whiteLineCard(),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const _FieldLabel('Telemóvel com MB WAY'),
              TextField(
                controller: _phone,
                keyboardType: TextInputType.phone,
                autofillHints: const [AutofillHints.telephoneNumber],
                inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[\d +]'))],
                style: const TextStyle(fontSize: AppFontSize.lg, color: AppTheme.ink),
                decoration: const InputDecoration(hintText: '912 345 678', prefixText: '+351  '),
                onSubmitted: (_) => _sendMbWay(),
              ),
              const SizedBox(height: 10),
              const Text('Vais receber um pedido de pagamento na app MB WAY para aprovar.',
                  style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.4)),
            ]),
          ),
          if (_error != null) ...[const SizedBox(height: 10), _ErrorNote(_error!)],
        ];
      case _Step.mbWayWaiting:
        return [
          const SizedBox(height: 18),
          Container(
            padding: const EdgeInsets.all(20),
            decoration: whiteLineCard(),
            child: Column(children: [
              const StickerIcon(Icons.phone_iphone, size: 56),
              const SizedBox(height: 14),
              const Text('Aprova na app MB WAY',
                  style: TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 6),
              Text('Enviámos um pedido de $_amountLabel para o teu telemóvel. Tens 4 minutos para aprovar.',
                  textAlign: TextAlign.center, style: const TextStyle(color: AppTheme.inkMuted, height: 1.4)),
              const SizedBox(height: 18),
              SizedBox(
                width: 26,
                height: 26,
                child: CircularProgressIndicator(strokeWidth: 3, color: AppTheme.accentOliveDark),
              ),
              const SizedBox(height: 8),
              const Text('À espera da confirmação…', style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              const SizedBox(height: 6),
              _changeMethod(),
            ]),
          ),
        ];
      case _Step.multibanco:
        final mb = _mb;
        return [
          SectionTitle('Referência Multibanco', trailing: _changeMethod()),
          Container(
            padding: const EdgeInsets.all(18),
            decoration: whiteLineCard(),
            child: Column(children: [
              _RefRow(label: 'Entidade', value: mb?.entity ?? '—'),
              const Divider(height: 22, color: AppTheme.borderMuted),
              _RefRow(label: 'Referência', value: _groupRef(mb?.reference ?? '—'), copy: mb?.reference),
              const Divider(height: 22, color: AppTheme.borderMuted),
              _RefRow(label: 'Montante', value: _amountLabel),
              if (mb?.expiresAt != null) ...[
                const Divider(height: 22, color: AppTheme.borderMuted),
                _RefRow(label: 'Pagar até', value: _date(mb!.expiresAt!)),
              ],
            ]),
          ),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(color: AppColors.yellow, borderRadius: BorderRadius.circular(18)),
            child: const Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Icon(Icons.schedule, size: 20, color: AppTheme.ink),
              SizedBox(width: 10),
              Expanded(
                child: Text(
                  'Paga no multibanco ou no homebanking em "Pagamento de serviços". Confirmamos automaticamente quando o pagamento chegar (pode demorar algumas horas).',
                  style: TextStyle(fontSize: AppFontSize.md, height: 1.4, color: AppTheme.ink),
                ),
              ),
            ]),
          ),
        ];
    }
  }

  Widget _bottomBar() {
    String? label;
    VoidCallback? onTap;
    IconData? icon;
    var busy = false;
    switch (_step) {
      case _Step.select:
        if (_method == PayMethod.wallet) {
          label = 'Pagar com $_walletName';
          icon = _wallet == 'apple_pay' ? Icons.apple : Icons.account_balance_wallet_outlined;
          onTap = _payWallet;
        } else {
          label = 'Continuar';
          onTap = _continue;
        }
      case _Step.card:
        label = 'Pagar $_amountLabel';
        icon = Icons.lock_outline;
        onTap = _cardMounted && _card.complete ? _payCard : null;
      case _Step.confirming:
        label = 'A pagar…';
        busy = true;
      case _Step.mbWayPhone:
        label = 'Enviar pedido MB WAY';
        onTap = _sendMbWay;
      case _Step.multibanco:
        label = 'Já paguei';
        onTap = () async {
          final (state, _) = await paymentState(a.paymentId);
          if (!mounted) return;
          if (state == 'paid') {
            _done();
          } else {
            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
              content: Text('Ainda não recebemos o pagamento. Pode demorar algumas horas — avisamos-te.'),
            ));
          }
        };
      default:
        return const SizedBox.shrink();
    }
    return Container(
      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 10, AppTheme.screenMargin, 14),
      decoration: const BoxDecoration(
        color: Colors.white,
        boxShadow: [BoxShadow(color: Color(0x14171713), blurRadius: 18, offset: Offset(0, -4))],
      ),
      child: SizedBox(
        width: double.infinity,
        height: 54,
        child: FilledButton(
          onPressed: onTap,
          style: FilledButton.styleFrom(
            backgroundColor: _method == PayMethod.wallet && _step == _Step.select ? AppTheme.ink : AppTheme.accentOliveDark,
            disabledBackgroundColor: AppTheme.accentOliveDark.withValues(alpha: 0.4),
            foregroundColor: Colors.white,
            disabledForegroundColor: Colors.white,
            shape: const StadiumBorder(),
            textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: AppFontSize.lg, fontWeight: FontWeight.w700),
          ),
          child: busy
              ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white))
              : Row(mainAxisSize: MainAxisSize.min, children: [
                  if (icon != null) ...[Icon(icon, size: 18), const SizedBox(width: 8)],
                  Text(label),
                ]),
        ),
      ),
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
        padding: const EdgeInsets.only(bottom: 6),
        child: Text(text, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: AppFontSize.md, color: AppTheme.ink)),
      );
}

/// Caixa da app à volta de um campo de cartão (o campo em si é da Stripe).
class _CardBox extends StatelessWidget {
  final Widget child;
  const _CardBox({required this.child});

  @override
  Widget build(BuildContext context) => Container(
        height: 52,
        padding: const EdgeInsets.symmetric(horizontal: 14),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: AppTheme.borderMuted),
        ),
        alignment: Alignment.centerLeft,
        child: SizedBox(height: 24, width: double.infinity, child: child),
      );
}

class _MethodTile extends StatelessWidget {
  final PayMethod method;
  final String? label;
  final IconData? icon;
  final bool selected;
  final VoidCallback onTap;
  const _MethodTile({required this.method, this.label, this.icon, required this.selected, required this.onTap});

  IconData get _icon => icon ?? switch (method) {
    PayMethod.wallet => Icons.account_balance_wallet_outlined,
    PayMethod.card => Icons.credit_card,
    PayMethod.mbWay => Icons.phone_iphone,
    PayMethod.multibanco => Icons.account_balance_outlined,
  };

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        padding: const EdgeInsets.all(14),
        decoration: whiteLineCard(
          line: selected ? AppTheme.accentOliveDark : null,
          width: selected ? 2 : 1,
        ),
        child: Row(children: [
          StickerIcon(_icon, turns: StickerIcon.tilt(method.index)),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(label ?? method.label,
                  style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text(method.hint, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 8),
          AnimatedContainer(
            duration: const Duration(milliseconds: 160),
            width: 24,
            height: 24,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: selected ? AppTheme.accentOliveDark : Colors.white,
              border: Border.all(color: selected ? AppTheme.accentOliveDark : AppTheme.borderMuted, width: 2),
            ),
            child: selected ? const Icon(Icons.check, size: 15, color: Colors.white) : null,
          ),
        ]),
      ),
    );
  }
}

class _RefRow extends StatelessWidget {
  final String label;
  final String value;
  final String? copy;
  const _RefRow({required this.label, required this.value, this.copy});

  @override
  Widget build(BuildContext context) {
    return Row(children: [
      Text(label, style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.base)),
      const Spacer(),
      Text(value,
          style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.lg, color: AppTheme.ink, letterSpacing: 0.5)),
      if (copy != null) ...[
        const SizedBox(width: 6),
        IconButton(
          visualDensity: VisualDensity.compact,
          icon: Icon(Icons.copy_rounded, size: 18, color: AppTheme.accentOliveDark),
          onPressed: () async {
            await Clipboard.setData(ClipboardData(text: copy!));
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Referência copiada')));
            }
          },
        ),
      ],
    ]);
  }
}

class _SecureNote extends StatelessWidget {
  const _SecureNote();

  @override
  Widget build(BuildContext context) {
    return const Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Icon(Icons.lock_outline, size: 16, color: AppTheme.inkMuted),
      SizedBox(width: 8),
      Expanded(
        child: Text(
          'Pagamento seguro processado pela Stripe. Os dados do teu cartão nunca passam pela À Nossa!.',
          style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.4),
        ),
      ),
    ]);
  }
}

class _ErrorNote extends StatelessWidget {
  final String text;
  const _ErrorNote(this.text);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 4, bottom: 4),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: AppColors.pink, borderRadius: BorderRadius.circular(16)),
      child: Row(children: [
        const Icon(Icons.error_outline, size: 18, color: Color(0xFFB3261E)),
        const SizedBox(width: 8),
        Expanded(child: Text(text, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink))),
      ]),
    );
  }
}
