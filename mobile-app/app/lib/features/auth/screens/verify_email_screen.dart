import 'dart:async';

import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/public_state.dart';
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
      background: AppBackground.subtle,
      body: SafeArea(
        child: PublicStateView(
          pose: MascotPose.chat,
          title: 'Confirma o teu email',
          message: email.isEmpty
              ? 'Enviámos-te um link. Abre-o para continuar.'
              : 'Enviámos um link para $email. Abre-o e volta aqui.',
          actions: [
            PrimaryButton(
              label: 'Já verifiquei',
              loading: loading,
              onPressed: () => ref.read(authControllerProvider.notifier).confirmEmailVerified(),
            ),
            TextButton(
              onPressed: _resendCooldown == 0 ? () => setState(() => _resendCooldown = 60) : null,
              child: Text(
                _resendCooldown == 0 ? 'Reenviar email' : 'Reenviar email (daqui a ${_resendCooldown}s)',
              ),
            ),
          ],
        ),
      ),
    );
  }
}
