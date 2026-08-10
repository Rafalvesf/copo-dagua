import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';

class ForgotPasswordScreen extends ConsumerStatefulWidget {
  const ForgotPasswordScreen({super.key});

  @override
  ConsumerState<ForgotPasswordScreen> createState() => _ForgotPasswordScreenState();
}

class _ForgotPasswordScreenState extends ConsumerState<ForgotPasswordScreen> {
  final _email = TextEditingController();
  bool _loading = false;
  bool _sent = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: _sent
            ? Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.mark_email_read_outlined, size: 56, color: Theme.of(context).colorScheme.primary),
                  const SizedBox(height: 16),
                  const Text(
                    'Se esse email existir na nossa plataforma, vais receber um link para repor a password.',
                    textAlign: TextAlign.center,
                  ),
                ],
              )
            : Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text('Esqueci-me da password', style: Theme.of(context).textTheme.headlineSmall),
                  const SizedBox(height: 16),
                  AuthTextField(label: 'Email', controller: _email, keyboardType: TextInputType.emailAddress),
                  const SizedBox(height: 20),
                  PrimaryButton(
                    label: 'Enviar link',
                    loading: _loading,
                    onPressed: () async {
                      setState(() => _loading = true);
                      await ref.read(authControllerProvider.notifier).requestPasswordReset(_email.text.trim());
                      setState(() {
                        _loading = false;
                        _sent = true;
                      });
                    },
                  ),
                ],
              ),
      ),
    );
  }
}
