import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/budget/budget_controller.dart';
import '../../../core/budget/effective_budget.dart';
import '../../../core/checklist/checklist_controller.dart';
import '../../../core/guests/guest_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/wedding_widgets.dart';

class HomeFeedScreen extends ConsumerWidget {
  const HomeFeedScreen({super.key});

  void _searchComingSoon(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Pesquisa global em breve.')),
    );
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;
    final checklistState = ref.watch(checklistControllerProvider);
    final guestsState = ref.watch(guestsControllerProvider);
    final budgetState = ref.watch(budgetControllerProvider);
    final budget = budgetState.budget == null
        ? null
        : computeEffectiveBudget(budgetState.budget!, checklistState.items);

    return GradientScaffold(
      background: AppBackground.feed,
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 0,
                    bottomFadeHeight: 140,
                    child: ListView(
                      padding: const EdgeInsets.fromLTRB(
                        AppTheme.screenMargin,
                        16,
                        AppTheme.screenMargin,
                        140,
                      ),
                      children: [
                        WeddingCoverHeader(
                          wedding: wedding,
                          onSearchTap: () => _searchComingSoon(context),
                          onEditTap: () => context.push('/wedding'),
                        ),
                        const SizedBox(height: 22),
                        UrgentTasksSection(
                          items: checklistState.items,
                          onOpenChecklist: () => context.push('/checklist'),
                        ),
                        const SizedBox(height: 22),
                        Row(
                          children: [
                            Expanded(
                              child: BudgetStatCard(
                                budget: budget,
                                onTap: () => context.push('/budget'),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: GuestsStatCard(
                                confirmed: guestsState.confirmedCount,
                                total: guestsState.guests.length,
                                onTap: () => context.push('/guests'),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 24),
                        Text(
                          'Módulos',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 12),
                        GridView.count(
                          crossAxisCount: 2,
                          shrinkWrap: true,
                          physics: const NeverScrollableScrollPhysics(),
                          mainAxisSpacing: 14,
                          crossAxisSpacing: 14,
                          childAspectRatio: 1.4,
                          children: [
                            _ModuleTile(
                              color: AppColors.green,
                              icon: Icons.checklist_outlined,
                              label: 'Checklist',
                              onTap: () => context.push('/checklist'),
                            ),
                            _ModuleTile(
                              color: AppColors.blue,
                              icon: Icons.event_seat_outlined,
                              label: 'Lugares',
                              onTap: () => context.push('/seating'),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingBottomNav(current: AppTab.home),
                ),
              ],
            ),
    );
  }
}

class _ModuleTile extends StatelessWidget {
  final Color color;
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const _ModuleTile({
    required this.color,
    required this.icon,
    required this.label,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(20),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Row(
          children: [
            Container(
              width: 34,
              height: 34,
              decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
              child: Icon(icon, size: 16, color: AppTheme.ink),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Text(
                label,
                style: AppTypography.moduleTitle.copyWith(color: AppTheme.ink, fontSize: 14),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
