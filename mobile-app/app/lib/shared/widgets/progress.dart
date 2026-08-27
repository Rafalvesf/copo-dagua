import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

class StepProgressBar extends StatelessWidget {
  final int totalSteps;
  final int currentStep;

  const StepProgressBar({super.key, required this.totalSteps, required this.currentStep});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    return Row(
      children: List.generate(totalSteps, (i) {
        final active = i <= currentStep;
        return Expanded(
          child: Container(
            height: 6,
            margin: EdgeInsets.only(right: i == totalSteps - 1 ? 0 : 4),
            decoration: BoxDecoration(
              color: active ? colorScheme.primary : colorScheme.surfaceContainerHighest,
              borderRadius: BorderRadius.circular(4),
            ),
          ),
        );
      }),
    );
  }
}

class CountdownBadge extends StatelessWidget {
  final DateTime? weddingDate;
  final bool light;

  const CountdownBadge({super.key, required this.weddingDate, this.light = false});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final date = weddingDate;
    final text = date == null
        ? 'Data por definir'
        : () {
            final days = date.difference(DateTime.now()).inDays;
            if (days < 0) return 'Já casaram!';
            if (days == 0) return 'É hoje! 🎉';
            return 'Faltam $days dias';
          }();
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: BoxDecoration(
        color: light ? Colors.white.withValues(alpha: 0.6) : colorScheme.secondaryContainer,
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        text,
        style: TextStyle(
          color: light ? AppTheme.ink : colorScheme.onSecondaryContainer,
          fontWeight: FontWeight.w700,
        ),
      ),
    );
  }
}
