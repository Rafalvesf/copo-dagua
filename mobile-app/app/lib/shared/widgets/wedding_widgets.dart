import 'package:flutter/material.dart';

import '../../core/budget/effective_budget.dart';
import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import 'buttons.dart';
import 'cards.dart';
import 'progress.dart';
import 'snappy_tap.dart';

class WeddingCoverHeader extends StatelessWidget {
  final Wedding wedding;

  /// Ícones flutuantes opcionais nos cantos superiores da capa (ex: no
  /// feed inicial, pesquisa à esquerda e editar à direita). Quando
  /// omitidos, a capa mostra só o coração — comportamento original,
  /// usado no ecrã de detalhes do casamento.
  final VoidCallback? onSearchTap;
  final VoidCallback? onEditTap;

  const WeddingCoverHeader({
    super.key,
    required this.wedding,
    this.onSearchTap,
    this.onEditTap,
  });

  String? get _agesLabel {
    final age1 = wedding.partner1Age;
    final age2 = wedding.partner2Age;
    if (age1 == null && age2 == null) return null;
    if (age1 != null && age2 != null) return '$age1 & $age2 anos';
    return '${age1 ?? age2} anos';
  }

  @override
  Widget build(BuildContext context) {
    final hasCornerIcons = onSearchTap != null || onEditTap != null;
    return ClipRRect(
      borderRadius: BorderRadius.circular(28),
      child: Stack(
        children: [
          Positioned.fill(
            child: PhotoCardBackground(
              imageUrl: 'https://picsum.photos/seed/${wedding.id}-venue/900/700',
              fallbackColor: AppColors.blue,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(22),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (hasCornerIcons)
                  Row(
                    children: [
                      if (onSearchTap != null)
                        CircleIconButton(
                          icon: Icons.search,
                          background: Colors.white.withValues(alpha: 0.85),
                          onTap: onSearchTap,
                        )
                      else
                        const SizedBox(width: 36),
                      const Spacer(),
                      if (onEditTap != null)
                        CircleIconButton(
                          icon: Icons.edit_outlined,
                          background: Colors.white.withValues(alpha: 0.85),
                          onTap: onEditTap,
                        ),
                    ],
                  )
                else
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.85), shape: BoxShape.circle),
                    child: const Icon(Icons.favorite, color: AppTheme.ink, size: AppTypography.iconSize),
                  ),
                const SizedBox(height: 16),
                Text(
                  wedding.displayNames,
                  style: AppTypography.cardTitle.copyWith(color: Colors.white),
                ),
                if (_agesLabel != null) ...[
                  const SizedBox(height: 2),
                  Text(
                    _agesLabel!,
                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Colors.white.withValues(alpha: 0.85)),
                  ),
                ],
                const SizedBox(height: 12),
                Wrap(
                  spacing: 10,
                  runSpacing: 8,
                  children: [
                    if (wedding.location != null) _InfoChip(icon: Icons.place_outlined, label: wedding.location!),
                    if (wedding.venue != null && wedding.venue!.isNotEmpty)
                      _InfoChip(icon: Icons.villa_outlined, label: wedding.venue!),
                    CountdownBadge(weddingDate: wedding.weddingDate, light: true),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _InfoChip extends StatelessWidget {
  final IconData icon;
  final String label;

  const _InfoChip({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.6), borderRadius: BorderRadius.circular(999)),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 15, color: AppTheme.ink),
          const SizedBox(width: 4),
          Text(label, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.ink)),
        ],
      ),
    );
  }
}

IconData iconForChecklistItem(ChecklistItem item) {
  return switch (item.partnerCategory) {
    PartnerCategory.photography => Icons.camera_alt_outlined,
    PartnerCategory.catering => Icons.restaurant_outlined,
    PartnerCategory.music => Icons.music_note_outlined,
    PartnerCategory.decoration => Icons.local_florist_outlined,
    PartnerCategory.venue => Icons.villa_outlined,
    null => Icons.task_alt_outlined,
  };
}

/// Secção "O que tens de fazer hoje / Amanhã / Esta semana" — as 3
/// tarefas pendentes com data mais próxima, partilhada entre o feed
/// inicial e o ecrã de detalhes do casamento.
class UrgentTasksSection extends StatelessWidget {
  final List<ChecklistItem> items;
  final VoidCallback onOpenChecklist;

  const UrgentTasksSection({
    super.key,
    required this.items,
    required this.onOpenChecklist,
  });

  static const _labels = ['O que tens de fazer hoje', 'Amanhã', 'Esta semana'];

  @override
  Widget build(BuildContext context) {
    final urgent = items.where((i) => !i.done && i.dueDate != null).toList()
      ..sort((a, b) => a.dueDate!.compareTo(b.dueDate!));
    final top = urgent.take(3).toList();

    if (top.isEmpty) {
      return Container(
        width: double.infinity,
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: AppTheme.cardShadow,
        ),
        child: const Text('Sem tarefas pendentes — bom trabalho! 🎉'),
      );
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        for (final (index, item) in top.indexed) ...[
          Text(_labels[index], style: Theme.of(context).textTheme.titleMedium),
          const SizedBox(height: 8),
          _TaskRow(
            item: item,
            highPriority: index == 0,
            onTap: onOpenChecklist,
          ),
          if (index != top.length - 1) const SizedBox(height: 16),
        ],
      ],
    );
  }
}

class _TaskRow extends StatelessWidget {
  final ChecklistItem item;
  final bool highPriority;
  final VoidCallback onTap;

  const _TaskRow({
    required this.item,
    required this.highPriority,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final due = item.dueDate!;
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Row(
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(
                color: AppColors.green,
                borderRadius: BorderRadius.circular(12),
              ),
              child: Icon(iconForChecklistItem(item), size: 18, color: AppTheme.ink),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    item.title,
                    style: const TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 13.5,
                    ),
                  ),
                  const SizedBox(height: 3),
                  if (highPriority)
                    const Text(
                      'Alta prioridade',
                      style: TextStyle(
                        color: AppStatusColors.declined,
                        fontSize: 11.5,
                        fontWeight: FontWeight.w700,
                      ),
                    )
                  else
                    Text(
                      'Até ${due.day.toString().padLeft(2, '0')}/${due.month.toString().padLeft(2, '0')}',
                      style: TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: 11.5,
                      ),
                    ),
                ],
              ),
            ),
            Icon(Icons.chevron_right, color: AppTheme.inkMuted, size: 20),
          ],
        ),
      ),
    );
  }
}

class BudgetStatCard extends StatelessWidget {
  final EffectiveBudget? budget;
  final VoidCallback onTap;

  const BudgetStatCard({super.key, required this.budget, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final b = budget;
    final pct = b == null ? 0 : (b.progress * 100).round();
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                const Icon(
                  Icons.savings_outlined,
                  size: 16,
                  color: AppColors.purple,
                ),
                const SizedBox(width: 6),
                const Text(
                  'Orçamento',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.ink,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Text(
              b == null ? '—' : '€${b.spent.toStringAsFixed(0)}',
              style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 17),
            ),
            Text(
              b == null ? '' : 'de €${b.total.toStringAsFixed(0)} · $pct%',
              style: TextStyle(color: AppTheme.inkMuted, fontSize: 11),
            ),
          ],
        ),
      ),
    );
  }
}

class GuestsStatCard extends StatelessWidget {
  final int confirmed;
  final int total;
  final VoidCallback onTap;

  const GuestsStatCard({
    super.key,
    required this.confirmed,
    required this.total,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final pct = total == 0 ? 0 : ((confirmed / total) * 100).round();
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Row(
              children: [
                Icon(
                  Icons.groups_outlined,
                  size: 16,
                  color: AppStatusColors.confirmed,
                ),
                SizedBox(width: 6),
                Text(
                  'Convidados',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.ink,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Text(
              '$confirmed/$total',
              style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 17),
            ),
            Text(
              'confirmados · $pct%',
              style: TextStyle(color: AppTheme.inkMuted, fontSize: 11),
            ),
          ],
        ),
      ),
    );
  }
}
