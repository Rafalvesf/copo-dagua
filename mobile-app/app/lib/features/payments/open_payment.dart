import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/home/home_providers.dart';
import '../../core/payments/payments.dart';
import '../../core/supabase/supabase_config.dart';

/// Abre o ecrã de pagamento (`/pay`) para um `payments.id`, de qualquer
/// sítio da app (tarefas, orçamento, pagamentos próximos, detalhe da
/// reserva) — 2026-10-19. Antes cada sítio mandava para as Reservas e o
/// casal tinha de procurar o botão.
Future<void> openPaymentFlow(BuildContext context, WidgetRef ref, String paymentId) async {
  Map<String, dynamic>? row;
  try {
    row = await supabase
        .from('payments')
        .select('id, type, status, amount, partner_profiles(business_name)')
        .eq('id', paymentId)
        .maybeSingle();
  } catch (_) {}
  if (!context.mounted) return;
  if (row == null) {
    context.push('/bookings');
    return;
  }
  if (row['status'] != 'pending') {
    ref.invalidate(coupleBookingsProvider);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Este pagamento já está feito.')),
    );
    return;
  }
  double pct = 0;
  try {
    pct = await ref.read(platformCommissionPercentageProvider.future);
  } catch (_) {}
  if (!context.mounted) return;
  final partner = (row['partner_profiles'] as Map?)?['business_name'] as String? ?? 'Parceiro';
  await context.push(
    '/pay',
    extra: PayArgs(
      paymentId: paymentId,
      partnerName: partner,
      kind: row['type'] as String,
      amount: amountWithCommission((row['amount'] as num).toDouble(), pct),
    ),
  );
  ref.invalidate(coupleBookingsProvider);
}

/// Tarefas "Pagar sinal/pagamento final — …" guardam o `payments.id` em
/// `source_entity_id` (`task_engine_controller.dart`).
bool isPaymentTask(String? category, String? sourceEntityId) =>
    category == 'pagamentos' && sourceEntityId != null;
