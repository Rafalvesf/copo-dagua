import 'dart:async';

import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';

/// Uma opção dos filtros.
class FilterBarItem {
  final String label;
  final IconData? icon;
  final int? count;

  /// Quando escolhido, mostra só o ícone (categorias de Parceiros —
  /// pedido do utilizador: "fica só o ícone quando selecionado").
  final bool iconOnlyWhenSelected;

  const FilterBarItem(
    this.label, {
    this.icon,
    this.count,
    this.iconOnlyWhenSelected = false,
  });
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

/// Carrossel de filtros (redesign 2026-10). Pedidos do utilizador:
/// "carrossel", "infinito" (exceto categorias de Parceiros), "sempre o
/// selecionado à esquerda" e "para cada filtro mostra apenas até 3, sem
/// cortares o texto": a barra mostra no máximo 3 filtros inteiros, cada
/// um com um terço da largura (o texto encolhe se não couber, nunca é
/// cortado), e desliza de filtro em filtro. Com 3 ou menos opções não há
/// carrossel — ficam todas lado a lado, em partes iguais.
class _FilterChipsRowState extends State<FilterChipsRow> {
  static const int _visible = 3;

  /// Centro "virtual" do carrossel infinito: as páginas repetem as opções
  /// para os dois lados a partir daqui.
  static const int _loopBase = 1000;

  PageController? _controller;

  /// Depois de o utilizador arrastar, o escolhido volta sozinho à esquerda
  /// ("sempre o selecionado à esquerda"), com uma pausa para dar tempo de
  /// tocar noutro filtro.
  Timer? _snapBack;
  bool _userScrolling = false;

  int get _n => widget.items.length;
  bool get _scrolls => _n > _visible;
  bool get _loops => _scrolls && widget.infinite;

  int _initialPage() => _loops ? _loopBase * _n + widget.selected : widget.selected;

  PageController _controllerFor() => _controller ??= PageController(
        viewportFraction: 1 / _visible,
        initialPage: _initialPage(),
      );

  int _real(int page) => ((page % _n) + _n) % _n;

  /// Página onde está a cópia do escolhido mais perto da posição atual.
  int _targetPage() {
    final controller = _controller;
    final current = (controller != null && controller.hasClients)
        ? (controller.page ?? controller.initialPage.toDouble()).round()
        : _initialPage();
    if (!_loops) return widget.selected.clamp(0, _n - 1);
    final base = current - _real(current);
    final candidates = [
      base - _n + widget.selected,
      base + widget.selected,
      base + _n + widget.selected,
    ];
    candidates.sort(
      (a, b) => (a - current).abs().compareTo((b - current).abs()),
    );
    return candidates.first;
  }

  void _goToSelected({bool animate = true, int? page}) {
    final controller = _controller;
    if (!mounted || controller == null || !controller.hasClients) return;
    final target = page ?? _targetPage();
    if (animate) {
      controller.animateToPage(
        target,
        duration: const Duration(milliseconds: 320),
        curve: Curves.easeOutCubic,
      );
    } else {
      controller.jumpToPage(target);
    }
  }

  int? _tappedPage;

  @override
  void didUpdateWidget(covariant FilterChipsRow oldWidget) {
    super.didUpdateWidget(oldWidget);
    final layoutChanged = oldWidget.items.length != widget.items.length ||
        oldWidget.infinite != widget.infinite;
    if (layoutChanged) {
      _controller?.dispose();
      _controller = null;
      _tappedPage = null;
      return;
    }
    if (oldWidget.selected != widget.selected) {
      final page = _tappedPage;
      _tappedPage = null;
      WidgetsBinding.instance.addPostFrameCallback(
        (_) => _goToSelected(page: page),
      );
    }
  }

  @override
  void dispose() {
    _snapBack?.cancel();
    _controller?.dispose();
    super.dispose();
  }

  bool _onScroll(ScrollNotification n) {
    if (n is ScrollStartNotification && n.dragDetails != null) {
      _userScrolling = true;
      _snapBack?.cancel();
    } else if (n is ScrollEndNotification && _userScrolling) {
      _userScrolling = false;
      _snapBack?.cancel();
      _snapBack = Timer(const Duration(milliseconds: 1600), _goToSelected);
    }
    return false;
  }

  Widget _chip(int index, {int? page}) {
    return _FilterBarChip(
      item: widget.items[index],
      selected: index == widget.selected,
      onTap: () {
        _snapBack?.cancel();
        if (index == widget.selected) {
          _goToSelected(page: page);
        } else {
          _tappedPage = page;
          widget.onSelected(index);
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_n == 0) return const SizedBox(height: FilterChipsRow.height);
    if (!_scrolls) {
      return SizedBox(
        height: FilterChipsRow.height,
        child: Row(
          children: [
            for (var i = 0; i < _n; i++) Expanded(child: _chip(i)),
          ],
        ),
      );
    }
    return SizedBox(
      height: FilterChipsRow.height,
      child: NotificationListener<ScrollNotification>(
        onNotification: _onScroll,
        child: PageView.builder(
          controller: _controllerFor(),
          padEnds: false,
          itemCount: _loops ? null : _n,
          itemBuilder: (context, page) =>
              _chip(_loops ? _real(page) : page, page: page),
        ),
      ),
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
  static const double _inset = 4;

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
          // Recuo de 4 à volta: a pílula fica concêntrica com o canto
          // arredondado da ilha (28 − 4 ≈ 22, metade da altura 44) em
          // vez de encostar à borda e chocar com o raio da navbar.
          height: FilterChipsRow.height - 2 * _inset,
          margin: const EdgeInsets.all(_inset),
          padding: const EdgeInsets.symmetric(horizontal: 10),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: selected ? AppTheme.accentOliveDark : Colors.transparent,
            borderRadius: BorderRadius.circular(AppRadius.pill),
          ),
          // O texto nunca é cortado: se não couber no terço da barra,
          // encolhe.
          child: selected && item.iconOnlyWhenSelected && item.icon != null
              ? Icon(item.icon, size: 22, color: fg, semanticLabel: item.label)
              : FittedBox(
            fit: BoxFit.scaleDown,
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
      ),
    );
  }
}

/// Corpo da navbar com filtros ligados por cima ([top]): filtros, linha
/// divisória e separadores numa só ilha. Sem [top] devolve só [navRow].
class ConnectedFilterNav extends StatelessWidget {
  final Widget? top;
  final Widget navRow;

  const ConnectedFilterNav({
    super.key,
    required this.top,
    required this.navRow,
  });

  @override
  Widget build(BuildContext context) {
    final filters = top;
    if (filters == null) return navRow;
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        filters,
        const Divider(
          height: 1,
          thickness: 1,
          indent: 16,
          endIndent: 16,
          color: AppTheme.borderMuted,
        ),
        navRow,
      ],
    );
  }
}
