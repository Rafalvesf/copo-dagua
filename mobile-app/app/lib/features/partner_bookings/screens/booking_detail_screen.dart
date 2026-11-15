import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/chat/chat_helpers.dart';
import '../../../core/models/models.dart';
import '../../../core/wedding/menu_style.dart' show EventDecor;
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/payments/refunds.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/money.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException;
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../widgets/event_brief.dart';
import '../widgets/request_row.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/export_card.dart';
import '../../../core/exports/exports.dart';
import '../../../shared/widgets/dispute_card.dart';

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
                  Container(
                    margin: const EdgeInsets.only(top: 20),
                    padding: const EdgeInsets.all(18),
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                    child: Row(children: [
                      V2Avatar(booking.clientName, size: 76, imageUrl: booking.clientAvatarUrl),
                      const SizedBox(width: 14),
                      Expanded(
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text(booking.eventType.label.toUpperCase(),
                              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
                          const SizedBox(height: 6),
                          Text(booking.clientName,
                              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          const SizedBox(height: 6),
                          if (booking.proposalSent && booking.status != BookingStatus.confirmado && booking.status != BookingStatus.concluido)
                            const KitTag('Proposta enviada', kind: KitTagKind.neutral)
                          else
                            switch (booking.status) {
                              BookingStatus.novo => const KitTag('Por responder', kind: KitTagKind.pending),
                              BookingStatus.emAnalise => const KitTag('Em análise', kind: KitTagKind.neutral),
                              BookingStatus.aceite => const KitTag('À espera do sinal', kind: KitTagKind.pending),
                              BookingStatus.confirmado => const KitTag('Reserva confirmada'),
                              BookingStatus.concluido => const KitTag('Concluído', kind: KitTagKind.neutral),
                              BookingStatus.recusado => const KitTag('Recusado', kind: KitTagKind.neutral),
                            },
                        ]),
                      ),
                    ]),
                  ),
                  // Pedido de um pacote (188): o que escolheram, tal como
                  // estava quando pediram.
                  if (booking.isPackageRequest) ...[
                    const KitCaps('O que escolheram', top: 20),
                    _ChosenPackageCard(booking: booking),
                    const Padding(
                      padding: EdgeInsets.fromLTRB(4, 8, 4, 0),
                      child: Text('É o texto do teu pacote tal como estava quando pediram. Se o mudares depois, este pedido não muda.',
                          style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                    ),
                  ],
                  const KitCaps('O pedido', top: 20),
                  KitGroup([
                    KitSetRow(label: 'Data', value: dateLabel),
                    if (booking.people != null) KitSetRow(label: 'Pessoas', value: '${booking.people}'),
                    if (booking.city.isNotEmpty) KitSetRow(label: 'Local', value: booking.city),
                    KitSetRow(
                      label: 'Serviço',
                      value: [booking.category ?? 'Serviço', if (booking.packageLabel.isNotEmpty) booking.packageLabel].join(' · '),
                    ),
                  ]),
                  if (booking.messageFromCouple != null && booking.messageFromCouple!.trim().isNotEmpty) ...[
                    const KitCaps('Mensagem do cliente', top: 20),
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                      child: Text('«${booking.messageFromCouple!.trim()}»',
                          style: const TextStyle(fontSize: 15, height: 1.45, color: AppTheme.ink)),
                    ),
                  ],
                  // Convidados, menus, alergias e mesas do evento (migração 140).
                  if (!booking.fromQuoteRequest) ...[
                    const SizedBox(height: 18),
                    const Padding(
                      padding: EdgeInsets.only(left: 4, bottom: 8),
                      child: Text('Informação do evento', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    PartnerEventBrief(bookingId: booking.id),
                  ],
                  // Faturas/comprovativos e resumo desta reserva (2026-10-20).
                  if (!booking.fromQuoteRequest) ...[
                    const SizedBox(height: 18),
                    const Padding(
                      padding: EdgeInsets.only(left: 4, bottom: 8),
                      child: Text('Documentos', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    ExportCard(
                      reportLabel: 'Resumo da reserva',
                      partnerSide: true,
                      load: () => loadSingleBookingReport(booking.id, partnerSide: true),
                    ),
                    const SizedBox(height: 14),
                    DisputeCard(bookingId: booking.id, partnerSide: true),
                  ],
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
                                  await supabase.rpc('accept_package_request', params: {'p_quote_request_id': booking.id});
                                  ref.invalidate(partnerBookingsProvider);
                                  if (mounted) {
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(content: Text('Pedido aceite. Fica reservado e o cliente paga o sinal.')),
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
                    const Padding(
                      padding: EdgeInsets.only(top: 8, bottom: 10),
                      child: Text('Ao aceitar, fica reservado e o cliente paga o sinal.',
                          textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                    ),
                  ] else if (booking.fromQuoteRequest && !booking.proposalSent) ...[
                    SizedBox(
                      height: 52,
                      child: FilledButton(
                        onPressed: () => context.push(
                          '/partner-requests/${booking.id}/proposal',
                          extra: booking,
                        ),
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
                                    weddingId: booking.weddingId,
                                    partnerId: partnerId,
                                  );
                                  if (context.mounted) {
                                    context.push(
                                      '/partner-messages/$conversationId',
                                      extra: ChatConversation(
                                        id: conversationId,
                                        weddingId: booking.weddingId,
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
                                  // Já recebeu dinheiro desta reserva (sinal
                                  // libertado 48 h depois de pago)? Para
                                  // cancelar tem de o devolver (migração 125).
                                  final owed = await _releasedAmount(booking.id);
                                  if (!context.mounted) return;
                                  final confirmed = await showIslandDialog<bool>(
                                    context: context,
                                    builder: (context) => IslandAlert(
                                      title: const Text('Cancelar reserva'),
                                      content: Text(
                                        owed > 0
                                            ? 'Já recebeste ${euros(owed, cents: true)} desta reserva. Para cancelar, tens de devolver esse valor: '
                                                'é retirado do teu saldo À Nossa! e o cliente recebe de volta o que pagou, menos a taxa de serviço.\n\nEsta ação não pode ser desfeita.'
                                            : 'Cancelar a reserva com ${booking.clientName}? Esta ação não pode ser desfeita.'
                                                '${booking.status == BookingStatus.confirmado ? '\n\nO cliente recebe de volta o que pagou, menos a taxa de serviço, de forma automática.' : ''}',
                                      ),
                                      actions: [
                                        TextButton(
                                          onPressed: () =>
                                              Navigator.of(context).pop(false),
                                          child: const Text('Voltar'),
                                        ),
                                        FilledButton(
                                          onPressed: () =>
                                              Navigator.of(context).pop(true),
                                          child: Text(owed > 0 ? 'Devolver ${euros(owed, cents: true)} e cancelar' : 'Cancelar reserva'),
                                        ),
                                      ],
                                    ),
                                  );
                                  if (confirmed != true) return;
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
                                      params: {'p_booking_id': booking.id},
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
          Container(height: 1, margin: const EdgeInsets.symmetric(vertical: 10), color: const Color(0xFFECE7DC)),
          Row(children: [
            Expanded(child: Text('+ ${e['name']}', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            Text('${euros((e['price'] as num?)?.toDouble() ?? 0)}${priceUnitSuffix(e['price_unit'] as String? ?? 'total')}',
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
          if ((e['details'] as List?)?.isNotEmpty == true)
            Text((e['details'] as List).join(' · '), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ],
        if (!starting && booking.totalAmount != null) ...[
          Container(height: 1, margin: const EdgeInsets.symmetric(vertical: 10), color: const Color(0xFFECE7DC)),
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
