import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../guests/guest_controller.dart' show guestFromRow;
import '../models/models.dart';
import '../supabase/supabase_config.dart';

/// Casamentos a que a conta convidada está ligada
/// (`wedding_guest_members`, `050_wedding_guest_code.sql`) — normalmente
/// só um (o código só é pedido uma vez no registo), mas a tabela é
/// many-to-many de propósito para não bloquear um convidado que use a
/// mesma conta para mais do que um casamento no futuro.
final guestWeddingsProvider = FutureProvider<List<GuestWedding>>((ref) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return const [];

  final rows = await supabase
      .from('wedding_guest_members')
      .select(
        'wedding_id, weddings(partner_name_1, partner_name_2, wedding_date, venue, location, '
        'quote, cover_photo_url, ceremony_time, welcome_message, theme_colors, updated_at)',
      )
      .eq('guest_id', userId)
      .order('joined_at', ascending: false);

  return rows.map<GuestWedding>((row) {
    final wedding = row['weddings'] as Map<String, dynamic>?;
    final weddingDate = wedding?['wedding_date'] as String?;
    final updatedAt = wedding?['updated_at'] as String?;
    return GuestWedding(
      weddingId: row['wedding_id'] as String,
      partnerName1: (wedding?['partner_name_1'] as String?) ?? 'Casal',
      partnerName2: wedding?['partner_name_2'] as String?,
      weddingDate: weddingDate == null ? null : DateTime.parse(weddingDate),
      venue: wedding?['venue'] as String?,
      location: wedding?['location'] as String?,
      quote: wedding?['quote'] as String?,
      coverPhotoUrl: wedding?['cover_photo_url'] as String?,
      ceremonyTime: wedding?['ceremony_time'] as String?,
      welcomeMessage: wedding?['welcome_message'] as String?,
      themeColors: (wedding?['theme_colors'] as List?)?.cast<String>() ?? const [],
      updatedAt: updatedAt == null ? null : DateTime.parse(updatedAt),
    );
  }).toList();
});

/// A própria linha de `guests` do convidado autenticado
/// (`guests.linked_profile_id`, `067_guest_self_service.sql`) — `null`
/// quando ainda não houve nenhuma correspondência automática por email
/// no registo (`join_wedding_by_code`); o ecrã de perfil mostra um
/// estado vazio nesse caso, em vez de assumir dados errados.
final myGuestRowProvider = FutureProvider.family<Guest?, String>((ref, weddingId) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return null;

  final row = await supabase
      .from('guests')
      .select()
      .eq('wedding_id', weddingId)
      .eq('linked_profile_id', userId)
      .maybeSingle();
  if (row == null) return null;
  return guestFromRow(row);
});

/// Número da mesa do convidado autenticado (`get_my_seating_table()`,
/// `067_guest_self_service.sql`) — `null` quando ainda não foi
/// colocado em nenhuma mesa, ou quando a linha de `guests` não está
/// ligada a esta conta.
final mySeatingTableProvider = FutureProvider.family<int?, String>((ref, weddingId) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return null;
  return await supabase.rpc('get_my_seating_table', params: {'p_wedding_id': weddingId}) as int?;
});

/// Guarda as alterações do próprio convidado (`update_own_guest_info()`,
/// `067_guest_self_service.sql`) — nunca um `update` direto em `guests`,
/// para nunca dar ao convidado forma de alterar `rsvp_status` ou outros
/// campos geridos pelo casal.
Future<void> updateOwnGuestInfo({
  required String? phone,
  required String? dietaryRestrictions,
  required String? plusOneName,
}) async {
  await supabase.rpc(
    'update_own_guest_info',
    params: {
      'p_phone': phone,
      'p_dietary_restrictions': dietaryRestrictions,
      'p_plus_one_name': plusOneName,
    },
  );
}

/// Uma linha de `get_my_table_roster()` (`068_guest_table_roster.sql`) —
/// um convidado sentado na mesma mesa que o utilizador autenticado.
class TableMate {
  final String guestId;
  final String fullName;
  final String group;
  final bool plusOneAllowed;
  final String? plusOneName;

  const TableMate({
    required this.guestId,
    required this.fullName,
    required this.group,
    required this.plusOneAllowed,
    this.plusOneName,
  });
}

/// Quem mais está na mesma mesa que o convidado autenticado
/// (`get_my_table_roster()`, `068_guest_table_roster.sql`) — lista
/// vazia quando ainda não foi colocado em nenhuma mesa, ou quando a
/// linha de `guests` não está ligada a esta conta.
final myTableRosterProvider = FutureProvider.family<List<TableMate>, String>((ref, weddingId) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return const [];

  final rows = await supabase.rpc('get_my_table_roster', params: {'p_wedding_id': weddingId}) as List;
  return rows
      .map(
        (row) => TableMate(
          guestId: row['guest_id'] as String,
          fullName: row['full_name'] as String,
          group: (row['group_label'] as String?) ?? '',
          plusOneAllowed: row['plus_one_allowed'] as bool? ?? false,
          plusOneName: row['plus_one_name'] as String?,
        ),
      )
      .toList();
});

/// Liga a conta atual (qualquer role — couple ou guest, `join_wedding_by_code`
/// não distingue) a um casamento via `guest_code`, para uma conta de casal
/// poder também acompanhar outro casamento como convidado sem precisar de
/// uma segunda conta (`050_wedding_guest_code.sql`). Lança se o código for
/// inválido — o chamador decide a mensagem.
Future<void> joinWeddingByCode(String code) async {
  await supabase.rpc('join_wedding_by_code', params: {'p_code': code.trim()});
}
