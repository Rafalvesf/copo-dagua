import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';
import '../riverpod_cache.dart';

/// Pessoa que confirmou num evento (migração 214): só quem segues ou tem o
/// perfil público — os outros contam no número, sem foto.
class EventPerson {
  final String profileId;
  final String name;
  final String? avatarUrl;
  final bool isFriend;
  const EventPerson(this.profileId, this.name, this.avatarUrl, {this.isFriend = false});

  String get firstName => name.trim().split(RegExp(r'\s+')).first;
}

/// Até 5 pessoas que confirmaram, amigos primeiro. Vazio antes da 214.
final eventAttendeesProvider = FutureProvider.autoDispose.family<List<EventPerson>, String>((ref, eventId) async {
  ref.staleWhileRevalidate();
  try {
    final rows = await supabase.rpc('event_attendees_preview', params: {
      'p_event_ids': [eventId],
    });
    if (rows is! List) return const [];
    return [
      for (final r in rows.cast<Map<String, dynamic>>())
        EventPerson(
          r['profile_id'] as String,
          (r['name'] as String?) ?? '',
          r['avatar_url'] as String?,
          isFriend: r['is_friend'] == true,
        ),
    ];
  } catch (_) {
    return const [];
  }
});

/// Quantos confirmaram num evento (migração 220); `null` antes dela.
final eventGoingCountProvider = FutureProvider.autoDispose.family<int?, String>((ref, eventId) async {
  ref.staleWhileRevalidate();
  try {
    final rows = await supabase.rpc('event_going_counts', params: {
      'p_event_ids': [eventId],
    });
    if (rows is! List || rows.isEmpty) return null;
    return ((rows.first as Map<String, dynamic>)['total'] as num?)?.toInt();
  } catch (_) {
    return null;
  }
});

/// Quem criou o evento (a foto do círculo do cartão). `null` antes da 214.
final eventHostProvider = FutureProvider.autoDispose.family<EventPerson?, String>((ref, eventId) async {
  ref.staleWhileRevalidate();
  try {
    final rows = await supabase.rpc('event_hosts_preview', params: {
      'p_event_ids': [eventId],
    });
    if (rows is! List || rows.isEmpty) return null;
    final r = rows.first as Map<String, dynamic>;
    return EventPerson(r['profile_id'] as String, (r['name'] as String?) ?? '', r['avatar_url'] as String?);
  } catch (_) {
    return null;
  }
});
