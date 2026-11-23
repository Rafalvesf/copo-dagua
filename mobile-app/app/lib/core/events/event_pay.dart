import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException, PostgrestException;

import '../supabase/supabase_config.dart';

/// QR de pagamento no evento (migração 229, 2026-11-23). Sem saldo: o QR só
/// identifica quem paga e o servidor cobra na hora o cartão guardado na
/// Stripe. O QR é o da conta (migração 228). Limites: 50 € por cobrança, 300 € por pessoa e evento; acima de
/// 25 € quem paga confirma na app.

class SavedCard {
  final String brand;
  final String last4;
  const SavedCard({required this.brand, required this.last4});

  factory SavedCard.fromJson(Map j) => SavedCard(brand: '${j['brand'] ?? 'cartão'}', last4: '${j['last4'] ?? '••••'}');

  String get label => '${switch (brand) {
        'visa' => 'Visa',
        'mastercard' => 'Mastercard',
        'amex' => 'American Express',
        _ => 'Cartão',
      }} •••• $last4';
}

class EventPayment {
  final String id;
  final String merchant;
  final String? description;
  final int amountCents;
  final String status;
  final DateTime? createdAt;
  const EventPayment({required this.id, required this.merchant, this.description, required this.amountCents, required this.status, this.createdAt});

  bool get needsMe => status == 'awaiting_payer' || status == 'requires_action';
}

class EventPayState {
  final bool enabled;
  final SavedCard? card;
  final int spentCents;
  final List<EventPayment> payments;
  const EventPayState({this.enabled = false, this.card, this.spentCents = 0, this.payments = const []});
}

String euros(int cents) => '${(cents / 100).toStringAsFixed(2).replaceAll('.', ',')} €';

/// O que quem paga vê neste evento.
Future<EventPayState> fetchEventPay(String eventId) async {
  try {
    final r = await supabase.rpc('my_event_pay', params: {'p_wedding': eventId});
    if (r is! Map) return const EventPayState();
    return EventPayState(
      enabled: r['enabled'] == true,
      card: r['card'] is Map ? SavedCard.fromJson(r['card'] as Map) : null,
      spentCents: (r['spent_cents'] as num?)?.toInt() ?? 0,
      payments: [
        for (final p in (r['payments'] as List? ?? const []))
          if (p is Map)
            EventPayment(
              id: '${p['id']}',
              merchant: '${p['merchant'] ?? ''}',
              description: p['description'] as String?,
              amountCents: (p['amount_cents'] as num?)?.toInt() ?? 0,
              status: '${p['status']}',
              createdAt: DateTime.tryParse('${p['created_at'] ?? ''}')?.toLocal(),
            ),
      ],
    );
  } on PostgrestException {
    // Antes da migração 229.
    return const EventPayState();
  }
}

/// Mostra o atalho no início do convidado só quando há quem cobre.
final eventPayEnabledProvider = FutureProvider.autoDispose.family<bool, String>((ref, eventId) async {
  return (await fetchEventPay(eventId)).enabled;
});

/// Chama a Edge Function `event-pay`. Erros vêm como `{error}`.
Future<Map<String, dynamic>> eventPay(Map<String, dynamic> body) async {
  try {
    final res = await supabase.functions.invoke('event-pay', body: body);
    final d = res.data;
    return d is Map ? d.cast<String, dynamic>() : {'error': 'unknown_error'};
  } on FunctionException catch (e) {
    final d = e.details;
    return d is Map ? d.cast<String, dynamic>() : {'error': 'unknown_error'};
  } catch (_) {
    return {'error': 'network'};
  }
}

/// Texto para quem cobra, a partir do `result` de `charge`.
String chargeErrorText(String result) => switch (result) {
      'not_found' => 'Esta pessoa não vai a este evento.',
      'expired' => 'A leitura expirou (10 minutos). Lê o QR outra vez.',
      'already_charged' => 'Já cobraste nesta leitura. Lê o QR outra vez para outra cobrança.',
      'not_merchant' => 'Só os parceiros com reserva neste evento e os organizadores podem cobrar.',
      'over_charge_limit' => 'O máximo por cobrança é 50 €.',
      'over_event_limit' => 'Esta pessoa chegou ao limite de 300 € neste evento.',
      'invalid_amount' => 'O valor mínimo é 0,50 €.',
      'no_card' => 'Esta pessoa não tem cartão guardado.',
      _ => 'Não foi possível cobrar. Tenta outra vez.',
    };
