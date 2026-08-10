import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/suppliers/supplier_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';

Gradient _gradientFor(SupplierCategory category) {
  switch (category) {
    case SupplierCategory.photography:
      return AppGradients.wedding;
    case SupplierCategory.catering:
      return AppGradients.budget;
    case SupplierCategory.music:
      return AppGradients.seating;
    case SupplierCategory.decoration:
      return AppGradients.guests;
    case SupplierCategory.venue:
      return AppGradients.suppliers;
  }
}

class SuppliersListScreen extends ConsumerStatefulWidget {
  final SupplierCategory? category;
  final bool selectionMode;

  const SuppliersListScreen({super.key, this.category, this.selectionMode = false});

  @override
  ConsumerState<SuppliersListScreen> createState() => _SuppliersListScreenState();
}

class _SuppliersListScreenState extends ConsumerState<SuppliersListScreen> {
  late SupplierCategory? _filter = widget.category;

  @override
  Widget build(BuildContext context) {
    final suppliersAsync = ref.watch(suppliersProvider(widget.selectionMode ? widget.category : _filter));

    return Scaffold(
      appBar: AppBar(title: Text(widget.selectionMode ? 'Escolher fornecedor' : 'Fornecedores')),
      body: Stack(
        children: [
          Column(
            children: [
              if (widget.selectionMode)
                Padding(
                  padding: const EdgeInsets.fromLTRB(24, 12, 24, 0),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'Escolhe um fornecedor de ${widget.category?.label.toLowerCase()} para esta tarefa.',
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  ),
                )
              else
                _CategoryNavBar(
                  selected: _filter,
                  onChanged: (c) => setState(() => _filter = c),
                ),
              Expanded(
                child: suppliersAsync.when(
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (err, st) => const Center(child: Text('Não foi possível carregar fornecedores.')),
                  data: (suppliers) {
                    if (suppliers.isEmpty) {
                      return const Center(child: Text('Sem fornecedores nesta categoria.'));
                    }
                    final grouped = <SupplierCategory, List<Supplier>>{};
                    for (final s in suppliers) {
                      grouped.putIfAbsent(s.category, () => []).add(s);
                    }
                    return ListView(
                      padding: const EdgeInsets.fromLTRB(24, 16, 24, 110),
                      children: [
                        for (final entry in grouped.entries) ...[
                          if (_filter == null && !widget.selectionMode) ...[
                            Text(entry.key.label, style: Theme.of(context).textTheme.titleMedium),
                            const SizedBox(height: 12),
                          ],
                          for (final supplier in entry.value) ...[
                            _SupplierCard(
                              supplier: supplier,
                              onTap: () => _openDetails(context, supplier),
                            ),
                            const SizedBox(height: 14),
                          ],
                        ],
                      ],
                    );
                  },
                ),
              ),
            ],
          ),
          if (!widget.selectionMode)
            const Positioned(
              left: 0,
              right: 0,
              bottom: 24,
              child: Center(child: FloatingBottomNav(current: AppTab.suppliers)),
            ),
        ],
      ),
    );
  }

  void _openDetails(BuildContext context, Supplier supplier) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (sheetContext) => Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(supplier.name, style: Theme.of(sheetContext).textTheme.titleLarge),
            const SizedBox(height: 4),
            Text('${supplier.category.label} · ${supplier.city}', style: Theme.of(sheetContext).textTheme.bodyMedium),
            const SizedBox(height: 12),
            Row(
              children: [
                const Icon(Icons.star_rounded, size: 18, color: Colors.amber),
                const SizedBox(width: 4),
                Text('${supplier.rating} (${supplier.reviewCount} avaliações)'),
                const Spacer(),
                Text('desde €${supplier.startingPrice.toStringAsFixed(0)}'),
              ],
            ),
            const SizedBox(height: 12),
            Text(supplier.description, style: Theme.of(sheetContext).textTheme.bodyMedium),
            const SizedBox(height: 20),
            if (widget.selectionMode)
              PrimaryButton(
                label: 'Escolher este fornecedor',
                onPressed: () {
                  Navigator.of(sheetContext).pop();
                  Navigator.of(context).pop(supplier);
                },
              ),
          ],
        ),
      ),
    );
  }
}

class _CategoryNavBar extends StatelessWidget {
  final SupplierCategory? selected;
  final ValueChanged<SupplierCategory?> onChanged;

  const _CategoryNavBar({required this.selected, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 44,
      child: ListView(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 4),
        children: [
          _CategoryChip(label: 'Todos', selected: selected == null, onTap: () => onChanged(null)),
          for (final category in SupplierCategory.values)
            Padding(
              padding: const EdgeInsets.only(left: 8),
              child: _CategoryChip(
                label: category.label,
                selected: selected == category,
                onTap: () => onChanged(category),
              ),
            ),
        ],
      ),
    );
  }
}

class _CategoryChip extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _CategoryChip({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return ChoiceChip(
      label: Text(label),
      selected: selected,
      onSelected: (_) => onTap(),
      selectedColor: AppTheme.ink,
      labelStyle: TextStyle(
        color: selected ? Colors.white : AppTheme.ink,
        fontWeight: FontWeight.w600,
      ),
      backgroundColor: Colors.white,
      side: const BorderSide(color: Color(0xFFE2D9CF)),
    );
  }
}

class _SupplierCard extends StatelessWidget {
  final Supplier supplier;
  final VoidCallback onTap;

  const _SupplierCard({required this.supplier, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(24),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          gradient: _gradientFor(supplier.category),
          borderRadius: BorderRadius.circular(24),
        ),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    supplier.name,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: AppTheme.ink),
                  ),
                  const SizedBox(height: 4),
                  Text(supplier.city, style: TextStyle(color: AppTheme.ink.withValues(alpha: 0.7), fontSize: 13)),
                  const SizedBox(height: 10),
                  Row(
                    children: [
                      const Icon(Icons.star_rounded, size: 16, color: AppTheme.ink),
                      const SizedBox(width: 2),
                      Text('${supplier.rating}', style: const TextStyle(color: AppTheme.ink, fontSize: 13, fontWeight: FontWeight.w600)),
                      const SizedBox(width: 10),
                      Text('desde €${supplier.startingPrice.toStringAsFixed(0)}',
                          style: const TextStyle(color: AppTheme.ink, fontSize: 13, fontWeight: FontWeight.w600)),
                    ],
                  ),
                ],
              ),
            ),
            const Icon(Icons.chevron_right, color: AppTheme.ink),
          ],
        ),
      ),
    );
  }
}
