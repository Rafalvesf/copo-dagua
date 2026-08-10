import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/support_chat.dart';

class HomeFeedScreen extends ConsumerWidget {
  const HomeFeedScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;
    final profile = ref.watch(authControllerProvider).profile;
    final firstName = profile?.fullName.split(' ').first ?? '';

    // Margem visível entre o fim da saudação e o início do conteúdo.
    const contentTopMargin = 28.0;

    return Scaffold(
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : LayoutBuilder(
              builder: (context, constraints) {
                // Texto a 30% da altura do ecrã.
                final headerHeight = constraints.maxHeight * 0.30;

                return Stack(
                  children: [
                    // Camada de trás: conteúdo com scroll próprio, começa por
                    // baixo do cabeçalho e desliza para trás dele.
                    Positioned.fill(
                      child: SafeArea(
                        bottom: false,
                        child: ListView(
                          padding: EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            headerHeight + contentTopMargin,
                            AppTheme.screenMargin,
                            140,
                          ),
                          children: [
                            _HeroTile(
                              color: AppColors.blue,
                              icon: Icons.favorite_outline,
                              label: 'O nosso casamento',
                              caption: wedding.displayNames,
                              onTap: () => context.push('/wedding'),
                            ),
                            const SizedBox(height: 14),
                            GridView.count(
                              crossAxisCount: 2,
                              shrinkWrap: true,
                              physics: const NeverScrollableScrollPhysics(),
                              mainAxisSpacing: 14,
                              crossAxisSpacing: 14,
                              childAspectRatio: 1.05,
                              children: [
                                _FeedTile(
                                  color: AppColors.green,
                                  icon: Icons.people_outline,
                                  label: 'Convidados',
                                  onTap: () => context.push('/guests'),
                                ),
                                _FeedTile(
                                  color: AppColors.yellow,
                                  icon: Icons.checklist_outlined,
                                  label: 'Checklist',
                                  onTap: () => context.push('/checklist'),
                                ),
                                const _FeedTile(
                                  color: AppColors.gray,
                                  icon: Icons.savings_outlined,
                                  label: 'Orçamento',
                                ),
                                const _FeedTile(
                                  color: AppColors.blue,
                                  icon: Icons.event_seat_outlined,
                                  label: 'Lugares',
                                ),
                                _FeedTile(
                                  color: AppColors.green,
                                  icon: Icons.storefront_outlined,
                                  label: 'Fornecedores',
                                  onTap: () => context.push('/suppliers'),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                    // Camada da frente: cabeçalho fixo (opaco), fica sempre por
                    // cima do conteúdo que desliza por trás dele. A saudação
                    // fica ancorada ao fundo desta caixa — um pouco acima do
                    // centro vertical do ecrã.
                    Positioned(
                      top: 0,
                      left: 0,
                      right: 0,
                      height: headerHeight,
                      child: SafeArea(
                        bottom: false,
                        child: Container(
                          width: double.infinity,
                          color: AppTheme.background,
                          padding: const EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            20,
                            AppTheme.screenMargin,
                            24,
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  ChatIconButton(
                                    onTap: () => openSupportScreen(context),
                                  ),
                                  const Spacer(),
                                  PopupMenuButton<String>(
                                    icon: const GradientMark(
                                      size: 40,
                                      icon: Icons.person_outline,
                                    ),
                                    onSelected: (value) {
                                      if (value == 'logout') {
                                        ref.read(authControllerProvider.notifier).logout();
                                      }
                                    },
                                    itemBuilder: (context) => const [
                                      PopupMenuItem(
                                        value: 'logout',
                                        child: Text('Sair'),
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                              Expanded(
                                child: Align(
                                  alignment: Alignment.bottomLeft,
                                  child: Text(
                                    firstName.isEmpty
                                        ? 'Olá, o que precisas hoje?'
                                        : 'Olá, $firstName, o que precisas hoje?',
                                    style: Theme.of(
                                      context,
                                    ).textTheme.headlineMedium,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    // Desvanecimento logo abaixo do cabeçalho fixo — o
                    // conteúdo esbate-se ao aproximar-se da saudação, em vez
                    // de ser cortado a direito quando desliza por trás dela.
                    Positioned(
                      left: 0,
                      right: 0,
                      top: headerHeight,
                      height: 64,
                      child: IgnorePointer(
                        child: Container(
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: [
                                AppTheme.background,
                                AppTheme.background.withValues(alpha: 0),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                    // Desvanecimento por cima da navbar — o conteúdo esbate-se
                    // em vez de ser cortado a direito ao chegar ao fundo.
                    Positioned(
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 140,
                      child: IgnorePointer(
                        child: Container(
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: [
                                AppTheme.background.withValues(alpha: 0),
                                AppTheme.background,
                              ],
                              stops: const [0.0, 0.65],
                            ),
                          ),
                        ),
                      ),
                    ),
                    Positioned(
                      left: AppTheme.screenMargin,
                      right: AppTheme.screenMargin,
                      bottom: 24,
                      child: const FloatingBottomNav(current: AppTab.home),
                    ),
                  ],
                );
              },
            ),
    );
  }
}

class _HeroTile extends StatelessWidget {
  final Color color;
  final IconData icon;
  final String label;
  final String? caption;
  final VoidCallback? onTap;

  const _HeroTile({
    required this.color,
    required this.icon,
    required this.label,
    this.caption,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(28),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(28),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: const BoxDecoration(
                    color: Colors.white,
                    shape: BoxShape.circle,
                  ),
                  child: Icon(
                    icon,
                    color: AppTheme.ink,
                    size: AppTypography.iconSize,
                  ),
                ),
                const Spacer(),
                Icon(
                  Icons.favorite_border,
                  color: AppTheme.ink,
                  size: AppTypography.iconSize,
                ),
              ],
            ),
            const SizedBox(height: 28),
            Text(
              label,
              style: AppTypography.cardTitle.copyWith(color: AppTheme.ink),
            ),
            if (caption != null)
              Text(
                caption!,
                style: AppTypography.cardSubtitle.copyWith(
                  color: AppTheme.ink.withValues(alpha: 0.7),
                ),
              ),
            const SizedBox(height: 14),
            ArrowCtaButton(label: 'Ver mais', expand: true, onTap: onTap),
          ],
        ),
      ),
    );
  }
}

class _FeedTile extends StatelessWidget {
  final Color color;
  final IconData icon;
  final String label;
  final VoidCallback? onTap;

  const _FeedTile({
    required this.color,
    required this.icon,
    required this.label,
    this.onTap,
  });

  bool get _enabled => onTap != null;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(24),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: _enabled ? color : AppColors.muted,
          borderRadius: BorderRadius.circular(24),
        ),
        child: Stack(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Icon(
                  icon,
                  color: AppTheme.ink.withValues(alpha: _enabled ? 1 : 0.5),
                  size: AppTypography.iconSize,
                ),
                const SizedBox(height: 10),
                Text(
                  label,
                  style: AppTypography.moduleTitle.copyWith(
                    color: AppTheme.ink.withValues(alpha: _enabled ? 1 : 0.5),
                  ),
                ),
              ],
            ),
            if (!_enabled)
              Positioned(
                top: 0,
                right: 0,
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 8,
                    vertical: 4,
                  ),
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.7),
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: const Text(
                    'Em breve',
                    style: TextStyle(fontSize: 10, color: AppTheme.inkMuted),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
