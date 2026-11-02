import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException, PostgrestException;

import '../../shared/public_link.dart';
import '../supabase/supabase_config.dart';

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
        'not_found' => 'Este evento já não está disponível.',
        _ => 'Não foi possível abrir o pagamento. Tenta novamente.',
      };
}

Future<String> createTicketCheckoutUrl({required String weddingId, required int quantity}) async {
  final success = kIsWeb ? publicLink('/bilhete/{TICKET_ID}') : 'anossa://bilhete/{TICKET_ID}';
  final cancel = kIsWeb ? publicLink('/evento/$weddingId') : 'anossa://payment-cancel';
  try {
    final res = await supabase.functions.invoke('create-ticket-checkout', body: {
      'action': 'checkout',
      'wedding_id': weddingId,
      'quantity': quantity,
      'success_url': success,
      'cancel_url': cancel,
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
  const TicketSummary({this.sold = 0, this.gross = 0, this.platformFee = 0, this.stripeFee = 0, this.net = 0});
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
