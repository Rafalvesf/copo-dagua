import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show OAuthProvider;

import '../../../core/auth/auth_controller.dart';
import '../../../core/auth/google_web_button.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/flow_kit.dart';
import '../../../shared/widgets/shake.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Entrar com email (o mesmo aspeto do «Entra com o teu email» do fluxo
/// novo, 2026-11-27): email, palavra-passe, «Esqueci-me da palavra-passe» e
/// «Entrar»; por baixo, Apple e Google para quem criou a conta assim.
class LoginScreen extends ConsumerStatefulWidget {
  const LoginScreen({super.key});

  @override
  ConsumerState<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends ConsumerState<LoginScreen> {
  final _email = TextEditingController();
  final _password = TextEditingController();
  bool _show = false;
  bool _keep = true;
  // Palavra-passe errada (skill `animacoes`): o campo abana e fica com a
  // linha vermelha até se voltar a escrever.
  int _shake = 0;
  bool _wrong = false;

  @override
  void dispose() {
    _email.dispose();
    _password.dispose();
    super.dispose();
  }

  void _login() {
    // Deixa o gestor de palavras-passe oferecer guardar o login.
    TextInput.finishAutofillContext();
    ref.read(authControllerProvider.notifier).login(email: _email.text.trim(), password: _password.text, keepSignedIn: _keep);
  }

  @override
  Widget build(BuildContext context) {
    final auth = ref.watch(authControllerProvider);
    final loading = auth.status == AuthStatus.authenticating;
    ref.listen(authControllerProvider.select((a) => a.status), (prev, next) {
      if (next == AuthStatus.error && prev != AuthStatus.error) {
        setState(() {
          _shake++;
          _wrong = true;
        });
      }
    });
    final notifier = ref.read(authControllerProvider.notifier);

    return FlowPage(
      tint: FlowTint.green,
      dashCount: 0,
      dashOn: 0,
      trailingLabel: 'Voltar',
      onTrailing: () => context.canPop() ? context.pop() : context.go('/welcome'),
      centerContent: true,
      content: const FlowStarHalo(Estrela.feliz, size: 120),
      title: 'Bem-vindo\nde volta',
      cta: AutofillGroup(
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          if (auth.status == AuthStatus.error && auth.errorMessage != null) ...[
            ErrorBanner(message: auth.errorMessage!),
            const SizedBox(height: 12),
          ],
          FlowField(
            controller: _email,
            hint: 'O teu email',
            keyboardType: TextInputType.emailAddress,
            autofillHints: const [AutofillHints.email, AutofillHints.username],
          ),
          const SizedBox(height: 8),
          Shake(
            trigger: _shake,
            child: FlowField(
              controller: _password,
              hint: 'Palavra-passe',
              obscure: !_show,
              error: _wrong ? 'Email ou palavra-passe errados.' : null,
              autofillHints: const [AutofillHints.password],
              onChanged: (_) {
                if (_wrong) setState(() => _wrong = false);
              },
              trailing: SnappyTap(
                onTap: () => setState(() => _show = !_show),
                child: Padding(
                  padding: const EdgeInsets.only(left: 8),
                  child: Text(_show ? 'Esconder' : 'Mostrar',
                      style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF57534E))),
                ),
              ),
            ),
          ),
          const SizedBox(height: 4),
          Align(
            alignment: Alignment.centerRight,
            child: FlowTextAction('Esqueci-me da palavra-passe',
                color: const Color(0xFF171713), onTap: () => context.push('/forgot-password')),
          ),
          const SizedBox(height: 4),
          FlowCheckBox(
            value: _keep,
            onChanged: (v) => setState(() => _keep = v),
            label: const TextSpan(text: 'Manter a sessão iniciada'),
          ),
          const SizedBox(height: 22),
          FlowCta(label: 'Entrar', loading: loading, onPressed: _login),
          const SizedBox(height: 16),
          const FlowNote('ou'),
          const SizedBox(height: 12),
          FlowSocialButton.apple(onPressed: () => notifier.signInWithProvider(OAuthProvider.apple)),
          const SizedBox(height: 10),
          googleWebButton(onCredential: (token, nonce) => notifier.signInWithGoogleIdToken(token, nonce)) ??
              FlowSocialButton.google(onPressed: () => notifier.signInWithProvider(OAuthProvider.google)),
        ]),
      ),
      footer: FlowFooterLink(prefix: 'Ainda não tens conta?', action: 'Criar conta', onTap: () => context.push('/comecar')),
    );
  }
}
