import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../core/wedding/wedding_nav_icon.dart';

enum AppTab { home, partners, chat, wedding }

/// Doca branca encostada ao fundo do ecrã — 4 separadores iguais (Home
/// / Parceiros / Chat / Os noivos), cada um com ícone + rótulo. O
/// separador ativo fica a verde-oliva; o ícone de "Os noivos" usa a
/// ilustração escolhida pelo utilizador em [weddingNavIconProvider]
/// (carrossel movido para o ecrã de Definições) em vez de um ícone
/// Material fixo — por defeito os ursinhos, que já correspondem ao
/// glifo do mockup.
class FloatingBottomNav extends ConsumerWidget {
  final AppTab current;

  const FloatingBottomNav({super.key, required this.current});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingIcon = ref.watch(weddingNavIconProvider);

    return DecoratedBox(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: const BorderRadius.only(
          topLeft: Radius.circular(28),
          topRight: Radius.circular(28),
        ),
        boxShadow: AppTheme.cardShadow,
      ),
      child: SafeArea(
        top: false,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(8, 12, 8, 8),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _NavIcon(
                icon: Icons.home_outlined,
                activeIcon: Icons.home_rounded,
                label: 'Home',
                active: current == AppTab.home,
                onTap: () => context.go('/home'),
              ),
              _NavIcon(
                icon: Icons.spa_outlined,
                activeIcon: Icons.spa_rounded,
                label: 'Parceiros',
                active: current == AppTab.partners,
                onTap: () => context.go('/partners'),
              ),
              _NavIcon(
                icon: Icons.chat_bubble_outline_rounded,
                activeIcon: Icons.chat_bubble_rounded,
                label: 'Chat',
                active: current == AppTab.chat,
                onTap: () => context.go('/chat'),
              ),
              _WeddingNavTab(
                assetPath: weddingIcon.assetPath,
                zoom: weddingIcon.zoom,
                active: current == AppTab.wedding,
                onTap: () => context.go('/wedding'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _NavIcon extends StatelessWidget {
  final IconData icon;
  final IconData activeIcon;
  final String label;
  final bool active;
  final VoidCallback onTap;

  const _NavIcon({
    required this.icon,
    required this.activeIcon,
    required this.label,
    required this.active,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final color = active ? AppTheme.accentOliveDark : AppTheme.navIconMuted;
    return InkWell(
      borderRadius: BorderRadius.circular(16),
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(active ? activeIcon : icon, color: color, size: 28),
            const SizedBox(height: 4),
            Text(
              label,
              style: TextStyle(
                color: color,
                fontSize: 11,
                fontWeight: active ? FontWeight.w700 : FontWeight.w500,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Separador "Os noivos" — mesma composição que [_NavIcon] (ícone +
/// rótulo, ativo a verde-oliva), mas o ícone é a ilustração do casal
/// escolhida pelo utilizador em vez de um IconData fixo.
class _WeddingNavTab extends StatelessWidget {
  final String assetPath;
  final double zoom;
  final bool active;
  final VoidCallback onTap;

  const _WeddingNavTab({
    required this.assetPath,
    required this.zoom,
    required this.active,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final color = active ? AppTheme.accentOliveDark : AppTheme.navIconMuted;
    return InkWell(
      borderRadius: BorderRadius.circular(16),
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Opacity(
              opacity: active ? 1 : 0.55,
              child: ClipOval(
                child: SizedBox(
                  width: 40,
                  height: 40,
                  child: Transform.scale(
                    scale: zoom,
                    child: Image.asset(assetPath, fit: BoxFit.cover),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 4),
            Text(
              'Os noivos',
              style: TextStyle(
                color: color,
                fontSize: 11,
                fontWeight: active ? FontWeight.w700 : FontWeight.w500,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
