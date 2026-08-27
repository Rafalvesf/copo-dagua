import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../core/wedding/wedding_nav_icon.dart';

enum AppTab { home, wedding, guests, checklist, partners, budget, seating }

/// Doca branca encostada ao fundo do ecrã (cantos arredondados só em
/// cima, sem margem lateral nem espaço por baixo) — o boneco do casal
/// é um botão circular que sai ligeiramente por cima do canto direito
/// da doca, como destaque.
class FloatingBottomNav extends ConsumerWidget {
  final AppTab current;

  const FloatingBottomNav({super.key, required this.current});

  static const _accentSize = 60.0;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingIcon = ref.watch(weddingNavIconProvider);

    return Stack(
      clipBehavior: Clip.none,
      children: [
        DecoratedBox(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(32),
              topRight: Radius.circular(32),
            ),
            boxShadow: AppTheme.cardShadow,
          ),
          child: SafeArea(
            top: false,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(
                20,
                14,
                20 + _accentSize + 8,
                14,
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  _NavIcon(
                    icon: Icons.home_rounded,
                    active: current == AppTab.home,
                    onTap: () => context.go('/home'),
                  ),
                  _NavIcon(
                    icon: Icons.storefront_rounded,
                    active: current == AppTab.partners,
                    onTap: () => context.go('/partners'),
                  ),
                ],
              ),
            ),
          ),
        ),
        Positioned(
          top: -_accentSize * 0.3,
          right: 16,
          child: _SquishyWeddingIcon(
            assetPath: weddingIcon.assetPath,
            size: _accentSize,
            zoom: weddingIcon.zoom,
            onTap: () => context.go('/wedding'),
          ),
        ),
      ],
    );
  }
}

/// Botão circular de destaque com o boneco do casal. Ao tocar, "espreme"
/// (squash/stretch) e volta com um pequeno ressalto elástico.
class _SquishyWeddingIcon extends StatefulWidget {
  final String assetPath;
  final double size;
  final double zoom;
  final VoidCallback onTap;

  const _SquishyWeddingIcon({
    required this.assetPath,
    required this.size,
    this.zoom = 1,
    required this.onTap,
  });

  @override
  State<_SquishyWeddingIcon> createState() => _SquishyWeddingIconState();
}

class _SquishyWeddingIconState extends State<_SquishyWeddingIcon>
    with SingleTickerProviderStateMixin {
  late final _controller = AnimationController(vsync: this, value: 0);

  void _squish() {
    _controller.animateTo(
      1,
      duration: const Duration(milliseconds: 90),
      curve: Curves.easeOut,
    );
  }

  void _release() {
    _controller.animateTo(
      0,
      duration: const Duration(milliseconds: 500),
      curve: Curves.elasticOut,
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => _squish(),
      onTapCancel: _release,
      onTapUp: (_) {
        _release();
        widget.onTap();
      },
      child: AnimatedBuilder(
        animation: _controller,
        builder: (context, child) {
          final t = _controller.value;
          return Transform(
            alignment: Alignment.center,
            transform: Matrix4.identity()
              ..scaleByDouble(1 + t * 0.18, 1 - t * 0.22, 1, 1),
            child: child,
          );
        },
        child: Container(
          width: widget.size,
          height: widget.size,
          padding: const EdgeInsets.all(3),
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: Colors.white,
            boxShadow: AppTheme.cardShadowStrong,
          ),
          child: ClipOval(
            child: Transform.scale(
              scale: widget.zoom,
              child: Image.asset(
                widget.assetPath,
                fit: BoxFit.cover,
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _NavIcon extends StatelessWidget {
  final IconData icon;
  final bool active;
  final VoidCallback onTap;

  const _NavIcon({
    required this.icon,
    required this.active,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    const size = 22.0;

    return InkWell(
      borderRadius: BorderRadius.circular(999),
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 2),
        padding: const EdgeInsets.all(13),
        decoration: BoxDecoration(
          color: active ? AppTheme.accentLavender : Colors.transparent,
          shape: BoxShape.circle,
        ),
        child: Icon(
          icon,
          color: active ? Colors.white : AppTheme.ink,
          size: size,
        ),
      ),
    );
  }
}
