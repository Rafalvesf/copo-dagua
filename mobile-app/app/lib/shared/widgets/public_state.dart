import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'mascot.dart';

/// Ecrã de estado das páginas públicas e de autenticação (convites,
/// RSVP, verificar email…): mascote, título, texto e botões, centrados.
/// Antes eram só uma linha de texto num fundo vazio (revisão 2026-10-17).
/// Texto dos botões na escala de primeiro contacto (17, negrito).
const _firstTouchButtonText = TextStyle(
  fontFamily: AppTheme.fontFamily,
  fontFamilyFallback: AppTheme.fontFamilyFallback,
  fontSize: 17,
  fontWeight: FontWeight.w700,
);

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
                // Escala de primeiro contacto (DESIGN.md §3): título 32.
                style: const TextStyle(fontSize: 32, height: 1.15, fontWeight: FontWeight.w700, color: AppTheme.ink),
              ),
              if (message != null) ...[
                const SizedBox(height: 10),
                Text(
                  message!,
                  textAlign: TextAlign.center,
                  // Escala de primeiro contacto (DESIGN.md §3): texto 17.
                  style: const TextStyle(fontSize: 17, height: 1.5, color: AppTheme.inkMuted),
                ),
              ],
              if (actions.isNotEmpty) ...[
                const SizedBox(height: 28),
                // Escala de primeiro contacto: botões maiores (17/56) só
                // nestes ecrãs, replicando o estilo global do tema (preto,
                // pílula) para não o perder.
                Theme(
                  data: Theme.of(context).copyWith(
                    elevatedButtonTheme: ElevatedButtonThemeData(
                      style: ElevatedButton.styleFrom(
                        minimumSize: const Size.fromHeight(56),
                        backgroundColor: AppTheme.ink,
                        foregroundColor: Colors.white,
                        shape: const StadiumBorder(),
                        textStyle: _firstTouchButtonText,
                      ),
                    ),
                    filledButtonTheme: FilledButtonThemeData(
                      style: FilledButton.styleFrom(
                        minimumSize: const Size.fromHeight(56),
                        backgroundColor: AppTheme.ink,
                        foregroundColor: Colors.white,
                        shape: const StadiumBorder(),
                        textStyle: _firstTouchButtonText,
                      ),
                    ),
                    outlinedButtonTheme: OutlinedButtonThemeData(
                      style: OutlinedButton.styleFrom(
                        minimumSize: const Size.fromHeight(56),
                        foregroundColor: AppTheme.ink,
                        side: const BorderSide(color: AppTheme.ink),
                        shape: const StadiumBorder(),
                        textStyle: _firstTouchButtonText,
                      ),
                    ),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      for (var i = 0; i < actions.length; i++) ...[
                        if (i > 0) const SizedBox(height: 12),
                        actions[i],
                      ],
                    ],
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}
