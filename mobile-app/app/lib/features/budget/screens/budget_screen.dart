import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/budget/budget_controller.dart';
import '../../../core/budget/effective_budget.dart';
import '../../../core/checklist/checklist_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/support_chat.dart';

const _categoryColors = [
  AppColors.blue,
  AppColors.green,
  AppColors.yellow,
  AppColors.purple,
  AppColors.pink,
  AppColors.gray,
];

enum _BudgetTab { byCategory, byPayments }

class BudgetScreen extends ConsumerStatefulWidget {
  const BudgetScreen({super.key});

  @override
  ConsumerState<BudgetScreen> createState() => _BudgetScreenState();
}

class _BudgetScreenState extends ConsumerState<BudgetScreen> {
  _BudgetTab _tab = _BudgetTab.byCategory;

  Future<void> _editTotal(Budget budget) async {
    final controller = TextEditingController(
      text: budget.total.toStringAsFixed(0),
    );
    final result = await showModalBottomSheet<double>(
      context: context,
      isScrollControlled: true,
      builder: (sheetContext) => Padding(
        padding: EdgeInsets.only(
          left: 20,
          right: 20,
          top: 20,
          bottom: MediaQuery.of(sheetContext).viewInsets.bottom + 20,
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Orçamento total',
              style: Theme.of(sheetContext).textTheme.titleLarge,
            ),
            const SizedBox(height: 16),
            TextField(
              controller: controller,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(suffixText: '€'),
            ),
            const SizedBox(height: 16),
            PrimaryButton(
              label: 'Guardar',
              onPressed: () {
                final value = double.tryParse(controller.text.trim());
                Navigator.of(sheetContext).pop(value);
              },
            ),
          ],
        ),
      ),
    );
    if (result != null) {
      ref.read(budgetControllerProvider.notifier).updateTotal(result);
    }
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(budgetControllerProvider);
    final checklistItems = ref.watch(checklistControllerProvider).items;
    final budget = state.budget == null
        ? null
        : computeEffectiveBudget(state.budget!, checklistItems);

    return Scaffold(
      body: budget == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          20,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: Row(
                          children: [
                            const CircleBackButton(),
                            const Spacer(),
                            TextButton(
                              onPressed: () => _editTotal(state.budget!),
                              child: const Text(
                                'Editar',
                                style: TextStyle(color: AppTheme.ink),
                              ),
                            ),
                          ],
                        ),
                      ),
                      Expanded(
                        child: EdgeFade(
                          topFadeHeight: 32,
                          bottomFadeHeight: 140,
                          child: ListView(
                            padding: const EdgeInsets.fromLTRB(
                              AppTheme.screenMargin,
                              20,
                              AppTheme.screenMargin,
                              140,
                            ),
                            children: [
                              _TotalsCard(budget: budget),
                              const SizedBox(height: 18),
                              _BudgetTabBar(
                                selected: _tab,
                                onChanged: (t) => setState(() => _tab = t),
                              ),
                              const SizedBox(height: 18),
                              if (_tab == _BudgetTab.byCategory)
                                _CategoryBreakdown(budget: budget)
                              else
                                Container(
                                  width: double.infinity,
                                  padding: const EdgeInsets.all(24),
                                  decoration: BoxDecoration(
                                    color: Colors.white,
                                    borderRadius: BorderRadius.circular(20),
                                    boxShadow: AppTheme.cardShadow,
                                  ),
                                  child: Text(
                                    'Registo de pagamentos em breve.',
                                    textAlign: TextAlign.center,
                                    style: TextStyle(color: AppTheme.inkMuted),
                                  ),
                                ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const Positioned(
                  left: AppTheme.screenMargin,
                  right: AppTheme.screenMargin,
                  bottom: 24,
                  child: FloatingBottomNav(current: AppTab.budget),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

class _TotalsCard extends StatelessWidget {
  final EffectiveBudget budget;

  const _TotalsCard({required this.budget});

  @override
  Widget build(BuildContext context) {
    final pct = (budget.progress * 100).round();
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Orçamento total',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
          ),
          const SizedBox(height: 4),
          Text(
            '€${budget.total.toStringAsFixed(0)}',
            style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 24),
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Gasto',
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: 12),
                    ),
                    Text(
                      '€${budget.spent.toStringAsFixed(0)}',
                      style: const TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: 15,
                      ),
                    ),
                  ],
                ),
              ),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Restante',
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: 12),
                    ),
                    Text(
                      '€${budget.remaining.toStringAsFixed(0)}',
                      style: const TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: 15,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          ClipRRect(
            borderRadius: BorderRadius.circular(999),
            child: LinearProgressIndicator(
              value: budget.progress,
              minHeight: 8,
              backgroundColor: AppColors.purple.withValues(alpha: 0.15),
              valueColor: const AlwaysStoppedAnimation(AppTheme.ink),
            ),
          ),
          const SizedBox(height: 6),
          Text(
            '$pct% do orçamento usado',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
          ),
        ],
      ),
    );
  }
}

class _BudgetTabBar extends StatelessWidget {
  final _BudgetTab selected;
  final ValueChanged<_BudgetTab> onChanged;

  const _BudgetTabBar({required this.selected, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    Widget tab(_BudgetTab value, String label) {
      final isSelected = selected == value;
      return Expanded(
        child: GestureDetector(
          onTap: () => onChanged(value),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                label,
                style: TextStyle(
                  fontWeight: FontWeight.w700,
                  fontSize: 14,
                  color: isSelected ? AppTheme.ink : AppTheme.inkMuted,
                ),
              ),
              const SizedBox(height: 8),
              Container(
                height: 3,
                decoration: BoxDecoration(
                  color: isSelected ? AppTheme.ink : Colors.transparent,
                  borderRadius: BorderRadius.circular(999),
                ),
              ),
            ],
          ),
        ),
      );
    }

    return Row(
      children: [
        tab(_BudgetTab.byCategory, 'Por categoria'),
        tab(_BudgetTab.byPayments, 'Por pagamentos'),
      ],
    );
  }
}

class _CategoryBreakdown extends StatelessWidget {
  final EffectiveBudget budget;

  const _CategoryBreakdown({required this.budget});

  @override
  Widget build(BuildContext context) {
    final categories = budget.categories;
    return Column(
      children: [
        SizedBox(
          height: 180,
          child: Stack(
            alignment: Alignment.center,
            children: [
              CustomPaint(
                size: const Size(180, 180),
                painter: _DonutPainter(
                  values: [for (final c in categories) c.amount],
                  colors: _categoryColors,
                ),
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    '€${budget.spent.toStringAsFixed(0)}',
                    style: const TextStyle(
                      fontWeight: FontWeight.w800,
                      fontSize: 18,
                    ),
                  ),
                  Text(
                    'gasto',
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
                  ),
                ],
              ),
            ],
          ),
        ),
        const SizedBox(height: 18),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 4),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
            boxShadow: AppTheme.cardShadow,
          ),
          child: Column(
            children: [
              for (final (index, category) in categories.indexed)
                _CategoryRow(
                  category: category,
                  color: _categoryColors[index % _categoryColors.length],
                  percentOfTotal: budget.total == 0
                      ? 0
                      : category.amount / budget.total,
                ),
            ],
          ),
        ),
      ],
    );
  }
}

class _CategoryRow extends StatelessWidget {
  final EffectiveBudgetCategory category;
  final Color color;
  final double percentOfTotal;

  const _CategoryRow({
    required this.category,
    required this.color,
    required this.percentOfTotal,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 10,
                height: 10,
                decoration: BoxDecoration(color: color, shape: BoxShape.circle),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Text(
                  category.name,
                  style: const TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 13.5,
                  ),
                ),
              ),
              Text(
                '€${category.amount.toStringAsFixed(0)}',
                style: const TextStyle(
                  fontWeight: FontWeight.w700,
                  fontSize: 13.5,
                ),
              ),
              const SizedBox(width: 10),
              SizedBox(
                width: 36,
                child: Text(
                  '${(percentOfTotal * 100).round()}%',
                  textAlign: TextAlign.right,
                  style: TextStyle(color: AppTheme.inkMuted, fontSize: 12),
                ),
              ),
            ],
          ),
          if (category.chosenSuppliers.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(left: 20, top: 6),
              child: Row(
                children: [
                  for (final supplier in category.chosenSuppliers)
                    Padding(
                      padding: const EdgeInsets.only(right: 6),
                      child: ClipOval(
                        child: Image.network(
                          supplier.imageUrl,
                          width: 20,
                          height: 20,
                          fit: BoxFit.cover,
                          errorBuilder: (context, error, stackTrace) =>
                              Container(
                                width: 20,
                                height: 20,
                                color: color.withValues(alpha: 0.3),
                              ),
                        ),
                      ),
                    ),
                  Expanded(
                    child: Text(
                      category.chosenSuppliers.map((s) => s.name).join(', '),
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: 11),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }
}

class _DonutPainter extends CustomPainter {
  final List<double> values;
  final List<Color> colors;

  const _DonutPainter({required this.values, required this.colors});

  @override
  void paint(Canvas canvas, Size size) {
    final total = values.fold(0.0, (sum, v) => sum + v);
    if (total <= 0) return;
    final strokeWidth = size.width * 0.16;
    final rect = (Offset.zero & size).deflate(strokeWidth / 2);
    var startAngle = -pi / 2;
    for (var i = 0; i < values.length; i++) {
      final sweep = (values[i] / total) * 2 * pi;
      final paint = Paint()
        ..color = colors[i % colors.length]
        ..style = PaintingStyle.stroke
        ..strokeWidth = strokeWidth;
      canvas.drawArc(rect, startAngle, sweep, false, paint);
      startAngle += sweep;
    }
  }

  @override
  bool shouldRepaint(covariant _DonutPainter oldDelegate) =>
      oldDelegate.values != values || oldDelegate.colors != colors;
}
