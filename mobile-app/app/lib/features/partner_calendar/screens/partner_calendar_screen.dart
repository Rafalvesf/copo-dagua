import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/month_calendar_grid.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/staggered_fade_in.dart';

class PartnerCalendarScreen extends ConsumerStatefulWidget {
  const PartnerCalendarScreen({super.key});

  @override
  ConsumerState<PartnerCalendarScreen> createState() =>
      _PartnerCalendarScreenState();
}

class _PartnerCalendarScreenState
    extends ConsumerState<PartnerCalendarScreen> {
  late DateTime _selected = dayOnly(DateTime.now());
  late DateTime _visibleMonth = DateTime(_selected.year, _selected.month);

  @override
  Widget build(BuildContext context) {
    final bookingsAsync = ref.watch(partnerBookingsProvider(null));

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            PageHeader(
              title: 'Calendário',
              subtitle: 'Os teus compromissos.',
              trailing: const AccountSwitcherBadge(),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: bookingsAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) =>
                    const Center(child: Text('Não foi possível carregar.')),
                data: (bookings) {
                  final markedDays = bookings
                      .map((b) => dayOnly(b.eventDate))
                      .toSet();
                  final dayBookings = bookings
                      .where((b) => dayOnly(b.eventDate) == _selected)
                      .toList();
                  return SingleChildScrollView(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      0,
                      AppTheme.screenMargin,
                      24,
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        MonthCalendarGrid(
                          visibleMonth: _visibleMonth,
                          selected: _selected,
                          markedDays: markedDays,
                          onSelectDay: (day) =>
                              setState(() => _selected = day),
                          onMonthChanged: (month) =>
                              setState(() => _visibleMonth = month),
                        ),
                        const SizedBox(height: 20),
                        Text(
                          'Compromissos de ${formatShortDatePt(_selected)}',
                          style: const TextStyle(
                            fontWeight: FontWeight.w800,
                            fontSize: 15,
                            color: AppTheme.ink,
                          ),
                        ),
                        const SizedBox(height: 12),
                        if (dayBookings.isEmpty)
                          const Padding(
                            padding: EdgeInsets.symmetric(vertical: 20),
                            child: Text(
                              'Sem compromissos neste dia.',
                              style: TextStyle(color: AppTheme.inkMuted),
                            ),
                          )
                        else
                          StaggeredFadeIn(
                            listKey: _selected,
                            children: [
                              for (final booking in dayBookings)
                                Padding(
                                  padding: const EdgeInsets.only(bottom: 12),
                                  child: _BookingAgendaCard(booking: booking),
                                ),
                            ],
                          ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _BookingAgendaCard extends StatelessWidget {
  final Booking booking;

  const _BookingAgendaCard({required this.booking});

  @override
  Widget build(BuildContext context) {
    return SnappyTap.builder(
      onTap: () => context.push(
        '/partner-requests/${booking.id}',
        extra: booking,
      ),
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(
            color: hovered ? AppTheme.borderMuted : AppColors.gray,
          ),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              width: 48,
              child: Text(
                formatTimePt(booking.eventDate),
                style: const TextStyle(
                  fontWeight: FontWeight.w800,
                  fontSize: 13.5,
                  color: AppTheme.accentOliveDark,
                ),
              ),
            ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    booking.clientName,
                    style: const TextStyle(
                      fontWeight: FontWeight.w800,
                      fontSize: 15,
                      color: AppTheme.ink,
                    ),
                  ),
                  const SizedBox(height: 3),
                  Text(
                    '${booking.category.label} · ${booking.packageLabel}',
                    style: const TextStyle(
                      color: AppTheme.inkMuted,
                      fontSize: 12.5,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 14,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(999),
                      border: Border.all(color: AppTheme.accentOliveDark),
                    ),
                    child: const Text(
                      'Ver pedido',
                      style: TextStyle(
                        color: AppTheme.accentOliveDark,
                        fontWeight: FontWeight.w700,
                        fontSize: 12.5,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
