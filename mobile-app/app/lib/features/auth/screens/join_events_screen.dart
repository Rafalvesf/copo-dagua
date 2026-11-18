import 'package:flutter/material.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/public_state.dart';
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
class JoinEventsScreen extends ConsumerStatefulWidget {
  final String token;

  const JoinEventsScreen({super.key, required this.token});

  @override
  ConsumerState<JoinEventsScreen> createState() => _JoinEventsScreenState();
}

class _JoinEventsScreenState extends ConsumerState<JoinEventsScreen> {
  late final Future<({String names, String? inviterName, bool valid})?> _invite = fetchPartnerInvite(widget.token);
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
    // Qualquer conta pode organizar (já não há "contas de casal"; os eventos
    // são de todo o tipo). Um parceiro é que não co-organiza eventos de
    // clientes — esse continua no seu lado da app.
    if (auth.profile?.role == UserRole.partner) {
      setState(() => _error = 'Entra com a tua conta pessoal para organizar — a conta de parceiro é para o teu negócio.');
      return;
    }
    setState(() => _joining = true);
    try {
      await acceptPartnerInvite(widget.token);
      ref.invalidate(weddingControllerProvider);
      if (!mounted) return;
      context.go('/evento');
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
      background: AppBackground.subtle,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Center(
            child: auth.status == AuthStatus.active
                ? (_error == null
                    ? const CircularProgressIndicator()
                    : PublicStateView(
                        pose: MascotPose.sad,
                        title: 'Não deu para entrar',
                        message: _error,
                        actions: [PrimaryButton(label: 'Voltar', onPressed: () => context.go('/home'))],
                      ))
                : FutureBuilder(
                    future: _invite,
                    builder: (context, snap) {
                      if (snap.connectionState != ConnectionState.done) {
                        return const CircularProgressIndicator();
                      }
                      final invite = snap.data;
                      if (invite == null || !invite.valid) {
                        // Inválido e já usado passam a ter a mesma mensagem
                        // (mockup «Link inválido ou já usado», 2026-11-17).
                        return PublicStateView(
                          pose: MascotPose.sad,
                          title: 'Este convite já não é válido',
                          message:
                              'Pode já ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.',
                          actions: [PrimaryButton(label: 'Ir para o início', onPressed: () => context.go('/welcome'))],
                        );
                      }
                      return PublicStateView(
                        pose: MascotPose.cheer,
                        eyebrow: 'CONVITE PARA ORGANIZAR',
                        title: invite.names,
                        message: invite.inviterName != null
                            ? '${invite.inviterName} convidou-te para organizarem o evento juntos.'
                            : 'Convidam-te para organizar o evento com eles.',
                        extra: Container(
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(22),
                            boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
                          ),
                          padding: const EdgeInsets.all(18),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text('O QUE ISTO SIGNIFICA',
                                  style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
                              const SizedBox(height: 8),
                              Text(
                                  'Ficas com acesso ao evento para ajudarem a organizar, lado a lado. ${invite.inviterName ?? 'Quem te convidou'} escolhe o que podes fazer.',
                                  style: const TextStyle(fontSize: 17, height: 1.5, color: AppTheme.ink)),
                            ],
                          ),
                        ),
                        actions: [
                          PrimaryButton(
                            label: 'Criar conta',
                            onPressed: () {
                              ref.read(pendingPartnerInviteProvider.notifier).set(widget.token);
                              context.push('/register?role=couple');
                            },
                          ),
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
