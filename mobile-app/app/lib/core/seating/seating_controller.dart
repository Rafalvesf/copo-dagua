import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';
import '../wedding/wedding_controller.dart';

SeatingTable _tableFromRow(Map<String, dynamic> row) => SeatingTable(
  id: row['id'] as String,
  weddingId: row['wedding_id'] as String,
  guestIds: (row['guest_ids'] as List?)?.cast<String>() ?? const [],
  rectangular: row['rectangular'] as bool? ?? false,
);

/// Lugares por mesa — uma simplificação deliberada: o inventário real do
/// local (`partner_venue_tables`, `database/migrations/022_venue_tables.sql`)
/// já permite tipos de mesa com capacidades diferentes (ex: mesa redonda
/// de 8 vs. retangular de 10), mas a grelha de preenchimento sequencial
/// deste ecrã ainda assume uma capacidade uniforme para todas as mesas —
/// redesenhar a grelha para capacidades por mesa é trabalho à parte, não
/// uma extensão direta desta mudança. Uma mesa só conta como preenchida
/// quando atinge este número de convidados — abaixo disso fica como
/// rascunho na mesa "próxima", sem desbloquear a seguinte.
const seatsPerTable = 8;

bool _isComplete(SeatingTable table) => table.guestIds.length >= seatsPerTable;

class SeatingState {
  final bool loading;
  final List<SeatingTable> tables;
  final int totalTables;

  /// `true` só quando existe uma reserva real (não cancelada/expirada)
  /// com um parceiro de categoria "venue" para este casamento — nesse
  /// caso [totalTables] é a soma real de `partner_venue_tables.quantity`
  /// desse local (pode ser 0, se o local ainda não configurou nenhum
  /// tipo de mesa). `false` = o casal ainda não escolheu/reservou o
  /// local, [totalTables] fica em 0 só como valor por omissão — o ecrã
  /// mostra "-" em vez de "0" neste caso. Pedido explícito do
  /// utilizador: nunca voltar a estimar mesas a partir do número de
  /// convidados.
  final bool hasVenue;

  const SeatingState({
    this.loading = false,
    this.tables = const [],
    this.totalTables = 0,
    this.hasVenue = false,
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
    bool? hasVenue,
  }) {
    return SeatingState(
      loading: loading ?? this.loading,
      tables: tables ?? this.tables,
      totalTables: totalTables ?? this.totalTables,
      hasVenue: hasVenue ?? this.hasVenue,
    );
  }
}

class SeatingController extends Notifier<SeatingState> {
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
    final rows = await supabase
        .from('seating_tables')
        .select()
        .eq('wedding_id', wedding.id)
        .order('position', ascending: true);
    final venueTableCount = await _venueTableCountFor(wedding.id);
    state = SeatingState(
      loading: false,
      tables: rows.map(_tableFromRow).toList(),
      totalTables: venueTableCount ?? 0,
      hasVenue: venueTableCount != null,
    );
  }

  /// `null` = sem reserva real (não cancelada/expirada) a um parceiro de
  /// categoria "venue" para este casamento — ainda não há nenhum número
  /// real. Não-nulo (mesmo que 0) = há um local reservado; o número é a
  /// soma real de `partner_venue_tables.quantity` desse parceiro.
  Future<int?> _venueTableCountFor(String weddingId) async {
    final bookingRows = await supabase
        .from('bookings')
        .select(
          'partner_id, status, '
          'partner_profiles(partner_profile_categories(partner_categories(slug)))',
        )
        .eq('wedding_id', weddingId)
        .order('created_at', ascending: true);

    const inactiveStatuses = {
      'cancelled_by_couple',
      'cancelled_by_partner',
      'expired',
    };

    String? venuePartnerId;
    for (final row in bookingRows) {
      if (inactiveStatuses.contains(row['status'])) continue;
      final partner = row['partner_profiles'] as Map<String, dynamic>?;
      final categoryLinks =
          (partner?['partner_profile_categories'] as List?) ?? const [];
      final isVenue = categoryLinks.any((link) {
        final category =
            (link as Map<String, dynamic>)['partner_categories']
                as Map<String, dynamic>?;
        return category?['slug'] == 'venue';
      });
      if (isVenue) {
        venuePartnerId = row['partner_id'] as String;
        break;
      }
    }

    if (venuePartnerId == null) return null;

    final tableRows = await supabase
        .from('partner_venue_tables')
        .select('quantity')
        .eq('partner_id', venuePartnerId);
    return tableRows.fold<int>(0, (sum, r) => sum + (r['quantity'] as int));
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
      final row = await supabase
          .from('seating_tables')
          .insert({
            'wedding_id': weddingId,
            'guest_ids': guestIds,
            'position': state.tables.length,
          })
          .select()
          .single();
      state = state.copyWith(tables: [...state.tables, _tableFromRow(row)]);
    } else {
      await _updateGuestIds(draft.id, guestIds);
    }
  }

  /// Edita uma mesa já completa (✓) — usado só para trocar convidados,
  /// sempre mantendo [seatsPerTable] (garantido pelo ecrã antes de
  /// chamar isto), para nunca abrir um "buraco" antes de mesas já
  /// preenchidas.
  Future<void> updateTableGuests(String tableId, List<String> guestIds) async {
    final table = state.tables.where((t) => t.id == tableId).firstOrNull;
    if (table == null || guestIds.isEmpty) return;
    await _updateGuestIds(tableId, guestIds);
  }

  Future<void> _updateGuestIds(String tableId, List<String> guestIds) async {
    final row = await supabase
        .from('seating_tables')
        .update({'guest_ids': guestIds, 'updated_at': DateTime.now().toIso8601String()})
        .eq('id', tableId)
        .select()
        .single();
    final updated = _tableFromRow(row);
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
    await supabase.from('seating_tables').delete().eq('id', tableId);
    final remaining = state.tables.where((t) => t.id != tableId).toList();
    // A mesa já foi apagada no servidor — reflete isso no estado local já
    // agora, antes de tentar reindexar `position`, para a UI nunca ficar
    // a mostrar uma mesa que já não existe caso o passo seguinte falhe.
    state = state.copyWith(tables: remaining);
    if (remaining.isEmpty) return;
    // Reindexa `position` das mesas a seguir — a mesma garantia de
    // contiguidade que já existia no mock, onde a posição era só o
    // índice na lista (nunca um número fixo). Um único upsert em vez de N
    // updates sequenciais evita deixar posições a meio-caminho (duplicadas
    // ou com buracos) se a ligação cair a meio.
    try {
      await supabase.from('seating_tables').upsert([
        for (var i = 0; i < remaining.length; i++) {'id': remaining[i].id, 'position': i},
      ]);
    } catch (_) {
      // Melhor esforço: o estado local já está correto (mesa removida);
      // se a reindexação falhar, a pior consequência é `load()` voltar a
      // ordenar por uma `position` desatualizada na próxima vez.
    }
  }
}

final seatingControllerProvider =
    NotifierProvider<SeatingController, SeatingState>(SeatingController.new);

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}
