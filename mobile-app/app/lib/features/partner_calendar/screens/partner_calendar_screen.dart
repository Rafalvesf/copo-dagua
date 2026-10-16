import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../partner_bookings/widgets/request_row.dart';
import '../../../shared/widgets/month_calendar_grid.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/staggered_fade_in.dart';
import '../../../shared/widgets/feedback.dart';

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
            const PageHeader(title: 'Calendário'),
            const SizedBox(height: 20),
            Expanded(
              child: bookingsAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(partnerBookingsProvider(null))),
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
                          _dayTitle(_selected),
                          style: const TextStyle(
                            fontWeight: FontWeight.w700,
                            fontSize: AppFontSize.xl,
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
                                  child: RequestRow(
                                    booking: booking,
                                    compact: true,
                                    onTap: () => context.push(
                                      '/partner-requests/${booking.id}',
                                      extra: booking,
                                    ),
                                  ),
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

const _weekdaysLong = [
  'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
  'Sexta-feira', 'Sábado', 'Domingo',
];

String _dayTitle(DateTime d) =>
    '${_weekdaysLong[d.weekday - 1]}, ${d.day} de ${monthNamesPt[d.month - 1].toLowerCase()}';
