import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/auth_ui.dart';
import '../../../shared/widgets/feedback.dart';

/// "Início 5 · Entrar" — igual ao canvas.
class LoginScreen extends ConsumerStatefulWidget {
  const LoginScreen({super.key});

  @override
  ConsumerState<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends ConsumerState<LoginScreen> {
  final _email = TextEditingController();
  final _password = TextEditingController();
  bool _keep = true;

  @override
  void dispose() {
    _email.dispose();
    _password.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final auth = ref.watch(authControllerProvider);
    final loading = auth.status == AuthStatus.authenticating;

    return AuthPage(
      children: [
        const AuthHeading(title: 'Bem-vindo de volta', subtitle: 'Entra para continuar a organizar.'),
        if (auth.status == AuthStatus.error && auth.errorMessage != null) ...[
          const SizedBox(height: 16),
          ErrorBanner(message: auth.errorMessage!),
        ],
        AutofillGroup(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              AuthField(
                label: 'Email',
                controller: _email,
                hint: 'nome@email.pt',
                keyboardType: TextInputType.emailAddress,
                topGap: 24,
                autofillHints: const [AutofillHints.email, AutofillHints.username],
              ),
              AuthField(
                label: 'Password',
                controller: _password,
                hint: '••••••••',
                password: true,
                autofillHints: const [AutofillHints.password],
              ),
            ],
          ),
        ),
        const SizedBox(height: 12),
        Row(
          children: [
            Expanded(
              child: GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: () => setState(() => _keep = !_keep),
                child: Row(
                  children: [
                    AnimatedContainer(
                      duration: const Duration(milliseconds: 150),
                      width: 22,
                      height: 22,
                      decoration: BoxDecoration(
                        color: _keep ? AppTheme.accentOliveDark : Colors.white,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(color: _keep ? AppTheme.accentOliveDark : const Color(0xFF8F8B84), width: 1.5),
                      ),
                      child: _keep ? const Icon(Icons.check_rounded, size: 15, color: Colors.white) : null,
                    ),
                    const SizedBox(width: 10),
                    const Flexible(
                      child: Text(
                        'Manter sessão iniciada',
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(fontSize: 14, color: AppTheme.ink),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            TextButton(
            onPressed: () => context.push('/forgot-password'),
            style: TextButton.styleFrom(
              foregroundColor: AppTheme.accentOliveDark,
              padding: EdgeInsets.zero,
              textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 14, fontWeight: FontWeight.w700),
            ),
            child: const Text('Esqueci-me da password'),
          ),
          ],
        ),
      ],
      footer: [
        AuthPrimaryButton(
          label: 'Entrar',
          loading: loading,
          onPressed: () {
            // Deixa o gestor de passwords oferecer guardar o login.
            TextInput.finishAutofillContext();
            ref.read(authControllerProvider.notifier).login(email: _email.text.trim(), password: _password.text, keepSignedIn: _keep);
          },
        ),
        const SizedBox(height: 16),
        GestureDetector(
          onTap: () => context.push('/role'),
          child: const Text.rich(
            TextSpan(
              text: 'Ainda não tens conta? ',
              children: [TextSpan(text: 'Criar conta', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark))],
            ),
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 14, color: AppTheme.inkMuted),
          ),
        ),
      ],
    );
  }
}
