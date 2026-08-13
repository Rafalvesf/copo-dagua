import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';

(Color, String) rsvpStatusStyle(RsvpStatus status) {
  return switch (status) {
    RsvpStatus.confirmed => (AppStatusColors.confirmed, 'Confirmado'),
    RsvpStatus.pending => (AppStatusColors.pending, 'Pendente'),
    RsvpStatus.declined => (AppStatusColors.declined, 'Recusado'),
  };
}

IconData rsvpStatusIcon(RsvpStatus status) {
  return switch (status) {
    RsvpStatus.confirmed => Icons.check_circle,
    RsvpStatus.pending => Icons.schedule,
    RsvpStatus.declined => Icons.cancel,
  };
}

/// Aba/etiqueta colorida de estado de RSVP — substitui os emojis
/// ✅/⏳/❌ usados anteriormente.
class RsvpStatusBadge extends StatelessWidget {
  final RsvpStatus status;
  final bool showIcon;

  const RsvpStatusBadge({
    super.key,
    required this.status,
    this.showIcon = false,
  });

  @override
  Widget build(BuildContext context) {
    final (color, label) = rsvpStatusStyle(status);
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.15),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (showIcon) ...[
            Icon(rsvpStatusIcon(status), color: color, size: 14),
            const SizedBox(width: 4),
          ],
          Text(
            label,
            style: TextStyle(
              color: color,
              fontSize: 13,
              fontWeight: FontWeight.w600,
            ),
          ),
        ],
      ),
    );
  }
}
