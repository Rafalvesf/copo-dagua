import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';

const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const _weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

/// «Ter, 15 dez».
String shortDate(DateTime d) => '${_weekdays[d.weekday - 1]}, ${d.day} ${_months[d.month - 1]}';

/// Uma reserva do evento em que o convidado escolhe e/ou paga o seu
/// (migração 190, `my_event_tables`).
class EventTable {
  final String bookingId;
  final String partnerId;
  final String partnerName;

  /// 'same' (menu igual para todos) ou 'each' (cada um escolhe).
  final String choiceMode;

  /// 'organizer' (pagam os organizadores) ou 'each' (cada um paga o seu).
  final String payerMode;
  final int? people;
  final DateTime? eventDate;
  final DateTime? choiceDeadline;

  /// Menu igual para todos e cada um paga: total ÷ pessoas.
  final double? shareAmount;

  /// Menu escolhido pelo organizador (cópia do pedido).
  final Map<String, dynamic>? package;
  final List<Map<String, dynamic>> extras;

  /// A minha escolha (cada um escolhe).
  final Map<String, dynamic>? myChoice;

  /// O meu pagamento: id, amount, status.
  final Map<String, dynamic>? myPayment;

  const EventTable({
    required this.bookingId,
    required this.partnerId,
    required this.partnerName,
    required this.choiceMode,
    required this.payerMode,
    this.people,
    this.eventDate,
    this.choiceDeadline,
    this.shareAmount,
    this.package,
    this.extras = const [],
    this.myChoice,
    this.myPayment,
  });

  bool get eachChooses => choiceMode == 'each';
  bool get eachPays => payerMode == 'each';
  bool get paid => myPayment?['status'] == 'paid';
  bool get chose => myChoice != null;

  /// A escolha ainda está aberta (fecha 3 dias antes do evento).
  bool get open {
    final d = choiceDeadline;
    if (d == null) return true;
    final today = DateTime.now();
    return !DateTime(today.year, today.month, today.day).isAfter(d);
  }

  /// Falta fazer alguma coisa: escolher, ou pagar a minha parte.
  bool get needsAction => !paid && open && ((eachChooses && !chose) || eachPays);

  double? get myAmount => (myPayment?['amount'] as num?)?.toDouble() ?? (myChoice?['amount'] as num?)?.toDouble() ?? shareAmount;

  factory EventTable.fromJson(Map<String, dynamic> j) => EventTable(
        bookingId: j['booking_id'] as String,
        partnerId: j['partner_id'] as String,
        partnerName: (j['partner_name'] as String?) ?? 'Parceiro',
        choiceMode: (j['choice_mode'] as String?) ?? 'same',
        payerMode: (j['payer_mode'] as String?) ?? 'organizer',
        people: (j['people'] as num?)?.toInt(),
        eventDate: j['event_date'] == null ? null : DateTime.tryParse(j['event_date'] as String),
        choiceDeadline: j['choice_deadline'] == null ? null : DateTime.tryParse(j['choice_deadline'] as String),
        shareAmount: (j['share_amount'] as num?)?.toDouble(),
        package: j['package'] is Map ? Map<String, dynamic>.from(j['package'] as Map) : null,
        extras: j['extras'] is List
            ? [for (final e in j['extras'] as List) if (e is Map) Map<String, dynamic>.from(e)]
            : const [],
        myChoice: j['my_choice'] is Map ? Map<String, dynamic>.from(j['my_choice'] as Map) : null,
        myPayment: j['my_payment'] is Map ? Map<String, dynamic>.from(j['my_payment'] as Map) : null,
      );
}

/// As mesas do evento para este convidado. Vazio antes da migração 190.
final myEventTablesProvider = FutureProvider.autoDispose.family<List<EventTable>, String>((ref, weddingId) async {
  try {
    final res = await supabase.rpc('my_event_tables', params: {'p_wedding_id': weddingId});
    if (res is! List) return const [];
    return [for (final r in res) if (r is Map) EventTable.fromJson(Map<String, dynamic>.from(r))];
  } catch (_) {
    return const [];
  }
});

/// Guarda a minha escolha. Devolve o pagamento a fazer (cada um paga) ou
/// null (pagam os organizadores).
Future<({String? paymentId, double amount})> chooseMyMenu({
  required String bookingId,
  required String packageId,
  required List<String> extraIds,
  String? allergies,
}) async {
  final res = await supabase.rpc('choose_my_menu', params: {
    'p_booking_id': bookingId,
    'p_package_id': packageId,
    'p_extra_ids': extraIds,
    'p_allergies': allergies,
  });
  final m = Map<String, dynamic>.from(res as Map);
  return (paymentId: m['payment_id'] as String?, amount: (m['amount'] as num).toDouble());
}

/// Menu igual para todos e cada um paga: cria (ou devolve) a minha parte.
Future<({String paymentId, double amount, String status})> myShareEnsure(String bookingId) async {
  final res = await supabase.rpc('my_share_payment', params: {'p_booking_id': bookingId});
  final m = Map<String, dynamic>.from(res as Map);
  return (paymentId: m['payment_id'] as String, amount: (m['amount'] as num).toDouble(), status: m['status'] as String);
}

/// Uma linha de «O que escolheram» (parceiro e organizadores).
class BookingChoice {
  final String name;
  final String? packageName;
  final List<String> extras;
  final String? allergies;
  final double amount;
  final bool paid;
  const BookingChoice(this.name, this.packageName, this.extras, this.allergies, this.amount, this.paid);
}

final bookingChoicesProvider = FutureProvider.autoDispose.family<List<BookingChoice>, String>((ref, bookingId) async {
  try {
    final rows = await supabase.rpc('booking_choices', params: {'p_booking_id': bookingId});
    return [
      for (final r in (rows as List).cast<Map<String, dynamic>>())
        BookingChoice(
          (r['full_name'] as String?) ?? 'Convidado',
          r['package_name'] as String?,
          [for (final e in (r['extras'] as List? ?? const [])) e.toString()],
          r['allergies'] as String?,
          (r['amount'] as num?)?.toDouble() ?? 0,
          r['paid'] == true,
        ),
    ];
  } catch (_) {
    return const [];
  }
});
