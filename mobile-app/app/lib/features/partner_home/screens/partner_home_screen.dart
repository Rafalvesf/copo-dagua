import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

/// Área do parceiro (fornecedor) — versão mínima. Os módulos reais
/// (Quotations, Bookings, Calendar, Profile, Contracts, Payouts) estão
/// documentados em `partner-app/` mas ainda não implementados nesta app;
/// este ecrã só desbloqueia a conta para deixar de cair num beco sem
/// saída depois do registo.
///
/// Cabeçalho com rótulo pequeno + saudação serifada e grelha de módulos
/// em "bento boxes" a 3 colunas (ícone num círculo pastel + rótulo),
/// seguindo o estilo de referência partilhado para o ecrã de Parceiros.
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
                        crossAxisCount: 3,
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        mainAxisSpacing: 12,
                        crossAxisSpacing: 12,
                        childAspectRatio: 0.92,
                        children: [
                          _PartnerTile(
                            color: AppColors.blue,
                            icon: Icons.request_quote_outlined,
                            label: 'Pedidos de orçamento',
                            onTap: () => context.push('/partner-requests'),
                          ),
                          const _PartnerTile(
                            color: AppColors.green,
                            icon: Icons.event_available_outlined,
                            label: 'Reservas',
                          ),
                          _PartnerTile(
                            color: AppColors.yellow,
                            icon: Icons.calendar_month_outlined,
                            label: 'Calendário',
                            onTap: () => context.push('/partner-calendar'),
                          ),
                          _PartnerTile(
                            color: AppColors.pink,
                            icon: Icons.storefront_outlined,
                            label: 'Perfil de negócio',
                            onTap: () => context.push('/partner-profile'),
                          ),
                          _PartnerTile(
                            color: AppColors.gray,
                            icon: Icons.description_outlined,
                            label: 'Contratos',
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
                    color: const Color(0xFFFAF7F0), // topo de AppGradients.feed
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
                            Text(
                              'PAINEL',
                              style: TextStyle(
                                color: AppTheme.inkMuted,
                                fontSize: 12,
                                fontWeight: FontWeight.w700,
                                letterSpacing: 1.2,
                              ),
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
                              ).textTheme.headlineMedium?.copyWith(
                                fontSize: 42,
                                height: 1.15,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              const Positioned(
                left: 0,
                right: 0,
                bottom: 0,
                child: PartnerBottomNav(current: PartnerTab.home),
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

  const _PartnerTile({
    required this.color,
    required this.icon,
    required this.label,
    this.onTap,
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
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(22),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 38,
              height: 38,
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: 0.6),
                shape: BoxShape.circle,
              ),
              child: Icon(icon, color: AppTheme.ink, size: 19),
            ),
            const Spacer(),
            Text(
              label,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(
                fontSize: 12.5,
                fontWeight: FontWeight.w700,
                color: AppTheme.ink,
                height: 1.2,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
