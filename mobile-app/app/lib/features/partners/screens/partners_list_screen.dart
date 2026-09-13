import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/partners/favorite_partners_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../partner_style.dart';
import 'partner_detail_screen.dart';

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

    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                PageHeader(
                  title: 'Parceiros',
                  titleFontSize: 30,
                  showBack: widget.selectionMode,
                  // Mantém a altura do cabeçalho igual à de antes de o
                  // coração ter saído daqui para junto da barra de
                  // pesquisa — sem isto, `hasIconRow` no PageHeader fica
                  // `false` (nem back button nem trailing) e o título
                  // sobe, perdendo o alinhamento vertical com o resto
                  // da app.
                  trailing: widget.selectionMode ? null : const SizedBox(width: 46, height: 46),
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
                            borderRadius: BorderRadius.circular(999),
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
                                borderRadius: BorderRadius.circular(999),
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
                  categoryOptionsAsync.when(
                    loading: () => const SizedBox(height: 82),
                    error: (err, st) => const SizedBox.shrink(),
                    data: (options) => Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.fromLTRB(0, 14, 0, 0),
                          child: _CategoryNavBar(
                            options: options,
                            selected: _filter,
                            onChanged: (c) => setState(() => _filter = c),
                          ),
                        ),
                        const SizedBox(height: 14),
                        Padding(
                          padding: const EdgeInsets.symmetric(
                            horizontal: AppTheme.screenMargin,
                          ),
                          child: Divider(
                            color: AppTheme.borderMuted,
                            height: 1,
                          ),
                        ),
                      ],
                    ),
                  ),
                Expanded(
                  child: partnersAsync.when(
                    loading: () =>
                        const Center(child: CircularProgressIndicator()),
                    error: (err, st) => const Center(
                      child: Text('Não foi possível carregar parceiros.'),
                    ),
                    data: (allPartners) {
                      final query = _search.text.trim().toLowerCase();
                      final partners = query.isEmpty
                          ? allPartners
                          : allPartners
                                .where(
                                  (s) => s.name.toLowerCase().contains(query),
                                )
                                .toList();
                      if (partners.isEmpty) {
                        return Center(
                          child: Text(
                            query.isEmpty
                                ? 'Sem parceiros nesta categoria.'
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
                          padding: const EdgeInsets.fromLTRB(0, 32, 0, 140),
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
            const Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: FloatingBottomNav(current: AppTab.partners),
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
            borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
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
class _CategoryNavBar extends StatefulWidget {
  final List<PartnerCategoryOption> options;
  final String? selected;
  final ValueChanged<String?> onChanged;

  const _CategoryNavBar({required this.options, required this.selected, required this.onChanged});

  @override
  State<_CategoryNavBar> createState() => _CategoryNavBarState();
}

class _CategoryNavBarState extends State<_CategoryNavBar> {
  final _controller = ScrollController();

  static const _tileWidth = 64.0;
  static const _tileWidthSelected = 84.0;
  static const _spacing = 6.0;

  List<PartnerCategoryOption?> get _options => [null, ...widget.options];

  @override
  void didUpdateWidget(covariant _CategoryNavBar oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.selected != widget.selected) _scrollToSelected();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _scrollToSelected() {
    if (!_controller.hasClients) return;
    final index = _options.indexWhere((o) => o?.slug == widget.selected);
    if (index < 0) return;
    // Fica uma casa para a direita do início — a opção anterior nunca
    // desaparece por completo, para se conseguir sempre voltar a
    // percorrer as restantes categorias. Usa _cumulativeOffset (não uma
    // largura fixa) porque o tile selecionado é mais largo que os
    // outros — uma aproximação por largura constante desalinha o scroll
    // depois de algumas seleções seguidas.
    final anchor = (index - 1).clamp(0, _options.length - 1);
    _animateTo(_cumulativeOffset(anchor));
  }

  double _widthOf(int index) =>
      _options[index]?.slug == widget.selected ? _tileWidthSelected : _tileWidth;

  double _cumulativeOffset(int index) {
    var offset = 0.0;
    for (var i = 0; i < index; i++) {
      offset += _widthOf(i) + _spacing;
    }
    return offset;
  }

  void _animateTo(double offset) {
    if (!_controller.hasClients) return;
    _controller.animateTo(
      offset.clamp(0.0, _controller.position.maxScrollExtent),
      duration: const Duration(milliseconds: 220),
      curve: Curves.easeOutBack,
    );
  }

  // Depois de largar um gesto de arrastar, a fila "bloqueia" (encaixa)
  // sempre no início do separador mais próximo — nunca fica parada a
  // meio de um tile — com a mesma animação snappy usada ao selecionar.
  bool _onScrollEnd(ScrollEndNotification notification) {
    if (!_controller.hasClients) return false;
    final current = _controller.offset;
    var nearest = 0.0;
    var nearestDistance = double.infinity;
    for (var i = 0; i < _options.length; i++) {
      final start = _cumulativeOffset(i);
      final distance = (start - current).abs();
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = start;
      }
    }
    if (nearestDistance > 0.5) _animateTo(nearest);
    return false;
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 82,
      child: NotificationListener<ScrollEndNotification>(
        onNotification: _onScrollEnd,
        child: ListView.builder(
          controller: _controller,
          scrollDirection: Axis.horizontal,
          padding: const EdgeInsets.symmetric(
            horizontal: AppTheme.screenMargin,
          ),
          itemCount: _options.length,
          itemBuilder: (context, index) {
            final option = _options[index];
            final isSelected = option?.slug == widget.selected;
            return Padding(
              padding: EdgeInsets.only(
                right: index == _options.length - 1 ? 0 : _spacing,
              ),
              child: SnappyTap(
                onTap: () => widget.onChanged(option?.slug),
                child: SizedBox(
                  width: isSelected ? _tileWidthSelected : _tileWidth,
                  child: _CategoryIconTile(
                    icon: option == null
                        ? Icons.apps_rounded
                        : iconForCategorySlug(option.slug),
                    label: option?.label ?? 'Todos',
                    selected: isSelected,
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

/// Bolha circular com ícone — a opção selecionada fica maior e
/// preenchida a verde-oliva escuro, sem rótulo por baixo; as restantes
/// ficam mais pequenas, com o nome da categoria por baixo.
class _CategoryIconTile extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool selected;

  const _CategoryIconTile({
    required this.icon,
    required this.label,
    required this.selected,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          width: selected ? 72 : 44,
          height: selected ? 72 : 44,
          decoration: BoxDecoration(
            color: selected ? AppTheme.accentOliveDark : Colors.transparent,
            shape: BoxShape.circle,
          ),
          child: Icon(
            icon,
            size: selected ? 32 : 22,
            color: selected ? Colors.white : AppTheme.ink,
          ),
        ),
        if (!selected) ...[
          const SizedBox(height: 6),
          Flexible(
            child: Text(
              label,
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(
                fontSize: 10.5,
                fontWeight: FontWeight.w600,
                height: 1.1,
                color: AppTheme.ink,
              ),
            ),
          ),
        ],
      ],
    );
  }
}

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
            borderRadius: BorderRadius.circular(20),
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
                          borderRadius: BorderRadius.circular(999),
                        ),
                        child: const Text(
                          'Mais popular',
                          style: TextStyle(
                            color: Colors.white,
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
                        fontWeight: FontWeight.w800,
                        fontSize: 15,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      '${partner.primaryCategoryLabel} · ${partner.location}',
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(
                        color: AppTheme.ink,
                        fontWeight: FontWeight.w600,
                        fontSize: 12.5,
                      ),
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
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        'Ver perfil',
                        style: TextStyle(
                          color: AppTheme.ink,
                          fontWeight: FontWeight.w700,
                          fontSize: 12,
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
            borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
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
                    borderRadius: BorderRadius.circular(999),
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
                    error: (err, st) => const Center(
                      child: Text('Não foi possível carregar os favoritos.'),
                    ),
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
                                        borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
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
