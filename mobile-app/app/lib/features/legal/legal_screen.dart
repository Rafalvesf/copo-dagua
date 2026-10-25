import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../../shared/widgets/gradient_scaffold.dart';
import '../../shared/widgets/page_header.dart';
import '../../shared/widgets/sticker_icon.dart';
import 'legal_texts.dart';

/// Termos (`/termos`) e Política de Privacidade (`/privacidade`) —
/// páginas públicas, abertas também a partir do registo e das Definições.
class LegalScreen extends StatelessWidget {
  final LegalDoc doc;
  const LegalScreen({super.key, required this.doc});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(children: [
          PageHeader(title: doc.title, centered: true),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 32),
              children: [
                Text('Última atualização: ${LegalEntity.updated}',
                    style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                const SizedBox(height: 10),
                Text(doc.intro, style: const TextStyle(fontSize: AppFontSize.base, height: 1.5, color: AppTheme.ink)),
                const SizedBox(height: 16),
                for (final s in doc.sections) ...[
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: whiteLineCard(radius: 18, line: AppTheme.borderMuted),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(s.title,
                          style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      for (final p in s.paragraphs) ...[
                        const SizedBox(height: 8),
                        SelectableText(p, style: const TextStyle(fontSize: AppFontSize.base, height: 1.5, color: AppTheme.ink)),
                      ],
                    ]),
                  ),
                  const SizedBox(height: 12),
                ],
              ],
            ),
          ),
        ]),
      ),
    );
  }
}
