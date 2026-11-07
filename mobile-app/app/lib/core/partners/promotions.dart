import 'dart:async';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';
import 'partner_pro.dart' show myPartnerProProvider;

/// Destaques pagos dos parceiros e destaques personalizados (migração 155,
/// pedido 2026-11-03). Tudo tolera a migração ainda não corrida.

// ---------- Interesse do cliente ----------

/// Regista o interesse numa categoria (filtrar, pesquisar, ver, favorito,
/// pedir orçamento, tarefa). Nunca bloqueia nem dá erro.
void trackInterest(String? categorySlug, String kind, {String? partnerId}) {
  if (categorySlug == null || categorySlug.isEmpty) return;
  unawaited(() async {
    try {
      await supabase.rpc('track_interest', params: {
        'p_category': categorySlug,
        'p_kind': kind,
        'p_partner': partnerId,
      });
    } catch (_) {}
  }());
}

/// Toque num destaque: se for pago, as reservas que vierem daqui pagam +6%.
void trackPromotionClick(String partnerId) {
  unawaited(() async {
    try {
      await supabase.rpc('track_promotion_click', params: {'p_partner': partnerId});
    } catch (_) {}
  }());
}

// ---------- Destaques para mim ----------

class FeaturedPick {
  final String partnerId;
  final String name;
  final String? coverPhotoUrl;
  final String? categorySlug;
  final String? categoryLabel;
  final bool paid;
  const FeaturedPick({
    required this.partnerId,
    required this.name,
    this.coverPhotoUrl,
    this.categorySlug,
    this.categoryLabel,
    this.paid = false,
  });
}

/// (zona, categoria, quantos) → destaques escolhidos para esta pessoa.
/// `null` quando a migração ainda não existe (usa-se o carrossel antigo).
final featuredForMeProvider =
    FutureProvider.family<List<FeaturedPick>?, ({String? location, String? category, int limit})>((ref, k) async {
  ref.watch(authControllerProvider.select((s) => s.profile?.id));
  try {
    final rows = await supabase.rpc('featured_partners_for_me', params: {
      'p_location': (k.location == null || k.location!.isEmpty) ? null : k.location,
      'p_category': k.category,
      'p_limit': k.limit,
    }) as List;
    return [
      for (final r in rows.cast<Map<String, dynamic>>())
        FeaturedPick(
          partnerId: r['partner_id'] as String,
          name: r['business_name'] as String? ?? '',
          coverPhotoUrl: r['cover_photo_url'] as String?,
          categorySlug: r['category_slug'] as String?,
          categoryLabel: r['category_label'] as String?,
          paid: r['paid'] == true,
        ),
    ];
  } on PostgrestException {
    return null;
  } catch (_) {
    return null;
  }
});

// ---------- Parceiro: o meu destaque ----------

class MyPromotion {
  /// `active`, `waiting` (em fila) ou null (desligado).
  final String? status;
  final String? categorySlug;
  final String? categoryLabel;
  final String? region;
  final int? queuePosition;
  final int clicks30d;
  final int bookingsFromPromo;
  final double extraPct;
  final int slots;
  /// false se a migração 155 ainda não correu.
  final bool available;
  const MyPromotion({
    this.status,
    this.categorySlug,
    this.categoryLabel,
    this.region,
    this.queuePosition,
    this.clicks30d = 0,
    this.bookingsFromPromo = 0,
    this.extraPct = 6,
    this.slots = 6,
    this.available = true,
  });

  bool get on => status == 'active' || status == 'waiting';
}

final myPromotionProvider = FutureProvider<MyPromotion>((ref) async {
  ref.watch(authControllerProvider.select((s) => s.profile?.id));
  try {
    final rows = await supabase.rpc('my_partner_promotion') as List;
    if (rows.isEmpty) {
      // Pro (migração 161): o destaque custa menos.
      final pro = await ref.watch(myPartnerProProvider.future);
      return MyPromotion(extraPct: pro.active ? pro.proPromotionExtraPct : (pro.enabled ? pro.promotionExtraPct : 6));
    }
    final r = (rows.first as Map).cast<String, dynamic>();
    return MyPromotion(
      status: r['status'] as String?,
      categorySlug: r['category_slug'] as String?,
      categoryLabel: r['category_label'] as String?,
      region: r['region'] as String?,
      queuePosition: (r['queue_position'] as num?)?.toInt(),
      clicks30d: (r['clicks_30d'] as num?)?.toInt() ?? 0,
      bookingsFromPromo: (r['bookings_from_promo'] as num?)?.toInt() ?? 0,
      extraPct: (r['extra_pct'] as num?)?.toDouble() ?? 6,
      slots: (r['slots'] as num?)?.toInt() ?? 6,
    );
  } catch (_) {
    return const MyPromotion(available: false);
  }
});

class PromotionError implements Exception {
  final String code;
  const PromotionError(this.code);
  String get message => switch (code) {
        'already_promoted' => 'Já tens um destaque ligado.',
        'invalid_category' => 'Escolhe uma das tuas categorias.',
        'forbidden' => 'O teu perfil tem de estar publicado para entrar em destaque.',
        _ => 'Não foi possível ligar o destaque. Tenta outra vez.',
      };
}

/// Liga o destaque. Devolve `active` ou `waiting` (fila cheia).
Future<String> startPromotion({required String categorySlug, String? region}) async {
  try {
    final res = await supabase.rpc('start_partner_promotion', params: {'p_category': categorySlug, 'p_region': region});
    return res as String? ?? 'active';
  } on PostgrestException catch (e) {
    final m = e.message;
    throw PromotionError(m.contains('already_promoted')
        ? 'already_promoted'
        : m.contains('invalid_category')
            ? 'invalid_category'
            : e.code == '42501'
                ? 'forbidden'
                : 'unknown');
  }
}

Future<void> stopPromotion() async {
  await supabase.rpc('stop_partner_promotion');
}

/// Categorias e zonas do próprio parceiro (para escolher o destaque).
final myPromotionOptionsProvider =
    FutureProvider<({List<({String slug, String label})> categories, List<String> areas, bool nationwide})>((ref) async {
  final uid = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (uid == null) return (categories: const <({String slug, String label})>[], areas: const <String>[], nationwide: false);
  final row = await supabase
      .from('partner_profiles')
      .select('service_areas, nationwide, partner_profile_categories(partner_categories(slug, label_pt))')
      .eq('id', uid)
      .maybeSingle();
  final cats = <({String slug, String label})>[];
  for (final l in ((row?['partner_profile_categories'] as List?) ?? const []).cast<Map<String, dynamic>>()) {
    final c = l['partner_categories'] as Map<String, dynamic>?;
    if (c != null) cats.add((slug: c['slug'] as String, label: c['label_pt'] as String));
  }
  return (
    categories: cats,
    areas: ((row?['service_areas'] as List?) ?? const []).cast<String>(),
    nationwide: row?['nationwide'] == true,
  );
});
