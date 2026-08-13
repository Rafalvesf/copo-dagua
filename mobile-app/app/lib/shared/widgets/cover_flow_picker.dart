import 'dart:async';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Carrossel horizontal estilo "cover flow" (como a roda de álbuns de um
/// iPod): a opção centrada fica maior, as vizinhas ficam mais pequenas e
/// semi-transparentes, e o gesto de deslizar tem inércia/snap suave. Sem
/// anéis, checkmarks ou recortes circulares — só o tamanho comunica qual
/// está selecionada. Extraído do seletor de ícones da aba de casamento
/// para ser reutilizado em qualquer seleção de uma opção entre várias.
class CoverFlowPicker<T> extends StatefulWidget {
  final List<T> options;
  final T selected;
  final ValueChanged<T> onChanged;
  final Widget Function(BuildContext context, T option, bool isSelected)
  itemBuilder;
  final double itemExtent;
  final double viewportFraction;
  final double minScale;

  const CoverFlowPicker({
    super.key,
    required this.options,
    required this.selected,
    required this.onChanged,
    required this.itemBuilder,
    this.itemExtent = 92,
    this.viewportFraction = 0.34,
    this.minScale = 0.78,
  });

  @override
  State<CoverFlowPicker<T>> createState() => _CoverFlowPickerState<T>();
}

class _CoverFlowPickerState<T> extends State<CoverFlowPicker<T>> {
  late final PageController _controller;
  double _page = 0;
  Timer? _wheelSnapTimer;

  // O PageView usa um espaço de índices muito maior — um múltiplo grande
  // do número real de opções — só para dar a sensação de loop infinito em
  // ambas as direções: nunca se chega a uma ponta vazia, seja a arrastar
  // seja com a roda do rato.
  static const _loopSpan = 2000;

  int get _count => widget.options.length;

  int _realIndexOf(int rawIndex) => rawIndex % _count;

  @override
  void initState() {
    super.initState();
    final initialRealIndex = widget.options.indexOf(widget.selected).clamp(
      0,
      _count - 1,
    );
    final initialPage = (_loopSpan ~/ 2) * _count + initialRealIndex;
    _page = initialPage.toDouble();
    _controller =
        PageController(
          viewportFraction: widget.viewportFraction,
          initialPage: initialPage,
        )..addListener(() {
          setState(() => _page = _controller.page ?? _page);
        });
  }

  @override
  void dispose() {
    _wheelSnapTimer?.cancel();
    _controller.dispose();
    super.dispose();
  }

  // A roda do rato num browser desktop só emite delta vertical — sem
  // isto o carrossel horizontal não reage a scroll nenhum, só a
  // arrastar. Depois de uma pausa no scroll, ajusta suavemente para a
  // opção mais próxima, como o "click" da roda de um iPod.
  void _onPointerSignal(PointerSignalEvent event) {
    if (event is! PointerScrollEvent || !_controller.hasClients) return;
    final target = (_controller.offset + event.scrollDelta.dy).clamp(
      0.0,
      _controller.position.maxScrollExtent,
    );
    _controller.jumpTo(target);

    _wheelSnapTimer?.cancel();
    _wheelSnapTimer = Timer(const Duration(milliseconds: 160), () {
      if (!_controller.hasClients) return;
      _controller.animateToPage(
        _page.round(),
        duration: const Duration(milliseconds: 220),
        curve: Curves.easeOutBack,
      );
    });
  }

  void _onSettle(int rawIndex) {
    widget.onChanged(widget.options[_realIndexOf(rawIndex)]);
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: widget.itemExtent + 24,
      child: Listener(
        onPointerSignal: _onPointerSignal,
        child: PageView.builder(
          controller: _controller,
          itemCount: _loopSpan * _count,
          onPageChanged: _onSettle,
          itemBuilder: (context, rawIndex) {
            final realIndex = _realIndexOf(rawIndex);
            final option = widget.options[realIndex];
            final distance = (_page - rawIndex).abs().clamp(0.0, 1.0);
            final scale = 1.0 - distance * (1 - widget.minScale);
            return Center(
              child: MouseRegion(
                cursor: SystemMouseCursors.click,
                child: GestureDetector(
                onTap: () => _controller.animateToPage(
                  rawIndex,
                  duration: const Duration(milliseconds: 220),
                  curve: Curves.easeOutBack,
                ),
                child: Opacity(
                  opacity: 1.0 - distance * 0.35,
                  child: Transform.scale(
                    scale: scale,
                    // O realce (sombra/cor) segue a posição em tempo real
                    // do carrossel — não só o valor confirmado — para
                    // aparecer já durante o gesto de arrastar, não apenas
                    // depois de largar.
                    child: widget.itemBuilder(context, option, distance < 0.5),
                  ),
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

/// Rótulo de texto para usar como item de um [CoverFlowPicker] de
/// categorias/filtros: quando selecionado, ganha um fundo verde e a
/// sombra partilhada pelos cartões da app; a opção "Todos" (`big: true`)
/// arranca ligeiramente maior do que as restantes, e o realce de escala
/// do carrossel aplica-se por cima, proporcionalmente, a todas.
class CategoryPillLabel extends StatelessWidget {
  final String label;
  final bool selected;
  final bool big;

  const CategoryPillLabel({
    super.key,
    required this.label,
    required this.selected,
    this.big = false,
  });

  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 180),
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: BoxDecoration(
        color: selected ? AppColors.greenDark : Colors.transparent,
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        label,
        style: TextStyle(
          fontWeight: FontWeight.w700,
          fontSize: big ? 15 : 13,
          color: selected ? Colors.white : AppTheme.ink,
        ),
      ),
    );
  }
}
