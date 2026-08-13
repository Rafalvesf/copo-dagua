import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';
import '../wedding/wedding_controller.dart';

/// Lugares por mesa — usado para derivar quantas mesas o casamento
/// precisa a partir do número estimado de convidados. Uma mesa só conta
/// como preenchida quando atinge este número de convidados — abaixo
/// disso fica como rascunho na mesa "próxima", sem desbloquear a
/// seguinte.
const seatsPerTable = 8;

bool _isComplete(SeatingTable table) => table.guestIds.length >= seatsPerTable;

class SeatingState {
  final bool loading;
  final List<SeatingTable> tables;
  final int totalTables;

  const SeatingState({
    this.loading = false,
    this.tables = const [],
    this.totalTables = 0,
  });

  /// Índice (0-based) da primeira mesa que ainda não está cheia — a
  /// única mesa selecionável. Todas as mesas antes desta têm de estar
  /// completas; é essa contiguidade (sem "buracos") que garante que
  /// nunca há mesa preenchida depois de uma mesa vazia.
  int get nextIndex {
    for (var i = 0; i < tables.length; i++) {
      if (!_isComplete(tables[i])) return i;
    }
    return tables.length;
  }

  /// A mesa "próxima" já criada mas ainda por completar (rascunho), se
  /// existir — só é reaberta, nunca recriada do zero.
  SeatingTable? get nextTable =>
      tables.length > nextIndex ? tables[nextIndex] : null;

  bool get isFull => nextIndex >= totalTables;

  SeatingState copyWith({
    bool? loading,
    List<SeatingTable>? tables,
    int? totalTables,
  }) {
    return SeatingState(
      loading: loading ?? this.loading,
      tables: tables ?? this.tables,
      totalTables: totalTables ?? this.totalTables,
    );
  }
}

class SeatingController extends Notifier<SeatingState> {
  final _backend = MockBackend.instance;
  String? currentWeddingId;

  @override
  SeatingState build() {
    final wedding = ref.watch(
      weddingControllerProvider.select((s) => s.wedding),
    );
    currentWeddingId = wedding?.id;
    if (wedding != null) {
      Future.microtask(() => load(wedding));
    }
    return const SeatingState();
  }

  Future<void> load(Wedding wedding) async {
    state = state.copyWith(loading: true);
    final tables = await _backend.listSeatingTables(wedding.id);
    state = SeatingState(
      loading: false,
      tables: tables,
      totalTables: _capacityFor(wedding),
    );
  }

  int _capacityFor(Wedding wedding) {
    final guests = wedding.estimatedGuests ?? seatsPerTable * 12;
    return (guests / seatsPerTable).ceil().clamp(1, 999);
  }

  /// Guarda a mesa "próxima" (`state.nextIndex`) com os convidados
  /// escolhidos — cria-a se ainda não existir, ou atualiza o rascunho
  /// já criado. Só passa a ✓ e desbloqueia a mesa seguinte quando
  /// atinge [seatsPerTable] convidados; abaixo disso continua como
  /// rascunho na mesma célula.
  Future<void> saveNextTable(List<String> guestIds) async {
    final weddingId = currentWeddingId;
    if (weddingId == null || guestIds.isEmpty || state.isFull) return;
    final draft = state.nextTable;
    if (draft == null) {
      final added = await _backend.addSeatingTable(
        weddingId: weddingId,
        guestIds: guestIds,
      );
      state = state.copyWith(tables: [...state.tables, added]);
    } else {
      final updated = await _backend.updateSeatingTable(
        draft.copyWith(guestIds: guestIds),
      );
      state = state.copyWith(
        tables: [
          for (final t in state.tables)
            if (t.id == updated.id) updated else t,
        ],
      );
    }
  }

  /// Edita uma mesa já completa (✓) — usado só para trocar convidados,
  /// sempre mantendo [seatsPerTable] (garantido pelo ecrã antes de
  /// chamar isto), para nunca abrir um "buraco" antes de mesas já
  /// preenchidas.
  Future<void> updateTableGuests(String tableId, List<String> guestIds) async {
    final table = state.tables.where((t) => t.id == tableId).firstOrNull;
    if (table == null || guestIds.isEmpty) return;
    final updated = await _backend.updateSeatingTable(
      table.copyWith(guestIds: guestIds),
    );
    state = state.copyWith(
      tables: [
        for (final t in state.tables) if (t.id == updated.id) updated else t,
      ],
    );
  }

  /// Remove uma mesa (preenchida ou rascunho) — todas as mesas a seguir
  /// deslizam para trás uma posição, porque a posição de cada mesa é só
  /// o seu índice nesta lista, nunca um número fixo guardado. Isto
  /// garante que a regra "nunca há mesa preenchida depois de mesa
  /// vazia" se mantém automaticamente, mesmo removendo uma mesa do meio
  /// da sequência.
  Future<void> removeTable(String tableId) async {
    await _backend.removeSeatingTable(tableId);
    state = state.copyWith(
      tables: state.tables.where((t) => t.id != tableId).toList(),
    );
  }
}

final seatingControllerProvider =
    NotifierProvider<SeatingController, SeatingState>(SeatingController.new);

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}
