import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';

class SupportScreen extends ConsumerStatefulWidget {
  const SupportScreen({super.key});

  @override
  ConsumerState<SupportScreen> createState() => _SupportScreenState();
}

class _SupportScreenState extends ConsumerState<SupportScreen> {
  bool _showAiCard = true;
  bool _aiCardDismissing = false;
  bool _searchHighlighted = false;

  void _dismissAiCard() {
    setState(() => _aiCardDismissing = true);
    Future.delayed(const Duration(milliseconds: 220), () {
      if (!mounted) return;
      setState(() {
        _showAiCard = false;
        _searchHighlighted = true;
      });
    });
  }

  void _comingSoon(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Ainda sem assistente real ligado — em breve.'),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
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
                  CircleIconButton(
                    icon: Icons.arrow_back_rounded,
                    onTap: () => Navigator.of(context).canPop()
                        ? Navigator.of(context).pop()
                        : context.go('/home'),
                  ),
                  const Spacer(),
                  CircleIconButton(
                    icon: Icons.notifications_none,
                    onTap: () => ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('Sem notificações por agora.'),
                      ),
                    ),
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
                      firstName.isEmpty
                          ? 'Olá,\ncomo posso ajudar hoje?'
                          : 'Olá, $firstName,\ncomo posso ajudar hoje?',
                      style: Theme.of(context).textTheme.headlineMedium,
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
                        if (_showAiCard)
                          AnimatedOpacity(
                            opacity: _aiCardDismissing ? 0 : 1,
                            duration: const Duration(milliseconds: 200),
                            child: AnimatedScale(
                              scale: _aiCardDismissing ? 0.85 : 1,
                              duration: const Duration(milliseconds: 200),
                              child: Stack(
                                clipBehavior: Clip.none,
                                children: [
                                  _OptionCard(
                                    color: AppColors.yellow,
                                    iconBackground: Colors.transparent,
                                    iconColor: AppColors.purple,
                                    icon: Icons.auto_awesome,
                                    label: 'Perguntar à IA',
                                    onTap: _dismissAiCard,
                                  ),
                                  Positioned(
                                    top: -14,
                                    right: -14,
                                    child: IgnorePointer(
                                      child: Image.asset(
                                        'assets/images/new_badge.png',
                                        width: 56,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        _OptionCard(
                          color: AppColors.green,
                          icon: Icons.support_agent,
                          label: 'Falar com a equipa',
                          onTap: () => _comingSoon(context),
                        ),
                        _OptionCard(
                          color: AppColors.blue,
                          icon: Icons.storefront_outlined,
                          label: 'Sugestões de fornecedores',
                          onTap: () => _comingSoon(context),
                        ),
                        _OptionCard(
                          color: AppColors.gray,
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
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 250),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(999),
                        boxShadow: _searchHighlighted
                            ? [
                                BoxShadow(
                                  color: AppColors.purple.withValues(
                                    alpha: 0.45,
                                  ),
                                  blurRadius: 16,
                                  spreadRadius: 1,
                                ),
                              ]
                            : [],
                      ),
                      child: TextField(
                        enabled: false,
                        decoration: InputDecoration(
                          hintText: _searchHighlighted
                              ? 'Pergunta? Posso ajudar.'
                              : 'Pergunta ou pesquisa qualquer coisa...',
                          hintStyle: TextStyle(
                            fontSize: 15,
                            fontWeight: _searchHighlighted
                                ? FontWeight.w600
                                : FontWeight.w400,
                            color: _searchHighlighted
                                ? AppTheme.ink
                                : AppTheme.inkMuted,
                          ),
                          fillColor: Colors.white,
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(999),
                            borderSide: _searchHighlighted
                                ? const BorderSide(
                                    color: AppColors.purple,
                                    width: 2,
                                  )
                                : BorderSide.none,
                          ),
                          contentPadding: const EdgeInsets.symmetric(
                            horizontal: 20,
                            vertical: 14,
                          ),
                        ),
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
}

class _OptionCard extends StatelessWidget {
  final Color color;
  final Color? iconBackground;
  final Color? iconColor;
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const _OptionCard({
    required this.color,
    this.iconBackground,
    this.iconColor,
    required this.icon,
    required this.label,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(24),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(24),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                color: iconBackground ?? Colors.white,
                shape: BoxShape.circle,
              ),
              child: Icon(icon, size: 18, color: iconColor ?? AppTheme.ink),
            ),
            const Spacer(),
            Text(
              label,
              style: AppTypography.moduleTitle.copyWith(color: AppTheme.ink),
            ),
          ],
        ),
      ),
    );
  }
}
