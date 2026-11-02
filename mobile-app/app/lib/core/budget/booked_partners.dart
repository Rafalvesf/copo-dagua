import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';

/// Empresa contratada NA APP (reserva ativa) — mostrada por baixo da
/// categoria no Orçamento e em Serviços tratados, e na folha da categoria
/// do Orçamento (pedido 2026-11).
class BookedPartner {
  final String slug;
  final String name;
  final String status;
  final double total;
  final String? photoUrl;
  const BookedPartner({required this.slug, required this.name, required this.status, required this.total, this.photoUrl});

  String get statusLabel => switch (status) {
        'awaiting_deposit' => 'A aguardar sinal',
        'confirmed' => 'Confirmado',
        'payment_overdue' => 'Pagamento em atraso',
        'disputed' => 'Em disputa',
        'completed' => 'Concluído',
        _ => 'Contratado',
      };
}

/// Só reservas ativas (proposta aceite, paga ou feita).
final bookedPartnersProvider = FutureProvider.family<List<BookedPartner>, String>((ref, weddingId) async {
  const active = ['awaiting_deposit', 'confirmed', 'payment_overdue', 'disputed', 'completed'];
  try {
    final rows = await supabase
        .from('bookings')
        .select('status, total_amount, partner_profiles(business_name, cover_photo_url, partner_profile_categories(partner_categories(slug)))')
        .eq('wedding_id', weddingId)
        .inFilter('status', active);
    final out = <BookedPartner>[];
    for (final r in (rows as List).cast<Map<String, dynamic>>()) {
      final pp = r['partner_profiles'] as Map<String, dynamic>?;
      final name = (pp?['business_name'] as String?)?.trim();
      if (name == null || name.isEmpty) continue;
      final links = (pp?['partner_profile_categories'] as List?) ?? const [];
      final first = links.isEmpty ? null : (links.first as Map<String, dynamic>)['partner_categories'] as Map<String, dynamic>?;
      out.add(BookedPartner(
        slug: (first?['slug'] as String?) ?? 'other',
        name: name,
        status: r['status'] as String? ?? '',
        total: (r['total_amount'] as num?)?.toDouble() ?? 0,
        photoUrl: pp?['cover_photo_url'] as String?,
      ));
    }
    return out;
  } catch (_) {
    return const [];
  }
});

/// slug → nomes (sem repetidos).
final bookedPartnersBySlugProvider = FutureProvider.family<Map<String, List<String>>, String>((ref, weddingId) async {
  final list = await ref.watch(bookedPartnersProvider(weddingId).future);
  final out = <String, List<String>>{};
  for (final b in list) {
    final l = out.putIfAbsent(b.slug, () => <String>[]);
    if (!l.contains(b.name)) l.add(b.name);
  }
  return out;
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
