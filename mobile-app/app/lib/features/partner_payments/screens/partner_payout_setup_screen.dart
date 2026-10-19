import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/payments/partner_connect.dart';
import '../../../core/payments/stripe_onboarding.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../payments/screens/pay_done_screen.dart';

/// "Confirma os teus dados" (pedido 2026-10-19): antes de receber e
/// levantar, a página mostra tudo o que a Stripe precisa, com o estado de
/// cada grupo, e depois abre o formulário da Stripe embutido na app —
/// nunca o browser. Os dados vão diretamente para a Stripe.
class PartnerPayoutSetupScreen extends ConsumerStatefulWidget {
  const PartnerPayoutSetupScreen({super.key});

  @override
  ConsumerState<PartnerPayoutSetupScreen> createState() => _SetupState();
}

class _SetupState extends ConsumerState<PartnerPayoutSetupScreen> {
  bool _agreed = false;
  bool _form = false;
  bool _loading = false;
  bool _ready = false;
  double _height = 520;
  String? _error;
  StripeOnboarding? _onb;

  @override
  void dispose() {
    _onb?.dispose();
    super.dispose();
  }

  Future<void> _open() async {
    setState(() {
      _loading = true;
      _error = null;
    });
    try {
      final (secret, pk) = await createConnectSession();
      final onb = createStripeOnboarding();
      if (!onb.supported) {
        setState(() => _error = 'Disponível na app web por agora.');
        return;
      }
      final token = supabase.auth.currentSession?.accessToken ?? '';
      setState(() {
        _onb = onb;
        _form = true;
        _ready = false;
      });
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await onb.mount(
        publishableKey: pk,
        clientSecret: secret,
        functionUrl: '${SupabaseConfig.url}/functions/v1/connect-account',
        anonKey: SupabaseConfig.publishableKey,
        accessToken: token,
        onHeight: (h) {
          if (mounted && h > 80) setState(() => _height = h + 12);
        },
        onEvent: (e) {
          if (!mounted) return;
          if (e == 'ready') setState(() => _ready = true);
          if (e == 'loaderror') {
            setState(() {
              _form = false;
              _error = 'Não foi possível carregar o formulário da Stripe.';
            });
          }
          if (e == 'exit') _finished();
        },
      );
      if (mounted) setState(() => _ready = true);
    } on ConnectError catch (e) {
      if (mounted) setState(() => _error = connectErrorMessage(e.code));
    } catch (_) {
      if (mounted) setState(() => _error = 'Não foi possível abrir o formulário. Verifica a ligação.');
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  /// O parceiro terminou (ou saiu) do formulário da Stripe.
  Future<void> _finished() async {
    _onb?.dispose();
    ref.invalidate(partnerConnectStatusProvider);
    ref.invalidate(partnerStripeStatusProvider);
    final s = await ref.read(partnerConnectStatusProvider.future);
    if (!mounted) return;
    if (s.detailsSubmitted && !s.needsData) {
      context.pushReplacement(
        '/pay/done',
        extra: PayDoneArgs(
          partnerName: '',
          title: '',
          amountLabel: '',
          headline: s.active ? 'Pagamentos ativos!' : 'Dados enviados!',
          subtitle: s.active
              ? 'Já podes receber sinais e levantar para o teu IBAN.'
              : 'A Stripe está a verificar os teus dados.',
          lines: [
            if (!s.active)
              (Icons.hourglass_top_rounded, 'A verificação costuma demorar minutos, às vezes 1–2 dias úteis.'),
            if (s.bankLast4 != null) (Icons.account_balance_outlined, 'IBAN terminado em ${s.bankLast4}'),
            (Icons.payments_outlined, 'Os sinais pagos pelos casais ficam no teu saldo para levantares.'),
          ],
          primaryLabel: 'Ver pagamentos',
          primaryRoute: '/partner-payments',
          secondaryLabel: 'Voltar ao início',
          secondaryRoute: '/partner-home',
        ),
      );
    } else {
      setState(() {
        _form = false;
        _onb = null;
        _error = s.needsData ? 'Ainda faltam alguns dados. Podes continuar quando quiseres.' : null;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(partnerConnectStatusProvider);
    final s = async.value ?? const ConnectStatus();
    final total = ConnectGroup.values.length;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(children: [
          PageHeader(title: _form ? 'Os teus dados' : 'Ativar pagamentos', centered: true),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 24),
              children: _form ? _formBody() : _checklist(async, s, total),
            ),
          ),
          if (!_form) _bottom(s),
        ]),
      ),
    );
  }

  List<Widget> _formBody() => [
        Container(
          padding: const EdgeInsets.all(12),
          decoration: whiteLineCard(),
          child: Stack(children: [
            AnimatedContainer(
              duration: const Duration(milliseconds: 180),
              height: _height,
              child: _onb?.view() ?? const SizedBox.shrink(),
            ),
            if (!_ready)
              const Positioned.fill(
                child: ColoredBox(
                  color: Colors.white,
                  child: Center(child: CircularProgressIndicator(color: AppTheme.brandGreen)),
                ),
              ),
          ]),
        ),
        const SizedBox(height: 12),
        const _Note('Formulário seguro da Stripe. A Tchin Tchin não guarda o teu documento nem o IBAN completo.'),
        const SizedBox(height: 8),
        Center(
          child: TextButton(
            onPressed: _finished,
            child: const Text('Terminar mais tarde',
                style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.brandGreen)),
          ),
        ),
      ];

  List<Widget> _checklist(AsyncValue<ConnectStatus> async, ConnectStatus s, int total) => [
        GreenHero(
          label: 'DADOS PARA RECEBER',
          value: '${s.groupsDone}',
          suffix: 'de $total confirmados',
          progress: s.groupsDone / total,
          doodles: const [Icons.verified_user_outlined, Icons.euro_rounded, Icons.auto_awesome_outlined],
          footer: Wrap(spacing: 6, runSpacing: 6, children: [
            HeroPill(s.chargesEnabled ? 'Recebe pagamentos ✓' : 'Recebe pagamentos', solid: s.chargesEnabled),
            HeroPill(s.payoutsEnabled ? 'Levantamentos ✓' : 'Levantamentos', solid: s.payoutsEnabled),
          ]),
        ),
        const SizedBox(height: 16),
        const Text(
          'A lei obriga a Stripe, que processa os pagamentos, a confirmar quem recebe o dinheiro. '
          'Tem isto à mão — demora cerca de 5 minutos:',
          style: TextStyle(color: AppTheme.inkMuted, height: 1.45, fontSize: AppFontSize.base),
        ),
        const SectionTitle('O que a Stripe precisa'),
        if (async.isLoading && !async.hasValue)
          const Padding(
            padding: EdgeInsets.all(24),
            child: Center(child: CircularProgressIndicator(color: AppTheme.brandGreen)),
          )
        else
          for (final (i, g) in ConnectGroup.values.indexed) ...[
            _GroupTile(group: g, state: s.stateOf(g), index: i, bankLast4: s.bankLast4),
            const SizedBox(height: 10),
          ],
        if (s.disabledReason != null && s.disabledReason!.contains('rejected')) ...[
          const SizedBox(height: 6),
          const _Warn('A Stripe recusou esta conta. Contacta o suporte Tchin Tchin.'),
        ],
        if (_error != null) ...[const SizedBox(height: 6), _Warn(_error!)],
        const SizedBox(height: 10),
        GestureDetector(
          onTap: () => setState(() => _agreed = !_agreed),
          child: Container(
            padding: const EdgeInsets.all(14),
            decoration: whiteLineCard(line: _agreed ? AppTheme.brandGreen : null, width: _agreed ? 2 : 1),
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              AnimatedContainer(
                duration: const Duration(milliseconds: 150),
                width: 22,
                height: 22,
                decoration: BoxDecoration(
                  color: _agreed ? AppTheme.brandGreen : Colors.white,
                  borderRadius: BorderRadius.circular(7),
                  border: Border.all(color: _agreed ? AppTheme.brandGreen : AppTheme.borderMuted, width: 2),
                ),
                child: _agreed ? const Icon(Icons.check, size: 15, color: Colors.white) : null,
              ),
              const SizedBox(width: 12),
              const Expanded(
                child: Text(
                  'Confirmo que os dados são verdadeiros e que a conta bancária está em meu nome ou da minha empresa.',
                  style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink, height: 1.4),
                ),
              ),
            ]),
          ),
        ),
        const SizedBox(height: 12),
        const _Note('Os dados vão diretamente para a Stripe, num formulário seguro dentro da app.'),
      ];

  Widget _bottom(ConnectStatus s) {
    final label = !s.hasAccount || !s.detailsSubmitted
        ? 'Confirmar dados'
        : s.needsData
            ? 'Completar dados em falta'
            : 'Rever os meus dados';
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
          onPressed: _agreed && !_loading ? _open : null,
          style: FilledButton.styleFrom(
            backgroundColor: AppTheme.brandGreen,
            disabledBackgroundColor: AppTheme.brandGreen.withValues(alpha: 0.4),
            foregroundColor: Colors.white,
            disabledForegroundColor: Colors.white,
            shape: const StadiumBorder(),
            textStyle: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700),
          ),
          child: _loading
              ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white))
              : Text(label),
        ),
      ),
    );
  }
}

class _GroupTile extends StatelessWidget {
  final ConnectGroup group;
  final GroupState state;
  final int index;
  final String? bankLast4;
  const _GroupTile({required this.group, required this.state, required this.index, this.bankLast4});

  @override
  Widget build(BuildContext context) {
    final (label, bg, fg) = switch (state) {
      GroupState.done => ('Confirmado', const Color(0xFFE4EFE5), const Color(0xFF2F6B45)),
      GroupState.missing => ('Em falta', const Color(0xFFFBE3E1), const Color(0xFFB3261E)),
      GroupState.verifying => ('A verificar', const Color(0xFFFCEFD6), const Color(0xFF7A5000)),
      GroupState.later => ('Mais tarde', const Color(0xFFF2F0EB), AppTheme.inkMuted),
      GroupState.todo => ('Por preencher', const Color(0xFFF2F0EB), AppTheme.inkMuted),
    };
    final hint = group == ConnectGroup.bank && bankLast4 != null ? 'IBAN terminado em $bankLast4' : group.hint;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: whiteLineCard(),
      child: Row(children: [
        StickerIcon(group.icon, turns: StickerIcon.tilt(index)),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(group.title,
                style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(hint, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.3)),
          ]),
        ),
        const SizedBox(width: 8),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
          decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
          child: Text(label, style: TextStyle(fontSize: AppFontSize.xs, fontWeight: FontWeight.w700, color: fg)),
        ),
      ]),
    );
  }
}

class _Note extends StatelessWidget {
  final String text;
  const _Note(this.text);

  @override
  Widget build(BuildContext context) => Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        const Icon(Icons.lock_outline, size: 16, color: AppTheme.inkMuted),
        const SizedBox(width: 8),
        Expanded(
          child: Text(text, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.4)),
        ),
      ]);
}

class _Warn extends StatelessWidget {
  final String text;
  const _Warn(this.text);

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: AppColors.pink, borderRadius: BorderRadius.circular(16)),
        child: Row(children: [
          const Icon(Icons.error_outline, size: 18, color: Color(0xFFB3261E)),
          const SizedBox(width: 8),
          Expanded(child: Text(text, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink))),
        ]),
      );
}
