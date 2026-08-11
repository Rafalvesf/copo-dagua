import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../core/wedding/wedding_nav_icon.dart';

enum AppTab { home, wedding, guests, checklist, suppliers }

class FloatingBottomNav extends ConsumerWidget {
  final AppTab current;

  const FloatingBottomNav({super.key, required this.current});

  static const _weddingIconSize = 92.0;

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
                  icon: Icons.people_alt_rounded,
                  active: current == AppTab.guests,
                  onTap: () => context.go('/guests'),
                ),
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
                  active: current == AppTab.suppliers,
                  onTap: () => context.go('/suppliers'),
                ),
                _NavIcon(
                  icon: Icons.checklist_rounded,
                  active: current == AppTab.checklist,
                  onTap: () => context.go('/checklist'),
                ),
              ],
            ),
          ),
          Positioned(
            bottom: 6,
            child: InkWell(
              borderRadius: BorderRadius.circular(24),
              onTap: () => context.go('/wedding'),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(20),
                child: Image.asset(
                  weddingIcon.assetPath,
                  width: _weddingIconSize,
                  height: _weddingIconSize,
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ),
        ],
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
