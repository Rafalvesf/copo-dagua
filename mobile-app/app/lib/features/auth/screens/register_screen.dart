import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

final _nameRegex = RegExp(r'^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)+$');
final _emailRegex = RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$');
final _passwordRegex = RegExp(r'^(?=.*[A-Za-z])(?=.*\d).{8,}$');

class RegisterScreen extends ConsumerStatefulWidget {
  final UserRole role;

  /// Pré-preenchido quando se chega aqui a partir do link de convite
  /// (`invite_page_screen.dart`, `?code=...`) — conta passou a ser
  /// obrigatória para o convidado, por isso o link já traz o código do
  /// casal em vez de deixar o convidado de o copiar à mão.
  final String? initialWeddingCode;

  const RegisterScreen({super.key, required this.role, this.initialWeddingCode});

  @override
  ConsumerState<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends ConsumerState<RegisterScreen> {
  final _name = TextEditingController();
  final _email = TextEditingController();
  final _password = TextEditingController();
  final _weddingCode = TextEditingController();
  bool _acceptedTerms = false;
  bool _checkingCode = false;

  String? _nameError;
  String? _emailError;
  String? _passwordError;
  String? _termsError;
  String? _weddingCodeError;

  // Pré-visualização em tempo real do casamento encontrado pelo
  // código, enquanto o convidado ainda está a preencher o resto do
  // formulário — antes disto, o único feedback sobre o código
  // acontecia em `_submit()`, no fim, sem mostrar a quem se estava a
  // juntar. Puramente aditivo: `_submit()` continua a validar o
  // código de novo no fim, exatamente como antes.
  Timer? _codeDebounce;
  bool _verifyingCode = false;
  String? _foundWeddingNames;

  @override
  void initState() {
    super.initState();
    if (widget.initialWeddingCode != null) {
      _weddingCode.text = widget.initialWeddingCode!;
      _onWeddingCodeChanged(widget.initialWeddingCode!);
    }
  }

  @override
  void dispose() {
    _codeDebounce?.cancel();
    _name.dispose();
    _email.dispose();
    _password.dispose();
    _weddingCode.dispose();
    super.dispose();
  }

  void _onWeddingCodeChanged(String value) {
    _codeDebounce?.cancel();
    final trimmed = value.trim();
    if (trimmed.isEmpty) {
      setState(() => _foundWeddingNames = null);
      return;
    }
    _codeDebounce = Timer(const Duration(milliseconds: 500), () => _lookupWeddingCode(trimmed));
  }

  /// Só uma pré-visualização best-effort — nunca bloqueia nem substitui
  /// a validação real feita em `_submit()` antes do signUp.
  Future<void> _lookupWeddingCode(String code) async {
    setState(() => _verifyingCode = true);
    try {
      final rows = await supabase.rpc(
        'lookup_wedding_by_guest_code',
        params: {'p_code': code},
      ) as List;
      if (!mounted) return;
      if (rows.isEmpty) {
        setState(() => _foundWeddingNames = null);
      } else {
        final row = rows.first as Map<String, dynamic>;
        final name1 = row['partner_name_1'] as String?;
        final name2 = row['partner_name_2'] as String?;
        setState(() {
          _foundWeddingNames = (name2 != null && name2.isNotEmpty) ? '$name1 & $name2' : (name1 ?? '');
        });
      }
    } catch (_) {
      if (!mounted) return;
      setState(() => _foundWeddingNames = null);
    } finally {
      if (mounted) setState(() => _verifyingCode = false);
    }
  }

  bool _validate() {
    setState(() {
      _nameError = _nameRegex.hasMatch(_name.text.trim())
          ? null
          : 'Introduz o teu nome completo';
      _emailError = _emailRegex.hasMatch(_email.text.trim())
          ? null
          : 'Introduz um email válido';
      _passwordError = _passwordRegex.hasMatch(_password.text)
          ? null
          : 'A password precisa de pelo menos 8 caracteres, com letras e números';
      _termsError = _acceptedTerms
          ? null
          : 'Precisas de aceitar os termos para continuar';
      if (widget.role == UserRole.guest) {
        _weddingCodeError = _weddingCode.text.trim().isEmpty
            ? 'Indica o código do casal que te convidou'
            : null;
      }
    });
    return _nameError == null &&
        _emailError == null &&
        _passwordError == null &&
        _termsError == null &&
        _weddingCodeError == null;
  }

  /// Confirma o código do casal (`lookup_wedding_by_guest_code()`,
  /// `050_wedding_guest_code.sql`) ANTES de criar a conta — nunca cria uma
  /// conta real presa a um código inválido. Público (`anon`), por isso
  /// não precisa de sessão nenhuma para correr aqui. A associação real
  /// (`join_wedding_by_code`) só acontece depois do signUp, dentro de
  /// `AuthController.register()`, já autenticado.
  Future<void> _submit() async {
    if (!_validate()) return;
    if (widget.role == UserRole.guest) {
      setState(() => _checkingCode = true);
      final List rows;
      try {
        rows = await supabase.rpc(
          'lookup_wedding_by_guest_code',
          params: {'p_code': _weddingCode.text.trim()},
        ) as List;
      } catch (_) {
        if (!mounted) return;
        setState(() {
          _checkingCode = false;
          _weddingCodeError = 'Não foi possível verificar o código. Tenta novamente.';
        });
        return;
      }
      if (!mounted) return;
      setState(() => _checkingCode = false);
      if (rows.isEmpty) {
        setState(
          () => _weddingCodeError = 'Código inválido — confirma com o casal.',
        );
        return;
      }
    }
    if (!mounted) return;
    ref
        .read(authControllerProvider.notifier)
        .register(
          fullName: _name.text.trim(),
          email: _email.text.trim(),
          password: _password.text,
          role: widget.role,
          weddingCode: widget.role == UserRole.guest
              ? _weddingCode.text.trim()
              : null,
        );
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
              if (auth.status == AuthStatus.error && auth.errorMessage != null)
                ErrorBanner(message: auth.errorMessage!),
              AuthTextField(
                label: 'Nome completo',
                controller: _name,
                errorText: _nameError,
              ),
              const SizedBox(height: 12),
              if (widget.role == UserRole.guest) ...[
                AuthTextField(
                  label: 'Código do casal',
                  controller: _weddingCode,
                  errorText: _weddingCodeError,
                  onChanged: _onWeddingCodeChanged,
                ),
                if (_verifyingCode)
                  const Padding(
                    padding: EdgeInsets.only(top: 6),
                    child: Text(
                      'A verificar código...',
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
                    ),
                  )
                else if (_foundWeddingNames != null)
                  Padding(
                    padding: const EdgeInsets.only(top: 6),
                    child: Text(
                      '✓ Vais juntar-te ao casamento de $_foundWeddingNames',
                      style: const TextStyle(
                        color: AppStatusColors.confirmed,
                        fontSize: 12.5,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                const SizedBox(height: 12),
              ],
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
                title: const Text(
                  'Aceito os Termos e a Política de Privacidade',
                ),
                onChanged: (v) => setState(() => _acceptedTerms = v ?? false),
              ),
              if (_termsError != null)
                Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: Text(
                    _termsError!,
                    style: TextStyle(
                      color: Theme.of(context).colorScheme.error,
                    ),
                  ),
                ),
              const SizedBox(height: 8),
              PrimaryButton(
                label: 'Criar conta',
                loading: loading || _checkingCode,
                onPressed: _submit,
              ),
              const SizedBox(height: 20),
              const Row(
                children: [
                  Expanded(child: Divider()),
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 8),
                    child: Text('ou'),
                  ),
                  Expanded(child: Divider()),
                ],
              ),
              const SizedBox(height: 20),
              SocialLoginButton(
                label: 'Continuar com Google',
                icon: Icons.g_mobiledata,
                onPressed: null,
              ),
              const SizedBox(height: 12),
              SocialLoginButton(
                label: 'Continuar com Apple',
                icon: Icons.apple,
                onPressed: null,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
