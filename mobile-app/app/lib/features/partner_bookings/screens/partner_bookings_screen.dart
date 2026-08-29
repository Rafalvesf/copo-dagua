import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';
import '../booking_style.dart';

enum _BookingSegment { recebidos, confirmados, concluidos }

class PartnerBookingsScreen extends ConsumerStatefulWidget {
  const PartnerBookingsScreen({super.key});

  @override
  ConsumerState<PartnerBookingsScreen> createState() =>
      _PartnerBookingsScreenState();
}

class _PartnerBookingsScreenState
    extends ConsumerState<PartnerBookingsScreen> {
  _BookingSegment _segment = _BookingSegment.recebidos;

  bool _matches(Booking booking) {
    switch (_segment) {
      case _BookingSegment.recebidos:
        return booking.status == BookingStatus.novo ||
            booking.status == BookingStatus.emAnalise;
      case _BookingSegment.confirmados:
        return booking.status == BookingStatus.confirmado;
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
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: AppTheme.screenMargin,
                  ),
                  child: Row(
                    children: [
                      _SegmentButton(
                        label: 'Recebidos',
                        selected: _segment == _BookingSegment.recebidos,
                        onTap: () =>
                            setState(() => _segment = _BookingSegment.recebidos),
                      ),
                      const SizedBox(width: 8),
                      _SegmentButton(
                        label: 'Confirmados',
                        selected: _segment == _BookingSegment.confirmados,
                        onTap: () => setState(
                          () => _segment = _BookingSegment.confirmados,
                        ),
                      ),
                      const SizedBox(width: 8),
                      _SegmentButton(
                        label: 'Concluídos',
                        selected: _segment == _BookingSegment.concluidos,
                        onTap: () => setState(
                          () => _segment = _BookingSegment.concluidos,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 16),
                Expanded(
                  child: bookingsAsync.when(
                    loading: () =>
                        const Center(child: CircularProgressIndicator()),
                    error: (err, st) =>
                        const Center(child: Text('Não foi possível carregar.')),
                    data: (allBookings) {
                      final bookings = allBookings.where(_matches).toList();
                      if (bookings.isEmpty) {
                        return const Center(
                          child: Text('Sem pedidos nesta categoria.'),
                        );
                      }
                      return ListView.builder(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          0,
                          AppTheme.screenMargin,
                          140,
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
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: PartnerBottomNav(current: PartnerTab.requests),
          ),
          const Positioned.fill(child: DraggableChatBubble()),
        ],
      ),
    );
  }
}

class _SegmentButton extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _SegmentButton({
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : Colors.white,
          borderRadius: BorderRadius.circular(999),
          boxShadow: AppTheme.cardShadow,
        ),
        child: Text(
          label,
          style: TextStyle(
            color: selected ? Colors.white : AppTheme.ink,
            fontWeight: FontWeight.w700,
            fontSize: 12.5,
          ),
        ),
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

    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Row(
          children: [
            CircleAvatar(
              radius: 24,
              backgroundColor: AppColors.green,
              backgroundImage: NetworkImage(
                'https://i.pravatar.cc/150?u=${booking.avatarSeed}',
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    booking.clientName,
                    style: const TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 14.5,
                      color: AppTheme.ink,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    '$dateLabel · ${booking.category.label}',
                    style: const TextStyle(
                      color: AppTheme.inkMuted,
                      fontSize: 12.5,
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
