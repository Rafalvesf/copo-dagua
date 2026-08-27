import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

/// Área do parceiro (fornecedor) — versão mínima. Os módulos reais
/// (Quotations, Bookings, Calendar, Profile, Contracts, Payouts) estão
/// documentados em `partner-app/` mas ainda não implementados nesta app;
/// este ecrã só desbloqueia a conta para deixar de cair num beco sem
/// saída depois do registo.
///
/// Estrutura deliberadamente igual ao HomeFeedScreen (cabeçalho fixo com
/// saudação + desvanecimento do conteúdo por baixo, grelha de módulos a
/// 2 colunas) — pedido explícito de coerência entre a área do Noivo/a e
/// a área do Parceiro, em vez de um layout próprio diferente.
class PartnerHomeScreen extends ConsumerWidget {
  const PartnerHomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final firstName = profile?.fullName.split(' ').first ?? '';

    const topOverlap = 6.0;
    const topFadeHeight = 32.0;
    const contentTopMargin = topOverlap + topFadeHeight;
    const bottomFadeHeight = 140.0;

    return GradientScaffold(
      background: AppBackground.feed,
      body: LayoutBuilder(
        builder: (context, constraints) {
          final headerHeight = constraints.maxHeight * 0.40;
          final maxHeight = constraints.maxHeight;

          return Stack(
            children: [
              Positioned.fill(
                child: ShaderMask(
                  blendMode: BlendMode.dstIn,
                  shaderCallback: (rect) {
                    final topHiddenUntil =
                        (headerHeight + topOverlap) / maxHeight;
                    final topEnd =
                        (headerHeight + topOverlap + topFadeHeight) /
                        maxHeight;
                    final bottomStart = 1 - (bottomFadeHeight / maxHeight);
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
                          const _PartnerTile(
                            color: AppColors.blue,
                            icon: Icons.request_quote_outlined,
                            label: 'Pedidos de orçamento',
                          ),
                          const _PartnerTile(
                            color: AppColors.green,
                            icon: Icons.event_available_outlined,
                            label: 'Reservas',
                          ),
                          const _PartnerTile(
                            color: AppColors.yellow,
                            icon: Icons.calendar_month_outlined,
                            label: 'Calendário',
                          ),
                          const _PartnerTile(
                            color: AppColors.pink,
                            icon: Icons.storefront_outlined,
                            label: 'Perfil de negócio',
                          ),
                          _PartnerTile(
                            color: AppColors.gray,
                            icon: Icons.description_outlined,
                            label: 'Contratos',
                            badge: 'Chat',
                            onTap: () => context.push('/partner-chat'),
                          ),
                          const _PartnerTile(
                            color: AppColors.purple,
                            icon: Icons.payments_outlined,
                            label: 'Pagamentos',
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              Positioned(
                top: 0,
                left: 0,
                right: 0,
                height: headerHeight,
                child: SafeArea(
                  bottom: false,
                  child: Container(
                    width: double.infinity,
                    color: const Color(0xFFFBF6F0), // topo de AppGradients.feed
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
                                icon: Icons.storefront_outlined,
                              ),
                              onSelected: (value) {
                                if (value == 'logout') {
                                  ref
                                      .read(authControllerProvider.notifier)
                                      .logout();
                                } else if (value == 'switch') {
                                  ref
                                      .read(authControllerProvider.notifier)
                                      .switchDemoAccount();
                                }
                              },
                              itemBuilder: (context) => const [
                                PopupMenuItem(
                                  value: 'switch',
                                  child: Text('Ver como Noivo/a'),
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
              const Positioned.fill(child: DraggableChatBubble()),
            ],
          );
        },
      ),
    );
  }
}

class _PartnerTile extends StatelessWidget {
  final Color color;
  final IconData icon;
  final String label;
  final VoidCallback? onTap;
  final String badge;

  const _PartnerTile({
    required this.color,
    required this.icon,
    required this.label,
    this.onTap,
    this.badge = 'Em breve',
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap.builder(
      onTap:
          onTap ??
          () => ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Em breve.')),
          ),
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(24),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Stack(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Icon(icon, color: AppTheme.ink, size: AppTypography.iconSize),
                const SizedBox(height: 10),
                Text(label, style: AppTypography.moduleTitle),
              ],
            ),
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
                child: Text(
                  badge,
                  style: const TextStyle(fontSize: 10, color: AppTheme.inkMuted),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
