import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/partner_invite.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// Página do link "Convidar o teu par" (`/juntar/<token>`, 079).
/// Com sessão: junta logo a conta ao casamento. Sem sessão: mostra de
/// quem é o casamento e leva a criar conta/entrar, guardando o convite
/// para ser aplicado a seguir.
class JoinWeddingScreen extends ConsumerStatefulWidget {
  final String token;

  const JoinWeddingScreen({super.key, required this.token});

  @override
  ConsumerState<JoinWeddingScreen> createState() => _JoinWeddingScreenState();
}

class _JoinWeddingScreenState extends ConsumerState<JoinWeddingScreen> {
  late final Future<({String names, bool valid})?> _invite = fetchPartnerInvite(widget.token);
  String? _error;
  bool _joining = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _joinIfSignedIn());
  }

  Future<void> _joinIfSignedIn() async {
    final auth = ref.read(authControllerProvider);
    if (auth.status != AuthStatus.active) {
      ref.read(pendingPartnerInviteProvider.notifier).set(widget.token);
      return;
    }
    if (auth.profile?.role != UserRole.couple) {
      setState(() => _error = 'Este convite é para o par do casal — entra com uma conta de casal.');
      return;
    }
    setState(() => _joining = true);
    try {
      await acceptPartnerInvite(widget.token);
      ref.invalidate(weddingControllerProvider);
      if (!mounted) return;
      context.go('/wedding');
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _joining = false;
        _error = e is PostgrestException && e.code == 'P0002'
            ? 'Este link de convite não é válido.'
            : e is PostgrestException && e.code == 'P0007'
            ? 'Este convite já foi usado.'
            : e is PostgrestException && e.code == 'P0008'
            ? 'Este convite expirou — pede um novo link.'
            : 'Não foi possível aceitar o convite. Tenta novamente.';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final auth = ref.watch(authControllerProvider);
    return GradientScaffold(
      background: AppBackground.hero,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Center(
            child: auth.status == AuthStatus.active
                ? (_error == null
                    ? const CircularProgressIndicator()
                    : Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(_error!, textAlign: TextAlign.center),
                          const SizedBox(height: 20),
                          PrimaryButton(label: 'Voltar', onPressed: () => context.go('/home')),
                        ],
                      ))
                : FutureBuilder(
                    future: _invite,
                    builder: (context, snap) {
                      if (snap.connectionState != ConnectionState.done) {
                        return const CircularProgressIndicator();
                      }
                      final invite = snap.data;
                      if (invite == null || !invite.valid) {
                        return Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Text(
                              invite == null ? 'Este link de convite não é válido.' : 'Este convite já foi usado ou expirou.',
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.lg),
                            ),
                            const SizedBox(height: 20),
                            PrimaryButton(label: 'Ir para o início', onPressed: () => context.go('/welcome')),
                          ],
                        );
                      }
                      return Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(Icons.favorite_rounded, color: AppTheme.accentOliveDark, size: 40),
                          const SizedBox(height: 16),
                          Text(
                            'Organiza o casamento de ${invite.names}',
                            textAlign: TextAlign.center,
                            style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.xl, color: AppTheme.ink),
                          ),
                          const SizedBox(height: 8),
                          const Text(
                            'Cria conta ou entra para ficares com acesso ao casamento.',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: AppTheme.inkMuted),
                          ),
                          const SizedBox(height: 24),
                          PrimaryButton(
                            label: 'Criar conta',
                            onPressed: () {
                              ref.read(pendingPartnerInviteProvider.notifier).set(widget.token);
                              context.push('/register?role=couple');
                            },
                          ),
                          const SizedBox(height: 12),
                          OutlinedButton(
                            onPressed: () {
                              ref.read(pendingPartnerInviteProvider.notifier).set(widget.token);
                              context.push('/login');
                            },
                            child: const Text('Já tenho conta'),
                          ),
                        ],
                      );
                    },
                  ),
          ),
        ),
      ),
    );
  }
}
