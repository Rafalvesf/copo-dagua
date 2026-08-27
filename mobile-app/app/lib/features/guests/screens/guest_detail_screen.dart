import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_widgets.dart';
import '../../../shared/widgets/rsvp_status_badge.dart';
import '../../../shared/widgets/support_chat.dart';

class GuestDetailScreen extends ConsumerWidget {
  final String guestId;

  const GuestDetailScreen({super.key, required this.guestId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(guestsControllerProvider);
    final guest = state.guests.where((g) => g.id == guestId).firstOrNull;

    if (guest == null) {
      return GradientScaffold(
        background: AppBackground.subtle,
        body: const Center(child: Text('Convidado não encontrado.')),
      );
    }

    return GradientScaffold(
      background: AppBackground.subtle,
      appBar: AppBar(
        title: Text(guest.name),
        leading: const CircleBackButton(),
      ),
      body: Stack(
        children: [
          ListView(
            padding: const EdgeInsets.all(AppTheme.screenMargin),
            children: [
              RsvpStatusBadge(status: guest.rsvpStatus),
              const SizedBox(height: 12),
              if (guest.plusOneName != null)
                Text('+ Acompanhante: ${guest.plusOneName}'),
              if (guest.dietaryRestrictions != null)
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Icon(
                      Icons.restaurant_outlined,
                      size: 16,
                      color: AppTheme.inkMuted,
                    ),
                    const SizedBox(width: 6),
                    Text(guest.dietaryRestrictions!),
                  ],
                ),
              if (guest.note != null)
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Icon(
                      Icons.chat_bubble_outline,
                      size: 16,
                      color: AppTheme.inkMuted,
                    ),
                    const SizedBox(width: 6),
                    Expanded(child: Text('"${guest.note}"')),
                  ],
                ),
              const SizedBox(height: 20),
              Wrap(
                spacing: 8,
                children: [
                  OutlinedButton(
                    onPressed: guest.email == null && guest.phone == null
                        ? null
                        : () => ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Convite reenviado.')),
                          ),
                    child: const Text('Reenviar convite'),
                  ),
                  OutlinedButton(
                    onPressed: () async {
                      final result = await showGuestFormSheet(
                        context,
                        existing: guest,
                      );
                      if (result == null) return;
                      ref
                          .read(guestsControllerProvider.notifier)
                          .updateGuest(
                            guest.copyWith(
                              name: result.name,
                              email: result.email,
                              phone: result.phone,
                              group: result.group,
                              side: result.side,
                              plusOneAllowed: result.plusOneAllowed,
                            ),
                          );
                    },
                    child: const Text('Editar'),
                  ),
                  OutlinedButton(
                    onPressed: () {
                      ref
                          .read(guestsControllerProvider.notifier)
                          .removeGuest(guest.id);
                      Navigator.of(context).pop();
                    },
                    style: OutlinedButton.styleFrom(
                      foregroundColor: Theme.of(context).colorScheme.error,
                    ),
                    child: const Text('Remover'),
                  ),
                ],
              ),
              const Divider(height: 40),
              Text(
                'Simular resposta do convidado',
                style: Theme.of(context).textTheme.titleMedium,
              ),
              const SizedBox(height: 4),
              Text(
                'A página pública de RSVP fica fora desta primeira versão — aqui simulamos a resposta dentro da app.',
                style: Theme.of(context).textTheme.bodySmall,
              ),
              const SizedBox(height: 12),
              Wrap(
                spacing: 8,
                children: [
                  FilledButton(
                    onPressed: () => ref
                        .read(guestsControllerProvider.notifier)
                        .simulateRsvp(guest.id, RsvpStatus.confirmed),
                    child: const Text('Vou!'),
                  ),
                  FilledButton.tonal(
                    onPressed: () => ref
                        .read(guestsControllerProvider.notifier)
                        .simulateRsvp(guest.id, RsvpStatus.declined),
                    child: const Text('Não vou poder ir'),
                  ),
                  OutlinedButton(
                    onPressed: () => ref
                        .read(guestsControllerProvider.notifier)
                        .simulateRsvp(guest.id, RsvpStatus.pending),
                    child: const Text('Repor pendente'),
                  ),
                ],
              ),
            ],
          ),
          const Positioned.fill(child: DraggableChatBubble()),
        ],
      ),
    );
  }
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}
