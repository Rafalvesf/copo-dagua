import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../auth/auth_controller.dart';
import '../models/models.dart';
import '../supabase/supabase_config.dart';

/// Evento público ("Aberto a todos", migração 141) — só os campos que
/// o organizador mostra a toda a gente, nunca contactos.
class PublicEvent {
  final String weddingId;
  final EventType eventType;
  final String partnerName1;
  final String? partnerName2;
  final DateTime? date;
  final String? time;
  final String? venue;
  final String? location;
  final String? coverPhotoUrl;
  final String? welcomeMessage;
  final bool joined;

  const PublicEvent({
    required this.weddingId,
    required this.eventType,
    required this.partnerName1,
    this.partnerName2,
    this.date,
    this.time,
    this.venue,
    this.location,
    this.coverPhotoUrl,
    this.welcomeMessage,
    this.joined = false,
  });

  String get displayNames =>
      partnerName2 == null || partnerName2!.isEmpty ? partnerName1 : '$partnerName1 & $partnerName2';

  String? get place => venue?.isNotEmpty == true ? venue : (location?.isNotEmpty == true ? location : null);

  factory PublicEvent.fromRow(Map<String, dynamic> r) {
    final d = r['wedding_date'] as String?;
    return PublicEvent(
      weddingId: r['wedding_id'] as String,
      eventType: EventType.fromDb(r['event_type'] as String?),
      partnerName1: (r['partner_name_1'] as String?) ?? 'Evento',
      partnerName2: r['partner_name_2'] as String?,
      date: d == null ? null : DateTime.parse(d),
      time: r['ceremony_time'] as String?,
      venue: r['venue'] as String?,
      location: r['location'] as String?,
      coverPhotoUrl: r['cover_photo_url'] as String?,
      welcomeMessage: r['welcome_message'] as String?,
      joined: r['joined'] == true,
    );
  }
}

/// Eventos públicos de outros organizadores (os meus ficam de fora).
/// Vazio enquanto a migração 141 não correu.
final publicEventsProvider = FutureProvider<List<PublicEvent>>((ref) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return const [];
  try {
    final rows = await supabase.rpc('list_public_events') as List;
    return [for (final r in rows.cast<Map<String, dynamic>>()) PublicEvent.fromRow(r)];
  } on PostgrestException {
    return const [];
  }
});

/// Junta a conta a um evento público e põe-na na lista de convidados.
Future<void> joinPublicEvent(String weddingId) async {
  await supabase.rpc('join_public_event', params: {'p_wedding': weddingId});
}

/// "Evento público" do evento que organizo (interruptor nas Definições).
final eventIsPublicProvider = FutureProvider.family<bool, String>((ref, weddingId) async {
  try {
    final row = await supabase.from('weddings').select('is_public').eq('id', weddingId).maybeSingle();
    return row?['is_public'] == true;
  } on PostgrestException {
    return false;
  }
});

Future<void> setEventPublic(String weddingId, bool value) async {
  await supabase.from('weddings').update({'is_public': value}).eq('id', weddingId);
}
