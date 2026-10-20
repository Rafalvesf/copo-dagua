import 'package:flutter/material.dart';
import '../../../core/page_transitions.dart';
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
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';


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
    // Página inteira, como no mockup "Perfil do parceiro" (2026-10-19):
    // foto no topo com voltar e favorito, cartão branco por cima.
    return Navigator.of(context).push<Partner>(
      PageRouteBuilder<Partner>(
        transitionDuration: const Duration(milliseconds: 380),
        reverseTransitionDuration: const Duration(milliseconds: 380),
        pageBuilder: (context, animation, secondaryAnimation) => PartnerDetailScreen(
          partner: partner,
          selectionMode: selectionMode,
        ),
        // Mesma animação dos botões da app (`page_transitions.dart`).
        transitionsBuilder: (context, animation, secondaryAnimation, child) =>
            TopDownTransition(animation: animation, child: child),
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

  Future<void> _requestQuote({String? initialMessage}) async {
    final wedding = ref.read(weddingControllerProvider).wedding;
    if (wedding == null || _requestingQuote) return;

    final result = await showIslandSheet<_RequestQuoteResult>(
      context: context,
      isScrollControlled: true,
      builder: (context) => _RequestQuoteSheet(
        initialDate: wedding.weddingDate,
        initialLocation: wedding.location,
        initialMessage: initialMessage,
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

    final figureText = figureValue == null ? null : figure.format(figureValue);
    final ratingText = summary.count > 0
        ? '${summary.average.toStringAsFixed(1).replaceAll('.', ',')} · ${summary.count}'
        : 'Novo';
    final gallery = photos.length > 1 ? photos.skip(1).take(6).toList() : const <String>[];

    // Redesign 2026-10-19 (pedido do utilizador): foto a toda a largura
    // no topo da folha, conteúdo num cartão branco que sobe por cima,
    // galeria em grelha, pacotes com preço e dois botões em baixo.
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
                  _PhotoCarousel(
                    photos: photos,
                    fallbackColor: colorForCategorySlug(partner.primaryCategorySlug),
                    fallbackIcon: iconForCategorySlug(partner.primaryCategorySlug),
                    favorited: favorited,
                    onFavorite: () => ref
                        .read(favoritePartnersControllerProvider.notifier)
                        .toggle(partner.id),
                  ),
                  Container(
                    transform: Matrix4.translationValues(0, -24, 0),
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 0),
                    decoration: const BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.vertical(top: Radius.circular(26)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    partner.name,
                                    style: const TextStyle(
                                      fontWeight: FontWeight.w700,
                                      fontSize: AppFontSize.h2,
                                      height: 1.2,
                                      color: AppTheme.ink,
                                    ),
                                  ),
                                  const SizedBox(height: 3),
                                  Text(
                                    [
                                      partner.primaryCategoryLabel,
                                      if (partner.location.isNotEmpty) partner.location,
                                    ].join(' · '),
                                    style: const TextStyle(fontSize: 13, color: v2Muted),
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(width: 10),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                              decoration: BoxDecoration(
                                color: AppTheme.brandGreen,
                                borderRadius: BorderRadius.circular(999),
                              ),
                              child: Row(mainAxisSize: MainAxisSize.min, children: [
                                const Icon(Icons.star_rounded, size: 14, color: Colors.white),
                                const SizedBox(width: 3),
                                Text(ratingText,
                                    style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.white)),
                              ]),
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        Text(
                          partner.description.isEmpty ? 'Sem descrição.' : partner.description,
                          style: const TextStyle(fontSize: AppFontSize.base, height: 1.5, color: Color(0xFF3F3B37)),
                        ),
                        const SizedBox(height: 16),
                        // Capacidade ao lado do estado da data e do preço
                        // "Desde" (pedido do utilizador, 2026-10-19).
                        Row(
                          children: [
                            _InfoTile(
                              label: figure.label,
                              value: figureText ?? '—',
                            ),
                            const SizedBox(width: 8),
                            _InfoTile(
                              label: weddingDate == null ? 'Data' : _shortDate(weddingDate),
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
                              value: fromPrice == null ? 'Orçamento' : euros(fromPrice),
                            ),
                          ],
                        ),
                        if (gallery.isNotEmpty) ...[
                          const SizedBox(height: 22),
                          const _Heading('Galeria'),
                          const SizedBox(height: 10),
                          GridView.count(
                            crossAxisCount: 3,
                            mainAxisSpacing: 6,
                            crossAxisSpacing: 6,
                            shrinkWrap: true,
                            padding: EdgeInsets.zero,
                            physics: const NeverScrollableScrollPhysics(),
                            children: [
                              for (final url in gallery)
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(14),
                                  child: Container(
                                    color: colorForCategorySlug(partner.primaryCategorySlug),
                                    child: Image.network(url,
                                        fit: BoxFit.cover,
                                        errorBuilder: (context, error, stackTrace) => const SizedBox.shrink()),
                                  ),
                                ),
                            ],
                          ),
                        ],
                        if (packages.isNotEmpty) ...[
                          const SizedBox(height: 22),
                          _Heading('Pacotes', trailing: '${packages.length}'),
                          const SizedBox(height: 10),
                          for (final pk in packages) ...[
                            Container(
                              padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
                              decoration: softCard(radius: 18),
                              child: Row(
                                children: [
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Text(pk.name,
                                            style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                        if (pk.description.trim().isNotEmpty)
                                          Text(pk.description.trim(),
                                              maxLines: 2,
                                              overflow: TextOverflow.ellipsis,
                                              style: const TextStyle(fontSize: 12, color: v2Muted)),
                                      ],
                                    ),
                                  ),
                                  const SizedBox(width: 10),
                                  Column(
                                    crossAxisAlignment: CrossAxisAlignment.end,
                                    children: [
                                      Text(
                                        pk.isStartingPrice ? 'desde ${euros(pk.price)}' : euros(pk.price),
                                        style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.brandGreen),
                                      ),
                                      if (!widget.selectionMode) ...[
                                        const SizedBox(height: 8),
                                        // Pedir este pacote (ou falar sobre ele, se já
                                        // há pedido/reserva) — pedido do utilizador,
                                        // 2026-10-20.
                                        _PackageButton(
                                          label: alreadyRelated ? 'Falar' : 'Pedir',
                                          busy: _requestingQuote || _openingChat,
                                          onTap: alreadyRelated
                                              ? _openChat
                                              : () => _requestQuote(
                                                    initialMessage:
                                                        'Olá! Tenho interesse no pacote "${pk.name}" (${pk.isStartingPrice ? 'desde ' : ''}${euros(pk.price)}).',
                                                  ),
                                        ),
                                      ],
                                    ],
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(height: 8),
                          ],
                        ],
                        const SizedBox(height: 22),
                        const _Heading('Avaliações'),
                        const SizedBox(height: 10),
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
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 10, AppTheme.screenMargin, 14),
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0x00FFFFFF), Colors.white],
                  stops: [0, 0.35],
                ),
              ),
              child: Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: SizedBox(
                      height: 52,
                      child: FilledButton(
                        onPressed: _openingChat ? null : _openChat,
                        child: const Text('Mensagem'),
                        style: FilledButton.styleFrom(
                          backgroundColor: const Color(0xFFF2F0EB),
                          foregroundColor: AppTheme.ink,
                          shape: const StadiumBorder(),
                          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback,
                              fontSize: AppFontSize.md, fontWeight: FontWeight.w700),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    flex: 3,
                    child: SizedBox(
                      height: 52,
                      child: FilledButton(
                        style: FilledButton.styleFrom(
                          backgroundColor: AppTheme.brandGreen,
                          shape: const StadiumBorder(),
                          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback,
                              fontSize: AppFontSize.md, fontWeight: FontWeight.w700),
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
                                  PartnerRelationshipStatus.requestPending => 'Pedido já enviado',
                                  _ => 'Pedir orçamento',
                                },
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
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

class _Heading extends StatelessWidget {
  final String text;
  final String? trailing;
  const _Heading(this.text, {this.trailing});

  @override
  Widget build(BuildContext context) => Row(
        children: [
          Expanded(
            child: Text(text, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          if (trailing != null)
            Text(trailing!, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.brandGreen)),
        ],
      );
}

const _monthAbbrPt = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

String _shortDate(DateTime d) => '${d.day} ${_monthAbbrPt[d.month - 1]} ${d.year}';

/// Fotos do parceiro (capa + portefólio) a toda a largura da folha, com
/// a pega por cima, o coração para guardar e o contador "1 / N".
class _PhotoCarousel extends StatefulWidget {
  final List<String> photos;
  final Color fallbackColor;
  final IconData fallbackIcon;
  final bool favorited;
  final VoidCallback onFavorite;

  const _PhotoCarousel({
    required this.photos,
    required this.fallbackColor,
    required this.fallbackIcon,
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
    final top = MediaQuery.of(context).padding.top;
    // Foto com cantos arredondados (pedido do utilizador, 2026-10-20).
    return SizedBox(
      height: 270 + top,
      child: Padding(
        padding: EdgeInsets.fromLTRB(10, top + 8, 10, 0),
        child: ClipRRect(
        borderRadius: BorderRadius.circular(30),
        child: Stack(
        fit: StackFit.expand,
        children: [
          Container(
            color: widget.fallbackColor,
            child: photos.isEmpty ? Icon(widget.fallbackIcon, color: Colors.white, size: 48) : null,
          ),
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
          // Sombra suave no topo para a pega e o botão se lerem sobre a foto.
          const IgnorePointer(
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment(0, -0.3),
                  colors: [Color(0x40171713), Color(0x00171713)],
                ),
              ),
            ),
          ),
          Positioned(
            top: 12,
            left: 16,
            child: const CircleBackButton(),
          ),
          Positioned(
            top: 12,
            right: 16,
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
          if (photos.length > 1)
            Positioned(
              right: 16,
              bottom: 36,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(color: const Color(0x66171713), borderRadius: BorderRadius.circular(999)),
                child: Text('${_page + 1} / ${photos.length}',
                    style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w700)),
              ),
            ),
        ],
      ),
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
        decoration: highlight
            ? BoxDecoration(color: const Color(0xFFDCE4D8), borderRadius: BorderRadius.circular(18))
            : softCard(radius: 18),
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
  final String? initialMessage;

  const _RequestQuoteSheet({this.initialDate, this.initialLocation, this.initialMessage});

  @override
  State<_RequestQuoteSheet> createState() => _RequestQuoteSheetState();
}

class _RequestQuoteSheetState extends State<_RequestQuoteSheet> {
  late final _location = TextEditingController(
    text: widget.initialLocation ?? '',
  );
  late final _message = TextEditingController(text: widget.initialMessage ?? '');
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
/// Botão pequeno de cada pacote: abre o pedido (ou a conversa) já sobre
/// esse pacote.
class _PackageButton extends StatelessWidget {
  final String label;
  final bool busy;
  final VoidCallback onTap;
  const _PackageButton({required this.label, required this.busy, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      child: Material(
        color: AppTheme.brandGreen,
        shape: const StadiumBorder(),
        child: InkWell(
          customBorder: const StadiumBorder(),
          onTap: busy ? null : onTap,
          child: Padding(
            padding: const EdgeInsets.fromLTRB(12, 6, 10, 6),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Text(label,
                  style: const TextStyle(
                      fontFamily: AppTheme.fontFamily,
                      fontFamilyFallback: AppTheme.fontFamilyFallback,
                      fontSize: 13,
                      fontWeight: FontWeight.w700,
                      color: Colors.white)),
              const SizedBox(width: 4),
              const Icon(Icons.chat_bubble_outline_rounded, size: 14, color: Colors.white),
            ]),
          ),
        ),
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
