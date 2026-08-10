import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/suppliers/supplier_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/support_chat.dart';

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
      appBar: AppBar(
        title: Text(widget.selectionMode ? 'Escolher fornecedor' : 'Fornecedores'),
        leading: const CircleBackButton(),
      ),
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
          const Positioned.fill(child: DraggableChatBubble()),
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

class _CategoryNavBar extends StatefulWidget {
  final SupplierCategory? selected;
  final ValueChanged<SupplierCategory?> onChanged;

  const _CategoryNavBar({required this.selected, required this.onChanged});

  @override
  State<_CategoryNavBar> createState() => _CategoryNavBarState();
}

class _CategoryNavBarState extends State<_CategoryNavBar> {
  final _controller = ScrollController();

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 44,
      child: Listener(
        // Permite scroll com a roda do rato (o gesto é vertical por
        // omissão, mas esta barra só desliza na horizontal).
        onPointerSignal: (event) {
          if (event is PointerScrollEvent && _controller.hasClients) {
            final target = (_controller.offset + event.scrollDelta.dy)
                .clamp(0.0, _controller.position.maxScrollExtent);
            _controller.jumpTo(target);
          }
        },
        child: ListView(
          controller: _controller,
          scrollDirection: Axis.horizontal,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 4),
          children: [
            _CategoryChip(label: 'Todos', selected: widget.selected == null, onTap: () => widget.onChanged(null)),
            for (final category in SupplierCategory.values)
              Padding(
                padding: const EdgeInsets.only(left: 8),
                child: _CategoryChip(
                  label: category.label,
                  selected: widget.selected == category,
                  onTap: () => widget.onChanged(category),
                ),
              ),
          ],
        ),
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

class _SupplierCard extends StatefulWidget {
  final Supplier supplier;
  final VoidCallback onTap;

  const _SupplierCard({required this.supplier, required this.onTap});

  @override
  State<_SupplierCard> createState() => _SupplierCardState();
}

class _SupplierCardState extends State<_SupplierCard> {
  bool _favorited = false;

  @override
  Widget build(BuildContext context) {
    final supplier = widget.supplier;
    return Container(
      height: 210,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        gradient: _gradientFor(supplier.category),
        borderRadius: BorderRadius.circular(28),
      ),
      child: Stack(
        children: [
          Positioned(
            top: 0,
            right: 0,
            child: CircleIconButton(
              icon: _favorited ? Icons.favorite : Icons.favorite_border,
              background: Colors.white.withValues(alpha: 0.7),
              onTap: () => setState(() => _favorited = !_favorited),
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  children: [
                    const Icon(Icons.star_rounded, size: 16, color: AppTheme.ink),
                    const SizedBox(width: 2),
                    Text(
                      '${supplier.rating}',
                      style: const TextStyle(color: AppTheme.ink, fontSize: 13, fontWeight: FontWeight.w700),
                    ),
                    const SizedBox(width: 6),
                    Text(
                      '(${supplier.reviewCount} avaliações)',
                      style: TextStyle(color: AppTheme.ink.withValues(alpha: 0.7), fontSize: 12),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                Text(
                  supplier.name,
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppTheme.ink),
                ),
                Text(
                  '${supplier.city} · desde €${supplier.startingPrice.toStringAsFixed(0)}',
                  style: TextStyle(color: AppTheme.ink.withValues(alpha: 0.75), fontSize: 13),
                ),
                const SizedBox(height: 12),
                ArrowCtaButton(label: 'Ver mais', expand: true, onTap: widget.onTap),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

