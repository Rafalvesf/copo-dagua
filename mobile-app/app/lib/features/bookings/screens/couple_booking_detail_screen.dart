import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/export_card.dart';
import '../../../core/exports/exports.dart';
import '../../../shared/widgets/page_header.dart';
import '../../partner_bookings/booking_style.dart' show bookingStatusColor;
import 'couple_bookings_screen.dart' show ReviewAction;
import '../../../core/home/home_providers.dart';
import '../../../shared/money.dart';
import '../../payments/open_payment.dart';
import '../../../shared/widgets/dispute_card.dart';

/// Detalhes de uma reserva já confirmada/concluída — antes disto, tocar
/// numa reserva em `couple_bookings_screen.dart` só mostrava "em
/// breve". Pedido explícito do utilizador: "faz com que os casais
/// possam editar as suas reviews no local das reservas apos clicar em
/// detalhes da reserva" — este ecrã é esse "local", com
/// [ReviewAction] (já existia na lista, agora reutilizada aqui,
/// pública) a permitir ver, criar e editar a avaliação.
class CoupleBookingDetailScreen extends ConsumerWidget {
  final CoupleBooking booking;

  const CoupleBookingDetailScreen({super.key, required this.booking});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final fee = ref.watch(platformCommissionPercentageProvider).value ?? 0;
    final date = booking.serviceDate;
    final dateLabel =
        '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';
    final needsFinalPayment = booking.pendingFinalPaymentId != null;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(
          children: [
            PageHeader(title: 'Detalhes da reserva', centered: true),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.all(AppTheme.screenMargin),
                children: [
                  // Redesign 2026-10-20: foto do parceiro, estado e
                  // progresso do pagamento; documentos para descarregar.
                  Center(child: V2Avatar(booking.partnerName, size: 92, imageUrl: booking.partnerLogoUrl)),
                  const SizedBox(height: 14),
                  Center(
                    child: Text(
                      booking.partnerName,
                      style: const TextStyle(fontWeight: FontWeight.w800, fontSize: AppFontSize.xxl),
                    ),
                  ),
                  if (booking.category != null)
                    Center(
                      child: Text(
                        booking.category!,
                        style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
                      ),
                    ),
                  const SizedBox(height: 10),
                  Center(
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                      decoration: BoxDecoration(
                        color: (needsFinalPayment ? AppStatusColors.pending : bookingStatusColor(booking.status)).withValues(alpha: 0.12),
                        borderRadius: BorderRadius.circular(99),
                      ),
                      child: Text(
                        needsFinalPayment ? 'Falta pagar o restante' : booking.status.label,
                        style: TextStyle(
                          fontSize: AppFontSize.sm,
                          fontWeight: FontWeight.w700,
                          color: needsFinalPayment ? AppStatusColors.pending : bookingStatusColor(booking.status),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Container(
                    padding: const EdgeInsets.all(18),
                    decoration: softCard(radius: 24),
                    child: Column(
                      children: [
                        // Progresso do que já está pago.
                        Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
                          Expanded(
                            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                              const Text('Pago', style: TextStyle(fontSize: AppFontSize.sm, color: v2Muted)),
                              Text(euros(amountWithCommission(booking.paidAmount, fee), cents: true),
                                  style: const TextStyle(fontSize: AppFontSize.xxl, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                            ]),
                          ),
                          Text('de ${euros(amountWithCommission(booking.amount, fee), cents: true)}',
                              style: const TextStyle(fontSize: AppFontSize.md, color: v2Muted)),
                        ]),
                        const SizedBox(height: 10),
                        ClipRRect(
                          borderRadius: BorderRadius.circular(99),
                          child: LinearProgressIndicator(
                            value: booking.amount <= 0 ? 0 : (booking.paidAmount / booking.amount).clamp(0.0, 1.0),
                            minHeight: 9,
                            backgroundColor: const Color(0xFFF2F0EB),
                            color: AppTheme.brandGreen,
                          ),
                        ),
                        const SizedBox(height: 16),
                        _InfoRow(label: 'Data', value: dateLabel),
                        const SizedBox(height: 10),
                        _InfoRow(
                          label: 'Valor total (com comissão)',
                          value: euros(amountWithCommission(booking.amount, fee), cents: true),
                        ),

                        const SizedBox(height: 10),
                        _InfoRow(
                          label: 'Falta pagar',
                          value: euros(amountWithCommission(booking.remainingAmount, fee), cents: true),
                        ),
                      ],
                    ),
                  ),
                  // Pagar daqui mesmo (2026-10-19), sem voltar à lista.
                  for (final (id, label, amount) in [
                    if (booking.pendingDepositPaymentId != null)
                      (booking.pendingDepositPaymentId!, 'Pagar sinal', booking.depositAmount ?? 0),
                    if (booking.pendingFinalPaymentId != null)
                      (booking.pendingFinalPaymentId!, 'Pagar restante', booking.finalPaymentAmount ?? 0),
                  ]) ...[
                    const SizedBox(height: 14),
                    SizedBox(
                      height: 54,
                      child: FilledButton(
                        onPressed: () => openPaymentFlow(context, ref, id),
                        style: FilledButton.styleFrom(
                          backgroundColor: AppTheme.brandGreen,
                          foregroundColor: Colors.white,
                          shape: const StadiumBorder(),
                          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: AppFontSize.lg, fontWeight: FontWeight.w700),
                        ),
                        child: Text('$label — ${euros(amountWithCommission(amount, fee), cents: true)}'),
                      ),
                    ),
                  ],
                  // Faturas/comprovativos e resumo da reserva (2026-10-20).
                  const SizedBox(height: 22),
                  const Padding(
                    padding: EdgeInsets.only(left: 4, bottom: 8),
                    child: Text('Documentos', style: TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                  ExportCard(
                    reportLabel: 'Resumo da reserva',
                    partnerSide: false,
                    load: () => loadSingleBookingReport(booking.id),
                  ),
                  const SizedBox(height: 14),
                  DisputeCard(bookingId: booking.id, partnerSide: false),
                  if (booking.status == BookingStatus.concluido) ...[
                    const SizedBox(height: 20),
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: AppTheme.surface,
                        borderRadius: BorderRadius.circular(AppRadius.lg),
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
        Text(label, style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md)),
        Text(
          value,
          style: TextStyle(
            fontWeight: FontWeight.w700,
            fontSize: AppFontSize.md,
            color: valueColor ?? AppTheme.ink,
          ),
        ),
      ],
    );
  }
}
