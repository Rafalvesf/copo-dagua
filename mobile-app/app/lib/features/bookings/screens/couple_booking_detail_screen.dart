import 'package:flutter/material.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/page_header.dart';
import '../../partner_bookings/booking_style.dart' show bookingStatusColor;
import 'couple_bookings_screen.dart' show ReviewAction;

/// Detalhes de uma reserva já confirmada/concluída — antes disto, tocar
/// numa reserva em `couple_bookings_screen.dart` só mostrava "em
/// breve". Pedido explícito do utilizador: "faz com que os casais
/// possam editar as suas reviews no local das reservas apos clicar em
/// detalhes da reserva" — este ecrã é esse "local", com
/// [ReviewAction] (já existia na lista, agora reutilizada aqui,
/// pública) a permitir ver, criar e editar a avaliação.
class CoupleBookingDetailScreen extends StatelessWidget {
  final CoupleBooking booking;

  const CoupleBookingDetailScreen({super.key, required this.booking});

  @override
  Widget build(BuildContext context) {
    final date = booking.serviceDate;
    final dateLabel =
        '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';
    final needsFinalPayment = booking.pendingFinalPaymentId != null;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(
          children: [
            PageHeader(title: 'Detalhes da reserva', titleFontSize: 20),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.all(AppTheme.screenMargin),
                children: [
                  Center(
                    child: booking.partnerLogoUrl == null
                        ? InitialsAvatar(name: booking.partnerName, radius: 48)
                        : CircleAvatar(
                            radius: 48,
                            backgroundColor: AppColors.gray,
                            backgroundImage: NetworkImage(booking.partnerLogoUrl!),
                          ),
                  ),
                  const SizedBox(height: 14),
                  Center(
                    child: Text(
                      booking.partnerName,
                      style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 20),
                    ),
                  ),
                  if (booking.category != null)
                    Center(
                      child: Text(
                        booking.category!,
                        style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
                      ),
                    ),
                  const SizedBox(height: 20),
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: AppTheme.surface,
                      borderRadius: BorderRadius.circular(18),
                    ),
                    child: Column(
                      children: [
                        _InfoRow(label: 'Data', value: dateLabel),
                        const SizedBox(height: 10),
                        _InfoRow(
                          label: 'Valor total',
                          value: '${booking.amount.toStringAsFixed(0)} €',
                        ),
                        const SizedBox(height: 10),
                        _InfoRow(
                          label: 'Estado',
                          value: needsFinalPayment
                              ? 'Falta pagar o restante'
                              : booking.status.label,
                          valueColor: needsFinalPayment
                              ? AppStatusColors.pending
                              : bookingStatusColor(booking.status),
                        ),
                      ],
                    ),
                  ),
                  if (booking.status == BookingStatus.concluido) ...[
                    const SizedBox(height: 20),
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: AppTheme.surface,
                        borderRadius: BorderRadius.circular(18),
                      ),
                      child: ReviewAction(booking: booking),
                    ),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _InfoRow extends StatelessWidget {
  final String label;
  final String value;
  final Color? valueColor;

  const _InfoRow({required this.label, required this.value, this.valueColor});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(label, style: TextStyle(color: AppTheme.inkMuted, fontSize: 13)),
        Text(
          value,
          style: TextStyle(
            fontWeight: FontWeight.w700,
            fontSize: 13.5,
            color: valueColor ?? AppTheme.ink,
          ),
        ),
      ],
    );
  }
}
