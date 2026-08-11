import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../core/wedding/wedding_nav_icon.dart';

enum AppTab { home, wedding, guests, checklist, suppliers }

class FloatingBottomNav extends ConsumerWidget {
  final AppTab current;

  const FloatingBottomNav({super.key, required this.current});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingIcon = ref.watch(weddingNavIconProvider);

    return Container(
      padding: const EdgeInsets.all(8),
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
          // Ícone do casamento no centro, ligeiramente maior — escolhido
          // pelo utilizador entre as opções de wedding_nav_icon.dart.
          // Fornecedores e início ficam logo ao lado dele.
          _NavIcon(
            icon: Icons.favorite_rounded,
            imagePath: weddingIcon.assetPath,
            active: current == AppTab.wedding,
            large: true,
            onTap: () => context.go('/wedding'),
          ),
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
    );
  }
}

class _NavIcon extends StatelessWidget {
  final IconData icon;
  final String? imagePath;
  final bool active;
  final bool large;
  final VoidCallback onTap;

  const _NavIcon({
    required this.icon,
    this.imagePath,
    required this.active,
    this.large = false,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final size = large ? 38.0 : 22.0;
    return InkWell(
      borderRadius: BorderRadius.circular(999),
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 2),
        padding: EdgeInsets.all(large ? 11 : 13),
        decoration: BoxDecoration(
          color: active
              ? Colors.white.withValues(alpha: 0.18)
              : Colors.transparent,
          shape: BoxShape.circle,
        ),
        child: imagePath == null
            ? Icon(icon, color: Colors.white, size: size)
            : ClipOval(
                child: Image.asset(
                  imagePath!,
                  width: size,
                  height: size,
                  fit: BoxFit.cover,
                ),
              ),
      ),
    );
  }
}
