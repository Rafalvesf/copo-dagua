import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/guest_widgets.dart';
import '../../../shared/widgets/rsvp_pie_chart.dart';
import '../../../shared/widgets/support_chat.dart';

class GuestsListScreen extends ConsumerWidget {
  const GuestsListScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(guestsControllerProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Convidados'),
        leadingWidth: 104,
        leading: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            const CircleBackButton(),
            const SizedBox(width: 8),
            CircleIconButton(
              icon: Icons.add,
              background: AppTheme.ink,
              foreground: Colors.white,
              onTap: () async {
                final weddingId = ref
                    .read(guestsControllerProvider.notifier)
                    .currentWeddingId;
                if (weddingId == null) return;
                final result = await showGuestFormSheet(context);
                if (result == null) return;
                ref
                    .read(guestsControllerProvider.notifier)
                    .addGuest(
                      Guest(
                        id: '',
                        weddingId: weddingId,
                        name: result.name,
                        email: result.email,
                        phone: result.phone,
                        group: result.group,
                        side: result.side,
                        plusOneAllowed: result.plusOneAllowed,
                      ),
                    );
              },
            ),
          ],
        ),
      ),
      body: state.loading && state.guests.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    24,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      RsvpPieChart(
                        confirmed: state.confirmedCount,
                        pending: state.pendingCount,
                        declined: state.declinedCount,
                        selected: state.filter,
                        onChanged: (f) => ref
                            .read(guestsControllerProvider.notifier)
                            .setFilter(f),
                      ),
                      const SizedBox(height: 12),
                      RsvpStatusFilterTabs(
                        selected: state.filter,
                        onChanged: (f) => ref
                            .read(guestsControllerProvider.notifier)
                            .setFilter(f),
                      ),
                      const SizedBox(height: 8),
                      Expanded(
                        child: state.filtered.isEmpty
                            ? const Center(
                                child: Text('Sem convidados nesta categoria.'),
                              )
                            : ListView.builder(
                                padding: const EdgeInsets.only(bottom: 90),
                                itemCount: state.filtered.length,
                                itemBuilder: (context, index) {
                                  final guest = state.filtered[index];
                                  return GuestListItem(
                                    guest: guest,
                                    onTap: () =>
                                        context.push('/guests/${guest.id}'),
                                  );
                                },
                              ),
                      ),
                    ],
                  ),
                ),
                const Positioned(
                  left: AppTheme.screenMargin,
                  right: AppTheme.screenMargin,
                  bottom: 24,
                  child: FloatingBottomNav(current: AppTab.guests),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}
