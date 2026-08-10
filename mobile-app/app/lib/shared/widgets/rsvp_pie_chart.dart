import 'dart:math';

import 'package:flutter/material.dart';

import '../../core/guests/guest_controller.dart';
import '../../core/theme/app_theme.dart';

/// Resumo de RSVP em gráfico circular (donut) interativo — toca numa
/// fatia ou na legenda para filtrar a lista pelo respetivo estado.
/// Substitui o resumo anterior em texto com emojis (✅/⏳/❌).
class RsvpPieChart extends StatelessWidget {
  final int confirmed;
  final int pending;
  final int declined;
  final GuestFilter selected;
  final ValueChanged<GuestFilter> onChanged;

  const RsvpPieChart({
    super.key,
    required this.confirmed,
    required this.pending,
    required this.declined,
    required this.selected,
    required this.onChanged,
  });

  int get _total => confirmed + pending + declined;

  @override
  Widget build(BuildContext context) {
    const chartSize = 92.0;
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(24)),
      child: Row(
        children: [
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTapUp: (details) => _handleTap(details.localPosition, const Size(chartSize, chartSize)),
            child: SizedBox(
              width: chartSize,
              height: chartSize,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  CustomPaint(
                    size: const Size(chartSize, chartSize),
                    painter: _RsvpPiePainter(confirmed: confirmed, pending: pending, declined: declined),
                  ),
                  Text('$_total', style: Theme.of(context).textTheme.titleLarge),
                ],
              ),
            ),
          ),
          const SizedBox(width: 18),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                _LegendRow(
                  color: AppStatusColors.confirmed,
                  label: 'Confirmados',
                  count: confirmed,
                  active: selected == GuestFilter.confirmed,
                  onTap: () => onChanged(GuestFilter.confirmed),
                ),
                _LegendRow(
                  color: AppStatusColors.pending,
                  label: 'Pendentes',
                  count: pending,
                  active: selected == GuestFilter.pending,
                  onTap: () => onChanged(GuestFilter.pending),
                ),
                _LegendRow(
                  color: AppStatusColors.declined,
                  label: 'Recusados',
                  count: declined,
                  active: selected == GuestFilter.declined,
                  onTap: () => onChanged(GuestFilter.declined),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  void _handleTap(Offset localPosition, Size size) {
    if (_total == 0) {
      onChanged(GuestFilter.all);
      return;
    }
    final center = Offset(size.width / 2, size.height / 2);
    final vector = localPosition - center;
    var angle = atan2(vector.dy, vector.dx) + pi / 2;
    if (angle < 0) angle += 2 * pi;

    final confirmedSweep = 2 * pi * (confirmed / _total);
    final pendingSweep = 2 * pi * (pending / _total);

    if (angle <= confirmedSweep) {
      onChanged(GuestFilter.confirmed);
    } else if (angle <= confirmedSweep + pendingSweep) {
      onChanged(GuestFilter.pending);
    } else {
      onChanged(GuestFilter.declined);
    }
  }
}

class _LegendRow extends StatelessWidget {
  final Color color;
  final String label;
  final int count;
  final bool active;
  final VoidCallback onTap;

  const _LegendRow({
    required this.color,
    required this.label,
    required this.count,
    required this.active,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(10),
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 4),
        child: Row(
          children: [
            Container(width: 10, height: 10, decoration: BoxDecoration(color: color, shape: BoxShape.circle)),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                label,
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: active ? FontWeight.w800 : FontWeight.w600,
                  color: AppTheme.ink,
                ),
              ),
            ),
            Text('$count', style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ],
        ),
      ),
    );
  }
}

class _RsvpPiePainter extends CustomPainter {
  final int confirmed;
  final int pending;
  final int declined;

  _RsvpPiePainter({required this.confirmed, required this.pending, required this.declined});

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = size.width / 2;
    final strokeWidth = radius * 0.4;
    final rect = Rect.fromCircle(center: center, radius: radius - strokeWidth / 2);
    final total = confirmed + pending + declined;

    if (total == 0) {
      final paint = Paint()
        ..color = const Color(0xFFE2D9CF)
        ..style = PaintingStyle.stroke
        ..strokeWidth = strokeWidth;
      canvas.drawArc(rect, 0, 2 * pi, false, paint);
      return;
    }

    double start = -pi / 2;
    for (final slice in [
      (confirmed, AppStatusColors.confirmed),
      (pending, AppStatusColors.pending),
      (declined, AppStatusColors.declined),
    ]) {
      final count = slice.$1;
      if (count == 0) continue;
      final sweep = 2 * pi * (count / total);
      final paint = Paint()
        ..color = slice.$2
        ..style = PaintingStyle.stroke
        ..strokeWidth = strokeWidth;
      canvas.drawArc(rect, start, sweep, false, paint);
      start += sweep;
    }
  }

  @override
  bool shouldRepaint(covariant _RsvpPiePainter oldDelegate) =>
      oldDelegate.confirmed != confirmed || oldDelegate.pending != pending || oldDelegate.declined != declined;
}
