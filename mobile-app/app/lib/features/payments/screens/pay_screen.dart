import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:url_launcher/url_launcher.dart';

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

enum _Step { checking, select, loading, form, confirming, mbWayWaiting, multibanco }

/// Pagamento dentro da app (pedido 2026-10-19): escolher o método →
/// formulário da Stripe embutido → página de pagamento feito. Nunca abre
/// o browser.
class PayScreen extends ConsumerStatefulWidget {
  final PayArgs args;
  const PayScreen({super.key, required this.args});

  @override
  ConsumerState<PayScreen> createState() => _PayScreenState();
}

class _PayScreenState extends ConsumerState<PayScreen> {
  _Step _step = _Step.checking;
  PayMethod _method = PayMethod.card;
  StripeElement? _element;
  double _formHeight = 280;
  bool _formReady = false;
  bool _formComplete = false;
  String? _error;
  int? _amountCents;
  MultibancoRef? _mb;
  Timer? _poll;

  PayArgs get a => widget.args;
  String get _amountLabel => euros((_amountCents ?? (a.amount * 100).round()) / 100, cents: true);

  @override
  void initState() {
    super.initState();
    _checkExisting();
  }

  @override
  void dispose() {
    _poll?.cancel();
    _element?.dispose();
    super.dispose();
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

  Future<void> _continue() async {
    setState(() {
      _step = _Step.loading;
      _error = null;
      _formReady = false;
      _formComplete = false;
    });
    try {
      final info = await createPaymentIntent(a.paymentId, _method);
      if (!mounted) return;
      _amountCents = info.amountCents;
      if (info.multibanco != null) {
        setState(() {
          _mb = info.multibanco;
          _step = _Step.multibanco;
        });
        _startPolling(slow: true);
        return;
      }
      _element?.dispose();
      final el = createStripeElement();
      if (!el.supported) {
        setState(() {
          _step = _Step.select;
          _error = 'O pagamento só está disponível na app web por agora.';
        });
        return;
      }
      setState(() {
        _element = el;
        _step = _Step.form;
      });
      // Deixa o platform view entrar na árvore antes de montar.
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await el.mount(
        publishableKey: info.publishableKey,
        clientSecret: info.clientSecret,
        email: info.email,
        onHeight: (h) {
          if (mounted && h > 40) setState(() => _formHeight = h + 8);
        },
        onEvent: (e) {
          if (!mounted) return;
          setState(() {
            if (e == 'ready') _formReady = true;
            if (e == 'complete') _formComplete = true;
            if (e == 'incomplete') _formComplete = false;
            if (e == 'loaderror') {
              _step = _Step.select;
              _error = 'Não foi possível carregar o formulário de pagamento.';
            }
          });
        },
      );
    } on CheckoutUnavailable catch (e) {
      if (!mounted) return;
      if (e.reason == 'invalid_state') return _done();
      // Sem chave pública da Stripe configurada ainda: usa o checkout da
      // Stripe (abre na mesma janela) — só até a chave existir (2026-10-19).
      if (e.reason == 'not_configured') return _hostedFallback();
      setState(() {
        _step = _Step.select;
        _error = payErrorMessage(e.reason);
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _step = _Step.select;
        _error = 'Não foi possível iniciar o pagamento. Verifica a ligação.';
      });
    }
  }

  Future<void> _hostedFallback() async {
    try {
      final url = await createDepositCheckoutUrl(a.paymentId);
      await launchUrl(Uri.parse(url), mode: LaunchMode.platformDefault, webOnlyWindowName: '_self');
    } on CheckoutUnavailable catch (e) {
      if (mounted) {
        setState(() {
          _step = _Step.select;
          _error = payErrorMessage(e.reason);
        });
      }
    } catch (_) {
      if (mounted) {
        setState(() {
          _step = _Step.select;
          _error = 'Não foi possível iniciar o pagamento. Tenta novamente.';
        });
      }
    }
  }

  Future<void> _pay() async {
    final el = _element;
    if (el == null) return;
    setState(() {
      _step = _Step.confirming;
      _error = null;
    });
    final r = await el.confirm();
    if (!mounted) return;
    if (r['error'] != null) {
      setState(() {
        _step = _Step.form;
        _error = r['error'] as String;
      });
      return;
    }
    final status = r['status'] as String?;
    final mb = MultibancoRef.fromJson(r['multibanco'], amountCents: _amountCents);
    if (status == 'succeeded') {
      await paymentState(a.paymentId); // confirma já na base de dados
      if (mounted) _done();
    } else if (mb != null) {
      setState(() {
        _mb = mb;
        _step = _Step.multibanco;
      });
      _startPolling(slow: true);
    } else {
      setState(() => _step = _Step.mbWayWaiting);
      _startPolling();
    }
  }

  void _startPolling({bool slow = false}) {
    _poll?.cancel();
    _poll = Timer.periodic(Duration(seconds: slow ? 15 : 3), (_) async {
      final (state, _) = await paymentState(a.paymentId);
      if (state == 'paid' && mounted) {
        _poll?.cancel();
        _done();
      }
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
          for (final m in PayMethod.values) ...[
            _MethodTile(method: m, selected: m == _method, onTap: () => setState(() => _method = m)),
            const SizedBox(height: 10),
          ],
          if (_error != null) _ErrorNote(_error!),
          const SizedBox(height: 8),
          const _SecureNote(),
        ];
      case _Step.form:
      case _Step.confirming:
        return [
          SectionTitle(
            _method.label,
            trailing: TextButton(
              onPressed: _step == _Step.confirming
                  ? null
                  : () {
                      _element?.dispose();
                      setState(() {
                        _element = null;
                        _error = null;
                        _step = _Step.select;
                      });
                    },
              child: Text('Mudar método', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
            ),
          ),
          Container(
            padding: const EdgeInsets.fromLTRB(14, 14, 14, 8),
            decoration: whiteLineCard(),
            child: Stack(
              children: [
                AnimatedContainer(
                  duration: const Duration(milliseconds: 180),
                  height: _formHeight,
                  child: _element?.view() ?? const SizedBox.shrink(),
                ),
                if (!_formReady)
                  Positioned.fill(
                    child: ColoredBox(
                      color: Colors.white,
                      child: Center(child: CircularProgressIndicator(color: AppTheme.accentOliveDark)),
                    ),
                  ),
              ],
            ),
          ),
          if (_error != null) ...[const SizedBox(height: 10), _ErrorNote(_error!)],
          const SizedBox(height: 12),
          const _SecureNote(),
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
            ]),
          ),
        ];
      case _Step.multibanco:
        final mb = _mb;
        return [
          const SectionTitle('Referência Multibanco'),
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
    var busy = false;
    switch (_step) {
      case _Step.select:
        label = 'Continuar';
        onTap = _continue;
      case _Step.form:
        label = 'Pagar $_amountLabel';
        onTap = _formReady && _formComplete ? _pay : null;
      case _Step.confirming:
        label = 'A pagar…';
        busy = true;
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
            backgroundColor: AppTheme.accentOliveDark,
            disabledBackgroundColor: AppTheme.accentOliveDark.withValues(alpha: 0.4),
            foregroundColor: Colors.white,
            disabledForegroundColor: Colors.white,
            shape: const StadiumBorder(),
            textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: AppFontSize.lg, fontWeight: FontWeight.w700),
          ),
          child: busy
              ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white))
              : Row(mainAxisSize: MainAxisSize.min, children: [
                  if (_step == _Step.form) ...[const Icon(Icons.lock_outline, size: 18), const SizedBox(width: 8)],
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

class _MethodTile extends StatelessWidget {
  final PayMethod method;
  final bool selected;
  final VoidCallback onTap;
  const _MethodTile({required this.method, required this.selected, required this.onTap});

  IconData get _icon => switch (method) {
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
              Text(method.label,
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
          'Pagamento processado pela Stripe. Nunca vemos os dados do teu cartão.',
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
