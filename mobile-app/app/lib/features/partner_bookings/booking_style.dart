import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';

/// Cor do selo de estado de um [Booking] — separado do enum em
/// `models.dart` porque cores dependem do tema/Flutter, ver a mesma
/// convenção em `features/partners/partner_style.dart`.
Color bookingStatusColor(BookingStatus status) {
  switch (status) {
    case BookingStatus.novo:
    case BookingStatus.emAnalise:
      return AppStatusColors.pending;
    case BookingStatus.confirmado:
      return AppStatusColors.confirmed;
    case BookingStatus.concluido:
      return AppTheme.inkMuted;
    case BookingStatus.recusado:
      return AppStatusColors.declined;
  }
}
