import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Quanto falta ao perfil do parceiro para pedir a verificação (fluxo novo,
/// 2026-11-27). Segue o que o servidor exige em
/// `partner_profile_requirements_met()` (migração 104): nome, descrição
/// (50+ letras), categoria, 3 fotos, zona, NIF, logótipo, preços e os
/// pagamentos ativos (Stripe).
class PartnerCompletion {
  final bool basics; // nome, categoria e zona
  final bool logo;
  final int photos; // fotos (imagens) no portefólio
  final bool description;
  final bool pricing;
  final bool taxId;
  final bool payments; // stripe_charges_enabled
  final String status; // draft | pending_review | published | …
  final String city;
  final int? travelKm;
  final bool nationwide;
  final List<String> categories;

  const PartnerCompletion({
    required this.basics,
    required this.logo,
    required this.photos,
    required this.description,
    required this.pricing,
    required this.taxId,
    required this.payments,
    required this.status,
    this.city = '',
    this.travelKm,
    this.nationwide = false,
    this.categories = const [],
  });

  static const minPhotos = 3;

  bool get photosDone => photos >= minPhotos;
  bool get payoutDone => taxId && payments;

  /// Passos que contam para a percentagem (todos com o mesmo peso).
  List<bool> get _steps => [basics, logo, photosDone, description, pricing, payoutDone];
  int get done => _steps.where((s) => s).length;
  int get total => _steps.length;
  int get missing => total - done;
  int get percent => (done / total * 100).round();
  bool get complete => done == total;

  bool get published => status == 'published';
  bool get inReview => status == 'pending_review';

  /// Pode pedir a verificação (o servidor só aceita destes estados).
  bool get canSubmit => complete && const {'draft', 'rejected', 'changes_required'}.contains(status);
}

final partnerCompletionProvider = FutureProvider<PartnerCompletion?>((ref) async {
  final profile = ref.watch(authControllerProvider.select((s) => s.profile));
  final id = profile?.id;
  if (id == null) return null;
  final row = await supabase.from('partner_profiles').select('*').eq('id', id).maybeSingle();
  if (row == null) return null;
  final cats = await supabase
      .from('partner_profile_categories')
      .select('partner_categories(label_pt)')
      .eq('partner_id', id);
  final images = await supabase
      .from('partner_portfolio_items')
      .select('id')
      .eq('partner_id', id)
      .eq('media_type', 'image');
  final packages = await supabase.from('partner_service_packages').select('id').eq('partner_id', id);
  String? tax;
  try {
    final v = await supabase.from('partner_verification').select('tax_id').eq('partner_id', id).maybeSingle();
    tax = v?['tax_id'] as String?;
  } catch (_) {}

  final labels = [
    for (final c in cats as List)
      if ((c as Map)['partner_categories'] is Map) ((c['partner_categories'] as Map)['label_pt'] as String? ?? ''),
  ].where((l) => l.isNotEmpty).toList();
  final areas = (row['service_areas'] as List?)?.cast<String>() ?? const <String>[];
  final nationwide = row['nationwide'] as bool? ?? false;
  final pricingMode = row['pricing_mode'] as String? ?? 'quote_only';
  final hasPackages = (packages as List).isNotEmpty;
  return PartnerCompletion(
    basics: ((row['business_name'] as String?) ?? '').trim().isNotEmpty && labels.isNotEmpty && (nationwide || areas.isNotEmpty),
    logo: ((row['cover_photo_url'] as String?) ?? '').isNotEmpty,
    photos: (images as List).length,
    description: ((row['description'] as String?) ?? '').trim().length >= 50,
    // O servidor aceita «só orçamento» sem nada; aqui pede-se também o
    // valor de referência (o que os clientes veem em «Quanto pode custar»).
    pricing: pricingMode == 'packages' ? hasPackages : (hasPackages || row['average_quote_price'] != null),
    taxId: (tax ?? '').trim().isNotEmpty,
    payments: row['stripe_charges_enabled'] as bool? ?? false,
    status: row['status'] as String? ?? 'draft',
    city: (row['city'] as String?) ?? (areas.isEmpty ? '' : areas.first),
    travelKm: row['max_travel_distance_km'] as int?,
    nationwide: nationwide,
    categories: labels,
  );
});

/// Pede a verificação (`submit_partner_profile_for_review()`, migração 104).
/// O servidor também envia sozinho quando fica tudo
/// pronto (`maybe_auto_submit_partner_profile()`, migração 026).
Future<void> submitPartnerProfileForReview() async {
  await supabase.rpc('submit_partner_profile_for_review');
}
