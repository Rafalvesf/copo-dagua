import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

class BookingDetailScreen extends ConsumerWidget {
  final Booking booking;

  const BookingDetailScreen({super.key, required this.booking});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
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
                    child: CircleAvatar(
                      radius: 48,
                      backgroundColor: AppColors.green,
                      backgroundImage: NetworkImage(
                        'https://i.pravatar.cc/300?u=${booking.avatarSeed}',
                      ),
                    ),
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
                    value: '${booking.category.label} — ${booking.packageLabel}',
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
              child: Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: OutlinedButton(
                      onPressed: () async {
                        await MockBackend.instance.updateBookingStatus(
                          booking.id,
                          BookingStatus.recusado,
                        );
                        ref.invalidate(partnerBookingsProvider);
                        if (context.mounted) Navigator.of(context).pop();
                      },
                      child: const Text('Recusar'),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    flex: 3,
                    child: PrimaryButton(
                      label: 'Responder',
                      onPressed: () async {
                        if (booking.status == BookingStatus.novo) {
                          await MockBackend.instance.updateBookingStatus(
                            booking.id,
                            BookingStatus.emAnalise,
                          );
                          ref.invalidate(partnerBookingsProvider);
                        }
                        if (context.mounted) {
                          context.push(
                            '/partner-messages/${booking.avatarSeed}',
                            extra: ChatConversation(
                              id: booking.avatarSeed,
                              name: booking.clientName,
                              avatarSeed: booking.avatarSeed,
                              lastMessage: booking.messageFromCouple ?? '',
                              lastMessageAt: DateTime.now(),
                            ),
                          );
                        }
                      },
                    ),
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

  const _InfoCard({required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        boxShadow: AppTheme.cardShadow,
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
