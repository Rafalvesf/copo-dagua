import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'dart:async';

import 'package:copo_dagua_app/shared/widgets/founder_badge.dart';
import 'package:flutter/material.dart';
import '../../../shared/widgets/snap_carousel.dart';
import '../../../shared/widgets/dense_card.dart';
import 'package:flutter/rendering.dart' show ScrollDirection;
import 'package:copo_dagua_app/core/partners/promotions.dart';
import '../../../shared/widgets/permissions_step.dart' show ensurePermission, AppPermission;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../core/partners/partner_pro.dart' show proPartnerIdsProvider;
import '../../gifts/screens/gift_list_screens.dart' show GiftShopView;
import '../../../shared/widgets/floating_filter_bar.dart' show FilterChipsRow, FilterBarItem;
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
import 'partner_detail_screen.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/money.dart';
import '../../../core/partner_profile/partner_location.dart';
import '../../../shared/widgets/island_sheet.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';

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
            child: SafeArea(
            bottom: false,
            child: Column(
              children: [
                // Redesign 2026-10: título "Parceiros" com a localização
                // ao lado direito, na mesma linha.
                PageHeader(
                  title: widget.selectionMode ? null : 'Parceiros',
                  topPadding: 8,
                  showBack: widget.selectionMode,
                  trailing: SnappyTap(
                    onTap: () => _showLocationPicker(locationOptions),
                    child: Container(
                      height: 44,
                      constraints: const BoxConstraints(maxWidth: 170),
                      padding: const EdgeInsets.symmetric(horizontal: 14),
                      decoration: BoxDecoration(
                        // Fundo branco (pedido 2026-11-09).
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(AppRadius.pill),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(Hi.mapPin, size: 16, color: AppTheme.inkMuted),
                          const SizedBox(width: 4),
                          Flexible(
                            child: Text(
                              effectiveLocation.isEmpty ? 'Todas' : effectiveLocation,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(
                                color: AppTheme.inkMuted,
                                fontWeight: FontWeight.w700,
                                fontSize: AppFontSize.md,
                              ),
                            ),
                          ),
                          const SizedBox(width: 2),
                          const Icon(Hi.chevronDown, size: 16, color: AppTheme.inkMuted),
                        ],
                      ),
                    ),
                  ),
                ),
                if (_tab == 1 && !widget.selectionMode)
                  const Expanded(child: GiftShopView(bottomPadding: 190, showListLink: true))
                else ...[
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: Container(
                          decoration: softCard(radius: AppRadius.pill),
                          child: TextField(
                            controller: _search,
                            decoration: InputDecoration(
                              hintText: 'Espaços, fotografia, flores…',
                              prefixIcon: const Icon(Hi.magnifyingGlass, size: 20),
                              filled: true,
                              fillColor: Colors.white,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(AppRadius.pill),
                                borderSide: BorderSide.none,
                              ),
                              enabledBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(AppRadius.pill),
                                borderSide: BorderSide.none,
                              ),
                              focusedBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(AppRadius.pill),
                                borderSide: BorderSide(color: AppTheme.accentOliveDark),
                              ),
                              contentPadding: const EdgeInsets.symmetric(
                                vertical: 12,
                              ),
                            ),
                          ),
                        ),
                      ),
                      if (!widget.selectionMode) ...[
                        const SizedBox(width: 10),
                        SnappyTap(
                          onTap: _showFavoritesSheet,
                          child: Container(
                            width: 48,
                            height: 48,
                            alignment: Alignment.center,
                            // Branco com a sombra da pesquisa: o círculo vê-se e
                            // a margem direita fica alinhada (2026-11).
                            decoration: softCard(radius: 999),
                            child: const Icon(
                              Hi.heartOutline,
                              size: 20,
                              color: AppTheme.ink,
                            ),
                          ),
                        ),
                      ],
                      const SizedBox(width: 10),
                      SnappyTap(
                        onTap: _showFilters,
                        child: Container(
                          width: 48,
                          height: 48,
                          alignment: Alignment.center,
                          decoration: softCard(radius: 999),
                          child: const Icon(
                            Hi.adjustmentsHorizontal,
                            size: 20,
                            color: AppTheme.ink,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                // Categorias em pílulas por baixo da pesquisa (mockup,
                // 2026-10-19) — antes estavam na barra de baixo.
                if (!widget.selectionMode)
                  categoryOptionsAsync.maybeWhen(
                    data: (options) {
                      Widget pill(PartnerCategoryOption? o) {
                        final on = o?.slug == _filter;
                        return SnappyTap(
                          onTap: () {
                            setState(() => _filter = o?.slug);
                            trackInterest(o?.slug, 'filter');
                          },
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 180),
                            padding: const EdgeInsets.symmetric(horizontal: 14),
                            alignment: Alignment.center,
                            // Sem sombra: a lista horizontal cortava-a e
                            // ficava uma linha por baixo das pílulas.
                            decoration: BoxDecoration(
                              color: on ? AppTheme.accentOliveDark : Colors.white,
                              borderRadius: BorderRadius.circular(999),
                              border: Border.all(color: on ? AppTheme.accentOliveDark : const Color(0xFFE4E1D8)),
                            ),
                            child: Text(o?.label ?? 'Todos',
                                style: TextStyle(
                                    fontSize: 13,
                                    fontWeight: FontWeight.w700,
                                    color: on ? Colors.white : v2Muted)),
                          ),
                        );
                      }

                      // "Todos" fica preso à esquerda (pedido 2026-11) e as
                      // categorias deslizam e desaparecem por baixo dele.
                      const todosW = 72.0;
                      const fadeStart = AppTheme.screenMargin + todosW;
                      return SizedBox(
                        height: 52,
                        child: Padding(
                          padding: const EdgeInsets.only(top: 12, bottom: 6),
                          child: Stack(
                            children: [
                              Positioned.fill(
                                child: ShaderMask(
                                  blendMode: BlendMode.dstIn,
                                  shaderCallback: (r) => LinearGradient(
                                    colors: const [Colors.transparent, Colors.transparent, Colors.black],
                                    stops: [0, (fadeStart + 2) / r.width, (fadeStart + 16) / r.width],
                                  ).createShader(r),
                                  child: ListView.separated(
                                    scrollDirection: Axis.horizontal,
                                    padding: const EdgeInsets.only(left: fadeStart + 17, right: AppTheme.screenMargin),
                                    itemCount: options.length,
                                    separatorBuilder: (context, i) => const SizedBox(width: 8),
                                    itemBuilder: (context, i) => pill(options[i]),
                                  ),
                                ),
                              ),
                              Positioned(
                                left: AppTheme.screenMargin,
                                top: 0,
                                bottom: 0,
                                width: todosW,
                                child: pill(null),
                              ),
                              // Separador fino entre "Todos" e as categorias.
                              Positioned(
                                left: fadeStart + 8,
                                top: 8,
                                bottom: 8,
                                child: Container(width: 1, color: const Color(0xFFDCD8CE)),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                    orElse: () => const SizedBox(height: 52),
                  ),
                if (widget.selectionMode)
                  Padding(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      12,
                      AppTheme.screenMargin,
                      0,
                    ),
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Text(
                        selectedLabel == null
                            ? 'Escolhe um parceiro para esta tarefa.'
                            : 'Escolhe um parceiro de ${selectedLabel.toLowerCase()} para esta tarefa.',
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                    ),
                  ),
                Expanded(
                  child: partnersAsync.when(
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
                      return EdgeFade(
                        topFadeHeight: 32,
                        bottomFadeHeight: 140,
                        child: ListView(
                          padding: EdgeInsets.fromLTRB(
                            0,
                            12,
                            0,
                            widget.selectionMode ? 40 : 200,
                          ),
                          children: [
                            // Como no mockup (2026-10-19): destaques num
                            // carrossel e, por baixo, todos os parceiros
                            // numa lista com foto, preço e favorito.
                            if (noneNear && !widget.selectionMode)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 14),
                                child: InfoNote(
                                  'Ainda não há parceiros em $effectiveLocation. Mostramos todos os parceiros.',
                                  icon: Hi.informationCircle,
                                ),
                              ),
                            if (!widget.selectionMode && query.isEmpty && partners.isNotEmpty && featuredList.isNotEmpty) ...[
                              _SectionHeader(
                                title: _filter != null && selectedLabel != null
                                    ? 'Em destaque · $selectedLabel'
                                    : effectiveLocation.isEmpty || noneNear
                                        ? 'Em destaque'
                                        : 'Em destaque perto de ti',
                                strong: true,
                              ),
                              SnapCarousel(
                                height: FeaturedOverlayCard.height,
                                itemCount: featuredList.length,
                                itemBuilder: (context, i) {
                                  final p = featuredList[i];
                                  return _FeaturedCard(
                                    partner: p,
                                    onTap: () {
                                      // Destaque pago: a reserva que vier daqui paga +6%.
                                      if (paidIds.contains(p.id)) trackPromotionClick(p.id);
                                      _openDetails(context, p);
                                    },
                                  );
                                },
                              ),
                              const SizedBox(height: 14),
                            ],
                            if (!widget.selectionMode)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 4, AppTheme.screenMargin, 12),
                                child: Row(
                                  children: [
                                    Expanded(
                                      child: Text(
                                        '${partners.length} ${partners.length == 1 ? 'parceiro' : 'parceiros'}',
                                        style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink),
                                      ),
                                    ),
                                    SnappyTap(
                                      onTap: _showFilters,
                                      child: Text(
                                        _hasAdvancedFilters ? 'Filtros ativos' : 'Filtrar',
                                        style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            for (final partner in partners)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 10),
                                child: _PartnerCard(
                                  partner: partner,
                                  onTap: () => _openDetails(context, partner),
                                ),
                              ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
                ],
              ],
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
                  child: FloatingBottomNav(
                    current: AppTab.partners,
                    top: FilterChipsRow(
                      items: const [FilterBarItem('Empresas'), FilterBarItem('Lojas')],
                      selected: _tab,
                      infinite: false,
                      visible: 2,
                      onSelected: (i) => setState(() {
                        _tab = i;
                        _navHidden = false;
                      }),
                    ),
                  ),
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

String _priceLabel(Partner p) {
  if (p.startingPrice != null) return 'desde ${euros(p.startingPrice!)}';
  if (p.averageQuotePrice != null) return 'média ${euros(p.averageQuotePrice!)}';
  return 'Pedir orçamento';
}

String? _ratingLabel(Partner p) {
  final r = p.rating;
  if (r == null || r <= 0) return null;
  return r.toStringAsFixed(1).replaceAll('.', ',');
}

class _SectionHeader extends StatelessWidget {
  final String title;
  final String? trailing;
  final bool strong;
  const _SectionHeader({required this.title, this.trailing, this.strong = false});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 4, AppTheme.screenMargin, 12),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.baseline,
          textBaseline: TextBaseline.alphabetic,
          children: [
            Expanded(
              child: Text(title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: strong
                      ? AppTypography.displaySerif(fontSize: 22, fontWeight: FontWeight.w800, color: AppTheme.ink)
                      : const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
            if (trailing != null) ...[
              const SizedBox(width: 8),
              ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 120),
                child: Text(trailing!,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
              ),
            ],
          ],
        ),
      );
}

/// Foto do parceiro (ou a cor da categoria enquanto não há foto).
class _PartnerPhoto extends StatelessWidget {
  final Partner partner;
  const _PartnerPhoto(this.partner);

  @override
  Widget build(BuildContext context) => Stack(
        fit: StackFit.expand,
        children: [
          Container(color: colorForCategorySlug(partner.primaryCategorySlug)),
          if (partner.imageUrl == null)
            Center(child: Icon(iconForCategorySlug(partner.primaryCategorySlug), color: Colors.white, size: 26))
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

/// Destaque: cartão estreito com foto, nota e nome (carrossel).
class _FeaturedCard extends StatelessWidget {
  final Partner partner;
  final VoidCallback onTap;
  const _FeaturedCard({required this.partner, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final rating = _ratingLabel(partner);
    final price = partner.startingPrice != null
        ? ('DESDE', euros(partner.startingPrice!))
        : (partner.averageQuotePrice != null ? ('MÉDIA', euros(partner.averageQuotePrice!)) : null);
    return FeaturedOverlayCard(
      onTap: onTap,
      image: _PartnerPhoto(partner),
      badge: rating == null
          ? null
          : PhotoPill(rating, icon: Hi.star, muted: partner.reviewCount > 0 ? '(${partner.reviewCount})' : null),
      price: price,
      title: partner.name,
      subtitle: partner.location.isNotEmpty ? partner.location : partner.primaryCategoryLabel,
      // As categorias em todos os cartões (2026-11-11), não só nos que têm
      // mais do que uma.
      chips: (partner.categoryLabels.isEmpty ? [partner.primaryCategoryLabel] : partner.categoryLabels).take(3).toList(),
    );
  }
}

/// Linha de parceiro: foto quadrada, nome, categoria · zona · nota,
/// preço e favorito (redesign 2026-10-19).
class _PartnerCard extends ConsumerWidget {
  final Partner partner;
  final VoidCallback onTap;

  const _PartnerCard({required this.partner, required this.onTap});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final favorited = ref.watch(
      favoritePartnersControllerProvider.select((s) => s.partnerIds.contains(partner.id)),
    );
    final rating = _ratingLabel(partner);
    final meta = [partner.primaryCategoryLabel, partner.location].join(' · ');
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(10),
        decoration: softCard(radius: 22),
        child: Row(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(16),
              child: SizedBox(width: 76, height: 76, child: _PartnerPhoto(partner)),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(children: [
                    Flexible(
                      child: Text(partner.name,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 15, color: AppTheme.ink)),
                    ),
                    const SizedBox(width: 6),
                    FounderBadge(partner.id),
                    ProBadge(partner.id),
                  ]),
                  const SizedBox(height: 2),
                  Text.rich(
                    TextSpan(children: [
                      TextSpan(text: meta),
                      if (rating != null) ...[
                        const TextSpan(text: ' · '),
                        WidgetSpan(
                          alignment: PlaceholderAlignment.middle,
                          child: Icon(Hi.star, size: 13, color: AppTheme.accentOliveDark),
                        ),
                        TextSpan(text: ' $rating (${partner.reviewCount})'),
                      ],
                    ]),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(color: v2Muted, fontSize: 12),
                  ),
                  const SizedBox(height: 6),
                  Text(_priceLabel(partner),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700, fontSize: 13)),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Tooltip(
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
                child: Container(
                  width: 38,
                  height: 38,
                  decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle, boxShadow: softShadow),
                  child: Icon(favorited ? Hi.heart : Hi.heartOutline,
                      size: 18, color: favorited ? const Color(0xFFA3412E) : AppTheme.accentOliveDark),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
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
                          for (final partner in favorites) ...[
                            _PartnerCard(
                              partner: partner,
                              onTap: () async {
                                await PartnerDetailScreen.show(context, partner);
                              },
                            ),
                            const SizedBox(height: 16),
                          ],
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
  final _query = TextEditingController();
  Timer? _debounce;
  bool _locating = false;
  List<String> _results = const [];

  @override
  void dispose() {
    _query.dispose();
    _debounce?.cancel();
    super.dispose();
  }

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

  void _onSearch(String q) {
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 450), () async {
      try {
        final r = await searchAddress(q);
        final places = <String>{
          for (final (_, l) in r)
            if (l.city.isNotEmpty) l.city else if (l.region.isNotEmpty) l.region,
        }.toList();
        if (mounted) setState(() => _results = places);
      } catch (_) {}
    });
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
              TextField(
                controller: _query,
                onChanged: _onSearch,
                decoration: const InputDecoration(hintText: 'Escreve uma localidade', prefixIcon: Icon(Hi.magnifyingGlass)),
              ),
              for (final r in _results)
                _tile(Hi.mapPin, r, onTap: () => Navigator.of(context).pop(r)),
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
