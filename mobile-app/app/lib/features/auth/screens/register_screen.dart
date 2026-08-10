import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/form_fields.dart';

final _nameRegex = RegExp(r'^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)+$');
final _emailRegex = RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$');
final _passwordRegex = RegExp(r'^(?=.*[A-Za-z])(?=.*\d).{8,}$');

class RegisterScreen extends ConsumerStatefulWidget {
  final UserRole role;

  const RegisterScreen({super.key, required this.role});

  @override
  ConsumerState<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends ConsumerState<RegisterScreen> {
  final _name = TextEditingController();
  final _email = TextEditingController();
  final _password = TextEditingController();
  bool _acceptedTerms = false;

  String? _nameError;
  String? _emailError;
  String? _passwordError;
  String? _termsError;

  @override
  void dispose() {
    _name.dispose();
    _email.dispose();
    _password.dispose();
    super.dispose();
  }

  bool _validate() {
    setState(() {
      _nameError = _nameRegex.hasMatch(_name.text.trim()) ? null : 'Introduz o teu nome completo';
      _emailError = _emailRegex.hasMatch(_email.text.trim()) ? null : 'Introduz um email válido';
      _passwordError = _passwordRegex.hasMatch(_password.text)
          ? null
          : 'A password precisa de pelo menos 8 caracteres, com letras e números';
      _termsError = _acceptedTerms ? null : 'Precisas de aceitar os termos para continuar';
    });
    return _nameError == null && _emailError == null && _passwordError == null && _termsError == null;
  }

  @override
  Widget build(BuildContext context) {
    final auth = ref.watch(authControllerProvider);
    final loading = auth.status == AuthStatus.authenticating;

    ref.listen(authControllerProvider, (prev, next) {
      if (next.status == AuthStatus.emailUnverified) {
        context.go('/verify-email');
      }
    });

    return Scaffold(
      appBar: AppBar(),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            if (auth.status == AuthStatus.error && auth.errorMessage != null)
              ErrorBanner(message: auth.errorMessage!),
            AuthTextField(label: 'Nome completo', controller: _name, errorText: _nameError),
            const SizedBox(height: 12),
            AuthTextField(
              label: 'Email',
              controller: _email,
              keyboardType: TextInputType.emailAddress,
              errorText: _emailError,
            ),
            const SizedBox(height: 12),
            PasswordField(
              controller: _password,
              errorText: _passwordError,
              helperText: 'Mín. 8 caracteres, 1 letra e 1 número',
            ),
            const SizedBox(height: 12),
            CheckboxListTile(
              contentPadding: EdgeInsets.zero,
              controlAffinity: ListTileControlAffinity.leading,
              value: _acceptedTerms,
              title: const Text('Aceito os Termos e a Política de Privacidade'),
              onChanged: (v) => setState(() => _acceptedTerms = v ?? false),
            ),
            if (_termsError != null)
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Text(_termsError!, style: TextStyle(color: Theme.of(context).colorScheme.error)),
              ),
            const SizedBox(height: 8),
            PrimaryButton(
              label: 'Criar conta',
              loading: loading,
              onPressed: () {
                if (!_validate()) return;
                ref.read(authControllerProvider.notifier).register(
                      fullName: _name.text.trim(),
                      email: _email.text.trim(),
                      password: _password.text,
                      role: widget.role,
                    );
              },
            ),
            const SizedBox(height: 20),
            const Row(
              children: [
                Expanded(child: Divider()),
                Padding(padding: EdgeInsets.symmetric(horizontal: 8), child: Text('ou')),
                Expanded(child: Divider()),
              ],
            ),
            const SizedBox(height: 20),
            SocialLoginButton(label: 'Continuar com Google', icon: Icons.g_mobiledata, onPressed: null),
            const SizedBox(height: 12),
            SocialLoginButton(label: 'Continuar com Apple', icon: Icons.apple, onPressed: null),
          ],
        ),
      ),
    );
  }
}
