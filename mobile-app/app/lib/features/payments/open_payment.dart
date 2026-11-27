import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/chat/chat_helpers.dart';
import '../../core/home/home_providers.dart';
import '../../core/models/models.dart' show ChatConversation;
import '../../core/payments/payments.dart';
import '../../core/supabase/supabase_config.dart';

/// Abre o ecrã de pagamento (`/pay`) para um `payments.id`, de qualquer
/// sítio da app (tarefas, orçamento, pagamentos próximos, detalhe da
/// reserva) — 2026-10-19. Antes cada sítio mandava para as Reservas e o
/// casal tinha de procurar o botão.
/// [onPaid]: o que fazer quando fica pago, em vez do ecrã «Pago» (ex.: o
/// sinal pago ao pedir volta ao perfil do parceiro, que mostra o fim do
/// pedido com a estrela de parabéns).
/// [step]: passo do popup quando o pagamento vem depois de outro passo
/// (p. ex. «2 DE 2» depois dos extras); devolve `'back'` se se tocou no
/// voltar.
/// [methods]: só estas formas de pagar (p. ex. só o cartão, quando já se
/// escolheu no popup da reserva).
Future<Object?> openPaymentFlow(BuildContext context, WidgetRef ref, String paymentId,
    {void Function(BuildContext context)? onPaid, (int, int)? step, List<PayMethod>? methods}) async {
  Map<String, dynamic>? row;
  try {
    row = await supabase
        .from('payments')
        .select('id, type, status, amount, partner_id, bookings(total_amount, wedding_id), partner_profiles(business_name)')
        .eq('id', paymentId)
        .maybeSingle();
  } catch (_) {}
  if (!context.mounted) return null;
  if (row == null) {
    // Nunca a página das reservas (pedido 2026-11-22): fica onde está.
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Não foi possível abrir o pagamento. Tenta outra vez.')),
    );
    return null;
  }
  if (row['status'] != 'pending') {
    ref.invalidate(coupleBookingsProvider);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Este pagamento já está feito.')),
    );
    return null;
  }
  // Percentagem efetiva da reserva (escalões do organizador, migração 127).
  double pct = 0;
  try {
    final total = ((row['bookings'] as Map?)?['total_amount'] as num?)?.toDouble() ?? (row['amount'] as num).toDouble();
    final pid = row['partner_id'] as String?;
    final cfg = pid == null
        ? await ref.read(organizerFeeConfigProvider.future)
        : await ref.read(organizerFeeForPartnerProvider(pid).future);
    pct = cfg.effectivePct(total);
  } catch (_) {}
  if (!context.mounted) return null;
  final partner = (row['partner_profiles'] as Map?)?['business_name'] as String? ?? 'Parceiro';
  final r = await context.push<Object?>(
    '/pay',
    extra: PayArgs(
      paymentId: paymentId,
      partnerName: partner,
      kind: row['type'] as String,
      amount: amountWithCommission((row['amount'] as num).toDouble(), pct),
      baseAmount: (row['amount'] as num).toDouble(),
      onPaid: onPaid,
      step: step,
      methods: methods,
      onChat: _chatOpener(
        eventId: (row['bookings'] as Map?)?['wedding_id'] as String?,
        partnerId: row['partner_id'] as String?,
        partnerName: partner,
      ),
    ),
  );
  ref.invalidate(coupleBookingsProvider);
  return r;
}

/// Tarefas "Pagar sinal/pagamento final — …" guardam o `payments.id` em
/// `source_entity_id` (`task_engine_controller.dart`).
bool isPaymentTask(String? category, String? sourceEntityId) =>
    category == 'pagamentos' && sourceEntityId != null;

/// Abre a conversa com o parceiro a partir da folha de pagamento.
void Function(BuildContext)? _chatOpener({String? eventId, String? partnerId, required String partnerName}) {
  if (eventId == null || partnerId == null) return null;
  return (context) async {
    final router = GoRouter.of(context);
    try {
      final id = await getOrCreateConversation(eventId: eventId, partnerId: partnerId);
      final c = ChatConversation(id: id, eventId: eventId, partnerId: partnerId, name: partnerName, avatarSeed: partnerId);
      if (router.canPop()) router.pop();
      router.push('/chat/$id', extra: c);
    } catch (_) {
      if (router.canPop()) router.pop();
      router.push('/chat');
    }
  };
}
