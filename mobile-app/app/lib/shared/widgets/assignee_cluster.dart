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
                child: CircleAvatar(
                  radius: 11,
                  backgroundColor: AppColors.gray,
                  backgroundImage: NetworkImage(
                    'https://i.pravatar.cc/64?u=$seed',
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
                      fontSize: 9,
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
