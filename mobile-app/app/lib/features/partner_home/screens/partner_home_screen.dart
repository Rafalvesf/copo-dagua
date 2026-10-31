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
import '../../../shared/widgets/partner_notification_bell.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../partner_bookings/widgets/request_row.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/v2_kit.dart';

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

    // Redesign 2026-10-19, canvas "Parceiro — painel (redesign)": pílula
    // do negócio, saudação, cartão verde com as vendas do mês, mosaicos de
    // cor com autocolantes e os pedidos novos em cartões brancos.
    final stats = ref.watch(partnerAnalyticsProvider(AnalyticsPeriod.month)).value;
    final pending = bookingsAsync.maybeWhen(
      data: (list) => list.where((b) => b.status == BookingStatus.aceite || b.status == BookingStatus.emAnalise).length,
      orElse: () => 0,
    );
    final upcoming = bookingsAsync.maybeWhen(
      data: (list) {
        final now = DateTime.now();
        final next = list
            .where((b) => b.status == BookingStatus.confirmado && !b.eventDate.isBefore(DateTime(now.year, now.month, now.day)))
            .toList()
          ..sort((a, b) => a.eventDate.compareTo(b.eventDate));
        return next.isEmpty ? null : next.first;
      },
      orElse: () => null,
    );
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: ListView(
              padding: const EdgeInsets.fromLTRB(28, 20, 28, 140),
              children: [
                Row(
                  children: [
                    if (business != null && business.isNotEmpty)
                      Flexible(
                        child: Container(
                          height: 34,
                          padding: const EdgeInsets.fromLTRB(4, 0, 12, 0),
                          decoration: softCard(radius: 999),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              V2Avatar(business, size: 26, imageUrl: profile?.avatarUrl),
                              const SizedBox(width: 8),
                              Flexible(
                                child: Text(
                                  business,
                                  overflow: TextOverflow.ellipsis,
                                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    const Spacer(),
                    const PartnerNotificationBell(),
                    PopupMenuButton<String>(
                      tooltip: 'Mais opções',
                      onSelected: (value) {
                        if (value == 'logout') {
                          ref.read(authControllerProvider.notifier).logout();
                        } else {
                          context.push(value);
                        }
                      },
                      itemBuilder: (context) => const [
                        PopupMenuItem(value: '/settings', child: Text('Definições')),
                        PopupMenuItem(value: 'logout', child: Text('Terminar sessão')),
                      ],
                      child: const IgnorePointer(
                        child: V2RoundButton(icon: Icons.more_horiz, tooltip: 'Mais opções'),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                Text(
                  firstName.isEmpty ? 'Olá! O que precisas hoje?' : 'Olá, $firstName! O que precisas hoje?',
                  style: const TextStyle(fontSize: 26, height: 32 / 26, fontWeight: FontWeight.w700, color: AppTheme.ink),
                ),
                const SizedBox(height: 18),
                SnappyTap(
                  onTap: () => context.push('/partner-stats'),
                  child: GreenHero(
                    label: 'VENDAS ESTE MÊS',
                    value: stats == null ? '—' : euros(stats.revenue),
                    suffix: stats == null ? null : '${stats.bookings} ${stats.bookings == 1 ? 'reserva confirmada' : 'reservas confirmadas'}',
                    doodles: const [Icons.storefront_outlined, Icons.auto_awesome_outlined, Icons.favorite_border],
                    footer: Wrap(spacing: 8, runSpacing: 8, children: [
                      HeroPill('${newRequests.length} ${newRequests.length == 1 ? 'pedido novo' : 'pedidos novos'}', solid: true),
                      HeroPill('$pending ${pending == 1 ? 'reserva pendente' : 'reservas pendentes'}'),
                    ]),
                  ),
                ),
                const SizedBox(height: 14),
                V2Grid([
                  V2Tile(
                    icon: Icons.event_available_outlined,
                    label: 'Reservas',
                    sub: pending == 0 ? 'Tudo em dia' : '$pending pendentes',
                    index: 0,
                    badge: newRequests.length,
                    onTap: () => context.push('/partner-requests'),
                  ),
                  V2Tile(
                    icon: Icons.calendar_month_outlined,
                    label: 'Calendário',
                    sub: upcoming == null ? 'Sem eventos marcados' : 'Próximo: ${requestDateLabel(upcoming.eventDate)}',
                    index: 1,
                    onTap: () => context.push('/partner-calendar'),
                  ),
                  V2Tile(
                    icon: Icons.payments_outlined,
                    label: 'Pagamentos',
                    sub: 'Saldo e levantamentos',
                    index: 2,
                    onTap: () => context.push('/partner-payments'),
                  ),
                  V2Tile(
                    icon: Icons.description_outlined,
                    label: 'Contratos',
                    sub: 'Reservas assinadas',
                    index: 3,
                    onTap: () => context.push('/partner-contracts'),
                  ),
                  V2Tile(
                    icon: Icons.sell_outlined,
                    label: 'Serviços e preços',
                    sub: 'Pacotes e orçamentos',
                    index: 4,
                    onTap: () => context.push('/partner-pricing'),
                  ),
                  V2Tile(
                    icon: Icons.photo_library_outlined,
                    label: 'Portefólio',
                    sub: 'Fotos e vídeos',
                    index: 5,
                    onTap: () => context.push('/partner-portfolio'),
                  ),
                  V2Tile(
                    icon: Icons.star_border_rounded,
                    label: 'Avaliações',
                    sub: stats?.averageRating == null ? 'Ainda sem avaliações' : '${stats!.averageRating!.toStringAsFixed(1).replaceAll('.', ',')} de 5',
                    index: 6,
                    onTap: () => context.push('/partner-reviews'),
                  ),
                  V2Tile(
                    icon: Icons.bar_chart_rounded,
                    label: 'Resultados',
                    sub: 'Pedidos e conversão',
                    index: 7,
                    onTap: () => context.push('/partner-stats'),
                  ),
                ]),
                SectionTitle(
                  'Novos pedidos',
                  trailing: GestureDetector(
                    onTap: () => context.push('/partner-requests'),
                    child: Text('Ver todos',
                        style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                  ),
                ),
                if (newRequests.isEmpty)
                  const V2RowCard(
                    lead: StickerIcon(Icons.inbox_outlined),
                    title: 'Sem pedidos novos por agora',
                    sub: 'Avisamos-te assim que um cliente te contactar.',
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

