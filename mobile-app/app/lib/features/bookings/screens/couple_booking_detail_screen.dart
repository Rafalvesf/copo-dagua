import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/v2_kit.dart' show V2Avatar;
import '../../../shared/widgets/export_card.dart';
import '../../../core/exports/exports.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/text_case.dart';
import 'couple_bookings_screen.dart' show ReviewAction;
import '../../../core/home/home_providers.dart';
import '../../../core/event/event_controller.dart';
import '../../../shared/money.dart';
import '../../payments/booking_extras_sheet.dart';
import '../../../core/payments/payments.dart' show payDay;
import '../../../shared/widgets/dispute_card.dart';
import '../../../core/bookings/hire_privacy.dart';

/// Detalhes de uma reserva (o organizador) — no desenho das páginas do
/// evento (DESIGN.md §6.7, pedido 2026-11-23): seta preta fixa, título 28
/// com o parceiro, o resumo branco do que está pago, os pagamentos por
/// fazer em aviso (abrem os popups de pagar) e cada bloco numa moldura.
/// A avaliação (pedido antigo: «editar as reviews no local das reservas»)
/// continua aqui, com [ReviewAction].
class CoupleBookingDetailScreen extends ConsumerWidget {
  final CoupleBooking booking;

  const CoupleBookingDetailScreen({super.key, required this.booking});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final fee = (ref.watch(organizerFeeConfigProvider).value ?? const FeeConfig()).effectivePct(booking.amount);
    String money(double v) => euros(amountWithCommission(v, fee), cents: true);
    final date = booking.serviceDate;
    final dateLabel = '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';
    final events = ref.watch(eventControllerProvider).events;
    final eventName = [
      for (final w in events)
        if (w.id == booking.eventId) capFirst(w.displayNames),
    ].firstOrNull;
    final needsFinal = booking.pendingFinalPaymentId != null;
    final paid = booking.amount <= 0 ? 0.0 : (booking.paidAmount / booking.amount).clamp(0.0, 1.0).toDouble();

    // Pagamentos por fazer (o sinal / pagamento único e o restante).
    final toPay = <(String, String, double, DateTime?, bool, DateTime?)>[
      if (booking.pendingDepositPaymentId != null)
        (
          booking.pendingDepositPaymentId!,
          booking.depositIsFull ? 'Pagamento' : 'Sinal',
          booking.depositAmount ?? 0,
          booking.pendingDepositDueAt,
          booking.depositOpen,
          booking.depositOpensAt,
        ),
      if (booking.pendingFinalPaymentId != null)
        (
          booking.pendingFinalPaymentId!,
          'Restante',
          booking.finalPaymentAmount ?? 0,
          booking.finalPaymentDueAt,
          booking.finalPaymentOpen,
          booking.finalPaymentOpensAt,
        ),
    ];

    final statusText = needsFinal ? 'Falta pagar o restante' : booking.status.label;
    final statusKind = switch (booking.status) {
      BookingStatus.confirmado || BookingStatus.concluido => needsFinal ? KitTagKind.pending : KitTagKind.green,
      BookingStatus.recusado => KitTagKind.urgent,
      _ => KitTagKind.pending,
    };

    return GradientScaffold(
      background: AppBackground.subtle,
      body: ScrollBackView(
        builder: (context, scroll) => ListView(
          controller: scroll,
          padding: EdgeInsets.fromLTRB(
              AppTheme.screenMargin, MediaQuery.paddingOf(context).top + 12, AppTheme.screenMargin, 60),
          children: [
            const KitHeader(),
            KitTitle(
              capFirst(booking.partnerName),
              subtitle: [
                if (booking.category != null) booking.category!,
                if (eventName != null) eventName,
              ].join(' · '),
            ),
            KitSummary(
              kicker: 'Pago',
              value: money(booking.paidAmount),
              unit: 'de ${money(booking.amount)}',
              progress: paid,
              footer: booking.remainingAmount > 0 ? 'Falta pagar ${money(booking.remainingAmount)}' : 'Tudo pago',
            ),
            if (toPay.isNotEmpty)
              SectionFrame(
                title: 'Para fazer · ${toPay.length}',
                children: [
                  for (final (i, (id, what, amount, due, open, opensAt)) in toPay.indexed) ...[
                    if (i > 0) const SizedBox(height: 10),
                    FrameTaskRow(
                      lead: V2Avatar(booking.partnerName, size: 44, imageUrl: booking.partnerLogoUrl),
                      title: '$what · ${money(amount)}',
                      sub: open
                          ? (due != null ? 'até ${due.day}/${due.month}' : 'Por pagar')
                          : 'Paga-se a partir de ${payDay(opensAt!)}',
                      action: 'Pagar',
                      urgent: open && toneForDue(due) == AlertTone.urgent,
                      onTap: open
                          ? () async {
                              await payBookingFlow(context, ref,
                                  paymentId: id, bookingId: booking.id, partnerName: booking.partnerName);
                              ref.invalidate(coupleBookingsProvider);
                            }
                          : () {},
                    ),
                  ],
                ],
              ),
            SectionFrame(
              title: 'A reserva',
              trailing: KitTag(statusText, kind: statusKind),
              children: [
                _Row('Data', dateLabel),
                _Row('Valor total', money(booking.amount)),
                _Row('Pago', money(booking.paidAmount)),
                _Row('Falta pagar', money(booking.remainingAmount), last: true),
                const FrameNote('Os valores já incluem a taxa de serviço.', top: 10),
              ],
            ),
            SectionFrame(
              title: 'Documentos',
              children: [
                ExportCard(
                  reportLabel: 'Resumo da reserva',
                  partnerSide: false,
                  load: () => loadSingleBookingReport(booking.id),
                ),
              ],
            ),
            SectionFrame(
              title: 'Privacidade e ajuda',
              children: [
                HirePrivacyCard(bookingId: booking.id, eventId: booking.eventId, isPrivate: booking.isPrivate),
                const SizedBox(height: 12),
                DisputeCard(bookingId: booking.id, partnerSide: false),
              ],
            ),
            if (booking.status == BookingStatus.concluido)
              SectionFrame(title: 'A tua avaliação', children: [ReviewAction(booking: booking)]),
          ],
        ),
      ),
    );
  }
}

/// Linha de 48: rótulo 13 `#57534E` à esquerda, valor 14 negrito à direita.
class _Row extends StatelessWidget {
  final String label;
  final String value;
  final bool last;
  const _Row(this.label, this.value, {this.last = false});

  @override
  Widget build(BuildContext context) => Container(
        constraints: const BoxConstraints(minHeight: 48),
        decoration: BoxDecoration(
          border: last ? null : const Border(bottom: BorderSide(color: Color(0xFFE3E3E3))),
        ),
        child: Row(children: [
          Expanded(child: Text(label, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
          Text(value, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
      );
}
