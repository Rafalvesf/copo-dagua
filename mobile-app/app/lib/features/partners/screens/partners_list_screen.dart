import 'package:copo_dagua_app/shared/hero_icons.dart';

import 'package:copo_dagua_app/shared/widgets/founder_badge.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:flutter/rendering.dart' show ScrollDirection;
import 'package:copo_dagua_app/core/partners/promotions.dart';
import '../../../shared/widgets/permissions_step.dart' show ensurePermission, AppPermission;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../core/partners/partner_pro.dart' show proPartnerIdsProvider;
import '../../gifts/screens/gift_list_screens.dart' show GiftShopView;
import '../../partner_pro/partner_pro_screen.dart' show ProBadge;

import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/partners/favorite_partners_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../partner_style.dart';
import '../widgets/partner_cards.dart';
import 'partner_detail_screen.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/money.dart';
import '../../../core/partner_profile/partner_location.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/address_picker.dart' show showAddressPicker;

class PartnersListScreen extends ConsumerStatefulWidget {
  final String? categorySlug;
  final bool selectionMode;

  const PartnersListScreen({
    super.key,
    this.categorySlug,
    this.selectionMode = false,
  });

  @override
  ConsumerState<PartnersListScreen> createState() => _PartnersListScreenState();
}

class _PartnersListScreenState extends ConsumerState<PartnersListScreen> {
  late String? _filter = widget.categorySlug;

  /// Separador por cima da navbar: 0 = Empresas, 1 = Lojas (2026-11-07).
  int _tab = 0;

  /// A navbar (com Empresas | Lojas) esconde-se ao descer a lista e volta
  /// ao subir (pedido 2026-11-07).
  bool _navHidden = false;

  bool _onScroll(UserScrollNotification n) {
    if (n.metrics.axis != Axis.vertical) return false;
    final hide = n.direction == ScrollDirection.reverse && n.metrics.pixels > 0;
    final show = n.direction == ScrollDirection.forward;
    if (hide && !_navHidden) setState(() => _navHidden = true);
    if (show && _navHidden) setState(() => _navHidden = false);
    return false;
  }
  final _search = TextEditingController();

  /// Localização escolhida pelo cliente para filtrar parceiros — `null`
  /// = ainda não escolheu nada, usa a localização do casamento como
  /// sugestão inicial; `''` = escolheu explicitamente "Todas as
  /// localizações" (sem filtro); qualquer outro valor filtra a lista.
  String? _selectedLocation;

  /// Filtros avançados (folha do botão de filtros) — tudo do lado do
  /// cliente, sobre os parceiros já carregados.
  double? _maxPrice;
  double? _minRating;
  _PartnerSort _sort = _PartnerSort.relevance;

  /// «Ver todos»: só a lista, sem os carrosséis.
  bool _showAll = false;

  bool get _hasAdvancedFilters =>
      _maxPrice != null || _minRating != null || _sort != _PartnerSort.relevance;

  @override
  void initState() {
    super.initState();
    _search.addListener(() {
      setState(() {});
      _trackSearch();
    });
    // Veio de uma tarefa ("Pedir orçamento a fotógrafos"): conta como interesse.
    if (widget.categorySlug != null) trackInterest(widget.categorySlug, 'task');
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  /// Pesquisa que bate com uma categoria ("dj", "flores"…) conta como interesse.
  void _trackSearch() {
    final q = _search.text.trim().toLowerCase();
    if (q.length < 3) return;
    final options = ref.read(partnerCategoryOptionsProvider).value ?? const <PartnerCategoryOption>[];
    for (final o in options) {
      if (o.label.toLowerCase().contains(q) || o.slug.contains(q)) {
        trackInterest(o.slug, 'search');
        return;
      }
    }
  }

  void _showFavoritesSheet() {
    showIslandSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => const _FavoritesSheet(),
    );
  }

  Future<void> _showFilters() async {
    final result = await showIslandSheet<_AdvancedFilters>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
      ),
      builder: (_) => _FiltersSheet(
        initial: _AdvancedFilters(_maxPrice, _minRating, _sort),
      ),
    );
    if (result == null) return;
    setState(() {
      _maxPrice = result.maxPrice;
      _minRating = result.minRating;
      _sort = result.sort;
    });
  }

  List<Partner> _applyAdvanced(List<Partner> list) {
    double? price(Partner p) => p.startingPrice ?? p.averageQuotePrice;
    var out = list.where((p) {
      if (_maxPrice != null) {
        final v = price(p);
        if (v == null || v > _maxPrice!) return false;
      }
      if (_minRating != null && (p.rating ?? 0) < _minRating!) return false;
      return true;
    }).toList();
    switch (_sort) {
      case _PartnerSort.relevance:
        // Pro sobe na lista (migração 161); a ordem entre eles mantém-se.
        final pros = ref.read(proPartnerIdsProvider).value ?? const <String>{};
        if (pros.isNotEmpty) {
          out = [...out.where((p) => pros.contains(p.id)), ...out.where((p) => !pros.contains(p.id))];
        }
      case _PartnerSort.priceAsc:
        out.sort((a, b) => (price(a) ?? double.infinity).compareTo(price(b) ?? double.infinity));
      case _PartnerSort.rating:
        out.sort((a, b) => (b.rating ?? 0).compareTo(a.rating ?? 0));
    }
    return out;
  }

  /// Localizações disponíveis para o cliente escolher — derivadas dos
  /// parceiros já carregados (`service_areas`, via `Partner.location`)
  /// em vez de uma lista fixa, para refletir sempre onde os parceiros
  /// reais estão, e nunca oferecer uma área sem nenhum parceiro.
  /// Pedido do utilizador (2026-10-17): "aplica a localização atual e
  /// outras opções quando vais escolher o parceiro" — localização do
  /// telemóvel, local do evento, pesquisa de localidade ou as zonas onde
  /// já há parceiros.
  Future<void> _showLocationPicker(List<String> options) async {
    final weddingLocation = ref.read(weddingControllerProvider).wedding?.location;
    final result = await showIslandSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xxl))),
      builder: (context) => LocationPickerSheet(options: options, eventLocation: weddingLocation),
    );
    if (result != null && mounted) setState(() => _selectedLocation = result);
  }

  @override
  Widget build(BuildContext context) {
    // Pro sobe na lista (migração 161): reconstrói quando a lista chega.
    ref.watch(proPartnerIdsProvider);
    final categoryOptionsAsync = ref.watch(partnerCategoryOptionsProvider);
    final partnersAsync = ref.watch(
      partnersProvider(widget.selectionMode ? widget.categorySlug : _filter),
    );
    final selectedLabel = categoryOptionsAsync.maybeWhen(
      data: (options) => options.where((o) => o.slug == _filter).firstOrNull?.label,
      orElse: () => null,
    );
    final weddingLocation = ref.watch(weddingControllerProvider).wedding?.location;
    // Localização efetiva: o que o cliente escolheu explicitamente
    // (incluindo "Todas as localizações", `''`), ou a localização do
    // casamento como sugestão inicial antes de escolher alguma.
    final effectiveLocation = _selectedLocation ?? weddingLocation ?? '';
    final locationOptions = partnersAsync
        .maybeWhen(
          data: (list) => list
              .where((p) => p.location != 'Âmbito nacional')
              .expand((p) => p.location.split(', '))
              .where((l) => l.isNotEmpty),
          orElse: () => const Iterable<String>.empty(),
        )
        .toSet()
        .toList()
      ..sort();

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          NotificationListener<UserScrollNotification>(
            onNotification: _onScroll,
            child: SafeArea(top: false, 
            bottom: false,
            child: ScrollingHeader(
              header: [SizedBox(height: MediaQuery.paddingOf(context).top),
                // Mockup «Parceiros» (2026-11-20): localidade e favoritos em
                // cima, título 28 e subtítulo, Empresas/Lojas em pílulas,
                // pesquisa + filtros e as categorias em quadrados.
                if (widget.selectionMode)
                  PageHeader(
                    title: null,
                    titleFontSize: 28,
                    topPadding: 8,
                    showBack: true,
                    trailing: SnappyTap(
                    onTap: () => _showLocationPicker(locationOptions),
                    child: Container(
                      height: 44,
                      constraints: const BoxConstraints(maxWidth: 220),
                      padding: const EdgeInsets.fromLTRB(12, 0, 14, 0),
                      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                      child: Row(mainAxisSize: MainAxisSize.min, children: [
                        const Icon(Hi.mapPin, size: 18, color: AppTheme.inkMuted),
                        const SizedBox(width: 8),
                        Flexible(
                          child: Text(
                            effectiveLocation.isEmpty ? 'Todas as zonas' : effectiveLocation,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(color: AppTheme.ink, fontWeight: FontWeight.w700, fontSize: 14),
                          ),
                        ),
                        const SizedBox(width: 6),
                        const Icon(Hi.chevronDown, size: 16, color: AppTheme.ink),
                      ]),
                    ),
                  ),
                  )
                else ...[
                  Padding(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
                    child: Row(children: [
                      Flexible(child: SnappyTap(
                    onTap: () => _showLocationPicker(locationOptions),
                    child: Container(
                      height: 44,
                      constraints: const BoxConstraints(maxWidth: 220),
                      padding: const EdgeInsets.fromLTRB(12, 0, 14, 0),
                      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                      child: Row(mainAxisSize: MainAxisSize.min, children: [
                        const Icon(Hi.mapPin, size: 18, color: AppTheme.inkMuted),
                        const SizedBox(width: 8),
                        Flexible(
                          child: Text(
                            effectiveLocation.isEmpty ? 'Todas as zonas' : effectiveLocation,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(color: AppTheme.ink, fontWeight: FontWeight.w700, fontSize: 14),
                          ),
                        ),
                        const SizedBox(width: 6),
                        const Icon(Hi.chevronDown, size: 16, color: AppTheme.ink),
                      ]),
                    ),
                  )),
                      const Spacer(),
                      V2RoundButton(icon: Hi.heartOutline, tooltip: 'Favoritos', onTap: _showFavoritesSheet),
                    ]),
                  ),
                  const Padding(
                    padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
                    child: Text('Parceiros', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                  const Padding(
                    padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 4, AppTheme.screenMargin, 0),
                    child: Text('Quem faz o teu evento acontecer',
                        style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ),
                  // Empresas (contratar, reservar) vs Lojas (presentes e
                  // produtos) — filtros em pílula 38 (DESIGN.md §6).
                  Padding(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
                    child: Row(children: [
                      _ModePill(label: 'Empresas', on: _tab == 0, onTap: () => setState(() => _tab = 0)),
                      const SizedBox(width: 8),
                      _ModePill(label: 'Lojas', on: _tab == 1, onTap: () => setState(() => _tab = 1)),
                    ]),
                  ),
                ],
                if (!(_tab == 1 && !widget.selectionMode)) ...[
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
                  child: Row(
                    children: [
                      Expanded(
                        child: SizedBox(
                          height: 48,
                          child: TextField(
                            controller: _search,
                            style: const TextStyle(fontSize: 15, color: AppTheme.ink),
                            decoration: InputDecoration(
                              hintText: 'Espaços, fotografia, flores…',
                              hintStyle: const TextStyle(fontSize: 15, color: AppTheme.inkMuted),
                              prefixIcon: const Icon(Hi.magnifyingGlass, size: 18, color: AppTheme.inkMuted),
                              filled: true,
                              fillColor: Colors.white,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(24),
                                borderSide: BorderSide.none,
                              ),
                              enabledBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(24),
                                borderSide: BorderSide.none,
                              ),
                              focusedBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(24),
                                borderSide: const BorderSide(color: AppTheme.ink, width: 1.5),
                              ),
                              contentPadding: const EdgeInsets.symmetric(vertical: 14),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Tooltip(
                        message: 'Filtros',
                        child: SnappyTap(
                          onTap: _showFilters,
                          child: Container(
                            width: 48,
                            height: 48,
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: _hasAdvancedFilters ? AppTheme.accentOliveDark : Colors.white,
                              shape: BoxShape.circle,
                            ),
                            child: Icon(Hi.adjustmentsHorizontal, size: 20,
                                color: _hasAdvancedFilters ? Colors.white : AppTheme.ink),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                // Categorias em quadrados 82 (mockup «Parceiros», 2026-11-20).
                if (!widget.selectionMode)
                  categoryOptionsAsync.maybeWhen(
                    data: (options) => SizedBox(
                      height: 82 + 20,
                      child: ListView.separated(
                        scrollDirection: Axis.horizontal,
                        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 0),
                        itemCount: options.length + 1,
                        separatorBuilder: (context, i) => const SizedBox(width: 10),
                        itemBuilder: (context, i) {
                          final o = i == 0 ? null : options[i - 1];
                          return CategoryTile(
                            label: o?.label ?? 'Todos',
                            icon: o == null ? Hi.sparkles : iconForCategorySlug(o.slug),
                            tint: o == null ? const Color(0xFFDDE5D3) : colorForCategorySlug(o.slug),
                            selected: o?.slug == _filter,
                            onTap: () {
                              setState(() => _filter = o?.slug);
                              trackInterest(o?.slug, 'filter');
                            },
                          );
                        },
                      ),
                    ),
                    orElse: () => const SizedBox(height: 102),
                  ),
                ],
              ],
              body: _tab == 1 && !widget.selectionMode
                  ? const GiftShopView(bottomPadding: 190, showListLink: true)
                  : partnersAsync.when(
                    loading: () =>
                        const Center(child: CircularProgressIndicator()),
                    error: (err, st) => AsyncErrorView(message: 'Não foi possível carregar parceiros.', onRetry: () => ref.invalidate(
                      partnersProvider(widget.selectionMode ? widget.categorySlug : _filter),
                    )),
                    data: (allPartners) {
                      // Filtra pela localização escolhida pelo cliente
                      // — "Âmbito nacional" nunca é excluído (esse
                      // parceiro serve qualquer área).
                      final byLocation = effectiveLocation.isEmpty
                          ? allPartners
                          : allPartners
                                .where(
                                  (s) =>
                                      s.location == 'Âmbito nacional' ||
                                      _near(s.location, effectiveLocation),
                                )
                                .toList();
                      final query = _search.text.trim().toLowerCase();
                      // Sem ninguém na zona escolhida: mostra todos, com
                      // um aviso, em vez de uma página vazia.
                      final noneNear = effectiveLocation.isNotEmpty && byLocation.isEmpty && allPartners.isNotEmpty;
                      final pool = noneNear ? allPartners : byLocation;
                      final partners = _applyAdvanced(query.isEmpty
                          ? pool
                          : pool
                                .where(
                                  (s) => s.name.toLowerCase().contains(query),
                                )
                                .toList());
                      // Destaques para esta pessoa (migração 155): pagos e
                      // grátis, das categorias que anda a procurar, a rodar.
                      // Sem a migração: o carrossel antigo.
                      final picks = widget.selectionMode
                          ? null
                          : ref.watch(featuredForMeProvider((location: effectiveLocation, category: _filter, limit: 6))).value;
                      final byId = {for (final p in allPartners) p.id: p};
                      final picked = picks == null
                          ? const <Partner>[]
                          : [for (final k in picks) if (byId[k.partnerId] != null) byId[k.partnerId]!];
                      final featuredList = picked.isNotEmpty ? picked : featured(partners);
                      final paidIds = {for (final k in picks ?? const <FeaturedPick>[]) if (k.paid) k.partnerId};
                      if (partners.isEmpty) {
                        return Center(
                          child: Text(
                            _hasAdvancedFilters
                                ? 'Sem parceiros com estes filtros.'
                                : query.isEmpty
                                ? 'Sem parceiros nesta localização.'
                                : 'Sem parceiros para "${_search.text.trim()}".',
                          ),
                        );
                      }
                      // Mockup «Parceiros» (2026-11-20): carrosséis «Em
                      // destaque» e «Mais bem avaliados», a lista «Novos na
                      // À Nossa!» e, por baixo, todos (o destino de «Ver
                      // todos», da pesquisa e dos filtros).
                      final sections = !widget.selectionMode && !_showAll && query.isEmpty && !_hasAdvancedFilters;
                      final rated = partners.where((p) => (p.rating ?? 0) > 0).toList()
                        ..sort((a, b) => (b.rating ?? 0).compareTo(a.rating ?? 0));
                      final newest = partners.where((p) => p.createdAt != null).toList()
                        ..sort((a, b) => b.createdAt!.compareTo(a.createdAt!));
                      void open(Partner p) {
                        // Destaque pago: a reserva que vier daqui paga +6%.
                        if (paidIds.contains(p.id)) trackPromotionClick(p.id);
                        _openDetails(context, p);
                      }

                      void seeAll() => setState(() => _showAll = true);
                      Widget badges(Partner p) => Row(mainAxisSize: MainAxisSize.min, children: [
                            ProBadge(p.id),
                            const SizedBox(width: 6),
                            FounderBadge(p.id),
                          ]);
                      return EdgeFade(
                        topFadeHeight: 32,
                        bottomFadeHeight: 140,
                        child: ListView(
                          padding: EdgeInsets.fromLTRB(0, 0, 0, widget.selectionMode ? 40 : 200),
                          children: [
                            if (noneNear && !widget.selectionMode)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 0),
                                child: InfoNote(
                                  'Ainda não há parceiros em $effectiveLocation. Mostramos todos os parceiros.',
                                  icon: Hi.informationCircle,
                                ),
                              ),
                            if (sections && featuredList.isNotEmpty) ...[
                              SectionHeading(
                                effectiveLocation.isEmpty || noneNear ? 'Em destaque' : 'Em destaque perto de ti',
                                action: 'Ver todos (${partners.length})',
                                onAction: seeAll,
                              ),
                              PartnerCarousel(
                                partners: featuredList,
                                highlighted: {for (final p in featuredList) p.id},
                                onTap: open,
                              ),
                            ],
                            if (sections && rated.length > 1) ...[
                              SectionHeading(
                                'Mais bem avaliados',
                                action: 'Ver todos (${partners.length})',
                                onAction: seeAll,
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 12),
                              ),
                              PartnerCarousel(partners: rated.take(6).toList(), onTap: open),
                            ],
                            if (sections && newest.isNotEmpty) ...[
                              SectionHeading(
                                'Novos na À Nossa!',
                                action: 'Ver todos (${partners.length})',
                                onAction: seeAll,
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 12),
                              ),
                              RowGroup(children: [
                                for (var i = 0; i < newest.length && i < 3; i++)
                                  PartnerListRow(partner: newest[i], first: i == 0, badges: badges(newest[i]), onTap: () => open(newest[i])),
                              ]),
                            ],
                            SectionHeading(
                              sections
                                  ? 'Todos os parceiros'
                                  : '${partners.length} ${partners.length == 1 ? 'parceiro' : 'parceiros'}',
                              action: _showAll ? 'Ver menos' : (_hasAdvancedFilters ? 'Filtros ativos' : 'Filtrar'),
                              onAction: _showAll ? () => setState(() => _showAll = false) : _showFilters,
                            ),
                            if (widget.selectionMode && selectedLabel != null)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 12),
                                child: Text('Escolhe um parceiro de ${selectedLabel.toLowerCase()} para esta tarefa.',
                                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                              ),
                            // Uma linha por filho da lista (e não um só
                            // grupo): assim só se constroem as linhas que
                            // estão no ecrã, mesmo com centenas de parceiros.
                            for (var i = 0; i < partners.length; i++)
                              RowGroupSlice(
                                first: i == 0,
                                last: i == partners.length - 1,
                                child: PartnerListRow(
                                  partner: partners[i],
                                  first: i == 0,
                                  badges: badges(partners[i]),
                                  onTap: () => open(partners[i]),
                                ),
                              ),
                          ],
                        ),
                      );
                    },
                  ),
            ),
          ),
          ),
          if (!widget.selectionMode)
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: IgnorePointer(
                ignoring: _navHidden,
                child: AnimatedSlide(
                  offset: _navHidden ? const Offset(0, 1.3) : Offset.zero,
                  duration: const Duration(milliseconds: 220),
                  curve: Curves.easeOutCubic,
                  // Empresas / Lojas só no topo da página (2026-11-11).
                  child: const FloatingBottomNav(current: AppTab.partners),
                ),
              ),
            ),
        ],
      ),
    );
  }

  Future<void> _openDetails(BuildContext context, Partner partner) async {
    final chosen = await PartnerDetailScreen.show(
      context,
      partner,
      selectionMode: widget.selectionMode,
    );
    if (chosen != null && context.mounted) {
      Navigator.of(context).pop(chosen);
    }
  }
}

/// "Perto de ti": a zona do parceiro bate com a localização escolhida
/// nos dois sentidos — "Grande Lisboa" encontra quem serve "Lisboa" e
/// vice-versa (antes só um sentido, e o evento em "Grande Lisboa" não
/// via os parceiros de Lisboa).
bool _near(String partnerAreas, String wanted) {
  final w = wanted.toLowerCase().trim();
  if (w.isEmpty) return true;
  for (final area in partnerAreas.toLowerCase().split(', ')) {
    final a = area.trim();
    if (a.isEmpty) continue;
    if (a.contains(w) || w.contains(a)) return true;
  }
  return false;
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}

/// Carrossel de categorias estilo "escolhas populares" (ícone numa
/// bolha + rótulo por baixo, como em apps de entregas). Ao contrário do
/// [CoverFlowPicker] partilhado (que centra a opção), aqui a opção
/// selecionada fica maior e encostada à esquerda — mostra sempre 3 a 4
/// categorias de cada vez, com espaço visível entre elas.

/// Os mais bem avaliados (com avaliações reais), para o carrossel.
/// Carrossel "Em destaque" (2026-10-20): primeiro os escolhidos à mão no
/// admin, depois o automático (melhor avaliação), até 6.
List<Partner> featured(List<Partner> all) {
  final manual = all.where((p) => p.featured).toList();
  final rest = all.where((p) => !p.featured).toList();
  final rated = rest.where((p) => (p.rating ?? 0) > 0).toList()
    ..sort((a, b) => (b.rating ?? 0).compareTo(a.rating ?? 0));
  final auto = rated.length >= 3 ? rated : [...rated, ...rest.where((p) => (p.rating ?? 0) <= 0)];
  return [...manual, ...auto].take(6).toList();
}

/// Sheet de favoritos — pedido explícito do utilizador: "mesmo estilo
/// de janela que a página de notificações" (`_NotificationsSheet` em
/// `home_feed_screen.dart`). Mesma arquitetura: `DraggableScrollableSheet`
/// branco com cantos arredondados a subir do fundo, sobre `favorite_partners`
/// real (não uma lista inventada).
class _FavoritesSheet extends ConsumerWidget {
  const _FavoritesSheet();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final favoriteIds = ref.watch(favoritePartnersControllerProvider.select((s) => s.partnerIds));
    final partnersAsync = ref.watch(partnersProvider(null));

    return DraggableScrollableSheet(
      initialChildSize: 0.75,
      minChildSize: 0.4,
      maxChildSize: 0.92,
      expand: false,
      builder: (context, scrollController) {
        return Container(
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
          ),
          child: SafeArea(
            child: Column(
              children: [
                const SizedBox(height: 10),
                Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(
                    color: AppTheme.borderMuted,
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
                  child: Row(
                    children: [
                      Text('Favoritos', style: Theme.of(context).textTheme.titleLarge),
                      const Spacer(),
                      Icon(Hi.heart, size: 18, color: AppTheme.accentOliveDark),
                    ],
                  ),
                ),
                const SizedBox(height: 14),
                Expanded(
                  child: partnersAsync.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (err, st) => AsyncErrorView(message: 'Não foi possível carregar os favoritos.', onRetry: () => ref.invalidate(partnersProvider(null))),
                    data: (allPartners) {
                      final favorites = allPartners.where((p) => favoriteIds.contains(p.id)).toList();
                      if (favorites.isEmpty) {
                        return Center(
                          child: Padding(
                            padding: const EdgeInsets.all(24),
                            child: Text(
                              'Toca no coração de um parceiro para o guardar aqui.',
                              textAlign: TextAlign.center,
                              style: TextStyle(color: AppTheme.inkMuted),
                            ),
                          ),
                        );
                      }
                      return ListView(
                        controller: scrollController,
                        padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
                            child: Column(children: [
                              for (var i = 0; i < favorites.length; i++)
                                PartnerListRow(
                                  partner: favorites[i],
                                  first: i == 0,
                                  trailing: FavoriteHeart(favorites[i]),
                                  onTap: () async {
                                    await PartnerDetailScreen.show(context, favorites[i]);
                                  },
                                ),
                            ]),
                          ),
                        ],
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}


enum _PartnerSort { relevance, priceAsc, rating }

class _AdvancedFilters {
  final double? maxPrice;
  final double? minRating;
  final _PartnerSort sort;

  const _AdvancedFilters(this.maxPrice, this.minRating, this.sort);
}

/// Filtros avançados de parceiros — preço máximo, avaliação mínima e
/// ordenação. Antes o botão mostrava "Filtros avançados em breve".
class _FiltersSheet extends StatefulWidget {
  final _AdvancedFilters initial;

  const _FiltersSheet({required this.initial});

  @override
  State<_FiltersSheet> createState() => _FiltersSheetState();
}

class _FiltersSheetState extends State<_FiltersSheet> {
  late double? _maxPrice = widget.initial.maxPrice;
  late double? _minRating = widget.initial.minRating;
  late _PartnerSort _sort = widget.initial.sort;

  static const _prices = <double?>[null, 1000, 2500, 5000, 10000];
  static const _ratings = <double?>[null, 4, 4.5];

  Widget _chips<T>(List<T> values, T selected, String Function(T) label, ValueChanged<T> onTap) {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: [
        for (final v in values)
          ChoiceChip(
            label: Text(label(v)),
            selected: v == selected,
            showCheckmark: false,
            // Compactos (2026-11): a folha cortava os botões no fim.
            visualDensity: VisualDensity.compact,
            materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
            selectedColor: AppTheme.accentOliveDark,
            labelStyle: TextStyle(
              fontSize: AppFontSize.sm + 2,
              color: v == selected ? Colors.white : AppTheme.ink,
              fontWeight: FontWeight.w600,
            ),
            onSelected: (_) => setState(() => onTap(v)),
          ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final title = Theme.of(context).textTheme.titleSmall?.copyWith(fontWeight: FontWeight.w700);
    // Opções roláveis e botões sempre visíveis no fundo (antes ficavam
    // cortados quando a folha não cabia).
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(22, 12, 22, 0),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Center(
              child: Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
              ),
            ),
            const SizedBox(height: 14),
            Text('Filtros', style: Theme.of(context).textTheme.titleLarge),
          ]),
        ),
        Flexible(
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(22, 14, 22, 8),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text('Preço até', style: title),
                const SizedBox(height: 8),
                _chips<double?>(_prices, _maxPrice, (v) => v == null ? 'Qualquer' : euros(v), (v) => _maxPrice = v),
                const SizedBox(height: 16),
                Text('Avaliação', style: title),
                const SizedBox(height: 8),
                _chips<double?>(
                  _ratings,
                  _minRating,
                  (v) => v == null ? 'Qualquer' : '${v.toString().replaceAll('.', ',')}+',
                  (v) => _minRating = v,
                ),
                const SizedBox(height: 16),
                Text('Ordenar por', style: title),
                const SizedBox(height: 8),
                _chips<_PartnerSort>(
                  _PartnerSort.values,
                  _sort,
                  (v) => switch (v) {
                    _PartnerSort.relevance => 'Relevância',
                    _PartnerSort.priceAsc => 'Preço mais baixo',
                    _PartnerSort.rating => 'Melhor avaliação',
                  },
                  (v) => _sort = v,
                ),
              ],
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(22, 8, 22, 18),
          child: Row(
            children: [
              Expanded(
                child: OutlinedButton(
                  onPressed: () => Navigator.of(context).pop(
                    const _AdvancedFilters(null, null, _PartnerSort.relevance),
                  ),
                  child: const Text('Limpar'),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: ElevatedButton(
                  onPressed: () => Navigator.of(context).pop(
                    _AdvancedFilters(_maxPrice, _minRating, _sort),
                  ),
                  child: const Text('Aplicar'),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}


class LocationPickerSheet extends StatefulWidget {
  final List<String> options;
  final String? eventLocation;

  const LocationPickerSheet({super.key, required this.options, this.eventLocation});

  @override
  State<LocationPickerSheet> createState() => _LocationPickerSheetState();
}

class _LocationPickerSheetState extends State<LocationPickerSheet> {
  bool _locating = false;

  Future<void> _useCurrent() async {
    // Pede a localização outra vez, se for preciso (2026-10-25).
    if (!await ensurePermission(context, AppPermission.location)) return;
    if (!mounted) return;
    setState(() => _locating = true);
    try {
      final pos = await currentPosition();
      final loc = await reverseGeocode(pos.latitude, pos.longitude);
      final place = loc.city.isNotEmpty ? loc.city : loc.region;
      if (!mounted) return;
      if (place.isEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível perceber a localidade.')));
      } else {
        Navigator.of(context).pop(place);
      }
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(e is LocationException ? e.message : 'Não foi possível obter a localização.')),
      );
    } finally {
      if (mounted) setState(() => _locating = false);
    }
  }

  Widget _tile(IconData icon, String title, {String? subtitle, required VoidCallback onTap, Widget? leading}) {
    return ListTile(
      contentPadding: EdgeInsets.zero,
      leading: leading ?? Icon(icon, color: AppTheme.accentOliveDark),
      title: Text(title, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
      subtitle: subtitle == null ? null : Text(subtitle, style: const TextStyle(color: AppTheme.inkMuted)),
      onTap: onTap,
    );
  }

  @override
  Widget build(BuildContext context) {
    final event = widget.eventLocation?.trim() ?? '';
    return SafeArea(
      child: Padding(
        padding: EdgeInsets.fromLTRB(24, 16, 24, 16 + MediaQuery.of(context).viewInsets.bottom),
        child: ConstrainedBox(
          constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.8),
          child: ListView(
            shrinkWrap: true,
            children: [
              Center(
                child: Container(width: 40, height: 4, decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2))),
              ),
              const SizedBox(height: 14),
              const Text('Onde procurar parceiros?', style: TextStyle(fontSize: AppFontSize.h3, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 8),
              _tile(
                Hi.viewfinderCircle,
                'Usar a minha localização atual',
                subtitle: 'Parceiros perto de onde estás',
                leading: _locating
                    ? const SizedBox(width: 24, height: 24, child: CircularProgressIndicator(strokeWidth: 2.5))
                    : null,
                onTap: _locating ? () {} : _useCurrent,
              ),
              if (event.isNotEmpty)
                _tile(Hi.sparkles, 'Local do evento', subtitle: event, onTap: () => Navigator.of(context).pop(event)),
              _tile(Hi.globeEuropeAfrica, 'Todas as localizações', onTap: () => Navigator.of(context).pop('')),
              const SizedBox(height: 8),
              // Procurar com o Google (seletor de moradas, 2026-11-20).
              _tile(Hi.magnifyingGlass, 'Procurar uma localidade', onTap: () async {
                final picked = await showAddressPicker(context, title: 'Onde procurar parceiros?', citiesOnly: true);
                if (picked == null || !context.mounted) return;
                final place = picked.city.isNotEmpty ? picked.city : picked.name;
                Navigator.of(context).pop(place);
              }),
              if (widget.options.isNotEmpty) ...[
                const SizedBox(height: 16),
                const Text('ONDE HÁ PARCEIROS', style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFF6E6A63))),
                for (final o in widget.options)
                  _tile(Hi.mapPin, o, onTap: () => Navigator.of(context).pop(o)),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

/// Empresas / Lojas: filtro em pílula 38 (DESIGN.md §6) — verde quando
/// escolhido, branco sem contorno quando não.
class _ModePill extends StatelessWidget {
  final String label;
  final bool on;
  final VoidCallback onTap;
  const _ModePill({required this.label, required this.on, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: on,
        child: SnappyTap(
          onTap: onTap,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            height: 38,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: on ? AppTheme.accentOliveDark : Colors.white,
              borderRadius: BorderRadius.circular(19),
            ),
            child: Text(label,
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
          ),
        ),
      );
}
