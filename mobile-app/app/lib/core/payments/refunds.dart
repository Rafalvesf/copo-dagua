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

/// Dias mínimos de antecedência para o casal cancelar com reembolso
/// (`platform_settings.cancellation_penalty_days`, editável no admin).
Future<int> cancellationPenaltyDays() async {
  try {
    final row = await supabase.from('platform_settings').select('cancellation_penalty_days').eq('id', 1).single();
    return (row['cancellation_penalty_days'] as num?)?.toInt() ?? 30;
  } catch (_) {
    return 30;
  }
}

/// Texto do aviso ao cancelar, do lado do casal. [depositPaid] = a reserva
/// já está confirmada (sinal pago).
String coupleCancelRefundNote({required DateTime eventDate, required bool depositPaid, required int penaltyDays}) {
  if (!depositPaid) return '';
  final today = DateTime.now();
  final days = DateTime(eventDate.year, eventDate.month, eventDate.day)
      .difference(DateTime(today.year, today.month, today.day))
      .inDays;
  if (days >= penaltyDays) {
    return '\n\nFaltam $days dias para o evento: o que pagaste é reembolsado automaticamente, comissão incluída (chega em 5 a 10 dias úteis).';
  }
  return '\n\nFaltam menos de $penaltyDays dias para o evento: o sinal fica com o parceiro. Se já pagaste o restante, esse valor é devolvido automaticamente.';
}
