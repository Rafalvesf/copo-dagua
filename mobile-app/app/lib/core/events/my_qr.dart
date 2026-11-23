import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../shared/public_link.dart';
import '../supabase/supabase_config.dart';

/// Um QR por conta (migração 228, 2026-11-23: "apenas um qr code para
/// todos os eventos … assim posso colocar na página principal"). O token é
/// assinado no servidor e muda a cada 30 s; o segredo nunca chega ao
/// telemóvel, por isso um screenshot deixa de servir passado ~1 minuto.
/// Quem o lê é sobretudo o parceiro (ex.: restaurante) para verificar a
/// marcação; também o organizador à entrada e quem cobra (migração 229).
class MyQr {
  final String token;
  final Duration refreshIn;
  final String? name;
  const MyQr({required this.token, required this.refreshIn, this.name});

  /// O que vai no QR: abre «Quem é» na app de quem lê.
  String get qrData => publicLink('/q/$token');
}

/// O QR desta janela. `null` sem rede (ou antes da migração 228).
Future<MyQr?> fetchMyQr() async {
  try {
    final r = await supabase.rpc('my_qr');
    if (r is! Map || r['token'] is! String) return null;
    return MyQr(
      token: r['token'] as String,
      refreshIn: Duration(seconds: ((r['refresh_in'] as num?)?.toInt() ?? 30).clamp(1, 30)),
      name: r['name'] as String?,
    );
  } catch (_) {
    return null;
  }
}

/// Uma coisa que liga a pessoa lida a quem leu.
class ScanItem {
  /// 'booking' (marcação do parceiro) ou 'entry' (evento que organizo).
  final String kind;
  final String weddingId;
  final String? bookingId;
  final String event;
  final DateTime? date;
  final String? bookingNumber;
  final int? people;
  final bool isPaid;
  final String? ticketStatus;
  final int quantity;
  final DateTime? doneAt;
  final bool canCharge;
  const ScanItem({
    required this.kind,
    required this.weddingId,
    this.bookingId,
    required this.event,
    this.date,
    this.bookingNumber,
    this.people,
    this.isPaid = false,
    this.ticketStatus,
    this.quantity = 1,
    this.doneAt,
    this.canCharge = false,
  });

  factory ScanItem.fromJson(Map j) {
    final t = j['ticket'];
    return ScanItem(
      kind: '${j['kind']}',
      weddingId: '${j['wedding_id']}',
      bookingId: j['booking_id'] as String?,
      event: '${j['event'] ?? 'Evento'}',
      date: DateTime.tryParse('${j['date'] ?? ''}'),
      bookingNumber: j['booking_number'] as String?,
      people: (j['people'] as num?)?.toInt(),
      isPaid: j['is_paid'] == true,
      ticketStatus: t is Map ? t['status'] as String? : null,
      quantity: t is Map ? (t['quantity'] as num?)?.toInt() ?? 1 : 1,
      doneAt: DateTime.tryParse('${j['arrived_at'] ?? j['checked_in_at'] ?? ''}')?.toLocal(),
      canCharge: j['can_charge'] == true,
    );
  }
}

class ScanResult {
  /// ok, not_found, expired, own_code ou error.
  final String result;
  final String? scanId;
  final String? name;
  final String? avatarUrl;
  final List<ScanItem> items;
  const ScanResult(this.result, {this.scanId, this.name, this.avatarUrl, this.items = const []});
}

Future<ScanResult> scanQr(String token) async {
  try {
    final r = await supabase.rpc('scan_qr', params: {'p_token': token});
    if (r is! Map) return const ScanResult('error');
    return ScanResult(
      '${r['result']}',
      scanId: r['scan_id'] as String?,
      name: r['name'] as String?,
      avatarUrl: r['avatar_url'] as String?,
      items: [for (final i in (r['items'] as List? ?? const [])) if (i is Map) ScanItem.fromJson(i)],
    );
  } on PostgrestException {
    return const ScanResult('error');
  } catch (_) {
    return const ScanResult('error');
  }
}

/// Registar a entrada (organizador) ou a chegada à marcação (parceiro).
/// Devolve `result` (ok, already, expired, not_paid, refunded, …) e a hora.
Future<({String result, DateTime? at})> scanConfirm(String scanId, ScanItem item) async {
  try {
    final r = item.kind == 'booking'
        ? await supabase.rpc('scan_booking_arrival', params: {'p_scan': scanId, 'p_booking': item.bookingId})
        : await supabase.rpc('scan_check_in', params: {'p_scan': scanId, 'p_wedding': item.weddingId});
    if (r is! Map) return (result: 'error', at: null);
    return (
      result: '${r['result']}',
      at: DateTime.tryParse('${r['arrived_at'] ?? r['checked_in_at'] ?? ''}')?.toLocal(),
    );
  } catch (_) {
    return (result: 'error', at: null);
  }
}
