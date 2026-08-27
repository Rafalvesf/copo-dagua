import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_nav_icon.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Concordância de género do artigo consoante o boneco escolhido —
/// "capivaras" é feminino, os restantes são masculinos.
String _articleFor(WeddingNavIcon icon) =>
    icon == WeddingNavIcon.capybaras ? 'As nossas' : 'Os nossos';

/// Hub do boneco/mascote escolhido para a navbar — versão de página
/// inteira do mesmo conceito ilustrado em [WeddingNavIcon]. Reúne os
/// atalhos mais afetivos da app (agenda, ideias guardadas, conversa,
/// surpresas) à volta da ilustração do casal.
class MascotHubScreen extends ConsumerWidget {
  const MascotHubScreen({super.key});

  void _comingSoon(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Surpresas em breve.')),
    );
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final icon = ref.watch(weddingNavIconProvider);

    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: ListView(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                20,
                AppTheme.screenMargin,
                140,
              ),
              children: [
                const Align(
                  alignment: Alignment.centerLeft,
                  child: CircleBackButton(),
                ),
                const SizedBox(height: 20),
                AspectRatio(
                  aspectRatio: 1.4,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(28),
                    child: Container(
                      color: AppColors.blue,
                      child: Transform.scale(
                        scale: icon.zoom,
                        child: Image.asset(icon.assetPath, fit: BoxFit.cover),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 22),
                Text(
                  '${_articleFor(icon)} ${icon.label.toLowerCase()}',
                  style: Theme.of(context).textTheme.headlineSmall,
                ),
                const SizedBox(height: 4),
                Text(
                  'Juntos em todas as fases.',
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
                const SizedBox(height: 22),
                GridView.count(
                  crossAxisCount: 2,
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  mainAxisSpacing: 14,
                  crossAxisSpacing: 14,
                  childAspectRatio: 0.95,
                  children: [
                    _ActionTile(
                      color: AppColors.blue,
                      icon: Icons.favorite_border,
                      title: 'Ver agenda do casamento',
                      subtitle: 'Todas as tarefas e prazos.',
                      onTap: () => context.push('/wedding'),
                    ),
                    _ActionTile(
                      color: AppColors.purple.withValues(alpha: 0.25),
                      icon: Icons.checklist_rounded,
                      title: 'Guardar ideias',
                      subtitle: 'Inspirações, links e notas.',
                      onTap: () => context.push('/checklist'),
                    ),
                    _ActionTile(
                      color: AppColors.gray,
                      icon: Icons.forum_outlined,
                      title: 'Conversar',
                      subtitle: 'Falar connosco é sempre fácil.',
                      onTap: () => context.go('/chat'),
                    ),
                    _ActionTile(
                      color: AppColors.yellow,
                      icon: Icons.auto_awesome_outlined,
                      title: 'Surpresas',
                      subtitle: 'Pequenos mimos para vocês.',
                      onTap: () => _comingSoon(context),
                    ),
                    _ActionTile(
                      color: AppColors.green,
                      icon: Icons.savings_outlined,
                      title: 'Orçamento',
                      subtitle: 'Quanto já gastaram e quanto falta.',
                      onTap: () => context.push('/budget'),
                    ),
                    _ActionTile(
                      color: AppColors.pink,
                      icon: Icons.groups_outlined,
                      title: 'Convidados',
                      subtitle: 'Lista, RSVPs e confirmações.',
                      onTap: () => context.push('/guests'),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: FloatingBottomNav(current: AppTab.mascot),
          ),
        ],
      ),
    );
  }
}

class _ActionTile extends StatelessWidget {
  final Color color;
  final IconData icon;
  final String title;
  final String subtitle;
  final VoidCallback onTap;

  const _ActionTile({
    required this.color,
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(24),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(color: color, shape: BoxShape.circle),
              child: Icon(icon, size: 18, color: AppTheme.ink),
            ),
            const Spacer(),
            Text(title, style: AppTypography.moduleTitle.copyWith(color: AppTheme.ink)),
            const SizedBox(height: 3),
            Text(
              subtitle,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
            ),
          ],
        ),
      ),
    );
  }
}
