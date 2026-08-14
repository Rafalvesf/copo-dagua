import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../core/wedding/wedding_nav_icon.dart';

enum AppTab { home, wedding, guests, checklist, partners, budget, seating }

class FloatingBottomNav extends ConsumerWidget {
  final AppTab current;

  const FloatingBottomNav({super.key, required this.current});

  static const _weddingIconSize = 72.0;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingIcon = ref.watch(weddingNavIconProvider);

    // Stack em vez de só a Row: o boneco do casal fica maior do que a
    // pílula (fica de fora do fluxo normal, sem nenhum limite imposto
    // pela navbar) e sai ligeiramente por cima dela, em vez de esticar
    // a pílula toda para o acomodar.
    return SizedBox(
      height: _weddingIconSize,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.bottomCenter,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(
              color: AppTheme.ink,
              borderRadius: BorderRadius.circular(999),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.28),
                  blurRadius: 24,
                  offset: const Offset(0, 10),
                ),
              ],
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _NavIcon(
                  icon: Icons.home_rounded,
                  active: current == AppTab.home,
                  onTap: () => context.go('/home'),
                ),
                // Espaço reservado para o boneco do casal, que é
                // desenhado por cima (fora da Row) mais abaixo.
                const SizedBox(width: 56),
                _NavIcon(
                  icon: Icons.storefront_rounded,
                  active: current == AppTab.partners,
                  onTap: () => context.go('/partners'),
                ),
              ],
            ),
          ),
          Positioned(
            bottom: 6,
            child: _SquishyWeddingIcon(
              assetPath: weddingIcon.assetPath,
              size: _weddingIconSize,
              zoom: weddingIcon.zoom,
              onTap: () => context.go('/wedding'),
            ),
          ),
        ],
      ),
    );
  }
}

/// Boneco central da navbar. Ao tocar, "espreme" (squash/stretch) e
/// volta com um pequeno ressalto elástico.
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
            alignment: Alignment.bottomCenter,
            transform: Matrix4.identity()
              ..scaleByDouble(1 + t * 0.18, 1 - t * 0.22, 1, 1),
            child: child,
          );
        },
        child: ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: Transform.scale(
            scale: widget.zoom,
            child: Image.asset(
              widget.assetPath,
              width: widget.size,
              height: widget.size,
              fit: BoxFit.cover,
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
          color: active
              ? Colors.white.withValues(alpha: 0.18)
              : Colors.transparent,
          shape: BoxShape.circle,
        ),
        child: Icon(icon, color: Colors.white, size: size),
      ),
    );
  }
}
