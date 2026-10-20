import '../supabase/supabase_config.dart';

/// Reembolso automático de reservas canceladas (pedido do utilizador,
/// 2026-10-20). Quem decide se há direito a reembolso é a base de dados no
/// momento do cancelamento (`cancel_booking_by_couple()` /
/// `cancel_booking_by_partner()`); a Edge Function
/// `refund-cancelled-booking` só executa, e é idempotente.
/// - casal cancela com `cancellation_penalty_days` (30) ou mais dias de
///   antecedência → devolve tudo, comissão incluída;
/// - parceiro cancela → devolve sempre.

/// Reservas já vistas como sem direito a reembolso nesta sessão — não
/// voltar a perguntar sempre que a lista recarrega.
final Set<String> _notEligible = {};

/// Pede o reembolso de uma reserva cancelada. Nunca falha.
/// Devolve o número de pagamentos reembolsados.
Future<int> requestBookingRefund(String bookingId) async {
  if (_notEligible.contains(bookingId)) return 0;
  try {
    final res = await supabase.functions.invoke('refund-cancelled-booking', body: {'booking_id': bookingId});
    final data = res.data;
    if (data is Map) {
      if (data['skipped'] == 'not_eligible') _notEligible.add(bookingId);
      final refunded = data['refunded'];
      return refunded is List ? refunded.length : 0;
    }
  } catch (_) {}
  return 0;
}

/// Plano B: reservas canceladas com pagamentos ainda "pagos" (a primeira
/// chamada falhou ou o cancelamento foi feito antes desta funcionalidade).
Future<void> retryPendingRefunds({String? coupleId, String? partnerId}) async {
  try {
    var q = supabase
        .from('payments')
        .select('booking_id, bookings!inner(status, couple_id, partner_id)')
        .eq('status', 'paid')
        .inFilter('bookings.status', ['cancelled_by_couple', 'cancelled_by_partner']);
    if (coupleId != null) q = q.eq('bookings.couple_id', coupleId);
    if (partnerId != null) q = q.eq('bookings.partner_id', partnerId);
    final rows = await q.limit(20);
    final ids = {for (final r in rows as List) r['booking_id'] as String};
    for (final id in ids) {
      await requestBookingRefund(id);
    }
  } catch (_) {}
}

/// O que é preciso para dizer ao organizador, antes de cancelar, o que lhe
/// é devolvido (regras de 2026-10-21, migração 112):
/// - sinal: só nas primeiras [windowHours] horas depois de o pagar, e só se
///   o parceiro o marcou como reembolsável;
/// - restante: se faltarem pelo menos [penaltyDays] dias para o evento.
/// O servidor decide na mesma — isto é só o aviso.
class RefundInfo {
  final bool depositRefundable;
  final DateTime? depositPaidAt;
  final bool finalPaid;
  final int penaltyDays;
  final int windowHours;
  const RefundInfo({
    required this.depositRefundable,
    required this.depositPaidAt,
    required this.finalPaid,
    required this.penaltyDays,
    required this.windowHours,
  });
}

Future<RefundInfo> bookingRefundInfo(String bookingId) async {
  var penaltyDays = 30;
  var windowHours = 48;
  try {
    final row = await supabase.from('platform_settings').select().eq('id', 1).single();
    penaltyDays = (row['cancellation_penalty_days'] as num?)?.toInt() ?? 30;
    windowHours = (row['deposit_refund_window_hours'] as num?)?.toInt() ?? 48;
  } catch (_) {}
  var refundable = true;
  DateTime? depositPaidAt;
  var finalPaid = false;
  try {
    final row = await supabase
        .from('bookings')
        .select('proposals(deposit_refundable), payments(type, status, paid_at, updated_at)')
        .eq('id', bookingId)
        .maybeSingle();
    final p = row?['proposals'];
    final m = p is List ? (p.isEmpty ? null : p.first) : p;
    refundable = (m as Map?)?['deposit_refundable'] as bool? ?? true;
    for (final pay in ((row?['payments'] as List?) ?? const [])) {
      if (pay['status'] != 'paid') continue;
      if (pay['type'] == 'deposit') {
        final at = DateTime.tryParse((pay['paid_at'] ?? pay['updated_at'] ?? '') as String);
        if (at != null) depositPaidAt = at;
      } else {
        finalPaid = true;
      }
    }
  } catch (_) {}
  return RefundInfo(
    depositRefundable: refundable,
    depositPaidAt: depositPaidAt,
    finalPaid: finalPaid,
    penaltyDays: penaltyDays,
    windowHours: windowHours,
  );
}

/// Texto do aviso ao cancelar, do lado do organizador.
String coupleCancelRefundNote({required DateTime eventDate, required RefundInfo info, DateTime? now}) {
  final t = now ?? DateTime.now();
  final lines = <String>[];
  final paidAt = info.depositPaidAt;
  if (paidAt != null) {
    final deadline = paidAt.add(Duration(hours: info.windowHours));
    if (!info.depositRefundable) {
      lines.add('O parceiro definiu o sinal como não reembolsável: fica com ele.');
    } else if (t.isBefore(deadline)) {
      final left = deadline.difference(t);
      final h = left.inHours;
      final when = h >= 1 ? '$h h' : '${left.inMinutes.clamp(1, 59)} min';
      lines.add('Ainda estás dentro das ${info.windowHours} h depois de pagar o sinal (faltam $when): o sinal é devolvido, comissão incluída.');
    } else {
      lines.add('Já passaram mais de ${info.windowHours} h desde que pagaste o sinal: o sinal fica com o parceiro.');
    }
  }
  if (info.finalPaid) {
    final days = DateTime(eventDate.year, eventDate.month, eventDate.day)
        .difference(DateTime(t.year, t.month, t.day))
        .inDays;
    lines.add(days >= info.penaltyDays
        ? 'Faltam $days dias para o evento: o restante que pagaste é devolvido.'
        : 'Faltam menos de ${info.penaltyDays} dias para o evento: o restante já pago não é devolvido.');
  }
  if (lines.isEmpty) return '';
  return '\n\n${lines.join('\n')}${lines.any((l) => l.contains('devolvido,') || l.contains('é devolvido')) ? '\nOs reembolsos chegam em 5 a 10 dias úteis.' : ''}';
}
