import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'hide_while_typing.dart';
import '../../core/page_transitions.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/chat/chat_list_controller.dart';
import '../../core/theme/app_theme.dart';
import 'first_run_tour.dart';
import 'floating_filter_bar.dart' show ConnectedFilterNav;
import '../../core/wedding/menu_style.dart';

enum AppTab { home, partners, chat, wedding, events }

/// Raio dos cantos das navbars = raio do círculo do separador ativo mais
/// a margem à volta (10 + 4 + 21), para os cantos ficarem concêntricos
/// com o círculo (pedido do utilizador, 2026-10-19).
const double kNavRadius = 35;

/// Ilha flutuante com margem de todos os lados (pedido explícito do
/// utilizador: "a navbar deve ser uma ilha em vez de se estender até à
/// base do ecrã") — 5 separadores (Galeria / Parceiros / Os noivos /
/// Chat / Perfil), "Os noivos" ao centro (pedido explícito: "coloca o
/// botão os noivos ao centrado na navbar"), Galeria à esquerda (pedido
/// explícito: "adiciona na navbar, no lado esquerdo, um botão de
/// galeria"). O separador ativo fica a verde-oliva.
class FloatingBottomNav extends ConsumerWidget {
  final AppTab current;

  /// Filtros do ecrã ([FilterChipsRow]) ligados por cima dos
  /// separadores, na mesma ilha (redesign 2026-10).
  final Widget? top;

  const FloatingBottomNav({super.key, required this.current, this.top});

  @override
  Widget build(BuildContext context, WidgetRef ref) =>
      // Fica fixa por cima enquanto a página anima (page_transitions.dart).
      StayOverNav(child: HideWhileTyping(child: TourHost(role: TourRole.organizer, child: _buildNav(context, ref))));

  Widget _buildNav(BuildContext context, WidgetRef ref) {
    // A navbar acompanha a cor escolhida em "Aparência do menu" (098).
    final menuColor = ref.watch(currentMenuStyleProvider).color;
    final unreadCount = ref
        .watch(unreadMessagesCountProvider)
        .maybeWhen(data: (count) => count, orElse: () => 0);

    return SafeArea(
      top: false,
      // `minimum` garante a margem da ilha mesmo em ambientes sem
      // inset de safe-area real (ex: preview web) — soma-se ao inset
      // real do dispositivo quando existe (ex: home indicator do iOS).
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
            // Cada separador ocupa uma fatia igual da largura (em vez
            // de `spaceEvenly`, que distribuía o espaço entre as
            // larguras intrínsecas de cada rótulo — "Parceiros" e
            // "Perfil" têm textos de comprimentos diferentes, o que
            // deixava os ícones com margens desiguais e "Os noivos"
            // fora do centro visual). Pedido explícito do utilizador:
            // "centra o icon os noivos e coloca as margens iguais em
            // todos os icons".
            children: [
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Hi.sparkles,
                    activeIcon: Hi.sparklesOutline,
                    active: current == AppTab.partners,
                    accent: menuColor.color,
                    onAccent: menuColor.on,
                    onTap: () => context.go('/partners'),
                    label: 'Parceiros',
                  ),
                ),
              ),
              // Eventos (2026-11): os meus eventos + eventos públicos.
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Hi.globeEuropeAfrica,
                    activeIcon: Hi.globeEuropeAfricaOutline,
                    // O painel de cada evento abre a partir de Eventos
                    // (separador "O meu evento" retirado, 2026-11-10).
                    active: current == AppTab.events || current == AppTab.wedding,
                    accent: menuColor.color,
                    onAccent: menuColor.on,
                    onTap: () => context.go('/eventos'),
                    label: 'Eventos',
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Hi.chatBubbleOvalLeft,
                    activeIcon: Hi.chatBubbleOvalLeftOutline,
                    active: current == AppTab.chat,
                    accent: menuColor.color,
                    onAccent: menuColor.on,
                    badgeCount: unreadCount,
                    onTap: () => context.go('/chat'),
                    label: 'Mensagens',
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Hi.user,
                    activeIcon: Hi.userOutline,
                    active: current == AppTab.home,
                    accent: menuColor.color,
                    onAccent: menuColor.on,
                    onTap: () => context.go('/home'),
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
  final Color accent;
  final Color onAccent;

  /// Selo de não lidas (`unreadMessagesCountProvider`) — só usado pelo
  /// separador "Chat" hoje, mas genérico caso outro separador precise
  /// no futuro. `0`/negativo não mostra nada.
  final int badgeCount;

  /// Nome do separador para leitores de ecrã (acessibilidade, 2026-11-03).
  final String label;

  const _NavIcon({
    this.label = '',
    required this.icon,
    required this.activeIcon,
    required this.active,
    required this.onTap,
    this.accent = AppTheme.brandGreen,
    this.onAccent = Colors.white,
    this.badgeCount = 0,
  });

  @override
  Widget build(BuildContext context) {
    // Sem bolha (2026-11-11): ícones preenchidos; o separador ativo
    // fica com o ícone só com contorno.
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
            // Altura fixa igual ao avatar de [_WeddingNavTab] — sem
            // isto o rótulo deste separador ficava mais alto do que o
            // de "Os noivos" (ícone Material vs avatar), desalinhando
            // o texto entre os separadores.
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
                      child: _UnreadBadge(count: badgeCount, color: accent, onColor: onAccent),
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

/// Selo de contagem — mesma cor/estilo já usado em `cards.dart` para o
/// mesmo `unreadCount` na lista de conversas (verde-oliva da marca),
/// só mais pequeno para caber sobre o ícone da navbar. `99+` em vez de
/// deixar o número crescer sem limite.
class _UnreadBadge extends StatelessWidget {
  final int count;
  final Color color;
  final Color onColor;

  const _UnreadBadge({required this.count, this.color = AppTheme.brandGreen, this.onColor = Colors.white});

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(minWidth: 16, minHeight: 16),
      padding: const EdgeInsets.symmetric(horizontal: 3),
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: color,
        shape: BoxShape.circle,
        border: Border.all(color: Colors.white, width: 1.5),
      ),
      child: Text(
        count > 99 ? '99+' : '$count',
        style: TextStyle(
          color: onColor,
          fontSize: AppFontSize.xxxs,
          fontWeight: FontWeight.w700,
          height: 1,
        ),
      ),
    );
  }
}

/// Bolha verde por trás do separador ativo (redesign 2026-10) — partilhada
/// pelas três navbars (casal, convidado, parceiro).
class NavBubble extends StatelessWidget {
  final bool active;
  final double size;
  final Widget child;
  final Color color;

  const NavBubble({
    super.key,
    required this.active,
    required this.size,
    required this.child,
    this.color = AppTheme.brandGreen,
  });

  @override
  Widget build(BuildContext context) {
    // Selecionado = círculo cheio com um aro (branco + cor), como no
    // mockup do site (pedido do utilizador, 2026-10-19).
    return AnimatedContainer(
      duration: const Duration(milliseconds: 180),
      curve: Curves.easeOut,
      width: size,
      height: size,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: active ? color : Colors.transparent,
        shape: BoxShape.circle,
        boxShadow: active
            ? [
                BoxShadow(color: color, spreadRadius: 4),
                const BoxShadow(color: Colors.white, spreadRadius: 2),
              ]
            : const [],
      ),
      child: child,
    );
  }
}
