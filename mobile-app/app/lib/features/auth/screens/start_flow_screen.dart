import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show OAuthProvider;

import '../../../core/analytics/funnel.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../core/auth/google_web_button.dart';
import '../../../core/models/models.dart';
import '../../../core/moderation/word_filter.dart';
import '../../../core/onboarding/intro_answers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/onb_kit.dart';

/// Início da app, depois de "Começar" (mockup "Onboarding" 2–5,
/// 2026-11-12): papel → tipos de eventos de interesse → de onde és e
/// idade → entrar. Nada disto cria um evento; as respostas vão para o
/// perfil quando a conta existir ([IntroAnswers]).
class StartFlowScreen extends ConsumerStatefulWidget {
  const StartFlowScreen({super.key});

  @override
  ConsumerState<StartFlowScreen> createState() => _StartFlowScreenState();
}

const _interestOptions = ['Casamento', 'Aniversário', 'Batizado', 'Festa', 'Despedida', 'Evento de empresa', 'Jantar', 'Outro'];
const _ageOptions = ['18–24', '25–34', '35–44', '45–54', '55+'];

class _StartFlowScreenState extends ConsumerState<StartFlowScreen> {
  int _step = 0; // 0 papel, 1 tipos, 2 origem, 3 entrar
  bool _partner = false;
  final Set<String> _interests = {};
  final _country = TextEditingController(text: 'Portugal');
  final _city = TextEditingController();
  String? _age;

  @override
  void initState() {
    super.initState();
    Funnel.track('start_flow_view');
    _city.addListener(() => setState(() {}));
    _country.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _country.dispose();
    _city.dispose();
    super.dispose();
  }

  // A barra começa em 20% (no Início) e acaba em 100% (Entrar).
  double get _progress => (40 + 20 * _step) / 100;

  void _back() {
    if (_step == 0) {
      context.go('/welcome');
    } else {
      setState(() => _step--);
    }
  }

  Future<void> _next() async {
    if (_step == 2) {
      IntroAnswers.partner = _partner;
      IntroAnswers.interests = _interests.toList();
      IntroAnswers.country = _country.text.trim().isEmpty ? 'Portugal' : _country.text.trim();
      IntroAnswers.city = _city.text.trim();
      IntroAnswers.ageRange = _age?.replaceAll('–', '-');
      await IntroAnswers.save();
    }
    if (mounted) setState(() => _step++);
  }

  /// Organizador: conta "Utilizador" que entra pelo criar evento
  /// (internamente `couple` até decidir, como no registo).
  UserRole get _signupRole => _partner ? UserRole.partner : UserRole.couple;

  Future<void> _social(OAuthProvider provider) =>
      ref.read(authControllerProvider.notifier).signInWithProvider(provider, role: _signupRole);

  Future<void> _googleCredential(String idToken, String nonce) =>
      ref.read(authControllerProvider.notifier).signInWithGoogleIdToken(idToken, nonce, role: _signupRole);

  String? get _cityError => WordFilter.allowed(_city.text) ? null : WordFilter.message;

  @override
  Widget build(BuildContext context) {
    final interestsTitle = _partner ? 'Para que tipos de eventos gostavas de trabalhar?' : 'Que tipos de eventos gostavas de organizar?';
    switch (_step) {
      case 0:
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: '1 de 4',
          title: 'Como vais usar a À Nossa!?',
          subtitle: 'Podes mudar mais tarde nas definições.',
          bottom: OnbButton(label: 'Continuar', onPressed: _next),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            OnbOption(
              title: 'Vou organizar um evento',
              subtitle: 'Casamento, aniversário, festa. Convidados, orçamento e parceiros num só sítio.',
              selected: !_partner,
              onTap: () => setState(() => _partner = false),
            ),
            const SizedBox(height: 12),
            OnbOption(
              title: 'Sou parceiro',
              subtitle: 'Fotógrafo, espaço, catering, música… Recebe pedidos de orçamento e reservas.',
              selected: _partner,
              onTap: () => setState(() => _partner = true),
            ),
            const SizedBox(height: 16),
            const OnbMeta('Foste convidado? Abre o link do convite.', align: TextAlign.center),
          ]),
        );
      case 1:
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: '2 de 4',
          title: interestsTitle,
          subtitle: 'Escolhe os que quiseres. Mostramos-te ideias e parceiros a pensar nisso.',
          bottom: OnbButton(label: 'Continuar', onPressed: _next),
          child: OnbChips(
            items: _interestOptions,
            selected: _interests,
            onTap: (v) => setState(() => _interests.contains(v) ? _interests.remove(v) : _interests.add(v)),
          ),
        );
      case 2:
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: '3 de 4',
          title: 'De onde és?',
          subtitle: 'Para te mostrar parceiros e eventos perto de ti.',
          bottom: OnbButton(
            label: 'Continuar',
            onPressed: _cityError == null && _country.text.trim().isNotEmpty ? _next : null,
          ),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            OnbField(controller: _country, label: 'País', hint: 'Portugal', maxLength: null),
            const SizedBox(height: 12),
            OnbField(controller: _city, label: 'Cidade ou região', hint: 'Ex.: Lisboa', error: _cityError),
            const SizedBox(height: 20),
            const OnbGroupLabel('Idade'),
            const SizedBox(height: 8),
            OnbChips(
              items: _ageOptions,
              selected: {?_age},
              onTap: (v) => setState(() => _age = _age == v ? null : v),
            ),
          ]),
        );
      default:
        final auth = ref.watch(authControllerProvider);
        final loading = auth.status == AuthStatus.authenticating;
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: '4 de 4',
          title: 'Entra na À Nossa!',
          subtitle: 'Escolhe como queres entrar.',
          scroll: false,
          bottom: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            if (auth.status == AuthStatus.error && auth.errorMessage != null) ...[
              ErrorBanner(message: auth.errorMessage!),
              const SizedBox(height: 12),
            ],
            OnbButton(label: 'Continuar com Apple', loading: loading, onPressed: () => _social(OAuthProvider.apple)),
            const SizedBox(height: 10),
            googleWebButton(onCredential: _googleCredential) ??
                OnbButton(label: 'Continuar com Google', secondary: true, onPressed: () => _social(OAuthProvider.google)),
            const SizedBox(height: 10),
            OnbButton(
              label: 'Continuar com email',
              secondary: true,
              onPressed: () => context.push('/register?role=${_partner ? 'partner' : 'guest'}'),
            ),
            const SizedBox(height: 14),
            Text.rich(
              TextSpan(children: [
                const TextSpan(text: 'Ao continuar aceitas os '),
                WidgetSpan(
                  alignment: PlaceholderAlignment.baseline,
                  baseline: TextBaseline.alphabetic,
                  child: GestureDetector(onTap: () => context.push('/termos'), child: const Text('Termos', style: _link)),
                ),
                const TextSpan(text: ' e a '),
                WidgetSpan(
                  alignment: PlaceholderAlignment.baseline,
                  baseline: TextBaseline.alphabetic,
                  child: GestureDetector(
                      onTap: () => context.push('/privacidade'), child: const Text('Política de privacidade', style: _link)),
                ),
                const TextSpan(text: '.'),
              ]),
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 13, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.inkMuted),
            ),
          ]),
          child: const SizedBox.shrink(),
        );
    }
  }
}

const _link = TextStyle(
  fontSize: 13,
  height: 1.4,
  fontWeight: FontWeight.w700,
  color: AppTheme.inkMuted,
  decoration: TextDecoration.underline,
);
