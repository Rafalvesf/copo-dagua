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
import '../../../shared/widgets/initials_avatar.dart';

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
    final dateLabel =
        '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';

    return GradientScaffold(
      background: AppBackground.subtle,
      extendBodyBehindAppBar: false,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                20,
                AppTheme.screenMargin,
                0,
              ),
              child: Row(
                children: [
                  const CircleBackButton(),
                  const SizedBox(width: 4),
                  const Text(
                    'Pedido recebido',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(
                  AppTheme.screenMargin,
                  20,
                  AppTheme.screenMargin,
                  24,
                ),
                children: [
                  Center(
                    child: InitialsAvatar(name: booking.clientName, radius: 48),
                  ),
                  const SizedBox(height: 14),
                  Center(
                    child: Text(
                      booking.clientName,
                      style: AppTypography.displaySerif(
                        fontSize: 22,
                        color: AppTheme.ink,
                      ),
                    ),
                  ),
                  const SizedBox(height: 6),
                  Center(
                    child: Text(
                      dateLabel,
                      style: const TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: 13.5,
                      ),
                    ),
                  ),
                  Center(
                    child: Text(
                      booking.city,
                      style: const TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: 13.5,
                      ),
                    ),
                  ),
                  const SizedBox(height: 28),
                  _InfoCard(
                    label: 'Serviço',
                    value: '${booking.category ?? 'Serviço'} — ${booking.packageLabel}',
                  ),
                  if (booking.messageFromCouple != null) ...[
                    const SizedBox(height: 14),
                    _InfoCard(
                      label: 'Mensagem do casal',
                      value: booking.messageFromCouple!,
                    ),
                  ],
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                0,
                AppTheme.screenMargin,
                40,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    children: [
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
                                  final confirmed = await showDialog<bool>(
                                    context: context,
                                    builder: (context) => AlertDialog(
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
                          child: Text(
                            booking.fromQuoteRequest ? 'Recusar' : 'Cancelar reserva',
                          ),
                        ),
                      ),
                      const SizedBox(width: 12),
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
                          child: const Text('Conversar'),
                        ),
                      ),
                    ],
                  ),
                  if (booking.fromQuoteRequest) ...[
                    const SizedBox(height: 12),
                    if (booking.proposalSent)
                      Center(
                        child: Text(
                          'Proposta enviada — a aguardar resposta do casal.',
                          style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
                        ),
                      )
                    else
                      PrimaryButton(
                        label: 'Enviar proposta',
                        onPressed: () => context.push(
                          '/partner-requests/${booking.id}/proposal',
                          extra: booking,
                        ),
                      ),
                  ],
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

  const _InfoCard({required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(18),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: const TextStyle(
              color: AppTheme.inkMuted,
              fontSize: 12,
              fontWeight: FontWeight.w700,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            value,
            style: const TextStyle(
              color: AppTheme.ink,
              fontSize: 14.5,
              height: 1.4,
            ),
          ),
        ],
      ),
    );
  }
}
