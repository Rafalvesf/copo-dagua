import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

class VerifyEmailScreen extends ConsumerStatefulWidget {
  const VerifyEmailScreen({super.key});

  @override
  ConsumerState<VerifyEmailScreen> createState() => _VerifyEmailScreenState();
}

class _VerifyEmailScreenState extends ConsumerState<VerifyEmailScreen> {
  int _resendCooldown = 60;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (t) {
      if (_resendCooldown == 0) {
        t.cancel();
        return;
      }
      setState(() => _resendCooldown--);
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final auth = ref.watch(authControllerProvider);
    final email = auth.profile?.email ?? '';
    final loading = auth.status == AuthStatus.authenticating;

    return GradientScaffold(
      background: AppBackground.hero,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.mark_email_unread_outlined, size: 56, color: Theme.of(context).colorScheme.primary),
              const SizedBox(height: 20),
              Text(
                'Enviámos um link para\n$email',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.titleMedium,
              ),
              const SizedBox(height: 32),
              TextButton(
                onPressed: _resendCooldown == 0 ? () => setState(() => _resendCooldown = 60) : null,
                child: Text(
                  _resendCooldown == 0 ? 'Reenviar email' : 'Reenviar email (disponível em ${_resendCooldown}s)',
                ),
              ),
              const SizedBox(height: 12),
              PrimaryButton(
                label: 'Já verifiquei',
                loading: loading,
                onPressed: () => ref.read(authControllerProvider.notifier).confirmEmailVerified(),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
