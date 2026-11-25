import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/chat/chat_helpers.dart';
import '../../../core/guest_home/event_tables.dart' show bookingChoicesProvider, BookingChoice;
import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/payments/refunds.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/money.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException;
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../widgets/event_brief.dart';
import '../widgets/day_clash_sheet.dart';
import '../../../shared/widgets/deal_sheets.dart';
import '../widgets/request_row.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/cancel_booking_sheet.dart';
import '../../../shared/widgets/export_card.dart';
import '../../../core/exports/exports.dart';
import '../../../shared/widgets/dispute_card.dart';
import 'package:copo_dagua_app/shared/widgets/app_progress.dart';

class BookingDetailScreen extends ConsumerStatefulWidget {
  final Booking booking;

  const BookingDetailScreen({super.key, required this.booking});

  @override
  ConsumerState<BookingDetailScreen> createState() => _BookingDetailScreenState();
}

class _BookingDetailScreenState extends ConsumerState<BookingDetailScreen> {
  bool _busy = false;

  Booking get booking => widget.booking;

  Future<void> _run(Future<void> Function() action) async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await action();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível concluir a ação. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  /// Já tem uma reserva nesse dia (ou a essa hora)? Mostra o aviso do
  /// mockup «Já tens uma marcação nesse dia/hora» (2026-11-24). `true` para
  /// seguir com a aceitação.
  Future<bool> _dayOk() async {
    final List<Booking> all;
    try {
      all = await ref.read(partnerBookingsProvider(null).future);
    } catch (_) {
      return true;
    }
    final found = await findDayClashes(booking, all);
    if (found.clashes.isEmpty || !mounted) return true;
    final choice = await showDayClashSheet(context, request: booking, clashes: found.clashes, hour: found.hour);
    if (choice == DayClashChoice.accept) return true;
    if (choice == DayClashChoice.proposeDay && mounted) {
      final sent = await showProposeOtherDaySheet(context, request: booking, all: all, hour: found.hour);
      if (sent && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Proposta de outro dia enviada na conversa.')),
        );
      }
    }
    return false;
  }

  /// Quanto o parceiro já recebeu desta reserva e ainda não devolveu
  /// (`partner-return-funds`, só consulta). 0 se falhar.
  Future<double> _releasedAmount(String bookingId) async {
    try {
      final res = await supabase.functions.invoke('partner-return-funds', body: {'booking_id': bookingId, 'dry_run': true});
      final d = res.data;
      return d is Map ? ((d['amount'] as num?) ?? 0).toDouble() : 0;
    } catch (_) {
      return 0;
    }
  }

  /// Devolve o que já recebeu. `null` se correu bem; senão a mensagem.
  Future<String?> _returnFunds(String bookingId) async {
    try {
      await supabase.functions.invoke('partner-return-funds', body: {'booking_id': bookingId});
      return null;
    } on FunctionException catch (e) {
      final d = e.details;
      if (d is Map && d['error'] == 'insufficient_balance') {
        final amount = (d['amount'] as num?)?.toDouble() ?? 0;
        return 'Não tens saldo suficiente na tua conta À Nossa! para devolver ${euros(amount, cents: true)} '
            '(o dinheiro já foi levantado para o teu banco). Fala com a equipa À Nossa! para o devolveres e poderes cancelar.';
      }
      return 'Não foi possível devolver o valor. Tenta outra vez ou fala com a equipa À Nossa!.';
    } catch (_) {
      return 'Não foi possível devolver o valor. Verifica a ligação e tenta outra vez.';
    }
  }

  @override
  Widget build(BuildContext context) {
    final date = booking.eventDate;
    const weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    final dateLabel =
        '${weekdays[date.weekday - 1]}, ${requestDateLabel(date)}';

    return GradientScaffold(
      background: AppBackground.subtle,
      extendBodyBehindAppBar: false,
      body: SafeArea(
        child: Column(
          children: [
Expanded(child: ScrollingHeader(
 header: [
 ],
 body: ListView(
                padding: const EdgeInsets.fromLTRB(20, 20, 20, 24),
                children: [
                  // Mockup «Páginas do parceiro» → Pedido (2026-11-14).
                  const KitHeader(),
                  // Mockup «Parceiro · Pedido / Reserva» (2026-11-25): título 28,
                  // o estado, o resumo «Faltam» e cada secção numa moldura.
                  KitTitle(booking.clientName,
                      subtitle: [booking.eventType.label, dateLabel, if (booking.city.isNotEmpty) booking.city].join(' · ')),
                  const SizedBox(height: 12),
                  _StatusLine(booking: booking),
                  // Pedido de um pacote (188): o que escolheram, tal como
                  // estava quando pediram.
                  if (booking.isPackageRequest)
                    SectionFrame(title: 'O que escolheram', children: [
                      _ChosenPackageCard(booking: booking),
                      const FrameNote('É o texto do teu pacote tal como estava quando pediram. Se o mudares depois, este pedido não muda.',
                          top: 8),
                    ]),
                  SectionFrame(title: 'O pedido', children: [
                    KitGroup([
                      KitSetRow(label: 'Dia', value: dateLabel),
                      if (booking.people != null)
                        KitSetRow(label: 'Pessoas', value: booking.eachChooses ? '${booking.people} reservadas' : '${booking.people}'),
                      // 190: como escolhem e quem paga.
                      if (booking.eachChooses || booking.eachPays) ...[
                        KitSetRow(label: 'Como escolhem', value: booking.eachChooses ? 'Cada um escolhe' : 'Igual para todos'),
                        KitSetRow(label: 'Quem paga', value: booking.eachPays ? 'Cada um paga o seu' : 'Os organizadores'),
                      ],
                      if (booking.city.isNotEmpty) KitSetRow(label: 'Local', value: booking.city),
                      KitSetRow(
                        label: 'Serviço',
                        value: [booking.category ?? 'Serviço', if (booking.packageLabel.isNotEmpty) booking.packageLabel].join(' · '),
                      ),
                    ]),
                  ]),
                  // Mesa «cada um escolhe» ou cada um paga (190): o que já
                  // escolheram e quanto já está pago.
                  if (!booking.fromQuoteRequest && (booking.eachChooses || booking.eachPays))
                    BookingChoicesSummary(booking: booking),
                  if (booking.messageFromCouple != null && booking.messageFromCouple!.trim().isNotEmpty)
                    SectionFrame(title: 'Mensagem', children: [
                      Text('«${booking.messageFromCouple!.trim()}»',
                          textAlign: TextAlign.justify, style: const TextStyle(fontSize: 14, height: 1.45, color: AppTheme.ink)),
                    ]),
                  // Quando e onde, programa, pessoas, menus, alergias e mesas
                  // (226/227), só com a reserva feita.
                  if (!booking.fromQuoteRequest) ...[
                    const SizedBox(height: 16),
                    PartnerEventBrief(bookingId: booking.id),
                  ] else
                    const FrameNote('O dia, o local e as pessoas vêm do evento. A morada, o programa e o resto aparecem quando a reserva fica confirmada.',
                        top: 16),
                  // Faturas/comprovativos e resumo desta reserva (2026-10-20).
                  if (!booking.fromQuoteRequest)
                    SectionFrame(title: 'Documentos', children: [
                      ExportCard(
                        reportLabel: 'Resumo da reserva',
                        partnerSide: true,
                        load: () => loadSingleBookingReport(booking.id, partnerSide: true),
                      ),
                      const SizedBox(height: 14),
                      DisputeCard(bookingId: booking.id, partnerSide: true),
                    ]),
                ],
              ),
)),
            Container(
              padding: const EdgeInsets.fromLTRB(20, 14, 20, 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // Pacote de preço fixo (188): aceitar cria a reserva.
                  if (booking.canAcceptPackage && !booking.proposalSent) ...[
                    SizedBox(
                      height: 52,
                      child: FilledButton(
                        onPressed: _busy
                            ? null
                            : () => _run(() async {
                                  if (!await _dayOk()) return;
                                  await supabase.rpc('accept_package_request', params: {'p_quote_request_id': booking.id});
                                  ref.invalidate(partnerBookingsProvider);
                                  if (mounted) {
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      SnackBar(
                                          content: Text(booking.eachPays
                                              ? 'Pedido aceite. Fica reservado e cada convidado paga a sua parte.'
                                              : 'Pedido aceite. O cliente paga para confirmar.')),
                                    );
                                    context.pop();
                                  }
                                }),
                        style: FilledButton.styleFrom(
                          backgroundColor: AppTheme.ink,
                          shape: const StadiumBorder(),
                          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15, fontWeight: FontWeight.w700),
                        ),
                        child: const Text('Aceitar pacote'),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 8, bottom: 10),
                      child: Text(
                          booking.eachPays
                              ? 'Fica reservado. Cada convidado paga ${euros((booking.totalAmount ?? 0) / ((booking.people ?? 1) < 1 ? 1 : booking.people!))} na app, 3 dias antes.'
                              : 'Ao aceitar, o cliente paga para confirmar a reserva.',
                          textAlign: TextAlign.center,
                          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                    ),
                  ] else if (booking.canAcceptTable && !booking.proposalSent) ...[
                    // Mesa «cada um escolhe» (190): aceitar reserva já, sem sinal.
                    SizedBox(
                      height: 52,
                      child: FilledButton(
                        onPressed: _busy
                            ? null
                            : () => _run(() async {
                                  if (!await _dayOk()) return;
                                  await supabase.rpc('accept_table_request', params: {'p_quote_request_id': booking.id});
                                  ref.invalidate(partnerBookingsProvider);
                                  if (mounted) {
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(content: Text('Pedido aceite. Fica reservado na tua agenda.')),
                                    );
                                    context.pop();
                                  }
                                }),
                        style: FilledButton.styleFrom(
                          backgroundColor: AppTheme.ink,
                          shape: const StadiumBorder(),
                          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15, fontWeight: FontWeight.w700),
                        ),
                        child: const Text('Aceitar pedido'),
                      ),
                    ),
                    const Padding(
                      padding: EdgeInsets.only(top: 8, bottom: 10),
                      child: Text('Fica reservado na tua agenda. Cada convidado escolhe o seu menu na app; vês aqui o que escolheram.',
                          textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                    ),
                  ] else if (booking.fromQuoteRequest && !booking.proposalSent) ...[
                    SizedBox(
                      height: 52,
                      child: FilledButton(
                        onPressed: () async {
                          if (!await _dayOk() || !context.mounted) return;
                          // Popup «Enviar proposta» (prancheta, 2026-11-25).
                          const wd = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
                          const mo = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
                          final d = booking.eventDate;
                          final sent = await showProposalSheet(
                            context,
                            quoteRequestId: booking.id,
                            eventId: booking.eventId,
                            clientName: booking.clientName,
                            eventLabel: booking.eventType.label,
                            requestTitle: booking.packageLabel.isNotEmpty ? booking.packageLabel : 'Pedido de orçamento',
                            requestLine: [
                              '${wd[d.weekday - 1]}, ${d.day} ${mo[d.month - 1]}',
                              if ((booking.people ?? 0) > 0) '${booking.people} pessoas',
                              if (booking.city.isNotEmpty) booking.city,
                            ].join(' · '),
                            requestMessage: booking.messageFromCouple,
                          );
                          if (!sent || !context.mounted) return;
                          ref.invalidate(partnerBookingsProvider);
                          context.pop();
                        },
                        style: FilledButton.styleFrom(
                          backgroundColor: AppTheme.ink,
                          shape: const StadiumBorder(),
                          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, 
                            fontSize: 15,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        child: const Text('Enviar proposta'),
                      ),
                    ),
                    const SizedBox(height: 10),
                  ],
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: _busy
                              ? null
                              : () => _run(() async {
                                  if (booking.fromQuoteRequest &&
                                      booking.status == BookingStatus.novo) {
                                    await supabase.rpc(
                                      'mark_quote_request_viewed',
                                      params: {'p_quote_request_id': booking.id},
                                    );
                                    ref.invalidate(partnerBookingsProvider);
                                  }
                                  final partnerId = ref.read(
                                    authControllerProvider.select((s) => s.profile!.id),
                                  );
                                  final conversationId = await getOrCreateConversation(
                                    eventId: booking.eventId,
                                    partnerId: partnerId,
                                  );
                                  if (context.mounted) {
                                    context.push(
                                      '/partner-messages/$conversationId',
                                      extra: ChatConversation(
                                        id: conversationId,
                                        eventId: booking.eventId,
                                        partnerId: partnerId,
                                        name: booking.clientName,
                                        avatarSeed: booking.avatarSeed,
                                      ),
                                    );
                                  }
                                }),
                          style: OutlinedButton.styleFrom(
                            // Secundário: contorno preto 1,5 (DESIGN.md §2).
                            minimumSize: const Size.fromHeight(52),
                            backgroundColor: Colors.white,
                            foregroundColor: AppTheme.ink,
                            side: const BorderSide(color: AppTheme.ink, width: 1.5),
                            elevation: 0,
                            shadowColor: const Color(0x22171713),
                            shape: const StadiumBorder(),
                            textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, 
                              fontSize: AppFontSize.base + 1,
                              fontWeight: FontWeight.w700,
                            ),
                          ),
                          child: const Text('Conversar'),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: OutlinedButton(
                          // Recusar só existe do lado `quote_requests`.
                          // Uma reserva já confirmada (tabela `bookings`)
                          // agora tem cancelamento real (`cancel_booking_by_partner()`,
                          // `059_cancel_booking.sql`) — só oferecido nos dois
                          // estados que a função aceita (`aceite`/`confirmado`,
                          // reais `awaiting_deposit`/`confirmed`); uma reserva
                          // já `concluido` não tem ação aqui.
                          onPressed: _busy
                              ? null
                              : booking.fromQuoteRequest
                              ? () => _run(() async {
                                  await supabase.rpc(
                                    'decline_quote_request',
                                    params: {'p_quote_request_id': booking.id},
                                  );
                                  ref.invalidate(partnerBookingsProvider);
                                  if (context.mounted) Navigator.of(context).pop();
                                })
                              : (booking.status == BookingStatus.aceite ||
                                    booking.status == BookingStatus.confirmado)
                              ? () async {
                                  // Popup do mockup «Cancelar reserva · parceiro»
                                  // (2026-11-24, 234): só com o sinal cativo;
                                  // depois disso só o organizador cancela.
                                  final state = await fetchBookingCancelState(booking.id);
                                  if (!context.mounted) return;
                                  final d = booking.eventDate;
                                  const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
                                  final reason = await showPartnerCancelSheet(
                                    context,
                                    clientName: booking.clientName,
                                    subtitle: '${booking.clientName} · ${booking.eventType.label} · ${d.day} ${months[d.month - 1]}',
                                    state: state,
                                    onTalkToTeam: () => context.push('/support'),
                                    onOtherDay: () async {
                                      final all = await ref.read(partnerBookingsProvider(null).future).catchError((_) => <Booking>[]);
                                      if (!context.mounted) return;
                                      await showProposeOtherDaySheet(context, request: booking, all: all);
                                    },
                                    onChange: () => showChangeSheet(
                                      context,
                                      bookingId: booking.id,
                                      otherName: booking.clientName,
                                      subtitle: 'Reserva · ${booking.clientName}',
                                      currentPeople: booking.people ?? 1,
                                    ),
                                  );
                                  if (reason == null || !context.mounted) return;
                                  // Já recebeu dinheiro desta reserva? Para
                                  // cancelar tem de o devolver (migração 125).
                                  final owed = await _releasedAmount(booking.id);
                                  if (!context.mounted) return;
                                  if (owed > 0) {
                                    final problem = await _returnFunds(booking.id);
                                    if (problem != null) {
                                      if (context.mounted) {
                                        await showIslandDialog<void>(
                                          context: context,
                                          builder: (context) => IslandAlert(
                                            title: const Text('Não foi possível devolver'),
                                            content: Text(problem),
                                            actions: [
                                              FilledButton(
                                                onPressed: () => Navigator.of(context).pop(),
                                                child: const Text('Ok'),
                                              ),
                                            ],
                                          ),
                                        );
                                      }
                                      return;
                                    }
                                  }
                                  await _run(() async {
                                    await supabase.rpc(
                                      'cancel_booking_by_partner',
                                      params: {'p_booking_id': booking.id, if (reason.isNotEmpty) 'p_reason': reason},
                                    );
                                    // Parceiro cancela → o casal é sempre reembolsado.
                                    await requestBookingRefund(booking.id);
                                    ref.invalidate(partnerBookingsProvider);
                                    if (context.mounted) Navigator.of(context).pop();
                                  });
                                }
                              : null,
                          style: OutlinedButton.styleFrom(
                            minimumSize: const Size.fromHeight(48),
                            backgroundColor: Colors.white,
                            foregroundColor: const Color(0xFFA3412E),
                            side: const BorderSide(color: Color(0xFFA3412E), width: 1.5),
                            shape: const StadiumBorder(),
                            textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, 
                              fontSize: AppFontSize.base + 1,
                              fontWeight: FontWeight.w700,
                            ),
                          ),
                          child: Text(
                            booking.fromQuoteRequest ? 'Recusar' : 'Cancelar reserva',
                          ),
                        ),
                      ),
                    ],
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

/// O pacote e os extras que o cliente escolheu (188), com as contas.
/// «O que escolheram» / «Valores» numa reserva da 190 (mockup «Parceiro ·
/// mesa em que cada um escolhe»): quantos já escolheram, cada menu e
/// extra, o total até agora e o que já está pago.
class BookingChoicesSummary extends ConsumerWidget {
  final Booking booking;
  const BookingChoicesSummary({super.key, required this.booking});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final choices = ref.watch(bookingChoicesProvider(booking.id)).value ?? const <BookingChoice>[];
    final paid = ref.watch(_guestSharesPaidProvider(booking.id)).value ?? (count: 0, amount: 0.0);
    final people = booking.people ?? 0;
    Widget line(String a, String b, {bool bold = false}) => Padding(
          padding: const EdgeInsets.symmetric(vertical: 6),
          child: Row(children: [
            Expanded(child: Text(a, style: TextStyle(fontSize: 14, fontWeight: bold ? FontWeight.w700 : FontWeight.w600, color: AppTheme.ink))),
            Text(b, style: TextStyle(fontSize: bold ? 16 : 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
        );
    final byMenu = <String, int>{};
    final byExtra = <String, int>{};
    for (final c in choices) {
      byMenu.update(c.packageName ?? 'Menu', (n) => n + 1, ifAbsent: () => 1);
      for (final e in c.extras) {
        byExtra.update(e, (n) => n + 1, ifAbsent: () => 1);
      }
    }
    final allergies = [for (final c in choices) if ((c.allergies ?? '').trim().isNotEmpty) c.allergies!.trim()];
    final sum = choices.fold<double>(0, (s, c) => s + c.amount);
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      if (booking.eachChooses) ...[
        const KitCaps('O que escolheram', top: 20),
        Container(
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
              Text('${choices.length}', style: const TextStyle(fontSize: 40, fontWeight: FontWeight.w700, color: AppTheme.ink, height: 1)),
              const SizedBox(width: 8),
              Padding(
                padding: const EdgeInsets.only(bottom: 4),
                child: Text(people > 0 ? 'de $people já escolheram' : 'já escolheram',
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ),
            ]),
            if (people > 0) ...[
              const SizedBox(height: 10),
              AppProgressBar(value: (choices.length / people).clamp(0, 1).toDouble(), height: 10, track: const Color(0xFFD9D9D9)),
            ],
            if (byMenu.isNotEmpty) ...[
              const SizedBox(height: 10),
              for (final e in byMenu.entries) line(e.key, '${e.value}'),
              for (final e in byExtra.entries) line('+ ${e.key}', '${e.value}'),
            ],
            if (allergies.isNotEmpty) ...[
              const SizedBox(height: 6),
              Text('Alergias: ${allergies.join(' · ')}', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ],
          ]),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(4, 8, 4, 0),
          child: Text(
            booking.choiceDeadlineLabel == null
                ? 'Cada escolha guarda o texto do menu tal como estava.'
                : 'Cada escolha guarda o texto do menu tal como estava. A escolha fecha ${booking.choiceDeadlineLabel}.',
            style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
          ),
        ),
      ],
      const KitCaps('Valores', top: 20),
      Container(
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: Column(children: [
          if (booking.eachChooses) line('Total até agora', euros(sum), bold: true) else line('Total', euros(booking.totalAmount ?? 0), bold: true),
          if (booking.eachPays) line('Já pago', '${euros(paid.amount)} · ${paid.count} ${paid.count == 1 ? 'pessoa' : 'pessoas'}'),
        ]),
      ),
      Padding(
        padding: const EdgeInsets.fromLTRB(4, 8, 4, 0),
        child: Text(
          booking.eachPays
              ? (booking.eachChooses
                  ? 'Cada convidado paga a sua parte quando escolhe.'
                  : 'Cada convidado paga a sua parte na app, 3 dias antes.')
              : 'Pagam os organizadores, depois de a escolha fechar.',
          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
        ),
      ),
    ]);
  }
}

/// Partes de convidados já pagas nesta reserva (o parceiro vê os
/// pagamentos com o seu `partner_id`).
final _guestSharesPaidProvider = FutureProvider.autoDispose.family<({int count, double amount}), String>((ref, bookingId) async {
  try {
    final rows = await supabase.from('payments').select('amount').eq('booking_id', bookingId).eq('type', 'guest_share').eq('status', 'paid');
    final list = (rows as List).cast<Map<String, dynamic>>();
    return (count: list.length, amount: list.fold<double>(0, (s, r) => s + ((r['amount'] as num?)?.toDouble() ?? 0)));
  } catch (_) {
    return (count: 0, amount: 0.0);
  }
});

class _ChosenPackageCard extends StatelessWidget {
  final Booking booking;
  const _ChosenPackageCard({required this.booking});

  @override
  Widget build(BuildContext context) {
    final p = booking.packageSnapshot!;
    final people = booking.people ?? 1;
    final unit = p['price_unit'] as String? ?? 'total';
    final price = (p['price'] as num?)?.toDouble() ?? 0;
    final includes = [for (final x in (p['includes'] as List?) ?? const []) '$x'];
    final starting = p['is_starting_price'] == true;
    String line(String u, double v) => u == 'person' ? '${euros(v)} × $people = ${euros(v * people)}' : euros(v);
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: AppTheme.accentOliveDark, width: 1.5),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          const KitTag('Pacote'),
          if (booking.extrasSnapshot.isNotEmpty) ...[
            const SizedBox(width: 8),
            KitTag('${booking.extrasSnapshot.length} ${booking.extrasSnapshot.length == 1 ? 'extra' : 'extras'}', kind: KitTagKind.neutral),
          ],
        ]),
        const SizedBox(height: 10),
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(child: Text('${p['name'] ?? 'Pacote'}', style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink))),
          Text('${starting ? 'desde ' : ''}${euros(price)}${priceUnitSuffix(unit)}',
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        for (final l in includes)
          Padding(
            padding: const EdgeInsets.only(top: 4),
            child: Text('•  $l', style: const TextStyle(fontSize: 13, height: 1.4, color: Color(0xFF3A3733))),
          ),
        if ((p['excludes'] as String?)?.trim().isNotEmpty == true)
          Padding(
            padding: const EdgeInsets.only(top: 6),
            child: Text('Não inclui: ${p['excludes']}', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ),
        for (final e in booking.extrasSnapshot) ...[
          Container(height: 1, margin: const EdgeInsets.symmetric(vertical: 10), color: const Color(0xFFD9D9D9)),
          Row(children: [
            Expanded(child: Text('+ ${e['name']}', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            Text('${euros((e['price'] as num?)?.toDouble() ?? 0)}${priceUnitSuffix(e['price_unit'] as String? ?? 'total')}',
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
          if ((e['details'] as List?)?.isNotEmpty == true)
            Text((e['details'] as List).join(' · '), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ],
        if (!starting && booking.totalAmount != null) ...[
          Container(height: 1, margin: const EdgeInsets.symmetric(vertical: 10), color: const Color(0xFFD9D9D9)),
          Text(line(unit, price), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          for (final e in booking.extrasSnapshot)
            Text('${e['name']}: ${line(e['price_unit'] as String? ?? 'total', (e['price'] as num?)?.toDouble() ?? 0)}',
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(height: 6),
          Row(children: [
            const Expanded(child: Text('Total', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            Text(euros(booking.totalAmount!), style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
        ],
      ]),
    );
  }
}


/// O estado do pedido por baixo do título: por responder num aviso
/// amarelo (vermelho a 3 dias ou menos do evento); com a reserva aceite ou
/// confirmada, o resumo «Faltam N dias» (destaque, linha preta 1,5).
class _StatusLine extends StatelessWidget {
  final Booking booking;
  const _StatusLine({required this.booking});

  @override
  Widget build(BuildContext context) {
    final b = booking;
    final today = DateTime(DateTime.now().year, DateTime.now().month, DateTime.now().day);
    final days = DateTime(b.eventDate.year, b.eventDate.month, b.eventDate.day).difference(today).inDays;
    if (b.status == BookingStatus.novo && !b.proposalSent) {
      final tone = days <= 3 ? AlertTone.urgent : AlertTone.pending;
      return AlertOutline(
        tone: tone,
        radius: 16,
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Container(
            margin: const EdgeInsets.only(top: 6),
            width: 8,
            height: 8,
            decoration: BoxDecoration(color: alertColor(tone), shape: BoxShape.circle),
          ),
          const SizedBox(width: 10),
          const Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Por responder', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              SizedBox(height: 2),
              Text('O cliente espera a tua proposta.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
        ]),
      );
    }
    final tag = b.proposalSent && b.status != BookingStatus.confirmado && b.status != BookingStatus.concluido
        ? const KitTag('Proposta enviada', kind: KitTagKind.neutral)
        : switch (b.status) {
            BookingStatus.novo => const KitTag('Por responder', kind: KitTagKind.pending),
            BookingStatus.emAnalise => const KitTag('Em análise', kind: KitTagKind.neutral),
            BookingStatus.aceite => const KitTag('À espera do pagamento', kind: KitTagKind.pending),
            BookingStatus.confirmado => const KitTag('Confirmada'),
            BookingStatus.concluido => const KitTag('Concluído', kind: KitTagKind.neutral),
            BookingStatus.recusado => const KitTag('Recusado', kind: KitTagKind.neutral),
          };
    if ((b.status == BookingStatus.aceite || b.status == BookingStatus.confirmado) && days >= 0) {
      return Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: AppTheme.ink, width: 1.5),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(days == 0 ? 'É HOJE' : 'FALTAM',
              style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          if (days > 0)
            Row(crossAxisAlignment: CrossAxisAlignment.baseline, textBaseline: TextBaseline.alphabetic, children: [
              Text('$days', style: const TextStyle(fontSize: 40, height: 1.1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(width: 8),
              Text(days == 1 ? 'dia' : 'dias', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          const SizedBox(height: 8),
          Align(alignment: Alignment.centerLeft, child: tag),
        ]),
      );
    }
    return Align(alignment: Alignment.centerLeft, child: tag);
  }
}
