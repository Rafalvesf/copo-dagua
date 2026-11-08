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
    // Poupança da comissão −N% sobre as vendas do mês (estimativa).
    final commissionSaving = stats == null || pro == null ? 0.0 : stats.revenue * pro.feeDiscount / 100;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: ListView(
              padding: const EdgeInsets.fromLTRB(20, 20, 20, 140),
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
                                  border: Border.all(color: _proInk, width: 1.5),
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
                // Responder primeiro sempre no topo, no Normal e no
                // Premium (pedido 2026-11-08: "igual nos dois").
                if (newRequests.isNotEmpty) ...[
                  _RespondFirstCard(requests: newRequests),
                  const SizedBox(height: 18),
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
                const SectionTitle('Esta semana'),
                _WeekStrip(bookings: thisWeek),
                const SectionTitle('O teu negócio'),
                _BizGrid(items: [
                  (Icons.event_available_outlined, 'Reservas', pending == 0 ? 'Tudo em dia' : '$pending ${pending == 1 ? 'pendente' : 'pendentes'}',
                      '/partner-requests', newRequests.length),
                  (
                    Icons.calendar_month_outlined,
                    'Calendário',
                    thisWeek.isNotEmpty
                        ? '${thisWeek.length} ${thisWeek.length == 1 ? 'evento' : 'eventos'} esta semana'
                        : upcoming == null
                            ? 'Sem eventos marcados'
                            : 'Próximo: ${requestDateLabel(upcoming.eventDate)}',
                    '/partner-calendar',
                    0,
                  ),
                  (Icons.payments_outlined, 'Pagamentos', 'Saldo e levantamentos', '/partner-payments', 0),
                  (Icons.description_outlined, 'Contratos', 'Reservas assinadas', '/partner-contracts', 0),
                ]),
                const SectionTitle('A tua montra'),
                _ValueList(items: [
                  ('Serviços e preços', 'Pacotes', false, '/partner-pricing'),
                  ('Portefólio', 'Fotos', false, '/partner-portfolio'),
                  (
                    'Loja',
                    pro == null
                        ? 'Produtos'
                        : isPro
                            ? '${pro.products} ${pro.products == 1 ? 'produto' : 'produtos'} · sem limite'
                            : '${pro.products} de ${pro.freeShopProducts} produtos',
                    !isPro && pro != null && pro.products >= pro.freeShopProducts - 1,
                    '/partner-shop',
                  ),
                  (
                    'Avaliações',
                    stats?.averageRating == null ? 'Ainda sem' : '${stats!.averageRating!.toStringAsFixed(1).replaceAll('.', ',')} de 5',
                    false,
                    '/partner-reviews',
                  ),
                  ('Resultados', 'Pedidos e conversão', false, '/partner-stats'),
                ]),
                const SizedBox(height: 18),
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
                            ? 'Premium ativo · Gerir subscrição'
                            : 'Premium até ${_shortDate(pro.until!)} · Gerir subscrição',
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



/// Responder primeiro (canvas "Parceiros · Início"): um cartão com os
/// pedidos novos; o primeiro com Recusar / Enviar orçamento (ambos abrem
/// o pedido, onde se confirma).
class _RespondFirstCard extends StatelessWidget {
  final List<Booking> requests;
  const _RespondFirstCard({required this.requests});

  @override
  Widget build(BuildContext context) {
    void open(Booking b) => context.push('/partner-requests/${b.id}', extra: b);
    final shown = requests.take(2).toList();
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 14),
      decoration: softCard(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          const Expanded(
            child: Text('RESPONDER PRIMEIRO',
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1.2, color: Color(0xFFC2553D))),
          ),
          GestureDetector(
            onTap: () => context.push('/partner-requests'),
            child: Text('Ver todos', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
          ),
        ]),
        for (final (i, b) in shown.indexed) ...[
          if (i > 0) const Divider(height: 24, color: AppTheme.borderMuted),
          if (i == 0) const SizedBox(height: 12),
          SnappyTap(
            onTap: () => open(b),
            child: Row(children: [
              V2Avatar(b.clientName, size: 40, imageUrl: b.clientAvatarUrl),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('${b.clientName} · ${b.eventType.label}',
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text([requestDateLabel(b.eventDate), if (b.city.isNotEmpty) b.city].join(' · '),
                      style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                ]),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                decoration: BoxDecoration(color: const Color(0xFFFBEFD3), borderRadius: BorderRadius.circular(999)),
                child: const Text('Novo', style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700, color: Color(0xFF8A5A00))),
              ),
            ]),
          ),
          if (i == 0) ...[
            const SizedBox(height: 12),
            Row(children: [
              Expanded(
                flex: 2,
                child: OutlinedButton(
                  onPressed: () => open(b),
                  style: OutlinedButton.styleFrom(
                    minimumSize: const Size.fromHeight(44),
                    padding: const EdgeInsets.symmetric(horizontal: 6),
                    foregroundColor: AppTheme.ink,
                    side: const BorderSide(color: Color(0xFFE6E0D2)),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: const Text('Recusar', style: TextStyle(fontWeight: FontWeight.w700)),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                flex: 3,
                child: FilledButton(
                  onPressed: () => open(b),
                  style: FilledButton.styleFrom(
                    minimumSize: const Size.fromHeight(44),
                    backgroundColor: AppTheme.accentOliveDark,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: const Text('Enviar orçamento', style: TextStyle(fontWeight: FontWeight.w700)),
                ),
              ),
            ]),
          ],
        ],
        if (requests.length > 1) ...[
          const SizedBox(height: 10),
          const Text('Responder em menos de 24 h ajuda-te a aparecer mais acima.',
              style: TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
        ],
      ]),
    );
  }
}

const _wd = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

/// Esta semana: 3 dias em cartões; dias sem nada aparecem como "Livre".
class _WeekStrip extends StatelessWidget {
  final List<Booking> bookings;
  const _WeekStrip({required this.bookings});

  @override
  Widget build(BuildContext context) {
    final today = DateTime(DateTime.now().year, DateTime.now().month, DateTime.now().day);
    final cells = <(DateTime, Booking?)>[for (final b in bookings.take(3)) (b.eventDate, b)];
    for (var d = 0; cells.length < 3 && d < 7; d++) {
      final day = today.add(Duration(days: d));
      final taken = bookings.any((b) => b.eventDate.year == day.year && b.eventDate.month == day.month && b.eventDate.day == day.day);
      if (!taken && !cells.any((c) => c.$1 == day)) cells.add((day, null));
    }
    cells.sort((a, b) => a.$1.compareTo(b.$1));
    return Row(children: [
      for (final (i, (day, b)) in cells.indexed) ...[
        if (i > 0) const SizedBox(width: 8),
        Expanded(
          child: SnappyTap(
            onTap: () => b == null ? context.push('/partner-calendar') : context.push('/partner-requests/${b.id}', extra: b),
            child: Container(
              padding: const EdgeInsets.all(12),
              decoration: b == null
                  ? BoxDecoration(color: const Color(0xFFEDEBE5), borderRadius: BorderRadius.circular(16))
                  : softCard(radius: 16),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('${_wd[day.weekday - 1]} ${day.day}',
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: b == null ? AppTheme.inkMuted : AppTheme.ink)),
                const SizedBox(height: 3),
                Text(b == null ? 'Livre' : b.eventType.label,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: b == null ? FontWeight.w500 : FontWeight.w700,
                      color: b == null ? AppTheme.inkMuted : AppTheme.ink,
                    )),
                if (b != null)
                  Text(b.city.isEmpty ? b.clientName : b.city,
                      maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
              ]),
            ),
          ),
        ),
      ],
    ]);
  }
}

/// O teu negócio: 4 cartões brancos com ícone de linha.
class _BizGrid extends StatelessWidget {
  final List<(IconData, String, String, String, int)> items;
  const _BizGrid({required this.items});

  @override
  Widget build(BuildContext context) => GridView.count(
        crossAxisCount: 2,
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        padding: EdgeInsets.zero,
        mainAxisSpacing: 10,
        crossAxisSpacing: 10,
        childAspectRatio: 1.75,
        children: [
          for (final (icon, title, sub, route, badge) in items)
            SnappyTap(
              onTap: () => context.push(route),
              child: Container(
                padding: const EdgeInsets.all(14),
                decoration: softCard(radius: 18),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Row(children: [
                    Icon(icon, size: 22, color: AppTheme.accentOliveDark),
                    const Spacer(),
                    if (badge > 0)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                        decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(999)),
                        child: Text('$badge', style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.white)),
                      ),
                  ]),
                  const Spacer(),
                  Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                ]),
              ),
            ),
        ],
      );
}

/// A tua montra: linhas com o nome à esquerda e o valor à direita.
class _ValueList extends StatelessWidget {
  final List<(String, String, bool, String)> items;
  const _ValueList({required this.items});

  @override
  Widget build(BuildContext context) => Container(
        decoration: softCard(),
        child: Column(children: [
          for (final (i, (title, value, warn, route)) in items.indexed) ...[
            if (i > 0) const Divider(height: 1, indent: 16, endIndent: 16, color: AppTheme.borderMuted),
            Material(
              type: MaterialType.transparency,
              child: InkWell(
                onTap: () => context.push(route),
                borderRadius: BorderRadius.circular(AppRadius.lg),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 18),
                  child: Row(children: [
                    Expanded(child: Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink))),
                    warn
                        ? Container(
                            padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 3),
                            decoration: BoxDecoration(color: const Color(0xFFFBEFD3), borderRadius: BorderRadius.circular(999)),
                            child: Text(value, style: const TextStyle(fontSize: 12.5, fontWeight: FontWeight.w700, color: Color(0xFF8A5A00))),
                          )
                        : Text(value, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ]),
                ),
              ),
            ),
          ],
        ]),
      );
}

// ---------- Pro (canvas "Parceiros · Início Normal e Pro") ----------

// Premium com o estilo da app (pedido 2026-11-08): cartão verde da
// app em vez de preto e dourado; destaques a branco.
const _gold = Colors.white;
const _goldInk = Color(0xFF4F6B4A);
const _proInk = Color(0xFF4F6B4A);
const _proMuted = Color(0xFFDDE5D3);
const _proText = Color(0xFF171713);
const _months = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];

String _shortDate(DateTime d) => '${d.day} ${_months[d.month - 1]}';

String _num(double v) => v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(1).replaceAll('.', ',');

class _ProBadge extends StatelessWidget {
  /// Em cima do cartão verde: selo branco com letras verdes.
  final bool onGreen;
  const _ProBadge({this.onGreen = false});

  @override
  Widget build(BuildContext context) {
    final bg = onGreen ? Colors.white : _proInk;
    final fg = onGreen ? _proInk : Colors.white;
    return Container(
      padding: const EdgeInsets.fromLTRB(5, 3, 8, 3),
      decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.workspace_premium_rounded, size: 12, color: fg),
          const SizedBox(width: 3),
          Text('PREMIUM', style: TextStyle(fontSize: 10, letterSpacing: 1, fontWeight: FontWeight.w700, color: fg)),
        ],
      ),
    );
  }
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
                    style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: _proText),
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
                          color: i == last.length - 1 ? _gold : const Color(0x40FFFFFF),
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
          border: Border.all(color: const Color(0xFFDCD8CE)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Row(
              children: [
                Icon(Icons.workspace_premium_outlined, size: 20, color: _goldInk),
                SizedBox(width: 8),
                Text('O PREMIUM ESTE MÊS', style: TextStyle(fontSize: 12, letterSpacing: 1.4, fontWeight: FontWeight.w700, color: _goldInk)),
              ],
            ),
            const SizedBox(height: 10),
            Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(euros(saving), style: const TextStyle(fontSize: 30, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    gift ? 'poupados · Premium oferecido' : 'poupados · o Premium custa ${euros(price)}/mês',
                    style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10),
            Text(
              bookings == 0
                  ? 'Comissão −${_num(feeDiscount)}% em cada reserva que fechares.'
                  : 'Comissão −${_num(feeDiscount)}% em $bookings ${bookings == 1 ? 'reserva' : 'reservas'} este mês.',
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
          cell('CONVERSÃO', conversion == null ? '—' : '${_num(conversion.roundToDouble())}%', 'pedidos › reservas'),
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
            decoration: BoxDecoration(border: Border.all(color: const Color(0x40FFFFFF)), borderRadius: BorderRadius.circular(14)),
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
              const _ProBadge(onGreen: true),
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
            cell('−${_num(pro.feeDiscount)}%', 'de comissão nas reservas'),
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
              child: const Text('Ser Premium', style: TextStyle(fontWeight: FontWeight.w700)),
            ),
          ),
        ],
      ),
    );
  }
}
