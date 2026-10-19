import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../widgets/request_row.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/v2_kit.dart';

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

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                const PageHeader(title: 'Pedidos', centered: true, showBack: false),
                Expanded(
                  child: bookingsAsync.when(
                    loading: () =>
                        const Center(child: CircularProgressIndicator()),
                    error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(partnerBookingsProvider(null))),
                    data: (allBookings) {
                      final bookings = allBookings.where(_matches).toList();
                      // Canvas "Parceiro — pedidos (redesign)": cartão verde
                      // com o total do mês e o ponto de situação.
                      final received = allBookings
                          .where((b) => b.fromQuoteRequest)
                          .length;
                      final toAnswer = allBookings
                          .where((b) => b.status == BookingStatus.novo && !b.proposalSent)
                          .length;
                      final sent = allBookings.where((b) => b.proposalSent && b.status == BookingStatus.emAnalise).length;
                      return ListView(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          18,
                          AppTheme.screenMargin,
                          200,
                        ),
                        children: [
                          GreenHero(
                            label: 'PEDIDOS RECEBIDOS',
                            value: '$received',
                            suffix: received == 1 ? 'pedido no total' : 'pedidos no total',
                            doodles: const [Icons.inbox_outlined, Icons.favorite_border, Icons.auto_awesome_outlined],
                            footer: Wrap(spacing: 8, runSpacing: 8, children: [
                              HeroPill('$toAnswer por responder', solid: true),
                              HeroPill('$sent ${sent == 1 ? 'proposta enviada' : 'propostas enviadas'}'),
                            ]),
                          ),
                          const SizedBox(height: 16),
                          if (bookings.isEmpty)
                            const V2RowCard(
                              lead: StickerIcon(Icons.event_note_outlined),
                              title: 'Sem pedidos nesta categoria',
                              sub: 'Muda o filtro em baixo para ver os outros.',
                            )
                          else
                            for (final b in bookings)
                              Padding(
                                padding: const EdgeInsets.only(bottom: 10),
                                child: RequestRow(
                                  booking: b,
                                  onTap: () => context.push('/partner-requests/${b.id}', extra: b),
                                ),
                              ),
                        ],
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: PartnerBottomNav(
              current: PartnerTab.requests,
              // Estados como segunda navbar, ligados à doca (redesign
              // 2026-10).
              top: FilterChipsRow(
                items: [
                  for (final segment in _BookingSegment.values)
                    FilterBarItem(_segmentLabel(segment)),
                ],
                selected: _segment.index,
                onSelected: (i) =>
                    setState(() => _segment = _BookingSegment.values[i]),
              ),
            ),
          ),
        ],
      ),
    );
  }
}


