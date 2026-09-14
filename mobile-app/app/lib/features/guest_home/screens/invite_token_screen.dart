import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/auth/auth_controller.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// `/i/:token` — link de convite individual (`guests.rsvp_token`
/// reaproveitado como token de conta, ver
/// `071_guest_join_mode_and_invite_token.sql`). Pedido explícito do
/// utilizador: "Link individual /wedding/invite/{token} — Ao abrir:
/// token → guest record → ligar current_user.id". Rota pública (isenta
/// do redirect de autenticação, mesmo raciocínio de `/invite/` e
/// `/rsvp/`) porque o convidado pode abrir isto sem sessão nenhuma.
class InviteTokenScreen extends ConsumerStatefulWidget {
  final String token;

  const InviteTokenScreen({super.key, required this.token});

  @override
  ConsumerState<InviteTokenScreen> createState() => _InviteTokenScreenState();
}

class _InviteTokenScreenState extends ConsumerState<InviteTokenScreen> {
  String? _error;
  bool _joining = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _handle());
  }

  Future<void> _handle() async {
    final auth = ref.read(authControllerProvider);
    if (auth.status != AuthStatus.active) {
      // Sem sessão ainda — guarda o token e deixa `GuestHomeScreen`
      // completar a associação assim que o login/registo terminar.
      ref.read(pendingInviteTokenProvider.notifier).set(widget.token);
      return;
    }

    setState(() => _joining = true);
    try {
      final result = await joinWeddingByInviteToken(widget.token);
      ref.invalidate(guestWeddingsProvider);
      ref.invalidate(myGuestRowProvider(result.weddingId));
      if (!mounted) return;
      context.go('/guest-home/${result.weddingId}');
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _joining = false;
        _error = e is PostgrestException && e.code == 'P0002'
            ? 'Este link de convite não é válido.'
            : e is PostgrestException && e.code == 'P0007'
            ? 'Este convite já está associado a outra conta.'
            : 'Não foi possível associar o convite. Tenta novamente.';
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
                ? _joining
                      ? const CircularProgressIndicator()
                      : _error == null
                      ? const CircularProgressIndicator()
                      : Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Text(_error!, textAlign: TextAlign.center),
                            const SizedBox(height: 20),
                            PrimaryButton(label: 'Voltar', onPressed: () => context.go('/guest-home')),
                          ],
                        )
                : Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Text(
                        'Este é um convite individual do casamento.',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18, color: AppTheme.ink),
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        'Inicia sessão ou cria conta para o associares.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: AppTheme.inkMuted),
                      ),
                      const SizedBox(height: 24),
                      PrimaryButton(
                        label: 'Criar conta',
                        onPressed: () {
                          ref.read(pendingInviteTokenProvider.notifier).set(widget.token);
                          context.push('/register?role=guest');
                        },
                      ),
                      const SizedBox(height: 12),
                      OutlinedButton(
                        onPressed: () {
                          ref.read(pendingInviteTokenProvider.notifier).set(widget.token);
                          context.push('/login');
                        },
                        child: const Text('Já tenho conta'),
                      ),
                    ],
                  ),
          ),
        ),
      ),
    );
  }
}
