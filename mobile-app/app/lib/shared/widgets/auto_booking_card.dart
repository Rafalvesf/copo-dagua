import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/home/home_providers.dart' show coupleBookingsProvider;
import '../../core/models/models.dart';
import '../../core/payments/payments.dart' show PayArgs;
import '../../core/supabase/supabase_config.dart';
import '../hero_icons.dart';
import '../money.dart';
import 'chat_ui.dart';
import 'navigation_sheet.dart';

/// Cartões que a app publica sozinha na conversa (migração 239; prancheta
/// «Todos os cartões», linhas 07 e 10–13 — antes «Sugestão»): lembrete do
/// dia, como correu / avaliação, pagamento do resto, menus e alergias
/// prontos e reserva cancelada. Cada lado vê o seu.
class AutoBookingCard extends ConsumerStatefulWidget {
  final String bookingId;

  /// reminder · review · final_due · menus · cancelled
  final String kind;
  final bool partnerSide;

  /// Nome da outra parte (parceiro para o organizador; cliente para o
  /// parceiro).
  final String otherName;
  final String? eventLabel;

  const AutoBookingCard({
    super.key,
    required this.bookingId,
    required this.kind,
    required this.partnerSide,
    required this.otherName,
    this.eventLabel,
  });

  @override
  ConsumerState<AutoBookingCard> createState() => _AutoBookingCardState();
}

const _wd = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const _mo = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
String _day(DateTime d) => '${_wd[d.weekday - 1]}, ${d.day} ${_mo[d.month - 1]}';

class _AutoBookingCardState extends ConsumerState<AutoBookingCard> {
  Map<String, dynamic>? _b;
  Map<String, dynamic>? _final;
  Map<String, dynamic>? _review;
  Map<String, dynamic>? _event;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final b = await supabase
          .from('bookings')
          .select('id, wedding_id, event_date, status, total_amount, deposit_amount, people, cancelled_at')
          .eq('id', widget.bookingId)
          .maybeSingle();
      Map<String, dynamic>? fin;
      Map<String, dynamic>? rev;
      Map<String, dynamic>? ev;
      if (b != null) {
        try {
          fin = await supabase
              .from('payments')
              .select('id, amount, due_at, status')
              .eq('booking_id', widget.bookingId)
              .neq('type', 'deposit')
              .order('created_at', ascending: false)
              .limit(1)
              .maybeSingle();
        } catch (_) {}
        try {
          rev = await supabase.from('reviews').select('rating, comment').eq('booking_id', widget.bookingId).maybeSingle();
        } catch (_) {}
        try {
          ev = await supabase.from('events').select('event_type, ceremony_time, venue, location').eq('id', b['wedding_id'] as String).maybeSingle();
        } catch (_) {}
      }
      if (mounted) {
        setState(() {
          _b = b;
          _final = fin;
          _review = rev;
          _event = ev;
        });
      }
    } catch (_) {}
  }

  /// A página desta reserva (organizador), senão a lista.
  Future<void> _openBooking() async {
    CoupleBooking? found;
    try {
      final all = await ref.read(coupleBookingsProvider.future);
      found = all.where((b) => b.id == widget.bookingId).firstOrNull;
    } catch (_) {}
    if (!mounted) return;
    if (found == null) {
      context.push('/bookings');
    } else {
      context.push('/bookings/detail', extra: found);
    }
  }

  @override
  Widget build(BuildContext context) {
    final b = _b;
    if (b == null) return const SizedBox(height: 40);
    final date = DateTime.tryParse('${b['event_date'] ?? ''}');
    final type = EventType.fromDb(_event?['event_type'] as String?).label;
    final hour = (_event?['ceremony_time'] as String?)?.trim();
    final venue = (_event?['venue'] as String?)?.trim() ?? '';
    final loc = (_event?['location'] as String?)?.trim() ?? '';
    final place = [venue, loc].where((s) => s.isNotEmpty).join(' · ');
    final people = (b['people'] as num?)?.toInt();
    final total = ((b['total_amount'] as num?) ?? 0).toDouble();
    final finAmount = ((_final?['amount'] as num?) ?? 0).toDouble();
    final finDue = DateTime.tryParse('${_final?['due_at'] ?? ''}')?.toLocal();
    final finPaid = _final?['status'] == 'paid';
    final other = widget.otherName;
    final dayHour = date == null ? '' : '${_day(date)}${hour == null || hour.isEmpty ? '' : ' · $hour'}';

    switch (widget.kind) {
      case 'reminder':
        return ChatProposalCard(
          icon: Hi.mapPin,
          eyebrow: 'Amanhã',
          status: dayHour.isEmpty ? 'Amanhã' : dayHour,
          tone: ChatCardTone.neutral,
          title: widget.partnerSide ? '$type${people == null ? '' : ' · $people pessoas'}' : '$other · $type',
          subtitle: place.isEmpty ? null : place,
          price: null,
          deposit: null,
          eventLabel: widget.eventLabel,
          note: !widget.partnerSide && finPaid ? 'O resto já está pago.' : null,
          actions: [
            if (place.isNotEmpty)
              ChatCardAction('Como chegar', () => showNavigationSheet(context, label: venue.isEmpty ? type : venue, address: loc)),
            if (!widget.partnerSide) ChatCardAction('Ver reserva', _openBooking, primary: true),
          ],
        );
      case 'review':
        final rating = (_review?['rating'] as num?)?.toInt();
        if (widget.partnerSide) {
          return ChatProposalCard(
            icon: Hi.star,
            eyebrow: 'Avaliação',
            status: rating == null ? 'À espera da avaliação' : 'Recebeste $rating ${rating == 1 ? 'estrela' : 'estrelas'}',
            tone: rating == null ? ChatCardTone.neutral : ChatCardTone.done,
            title: other,
            subtitle: date == null ? type : '$type · ${_day(date)}',
            price: null,
            deposit: null,
            eventLabel: widget.eventLabel,
            note: (_review?['comment'] as String?)?.trim().isNotEmpty == true ? '«${(_review!['comment'] as String).trim()}»' : null,
          );
        }
        final until = date?.add(const Duration(days: 30));
        return ChatProposalCard(
          icon: Hi.star,
          eyebrow: 'Como correu?',
          status: rating != null
              ? 'Avaliaste com $rating ${rating == 1 ? 'estrela' : 'estrelas'}'
              : (until == null ? 'Por avaliar' : 'Avalia até ${until.day} ${_mo[until.month - 1]}'),
          tone: rating != null ? ChatCardTone.done : ChatCardTone.pending,
          title: other,
          subtitle: date == null ? type : '$type · ${_day(date)}',
          price: null,
          deposit: null,
          eventLabel: widget.eventLabel,
          note: rating == null ? 'A tua avaliação ajuda outros organizadores.' : null,
          actions: rating == null ? [ChatCardAction('Avaliar', _openBooking, primary: true)] : const [],
        );
      case 'final_due':
        final now = DateTime.now();
        final left = finDue == null ? null : DateTime(finDue.year, finDue.month, finDue.day).difference(DateTime(now.year, now.month, now.day)).inDays;
        final due = finDue == null ? '' : ' · até ${finDue.day} ${_mo[finDue.month - 1]}';
        if (widget.partnerSide) {
          return ChatProposalCard(
            icon: Hi.creditCard,
            eyebrow: 'Pagamento',
            status: finPaid ? 'Resto recebido' : 'Resto por receber',
            tone: finPaid ? ChatCardTone.doneLine : ChatCardTone.neutral,
            title: 'Resto da reserva',
            subtitle: '$other$due',
            price: null,
            deposit: null,
            eventLabel: widget.eventLabel,
            rows: [(finPaid ? 'Recebido' : 'A receber', euros(finAmount))],
            note: finPaid ? null : 'Avisamos o organizador 6 dias antes e nos últimos 3.',
          );
        }
        return ChatProposalCard(
          icon: Hi.creditCard,
          eyebrow: 'Pagamento',
          status: finPaid ? 'Pago' : (left == null ? 'Por pagar' : (left <= 0 ? 'Termina hoje' : 'Faltam $left ${left == 1 ? 'dia' : 'dias'}')),
          tone: finPaid ? ChatCardTone.doneLine : ((left ?? 99) <= 3 ? ChatCardTone.urgent : ChatCardTone.pending),
          title: 'Resto da reserva',
          subtitle: '$other$due',
          price: null,
          deposit: null,
          eventLabel: widget.eventLabel,
          rows: [(finPaid ? 'Pago' : 'A pagar', euros(finAmount))],
          note: finPaid ? null : 'Sem o pagamento, a reserva é cancelada.',
          actions: finPaid || _final == null
              ? const []
              : [
                  ChatCardAction('Pagar mais tarde', () {
                    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                      content: Text(finDue == null ? 'Podes pagar mais tarde nas Reservas.' : 'Podes pagar até ${finDue.day} ${_mo[finDue.month - 1]}, nas Reservas.'),
                    ));
                  }),
                  ChatCardAction('Pagar', () {
                    context.push('/pay',
                        extra: PayArgs(paymentId: _final!['id'] as String, partnerName: other, kind: 'final_payment', amount: finAmount));
                  }, primary: true),
                ],
        );
      case 'menus':
        return ChatProposalCard(
          icon: Hi.clipboardDocumentList,
          eyebrow: 'Menus e alergias',
          status: widget.partnerSide ? 'Prontos' : 'Enviado ao parceiro',
          tone: ChatCardTone.done,
          title: people == null ? 'Menus escolhidos' : 'Menus de $people pessoas',
          subtitle: dayHour.isEmpty ? type : '$type · $dayHour',
          price: null,
          deposit: null,
          eventLabel: widget.eventLabel,
          actions: [
            ChatCardAction(widget.partnerSide ? 'Ver tudo' : 'Ver reserva',
                widget.partnerSide ? () => context.push('/partner-requests') : _openBooking),
          ],
        );
      default: // cancelled
        final byPartner = b['status'] == 'cancelled_by_partner';
        final at = DateTime.tryParse('${b['cancelled_at'] ?? ''}')?.toLocal();
        return ChatProposalCard(
          icon: Hi.xCircle,
          eyebrow: 'Reserva cancelada',
          status: widget.partnerSide
              ? (byPartner ? 'Cancelaste' : 'Cancelada pelo organizador')
              : (byPartner ? 'Cancelada pelo parceiro' : 'Cancelaste'),
          tone: ChatCardTone.neutral,
          title: '$other · $type',
          subtitle: widget.partnerSide
              ? (date == null ? null : 'O dia ${date.day} ${_mo[date.month - 1]} ficou livre')
              : (at == null ? null : 'Cancelada a ${at.day} ${_mo[at.month - 1]}'),
          price: null,
          deposit: null,
          eventLabel: widget.eventLabel,
          rows: [if (total > 0 && !widget.partnerSide) ('Total da reserva', euros(total))],
        );
    }
  }
}
