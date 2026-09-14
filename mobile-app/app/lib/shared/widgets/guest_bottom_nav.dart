import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';

enum GuestTab { home, gifts, gallery, profile }

/// Ilha flutuante da app do convidado — mesma linguagem visual de
/// [FloatingBottomNav] (couple/parceiro), mas com os separadores
/// próprios do convidado (Início/Presentes/Galeria/Perfil, pedido
/// explícito do utilizador a partir dos mockups de referência). Vive à
/// parte de [FloatingBottomNav] em vez de reaproveitar o mesmo enum —
/// os separadores e destinos são completamente diferentes (um
/// convidado não tem Parceiros/Chat).
class GuestBottomNav extends StatelessWidget {
  final GuestTab current;

  /// Presente só quando uma conta de casal está a acompanhar OUTRO
  /// casamento como convidado ("Modo convidado", `guest_mode_screen.dart`)
  /// — mantém os 4 separadores todos a apontar para esse casamento
  /// específico em vez do casamento "principal" implícito de uma conta
  /// 100% convidado. `null` = comportamento normal de sempre.
  final String? weddingId;

  const GuestBottomNav({super.key, required this.current, this.weddingId});

  String _path(String base) => weddingId == null ? base : '$base/$weddingId';

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      top: false,
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
            children: [
              Expanded(
                child: Center(
                  child: _GuestNavIcon(
                    icon: Icons.home_outlined,
                    activeIcon: Icons.home_rounded,
                    active: current == GuestTab.home,
                    onTap: () => context.go(_path('/guest-home')),
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _GuestNavIcon(
                    icon: Icons.card_giftcard_outlined,
                    activeIcon: Icons.card_giftcard_rounded,
                    active: current == GuestTab.gifts,
                    onTap: () => context.go(_path('/guest-gifts')),
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _GuestNavIcon(
                    icon: Icons.photo_library_outlined,
                    activeIcon: Icons.photo_library_rounded,
                    active: current == GuestTab.gallery,
                    onTap: () => context.go(_path('/guest-gallery')),
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: _GuestNavIcon(
                    icon: Icons.person_outline_rounded,
                    activeIcon: Icons.person_rounded,
                    active: current == GuestTab.profile,
                    onTap: () => context.go(_path('/guest-profile')),
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

class _GuestNavIcon extends StatelessWidget {
  final IconData icon;
  final IconData activeIcon;
  final bool active;
  final VoidCallback onTap;

  const _GuestNavIcon({
    required this.icon,
    required this.activeIcon,
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
        child: SizedBox(
          height: 42,
          child: Center(child: Icon(active ? activeIcon : icon, color: color, size: 32)),
        ),
      ),
    );
  }
}
