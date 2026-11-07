import 'package:flutter/material.dart';
import 'package:copo_dagua_app/features/messages/team_messages.dart';
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
import '../widgets/partner_invite_card.dart';
import '../widgets/partner_promotion_card.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../core/partners/partner_pro.dart';

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
    final thisWeek = bookingsAsync.maybeWhen(
      data: (list) {
        final today = DateTime(DateTime.now().year, DateTime.now().month, DateTime.now().day);
        final end = today.add(const Duration(days: 7));
        return list
            .where((b) => b.status == BookingStatus.confirmado && !b.eventDate.isBefore(today) && b.eventDate.isBefore(end))
            .toList()
          ..sort((a, b) => a.eventDate.compareTo(b.eventDate));
      },
      orElse: () => const <Booking>[],
    );
    final isPro = ref.watch(myPartnerProProvider).value?.active ?? false;
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
                const TeamBannerCard(padding: EdgeInsets.only(bottom: 16)),
                Text(
                  firstName.isEmpty ? 'Olá!' : 'Olá, $firstName!',
                  style: const TextStyle(fontSize: 26, height: 32 / 26, fontWeight: FontWeight.w700, color: AppTheme.ink),
                ),
                const SizedBox(height: 4),
                Text(
                  newRequests.isEmpty
                      ? 'Sem pedidos à espera. Avisamos-te quando chegar um.'
                      : 'Tens ${newRequests.length} ${newRequests.length == 1 ? 'pedido' : 'pedidos'} à espera de resposta.',
                  style: const TextStyle(fontSize: 15, height: 1.4, color: AppTheme.inkMuted),
                ),
                const SizedBox(height: 18),
                // Rearranjo 2026-11-07 ("tem muitos botões"): o que precisa de
                // resposta primeiro; depois vendas, a semana, o negócio (4
                // mosaicos) e a montra numa lista. Canvas "Parceiros · Início".
                if (newRequests.isNotEmpty) ...[
                  SectionTitle(
                    'Responder primeiro',
                    trailing: GestureDetector(
                      onTap: () => context.push('/partner-requests'),
                      child: Text('Ver todos',
                          style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                    ),
                  ),
                  for (final booking in newRequests.take(2)) ...[
                    RequestRow(
                      booking: booking,
                      compact: true,
                      onTap: () => context.push('/partner-requests/${booking.id}', extra: booking),
                    ),
                    const SizedBox(height: 10),
                  ],
                  const SizedBox(height: 8),
                ],
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
                if (thisWeek.isNotEmpty) ...[
                  const SectionTitle('Esta semana'),
                  for (final b in thisWeek.take(3)) ...[
                    V2RowCard(
                      lead: const StickerIcon(Icons.event_outlined),
                      title: '${b.eventType.label} · ${b.clientName}',
                      sub: [requestDateLabel(b.eventDate), if (b.city.isNotEmpty) b.city].join(' · '),
                      onTap: () => context.push('/partner-requests/${b.id}', extra: b),
                    ),
                    const SizedBox(height: 10),
                  ],
                ],
                const SectionTitle('O teu negócio'),
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
                ]),
                const SectionTitle('A tua montra'),
                _MenuList(items: [
                  (Icons.sell_outlined, 'Serviços e preços', 'Pacotes e orçamentos', '/partner-pricing'),
                  (Icons.photo_library_outlined, 'Portefólio', 'Fotos e vídeos', '/partner-portfolio'),
                  (Icons.storefront_outlined, 'Loja', 'Produtos e encomendas', '/partner-shop'),
                  (
                    Icons.star_border_rounded,
                    'Avaliações',
                    stats?.averageRating == null ? 'Ainda sem avaliações' : '${stats!.averageRating!.toStringAsFixed(1).replaceAll('.', ',')} de 5',
                    '/partner-reviews',
                  ),
                  (Icons.bar_chart_rounded, 'Resultados', 'Pedidos e conversão', '/partner-stats'),
                ]),
                const SectionTitle('Crescer'),
                _MenuList(items: [
                  (
                    Icons.verified_outlined,
                    'Plano Pro',
                    isPro ? 'Ativo · ver a poupança' : 'Menos comissão e mais visibilidade',
                    '/partner-pro',
                  ),
                ]),
                const SizedBox(height: 14),
                // Convite de clientes e selo de fundador (migração 151).
                const PartnerInviteCard(),
                const SizedBox(height: 14),
                // Destaque pago (migração 155).
                const PartnerPromotionCard(),
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



/// Lista branca com várias linhas (ícone, título, detalhe) — usada na
/// "Montra" e em "Crescer" em vez de mais mosaicos (2026-11-07).
class _MenuList extends StatelessWidget {
  final List<(IconData, String, String, String)> items;
  const _MenuList({required this.items});

  @override
  Widget build(BuildContext context) => Container(
        decoration: softCard(),
        child: Column(
          children: [
            for (final (i, (icon, title, sub, route)) in items.indexed) ...[
              if (i > 0) const Divider(height: 1, indent: 60, color: AppTheme.borderMuted),
              InkWell(
                onTap: () => context.push(route),
                borderRadius: BorderRadius.circular(AppRadius.lg),
                child: ConstrainedBox(
                  constraints: const BoxConstraints(minHeight: 60),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                    child: Row(
                      children: [
                        Icon(icon, size: 22, color: AppTheme.accentOliveDark),
                        const SizedBox(width: 22),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                              Text(sub, style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                            ],
                          ),
                        ),
                        const Icon(Icons.chevron_right_rounded, color: AppTheme.inkMuted),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ],
        ),
      );
}
