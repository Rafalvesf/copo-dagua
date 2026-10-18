import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/auth/auth_controller.dart';
import 'island_sheet.dart';

/// Seta para sair do onboarding (pedido 2026-10-18). Pergunta antes e,
/// se sair, nada do registo fica gravado — a conta só é criada no
/// "Pronto".
Future<void> exitOnboarding(BuildContext context, WidgetRef ref) async {
  final ok = await showIslandDialog<bool>(
    context: context,
    builder: (context) => IslandAlert(
      title: const Text('Sair do registo?'),
      content: const Text('O que preencheste não fica guardado. Podes voltar a começar quando quiseres.'),
      actions: [
        TextButton(onPressed: () => Navigator.of(context).pop(false), child: const Text('Continuar')),
        FilledButton(onPressed: () => Navigator.of(context).pop(true), child: const Text('Sair')),
      ],
    ),
  );
  if (ok != true) return;
  await ref.read(authControllerProvider.notifier).cancelOnboarding();
}
