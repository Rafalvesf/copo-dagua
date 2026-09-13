import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FileOptions;

import '../auth/auth_controller.dart';
import '../models/models.dart';
import '../supabase/supabase_config.dart';

class WeddingState {
  final bool loading;
  final Wedding? wedding;

  const WeddingState({this.loading = false, this.wedding});

  WeddingState copyWith({bool? loading, Wedding? wedding}) {
    return WeddingState(
      loading: loading ?? this.loading,
      wedding: wedding ?? this.wedding,
    );
  }
}

/// Liga-se à tabela `weddings` real (`database/migrations/002_onboarding.sql`,
/// `003_wedding.sql`, `012_wedding_quote.sql`) — substitui
/// `MockBackend.getWeddingForOwner/createWedding/updateWedding`. Ver
/// `ROADMAP.md`, 2026-08-30, Fase 2.
class WeddingController extends Notifier<WeddingState> {
  @override
  WeddingState build() {
    final ownerId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    if (ownerId != null) {
      Future.microtask(() => load(ownerId));
    }
    return const WeddingState();
  }

  Future<void> load(String ownerId) async {
    state = state.copyWith(loading: true);
    final row = await supabase.from('weddings').select().eq('owner_id', ownerId).maybeSingle();
    state = WeddingState(loading: false, wedding: row == null ? null : _fromRow(row));
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
    await supabase.from('weddings').insert({
      'owner_id': ownerId,
      'partner_name_1': partnerName1,
      'partner_name_2': partnerName2,
      'partner_1_age': partner1Age,
      'partner_2_age': partner2Age,
      'wedding_date': weddingDate?.toIso8601String().split('T').first,
      'location': location,
      'estimated_guests': estimatedGuests,
      'estimated_budget': estimatedBudget,
    });
    final row = await supabase.from('weddings').select().eq('owner_id', ownerId).single();
    final wedding = _fromRow(row);
    state = WeddingState(loading: false, wedding: wedding);
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
    final wedding = state.wedding;
    if (wedding == null) return;
    state = state.copyWith(loading: true);
    final bytes = await file.readAsBytes();
    final ext = file.name.contains('.') ? file.name.split('.').last.toLowerCase() : 'jpg';
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
    state = WeddingState(loading: false, wedding: _fromRow(row));
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
    state = WeddingState(loading: false, wedding: _fromRow(row));
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
