import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/support_chat.dart';

class HomeFeedScreen extends ConsumerWidget {
  const HomeFeedScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;
    final profile = ref.watch(authControllerProvider).profile;
    final firstName = profile?.fullName.split(' ').first ?? '';

    return Scaffold(
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(24, 20, 24, 110),
                    children: [
                      Row(
                        children: [
                          CircleIconButton(
                            icon: Icons.live_help_outlined,
                            onTap: () => openSupportScreen(context),
                          ),
                          const Spacer(),
                          PopupMenuButton<String>(
                            icon: const GradientMark(size: 40, icon: Icons.person_outline),
                            onSelected: (value) {
                              if (value == 'logout') ref.read(authControllerProvider.notifier).logout();
                            },
                            itemBuilder: (context) => const [
                              PopupMenuItem(value: 'logout', child: Text('Sair')),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(height: 36),
                      Text(
                        firstName.isEmpty
                            ? 'Olá, o que precisas hoje?'
                            : 'Olá, $firstName, o que precisas hoje?',
                        style: Theme.of(context).textTheme.headlineMedium?.copyWith(fontSize: 30, height: 1.15),
                      ),
                      const SizedBox(height: 24),
                      _HeroTile(
                        gradient: AppGradients.wedding,
                        icon: Icons.favorite_outline,
                        label: 'O nosso casamento',
                        caption: wedding.displayNames,
                        onTap: () => context.push('/wedding'),
                      ),
                      const SizedBox(height: 14),
                      GridView.count(
                        crossAxisCount: 2,
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        mainAxisSpacing: 14,
                        crossAxisSpacing: 14,
                        childAspectRatio: 1.05,
                        children: [
                          _FeedTile(
                            gradient: AppGradients.guests,
                            icon: Icons.people_outline,
                            label: 'Convidados',
                            onTap: () => context.push('/guests'),
                          ),
                          _FeedTile(
                            gradient: AppGradients.checklist,
                            icon: Icons.checklist_outlined,
                            label: 'Checklist',
                            onTap: () => context.push('/checklist'),
                          ),
                          const _FeedTile(gradient: AppGradients.budget, icon: Icons.savings_outlined, label: 'Orçamento'),
                          const _FeedTile(gradient: AppGradients.seating, icon: Icons.event_seat_outlined, label: 'Lugares'),
                          _FeedTile(
                            gradient: AppGradients.suppliers,
                            icon: Icons.storefront_outlined,
                            label: 'Fornecedores',
                            onTap: () => context.push('/suppliers'),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 24,
                  child: Center(child: FloatingBottomNav(current: AppTab.home)),
                ),
              ],
            ),
    );
  }
}

class _HeroTile extends StatelessWidget {
  final Gradient gradient;
  final IconData icon;
  final String label;
  final String? caption;
  final VoidCallback? onTap;

  const _HeroTile({
    required this.gradient,
    required this.icon,
    required this.label,
    this.caption,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(28),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(gradient: gradient, borderRadius: BorderRadius.circular(28)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.55), shape: BoxShape.circle),
                  child: Icon(icon, color: AppTheme.ink, size: 20),
                ),
                const Spacer(),
                const Icon(Icons.favorite_border, color: AppTheme.ink, size: 20),
              ],
            ),
            const SizedBox(height: 28),
            Text(
              label,
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppTheme.ink),
            ),
            if (caption != null)
              Text(caption!, style: TextStyle(color: AppTheme.ink.withValues(alpha: 0.7), fontSize: 13)),
            const SizedBox(height: 14),
            ArrowCtaButton(label: 'Ver mais', expand: true, onTap: onTap),
          ],
        ),
      ),
    );
  }
}

class _FeedTile extends StatelessWidget {
  final Gradient gradient;
  final IconData icon;
  final String label;
  final VoidCallback? onTap;

  const _FeedTile({required this.gradient, required this.icon, required this.label, this.onTap});

  bool get _enabled => onTap != null;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(24),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          gradient: _enabled ? gradient : AppGradients.muted,
          borderRadius: BorderRadius.circular(24),
        ),
        child: Stack(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Icon(icon, color: AppTheme.ink.withValues(alpha: _enabled ? 1 : 0.5), size: 26),
                const SizedBox(height: 10),
                Text(
                  label,
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.ink.withValues(alpha: _enabled ? 1 : 0.5),
                  ),
                ),
              ],
            ),
            if (!_enabled)
              Positioned(
                top: 0,
                right: 0,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.7),
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: const Text('Em breve', style: TextStyle(fontSize: 10, color: AppTheme.inkMuted)),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
