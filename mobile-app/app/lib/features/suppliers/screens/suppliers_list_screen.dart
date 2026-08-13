import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/suppliers/supplier_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';
import '../supplier_style.dart';
import 'supplier_detail_screen.dart';

class SuppliersListScreen extends ConsumerStatefulWidget {
  final SupplierCategory? category;
  final bool selectionMode;

  const SuppliersListScreen({
    super.key,
    this.category,
    this.selectionMode = false,
  });

  @override
  ConsumerState<SuppliersListScreen> createState() =>
      _SuppliersListScreenState();
}

class _SuppliersListScreenState extends ConsumerState<SuppliersListScreen> {
  late SupplierCategory? _filter =
      widget.category ?? SupplierCategory.values.first;
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

  void _showFiltersComingSoon() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Filtros avançados em breve.')),
    );
  }

  void _showLocationComingSoon() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Escolha de localização em breve.')),
    );
  }

  @override
  Widget build(BuildContext context) {
    final suppliersAsync = ref.watch(
      suppliersProvider(widget.selectionMode ? widget.category : _filter),
    );
    final trendingAsync = ref.watch(suppliersProvider(null));

    return Scaffold(
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    20,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Row(
                    children: [
                      const CircleBackButton(),
                      const Spacer(),
                      SnappyTap(
                        onTap: _showLocationComingSoon,
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            const Icon(
                              Icons.place_outlined,
                              size: 16,
                              color: AppTheme.inkMuted,
                            ),
                            const SizedBox(width: 6),
                            const Text(
                              'Lisboa · 50 km',
                              style: TextStyle(
                                fontSize: 13.5,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                            const Icon(
                              Icons.expand_more,
                              size: 18,
                              color: AppTheme.inkMuted,
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(999),
                      boxShadow: AppTheme.cardShadow,
                    ),
                    child: TextField(
                      controller: _search,
                      decoration: InputDecoration(
                        hintText: 'Pesquisar fornecedores...',
                        prefixIcon: const Icon(Icons.search, size: 20),
                        filled: true,
                        fillColor: Colors.white,
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(999),
                          borderSide: BorderSide.none,
                        ),
                        contentPadding: const EdgeInsets.symmetric(
                          vertical: 12,
                        ),
                      ),
                    ),
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
                        'Escolhe um fornecedor de ${widget.category?.label.toLowerCase()} para esta tarefa.',
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                    ),
                  )
                else
                  Padding(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      14,
                      AppTheme.screenMargin,
                      0,
                    ),
                    child: Row(
                      children: [
                        Expanded(
                          child: _CategoryNavBar(
                            selected: _filter,
                            onChanged: (c) => setState(() => _filter = c),
                          ),
                        ),
                        const SizedBox(width: 8),
                        SnappyTap.builder(
                          onTap: _showFiltersComingSoon,
                          builder: (context, hovered) => Container(
                            padding: const EdgeInsets.all(11),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(999),
                              boxShadow: hovered
                                  ? AppTheme.cardShadowStrong
                                  : AppTheme.cardShadow,
                              border: Border.all(
                                color: AppColors.green,
                                width: 1.5,
                              ),
                            ),
                            child: const Icon(
                              Icons.tune,
                              size: 16,
                              color: AppTheme.ink,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                Expanded(
                  child: suppliersAsync.when(
                    loading: () =>
                        const Center(child: CircularProgressIndicator()),
                    error: (err, st) => const Center(
                      child: Text('Não foi possível carregar fornecedores.'),
                    ),
                    data: (allSuppliers) {
                      final query = _search.text.trim().toLowerCase();
                      final suppliers = query.isEmpty
                          ? allSuppliers
                          : allSuppliers
                                .where(
                                  (s) =>
                                      s.name.toLowerCase().contains(query),
                                )
                                .toList();
                      if (suppliers.isEmpty) {
                        return Center(
                          child: Text(
                            query.isEmpty
                                ? 'Sem fornecedores nesta categoria.'
                                : 'Sem fornecedores para "${_search.text.trim()}".',
                          ),
                        );
                      }
                      final grouped = <SupplierCategory, List<Supplier>>{};
                      for (final s in suppliers) {
                        grouped.putIfAbsent(s.category, () => []).add(s);
                      }
                      return EdgeFade(
                        topFadeHeight: 32,
                        bottomFadeHeight: 140,
                        child: ListView(
                          padding: const EdgeInsets.fromLTRB(0, 32, 0, 140),
                          children: [
                            if (!widget.selectionMode)
                              trendingAsync.maybeWhen(
                                data: (allTrending) {
                                  if (allTrending.isEmpty) {
                                    return const SizedBox.shrink();
                                  }
                                  final trending = [...allTrending]
                                    ..sort(
                                      (a, b) => b.rating.compareTo(a.rating),
                                    );
                                  return Padding(
                                    padding: const EdgeInsets.only(
                                      bottom: 36,
                                    ),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Padding(
                                          padding: const EdgeInsets.symmetric(
                                            horizontal: AppTheme.screenMargin,
                                          ),
                                          child: Text(
                                            'Trending',
                                            style: Theme.of(
                                              context,
                                            ).textTheme.titleMedium,
                                          ),
                                        ),
                                        const SizedBox(height: 10),
                                        _TrendingWheel(
                                          suppliers: trending.take(8).toList(),
                                          onTap: (supplier) => _openDetails(
                                            context,
                                            supplier,
                                          ),
                                        ),
                                      ],
                                    ),
                                  );
                                },
                                orElse: () => const SizedBox.shrink(),
                              ),
                            if (!widget.selectionMode)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(
                                  AppTheme.screenMargin,
                                  0,
                                  AppTheme.screenMargin,
                                  12,
                                ),
                                child: Text(
                                  'Mais Dos Melhores',
                                  style: Theme.of(
                                    context,
                                  ).textTheme.titleMedium,
                                ),
                              ),
                            for (final entry in grouped.entries) ...[
                              if (_filter == null && !widget.selectionMode) ...[
                                Padding(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: AppTheme.screenMargin,
                                  ),
                                  child: Text(
                                    entry.key.label,
                                    style: Theme.of(
                                      context,
                                    ).textTheme.titleMedium,
                                  ),
                                ),
                                const SizedBox(height: 12),
                              ],
                              for (final (index, supplier)
                                  in entry.value.indexed) ...[
                                Padding(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: AppTheme.screenMargin,
                                  ),
                                  child: _SupplierCard(
                                    supplier: supplier,
                                    mostPopular:
                                        index == 0 && entry.value.length > 1,
                                    onTap: () =>
                                        _openDetails(context, supplier),
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
              left: AppTheme.screenMargin,
              right: AppTheme.screenMargin,
              bottom: 24,
              child: FloatingBottomNav(current: AppTab.suppliers),
            ),
          const Positioned.fill(child: DraggableChatBubble()),
        ],
      ),
    );
  }

  Future<void> _openDetails(BuildContext context, Supplier supplier) async {
    final chosen = await Navigator.of(context).push<Supplier>(
      PageRouteBuilder<Supplier>(
        opaque: false,
        barrierColor: Colors.black45,
        transitionDuration: const Duration(milliseconds: 280),
        pageBuilder: (context, animation, secondaryAnimation) => Padding(
          padding: const EdgeInsets.only(top: 40),
          child: ClipRRect(
            borderRadius: const BorderRadius.vertical(
              top: Radius.circular(24),
            ),
            child: SupplierDetailScreen(
              supplier: supplier,
              selectionMode: widget.selectionMode,
            ),
          ),
        ),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return SlideTransition(
            position: Tween<Offset>(
              begin: const Offset(0, 1),
              end: Offset.zero,
            ).animate(CurvedAnimation(parent: animation, curve: Curves.easeOutCubic)),
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

/// Carrossel de categorias estilo "escolhas populares" (ícone numa
/// bolha + rótulo por baixo, como em apps de entregas). Ao contrário do
/// [CoverFlowPicker] partilhado (que centra a opção), aqui a opção
/// selecionada fica maior e encostada à esquerda — mostra sempre 3 a 4
/// categorias de cada vez, com espaço visível entre elas.
class _CategoryNavBar extends StatefulWidget {
  final SupplierCategory? selected;
  final ValueChanged<SupplierCategory?> onChanged;

  const _CategoryNavBar({required this.selected, required this.onChanged});

  @override
  State<_CategoryNavBar> createState() => _CategoryNavBarState();
}

class _CategoryNavBarState extends State<_CategoryNavBar> {
  final _controller = ScrollController();

  static const _tileWidth = 68.0;
  static const _tileWidthSelected = 78.0;
  static const _spacing = 6.0;

  List<SupplierCategory?> get _options => [null, ...SupplierCategory.values];

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
    final index = _options.indexOf(widget.selected);
    if (index < 0) return;
    // Fica uma casa para a direita do início — a opção anterior nunca
    // desaparece por completo, para se conseguir sempre voltar a
    // percorrer as restantes categorias.
    final offset = (index - 1) * (_tileWidth + _spacing);
    _animateTo(offset);
  }

  double _widthOf(int index) =>
      _options[index] == widget.selected ? _tileWidthSelected : _tileWidth;

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
      height: 74,
      child: NotificationListener<ScrollEndNotification>(
        onNotification: _onScrollEnd,
        child: ListView.builder(
          controller: _controller,
          scrollDirection: Axis.horizontal,
          itemCount: _options.length,
          itemBuilder: (context, index) {
            final category = _options[index];
            final isSelected = category == widget.selected;
            return Padding(
              padding: EdgeInsets.only(
                right: index == _options.length - 1 ? 0 : _spacing,
              ),
              child: SnappyTap(
                onTap: () => widget.onChanged(category),
                child: SizedBox(
                  width: isSelected ? _tileWidthSelected : _tileWidth,
                  child: _CategoryIconTile(
                    icon: category == null
                        ? Icons.apps_rounded
                        : iconForSupplierCategory(category),
                    label: category?.label ?? 'Todos',
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
          width: selected ? 52 : 40,
          height: selected ? 52 : 40,
          decoration: BoxDecoration(
            color: selected ? AppColors.green : Colors.white,
            shape: BoxShape.circle,
          ),
          child: Icon(icon, size: selected ? 22 : 18, color: AppTheme.ink),
        ),
        const SizedBox(height: 6),
        Text(
          label,
          textAlign: TextAlign.center,
          maxLines: 2,
          style: TextStyle(
            fontSize: selected ? 11.5 : 10.5,
            fontWeight: selected ? FontWeight.w700 : FontWeight.w600,
            color: AppTheme.ink,
          ),
        ),
      ],
    );
  }
}

/// Cartão compacto para o carrossel horizontal "Trending" — versão
/// reduzida do [_SupplierCard], só com o essencial para caber numa
/// fila que desliza da esquerda para a direita.
/// Roda estilo "cover flow" para o carrossel "Trending" — a opção
/// centrada fica maior e opaca, as vizinhas ficam mais pequenas e
/// semi-transparentes. Ao contrário do [CoverFlowPicker] partilhado
/// (pensado para escolher uma opção), aqui qualquer toque abre logo o
/// perfil do fornecedor, mesmo que ainda não esteja centrado.
class _TrendingWheel extends StatefulWidget {
  final List<Supplier> suppliers;
  final ValueChanged<Supplier> onTap;

  const _TrendingWheel({required this.suppliers, required this.onTap});

  @override
  State<_TrendingWheel> createState() => _TrendingWheelState();
}

class _TrendingWheelState extends State<_TrendingWheel> {
  // Largura de página total (1.0) — cada cartão fica com a mesma
  // largura dos cartões da lista principal, logo abaixo.
  final PageController _controller = PageController();
  double _page = 0;

  @override
  void initState() {
    super.initState();
    _controller.addListener(() {
      setState(() => _page = _controller.page ?? _page);
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 240,
      child: PageView.builder(
        controller: _controller,
        itemCount: widget.suppliers.length,
        itemBuilder: (context, index) {
          final supplier = widget.suppliers[index];
          final distance = (_page - index).abs().clamp(0.0, 1.0);
          final scale = 1.0 - distance * 0.06;
          return Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: AppTheme.screenMargin,
            ),
            child: Opacity(
              opacity: 1.0 - distance * 0.4,
              child: Transform.scale(
                scale: scale,
                child: _TrendingCard(
                  supplier: supplier,
                  onTap: () => widget.onTap(supplier),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

class _TrendingCard extends StatelessWidget {
  final Supplier supplier;
  final VoidCallback onTap;

  const _TrendingCard({required this.supplier, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: AppTheme.cardShadow,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: const BorderRadius.vertical(
                top: Radius.circular(18),
              ),
              child: SizedBox(
                height: 145,
                width: double.infinity,
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    Container(
                      color: colorForSupplierCategory(supplier.category),
                    ),
                    Image.network(
                      supplier.imageUrl,
                      fit: BoxFit.cover,
                      loadingBuilder: (context, child, progress) =>
                          progress == null ? child : const SizedBox.shrink(),
                      errorBuilder: (context, error, stackTrace) =>
                          const SizedBox.shrink(),
                    ),
                  ],
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(10),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    supplier.name,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 12.5,
                    ),
                  ),
                  const SizedBox(height: 3),
                  Row(
                    children: [
                      const Icon(
                        Icons.star_rounded,
                        size: 13,
                        color: Colors.amber,
                      ),
                      const SizedBox(width: 2),
                      Text(
                        '${supplier.rating}',
                        style: const TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      const SizedBox(width: 4),
                      Expanded(
                        child: Text(
                          supplier.category.label,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(
                            color: AppTheme.inkMuted,
                            fontSize: 10.5,
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SupplierCard extends StatefulWidget {
  final Supplier supplier;
  final bool mostPopular;
  final VoidCallback onTap;

  const _SupplierCard({
    required this.supplier,
    required this.onTap,
    this.mostPopular = false,
  });

  @override
  State<_SupplierCard> createState() => _SupplierCardState();
}

class _SupplierCardState extends State<_SupplierCard> {
  bool _favorited = false;

  @override
  Widget build(BuildContext context) {
    final supplier = widget.supplier;
    final features = featureTagsFor(supplier.category);
    final responseMinutes = responseMinutesFor(supplier);

    return SnappyTap.builder(
      onTap: widget.onTap,
      builder: (context, hovered) => Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(24),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
            borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
            child: SizedBox(
              height: 170,
              child: Stack(
                fit: StackFit.expand,
                children: [
                  Container(color: colorForSupplierCategory(supplier.category)),
                  Image.network(
                    supplier.imageUrl,
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
                      icon: _favorited ? Icons.favorite : Icons.favorite_border,
                      background: Colors.white.withValues(alpha: 0.9),
                      onTap: () => setState(() => _favorited = !_favorited),
                    ),
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    const Icon(
                      Icons.star_rounded,
                      size: 16,
                      color: Colors.amber,
                    ),
                    const SizedBox(width: 2),
                    Text(
                      '${supplier.rating}',
                      style: const TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                    const SizedBox(width: 4),
                    Text(
                      '(${supplier.reviewCount} avaliações)',
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: 12),
                    ),
                    const Spacer(),
                    Text(
                      'Resposta em $responseMinutes min',
                      style: TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: 11.5,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Text(
                  supplier.name,
                  style: const TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 16,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  '${supplier.category.label} · ${supplier.city}',
                  style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
                ),
                const SizedBox(height: 4),
                Text(
                  'Desde €${supplier.startingPrice.toStringAsFixed(0)}',
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: 13.5,
                  ),
                ),
                if (features.isNotEmpty) ...[
                  const SizedBox(height: 10),
                  Wrap(
                    spacing: 6,
                    runSpacing: 6,
                    children: [
                      for (final feature in features)
                        Container(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 10,
                            vertical: 5,
                          ),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(999),
                            border: Border.all(color: const Color(0xFFE2D9CF)),
                          ),
                          child: Text(
                            feature,
                            style: const TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                    ],
                  ),
                ],
                const SizedBox(height: 10),
                Row(
                  children: [
                    Expanded(
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 10,
                          vertical: 6,
                        ),
                        decoration: BoxDecoration(
                          color: AppStatusColors.confirmed.withValues(
                            alpha: 0.12,
                          ),
                          borderRadius: BorderRadius.circular(999),
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            const Icon(
                              Icons.check_circle,
                              size: 14,
                              color: AppStatusColors.confirmed,
                            ),
                            const SizedBox(width: 4),
                            Flexible(
                              child: Text(
                                'Disponível na tua data',
                                style: const TextStyle(
                                  color: AppStatusColors.confirmed,
                                  fontSize: 11,
                                  fontWeight: FontWeight.w700,
                                ),
                                overflow: TextOverflow.ellipsis,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    SnappyTap.builder(
                      onTap: widget.onTap,
                      builder: (context, hovered) => Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 10,
                        ),
                        decoration: BoxDecoration(
                          color: AppTheme.ink,
                          borderRadius: BorderRadius.circular(999),
                          boxShadow: hovered
                              ? AppTheme.cardShadowStrong
                              : AppTheme.cardShadow,
                        ),
                        child: const Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Text(
                              'Ver perfil',
                              style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w700,
                                fontSize: 12.5,
                              ),
                            ),
                            SizedBox(width: 4),
                            Icon(
                              Icons.arrow_forward,
                              size: 14,
                              color: Colors.white,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
      ),
    );
  }
}
