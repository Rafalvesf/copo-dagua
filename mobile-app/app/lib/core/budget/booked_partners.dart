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
  final String? id; // partner_profiles.id (2026-11-18)
  const BookedPartner({required this.slug, required this.name, required this.status, required this.total, this.photoUrl, this.id});

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
        .select('status, total_amount, partner_profiles(id, business_name, cover_photo_url, partner_profile_categories(partner_categories(slug)))')
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
        id: pp?['id'] as String?,
      ));
    }
    return out;
  } catch (_) {
    return const [];
  }
});

/// Ids dos parceiros com reserva ativa no evento (já "aceites"). Serve para
/// o programa saber se um parceiro escolhido já aparece ou se ainda está à
/// espera que aceite (2026-11-18).
final confirmedPartnerIdsProvider = FutureProvider.family<Set<String>, String>((ref, weddingId) async {
  final list = await ref.watch(bookedPartnersProvider(weddingId).future);
  return {for (final b in list) if (b.id != null && b.id!.isNotEmpty) b.id!};
});

/// Um parceiro do evento que pode entrar numa etapa do programa: já reservado
/// (`accepted`) ou ainda com pedido por responder (`à espera que aceite`).
class EventPartnerPick {
  final String id;
  final String name;
  final String? photoUrl;
  final bool accepted;
  const EventPartnerPick({required this.id, required this.name, this.photoUrl, required this.accepted});
}

/// Parceiros do evento para escolher no programa: os reservados (aceites) e os
/// que têm um pedido por responder (pendentes). Sem repetidos, aceites primeiro.
final eventPartnerPicksProvider = FutureProvider.family<List<EventPartnerPick>, String>((ref, weddingId) async {
  final out = <EventPartnerPick>[];
  final seen = <String>{};

  // 1) Reservados (aceites).
  try {
    final booked = await ref.watch(bookedPartnersProvider(weddingId).future);
    for (final b in booked) {
      final id = b.id;
      if (id == null || id.isEmpty || seen.contains(id)) continue;
      seen.add(id);
      out.add(EventPartnerPick(id: id, name: b.name, photoUrl: b.photoUrl, accepted: true));
    }
  } catch (_) {}

  // 2) Pedidos por responder (pendentes) — ainda sem reserva.
  try {
    final rows = await supabase
        .from('quote_requests')
        .select('status, partner_profiles(id, business_name, cover_photo_url)')
        .eq('wedding_id', weddingId)
        .inFilter('status', ['pending', 'viewed', 'proposal_sent']);
    for (final r in (rows as List).cast<Map<String, dynamic>>()) {
      final pp = r['partner_profiles'] as Map<String, dynamic>?;
      final id = (pp?['id'] as String?) ?? '';
      final name = (pp?['business_name'] as String?)?.trim() ?? '';
      if (id.isEmpty || name.isEmpty || seen.contains(id)) continue;
      seen.add(id);
      out.add(EventPartnerPick(id: id, name: name, photoUrl: pp?['cover_photo_url'] as String?, accepted: false));
    }
  } catch (_) {}

  return out;
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
