import 'package:flutter/material.dart';
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
    return GradientScaffold(
      background: AppBackground.mood,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.build_circle_outlined, size: 56, color: AppTheme.ink),
              const SizedBox(height: 20),
              Text(
                'Voltamos já',
                style: AppTypography.displaySerif(fontSize: 28, color: AppTheme.ink),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 10),
              const Text(
                'Estamos a fazer manutenção nesta parte da app. '
                'Tenta novamente daqui a pouco.',
                textAlign: TextAlign.center,
                style: TextStyle(color: AppTheme.inkMuted, fontSize: 14.5, height: 1.4),
              ),
              const SizedBox(height: 28),
              PrimaryButton(
                label: 'Tentar novamente',
                onPressed: () => ref.read(maintenanceControllerProvider.notifier).retry(),
              ),
              const SizedBox(height: 12),
              TextButton(
                onPressed: () => ref.read(authControllerProvider.notifier).logout(),
                child: const Text('Sair'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
