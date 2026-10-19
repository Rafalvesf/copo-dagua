import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/chat/chat_helpers.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../widgets/request_row.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';

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
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(28, 20, 28, 24),
                children: [
                  // Canvas "Parceiro — pedido (redesign)".
                  const Row(children: [
                    CircleBackButton(),
                    Expanded(
                      child: Text('Pedido',
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    SizedBox(width: 44),
                  ]),
                  const SizedBox(height: 18),
                  GreenHero(
                    label: switch (booking.status) {
                      BookingStatus.novo || BookingStatus.emAnalise => 'PEDIDO RECEBIDO',
                      BookingStatus.aceite => 'À ESPERA DO SINAL',
                      BookingStatus.confirmado => 'RESERVA CONFIRMADA',
                      BookingStatus.concluido => 'CONCLUÍDO',
                      BookingStatus.recusado => 'RECUSADO',
                    },
                    value: booking.clientName,
                    doodles: const [Icons.favorite_border, Icons.auto_awesome_outlined, Icons.celebration_outlined],
                    footer: booking.fromQuoteRequest
                        ? Wrap(spacing: 8, runSpacing: 8, children: [
                            HeroPill(booking.proposalSent ? 'Proposta enviada' : 'Por responder', solid: true),
                            HeroPill(booking.proposalSent
                                ? 'A aguardar resposta do casal'
                                : 'O casal espera a tua proposta'),
                          ])
                        : null,
                  ),
                  const SizedBox(height: 16),
                  V2RowCard(
                    lead: DateSticker(date: date),
                    title: dateLabel,
                    sub: booking.city.isEmpty ? null : booking.city,
                  ),
                  const SizedBox(height: 10),
                  V2RowCard(
                    lead: StickerIcon(Icons.storefront_outlined, turns: StickerIcon.tilt(1)),
                    title: booking.category ?? 'Serviço',
                    sub: booking.packageLabel.isEmpty ? null : booking.packageLabel,
                  ),
                  if (booking.messageFromCouple != null &&
                      booking.messageFromCouple!.trim().isNotEmpty) ...[
                    const SizedBox(height: 10),
                    Container(
                      padding: const EdgeInsets.all(14),
                      decoration: softCard(),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Row(children: [
                          StickerIcon(Icons.chat_bubble_outline, size: 36, turns: StickerIcon.tilt(2)),
                          const SizedBox(width: 10),
                          const Text('Mensagem do casal',
                              style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        ]),
                        const SizedBox(height: 8),
                        Text('“${booking.messageFromCouple!.trim()}”',
                            style: const TextStyle(fontSize: 14, height: 1.5, fontStyle: FontStyle.italic, color: AppTheme.ink)),
                      ]),
                    ),
                  ],
                ],
              ),
            ),
            Container(
              padding: const EdgeInsets.fromLTRB(28, 14, 28, 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  if (booking.fromQuoteRequest && !booking.proposalSent) ...[
                    SizedBox(
                      height: 54,
                      child: FilledButton(
                        onPressed: () => context.push(
                          '/partner-requests/${booking.id}/proposal',
                          extra: booking,
                        ),
                        style: FilledButton.styleFrom(
                          backgroundColor: AppTheme.accentOliveDark,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(18),
                          ),
                          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, 
                            fontSize: AppFontSize.lg,
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
                            minimumSize: const Size.fromHeight(48),
                            backgroundColor: Colors.white,
                            foregroundColor: AppTheme.accentOliveDark,
                            side: BorderSide.none,
                            elevation: 0,
                            shadowColor: const Color(0x22171713),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16),
                            ),
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
                                  final confirmed = await showIslandDialog<bool>(
                                    context: context,
                                    builder: (context) => IslandAlert(
                                      title: const Text('Cancelar reserva'),
                                      content: Text(
                                        'Cancelar a reserva com ${booking.clientName}? Esta ação não pode ser desfeita.',
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
                                          child: const Text('Cancelar reserva'),
                                        ),
                                      ],
                                    ),
                                  );
                                  if (confirmed != true) return;
                                  await _run(() async {
                                    await supabase.rpc(
                                      'cancel_booking_by_partner',
                                      params: {'p_booking_id': booking.id},
                                    );
                                    ref.invalidate(partnerBookingsProvider);
                                    if (context.mounted) Navigator.of(context).pop();
                                  });
                                }
                              : null,
                          style: OutlinedButton.styleFrom(
                            minimumSize: const Size.fromHeight(48),
                            backgroundColor: const Color(0xFFF7E3DC),
                            foregroundColor: const Color(0xFFA3412E),
                            side: BorderSide.none,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16),
                            ),
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
