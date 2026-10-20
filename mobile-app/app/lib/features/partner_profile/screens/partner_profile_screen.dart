import 'package:flutter/material.dart';
import '../../settings/screens/settings_screen.dart' show PartnerAccountSections;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../../core/partner_app/partner_app_providers.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/partner_notification_bell.dart';
import '../../../shared/widgets/v2_kit.dart';

class PartnerProfileScreen extends ConsumerStatefulWidget {
  const PartnerProfileScreen({super.key});

  @override
  ConsumerState<PartnerProfileScreen> createState() => _PartnerProfileScreenState();
}

class _PartnerProfileScreenState extends ConsumerState<PartnerProfileScreen> {
  @override
  void initState() {
    super.initState();
    // Pedido explícito do utilizador: "o pedido de alterações no
    // dashboard/crm não está a refletir as mensagens na app do
    // cliente" — o `status`/`rejection_reason` só viviam na cache local
    // do `Profile`, preenchida uma vez no login; uma ação do admin
    // (`request_changes_from_partner`, `024_partner_changes_required.sql`)
    // feita depois disso nunca chegava ao ecrã sem sair e voltar a
    // entrar. Relê o estado real sempre que este ecrã é aberto, mesmo
    // padrão de `refreshReviewStatus()` já usado depois de cada escrita
    // do próprio parceiro (`partner_profile_controller.dart`).
    Future.microtask(
      () => ref.read(partnerProfileControllerProvider.notifier).refreshReviewStatus().catchError((_) {}),
    );
  }

  @override
  Widget build(BuildContext context) {
    final profile = ref.watch(authControllerProvider).profile;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: ListView(
              padding: const EdgeInsets.fromLTRB(28, 20, 28, 140),
              children: [
                // Redesign 2026-10, igual ao canvas "Parceiro — perfil".
                // Canvas "Parceiro — perfil (redesign)": título ao centro.
                const SizedBox(
                  height: 46,
                  child: Row(
                    children: [
                      SizedBox(width: 44),
                      Expanded(
                        child: Text(
                          'Perfil',
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink),
                        ),
                      ),
                      PartnerNotificationBell(),
                    ],
                  ),
                ),
                const SizedBox(height: 18),
                _BusinessHeader(profile: profile),
                if (profile?.partnerProfileStatus != null &&
                    profile!.partnerProfileStatus != 'published') ...[
                  // Pagamentos obrigatórios para a verificação (2026-10-20).
                  const _PaymentsRequiredCard(),
                  const SizedBox(height: 16),
                  _ReviewStatusCard(
                    status: profile.partnerProfileStatus!,
                    rejectionReason: profile.rejectionReason,
                  ),
                ],
                const SizedBox(height: 6),
                // Definições da conta dentro do Perfil (2026-10-17). Preços,
                // portefólio, avaliações, resultados, pagamentos, contratos
                // e reservas estão no Painel.
                const PartnerAccountSections(),
              ],
            ),
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: PartnerBottomNav(current: PartnerTab.profile),
          ),
        ],
      ),
    );
  }
}

class _BusinessHeader extends StatelessWidget {
  final Profile? profile;

  const _BusinessHeader({required this.profile});

  @override
  Widget build(BuildContext context) {
    final p = profile;
    final name = (p?.businessName?.isEmpty ?? true)
        ? (p?.fullName ?? '')
        : p!.businessName!;
    final meta = [
      if (p?.category != null) p!.category!.label,
      if (p?.location != null && p!.location!.isNotEmpty) p.location!,
    ].join(' · ');
    final published = p?.partnerProfileStatus == 'published';
    return Column(
      children: [
        V2Avatar(name, size: 84, imageUrl: p?.avatarUrl),
        const SizedBox(height: 10),
        Text(
          name,
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink),
        ),
        if (meta.isNotEmpty) ...[
          const SizedBox(height: 4),
          Text(meta, textAlign: TextAlign.center, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ],
        if (published) ...[
          const SizedBox(height: 8),
          const V2Chip('Publicado — visível aos casais'),
        ],
      ],
    );
  }
}

/// Estado de revisão de `partner_profiles.status` — sem nenhum botão de
/// submissão manual (pedido explícito do utilizador: "Não quero um
/// botão separado de 'Enviar para revisão'"). Em `draft`/
/// `changes_required`, a transição para `pending_review` acontece
/// sozinha assim que os requisitos ficam completos
/// (`maybe_auto_submit_partner_profile()`,
/// `026_partner_auto_submission.sql`) — este cartão só informa, nunca
/// aciona nada.
class _ReviewStatusCard extends StatelessWidget {
  final String status;
  final String? rejectionReason;

  const _ReviewStatusCard({required this.status, required this.rejectionReason});

  @override
  Widget build(BuildContext context) {
    final (label, subtitle, color) = switch (status) {
      'draft' => (
          'Rascunho',
          'Completa os passos em falta (incluindo ativar os pagamentos) — o perfil é enviado para revisão sozinho assim que estiver tudo pronto.',
          AppTheme.inkMuted,
        ),
      'pending_review' => (
          'Em revisão pela equipa À Nossa!',
          'Recebemos todas as informações necessárias. Avisamos assim que houver novidades.',
          AppTheme.accentOliveDark,
        ),
      'changes_required' => (
          'Alterações pedidas',
          null,
          Colors.orange,
        ),
      'published' => ('Publicado — visível aos casais', null, AppTheme.accentOliveDark),
      'rejected' => ('Candidatura recusada', null, Colors.red),
      'suspended' => ('Suspenso', null, Colors.red),
      _ => (status, null, AppTheme.inkMuted),
    };

    return Container(
      padding: const EdgeInsets.all(14),
      decoration: softCard(radius: 18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.md, color: color),
          ),
          if (subtitle != null) ...[
            const SizedBox(height: 6),
            Text(
              subtitle,
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
            ),
          ],
          if ((status == 'changes_required' || status == 'rejected') &&
              rejectionReason != null &&
              rejectionReason!.isNotEmpty) ...[
            const SizedBox(height: 6),
            Text(
              rejectionReason!,
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
            ),
          ],
        ],
      ),
    );
  }
}

/// Aviso enquanto o perfil não está publicado e os pagamentos ainda não
/// estão ativos: é obrigatório ativá-los para o perfil ser verificado e
/// aparecer na página dos parceiros (pedido do utilizador, 2026-10-20;
/// regra no servidor: `104_payments_required_for_verification.sql`).
class _PaymentsRequiredCard extends ConsumerWidget {
  const _PaymentsRequiredCard();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final enabled = ref.watch(partnerStripeStatusProvider).maybeWhen(data: (s) => s.chargesEnabled, orElse: () => true);
    if (enabled) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(top: 16),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: softCard(radius: 18),
        child: Row(children: [
          const Icon(Icons.credit_card_rounded, color: AppTheme.brandGreen),
          const SizedBox(width: 12),
          const Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Ativa os pagamentos', style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.md, color: AppTheme.ink)),
              SizedBox(height: 2),
              Text('Obrigatório para o teu perfil ser verificado e aparecer aos organizadores.',
                  style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 8),
          FilledButton(
            onPressed: () => context.push('/partner-payments'),
            style: FilledButton.styleFrom(backgroundColor: AppTheme.brandGreen, shape: const StadiumBorder()),
            child: const Text('Ativar'),
          ),
        ]),
      ),
    );
  }
}
