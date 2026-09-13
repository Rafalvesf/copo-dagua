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

/// Emblema circular de conta — usado no canto superior direito dos ecrãs
/// do parceiro (ver `page_header.dart`'s `PageHeader.trailing`).
/// Reaproveita [GradientMark] como gatilho de um menu com "Sair".
///
/// Até 2026-08-30 também tinha "Ver como Noivo/a" (`switchDemoAccount()`),
/// um atalho que trocava entre as duas contas de demonstração fixas sem
/// pedir password — removido ao ligar a autenticação real
/// (`core/auth/auth_controller.dart`): não há equivalente com contas
/// reais, cada uma com a sua própria password. Ver
/// `mobile-app/dashboard/tasks.md` para a nota sobre este atalho de teste.
class AccountSwitcherBadge extends ConsumerWidget {
  const AccountSwitcherBadge({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return PopupMenuButton<String>(
      icon: const GradientMark(size: 40, icon: Icons.storefront_outlined),
      onSelected: (value) {
        if (value == 'logout') {
          ref.read(authControllerProvider.notifier).logout();
        }
      },
      itemBuilder: (context) => const [
        PopupMenuItem(value: 'logout', child: Text('Sair')),
      ],
    );
  }
}
