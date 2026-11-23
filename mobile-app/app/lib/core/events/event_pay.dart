import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException, PostgrestException;

import '../../shared/public_link.dart';
import '../supabase/supabase_config.dart';

/// QR de pagamento no evento (migração 229, 2026-11-23). Sem saldo: o QR só
/// identifica quem paga e o servidor cobra na hora o cartão guardado na
/// Stripe. Limites: 50 € por cobrança, 300 € por pessoa e evento; acima de
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
  final bool codeValid;
  final List<EventPayment> payments;
  const EventPayState({this.enabled = false, this.card, this.spentCents = 0, this.codeValid = false, this.payments = const []});
}

String euros(int cents) => '${(cents / 100).toStringAsFixed(2).replaceAll('.', ',')} €';

/// O que quem paga vê. [code] = o código que o ecrã mostra agora (para
/// saber se já foi usado).
Future<EventPayState> fetchEventPay(String weddingId, {String? code}) async {
  try {
    final r = await supabase.rpc('my_event_pay', params: {'p_wedding': weddingId, 'p_code': code});
    if (r is! Map) return const EventPayState();
    return EventPayState(
      enabled: r['enabled'] == true,
      card: r['card'] is Map ? SavedCard.fromJson(r['card'] as Map) : null,
      spentCents: (r['spent_cents'] as num?)?.toInt() ?? 0,
      codeValid: r['code_valid'] == true,
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
final eventPayEnabledProvider = FutureProvider.autoDispose.family<bool, String>((ref, weddingId) async {
  return (await fetchEventPay(weddingId)).enabled;
});

/// Um QR de pagamento novo (os anteriores deixam de valer).
Future<({String code, String? error})> issuePayCode(String weddingId) async {
  try {
    final r = await supabase.rpc('issue_pay_token', params: {'p_wedding': weddingId});
    if (r is Map && r['result'] == 'ok' && r['code'] is String) return (code: r['code'] as String, error: null);
    return (code: '', error: r is Map ? '${r['result']}' : 'error');
  } on PostgrestException {
    return (code: '', error: 'error');
  }
}

/// O que vai no QR de pagamento: abre «Cobrar» na app de quem cobra.
String payQrData(String code) => publicLink('/pagar/$code');

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
      'not_found' => 'Este QR não é válido.',
      'used_or_expired' => 'Este QR já foi usado ou expirou. Pede para mostrar o novo.',
      'own_code' => 'Não podes cobrar a ti próprio.',
      'not_merchant' => 'Só os parceiros com reserva neste evento e os organizadores podem cobrar.',
      'over_charge_limit' => 'O máximo por cobrança é 50 €.',
      'over_event_limit' => 'Esta pessoa chegou ao limite de 300 € neste evento.',
      'invalid_amount' => 'O valor mínimo é 0,50 €.',
      'no_card' => 'Esta pessoa não tem cartão guardado.',
      'rate_limited' => 'Demasiados códigos errados. Espera uns minutos.',
      _ => 'Não foi possível cobrar. Tenta outra vez.',
    };
