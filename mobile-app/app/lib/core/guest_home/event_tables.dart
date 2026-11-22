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

  /// Total da reserva (para a percentagem dos escalões da taxa).
  final double? totalAmount;

  /// Menu escolhido pelo organizador (cópia do pedido).
  final Map<String, dynamic>? package;
  final List<Map<String, dynamic>> extras;

  /// A minha escolha (cada um escolhe).
  final Map<String, dynamic>? myChoice;

  /// O meu pagamento: id, amount, status.
  final Map<String, dynamic>? myPayment;

  /// Menus por pessoa (216): por quantas pessoas escolho e quantas já têm
  /// menu. `null` antes da migração.
  final int? menuPeople;
  final int? menuChosen;

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
    this.totalAmount,
    this.package,
    this.extras = const [],
    this.myChoice,
    this.myPayment,
    this.menuPeople,
    this.menuChosen,
  });

  bool get eachChooses => choiceMode == 'each';
  bool get eachPays => payerMode == 'each';
  bool get paid => myPayment?['status'] == 'paid';
  bool get chose => (menuPeople != null && menuChosen != null) ? menuChosen! >= menuPeople! : myChoice != null;

  /// A escolha ainda está aberta (fecha 3 dias antes do evento).
  bool get open {
    final d = choiceDeadline;
    if (d == null) return true;
    final today = DateTime.now();
    return !DateTime(today.year, today.month, today.day).isAfter(d);
  }

  /// Falta fazer alguma coisa: escolher, ou pagar a minha parte.
  bool get needsAction =>
      !paid && open && ((eachChooses && !chose) || (eachPays && (myPayment == null ? !eachChooses : myPayment!['status'] == 'pending')));

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
        totalAmount: (j['total_amount'] as num?)?.toDouble(),
        package: j['package'] is Map ? Map<String, dynamic>.from(j['package'] as Map) : null,
        extras: j['extras'] is List
            ? [for (final e in j['extras'] as List) if (e is Map) Map<String, dynamic>.from(e)]
            : const [],
        myChoice: j['my_choice'] is Map ? Map<String, dynamic>.from(j['my_choice'] as Map) : null,
        myPayment: j['my_payment'] is Map ? Map<String, dynamic>.from(j['my_payment'] as Map) : null,
        menuPeople: (j['menu_people'] as num?)?.toInt(),
        menuChosen: (j['menu_chosen'] as num?)?.toInt(),
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

/// Uma pessoa por quem escolho o menu (216, `menu_people`).
class MenuPerson {
  final String key;
  final String name;
  final String ageGroup;
  final bool isMe;

  /// Eu ou quem vem comigo: tenho de escolher por esta pessoa. As outras
  /// (quem pago, ou todos com «Pagamos nós») posso escolher, mas não é
  /// obrigatório — cada uma escolhe o seu.
  final bool mine;

  /// Quem a traz (acompanhantes).
  final String? ownerName;

  /// Sou eu que pago a comida desta pessoa.
  final bool iPay;
  final String? packageId;
  final String? allergies;
  final List<String> extraIds;

  const MenuPerson({
    required this.key,
    required this.name,
    required this.ageGroup,
    required this.isMe,
    this.mine = true,
    this.ownerName,
    required this.iPay,
    this.packageId,
    this.allergies,
    this.extraIds = const [],
  });

  bool get isChild => ageGroup == 'child';

  factory MenuPerson.fromJson(Map<String, dynamic> j) {
    final c = j['choice'] is Map ? Map<String, dynamic>.from(j['choice'] as Map) : null;
    return MenuPerson(
      key: j['key'] as String,
      name: (j['name'] as String?)?.trim().isNotEmpty == true ? (j['name'] as String).trim() : 'Convidado',
      ageGroup: (j['age_group'] as String?) ?? 'adult',
      isMe: j['is_me'] == true,
      mine: j['mine'] != false,
      ownerName: j['owner_name'] as String?,
      iPay: j['pays'] == 'me',
      packageId: c?['package_id'] as String?,
      allergies: c?['allergies'] as String?,
      extraIds: [
        for (final e in (c?['extras'] as List? ?? const []))
          if (e is Map && e['id'] is String) e['id'] as String,
      ],
    );
  }
}

/// As pessoas por quem escolho nesta reserva. Vazio antes da migração 216.
Future<List<MenuPerson>> fetchMenuPeople(String bookingId) async {
  final res = await supabase.rpc('menu_people', params: {'p_booking_id': bookingId});
  if (res is! List) return const [];
  return [for (final r in res) if (r is Map) MenuPerson.fromJson(Map<String, dynamic>.from(r))];
}

/// Guarda os menus de várias pessoas. Devolve o meu pagamento por fazer.
Future<({String? paymentId, double amount})> chooseMenus({
  required String bookingId,
  required List<({String key, String packageId, String allergies})> people,
  required List<String> extraIds,
}) async {
  final res = await supabase.rpc('choose_menus', params: {
    'p_booking_id': bookingId,
    'p_people': [
      for (final p in people) {'key': p.key, 'package_id': p.packageId, 'allergies': p.allergies},
    ],
    'p_extra_ids': extraIds,
  });
  final m = Map<String, dynamic>.from(res as Map);
  return (paymentId: m['payment_id'] as String?, amount: ((m['amount'] as num?) ?? 0).toDouble());
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
