import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Pequeno grupo de avatares sobrepostos (responsáveis por uma
/// tarefa/despesa), com um selo "+N" quando há mais do que 2 — usado em
/// "Próximas tarefas" (Home) e em Tarefas.
class AssigneeCluster extends StatelessWidget {
  final List<String> seeds;

  const AssigneeCluster({super.key, required this.seeds});

  @override
  Widget build(BuildContext context) {
    final shown = seeds.take(2).toList();
    final overflow = seeds.length - shown.length;
    return SizedBox(
      height: 26,
      width: 26.0 + shown.length * 16 + (overflow > 0 ? 18 : 0),
      child: Stack(
        children: [
          for (final (index, seed) in shown.indexed)
            Positioned(
              left: index * 16.0,
              child: CircleAvatar(
                radius: 13,
                backgroundColor: Colors.white,
                // Inicial em vez de uma foto inventada (antes vinha de
                // pravatar.cc — um serviço externo a cada carregamento).
                child: CircleAvatar(
                  radius: 11,
                  backgroundColor: AppTheme.accentTint,
                  child: Text(
                    seed.isEmpty ? '?' : seed.characters.first.toUpperCase(),
                    style: const TextStyle(color: AppTheme.ink, fontSize: AppFontSize.xxxs, fontWeight: FontWeight.w700),
                  ),
                ),
              ),
            ),
          if (overflow > 0)
            Positioned(
              left: shown.length * 16.0,
              child: CircleAvatar(
                radius: 13,
                backgroundColor: Colors.white,
                child: CircleAvatar(
                  radius: 11,
                  backgroundColor: AppTheme.accentOliveDark,
                  child: Text(
                    '+$overflow',
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: AppFontSize.xxxs,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}
