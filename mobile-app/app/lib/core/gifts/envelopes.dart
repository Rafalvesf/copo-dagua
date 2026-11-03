import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Envelope digital (migração 156, pedido 2026-11-03): o convidado transfere
/// diretamente para o IBAN dos anfitriões (o dinheiro não passa pela
/// À Nossa!, sem comissão) e a app guarda o "envelope" — quem, quanto e a
/// mensagem — para os anfitriões confirmarem e agradecerem.
class GiftEnvelope {
  final String id;
  final String guestName;
  final double amount;
  final String? message;
  final bool received;
  final bool thanked;
  final DateTime createdAt;
  const GiftEnvelope({
    required this.id,
    required this.guestName,
    required this.amount,
    this.message,
    this.received = false,
    this.thanked = false,
    required this.createdAt,
  });

  factory GiftEnvelope.fromRow(Map<String, dynamic> r) => GiftEnvelope(
        id: r['id'] as String,
        guestName: r['guest_name'] as String? ?? 'Convidado',
        amount: (r['amount'] as num?)?.toDouble() ?? 0,
        message: r['message'] as String?,
        received: r['received'] == true,
        thanked: r['thanked'] == true,
        createdAt: DateTime.tryParse('${r['created_at']}')?.toLocal() ?? DateTime.now(),
      );
}

/// Todos os envelopes do evento (anfitriões). Vazio sem a migração.
final weddingEnvelopesProvider = FutureProvider.family<List<GiftEnvelope>, String>((ref, weddingId) async {
  try {
    final rows = await supabase
        .from('gift_envelopes')
        .select()
        .eq('wedding_id', weddingId)
        .order('created_at', ascending: false);
    return [for (final r in (rows as List).cast<Map<String, dynamic>>()) GiftEnvelope.fromRow(r)];
  } on PostgrestException {
    return const [];
  }
});

/// Os envelopes que eu (convidado) já ofereci neste evento.
final myEnvelopesProvider = FutureProvider.family<List<GiftEnvelope>, String>((ref, weddingId) async {
  final uid = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (uid == null) return const [];
  try {
    final rows = await supabase
        .from('gift_envelopes')
        .select()
        .eq('wedding_id', weddingId)
        .eq('guest_profile_id', uid)
        .order('created_at', ascending: false);
    return [for (final r in (rows as List).cast<Map<String, dynamic>>()) GiftEnvelope.fromRow(r)];
  } on PostgrestException {
    return const [];
  }
});

Future<void> sendGiftEnvelope({required String weddingId, required double amount, String? message}) async {
  await supabase.rpc('send_gift_envelope', params: {'p_wedding': weddingId, 'p_amount': amount, 'p_message': message});
}

Future<void> updateGiftEnvelope(String id, {bool? received, bool? thanked}) async {
  await supabase.rpc('update_gift_envelope', params: {'p_id': id, 'p_received': received, 'p_thanked': thanked});
}

String envelopeEuros(double v) =>
    '${v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(2).replaceAll('.', ',')} €';
