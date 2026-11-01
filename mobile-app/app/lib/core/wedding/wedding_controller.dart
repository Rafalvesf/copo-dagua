import 'dart:typed_data';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart'
    show FileOptions, PostgrestException;

import 'package:shared_preferences/shared_preferences.dart';

import '../auth/auth_controller.dart';
import '../models/models.dart';
import '../supabase/supabase_config.dart';

class WeddingState {
  final bool loading;

  /// Evento ativo — o que os separadores do organizador mostram.
  final Wedding? wedding;

  /// Todos os eventos que a conta organiza (dono ou co-organizador),
  /// do mais recente para o mais antigo (vários por conta, 2026-11).
  final List<Wedding> events;

  const WeddingState({this.loading = false, this.wedding, this.events = const []});

  WeddingState copyWith({bool? loading, Wedding? wedding, List<Wedding>? events}) {
    return WeddingState(
      loading: loading ?? this.loading,
      wedding: wedding ?? this.wedding,
      events: events ?? (wedding == null ? this.events : _replace(this.events, wedding)),
    );
  }

  static List<Wedding> _replace(List<Wedding> list, Wedding w) =>
      [for (final e in list) e.id == w.id ? w : e];
}

const _activeEventKey = 'active_event_id';

/// Liga-se à tabela `weddings` real (`database/migrations/002_onboarding.sql`,
/// `003_wedding.sql`, `012_wedding_quote.sql`) — substitui
/// `MockBackend.getWeddingForOwner/createWedding/updateWedding`. Ver
/// `ROADMAP.md`, 2026-08-30, Fase 2.
class WeddingController extends Notifier<WeddingState> {
  @override
  WeddingState build() {
    final ownerId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    // Id vazio = registo ainda por criar (onboarding sem conta).
    if (ownerId != null && ownerId.isNotEmpty) {
      Future.microtask(() => load(ownerId));
    }
    return const WeddingState();
  }

  Future<String?> _savedActiveId() async {
    try {
      return (await SharedPreferences.getInstance()).getString(_activeEventKey);
    } catch (_) {
      return null;
    }
  }

  Future<void> _saveActiveId(String id) async {
    try {
      await (await SharedPreferences.getInstance()).setString(_activeEventKey, id);
    } catch (_) {}
  }

  Future<void> load(String ownerId, {String? activeId}) async {
    state = state.copyWith(loading: true);
    final owned = (await supabase
            .from('weddings')
            .select()
            .eq('owner_id', ownerId)
            .order('created_at', ascending: false))
        .cast<Map<String, dynamic>>();
    // O par que entrou pelo link de convite (079) não é dono — é
    // colaborador ativo do casamento do outro.
    final links = (await supabase
            .from('wedding_collaborators')
            .select('wedding_id')
            .eq('user_id', ownerId)
            .eq('status', 'active'))
        .cast<Map<String, dynamic>>();
    final ownedIds = owned.map((r) => r['id']).toSet();
    final collabIds = [
      for (final l in links)
        if (!ownedIds.contains(l['wedding_id'])) l['wedding_id'] as String,
    ];
    final collab = collabIds.isEmpty
        ? const <Map<String, dynamic>>[]
        : (await supabase.from('weddings').select().inFilter('id', collabIds)).cast<Map<String, dynamic>>();
    final events = [for (final r in [...owned, ...collab]) _fromRow(r)];
    final wanted = activeId ?? state.wedding?.id ?? await _savedActiveId();
    final active = events.where((e) => e.id == wanted).firstOrNull ?? events.firstOrNull;
    state = WeddingState(loading: false, wedding: active, events: events);
  }

  /// Muda o evento ativo (separador Eventos → "Os meus eventos").
  Future<void> select(String weddingId) async {
    final w = state.events.where((e) => e.id == weddingId).firstOrNull;
    if (w == null) return;
    await _saveActiveId(weddingId);
    state = WeddingState(loading: false, wedding: w, events: state.events);
  }

  /// Dados do onboarding v2 (081): tipos de evento escolhidos (até 2),
  /// "Qual?" quando é "Outro" e telemóveis de quem organiza. Ignora em
  /// silêncio se a migração ainda não correu.
  Future<void> saveOnboardingExtras({
    required String weddingId,
    required List<EventType> eventTypes,
    String? otherLabel,
    String? phone1,
    String? phone2,
  }) async {
    try {
      await supabase.from('weddings').update({
        'event_types': [for (final t in eventTypes) t.dbValue],
        'event_type_other': otherLabel,
        'partner1_phone': phone1,
        'partner2_phone': phone2,
      }).eq('id', weddingId);
    } catch (_) {}
    if (phone1 != null && phone1.isNotEmpty) {
      try {
        await supabase.from('profiles').update({'phone': phone1}).eq('id', supabase.auth.currentUser!.id);
      } catch (_) {}
    }
  }

  Future<Wedding> create({
    required String partnerName1,
    String? partnerName2,
    int? partner1Age,
    int? partner2Age,
    DateTime? weddingDate,
    String? location,
    int? estimatedGuests,
    double? estimatedBudget,
    EventType eventType = EventType.wedding,
  }) async {
    state = state.copyWith(loading: true);
    final ownerId = supabase.auth.currentUser!.id;
    // Duas chamadas em vez de `.insert(...).select().single()` de
    // propósito: a policy de select de `weddings` (`is_wedding_member()`,
    // `003_wedding.sql`) faz uma subquery à própria tabela para decidir
    // visibilidade — o Postgres aplica essa policy também ao `RETURNING`
    // do INSERT, mas nesse momento a linha ainda não existe para a
    // subquery ver dentro do mesmo comando, e o pedido falha com
    // "new row violates row-level security policy" mesmo a policy de
    // insert (`owner_id = auth.uid()`) já tendo passado. Um `UPDATE ...
    // RETURNING` não tem este problema (a linha já existia antes do
    // comando começar) — só o INSERT precisa deste contorno. Descoberto
    // 2026-08-30 ao testar a Fase 2 contra o Supabase real; documentado
    // como padrão a repetir em `docs/architecture/RLS_POLICY.md`.
    final values = <String, dynamic>{
      'owner_id': ownerId,
      'partner_name_1': partnerName1,
      'partner_name_2': partnerName2,
      'partner_1_age': partner1Age,
      'partner_2_age': partner2Age,
      'wedding_date': weddingDate?.toIso8601String().split('T').first,
      'location': location,
      'estimated_guests': estimatedGuests,
      'estimated_budget': estimatedBudget,
    };
    try {
      await supabase.from('weddings').insert({
        ...values,
        'event_type': eventType.dbValue,
      });
    } on PostgrestException catch (e) {
      // Enquanto `074_wedding_event_type.sql` não estiver aplicada, a
      // coluna não existe (PGRST204 / 42703): cria o evento na mesma, sem
      // o tipo, para o onboarding nunca ficar bloqueado por isto.
      // Tipos novos (081) numa base de dados que ainda só aceita os 4
      // antigos: grava como "other" em vez de falhar.
      if (e.code == '23514' && !eventType.legacy) {
        await supabase.from('weddings').insert({...values, 'event_type': 'other'});
      } else {
        final missingColumn = e.code == 'PGRST204' ||
            e.code == '42703' ||
            e.message.contains('event_type');
        if (!missingColumn) rethrow;
        await supabase.from('weddings').insert(values);
      }
    }
    // Vários eventos por conta (2026-11): o novo é o mais recente.
    final row = await supabase
        .from('weddings')
        .select()
        .eq('owner_id', ownerId)
        .order('created_at', ascending: false)
        .limit(1)
        .single();
    final wedding = _fromRow(row);
    await _saveActiveId(wedding.id);
    state = WeddingState(
      loading: false,
      wedding: wedding,
      events: [wedding, ...state.events.where((e) => e.id != wedding.id)],
    );
    return wedding;
  }

  Future<void> update(Wedding wedding) async {
    state = state.copyWith(loading: true);
    final row = await supabase
        .from('weddings')
        .update({
          'partner_name_1': wedding.partnerName1,
          'partner_name_2': wedding.partnerName2,
          'partner_1_age': wedding.partner1Age,
          'partner_2_age': wedding.partner2Age,
          'wedding_date': wedding.weddingDate?.toIso8601String().split('T').first,
          'location': wedding.location,
          'venue': wedding.venue,
          'ceremony_type': wedding.ceremonyType.name,
          'estimated_guests': wedding.estimatedGuests,
          'estimated_budget': wedding.estimatedBudget,
          'status': wedding.status.name,
          'quote': wedding.quote,
          'cover_photo_url': wedding.coverPhotoUrl,
          'profile_photo_url': wedding.profilePhotoUrl,
          'updated_at': DateTime.now().toIso8601String(),
        })
        .eq('id', wedding.id)
        .select()
        .single();
    state = state.copyWith(loading: false, wedding: _fromRow(row));
  }

  /// Upload da foto de capa escolhida pelo casal para o cartão
  /// principal do Home — bucket `wedding-banners`
  /// (035_wedding_banner_storage.sql), mesmo padrão que
  /// `PartnerProfileController.uploadLogo` (ficheiro único por
  /// casamento, `upsert: true`, caminho `{wedding_id}/banner.{ext}`).
  Future<void> uploadBanner(XFile file) async {
    final bytes = await file.readAsBytes();
    final ext = file.name.contains('.') ? file.name.split('.').last.toLowerCase() : 'jpg';
    await uploadBannerBytes(bytes, ext: ext);
  }

  /// Mesma lógica de [uploadBanner], mas a partir de bytes já em
  /// memória — usado depois de `showPhotoAdjustScreen()`
  /// (`photo_adjust_screen.dart`), que devolve a foto já reenquadrada
  /// pelo casal como PNG, não o ficheiro original escolhido. Pedido
  /// explícito do utilizador: "faz com que eu consiga ajustar a
  /// fotografia do casal".
  Future<void> uploadBannerBytes(Uint8List bytes, {String ext = 'png'}) async {
    final wedding = state.wedding;
    if (wedding == null) return;
    state = state.copyWith(loading: true);
    final path = '${wedding.id}/banner.$ext';

    await supabase.storage.from('wedding-banners').uploadBinary(
      path,
      bytes,
      fileOptions: FileOptions(contentType: 'image/$ext', upsert: true),
    );
    final bannerUrl = supabase.storage.from('wedding-banners').getPublicUrl(path);

    final row = await supabase
        .from('weddings')
        .update({
          'cover_photo_url': bannerUrl,
          'updated_at': DateTime.now().toIso8601String(),
        })
        .eq('id', wedding.id)
        .select()
        .single();
    state = state.copyWith(loading: false, wedding: _fromRow(row));
  }

  /// Upload da foto de perfil do ecrã "Os noivos" — mesmo bucket
  /// `wedding-banners`, caminho `{wedding_id}/profile.{ext}` em vez
  /// de `.../banner.{ext}` (038_wedding_profile_photo.sql). Separado
  /// de [uploadBanner] de propósito: pedido explícito do utilizador
  /// "o pfp em noivos pode e deve ser diferente ao da imagem em home".
  Future<void> uploadProfilePhoto(XFile file) async {
    final wedding = state.wedding;
    if (wedding == null) return;
    state = state.copyWith(loading: true);
    final bytes = await file.readAsBytes();
    final ext = file.name.contains('.') ? file.name.split('.').last.toLowerCase() : 'jpg';
    final path = '${wedding.id}/profile.$ext';

    await supabase.storage.from('wedding-banners').uploadBinary(
      path,
      bytes,
      fileOptions: FileOptions(contentType: 'image/$ext', upsert: true),
    );
    final photoUrl = supabase.storage.from('wedding-banners').getPublicUrl(path);

    final row = await supabase
        .from('weddings')
        .update({
          'profile_photo_url': photoUrl,
          'updated_at': DateTime.now().toIso8601String(),
        })
        .eq('id', wedding.id)
        .select()
        .single();
    state = state.copyWith(loading: false, wedding: _fromRow(row));
  }

  /// Link para o par se juntar a este casamento (`create_partner_invite`,
  /// 079) — partilhado pelo menu de partilha do telemóvel.
  Future<String> createPartnerInviteToken(String weddingId) async {
    final token = await supabase.rpc('create_partner_invite', params: {'p_wedding_id': weddingId});
    return token as String;
  }

  /// RN: nunca bloqueia o avanço do Onboarding — falhas aqui (ex: email já
  /// convidado) não devem impedir `create()` de já ter criado o casamento.
  Future<void> inviteCollaborator({required String weddingId, required String email}) async {
    await supabase.from('wedding_collaborators').insert({
      'wedding_id': weddingId,
      'invited_email': email,
    });
  }

  Wedding _fromRow(Map<String, dynamic> row) {
    return Wedding(
      id: row['id'] as String,
      ownerId: row['owner_id'] as String,
      partnerName1: row['partner_name_1'] as String,
      partnerName2: row['partner_name_2'] as String?,
      partner1Age: row['partner_1_age'] as int?,
      partner2Age: row['partner_2_age'] as int?,
      weddingDate: row['wedding_date'] == null ? null : DateTime.parse(row['wedding_date'] as String),
      location: row['location'] as String?,
      venue: row['venue'] as String?,
      ceremonyType: CeremonyType.values.byName((row['ceremony_type'] as String?) ?? 'civil'),
      eventType: EventType.fromDb(row['event_type'] as String?),
      estimatedGuests: row['estimated_guests'] as int?,
      estimatedBudget: (row['estimated_budget'] as num?)?.toDouble(),
      status: WeddingStatus.values.byName((row['status'] as String?) ?? 'planning'),
      quote: row['quote'] as String?,
      coverPhotoUrl: row['cover_photo_url'] as String?,
      profilePhotoUrl: row['profile_photo_url'] as String?,
      updatedAt: row['updated_at'] == null ? null : DateTime.parse(row['updated_at'] as String),
      guestCode: row['guest_code'] as String?,
    );
  }
}

final weddingControllerProvider = NotifierProvider<WeddingController, WeddingState>(WeddingController.new);
