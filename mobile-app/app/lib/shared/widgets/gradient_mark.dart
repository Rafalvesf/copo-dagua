import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/auth/auth_controller.dart';
import '../../core/theme/app_theme.dart';

class GradientMark extends StatelessWidget {
  final double size;
  final IconData icon;

  const GradientMark({super.key, this.size = 40, this.icon = Icons.favorite});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [AppTheme.accentOlive, AppTheme.accentOliveDark],
        ),
        shape: BoxShape.circle,
      ),
      child: Icon(icon, size: size * 0.5, color: Colors.white),
    );
  }
}

/// Emblema circular de troca de conta — usado no canto superior direito
/// dos ecrãs do parceiro (ver `page_header.dart`'s `PageHeader.trailing`).
/// Reaproveita [GradientMark] como gatilho de um menu com "Ver como
/// Noivo/a" / "Sair", o mesmo par de ações já usado inline em
/// `partner_home_screen.dart` — aqui só para os ecrãs novos, o dashboard
/// mantém a sua cópia própria.
class AccountSwitcherBadge extends ConsumerWidget {
  const AccountSwitcherBadge({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return PopupMenuButton<String>(
      icon: const GradientMark(size: 40, icon: Icons.storefront_outlined),
      onSelected: (value) {
        if (value == 'logout') {
          ref.read(authControllerProvider.notifier).logout();
        } else if (value == 'switch') {
          ref.read(authControllerProvider.notifier).switchDemoAccount();
        }
      },
      itemBuilder: (context) => const [
        PopupMenuItem(value: 'switch', child: Text('Ver como Noivo/a')),
        PopupMenuItem(value: 'logout', child: Text('Sair')),
      ],
    );
  }
}
