import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';

class SupportScreen extends ConsumerWidget {
  const SupportScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final firstName = profile?.fullName.split(' ').first ?? '';

    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
              child: Row(
                children: [
                  const CircleIconButton(icon: Icons.live_help_outlined),
                  const Spacer(),
                  CircleIconButton(
                    icon: Icons.notifications_none,
                    onTap: () => ScaffoldMessenger.of(context)
                        .showSnackBar(const SnackBar(content: Text('Sem notificações por agora.'))),
                  ),
                ],
              ),
            ),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(24, 36, 24, 24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      firstName.isEmpty ? 'Olá,\ncomo posso ajudar hoje?' : 'Olá, $firstName,\ncomo posso ajudar hoje?',
                      style: Theme.of(context).textTheme.headlineMedium?.copyWith(fontSize: 30, height: 1.15),
                    ),
                    const SizedBox(height: 28),
                    GridView.count(
                      crossAxisCount: 2,
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      mainAxisSpacing: 14,
                      crossAxisSpacing: 14,
                      childAspectRatio: 1.15,
                      children: [
                        _OptionCard(
                          gradient: AppGradients.guests,
                          icon: Icons.auto_awesome,
                          label: 'Perguntar à IA',
                          onTap: () => _comingSoon(context),
                        ),
                        _OptionCard(
                          gradient: AppGradients.checklist,
                          icon: Icons.support_agent,
                          label: 'Falar com a equipa',
                          onTap: () => _comingSoon(context),
                        ),
                        _OptionCard(
                          gradient: AppGradients.wedding,
                          icon: Icons.storefront_outlined,
                          label: 'Sugestões de fornecedores',
                          onTap: () => _comingSoon(context),
                        ),
                        _OptionCard(
                          gradient: AppGradients.budget,
                          icon: Icons.savings_outlined,
                          label: 'Dicas de orçamento',
                          onTap: () => _comingSoon(context),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      enabled: false,
                      decoration: InputDecoration(
                        hintText: 'Pergunta ou pesquisa qualquer coisa...',
                        fillColor: Colors.white,
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(999),
                          borderSide: BorderSide.none,
                        ),
                        contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),
                  CircleIconButton(
                    icon: Icons.add,
                    size: 48,
                    background: AppTheme.ink,
                    foreground: Colors.white,
                    onTap: () => _comingSoon(context),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _comingSoon(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Ainda sem assistente real ligado — em breve.')),
    );
  }
}

class _OptionCard extends StatelessWidget {
  final Gradient gradient;
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const _OptionCard({required this.gradient, required this.icon, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(24),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(gradient: gradient, borderRadius: BorderRadius.circular(24)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.7), shape: BoxShape.circle),
              child: Icon(icon, size: 18, color: AppTheme.ink),
            ),
            const Spacer(),
            Text(
              label,
              style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink),
            ),
          ],
        ),
      ),
    );
  }
}
