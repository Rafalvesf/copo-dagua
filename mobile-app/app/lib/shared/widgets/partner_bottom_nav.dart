import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/partner_app/partner_app_providers.dart';
import '../../core/theme/app_theme.dart';
import 'floating_bottom_nav.dart' show NavBubble;
import 'floating_filter_bar.dart' show ConnectedFilterNav;

enum PartnerTab { home, requests, chat, profile }

/// Doca do lado do parceiro — mesma estrutura visual que
/// [FloatingBottomNav] do lado do Noivo/a (doca branca, 4 separadores,
/// ativo a verde-oliva), mas com destinos próprios: Home / Parceiros
/// (pedidos recebidos) / Chat (mensagens) / Os nossos (perfil de
/// negócio do parceiro).
class PartnerBottomNav extends ConsumerWidget {
  final PartnerTab current;

  /// Filtros do ecrã ([FilterChipsRow]) ligados por cima dos separadores,
  /// na mesma doca (redesign 2026-10).
  final Widget? top;

  const PartnerBottomNav({super.key, required this.current, this.top});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final unreadCount = ref
        .watch(partnerUnreadMessagesCountProvider)
        .maybeWhen(data: (count) => count, orElse: () => 0);
    return DecoratedBox(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: const BorderRadius.only(
          topLeft: Radius.circular(AppRadius.xxl),
          topRight: Radius.circular(AppRadius.xxl),
        ),
        boxShadow: AppTheme.navBarShadow,
      ),
      child: SafeArea(
        top: false,
        child: ConnectedFilterNav(
          top: top == null
              ? null
              : Padding(padding: const EdgeInsets.fromLTRB(8, 4, 8, 0), child: top),
          navRow: Padding(
          padding: EdgeInsets.fromLTRB(8, top == null ? 16 : 10, 8, 12),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _NavIcon(
                icon: Icons.home_outlined,
                activeIcon: Icons.home_rounded,
                active: current == PartnerTab.home,
                onTap: () => context.go('/partner-home'),
              ),
              _NavIcon(
                icon: Icons.inbox_outlined,
                activeIcon: Icons.inbox_rounded,
                active: current == PartnerTab.requests,
                onTap: () => context.go('/partner-requests'),
              ),
              _NavIcon(
                icon: Icons.chat_bubble_outline_rounded,
                activeIcon: Icons.chat_bubble_rounded,
                active: current == PartnerTab.chat,
                badgeCount: unreadCount,
                onTap: () => context.go('/partner-messages'),
              ),
              _NavIcon(
                icon: Icons.storefront_outlined,
                activeIcon: Icons.storefront_rounded,
                active: current == PartnerTab.profile,
                onTap: () => context.go('/partner-profile'),
              ),
            ],
          ),
        ),
        ),
      ),
    );
  }
}

class _NavIcon extends StatelessWidget {
  final IconData icon;
  final IconData activeIcon;
  final bool active;
  final VoidCallback onTap;
  final int badgeCount;

  const _NavIcon({
    required this.icon,
    required this.activeIcon,
    required this.active,
    required this.onTap,
    this.badgeCount = 0,
  });

  @override
  Widget build(BuildContext context) {
    // Redesign 2026-10 ("botão quando selecionado deve ser bolha
    // verde"): o ativo fica numa bolha verde com o ícone a branco.
    final color = active ? Colors.white : AppTheme.navIconMuted;
    return InkWell(
      borderRadius: BorderRadius.circular(AppRadius.md),
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(
              width: 42,
              height: 42,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  Center(
                    child: NavBubble(
                      active: active,
                      size: 42,
                      child: Icon(
                        active ? activeIcon : icon,
                        color: color,
                        size: active ? 24 : 32,
                      ),
                    ),
                  ),
                  if (badgeCount > 0)
                    Positioned(
                      top: 0,
                      right: -2,
                      child: _UnreadBadge(count: badgeCount),
                    ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Mesmo selo de `floating_bottom_nav.dart` (verde-oliva da marca,
/// `99+` acima do limite) — duplicado em vez de partilhado porque os
/// dois `_NavIcon` já eram classes privadas por ficheiro antes desta
/// alteração.
class _UnreadBadge extends StatelessWidget {
  final int count;

  const _UnreadBadge({required this.count});

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(minWidth: 16, minHeight: 16),
      padding: const EdgeInsets.symmetric(horizontal: 3),
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: AppTheme.accentOliveDark,
        shape: BoxShape.circle,
        border: Border.all(color: Colors.white, width: 1.5),
      ),
      child: Text(
        count > 99 ? '99+' : '$count',
        style: const TextStyle(
          color: Colors.white,
          fontSize: AppFontSize.xxxs,
          fontWeight: FontWeight.w700,
          height: 1,
        ),
      ),
    );
  }
}
