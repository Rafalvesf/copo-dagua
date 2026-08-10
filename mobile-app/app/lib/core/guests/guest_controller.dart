import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';
import '../wedding/wedding_controller.dart';

enum GuestFilter { all, confirmed, pending, declined }

class GuestsState {
  final bool loading;
  final List<Guest> guests;
  final GuestFilter filter;

  const GuestsState({this.loading = false, this.guests = const [], this.filter = GuestFilter.all});

  List<Guest> get filtered {
    switch (filter) {
      case GuestFilter.all:
        return guests;
      case GuestFilter.confirmed:
        return guests.where((g) => g.rsvpStatus == RsvpStatus.confirmed).toList();
      case GuestFilter.pending:
        return guests.where((g) => g.rsvpStatus == RsvpStatus.pending).toList();
      case GuestFilter.declined:
        return guests.where((g) => g.rsvpStatus == RsvpStatus.declined).toList();
    }
  }

  int get confirmedCount => guests.where((g) => g.rsvpStatus == RsvpStatus.confirmed).length;
  int get pendingCount => guests.where((g) => g.rsvpStatus == RsvpStatus.pending).length;
  int get declinedCount => guests.where((g) => g.rsvpStatus == RsvpStatus.declined).length;

  GuestsState copyWith({bool? loading, List<Guest>? guests, GuestFilter? filter}) {
    return GuestsState(
      loading: loading ?? this.loading,
      guests: guests ?? this.guests,
      filter: filter ?? this.filter,
    );
  }
}

class GuestsController extends Notifier<GuestsState> {
  final _backend = MockBackend.instance;
  String? currentWeddingId;

  @override
  GuestsState build() {
    final wedding = ref.watch(weddingControllerProvider).wedding;
    currentWeddingId = wedding?.id;
    if (wedding != null) {
      Future.microtask(() => load(wedding.id));
    }
    return const GuestsState();
  }

  Future<void> load(String weddingId) async {
    state = state.copyWith(loading: true);
    final guests = await _backend.listGuests(weddingId);
    state = state.copyWith(loading: false, guests: guests);
  }

  void setFilter(GuestFilter filter) {
    state = state.copyWith(filter: filter);
  }

  Future<void> addGuest(Guest guest) async {
    final added = await _backend.addGuest(guest);
    state = state.copyWith(guests: [...state.guests, added]);
  }

  Future<void> updateGuest(Guest guest) async {
    final updated = await _backend.updateGuest(guest);
    state = state.copyWith(
      guests: [for (final g in state.guests) if (g.id == updated.id) updated else g],
    );
  }

  Future<void> removeGuest(String guestId) async {
    await _backend.removeGuest(guestId);
    state = state.copyWith(guests: state.guests.where((g) => g.id != guestId).toList());
  }

  Future<void> simulateRsvp(String guestId, RsvpStatus status, {String? plusOneName, String? dietaryRestrictions, String? note}) async {
    final guest = state.guests.firstWhere((g) => g.id == guestId);
    final updated = guest.copyWith(
      rsvpStatus: status,
      plusOneName: plusOneName ?? guest.plusOneName,
      dietaryRestrictions: dietaryRestrictions ?? guest.dietaryRestrictions,
      note: note ?? guest.note,
    );
    await updateGuest(updated);
  }
}

final guestsControllerProvider = NotifierProvider<GuestsController, GuestsState>(GuestsController.new);
