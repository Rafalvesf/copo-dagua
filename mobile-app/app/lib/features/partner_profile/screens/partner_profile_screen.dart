import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/partner_notification_bell.dart';
import '../../../shared/widgets/snappy_tap.dart';

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
      () => ref.read(partnerProfileControllerProvider.notifier).refreshReviewStatus(),
    );
  }

  void _comingSoon(BuildContext context) {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(const SnackBar(content: Text('Em breve.')));
  }

  @override
  Widget build(BuildContext context) {
    final profile = ref.watch(authControllerProvider).profile;

    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: ListView(
              padding: const EdgeInsets.fromLTRB(0, 8, 0, 140),
              children: [
                PageHeader(
                  title: 'O meu perfil',
                  subtitle: 'Gerir informações do teu negócio.',
                  showBack: false,
                  trailing: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      PartnerNotificationBell(),
                      AccountSwitcherBadge(),
                    ],
                  ),
                ),
                const SizedBox(height: 24),
                Center(
                  child: Stack(
                    clipBehavior: Clip.none,
                    children: [
                      Container(
                        width: 140,
                        height: 140,
                        padding: const EdgeInsets.all(4),
                        decoration: const BoxDecoration(
                          color: AppTheme.surface,
                          shape: BoxShape.circle,
                        ),
                        child: ClipOval(
                          child: Image.network(
                            'https://picsum.photos/seed/${profile?.id}-business/400/400',
                            fit: BoxFit.cover,
                            errorBuilder: (context, error, stackTrace) =>
                                Container(color: AppColors.green),
                          ),
                        ),
                      ),
                      Positioned(
                        bottom: 0,
                        right: 0,
                        child: SnappyTap(
                          onTap: () => _comingSoon(context),
                          child: Container(
                            width: 38,
                            height: 38,
                            decoration: BoxDecoration(
                              color: AppTheme.surface,
                              shape: BoxShape.circle,
                              border: Border.all(
                                color: AppTheme.background,
                                width: 3,
                              ),
                            ),
                            child: const Icon(
                              Icons.camera_alt_outlined,
                              size: 17,
                              color: AppTheme.accentOliveDark,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 16),
                Center(
                  child: Text(
                    (profile?.businessName?.isEmpty ?? true)
                        ? (profile?.fullName ?? '')
                        : profile!.businessName!,
                    style: AppTypography.displaySerif(
                      fontSize: 24,
                      color: AppTheme.ink,
                    ),
                  ),
                ),
                if (profile?.category != null) ...[
                  const SizedBox(height: 2),
                  Center(
                    child: Text(
                      profile!.category!.label,
                      style: const TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: 13.5,
                      ),
                    ),
                  ),
                ],
                if (profile?.partnerProfileStatus != null) ...[
                  const SizedBox(height: 18),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: AppTheme.screenMargin,
                    ),
                    child: _ReviewStatusCard(
                      status: profile!.partnerProfileStatus!,
                      rejectionReason: profile.rejectionReason,
                    ),
                  ),
                ],
                const SizedBox(height: 28),
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: AppTheme.screenMargin,
                  ),
                  child: Column(
                    children: [
                      _ProfileMenuRow(
                        icon: Icons.info_outline,
                        label: 'Informações do negócio',
                        onTap: () => context.push('/partner-business-info'),
                      ),
                      _ProfileMenuRow(
                        icon: Icons.photo_library_outlined,
                        label: 'Portefólio',
                        onTap: () => context.push('/partner-portfolio'),
                      ),
                      _ProfileMenuRow(
                        icon: Icons.sell_outlined,
                        label: 'Serviços e preços',
                        onTap: () => context.push('/partner-pricing'),
                      ),
                      _ProfileMenuRow(
                        icon: Icons.payments_outlined,
                        label: 'Pagamentos',
                        onTap: () => context.push('/partner-payments'),
                      ),
                      // Só parceiros de categoria "venue" ("Espaço /
                      // Quinta") gerem mesas — sem sentido para os
                      // restantes. RLS confirma do lado do servidor
                      // (partner_venue_tables), isto é só para não
                      // mostrar uma opção sem sentido no menu.
                      if (profile?.categoryLabels.contains('Espaço / Quinta') ?? false)
                        _ProfileMenuRow(
                          icon: Icons.event_seat_outlined,
                          label: 'Mesas do local',
                          onTap: () => context.push('/partner-venue-tables'),
                        ),
                      _ProfileMenuRow(
                        icon: Icons.place_outlined,
                        label: 'Localização',
                        onTap: () => _comingSoon(context),
                      ),
                      _ProfileMenuRow(
                        icon: Icons.star_border_rounded,
                        label: 'Avaliações',
                        onTap: () => context.push('/partner-reviews'),
                      ),
                      _ProfileMenuRow(
                        icon: Icons.bar_chart_rounded,
                        label: 'Estatísticas',
                        onTap: () => context.push('/partner-stats'),
                      ),
                      _ProfileMenuRow(
                        icon: Icons.settings_outlined,
                        label: 'Definições da conta',
                        isLast: true,
                        onTap: () => context.push('/settings'),
                      ),
                    ],
                  ),
                ),
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

class _ProfileMenuRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  final bool isLast;

  const _ProfileMenuRow({
    required this.icon,
    required this.label,
    required this.onTap,
    this.isLast = false,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: isLast ? 0 : 10),
      child: SnappyTap(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            color: AppTheme.surface,
            borderRadius: BorderRadius.circular(18),
          ),
          child: Row(
            children: [
              Container(
                width: 36,
                height: 36,
                alignment: Alignment.center,
                decoration: const BoxDecoration(
                  color: AppColors.gray,
                  shape: BoxShape.circle,
                ),
                child: Icon(icon, size: 18, color: AppTheme.ink),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  label,
                  style: const TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 14.5,
                    color: AppTheme.ink,
                  ),
                ),
              ),
              const Icon(
                Icons.chevron_right_rounded,
                color: AppTheme.inkMuted,
              ),
            ],
          ),
        ),
      ),
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
          'Completa os passos em falta abaixo — o perfil é enviado para revisão sozinho assim que estiver tudo pronto.',
          AppTheme.inkMuted,
        ),
      'pending_review' => (
          'Em revisão pela equipa Copo d\'Água',
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
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppColors.gray),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: TextStyle(fontWeight: FontWeight.w700, fontSize: 13.5, color: color),
          ),
          if (subtitle != null) ...[
            const SizedBox(height: 6),
            Text(
              subtitle,
              style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted),
            ),
          ],
          if ((status == 'changes_required' || status == 'rejected') &&
              rejectionReason != null &&
              rejectionReason!.isNotEmpty) ...[
            const SizedBox(height: 6),
            Text(
              rejectionReason!,
              style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted),
            ),
          ],
        ],
      ),
    );
  }
}
