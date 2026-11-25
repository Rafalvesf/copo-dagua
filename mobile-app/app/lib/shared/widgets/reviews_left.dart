import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/models/models.dart';
import '../../core/partners/partner_providers.dart' show partnerByIdProvider;
import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import '../../features/profile/profile_widgets.dart' show ProfileSectionTitle;
import '../hero_icons.dart';
import 'partner_badges.dart' show VerifiedBadge;
import 'snappy_tap.dart';
import 'v2_kit.dart';
import '../../core/riverpod_cache.dart';

/// Avaliações publicadas que esta pessoa deixou (só as publicadas, que já
/// são públicas na página de cada parceiro).
final reviewsLeftProvider = FutureProvider.autoDispose.family<List<({String partnerId, int rating, DateTime at})>, String>(
  (ref, profileId) async {
  ref.staleWhileRevalidate();
    try {
      final rows = await supabase
          .from('reviews')
          .select('partner_id, rating, created_at')
          .eq('couple_id', profileId)
          .eq('status', 'published')
          .order('created_at', ascending: false)
          .limit(20) as List;
      return [
        for (final r in rows.cast<Map<String, dynamic>>())
          (partnerId: r['partner_id'] as String, rating: r['rating'] as int, at: DateTime.parse(r['created_at'] as String)),
      ];
    } catch (_) {
      return const [];
    }
  },
);

const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/// «AVALIAÇÕES QUE DEIXOU · N» no perfil de um organizador (mockup
/// «Avaliações · resposta do parceiro», 2026-11-22): uma linha por
/// parceiro avaliado (logótipo 44, nome 16, «★ 5 · categoria · mês ano» 13,
/// seta), que abre a página do parceiro. Sem avaliações, não aparece.
class ReviewsLeftSection extends ConsumerWidget {
  final String profileId;
  const ReviewsLeftSection({super.key, required this.profileId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final list = ref.watch(reviewsLeftProvider(profileId)).value ?? const [];
    if (list.isEmpty) return const SizedBox.shrink();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      ProfileSectionTitle('Avaliações que deixou · ${list.length}'),
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Column(children: [
          for (var i = 0; i < list.length; i++) _Row(item: list[i], first: i == 0),
        ]),
      ),
    ]);
  }
}

class _Row extends ConsumerWidget {
  final ({String partnerId, int rating, DateTime at}) item;
  final bool first;
  const _Row({required this.item, required this.first});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final Partner? p = ref.watch(partnerByIdProvider(item.partnerId)).value;
    final name = p?.name ?? '';
    return SnappyTap(
      onTap: () => context.push('/parceiro/${item.partnerId}'),
      child: Container(
        constraints: const BoxConstraints(minHeight: 64),
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(border: first ? null : const Border(top: BorderSide(color: AppTheme.line))),
        child: Row(children: [
          V2Avatar(name.isEmpty ? '?' : name, size: 44, imageUrl: p?.imageUrl),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Row(children: [
                Flexible(
                  child: Text(name, maxLines: 1, overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
                if (p != null) ...[const SizedBox(width: 4), VerifiedBadge(p)],
              ]),
              Text(
                [
                  '★ ${item.rating}',
                  if (p != null) p.primaryCategoryLabel,
                  '${_months[item.at.month - 1]} ${item.at.year}',
                ].join(' · '),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
              ),
            ]),
          ),
          const Icon(Hi.chevronRight, size: 18, color: AppTheme.inkMuted),
        ]),
      ),
    );
  }
}
