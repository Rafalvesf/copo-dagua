import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

class PartnerProfileScreen extends ConsumerWidget {
  const PartnerProfileScreen({super.key});

  void _comingSoon(BuildContext context) {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(const SnackBar(content: Text('Em breve.')));
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
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
                  trailing: const AccountSwitcherBadge(),
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
                          color: Colors.white,
                          shape: BoxShape.circle,
                          boxShadow: AppTheme.cardShadowStrong,
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
                        child: SnappyTap.builder(
                          onTap: () => _comingSoon(context),
                          builder: (context, hovered) => Container(
                            width: 38,
                            height: 38,
                            decoration: BoxDecoration(
                              color: Colors.white,
                              shape: BoxShape.circle,
                              border: Border.all(
                                color: AppTheme.background,
                                width: 3,
                              ),
                              boxShadow: hovered
                                  ? AppTheme.cardShadowStrong
                                  : AppTheme.cardShadow,
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
                    profile?.fullName ?? '',
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
          const Positioned.fill(child: DraggableChatBubble()),
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
      child: SnappyTap.builder(
        onTap: onTap,
        builder: (context, hovered) => Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(18),
            boxShadow: hovered
                ? AppTheme.cardShadowStrong
                : AppTheme.cardShadow,
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
