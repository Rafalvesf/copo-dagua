import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FileOptions;

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Uma linha da taxonomia fixa `partner_categories` — ver
/// `partner-app/profile/database.md`.
class PartnerCategoryOption {
  final String id;
  final String label;

  /// Vazio para chamadores que não precisam dele (`loadCategoryOptions()`
  /// já o preenche) — mantido opcional para não obrigar a mudar os
  /// sítios que só usam `id`/`label` (assistente de onboarding,
  /// "Informações do negócio").
  final String slug;

  const PartnerCategoryOption({required this.id, required this.label, this.slug = ''});
}

/// Liga-se a `partner_profiles` real (`005_partner_profile.sql`,
/// `013_partner_contact_email.sql`) — substitui
/// `MockBackend.updateBusinessInfo`. Ver `ROADMAP.md`, 2026-08-30, Fase 3.
class PartnerProfileController extends Notifier<bool> {
  @override
  bool build() => false; // loading

  Future<void> updateBusinessInfo({
    String? businessName,
    String? businessDescription,
    List<String>? serviceAreas,
    int? yearsExperience,
    String? website,
    String? instagram,
    String? phone,
    String? contactEmail,
    bool? acceptingRequests,
    bool? travelsForEvents,
  }) async {
    state = true;
    final profile = ref.read(authControllerProvider).profile!;
    final row = await supabase
        .from('partner_profiles')
        .update({
          if (businessName != null) 'business_name': businessName,
          if (businessDescription != null) 'description': businessDescription,
          if (serviceAreas != null) 'service_areas': serviceAreas,
          if (yearsExperience != null) 'years_experience': yearsExperience,
          if (website != null) 'website_url': website,
          if (instagram != null) 'instagram_url': instagram,
          if (phone != null) 'phone': phone,
          if (contactEmail != null) 'contact_email': contactEmail,
          if (acceptingRequests != null) 'is_paused': !acceptingRequests,
          if (travelsForEvents != null) 'nationwide': travelsForEvents,
          'updated_at': DateTime.now().toIso8601String(),
        })
        .eq('id', profile.id)
        .select()
        .single();
    final updated = profile.copyWith(
      businessName: row['business_name'] as String?,
      businessDescription: row['description'] as String?,
      serviceAreas: (row['service_areas'] as List?)?.cast<String>() ?? const [],
      yearsExperience: row['years_experience'] as int?,
      website: row['website_url'] as String?,
      instagram: row['instagram_url'] as String?,
      phone: row['phone'] as String?,
      contactEmail: row['contact_email'] as String?,
      acceptingRequests: !(row['is_paused'] as bool? ?? false),
      travelsForEvents: row['nationwide'] as bool? ?? true,
    );
    ref.read(authControllerProvider.notifier).refreshProfile(updated);
    await refreshReviewStatus();
    state = false;
  }

  Future<List<PartnerCategoryOption>> loadCategoryOptions() async {
    final rows = await supabase
        .from('partner_categories')
        .select('id, label_pt, slug')
        .eq('is_active', true)
        .order('label_pt', ascending: true);
    return rows
        .map((r) => PartnerCategoryOption(
              id: r['id'] as String,
              label: r['label_pt'] as String,
              slug: r['slug'] as String,
            ))
        .toList();
  }

  Future<Set<String>> loadSelectedCategoryIds(String partnerId) async {
    final rows = await supabase
        .from('partner_profile_categories')
        .select('category_id')
        .eq('partner_id', partnerId);
    return rows.map((r) => r['category_id'] as String).toSet();
  }

  /// Substitui o conjunto de categorias do parceiro (apaga tudo, insere de
  /// novo) — mais simples do que calcular a diferença, aceitável porque
  /// RN03 limita a no máximo 5 linhas por parceiro. O trigger
  /// `enforce_partner_category_limit()` (`005_partner_profile.sql`) é a
  /// fonte de verdade do limite; a UI só evita chegar lá com mais de 5
  /// selecionadas.
  Future<void> saveCategories(List<PartnerCategoryOption> selected) async {
    state = true;
    final profile = ref.read(authControllerProvider).profile!;
    await supabase.from('partner_profile_categories').delete().eq('partner_id', profile.id);
    if (selected.isNotEmpty) {
      await supabase.from('partner_profile_categories').insert([
        for (final c in selected) {'partner_id': profile.id, 'category_id': c.id},
      ]);
    }
    ref.read(authControllerProvider.notifier).refreshProfile(
          profile.copyWith(categoryLabels: selected.map((c) => c.label).toList()),
        );
    await refreshReviewStatus();
    state = false;
  }

  /// Grava o NIF em `partner_verification` (`005_partner_profile.sql`) —
  /// nunca teve nenhum ecrã de edição até agora, apesar de já ser exigido
  /// por `submit_partner_profile_for_review()`. Pedido explícito do
  /// utilizador: "nif from the company is mandatory too".
  Future<void> updateTaxId(String taxId) async {
    state = true;
    final profile = ref.read(authControllerProvider).profile!;
    await supabase.from('partner_verification').update({'tax_id': taxId}).eq('partner_id', profile.id);
    await refreshReviewStatus();
    state = false;
  }

  /// Logótipo obrigatório de onboarding (pedido explícito do utilizador)
  /// — reaproveita `partner_profiles.cover_photo_url` (única coluna já
  /// existente com este propósito, ver nota em [Profile.logoUrl]) e o
  /// mesmo bucket `portfolio` do portefólio
  /// (`023_portfolio_storage.sql`), num caminho fixo
  /// (`{partner_id}/logo.{ext}`, `upsert: true`) — reenviar substitui o
  /// ficheiro em vez de acumular versões antigas órfãs no Storage.
  Future<void> uploadLogo(XFile file) async {
    state = true;
    final profile = ref.read(authControllerProvider).profile!;
    final bytes = await file.readAsBytes();
    final ext = file.name.contains('.') ? file.name.split('.').last.toLowerCase() : 'jpg';
    final path = '${profile.id}/logo.$ext';

    await supabase.storage.from('portfolio').uploadBinary(
      path,
      bytes,
      fileOptions: FileOptions(contentType: 'image/$ext', upsert: true),
    );
    final logoUrl = supabase.storage.from('portfolio').getPublicUrl(path);

    await supabase.from('partner_profiles').update({
      'cover_photo_url': logoUrl,
      'updated_at': DateTime.now().toIso8601String(),
    }).eq('id', profile.id);

    ref.read(authControllerProvider.notifier).refreshProfile(profile.copyWith(logoUrl: logoUrl));
    await refreshReviewStatus();
    state = false;
  }

  /// Relê `status`/`rejection_reason` reais e atualiza a cache local —
  /// não existe nenhum botão de submissão manual (pedido explícito do
  /// utilizador: "Não quero um botão separado de 'Enviar para
  /// revisão'"), a transição para `pending_review` acontece sozinha do
  /// lado da base de dados assim que os requisitos ficam completos
  /// (`maybe_auto_submit_partner_profile()`,
  /// `026_partner_auto_submission.sql`, disparada por triggers em cada
  /// escrita relevante). Chamada no fim de cada método deste controller
  /// que possa ser a última peça em falta, para a UI refletir a
  /// transição automática sem precisar de reiniciar a app.
  Future<void> refreshReviewStatus() async {
    final profile = ref.read(authControllerProvider).profile;
    if (profile == null) return;
    final row = await supabase
        .from('partner_profiles')
        .select('status, rejection_reason')
        .eq('id', profile.id)
        .single();
    ref.read(authControllerProvider.notifier).refreshProfile(
          profile.copyWith(
            partnerProfileStatus: row['status'] as String?,
            // String vazia, não null — copyWith() usa `??`, só string
            // vazia limpa mesmo o campo (ver nota no topo de models.dart).
            rejectionReason: (row['rejection_reason'] as String?) ?? '',
          ),
        );
  }
}

final partnerProfileControllerProvider = NotifierProvider<PartnerProfileController, bool>(
  PartnerProfileController.new,
);
