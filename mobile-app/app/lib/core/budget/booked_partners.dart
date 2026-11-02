import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';

/// Empresas contratadas NA APP para cada categoria (slug → nomes), para
/// mostrar por baixo da categoria no Orçamento e em Serviços tratados
/// (pedido 2026-11). Só reservas ativas (proposta aceite, paga ou feita).
final bookedPartnersBySlugProvider = FutureProvider.family<Map<String, List<String>>, String>((ref, weddingId) async {
  const active = ['awaiting_deposit', 'confirmed', 'payment_overdue', 'disputed', 'completed'];
  try {
    final rows = await supabase
        .from('bookings')
        .select('status, partner_profiles(business_name, partner_profile_categories(partner_categories(slug)))')
        .eq('wedding_id', weddingId)
        .inFilter('status', active);
    final out = <String, List<String>>{};
    for (final r in (rows as List).cast<Map<String, dynamic>>()) {
      final pp = r['partner_profiles'] as Map<String, dynamic>?;
      final name = (pp?['business_name'] as String?)?.trim();
      if (name == null || name.isEmpty) continue;
      final links = (pp?['partner_profile_categories'] as List?) ?? const [];
      final first = links.isEmpty ? null : (links.first as Map<String, dynamic>)['partner_categories'] as Map<String, dynamic>?;
      final slug = (first?['slug'] as String?) ?? 'other';
      final list = out.putIfAbsent(slug, () => <String>[]);
      if (!list.contains(name)) list.add(name);
    }
    return out;
  } catch (_) {
    return const {};
  }
});

/// Slugs das categorias de parceiro que caem numa categoria do orçamento.
List<String> slugsForBudgetCategory(PartnerCategory? c) => switch (c) {
      PartnerCategory.venue => const ['venue'],
      PartnerCategory.catering => const ['catering'],
      PartnerCategory.photography => const ['photography'],
      PartnerCategory.music => const ['music_dj', 'bands_musicians'],
      PartnerCategory.decoration => const ['flowers_decor'],
      _ => const [],
    };
