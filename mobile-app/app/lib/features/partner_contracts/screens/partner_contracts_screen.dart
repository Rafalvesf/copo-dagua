import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';

/// Contratos do parceiro (canvas "Parceiro — contratos"). Ainda não há
/// contratos reais na base de dados — em vez do ecrã de demonstração
/// antigo (uma conversa fixa com "Sofia & André"), diz isso claramente e
/// leva às mensagens, que é onde os detalhes se combinam hoje.
class PartnerContractsScreen extends StatelessWidget {
  const PartnerContractsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        child: Column(
          children: [
            const PageHeader(title: 'Contratos'),
            Expanded(
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 28),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Container(
                        width: 120,
                        height: 120,
                        decoration: const BoxDecoration(
                          color: AppColors.gray,
                          shape: BoxShape.circle,
                        ),
                        child: const Icon(
                          Icons.description_outlined,
                          size: 48,
                          color: AppTheme.accentOliveDark,
                        ),
                      ),
                      const SizedBox(height: 24),
                      const Text(
                        'Contratos em breve',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: AppFontSize.h3,
                          height: 28 / 22,
                          fontWeight: FontWeight.w700,
                          color: AppTheme.ink,
                        ),
                      ),
                      const SizedBox(height: 8),
                      const SizedBox(
                        width: 290,
                        child: Text(
                          'Vais poder enviar e assinar contratos aqui. Até lá, combina os detalhes com o casal pela conversa.',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: AppFontSize.base,
                            height: 1.5,
                            fontWeight: FontWeight.w300,
                            color: AppTheme.inkMuted,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(28, 14, 28, 24),
              child: SizedBox(
                width: double.infinity,
                height: 54,
                child: FilledButton(
                  onPressed: () => context.go('/partner-messages'),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.accentOliveDark,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(AppRadius.md),
                    ),
                    textStyle: const TextStyle(
                      fontSize: AppFontSize.lg,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  child: const Text('Abrir mensagens'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
