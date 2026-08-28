import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../core/wedding/wedding_nav_icon.dart';

enum AppTab {
  home,
  wedding,
  guests,
  checklist,
  partners,
  budget,
  seating,
  chat,
  mascot,
}

/// Doca flutuante em dois grupos separados — a pílula branca com os 3
/// separadores de ícone (Home, Parceiros, Chat) e, à parte, o boneco
/// do casal como botão circular independente. O ativo (entre os 3
/// ícones) ganha um círculo preenchido a `AppTheme.ink`. O boneco do
/// casal é sempre uma foto/ilustração circular (nunca um ícone
/// Material), com um anel lavanda que passa a `AppTheme.ink` quando
/// este é o separador ativo.
class FloatingBottomNav extends ConsumerWidget {
  final AppTab current;

  const FloatingBottomNav({super.key, required this.current});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingIcon = ref.watch(weddingNavIconProvider);

    return SafeArea(
      top: false,
      minimum: const EdgeInsets.only(bottom: 12),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Expanded(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(999),
                  boxShadow: AppTheme.cardShadowStrong,
                ),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
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
                      _NavIcon(
                        icon: Icons.forum_rounded,
                        active: current == AppTab.chat,
                        onTap: () => context.go('/chat'),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            const SizedBox(width: 14),
            _SquishyWeddingIcon(
              assetPath: weddingIcon.assetPath,
              zoom: weddingIcon.zoom,
              active: current == AppTab.mascot,
              onTap: () => context.go('/mascot'),
            ),
          ],
        ),
      ),
    );
  }
}

/// Botão circular de destaque com o boneco do casal. Ao tocar, "espreme"
/// (squash/stretch) e volta com um pequeno ressalto elástico.
class _SquishyWeddingIcon extends StatefulWidget {
  final String assetPath;
  final double zoom;
  final bool active;
  final VoidCallback onTap;

  const _SquishyWeddingIcon({
    required this.assetPath,
    this.zoom = 1,
    required this.active,
    required this.onTap,
  });

  @override
  State<_SquishyWeddingIcon> createState() => _SquishyWeddingIconState();
}

class _SquishyWeddingIconState extends State<_SquishyWeddingIcon>
    with SingleTickerProviderStateMixin {
  static const _size = 48.0;

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
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          width: _size,
          height: _size,
          padding: EdgeInsets.all(widget.active ? 1.5 : 2.5),
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: widget.active ? AppTheme.ink : AppTheme.accentLavender,
          ),
          child: ClipOval(
            child: Transform.scale(
              scale: widget.zoom,
              child: Image.asset(widget.assetPath, fit: BoxFit.cover),
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
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.all(9),
        decoration: BoxDecoration(
          color: active ? AppTheme.ink : Colors.transparent,
          shape: BoxShape.circle,
        ),
        child: Icon(
          icon,
          color: active ? Colors.white : AppTheme.inkMuted,
          size: size,
        ),
      ),
    );
  }
}
