import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../mock/mock_backend.dart';
import '../models/models.dart';

class WeddingState {
  final bool loading;
  final Wedding? wedding;

  const WeddingState({this.loading = false, this.wedding});

  WeddingState copyWith({bool? loading, Wedding? wedding}) {
    return WeddingState(
      loading: loading ?? this.loading,
      wedding: wedding ?? this.wedding,
    );
  }
}

class WeddingController extends Notifier<WeddingState> {
  final _backend = MockBackend.instance;

  @override
  WeddingState build() {
    final ownerId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    if (ownerId != null) {
      Future.microtask(() => load(ownerId));
    }
    return const WeddingState();
  }

  Future<void> load(String ownerId) async {
    state = state.copyWith(loading: true);
    final wedding = await _backend.getWeddingForOwner(ownerId);
    state = WeddingState(loading: false, wedding: wedding);
  }

  Future<void> update(Wedding wedding) async {
    state = state.copyWith(loading: true);
    final updated = await _backend.updateWedding(wedding);
    state = state.copyWith(loading: false, wedding: updated);
  }
}

final weddingControllerProvider = NotifierProvider<WeddingController, WeddingState>(WeddingController.new);
