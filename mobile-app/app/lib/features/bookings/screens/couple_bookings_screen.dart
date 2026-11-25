import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/home/home_providers.dart';
import '../../../core/bookings/hire_privacy.dart';
import '../../../core/chat/chat_helpers.dart' show PartnerUnavailableException, getOrCreateConversation;
import '../../../core/supabase/supabase_config.dart';
import '../../payments/booking_extras_sheet.dart';
import '../widgets/reject_proposal.dart';
import '../../../core/payments/payments.dart' show PayArgs, payDay;
import '../../../core/models/models.dart';
import '../../../core/reviews/review_providers.dart';
import '../../../core/event/event_controller.dart';
import '../../guest_offers/widgets/organizer_guest_offers.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../features/partner_bookings/booking_style.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/widgets/v2_kit.dart' show V2Avatar;
import '../../../shared/text_case.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../core/partners/partner_providers.dart';
import '../../partners/screens/partner_detail_screen.dart';
import 'package:copo_dagua_app/shared/widgets/app_progress.dart';
import '../widgets/service_preferences_frame.dart';
import '../../../shared/widgets/event_pills.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import '../../../shared/widgets/cancel_booking_sheet.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

/// Reservas do lado do casal — lê `coupleBookingsProvider`
/// (`core/home/home_providers.dart`), mesmos dados mock que alimentam
/// `_BookingsSection` no dashboard (`home_feed_screen.dart`); este ecrã é
/// a versão completa, com todas as reservas em vez de só um resumo.
/// Ver `mobile-app/bookings/README.md` — sem motor real ligado ainda.
class CoupleBookingsScreen extends ConsumerStatefulWidget {
  /// Abre diretamente no separador "Convidados" (alojamento e transporte).
  final bool guestsTab;
  const CoupleBookingsScreen({super.key, this.guestsTab = false});

  @override
  ConsumerState<CoupleBookingsScreen> createState() => _CoupleBookingsScreenState();
}

class _CoupleBookingsScreenState extends ConsumerState<CoupleBookingsScreen> {
  late bool _guests = widget.guestsTab;

  /// Barra de eventos (pedido 2026-11-23): começa no evento aberto;
  /// [_all] = «Todos»; [_picked] = outro evento escolhido na barra.
  bool _all = false;
  String? _picked;


  @override
  Widget build(BuildContext context) {
    final eventId = ref.watch(eventControllerProvider.select((s) => s.event?.id));
    final events = ref.watch(eventControllerProvider.select((s) => s.events));
    final selected = _all ? null : (events.any((e) => e.id == _picked) ? _picked : eventId);
    final eventName = [
      for (final e in events)
        if (e.id == selected) capFirst(e.displayNames),
    ].firstOrNull;
    final bookingsAsync = ref.watch(coupleBookingsProvider);
    final proposalsAsync = ref.watch(pendingProposalsProvider);

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        // Parceiros: a página inteira desliza, como no Orçamento e nos
        // Lugares (pedido 2026-11-08). Convidados (ofertas) fica igual.
        // A seta fixa e a barra do topo bloqueada (pedido 2026-11-23).
        child: ScrollBackView(builder: (context, scroll) {
          // Mockup «Páginas do evento» → Reservas (2026-11-14).
          final top = <Widget>[
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                const KitHeader(),
                KitTitle('Reservas',
                    subtitle: selected == null
                        ? 'Os parceiros de todos os teus eventos'
                        : eventName == null
                            ? 'Os parceiros deste evento'
                            : 'Os parceiros de $eventName'),
                if (!_guests)
                  EventPills(
                    selected: selected,
                    onSelect: (id) => setState(() {
                      _all = id == null;
                      _picked = id;
                    }),
                  ),
                KitPills([
                  KitPill(label: 'Parceiros', selected: !_guests, onTap: () => setState(() => _guests = false)),
                  KitPill(label: 'Convidados', selected: _guests, onTap: () => setState(() => _guests = true)),
                ]),
              ]),
            ),
            const SizedBox(height: 4),
          ];
          if (_guests) {
            return ScrollingHeader(
 header: [
              ...top
 ],
 body: eventId == null ? const SizedBox.shrink() : OrganizerGuestOffers(eventId: eventId),
);
          }
          // Sempre uma ListView (a carregar, erro, vazio e com dados): trocar
          // de tipo de lista ligava duas listas ao mesmo controlador.
          Widget whole(Widget body) => ListView(controller: scroll, padding: const EdgeInsets.only(bottom: 140), children: [
                ...top,
                Padding(padding: const EdgeInsets.only(top: 80), child: body),
              ]);
          return bookingsAsync.when(
                loading: () => whole(const SkeletonList()),
                error: (err, st) => whole(AsyncErrorView(onRetry: () => ref.invalidate(coupleBookingsProvider))),
                data: (bookings) {
                  final proposals = proposalsAsync.maybeWhen(
                    data: (p) => p,
                    orElse: () => const <ReceivedProposal>[],
                  );
                  // Para que evento é cada parceiro (pedido 2026-11-22).
                  final names = {
                    for (final w in ref.watch(eventControllerProvider).events) w.id: capFirst(w.displayNames),
                  };
                  // Só as reservas do evento aberto (pedido 2026-11-23: antes
                  // apareciam as de todos os eventos na mesma página).
                  // Barra de eventos: «Todos» ou um evento (pedido 2026-11-23).
                  final ev = selected;
                  final eventIds = ev == null ? [for (final e in events) e.id] : <String>[ev];
                  final shownBookings = [for (final b in bookings) if (ev == null || b.eventId == ev) b];
                  final shownProposals = [for (final p in proposals) if (ev == null || p.eventId == ev) p];
                  final toPay = [
                    for (final b in shownBookings)
                      if (b.status != BookingStatus.recusado)
                        for (final (id, what, due) in [
                          if (b.pendingDepositPaymentId != null) (b.pendingDepositPaymentId!, b.depositIsFull ? 'Pagamento' : 'Sinal', b.pendingDepositDueAt),
                          if (b.pendingFinalPaymentId != null) (b.pendingFinalPaymentId!, 'Restante', b.finalPaymentDueAt),
                        ])
                          (b, id, what, due),
                  ];
                  if (shownBookings.isEmpty && shownProposals.isEmpty) {
                    return ListView(controller: scroll, padding: const EdgeInsets.only(bottom: 140), children: [
                      ...top,
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                        child: SectionFrame(title: 'Os vossos serviços', children: [
                          FrameEmpty(
                            title: 'Ainda sem parceiros reservados',
                            text: 'Espaço, catering, fotografia… reserva e paga tudo aqui.',
                            actions: [FrameButton44('Ver parceiros', onTap: () => context.push('/partners'))],
                          ),
                        ]),
                      ),
                      if (ev != null)
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                          child: ServicePreferencesFrame(eventId: ev),
                        ),
                    ]);
                  }
                  return ListView(
                    controller: scroll,
                    padding: const EdgeInsets.only(bottom: 140),
                    children: [
                      ...top,
                      Padding(
                      padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                      Builder(builder: (context) {
                        final active = shownBookings.where((b) => b.status != BookingStatus.recusado).toList();
                        final handled = active.where((b) => b.paidAmount > 0 || b.status == BookingStatus.concluido).length;
                        return KitSummary(
                          kicker: 'Serviços tratados',
                          value: '$handled',
                          unit: 'de ${active.length} ${active.length == 1 ? 'serviço' : 'serviços'}',
                          progress: active.isEmpty ? 0 : handled / active.length,
                          footer: toPay.isEmpty && shownProposals.isEmpty
                              ? null
                              : [
                                  if (toPay.isNotEmpty) '${toPay.length} ${toPay.length == 1 ? 'pagamento por fazer' : 'pagamentos por fazer'}',
                                  if (shownProposals.isNotEmpty) '${shownProposals.length} ${shownProposals.length == 1 ? 'proposta' : 'propostas'}',
                                ].join(' · '),
                        );
                      }),
                      // Pagamentos e propostas recebidas no «Para fazer»
                      // (pedido 2026-11-22).
                      if (toPay.isNotEmpty || shownProposals.isNotEmpty)
                        SectionFrame(title: 'Para fazer · ${toPay.length + shownProposals.length}', children: [
                          for (final (b, id, what, due) in toPay)
                            FrameTaskRow(
                              lead: V2Avatar(b.partnerName, size: 44, imageUrl: b.partnerLogoUrl),
                              title: b.partnerName,
                              sub: [
                                if (names[b.eventId] != null && eventIds.length > 1) names[b.eventId]!,
                                what,
                                if (due != null) 'até ${due.day}/${due.month}',
                              ].join(' · '),
                              action: 'Pagar',
                              urgent: toneForDue(due) == AlertTone.urgent,
                              onTap: () async {
                                await payBookingFlow(context, ref, paymentId: id, bookingId: b.id, partnerName: b.partnerName);
                                ref.invalidate(coupleBookingsProvider);
                              },
                            ),
                          // Propostas: uma linha com «Ver», que abre a proposta
                          // num popup (Recusar / Aceitar).
                          for (final proposal in shownProposals)
                            FrameTaskRow(
                              lead: V2Avatar(proposal.partnerName, size: 44),
                              title: proposal.partnerName,
                              sub: [
                                if (names[proposal.eventId] != null && eventIds.length > 1) names[proposal.eventId]!,
                                'Proposta',
                                euros(proposal.price),
                              ].join(' · '),
                              action: 'Ver',
                              onTap: () => showIslandSheet<void>(
                                context: context,
                                isScrollControlled: true,
                                builder: (_) => SafeArea(
                                  top: false,
                                  child: Padding(
                                    padding: const EdgeInsets.fromLTRB(20, 4, 20, 20),
                                    child: _ProposalRow(proposal: proposal, eventName: names[proposal.eventId]),
                                  ),
                                ),
                              ),
                            ),
                        ]),
                      if (shownBookings.isNotEmpty)
                        SectionFrame(title: 'Os vossos serviços', children: [
                          for (final (i, booking) in shownBookings.indexed) ...[
                            if (i > 0) const Divider(height: 1, thickness: 1, color: AppTheme.line),
                            _CoupleBookingRow(booking: booking, eventName: names[booking.eventId]),
                          ],
                        ]),
                      // «Já têm tratado?» (antes a página «Serviços tratados»,
                      // pedido 2026-11-23).
                      if (ev != null) ServicePreferencesFrame(eventId: ev),
                      FrameButton44('Ver parceiros', outlined: true, onTap: () => context.push('/partners')),
                      ]),
                      ),
                    ],
                  );
                },
          );
        }),
      ),
    );
  }
}

class _CoupleBookingRow extends ConsumerStatefulWidget {
  final CoupleBooking booking;

  /// O evento desta reserva (pedido 2026-11-22: dizer para que evento é).
  final String? eventName;

  const _CoupleBookingRow({required this.booking, this.eventName});

  @override
  ConsumerState<_CoupleBookingRow> createState() => _CoupleBookingRowState();
}

class _CoupleBookingRowState extends ConsumerState<_CoupleBookingRow> {
  CoupleBooking get booking => widget.booking;
  bool _cancelling = false;

  /// Depois de cancelar: abre o perfil do parceiro com "Pedir orçamento"
  /// outra vez disponível (2026-10-21).
  Future<void> _openPartnerForNewQuote() async {
    final id = booking.partnerId;
    if (id == null) return;
    ref.invalidate(partnerRelationshipStatusProvider(id));
    final partner = await ref.read(partnerByIdProvider(id).future);
    if (!mounted || partner == null) return;
    await PartnerDetailScreen.show(context, partner);
  }

  /// `cancel_booking_by_couple()` (`059_cancel_booking.sql`) — só
  /// oferecido enquanto a booking está `aceite`/`confirmado`
  /// (`awaiting_deposit`/`confirmed` reais), mesmos dois estados que a
  /// função aceita (`invalid_state` para qualquer outro).
  Future<void> _cancel() async {
    if (_cancelling) return;
    // Popup do mockup «Cancelar reserva · organizador» (2026-11-24, 234):
    // nas primeiras 48 h o sinal volta todo; depois perde-se.
    final state = await fetchBookingCancelState(booking.id, depositAmount: booking.depositAmount);
    if (!mounted) return;
    final d = booking.serviceDate;
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    final deposit = booking.depositAmount ?? 0;
    final reason = await showCoupleCancelSheet(
      context,
      partnerName: booking.partnerName,
      subtitle: '${booking.partnerName} · ${d.day} ${months[d.month - 1]} ${d.year}',
      state: state,
      rest: deposit > 0 && booking.amount > deposit ? booking.amount - deposit : null,
    );
    if (reason == null || !mounted) return;

    setState(() => _cancelling = true);
    try {
      await cancelBookingByCouple(booking.id, reason: reason.isEmpty ? null : reason);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Não foi possível cancelar a reserva. Tenta novamente.'),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _cancelling = false);
      ref.invalidate(coupleBookingsProvider);
      if (booking.partnerId != null) ref.invalidate(partnerRelationshipStatusProvider(booking.partnerId!));
      // O sinal pendente já foi marcado `failed` por `cancel_booking_by_couple()`
      // — recomputar agora dispensa a tarefa "Pagar sinal" desatualizada
      // em vez de esperar por um recompute não relacionado (próximo
      // carregamento do Home). Mesmo padrão de `service_preferences_frame.dart`.
      ref.read(taskEngineControllerProvider.notifier).recompute();
    }
  }

  // Rótulo livre (`partner_categories.label_pt`, taxonomia real de 13
  // valores) em vez do switch exaustivo de 5 casos de [PartnerCategory] —
  // mapeamento por palavra-chave com ícone genérico de recurso, mesmo
  // espírito de `colorForTagLabel` em `shared/category_tag_color.dart`.
  IconData get _icon {
    final label = booking.category?.toLowerCase() ?? '';
    if (label.contains('foto') || label.contains('víde')) {
      return Hi.camera;
    }
    if (label.contains('cater') || label.contains('bolo')) {
      return Hi.buildingStorefront;
    }
    if (label.contains('músic') || label.contains('dj')) {
      return Hi.musicalNote;
    }
    if (label.contains('flor') || label.contains('decor')) {
      return Hi.sparkles;
    }
    if (label.contains('espaç') || label.contains('venue')) {
      return Hi.homeModern;
    }
    return Hi.sparkles;
  }

  /// Abre o pagamento dentro da app (escolher método → Stripe embutida →
  /// página de pago), sem abrir o browser — 2026-10-19.
  Future<void> _payPending(String? paymentId, {required bool deposit, required double amount}) async {
    if (paymentId == null) return;
    await context.push('/pay', extra: PayArgs(
      paymentId: paymentId,
      partnerName: booking.partnerName,
      kind: deposit ? 'deposit' : 'final_payment',
      amount: amount,
    ));
    if (mounted) ref.invalidate(coupleBookingsProvider);
  }

  @override
  Widget build(BuildContext context) {
    final date = booking.serviceDate;
    final dateLabel =
        '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';
    final needsDeposit = booking.pendingDepositPaymentId != null;
    final needsFinalPayment = booking.pendingFinalPaymentId != null;
    // Valor que a Stripe vai mesmo cobrar (parceiro + comissão por cima,
    // ver `amountWithCommission`) — nunca mostrar só o valor do parceiro
    // aqui, para o botão nunca prometer um valor diferente do checkout
    // a seguir.
    // Escalões do organizador (migração 127): a percentagem efetiva desta
    // reserva vale para o sinal e para o restante.
    final commissionPct = ((booking.partnerId == null
                ? ref.watch(organizerFeeConfigProvider).value
                : ref.watch(organizerFeeForPartnerProvider(booking.partnerId!)).value) ??
            const FeeConfig())
        .effectivePct(booking.amount);

    return SnappyTap(
      onTap: () => context.push(
        '/bookings/detail',
        extra: booking,
      ),
      // Uma linha por parceiro, sem caixa (mockup «Páginas do evento · com
      // molduras» → Reservas, 2026-11-23): logótipo 44, nome 16, «evento ·
      // data · valor» 13 e, à direita, «Pagar» ou o estado.
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                V2Avatar(booking.partnerName, size: 44, imageUrl: booking.partnerLogoUrl),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(children: [
                        Flexible(
                          child: Text(
                            booking.partnerName,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                              fontWeight: FontWeight.w700,
                              fontSize: 16,
                              color: AppTheme.ink,
                            ),
                          ),
                        ),
                        // Contratação em segredo (2026-10-21).
                        if (booking.isPrivate) ...[
                          const SizedBox(width: 6),
                          const Icon(Hi.lockClosed, size: 14, color: AppTheme.inkMuted),
                          const SizedBox(width: 2),
                          const Text('Surpresa', style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                        ],
                      ]),
                      const SizedBox(height: 2),
                      Text(
                        [
                          ?widget.eventName,
                          dateLabel,
                          euros(totalWithCommission(booking.amount, booking.depositAmount, commissionPct)),
                        ].join(' · '),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          color: AppTheme.inkMuted,
                          fontSize: 13,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 8),
                // `needsFinalPayment` só existe quando `admin_complete_booking()`
                // já correu (`053_final_payment.sql`) mas ainda sobra valor por
                // cobrar além do sinal — mostrar "Concluído" nesse intervalo
                // era enganador (parecia que já não havia nada pendente). Bug
                // real reportado pelo utilizador (2026-09-12): a reserva
                // aparecia como concluída logo após o sinal, devia mostrar o
                // restante como pendente.
                // Só o sinal pago não é "tudo pago" (2026-10-17): se ainda
                // falta valor, a etiqueta diz isso em vez de "Concluído".
                if (needsDeposit && booking.depositOpen)
                  FrameButton36('Pagar', onTap: () => _payPending(
                        booking.pendingDepositPaymentId,
                        deposit: true,
                        amount: amountWithCommission(booking.depositAmount ?? 0, commissionPct),
                      ))
                else if (needsFinalPayment && booking.finalPaymentOpen)
                  FrameButton36('Pagar', onTap: () => _payPending(
                        booking.pendingFinalPaymentId,
                        deposit: false,
                        amount: amountWithCommission(booking.finalPaymentAmount ?? 0, commissionPct),
                      ))
                else
                  KitTag(
                    needsDeposit
                        ? 'Pagar a partir de ${payDay(booking.depositOpensAt!)}'
                        : needsFinalPayment
                            ? 'Falta o resto'
                            : (booking.paidAmount > 0 && booking.remainingAmount > 0.009)
                                ? 'Sinal pago'
                                : (booking.paidAmount > 0 && booking.remainingAmount <= 0.009)
                                    ? 'Tudo pago'
                                    : booking.status.label,
                    kind: needsDeposit || needsFinalPayment
                        ? KitTagKind.pending
                        : (booking.paidAmount > 0 || booking.status == BookingStatus.concluido)
                            ? KitTagKind.green
                            : KitTagKind.neutral,
                  ),
              ],
            ),
            if (booking.paidAmount > 0) ...[
              const SizedBox(height: 10),
              AppProgressBar(value: booking.amount <= 0 ? 1 : (booking.paidAmount / booking.amount).clamp(0.0, 1.0), height: 5, track: AppTheme.borderMuted),
              const SizedBox(height: 6),
              Text(
                booking.remainingAmount > 0.009
                    ? 'Pago ${euros(amountWithCommission(booking.paidAmount, commissionPct), cents: true)} · falta ${euros(amountWithCommission(booking.remainingAmount, commissionPct), cents: true)}'
                        '${needsFinalPayment ? '' : ' (pede-se depois do serviço)'}'
                    : 'Pago na totalidade',
                style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
              ),
            ],
            if (needsDeposit && !booking.depositIsFull) ...[
              const SizedBox(height: 6),
              const Text(
                'A data só fica garantida com o sinal pago: até lá, o parceiro pode aceitar outro pedido para esse dia.',
                style: TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.35),
              ),
            ],
            if (booking.status == BookingStatus.aceite ||
                booking.status == BookingStatus.confirmado) ...[
              const SizedBox(height: 8),
              Align(
                alignment: Alignment.centerRight,
                child: PressScale(child: TextButton(
                  onPressed: _cancelling ? null : _cancel,
                  style: TextButton.styleFrom(
                    foregroundColor: AppStatusColors.declined,
                  ),
                  child: Text(_cancelling ? 'A cancelar...' : 'Cancelar reserva'),
                )),
              ),
            ],
            if (booking.status == BookingStatus.recusado && booking.partnerId != null) ...[
              const SizedBox(height: 10),
              Text(
                'Reserva cancelada. Podes pedir uma nova proposta a ${booking.partnerName} ou escolher outro parceiro.',
                style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.35),
              ),
              const SizedBox(height: 8),
              Align(
                alignment: Alignment.centerLeft,
                child: PressScale(child: OutlinedButton.icon(
                  onPressed: _openPartnerForNewQuote,
                  icon: const Icon(Hi.arrowPath, size: 18),
                  label: const Text('Nova proposta'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: AppTheme.accentOliveDark,
                    side: BorderSide(color: AppTheme.accentOliveDark),
                    shape: const StadiumBorder(),
                  ),
                )),
              ),
            ],
            if (booking.status == BookingStatus.concluido) ...[
              const SizedBox(height: 12),
              ReviewAction(booking: booking),
            ],
          ],
        ),
      ),
    );
  }
}

/// Proposta pendente (`pendingProposalsProvider`) — "Aceitar" chama
/// `accept_proposal()`, que cria a reserva real; sem isto o casal nunca
/// tinha forma de sair de `quote_requests`/`proposals` para `bookings`.
class _ProposalRow extends ConsumerStatefulWidget {
  final ReceivedProposal proposal;
  final String? eventName;

  const _ProposalRow({required this.proposal, this.eventName});

  @override
  ConsumerState<_ProposalRow> createState() => _ProposalRowState();
}

class _ProposalRowState extends ConsumerState<_ProposalRow> {
  bool _accepting = false;

  Future<void> _accept() async {
    // Partilhar com os outros organizadores ou guardar em segredo (2026-10-21).
    final secret = await askHirePrivacy(context, widget.proposal.eventId, widget.proposal.partnerName);
    if (secret == null || !mounted) return;
    setState(() => _accepting = true);
    try {
      await acceptProposal(widget.proposal.id, private: secret);
      // Mockup (2026-11-21): depois de aceitar, os extras do parceiro.
      try {
        final b = await supabase.from('bookings').select('id').eq('proposal_id', widget.proposal.id).maybeSingle();
        final bookingId = b?['id'] as String?;
        if (bookingId != null && mounted) {
          await offerBookingExtras(context, bookingId, partnerName: widget.proposal.partnerName);
        }
      } catch (_) {}
      ref.invalidate(pendingProposalsProvider);
      ref.invalidate(coupleBookingsProvider);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Proposta aceite! Paga abaixo para confirmar a reserva.')),
        );
      }
    } on PostgrestException catch (e) {
      // `P0001` = `accept_proposal()` já não aceita esta proposta
      // (`invalid_state`). Verifica o estado real antes de mostrar
      // erro — se entretanto já foi aceite (ex: pelo cartão no Chat),
      // não é uma falha, só a lista aqui que ainda não sabia. Bug real
      // reportado pelo utilizador (2026-09-05).
      // `P0007` = `partner_already_booked` — o parceiro já tem outra
      // reserva ativa (`awaiting_deposit`/`confirmed`) na mesma data
      // (backend/bookings/tasks.md, "Prevenir overbooking").
      String? status;
      if (e.code == 'P0001') {
        status = await fetchProposalStatus(widget.proposal.id);
      }
      if (mounted && status != 'accepted') {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              e.code == 'P0001'
                  ? 'Esta proposta já não está disponível — foi recusada ou expirou.'
                  : e.code == 'P0007'
                      ? 'Este parceiro já tem outra reserva confirmada nessa data. Não é possível aceitar esta proposta.'
                      // `P0008` = `already_booked_with_partner` (migração 102).
                      : e.code == 'P0010'
                          ? PartnerUnavailableException.message
                      : e.code == 'P0008'
                          ? 'Já tens uma reserva com este parceiro. Só podes aceitar outra se essa for cancelada sem nada pago.'
                          : 'Não foi possível aceitar a proposta. Tenta novamente.',
            ),
          ),
        );
      }
      ref.invalidate(pendingProposalsProvider);
      ref.invalidate(coupleBookingsProvider);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Não foi possível aceitar a proposta. Tenta novamente.',
            ),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _accepting = false);
    }
  }

  /// «Recusar» com o motivo, que segue para o parceiro na conversa.
  Future<void> _reject() async {
    final p = widget.proposal;
    setState(() => _accepting = true);
    final done = await rejectProposalFlow(
      context,
      proposalId: p.id,
      partnerName: p.partnerName,
      sendMessage: (text) async {
        final partnerId = p.partnerId;
        if (partnerId == null) return;
        final conv = await getOrCreateConversation(eventId: p.eventId, partnerId: partnerId);
        await supabase.from('messages').insert({
          'conversation_id': conv,
          'sender_role': 'couple',
          'sender_id': supabase.auth.currentUser!.id,
          'body': text,
        });
      },
    );
    if (done) ref.invalidate(pendingProposalsProvider);
    if (mounted) setState(() => _accepting = false);
  }

  @override
  Widget build(BuildContext context) {
    final proposal = widget.proposal;
    final dateLabel = proposal.eventDate == null
        ? null
        : '${proposal.eventDate!.day.toString().padLeft(2, '0')}/${proposal.eventDate!.month.toString().padLeft(2, '0')}/${proposal.eventDate!.year}';
    final fee = ((proposal.partnerId == null
                ? ref.watch(organizerFeeConfigProvider).value
                : ref.watch(organizerFeeForPartnerProvider(proposal.partnerId!)).value) ??
            const FeeConfig())
        .effectivePct(proposal.price);

    // No «Para fazer»: a linha amarela do aviso, sem fundo (§7).
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: alertColor(AlertTone.pending), width: 1.5),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            widget.eventName == null ? 'Proposta de ${proposal.partnerName}' : 'Proposta de ${proposal.partnerName} · ${widget.eventName}',
            style: const TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: AppFontSize.base,
              color: AppTheme.ink,
            ),
          ),
          const SizedBox(height: 2),
          Text(
            proposal.title,
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
          ),
          const SizedBox(height: 2),
          Text(
            [
              if (dateLabel != null) dateLabel,
              '${euros(amountWithCommission(proposal.price, fee))} · sinal ${euros(amountWithCommission(proposal.depositAmount, fee))} (com taxa de serviço)',
            ].join(' · '),
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
          ),
          const SizedBox(height: 6),
          // Política de reembolso escolhida pelo parceiro (migração 108).
          Row(children: [
            Icon(
              proposal.depositRefundable ? Hi.arrowUturnLeft : Hi.noSymbol,
              size: 14,
              color: proposal.depositRefundable ? AppTheme.accentOliveDark : const Color(0xFFA3412E),
            ),
            const SizedBox(width: 6),
            Expanded(
              child: Text(
                proposal.depositRefundable
                    ? 'Sinal cancelável apenas nas 48 h depois de pagar'
                    : 'Sinal não reembolsável depois de o parceiro aceitar',
                style: TextStyle(
                  fontSize: AppFontSize.xs,
                  fontWeight: FontWeight.w600,
                  color: proposal.depositRefundable ? AppTheme.accentOliveDark : const Color(0xFFA3412E),
                ),
              ),
            ),
          ]),
          const SizedBox(height: 12),
          // «Recusar» + «Aceitar» (mockup 2026-11-21).
          Row(children: [
            Expanded(
              child: PressScale(child: OutlinedButton(
                onPressed: _accepting ? null : _reject,
                style: OutlinedButton.styleFrom(
                  foregroundColor: AppTheme.ink,
                  side: const BorderSide(color: AppTheme.ink, width: 1.5),
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  shape: const StadiumBorder(),
                ),
                child: const Text('Recusar'),
              )),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: PressScale(child: FilledButton(
                onPressed: _accepting ? null : _accept,
                style: FilledButton.styleFrom(
                  backgroundColor: AppTheme.ink,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  shape: const StadiumBorder(),
                ),
                child: Text(_accepting ? 'A aceitar...' : 'Aceitar'),
              )),
            ),
          ]),
        ],
      ),
    );
  }
}

/// Convite a avaliar (RN — só reservas concluídas) ou, se já existir
/// uma avaliação real para esta reserva, a mostra em vez de repetir o
/// convite (nunca deixa avaliar duas vezes — `submit_review()` já
/// bloqueia server-side, isto é só refletir isso na UI).
/// Pública (não `_ReviewAction`) para ser reutilizada também no ecrã de
/// detalhe da reserva (`couple_booking_detail_screen.dart`) — pedido
/// explícito do utilizador: "faz com que os casais possam editar as
/// suas reviews no local das reservas apos clicar em detalhes da
/// reserva".
class ReviewAction extends ConsumerWidget {
  final CoupleBooking booking;

  const ReviewAction({super.key, required this.booking});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final reviewAsync = ref.watch(reviewForBookingProvider(booking.id));

    return reviewAsync.when(
      loading: () => const SizedBox.shrink(),
      error: (err, st) => const SizedBox.shrink(),
      data: (review) {
        if (review != null) {
          return SnappyTap(
            onTap: () => _showReviewSheet(context, ref, booking, review),
            child: Row(
              children: [
                Text(
                  'A tua avaliação:',
                  style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
                ),
                const SizedBox(width: 6),
                _InlineStars(rating: review.rating),
                const SizedBox(width: 6),
                const Icon(Hi.pencil, size: 14, color: AppTheme.inkMuted),
              ],
            ),
          );
        }
        return SizedBox(
          width: double.infinity,
          child: PressScale(child: OutlinedButton(
            onPressed: () => _showReviewSheet(context, ref, booking, null),
            style: OutlinedButton.styleFrom(
              foregroundColor: AppTheme.accentOliveDark,
              side: BorderSide(color: AppTheme.accentOliveDark),
              padding: const EdgeInsets.symmetric(vertical: 10),
              shape: const StadiumBorder(),
            ),
            child: Text('Avaliar ${booking.partnerName}'),
          )),
        );
      },
    );
  }

  Future<void> _showReviewSheet(
    BuildContext context,
    WidgetRef ref,
    CoupleBooking booking,
    Review? existingReview,
  ) {
    return showIslandSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => ReviewFormSheet(
        booking: booking,
        existingReview: existingReview,
      ),
    );
  }
}

class _InlineStars extends StatelessWidget {
  final int rating;

  const _InlineStars({required this.rating});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        for (var i = 1; i <= 5; i++)
          Icon(
            i <= rating ? Hi.star : Hi.starOutline,
            size: 15,
            color: Colors.amber,
          ),
      ],
    );
  }
}

class ReviewFormSheet extends ConsumerStatefulWidget {
  final CoupleBooking booking;

  /// Não-nulo -> ecrã em modo edição (`update_review()`), pré-preenche
  /// `_rating`/`_comment` com o que já foi escrito. Pedido explícito do
  /// utilizador: "faz com que os casais possam editar as suas reviews
  /// no local das reservas apos clicar em detalhes da reserva".
  final Review? existingReview;

  const ReviewFormSheet({super.key, required this.booking, this.existingReview});

  @override
  ConsumerState<ReviewFormSheet> createState() => ReviewFormSheetState();
}

class ReviewFormSheetState extends ConsumerState<ReviewFormSheet> {
  late int _rating = widget.existingReview?.rating ?? 0;
  late final _comment = TextEditingController(
    text: widget.existingReview?.comment ?? '',
  );
  bool _submitting = false;

  @override
  void dispose() {
    _comment.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (_rating == 0 || _submitting) return;
    setState(() => _submitting = true);
    try {
      final comment = _comment.text.trim().isEmpty ? null : _comment.text.trim();
      final existing = widget.existingReview;
      if (existing != null) {
        await updateReview(
          ref,
          reviewId: existing.id,
          bookingId: widget.booking.id,
          rating: _rating,
          comment: comment,
        );
      } else {
        await submitReview(
          ref,
          bookingId: widget.booking.id,
          rating: _rating,
          comment: comment,
        );
      }
      if (mounted) Navigator.of(context).pop();
    } on PostgrestException catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              // `P0008` = `wedding_not_yet_held` (066_update_review.sql)
              // — pedido explícito do utilizador: "os casais so podem
              // fazer review depois da data do seu casamento".
              e.code == 'P0008'
                  ? 'Só é possível avaliar depois da data do casamento.'
                  : 'Não foi possível enviar a avaliação. Tenta novamente.',
            ),
          ),
        );
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Não foi possível enviar a avaliação. Tenta novamente.',
            ),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _submitting = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isEditing = widget.existingReview != null;
    return SingleChildScrollView(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            isEditing
                ? 'Editar avaliação — ${widget.booking.partnerName}'
                : 'Avaliar ${widget.booking.partnerName}',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 4),
          Text(
            'Como foi a vossa experiência?',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
          ),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              for (var i = 1; i <= 5; i++)
                SnappyTap(
                  onTap: () => setState(() => _rating = i),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: Icon(
                      i <= _rating
                          ? Hi.star
                          : Hi.starOutline,
                      size: 34,
                      color: Colors.amber,
                    ),
                  ),
                ),
            ],
          ),
          const SizedBox(height: 16),
          TextField(
            controller: _comment,
            maxLines: 3,
            decoration: const InputDecoration(
              hintText: 'Conta-nos como correu (opcional)...',
            ),
          ),
          const SizedBox(height: 16),
          PressScale(child: FilledButton(
            onPressed: _rating == 0 || _submitting ? null : _submit,
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.ink,
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(vertical: 14),
              shape: const StadiumBorder(),
            ),
            child: Text(
              _submitting
                  ? 'A enviar...'
                  : isEditing
                      ? 'Guardar alterações'
                      : 'Enviar avaliação',
            ),
          )),
        ],
      ),
    );
  }
}
