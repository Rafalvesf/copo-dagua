import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../widgets/request_row.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

enum _BookingSegment { recebidos, confirmados, concluidos }

/// Alterações pedidas pelo cliente ainda por responder (233/235).
final _openChangesProvider = FutureProvider.autoDispose<List<Map<String, dynamic>>>((ref) async {
  try {
    final rows = await supabase
        .from('booking_change_requests')
        .select('id, booking_id, quote_request_id, kind, from_value, to_value, created_at')
        .eq('status', 'open')
        .neq('requested_by_role', 'partner')
        .order('created_at', ascending: false);
    return [for (final r in rows as List) Map<String, dynamic>.from(r as Map)];
  } catch (_) {
    return const [];
  }
});

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
  void _open(BuildContext context, Booking b) => context.push('/partner-requests/${b.id}', extra: b);

  Widget _rows(BuildContext context, List<Booking> list) => KitGroup([
        for (final b in list) RequestRow(booking: b, flat: true, onTap: () => _open(context, b)),
      ]);

  /// «Alterações · N» (mockup «Parceiro · Pedidos», 2026-11-25): pedidos de
  /// alteração e de outro dia do cliente ainda por responder, em qualquer
  /// reserva ou pedido.
  Widget? _changesFrame(BuildContext context) {
    final changes = ref.watch(_openChangesProvider).value ?? const <Map<String, dynamic>>[];
    final all = ref.watch(partnerBookingsProvider(null)).value ?? const <Booking>[];
    final rows = <Widget>[];
    for (final c in changes) {
      final key = (c['booking_id'] ?? c['quote_request_id']) as String?;
      final b = all.where((b) => b.id == key).firstOrNull;
      if (b == null) continue;
      final kind = switch (c['kind']) {
        'people' => 'Pessoas',
        'time' => 'Hora',
        'scope' => 'O que inclui',
        'date' => 'Outro dia',
        _ => 'Outra coisa',
      };
      final from = (c['from_value'] as String?)?.trim() ?? '';
      final to = (c['to_value'] as String?)?.trim() ?? '';
      rows.add(FrameTaskRow(
        lead: V2Avatar(b.clientName, size: 44, imageUrl: b.clientAvatarUrl),
        title: '${b.clientName} · ${b.eventType.label}',
        sub: from.isEmpty ? '$kind: $to' : '$kind: $from → $to',
        action: 'Ver',
        urgent: b.eventDate.difference(DateTime.now()).inDays <= 3,
        onTap: () => _open(context, b),
      ));
    }
    if (rows.isEmpty) return null;
    return SectionFrame(title: 'Alterações · ${rows.length}', children: rows);
  }

  List<Widget> _frames(BuildContext context, List<Booking> bookings) {
    final changes = _segment == _BookingSegment.recebidos ? _changesFrame(context) : null;
    if (bookings.isEmpty) {
      if (changes != null) return [changes];
      return [
        SectionFrame(title: _segmentLabel(_segment), children: [
          FrameEmpty(
            title: switch (_segment) {
              _BookingSegment.recebidos => 'Sem pedidos por tratar',
              _BookingSegment.confirmados => 'Ainda sem reservas confirmadas',
              _BookingSegment.concluidos => 'Ainda sem eventos concluídos',
            },
            text: switch (_segment) {
              _BookingSegment.recebidos => 'Os pedidos de orçamento e de reserva aparecem aqui.',
              _BookingSegment.confirmados => 'As reservas aceites e pagas aparecem aqui.',
              _BookingSegment.concluidos => 'Os eventos que já fizeste aparecem aqui.',
            },
          ),
        ]),
      ];
    }
    switch (_segment) {
      case _BookingSegment.recebidos:
        final answer = bookings.where((b) => !b.proposalSent).toList();
        final sent = bookings.where((b) => b.proposalSent).toList();
        return [
          if (answer.isNotEmpty)
            SectionFrame(title: 'Por responder · ${answer.length}', children: [
              for (final b in answer)
                FrameTaskRow(
                  lead: V2Avatar(b.clientName, size: 44, imageUrl: b.clientAvatarUrl),
                  title: '${b.clientName} · ${b.eventType.label}',
                  sub: [requestDateLabel(b.eventDate), if (b.people != null) '${b.people} pessoas'].join(' · '),
                  action: 'Responder',
                  urgent: b.eventDate.difference(DateTime.now()).inDays <= 3,
                  onTap: () => _open(context, b),
                ),
            ]),
          ?changes,
          if (sent.isNotEmpty) SectionFrame(title: 'Proposta enviada · ${sent.length}', children: [_rows(context, sent)]),
        ];
      case _BookingSegment.confirmados:
        final waiting = bookings.where((b) => b.status == BookingStatus.aceite).toList();
        final done = bookings.where((b) => b.status == BookingStatus.confirmado).toList();
        return [
          if (waiting.isNotEmpty) SectionFrame(title: 'À espera do sinal · ${waiting.length}', children: [_rows(context, waiting)]),
          if (done.isNotEmpty) SectionFrame(title: 'Confirmadas · ${done.length}', children: [_rows(context, done)]),
        ];
      case _BookingSegment.concluidos:
        return [SectionFrame(title: 'Concluídos · ${bookings.length}', children: [_rows(context, bookings)])];
    }
  }

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
                  child: Text('Pedidos', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
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
                    // Molduras por estado (pedido 2026-11-25, mockup «Parceiro ·
                    // Pedidos»): o que é para responder com a linha amarela
                    // (vermelha a 3 dias ou menos do evento).
                    ..._frames(context, bookings),
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
