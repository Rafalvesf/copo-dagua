import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../partner_bookings/widgets/request_row.dart';
import '../../../shared/widgets/month_calendar_grid.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/staggered_fade_in.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/v2_kit.dart';

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
    return GradientScaffold(
      background: AppBackground.feed,
      body: KitPage(
        children: [
          const KitHeader(),
          const KitTitle('Calendário', subtitle: 'As tuas reservas, dia a dia.'),
          const SizedBox(height: 20),
          if (bookingsAsync.hasError)
            AsyncErrorView(onRetry: () => ref.invalidate(partnerBookingsProvider(null)))
          else ...[
            MonthCalendarGrid(
              visibleMonth: _visibleMonth,
              selected: _selected,
              markedDays: markedDays,
              onSelectDay: (day) => setState(() => _selected = day),
              onMonthChanged: (month) => setState(() => _visibleMonth = month),
            ),
            KitSection(_dayTitle(_selected)),
            KitGroup([
              if (bookingsAsync.isLoading && bookings.isEmpty)
                const Padding(padding: EdgeInsets.all(16), child: Center(child: CircularProgressIndicator()))
              else if (dayBookings.isEmpty)
                const KitRow(title: 'Sem compromissos neste dia', sub: 'Os dias com reservas aparecem marcados no mês.')
              else
                for (final booking in dayBookings)
                  RequestRow(
                    booking: booking,
                    flat: true,
                    onTap: () => context.push('/partner-requests/${booking.id}', extra: booking),
                  ),
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
