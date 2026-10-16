import 'dart:async';

import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';

/// Uma opção dos filtros.
class FilterBarItem {
  final String label;
  final IconData? icon;
  final int? count;

  const FilterBarItem(this.label, {this.icon, this.count});
}

/// Filtros como "segunda navbar" (redesign 2026-10). Pedidos do
/// utilizador: "coloca como segunda navbar o filter picker" e "a navbar
/// principal deve ter uma cor verde como o dos filtros e ambas
/// conectadas".
///
/// - Em ecrãs com navbar, passa-se [FilterChipsRow] como `top` da
///   `FloatingBottomNav` / `GuestBottomNav` — ficam uma só ilha,
///   filtros em cima e separadores em baixo. O selecionado, em ambos, é
///   uma bolha verde ("botão quando selecionado deve ser bolha verde").
/// - Em ecrãs sem navbar (Orçamento, Convidados), usa-se
///   [FloatingFilterBar], a mesma ilha só com os filtros.
class FilterChipsRow extends StatefulWidget {
  final List<FilterBarItem> items;
  final int selected;
  final ValueChanged<int> onSelected;

  /// Carrossel infinito (pedido do utilizador: "faz um carrossel infinito
  /// nos filtros. não nas categorias dos parceiros") — as opções repetem-se
  /// nos dois sentidos. `false` só nas categorias de Parceiros.
  final bool infinite;

  const FilterChipsRow({
    super.key,
    required this.items,
    required this.selected,
    required this.onSelected,
    this.infinite = true,
  });

  /// Altura da linha de filtros — os botões ocupam-na toda ("fill total").
  static const double height = 52;

  @override
  State<FilterChipsRow> createState() => _FilterChipsRowState();
}

/// Carrossel (pedido do utilizador: "os filtros tem que ser em
/// carrossel"): ocupa a largura toda da ilha e o filtro escolhido desliza
/// sempre para o centro.
class _FilterChipsRowState extends State<FilterChipsRow> {
  final _controller = ScrollController();
  final _centerKey = UniqueKey();

  /// Chave por posição "virtual" no carrossel: no modo infinito o índice
  /// real `i % n` repete-se, e cada repetição tem a sua posição. Valores
  /// ≥ 0 vão para a direita, < 0 para a esquerda.
  final Map<int, GlobalKey> _keys = {};

  /// Posição virtual do último filtro tocado, para centrar essa cópia
  /// (e não a primeira) depois de reconstruir.
  int? _tappedVirtual;

  /// Depois de o utilizador arrastar o carrossel, o escolhido volta a
  /// alinhar-se sozinho ("alinha sempre"), com uma pausa para dar tempo
  /// de tocar noutro filtro.
  Timer? _snapBack;
  bool _userScrolling = false;

  bool _onScroll(ScrollNotification n) {
    if (n is ScrollStartNotification && n.dragDetails != null) {
      _userScrolling = true;
      _snapBack?.cancel();
    } else if (n is ScrollEndNotification && _userScrolling) {
      _userScrolling = false;
      _snapBack?.cancel();
      _snapBack = Timer(const Duration(milliseconds: 1600), _center);
    }
    return false;
  }

  GlobalKey _keyFor(int virtual) => _keys.putIfAbsent(virtual, GlobalKey.new);

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _center(animate: false));
  }

  @override
  void didUpdateWidget(covariant FilterChipsRow oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.items.length != widget.items.length) {
      _keys.clear();
      _tappedVirtual = null;
    }
    if (oldWidget.selected != widget.selected ||
        oldWidget.items.length != widget.items.length) {
      WidgetsBinding.instance.addPostFrameCallback((_) => _center());
    }
  }

  @override
  void dispose() {
    _snapBack?.cancel();
    _controller.dispose();
    super.dispose();
  }

  void _center({bool animate = true}) {
    if (!mounted) return;
    final n = widget.items.length;
    final index = widget.selected;
    if (index < 0 || index >= n) return;
    final tapped = _tappedVirtual;
    final virtual = tapped != null && _real(tapped) == index ? tapped : index;
    final ctx = _keys[virtual]?.currentContext;
    if (ctx == null || !_controller.hasClients) return;
    // Centro do escolhido em `fraction` da largura (0.5 = meio; com a
    // navbar, por cima do separador ativo). `alignment` do ensureVisible
    // é a posição da borda esquerda em (largura − largura do botão).
    final fraction = FilterAnchorScope.of(context);
    final viewport = _controller.position.viewportDimension;
    final chipWidth = (ctx.findRenderObject() as RenderBox?)?.size.width ?? 0;
    final room = viewport - chipWidth;
    final alignment =
        room <= 0 ? 0.5 : (fraction * viewport - chipWidth / 2) / room;
    Scrollable.ensureVisible(
      ctx,
      alignment: alignment,
      duration: animate ? const Duration(milliseconds: 320) : Duration.zero,
      curve: Curves.easeOutCubic,
    );
  }

  int _real(int virtual) {
    final n = widget.items.length;
    return ((virtual % n) + n) % n;
  }

  Widget _chip(int virtual) {
    final i = _real(virtual);
    return _FilterBarChip(
      key: _keyFor(virtual),
      item: widget.items[i],
      selected: i == widget.selected,
      onTap: () {
        _tappedVirtual = virtual;
        if (i == widget.selected) {
          _center();
        } else {
          widget.onSelected(i);
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final n = widget.items.length;
    if (n == 0) return const SizedBox(height: FilterChipsRow.height);
    return SizedBox(
      height: FilterChipsRow.height,
      child: NotificationListener<ScrollNotification>(
        onNotification: _onScroll,
        child: widget.infinite
          ? CustomScrollView(
              controller: _controller,
              scrollDirection: Axis.horizontal,
              center: _centerKey,
              slivers: [
                // Para a esquerda: -1, -2, … (lista "ao contrário").
                SliverList(
                  delegate: SliverChildBuilderDelegate(
                    (context, j) => _chip(-(j + 1)),
                  ),
                ),
                SliverList(
                  key: _centerKey,
                  delegate: SliverChildBuilderDelegate(
                    (context, i) => _chip(i),
                  ),
                ),
              ],
            )
          : LayoutBuilder(
              builder: (context, constraints) {
                // Margem lateral para o primeiro e o último também
                // conseguirem chegar ao ponto de alinhamento.
                final side = constraints.maxWidth;
                return SingleChildScrollView(
                  controller: _controller,
                  scrollDirection: Axis.horizontal,
                  padding: EdgeInsets.symmetric(horizontal: side),
                  child: Row(
                    children: [for (var i = 0; i < n; i++) _chip(i)],
                  ),
                );
              },
            ),
      )
    );
  }
}

/// Ilha só com filtros, no lugar da navbar (ecrãs sem navbar).
/// Usar dentro de um `Stack` com `Positioned(left: 0, right: 0, bottom: 0)`.
class FloatingFilterBar extends StatelessWidget {
  final List<FilterBarItem> items;
  final int selected;
  final ValueChanged<int> onSelected;

  const FloatingFilterBar({
    super.key,
    required this.items,
    required this.selected,
    required this.onSelected,
  });

  /// Altura da navbar sem filtros: 10 + 50 + 10.
  static const double _navHeight = 70;

  /// Margem inferior a dar a listas que passam por baixo da ilha:
  /// [aboveNav] `true` quando os filtros estão ligados à navbar.
  static double bottomPadding({required bool aboveNav}) =>
      26 + FilterChipsRow.height + (aboveNav ? _navHeight : 0) + 24;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      top: false,
      minimum: const EdgeInsets.fromLTRB(16, 0, 16, 26),
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(AppRadius.xxl),
          boxShadow: AppTheme.navBarShadow,
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(AppRadius.xxl),
          child: FilterChipsRow(
            items: items,
            selected: selected,
            onSelected: onSelected,
          ),
        ),
      ),
    );
  }
}

class _FilterBarChip extends StatelessWidget {
  final FilterBarItem item;
  final bool selected;
  final VoidCallback onTap;

  const _FilterBarChip({
    super.key,
    required this.item,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    // Selecionado = bolha verde com texto branco; restantes = texto
    // secundário sobre o branco da ilha.
    final fg = selected ? Colors.white : AppTheme.inkMuted;
    return Semantics(
      button: true,
      selected: selected,
      child: SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          curve: Curves.easeOut,
          height: FilterChipsRow.height,
          padding: EdgeInsets.only(
            left: 18,
            right: item.count == null ? 18 : 10,
          ),
          decoration: BoxDecoration(
            color: selected ? AppTheme.accentOliveDark : Colors.transparent,
            borderRadius: BorderRadius.circular(AppRadius.pill),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (item.icon != null) ...[
                Icon(item.icon, size: 18, color: fg),
                const SizedBox(width: 6),
              ],
              Text(
                item.label,
                style: TextStyle(
                  fontSize: AppFontSize.base,
                  fontWeight: selected ? FontWeight.w700 : FontWeight.w400,
                  color: fg,
                ),
              ),
              if (item.count != null) ...[
                const SizedBox(width: 6),
                Container(
                  constraints: const BoxConstraints(minWidth: 22),
                  height: 22,
                  padding: const EdgeInsets.symmetric(horizontal: 6),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: selected
                        ? Colors.white.withValues(alpha: 0.22)
                        : AppTheme.surface,
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                  ),
                  child: Text(
                    '${item.count}',
                    style: TextStyle(
                      fontSize: AppFontSize.xs,
                      fontWeight: FontWeight.w700,
                      color: fg,
                    ),
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

/// Onde centrar o filtro escolhido, como fração da largura (0–1). Posto
/// pela navbar à volta dos filtros para o escolhido ficar sempre alinhado
/// com o separador ativo (pedido do utilizador: "alinha sempre com o botão
/// selecionado na navbar principal e une-os").
class FilterAnchorScope extends InheritedWidget {
  final double fraction;

  const FilterAnchorScope({
    super.key,
    required this.fraction,
    required super.child,
  });

  static double of(BuildContext context) =>
      context.dependOnInheritedWidgetOfExactType<FilterAnchorScope>()?.fraction ??
      0.5;

  @override
  bool updateShouldNotify(FilterAnchorScope oldWidget) =>
      oldWidget.fraction != fraction;
}

/// Corpo da navbar com filtros ligados por cima ([top]). Sem [top] devolve
/// só [navRow]. Com [top]: filtros, linha divisória e separadores; por
/// trás, uma "coluna" verde da largura da bolha do separador ativo que
/// sobe até aos filtros — o filtro escolhido (alinhado por cima dela) e a
/// bolha ficam unidos numa só forma.
class ConnectedFilterNav extends StatelessWidget {
  final Widget? top;
  final Widget navRow;
  final int activeIndex;
  final int slots;

  const ConnectedFilterNav({
    super.key,
    required this.top,
    required this.navRow,
    required this.activeIndex,
    required this.slots,
  });

  /// Padding horizontal da linha de separadores (igual nas navbars).
  static const double _rowPadding = 8;

  /// Bolha do separador ativo: 42 de diâmetro, centrada a
  /// 10 (padding da navbar) + 4 (padding do separador) + 21 abaixo da
  /// linha divisória.
  static const double _bubble = 42;
  static const double _bubbleCenterBelowDivider = 10 + 4 + 21;

  @override
  Widget build(BuildContext context) {
    final filters = top;
    if (filters == null) return navRow;
    return LayoutBuilder(
      builder: (context, constraints) {
        final width = constraints.maxWidth;
        final slot = (width - 2 * _rowPadding) / slots;
        final x = _rowPadding + slot * (activeIndex + 0.5);
        const dividerY = FilterChipsRow.height;
        const bubbleBottom =
            dividerY + 1 + _bubbleCenterBelowDivider + _bubble / 2;
        return Stack(
          children: [
            const Positioned(
              left: 16,
              right: 16,
              top: dividerY,
              height: 1,
              child: ColoredBox(color: AppTheme.borderMuted),
            ),
            if (activeIndex >= 0)
              Positioned(
                left: x - _bubble / 2,
                width: _bubble,
                top: 0,
                height: bubbleBottom,
                child: const DecoratedBox(
                  decoration: BoxDecoration(
                    color: AppTheme.accentOliveDark,
                    borderRadius: BorderRadius.all(
                      Radius.circular(_bubble / 2),
                    ),
                  ),
                ),
              ),
            Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                FilterAnchorScope(
                  fraction: activeIndex >= 0 ? x / width : 0.5,
                  child: filters,
                ),
                const SizedBox(height: 1),
                navRow,
              ],
            ),
          ],
        );
      },
    );
  }
}
