import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
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
              padding: const EdgeInsets.fromLTRB(28, 20, 28, 140),
              children: [
                // Redesign 2026-10, igual ao canvas "Parceiro — perfil".
                const SizedBox(
                  height: 46,
                  child: Row(
                    children: [
                      Expanded(
                        child: Text(
                          'Perfil',
                          style: TextStyle(
                            fontSize: AppFontSize.display,
                            height: 40 / 34,
                            fontWeight: FontWeight.w700,
                            color: AppTheme.ink,
                          ),
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
                  const SizedBox(height: 16),
                  _ReviewStatusCard(
                    status: profile.partnerProfileStatus!,
                    rejectionReason: profile.rejectionReason,
                  ),
                ],
                const SizedBox(height: 10),
                _MenuGroup(
                  rows: [
                    _ProfileMenuRow(
                      icon: Icons.info_outline,
                      label: 'Informações do negócio',
                      onTap: () => context.push('/partner-business-info'),
                    ),
                    _ProfileMenuRow(
                      icon: Icons.sell_outlined,
                      label: 'Serviços e preços',
                      onTap: () => context.push('/partner-pricing'),
                    ),
                    _ProfileMenuRow(
                      icon: Icons.photo_library_outlined,
                      label: 'Portefólio',
                      onTap: () => context.push('/partner-portfolio'),
                    ),
                    // Só parceiros de categoria "venue" ("Espaço /
                    // Quinta") gerem mesas — sem sentido para os
                    // restantes. RLS confirma do lado do servidor.
                    if (profile?.categoryLabels.contains('Espaço / Quinta') ?? false)
                      _ProfileMenuRow(
                        icon: Icons.event_seat_outlined,
                        label: 'Mesas do local',
                        onTap: () => context.push('/partner-venue-tables'),
                      ),
                  ],
                ),
                _MenuGroup(
                  rows: [
                    _ProfileMenuRow(
                      icon: Icons.star_border_rounded,
                      label: 'Avaliações',
                      onTap: () => context.push('/partner-reviews'),
                    ),
                    _ProfileMenuRow(
                      icon: Icons.bar_chart_rounded,
                      label: 'Resultados',
                      onTap: () => context.push('/partner-stats'),
                    ),
                    _ProfileMenuRow(
                      icon: Icons.payments_outlined,
                      label: 'Pagamentos',
                      onTap: () => context.push('/partner-payments'),
                    ),
                  ],
                ),
                _MenuGroup(
                  rows: [
                    _ProfileMenuRow(
                      icon: Icons.settings_outlined,
                      label: 'Definições da conta',
                      onTap: () => context.push('/settings'),
                    ),
                  ],
                ),
                const SizedBox(height: 18),
                Align(
                  alignment: Alignment.centerLeft,
                  child: TextButton(
                    onPressed: () =>
                        ref.read(authControllerProvider.notifier).logout(),
                    style: TextButton.styleFrom(
                      foregroundColor: AppStatusColors.declined,
                      padding: EdgeInsets.zero,
                      textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, 
                        fontSize: AppFontSize.base + 1,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                    child: const Text('Terminar sessão'),
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

class _BusinessHeader extends StatelessWidget {
  final Profile? profile;

  const _BusinessHeader({required this.profile});

  @override
  Widget build(BuildContext context) {
    final p = profile;
    final name = (p?.businessName?.isEmpty ?? true)
        ? (p?.fullName ?? '')
        : p!.businessName!;
    final parts = name.split(RegExp(r'\s+')).where((w) => w.isNotEmpty).toList();
    final initials = parts.isEmpty
        ? '?'
        : (parts.first[0] + (parts.length > 1 ? parts[1][0] : '')).toUpperCase();
    final meta = [
      if (p?.category != null) p!.category!.label,
      if (p?.location != null && p!.location!.isNotEmpty) p.location!,
    ].join(' · ');
    final published = p?.partnerProfileStatus == 'published';
    return Row(
      children: [
        Container(
          width: 88,
          height: 88,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: AppColors.green,
            borderRadius: BorderRadius.circular(AppRadius.xl),
          ),
          child: Text(
            initials,
            style: const TextStyle(
              fontSize: AppFontSize.h1,
              fontWeight: FontWeight.w700,
              color: AppTheme.accentOliveDark,
            ),
          ),
        ),
        const SizedBox(width: 16),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                name,
                style: const TextStyle(
                  fontSize: AppFontSize.h2,
                  height: 30 / 24,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
              ),
              if (meta.isNotEmpty) ...[
                const SizedBox(height: 4),
                Text(
                  meta,
                  style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
                ),
              ],
              if (published) ...[
                const SizedBox(height: 8),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: const Color(0xFFE4EFE5),
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                  ),
                  child: const Text(
                    'Publicado — visível aos casais',
                    style: TextStyle(
                      fontSize: AppFontSize.xs,
                      fontWeight: FontWeight.w700,
                      color: Color(0xFF2F6B45),
                    ),
                  ),
                ),
              ],
            ],
          ),
        ),
      ],
    );
  }
}

class _MenuGroup extends StatelessWidget {
  final List<Widget> rows;

  const _MenuGroup({required this.rows});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 12),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Column(
        children: [
          for (var i = 0; i < rows.length; i++) ...[
            if (i > 0)
              const Divider(height: 1, indent: 14, endIndent: 14, color: AppTheme.borderMuted),
            rows[i],
          ],
        ],
      ),
    );
  }
}

class _ProfileMenuRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const _ProfileMenuRow({
    required this.icon,
    required this.label,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        color: Colors.transparent,
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
        child: Row(
          children: [
            Container(
              width: 34,
              height: 34,
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(AppRadius.sm),
              ),
              child: Icon(icon, size: 18, color: AppTheme.ink),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Text(
                label,
                style: const TextStyle(
                  fontWeight: FontWeight.w700,
                  fontSize: AppFontSize.md,
                  color: AppTheme.ink,
                ),
              ),
            ),
            const Icon(Icons.chevron_right_rounded, size: 20, color: AppTheme.inkMuted),
          ],
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
          'Em revisão pela equipa Tchin Tchin',
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
        borderRadius: BorderRadius.circular(AppRadius.md),
        border: Border.all(color: AppColors.gray),
      ),
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
