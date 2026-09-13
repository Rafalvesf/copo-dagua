import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';
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

// `guests.side` (enum `guest_side`: couple_a/couple_b/both,
// `004_guests.sql`) usa nomes neutros de propósito, distintos de
// `WeddingSide` (groom/bride/both) do lado do Dart — mapeamento
// explícito em vez de `.name`, os valores não coincidem.
String _sideToDb(WeddingSide side) => switch (side) {
  WeddingSide.groom => 'couple_a',
  WeddingSide.bride => 'couple_b',
  WeddingSide.both => 'both',
};

WeddingSide _sideFromDb(String? value) => switch (value) {
  'couple_a' => WeddingSide.groom,
  'couple_b' => WeddingSide.bride,
  _ => WeddingSide.both,
};

// `rsvp_status` real tem um 4º valor, 'invited' (convite enviado, sem
// resposta ainda) — sem equivalente em `RsvpStatus` (só
// pending/confirmed/declined) porque o fluxo de convite público
// (`send-rsvp-invite`/`submit-rsvp`, `mobile-app/guests/api.md`) ainda
// não foi construído nesta ronda; até lá, 'invited' e 'pending' são
// tratados da mesma forma do lado da app.
RsvpStatus _rsvpFromDb(String? value) => switch (value) {
  'confirmed' => RsvpStatus.confirmed,
  'declined' => RsvpStatus.declined,
  _ => RsvpStatus.pending,
};

String _rsvpToDb(RsvpStatus status) => switch (status) {
  RsvpStatus.confirmed => 'confirmed',
  RsvpStatus.declined => 'declined',
  RsvpStatus.pending => 'pending',
};

Guest guestFromRow(Map<String, dynamic> row) => Guest(
  id: row['id'] as String,
  weddingId: row['wedding_id'] as String,
  name: row['full_name'] as String,
  email: row['email'] as String?,
  phone: row['phone'] as String?,
  group: row['group_label'] as String? ?? '',
  side: _sideFromDb(row['side'] as String?),
  plusOneAllowed: row['plus_one_allowed'] as bool? ?? false,
  plusOneName: row['plus_one_name'] as String?,
  rsvpStatus: _rsvpFromDb(row['rsvp_status'] as String?),
  dietaryRestrictions: row['dietary_restrictions'] as String?,
  // `guest_message` (palavras do próprio convidado) — distinto de
  // `notes` (notas privadas do casal). A UI mostra `guest.note` entre
  // aspas, como se fossem palavras do convidado — mapeado para
  // `guest_message`.
  note: row['guest_message'] as String?,
  notes: row['notes'] as String?,
  createdAt: row['created_at'] == null ? null : DateTime.parse(row['created_at'] as String),
  inviteSentAt: row['invite_sent_at'] == null
      ? null
      : DateTime.parse(row['invite_sent_at'] as String),
  rsvpRespondedAt: row['rsvp_responded_at'] == null
      ? null
      : DateTime.parse(row['rsvp_responded_at'] as String),
  rsvpToken: row['rsvp_token'] as String?,
);

/// Liga-se à tabela `guests` real (`database/migrations/004_guests.sql`)
/// — substitui `MockBackend.listGuests/addGuest/updateGuest/removeGuest`.
/// RLS já pronta (`is_wedding_member`), sem migração nova necessária. A
/// página pública de RSVP por token (`invite_page_screen.dart`,
/// `mobile-app/guests/api.md`) fica de fora desta ronda — precisa de
/// Edge Functions próprias (`get-rsvp-by-token`/`submit-rsvp`, com rate
/// limiting) e já estava documentada como "fora desta primeira versão"
/// antes desta ligação a dados reais.
class GuestsController extends Notifier<GuestsState> {
  String? currentWeddingId;

  @override
  GuestsState build() {
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    currentWeddingId = weddingId;
    if (weddingId != null) {
      Future.microtask(() => load(weddingId));
    }
    return const GuestsState();
  }

  Future<void> load(String weddingId) async {
    state = state.copyWith(loading: true);
    final rows = await supabase
        .from('guests')
        .select()
        .eq('wedding_id', weddingId)
        .order('created_at', ascending: true);
    state = state.copyWith(loading: false, guests: rows.map(guestFromRow).toList());
  }

  void setFilter(GuestFilter filter) {
    state = state.copyWith(filter: filter);
  }

  Future<void> addGuest(Guest guest) async {
    final row = await supabase
        .from('guests')
        .insert({
          'wedding_id': guest.weddingId,
          'full_name': guest.name,
          'email': guest.email,
          'phone': guest.phone,
          'group_label': guest.group,
          'side': _sideToDb(guest.side),
          'plus_one_allowed': guest.plusOneAllowed,
        })
        .select()
        .single();
    state = state.copyWith(guests: [...state.guests, guestFromRow(row)]);
  }

  Future<void> updateGuest(Guest guest) async {
    Guest? previous;
    for (final g in state.guests) {
      if (g.id == guest.id) {
        previous = g;
        break;
      }
    }
    final statusChanged = previous == null || previous.rsvpStatus != guest.rsvpStatus;
    final data = <String, dynamic>{
      'full_name': guest.name,
      'email': guest.email,
      'phone': guest.phone,
      'group_label': guest.group,
      'side': _sideToDb(guest.side),
      'plus_one_allowed': guest.plusOneAllowed,
      'plus_one_name': guest.plusOneName,
      'dietary_restrictions': guest.dietaryRestrictions,
      'guest_message': guest.note,
      'notes': guest.notes,
      'rsvp_status': _rsvpToDb(guest.rsvpStatus),
      'updated_at': DateTime.now().toIso8601String(),
    };
    // Só toca em `rsvp_responded_at` quando o estado do RSVP realmente
    // muda — de outro modo, editar um campo qualquer (telefone,
    // restrições alimentares) de um convidado já confirmado apagava o
    // timestamp real da resposta.
    if (statusChanged) {
      data['rsvp_responded_at'] =
          guest.rsvpStatus == RsvpStatus.pending ? null : DateTime.now().toIso8601String();
    }
    final row = await supabase
        .from('guests')
        .update(data)
        .eq('id', guest.id)
        .select()
        .single();
    final updated = guestFromRow(row);
    state = state.copyWith(
      guests: [for (final g in state.guests) if (g.id == updated.id) updated else g],
    );
  }

  Future<void> removeGuest(String guestId) async {
    await supabase.from('guests').delete().eq('id', guestId);
    state = state.copyWith(guests: state.guests.where((g) => g.id != guestId).toList());
  }

  Future<void> simulateRsvp(
    String guestId,
    RsvpStatus status, {
    String? plusOneName,
    String? dietaryRestrictions,
    String? note,
  }) async {
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
