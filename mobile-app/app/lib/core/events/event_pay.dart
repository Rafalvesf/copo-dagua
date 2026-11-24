import 'package:supabase_flutter/supabase_flutter.dart'
    show FunctionException, PostgresChangeEvent, PostgresChangeFilter, PostgresChangeFilterType, RealtimeChannel;

import '../../shared/public_link.dart';
import '../supabase/supabase_config.dart';

/// Pagar com QR no balcão (migração 229, 2026-11-23): o parceiro escreve o
/// valor e mostra um QR de uso único; quem paga lê-o e escolhe como pagar
/// (cartão, Apple Pay ou Google Pay). Sem saldo; sem taxa para quem paga.

String euros(int cents) => '${(cents / 100).toStringAsFixed(2).replaceAll('.', ',')} €';

/// O que vai no QR do pedido: abre «Pagar» na app de quem lê.
String payQrData(String code) => publicLink('/pagar/$code');

/// O que se leu com a câmara: o QR da conta de alguém (`/q/…`, migração
/// 228), um pedido de pagamento (`/pagar/…`) ou nada que a app conheça.
({String kind, String value})? parseScanned(String raw) {
  final m = RegExp(r'/(q|entrada|pagar)/([A-Za-z0-9.]+)').firstMatch(raw.trim());
  if (m == null) return null;
  return (kind: m.group(1) == 'pagar' ? 'pay' : 'person', value: m.group(2)!);
}

class PayRequest {
  final String id;
  final String code;
  final DateTime expiresAt;
  const PayRequest(this.id, this.code, this.expiresAt);
}

/// Novo pedido (o parceiro escreveu o valor). Erro: `not_onboarded`,
/// `not_partner`, `invalid_amount`, `error`.
Future<({PayRequest? request, String? error})> createPayRequest(int cents, {String? description}) async {
  try {
    final r = await supabase.rpc('create_pay_request', params: {'p_amount_cents': cents, 'p_description': description});
    if (r is Map && r['result'] == 'ok') {
      return (
        request: PayRequest('${r['id']}', '${r['code']}',
            DateTime.tryParse('${r['expires_at']}')?.toLocal() ?? DateTime.now().add(const Duration(minutes: 10))),
        error: null,
      );
    }
    return (request: null, error: r is Map ? '${r['result']}' : 'error');
  } catch (_) {
    return (request: null, error: 'error');
  }
}

Future<void> cancelPayRequest(String id) async {
  try {
    await supabase.rpc('cancel_pay_request', params: {'p_id': id});
  } catch (_) {}
}

/// O estado do pedido muda (pago) — para o ecrã do parceiro.
RealtimeChannel listenPayRequest(String id, void Function(String status) onStatus) {
  return supabase
      .channel('pay-request-$id')
      .onPostgresChanges(
        event: PostgresChangeEvent.update,
        schema: 'public',
        table: 'pay_requests',
        filter: PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: 'id', value: id),
        callback: (p) => onStatus('${p.newRecord['status']}'),
      )
      .subscribe();
}

void closeChannel(RealtimeChannel? c) {
  if (c != null) supabase.removeChannel(c);
}

class PayRequestInfo {
  /// ok, paid, used, expired, own_request, not_found, error.
  final String result;
  final String? id;
  final String merchant;
  final int amountCents;
  final String? description;
  const PayRequestInfo(this.result, {this.id, this.merchant = '', this.amountCents = 0, this.description});
}

Future<PayRequestInfo> payRequestInfo(String code) async {
  try {
    final r = await supabase.rpc('pay_request_info', params: {'p_code': code});
    if (r is! Map) return const PayRequestInfo('error');
    return PayRequestInfo(
      '${r['result']}',
      id: r['id'] as String?,
      merchant: '${r['merchant'] ?? ''}',
      amountCents: (r['amount_cents'] as num?)?.toInt() ?? 0,
      description: r['description'] as String?,
    );
  } catch (_) {
    return const PayRequestInfo('error');
  }
}

/// Edge Function `event-pay` (intent / sync). Erros vêm como `{error}`.
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

/// «Entrada» do parceiro: marcações de hoje e o cobrado hoje.
class PartnerToday {
  final List<({String event, String? number, int? people, int arrived})> bookings;
  final int chargedCents;
  final int chargedCount;
  const PartnerToday({this.bookings = const [], this.chargedCents = 0, this.chargedCount = 0});
}

Future<PartnerToday?> fetchPartnerToday() async {
  try {
    final r = await supabase.rpc('partner_today');
    if (r is! Map) return null;
    return PartnerToday(
      bookings: [
        for (final b in (r['bookings'] as List? ?? const []))
          if (b is Map)
            (
              event: '${b['event'] ?? 'Evento'}',
              number: b['booking_number'] as String?,
              people: (b['people'] as num?)?.toInt(),
              arrived: (b['arrived'] as num?)?.toInt() ?? 0,
            ),
      ],
      chargedCents: (r['charged_cents'] as num?)?.toInt() ?? 0,
      chargedCount: (r['charged_count'] as num?)?.toInt() ?? 0,
    );
  } catch (_) {
    return null;
  }
}
