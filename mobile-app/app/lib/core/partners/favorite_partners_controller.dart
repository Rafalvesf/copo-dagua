import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';
import '../wedding/wedding_controller.dart';

/// Favoritos reais do casal — liga-se a `favorite_partners`
/// (039_task_engine.sql). Antes disto, o coração nos cartões de
/// parceiro era só `bool` local por widget, sem persistência (RN26 do
/// motor de tarefas depende de favoritos reais para decidir "o casal
/// já mostrou interesse nesta categoria?").
class FavoritePartnersState {
  final bool loading;
  final Set<String> partnerIds;

  const FavoritePartnersState({this.loading = false, this.partnerIds = const {}});

  FavoritePartnersState copyWith({bool? loading, Set<String>? partnerIds}) {
    return FavoritePartnersState(
      loading: loading ?? this.loading,
      partnerIds: partnerIds ?? this.partnerIds,
    );
  }
}

class FavoritePartnersController extends Notifier<FavoritePartnersState> {
  String? _weddingId;

  @override
  FavoritePartnersState build() {
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    _weddingId = weddingId;
    if (weddingId != null) {
      Future.microtask(() => load(weddingId));
    }
    return const FavoritePartnersState();
  }

  Future<void> load(String weddingId) async {
    state = state.copyWith(loading: true);
    final rows = await supabase
        .from('favorite_partners')
        .select('partner_id')
        .eq('wedding_id', weddingId);
    state = FavoritePartnersState(
      loading: false,
      partnerIds: (rows as List).map((r) => r['partner_id'] as String).toSet(),
    );
  }

  bool isFavorite(String partnerId) => state.partnerIds.contains(partnerId);

  Future<void> toggle(String partnerId) async {
    final weddingId = _weddingId;
    if (weddingId == null) return;
    final isFav = state.partnerIds.contains(partnerId);

    // Otimista — a UI reage já, sem esperar pelo round-trip.
    final next = Set<String>.from(state.partnerIds);
    if (isFav) {
      next.remove(partnerId);
    } else {
      next.add(partnerId);
    }
    state = state.copyWith(partnerIds: next);

    if (isFav) {
      await supabase
          .from('favorite_partners')
          .delete()
          .eq('wedding_id', weddingId)
          .eq('partner_id', partnerId);
    } else {
      await supabase.from('favorite_partners').upsert({
        'wedding_id': weddingId,
        'partner_id': partnerId,
      });
    }
  }
}

final favoritePartnersControllerProvider =
    NotifierProvider<FavoritePartnersController, FavoritePartnersState>(
      FavoritePartnersController.new,
    );
