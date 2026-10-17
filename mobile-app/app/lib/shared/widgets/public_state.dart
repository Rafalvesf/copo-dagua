import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'mascot.dart';

/// Ecrã de estado das páginas públicas e de autenticação (convites,
/// RSVP, verificar email…): mascote, título, texto e botões, centrados.
/// Antes eram só uma linha de texto num fundo vazio (revisão 2026-10-17).
class PublicStateView extends StatelessWidget {
  final MascotPose pose;
  final String title;
  final String? message;
  final List<Widget> actions;

  const PublicStateView({
    super.key,
    required this.pose,
    required this.title,
    this.message,
    this.actions = const [],
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin, vertical: 24),
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 420),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(child: TchinMascot(pose: pose, width: 170)),
              const SizedBox(height: 22),
              Text(
                title,
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 26, height: 1.2, fontWeight: FontWeight.w700, color: AppTheme.ink),
              ),
              if (message != null) ...[
                const SizedBox(height: 10),
                Text(
                  message!,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: AppFontSize.base + 1, height: 1.5, color: AppTheme.inkMuted),
                ),
              ],
              if (actions.isNotEmpty) ...[
                const SizedBox(height: 28),
                for (var i = 0; i < actions.length; i++) ...[
                  if (i > 0) const SizedBox(height: 12),
                  actions[i],
                ],
              ],
            ],
          ),
        ),
      ),
    );
  }
}
