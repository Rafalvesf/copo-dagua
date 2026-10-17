import 'dart:async';

import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';

/// Uma opção dos filtros.
class FilterBarItem {
  final String label;
  final IconData? icon;

  /// Quando escolhido, mostra só o ícone (categorias de Parceiros —
  /// pedido do utilizador: "fica só o ícone quando selecionado").
  final bool iconOnlyWhenSelected;

  const FilterBarItem(
    this.label, {
    this.icon,
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
    this.visible = 3,
    this.stacked = false,
  });

  /// Quantos filtros cabem à vista (3; 4 nas categorias de Parceiros,
  /// para ficarem nas mesmas colunas da navbar — pedido 2026-10-17).
  final int visible;

  /// Ícone em cima e texto por baixo (categorias de Parceiros); o
  /// escolhido fica com a mesma pílula da navbar principal.
  final bool stacked;

  /// Altura da linha de filtros — os botões ocupam-na toda ("fill total").
  static const double height = 52;

  /// Altura da linha com ícone e texto por baixo.
  static const double stackedHeight = 72;

  double get rowHeight => stacked ? stackedHeight : height;

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
  bool get _scrolls => _n > widget.visible;
  bool get _loops => _scrolls && widget.infinite;

  int _initialPage() => _loops ? _loopBase * _n + widget.selected : widget.selected;

  PageController _controllerFor() => _controller ??= PageController(
        viewportFraction: 1 / widget.visible,
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
      stacked: widget.stacked,
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
    if (_n == 0) return SizedBox(height: widget.rowHeight);
    if (!_scrolls) {
      return SizedBox(
        height: widget.rowHeight,
        child: Row(
          children: [
            for (var i = 0; i < _n; i++) Expanded(child: _chip(i)),
          ],
        ),
      );
    }
    return SizedBox(
      height: widget.rowHeight,
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
      26 + (aboveNav ? FilterChipsRow.height + _navHeight : _navHeight) + 24;

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
          // Sozinha, a barra de filtros fica com a mesma altura e margens
          // da navbar principal (pedido 2026-10-17).
          child: Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: 8,
              vertical: (_navHeight - FilterChipsRow.height) / 2,
            ),
            child: FilterChipsRow(
              items: items,
              selected: selected,
              onSelected: onSelected,
            ),
          ),
        ),
      ),
    );
  }
}

class _FilterBarChip extends StatelessWidget {
  static const double _inset = 4;
  static const double _pillHeight = 42;

  final FilterBarItem item;
  final bool selected;
  final bool stacked;
  final VoidCallback onTap;

  const _FilterBarChip({
    super.key,
    required this.item,
    required this.selected,
    required this.onTap,
    this.stacked = false,
  });

  /// Ícone dentro da mesma pílula da navbar (42 × 67) e o texto por
  /// baixo.
  /// Escolhida: só a pílula, centrada e com a altura da linha. As
  /// outras: ícone e, por baixo, o nome — em duas linhas quando tem mais
  /// de 5 letras (pedido 2026-10-17).
  Widget _stacked() {
    return Semantics(
      button: true,
      selected: selected,
      label: item.label,
      child: SnappyTap(
        onTap: onTap,
        child: LayoutBuilder(
          builder: (context, c) {
            final pillH = (c.maxHeight.isFinite ? c.maxHeight : FilterChipsRow.stackedHeight) - 2 * _inset;
            return Center(
              child: AnimatedSwitcher(
                duration: const Duration(milliseconds: 180),
                switchInCurve: Curves.easeOut,
                child: selected
                    ? Container(
                        key: const ValueKey('on'),
                        width: _pillHeight * 1.6,
                        height: pillH,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          color: AppTheme.accentOliveDark,
                          borderRadius: BorderRadius.circular(AppRadius.xxl - _inset),
                        ),
                        // Ícone um pouco maior quando escolhido (pedido 2026-10-17).
                        child: Icon(item.icon ?? Icons.circle_outlined, size: 28, color: Colors.white),
                      )
                    : Padding(
                        key: const ValueKey('off'),
                        padding: const EdgeInsets.symmetric(horizontal: 2),
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(item.icon ?? Icons.circle_outlined, size: 22, color: AppTheme.inkMuted),
                            const SizedBox(height: 4),
                            Text(
                              splitFilterLabel(item.label),
                              maxLines: 2,
                              textAlign: TextAlign.center,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(
                                height: 1.15,
                                fontSize: AppFontSize.sm,
                                color: AppTheme.inkMuted,
                              ),
                            ),
                          ],
                        ),
                      ),
              ),
            );
          },
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (stacked) return _stacked();
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
          // Mesma espessura da pílula da navbar principal (NavBubble, 42)
          // — pedido 2026-10-17.
          height: _pillHeight,
          margin: const EdgeInsets.symmetric(
            horizontal: _inset,
            vertical: (FilterChipsRow.height - _pillHeight) / 2,
          ),
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
        // Mesmo recuo da linha de separadores (8) — as colunas e a
        // pílula ficam alinhadas com as da navbar principal.
        Padding(padding: const EdgeInsets.symmetric(horizontal: 8), child: filters),
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

/// Parte um rótulo com mais de 5 letras em duas linhas: no espaço mais
/// perto do meio, ou — numa só palavra — numa fronteira de sílaba
/// (vogal | consoante + vogal), com hífen ("Espa-ços", "Foto-grafia").
String splitFilterLabel(String label) {
  final text = label.trim();
  if (text.replaceAll(' ', '').length <= 5) return text;
  final mid = text.length / 2;
  if (text.contains(' ')) {
    var best = -1;
    for (var i = 0; i < text.length; i++) {
      if (text[i] == ' ' && (best < 0 || (i - mid).abs() < (best - mid).abs())) best = i;
    }
    return '${text.substring(0, best)}\n${text.substring(best + 1)}';
  }
  bool vowel(String ch) => 'aeiouáàâãéêíóôõúAEIOUÁÀÂÃÉÊÍÓÔÕÚ'.contains(ch);
  const keep = {'ch', 'lh', 'nh', 'qu', 'gu'};
  var best = -1;
  for (var i = 2; i < text.length - 2; i++) {
    final prev = text[i - 1];
    final cur = text[i];
    final next = text[i + 1];
    if (!vowel(prev) || vowel(cur) || !vowel(next)) continue;
    if (keep.contains('$prev$cur'.toLowerCase())) continue;
    if (best < 0 || (i - mid).abs() < (best - mid).abs()) best = i;
  }
  // Grupos consonânticos ("gr", "br", "pl"…): parte antes deles
  // ("Foto-grafia").
  for (var i = 2; i < text.length - 2; i++) {
    final c1 = text[i];
    final c2 = text[i + 1].toLowerCase();
    if (vowel(text[i - 1]) && !vowel(c1) && (c2 == 'r' || c2 == 'l') && 'bcdfgptv'.contains(c1.toLowerCase()) && vowel(text[i + 2])) {
      if (best < 0 || (i - mid).abs() < (best - mid).abs()) best = i;
    }
  }
  // Dígrafos "ch/lh/nh": parte antes deles.
  for (var i = 2; i < text.length - 2; i++) {
    final pair = text.substring(i, i + 2).toLowerCase();
    if ((pair == 'ch' || pair == 'lh' || pair == 'nh') && vowel(text[i - 1]) && vowel(text[i + 2])) {
      if (best < 0 || (i - mid).abs() < (best - mid).abs()) best = i;
    }
  }
  if (best < 0) best = mid.round();
  return '${text.substring(0, best)}-\n${text.substring(best)}';
}
