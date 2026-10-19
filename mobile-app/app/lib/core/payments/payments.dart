import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException, FunctionResponse;

import '../supabase/supabase_config.dart';
import '../home/home_providers.dart' show CheckoutUnavailable;

/// Métodos do ecrã de seleção (têm de estar ativos na conta Stripe).
enum PayMethod {
  card('card', 'Cartão', 'Visa, Mastercard · Apple Pay e Google Pay'),
  mbWay('mb_way', 'MB WAY', 'Recebes o pedido na app MB WAY e aprovas'),
  multibanco('multibanco', 'Multibanco', 'Referência para pagar no multibanco ou homebanking');

  final String code;
  final String label;
  final String hint;
  const PayMethod(this.code, this.label, this.hint);
}

/// O que o ecrã de pagamento precisa de saber, vindo de quem o abre.
class PayArgs {
  final String paymentId;
  final String partnerName;

  /// `deposit` ou `final_payment`.
  final String kind;

  /// Valor a cobrar (já com a comissão) — só para mostrar antes de criar
  /// o pagamento; depois vale o valor devolvido pela Stripe.
  final double amount;

  const PayArgs({
    required this.paymentId,
    required this.partnerName,
    required this.kind,
    required this.amount,
  });

  String get title => kind == 'deposit' ? 'Sinal' : 'Restante';
}

class MultibancoRef {
  final String entity;
  final String reference;
  final DateTime? expiresAt;
  final int? amountCents;
  const MultibancoRef({required this.entity, required this.reference, this.expiresAt, this.amountCents});

  static MultibancoRef? fromJson(Object? j, {int? amountCents}) {
    if (j is! Map) return null;
    final e = j['entity']?.toString();
    final r = j['reference']?.toString();
    if (e == null || r == null) return null;
    final exp = j['expires_at'];
    return MultibancoRef(
      entity: e,
      reference: r,
      expiresAt: exp is num ? DateTime.fromMillisecondsSinceEpoch(exp.toInt() * 1000) : null,
      amountCents: (j['amount_cents'] as num?)?.toInt() ?? amountCents,
    );
  }
}

class PaymentIntentInfo {
  final String clientSecret;
  final String publishableKey;
  final int amountCents;
  final String? email;
  final MultibancoRef? multibanco;
  const PaymentIntentInfo({
    required this.clientSecret,
    required this.publishableKey,
    required this.amountCents,
    this.email,
    this.multibanco,
  });
}

/// `create-payment-intent`: um PaymentIntent para o método escolhido.
/// Erros legíveis chegam como [CheckoutUnavailable] (`method_unavailable`,
/// `partner_not_onboarded`, `invalid_state`, `processing`, `not_configured`).
Future<PaymentIntentInfo> createPaymentIntent(String paymentId, PayMethod method) async {
  final FunctionResponse res;
  try {
    res = await supabase.functions.invoke(
      'create-payment-intent',
      body: {'payment_id': paymentId, 'method': method.code},
    );
  } on FunctionException catch (e) {
    final d = e.details;
    final code = d is Map ? d['error'] as String? : null;
    throw CheckoutUnavailable(code ?? 'unknown_error');
  }
  final d = res.data as Map<String, dynamic>;
  final cents = (d['amount_cents'] as num).toInt();
  return PaymentIntentInfo(
    clientSecret: d['client_secret'] as String,
    publishableKey: d['publishable_key'] as String,
    amountCents: cents,
    email: d['email'] as String?,
    multibanco: MultibancoRef.fromJson(d['multibanco'], amountCents: cents),
  );
}

/// Estado real de um pagamento: pergunta à Stripe (`sync-checkout-payment`,
/// confirma se já foi pago) e lê a base de dados.
/// Devolve `paid`, `processing`, `awaiting_multibanco` (com [MultibancoRef]) ou `open`.
Future<(String, MultibancoRef?)> paymentState(String paymentId) async {
  Map? state;
  try {
    final res = await supabase.functions.invoke('sync-checkout-payment', body: {
      'payment_ids': [paymentId],
    });
    final d = res.data;
    if (d is Map && d['states'] is Map) state = (d['states'] as Map)[paymentId] as Map?;
  } catch (_) {}
  try {
    final row = await supabase.from('payments').select('status').eq('id', paymentId).maybeSingle();
    if (row?['status'] == 'paid') return ('paid', null);
  } catch (_) {}
  final s = state?['state'] as String? ?? 'open';
  if (s == 'awaiting_multibanco') return (s, MultibancoRef.fromJson(state));
  return (s, null);
}

String payErrorMessage(String code) => switch (code) {
  'partner_not_onboarded' =>
    'Este parceiro ainda não ativou os pagamentos. Fica por pagar até ele concluir a configuração.',
  'invalid_state' => 'Este pagamento já está feito.',
  'processing' => 'Já há um pagamento a ser processado. Aguarda uns minutos.',
  'method_unavailable' => 'Este método ainda não está disponível. Escolhe outro.',
  'not_configured' => 'Os pagamentos na app ainda estão a ser configurados.',
  _ => 'Não foi possível iniciar o pagamento. Tenta novamente.',
};
