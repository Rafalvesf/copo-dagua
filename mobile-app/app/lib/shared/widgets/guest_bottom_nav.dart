import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/auth/auth_controller.dart';
import '../../core/models/models.dart' show UserRole;
import 'floating_bottom_nav.dart' show AppTab, FloatingBottomNav;

enum GuestTab { home, gifts, gallery, profile, events }

/// Ilha flutuante da app do convidado — mesma linguagem visual de
/// [FloatingBottomNav] (couple/parceiro), mas com os separadores
/// próprios do convidado (Início/Presentes/Galeria/Perfil, pedido
/// explícito do utilizador a partir dos mockups de referência). Vive à
/// parte de [FloatingBottomNav] em vez de reaproveitar o mesmo enum —
/// os separadores e destinos são completamente diferentes (um
/// convidado não tem Parceiros/Chat).
class GuestBottomNav extends ConsumerWidget {
  final GuestTab current;

  /// Presente só quando uma conta de casal está a acompanhar OUTRO
  /// casamento como convidado ("Modo convidado", `guest_mode_screen.dart`)
  /// — mantém os 4 separadores todos a apontar para esse casamento
  /// específico em vez do casamento "principal" implícito de uma conta
  /// 100% convidado. `null` = comportamento normal de sempre.
  final String? weddingId;

  /// Filtros do ecrã ([FilterChipsRow]) ligados por cima dos
  /// separadores, na mesma ilha (redesign 2026-10).
  final Widget? top;

  const GuestBottomNav({
    super.key,
    required this.current,
    this.weddingId,
    this.top,
  });

  String _path(String base) => weddingId == null ? base : '$base/$weddingId';

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // A mesma barra para todos os modos (pedido 2026-11-14): Parceiros,
    // Eventos, Mensagens e Perfil. Galeria e Presentes abrem a partir do
    // evento. Um convidado está sempre «dentro» de Eventos.
    final role = ref.watch(authControllerProvider).profile?.role;
    return FloatingBottomNav(
      current: current == GuestTab.profile ? AppTab.home : AppTab.events,
      top: top,
      profilePath: role == UserRole.couple ? '/home' : _path('/guest-profile'),
    );
  }
}
