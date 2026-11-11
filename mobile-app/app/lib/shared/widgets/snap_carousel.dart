import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Carrossel de cartões da largura do ecrã (menos as margens), que prende
/// um cartão de cada vez, com pontos por baixo (pedido 2026-11-11 —
/// Eventos, Parceiros, Loja e sugestões do painel).
class SnapCarousel extends StatefulWidget {
  final int itemCount;
  final double height;
  final IndexedWidgetBuilder itemBuilder;
  const SnapCarousel({super.key, required this.itemCount, required this.height, required this.itemBuilder});

  @override
  State<SnapCarousel> createState() => _SnapCarouselState();
}

class _SnapCarouselState extends State<SnapCarousel> {
  int _page = 0;
  PageController? _controller;
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
          builder: (context, c) => SizedBox(
            height: widget.height,
            child: PageView.builder(
              controller: _controllerFor(c.maxWidth),
              itemCount: widget.itemCount,
              onPageChanged: (i) => setState(() => _page = i),
              itemBuilder: (context, i) => Padding(
                padding: const EdgeInsets.symmetric(horizontal: 6),
                child: widget.itemBuilder(context, i),
              ),
            ),
          ),
        ),
        if (widget.itemCount > 1) ...[
          const SizedBox(height: 10),
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
