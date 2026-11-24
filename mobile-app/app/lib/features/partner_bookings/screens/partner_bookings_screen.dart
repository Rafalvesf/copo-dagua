import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../widgets/request_row.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

enum _BookingSegment { recebidos, confirmados, concluidos }

class PartnerBookingsScreen extends ConsumerStatefulWidget {
  /// Separador inicial — 'confirmados' quando aberto a partir do tile
  /// "Reservas" em `partner_home_screen.dart` (distinto de "Pedidos de
  /// orçamento", que abre em "Recebidos"). `null`/qualquer outro valor
  /// cai no default.
  final String? initialSegment;

  const PartnerBookingsScreen({super.key, this.initialSegment});

  @override
  ConsumerState<PartnerBookingsScreen> createState() =>
      _PartnerBookingsScreenState();
}

class _PartnerBookingsScreenState extends ConsumerState<PartnerBookingsScreen> {
  late _BookingSegment _segment = switch (widget.initialSegment) {
    'confirmados' => _BookingSegment.confirmados,
    'concluidos' => _BookingSegment.concluidos,
    _ => _BookingSegment.recebidos,
  };

  bool _matches(Booking booking) => _matchesSegment(booking, _segment);

  static String _segmentLabel(_BookingSegment segment) => switch (segment) {
        _BookingSegment.recebidos => 'Recebidos',
        _BookingSegment.confirmados => 'Confirmados',
        _BookingSegment.concluidos => 'Concluídos',
      };

  static bool _matchesSegment(Booking booking, _BookingSegment segment) {
    switch (segment) {
      case _BookingSegment.recebidos:
        return booking.status == BookingStatus.novo ||
            booking.status == BookingStatus.emAnalise;
      case _BookingSegment.confirmados:
        return booking.status == BookingStatus.aceite ||
            booking.status == BookingStatus.confirmado;
      case _BookingSegment.concluidos:
        return booking.status == BookingStatus.concluido;
    }
  }

  @override
  Widget build(BuildContext context) {
    final bookingsAsync = ref.watch(partnerBookingsProvider(null));

    final all = bookingsAsync.value ?? const <Booking>[];
    int countOf(_BookingSegment seg) => all.where((b) => _matchesSegment(b, seg)).length;

    // Mockup «Páginas do parceiro» → Pedidos (2026-11-14): filtros em
    // cima, resumo e as linhas num grupo.
    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          ListView(
            padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, MediaQuery.paddingOf(context).top + 12, AppTheme.screenMargin, 140),
            children: [
              const SizedBox(
                height: 44,
                child: Align(
                  alignment: Alignment.centerLeft,
                  child: Text('Pedidos', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w400, color: AppTheme.ink)),
                ),
              ),
              KitPills([
                for (final seg in _BookingSegment.values)
                  KitPill(
                    label: _segmentLabel(seg),
                    count: seg == _BookingSegment.recebidos ? countOf(seg) : null,
                    selected: _segment == seg,
                    onTap: () => setState(() => _segment = seg),
                  ),
              ]),
              ...bookingsAsync.when<List<Widget>>(
                loading: () => const [Padding(padding: EdgeInsets.only(top: 60), child: SkeletonList())],
                error: (err, st) => [AsyncErrorView(onRetry: () => ref.invalidate(partnerBookingsProvider(null)))],
                data: (allBookings) {
                  final bookings = allBookings.where(_matches).toList();
                  final received = allBookings.where((b) => b.fromQuoteRequest).length;
                  final toAnswer = allBookings.where((b) => b.status == BookingStatus.novo && !b.proposalSent).length;
                  final sent = allBookings.where((b) => b.proposalSent && b.status == BookingStatus.emAnalise).length;
                  return [
                    KitSummary(
                      kicker: 'Pedidos recebidos',
                      value: '$received',
                      unit: received == 1 ? 'pedido no total' : 'pedidos no total',
                      extra: Padding(
                        padding: const EdgeInsets.only(top: 12),
                        child: Wrap(spacing: 8, runSpacing: 8, children: [
                          KitTag('$toAnswer por responder', kind: KitTagKind.pending),
                          KitTag('$sent ${sent == 1 ? 'proposta enviada' : 'propostas enviadas'}', kind: KitTagKind.neutral),
                        ]),
                      ),
                    ),
                    KitGroup(top: 16, [
                      if (bookings.isEmpty)
                        const KitRow(title: 'Sem pedidos aqui', sub: 'Muda o filtro em cima para ver os outros.')
                      else
                        for (final b in bookings)
                          RequestRow(
                            booking: b,
                            flat: true,
                            onTap: () => context.push('/partner-requests/${b.id}', extra: b),
                          ),
                    ]),
                  ];
                },
              ),
            ],
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: PartnerBottomNav(current: PartnerTab.requests),
          ),
        ],
      ),
    );
  }
}
