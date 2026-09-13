import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';
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

ChecklistItem _itemFromRow(Map<String, dynamic> row) => ChecklistItem(
  id: row['id'] as String,
  weddingId: row['wedding_id'] as String,
  title: row['title'] as String,
  category: row['category'] as String? ?? 'Geral',
  done: row['done'] as bool? ?? false,
  dueDate: row['due_date'] == null ? null : DateTime.parse(row['due_date'] as String),
  partnerCategory: (row['partner_category'] as String?) == null
      ? null
      : PartnerCategory.values.byName(row['partner_category'] as String),
  selectedPartnerId: row['selected_partner_id'] as String?,
  progressPercent: row['progress_percent'] as int?,
  // Sem `assignee_seeds` real (nenhum modelo de colaborador por
  // tarefa ainda) — a versão real não mostra avatares em vez de
  // continuar a inventá-los via pravatar.cc.
);

/// Liga-se à tabela `checklist_items` real
/// (`database/migrations/031_checklist.sql`) — substitui
/// `MockBackend.listChecklistItems/addChecklistItem/
/// updateChecklistItem/removeChecklistItem`.
class ChecklistController extends Notifier<ChecklistState> {
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
    final rows = await supabase
        .from('checklist_items')
        .select()
        .eq('wedding_id', weddingId)
        .order('created_at', ascending: true);
    state = ChecklistState(loading: false, items: rows.map(_itemFromRow).toList());
  }

  Future<void> addItem(ChecklistItem item) async {
    final row = await supabase
        .from('checklist_items')
        .insert({
          'wedding_id': item.weddingId,
          'title': item.title,
          'category': item.category,
          'due_date': item.dueDate?.toIso8601String().split('T').first,
          'partner_category': item.partnerCategory?.name,
        })
        .select()
        .single();
    state = state.copyWith(items: [...state.items, _itemFromRow(row)]);
  }

  Future<void> toggleDone(String itemId) async {
    final item = state.items.firstWhere((i) => i.id == itemId);
    await _update(item.copyWith(done: !item.done));
  }

  Future<void> removeItem(String itemId) async {
    await supabase.from('checklist_items').delete().eq('id', itemId);
    state = state.copyWith(items: state.items.where((i) => i.id != itemId).toList());
  }

  Future<void> selectPartner(String itemId, String partnerId) async {
    final item = state.items.firstWhere((i) => i.id == itemId);
    await _update(item.copyWith(selectedPartnerId: partnerId, done: true));
  }

  Future<void> _update(ChecklistItem item) async {
    final row = await supabase
        .from('checklist_items')
        .update({
          'title': item.title,
          'category': item.category,
          'done': item.done,
          'due_date': item.dueDate?.toIso8601String().split('T').first,
          'partner_category': item.partnerCategory?.name,
          'selected_partner_id': item.selectedPartnerId,
          'progress_percent': item.progressPercent,
          'updated_at': DateTime.now().toIso8601String(),
        })
        .eq('id', item.id)
        .select()
        .single();
    final updated = _itemFromRow(row);
    state = state.copyWith(
      items: [for (final i in state.items) if (i.id == updated.id) updated else i],
    );
  }
}

final checklistControllerProvider = NotifierProvider<ChecklistController, ChecklistState>(ChecklistController.new);
