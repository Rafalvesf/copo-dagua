import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../shared/public_link.dart';
import '../supabase/supabase_config.dart';

/// Partes da página do evento que o organizador pode mostrar ou esconder
/// aos convidados (migração 158, `weddings.guest_sections`).
enum GuestSection {
  programa('programa', 'Programa', 'Horários, local e como chegar', Hi.clock),
  mesa('mesa', 'A tua mesa', 'Onde cada convidado fica sentado', Hi.tableCells),
  presentes('presentes', 'Presentes', 'Lista de presentes e envelope digital', Hi.gift),
  galeria('galeria', 'Galeria', 'Fotos do evento, partilhadas por todos', Hi.rectangleStack),
  grupos('grupos', 'Grupos', 'Conversa entre os convidados', Hi.userGroup),
  estadia('estadia', 'Estadia', 'Alojamento perto do evento', Hi.homeModern);

  final String key;
  final String label;
  final String description;
  final IconData icon;
  const GuestSection(this.key, this.label, this.description, this.icon);
}

/// Chave a `false` = escondido; chaves que faltam = visíveis.
/// Também guarda as opções da página (`opt_*`, 2026-11-08, migração 166
/// para `opt_kids_free`); o resto só precisa da app.
class GuestSections {
  final Map<String, Object?> _map;
  const GuestSections([this._map = const {}]);

  factory GuestSections.fromJson(Object? json) {
    if (json is! Map) return const GuestSections();
    return GuestSections({for (final e in json.entries) '${e.key}': e.value});
  }

  bool shows(GuestSection s) => _map[s.key] != false;
  bool get onlyTicket => GuestSection.values.every((s) => !shows(s));

  GuestSections withSection(GuestSection s, bool visible) => GuestSections({..._map, s.key: visible});
  GuestSections all(bool visible) => GuestSections({..._map, for (final s in GuestSection.values) s.key: visible});

  bool flag(String key, {required bool fallback}) {
    final v = _map[key];
    return v is bool ? v : fallback;
  }

  GuestSections withOption(String key, Object value) => GuestSections({..._map, key: value});

  /// Mesa: 'now' (já), 'week' (1 semana antes) ou 'day' (no dia).
  String get tableReveal => switch (_map['opt_table_reveal']) { 'week' => 'week', 'day' => 'day', _ => 'now' };
  bool get tableMates => flag('opt_table_mates', fallback: true);
  bool get galleryUpload => flag('opt_gallery_upload', fallback: true);
  bool get galleryOnDay => flag('opt_gallery_on_day', fallback: false);
  bool get groupsCreate => flag('opt_groups_create', fallback: true);
  bool get kidsFree => flag('opt_kids_free', fallback: false);
  bool get companionDetails => flag('opt_companion_details', fallback: true);

  /// A mesa já se mostra ao convidado, dada a data do evento.
  bool tableVisible(DateTime? eventDate) {
    if (eventDate == null || tableReveal == 'now') return true;
    final now = DateTime.now();
    final day = DateTime(eventDate.year, eventDate.month, eventDate.day);
    final today = DateTime(now.year, now.month, now.day);
    return tableReveal == 'day' ? !today.isBefore(day) : !today.isBefore(day.subtract(const Duration(days: 7)));
  }

  /// A galeria já abriu para os convidados.
  bool galleryOpen(DateTime? eventDate) {
    if (!galleryOnDay || eventDate == null) return true;
    final now = DateTime.now();
    return !DateTime(now.year, now.month, now.day).isBefore(DateTime(eventDate.year, eventDate.month, eventDate.day));
  }

  Map<String, Object?> toJson() => {..._map, for (final s in GuestSection.values) s.key: shows(s)};
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
