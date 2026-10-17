import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/partners/favorite_partners_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../partner_style.dart';
import 'partner_detail_screen.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/money.dart';
import '../../../core/partner_profile/partner_location.dart';

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
    _search.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  void _showFavoritesSheet() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => const _FavoritesSheet(),
    );
  }

  Future<void> _showFilters() async {
    final result = await showModalBottomSheet<_AdvancedFilters>(
      context: context,
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
        break;
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
    final result = await showModalBottomSheet<String>(
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
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
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
                        color: AppTheme.surface,
                        borderRadius: BorderRadius.circular(AppRadius.pill),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(Icons.location_on_outlined, size: 16, color: AppTheme.inkMuted),
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
                          const Icon(Icons.expand_more, size: 16, color: AppTheme.inkMuted),
                        ],
                      ),
                    ),
                  ),
                ),
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
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(AppRadius.pill),
                            boxShadow: AppTheme.searchBarShadow,
                          ),
                          child: TextField(
                            controller: _search,
                            decoration: InputDecoration(
                              hintText: 'Pesquisar parceiros...',
                              prefixIcon: const Icon(Icons.search, size: 20),
                              filled: true,
                              fillColor: Colors.white,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(AppRadius.pill),
                                borderSide: const BorderSide(
                                  color: AppTheme.accentOliveDark,
                                ),
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
                            width: 46,
                            height: 46,
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: AppTheme.surface,
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(
                              Icons.favorite_border,
                              size: 18,
                              color: AppTheme.ink,
                            ),
                          ),
                        ),
                      ],
                      const SizedBox(width: 10),
                      SnappyTap(
                        onTap: _showFilters,
                        child: Container(
                          width: 46,
                          height: 46,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: AppTheme.surface,
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(
                            Icons.tune,
                            size: 18,
                            color: AppTheme.ink,
                          ),
                        ),
                      ),
                    ],
                  ),
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
                  )
                else
                  const SizedBox(height: 8),
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
                                      s.location.toLowerCase().contains(
                                        effectiveLocation.toLowerCase(),
                                      ),
                                )
                                .toList();
                      final query = _search.text.trim().toLowerCase();
                      final partners = _applyAdvanced(query.isEmpty
                          ? byLocation
                          : byLocation
                                .where(
                                  (s) => s.name.toLowerCase().contains(query),
                                )
                                .toList());
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
                      final grouped = <String, List<Partner>>{};
                      for (final s in partners) {
                        grouped.putIfAbsent(s.primaryCategoryLabel, () => []).add(s);
                      }
                      return EdgeFade(
                        topFadeHeight: 32,
                        bottomFadeHeight: 140,
                        child: ListView(
                          padding: EdgeInsets.fromLTRB(
                            0,
                            24,
                            0,
                            widget.selectionMode
                                ? 40
                                : FloatingFilterBar.bottomPadding(
                                    aboveNav: true,
                                  ),
                          ),
                          children: [
                            // Canvas "Parceiros": cabeçalho por categoria
                            // ("Espaços" 22 + "12 no Alentejo" à direita).
                            for (final entry in grouped.entries) ...[
                              if (!widget.selectionMode)
                                Padding(
                                  padding: const EdgeInsets.fromLTRB(
                                    AppTheme.screenMargin,
                                    4,
                                    AppTheme.screenMargin,
                                    12,
                                  ),
                                  child: Row(
                                    crossAxisAlignment: CrossAxisAlignment.baseline,
                                    textBaseline: TextBaseline.alphabetic,
                                    children: [
                                      Expanded(
                                        child: Text(
                                          _filter == null ? entry.key : (selectedLabel ?? entry.key),
                                          maxLines: 1,
                                          overflow: TextOverflow.ellipsis,
                                          style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink),
                                        ),
                                      ),
                                      const SizedBox(width: 8),
                                      Flexible(
                                        child: Text(
                                          effectiveLocation.isEmpty
                                              ? '${entry.value.length}'
                                              : '${entry.value.length} em $effectiveLocation',
                                          maxLines: 1,
                                          overflow: TextOverflow.ellipsis,
                                          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              for (final (index, partner)
                                  in entry.value.indexed) ...[
                                Padding(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: AppTheme.screenMargin,
                                  ),
                                  child: _PartnerCard(
                                    partner: partner,
                                    mostPopular:
                                        index == 0 && entry.value.length > 1,
                                    onTap: () => _openDetails(context, partner),
                                  ),
                                ),
                                const SizedBox(height: 16),
                              ],
                            ],
                          ],
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          if (!widget.selectionMode)
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: FloatingBottomNav(
                current: AppTab.partners,
                // Categorias ligadas à navbar (redesign 2026-10).
                top: categoryOptionsAsync.maybeWhen(
                  data: (options) {
                    final all = <PartnerCategoryOption?>[null, ...options];
                    final index = all.indexWhere((o) => o?.slug == _filter);
                    return FilterChipsRow(
                      // Categorias de Parceiros: carrossel normal, sem
                      // repetir (pedido do utilizador).
                      infinite: false,
                      items: [
                        for (final o in all)
                          FilterBarItem(o?.label ?? 'Todos', iconOnlyWhenSelected: true, icon: o == null
                                ? Icons.apps_rounded
                                : iconForCategorySlug(o.slug)),
                      ],
                      selected: index < 0 ? 0 : index,
                      onSelected: (i) =>
                          setState(() => _filter = all[i]?.slug),
                    );
                  },
                  orElse: () => null,
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

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}

/// Carrossel de categorias estilo "escolhas populares" (ícone numa
/// bolha + rótulo por baixo, como em apps de entregas). Ao contrário do
/// [CoverFlowPicker] partilhado (que centra a opção), aqui a opção
/// selecionada fica maior e encostada à esquerda — mostra sempre 3 a 4
/// categorias de cada vez, com espaço visível entre elas.

class _PartnerCard extends ConsumerStatefulWidget {
  final Partner partner;
  final bool mostPopular;
  final VoidCallback onTap;

  const _PartnerCard({
    required this.partner,
    required this.onTap,
    this.mostPopular = false,
  });

  @override
  ConsumerState<_PartnerCard> createState() => _PartnerCardState();
}

class _PartnerCardState extends ConsumerState<_PartnerCard> {
  @override
  Widget build(BuildContext context) {
    final partner = widget.partner;
    final favorited = ref.watch(
      favoritePartnersControllerProvider.select((s) => s.partnerIds.contains(partner.id)),
    );

    return SnappyTap(
      onTap: widget.onTap,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(AppRadius.lg),
            child: SizedBox(
              height: 150,
              width: double.infinity,
              child: Stack(
                fit: StackFit.expand,
                children: [
                  Container(color: colorForCategorySlug(partner.primaryCategorySlug)),
                  if (partner.imageUrl != null)
                    Image.network(
                      partner.imageUrl!,
                      fit: BoxFit.cover,
                      loadingBuilder: (context, child, progress) =>
                          progress == null ? child : const SizedBox.shrink(),
                      errorBuilder: (context, error, stackTrace) =>
                          const SizedBox.shrink(),
                    ),
                  if (widget.mostPopular)
                    Positioned(
                      top: 12,
                      left: 12,
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 10,
                          vertical: 6,
                        ),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(AppRadius.pill),
                        ),
                        child: const Text(
                          'Mais popular',
                          style: TextStyle(
                            color: AppTheme.ink,
                            fontSize: 11,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                      ),
                    ),
                  Positioned(
                    top: 12,
                    right: 12,
                    child: CircleIconButton(
                      icon: favorited ? Icons.favorite : Icons.favorite_border,
                      background: Colors.white.withValues(alpha: 0.9),
                      onTap: () => ref
                          .read(favoritePartnersControllerProvider.notifier)
                          .toggle(partner.id),
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      partner.name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: 16,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      partner.primaryCategoryLabel,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: 12,
                      ),
                    ),
                    const SizedBox(height: 3),
                    // Área de serviço definida pelo próprio parceiro
                    // (`service_areas`/`nationwide`, editável em
                    // "Área de serviço" no perfil do negócio) — linha
                    // própria com ícone em vez de espremida com a
                    // categoria, para ficar visível mesmo quando o
                    // nome/categoria já ocupam o espaço disponível.
                    Row(
                      children: [
                        const Icon(
                          Icons.location_on_outlined,
                          size: 13,
                          color: AppTheme.inkMuted,
                        ),
                        const SizedBox(width: 3),
                        Expanded(
                          child: Text(
                            partner.location,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                              color: AppTheme.inkMuted,
                              fontSize: 11,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 10),
              SnappyTap(
                onTap: widget.onTap,
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 14,
                    vertical: 9,
                  ),
                  decoration: BoxDecoration(
                    color: AppTheme.surface,
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                  ),
                  child: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        'Ver perfil',
                        style: TextStyle(
                          color: AppTheme.ink,
                          fontWeight: FontWeight.w700,
                          fontSize: AppFontSize.sm,
                        ),
                      ),
                      SizedBox(width: 4),
                      Icon(
                        Icons.arrow_forward_rounded,
                        size: 13,
                        color: AppTheme.ink,
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
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
                      Icon(Icons.favorite, size: 18, color: AppTheme.accentOliveDark),
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
                              'Ainda não guardaste nenhum favorito — toca no coração de um parceiro para o guardares aqui.',
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
            selectedColor: AppTheme.accentOliveDark,
            labelStyle: TextStyle(
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
    final title = Theme.of(context).textTheme.titleMedium;
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(24, 20, 24, 20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Filtros', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 18),
            Text('Preço até', style: title),
            const SizedBox(height: 8),
            _chips<double?>(_prices, _maxPrice, (v) => v == null ? 'Qualquer' : euros(v), (v) => _maxPrice = v),
            const SizedBox(height: 18),
            Text('Avaliação', style: title),
            const SizedBox(height: 8),
            _chips<double?>(
              _ratings,
              _minRating,
              (v) => v == null ? 'Qualquer' : '${v.toString().replaceAll('.', ',')}+',
              (v) => _minRating = v,
            ),
            const SizedBox(height: 18),
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
            const SizedBox(height: 24),
            Row(
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
          ],
        ),
      ),
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
                Icons.my_location,
                'Usar a minha localização atual',
                subtitle: 'Parceiros perto de onde estás',
                leading: _locating
                    ? const SizedBox(width: 24, height: 24, child: CircularProgressIndicator(strokeWidth: 2.5))
                    : null,
                onTap: _locating ? () {} : _useCurrent,
              ),
              if (event.isNotEmpty)
                _tile(Icons.celebration_outlined, 'Local do evento', subtitle: event, onTap: () => Navigator.of(context).pop(event)),
              _tile(Icons.public, 'Todas as localizações', onTap: () => Navigator.of(context).pop('')),
              const SizedBox(height: 8),
              TextField(
                controller: _query,
                onChanged: _onSearch,
                decoration: const InputDecoration(hintText: 'Escreve uma localidade', prefixIcon: Icon(Icons.search)),
              ),
              for (final r in _results)
                _tile(Icons.location_on_outlined, r, onTap: () => Navigator.of(context).pop(r)),
              if (widget.options.isNotEmpty) ...[
                const SizedBox(height: 16),
                const Text('ONDE HÁ PARCEIROS', style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFF8F8B84))),
                for (final o in widget.options)
                  _tile(Icons.location_on_outlined, o, onTap: () => Navigator.of(context).pop(o)),
              ],
            ],
          ),
        ),
      ),
    );
  }
}
