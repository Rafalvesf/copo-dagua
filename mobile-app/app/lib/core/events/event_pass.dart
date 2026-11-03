import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../shared/public_link.dart';
import '../supabase/supabase_config.dart';

/// Partes da página do evento que o organizador pode mostrar ou esconder
/// aos convidados (migração 158, `weddings.guest_sections`).
enum GuestSection {
  programa('programa', 'Programa', 'Horários, local e como chegar', Icons.schedule_outlined),
  mesa('mesa', 'A tua mesa', 'Onde cada convidado fica sentado', Icons.table_restaurant_outlined),
  presentes('presentes', 'Presentes', 'Lista de presentes e envelope digital', Icons.card_giftcard_outlined),
  galeria('galeria', 'Galeria', 'Fotos do evento, partilhadas por todos', Icons.photo_library_outlined),
  grupos('grupos', 'Grupos', 'Conversa entre os convidados', Icons.groups_outlined),
  estadia('estadia', 'Estadia', 'Alojamento perto do evento', Icons.hotel_outlined);

  final String key;
  final String label;
  final String description;
  final IconData icon;
  const GuestSection(this.key, this.label, this.description, this.icon);
}

/// Chave a `false` = escondido; chaves que faltam = visíveis.
class GuestSections {
  final Map<String, bool> _map;
  const GuestSections([this._map = const {}]);

  factory GuestSections.fromJson(Object? json) {
    if (json is! Map) return const GuestSections();
    return GuestSections({for (final e in json.entries) '${e.key}': e.value != false});
  }

  bool shows(GuestSection s) => _map[s.key] ?? true;
  bool get onlyTicket => GuestSection.values.every((s) => !shows(s));

  GuestSections withSection(GuestSection s, bool visible) => GuestSections({..._map, s.key: visible});
  GuestSections all(bool visible) => GuestSections({for (final s in GuestSection.values) s.key: visible});

  Map<String, bool> toJson() => {for (final s in GuestSection.values) s.key: shows(s)};
}

class MyTicket {
  final String id;
  final int quantity;
  final String code;
  final DateTime? checkedInAt;
  const MyTicket({required this.id, required this.quantity, required this.code, this.checkedInAt});

  /// O que vai no QR: abre a app do organizador e marca a entrada.
  String get qrData => publicLink('/entrada/$code');
}

class EventPass {
  final GuestSections sections;
  final bool isPaid;
  final MyTicket? ticket;
  const EventPass({this.sections = const GuestSections(), this.isPaid = false, this.ticket});
}

/// O que o convidado vê e o seu bilhete (`my_event_pass`, migração 158).
/// Antes da migração mostra tudo, como antes.
final myEventPassProvider = FutureProvider.family<EventPass, String>((ref, weddingId) async {
  try {
    final r = await supabase.rpc('my_event_pass', params: {'p_wedding': weddingId});
    if (r is! Map) return const EventPass();
    final t = r['ticket'];
    return EventPass(
      sections: GuestSections.fromJson(r['sections']),
      isPaid: r['is_paid'] == true,
      ticket: t is Map && t['code'] is String
          ? MyTicket(
              id: t['id'] as String,
              quantity: (t['quantity'] as num?)?.toInt() ?? 1,
              code: t['code'] as String,
              checkedInAt: DateTime.tryParse('${t['checked_in_at'] ?? ''}')?.toLocal(),
            )
          : null,
    );
  } on PostgrestException {
    return const EventPass();
  }
});

/// O organizador: o que os convidados veem neste evento.
final guestSectionsProvider = FutureProvider.family<GuestSections?, String>((ref, weddingId) async {
  try {
    final row = await supabase.from('weddings').select('guest_sections').eq('id', weddingId).maybeSingle();
    return GuestSections.fromJson(row?['guest_sections']);
  } on PostgrestException {
    // Antes da migração 158.
    return null;
  }
});

Future<void> saveGuestSections(String weddingId, GuestSections sections) async {
  await supabase.rpc('set_guest_sections', params: {'p_wedding': weddingId, 'p_sections': sections.toJson()});
}

enum CheckInResult { ok, already, notFound, notOrganizer, refunded, notPaid, error }

class CheckIn {
  final CheckInResult result;
  final String? name;
  final int quantity;
  final String? event;
  final DateTime? at;
  const CheckIn(this.result, {this.name, this.quantity = 1, this.event, this.at});
}

/// O organizador leu o QR de um bilhete (`check_in_ticket`, migração 158).
Future<CheckIn> checkInTicket(String code) async {
  try {
    final r = await supabase.rpc('check_in_ticket', params: {'p_code': code});
    if (r is! Map) return const CheckIn(CheckInResult.error);
    final result = switch (r['result']) {
      'ok' => CheckInResult.ok,
      'already' => CheckInResult.already,
      'not_found' => CheckInResult.notFound,
      'not_organizer' => CheckInResult.notOrganizer,
      'refunded' => CheckInResult.refunded,
      'not_paid' => CheckInResult.notPaid,
      _ => CheckInResult.error,
    };
    return CheckIn(
      result,
      name: r['name'] as String?,
      quantity: (r['quantity'] as num?)?.toInt() ?? 1,
      event: r['event'] as String?,
      at: DateTime.tryParse('${r['checked_in_at'] ?? ''}')?.toLocal(),
    );
  } on PostgrestException {
    return const CheckIn(CheckInResult.error);
  }
}
