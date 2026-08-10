import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import 'progress.dart';

class WeddingCoverHeader extends StatelessWidget {
  final Wedding wedding;

  const WeddingCoverHeader({super.key, required this.wedding});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          height: 160,
          width: double.infinity,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [colorScheme.primaryContainer, colorScheme.tertiaryContainer],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
            borderRadius: BorderRadius.circular(20),
          ),
          child: Center(
            child: Icon(Icons.favorite, size: 40, color: colorScheme.onPrimaryContainer.withValues(alpha: 0.5)),
          ),
        ),
        const SizedBox(height: 16),
        Text(wedding.displayNames, style: Theme.of(context).textTheme.headlineSmall),
        const SizedBox(height: 8),
        Wrap(
          spacing: 12,
          runSpacing: 8,
          children: [
            if (wedding.location != null)
              _InfoChip(icon: Icons.place_outlined, label: wedding.location!),
            CountdownBadge(weddingDate: wedding.weddingDate),
          ],
        ),
      ],
    );
  }
}

class _InfoChip extends StatelessWidget {
  final IconData icon;
  final String label;

  const _InfoChip({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: 16, color: Theme.of(context).colorScheme.onSurfaceVariant),
        const SizedBox(width: 4),
        Text(label, style: Theme.of(context).textTheme.bodyMedium),
      ],
    );
  }
}
