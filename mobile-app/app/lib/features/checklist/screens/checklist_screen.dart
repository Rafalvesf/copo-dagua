import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/checklist/checklist_controller.dart';
import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../core/suppliers/supplier_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/form_fields.dart';

class ChecklistScreen extends ConsumerWidget {
  const ChecklistScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(checklistControllerProvider);
    final progress = state.totalCount == 0 ? 0.0 : state.doneCount / state.totalCount;
    final categories = state.byCategory;

    return Scaffold(
      appBar: AppBar(title: const Text('Checklist')),
      body: state.loading && state.items.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                ListView(
                  padding: const EdgeInsets.fromLTRB(24, 8, 24, 110),
                  children: [
                    _ProgressCard(done: state.doneCount, total: state.totalCount, progress: progress),
                    const SizedBox(height: 20),
                    if (categories.isEmpty)
                      const Padding(
                        padding: EdgeInsets.symmetric(vertical: 40),
                        child: Center(child: Text('Sem tarefas ainda.')),
                      ),
                    for (final entry in categories.entries) ...[
                      Text(entry.key, style: Theme.of(context).textTheme.titleMedium),
                      const SizedBox(height: 8),
                      Card(
                        margin: EdgeInsets.zero,
                        child: Column(
                          children: [
                            for (final item in entry.value)
                              _ChecklistTile(
                                item: item,
                                onToggle: () => ref.read(checklistControllerProvider.notifier).toggleDone(item.id),
                                onRemove: () => ref.read(checklistControllerProvider.notifier).removeItem(item.id),
                                onPickSupplier: item.supplierCategory == null
                                    ? null
                                    : () async {
                                        final supplier = await context.push<Supplier>(
                                          '/suppliers',
                                          extra: SupplierPickerArgs(
                                            category: item.supplierCategory,
                                            selectionMode: true,
                                          ),
                                        );
                                        if (supplier == null) return;
                                        ref
                                            .read(checklistControllerProvider.notifier)
                                            .selectSupplier(item.id, supplier.id);
                                      },
                              ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 20),
                    ],
                  ],
                ),
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 24,
                  child: Center(child: FloatingBottomNav(current: AppTab.checklist)),
                ),
              ],
            ),
      floatingActionButton: FloatingActionButton.extended(
        icon: const Icon(Icons.add),
        label: const Text('Adicionar tarefa'),
        onPressed: () async {
          final weddingId = ref.read(checklistControllerProvider.notifier).currentWeddingId;
          if (weddingId == null) return;
          final result = await _showAddTaskSheet(context);
          if (result == null) return;
          ref.read(checklistControllerProvider.notifier).addItem(
                ChecklistItem(
                  id: '',
                  weddingId: weddingId,
                  title: result.title,
                  category: result.category,
                  dueDate: result.dueDate,
                ),
              );
        },
      ),
    );
  }
}

class _ProgressCard extends StatelessWidget {
  final int done;
  final int total;
  final double progress;

  const _ProgressCard({required this.done, required this.total, required this.progress});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(gradient: AppGradients.checklist, borderRadius: BorderRadius.circular(24)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            '$done de $total concluídas',
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppTheme.ink),
          ),
          const SizedBox(height: 12),
          ClipRRect(
            borderRadius: BorderRadius.circular(999),
            child: LinearProgressIndicator(
              value: progress,
              minHeight: 10,
              backgroundColor: Colors.white.withValues(alpha: 0.5),
              valueColor: const AlwaysStoppedAnimation(AppTheme.ink),
            ),
          ),
        ],
      ),
    );
  }
}

class _ChecklistTile extends StatelessWidget {
  final ChecklistItem item;
  final VoidCallback onToggle;
  final VoidCallback onRemove;
  final VoidCallback? onPickSupplier;

  const _ChecklistTile({
    required this.item,
    required this.onToggle,
    required this.onRemove,
    this.onPickSupplier,
  });

  @override
  Widget build(BuildContext context) {
    final due = item.dueDate;
    final selectedSupplier =
        item.selectedSupplierId == null ? null : MockBackend.instance.getSupplier(item.selectedSupplierId!);

    return ListTile(
      leading: Checkbox(value: item.done, onChanged: (_) => onToggle()),
      title: Text(
        item.title,
        style: TextStyle(decoration: item.done ? TextDecoration.lineThrough : null),
      ),
      subtitle: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (due != null) Text('Até ${due.day.toString().padLeft(2, '0')}/${due.month.toString().padLeft(2, '0')}'),
          if (onPickSupplier != null)
            Padding(
              padding: const EdgeInsets.only(top: 4),
              child: ActionChip(
                avatar: Icon(selectedSupplier == null ? Icons.storefront_outlined : Icons.check_circle, size: 16),
                label: Text(selectedSupplier == null ? 'Escolher fornecedor' : 'Fornecedor: ${selectedSupplier.name}'),
                onPressed: onPickSupplier,
              ),
            ),
        ],
      ),
      trailing: IconButton(icon: const Icon(Icons.close, size: 18), onPressed: onRemove),
    );
  }
}

class _AddTaskResult {
  final String title;
  final String category;
  final DateTime? dueDate;

  _AddTaskResult({required this.title, required this.category, this.dueDate});
}

Future<_AddTaskResult?> _showAddTaskSheet(BuildContext context) {
  return showModalBottomSheet<_AddTaskResult>(
    context: context,
    isScrollControlled: true,
    builder: (context) => const _AddTaskSheet(),
  );
}

class _AddTaskSheet extends StatefulWidget {
  const _AddTaskSheet();

  @override
  State<_AddTaskSheet> createState() => _AddTaskSheetState();
}

class _AddTaskSheetState extends State<_AddTaskSheet> {
  final _title = TextEditingController();
  final _category = TextEditingController(text: 'Geral');
  DateTime? _dueDate;
  String? _titleError;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text('Adicionar tarefa', style: Theme.of(context).textTheme.titleLarge),
          const SizedBox(height: 16),
          AuthTextField(label: 'Tarefa', controller: _title, errorText: _titleError),
          const SizedBox(height: 12),
          AuthTextField(label: 'Categoria', controller: _category),
          const SizedBox(height: 12),
          DatePickerField(label: 'Prazo (opcional)', value: _dueDate, onChanged: (d) => setState(() => _dueDate = d)),
          const SizedBox(height: 16),
          PrimaryButton(
            label: 'Guardar',
            onPressed: () {
              if (_title.text.trim().isEmpty) {
                setState(() => _titleError = 'A tarefa precisa de um título');
                return;
              }
              Navigator.of(context).pop(
                _AddTaskResult(
                  title: _title.text.trim(),
                  category: _category.text.trim().isEmpty ? 'Geral' : _category.text.trim(),
                  dueDate: _dueDate,
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
