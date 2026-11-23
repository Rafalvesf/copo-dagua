import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../supabase/supabase_config.dart';

/// Arquivar e apagar eventos (migração 185, 2026-11-12).

/// Evento arquivado ou apagado, para Definições → "Eventos arquivados e
/// apagados".
class HiddenEvent {
  final String id;
  final String name;
  final DateTime? date;
  final bool deleted;
  final bool mine;
  const HiddenEvent({required this.id, required this.name, this.date, required this.deleted, required this.mine});
}

final hiddenEventsProvider = FutureProvider.autoDispose<List<HiddenEvent>>((ref) async {
  final me = supabase.auth.currentUser?.id;
  if (me == null) return const [];
  try {
    final rows = (await supabase
            .from('events')
            .select('id, owner_id, partner_name_1, partner_name_2, wedding_date, archived_at, deleted_at')
            .or('archived_at.not.is.null,deleted_at.not.is.null')
            .order('updated_at', ascending: false))
        .cast<Map<String, dynamic>>();
    return [
      for (final r in rows)
        HiddenEvent(
          id: r['id'] as String,
          name: [r['partner_name_1'], r['partner_name_2']]
              .whereType<String>()
              .where((s) => s.trim().isNotEmpty)
              .join(' & '),
          date: DateTime.tryParse((r['wedding_date'] as String?) ?? ''),
          deleted: r['deleted_at'] != null,
          mine: r['owner_id'] == me,
        ),
    ];
  } on PostgrestException {
    // Antes da migração 185.
    return const [];
  }
});

/// Mensagem legível de um erro do servidor (os `raise exception` da 185).
String eventActionError(Object e) {
  if (e is PostgrestException && e.message.isNotEmpty && !e.message.contains('function')) return e.message;
  return 'Não foi possível. Tenta outra vez.';
}

/// Porque é que não se pode apagar (null = pode).
Future<String?> eventDeleteBlocker(String eventId) async {
  try {
    return await supabase.rpc('event_delete_blocker', params: {'p_wedding': eventId}) as String?;
  } on PostgrestException {
    return null;
  }
}

Future<void> archiveEvent(String eventId, {bool archived = true}) =>
    supabase.rpc('set_event_archived', params: {'p_wedding': eventId, 'p_archived': archived});

Future<void> deleteEvent(String eventId) => supabase.rpc('delete_event', params: {'p_wedding': eventId});

Future<void> restoreEvent(String eventId) => supabase.rpc('restore_event', params: {'p_wedding': eventId});

Future<void> purgeEvent(String eventId) => supabase.rpc('purge_event', params: {'p_wedding': eventId});
