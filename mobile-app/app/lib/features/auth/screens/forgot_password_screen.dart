import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/auth_ui.dart';

/// "Início 6 · Recuperar password" — igual ao canvas.
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
  void dispose() {
    _email.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    setState(() => _loading = true);
    try {
      await ref.read(authControllerProvider.notifier).requestPasswordReset(_email.text.trim());
    } catch (_) {}
    if (!mounted) return;
    setState(() {
      _loading = false;
      _sent = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return AuthPage(
      children: [
        const AuthHeading(
          icon: Icons.lock_reset_rounded,
          title: 'Esqueceste-te da password?',
          subtitle: 'Enviamos-te um link para criares uma nova.',
        ),
        AuthField(label: 'Email', controller: _email, hint: 'nome@email.pt', keyboardType: TextInputType.emailAddress, topGap: 24),
      ],
      footer: [
        AuthPrimaryButton(label: 'Enviar link', loading: _loading, onPressed: _send),
        if (_sent)
          Container(
            margin: const EdgeInsets.only(top: 14),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            decoration: BoxDecoration(color: AppColors.gray, borderRadius: BorderRadius.circular(12)),
            child: const Row(
              children: [
                Icon(Icons.check_circle_outline, size: 18, color: Color(0xFF3E5539)),
                SizedBox(width: 10),
                Expanded(
                  child: Text(
                    'Link enviado — vê o teu email.',
                    style: TextStyle(fontSize: 13, color: Color(0xFF3E5539)),
                  ),
                ),
              ],
            ),
          ),
      ],
    );
  }
}
