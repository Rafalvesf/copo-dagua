import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/form_fields.dart';

class LoginScreen extends ConsumerStatefulWidget {
  const LoginScreen({super.key});

  @override
  ConsumerState<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends ConsumerState<LoginScreen> {
  final _email = TextEditingController(text: 'ana@exemplo.com');
  final _password = TextEditingController(text: 'teste1234');

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

    return Scaffold(
      appBar: AppBar(),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Entrar', style: Theme.of(context).textTheme.headlineSmall),
            const SizedBox(height: 8),
            Text(
              'Conta de demonstração já preenchida: ana@exemplo.com / teste1234',
              style: Theme.of(context).textTheme.bodySmall,
            ),
            const SizedBox(height: 20),
            if (auth.status == AuthStatus.error && auth.errorMessage != null)
              ErrorBanner(message: auth.errorMessage!),
            AuthTextField(label: 'Email', controller: _email, keyboardType: TextInputType.emailAddress),
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
              onPressed: () => ref.read(authControllerProvider.notifier).login(
                    email: _email.text.trim(),
                    password: _password.text,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}
