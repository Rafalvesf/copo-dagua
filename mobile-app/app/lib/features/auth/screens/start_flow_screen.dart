import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show OAuthProvider;

import '../../../core/analytics/funnel.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../core/auth/google_web_button.dart';
import '../../../core/models/models.dart';
import '../../../shared/hero_icons.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/flow_kit.dart';
import '../../../shared/widgets/step_slide.dart';

/// `/comecar`: «Como vais usar a À Nossa!?» e «Entra na À Nossa!»
/// (pranchetas «Fluxo novo», Boas-vindas 4 e 5, 2026-11-27).
class StartFlowScreen extends StatelessWidget {
  const StartFlowScreen({super.key});

  @override
  Widget build(BuildContext context) => StartFlowBody(
        onExit: () => context.canPop() ? context.pop() : context.go('/welcome'),
      );
}

/// O papel (obrigatório) e a entrada com Apple, Google ou email. Também
/// aparece dentro de `/welcome` quando as boas-vindas 1 a 3 já foram vistas
/// (aí sem [onExit]).
class StartFlowBody extends ConsumerStatefulWidget {
  /// «Voltar» no papel; sem ele, o papel não tem «Voltar».
  final VoidCallback? onExit;
  const StartFlowBody({super.key, this.onExit});

  @override
  ConsumerState<StartFlowBody> createState() => _StartFlowBodyState();
}

class _StartFlowBodyState extends ConsumerState<StartFlowBody> {
  int _step = 0; // 0 papel, 1 entrar
  bool? _partner;
  bool _accepted = false;
  bool _termsError = false;

  @override
  void initState() {
    super.initState();
    Funnel.track('start_flow_view');
  }

  /// Organizador: a conta nasce `couple` e passa por «O teu perfil»; quem
  /// não cria evento volta a utilizador («Começar» no «Tudo pronto»).
  UserRole get _role => _partner == true ? UserRole.partner : UserRole.couple;

  bool _termsOk() {
    if (_accepted) return true;
    setState(() => _termsError = true);
    return false;
  }

  Future<void> _social(OAuthProvider provider) async {
    if (!_termsOk()) return;
    await ref.read(authControllerProvider.notifier).signInWithProvider(provider, role: _role);
  }

  Future<void> _googleCredential(String idToken, String nonce) async {
    if (!_termsOk()) return;
    await ref.read(authControllerProvider.notifier).signInWithGoogleIdToken(idToken, nonce, role: _role);
  }

  void _email() {
    if (!_termsOk()) return;
    ref.read(authControllerProvider.notifier).clearError();
    context.push('/register?role=${_role.name}');
  }

  @override
  Widget build(BuildContext context) {
    return StepSlide(id: _step, order: _step, child: _step == 0 ? _rolePage() : _enterPage());
  }

  Widget _rolePage() => FlowPage(
        key: const ValueKey('role'),
        tint: FlowTint.blue,
        dashOn: 0,
        trailingLabel: widget.onExit == null ? null : 'Voltar',
        onTrailing: widget.onExit,
        centerContent: true,
        content: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          FlowChoiceCard(
            title: 'Quero organizar eventos',
            icon: Hi.sparkles,
            selected: _partner == false,
            onTap: () => setState(() => _partner = false),
          ),
          const SizedBox(height: 12),
          FlowChoiceCard(
            title: 'Tenho um negócio',
            icon: Hi.buildingStorefront,
            selected: _partner == true,
            onTap: () => setState(() => _partner = true),
          ),
        ]),
        title: 'Como vais usar\na À Nossa!?',
        cta: FlowCta(label: 'Continuar', onPressed: _partner == null ? null : () => setState(() => _step = 1)),
        footer: FlowFooterLink(prefix: 'Já tens conta?', action: 'Entrar', onTap: () => context.push('/login')),
      );

  Widget _enterPage() {
    final auth = ref.watch(authControllerProvider);
    final loading = auth.status == AuthStatus.authenticating;
    // O botão oficial do Google (web) só aparece depois dos 18 anos: até
    // lá, o nosso botão mostra a caixa em erro.
    final googleOfficial = _accepted ? googleWebButton(onCredential: _googleCredential) : null;
    return FlowPage(
      key: const ValueKey('enter'),
      tint: FlowTint.green,
      dashOn: 1,
      trailingLabel: 'Voltar',
      onTrailing: () => setState(() => _step = 0),
      centerContent: true,
      content: const FlowStarHalo(Estrela.piscar, size: 190),
      title: 'Entra na\nÀ Nossa!',
      cta: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        if (auth.status == AuthStatus.error && auth.errorMessage != null) ...[
          ErrorBanner(message: auth.errorMessage!),
          const SizedBox(height: 12),
        ],
        FlowSocialButton.apple(loading: loading, onPressed: () => _social(OAuthProvider.apple)),
        const SizedBox(height: 10),
        googleOfficial ?? FlowSocialButton.google(onPressed: () => _social(OAuthProvider.google)),
        const SizedBox(height: 16),
        AdultTermsBox(
          value: _accepted,
          error: _termsError && !_accepted,
          onChanged: (v) => setState(() {
            _accepted = v;
            if (v) _termsError = false;
          }),
        ),
      ]),
      footer: FlowFooterLink(prefix: 'Preferes o email?', action: 'Continuar com email', onTap: _email),
    );
  }
}

/// «Tenho 18 anos ou mais e aceito os Termos e a Privacidade» (obrigatório
/// para Apple, Google e email). «Termos» e «Privacidade» abrem as páginas.
class AdultTermsBox extends StatelessWidget {
  final bool value;
  final bool error;
  final ValueChanged<bool> onChanged;
  const AdultTermsBox({super.key, required this.value, required this.onChanged, this.error = false});

  @override
  Widget build(BuildContext context) {
    const bold = TextStyle(fontWeight: FontWeight.w700);
    const link = TextStyle(fontWeight: FontWeight.w700, decoration: TextDecoration.underline);
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
      FlowCheckBox(
        value: value,
        error: error,
        onChanged: onChanged,
        label: TextSpan(children: [
          const TextSpan(text: 'Tenho 18 anos ou mais', style: bold),
          const TextSpan(text: ' e aceito os '),
          TextSpan(text: 'Termos', style: link, recognizer: TapGestureRecognizer()..onTap = () => context.push('/termos')),
          const TextSpan(text: ' e a '),
          TextSpan(
              text: 'Privacidade', style: link, recognizer: TapGestureRecognizer()..onTap = () => context.push('/privacidade')),
          const TextSpan(text: '.'),
        ]),
      ),
      if (error) ...[
        const SizedBox(height: 8),
        const Padding(
          padding: EdgeInsets.only(left: 8),
          child: Text('Confirma que tens 18 anos ou mais para continuar.',
              style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFFC8553D))),
        ),
      ],
    ]);
  }
}
