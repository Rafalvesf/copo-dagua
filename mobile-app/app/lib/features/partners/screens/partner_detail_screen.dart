import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/chat/chat_helpers.dart';
import '../../../core/models/models.dart';
import '../../../core/partners/favorite_partners_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/reviews/review_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../partner_style.dart';
import '../../../shared/money.dart';
import '../../../core/partners/category_figure.dart';


class PartnerDetailScreen extends ConsumerStatefulWidget {
  final Partner partner;
  final bool selectionMode;

  const PartnerDetailScreen({
    super.key,
    required this.partner,
    this.selectionMode = false,
  });

  /// Abre o parceiro numa folha que sobe de baixo (canvas "Parceiro —
  /// bottom sheet"): pega no topo, cantos de 28, fecha ao tocar fora ou
  /// ao arrastar para baixo. Devolve o parceiro escolhido em
  /// [selectionMode].
  static Future<Partner?> show(
    BuildContext context,
    Partner partner, {
    bool selectionMode = false,
  }) {
    return Navigator.of(context).push<Partner>(
      PageRouteBuilder<Partner>(
        opaque: false,
        barrierDismissible: true,
        barrierColor: Colors.black45,
        transitionDuration: const Duration(milliseconds: 280),
        reverseTransitionDuration: const Duration(milliseconds: 220),
        pageBuilder: (context, animation, secondaryAnimation) => Padding(
          // Folha com ~720 de altura, como no canvas (num ecrã pequeno,
          // fica sempre a 24 do topo seguro).
          padding: EdgeInsets.only(
            top: (MediaQuery.of(context).size.height - 720).clamp(
              MediaQuery.of(context).padding.top + 24,
              double.infinity,
            ),
          ),
          child: ClipRRect(
            borderRadius: const BorderRadius.vertical(
              top: Radius.circular(AppRadius.xxl),
            ),
            child: PartnerDetailScreen(
              partner: partner,
              selectionMode: selectionMode,
            ),
          ),
        ),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return SlideTransition(
            position: Tween<Offset>(
              begin: const Offset(0, 1),
              end: Offset.zero,
            ).animate(
              CurvedAnimation(parent: animation, curve: Curves.easeOutCubic),
            ),
            child: child,
          );
        },
      ),
    );
  }

  @override
  ConsumerState<PartnerDetailScreen> createState() =>
      _PartnerDetailScreenState();
}

class _PartnerDetailScreenState extends ConsumerState<PartnerDetailScreen> {
  bool _openingChat = false;
  bool _requestingQuote = false;

  void _comingSoon(String message) {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(SnackBar(content: Text(message)));
  }

  Future<void> _openChat() async {
    final wedding = ref.read(weddingControllerProvider).wedding;
    if (wedding == null || _openingChat) return;
    setState(() => _openingChat = true);
    try {
      final partner = widget.partner;
      final conversationId = await getOrCreateConversation(
        weddingId: wedding.id,
        partnerId: partner.id,
      );
      if (!mounted) return;
      context.push(
        '/chat/$conversationId',
        extra: ChatConversation(
          id: conversationId,
          weddingId: wedding.id,
          partnerId: partner.id,
          name: partner.name,
          avatarSeed: partner.id,
          avatarUrl: partner.imageUrl,
        ),
      );
    } catch (_) {
      if (mounted) _comingSoon('Não foi possível abrir o chat.');
    } finally {
      if (mounted) setState(() => _openingChat = false);
    }
  }

  Future<void> _requestQuote() async {
    final wedding = ref.read(weddingControllerProvider).wedding;
    if (wedding == null || _requestingQuote) return;

    final result = await showModalBottomSheet<_RequestQuoteResult>(
      context: context,
      isScrollControlled: true,
      builder: (context) => _RequestQuoteSheet(
        initialDate: wedding.weddingDate,
        initialLocation: wedding.location,
      ),
    );
    if (result == null || !mounted) return;

    setState(() => _requestingQuote = true);
    try {
      await supabase.rpc(
        'request_quote',
        params: {
          'p_partner_id': widget.partner.id,
          'p_wedding_id': wedding.id,
          'p_event_date': result.eventDate?.toIso8601String().split('T').first,
          'p_location': result.location,
          // O parceiro define o preço na proposta (`send_proposal_screen.dart`)
          // — o casal deixou de indicar orçamento min./máx. aqui, pedido
          // explícito do utilizador (2026-09-04): só envia o pedido, sem
          // pré-condicionar o valor.
          'p_budget_min': null,
          'p_budget_max': null,
          'p_message': result.message,
        },
      );
      // Pedido explícito do utilizador: o pedido de orçamento tem de
      // aparecer no chat tal como a proposta — melhor esforço, não
      // desfaz o pedido já criado se isto falhar.
      try {
        await sendQuoteRequestMessage(
          weddingId: wedding.id,
          partnerId: widget.partner.id,
          partnerName: widget.partner.name,
          eventDate: result.eventDate,
          location: result.location,
          message: result.message,
        );
      } catch (_) {}
      if (mounted) {
        _comingSoon(
          'Pedido de orçamento enviado! O parceiro vai responder em breve.',
        );
      }
    } on PostgrestException catch (e) {
      if (!mounted) return;
      final message = switch (e.code) {
        'P0002' => 'Este parceiro já não está disponível.',
        'P0003' => 'Escolhe uma data com pelo menos 7 dias de antecedência.',
        _ => 'Não foi possível enviar o pedido de orçamento.',
      };
      _comingSoon(message);
    } catch (_) {
      if (mounted)
        _comingSoon('Não foi possível enviar o pedido de orçamento.');
    } finally {
      if (mounted) setState(() => _requestingQuote = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final partner = widget.partner;
    final favorited = ref.watch(
      favoritePartnersControllerProvider.select(
        (s) => s.partnerIds.contains(partner.id),
      ),
    );
    // `null` enquanto a verificação real não responde ainda (ou falha) —
    // tratado como "não deixar enviar", nunca como "livre para pedir",
    // para nunca haver uma janela otimista em que um duplo pedido escapa.
    final relationshipStatus = ref
        .watch(partnerRelationshipStatusProvider(partner.id))
        .maybeWhen(data: (s) => s, orElse: () => null);
    final alreadyRelated =
        !widget.selectionMode && relationshipStatus != PartnerRelationshipStatus.none;
    final summary = ref.watch(publicReviewSummaryForPartnerProvider(partner.id));
    final packages = ref
        .watch(partnerPackagesForProvider(partner.id))
        .maybeWhen(data: (p) => p, orElse: () => const <ServicePackage>[]);
    final portfolio = ref
        .watch(partnerPortfolioForProvider(partner.id))
        .maybeWhen(data: (p) => p, orElse: () => const <PortfolioItem>[]);
    // Primeiro quadrado: o número que faz sentido para a categoria
    // (espaço: capacidade; catering: serve até; florista: arranjos; …).
    final figure = figureForSlug(partner.primaryCategorySlug);
    final isVenue = partner.primaryCategorySlug == 'venue';
    final capacity = isVenue
        ? ref
            .watch(partnerVenueCapacityProvider(partner.id))
            .maybeWhen(data: (c) => c, orElse: () => null)
        : null;
    final keyFigure = ref
        .watch(partnerKeyFigureProvider(partner.id))
        .maybeWhen(data: (v) => v, orElse: () => null);
    final figureValue = capacity ?? keyFigure;
    final weddingDate = ref.watch(
      weddingControllerProvider.select((s) => s.wedding?.weddingDate),
    );

    final photos = <String>[
      ?partner.imageUrl,
      for (final item in portfolio)
        if (item.mediaType == PortfolioMediaType.image) item.mediaUrl,
    ];
    final minPackage = packages.isEmpty
        ? null
        : packages.map((p) => p.price).reduce((a, b) => a < b ? a : b);
    final fromPrice = minPackage ?? partner.startingPrice ?? partner.averageQuotePrice;

    return Material(
      color: Colors.white,
      child: Column(
        children: [
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.only(bottom: 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Pega da folha — arrastar para baixo fecha.
                  GestureDetector(
                    behavior: HitTestBehavior.opaque,
                    onVerticalDragEnd: (d) {
                      if ((d.primaryVelocity ?? 0) > 250) {
                        Navigator.of(context).maybePop();
                      }
                    },
                    child: Semantics(
                      button: true,
                      label: 'Fechar',
                      onTap: () => Navigator.of(context).maybePop(),
                      child: Center(
                        child: Container(
                          margin: const EdgeInsets.only(top: 10, bottom: 14),
                          width: 40,
                          height: 5,
                          decoration: BoxDecoration(
                            color: AppTheme.borderMuted,
                            borderRadius: BorderRadius.circular(4),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: _PhotoCarousel(
                      photos: photos,
                      fallbackColor: colorForCategorySlug(partner.primaryCategorySlug),
                      favorited: favorited,
                      onFavorite: () => ref
                          .read(favoritePartnersControllerProvider.notifier)
                          .toggle(partner.id),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(28, 18, 28, 0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          [
                            partner.primaryCategoryLabel,
                            if (partner.location.isNotEmpty) partner.location,
                          ].join(' · ').toUpperCase(),
                          style: TextStyle(
                            fontSize: AppFontSize.sm,
                            fontWeight: FontWeight.w700,
                            letterSpacing: 0.6,
                            color: AppTheme.accentOliveDark,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          partner.name,
                          style: const TextStyle(
                            fontWeight: FontWeight.w700,
                            fontSize: AppFontSize.h2,
                            height: 30 / 24,
                            color: AppTheme.ink,
                          ),
                        ),
                        const SizedBox(height: 6),
                        Row(
                          children: [
                            const Icon(Icons.star_rounded, size: 16, color: AppTheme.ink),
                            const SizedBox(width: 6),
                            Text(
                              summary.count > 0
                                  ? summary.average.toStringAsFixed(1).replaceAll('.', ',')
                                  : 'Novo',
                              style: const TextStyle(
                                fontWeight: FontWeight.w700,
                                fontSize: AppFontSize.base,
                                color: AppTheme.ink,
                              ),
                            ),
                            const SizedBox(width: 6),
                            Flexible(
                              child: Text(
                                summary.count == 0
                                    ? '· ainda sem avaliações'
                                    : '· ${summary.count} ${summary.count == 1 ? 'avaliação' : 'avaliações'}',
                                overflow: TextOverflow.ellipsis,
                                style: const TextStyle(
                                  color: AppTheme.inkMuted,
                                  fontWeight: FontWeight.w300,
                                  fontSize: AppFontSize.base,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 18),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 28),
                    child: Row(
                      children: [
                        _InfoTile(
                          label: figure.label,
                          value: figureValue == null ? '—' : figure.format(figureValue),
                        ),
                        const SizedBox(width: 8),
                        _InfoTile(
                          label: weddingDate == null
                              ? 'Data'
                              : _shortDate(weddingDate),
                          value: switch (relationshipStatus) {
                            PartnerRelationshipStatus.booked => 'Reservado',
                            PartnerRelationshipStatus.requestPending => 'Pedido',
                            _ => weddingDate == null ? 'Por definir' : 'Perguntar',
                          },
                          highlight: true,
                        ),
                        const SizedBox(width: 8),
                        _InfoTile(
                          label: 'Desde',
                          value: fromPrice == null
                              ? 'Orçamento'
                              : euros(fromPrice),
                        ),
                      ],
                    ),
                  ),
                  if (packages.isNotEmpty) ...[
                    const SizedBox(height: 20),
                    const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 28),
                      child: Text(
                        'Incluído',
                        style: TextStyle(
                          fontSize: AppFontSize.base + 1,
                          fontWeight: FontWeight.w700,
                          color: AppTheme.ink,
                        ),
                      ),
                    ),
                    const SizedBox(height: 12),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 28),
                      child: Wrap(
                        spacing: 8,
                        runSpacing: 8,
                        children: [
                          for (final p in packages.take(3)) _Chip(label: p.name),
                          if (packages.length > 3) _Chip(label: '+${packages.length - 3}'),
                        ],
                      ),
                    ),
                  ],
                  // Abaixo da primeira vista (igual ao canvas): o resto do
                  // perfil para quem quiser descer — descrição e avaliações.
                  const SizedBox(height: 28),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 28),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Sobre',
                          style: TextStyle(
                            fontSize: AppFontSize.base + 1,
                            fontWeight: FontWeight.w700,
                            color: AppTheme.ink,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          partner.description.isEmpty ? 'Sem descrição.' : partner.description,
                          style: const TextStyle(
                            fontSize: AppFontSize.base,
                            height: 1.5,
                            fontWeight: FontWeight.w300,
                            color: AppTheme.inkMuted,
                          ),
                        ),
                        const SizedBox(height: 24),
                        const Text(
                          'Avaliações',
                          style: TextStyle(
                            fontSize: AppFontSize.base + 1,
                            fontWeight: FontWeight.w700,
                            color: AppTheme.ink,
                          ),
                        ),
                        const SizedBox(height: 12),
                        _ReviewsSection(partnerId: partner.id),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
          SafeArea(
            top: false,
            child: Container(
              padding: const EdgeInsets.fromLTRB(28, 12, 28, 18),
              decoration: const BoxDecoration(
                color: Colors.white,
                border: Border(top: BorderSide(color: AppTheme.borderMuted)),
              ),
              child: Row(
                children: [
                  Semantics(
                    button: true,
                    label: 'Enviar mensagem',
                    child: SizedBox(
                      width: 54,
                      height: 54,
                      child: OutlinedButton(
                        onPressed: _openingChat ? null : _openChat,
                        style: OutlinedButton.styleFrom(
                          padding: EdgeInsets.zero,
                          foregroundColor: AppTheme.ink,
                          side: const BorderSide(color: AppTheme.borderMuted),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(AppRadius.md),
                          ),
                        ),
                        child: const Icon(Icons.chat_bubble_outline_rounded, size: 20),
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: SizedBox(
                      height: 54,
                      child: FilledButton(
                        style: FilledButton.styleFrom(
                          backgroundColor: AppTheme.accentOliveDark,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(AppRadius.md),
                          ),
                          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, 
                            fontSize: AppFontSize.lg,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        onPressed: _requestingQuote || alreadyRelated
                            ? null
                            : () {
                                if (widget.selectionMode) {
                                  Navigator.of(context).pop(partner);
                                } else {
                                  _requestQuote();
                                }
                              },
                        child: Text(
                          widget.selectionMode
                              ? 'Escolher parceiro'
                              : switch (relationshipStatus) {
                                  PartnerRelationshipStatus.booked => 'Já reservado',
                                  PartnerRelationshipStatus.requestPending =>
                                    'Pedido já enviado',
                                  _ => 'Pedir orçamento',
                                },
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

const _monthAbbrPt = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

String _shortDate(DateTime d) => '${d.day} ${_monthAbbrPt[d.month - 1]} ${d.year}';

class _Chip extends StatelessWidget {
  final String label;

  const _Chip({required this.label});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 34,
      padding: const EdgeInsets.symmetric(horizontal: 12),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(AppRadius.pill),
        border: Border.all(color: AppTheme.borderMuted),
      ),
      // Do tamanho do texto (antes ocupava a linha toda).
      child: Center(
        widthFactor: 1,
        child: Text(
          label,
          style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink),
        ),
      ),
    );
  }
}

/// Fotos do parceiro (capa + portefólio) a deslizar, com pontos por
/// baixo e o coração para guardar — igual ao canvas.
class _PhotoCarousel extends StatefulWidget {
  final List<String> photos;
  final Color fallbackColor;
  final bool favorited;
  final VoidCallback onFavorite;

  const _PhotoCarousel({
    required this.photos,
    required this.fallbackColor,
    required this.favorited,
    required this.onFavorite,
  });

  @override
  State<_PhotoCarousel> createState() => _PhotoCarouselState();
}

class _PhotoCarouselState extends State<_PhotoCarousel> {
  int _page = 0;

  @override
  Widget build(BuildContext context) {
    final photos = widget.photos;
    return ClipRRect(
      borderRadius: BorderRadius.circular(AppRadius.lg),
      child: SizedBox(
        height: 200,
        child: Stack(
          fit: StackFit.expand,
          children: [
            Container(color: widget.fallbackColor),
            if (photos.isNotEmpty)
              PageView.builder(
                itemCount: photos.length,
                onPageChanged: (i) => setState(() => _page = i),
                itemBuilder: (context, i) => Image.network(
                  photos[i],
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) => const SizedBox.shrink(),
                ),
              ),
            if (photos.length > 1)
              Positioned(
                left: 0,
                right: 0,
                bottom: 12,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    for (var i = 0; i < photos.length && i < 6; i++)
                      AnimatedContainer(
                        duration: const Duration(milliseconds: 180),
                        margin: const EdgeInsets.symmetric(horizontal: 3),
                        width: i == _page ? 18 : 6,
                        height: 6,
                        decoration: BoxDecoration(
                          color: i == _page
                              ? Colors.white
                              : Colors.white.withValues(alpha: 0.6),
                          borderRadius: BorderRadius.circular(6),
                        ),
                      ),
                  ],
                ),
              ),
            Positioned(
              top: 12,
              right: 12,
              child: Semantics(
                label: widget.favorited ? 'Remover dos favoritos' : 'Guardar nos favoritos',
                child: CircleIconButton(
                  icon: widget.favorited ? Icons.favorite : Icons.favorite_border,
                  background: Colors.white,
                  foreground: widget.favorited ? AppStatusColors.declined : AppTheme.ink,
                  size: 44,
                  onTap: widget.onFavorite,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Quadrado de informação do topo (canvas: Capacidade / data / Desde),
/// com os dados que a app tem de cada parceiro.
class _InfoTile extends StatelessWidget {
  final String label;
  final String value;
  final bool highlight;

  const _InfoTile({
    required this.label,
    required this.value,
    this.highlight = false,
  });

  @override
  Widget build(BuildContext context) {
    final fg = highlight ? AppTheme.accentOliveDark : AppTheme.ink;
    return Expanded(
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: highlight ? AppColors.green : AppTheme.surface,
          borderRadius: BorderRadius.circular(AppRadius.md),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              label,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                fontSize: AppFontSize.sm,
                color: highlight ? AppTheme.accentOliveDark : AppTheme.inkMuted,
              ),
            ),
            const SizedBox(height: 2),
            FittedBox(
              fit: BoxFit.scaleDown,
              alignment: Alignment.centerLeft,
              child: Text(
                value,
                style: TextStyle(
                  fontSize: AppFontSize.lg,
                  fontWeight: FontWeight.w700,
                  color: fg,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}






/// Avaliações publicadas do parceiro (`reviews`, 045_reviews.sql) —
/// mostra o nome e foto do casal autor (`get_review_authors()`,
/// `069_public_review_authors.sql`) a QUALQUER visitante do
/// Marketplace, pedido explícito do utilizador (2026-09-13), confirmado
/// mesmo sabendo que expõe isso além de a quem tem uma relação real com
/// o casal (o próprio parceiro avaliado).
class _ReviewsSection extends ConsumerWidget {
  final String partnerId;

  const _ReviewsSection({required this.partnerId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final reviewsAsync = ref.watch(publicReviewsForPartnerProvider(partnerId));
    return reviewsAsync.when(
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (err, st) => const _ComingSoonSection(
        message: 'Não foi possível carregar as avaliações.',
      ),
      data: (reviews) {
        if (reviews.isEmpty) {
          return const _ComingSoonSection(
            message:
                'Ainda sem avaliações — sê o primeiro casal a partilhar a vossa experiência.',
          );
        }
        return Column(
          children: [
            for (final review in reviews) ...[
              _ReviewCard(review: review),
              const SizedBox(height: 12),
            ],
          ],
        );
      },
    );
  }
}

class _ReviewCard extends StatelessWidget {
  final Review review;

  const _ReviewCard({required this.review});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              review.coupleAvatarUrl == null
                  ? InitialsAvatar(name: review.coupleDisplayName, radius: 16)
                  : CircleAvatar(
                      radius: 16,
                      backgroundColor: AppColors.gray,
                      backgroundImage: NetworkImage(review.coupleAvatarUrl!),
                    ),
              const SizedBox(width: 10),
              Expanded(
                child: Text(
                  review.coupleDisplayName,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: AppFontSize.md,
                    color: AppTheme.ink,
                  ),
                ),
              ),
              Text(
                '${review.createdAt.day.toString().padLeft(2, '0')}/${review.createdAt.month.toString().padLeft(2, '0')}/${review.createdAt.year}',
                style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.xs),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              for (var i = 1; i <= 5; i++)
                Icon(
                  i <= review.rating ? Icons.star_rounded : Icons.star_border_rounded,
                  size: 14,
                  color: Colors.amber,
                ),
            ],
          ),
          if (review.comment != null) ...[
            const SizedBox(height: 6),
            Text(
              review.comment!,
              style: TextStyle(
                color: AppTheme.inkMuted,
                fontSize: AppFontSize.md,
                height: 1.4,
              ),
            ),
          ],
          if (review.response != null) ...[
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: AppColors.muted,
                borderRadius: BorderRadius.circular(AppRadius.md),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Resposta do parceiro',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: AppFontSize.xs,
                      color: AppTheme.accentOliveDark,
                    ),
                  ),
                  const SizedBox(height: 3),
                  Text(
                    review.response!,
                    style: TextStyle(
                      color: AppTheme.ink,
                      fontSize: AppFontSize.sm,
                      height: 1.4,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}


class _RequestQuoteResult {
  final DateTime? eventDate;
  final String? location;
  final String? message;

  const _RequestQuoteResult({this.eventDate, this.location, this.message});
}

/// Formulário de "Pedir orçamento" — liga o botão "Reservar" ao RPC
/// real `request_quote()` (`009_quotations_bookings.sql`). Todos os
/// campos são opcionais (o RPC já trata `null` em cada um), exceto a
/// regra RN de a data do evento ter de ter pelo menos 7 dias de
/// antecedência (`p_event_date < current_date + 7` → erro `P0003`) —
/// aplicada aqui também no `firstDate` do date picker, para o casal
/// nunca conseguir escolher uma data que o servidor ia recusar.
class _RequestQuoteSheet extends StatefulWidget {
  final DateTime? initialDate;
  final String? initialLocation;

  const _RequestQuoteSheet({this.initialDate, this.initialLocation});

  @override
  State<_RequestQuoteSheet> createState() => _RequestQuoteSheetState();
}

class _RequestQuoteSheetState extends State<_RequestQuoteSheet> {
  late final _location = TextEditingController(
    text: widget.initialLocation ?? '',
  );
  final _message = TextEditingController();
  DateTime? _eventDate;

  DateTime get _minSelectableDate =>
      DateTime.now().add(const Duration(days: 7));

  @override
  void initState() {
    super.initState();
    final initial = widget.initialDate;
    _eventDate = (initial != null && !initial.isBefore(_minSelectableDate))
        ? initial
        : null;
  }

  @override
  void dispose() {
    _location.dispose();
    _message.dispose();
    super.dispose();
  }

  Future<void> _pickDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _eventDate ?? _minSelectableDate,
      firstDate: _minSelectableDate,
      lastDate: DateTime.now().add(const Duration(days: 365 * 3)),
    );
    if (picked != null) setState(() => _eventDate = picked);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Pedir orçamento',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 4),
          Text(
            'Envia os detalhes do teu casamento — o parceiro responde diretamente pelo Chat.',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
          ),
          const SizedBox(height: 16),
          InkWell(
            borderRadius: BorderRadius.circular(AppRadius.sm),
            onTap: _pickDate,
            child: InputDecorator(
              decoration: const InputDecoration(
                labelText: 'Data do evento (opcional)',
              ),
              child: Text(
                _eventDate == null
                    ? 'A combinar'
                    : '${_eventDate!.day.toString().padLeft(2, '0')}/${_eventDate!.month.toString().padLeft(2, '0')}/${_eventDate!.year}',
              ),
            ),
          ),
          const SizedBox(height: 12),
          AuthTextField(label: 'Localização (opcional)', controller: _location),
          const SizedBox(height: 12),
          AuthTextField(label: 'Mensagem (opcional)', controller: _message),
          const SizedBox(height: 16),
          PrimaryButton(
            label: 'Enviar pedido',
            onPressed: () {
              Navigator.of(context).pop(
                _RequestQuoteResult(
                  eventDate: _eventDate,
                  location: _location.text.trim().isEmpty
                      ? null
                      : _location.text.trim(),
                  message: _message.text.trim().isEmpty
                      ? null
                      : _message.text.trim(),
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
class _ComingSoonSection extends StatelessWidget {
  final String message;

  const _ComingSoonSection({required this.message});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Text(
        message,
        textAlign: TextAlign.center,
        style: TextStyle(color: AppTheme.inkMuted),
      ),
    );
  }
}
