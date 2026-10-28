import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show AuthException;

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/auth_ui.dart';

/// "Início 6 · Recuperar password". Desde 2026-10-25 tudo dentro da app:
/// pede o email, envia um código de 6 dígitos e, no mesmo ecrã, escreve-se
/// o código e a password nova (antes só dizia "vê o teu email" e não havia
/// onde pôr o código).
class ForgotPasswordScreen extends ConsumerStatefulWidget {
  const ForgotPasswordScreen({super.key});

  @override
  ConsumerState<ForgotPasswordScreen> createState() => _ForgotPasswordScreenState();
}

class _ForgotPasswordScreenState extends ConsumerState<ForgotPasswordScreen> {
  final _email = TextEditingController();
  final _code = TextEditingController();
  final _password = TextEditingController();
  final _confirm = TextEditingController();
  bool _loading = false;
  bool _sent = false;
  String? _error;

  @override
  void dispose() {
    _email.dispose();
    _code.dispose();
    _password.dispose();
    _confirm.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    final email = _email.text.trim();
    if (!email.contains('@')) {
      setState(() => _error = 'Escreve o teu email.');
      return;
    }
    setState(() {
      _loading = true;
      _error = null;
    });
    try {
      await ref.read(authControllerProvider.notifier).requestPasswordReset(email);
    } catch (_) {}
    if (!mounted) return;
    setState(() {
      _loading = false;
      _sent = true;
    });
  }

  Future<void> _reset() async {
    final code = _code.text.replaceAll(RegExp(r'\s'), '');
    if (code.length < 6) {
      setState(() => _error = 'Escreve o código de 6 dígitos que recebeste por email.');
      return;
    }
    if (!RegExp(r'^(?=.*[A-Za-z])(?=.*\d).{8,}$').hasMatch(_password.text)) {
      setState(() => _error = 'A password nova precisa de pelo menos 8 caracteres, com letras e números.');
      return;
    }
    if (_password.text != _confirm.text) {
      setState(() => _error = 'As passwords não coincidem.');
      return;
    }
    setState(() {
      _loading = true;
      _error = null;
    });
    try {
      await ref.read(authControllerProvider.notifier).resetPasswordWithCode(
            email: _email.text.trim(),
            code: code,
            newPassword: _password.text,
          );
    } on AuthException catch (e) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = e.message.toLowerCase().contains('expired') || e.message.toLowerCase().contains('invalid')
            ? 'Código errado ou expirado. Pede um novo.'
            : 'Não foi possível mudar a password. Tenta outra vez.';
      });
      return;
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = 'Não foi possível mudar a password. Tenta outra vez.';
      });
      return;
    }
    if (mounted) setState(() => _loading = false);
  }

  @override
  Widget build(BuildContext context) {
    return AuthPage(
      children: [
        AuthHeading(
          icon: Icons.lock_reset_rounded,
          title: _sent ? 'Cria uma password nova' : 'Esqueceste-te da password?',
          subtitle: _sent
              ? 'Enviámos um código de 6 dígitos para ${_email.text.trim()}. Escreve-o aqui com a password nova.'
              : 'Enviamos-te um código para criares uma nova, aqui na app.',
        ),
        if (!_sent)
          AuthField(label: 'Email', controller: _email, hint: 'nome@email.pt', keyboardType: TextInputType.emailAddress, topGap: 24)
        else ...[
          AuthField(label: 'Código', controller: _code, hint: '123456', keyboardType: TextInputType.number, topGap: 24, autofillHints: const [AutofillHints.oneTimeCode]),
          AuthField(label: 'Password nova', controller: _password, password: true, autofillHints: const [AutofillHints.newPassword]),
          AuthField(label: 'Confirmar password', controller: _confirm, password: true, autofillHints: const [AutofillHints.newPassword]),
        ],
        if (_error != null)
          Padding(
            padding: const EdgeInsets.only(top: 12),
            child: Text(_error!, style: const TextStyle(fontSize: 13, color: AppTheme.ink, fontWeight: FontWeight.w600)),
          ),
      ],
      footer: [
        AuthPrimaryButton(
          label: _sent ? 'Guardar e entrar' : 'Enviar código',
          loading: _loading,
          onPressed: _sent ? _reset : _send,
        ),
        if (_sent)
          TextButton(
            onPressed: _loading ? null : _send,
            style: TextButton.styleFrom(foregroundColor: AppTheme.accentOliveDark),
            child: const Text('Reenviar código'),
          ),
      ],
    );
  }
}
