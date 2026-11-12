import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:share_plus/share_plus.dart';
import 'package:flutter/services.dart';
import '../../../shared/public_link.dart';
import '../../../shared/widgets/line_icon.dart';
import '../../../core/chat/presence.dart' show responseLabel;
import '../../../core/pending_deep_link.dart';
import '../../../shared/widgets/install_app_sheet.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../core/social/social.dart';
import '../../profile/profile_widgets.dart' show FollowedByRow, ProfileButton, ProfileCard;
import 'package:copo_dagua_app/core/partners/promotions.dart';
import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:copo_dagua_app/shared/widgets/founder_badge.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/review_tile.dart';
import '../../../core/page_transitions.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/chat/chat_helpers.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partners/favorite_partners_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/reviews/review_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../partner_style.dart';
import '../../../shared/money.dart';
import '../../../core/partners/category_figure.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';
import '../../partner_pro/partner_pro_screen.dart' show ProBadge;
import '../../../core/profile/username.dart';


class PartnerDetailScreen extends ConsumerStatefulWidget {
  final Partner partner;
  final bool selectionMode;

  /// Página pública (link "Partilhar perfil", 2026-11-12), vista sem
  /// sessão: "À Nossa!" e "Abrir na app" no topo; seguir, mensagem e
  /// pedir orçamento pedem para entrar e voltam aqui.
  final bool publicView;

  const PartnerDetailScreen({
    super.key,
    required this.partner,
    this.selectionMode = false,
    this.publicView = false,
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

  @override
  void initState() {
    super.initState();
    Funnel.track('partner_view', ref: widget.partner.id);
    // Destaques personalizados (155): ver um parceiro = interesse na categoria.
    for (final slug in widget.partner.categorySlugs) {
      trackInterest(slug, 'view', partnerId: widget.partner.id);
    }
  }

  /// Sem sessão: entrar ou criar conta e voltar a esta página.
  void _needAccount() {
    PendingDeepLink.save('/parceiro/${widget.partner.id}');
    context.go('/welcome');
  }

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
    } on PartnerUnavailableException {
      if (mounted) _comingSoon(PartnerUnavailableException.message);
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
    Funnel.track('quote_request_start', ref: widget.partner.id);
    for (final slug in widget.partner.categorySlugs) {
      trackInterest(slug, 'quote', partnerId: widget.partner.id);
    }
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
      // O botão passa logo a "Pedido já enviado".
      ref.invalidate(partnerRelationshipStatusProvider(widget.partner.id));
      if (mounted) {
        _comingSoon(
          'Pedido de orçamento enviado! O parceiro vai responder em breve.',
        );
      }
    } on PostgrestException catch (e) {
      if (!mounted) return;
      final message = switch (e.code) {
        'P0002' => 'Este parceiro já não está disponível.',
        // Migração 117: contratado em segredo por outro organizador.
        'P0010' => PartnerUnavailableException.message,
        'P0003' => 'Escolhe uma data com pelo menos 7 dias de antecedência.',
        // Migração 103: só um pedido de cada vez por parceiro.
        'P0009' => 'Já pediste orçamento a este parceiro. Só podes pedir outra vez se o pedido ou a reserva for cancelado.',
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
    final pub = widget.publicView;
    final favorited = !pub &&
        ref.watch(
          favoritePartnersControllerProvider.select(
            (s) => s.partnerIds.contains(partner.id),
          ),
        );
    final responds = responseLabel(ref.watch(partnerPublicStatsProvider(partner.id)).value?.responseMinutes);
    // `null` enquanto a verificação real não responde ainda (ou falha) —
    // tratado como "não deixar enviar", nunca como "livre para pedir",
    // para nunca haver uma janela otimista em que um duplo pedido escapa.
    final relationshipStatus = ref
        .watch(partnerRelationshipStatusProvider(partner.id))
        .maybeWhen(data: (s) => s, orElse: () => null);
    final alreadyRelated =
        !pub && !widget.selectionMode && relationshipStatus != PartnerRelationshipStatus.none;
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
    final fromPrice = minPackage ?? partner.startingPrice;

    final figureText = figureValue == null ? null : figure.format(figureValue);
    final ratingText = summary.count > 0
        ? '${summary.average.toStringAsFixed(1).replaceAll('.', ',')} (${summary.count})'
        : null;
    final stats = ref.watch(partnerPublicStatsProvider(partner.id)).value;
    final dateChip = weddingDate == null
        ? null
        : '${_shortDate(weddingDate)} · ${switch (relationshipStatus) {
            PartnerRelationshipStatus.booked => 'Reservado',
            PartnerRelationshipStatus.requestPending => 'Pedido enviado',
            _ => 'Perguntar',
          }}';
    const ink = AppTheme.ink;
    const muted = Color(0xFF57534E);
    const cream = Color(0xFFF2F0EB);

    Widget chip(String text, {bool green = false}) => Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
          decoration: BoxDecoration(
            color: green ? const Color(0xFFE6EDE1) : cream,
            borderRadius: BorderRadius.circular(999),
          ),
          child: Text(text,
              style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: green ? const Color(0xFF3F7A4F) : const Color(0xFF3A3733))),
        );
    Widget sectionTitle(String t, {String? action, VoidCallback? onAction}) => Padding(
          padding: const EdgeInsets.fromLTRB(20, 22, 20, 12),
          child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Expanded(child: Text(t, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: ink))),
            if (action != null)
              SnappyTap(
                onTap: onAction,
                child: Text(action, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
              ),
          ]),
        );

    final mainLabel = widget.selectionMode
        ? 'Escolher parceiro'
        : alreadyRelated
            ? 'Mensagem'
            : 'Pedir orçamento';
    void mainAction() {
      if (pub) return _needAccount();
      if (widget.selectionMode) return Navigator.of(context).pop(partner);
      if (alreadyRelated) {
        _openChat();
      } else {
        _requestQuote();
      }
    }

    // Mockup "Perfil do parceiro" (2026-11-12), tal e qual: foto a toda a
    // largura (300), cartão branco por cima com nome, preço "Desde",
    // descrição, números, etiquetas, quem segue e os dois botões;
    // depois Pacotes, Avaliações e Onde fica, em cartões brancos.
    return Material(
      color: cream,
      child: SingleChildScrollView(
        padding: EdgeInsets.only(bottom: MediaQuery.paddingOf(context).bottom + 32),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            _PhotoCarousel(
              photos: photos,
              fallbackColor: colorForCategorySlug(partner.primaryCategorySlug),
              fallbackIcon: iconForCategorySlug(partner.primaryCategorySlug),
              favorited: favorited,
              publicView: pub,
              onShare: () => _share(partner),
              onFavorite: () {
                if (!favorited) {
                  for (final slug in partner.categorySlugs) {
                    trackInterest(slug, 'favorite', partnerId: partner.id);
                  }
                }
                ref.read(favoritePartnersControllerProvider.notifier).toggle(partner.id);
              },
            ),
            // Mesma disposição do perfil de um amigo (pedido 2026-11-12),
            // com as fotos por cima: cartão de perfil com logótipo,
            // números, nome, categoria e local, descrição, etiquetas,
            // quem segue e os dois botões.
            Transform.translate(
              offset: const Offset(0, -28),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                child: ProfileCard(
                  avatar: V2Avatar(partner.name, size: 76, imageUrl: partner.imageUrl),
                  name: partner.name,
                  nameBadge: ProBadge(partner.id),
                  handleLine: [partner.primaryCategoryLabel, if (partner.location.isNotEmpty) partner.location].join(' · '),
                  bio: partner.description,
                  labels: const ['Eventos', 'Seguidores', 'Avaliações'],
                  events: stats?.eventsDone ?? 0,
                  followers: stats?.followers ?? 0,
                  following: summary.count,
                  extra: Wrap(spacing: 6, runSpacing: 6, crossAxisAlignment: WrapCrossAlignment.center, children: [
                    FounderBadge(partner.id, long: true),
                    chip(fromPrice == null ? 'Por orçamento' : 'Desde ${euros(fromPrice)}'),
                    if (ratingText != null)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        decoration: BoxDecoration(color: cream, borderRadius: BorderRadius.circular(999)),
                        child: Row(mainAxisSize: MainAxisSize.min, children: [
                          const LineIcon(LineIcon.star, size: 12, fill: true, color: Color(0xFFC9A24A)),
                          const SizedBox(width: 4),
                          Text(ratingText,
                              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3A3733))),
                        ]),
                      ),
                    if (figureText != null) chip(figureText),
                    if (dateChip != null) chip(dateChip),
                    if (responds != null) chip(responds, green: true),
                  ]),
                  followedBy: widget.selectionMode
                      ? ProfileButton(mainLabel, dark: true, onTap: mainAction)
                      : _PartnerFollow(
                          partnerId: partner.id,
                          onNeedAccount: pub ? _needAccount : null,
                          second: ProfileButton(mainLabel, onTap: _requestingQuote || _openingChat ? null : mainAction),
                        ),
                ),
              ),
            ),
            if (packages.isNotEmpty) ...[
              Transform.translate(
                offset: const Offset(0, -28),
                child: sectionTitle('Pacotes', action: '${packages.length} ${packages.length == 1 ? 'pacote' : 'pacotes'}'),
              ),
              Transform.translate(
                offset: const Offset(0, -28),
                child: Container(
                  margin: const EdgeInsets.symmetric(horizontal: 20),
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                  child: Column(children: [
                    for (var i = 0; i < packages.length; i++)
                      SnappyTap(
                        // Tocar num pacote: pedir esse pacote (ou falar, se já há pedido).
                        onTap: widget.selectionMode
                            ? null
                            : pub
                                ? _needAccount
                                : alreadyRelated
                                    ? _openChat
                                    : () => _requestQuote(
                                          initialMessage:
                                              'Olá! Tenho interesse no pacote "${packages[i].name}" (${packages[i].isStartingPrice ? 'desde ' : ''}${euros(packages[i].price)}).',
                                        ),
                        child: Container(
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          decoration: BoxDecoration(
                            border: i == packages.length - 1 ? null : const Border(bottom: BorderSide(color: Color(0xFFECE7DC))),
                          ),
                          child: Row(children: [
                            Expanded(
                              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                                Text(packages[i].name,
                                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink)),
                                if (packages[i].description.trim().isNotEmpty)
                                  Text(packages[i].description.trim(),
                                      maxLines: 2,
                                      overflow: TextOverflow.ellipsis,
                                      style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: muted)),
                              ]),
                            ),
                            const SizedBox(width: 12),
                            Text(
                              packages[i].isStartingPrice ? 'desde ${euros(packages[i].price)}' : euros(packages[i].price),
                              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink),
                            ),
                          ]),
                        ),
                      ),
                  ]),
                ),
              ),
            ],
            Transform.translate(
              offset: const Offset(0, -28),
              child: _ReviewsSection(
                partnerId: partner.id,
                partnerName: partner.name,
                partnerAvatarUrl: partner.imageUrl,
                title: (count, action, onAction) => sectionTitle('Avaliações', action: action, onAction: onAction),
              ),
            ),
            if (partner.location.isNotEmpty)
              Transform.translate(
                offset: const Offset(0, -28),
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  sectionTitle('Onde fica'),
                  Container(
                    margin: const EdgeInsets.symmetric(horizontal: 20),
                    clipBehavior: Clip.antiAlias,
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                      Container(
                        height: 130,
                        color: const Color(0xFFDDE5D3),
                        alignment: Alignment.center,
                        child: const LineIcon(LineIcon.pin, size: 30, color: Color(0xFF4F6B4A), circles: LineIcon.pinCircle),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(16, 12, 16, 12),
                        child: Row(children: [
                          Expanded(
                            child: Text(partner.location,
                                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: ink)),
                          ),
                          const SizedBox(width: 10),
                          SnappyTap(
                            onTap: () => launchUrl(
                              Uri.parse('https://www.google.com/maps/search/?api=1&query=${Uri.encodeComponent('${partner.name} ${partner.location}')}'),
                              mode: LaunchMode.externalApplication,
                            ),
                            child: Text('Abrir mapa',
                                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                          ),
                        ]),
                      ),
                    ]),
                  ),
                ]),
              ),
            if (pub)
              const Padding(
                padding: EdgeInsets.fromLTRB(20, 0, 20, 0),
                child: Text(
                  '"Seguir" e "Pedir orçamento" pedem para entrar ou criar conta, e voltam a esta página.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted),
                ),
              ),
          ],
        ),
      ),
    );
  }

  Future<void> _share(Partner partner) async {
    final link = publicLink('/parceiro/${partner.id}');
    try {
      await SharePlus.instance.share(ShareParams(text: '${partner.name} na À Nossa!: $link', subject: partner.name));
    } catch (_) {
      await Clipboard.setData(ClipboardData(text: link));
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
    }
  }
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
  final VoidCallback? onShare;
  final bool publicView;

  const _PhotoCarousel({
    required this.photos,
    required this.fallbackColor,
    required this.fallbackIcon,
    required this.favorited,
    required this.onFavorite,
    this.onShare,
    this.publicView = false,
  });

  @override
  State<_PhotoCarousel> createState() => _PhotoCarouselState();
}

class _PhotoCarouselState extends State<_PhotoCarousel> {
  int _page = 0;

  Widget _round(Widget icon, String label, VoidCallback onTap) => Semantics(
        button: true,
        label: label,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
            child: icon,
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final photos = widget.photos;
    final top = MediaQuery.of(context).padding.top;
    // Mockup "Perfil do parceiro": foto a toda a largura, 300 de altura,
    // botões brancos redondos e "1 / N fotos" em baixo à esquerda.
    return SizedBox(
      height: 300 + top,
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
              itemBuilder: (context, i) => SizedNetworkImage(
                photos[i],
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) => const SizedBox.shrink(),
              ),
            ),
          if (widget.publicView) ...[
            // Página pública: marca à esquerda, "Abrir na app" à direita.
            Positioned(
              top: top + 20,
              left: 20,
              child: Container(
                height: 44,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                alignment: Alignment.center,
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                child: const Text('À Nossa!', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ),
            if (kIsWeb)
              Positioned(
                top: top + 20,
                right: 20,
                child: SnappyTap(
                  onTap: () {
                    PendingDeepLink.save(GoRouterState.of(context).uri.toString());
                    showInstallAppSheet(context);
                  },
                  child: Container(
                    height: 44,
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(22)),
                    child: const Text('Abrir na app',
                        style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: Colors.white)),
                  ),
                ),
              ),
          ] else ...[
            Positioned(
              top: top + 20,
              left: 20,
              child: _round(const LineIcon(LineIcon.back, stroke: 2.2), 'Voltar', () {
                if (Navigator.of(context).canPop()) {
                  Navigator.of(context).pop();
                } else {
                  context.go('/partners');
                }
              }),
            ),
            Positioned(
              top: top + 20,
              right: 20,
              child: Row(children: [
                if (widget.onShare != null) ...[
                  _round(const LineIcon(LineIcon.share, size: 18, stroke: 2.2), 'Partilhar', widget.onShare!),
                  const SizedBox(width: 8),
                ],
                _round(
                  LineIcon(LineIcon.heart,
                      size: 18,
                      stroke: 2.2,
                      fill: widget.favorited,
                      color: widget.favorited ? AppStatusColors.declined : AppTheme.ink),
                  widget.favorited ? 'Remover dos favoritos' : 'Guardar nos favoritos',
                  widget.onFavorite,
                ),
              ]),
            ),
          ],
          if (photos.isNotEmpty)
            Positioned(
              left: 20,
              bottom: 44,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(999)),
                child: Text('${_page + 1} / ${photos.length} ${photos.length == 1 ? 'foto' : 'fotos'}',
                    style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w700)),
              ),
            ),
        ],
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
class _ReviewsSection extends ConsumerStatefulWidget {
  final String partnerId;
  final String partnerName;
  final String? partnerAvatarUrl;

  /// Título "Avaliações" com "Ver todas (N)" (mockup).
  final Widget Function(int count, String? action, VoidCallback? onAction) title;

  const _ReviewsSection({required this.partnerId, required this.partnerName, this.partnerAvatarUrl, required this.title});

  @override
  ConsumerState<_ReviewsSection> createState() => _ReviewsSectionState();
}

class _ReviewsSectionState extends ConsumerState<_ReviewsSection> {
  bool _all = false;

  @override
  Widget build(BuildContext context) {
    final reviews = ref.watch(publicReviewsForPartnerProvider(widget.partnerId)).value ?? const <Review>[];
    final shown = _all ? reviews : reviews.take(1).toList();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      widget.title(
        reviews.length,
        reviews.length > 1 && !_all ? 'Ver todas (${reviews.length})' : null,
        () => setState(() => _all = true),
      ),
      if (reviews.isEmpty)
        Container(
          margin: const EdgeInsets.symmetric(horizontal: 20),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
          child: const Text('Ainda sem avaliações.',
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: Color(0xFF57534E))),
        )
      else
        for (final r in shown)
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 0, 20, 10),
            child: ReviewTile(review: r, partnerName: widget.partnerName, partnerAvatarUrl: widget.partnerAvatarUrl),
          ),
    ]);
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
/// Seguidores, amigos que seguem e o botão Seguir / A seguir.
class _PartnerFollow extends ConsumerStatefulWidget {
  final String partnerId;

  /// Página pública sem sessão: o botão pede para entrar.
  final VoidCallback? onNeedAccount;

  /// Segundo botão ao lado de "Seguir" (mockup: "Pedir orçamento").
  final Widget? second;
  const _PartnerFollow({required this.partnerId, this.onNeedAccount, this.second});

  @override
  ConsumerState<_PartnerFollow> createState() => _PartnerFollowState();
}

class _PartnerFollowState extends ConsumerState<_PartnerFollow> {
  bool _busy = false;

  @override
  Widget build(BuildContext context) {
    if (widget.onNeedAccount != null) {
      final followers = ref.watch(partnerPublicStatsProvider(widget.partnerId)).value?.followers ?? 0;
      return Padding(
        padding: EdgeInsets.zero,
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          if (followers > 0) ...[
            Text('Seguido por $followers ${followers == 1 ? 'pessoa' : 'pessoas'} na À Nossa!',
                style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            const SizedBox(height: 12),
          ],
          Row(children: [
            Expanded(child: ProfileButton('Seguir', dark: true, onTap: widget.onNeedAccount)),
            if (widget.second != null) ...[const SizedBox(width: 8), Expanded(child: widget.second!)],
          ]),
        ]),
      );
    }
    final info = ref.watch(partnerFollowInfoProvider(widget.partnerId)).value;
    if (info == null) {
      return widget.second == null
          ? const SizedBox.shrink()
          : widget.second!;
    }
    return Padding(
      padding: EdgeInsets.zero,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        if (info.friends.isNotEmpty) ...[
          FollowedByRow(people: info.friends, text: followedByLine(info.friends, info.friendsCount, female: false)),
          const SizedBox(height: 14),
        ],
        Row(children: [
          Expanded(
            child: ProfileButton(
              info.iFollow ? 'A seguir' : 'Seguir',
              dark: !info.iFollow,
              onTap: _busy
                  ? null
                  : () async {
                      setState(() => _busy = true);
                      try {
                        await followPartner(widget.partnerId, !info.iFollow);
                        ref.invalidate(partnerFollowInfoProvider(widget.partnerId));
                      } catch (_) {
                        if (mounted) {
                          ScaffoldMessenger.of(context)
                              .showSnackBar(const SnackBar(content: Text('Não foi possível. Tenta outra vez.')));
                        }
                      } finally {
                        if (mounted) setState(() => _busy = false);
                      }
                    },
            ),
          ),
          if (widget.second != null) ...[const SizedBox(width: 8), Expanded(child: widget.second!)],
        ]),
      ]),
    );
  }
}


/// Página pública do parceiro (`/parceiro/:id`, link "Partilhar perfil",
/// 2026-11-12). Abre sem sessão; com sessão é o perfil de sempre.
class PublicPartnerScreen extends ConsumerWidget {
  final String id;
  const PublicPartnerScreen({super.key, required this.id});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signedIn = ref.watch(authControllerProvider.select((s) => s.status == AuthStatus.active));
    final async = ref.watch(partnerByIdProvider(id));
    return async.when(
      loading: () => const Scaffold(backgroundColor: AppTheme.background, body: Center(child: CircularProgressIndicator())),
      error: (e, st) => const _PartnerUnavailable(),
      data: (p) => p == null ? const _PartnerUnavailable() : PartnerDetailScreen(partner: p, publicView: !signedIn),
    );
  }
}

class _PartnerUnavailable extends StatelessWidget {
  const _PartnerUnavailable();

  @override
  Widget build(BuildContext context) => Scaffold(
        backgroundColor: AppTheme.background,
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(32),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              const Text('Este parceiro não está disponível.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 16),
              ProfileButton('Ir para a À Nossa!', dark: true, onTap: () => context.go('/welcome')),
            ]),
          ),
        ),
      );
}
