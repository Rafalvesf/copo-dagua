import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';

enum AppTab { home, wedding, guests, checklist, suppliers }

class FloatingBottomNav extends StatelessWidget {
  final AppTab current;

  const FloatingBottomNav({super.key, required this.current});

  @override
  Widget build(BuildContext context) {
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
          // Coração no centro, ligeiramente maior — casamento é a ação
          // principal, fornecedores e início ficam logo ao lado dele.
          _NavIcon(
            icon: Icons.favorite_rounded,
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
  final bool active;
  final bool large;
  final VoidCallback onTap;

  const _NavIcon({
    required this.icon,
    required this.active,
    this.large = false,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(999),
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 2),
        padding: EdgeInsets.all(large ? 15 : 13),
        decoration: BoxDecoration(
          color: active
              ? Colors.white.withValues(alpha: 0.18)
              : Colors.transparent,
          shape: BoxShape.circle,
        ),
        child: Icon(icon, color: Colors.white, size: large ? 26 : 22),
      ),
    );
  }
}
