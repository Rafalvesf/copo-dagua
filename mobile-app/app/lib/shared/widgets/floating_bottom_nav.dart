import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/chat/chat_list_controller.dart';
import '../../core/theme/app_theme.dart';
import 'floating_filter_bar.dart' show ConnectedFilterNav;
import '../../core/wedding/menu_style.dart';
import '../../core/wedding/wedding_controller.dart';
import '../../core/models/models.dart';

enum AppTab { home, partners, chat, wedding }

/// Ilha flutuante com margem de todos os lados (pedido explícito do
/// utilizador: "a navbar deve ser uma ilha em vez de se estender até à
/// base do ecrã") — 5 separadores (Galeria / Parceiros / Os noivos /
/// Chat / Perfil), "Os noivos" ao centro (pedido explícito: "coloca o
/// botão os noivos ao centrado na navbar"), Galeria à esquerda (pedido
/// explícito: "adiciona na navbar, no lado esquerdo, um botão de
/// galeria"). O separador ativo fica a verde-oliva; o ícone de "Os
/// noivos" usa a ilustração escolhida pelo utilizador em
/// [weddingNavIconProvider] (carrossel movido para o ecrã de
/// Definições) em vez de um ícone Material fixo — por defeito os
/// ursinhos, que já correspondem ao glifo do mockup.
class FloatingBottomNav extends ConsumerWidget {
  final AppTab current;

  /// Filtros do ecrã ([FilterChipsRow]) ligados por cima dos
  /// separadores, na mesma ilha (redesign 2026-10).
  final Widget? top;

  const FloatingBottomNav({super.key, required this.current, this.top});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // A navbar acompanha a cor escolhida em "Aparência do menu" (098).
    final menuColor = ref.watch(currentMenuStyleProvider).color;
    // Ícone do separador do evento = o símbolo do tipo de evento (pedido
    // 2026-10-18), em vez da ilustração do casal.
    final eventType = ref.watch(weddingControllerProvider.select((s) => s.wedding?.eventType)) ?? EventType.wedding;
    final motif = EventDecor.of(eventType).motif;
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
          borderRadius: BorderRadius.circular(AppRadius.xxl),
          boxShadow: AppTheme.navBarShadow,
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(AppRadius.xxl),
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
                    icon: Icons.spa_outlined,
                    activeIcon: Icons.spa_rounded,
                    active: current == AppTab.partners,
                    accent: menuColor.color,
                    onAccent: menuColor.on,
                    onTap: () => context.go('/partners'),
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: motif,
                    activeIcon: motif,
                    active: current == AppTab.wedding,
                    accent: menuColor.color,
                    onAccent: menuColor.on,
                    onTap: () => context.go('/wedding'),
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Icons.chat_bubble_outline_rounded,
                    activeIcon: Icons.chat_bubble_rounded,
                    active: current == AppTab.chat,
                    accent: menuColor.color,
                    onAccent: menuColor.on,
                    badgeCount: unreadCount,
                    onTap: () => context.go('/chat'),
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Icons.person_outline_rounded,
                    activeIcon: Icons.person_rounded,
                    active: current == AppTab.home,
                    accent: menuColor.color,
                    onAccent: menuColor.on,
                    onTap: () => context.go('/home'),
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

  const _NavIcon({
    required this.icon,
    required this.activeIcon,
    required this.active,
    required this.onTap,
    this.accent = AppTheme.accentOliveDark,
    this.onAccent = Colors.white,
    this.badgeCount = 0,
  });

  @override
  Widget build(BuildContext context) {
    // Redesign 2026-10 ("botão quando selecionado deve ser bolha
    // verde"): o ativo fica numa bolha verde com o ícone a branco.
    final color = active ? onAccent : AppTheme.navIconMuted;
    return InkWell(
      borderRadius: BorderRadius.circular(AppRadius.md),
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // Altura fixa igual ao avatar de [_WeddingNavTab] — sem
            // isto o rótulo deste separador ficava mais alto do que o
            // de "Os noivos" (ícone Material vs avatar), desalinhando
            // o texto entre os separadores.
            SizedBox(
              height: 42,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  Center(
                    child: NavBubble(
                      active: active,
                      size: 42,
                      color: accent,
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
                      right: 2,
                      child: _UnreadBadge(count: badgeCount, color: accent, onColor: onAccent),
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

/// Selo de contagem — mesma cor/estilo já usado em `cards.dart` para o
/// mesmo `unreadCount` na lista de conversas (verde-oliva da marca),
/// só mais pequeno para caber sobre o ícone da navbar. `99+` em vez de
/// deixar o número crescer sem limite.
class _UnreadBadge extends StatelessWidget {
  final int count;
  final Color color;
  final Color onColor;

  const _UnreadBadge({required this.count, this.color = AppTheme.accentOliveDark, this.onColor = Colors.white});

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
    this.color = AppTheme.accentOliveDark,
  });

  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 180),
      curve: Curves.easeOut,
      // Selecionado = pílula verde em vez de círculo (pedido 2026-10-17).
      width: active ? size * 1.6 : size,
      height: size,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: active ? color : Colors.transparent,
        borderRadius: BorderRadius.circular(999),
      ),
      child: child,
    );
  }
}
