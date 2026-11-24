import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/home/home_providers.dart';
import '../../core/models/models.dart' show CoupleBooking;
import '../../core/payments/payments.dart' show payDay;
import '../../core/theme/app_theme.dart';
import '../../shared/money.dart';
import '../../shared/widgets/alert_outline.dart';
import '../../shared/widgets/island_sheet.dart';
import '../../shared/widgets/snappy_tap.dart';
import 'open_payment.dart';

/// Popup «Pagar o sinal / Pagar o resto» que abre sozinho ao abrir a app
/// (mockups «Pagar · extras e loja», 2026-11-20; migrações 204 e 205):
/// desde 6 dias antes do prazo até pagar — amarelo, vermelho nos últimos
/// 3 dias. «Mais tarde» fecha até à próxima vez que a app abre. O resto só
/// aparece quando o pagamento já abriu (6 dias antes do prazo).
bool _shownThisRun = false;

class _Due {
  final CoupleBooking booking;
  final String paymentId;
  final bool deposit;
  final double amount;
  final DateTime due;
  const _Due(this.booking, this.paymentId, this.deposit, this.amount, this.due);
}

Future<void> maybeShowPaymentDue(BuildContext context, WidgetRef ref) async {
  if (_shownThisRun) return;
  _shownThisRun = true;
  List<CoupleBooking> bookings;
  try {
    bookings = await ref.read(coupleBookingsProvider.future);
  } catch (_) {
    return;
  }
  final now = DateTime.now();
  final due = <_Due>[];
  for (final b in bookings) {
    final dd = b.pendingDepositDueAt?.toLocal();
    // Sinal: aparece sempre que está por pagar — pago, a data fica
    // garantida; até lá o parceiro pode aceitar outro pedido para esse dia.
    // Pagamento único (sem sinal): só nos 6 dias antes do prazo.
    if (b.pendingDepositPaymentId != null && dd != null && dd.isAfter(now) &&
        (!b.depositIsFull || !now.isBefore(dd.subtract(const Duration(days: 6))))) {
      due.add(_Due(b, b.pendingDepositPaymentId!, true, b.depositAmount ?? 0, dd));
    }
    final fd = b.finalPaymentDueAt;
    if (b.pendingFinalPaymentId != null && fd != null && fd.isAfter(now) && b.finalPaymentOpen) {
      due.add(_Due(b, b.pendingFinalPaymentId!, false, b.finalPaymentAmount ?? 0, fd));
    }
  }
  if (due.isEmpty || !context.mounted) return;
  due.sort((a, b) => a.due.compareTo(b.due));
  final d = due.first;
  double pct = 0;
  try {
    final cfg = d.booking.partnerId == null
        ? await ref.read(organizerFeeConfigProvider.future)
        : await ref.read(organizerFeeForPartnerProvider(d.booking.partnerId!).future);
    pct = cfg.effectivePct(d.booking.amount);
  } catch (_) {}
  if (!context.mounted) return;
  final pay = await showIslandSheet<bool>(
    // Reserva/pagamento: sair pergunta antes (DESIGN.md §6.1).
    confirmExit: true,
    context: context,
    isScrollControlled: true,
    builder: (_) => _PaymentDueSheet(due: d, total: amountWithCommission(d.amount, pct)),
  );
  if (pay == true && context.mounted) await openPaymentFlow(context, ref, d.paymentId);
}

class _PaymentDueSheet extends StatelessWidget {
  final _Due due;
  final double total;
  const _PaymentDueSheet({required this.due, required this.total});

  @override
  Widget build(BuildContext context) {
    final tone = toneForDue(due.due);
    final urgent = tone == AlertTone.urgent;
    final full = due.deposit && due.booking.depositIsFull;
    final what = full ? ' a reserva' : due.deposit ? ' o sinal' : ' o resto';
    final now = DateTime.now();
    final days = DateTime(due.due.year, due.due.month, due.due.day)
        .difference(DateTime(now.year, now.month, now.day))
        .inDays;
    final headline = urgent
        ? 'Último aviso: paga$what'
        : full
            ? 'Já podes pagar'
            : due.deposit
                ? 'Falta pagar o sinal'
                : 'Já podes pagar o resto';
    final sub = urgent
        ? 'Até ${payDay(due.due)} · senão a reserva é cancelada'
        : due.deposit && !full && days > 6
            ? 'Até ${payDay(due.due)} · a data só fica tua quando pagares'
            : 'Até ${payDay(due.due)} · faltam $days ${days == 1 ? 'dia' : 'dias'}';
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text(full ? 'Pagar a reserva' : due.deposit ? 'Pagar o sinal' : 'Pagar o resto',
            style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 4),
        Text(due.booking.partnerName, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        const SizedBox(height: 16),
        AlertOutline(
          tone: tone,
          radius: 22,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          child: Row(children: [
            Container(width: 8, height: 8, decoration: BoxDecoration(color: alertColor(tone), shape: BoxShape.circle)),
            const SizedBox(width: 10),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(headline, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
          ]),
        ),
        const SizedBox(height: 16),
        Row(children: [
          const Expanded(child: Text('A pagar', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
          Text(euros(total, cents: true), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        const SizedBox(height: 6),
        Text(
          due.deposit && !full
              ? 'Paga já para garantir a data: até pagares, o parceiro pode aceitar outro pedido para esse dia. Com cartão, o sinal fica cativo 48 h.'
              : 'Inclui a taxa de serviço. Sem pagamento até ${payDay(due.due)}, a reserva é cancelada.',
          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
        ),
        const SizedBox(height: 20),
        Row(children: [
          Expanded(
            child: SnappyTap(
              onTap: () => Navigator.of(context).pop(false),
              child: Container(
                height: 52,
                alignment: Alignment.center,
                decoration: ShapeDecoration(
                  shape: const StadiumBorder(side: BorderSide(color: AppTheme.ink, width: 1.5)),
                  color: Colors.white,
                ),
                child: const Text('Mais tarde', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ),
          ),
          const SizedBox(width: 8),
          Expanded(
            flex: 2,
            child: SnappyTap(
              onTap: () => Navigator.of(context).pop(true),
              child: Container(
                height: 52,
                alignment: Alignment.center,
                decoration: const ShapeDecoration(shape: StadiumBorder(), color: AppTheme.ink),
                child: Text('Pagar ${euros(total, cents: true)}',
                    style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Colors.white)),
              ),
            ),
          ),
        ]),
      ]),
    );
  }
}
