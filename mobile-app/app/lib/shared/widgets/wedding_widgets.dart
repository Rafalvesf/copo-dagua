import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import 'progress.dart';

class WeddingCoverHeader extends StatelessWidget {
  final Wedding wedding;

  const WeddingCoverHeader({super.key, required this.wedding});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(22),
      decoration: BoxDecoration(gradient: AppGradients.wedding, borderRadius: BorderRadius.circular(28)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.55), shape: BoxShape.circle),
            child: const Icon(Icons.favorite, color: AppTheme.ink, size: 20),
          ),
          const SizedBox(height: 16),
          Text(
            wedding.displayNames,
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w800, color: AppTheme.ink),
          ),
          const SizedBox(height: 12),
          Wrap(
            spacing: 10,
            runSpacing: 8,
            children: [
              if (wedding.location != null) _InfoChip(icon: Icons.place_outlined, label: wedding.location!),
              CountdownBadge(weddingDate: wedding.weddingDate, light: true),
            ],
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
