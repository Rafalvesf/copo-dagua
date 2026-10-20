import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../money.dart';
import 'island_sheet.dart';

/// Taxa de IVA normal em Portugal continental (23%). Usada para mostrar o
/// detalhe do IVA nos comprovativos (`core/exports/exports.dart`).
const vatRate = 0.23;

/// Antes de guardar um preço (pacote, valor médio ou proposta), pergunta
/// se o valor já inclui IVA (pedido do utilizador, 2026-10-20). Devolve
/// `true` para avançar; `false` volta atrás para o parceiro voltar a
/// escrever o valor já com IVA.
Future<bool> confirmVatIncluded(BuildContext context, double amount) async {
  final ok = await showIslandDialog<bool>(
    context: context,
    barrierDismissible: false,
    builder: (context) => IslandAlert(
      title: const Text('Este valor já inclui IVA?'),
      content: Text(
        'Os clientes veem e pagam ${euros(amount, cents: amount % 1 != 0)}. '
        'Os preços na À Nossa! são sempre com IVA incluído (23%).',
        style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.of(context).pop(false), child: const Text('Não')),
        FilledButton(onPressed: () => Navigator.of(context).pop(true), child: const Text('Sim, avançar')),
      ],
    ),
  );
  if (ok == true) return true;
  if (context.mounted) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Volta a escrever o valor já com o IVA incluído.')),
    );
  }
  return false;
}
