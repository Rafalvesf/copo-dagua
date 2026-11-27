import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'hide_while_typing.dart';
import '../../core/page_transitions.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/partner_app/partner_app_providers.dart';
import '../../core/theme/app_theme.dart';
import 'floating_bottom_nav.dart' show NavBubble, kNavRadius;
import 'count_badge.dart';
import 'first_run_tour.dart';
import 'floating_filter_bar.dart' show ConnectedFilterNav;
import 'press_scale.dart';

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
      minimum: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 20),
      child: DecoratedBox(
        decoration: ShapeDecoration(color: Colors.white, shadows: AppTheme.navBarShadow, shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.circular(kNavRadius))),
        child: ClipRSuperellipse(
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
        // Encolhe a 0,97 ao carregar, como os botões (pedido 2026-11-27).
        child: PressScale(child: InkWell(
      borderRadius: BorderRadius.circular(kNavRadius - 10),
      onTap: onTap,
      // Pill cinzenta no separador ativo (2026-11-11: "para ser mais
      // percetível").
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: active ? const Color(0xFFEBEBEB) : Colors.transparent,
          borderRadius: BorderRadius.circular(kNavRadius - 10),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(
              height: 26,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  Center(
                    child: Icon(
                        active ? activeIcon : icon,
                        color: color,
                        size: 24,
                      ),
                  ),
                  if (badgeCount > 0)
                    Positioned(
                      top: -4,
                      right: -2,
                      // O mesmo contador do §2 (pílula branca, aro preto).
                      child: CountBadge(badgeCount),
                    ),
                ],
              ),
            ),
            const SizedBox(height: 3),
            Text(label,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: color)),
          ],
        ),
      ),
    ))));
  }
}

