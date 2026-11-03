import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException, PostgrestException;

import '../../shared/public_link.dart';
import '../supabase/supabase_config.dart';
import 'events_providers.dart';

/// Bilhetes para eventos públicos pagos (migração 149). Quem compra paga
/// o preço anunciado; o organizador recebe-o menos a comissão de 4% e a
/// taxa da Stripe.

class TicketError implements Exception {
  final String code;
  const TicketError(this.code);

  String get message => switch (code) {
        'organizer_not_onboarded' => 'O organizador ainda não ativou a venda de bilhetes. Tenta mais tarde.',
        'not_paid_event' => 'Este evento é grátis.',
        'own_event' => 'É o teu evento.',
        'already_linked' => 'Este convite já está associado a outra conta.',
        'not_found' => 'Este evento já não está disponível.',
        _ => 'Não foi possível abrir o pagamento. Tenta novamente.',
      };
}

/// [code] / [inviteToken]: evento privado e pago (migração 153) — só se
/// compra com o código do evento ou o link individual.
Future<String> createTicketCheckoutUrl({required String weddingId, required int quantity, String? code, String? inviteToken}) async {
  final success = kIsWeb ? publicLink('/bilhete/{TICKET_ID}') : 'anossa://bilhete/{TICKET_ID}';
  final cancel = kIsWeb ? publicLink('/evento/$weddingId') : 'anossa://payment-cancel';
  try {
    final res = await supabase.functions.invoke('create-ticket-checkout', body: {
      'action': 'checkout',
      'wedding_id': weddingId,
      'quantity': quantity,
      'success_url': success,
      'cancel_url': cancel,
      if (code != null) 'code': code,
      if (inviteToken != null) 'invite_token': inviteToken,
    });
    final url = (res.data as Map?)?['url'] as String?;
    if (url == null) throw const TicketError('unknown');
    return url;
  } on FunctionException catch (e) {
    final d = e.details;
    throw TicketError(d is Map ? (d['error'] as String? ?? 'unknown') : 'unknown');
  }
}

/// Ao voltar da Stripe: `paid` (já entrou no evento), `open` ou erro.
Future<({String status, String? weddingId})> syncTicket(String ticketId) async {
  final res = await supabase.functions.invoke('create-ticket-checkout', body: {'action': 'sync', 'ticket_id': ticketId});
  final m = (res.data as Map).cast<String, dynamic>();
  return (status: m['status'] as String? ?? 'open', weddingId: m['wedding_id'] as String?);
}

class TicketSummary {
  final int sold;
  final double gross;
  final double platformFee;
  final double stripeFee;
  final double net;
  /// Reembolsos (migração 152): bilhetes, valor devolvido e taxas que o
  /// organizador pagou por eles.
  final int refunded;
  final double refundedAmount;
  final double refundedFees;
  const TicketSummary({
    this.sold = 0,
    this.gross = 0,
    this.platformFee = 0,
    this.stripeFee = 0,
    this.net = 0,
    this.refunded = 0,
    this.refundedAmount = 0,
    this.refundedFees = 0,
  });
}

final ticketSummaryProvider = FutureProvider.family<TicketSummary, String>((ref, weddingId) async {
  try {
    final rows = await supabase.rpc('event_ticket_summary', params: {'p_wedding': weddingId}) as List;
    if (rows.isEmpty) return const TicketSummary();
    final r = (rows.first as Map).cast<String, dynamic>();
    double n(String k) => (r[k] as num?)?.toDouble() ?? 0;
    return TicketSummary(
      sold: (r['sold'] as num?)?.toInt() ?? 0,
      gross: n('gross'),
      platformFee: n('platform_fee'),
      stripeFee: n('stripe_fee'),
      net: n('net'),
      refunded: (r['refunded'] as num?)?.toInt() ?? 0,
      refundedAmount: n('refunded_amount'),
      refundedFees: n('refunded_fees'),
    );
  } on PostgrestException {
    return const TicketSummary();
  }
});

/// Bilhetes que eu já comprei para um evento.
final myTicketsProvider = FutureProvider.family<int, String>((ref, weddingId) async {
  try {
    return (await supabase.rpc('my_event_tickets', params: {'p_wedding': weddingId}) as num?)?.toInt() ?? 0;
  } on PostgrestException {
    return 0;
  }
});

String euroLabel(double v) {
  final s = v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(2).replaceAll('.', ',');
  return '$s €';
}

// ---------- Reembolsos e cancelamento (migração 152) ----------

class EventTicketRow {
  final String id;
  final String buyerName;
  final int quantity;
  final double amount;
  final bool refunded;
  final DateTime? paidAt;
  /// Entrada registada pelo QR (migração 158).
  final DateTime? checkedInAt;
  const EventTicketRow({
    required this.id,
    required this.buyerName,
    required this.quantity,
    required this.amount,
    required this.refunded,
    this.paidAt,
    this.checkedInAt,
  });
}

final eventTicketListProvider = FutureProvider.family<List<EventTicketRow>, String>((ref, weddingId) async {
  try {
    final rows = await supabase.rpc('event_ticket_list', params: {'p_wedding': weddingId}) as List;
    return [
      for (final r in rows.cast<Map<String, dynamic>>())
        EventTicketRow(
          id: r['id'] as String,
          buyerName: r['buyer_name'] as String? ?? 'Convidado',
          quantity: (r['quantity'] as num?)?.toInt() ?? 1,
          amount: (r['amount'] as num?)?.toDouble() ?? 0,
          refunded: r['status'] == 'refunded',
          paidAt: DateTime.tryParse('${r['paid_at'] ?? ''}')?.toLocal(),
          checkedInAt: DateTime.tryParse('${r['checked_in_at'] ?? ''}')?.toLocal(),
        ),
    ];
  } catch (_) {
    // Antes da migração 152.
    return const [];
  }
});

class RefundResult {
  final int refunded;
  final int failed;
  const RefundResult(this.refunded, this.failed);
}

Future<RefundResult> _refundCall(Map<String, dynamic> body) async {
  try {
    final res = await supabase.functions.invoke('refund-event-tickets', body: body);
    final m = (res.data as Map?)?.cast<String, dynamic>() ?? const {};
    return RefundResult((m['refunded'] as num?)?.toInt() ?? 0, (m['failed'] as num?)?.toInt() ?? 0);
  } on FunctionException catch (e) {
    final d = e.details;
    throw TicketError(d is Map ? (d['error'] as String? ?? 'unknown') : 'unknown');
  }
}

/// Reembolsa um bilhete (valor total a quem comprou; as taxas ficam com o organizador).
Future<RefundResult> refundTicket(String ticketId, {String? reason}) =>
    _refundCall({'action': 'refund_ticket', 'ticket_id': ticketId, if (reason != null) 'reason': reason});

/// Cancela o evento pago: sai do Descobrir e reembolsa todos os bilhetes.
Future<RefundResult> cancelPaidEvent(String weddingId, {String? reason}) =>
    _refundCall({'action': 'cancel_event', 'wedding_id': weddingId, if (reason != null) 'reason': reason});

// ---------- Eventos pagos com código ou link (migração 153) ----------

/// O servidor recusou a entrada num evento pago sem bilhete.
bool isTicketRequired(Object e) => e is PostgrestException && e.message.contains('ticket_required');

/// Dados do evento para a folha de compra (por id, código ou link individual).
Future<PublicEvent?> ticketEventPreview({String? weddingId, String? code, String? inviteToken}) async {
  try {
    final rows = await supabase.rpc('ticket_event_preview', params: {
      'p_wedding': weddingId,
      'p_code': code,
      'p_token': inviteToken,
    }) as List;
    if (rows.isEmpty) return null;
    return PublicEvent.fromRow((rows.first as Map).cast<String, dynamic>());
  } on PostgrestException {
    return null;
  }
}
