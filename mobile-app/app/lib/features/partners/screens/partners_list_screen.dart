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

  void _showFiltersComingSoon() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Filtros avançados em breve.')),
    );
  }

  /// Localizações disponíveis para o cliente escolher — derivadas dos
  /// parceiros já carregados (`service_areas`, via `Partner.location`)
  /// em vez de uma lista fixa, para refletir sempre onde os parceiros
  /// reais estão, e nunca oferecer uma área sem nenhum parceiro.
  void _showLocationPicker(List<String> options) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => SafeArea(
        child: Wrap(
          children: [
            ListTile(
              leading: const Icon(Icons.public),
              title: const Text('Todas as localizações'),
              onTap: () {
                setState(() => _selectedLocation = '');
                Navigator.of(context).pop();
              },
            ),
            for (final location in options)
              ListTile(
                leading: const Icon(Icons.location_on_outlined),
                title: Text(location),
                onTap: () {
                  setState(() => _selectedLocation = location);
                  Navigator.of(context).pop();
                },
              ),
          ],
        ),
      ),
    );
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
                        onTap: _showFiltersComingSoon,
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
                      final partners = query.isEmpty
                          ? byLocation
                          : byLocation
                                .where(
                                  (s) => s.name.toLowerCase().contains(query),
                                )
                                .toList();
                      if (partners.isEmpty) {
                        return Center(
                          child: Text(
                            query.isEmpty
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
                            if (!widget.selectionMode)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(
                                  AppTheme.screenMargin,
                                  0,
                                  AppTheme.screenMargin,
                                  12,
                                ),
                                child: Text(
                                  selectedLabel ?? 'Todos os parceiros',
                                  style: Theme.of(context).textTheme.titleLarge,
                                ),
                              ),
                            for (final entry in grouped.entries) ...[
                              if (_filter == null && !widget.selectionMode) ...[
                                Padding(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: AppTheme.screenMargin,
                                  ),
                                  child: Text(
                                    entry.key,
                                    style: Theme.of(
                                      context,
                                    ).textTheme.titleLarge,
                                  ),
                                ),
                                const SizedBox(height: 12),
                              ],
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
                    // Contagens por categoria na localização escolhida
                    // (mesma regra da lista: "Âmbito nacional" conta
                    // sempre).
                    final everyone = ref
                        .watch(partnersProvider(null))
                        .maybeWhen(
                          data: (list) => list
                              .where(
                                (s) =>
                                    effectiveLocation.isEmpty ||
                                    s.location == 'Âmbito nacional' ||
                                    s.location.toLowerCase().contains(
                                      effectiveLocation.toLowerCase(),
                                    ),
                              )
                              .toList(),
                          orElse: () => null,
                        );
                    int? countFor(PartnerCategoryOption? o) => everyone
                        ?.where(
                          (p) => o == null || p.categorySlugs.contains(o.slug),
                        )
                        .length;
                    return FilterChipsRow(
                      items: [
                        for (final o in all)
                          FilterBarItem(
                            o?.label ?? 'Todos',
                            count: countFor(o),
                            icon: o == null
                                ? Icons.apps_rounded
                                : iconForCategorySlug(o.slug),
                          ),
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
    final chosen = await Navigator.of(context).push<Partner>(
      PageRouteBuilder<Partner>(
        opaque: false,
        barrierColor: Colors.black45,
        transitionDuration: const Duration(milliseconds: 280),
        pageBuilder: (context, animation, secondaryAnimation) => Padding(
          padding: const EdgeInsets.only(top: 40),
          child: ClipRRect(
            borderRadius: const BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
            child: PartnerDetailScreen(
              partner: partner,
              selectionMode: widget.selectionMode,
            ),
          ),
        ),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return SlideTransition(
            position: Tween<Offset>(begin: const Offset(0, 1), end: Offset.zero)
                .animate(
                  CurvedAnimation(
                    parent: animation,
                    curve: Curves.easeOutCubic,
                  ),
                ),
            child: child,
          );
        },
      ),
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
                          color: AppTheme.ink,
                          borderRadius: BorderRadius.circular(AppRadius.pill),
                        ),
                        child: const Text(
                          'Mais popular',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: AppFontSize.xs,
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
                        fontWeight: FontWeight.w800,
                        fontSize: AppFontSize.lg,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      partner.primaryCategoryLabel,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(
                        color: AppTheme.ink,
                        fontWeight: FontWeight.w600,
                        fontSize: AppFontSize.sm,
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
                              fontWeight: FontWeight.w600,
                              fontSize: AppFontSize.xs,
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
                                await Navigator.of(context).push(
                                  PageRouteBuilder(
                                    opaque: false,
                                    barrierColor: Colors.black45,
                                    transitionDuration: const Duration(milliseconds: 280),
                                    pageBuilder: (context, animation, secondaryAnimation) => Padding(
                                      padding: const EdgeInsets.only(top: 40),
                                      child: ClipRRect(
                                        borderRadius: const BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
                                        child: PartnerDetailScreen(partner: partner),
                                      ),
                                    ),
                                    transitionsBuilder: (context, animation, secondaryAnimation, child) {
                                      return SlideTransition(
                                        position: Tween<Offset>(begin: const Offset(0, 1), end: Offset.zero)
                                            .animate(
                                              CurvedAnimation(parent: animation, curve: Curves.easeOutCubic),
                                            ),
                                        child: child,
                                      );
                                    },
                                  ),
                                );
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
