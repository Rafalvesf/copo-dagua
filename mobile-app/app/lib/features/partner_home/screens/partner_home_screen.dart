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
    final pro = ref.watch(myPartnerProProvider).value;
    final isPro = pro?.active ?? false;
    // Canvas "Parceiros · Início Normal e Pro" (2026-11-07).
    final yearStats = isPro ? ref.watch(partnerAnalyticsProvider(AnalyticsPeriod.year)).value : null;
    final proStats = isPro ? ref.watch(partnerProStatsProvider).value : null;
    // Poupança da comissão −N pontos sobre as vendas do mês (estimativa).
    final commissionSaving = stats == null || pro == null ? 0.0 : stats.revenue * pro.feeDiscount / 100;
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
                          decoration: isPro
                              ? BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.circular(999),
                                  border: Border.all(color: _gold, width: 1.5),
                                )
                              : softCard(radius: 999),
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
                              if (isPro) ...[
                                const SizedBox(width: 6),
                                const _ProBadge(),
                              ],
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
                if (isPro && pro != null) ...[
                  SnappyTap(
                    onTap: () => context.push('/partner-stats'),
                    child: _ProHero(stats: stats, year: yearStats, pending: pending),
                  ),
                  const SizedBox(height: 14),
                  _ProSavingsCard(
                    saving: commissionSaving,
                    bookings: stats?.bookings ?? 0,
                    feeDiscount: pro.feeDiscount,
                    price: pro.interval == 'year' ? pro.priceYearly / 12 : pro.priceMonthly,
                    gift: pro.interval == 'gift',
                  ),
                  const SizedBox(height: 14),
                  _ProStatsRow(stats: stats, pro: proStats),
                ] else
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
                  (
                    Icons.storefront_outlined,
                    'Loja',
                    pro == null
                        ? 'Produtos e encomendas'
                        : isPro
                            ? '${pro.products} ${pro.products == 1 ? 'produto' : 'produtos'} · sem limite'
                            : '${pro.products} de ${pro.freeShopProducts} produtos',
                    '/partner-shop',
                  ),
                  (
                    Icons.star_border_rounded,
                    'Avaliações',
                    stats?.averageRating == null ? 'Ainda sem avaliações' : '${stats!.averageRating!.toStringAsFixed(1).replaceAll('.', ',')} de 5',
                    '/partner-reviews',
                  ),
                  (Icons.bar_chart_rounded, 'Resultados', 'Pedidos e conversão', '/partner-stats'),
                ]),
                const SectionTitle('Crescer'),
                if (!isPro && pro != null && pro.enabled) ...[
                  _ProUpsellCard(pro: pro, saving: commissionSaving, bookings: stats?.bookings ?? 0),
                  const SizedBox(height: 14),
                ],
                // Convite de clientes e selo de fundador (migração 151).
                const PartnerInviteCard(),
                const SizedBox(height: 14),
                // Destaque pago (migração 155).
                const PartnerPromotionCard(),
                if (isPro && pro != null) ...[
                  const SizedBox(height: 18),
                  Center(
                    child: TextButton(
                      onPressed: () => context.push('/partner-pro'),
                      style: TextButton.styleFrom(foregroundColor: AppTheme.inkMuted),
                      child: Text(
                        pro.until == null
                            ? 'Pro ativo · Gerir subscrição'
                            : 'Pro ativo até ${_shortDate(pro.until!)} · Gerir subscrição',
                        style: const TextStyle(fontSize: 13),
                      ),
                    ),
                  ),
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


// ---------- Pro (canvas "Parceiros · Início Normal e Pro") ----------

const _gold = Color(0xFFD9B96E);
const _goldInk = Color(0xFF8C6D2C);
const _proInk = Color(0xFF171713);
const _proMuted = Color(0xFFC9C4B8);
const _months = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];

String _shortDate(DateTime d) => '${d.day} ${_months[d.month - 1]}';

String _num(double v) => v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(1).replaceAll('.', ',');

class _ProBadge extends StatelessWidget {
  const _ProBadge();

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3),
        decoration: BoxDecoration(color: _gold, borderRadius: BorderRadius.circular(999)),
        child: const Text('PRO', style: TextStyle(fontSize: 10, letterSpacing: 1.2, fontWeight: FontWeight.w700, color: _proInk)),
      );
}

/// Vendas do mês em escuro, com a comparação ao período anterior e os
/// últimos 7 meses.
class _ProHero extends StatelessWidget {
  final PartnerAnalytics? stats;
  final PartnerAnalytics? year;
  final int pending;
  const _ProHero({required this.stats, required this.year, required this.pending});

  @override
  Widget build(BuildContext context) {
    final s = stats;
    final change = s == null || s.previousRevenue <= 0 ? null : (s.revenue - s.previousRevenue) / s.previousRevenue * 100;
    final series = (year?.revenueSeries ?? const <AnalyticsPoint>[]);
    final last = series.length > 7 ? series.sublist(series.length - 7) : series;
    final maxV = last.fold<double>(0, (m, p) => p.value > m ? p.value : m);
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(color: _proInk, borderRadius: BorderRadius.circular(28)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Expanded(
                child: Text('VENDAS ESTE MÊS',
                    style: TextStyle(fontSize: 12, letterSpacing: 1.4, fontWeight: FontWeight.w700, color: _gold)),
              ),
              if (change != null)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(
                    color: change >= 0 ? const Color(0xFFCFE3C2) : const Color(0xFFF3DEE0),
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: Text(
                    '${change >= 0 ? '+' : '−'}${_num(change.abs().roundToDouble())}% que o mês passado',
                    style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: _proInk),
                  ),
                ),
            ],
          ),
          const SizedBox(height: 10),
          Text(s == null ? '—' : euros(s.revenue),
              style: const TextStyle(fontSize: 40, height: 1, fontWeight: FontWeight.w700, color: Colors.white)),
          const SizedBox(height: 8),
          Text(
            s == null
                ? ''
                : '${s.bookings} ${s.bookings == 1 ? 'reserva confirmada' : 'reservas confirmadas'} · $pending ${pending == 1 ? 'pendente' : 'pendentes'}',
            style: const TextStyle(fontSize: 14, color: _proMuted),
          ),
          if (last.isNotEmpty) ...[
            const SizedBox(height: 16),
            SizedBox(
              height: 56,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  for (final (i, p) in last.indexed) ...[
                    if (i > 0) const SizedBox(width: 10),
                    Expanded(
                      child: Container(
                        height: maxV <= 0 ? 6 : 6 + 50 * (p.value / maxV),
                        decoration: BoxDecoration(
                          color: i == last.length - 1 ? _gold : const Color(0xFF3A3833),
                          borderRadius: BorderRadius.circular(4),
                        ),
                      ),
                    ),
                  ],
                ],
              ),
            ),
            const SizedBox(height: 6),
            Row(
              children: [
                for (final (i, p) in last.indexed) ...[
                  if (i > 0) const SizedBox(width: 10),
                  Expanded(
                    child: Text(
                      _months[p.start.month - 1],
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: i == last.length - 1 ? FontWeight.w700 : FontWeight.w400,
                        color: i == last.length - 1 ? _gold : _proMuted,
                      ),
                    ),
                  ),
                ],
              ],
            ),
          ],
        ],
      ),
    );
  }
}

/// "O Pro este mês": quanto poupou na comissão, ao lado do preço do Pro.
class _ProSavingsCard extends StatelessWidget {
  final double saving;
  final int bookings;
  final double feeDiscount;
  final double price;
  final bool gift;
  const _ProSavingsCard({required this.saving, required this.bookings, required this.feeDiscount, required this.price, required this.gift});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: const Color(0xFFEADFC4), width: 1.5),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Row(
              children: [
                Icon(Icons.workspace_premium_outlined, size: 20, color: _goldInk),
                SizedBox(width: 8),
                Text('O PRO ESTE MÊS', style: TextStyle(fontSize: 12, letterSpacing: 1.4, fontWeight: FontWeight.w700, color: _goldInk)),
              ],
            ),
            const SizedBox(height: 10),
            Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text('≈ ${euros(saving)}', style: const TextStyle(fontSize: 30, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    gift ? 'poupados · Pro oferecido' : 'poupados · o Pro custa ${euros(price)}/mês',
                    style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10),
            Text(
              bookings == 0
                  ? 'Comissão −${_num(feeDiscount)} ponto em cada reserva que fechares.'
                  : 'Comissão −${_num(feeDiscount)} ponto em $bookings ${bookings == 1 ? 'reserva' : 'reservas'} este mês.',
              style: const TextStyle(fontSize: 14, color: AppTheme.ink),
            ),
          ],
        ),
      );
}

/// Visitas ao perfil, pedidos e conversão (últimos 30 dias).
class _ProStatsRow extends StatelessWidget {
  final PartnerAnalytics? stats;
  final ProStats? pro;
  const _ProStatsRow({required this.stats, required this.pro});

  @override
  Widget build(BuildContext context) {
    final views = pro?.views30d;
    final prev = pro?.viewsPrev30d ?? 0;
    final viewsChange = views == null || prev <= 0 ? null : (views - prev) / prev * 100;
    final requests = stats?.requests ?? pro?.requests30d;
    final conversion = stats == null || stats!.requests == 0 ? null : stats!.accepted / stats!.requests * 100;
    Widget cell(String label, String value, String? sub, {Color? subColor}) => Expanded(
          child: Container(
            padding: const EdgeInsets.all(12),
            decoration: softCard(radius: 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: const TextStyle(fontSize: 11, letterSpacing: 0.6, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                const SizedBox(height: 4),
                Text(value, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                if (sub != null) Text(sub, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: subColor ?? AppTheme.inkMuted)),
              ],
            ),
          ),
        );
    return GestureDetector(
      onTap: () => context.push('/partner-stats'),
      child: Row(
        children: [
          cell(
            'VISITAS',
            views == null ? '—' : '$views',
            viewsChange == null ? '30 dias' : '${viewsChange >= 0 ? '+' : '−'}${_num(viewsChange.abs().roundToDouble())}%',
            subColor: viewsChange == null ? null : (viewsChange >= 0 ? const Color(0xFF3F7A50) : const Color(0xFFB3261E)),
          ),
          const SizedBox(width: 8),
          cell('PEDIDOS', requests == null ? '—' : '$requests', '30 dias'),
          const SizedBox(width: 8),
          cell('CONVERSÃO', conversion == null ? '—' : '${_num(conversion.roundToDouble())}%', 'pedidos → reservas'),
        ],
      ),
    );
  }
}

/// "Passa a Pro" (parceiro sem Pro).
class _ProUpsellCard extends StatelessWidget {
  final PartnerPro pro;
  final double saving;
  final int bookings;
  const _ProUpsellCard({required this.pro, required this.saving, required this.bookings});

  @override
  Widget build(BuildContext context) {
    Widget cell(String big, String small) => Expanded(
          child: Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(border: Border.all(color: const Color(0xFF3A3833)), borderRadius: BorderRadius.circular(14)),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(big, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: _gold)),
                const SizedBox(height: 4),
                Text(small, style: const TextStyle(fontSize: 12, height: 1.3, color: _proMuted)),
              ],
            ),
          ),
        );
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(color: _proInk, borderRadius: BorderRadius.circular(22)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              const _ProBadge(),
              const SizedBox(width: 8),
              Text('${euros(pro.priceMonthly)}/mês ou ${euros(pro.priceYearly)}/ano',
                  style: const TextStyle(fontSize: 13, color: _proMuted)),
            ],
          ),
          const SizedBox(height: 12),
          const Text('Paga menos comissão e aparece primeiro',
              style: TextStyle(fontSize: 22, height: 1.2, fontWeight: FontWeight.w700, color: Colors.white)),
          const SizedBox(height: 14),
          Row(children: [
            cell('−${_num(pro.feeDiscount)} ponto', 'de comissão nas reservas'),
            const SizedBox(width: 8),
            cell('1 em ${pro.proReferralFreeEvery}', 'clientes trazidos sem comissão (em vez de 1 em ${pro.referralFreeEvery})'),
          ]),
          const SizedBox(height: 8),
          Row(children: [
            cell('+${_num(pro.proPromotionExtraPct)}%', 'no destaque, em vez de +${_num(pro.promotionExtraPct)}%'),
            const SizedBox(width: 8),
            cell('Sem limite', 'de produtos na loja (em vez de ${pro.freeShopProducts})'),
          ]),
          if (bookings > 0) ...[
            const SizedBox(height: 12),
            Text(
              'Com as tuas $bookings ${bookings == 1 ? 'reserva' : 'reservas'} deste mês, terias poupado cerca de ${euros(saving)} em comissões.',
              style: const TextStyle(fontSize: 13, height: 1.4, color: _proMuted),
            ),
          ],
          const SizedBox(height: 14),
          SizedBox(
            height: 50,
            child: FilledButton(
              onPressed: () => context.push('/partner-pro'),
              style: FilledButton.styleFrom(
                backgroundColor: _gold,
                foregroundColor: _proInk,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
              ),
              child: const Text('Ver o Pro', style: TextStyle(fontWeight: FontWeight.w700)),
            ),
          ),
        ],
      ),
    );
  }
}
