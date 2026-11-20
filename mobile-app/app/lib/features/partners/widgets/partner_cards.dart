import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/chat/presence.dart' show responseLabel;
import '../../../core/models/models.dart';
import '../../../core/partners/promotions.dart' show trackInterest;
import '../../../core/partners/favorite_partners_controller.dart';
import '../../../core/social/social.dart' show partnerPublicStatsProvider;
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/dense_card.dart' show PriceBox;
import '../../../shared/widgets/sized_network_image.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart' show V2Avatar, softShadow;
import '../partner_style.dart';

/// Peças da página Parceiros e do perfil do parceiro (mockups «Parceiros e
/// perfis», 2026-11-20).

/// Rótulo e valor da caixa de preço: `DESDE` + `850 €`, ou `POR` +
/// `Orçamento` para quem só trabalha por orçamento (DESIGN.md §6, Preço).
(String, String) partnerPrice(Partner p) =>
    p.startingPrice != null ? ('DESDE', euros(p.startingPrice!)) : ('POR', 'Orçamento');

/// Valor de referência de quem só faz orçamento: o valor que o parceiro
/// indica em «Preços e pacotes» (`average_quote_price`, migração 049).
double? partnerReference(Partner p) => p.averageQuotePrice;

String? ratingLabel(Partner p) {
  final r = p.rating;
  if (r == null || r <= 0) return null;
  return r.toStringAsFixed(1).replaceAll('.', ',');
}

/// Etiqueta em pílula (DESIGN.md §6): interior 10×5, 12 negrito, sem
/// contorno. Verde claro para coisas boas ("Responde em ~1 h", "Em
/// destaque"), neutra para o resto.
class InfoTag extends StatelessWidget {
  final String text;
  final bool green;
  final bool onPhoto;
  const InfoTag(this.text, {super.key, this.green = false, this.onPhoto = false});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
          color: green ? const Color(0xFFE6EDE1) : (onPhoto ? Colors.white : AppTheme.background),
          borderRadius: BorderRadius.circular(999),
        ),
        child: Text(text,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.w700,
              color: green ? const Color(0xFF3F7A4F) : (onPhoto ? AppTheme.ink : const Color(0xFF3A3733)),
            )),
      );
}

/// Pílula branca com a estrela e a nota, no canto da foto.
class RatingPill extends StatelessWidget {
  final String rating;
  const RatingPill(this.rating, {super.key});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(999)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          const Icon(Hi.star, size: 13, color: AppTheme.ink),
          const SizedBox(width: 4),
          Text(rating, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
      );
}

/// Linha tracejada `#ECE7DC` entre o corpo e o rodapé do cartão.
class DashedDivider extends StatelessWidget {
  const DashedDivider({super.key});

  @override
  Widget build(BuildContext context) => SizedBox(
        height: 1,
        width: double.infinity,
        child: CustomPaint(painter: _DashPainter()),
      );
}

class _DashPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFFECE7DC)
      ..strokeWidth = 1;
    const dash = 4.0, gap = 4.0;
    for (var x = 0.0; x < size.width; x += dash + gap) {
      canvas.drawLine(Offset(x, 0.5), Offset((x + dash).clamp(0, size.width).toDouble(), 0.5), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Foto do parceiro, ou a cor da categoria com o ícone enquanto não há foto.
class PartnerPhoto extends StatelessWidget {
  final Partner partner;
  final double iconSize;
  const PartnerPhoto(this.partner, {super.key, this.iconSize = 40});

  @override
  Widget build(BuildContext context) => Stack(
        fit: StackFit.expand,
        children: [
          Container(color: colorForCategorySlug(partner.primaryCategorySlug)),
          if (partner.imageUrl == null)
            Center(
              child: Icon(iconForCategorySlug(partner.primaryCategorySlug),
                  color: AppTheme.ink.withValues(alpha: 0.32), size: iconSize),
            )
          else
            SizedNetworkImage(
              partner.imageUrl!,
              fit: BoxFit.cover,
              loadingBuilder: (context, child, progress) => progress == null ? child : const SizedBox.shrink(),
              errorBuilder: (context, error, stackTrace) => const SizedBox.shrink(),
            ),
        ],
      );
}

/// Coração de favorito (sem fundo), para os cartões.
class FavoriteHeart extends ConsumerWidget {
  final Partner partner;
  final double size;
  const FavoriteHeart(this.partner, {super.key, this.size = 22});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final favorited = ref.watch(
      favoritePartnersControllerProvider.select((s) => s.partnerIds.contains(partner.id)),
    );
    return Tooltip(
      message: favorited ? 'Tirar dos favoritos' : 'Guardar nos favoritos',
      child: SnappyTap(
        onTap: () {
          if (!favorited) {
            for (final slug in partner.categorySlugs) {
              trackInterest(slug, 'favorite', partnerId: partner.id);
            }
          }
          ref.read(favoritePartnersControllerProvider.notifier).toggle(partner.id);
        },
        child: SizedBox(
          width: 32,
          height: 32,
          child: Icon(favorited ? Hi.heart : Hi.heartOutline, size: size, color: AppTheme.ink),
        ),
      ),
    );
  }
}

/// Cartão grande de parceiro para os carrosséis (mockup «Parceiros»):
/// foto com «Em destaque» e a nota; logótipo a meio da foto e do corpo;
/// nome 19, coração, meta 13; linha tracejada; etiqueta e caixa de preço.
class PartnerBigCard extends ConsumerWidget {
  final Partner partner;
  final VoidCallback onTap;
  final bool highlighted;

  const PartnerBigCard({super.key, required this.partner, required this.onTap, this.highlighted = false});

  static const double width = 300;
  static const double height = 342;
  static const double _photo = 160;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final stats = ref.watch(partnerPublicStatsProvider(partner.id)).value;
    final rating = ratingLabel(partner);
    final price = partnerPrice(partner);
    final meta2 = [
      if (partner.reviewCount > 0) '${partner.reviewCount} ${partner.reviewCount == 1 ? 'avaliação' : 'avaliações'}',
      if ((stats?.eventsDone ?? 0) > 0) '${stats!.eventsDone} ${stats.eventsDone == 1 ? 'evento' : 'eventos'}',
    ].join(' · ');
    final response = responseLabel(stats?.responseMinutes);
    final travel = partner.maxTravelDistanceKm;
    final tag = response != null
        ? InfoTag(response, green: true)
        : partner.location == 'Âmbito nacional'
            ? const InfoTag('Todo o país')
            : travel != null && travel > 0
                ? InfoTag('Desloca-se até $travel km')
                : null;

    return SnappyTap(
      onTap: onTap,
      child: Container(
        width: width,
        height: height,
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22), boxShadow: softShadow),
        clipBehavior: Clip.antiAlias,
        child: Stack(children: [
          Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            SizedBox(
              height: _photo,
              child: Stack(fit: StackFit.expand, children: [
                PartnerPhoto(partner),
                if (highlighted || partner.featured)
                  const Positioned(left: 12, top: 12, child: InfoTag('Em destaque', green: true)),
                if (rating != null) Positioned(right: 12, top: 12, child: RatingPill(rating)),
              ]),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(16, 32, 10, 0),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Expanded(
                      child: Text(partner.name,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    FavoriteHeart(partner),
                  ]),
                  const SizedBox(height: 2),
                  Text(_meta(partner),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  if (meta2.isNotEmpty) ...[
                    const SizedBox(height: 2),
                    Text(meta2, maxLines: 1, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ],
                ]),
              ),
            ),
            const Padding(padding: EdgeInsets.symmetric(horizontal: 16), child: DashedDivider()),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 16),
              child: Row(children: [
                if (tag != null) Flexible(child: tag) else const Spacer(),
                const SizedBox(width: 8),
                if (tag != null) const Spacer(),
                PriceBox(price.$1, price.$2, outlined: true),
              ]),
            ),
          ]),
          Positioned(
            left: 16,
            top: _photo - 26,
            child: V2Avatar(partner.name, size: 52),
          ),
        ]),
      ),
    );
  }
}

/// «Fotografia · Lisboa»: categoria e a primeira zona.
String _meta(Partner p) {
  final area = p.location.split(', ').first;
  return [p.primaryCategoryLabel, if (area.isNotEmpty) area].join(' · ');
}

/// Linha de parceiro num grupo de linhas (DESIGN.md §4): avatar 44, nome
/// 16, meta 13 e a caixa de preço à direita.
class PartnerListRow extends StatelessWidget {
  final Partner partner;
  final VoidCallback onTap;
  final bool first;

  /// Ao lado do nome (Pro, fundador).
  final Widget? badges;

  /// No lugar da caixa de preço (ex.: o coração nos favoritos).
  final Widget? trailing;
  const PartnerListRow({super.key, required this.partner, required this.onTap, this.first = false, this.badges, this.trailing});

  @override
  Widget build(BuildContext context) {
    final price = partnerPrice(partner);
    final rating = ratingLabel(partner);
    return SnappyTap(
      onTap: onTap,
      child: Container(
        constraints: const BoxConstraints(minHeight: 72),
        decoration: BoxDecoration(
          border: first ? null : const Border(top: BorderSide(color: Color(0xFFECE7DC))),
        ),
        child: Row(children: [
          V2Avatar(partner.name, size: 44, imageUrl: partner.imageUrl),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Row(children: [
                Flexible(
                  child: Text(partner.name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
                if (badges != null) ...[const SizedBox(width: 6), badges!],
              ]),
              const SizedBox(height: 2),
              Text([_meta(partner), if (rating != null) '★ $rating'].join(' · '),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 10),
          trailing ?? PriceBox(price.$1, price.$2, outlined: true),
        ]),
      ),
    );
  }
}

/// Grupo de linhas: cartão branco, cantos 22, interior 4×16.
class RowGroup extends StatelessWidget {
  final List<Widget> children;
  const RowGroup({super.key, required this.children});

  @override
  Widget build(BuildContext context) => Container(
        margin: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: Column(mainAxisSize: MainAxisSize.min, children: children),
      );
}

/// Uma linha de um grupo de linhas, para listas compridas: o mesmo
/// aspeto do [RowGroup] (branco, cantos 22, interior 4×16), mas cada linha
/// é um filho da lista, para a lista só construir as que estão à vista.
class RowGroupSlice extends StatelessWidget {
  final bool first;
  final bool last;
  final Widget child;
  const RowGroupSlice({super.key, required this.first, required this.last, required this.child});

  @override
  Widget build(BuildContext context) => Container(
        margin: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        padding: EdgeInsets.fromLTRB(16, first ? 4 : 0, 16, last ? 4 : 0),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.vertical(
            top: Radius.circular(first ? 22 : 0),
            bottom: Radius.circular(last ? 22 : 0),
          ),
        ),
        child: child,
      );
}

/// Título de secção 22 com a ação verde à direita ("Ver todos (12)").
class SectionHeading extends StatelessWidget {
  final String title;
  final String? action;
  final VoidCallback? onAction;
  final EdgeInsetsGeometry padding;
  const SectionHeading(this.title,
      {super.key, this.action, this.onAction, this.padding = const EdgeInsets.fromLTRB(AppTheme.screenMargin, 28, AppTheme.screenMargin, 12)});

  @override
  Widget build(BuildContext context) => Padding(
        padding: padding,
        child: Row(crossAxisAlignment: CrossAxisAlignment.baseline, textBaseline: TextBaseline.alphabetic, children: [
          Expanded(
            child: Text(title,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          if (action != null)
            SnappyTap(
              onTap: onAction,
              child: Text(action!,
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
            ),
        ]),
      );
}

/// Carrossel horizontal de cartões grandes, com o próximo a espreitar.
class PartnerCarousel extends StatelessWidget {
  final List<Partner> partners;
  final void Function(Partner) onTap;
  final Set<String> highlighted;
  const PartnerCarousel({super.key, required this.partners, required this.onTap, this.highlighted = const {}});

  @override
  Widget build(BuildContext context) => SizedBox(
        // A sombra precisa de espaço por baixo.
        height: PartnerBigCard.height + 20,
        child: ListView.separated(
          scrollDirection: Axis.horizontal,
          clipBehavior: Clip.none,
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 20),
          itemCount: partners.length,
          separatorBuilder: (context, i) => const SizedBox(width: 12),
          itemBuilder: (context, i) => PartnerBigCard(
            partner: partners[i],
            highlighted: highlighted.contains(partners[i].id),
            onTap: () => onTap(partners[i]),
          ),
        ),
      );
}

/// Quadrado de categoria (82×82, cantos 22): ícone num círculo de cor e
/// rótulo 12 negrito. Escolhido: verde com letra branca (DESIGN.md §1:
/// verde para seleção).
class CategoryTile extends StatelessWidget {
  final String label;
  final IconData icon;
  final Color tint;
  final bool selected;
  final VoidCallback onTap;
  const CategoryTile({
    super.key,
    required this.label,
    required this.icon,
    required this.tint,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          width: 82,
          height: 82,
          decoration: BoxDecoration(
            color: selected ? AppTheme.accentOliveDark : Colors.white,
            borderRadius: BorderRadius.circular(22),
          ),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(color: selected ? Colors.white : tint, shape: BoxShape.circle),
              child: Icon(icon, size: 22, color: AppTheme.ink),
            ),
            const SizedBox(height: 6),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 4),
              child: Text(label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
            ),
          ]),
        ),
      );
}
