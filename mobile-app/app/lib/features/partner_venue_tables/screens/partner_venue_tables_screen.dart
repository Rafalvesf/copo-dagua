import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_venue_tables/partner_venue_tables_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Inventário de mesas do local — só um parceiro de categoria "venue"
/// consegue chegar aqui (gate em `partner_profile_screen.dart`, RLS
/// confirma do lado do servidor). Ver
/// `database/migrations/022_venue_tables.sql`.
class PartnerVenueTablesScreen extends ConsumerWidget {
  const PartnerVenueTablesScreen({super.key});

  Future<void> _add(BuildContext context, WidgetRef ref) async {
    final result = await _showTableTypeSheet(context);
    if (result == null) return;
    await ref
        .read(partnerVenueTablesControllerProvider.notifier)
        .add(shape: result.shape, seats: result.seats, quantity: result.quantity);
  }

  Future<void> _edit(BuildContext context, WidgetRef ref, VenueTableType table) async {
    final result = await _showTableTypeSheet(
      context,
      shape: table.shape,
      seats: table.seats,
      quantity: table.quantity,
    );
    if (result == null) return;
    await ref
        .read(partnerVenueTablesControllerProvider.notifier)
        .update(table.id, shape: result.shape, seats: result.seats, quantity: result.quantity);
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(partnerVenueTablesControllerProvider);
    final controller = ref.read(partnerVenueTablesControllerProvider.notifier);

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            PageHeader(
              title: 'Mesas do local',
              subtitle: 'Tipos de mesa disponíveis para os casais.',
              trailing: AddActionButton(onTap: () => _add(context, ref)),
            ),
            const SizedBox(height: 16),
            if (!state.loading && state.tableTypes.isNotEmpty)
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                child: Text(
                  'Total: ${state.totalTables} mesas',
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: 14,
                    color: AppTheme.ink,
                  ),
                ),
              ),
            const SizedBox(height: 8),
            Expanded(
              child: state.loading
                  ? const Center(child: CircularProgressIndicator())
                  : state.tableTypes.isEmpty
                      ? const Center(
                          child: Padding(
                            padding: EdgeInsets.symmetric(horizontal: 32),
                            child: Text(
                              'Ainda não configuraste nenhum tipo de mesa. Os casais só veem um número real de mesas depois de adicionares pelo menos um tipo.',
                              textAlign: TextAlign.center,
                              style: TextStyle(color: AppTheme.inkMuted, fontSize: 13.5),
                            ),
                          ),
                        )
                      : ListView(
                          padding: const EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            0,
                            AppTheme.screenMargin,
                            24,
                          ),
                          children: [
                            for (final table in state.tableTypes)
                              Padding(
                                padding: const EdgeInsets.only(bottom: 12),
                                child: _TableTypeCard(
                                  table: table,
                                  onEdit: () => _edit(context, ref, table),
                                  onDelete: () => controller.remove(table.id),
                                ),
                              ),
                          ],
                        ),
            ),
          ],
        ),
      ),
    );
  }
}

class _TableTypeCard extends StatelessWidget {
  final VenueTableType table;
  final VoidCallback onEdit;
  final VoidCallback onDelete;

  const _TableTypeCard({required this.table, required this.onEdit, required this.onDelete});

  IconData get _icon => switch (table.shape) {
    TableShape.round => Icons.circle_outlined,
    TableShape.rectangular => Icons.crop_din,
    TableShape.square => Icons.crop_square,
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(18),
      ),
      child: Row(
        children: [
          Container(
            width: 40,
            height: 40,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: AppColors.green, shape: BoxShape.circle),
            child: Icon(_icon, size: 18, color: AppTheme.ink),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '${table.quantity}× Mesa ${table.shape.label.toLowerCase()}',
                  style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14.5, color: AppTheme.ink),
                ),
                const SizedBox(height: 2),
                Text(
                  '${table.seats} lugares por mesa',
                  style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
                ),
              ],
            ),
          ),
          SnappyTap(
            onTap: onEdit,
            child: const Padding(
              padding: EdgeInsets.all(4),
              child: Icon(Icons.edit_outlined, size: 18, color: AppTheme.inkMuted),
            ),
          ),
          const SizedBox(width: 4),
          SnappyTap(
            onTap: onDelete,
            child: const Padding(
              padding: EdgeInsets.all(4),
              child: Icon(Icons.delete_outline, size: 18, color: AppTheme.inkMuted),
            ),
          ),
        ],
      ),
    );
  }
}

class _TableTypeResult {
  final TableShape shape;
  final int seats;
  final int quantity;

  const _TableTypeResult({required this.shape, required this.seats, required this.quantity});
}

Future<_TableTypeResult?> _showTableTypeSheet(
  BuildContext context, {
  TableShape shape = TableShape.round,
  int? seats,
  int? quantity,
}) {
  return showModalBottomSheet<_TableTypeResult>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (context) => _TableTypeSheet(shape: shape, seats: seats, quantity: quantity),
  );
}

class _TableTypeSheet extends StatefulWidget {
  final TableShape shape;
  final int? seats;
  final int? quantity;

  const _TableTypeSheet({required this.shape, this.seats, this.quantity});

  @override
  State<_TableTypeSheet> createState() => _TableTypeSheetState();
}

class _TableTypeSheetState extends State<_TableTypeSheet> {
  late TableShape _shape = widget.shape;
  late final _seats = TextEditingController(text: (widget.seats ?? 8).toString());
  late final _quantity = TextEditingController(text: (widget.quantity ?? 1).toString());

  @override
  void dispose() {
    _seats.dispose();
    _quantity.dispose();
    super.dispose();
  }

  void _save() {
    final seats = int.tryParse(_seats.text.trim());
    final quantity = int.tryParse(_quantity.text.trim());
    if (seats == null || seats <= 0 || quantity == null || quantity <= 0) return;
    Navigator.of(context).pop(_TableTypeResult(shape: _shape, seats: seats, quantity: quantity));
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Container(
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 24),
        decoration: const BoxDecoration(
          color: AppTheme.background,
          borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Tipo de mesa', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18)),
            const SizedBox(height: 16),
            const Text(
              'Forma',
              style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.inkMuted, fontSize: 12.5),
            ),
            const SizedBox(height: 8),
            Row(
              children: [
                for (final shape in TableShape.values)
                  Padding(
                    padding: const EdgeInsets.only(right: 8),
                    child: ChoiceChip(
                      label: Text(shape.label),
                      selected: _shape == shape,
                      onSelected: (_) => setState(() => _shape = shape),
                    ),
                  ),
              ],
            ),
            const SizedBox(height: 16),
            TextField(
              controller: _seats,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Lugares por mesa'),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _quantity,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Quantas mesas deste tipo'),
            ),
            const SizedBox(height: 16),
            PrimaryButton(label: 'Guardar', onPressed: _save),
          ],
        ),
      ),
    );
  }
}
