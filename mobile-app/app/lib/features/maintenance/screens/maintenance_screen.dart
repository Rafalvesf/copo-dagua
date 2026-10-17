import 'package:flutter/material.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/public_state.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/platform/maintenance_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// Mostrado em vez do resto da app quando `MaintenanceController`
/// (`core/platform/maintenance_controller.dart`) diz que o lado atual
/// (casal/parceiro) está em manutenção — o `redirect` do router
/// (`core/router.dart`) manda qualquer navegação para aqui enquanto
/// isso for verdade, e para fora assim que deixar.
class MaintenanceScreen extends ConsumerWidget {
  const MaintenanceScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Mesmo formato das outras páginas de estado, com a mascote a dormir
    // (revisão 2026-10-17).
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: PublicStateView(
          pose: MascotPose.sleep,
          title: 'Voltamos já',
          message: 'Estamos a fazer manutenção nesta parte da app. Tenta novamente daqui a pouco.',
          actions: [
            PrimaryButton(
              label: 'Tentar novamente',
              onPressed: () => ref.read(maintenanceControllerProvider.notifier).retry(),
            ),
            TextButton(
              onPressed: () => ref.read(authControllerProvider.notifier).logout(),
              child: const Text('Sair'),
            ),
          ],
        ),
      ),
    );
  }
}
