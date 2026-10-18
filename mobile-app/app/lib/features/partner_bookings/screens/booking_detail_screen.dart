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
                  const Align(
                    alignment: Alignment.centerLeft,
                    child: CircleBackButton(),
                  ),
                  const SizedBox(height: 18),
                  Text(
                    switch (booking.status) {
                      BookingStatus.novo || BookingStatus.emAnalise => 'PEDIDO RECEBIDO',
                      BookingStatus.aceite => 'À ESPERA DO SINAL',
                      BookingStatus.confirmado => 'RESERVA CONFIRMADA',
                      BookingStatus.concluido => 'CONCLUÍDO',
                      BookingStatus.recusado => 'RECUSADO',
                    },
                    style: const TextStyle(
                      fontSize: AppFontSize.xs,
                      fontWeight: FontWeight.w700,
                      letterSpacing: 1.2,
                      color: AppTheme.inkMuted,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    booking.clientName,
                    style: const TextStyle(
                      fontSize: 26,
                      height: 32 / 26,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                    ),
                  ),
                  if (booking.fromQuoteRequest) ...[
                    const SizedBox(height: 16),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                      decoration: BoxDecoration(
                        color: booking.proposalSent
                            ? AppColors.gray
                            : const Color(0xFFFCEFD6),
                        borderRadius: BorderRadius.circular(AppRadius.md),
                      ),
                      child: Row(
                        children: [
                          Icon(
                            booking.proposalSent
                                ? Icons.mark_email_read_outlined
                                : Icons.schedule_rounded,
                            size: 20,
                            color: booking.proposalSent
                                ? AppTheme.accentOliveDark
                                : const Color(0xFF7A5000),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  booking.proposalSent
                                      ? 'Proposta enviada'
                                      : 'Por responder',
                                  style: TextStyle(
                                    fontSize: AppFontSize.base,
                                    fontWeight: FontWeight.w700,
                                    color: booking.proposalSent
                                        ? AppTheme.accentOliveDark
                                        : const Color(0xFF7A5000),
                                  ),
                                ),
                                const SizedBox(height: 2),
                                Text(
                                  booking.proposalSent
                                      ? 'A aguardar resposta do casal.'
                                      : 'O casal está à espera da tua proposta.',
                                  style: TextStyle(
                                    fontSize: AppFontSize.sm,
                                    color: booking.proposalSent
                                        ? AppTheme.accentOliveDark
                                        : const Color(0xFF7A5000),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                  const SizedBox(height: 16),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: _InfoCard(label: 'Data', value: dateLabel),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: _InfoCard(
                          label: 'Local',
                          value: booking.city.isEmpty ? '—' : booking.city,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  _InfoCard(
                    label: 'Serviço',
                    value: [
                      booking.category ?? 'Serviço',
                      if (booking.packageLabel.isNotEmpty) booking.packageLabel,
                    ].join(' — '),
                  ),
                  if (booking.messageFromCouple != null &&
                      booking.messageFromCouple!.trim().isNotEmpty) ...[
                    const SizedBox(height: 10),
                    _InfoCard(
                      label: 'Mensagem do casal',
                      value: '“${booking.messageFromCouple!.trim()}”',
                      tinted: true,
                    ),
                  ],
                ],
              ),
            ),
            Container(
              padding: const EdgeInsets.fromLTRB(28, 14, 28, 24),
              decoration: const BoxDecoration(
                border: Border(top: BorderSide(color: AppTheme.borderMuted)),
              ),
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
                            borderRadius: BorderRadius.circular(AppRadius.md),
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
                            foregroundColor: AppTheme.accentOliveDark,
                            side: BorderSide(color: AppTheme.accentOliveDark),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(AppRadius.md),
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
                            backgroundColor: AppTheme.surface,
                            foregroundColor: const Color(0xFFA3412E),
                            side: BorderSide.none,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(AppRadius.md),
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

class _InfoCard extends StatelessWidget {
  final String label;
  final String value;
  final bool tinted;

  const _InfoCard({required this.label, required this.value, this.tinted = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: tinted ? AppColors.gray : AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: TextStyle(
              color: tinted ? AppTheme.accentOliveDark : AppTheme.inkMuted,
              fontSize: AppFontSize.sm,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            value,
            style: TextStyle(
              color: AppTheme.ink,
              fontSize: tinted ? AppFontSize.base : AppFontSize.base + 1,
              height: tinted ? 1.5 : 1.3,
              fontWeight: tinted ? FontWeight.w400 : FontWeight.w700,
              fontStyle: tinted ? FontStyle.italic : FontStyle.normal,
            ),
          ),
        ],
      ),
    );
  }
}
