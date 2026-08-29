import 'package:flutter/material.dart';

/// Lista de cartões que entram em cascata (fade + deslize de baixo para
/// cima), um pouco depois um do outro — não há nenhuma biblioteca de
/// animação no projeto, por isso um único [AnimationController] conduz
/// todos os filhos através de um [Interval] por índice, em vez de um
/// `AnimationController` por cartão. Reconstruir com uma [listKey]
/// diferente (ex: ao mudar de dia num calendário) reinicia a cascata.
class StaggeredFadeIn extends StatefulWidget {
  final List<Widget> children;
  final Object? listKey;
  final Duration itemDuration;
  final Duration stagger;
  final double slideOffset;

  const StaggeredFadeIn({
    super.key,
    required this.children,
    this.listKey,
    this.itemDuration = const Duration(milliseconds: 320),
    this.stagger = const Duration(milliseconds: 45),
    this.slideOffset = 18,
  });

  @override
  State<StaggeredFadeIn> createState() => _StaggeredFadeInState();
}

class _StaggeredFadeInState extends State<StaggeredFadeIn>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: _totalDuration());
    _controller.forward();
  }

  Duration _totalDuration() {
    final count = widget.children.length;
    if (count == 0) return widget.itemDuration;
    return widget.itemDuration + widget.stagger * (count - 1);
  }

  @override
  void didUpdateWidget(covariant StaggeredFadeIn oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.listKey != widget.listKey) {
      _controller.duration = _totalDuration();
      _controller.forward(from: 0);
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final total = _totalDuration().inMilliseconds;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        for (var i = 0; i < widget.children.length; i++)
          _buildItem(i, total),
      ],
    );
  }

  Widget _buildItem(int index, int totalMs) {
    final startMs = widget.stagger.inMilliseconds * index;
    final endMs = startMs + widget.itemDuration.inMilliseconds;
    final interval = Interval(
      totalMs == 0 ? 0 : (startMs / totalMs).clamp(0.0, 1.0),
      totalMs == 0 ? 1 : (endMs / totalMs).clamp(0.0, 1.0),
      curve: Curves.easeOutCubic,
    );
    final animation = CurvedAnimation(parent: _controller, curve: interval);

    return AnimatedBuilder(
      animation: animation,
      child: widget.children[index],
      builder: (context, child) => Opacity(
        opacity: animation.value,
        child: Transform.translate(
          offset: Offset(0, widget.slideOffset * (1 - animation.value)),
          child: child,
        ),
      ),
    );
  }
}
