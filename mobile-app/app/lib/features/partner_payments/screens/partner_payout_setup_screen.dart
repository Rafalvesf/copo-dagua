import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/payments/partner_connect.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/onb_kit.dart';
import '../widgets/payout_details_form.dart';

/// "Confirma os teus dados" (pedido 2026-10-19): antes de receber e
/// levantar, a página mostra tudo o que é preciso, com o estado de cada
/// grupo, e depois pede os dados com os formulários da própria app
/// (2026-10-25 — nada de links nem caixas da Stripe).
class PartnerPayoutSetupScreen extends ConsumerStatefulWidget {
  /// Organizador a ativar a receção de bilhetes (migração 149).
  final bool organizer;
  const PartnerPayoutSetupScreen({super.key, this.organizer = false});

  @override
  ConsumerState<PartnerPayoutSetupScreen> createState() => _SetupState();
}

class _SetupState extends ConsumerState<PartnerPayoutSetupScreen> {

  @override
  void initState() {
    super.initState();
    connectAsOrganizer = widget.organizer;
  }

  @override
  void dispose() {
    if (widget.organizer) connectAsOrganizer = false;
    super.dispose();
  }

  bool _form = false;
  String? _error;

  /// Abre o formulário da própria app (2026-10-25 — sem formulários nem
  /// links da Stripe).
  void _open() {
    setState(() {
      _form = true;
      _error = null;
    });
  }

  /// Terminou (ou saiu) do formulário: mostra o estado ("Estamos a
  /// verificar" / ativo) na própria página (mockup "Em verificação").
  Future<void> _finished() async {
    ref.invalidate(partnerConnectStatusProvider);
    ref.invalidate(partnerStripeStatusProvider);
    final s = await ref.read(partnerConnectStatusProvider.future);
    if (!mounted) return;
    setState(() {
      _form = false;
      _error = s.needsData ? 'Ainda faltam alguns dados. Podes continuar quando quiseres.' : null;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_form) {
      return PayoutDetailsForm(
        onDone: (_) => _finished(),
        onLater: () => setState(() => _form = false),
      );
    }
    final async = ref.watch(partnerConnectStatusProvider);
    final s = async.value ?? const ConnectStatus();
    if (async.isLoading && !async.hasValue) {
      return const Scaffold(
        backgroundColor: AppTheme.background,
        body: Center(child: CircularProgressIndicator(color: Color(0xFF4F6B4A))),
      );
    }
    final submitted = s.hasAccount && s.detailsSubmitted && !s.needsData;
    return submitted ? _status(s) : _intro(s);
  }

  /// "Recebe pagamentos na app" (mockup V0).
  Widget _intro(ConnectStatus s) {
    final steps = [
      ('Quem és', 'Nome, data de nascimento, NIF'),
      ('O teu negócio', 'Morada e o que fazes'),
      ('Conta e documento', 'IBAN e cartão de cidadão'),
    ];
    return OnbStep(
      onBack: () => context.pop(),
      progress: 0.2,
      title: 'Recebe pagamentos na app',
      subtitle: widget.organizer
          ? 'Quem compra bilhetes paga dentro da À Nossa! e o dinheiro vai para a tua conta. Leva uns 3 minutos.'
          : 'Os clientes pagam dentro da À Nossa! e o dinheiro vai para a tua conta. Leva uns 3 minutos.',
      bottom: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        OnbButton(label: s.hasAccount && s.needsData ? 'Completar dados' : 'Começar', onPressed: _open),
        const SizedBox(height: 10),
        OnbButton(label: 'Mais tarde', secondary: true, onPressed: () => context.pop()),
      ]),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        _WhiteBox(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
          child: Column(children: [
            for (final (i, (t, sub)) in steps.indexed)
              Container(
                constraints: const BoxConstraints(minHeight: 60),
                decoration: i < steps.length - 1
                    ? const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFD9D9D9))))
                    : null,
                child: Row(children: [
                  Container(
                    width: 32,
                    height: 32,
                    decoration: const BoxDecoration(color: AppTheme.background, shape: BoxShape.circle),
                    alignment: Alignment.center,
                    child: Text('${i + 1}', style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(t, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      Text(sub, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                    ]),
                  ),
                ]),
              ),
          ]),
        ),
        if (!widget.organizer) ...[
          const SizedBox(height: 12),
          const _WhiteBox(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              OnbGroupLabel('Quando recebes'),
              SizedBox(height: 6),
              Text('O sinal chega 48 h depois de pago. O resto, 3 dias depois do evento, se ninguém reportar um problema.',
                  style: TextStyle(fontSize: 15, height: 1.45, fontWeight: FontWeight.w600, color: AppTheme.ink)),
            ]),
          ),
        ],
        if (s.disabledReason != null && s.disabledReason!.contains('rejected')) ...[
          const SizedBox(height: 12),
          const _Warn('A Stripe recusou esta conta. Contacta o suporte da À Nossa!'),
        ],
        if (_error != null) ...[const SizedBox(height: 12), _Warn(_error!)],
      ]),
    );
  }

  /// "Estamos a verificar" / "Pagamentos ativos" (mockup V8).
  Widget _status(ConnectStatus s) {
    final active = s.active;
    return OnbStep(
      onBack: () => context.pop(),
      progress: 1,
      title: active ? 'Pagamentos ativos' : 'Estamos a verificar',
      subtitle: active
          ? (widget.organizer ? 'Já podes vender bilhetes.' : 'Já podes receber sinais e levantar para o teu IBAN.')
          : 'A Stripe confirma os teus dados. Normalmente demora menos de um dia.',
      bottom: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        OnbButton(
          label: active && !widget.organizer ? 'Ver pagamentos' : 'Feito',
          onPressed: () => active && !widget.organizer ? context.pushReplacement('/partner-payments') : context.pop(),
        ),
        const SizedBox(height: 10),
        OnbButton(label: 'Rever os meus dados', secondary: true, onPressed: _open),
      ]),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        if (!active)
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: const Color(0xFFF2A01B), width: 1.5),
            ),
            child: const Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Padding(
                padding: EdgeInsets.only(top: 6),
                child: SizedBox(width: 8, height: 8, child: DecoratedBox(decoration: BoxDecoration(color: Color(0xFFF2A01B), shape: BoxShape.circle))),
              ),
              SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('Em verificação', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  SizedBox(height: 4),
                  Text('Já podes receber pedidos e enviar propostas. Avisamos-te quando os pagamentos ficarem ativos.',
                      style: TextStyle(fontSize: 14, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                ]),
              ),
            ]),
          )
        else
          Align(
            alignment: Alignment.centerLeft,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
              decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
              child: const Text('Pagamentos ativos', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
            ),
          ),
        if (s.bankLast4 != null) ...[
          const SizedBox(height: 12),
          _WhiteBox(
            child: Row(children: [
              const Text('Conta', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
              const Spacer(),
              Text('IBAN ···· ${s.bankLast4}', style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.ink)),
            ]),
          ),
        ],
      ]),
    );
  }
}

class _WhiteBox extends StatelessWidget {
  final Widget child;
  final EdgeInsets padding;
  const _WhiteBox({required this.child, this.padding = const EdgeInsets.all(16)});

  @override
  Widget build(BuildContext context) => Container(
        padding: padding,
        decoration: BoxDecoration(color: Colors.white, border: AppTheme.cardBorder, borderRadius: BorderRadius.circular(22)),
        child: child,
      );
}

/// Aviso: linha vermelha 1,5 + ponto (DESIGN.md §7).
class _Warn extends StatelessWidget {
  final String text;
  const _Warn(this.text);

  @override
  Widget build(BuildContext context) {
    const red = Color(0xFFC8553D);
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: red, width: 1.5)),
      child: Row(children: [
        Container(width: 8, height: 8, decoration: const BoxDecoration(color: red, shape: BoxShape.circle)),
        const SizedBox(width: 10),
        Expanded(child: Text(text, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.ink))),
      ]),
    );
  }
}
