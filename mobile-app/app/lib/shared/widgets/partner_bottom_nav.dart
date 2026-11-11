import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'hide_while_typing.dart';
import '../../core/page_transitions.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/partner_app/partner_app_providers.dart';
import '../../core/theme/app_theme.dart';
import 'floating_bottom_nav.dart' show NavBubble, kNavRadius;
import 'first_run_tour.dart';
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
  Widget build(BuildContext context, WidgetRef ref) =>
      // Fica fixa por cima enquanto a página anima (page_transitions.dart).
      StayOverNav(child: HideWhileTyping(child: TourHost(role: TourRole.partner, child: _buildNav(context, ref))));

  Widget _buildNav(BuildContext context, WidgetRef ref) {
    final unreadCount = ref
        .watch(partnerUnreadMessagesCountProvider)
        .maybeWhen(data: (count) => count, orElse: () => 0);
    // Igual à ilha dos organizadores ([FloatingBottomNav]): margem à
    // volta, cantos todos redondos, separadores com a mesma largura
    // (pedido 2026-10-17: "as navbars devem ser iguais").
    return SafeArea(
      top: false,
      minimum: const EdgeInsets.fromLTRB(16, 0, 16, 26),
      child: DecoratedBox(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(kNavRadius),
          boxShadow: AppTheme.navBarShadow,
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(kNavRadius),
          child: ConnectedFilterNav(
            top: top,
            navRow: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 10),
              child: Row(
                children: [
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Hi.home,
                    activeIcon: Hi.homeOutline,
                    active: current == PartnerTab.home,
                    onTap: () => context.go('/partner-home'),
                    label: 'Início',
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Hi.inbox,
                    activeIcon: Hi.inboxOutline,
                    active: current == PartnerTab.requests,
                    onTap: () => context.go('/partner-requests'),
                    label: 'Pedidos',
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Hi.chatBubbleOvalLeft,
                    activeIcon: Hi.chatBubbleOvalLeftOutline,
                    active: current == PartnerTab.chat,
                    badgeCount: unreadCount,
                    onTap: () => context.go('/partner-messages'),
                    label: 'Mensagens',
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Hi.user,
                    activeIcon: Hi.userOutline,
                    active: current == PartnerTab.profile,
                    onTap: () => context.go('/partner-profile'),
                    label: 'Perfil',
                  ),
                ),
              ),
                ],
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
  final IconData activeIcon;
  final bool active;
  final VoidCallback onTap;
  final int badgeCount;

  /// Nome do separador para leitores de ecrã (acessibilidade, 2026-11-03).
  final String label;

  const _NavIcon({
    this.label = '',
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
    final color = active ? AppTheme.ink : AppTheme.navIconMuted;
    return Semantics(
      button: true,
      selected: active,
      label: label,
      excludeSemantics: true,
      onTap: onTap,
      child: Tooltip(
        message: label,
        excludeFromSemantics: true,
        child: InkWell(
      borderRadius: BorderRadius.circular(AppRadius.md),
      onTap: onTap,
      // Pill cinzenta no separador ativo (2026-11-11: "para ser mais
      // percetível").
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
        decoration: BoxDecoration(
          color: active ? const Color(0xFFEDEAE3) : Colors.transparent,
          borderRadius: BorderRadius.circular(18),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(
              height: 32,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  Center(
                    child: Icon(
                        active ? activeIcon : icon,
                        color: color,
                        size: 26,
                      ),
                  ),
                  if (badgeCount > 0)
                    Positioned(
                      top: 0,
                      right: 2,
                      child: _UnreadBadge(count: badgeCount),
                    ),
                ],
              ),
            ),
            const SizedBox(height: 2),
            Text(label,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 11.5, fontWeight: active ? FontWeight.w800 : FontWeight.w600, color: color)),
          ],
        ),
      ),
    )));
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
