import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

class LoginScreen extends ConsumerStatefulWidget {
  const LoginScreen({super.key});

  @override
  ConsumerState<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends ConsumerState<LoginScreen> {
  final _email = TextEditingController();
  final _password = TextEditingController();

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

    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const CircleBackButton(),
              const SizedBox(height: 8),
              Text('Entrar', style: Theme.of(context).textTheme.headlineSmall),
              const SizedBox(height: 20),
              if (auth.status == AuthStatus.error && auth.errorMessage != null)
                ErrorBanner(message: auth.errorMessage!),
              AuthTextField(
                label: 'Email',
                controller: _email,
                keyboardType: TextInputType.emailAddress,
              ),
              const SizedBox(height: 12),
              PasswordField(controller: _password),
              Align(
                alignment: Alignment.centerRight,
                child: TextButton(
                  onPressed: () => context.push('/forgot-password'),
                  child: const Text('Esqueci-me da password'),
                ),
              ),
              const SizedBox(height: 8),
              PrimaryButton(
                label: 'Entrar',
                loading: loading,
                onPressed: () => ref
                    .read(authControllerProvider.notifier)
                    .login(email: _email.text.trim(), password: _password.text),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
