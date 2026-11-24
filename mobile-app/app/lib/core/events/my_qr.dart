import 'package:supabase_flutter/supabase_flutter.dart'
    show PostgrestException, PostgresChangeEvent, PostgresChangeFilter, PostgresChangeFilterType, RealtimeChannel;

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
  final String eventId;
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
    required this.eventId,
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
      eventId: '${j['wedding_id']}',
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
        : await supabase.rpc('scan_check_in', params: {'p_scan': scanId, 'p_wedding': item.eventId});
    if (r is! Map) return (result: 'error', at: null);
    return (
      result: '${r['result']}',
      at: DateTime.tryParse('${r['arrived_at'] ?? r['checked_in_at'] ?? ''}')?.toLocal(),
    );
  } catch (_) {
    return (result: 'error', at: null);
  }
}

/// Um evento onde o QR da conta dá entrada (página «Entrada», `my_entries`,
/// migração 228). Pedido 2026-11-23: "faz a pagina entrada do codigo qr
/// para todos os eventos, updates to all".
class MyEntry {
  final String eventId;
  final String event;
  final DateTime? date;
  final String? location;
  final bool organizer;
  final bool isPaid;
  final String? ticketStatus;
  final int quantity;
  final int? table;
  final DateTime? checkedInAt;
  final List<({String partner, DateTime at})> arrivals;
  const MyEntry({
    required this.eventId,
    required this.event,
    this.date,
    this.location,
    this.organizer = false,
    this.isPaid = false,
    this.ticketStatus,
    this.quantity = 1,
    this.table,
    this.checkedInAt,
    this.arrivals = const [],
  });

  /// Evento pago sem bilhete pago: o QR não dá entrada.
  bool get blocked => !organizer && isPaid && ticketStatus != 'paid';

  factory MyEntry.fromJson(Map j) {
    final t = j['ticket'];
    return MyEntry(
      eventId: '${j['event_id']}',
      event: '${j['event'] ?? 'Evento'}',
      date: DateTime.tryParse('${j['date'] ?? ''}'),
      location: j['location'] as String?,
      organizer: j['role'] == 'organizer',
      isPaid: j['is_paid'] == true,
      ticketStatus: t is Map ? t['status'] as String? : null,
      quantity: t is Map ? (t['quantity'] as num?)?.toInt() ?? 1 : 1,
      table: (j['table'] as num?)?.toInt(),
      checkedInAt: DateTime.tryParse('${j['checked_in_at'] ?? ''}')?.toLocal(),
      arrivals: [
        for (final a in (j['arrivals'] as List? ?? const []))
          if (a is Map && DateTime.tryParse('${a['at']}') != null)
            (partner: '${a['partner'] ?? 'Parceiro'}', at: DateTime.parse('${a['at']}').toLocal()),
      ],
    );
  }
}

/// `null` sem rede (ou antes da migração 228).
Future<List<MyEntry>?> fetchMyEntries() async {
  try {
    final r = await supabase.rpc('my_entries');
    if (r is! List) return null;
    return [for (final e in r) if (e is Map) MyEntry.fromJson(e)];
  } catch (_) {
    return null;
  }
}

/// «Updates to all»: avisa quando um organizador ou parceiro regista a
/// minha entrada ou chegada (Supabase Realtime; a RLS só deixa passar as
/// minhas linhas). Devolve o canal, para o fechar com [closeEntriesChannel].
RealtimeChannel? listenMyEntries(void Function() onChange) {
  final me = supabase.auth.currentUser?.id;
  if (me == null) return null;
  PostgresChangeFilter mine(String column) => PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: column, value: me);
  return supabase
      .channel('entries-$me')
      .onPostgresChanges(event: PostgresChangeEvent.all, schema: 'public', table: 'event_checkins', filter: mine('user_id'), callback: (_) => onChange())
      .onPostgresChanges(event: PostgresChangeEvent.all, schema: 'public', table: 'booking_arrivals', filter: mine('user_id'), callback: (_) => onChange())
      .onPostgresChanges(event: PostgresChangeEvent.update, schema: 'public', table: 'event_tickets', filter: mine('buyer_id'), callback: (_) => onChange())
      .subscribe();
}

void closeEntriesChannel(RealtimeChannel? c) {
  if (c != null) supabase.removeChannel(c);
}
