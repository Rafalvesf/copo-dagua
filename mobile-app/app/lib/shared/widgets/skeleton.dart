import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Bloco "a carregar" que pulsa suavemente (redesign 2026-10, estado
/// "a carregar" do canvas) — substitui o spinner solto no meio do ecrã.
class SkeletonBox extends StatefulWidget {
  final double? width;
  final double height;
  final double radius;
  final Color color;

  const SkeletonBox({
    super.key,
    this.width,
    required this.height,
    this.radius = AppRadius.lg,
    this.color = AppTheme.surface,
  });

  @override
  State<SkeletonBox> createState() => _SkeletonBoxState();
}

class _SkeletonBoxState extends State<SkeletonBox>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 900),
  )..repeat(reverse: true);

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return FadeTransition(
      opacity: Tween(begin: 0.55, end: 1.0).animate(
        CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
      ),
      child: Container(
        width: widget.width,
        height: widget.height,
        decoration: BoxDecoration(
          color: widget.color,
          borderRadius: BorderRadius.circular(widget.radius),
        ),
      ),
    );
  }
}
