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

/// Aba/etiqueta colorida de estado de RSVP — substitui os emojis
/// ✅/⏳/❌ usados anteriormente.
class RsvpStatusBadge extends StatelessWidget {
  final RsvpStatus status;

  const RsvpStatusBadge({super.key, required this.status});

  @override
  Widget build(BuildContext context) {
    final (color, label) = rsvpStatusStyle(status);
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(color: color.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(999)),
      child: Text(label, style: TextStyle(color: color, fontSize: 11, fontWeight: FontWeight.w700)),
    );
  }
}
