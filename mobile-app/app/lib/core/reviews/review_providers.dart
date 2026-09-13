import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';

/// Avaliação real (se existir) de uma reserva específica — usado para
/// o lado do casal saber se já avaliou (mostrar "Avaliar" vs a
/// avaliação já deixada) sem precisar de outra tabela/flag em
/// `bookings`. Ver `database/migrations/045_reviews.sql`.
final reviewForBookingProvider = FutureProvider.family<Review?, String>((ref, bookingId) async {
  final row = await supabase.from('reviews').select().eq('booking_id', bookingId).maybeSingle();
  if (row == null) return null;
  return Review.fromRow(row);
});

/// Avaliações publicadas de um parceiro — Marketplace/perfil público
/// (`partner_detail_screen.dart`). Só `published`: `flagged`/`removed`
/// nunca aparecem fora do próprio painel do parceiro/admin.
final publicReviewsForPartnerProvider = FutureProvider.family<List<Review>, String>((ref, partnerId) async {
  final rows = await supabase
      .from('reviews')
      .select()
      .eq('partner_id', partnerId)
      .eq('status', 'published')
      .order('created_at', ascending: false);

  // `weddings` não é legível por um visitante qualquer do Marketplace
  // (RLS de `003_wedding.sql`) — nome/foto do casal autor vêm à parte,
  // via `get_review_authors()` (`069_public_review_authors.sql`), que
  // expõe deliberadamente só isso, nunca o resto de `weddings`. Pedido
  // explícito do utilizador (2026-09-13): mostrar nome+ícone no cartão
  // de avaliação do perfil público do parceiro.
  final authorRows = await supabase.rpc('get_review_authors', params: {'p_partner_id': partnerId}) as List;
  final authorsByWeddingId = {
    for (final a in authorRows.cast<Map<String, dynamic>>()) a['wedding_id'] as String: a,
  };

  return (rows as List).map((r) {
    final row = r as Map<String, dynamic>;
    final author = authorsByWeddingId[row['wedding_id']];
    return Review.fromRow({
      ...row,
      if (author != null)
        'weddings': {
          'partner_name_1': author['display_name'],
          'cover_photo_url': author['cover_photo_url'],
        },
    });
  }).toList();
});

final publicReviewSummaryForPartnerProvider = Provider.family<PartnerReviewSummary, String>((ref, partnerId) {
  final reviewsAsync = ref.watch(publicReviewsForPartnerProvider(partnerId));
  final reviews = reviewsAsync.maybeWhen(data: (v) => v, orElse: () => const <Review>[]);
  if (reviews.isEmpty) return const PartnerReviewSummary(average: 0, count: 0);
  final avg = reviews.map((r) => r.rating).reduce((a, b) => a + b) / reviews.length;
  return PartnerReviewSummary(average: avg, count: reviews.length);
});

/// Só o casal da reserva pode submeter, e só depois de `completed` —
/// validado de novo, server-side, por `submit_review()` (nunca confiar
/// só na app para esconder o botão).
Future<void> submitReview(
  WidgetRef ref, {
  required String bookingId,
  required int rating,
  String? comment,
}) async {
  await supabase.rpc('submit_review', params: {
    'p_booking_id': bookingId,
    'p_rating': rating,
    'p_comment': comment,
  });
  ref.invalidate(reviewForBookingProvider(bookingId));
}

/// Corrigir a própria avaliação depois de enviada
/// (`066_update_review.sql`) — pedido explícito do utilizador: "faz com
/// que os casais possam editar as suas reviews". Nunca toca em
/// `status` (moderação continua só do admin/parceiro via `flag_review()`).
Future<void> updateReview(
  WidgetRef ref, {
  required String reviewId,
  required String bookingId,
  required int rating,
  String? comment,
}) async {
  await supabase.rpc('update_review', params: {
    'p_review_id': reviewId,
    'p_rating': rating,
    'p_comment': comment,
  });
  ref.invalidate(reviewForBookingProvider(bookingId));
}
