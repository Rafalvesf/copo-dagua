import 'package:copo_dagua_app/shared/hero_icons.dart';
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
import '../widgets/partner_promotion_card.dart';
import '../widgets/partner_invite_card.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/estrela.dart' show Estrela;
import '../../../shared/money.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../core/partners/partner_pro.dart';
import 'package:copo_dagua_app/shared/widgets/island_sheet.dart';

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
    final toReply = (ref.watch(partnerReviewsProvider).value ?? const <Review>[]).where((r) => r.response == null).toList();
    final pro = ref.watch(myPartnerProProvider).value;
    final isPro = pro?.active ?? false;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(top: false, 
            bottom: false,
            child: ListView(
              padding: ( const EdgeInsets.fromLTRB(20, 20, 20, 140)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
              children: [
                Row(
                  children: [
                    if (business != null && business.isNotEmpty)
                      Flexible(
                        child: Container(
                          height: 44,
                          padding: const EdgeInsets.fromLTRB(6, 0, 16, 0),
                          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(999)),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              V2Avatar(business, size: 32, imageUrl: profile?.avatarUrl),
                              const SizedBox(width: 8),
                              Flexible(
                                child: Text(
                                  business,
                                  overflow: TextOverflow.ellipsis,
                                  style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    const Spacer(),
                    // «Entrada» do parceiro: ler o QR dos clientes e cobrar
                    // no balcão (migrações 228–229), ao lado do sino.
                    // Topo alinhado (2026-11-25): a pílula do negócio e os
                    // botões redondos 44, todos a 8 uns dos outros.
                    const SizedBox(width: 8),
                    V2RoundButton(icon: Hi.qrCode, tooltip: 'Entrada e cobrar', onTap: () => context.push('/entrada')),
                    const SizedBox(width: 8),
                    const PartnerNotificationBell(),
                    const SizedBox(width: 8),
                    IslandMenuButton<String>(
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
                        child: V2RoundButton(icon: Hi.ellipsisHorizontal, tooltip: 'Mais opções'),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                const TeamBannerCard(padding: EdgeInsets.only(bottom: 16)),
                Text(
                  firstName.isEmpty ? 'Olá!' : 'Olá, $firstName!',
                  style: const TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink),
                ),
                const SizedBox(height: 4),
                Text(
                  newRequests.isEmpty
                      ? 'Sem pedidos à espera. Avisamos-te quando chegar um.'
                      : 'Tens ${newRequests.length} ${newRequests.length == 1 ? 'pedido' : 'pedidos'} à espera de resposta.',
                  style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted),
                ),
                const SizedBox(height: 16),
                // Painel com molduras (pedido 2026-11-25, mockup «Parceiro ·
                // Início»): resumo do mês, Para fazer, Esta semana, Números,
                // O teu negócio, A tua página e Convida e paga menos.
                _MonthSummary(stats: stats, newRequests: newRequests.length, thisWeek: thisWeek.length),
                _TodoFrame(requests: newRequests, reviews: toReply),
                SectionFrame(title: 'Esta semana', children: [
                  _WeekStrip(bookings: thisWeek),
                  if (thisWeek.isEmpty)
                    const FrameNote('Sem eventos nos próximos 7 dias.', top: 10)
                  else
                    KitGroup([
                      for (final b in thisWeek.take(4))
                        KitRow(
                          lead: V2Avatar(b.clientName, size: 44, imageUrl: b.clientAvatarUrl),
                          title: '${b.clientName} · ${b.eventType.label}',
                          sub: [requestDateLabel(b.eventDate), if (b.people != null) '${b.people} pessoas'].join(' · '),
                          trailing: FrameButton36('Ver', outlined: true, onTap: () => context.push('/partner-requests/${b.id}', extra: b)),
                          onTap: () => context.push('/partner-requests/${b.id}', extra: b),
                        ),
                    ], top: 6),
                ]),
                SectionFrame(title: 'Números', children: [
                  FrameNumbers([
                    FrameNumber('Pedidos', '${stats?.requests ?? 0}', _vs(stats?.requests, stats?.previousRequests),
                        onTap: () => context.push('/partner-stats')),
                    FrameNumber('Reservas', '${stats?.bookings ?? 0}', _vs(stats?.bookings, stats?.previousBookings),
                        onTap: () => context.push('/partner-stats')),
                    FrameNumber(
                        'Nota',
                        stats?.averageRating == null ? '—' : stats!.averageRating!.toStringAsFixed(1).replaceAll('.', ','),
                        stats == null || stats.reviewCount == 0
                            ? 'ainda sem avaliações'
                            : '${stats.reviewCount} ${stats.reviewCount == 1 ? 'avaliação' : 'avaliações'}',
                        onTap: () => context.push('/partner-reviews')),
                    FrameNumber(
                        'Conversão',
                        stats == null || stats.requests == 0 ? '—' : '${(stats.accepted / stats.requests * 100).round()} %',
                        'pedidos › reservas',
                        onTap: () => context.push('/partner-stats')),
                  ]),
                ]),
                SectionFrame(title: 'O teu negócio', children: [
                  KitGroup([
                    KitSetRow(
                        label: 'Calendário',
                        value: upcoming == null ? 'Sem eventos' : 'Próx.: ${requestDateLabel(upcoming.eventDate)}',
                        onTap: () => context.push('/partner-calendar')),
                    KitSetRow(label: 'Pagamentos', value: 'Saldo', onTap: () => context.push('/partner-payments')),
                    KitSetRow(label: 'Resultados', value: '30 dias', onTap: () => context.push('/partner-stats')),
                    KitSetRow(
                        label: 'Avaliações',
                        value: toReply.isEmpty ? 'Em dia' : '${toReply.length} por responder',
                        onTap: () => context.push('/partner-reviews')),
                    KitSetRow(label: 'Contratos', value: 'Assinados', onTap: () => context.push('/partner-contracts')),
                  ]),
                ]),
                // «A tua página» no Início (pedido 2026-11-25): o que os
                // clientes veem e onde se muda.
                SectionFrame(title: 'A tua página', children: [
                  KitGroup([
                    if (profile != null)
                      KitSetRow(label: 'Ver como os clientes', onTap: () => context.push('/parceiro/${profile.id}')),
                    KitSetRow(label: 'Serviços e preços', value: 'Pacotes', onTap: () => context.push('/partner-pricing')),
                    KitSetRow(label: 'Portefólio', value: 'Fotos', onTap: () => context.push('/partner-portfolio')),
                    KitSetRow(label: 'Horário', onTap: () => context.push('/partner-hours')),
                    KitSetRow(label: 'Disponibilidade', onTap: () => context.push('/partner-availability')),
                    KitSetRow(label: 'Localização', onTap: () => context.push('/partner-location')),
                    KitSetRow(label: 'Dados do negócio', onTap: () => context.push('/partner-business-info')),
                    KitSetRow(label: 'Cancelamento', onTap: () => context.push('/partner-cancellation')),
                    KitSetRow(
                        label: 'Loja',
                        value: pro == null
                            ? 'Produtos'
                            : isPro
                                ? '${pro.products} ${pro.products == 1 ? 'produto' : 'produtos'}'
                                : '${pro.products} de ${pro.freeShopProducts}',
                        onTap: () => context.push('/partner-shop')),
                  ]),
                ]),
                const SizedBox(height: 16),
                const PartnerInviteCard(),
                const SizedBox(height: 16),
                // Mensalidade do Pro e convites passaram para as Definições
                // (pedido 2026-11-16).
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



/// «+4 que no mês passado» a partir do número e do período anterior.
String _vs(int? now, int? before) {
  if (now == null) return '30 dias';
  final d = now - (before ?? 0);
  if (d == 0) return 'igual ao mês passado';
  return '${d > 0 ? '+' : '−'}${d.abs()} que no mês passado';
}

/// Resumo do mês (destaque, linha preta 1,5 — DESIGN §4).
class _MonthSummary extends StatelessWidget {
  final PartnerAnalytics? stats;
  final int newRequests;
  final int thisWeek;
  const _MonthSummary({required this.stats, required this.newRequests, required this.thisWeek});

  @override
  Widget build(BuildContext context) {
    final s = stats;
    return SnappyTap(
      onTap: () => context.push('/partner-stats'),
      child: Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: AppTheme.ink, width: 1.5),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Text('ESTE MÊS', style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          const SizedBox(height: 4),
          // O valor numa linha e as reservas por baixo (2026-11-25: o
          // texto ao lado do valor ficava desalinhado).
          Text(s == null ? '—' : euros(s.revenue),
              maxLines: 1, style: const TextStyle(fontSize: 40, height: 1.1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          if (s != null)
            Text('${s.bookings} ${s.bookings == 1 ? 'reserva confirmada' : 'reservas confirmadas'}',
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(height: 10),
          Wrap(spacing: 6, runSpacing: 6, children: [
            KitTag('$newRequests ${newRequests == 1 ? 'pedido novo' : 'pedidos novos'}',
                kind: newRequests > 0 ? KitTagKind.pending : KitTagKind.neutral),
            KitTag('$thisWeek ${thisWeek == 1 ? 'evento' : 'eventos'} esta semana', kind: KitTagKind.neutral),
          ]),
        ]),
      ),
    );
  }
}

/// Para fazer (os três estados do §4): pedidos por responder (vermelhos
/// a 3 dias ou menos do evento) e avaliações por responder.
class _TodoFrame extends StatelessWidget {
  final List<Booking> requests;
  final List<Review> reviews;
  const _TodoFrame({required this.requests, required this.reviews});

  @override
  Widget build(BuildContext context) {
    final n = requests.length + reviews.length;
    return SectionFrame(
      title: n == 0 ? 'Para fazer' : 'Para fazer · $n',
      children: [
        if (n == 0)
          const FrameEmpty(
            title: 'Está tudo tratado',
            text: 'Pedidos respondidos e avaliações em dia.',
            reaction: Estrela.piscar,
          ),
        for (final b in requests.take(4))
          FrameTaskRow(
            lead: V2Avatar(b.clientName, size: 44, imageUrl: b.clientAvatarUrl),
            title: '${b.clientName} · ${b.eventType.label}',
            sub: 'Pedido · ${requestDateLabel(b.eventDate)}',
            action: 'Responder',
            urgent: b.eventDate.difference(DateTime.now()).inDays <= 3,
            onTap: () => context.push('/partner-requests/${b.id}', extra: b),
          ),
        if (requests.length > 4)
          Padding(
            padding: const EdgeInsets.only(top: 8),
            child: FrameButton44('Ver os ${requests.length} pedidos', outlined: true, onTap: () => context.push('/partner-requests')),
          ),
        for (final r in reviews.take(2))
          FrameTaskRow(
            lead: V2Avatar(r.coupleDisplayName, size: 44),
            title: r.coupleDisplayName,
            sub: 'Avaliação de ${r.rating} ★ por responder',
            action: 'Responder',
            onTap: () => context.push('/partner-reviews'),
          ),
      ],
    );
  }
}

const _wd = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

/// Esta semana: os 7 dias a partir de hoje; hoje a preto, com um ponto
/// verde nos dias com eventos (mockup «Parceiro · Início»).
class _WeekStrip extends StatelessWidget {
  final List<Booking> bookings;
  const _WeekStrip({required this.bookings});

  @override
  Widget build(BuildContext context) {
    final today = DateTime(DateTime.now().year, DateTime.now().month, DateTime.now().day);
    return Row(children: [
      for (var i = 0; i < 7; i++) ...[
        if (i > 0) const SizedBox(width: 6),
        Expanded(child: _day(context, today.add(Duration(days: i)), i == 0)),
      ],
    ]);
  }

  Widget _day(BuildContext context, DateTime day, bool on) {
    final busy = bookings.any((b) => b.eventDate.year == day.year && b.eventDate.month == day.month && b.eventDate.day == day.day);
    return SnappyTap(
      onTap: () => context.push('/partner-calendar'),
      child: Container(
        height: 64,
        decoration: BoxDecoration(color: on ? AppTheme.ink : Colors.white, borderRadius: BorderRadius.circular(16)),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Text(_wd[day.weekday - 1], style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.inkMuted)),
          Text('${day.day}', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
          const SizedBox(height: 2),
          Container(
            width: 6,
            height: 6,
            decoration: BoxDecoration(color: busy ? AppTheme.accentOliveDark : Colors.transparent, shape: BoxShape.circle),
          ),
        ]),
      ),
    );
  }
}
