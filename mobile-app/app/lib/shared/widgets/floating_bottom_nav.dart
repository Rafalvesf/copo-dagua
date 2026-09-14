import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/chat/chat_list_controller.dart';
import '../../core/theme/app_theme.dart';
import '../../core/wedding/wedding_nav_icon.dart';

enum AppTab { home, partners, chat, wedding, gallery }

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

  const FloatingBottomNav({super.key, required this.current});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingIcon = ref.watch(weddingNavIconProvider);
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
          borderRadius: BorderRadius.circular(28),
          boxShadow: AppTheme.navBarShadow,
        ),
        child: Padding(
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
                    icon: Icons.photo_library_outlined,
                    activeIcon: Icons.photo_library_rounded,
                    active: current == AppTab.gallery,
                    onTap: () => context.go('/gallery'),
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _NavIcon(
                    icon: Icons.spa_outlined,
                    activeIcon: Icons.spa_rounded,
                    active: current == AppTab.partners,
                    onTap: () => context.go('/partners'),
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _WeddingNavTab(
                    assetPath: weddingIcon.assetPath,
                    zoom: weddingIcon.zoom,
                    active: current == AppTab.wedding,
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
                    onTap: () => context.go('/home'),
                  ),
                ),
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
  final bool active;
  final VoidCallback onTap;

  /// Selo de não lidas (`unreadMessagesCountProvider`) — só usado pelo
  /// separador "Chat" hoje, mas genérico caso outro separador precise
  /// no futuro. `0`/negativo não mostra nada.
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
    final color = active ? AppTheme.accentOliveDark : AppTheme.navIconMuted;
    return InkWell(
      borderRadius: BorderRadius.circular(16),
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
                    child: Icon(
                      active ? activeIcon : icon,
                      color: color,
                      size: 32,
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
          fontSize: 9,
          fontWeight: FontWeight.w700,
          height: 1,
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
    return InkWell(
      borderRadius: BorderRadius.circular(16),
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        child: Opacity(
          opacity: active ? 1 : 0.55,
          child: ClipOval(
            child: SizedBox(
              width: 42,
              height: 42,
              child: Transform.scale(
                scale: zoom,
                child: Image.asset(assetPath, fit: BoxFit.cover),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
