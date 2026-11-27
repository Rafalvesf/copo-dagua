import 'dart:async';

import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/flow_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';
import 'start_flow_screen.dart' show AdultTermsBox;

final _emailRegex = RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$');
final _passwordRegex = RegExp(r'^(?=.*[A-Za-z])(?=.*\d).{8,}$');

/// Boas-vindas 6 «Entra com o teu email» (prancheta «Fluxo novo»,
/// 2026-11-27): só email, palavra-passe e os 18 anos. O nome e o @ pedem-se
/// em «O teu perfil» (organizador) ou no perfil do negócio (parceiro).
///
/// - Organizador (`role=couple`, ou `guest` sem código): a conta fica em
///   memória ([AuthController.startSignup]) e é criada em «O teu perfil».
/// - Parceiro: a conta é criada logo ([AuthController.registerPartner]) e o
///   router segue para `/partner-setup`.
/// - Convidado com código (`?code=`, links de convite): pede também o nome e
///   cria a conta já ligada ao evento ([AuthController.register]).
class RegisterScreen extends ConsumerStatefulWidget {
  final UserRole role;

  /// Código do evento vindo do link de convite (`?code=`).
  final String? initialEventCode;

  const RegisterScreen({super.key, required this.role, this.initialEventCode});

  @override
  ConsumerState<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends ConsumerState<RegisterScreen> {
  final _name = TextEditingController();
  final _email = TextEditingController();
  final _password = TextEditingController();
  bool _show = false;
  bool _accepted = false;
  bool _termsError = false;
  bool _checkingCode = false;
  String? _nameError;
  String? _emailError;
  String? _passwordError;
  String? _codeError;
  String? _foundEvent;

  String? get _code {
    final c = widget.initialEventCode?.trim() ?? '';
    return widget.role == UserRole.guest && c.isNotEmpty ? c : null;
  }

  @override
  void initState() {
    super.initState();
    Funnel.track('signup_start', ref: widget.role.name);
    for (final c in [_name, _email, _password]) {
      c.addListener(() => setState(() {}));
    }
    if (_code != null) _lookupCode();
  }

  @override
  void dispose() {
    _name.dispose();
    _email.dispose();
    _password.dispose();
    super.dispose();
  }

  /// Mostra a que evento se vai juntar (só informativo).
  Future<void> _lookupCode() async {
    try {
      final rows = await supabase.rpc('lookup_wedding_by_guest_code', params: {'p_code': _code}) as List;
      if (!mounted || rows.isEmpty) return;
      final row = rows.first as Map<String, dynamic>;
      final n1 = row['partner_name_1'] as String?;
      final n2 = row['partner_name_2'] as String?;
      setState(() => _foundEvent = n2 != null && n2.isNotEmpty ? '$n1 & $n2' : n1);
    } catch (_) {}
  }

  bool _validate() {
    setState(() {
      _nameError = _code != null && _name.text.trim().isEmpty ? 'Escreve o teu nome.' : null;
      _emailError = _emailRegex.hasMatch(_email.text.trim()) ? null : 'Escreve um email válido.';
      _passwordError =
          _passwordRegex.hasMatch(_password.text) ? null : 'Pelo menos 8 caracteres, com letras e números.';
      _termsError = !_accepted;
    });
    return _nameError == null && _emailError == null && _passwordError == null && !_termsError;
  }

  Future<void> _submit() async {
    if (!_validate()) return;
    final auth = ref.read(authControllerProvider.notifier);
    final email = _email.text.trim();
    if (widget.role == UserRole.partner) {
      // O nome do negócio pede-se a seguir, no perfil do negócio.
      await auth.registerPartner(fullName: email.split('@').first, email: email, password: _password.text);
      return;
    }
    final code = _code;
    if (code == null) {
      auth.startSignup(fullName: '', email: email, password: _password.text, role: UserRole.couple);
      return;
    }
    // Convidado com código: confirma-o antes de criar a conta.
    setState(() => _checkingCode = true);
    List rows = const [];
    try {
      rows = await supabase.rpc('lookup_wedding_by_guest_code', params: {'p_code': code}) as List;
    } catch (_) {}
    if (!mounted) return;
    setState(() => _checkingCode = false);
    if (rows.isEmpty) {
      setState(() => _codeError = 'O código do convite já não é válido. Confirma com quem organiza.');
      return;
    }
    await auth.register(
      fullName: _name.text.trim(),
      email: email,
      password: _password.text,
      role: UserRole.guest,
      eventCode: code,
    );
  }

  @override
  Widget build(BuildContext context) {
    final auth = ref.watch(authControllerProvider);
    final loading = auth.status == AuthStatus.authenticating || _checkingCode;
    ref.listen(authControllerProvider, (prev, next) {
      if (next.status == AuthStatus.emailUnverified) context.go('/verify-email');
    });
    final pwOk = _passwordRegex.hasMatch(_password.text);

    return FlowPage(
      tint: FlowTint.green,
      dashOn: 1,
      trailingLabel: 'Voltar',
      onTrailing: () => context.canPop() ? context.pop() : context.go('/comecar'),
      centerContent: true,
      content: const FlowStarHalo(Estrela.feliz, size: 120),
      title: 'Entra com\no teu email',
      cta: AutofillGroup(
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          if (auth.status == AuthStatus.error && auth.errorMessage != null) ...[
            ErrorBanner(message: auth.errorMessage!),
            const SizedBox(height: 12),
          ],
          if (_code != null) ...[
            if (_foundEvent != null) ...[
              FlowNote('Vais juntar-te a «$_foundEvent».', align: TextAlign.left),
              const SizedBox(height: 8),
            ],
            if (_codeError != null) ...[
              FlowNote(_codeError!, align: TextAlign.left),
              const SizedBox(height: 8),
            ],
            FlowField(
              controller: _name,
              hint: 'O teu nome',
              error: _nameError,
              autofillHints: const [AutofillHints.name],
            ),
            const SizedBox(height: 8),
          ],
          FlowField(
            controller: _email,
            hint: 'O teu email',
            error: _emailError,
            keyboardType: TextInputType.emailAddress,
            autofillHints: const [AutofillHints.email],
            onChanged: (_) {
              if (_emailError != null) setState(() => _emailError = null);
            },
          ),
          const SizedBox(height: 8),
          FlowField(
            controller: _password,
            hint: 'Palavra-passe',
            obscure: !_show,
            error: _passwordError != null && !pwOk ? _passwordError : null,
            okText: pwOk ? '8 caracteres, letras e números' : null,
            autofillHints: const [AutofillHints.newPassword],
            trailing: SnappyTap(
              onTap: () => setState(() => _show = !_show),
              child: Padding(
                padding: const EdgeInsets.only(left: 8),
                child: Text(_show ? 'Esconder' : 'Mostrar',
                    style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF57534E))),
              ),
            ),
          ),
          if (!pwOk && _passwordError == null) ...[
            const SizedBox(height: 8),
            const Padding(
              padding: EdgeInsets.only(left: 8),
              child: FlowNote('8 caracteres, letras e números', align: TextAlign.left),
            ),
          ],
          const SizedBox(height: 16),
          AdultTermsBox(
            value: _accepted,
            error: _termsError && !_accepted,
            onChanged: (v) => setState(() {
              _accepted = v;
              if (v) _termsError = false;
            }),
          ),
          const SizedBox(height: 22),
          FlowCta(label: 'Criar conta', loading: loading, onPressed: _submit),
        ]),
      ),
      footer: FlowFooterLink(prefix: 'Já tens conta?', action: 'Entrar', onTap: () => context.push('/login')),
    );
  }
}
