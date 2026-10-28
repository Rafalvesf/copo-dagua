import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'mascot.dart';
import 'island_sheet.dart';

/// "Instala a app" — pedido 2026-10-17: quem abre um link de convite é
/// levado a instalar a app em vez de criar conta no browser. A app é
/// instalada a partir do site (ecrã principal do telemóvel).
Future<void> showInstallAppSheet(BuildContext context, {String? code}) {
  // Na app instalada (Android/iOS) não há nada a instalar.
  if (!kIsWeb) return Future.value();
  final ios = defaultTargetPlatform == TargetPlatform.iOS;
  Widget step(int n, String text) => Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 26,
              height: 26,
              alignment: Alignment.center,
              decoration: const BoxDecoration(color: AppColors.gray, shape: BoxShape.circle),
              child: Text('$n', style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
            ),
            const SizedBox(width: 12),
            Expanded(child: Text(text, style: const TextStyle(fontSize: AppFontSize.base, height: 1.45, color: AppTheme.ink))),
          ],
        ),
      );
  return showIslandSheet<void>(
    context: context,
    isScrollControlled: true,
    builder: (sheet) => SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 22, AppTheme.screenMargin, 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Center(child: TchinMascot(pose: MascotPose.wave, width: 120)),
            const SizedBox(height: 14),
            const Text('Instala a app À Nossa!',
                textAlign: TextAlign.center, style: TextStyle(fontSize: 24, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 6),
            const Text(
              'Na app vês o programa, a tua mesa, as fotos e as mensagens dos anfitriões.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: AppFontSize.base, height: 1.45, color: AppTheme.inkMuted),
            ),
            const SizedBox(height: 20),
            if (ios) ...[
              step(1, 'Abre esta página no Safari.'),
              step(2, 'Toca em Partilhar (o quadrado com a seta para cima).'),
              step(3, 'Escolhe "Adicionar ao ecrã principal".'),
            ] else ...[
              step(1, 'Abre esta página no Chrome.'),
              step(2, 'Toca no menu ⋮ no canto de cima.'),
              step(3, 'Escolhe "Instalar app" ou "Adicionar ao ecrã principal".'),
            ],
            step(4, code == null
                ? 'Abre a app e cria conta com o mesmo email ou telemóvel do convite — fica logo ligada a ti.'
                : 'Abre a app, cria conta como convidado e usa o código $code.'),
            const SizedBox(height: 10),
            FilledButton(onPressed: () => Navigator.of(sheet).pop(), child: const Text('Percebi')),
          ],
        ),
      ),
    ),
  );
}
