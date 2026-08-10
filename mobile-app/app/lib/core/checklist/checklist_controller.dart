import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';
import '../wedding/wedding_controller.dart';

class ChecklistState {
  final bool loading;
  final List<ChecklistItem> items;

  const ChecklistState({this.loading = false, this.items = const []});

  int get doneCount => items.where((i) => i.done).length;
  int get totalCount => items.length;

  Map<String, List<ChecklistItem>> get byCategory {
    final map = <String, List<ChecklistItem>>{};
    for (final item in items) {
      map.putIfAbsent(item.category, () => []).add(item);
    }
    return map;
  }

  ChecklistState copyWith({bool? loading, List<ChecklistItem>? items}) {
    return ChecklistState(
      loading: loading ?? this.loading,
      items: items ?? this.items,
    );
  }
}

class ChecklistController extends Notifier<ChecklistState> {
  final _backend = MockBackend.instance;
  String? currentWeddingId;

  @override
  ChecklistState build() {
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    currentWeddingId = weddingId;
    if (weddingId != null) {
      Future.microtask(() => load(weddingId));
    }
    return const ChecklistState();
  }

  Future<void> load(String weddingId) async {
    state = state.copyWith(loading: true);
    final items = await _backend.listChecklistItems(weddingId);
    state = ChecklistState(loading: false, items: items);
  }

  Future<void> addItem(ChecklistItem item) async {
    final added = await _backend.addChecklistItem(item);
    state = state.copyWith(items: [...state.items, added]);
  }

  Future<void> toggleDone(String itemId) async {
    final item = state.items.firstWhere((i) => i.id == itemId);
    final updated = await _backend.updateChecklistItem(item.copyWith(done: !item.done));
    state = state.copyWith(
      items: [for (final i in state.items) if (i.id == updated.id) updated else i],
    );
  }

  Future<void> removeItem(String itemId) async {
    await _backend.removeChecklistItem(itemId);
    state = state.copyWith(items: state.items.where((i) => i.id != itemId).toList());
  }
}

final checklistControllerProvider = NotifierProvider<ChecklistController, ChecklistState>(ChecklistController.new);
