import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/event/date_format_pt.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../partner_bookings/widgets/request_row.dart';
import '../../../shared/widgets/month_calendar_grid.dart';
import '../../../shared/widgets/feedback.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

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

    // Mockup «Páginas do parceiro» → Calendário (2026-11-14). Sem
    // «Bloquear dia»: a app ainda não tem dias bloqueados.
    final bookings = bookingsAsync.value ?? const <Booking>[];
    final markedDays = bookings.map((b) => dayOnly(b.eventDate)).toSet();
    final dayBookings = bookings.where((b) => dayOnly(b.eventDate) == _selected).toList();
    final today = dayOnly(DateTime.now());
    final monthCount = bookings
        .where((b) => b.eventDate.year == _visibleMonth.year && b.eventDate.month == _visibleMonth.month && b.status != BookingStatus.recusado)
        .length;
    final upcoming = bookings
        .where((b) => !dayOnly(b.eventDate).isBefore(today) && b.status != BookingStatus.recusado && b.status != BookingStatus.concluido)
        .toList()
      ..sort((x, y) => x.eventDate.compareTo(y.eventDate));
    return GradientScaffold(
      background: AppBackground.feed,
      body: KitPage(
        pinnedBack: true,
        children: [
          const KitHeader(),
          const KitTitle('Calendário', subtitle: 'As tuas reservas, dia a dia.'),
          const SizedBox(height: 16),
          if (bookingsAsync.hasError)
            AsyncErrorView(onRetry: () => ref.invalidate(partnerBookingsProvider(null)))
          else ...[
            // Mockup «Parceiro · Calendário» (2026-11-25): resumo do mês, o
            // mês numa moldura, o dia escolhido e «A seguir».
            Container(
              padding: const EdgeInsets.all(18),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('ESTE MÊS', style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                Row(crossAxisAlignment: CrossAxisAlignment.baseline, textBaseline: TextBaseline.alphabetic, children: [
                  Text('$monthCount', style: const TextStyle(fontSize: 40, height: 1.1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(width: 8),
                  Text(monthCount == 1 ? 'evento' : 'eventos', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
                if (upcoming.isNotEmpty) ...[
                  const SizedBox(height: 8),
                  KitTag('Próximo: ${requestDateLabel(upcoming.first.eventDate)}', kind: KitTagKind.neutral),
                ],
              ]),
            ),
            SectionFrame(title: monthNamesPt[_visibleMonth.month - 1], children: [
              MonthCalendarGrid(
                visibleMonth: _visibleMonth,
                selected: _selected,
                markedDays: markedDays,
                onSelectDay: (day) => setState(() => _selected = day),
                onMonthChanged: (month) => setState(() => _visibleMonth = month),
              ),
            ]),
            SectionFrame(title: dayBookings.isEmpty ? _dayTitle(_selected) : '${_dayTitle(_selected)} · ${dayBookings.length}', children: [
              if (bookingsAsync.isLoading && bookings.isEmpty)
                const SkeletonList(count: 2, padding: EdgeInsets.zero)
              else if (dayBookings.isEmpty)
                const FrameNote('Sem compromissos neste dia. Os dias com reservas aparecem marcados no mês.')
              else
                KitGroup([
                  for (final booking in dayBookings)
                    RequestRow(booking: booking, flat: true, onTap: () => context.push('/partner-requests/${booking.id}', extra: booking)),
                ]),
            ]),
            if (upcoming.isNotEmpty)
              SectionFrame(title: 'A seguir · ${upcoming.length}', children: [
                KitGroup([
                  for (final booking in upcoming.take(5))
                    RequestRow(booking: booking, flat: true, onTap: () => context.push('/partner-requests/${booking.id}', extra: booking)),
                ]),
              ]),
          ],
        ],
      ),
    );
  }
}

const _weekdaysLong = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

String _dayTitle(DateTime d) =>
    '${_weekdaysLong[d.weekday - 1]}, ${d.day} de ${monthNamesPt[d.month - 1].toLowerCase()}';
