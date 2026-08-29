import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

class PartnerPricingScreen extends ConsumerStatefulWidget {
  const PartnerPricingScreen({super.key});

  @override
  ConsumerState<PartnerPricingScreen> createState() =>
      _PartnerPricingScreenState();
}

class _PartnerPricingScreenState extends ConsumerState<PartnerPricingScreen> {
  bool _showPackages = true;

  Future<void> _editPackage(ServicePackage pkg) async {
    final result = await _showEditServiceSheet(
      context,
      name: pkg.name,
      price: pkg.price,
      features: pkg.features,
      hasFeatures: true,
    );
    if (result == null) return;
    await ref
        .read(partnerPricingControllerProvider.notifier)
        .editPackage(
          pkg.id,
          name: result.name,
          price: result.price,
          features: result.features,
        );
  }

  Future<void> _editExtra(ServiceExtra extra) async {
    final result = await _showEditServiceSheet(
      context,
      name: extra.name,
      price: extra.price,
      features: const [],
      hasFeatures: false,
    );
    if (result == null) return;
    await ref
        .read(partnerPricingControllerProvider.notifier)
        .editExtra(extra.id, name: result.name, price: result.price);
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(partnerPricingControllerProvider);
    final controller = ref.read(partnerPricingControllerProvider.notifier);

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            PageHeader(
              title: 'Serviços e preços',
              subtitle: 'Gerir os teus pacotes e preços.',
              trailing: const AccountSwitcherBadge(),
            ),
            const SizedBox(height: 16),
            Padding(
              padding: const EdgeInsets.symmetric(
                horizontal: AppTheme.screenMargin,
              ),
              child: Row(
                children: [
                  _SegmentButton(
                    label: 'Pacotes',
                    selected: _showPackages,
                    onTap: () => setState(() => _showPackages = true),
                  ),
                  const SizedBox(width: 8),
                  _SegmentButton(
                    label: 'Extras',
                    selected: !_showPackages,
                    onTap: () => setState(() => _showPackages = false),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: state.loading
                  ? const Center(child: CircularProgressIndicator())
                  : ListView(
                      padding: const EdgeInsets.fromLTRB(
                        AppTheme.screenMargin,
                        0,
                        AppTheme.screenMargin,
                        24,
                      ),
                      children: _showPackages
                          ? [
                              for (final pkg in state.packages)
                                Padding(
                                  padding: const EdgeInsets.only(bottom: 14),
                                  child: _PricingTierCard(
                                    name: pkg.name,
                                    price: pkg.price,
                                    features: pkg.features,
                                    active: pkg.active,
                                    onChanged: (v) =>
                                        controller.togglePackage(pkg.id, v),
                                    onEdit: () => _editPackage(pkg),
                                  ),
                                ),
                            ]
                          : [
                              for (final extra in state.extras)
                                Padding(
                                  padding: const EdgeInsets.only(bottom: 14),
                                  child: _PricingTierCard(
                                    name: extra.name,
                                    price: extra.price,
                                    features: const [],
                                    active: extra.active,
                                    onChanged: (v) =>
                                        controller.toggleExtra(extra.id, v),
                                    onEdit: () => _editExtra(extra),
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

class _SegmentButton extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _SegmentButton({
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : Colors.white,
          borderRadius: BorderRadius.circular(999),
          boxShadow: AppTheme.cardShadow,
        ),
        child: Text(
          label,
          style: TextStyle(
            color: selected ? Colors.white : AppTheme.ink,
            fontWeight: FontWeight.w700,
            fontSize: 13.5,
          ),
        ),
      ),
    );
  }
}

class _PricingTierCard extends StatelessWidget {
  final String name;
  final double price;
  final List<String> features;
  final bool active;
  final ValueChanged<bool> onChanged;
  final VoidCallback onEdit;

  const _PricingTierCard({
    required this.name,
    required this.price,
    required this.features,
    required this.active,
    required this.onChanged,
    required this.onEdit,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  '$name  €${price.toStringAsFixed(0)}',
                  style: const TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 16,
                    color: AppTheme.ink,
                  ),
                ),
              ),
              SnappyTap(
                onTap: onEdit,
                child: const Padding(
                  padding: EdgeInsets.all(4),
                  child: Icon(
                    Icons.edit_outlined,
                    size: 18,
                    color: AppTheme.inkMuted,
                  ),
                ),
              ),
              const SizedBox(width: 4),
              Switch(
                value: active,
                activeThumbColor: AppTheme.accentOliveDark,
                onChanged: onChanged,
              ),
            ],
          ),
          if (features.isNotEmpty) ...[
            const SizedBox(height: 8),
            for (final feature in features)
              Padding(
                padding: const EdgeInsets.only(top: 4),
                child: Row(
                  children: [
                    const Icon(
                      Icons.check,
                      size: 16,
                      color: AppTheme.accentOliveDark,
                    ),
                    const SizedBox(width: 8),
                    Text(
                      feature,
                      style: const TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: 13,
                      ),
                    ),
                  ],
                ),
              ),
          ],
        ],
      ),
    );
  }
}

class _EditServiceResult {
  final String name;
  final double price;
  final List<String> features;

  const _EditServiceResult({
    required this.name,
    required this.price,
    required this.features,
  });
}

Future<_EditServiceResult?> _showEditServiceSheet(
  BuildContext context, {
  required String name,
  required double price,
  required List<String> features,
  required bool hasFeatures,
}) {
  return showModalBottomSheet<_EditServiceResult>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (context) => _EditServiceSheet(
      name: name,
      price: price,
      features: features,
      hasFeatures: hasFeatures,
    ),
  );
}

class _EditServiceSheet extends StatefulWidget {
  final String name;
  final double price;
  final List<String> features;
  final bool hasFeatures;

  const _EditServiceSheet({
    required this.name,
    required this.price,
    required this.features,
    required this.hasFeatures,
  });

  @override
  State<_EditServiceSheet> createState() => _EditServiceSheetState();
}

class _EditServiceSheetState extends State<_EditServiceSheet> {
  late final _name = TextEditingController(text: widget.name);
  late final _price = TextEditingController(
    text: widget.price.toStringAsFixed(0),
  );
  late final List<TextEditingController> _features = [
    for (final f in widget.features) TextEditingController(text: f),
  ];

  @override
  void dispose() {
    _name.dispose();
    _price.dispose();
    for (final c in _features) {
      c.dispose();
    }
    super.dispose();
  }

  void _save() {
    final price = double.tryParse(_price.text.trim()) ?? widget.price;
    Navigator.of(context).pop(
      _EditServiceResult(
        name: _name.text.trim().isEmpty ? widget.name : _name.text.trim(),
        price: price,
        features: [
          for (final c in _features)
            if (c.text.trim().isNotEmpty) c.text.trim(),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        bottom: MediaQuery.of(context).viewInsets.bottom,
      ),
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
            const Text(
              'Editar serviço',
              style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: _name,
              decoration: const InputDecoration(labelText: 'Nome'),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _price,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'Preço (€)',
              ),
            ),
            if (widget.hasFeatures) ...[
              const SizedBox(height: 16),
              const Text(
                'Inclui',
                style: TextStyle(
                  fontWeight: FontWeight.w700,
                  color: AppTheme.inkMuted,
                  fontSize: 12.5,
                ),
              ),
              const SizedBox(height: 8),
              for (final controller in _features)
                Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: Row(
                    children: [
                      Expanded(
                        child: TextField(
                          controller: controller,
                          decoration: const InputDecoration(isDense: true),
                        ),
                      ),
                      IconButton(
                        onPressed: () =>
                            setState(() => _features.remove(controller)),
                        icon: const Icon(Icons.close, size: 18),
                      ),
                    ],
                  ),
                ),
              TextButton.icon(
                onPressed: () =>
                    setState(() => _features.add(TextEditingController())),
                icon: const Icon(Icons.add, size: 18),
                label: const Text('Adicionar item'),
              ),
              const SizedBox(height: 8),
            ] else
              const SizedBox(height: 16),
            PrimaryButton(label: 'Guardar', onPressed: _save),
          ],
        ),
      ),
    );
  }
}
