import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_analytics.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../partner_bookings/widgets/request_row.dart';
import '../../../shared/money.dart';

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
    final business = profile?.businessName;
    final bookingsAsync = ref.watch(partnerBookingsProvider(null));
    final newRequests = bookingsAsync.maybeWhen(
      data: (list) =>
          list.where((b) => b.status == BookingStatus.novo).toList(),
      orElse: () => const <Booking>[],
    );

    // Redesign 2026-10, igual ao canvas "Parceiro — painel": nome do
    // negócio, saudação, seis quadrados, dois números e os pedidos novos.
    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: ListView(
              padding: const EdgeInsets.fromLTRB(28, 20, 28, 140),
              children: [
                SizedBox(
                  height: 46,
                  child: Row(
                    children: [
                      // `Expanded` + `Align` em vez de `Flexible` + `Spacer`: os
                      // dois dividiam a largura a meias e cortavam o nome do
                      // negócio a ~14 letras com espaço livre ao lado.
                      if (business != null && business.isNotEmpty)
                        Expanded(
                          child: Align(
                          alignment: Alignment.centerLeft,
                          child: Container(
                            height: 32,
                            padding: const EdgeInsets.symmetric(horizontal: 12),
                            decoration: BoxDecoration(
                              color: AppColors.gray,
                              borderRadius: BorderRadius.circular(AppRadius.pill),
                            ),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(Icons.storefront_outlined,
                                    size: 14, color: AppTheme.accentOliveDark),
                                const SizedBox(width: 6),
                                Flexible(
                                  child: Text(
                                    business,
                                    overflow: TextOverflow.ellipsis,
                                    style: TextStyle(
                                      fontSize: AppFontSize.sm,
                                      fontWeight: FontWeight.w700,
                                      color: AppTheme.accentOliveDark,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          ),
                        ),
                      if (business != null && business.isNotEmpty)
                        const SizedBox(width: 12)
                      else
                        const Spacer(),
                      PopupMenuButton<String>(
                        tooltip: 'Mais opções',
                        onSelected: (value) {
                          if (value == 'logout') {
                            ref.read(authControllerProvider.notifier).logout();
                          }
                        },
                        itemBuilder: (context) => const [
                          PopupMenuItem(value: 'logout', child: Text('Terminar sessão')),
                        ],
                        child: Container(
                          width: 44,
                          height: 44,
                          decoration: const BoxDecoration(
                            color: AppTheme.surface,
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(Icons.more_horiz, color: AppTheme.ink),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 18),
                const Text(
                  'PAINEL',
                  style: TextStyle(
                    fontSize: AppFontSize.xs,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 1.2,
                    color: AppTheme.inkMuted,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  firstName.isEmpty
                      ? 'Olá, o que precisas hoje?'
                      : 'Olá, $firstName, o que precisas hoje?',
                  style: const TextStyle(
                    fontSize: AppFontSize.h1,
                    height: 34 / 28,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.ink,
                  ),
                ),
                const SizedBox(height: 20),
                // Canvas "Parceiro — painel": só os números e os novos pedidos
                // (calendário, contratos e pagamentos estão no Perfil).
                const _PartnerDashboardSummary(),
                const SizedBox(height: 14),
                // Atalhos do negócio (pedido 2026-10-17): saíram do Perfil.
                // 3 linhas cheias (Reservas e Contratos ocupam duas colunas)
                // em vez de "Contratos" sozinho na última linha (revisão
                // 2026-10-17).
                LayoutBuilder(
                  builder: (context, c) {
                    const gap = 8.0;
                    final unit = (c.maxWidth - 2 * gap) / 3;
                    final height = unit / 1.25;
                    return Wrap(
                      spacing: gap,
                      runSpacing: gap,
                      children: [
                        for (final (icon, label, route, span) in const [
                          (Icons.event_available_outlined, 'Reservas', '/partner-requests', 2),
                          (Icons.sell_outlined, 'Serviços e preços', '/partner-pricing', 1),
                          (Icons.photo_library_outlined, 'Portefólio', '/partner-portfolio', 1),
                          (Icons.star_border_rounded, 'Avaliações', '/partner-reviews', 1),
                          (Icons.bar_chart_rounded, 'Resultados', '/partner-stats', 1),
                          (Icons.payments_outlined, 'Pagamentos', '/partner-payments', 1),
                          (Icons.description_outlined, 'Contratos', '/partner-contracts', 2),
                        ])
                          SizedBox(
                            width: unit * span + gap * (span - 1),
                            height: height,
                            child: _PartnerTile(
                              color: route == '/partner-requests' ? AppColors.gray : AppTheme.surface,
                              icon: icon,
                              label: label,
                              count: route == '/partner-requests' ? newRequests.length : 0,
                              onTap: () => context.push(route),
                            ),
                          ),
                      ],
                    );
                  },
                ),
                const SizedBox(height: 22),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    const Expanded(
                      child: Text(
                        'Novos pedidos',
                        style: TextStyle(
                          fontSize: AppFontSize.xl,
                          fontWeight: FontWeight.w700,
                          color: AppTheme.ink,
                        ),
                      ),
                    ),
                    TextButton(
                      onPressed: () => context.push('/partner-requests'),
                      style: TextButton.styleFrom(
                        foregroundColor: AppTheme.accentOliveDark,
                        padding: EdgeInsets.zero,
                        textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, 
                          fontSize: AppFontSize.md,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      child: const Text('Ver todos'),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                if (newRequests.isEmpty)
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: AppTheme.surface,
                      borderRadius: BorderRadius.circular(AppRadius.lg),
                    ),
                    child: const Text(
                      'Sem pedidos novos por agora.',
                      style: TextStyle(color: AppTheme.inkMuted),
                    ),
                  )
                else
                  for (final booking in newRequests.take(3)) ...[
                    RequestRow(
                      booking: booking,
                      compact: true,
                      onTap: () => context.push(
                        '/partner-requests/${booking.id}',
                        extra: booking,
                      ),
                    ),
                    const SizedBox(height: 10),
                  ],
              ],
            ),
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: PartnerBottomNav(current: PartnerTab.home),
          ),
        ],
      ),
    );
  }
}

/// Resumo de painel — reservas pendentes e vendas dos últimos 30 dias,
/// ambos de dados reais (`partnerBookingsProvider`,
/// `partnerAnalyticsProvider`).
class _PartnerDashboardSummary extends ConsumerWidget {
  const _PartnerDashboardSummary();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final bookingsAsync = ref.watch(partnerBookingsProvider(null));
    // Mesmos números do ecrã Resultados (`partnerAnalyticsProvider`,
    // reservas confirmadas reais) — antes vinha de `partnerStatsProvider`,
    // que misturava valores de exemplo do MockBackend.
    final statsAsync = ref.watch(partnerAnalyticsProvider(AnalyticsPeriod.month));

    final pendingBookings = bookingsAsync.maybeWhen(
      data: (list) => list
          .where(
            (b) =>
                b.status == BookingStatus.novo ||
                b.status == BookingStatus.emAnalise,
          )
          .toList(),
      orElse: () => const <Booking>[],
    );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Expanded(
              child: SnappyTap(
                onTap: () => context.push('/partner-requests'),
                child: _MetricCard(
                label: 'Reservas pendentes',
                value: '${pendingBookings.length}',
                color: AppColors.blue,
              ),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: SnappyTap(
                onTap: () => context.push('/partner-stats'),
                child: _MetricCard(
                label: 'Vendas · 30 dias',
                value: statsAsync.maybeWhen(
                  data: (s) => euros(s.revenue),
                  orElse: () => '—',
                ),
                color: AppColors.green,
              ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class _MetricCard extends StatelessWidget {
  final String label;
  final String value;
  final Color color;

  const _MetricCard({
    required this.label,
    required this.value,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
          ),
          const SizedBox(height: 4),
          Text(
            value,
            style: const TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: AppFontSize.h3,
              color: AppTheme.ink,
            ),
          ),
        ],
      ),
    );
  }
}



class _PartnerTile extends StatelessWidget {
  final Color color;
  final IconData icon;
  final String label;
  final int count;
  final VoidCallback? onTap;

  const _PartnerTile({
    required this.color,
    required this.icon,
    required this.label,
    this.count = 0,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(AppRadius.lg),
        ),
        child: Stack(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(icon, color: AppTheme.ink, size: 22),
                const Spacer(),
                Text(
                  label,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontSize: AppFontSize.sm,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.ink,
                    height: 15 / 12,
                  ),
                ),
              ],
            ),
            if (count > 0)
              Positioned(
                top: 0,
                right: 0,
                child: Container(
                  constraints: const BoxConstraints(minWidth: 20),
                  height: 20,
                  padding: const EdgeInsets.symmetric(horizontal: 6),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: AppTheme.accentOliveDark,
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                  ),
                  child: Text(
                    '$count',
                    style: const TextStyle(
                      fontSize: AppFontSize.xs,
                      fontWeight: FontWeight.w700,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
