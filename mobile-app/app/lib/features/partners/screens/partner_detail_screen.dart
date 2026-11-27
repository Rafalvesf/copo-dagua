import '../../../shared/widgets/opening_hours.dart' show OpeningHoursSection, OpeningHoursInline;
import 'dart:math' as math;
import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:share_plus/share_plus.dart';
import 'package:flutter/services.dart';
import '../../../shared/public_link.dart';
import '../../../core/chat/presence.dart' show responseLabel;
import '../../../core/pending_deep_link.dart';
import '../../../shared/widgets/install_app_sheet.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/undo_toast.dart';
import '../../../core/social/social.dart';
import '../../profile/profile_widgets.dart' show FollowedByRow, ProfileButton;
import 'package:copo_dagua_app/core/partners/promotions.dart';
import 'package:copo_dagua_app/core/analytics/funnel.dart';
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
import '../../../core/event/event_controller.dart';
import '../../../core/event/organizers.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../partner_style.dart';
import '../widgets/partner_cards.dart';
import '../../../core/profile/username.dart' show usernameOfProvider;
import '../widgets/reserve_flow.dart';
import '../../../shared/widgets/dense_card.dart' show PriceBox;
import '../../../shared/widgets/navigation_sheet.dart' show showNavigationSheet;
import '../../../shared/widgets/venue_map.dart' show VenueMap;
import '../../../shared/money.dart';
import '../../../core/partners/category_figure.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';
import '../../../shared/widgets/partner_badges.dart';
import '../../../shared/widgets/partner_achievements.dart';
import '../../../shared/text_case.dart';
import '../../../core/partners/partner_achievements.dart' show partnerAchievementsProvider;
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';
import 'package:copo_dagua_app/shared/widgets/enter_scale.dart';


/// Eventos onde ainda dá para reservar este parceiro: elegíveis (sou dono, ou
/// co-organizador com permissão de tratar de parceiros — `OrganizerPerm.conversas`)
/// E onde ainda não pedi orçamento nem pacote. Em dúvida (erro), não oferece
/// (conservador, para nunca sugerir um duplo pedido).
/// Altura da foto do topo aberta (mockup «Perfil do parceiro»).
// Foto do topo: 200 (pedido 2026-11-22; o logótipo e o nome passaram para
// o cartão por baixo).
const double _kHeroHeight = 200;

final _partnerBookableEventsProvider =
    FutureProvider.autoDispose.family<List<Event>, String>((ref, partnerId) async {
  final myId = ref.watch(authControllerProvider).profile?.id;
  final events = ref.watch(eventControllerProvider.select((s) => s.events));
  // Desempenho (2026-11-26): as permissões de todos os eventos ao mesmo
  // tempo e as reservas / pedidos numa só consulta, em vez de 3 pedidos
  // seguidos por evento.
  final allowed = await Future.wait([
    for (final w in events)
      if (w.ownerId == myId)
        Future.value(true)
      else
        supabase.rpc('my_event_permissions', params: {'p_wedding': w.id}).then((r) {
          final perms = r is Map ? OrganizerPerms.fromJson(r, isOwner: r['is_owner'] == true) : OrganizerPerms.all;
          return perms.can(OrganizerPerm.conversas);
        }, onError: (_) => true), // antes da migração de permissões: permitido
  ]);
  final candidates = [for (var i = 0; i < events.length; i++) if (allowed[i]) events[i]];
  if (candidates.isEmpty) return const <Event>[];
  final ids = [for (final w in candidates) w.id];
  final Set<String> busy;
  try {
    final res = await Future.wait([
      supabase
          .from('bookings')
          .select('wedding_id')
          .inFilter('wedding_id', ids)
          .eq('partner_id', partnerId)
          .inFilter('status', ['awaiting_deposit', 'confirmed', 'completed']),
      supabase
          .from('quote_requests')
          .select('wedding_id')
          .inFilter('wedding_id', ids)
          .eq('partner_id', partnerId)
          .inFilter('status', ['pending', 'viewed', 'proposal_sent']),
    ]);
    busy = {for (final rows in res) for (final r in rows) r['wedding_id'] as String};
  } catch (_) {
    return const <Event>[]; // em dúvida, não oferecer eventos
  }
  final out = [for (final w in candidates) if (!busy.contains(w.id)) w];
  return out;
});

class PartnerDetailScreen extends ConsumerStatefulWidget {
  final Partner partner;
  final bool selectionMode;

  /// Página pública (link "Partilhar perfil", 2026-11-12), vista sem
  /// sessão: "À Nossa!" e "Abrir na app" no topo; seguir, mensagem e
  /// pedir orçamento pedem para entrar e voltam aqui.
  final bool publicView;

  /// O próprio parceiro (aba Perfil, pedido 2026-11-25: «deve aparecer
  /// semelhante ao que os organizadores veem»): sem voltar, favorito,
  /// seguir nem reservar; [ownerButtons] no lugar de Seguir + Mensagem,
  /// [ownerActions] no topo e [ownerFooter] no fim.
  final bool ownerView;
  final Widget? ownerButtons;
  final List<Widget> ownerActions;
  final List<Widget> ownerFooter;

  const PartnerDetailScreen({
    super.key,
    required this.partner,
    this.selectionMode = false,
    this.publicView = false,
    this.ownerView = false,
    this.ownerButtons,
    this.ownerActions = const [],
    this.ownerFooter = const [],
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
        transitionDuration: ExpandOrigin.pushDuration,
        reverseTransitionDuration: ExpandOrigin.popDuration,
        pageBuilder: (context, animation, secondaryAnimation) => PartnerDetailScreen(
          partner: partner,
          selectionMode: selectionMode,
        ),
        // Mesma animação dos botões da app (`page_transitions.dart`).
        transitionsBuilder: (context, animation, secondaryAnimation, child) =>
            PushTransition(animation: animation, child: child),
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
  /// Pacote escolhido no perfil (mockup «Perfis dos parceiros», 2026-11-15).
  int? _selectedPackage;
  final Set<String> _selectedExtras = {};
  final _packageMessage = TextEditingController();
  final _scroll = ScrollController();
  /// «Como escolhem» (190): falso = igual para todos (escolhe-se aqui um
  /// menu), verdadeiro = cada um escolhe o seu na app antes de pagar.
  bool _eachChooses = false;

  /// Percentagem do sinal deste parceiro (`partner_deposit_pct`, 191): 100
  /// = sem sinal. Lida ao abrir «Reservar».
  double _depositPct = 30;

  @override
  void dispose() {
    _packageMessage.dispose();
    _scroll.dispose();
    super.dispose();
  }

  /// O erro do servidor dito como deve ser no popup da reserva.
  String _requestError(PostgrestException e, {bool quote = false}) => switch (e.code) {
        'P0002' => 'Este parceiro já não está disponível.',
        // Migração 117: contratado em segredo por outro organizador.
        'P0010' => PartnerUnavailableException.message,
        'P0003' => 'Escolhe uma data com pelo menos 7 dias de antecedência.',
        // Migração 103: só um pedido de cada vez por parceiro.
        'P0009' => quote
            ? 'Já pediste orçamento a este parceiro. Só podes pedir outra vez se o pedido ou a reserva for cancelado.'
            : 'Já fizeste um pedido a este parceiro. Só podes pedir outra vez se o pedido ou a reserva for cancelado.',
        _ when e.message.contains('too_few_people') => 'Este pacote pede mais pessoas.',
        _ when e.message.contains('too_many_people') => 'Este pacote não dá para tantas pessoas.',
        _ => quote ? 'Não foi possível enviar o pedido de orçamento.' : 'Não foi possível enviar o pedido.',
      };

  /// Depois de um pedido: o botão passa a «Pedido já enviado».
  void _afterRequest() {
    ref.invalidate(partnerRelationshipStatusProvider(widget.partner.id));
    ref.invalidate(_partnerBookableEventsProvider(widget.partner.id));
  }

  String? _day(ReserveFlowResult r) => r.day?.toIso8601String().split('T').first;

  /// «Pedir este pacote» (188): pacote, extras, pessoas e o resumo. Antes
  /// da migração (função em falta) segue como pedido de orçamento com o
  /// pacote na mensagem. Devolve o `quote_requests.id`.
  Future<String?> _sendPackage(ServicePackage pkg, ReserveFlowResult r) async {
    final summary = [
      'Pacote "${pkg.name}"',
      if (pkg.perPerson) 'para ${r.people} pessoas',
      if (r.extras.isNotEmpty) 'com ${r.extras.map((e) => e.name).join(', ')}',
      if (r.eachPays) '(cada um paga o seu)',
    ].join(' ');
    final note = r.summary();
    Funnel.track('quote_request_start', ref: widget.partner.id);
    final Object? quoteId;
    try {
      quoteId = await supabase.rpc('request_package', params: {
        'p_partner_id': widget.partner.id,
        'p_wedding_id': r.event.id,
        'p_package_id': pkg.id,
        'p_extra_ids': r.extras.map((e) => e.id).toList(),
        'p_people': r.people,
        'p_event_date': _day(r),
        'p_message': note.isEmpty ? null : note,
        if (r.eachPays) 'p_payer_mode': 'each',
      });
    } on PostgrestException catch (e) {
      if (e.code == 'PGRST202' || e.code == '42883') {
        return _sendQuote(r, message: 'Olá! Queremos o ${summary.substring(0, 1).toLowerCase()}${summary.substring(1)}. $note');
      }
      throw ReserveRequestError(_requestError(e));
    } catch (_) {
      throw const ReserveRequestError('Não foi possível enviar o pedido.');
    }
    try {
      await sendQuoteRequestMessage(
        eventId: r.event.id,
        partnerId: widget.partner.id,
        partnerName: widget.partner.name,
        eventDate: r.day,
        message: [summary, if (note.isNotEmpty) note].join('\n'),
      );
    } catch (_) {}
    _afterRequest();
    return quoteId is String ? quoteId : null;
  }

  /// «Reservar mesa» (190): cada um escolhe o seu menu e extras na app; a
  /// reserva não tem sinal.
  Future<String?> _sendTable(ReserveFlowResult r) async {
    final note = r.summary();
    final summary = 'Mesa para ${r.people} pessoas, cada um escolhe${r.eachPays ? ' e paga' : ''} o seu';
    Funnel.track('quote_request_start', ref: widget.partner.id);
    final Object? quoteId;
    try {
      quoteId = await supabase.rpc('request_table', params: {
        'p_partner_id': widget.partner.id,
        'p_wedding_id': r.event.id,
        'p_people': r.people,
        'p_event_date': _day(r),
        'p_message': note.isEmpty ? null : note,
        'p_payer_mode': r.eachPays ? 'each' : 'organizer',
      });
    } on PostgrestException catch (e) {
      if (e.code == 'PGRST202' || e.code == '42883') {
        return _sendQuote(r, message: 'Olá! Queremos uma ${summary.substring(0, 1).toLowerCase()}${summary.substring(1)}. $note');
      }
      throw ReserveRequestError(_requestError(e));
    } catch (_) {
      throw const ReserveRequestError('Não foi possível enviar o pedido.');
    }
    // «Nós pagamos por» (216): as pessoas cuja comida pagamos nós.
    if (r.eachPays && r.paidFor.isNotEmpty && quoteId is String) {
      try {
        await supabase.rpc('set_paid_for', params: {
          'p_quote_request_id': quoteId,
          'p_booking_id': null,
          'p_keys': r.paidFor.keys.toList(),
        });
      } catch (_) {}
    }
    try {
      await sendQuoteRequestMessage(
        eventId: r.event.id,
        partnerId: widget.partner.id,
        partnerName: widget.partner.name,
        eventDate: r.day,
        message: [summary, if (note.isNotEmpty) note].join('\n'),
      );
    } catch (_) {}
    _afterRequest();
    return quoteId is String ? quoteId : null;
  }

  /// Pedido de orçamento: o dia, o local e as pessoas vêm do evento; o
  /// parceiro responde com uma proposta.
  Future<String?> _sendQuote(ReserveFlowResult r, {String? message}) async {
    final e = r.event;
    final place = (e.venue?.trim().isNotEmpty == true) ? e.venue!.trim() : e.location?.trim();
    final quoteMessage = message ?? [r.summary(), ?r.message].join('\n');
    Funnel.track('quote_request_start', ref: widget.partner.id);
    for (final slug in widget.partner.categorySlugs) {
      trackInterest(slug, 'quote', partnerId: widget.partner.id);
    }
    final Object? quoteId;
    try {
      quoteId = await supabase.rpc('request_quote', params: {
        'p_partner_id': widget.partner.id,
        'p_wedding_id': e.id,
        'p_event_date': _day(r),
        'p_location': (place == null || place.isEmpty) ? null : place,
        // O parceiro define o preço na proposta (pedido de 2026-09-04).
        'p_budget_min': null,
        'p_budget_max': null,
        'p_message': quoteMessage,
      });
    } on PostgrestException catch (err) {
      throw ReserveRequestError(_requestError(err, quote: true));
    } catch (_) {
      throw const ReserveRequestError('Não foi possível enviar o pedido de orçamento.');
    }
    // A hora fica no pedido (238): aparece no cartão e em «Editar pedido».
    if (quoteId is String && r.startTime != null) {
      try {
        await supabase.rpc('set_quote_request_time', params: {'p_id': quoteId, 'p_start': r.startTime, 'p_end': r.endTime});
      } catch (_) {}
    }
    try {
      await sendQuoteRequestMessage(
        eventId: e.id,
        partnerId: widget.partner.id,
        partnerName: widget.partner.name,
        eventDate: r.day,
        location: (place == null || place.isEmpty) ? null : place,
        message: quoteMessage,
      );
    } catch (_) {}
    _afterRequest();
    return quoteId is String ? quoteId : null;
  }

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

  Future<void> _openChat({Event? event}) async {
    final pickedEvent = event ?? ref.read(eventControllerProvider).event;
    if (pickedEvent == null || _openingChat) return;
    setState(() => _openingChat = true);
    try {
      final partner = widget.partner;
      final conversationId = await getOrCreateConversation(
        eventId: pickedEvent.id,
        partnerId: partner.id,
      );
      if (!mounted) return;
      context.push(
        '/chat/$conversationId',
        extra: ChatConversation(
          id: conversationId,
          eventId: pickedEvent.id,
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

  /// Pedir orçamento (só orçamento): o mesmo popup da reserva, que acaba em
  /// «Pedir orçamento».
  Future<void> _requestQuote({String? initialMessage}) => _openFlow(
        kind: reserveKindFor(widget.partner.primaryCategorySlug),
        quote: true,
        reference: widget.partner.quoteOnly ? partnerReference(widget.partner) : null,
        initialMessage: initialMessage,
        send: _sendQuote,
      );

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
    // Posso reservar se houver pelo menos um evento reservável (elegível e sem
    // pedido). Mesmo "já relacionado" neste evento, se existir outro evento
    // livre, a zona de reservar reaparece (a Mensagem fica em cima). Enquanto
    // carrega (null) é conservador: não mostra, para nunca piscar um reservar
    // que leve a duplo pedido.
    final bookable = ref.watch(_partnerBookableEventsProvider(partner.id)).maybeWhen(data: (l) => l, orElse: () => null);
    final canReserve = !pub && !widget.selectionMode && bookable != null && bookable.isNotEmpty;
    // Só Mensagem: já pedi/reservei a este parceiro e não sobra nenhum evento
    // livre (ex.: tenho um só evento e já o escolhi). Aí explico porquê.
    final onlyMessage = !pub &&
        !widget.selectionMode &&
        relationshipStatus != null &&
        relationshipStatus != PartnerRelationshipStatus.none &&
        bookable != null &&
        bookable.isEmpty;
    final summary = ref.watch(publicReviewSummaryForPartnerProvider(partner.id));
    final packages = ref
        .watch(partnerPackagesForProvider(partner.id))
        .maybeWhen(data: (p) => p, orElse: () => const <ServicePackage>[]);
    final extras = ref
        .watch(partnerExtrasForProvider(partner.id))
        .maybeWhen(data: (e) => e, orElse: () => const <ServiceExtra>[]);
    // Menus por pessoa (restaurantes, catering): pessoas e «Como escolhem»
    // no topo da carta (190).
    final perPersonMenus = !widget.selectionMode && !widget.publicView && packages.any((p) => p.perPerson);
    // O organizador nunca escolhe o menu de ninguém (pedido do Rafael,
    // 2026-11-20): com menus por pessoa reserva-se a mesa e cada convidado
    // escolhe o seu depois. No perfil os menus só se veem.
    final menusOnly = perPersonMenus && reserveKindFor(partner.primaryCategorySlug) == ReserveKind.mesa;
    _eachChooses = menusOnly;
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
    // Avaliações: a nota média em cima e o nº de avaliações por baixo, numa
    // caixa com contorno (como o Main). Sem avaliações: «—».
    final avgText = summary.count > 0
        ? summary.average.toStringAsFixed(1).replaceAll('.', ',')
        : '—';
    final stats = ref.watch(partnerPublicStatsProvider(partner.id)).value;
    const ink = AppTheme.ink;
    const muted = Color(0xFF57534E);
    const cream = Color(0xFFF2F2F2);

    Widget sectionTitle(String t, {String? action, VoidCallback? onAction}) => Padding(
          padding: const EdgeInsets.fromLTRB(20, 28, 20, 12),
          child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Expanded(child: Text(t, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: ink))),
            if (action != null)
              SnappyTap(
                onTap: onAction,
                child: Text(action, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
              ),
          ]),
        );

    // Mockup «Perfil do parceiro» (2026-11-20), tal e qual: foto no topo
    // que encolhe com o scroll e fica fixa (voltar, partilhar, favorito e o
    // resumo do parceiro); cartão de dados; pacotes para escolher; quanto
    // pode custar (só orçamento); portfólio; onde fica; avaliações; e a
    // barra fixa em baixo com o preço e o botão principal.
    final quoteOnly = packages.isEmpty;
    final reference = quoteOnly ? partnerReference(partner) : null;
    final portfolioPhotos = <String>[
      for (final item in portfolio)
        if (item.mediaType == PortfolioMediaType.image) item.mediaUrl,
    ];
    final topPad = MediaQuery.paddingOf(context).top;
    final bottomPad = MediaQuery.paddingOf(context).bottom;
    final selPkgBar = !_eachChooses && _selectedPackage != null && _selectedPackage! < packages.length
        ? packages[_selectedPackage!]
        : null;

    // --- Barra fixa em baixo ---------------------------------------------
    (String, String) defaultBox() => quoteOnly
        ? (reference != null ? ('REFERÊNCIA', '≈ ${euros(reference)}') : ('POR', 'Orçamento'))
        : (fromPrice == null ? ('POR', 'Orçamento') : ('DESDE', euros(fromPrice)));
    var barBox = defaultBox();
    String barLabel;
    VoidCallback? barAction;
    if (widget.selectionMode) {
      barLabel = 'Escolher parceiro';
      barAction = () => Navigator.of(context).pop(partner);
    } else if (pub) {
      barLabel = quoteOnly ? 'Pedir orçamento' : 'Escolher pacote';
      barAction = _needAccount;
    } else if (bookable == null) {
      // Ainda a verificar se dá para reservar: nunca deixa um duplo pedido.
      barLabel = quoteOnly ? 'Pedir orçamento' : 'Escolher pacote';
      barAction = null;
    } else if (!canReserve) {
      barLabel = 'Mensagem';
      barAction = _openingChat ? null : _openChat;
    } else if (quoteOnly) {
      barLabel = 'Pedir orçamento';
      barAction = _requestingQuote ? null : () => _requestQuote();
    } else if (_eachChooses) {
      barBox = ('MESA', 'Grátis');
      barLabel = 'Reservar mesa';
      barAction = _requestingQuote ? null : () => _openTableSheet();
    } else if (selPkgBar != null) {
      barBox = (
        selPkgBar.name.toUpperCase(),
        '${selPkgBar.isStartingPrice ? 'desde ' : ''}${euros(selPkgBar.price)}${priceUnitSuffix(selPkgBar.priceUnit)}',
      );
      barLabel = 'Reservar';
      barAction = _requestingQuote
          ? null
          : () => _openReserveSheet(selPkgBar, extras.where((e) => e.appliesTo(selPkgBar.id)).toList());
    } else {
      barLabel = 'Escolher pacote';
      barAction = _scrollToPackages;
    }

    // Aviso do §7 / molde do §6.3 (linha 1,5, ponto, título 16 + frase 13),
    // com interior a sério — antes ficava colado à linha (2026-11-22).
    Widget statusNote() {
      final booked = relationshipStatus == PartnerRelationshipStatus.booked;
      final tone = booked ? AlertTone.invite : AlertTone.pending;
      // Diz qual é o evento (pedido 2026-11-22): o estado é do evento ativo.
      final ev = ref.watch(eventControllerProvider.select((s) => s.event));
      final evName = ev == null ? 'este evento' : capFirst(ev.displayNames);
      return AlertOutline(
        tone: tone,
        radius: 22,
        padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Padding(padding: const EdgeInsets.only(top: 6), child: AlertDot(tone)),
          const SizedBox(width: 10),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(booked ? 'Reservado' : 'Orçamento pedido',
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink)),
              const SizedBox(height: 2),
              Text(
                booked
                    ? 'Já reservaste ${partner.name} para $evName.'
                    : 'Já pediste orçamento a ${partner.name} para $evName.',
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.35),
              ),
            ]),
          ),
        ]),
      );
    }

    return Material(
      color: cream,
      child: Stack(
        children: [
          SingleChildScrollView(
            controller: _scroll,
            padding: EdgeInsets.only(bottom: bottomPad + 130),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Lugar da foto do topo (a foto está fixa por cima, no Stack).
                const SizedBox(height: _kHeroHeight),
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
                  child: _PartnerHeadCard(
                    partner: partner,
                    priceBox: PriceBox(defaultBox().$1, defaultBox().$2, outlined: true),
                    ratingText: summary.count > 0 ? avgText : null,
                    reviewCount: summary.count,
                    responds: responds,
                    figureText: figureText,
                    stats: [
                      (avgText, 'Nota'),
                      ('${stats?.followers ?? 0}', 'Seguidores'),
                      ('${stats?.eventsDone ?? 0}', 'Eventos'),
                    ],
                    buttons: widget.ownerView
                        ? widget.ownerButtons
                        : widget.selectionMode
                        ? null
                        : _PartnerFollow(
                            partnerId: partner.id,
                            outlined: true,
                            onNeedAccount: pub ? _needAccount : null,
                            second: ProfileButton(
                              'Mensagem',
                              onTap: pub ? _needAccount : (_openingChat ? null : _openChat),
                            ),
                          ),
                  ),
                ),
                // Horário resumido perto da bio (pedido 2026-11-25).
                OpeningHoursInline(partnerId: partner.id),
                if (onlyMessage || (alreadyRelated && canReserve && relationshipStatus != null))
                  Padding(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
                    child: statusNote(),
                  ),
                if (packages.isNotEmpty) ...[
                  KeyedSubtree(
                    key: _packagesKey,
                    child: menusOnly
                        ? Padding(
                            padding: const EdgeInsets.fromLTRB(20, 28, 20, 12),
                            child: Row(children: [
                              const Expanded(child: Text('Menus', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: ink))),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                                decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
                                child: const Text('Escolhes depois de reservares',
                                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
                              ),
                            ]),
                          )
                        : sectionTitle(
                            'Pacotes',
                            action: canReserve && !_eachChooses ? 'Escolhe um' : '${packages.length} ${packages.length == 1 ? 'pacote' : 'pacotes'}',
                          ),
                  ),
                  // Pessoas e «Quem paga» perguntam-se no pedido de reserva
                  // (mockups «Reservar por categoria», 2026-11-20).
                  RowGroup(flat: true, children: [
                    for (var i = 0; i < packages.length; i++)
                      _PackageRow(
                        package: packages[i],
                        first: i == 0,
                        selected: !_eachChooses && _selectedPackage == i,
                        viewOnly: menusOnly,
                        onTap: widget.selectionMode || menusOnly || widget.ownerView
                            ? null
                            : pub
                                ? _needAccount
                                : !canReserve
                                    ? _openChat
                                    : _eachChooses
                                        ? null
                                        : () => setState(() => _selectedPackage = _selectedPackage == i ? null : i),
                      ),
                  ]),
                  if (menusOnly)
                    const Padding(
                      padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 10, AppTheme.screenMargin, 0),
                      child: Text(
                        'Só para veres e decidires. Depois de reservares, cada convidado escolhe o seu na app (e tu o teu). Ninguém escolhe pelos outros.',
                        style: TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4),
                      ),
                    ),
                  if (!widget.selectionMode && canReserve)
                    Padding(
                      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
                      child: ProfileButton('Pedir orçamento à medida',
                          onTap: _requestingQuote ? null : () => _requestQuote()),
                    ),
                ],
                // Só orçamento: quanto pode custar (migração 203).
                if (quoteOnly && reference != null) ...[
                  sectionTitle('Quanto pode custar'),
                  _ReferenceCard(price: reference, note: partner.referenceNote),
                ],
                if (portfolioPhotos.isNotEmpty) ...[
                  KeyedSubtree(key: _portfolioKey, child: sectionTitle(
                    'Portfólio',
                    action: 'Ver todos (${portfolioPhotos.length})',
                    onAction: () => _openPhotos(portfolioPhotos, 0),
                  )),
                  SizedBox(
                    height: 128,
                    child: ListView.separated(
                      physics: const BouncingScrollPhysics(),
                      scrollDirection: Axis.horizontal,
                      padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                      itemCount: portfolioPhotos.length,
                      separatorBuilder: (context, i) => const SizedBox(width: 10),
                      itemBuilder: (context, i) => SnappyTap(
                        onTap: () => _openPhotos(portfolioPhotos, i),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(22),
                          child: SizedBox(
                            width: 128,
                            height: 128,
                            child: SizedNetworkImage(
                              portfolioPhotos[i],
                              fit: BoxFit.cover,
                              errorBuilder: (context, error, stackTrace) => Container(color: colorForCategorySlug(partner.primaryCategorySlug)),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
                // Horário de funcionamento (241): antes de «Onde fica».
                OpeningHoursSection(partnerId: partner.id, titleBuilder: (t) => sectionTitle(t)),
                if (partner.location.isNotEmpty) ...[
                  KeyedSubtree(key: _mapKey, child: sectionTitle('Onde fica')),
                  // Sem caixa branca (B, 2026-11-22); o mapa é o do Google.
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                      ClipRRect(
                        borderRadius: BorderRadius.circular(16),
                        child: VenueMap(label: partner.name, address: partner.location, height: 140),
                      ),
                      const SizedBox(height: 12),
                      Text(partner.name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink)),
                      const SizedBox(height: 2),
                      Text(partner.location, style: const TextStyle(fontSize: 13, color: muted)),
                      const SizedBox(height: 12),
                      ProfileButton('Abrir mapa', onTap: () => showNavigationSheet(context, label: partner.name, address: partner.location)),
                    ]),
                  ),
                ],
                KeyedSubtree(key: _reviewsKey, child: const SizedBox.shrink()),
                _ReviewsSection(
                  partnerId: partner.id,
                  partnerName: partner.name,
                  partnerAvatarUrl: partner.imageUrl,
                  title: (count, action, onAction) => sectionTitle('Avaliações', action: action, onAction: onAction),
                ),
                if (pub)
                  const Padding(
                    padding: EdgeInsets.fromLTRB(20, 16, 20, 0),
                    child: Text(
                      '"Seguir" e "Pedir orçamento" pedem para entrar ou criar conta, e voltam a esta página.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                    ),
                  ),
                if (widget.ownerFooter.isNotEmpty)
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: widget.ownerFooter),
                  ),
              ],
            ),
          ),
          // Topo fixo: a foto encolhe de 300 até à faixa dos botões e fica.
          Positioned(
            left: 0,
            right: 0,
            top: 0,
            child: _PartnerHero(
              scroll: _scroll,
              partner: partner,
              photo: photos.isEmpty ? null : photos.first,
              topPad: topPad,
              metaLine: [
                partner.primaryCategoryLabel,
                if (partner.location.isNotEmpty) partner.location.split(', ').first,
              ].join(' · '),
              favorited: favorited,
              publicView: pub,
              ownerActions: widget.ownerView ? widget.ownerActions : null,
              onBack: () => Navigator.of(context).canPop() ? Navigator.of(context).pop() : context.go('/partners'),
              onShare: () => _share(partner),
              onFavorite: () {
                if (!favorited) {
                  for (final slug in partner.categorySlugs) {
                    trackInterest(slug, 'favorite', partnerId: partner.id);
                  }
                }
                final fav = ref.read(favoritePartnersControllerProvider.notifier);
                fav.toggle(partner.id);
                if (favorited) {
                  showUndoToast(context, 'Tirado dos favoritos', onUndo: () => fav.toggle(partner.id));
                }
              },
            ),
          ),
          // Sem os atalhos para as secções por baixo do topo reduzido
          // (pedido 2026-11-23).
          // Barra fixa: a largura das caixas de conteúdo e os cantos da navbar.
          if (!widget.ownerView)
            Positioned(
              left: AppTheme.screenMargin,
              right: AppTheme.screenMargin,
              bottom: (bottomPad > 20 ? bottomPad : 20),
              child: _BottomBar(box: barBox, label: barLabel, onTap: barAction),
            ),
        ],
      ),
    );
  }

  final _packagesKey = GlobalKey();
  final _portfolioKey = GlobalKey();
  final _mapKey = GlobalKey();
  final _reviewsKey = GlobalKey();

  void _scrollToPackages() {
    final ctx = _packagesKey.currentContext;
    if (ctx == null) return;
    Scrollable.ensureVisible(
      ctx,
      duration: const Duration(milliseconds: 450),
      curve: Curves.easeOutCubic,
      alignmentPolicy: ScrollPositionAlignmentPolicy.explicit,
      alignment: 0.12,
    );
  }

  /// Fotos do portfólio a toda a largura, dentro de um popup.
  void _openPhotos(List<String> photos, int start) {
    showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (ctx) => SizedBox(
        height: MediaQuery.sizeOf(ctx).height * 0.62,
        child: PageView.builder(
          controller: PageController(initialPage: start),
          itemCount: photos.length,
          itemBuilder: (context, i) => InteractiveViewer(
            child: SizedNetworkImage(photos[i], fit: BoxFit.contain,
                errorBuilder: (context, error, stackTrace) => const SizedBox.shrink()),
          ),
        ),
      ),
    );
  }

  /// O popup de reservar e pagar (pranchetas «FPay», 2026-11-27): evento
  /// (ou um novo), dia, hora, o que falta saber, extras, «Está certo?» com
  /// «Desliza para pagar» e o fim. Sair pergunta antes (DESIGN.md §6.1).
  Future<void> _openFlow({
    required ReserveKind kind,
    ServicePackage? package,
    List<ServiceExtra> extras = const [],
    bool quote = false,
    double? reference,
    String? initialMessage,
    required ReserveSender send,
  }) async {
    if (_requestingQuote) return;
    setState(() => _requestingQuote = true);
    List<Event> events;
    try {
      events = await ref.read(_partnerBookableEventsProvider(widget.partner.id).future);
    } catch (_) {
      events = const [];
    }
    if (!quote && package != null) {
      try {
        final pct = await supabase.rpc('partner_deposit_pct', params: {'p_partner_id': widget.partner.id});
        if (pct is num) _depositPct = pct.toDouble();
      } catch (_) {}
    }
    if (!mounted) return;
    setState(() => _requestingQuote = false);
    final outcome = await showIslandSheet<ReserveOutcome>(
      confirmExit: true,
      context: context,
      isScrollControlled: true,
      builder: (ctx) => ReserveFlowSheet(
        partnerId: widget.partner.id,
        partnerName: widget.partner.name,
        partnerImage: widget.partner.imageUrl,
        kind: kind,
        package: package,
        events: events,
        extras: extras,
        depositPct: _depositPct,
        quote: quote,
        reference: reference,
        initialMessage: initialMessage,
        responds: responseLabel(ref.read(partnerPublicStatsProvider(widget.partner.id)).value?.responseMinutes),
        onRequest: (r) {
          if (mounted) {
            setState(() {
              _selectedExtras.clear();
            });
          }
          return send(r);
        },
      ),
    );
    if (outcome != null && outcome.openChat && mounted) await _openChat(event: outcome.event);
  }

  /// «Reservar» com o pacote escolhido.
  Future<void> _openReserveSheet(ServicePackage pkg, List<ServiceExtra> pkgExtras) => _openFlow(
        kind: reserveKindFor(widget.partner.primaryCategorySlug),
        package: pkg,
        extras: pkgExtras,
        send: (r) => _sendPackage(pkg, r),
      );

  /// «Reservar mesa»: cada convidado escolhe o seu menu depois (190).
  Future<void> _openTableSheet() => _openFlow(kind: ReserveKind.mesa, send: _sendTable);

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
    final count = reviews.length;
    final avg = count == 0 ? 0.0 : reviews.fold<int>(0, (t, r) => t + r.rating) / count;
    // Mockup (2026-11-20): «Experiência geral» com a nota grande e quantas
    // avaliações há de cada número de estrelas, em barras verdes.
    return SmoothSize(child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      widget.title(
        count,
        count > 1 && !_all ? 'Ver todas ($count)' : null,
        () => setState(() => _all = true),
      ),
      if (reviews.isEmpty)
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 20),
          child: Text('Ainda sem avaliações.',
              style: TextStyle(fontSize: 14, color: Color(0xFF57534E))),
        )
      else ...[
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  const Text('Experiência geral', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text('Com base em $count ${count == 1 ? 'avaliação' : 'avaliações'}',
                      style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: AppTheme.ink, width: 1.5),
                ),
                child: Row(mainAxisSize: MainAxisSize.min, children: [
                  const Icon(Hi.star, size: 22, color: AppTheme.ink),
                  const SizedBox(width: 8),
                  Text(avg.toStringAsFixed(1).replaceAll('.', ','),
                      style: const TextStyle(fontSize: 40, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ]),
              ),
            ]),
            const SizedBox(height: 16),
            for (var star = 5; star >= 1; star--)
              Padding(
                padding: EdgeInsets.only(bottom: star > 1 ? 10 : 0),
                child: Builder(builder: (context) {
                  final n = reviews.where((r) => r.rating == star).length;
                  return Row(children: [
                    SizedBox(
                      width: 72,
                      child: Text('$star ${star == 1 ? 'estrela' : 'estrelas'}',
                          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                    ),
                    Expanded(
                      child: Container(
                        height: 10,
                        decoration: BoxDecoration(color: const Color(0xFFD9D9D9), borderRadius: BorderRadius.circular(5)),
                        alignment: Alignment.centerLeft,
                        child: FractionallySizedBox(
                          widthFactor: n / count,
                          child: Container(
                            decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(5)),
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 28,
                      child: Text('$n',
                          textAlign: TextAlign.right,
                          style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                  ]);
                }),
              ),
            // Os comentários no mesmo cartão, por baixo de uma linha
            // (mockup «Perfil do parceiro», 2026-11-20).
            for (final r in shown) ...[
              const SizedBox(height: 16),
              ReviewTile(review: r, partnerName: widget.partnerName, partnerAvatarUrl: widget.partnerAvatarUrl, embedded: true),
            ],
          ]),
        ),
      ],
    ]));
  }
}

/// Seguidores, amigos que seguem e o botão Seguir / A seguir.
class _PartnerFollow extends ConsumerStatefulWidget {
  final String partnerId;

  /// Página pública sem sessão: o botão pede para entrar.
  final VoidCallback? onNeedAccount;

  /// Segundo botão ao lado de "Seguir" (mockup: "Mensagem").
  final Widget? second;

  /// «Seguir» com contorno (o botão principal é o da barra de baixo).
  final bool outlined;
  const _PartnerFollow({required this.partnerId, this.onNeedAccount, this.second, this.outlined = false});

  @override
  ConsumerState<_PartnerFollow> createState() => _PartnerFollowState();
}

class _PartnerFollowState extends ConsumerState<_PartnerFollow> {
  bool _busy = false;
  // Otimista (2026-11-25): o botão muda logo; volta atrás se falhar.
  bool? _following;

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
            Expanded(child: ProfileButton('Seguir', dark: !widget.outlined, onTap: widget.onNeedAccount)),
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
              (_following ?? info.iFollow) ? 'A seguir' : 'Seguir',
              dark: !(_following ?? info.iFollow) && !widget.outlined,
              onTap: _busy
                  ? null
                  : () async {
                      final next = !(_following ?? info.iFollow);
                      setState(() {
                        _busy = true;
                        _following = next;
                      });
                      try {
                        await followPartner(widget.partnerId, next);
                        ref.invalidate(partnerFollowInfoProvider(widget.partnerId));
                      } catch (_) {
                        if (mounted) setState(() => _following = !next);
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
      loading: () => const SkeletonProfilePage(),
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

/// Cartão de um pacote no perfil (mockup «Perfis dos parceiros»,
/// 2026-11-15): branco com o círculo por escolher; verde quando escolhido.
class PackageChoiceCard extends StatelessWidget {
  final ServicePackage package;
  final bool selected;
  final VoidCallback? onTap;
  const PackageChoiceCard({required this.package, required this.selected, this.onTap});

  @override
  Widget build(BuildContext context) {
    final fg = selected ? Colors.white : AppTheme.ink;
    final mu = selected ? Colors.white.withValues(alpha: 0.85) : AppTheme.inkMuted;
    final price = '${package.isStartingPrice ? 'desde ' : ''}${euros(package.price)}${priceUnitSuffix(package.priceUnit)}';
    return Semantics(
      button: true,
      selected: selected,
      child: SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          padding: const EdgeInsets.all(16),
          decoration: selected
              ? BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(22))
              : softCard(radius: 22),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: selected ? Colors.white : null,
                border: selected ? null : Border.all(color: const Color(0xFFCFC8B8), width: 1.5),
              ),
              child: selected ? Icon(Hi.check, size: 16, color: AppTheme.accentOliveDark) : null,
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Expanded(child: Text(package.name, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: fg))),
                  const SizedBox(width: 10),
                  Text(price, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: fg)),
                ]),
                if (package.description.trim().isNotEmpty) ...[
                  const SizedBox(height: 4),
                  Text(package.description.trim(), style: TextStyle(fontSize: 13, height: 1.4, color: mu)),
                ],
                // «Inclui / Não inclui» do parceiro, no pacote escolhido (188).
                if (selected && package.includes.isNotEmpty) ...[
                  Container(height: 1, margin: const EdgeInsets.symmetric(vertical: 10), color: Colors.white.withValues(alpha: 0.3)),
                  const Text('INCLUI', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: Colors.white)),
                  const SizedBox(height: 4),
                  for (final l in package.includes)
                    Padding(
                      padding: const EdgeInsets.only(top: 3),
                      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        const Padding(padding: EdgeInsets.only(top: 7, right: 8), child: CircleAvatar(radius: 2.5, backgroundColor: Colors.white)),
                        Expanded(child: Text(l, style: const TextStyle(fontSize: 13, height: 1.4, color: Colors.white))),
                      ]),
                    ),
                  if (package.excludes != null) ...[
                    const SizedBox(height: 6),
                    Text('NÃO INCLUI: ${package.excludes}', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: mu)),
                  ],
                ],
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}

/// Linha de um extra: nome, o que é, preço e o botão + / ✓ (188).
class ExtraChoiceRow extends StatelessWidget {
  final ServiceExtra extra;
  final bool on;
  final bool last;
  final VoidCallback onTap;
  const ExtraChoiceRow({required this.extra, required this.on, required this.last, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: on,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            padding: const EdgeInsets.symmetric(vertical: 12),
            decoration: BoxDecoration(border: last ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9)))),
            child: Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(extra.name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (extra.details.isNotEmpty)
                    Text(extra.details.join(' · '), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              const SizedBox(width: 10),
              Text('+${euros(extra.price)}${priceUnitSuffix(extra.priceUnit)}',
                  style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(width: 10),
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: on ? AppTheme.accentOliveDark : Colors.white,
                  border: on ? null : Border.all(color: AppTheme.ink, width: 1.5),
                ),
                child: Icon(on ? Hi.check : Hi.plus, size: 18, color: on ? Colors.white : AppTheme.ink),
              ),
            ]),
          ),
        ),
      );
}

// ---------------------------------------------------------------------------
// Peças do perfil do parceiro (mockups «Parceiros e perfis», 2026-11-20).
// ---------------------------------------------------------------------------

/// Botão redondo 44 sobre a foto: preto com o ícone branco sólido 20, como
/// em todo o lado (DESIGN.md §2, pedido 2026-11-21).
class _GlassButton extends StatelessWidget {
  final Widget icon;
  final String label;
  final VoidCallback onTap;
  const _GlassButton({required this.icon, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) => Tooltip(
        message: label,
        excludeFromSemantics: true,
        child: SnappyTap(
          onTap: onTap,
          semanticLabel: label,
          child: Container(
            width: 44,
            height: 44,
            alignment: Alignment.center,
            // Aro branco 2: vê-se sobre fotos escuras e sobre o topo preto.
            decoration: BoxDecoration(
              color: AppTheme.ink,
              shape: BoxShape.circle,
              // Sem aro nos botões de navegação (pedido 2026-11-25).
            ),
            child: icon,
          ),
        ),
      );
}

/// Foto do topo que encolhe com o scroll (pedido do Rafael, 2026-11-20):
/// aberta tem 300, com «Em destaque», o logótipo e o nome a branco; ao
/// descer encolhe até à faixa dos botões e fica, com o nome e a meta ao
/// lado da seta. Voltar, partilhar e favorito estão sempre no mesmo sítio
/// e a seta é sempre «voltar». Reduzida, os cantos de baixo ficam iguais
/// aos de cima (40).
class _PartnerHero extends StatelessWidget {
  final ScrollController scroll;
  final Partner partner;
  final String? photo;
  final double topPad;
  final String metaLine;
  final bool favorited;
  final bool publicView;

  /// Modo dono: estes botões no lugar de voltar, partilhar e favorito.
  final List<Widget>? ownerActions;
  final VoidCallback onBack;
  final VoidCallback onShare;
  final VoidCallback onFavorite;

  const _PartnerHero({
    required this.scroll,
    required this.partner,
    required this.photo,
    required this.topPad,
    required this.metaLine,
    required this.favorited,
    required this.publicView,
    this.ownerActions,
    required this.onBack,
    required this.onShare,
    required this.onFavorite,
  });

  static const double _bottomRadius = 40;

  @override
  Widget build(BuildContext context) => AnimatedBuilder(
        animation: scroll,
        builder: (context, _) {
          final y = scroll.hasClients ? math.max(0.0, scroll.offset) : 0.0;
          final minH = topPad + 68;
          final range = math.max(1.0, _kHeroHeight - minH);
          final h = math.max(minH, _kHeroHeight - y);
          double unit(double v) => v.clamp(0.0, 1.0).toDouble();
          final mini = unit((y - range + 50) / 50);
          final radius = _bottomRadius * unit((y - range + 60) / 60);
          final collapsed = h <= minH + 0.5;
          // Reduzida (mockup «Topo reduzido», D, 2026-11-22): a barra com o
          // logótipo, o nome e o visto — sobre a foto escurecida (2026-11-23).
          final white = mini;
          final corners = BorderRadius.vertical(bottom: Radius.circular(radius));
          final fallback = AppTheme.ink;

          return SizedBox(
            height: h,
            child: Stack(children: [
              // A foto não apanha toques: arrastar nela faz scroll à página.
              Positioned.fill(
                child: IgnorePointer(
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: corners,
                      boxShadow: collapsed ? const [BoxShadow(color: Color(0x1F171713), blurRadius: 24, offset: Offset(0, 8))] : null,
                    ),
                    child: ClipRRect(
                      borderRadius: corners,
                      child: Stack(children: [
                        Positioned(
                          left: 0,
                          right: 0,
                          top: (h - _kHeroHeight) / 2,
                          height: _kHeroHeight,
                          child: photo == null
                              ? Container(
                                  // Sem foto: preto com as iniciais a branco (2026-11-23).
                                  color: AppTheme.ink,
                                  alignment: Alignment.center,
                                  child: Text(V2Avatar.initials(partner.name),
                                      style: const TextStyle(fontSize: 44, fontWeight: FontWeight.w700, letterSpacing: 2, color: Colors.white)),
                                )
                              : SizedNetworkImage(
                                  photo!,
                                  fit: BoxFit.cover,
                                  errorBuilder: (context, error, stackTrace) => Container(color: fallback),
                                ),
                        ),
                        // Reduzida: a foto fica por trás, escurecida, com o
                        // texto a branco (pedido 2026-11-23).
                        if (white > 0) Positioned.fill(child: ColoredBox(color: const Color(0xFF171713).withValues(alpha: 0.6 * white))),
                      ]),
                    ),
                  ),
                ),
              ),
              // Os botões ficam sempre no mesmo sítio.
              Positioned(
                left: AppTheme.screenMargin,
                right: AppTheme.screenMargin,
                top: topPad + 8,
                child: Row(children: [
                  if (ownerActions != null)
                    const SizedBox.shrink()
                  else if (publicView)
                    Container(
                      height: 44,
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      alignment: Alignment.center,
                      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                      child: const Text('À Nossa!', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    )
                  else
                    _GlassButton(
                      icon: const Icon(Hi.arrowLeft, size: 20, color: Colors.white),
                      label: 'Voltar',
                      onTap: onBack,
                    ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: IgnorePointer(
                      child: Opacity(
                        opacity: mini,
                        child: Transform.translate(
                          offset: Offset(0, (1 - mini) * 6),
                          child: Row(children: [
                            Container(
                              decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 1.5)),
                              child: V2Avatar(partner.name, size: 32, imageUrl: partner.imageUrl),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                                Row(children: [
                                  Flexible(
                                    child: Text(capFirst(partner.name),
                                        maxLines: 1,
                                        overflow: TextOverflow.ellipsis,
                                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: Colors.white)),
                                  ),
                                  const SizedBox(width: 4),
                                  // Sobre a foto escura, o visto vai numa pílula branca (§6).
                                  Container(
                                    padding: const EdgeInsets.fromLTRB(1, 1, 3, 1),
                                    decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                                    child: VerifiedBadge(partner),
                                  ),
                                ]),
                                Text(metaLine,
                                    maxLines: 1,
                                    overflow: TextOverflow.ellipsis,
                                    style: const TextStyle(fontSize: 13, color: Color(0xE6FFFFFF))),
                              ]),
                            ),
                          ]),
                        ),
                      ),
                    ),
                  ),
                  if (ownerActions != null) ...[
                    for (final a in ownerActions!) ...[const SizedBox(width: 8), a],
                  ] else if (publicView) ...[
                    if (kIsWeb)
                      SnappyTap(
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
                  ] else ...[
                    // Reduzida, ficam os mesmos botões do topo (pedido
                    // 2026-11-23): partilhar e favorito.
                    const SizedBox(width: 10),
                    _GlassButton(
                      icon: const Icon(Hi.arrowUpOnSquare, size: 20, color: Colors.white),
                      label: 'Partilhar',
                      onTap: onShare,
                    ),
                    const SizedBox(width: 10),
                    _GlassButton(
                      icon: Icon(favorited ? Hi.heart : Hi.heartOutline, size: 20, color: Colors.white),
                      label: favorited ? 'Remover dos favoritos' : 'Guardar nos favoritos',
                      onTap: onFavorite,
                    ),
                  ],
                ]),
              ),
            ]),
          );
        },
      );
}

/// Cartão do parceiro por baixo da foto (pedido do Rafael, 2026-11-22: o
/// design do mockup «Perfil do parceiro · conquistas»): as conquistas por
/// cima (pílulas `#F2F2F2`), o logótipo 76 e os três números em colunas,
/// o nome 20 com o visto e o preço à direita, categoria · zona 13,
/// experiência e «Responde em ~1 h», descrição com «Ler mais», etiquetas e
/// Seguir + Mensagem.
class _PartnerHeadCard extends ConsumerStatefulWidget {
  final Partner partner;
  final Widget priceBox;
  final String? ratingText;
  final int reviewCount;
  final String? responds;
  final String? figureText;
  final List<(String, String)> stats;
  final Widget? buttons;

  const _PartnerHeadCard({
    required this.partner,
    required this.priceBox,
    required this.ratingText,
    required this.reviewCount,
    required this.responds,
    required this.figureText,
    required this.stats,
    required this.buttons,
  });

  @override
  ConsumerState<_PartnerHeadCard> createState() => _PartnerHeadCardState();
}

class _PartnerHeadCardState extends ConsumerState<_PartnerHeadCard> {
  bool _more = false;

  Widget _stat((String, String) s) => Column(children: [
        Text(s.$1, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        Text(s.$2, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      ]);

  @override
  Widget build(BuildContext context) {
    final p = widget.partner;
    final travel = p.maxTravelDistanceKm;
    // O @ do parceiro, como nos perfis dos organizadores (2026-11-22).
    final handle = ref.watch(usernameOfProvider(p.id)).value;
    final meta = [
      if (handle != null && handle.isNotEmpty) '@$handle',
      p.primaryCategoryLabel,
      if (p.location.isNotEmpty) p.location,
      if (travel != null && travel > 0) 'até $travel km',
    ].join(' · ');
    final bio = p.description.trim();
    final long = bio.length > 200;
    final hasAchievements = ref.watch(partnerAchievementsProvider(p.id)).isNotEmpty;
    final tags = [
      for (final c in p.categoryLabels.skip(1)) InfoTag(c),
      if (widget.figureText != null) InfoTag(widget.figureText!),
    ];
    // Sem fundo branco e sem o preço ao lado do nome (já está na barra de
    // baixo) — mockup «Perfil do parceiro · a página toda», B (2026-11-22).
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        if (hasAchievements) ...[
          Align(
            alignment: Alignment.centerLeft,
            child: AchievementsCorner(partnerId: p.id, partnerName: capFirst(p.name), background: Colors.white),
          ),
          const SizedBox(height: 14),
        ],
        Row(children: [
          V2Avatar(p.name, size: 76, imageUrl: p.imageUrl),
          const SizedBox(width: 16),
          for (final s in widget.stats.take(3)) Expanded(child: _stat(s)),
        ]),
        const SizedBox(height: 14),
        Row(children: [
          Expanded(
            child: Row(children: [
              Flexible(
                child: Text(capFirst(p.name),
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              const SizedBox(width: 4),
              VerifiedBadge(p),
            ]),
          ),
        ]),
        if (meta.isNotEmpty) ...[
          const SizedBox(height: 2),
          Text(meta, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        ],
        // Anos de experiência e, ao lado, o mesmo destaque do rodapé do
        // cartão (amigos que seguem · eventos · tempo de resposta · até onde
        // se desloca) — pedido 2026-11-22.
        const SizedBox(height: 8),
        Row(children: [
          Expanded(
            child: p.yearsExperience != null
                ? Text('${p.yearsExperience} ${p.yearsExperience == 1 ? 'ano' : 'anos'} de experiência',
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))
                : const SizedBox.shrink(),
          ),
          const SizedBox(width: 8),
          Flexible(child: Align(alignment: Alignment.centerRight, child: PartnerHighlight(p))),
        ]),
        if (bio.isNotEmpty) ...[
          const SizedBox(height: 8),
          SmoothSize(child: Text(bio,
              maxLines: _more || !long ? null : 4,
              overflow: _more || !long ? null : TextOverflow.ellipsis,
              textAlign: TextAlign.justify,
              style: const TextStyle(fontSize: 14, height: 1.4, color: AppTheme.ink))),
          if (long && !_more)
            Align(
              alignment: Alignment.centerLeft,
              child: SnappyTap(
                onTap: () => setState(() => _more = true),
                child: const Padding(
                  padding: EdgeInsets.only(top: 4),
                  child: Text('Ler mais', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
              ),
            ),
        ],
        if (tags.isNotEmpty) ...[
          const SizedBox(height: 12),
          Wrap(spacing: 6, runSpacing: 6, children: tags),
        ],
        if (widget.buttons != null) ...[const SizedBox(height: 14), widget.buttons!],
      ]);
  }
}

/// Linha de pacote para escolher (mockup): círculo que fica verde com o
/// visto, nome 16, meta 13 e o preço à direita.
class _PackageRow extends StatelessWidget {
  final ServicePackage package;
  final bool first;
  final bool selected;
  final VoidCallback? onTap;

  /// Menus de restaurante: só para ver (sem círculo de escolher).
  final bool viewOnly;
  const _PackageRow({required this.package, required this.first, required this.selected, required this.onTap, this.viewOnly = false});

  @override
  Widget build(BuildContext context) {
    final p = package;
    final desc = p.description.trim().split('\n').first;
    final meta = desc.isNotEmpty ? desc : p.includes.take(2).join(' · ');
    final price = '${p.isStartingPrice ? 'desde ' : ''}${euros(p.price)}${priceUnitSuffix(p.priceUnit)}';
    return Semantics(
      button: onTap != null,
      selected: selected,
      child: SnappyTap(
        onTap: onTap,
        child: Container(
          constraints: const BoxConstraints(minHeight: 72),
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: BoxDecoration(border: first ? null : const Border(top: BorderSide(color: AppTheme.line))),
          child: Row(children: [
            if (!viewOnly) ...[
            AnimatedContainer(
              duration: const Duration(milliseconds: 160),
              width: 22,
              height: 22,
              decoration: BoxDecoration(
                color: selected ? AppTheme.accentOliveDark : Colors.white,
                shape: BoxShape.circle,
                border: selected ? null : Border.all(color: AppTheme.inkMuted, width: 1.5),
              ),
              child: selected ? const Icon(Hi.check, size: 13, color: Colors.white) : null,
            ),
            const SizedBox(width: 12),
            ],
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Text(p.name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                if (meta.isNotEmpty) ...[
                  const SizedBox(height: 2),
                  Text(meta, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ],
              ]),
            ),
            const SizedBox(width: 12),
            Text(price, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
        ),
      ),
    );
  }
}

/// «Quanto pode custar» de quem só trabalha por orçamento: o valor de
/// referência que o parceiro indica (40), para que é (migração 203) e a
/// explicação.
class _ReferenceCard extends StatelessWidget {
  final double price;
  final String? note;
  const _ReferenceCard({required this.price, this.note});

  @override
  // Sem caixa branca (B, 2026-11-22).
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Text('VALOR DE REFERÊNCIA',
              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
          const SizedBox(height: 6),
          Text('≈ ${euros(price)}', style: const TextStyle(fontSize: 40, fontWeight: FontWeight.w700, color: AppTheme.ink, height: 1.1)),
          if (note != null && note!.isNotEmpty) ...[
            const SizedBox(height: 4),
            Text(note!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ],
          const SizedBox(height: 12),
          const Divider(height: 1, thickness: 1, color: Color(0xFFD9D9D9)),
          const SizedBox(height: 12),
          const Text(
            'Indicado pelo parceiro. O valor final depende do teu evento: pedes orçamento e recebes uma proposta.',
            style: TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4),
          ),
        ]),
      );
}

/// Barra fixa em baixo (mockup): branca, cantos 35, com a caixa de preço
/// e o botão preto 52.
class _BottomBar extends StatelessWidget {
  final (String, String) box;
  final String label;
  final VoidCallback? onTap;
  const _BottomBar({required this.box, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) => Container(
        height: 76,
        padding: const EdgeInsets.fromLTRB(16, 0, 12, 0),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(35),
          boxShadow: AppTheme.navBarShadow,
        ),
        child: Row(children: [
          Container(
            constraints: const BoxConstraints(maxWidth: 150),
            // Preço sem caixa nem linha (DESIGN.md §6, Preço).
            padding: const EdgeInsets.symmetric(horizontal: 8),
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(box.$1,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 9, height: 1.2, letterSpacing: 1, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              Text(box.$2,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 16, height: 1.1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: SizedBox(
              height: 52,
              child: PressScale(child: FilledButton(
                onPressed: onTap,
                style: FilledButton.styleFrom(
                  backgroundColor: AppTheme.ink,
                  foregroundColor: Colors.white,
                  shape: const StadiumBorder(),
                  textStyle: const TextStyle(
                      fontFamily: AppTheme.fontFamily,
                      fontFamilyFallback: AppTheme.fontFamilyFallback,
                      fontSize: 15,
                      fontWeight: FontWeight.w700),
                ),
                child: Text(label, maxLines: 1, overflow: TextOverflow.ellipsis),
              )),
            ),
          ),
        ]),
      );
}
