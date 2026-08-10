import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/guest_widgets.dart';

class GuestsListScreen extends ConsumerWidget {
  const GuestsListScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(guestsControllerProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Convidados')),
      body: state.loading && state.guests.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  RsvpSummaryBar(
                    confirmed: state.confirmedCount,
                    pending: state.pendingCount,
                    declined: state.declinedCount,
                  ),
                  const SizedBox(height: 12),
                  RsvpStatusFilterTabs(
                    selected: state.filter,
                    onChanged: (f) => ref.read(guestsControllerProvider.notifier).setFilter(f),
                  ),
                  const SizedBox(height: 8),
                  Expanded(
                    child: state.filtered.isEmpty
                        ? const Center(child: Text('Sem convidados nesta categoria.'))
                        : ListView.builder(
                            itemCount: state.filtered.length,
                            itemBuilder: (context, index) {
                              final guest = state.filtered[index];
                              return GuestListItem(
                                guest: guest,
                                onTap: () => context.push('/guests/${guest.id}'),
                              );
                            },
                          ),
                  ),
                ],
              ),
            ),
      floatingActionButton: FloatingActionButton.extended(
        icon: const Icon(Icons.add),
        label: const Text('Adicionar convidado'),
        onPressed: () async {
          final weddingId = ref.read(guestsControllerProvider.notifier).currentWeddingId;
          if (weddingId == null) return;
          final result = await showGuestFormSheet(context);
          if (result == null) return;
          ref.read(guestsControllerProvider.notifier).addGuest(
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
    );
  }
}
