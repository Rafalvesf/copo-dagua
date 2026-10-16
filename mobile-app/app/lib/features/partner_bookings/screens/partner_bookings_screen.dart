import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../booking_style.dart';
import '../../../shared/widgets/feedback.dart';

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
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                PageHeader(
                  title: 'Pedidos',
                  subtitle: 'Acompanha os pedidos recebidos.',
                  showBack: false,
                  trailing: const AccountSwitcherBadge(),
                ),
                const SizedBox(height: 16),
                Expanded(
                  child: bookingsAsync.when(
                    loading: () =>
                        const Center(child: CircularProgressIndicator()),
                    error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(partnerBookingsProvider(null))),
                    data: (allBookings) {
                      final bookings = allBookings.where(_matches).toList();
                      if (bookings.isEmpty) {
                        return const EmptyStateView(
                          message: 'Sem pedidos nesta categoria.',
                          icon: Icons.event_note_outlined,
                        );
                      }
                      return ListView.builder(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          0,
                          AppTheme.screenMargin,
                          200,
                        ),
                        itemCount: bookings.length,
                        itemBuilder: (context, index) => Padding(
                          padding: const EdgeInsets.only(bottom: 12),
                          child: _BookingRow(
                            booking: bookings[index],
                            onTap: () => context.push(
                              '/partner-requests/${bookings[index].id}',
                              extra: bookings[index],
                            ),
                          ),
                        ),
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


class _BookingRow extends StatelessWidget {
  final Booking booking;
  final VoidCallback onTap;

  const _BookingRow({required this.booking, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final date = booking.eventDate;
    final dateLabel =
        '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';

    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(AppRadius.lg),
        ),
        child: Row(
          children: [
            InitialsAvatar(name: booking.clientName, radius: 24),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    booking.clientName,
                    style: const TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: AppFontSize.base,
                      color: AppTheme.ink,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    '$dateLabel · ${booking.category ?? 'Serviço'}',
                    style: const TextStyle(
                      color: AppTheme.inkMuted,
                      fontSize: AppFontSize.sm,
                    ),
                  ),
                ],
              ),
            ),
            StatusPill(
              label: booking.status.label,
              color: bookingStatusColor(booking.status),
            ),
          ],
        ),
      ),
    );
  }
}
