import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/partners/partner_providers.dart';
import '../../core/partners/promotions.dart';
import '../money.dart';
import 'dense_card.dart';
import 'sized_network_image.dart';

/// Sugestão de parceiro (2026-11-11): o mesmo cartão dos eventos do
/// Descobrir e do "Em destaque" — nota à esquerda e preço à direita por
/// cima da foto. Usado no painel do evento e nas Tarefas.
class PartnerSuggestionCard extends ConsumerWidget {
  final FeaturedPick pick;
  final VoidCallback onTap;
  const PartnerSuggestionCard({super.key, required this.pick, required this.onTap});

  static const double height = FeaturedOverlayCard.height;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final k = pick;
    final p = ref.watch(partnerByIdProvider(k.partnerId)).value;
    final rating = p?.rating;
    final price = p == null
        ? null
        : (p.startingPrice != null ? ('DESDE', euros(p.startingPrice!)) : ('POR', 'Orçamento'));
    return FeaturedOverlayCard(
      onTap: onTap,
      image: k.coverPhotoUrl == null
          ? Container(color: const Color(0xFFDDE5D3), child: const Icon(Hi.buildingStorefront, color: Color(0xFF4F6B4A)))
          : SizedNetworkImage(k.coverPhotoUrl!, fit: BoxFit.cover),
      badge: rating == null || rating <= 0
          ? null
          : PhotoPill(rating.toStringAsFixed(1).replaceAll('.', ','),
              icon: Hi.star, muted: (p?.reviewCount ?? 0) > 0 ? '(${p!.reviewCount})' : null),
      price: price,
      title: k.name,
      subtitle: p?.location ?? '',
      chips: [if (k.categoryLabel != null) k.categoryLabel!],
    );
  }
}
