import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

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

  const baseColumns = 'partner_name_1, partner_name_2, wedding_date, venue, location, '
      'quote, cover_photo_url, ceremony_time, welcome_message, theme_colors, updated_at';
  Future<List<Map<String, dynamic>>> query(String columns) async => (await supabase
          .from('wedding_guest_members')
          .select('wedding_id, weddings($columns)')
          .eq('guest_id', userId)
          .order('joined_at', ascending: false))
      .cast<Map<String, dynamic>>();
  // Do mais novo para o mais antigo — cada nível serve enquanto a
  // migração seguinte (074/075/085/087) não correu.
  const tiers = [
    '$baseColumns, gift_list_url, gift_iban, gift_message, event_type, program, dress_code, venue_address, venue_latitude, venue_longitude',
    '$baseColumns, gift_list_url, gift_iban, gift_message, event_type, program, dress_code, venue_address',
    '$baseColumns, gift_list_url, gift_iban, gift_message, event_type',
    '$baseColumns, gift_list_url, gift_iban, gift_message',
    baseColumns,
  ];
  List<Map<String, dynamic>> rows = const [];
  // 089: os convidados não podem ler `weddings` diretamente (a policy é
  // só do casal) — esta função devolve só os campos pensados para eles.
  // Antes o convidado não via nada do que o organizador preparou.
  var viaRpc = false;
  try {
    final r = await supabase.rpc('get_my_guest_weddings') as List;
    rows = [
      for (final m in r.cast<Map<String, dynamic>>())
        {'wedding_id': m['wedding_id'], 'weddings': m['wedding']},
    ];
    viaRpc = true;
  } on PostgrestException {
    // Função ainda não criada — usa a leitura antiga.
  }
  for (var i = 0; !viaRpc && i < tiers.length; i++) {
    try {
      rows = await query(tiers[i]);
      break;
    } on PostgrestException {
      if (i == tiers.length - 1) rethrow;
    }
  }

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
      giftListUrl: wedding?['gift_list_url'] as String?,
      giftIban: wedding?['gift_iban'] as String?,
      giftMessage: wedding?['gift_message'] as String?,
      eventType: EventType.fromDb(wedding?['event_type'] as String?),
      program: ProgramItem.listFrom(wedding?['program']),
      dressCode: wedding?['dress_code'] as String?,
      venueAddress: wedding?['venue_address'] as String?,
      venueLatitude: (wedding?['venue_latitude'] as num?)?.toDouble(),
      venueLongitude: (wedding?['venue_longitude'] as num?)?.toDouble(),
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

/// Menu escolhido pelo próprio convidado (`update_own_guest_menu()`,
/// `075_connect_remaining.sql`).
Future<void> updateOwnGuestMenu(String? menu) async {
  await supabase.rpc('update_own_guest_menu', params: {'p_menu_selection': menu});
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

/// Resultado de `join_wedding_by_code`/`join_wedding_by_invite_token`
/// (`071_guest_join_mode_and_invite_token.sql`) — [guestMatched] indica
/// se a conta ficou ligada a uma linha de `guests` (para o chamador
/// decidir entre mostrar o onboarding ou o estado "ainda não
/// encontrámos a tua entrada"), distinto de a chamada em si ter
/// sucesso (que só falha com exceção, ex: código inválido).
class GuestJoinResult {
  final String weddingId;
  final bool guestMatched;

  const GuestJoinResult({required this.weddingId, required this.guestMatched});

  factory GuestJoinResult.fromRow(Map<String, dynamic> row) => GuestJoinResult(
    weddingId: row['wedding_id'] as String,
    guestMatched: row['guest_matched'] as bool? ?? false,
  );
}

/// Liga a conta atual (qualquer role — couple ou guest, `join_wedding_by_code`
/// não distingue) a um casamento via `guest_code`, para uma conta de casal
/// poder também acompanhar outro casamento como convidado sem precisar de
/// uma segunda conta (`050_wedding_guest_code.sql`). Lança se o código for
/// inválido — o chamador decide a mensagem.
Future<GuestJoinResult> joinWeddingByCode(String code) async {
  final res = await supabase.rpc('join_wedding_by_code', params: {'p_code': code.trim()});
  // Versão antiga da função (antes da 071) devolve só o id.
  if (res is String) return GuestJoinResult(weddingId: res, guestMatched: false);
  final rows = res as List;
  return GuestJoinResult.fromRow(rows.first as Map<String, dynamic>);
}

/// Token de convite individual (`/i/:token`, `invite_token_screen.dart`)
/// aberto por alguém ainda sem sessão — guardado aqui até o login/registo
/// terminar, para `GuestHomeScreen` completar o `joinWeddingByInviteToken`
/// assim que a conta ficar ativa, sem precisar de um fluxo de registo
/// paralelo dedicado a tokens. `Notifier` em vez de `StateProvider`
/// (removido no Riverpod 3, ver `pubspec.yaml`), mesma convenção de
/// `AuthController`.
class PendingInviteTokenNotifier extends Notifier<String?> {
  @override
  String? build() => null;

  void set(String? token) => state = token;
}

final pendingInviteTokenProvider = NotifierProvider<PendingInviteTokenNotifier, String?>(
  PendingInviteTokenNotifier.new,
);

/// Liga a conta atual a uma linha de `guests` específica através do seu
/// convite individual (`guests.rsvp_token`, reaproveitado como link/
/// código individual — ver `071_guest_join_mode_and_invite_token.sql`).
/// Ao contrário de [joinWeddingByCode], nunca cria uma linha nova — um
/// token só existe para uma linha que o casal já criou.
Future<GuestJoinResult> joinWeddingByInviteToken(String token) async {
  final rows =
      await supabase.rpc('join_wedding_by_invite_token', params: {'p_token': token.trim()})
          as List;
  return GuestJoinResult.fromRow(rows.first as Map<String, dynamic>);
}

/// Conclui o wizard "Vais ao casamento?" (`complete_guest_onboarding()`,
/// `073_guest_onboarding_wizard.sql`) — só produz efeito uma vez por
/// convidado (a função ignora silenciosamente uma segunda chamada,
/// `onboarding_completed_at is null` na cláusula `where`).
Future<void> completeGuestOnboarding({
  required bool attending,
  String? plusOneName,
  String? menuSelection,
  String? dietaryRestrictions,
  required WeddingSide side,
  String? groupLabel,
}) async {
  await supabase.rpc(
    'complete_guest_onboarding',
    params: {
      'p_attending': attending,
      'p_plus_one_name': plusOneName,
      'p_menu_selection': menuSelection,
      'p_dietary_restrictions': dietaryRestrictions,
      'p_side': switch (side) {
        WeddingSide.groom => 'couple_a',
        WeddingSide.bride => 'couple_b',
        WeddingSide.both => 'both',
      },
      'p_group_label': groupLabel,
    },
  );
}

/// Um acompanhante do convidado (`guest_companions`, 081).
class GuestCompanion {
  final String name;
  final bool isChild;
  final int? childAge;
  final String? phone;
  final String? menu;
  final List<String> allergies;

  /// 'child', 'teen', 'adult' ou 'senior' (092/094).
  final String ageGroup;

  /// Email (093) — obrigatório para adultos; serve para cruzar com contas.
  final String? email;

  /// Com quem vai (crianças e seniores, 093).
  final String? accompaniedBy;

  /// Vai instalar a app (095) — então o contacto é obrigatório.
  final bool willInstallApp;

  /// Entrada da lista a que este acompanhante ficou ligado (093) — já
  /// estava no evento, ou criou conta depois.
  final String? linkedGuestId;

  const GuestCompanion({
    required this.name,
    this.email,
    this.accompaniedBy,
    this.linkedGuestId,
    this.willInstallApp = false,
    this.isChild = false,
    this.ageGroup = 'adult',
    this.childAge,
    this.phone,
    this.menu,
    this.allergies = const [],
  });
}

/// Substitui os acompanhantes do convidado. Sem a migração 081 não faz
/// nada (o nome continua guardado em `plus_one_name`).
Future<void> saveGuestCompanions({
  required String guestId,
  required String weddingId,
  required List<GuestCompanion> companions,
}) async {
  try {
    await supabase.from('guest_companions').delete().eq('guest_id', guestId);
    if (companions.isEmpty) return;
    await supabase.from('guest_companions').insert([
      for (final c in companions)
        {
          'guest_id': guestId,
          'wedding_id': weddingId,
          'name': c.name,
          'is_child': c.isChild || c.ageGroup == 'child',
          'age_group': c.isChild && c.ageGroup == 'adult' ? 'child' : c.ageGroup,
          'child_age': c.childAge,
          'phone': c.phone,
          'email': c.email,
          'accompanied_by': c.accompaniedBy,
          'will_install_app': c.willInstallApp,
          'menu': c.menu,
          'allergies': c.allergies,
        },
    ]);
  } catch (_) {}
}

/// Acompanhantes guardados (081) — vazio se a migração ainda não correu.
final guestCompanionsProvider = FutureProvider.family<List<GuestCompanion>, String>((ref, guestId) async {
  try {
    final rows = await supabase
        .from('guest_companions')
        .select()
        .eq('guest_id', guestId)
        .order('created_at');
    return [
      for (final r in (rows as List).cast<Map<String, dynamic>>())
        GuestCompanion(
          name: r['name'] as String,
          isChild: r['is_child'] as bool? ?? false,
          ageGroup: (r['age_group'] as String?) ?? ((r['is_child'] as bool? ?? false) ? 'child' : 'adult'),
          childAge: r['child_age'] as int?,
          phone: r['phone'] as String?,
          email: r['email'] as String?,
          accompaniedBy: r['accompanied_by'] as String?,
          willInstallApp: r['will_install_app'] as bool? ?? false,
          linkedGuestId: r['linked_guest_id'] as String?,
          menu: r['menu'] as String?,
          allergies: ((r['allergies'] as List?) ?? const []).cast<String>(),
        ),
    ];
  } catch (_) {
    return const [];
  }
});


/// Faixa etária do próprio convidado (`set_own_age_group`, 092).
Future<void> setOwnAgeGroup(String weddingId, String ageGroup) async {
  await supabase.rpc('set_own_age_group', params: {'p_wedding_id': weddingId, 'p_age_group': ageGroup});
}

/// Rótulo em português de 'child' / 'adult' / 'senior'.
String ageGroupLabel(String g) => switch (g) {
      'child' => 'Criança',
      'teen' => 'Adolescente',
      'senior' => 'Sénior',
      _ => 'Adulto',
    };
