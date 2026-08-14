import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

class HomeFeedScreen extends ConsumerWidget {
  const HomeFeedScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;
    final profile = ref.watch(authControllerProvider).profile;
    final firstName = profile?.fullName.split(' ').first ?? '';

    // Zona escondida por baixo do cabeçalho: só começa a desvanecer para
    // visível um pouco DEPOIS do fim do cabeçalho (topOverlap), para nunca
    // deixar uma frincha de conteúdo a 100% opaco a espreitar na costura
    // entre o cabeçalho e a máscara, por causa de arredondamento de pixel.
    const topOverlap = 6.0;
    const topFadeHeight = 32.0;
    const contentTopMargin = topOverlap + topFadeHeight;
    const bottomFadeHeight = 140.0;

    return Scaffold(
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : LayoutBuilder(
              builder: (context, constraints) {
                // Texto a 40% da altura do ecrã.
                final headerHeight = constraints.maxHeight * 0.40;
                final maxHeight = constraints.maxHeight;

                return Stack(
                  children: [
                    // Camada de trás: conteúdo com scroll próprio, começa por
                    // baixo do cabeçalho e desliza para trás dele. O
                    // ShaderMask aplica o desvanecimento diretamente sobre os
                    // pixels do conteúdo (em vez de uma caixa sobreposta
                    // separada), para nunca deixar uma costura/linha visível
                    // entre camadas — e para o efeito acompanhar o scroll,
                    // porque a máscara reage à posição real de cada pixel.
                    Positioned.fill(
                      child: ShaderMask(
                        blendMode: BlendMode.dstIn,
                        shaderCallback: (rect) {
                          // O início da zona escondida fica um pouco depois
                          // do fim do cabeçalho (não exatamente colado a
                          // ele), para nunca deixar uma frincha de conteúdo
                          // a 100% de opacidade a espreitar entre as duas
                          // camadas por causa de arredondamento de pixel.
                          final topHiddenUntil =
                              (headerHeight + topOverlap) / maxHeight;
                          final topEnd =
                              (headerHeight + topOverlap + topFadeHeight) /
                              maxHeight;
                          final bottomStart =
                              1 - (bottomFadeHeight / maxHeight);
                          final bottomEnd =
                              1 - (bottomFadeHeight * 0.35 / maxHeight);
                          return LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: const [
                              Colors.transparent,
                              Colors.transparent,
                              Colors.black,
                              Colors.black,
                              Colors.transparent,
                              Colors.transparent,
                            ],
                            stops: [
                              0.0,
                              topHiddenUntil,
                              topEnd,
                              bottomStart,
                              bottomEnd,
                              1.0,
                            ],
                          ).createShader(rect);
                        },
                        child: ListView(
                          padding: EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            headerHeight + contentTopMargin,
                            AppTheme.screenMargin,
                            140,
                          ),
                          children: [
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
                                _FeedTile(
                                  color: AppColors.gray,
                                  icon: Icons.savings_outlined,
                                  label: 'Orçamento',
                                  onTap: () => context.push('/budget'),
                                ),
                                _FeedTile(
                                  color: AppColors.blue,
                                  icon: Icons.event_seat_outlined,
                                  label: 'Lugares',
                                  onTap: () => context.push('/seating'),
                                ),
                                _FeedTile(
                                  color: AppColors.pink,
                                  icon: Icons.storefront_outlined,
                                  label: 'Parceiros',
                                  onTap: () => context.push('/partners'),
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
                            12,
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
                                        ref
                                            .read(
                                              authControllerProvider.notifier,
                                            )
                                            .logout();
                                      } else if (value == 'switch') {
                                        ref
                                            .read(
                                              authControllerProvider.notifier,
                                            )
                                            .switchDemoAccount();
                                      }
                                    },
                                    itemBuilder: (context) => const [
                                      PopupMenuItem(
                                        value: 'switch',
                                        child: Text('Ver como Parceiro'),
                                      ),
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
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: _enabled ? color : AppColors.muted,
          borderRadius: BorderRadius.circular(24),
          boxShadow: !_enabled
              ? null
              : hovered
              ? AppTheme.cardShadowStrong
              : AppTheme.cardShadow,
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
