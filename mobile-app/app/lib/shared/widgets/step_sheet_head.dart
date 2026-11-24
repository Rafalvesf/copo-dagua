import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'app_progress.dart';
import 'island_sheet.dart';

/// Topo de um popup com passos (DESIGN.md §6.3): barra de progresso 10 +
/// «1 DE 2» · voltar preto 44 (a partir do 2.º passo) · título 22 +
/// subtítulo 13 · «×». Sem [step] fica só o cabeçalho.
class StepSheetHead extends StatelessWidget {
  final (int, int)? step;
  final String title;
  final String? subtitle;
  final VoidCallback? onBack;

  const StepSheetHead({super.key, this.step, required this.title, this.subtitle, this.onBack});

  @override
  Widget build(BuildContext context) {
    final s = step;
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
      if (s != null && s.$2 > 1) ...[
        Row(children: [
          Expanded(child: AppProgressBar(value: s.$1 / s.$2, height: 10, track: const Color(0xFFD9D9D9))),
          const SizedBox(width: 10),
          Text('${s.$1} DE ${s.$2}', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        const SizedBox(height: 16),
      ],
      Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        if (onBack != null) ...[
          IslandBackButton(onTap: onBack!),
          const SizedBox(width: 12),
        ],
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (subtitle?.isNotEmpty == true) ...[
              const SizedBox(height: 4),
              Text(subtitle!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ],
          ]),
        ),
        const SizedBox(width: 12),
        const IslandCloseButton(),
      ]),
    ]);
  }
}
