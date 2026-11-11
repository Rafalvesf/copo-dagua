import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import '../../core/theme/app_theme.dart';

/// Carrossel de cartões da largura do ecrã (menos as margens), que prende
/// um cartão de cada vez, com pontos por baixo (pedido 2026-11-11 —
/// Eventos, Parceiros, Loja e sugestões do painel).
class SnapCarousel extends StatefulWidget {
  final int itemCount;
  /// Altura fixa; sem ela, o carrossel fica com a altura do cartão que
  /// está à vista (cartões de alturas diferentes, sem espaço vazio).
  final double? height;
  final IndexedWidgetBuilder itemBuilder;
  const SnapCarousel({super.key, required this.itemCount, this.height, required this.itemBuilder});

  @override
  State<SnapCarousel> createState() => _SnapCarouselState();
}

const double _shadowPad = 18;

class _SnapCarouselState extends State<SnapCarousel> {
  int _page = 0;
  PageController? _controller;
  final Map<int, double> _heights = {};
  double _fraction = 0;

  @override
  void dispose() {
    _controller?.dispose();
    super.dispose();
  }

  PageController _controllerFor(double width) {
    // Cada cartão ocupa a largura do ecrã menos as margens; 6 de cada lado
    // separam os cartões.
    final fraction = ((width - 2 * AppTheme.screenMargin + 12) / width).clamp(0.5, 1.0);
    if (_controller == null || (fraction - _fraction).abs() > 0.001) {
      _controller?.dispose();
      _fraction = fraction;
      _controller = PageController(viewportFraction: fraction, initialPage: _page);
    }
    return _controller!;
  }

  @override
  Widget build(BuildContext context) {
    final page = widget.itemCount == 0 ? 0 : _page.clamp(0, widget.itemCount - 1);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        LayoutBuilder(
          builder: (context, c) => AnimatedContainer(
            duration: const Duration(milliseconds: 200),
            curve: Curves.easeOut,
            // + espaço por baixo para a sombra dos cartões não ficar cortada
            // (2026-11-11: "olha a sombra por baixo delas").
            height: widget.height != null
                ? widget.height! + _shadowPad
                : (_heights[page] ?? (_heights.isEmpty ? 300 + _shadowPad : _heights.values.first)),
            child: PageView.builder(
              controller: _controllerFor(c.maxWidth),
              itemCount: widget.itemCount,
              onPageChanged: (i) => setState(() => _page = i),
              itemBuilder: (context, i) {
                final card = Padding(
                  padding: const EdgeInsets.fromLTRB(6, 0, 6, _shadowPad),
                  child: widget.itemBuilder(context, i),
                );
                if (widget.height != null) return card;
                return OverflowBox(
                  alignment: Alignment.topCenter,
                  minHeight: 0,
                  maxHeight: double.infinity,
                  child: _Measure(
                    onHeight: (h) {
                      if (!mounted || _heights[i] == h) return;
                      setState(() => _heights[i] = h);
                    },
                    child: card,
                  ),
                );
              },
            ),
          ),
        ),
        if (widget.itemCount > 1) ...[
          const SizedBox(height: 2),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              for (var i = 0; i < widget.itemCount; i++)
                AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  margin: const EdgeInsets.symmetric(horizontal: 3),
                  width: i == page ? 20 : 8,
                  height: 8,
                  decoration: BoxDecoration(
                    color: i == page ? const Color(0xFF4F6B4A) : const Color(0xFFCFC8B8),
                    borderRadius: BorderRadius.circular(4),
                  ),
                ),
            ],
          ),
        ],
      ],
    );
  }
}

/// Diz a altura do filho depois de cada layout.
class _Measure extends SingleChildRenderObjectWidget {
  final ValueChanged<double> onHeight;
  const _Measure({required this.onHeight, required super.child});

  @override
  RenderObject createRenderObject(BuildContext context) => _RenderMeasure(onHeight);

  @override
  void updateRenderObject(BuildContext context, _RenderMeasure renderObject) => renderObject.onHeight = onHeight;
}

class _RenderMeasure extends RenderProxyBox {
  _RenderMeasure(this.onHeight);
  ValueChanged<double> onHeight;
  double? _last;

  @override
  void performLayout() {
    super.performLayout();
    final h = size.height;
    if (h == _last) return;
    _last = h;
    WidgetsBinding.instance.addPostFrameCallback((_) => onHeight(h));
  }
}
