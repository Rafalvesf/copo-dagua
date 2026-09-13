import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

const _maxPackages = 3;

/// Serviços e preços real — liga-se a `partner_profiles.pricing_mode` +
/// `partner_service_packages` (`database/migrations/028_partner_service_packages.sql`).
/// Um parceiro escolhe UM dos dois modos (pedido explícito do
/// utilizador: "up to 3 options or por orcamento only. partner can
/// choose"), nunca os dois: até 3 pacotes fixos, ou só orçamento à
/// medida sem nenhum pacote.
class PartnerPricingScreen extends ConsumerStatefulWidget {
  const PartnerPricingScreen({super.key});

  @override
  ConsumerState<PartnerPricingScreen> createState() =>
      _PartnerPricingScreenState();
}

class _PartnerPricingScreenState extends ConsumerState<PartnerPricingScreen> {
  bool _busy = false;

  Future<void> _withBusy(Future<void> Function() action) async {
    setState(() => _busy = true);
    try {
      await action();
      ref.invalidate(partnerPricingProvider);
      await ref.read(partnerProfileControllerProvider.notifier).refreshReviewStatus();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _setMode(String mode) => _withBusy(() => setPartnerPricingMode(mode));

  Future<void> _saveAveragePrice(double? price) => _withBusy(() => setAverageQuotePrice(price));

  Future<void> _addPackage(int currentCount) async {
    final result = await showEditPackageSheet(context);
    if (result == null) return;
    await _withBusy(() => addServicePackage(
          name: result.name,
          description: result.description,
          price: result.price,
          isStartingPrice: result.isStartingPrice,
          position: currentCount,
        ));
  }

  Future<void> _editPackage(ServicePackage pkg) async {
    final result = await showEditPackageSheet(
      context,
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      isStartingPrice: pkg.isStartingPrice,
    );
    if (result == null) return;
    await _withBusy(() => editServicePackage(
          pkg.id,
          name: result.name,
          description: result.description,
          price: result.price,
          isStartingPrice: result.isStartingPrice,
        ));
  }

  Future<void> _removePackage(ServicePackage pkg) => _withBusy(() => removeServicePackage(pkg.id));

  @override
  Widget build(BuildContext context) {
    final pricingAsync = ref.watch(partnerPricingProvider);

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            PageHeader(
              title: 'Serviços e preços',
              subtitle: 'Escolhe como os casais veem os teus preços.',
              trailing: const AccountSwitcherBadge(),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: pricingAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) =>
                    const Center(child: Text('Não foi possível carregar.')),
                data: (pricing) {
                  final packages = pricing.packages;
                  final isPackages = pricing.pricingMode == 'packages';
                  return ListView(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      0,
                      AppTheme.screenMargin,
                      24,
                    ),
                    children: [
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          children: [
                            _SegmentButton(
                              label: 'Pacotes',
                              selected: isPackages,
                              onTap: _busy ? null : () => _setMode('packages'),
                            ),
                            const SizedBox(width: 8),
                            _SegmentButton(
                              label: 'Só orçamento',
                              selected: !isPackages,
                              onTap: _busy ? null : () => _setMode('quote_only'),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 20),
                      if (!isPackages)
                        Container(
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(
                            color: AppTheme.surface,
                            borderRadius: BorderRadius.circular(20),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                'Os casais vão pedir-te um orçamento à medida — sem pacotes fixos com preço.',
                                style: TextStyle(color: AppTheme.inkMuted, fontSize: 13.5, height: 1.4),
                              ),
                              const SizedBox(height: 16),
                              _AverageQuoteField(
                                initialValue: pricing.averageQuotePrice,
                                busy: _busy,
                                onSave: _saveAveragePrice,
                              ),
                            ],
                          ),
                        )
                      else ...[
                        for (final pkg in packages)
                          Padding(
                            padding: const EdgeInsets.only(bottom: 14),
                            child: _PackageCard(
                              pkg: pkg,
                              onEdit: _busy ? null : () => _editPackage(pkg),
                              onDelete: _busy ? null : () => _removePackage(pkg),
                            ),
                          ),
                        if (packages.length < _maxPackages)
                          SnappyTap(
                            onTap: _busy ? () {} : () => _addPackage(packages.length),
                            child: Container(
                              height: 52,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                color: AppTheme.surface,
                                border: Border.all(color: AppTheme.accentOliveDark),
                                borderRadius: BorderRadius.circular(999),
                              ),
                              child: const Text(
                                '+ Adicionar pacote',
                                style: TextStyle(
                                  color: AppTheme.accentOliveDark,
                                  fontWeight: FontWeight.w700,
                                  fontSize: 15,
                                ),
                              ),
                            ),
                          ),
                      ],
                    ],
                  );
                },
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
  final VoidCallback? onTap;

  const _SegmentButton({
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap ?? () {},
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : Colors.transparent,
          borderRadius: BorderRadius.circular(999),
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

/// Valor médio dos orçamentos que o parceiro costuma fazer — pedido
/// explícito do utilizador (2026-09-04): "os parceiros quando colocam a
/// opção orçamento devem colocar um valor médio... para o casal ter uma
/// ideia de quanto lhes pode ficar este parceiro". Mostrado ao casal em
/// `partner_detail_screen.dart` quando não há pacotes fixos. Guarda em
/// `partner_profiles.average_quote_price`
/// (`database/migrations/049_partner_average_quote_price.sql`).
class _AverageQuoteField extends StatefulWidget {
  final double? initialValue;
  final bool busy;
  final ValueChanged<double?> onSave;

  const _AverageQuoteField({
    required this.initialValue,
    required this.busy,
    required this.onSave,
  });

  @override
  State<_AverageQuoteField> createState() => _AverageQuoteFieldState();
}

class _AverageQuoteFieldState extends State<_AverageQuoteField> {
  late final _price = TextEditingController(
    text: widget.initialValue == null ? '' : widget.initialValue!.toStringAsFixed(0),
  );

  @override
  void dispose() {
    _price.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: TextField(
            controller: _price,
            keyboardType: const TextInputType.numberWithOptions(decimal: true),
            decoration: const InputDecoration(labelText: 'Valor médio dos orçamentos (€)'),
          ),
        ),
        const SizedBox(width: 12),
        Padding(
          padding: const EdgeInsets.only(top: 6),
          child: FilledButton(
            onPressed: widget.busy
                ? null
                : () => widget.onSave(
                      double.tryParse(_price.text.trim().replaceAll(',', '.')),
                    ),
            child: const Text('Guardar'),
          ),
        ),
      ],
    );
  }
}

class _PackageCard extends StatelessWidget {
  final ServicePackage pkg;
  final VoidCallback? onEdit;
  final VoidCallback? onDelete;

  const _PackageCard({required this.pkg, required this.onEdit, required this.onDelete});

  @override
  Widget build(BuildContext context) {
    final priceLabel = '${pkg.isStartingPrice ? "A partir de " : ""}€${pkg.price.toStringAsFixed(0)}';
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  '${pkg.name}  $priceLabel',
                  style: const TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 16,
                    color: AppTheme.ink,
                  ),
                ),
              ),
              SnappyTap(
                onTap: onEdit ?? () {},
                child: const Padding(
                  padding: EdgeInsets.all(4),
                  child: Icon(Icons.edit_outlined, size: 18, color: AppTheme.inkMuted),
                ),
              ),
              const SizedBox(width: 4),
              SnappyTap(
                onTap: onDelete ?? () {},
                child: const Padding(
                  padding: EdgeInsets.all(4),
                  child: Icon(Icons.delete_outline, size: 18, color: AppTheme.inkMuted),
                ),
              ),
            ],
          ),
          if (pkg.description.isNotEmpty) ...[
            const SizedBox(height: 8),
            Text(
              pkg.description,
              style: const TextStyle(color: AppTheme.inkMuted, fontSize: 13),
            ),
          ],
        ],
      ),
    );
  }
}

class EditPackageResult {
  final String name;
  final String description;
  final double price;
  final bool isStartingPrice;

  const EditPackageResult({
    required this.name,
    required this.description,
    required this.price,
    required this.isStartingPrice,
  });
}

Future<EditPackageResult?> showEditPackageSheet(
  BuildContext context, {
  String name = '',
  String description = '',
  double price = 0,
  bool isStartingPrice = false,
}) {
  return showModalBottomSheet<EditPackageResult>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (context) => _EditPackageSheet(
      name: name,
      description: description,
      price: price,
      isStartingPrice: isStartingPrice,
    ),
  );
}

class _EditPackageSheet extends StatefulWidget {
  final String name;
  final String description;
  final double price;
  final bool isStartingPrice;

  const _EditPackageSheet({
    required this.name,
    required this.description,
    required this.price,
    required this.isStartingPrice,
  });

  @override
  State<_EditPackageSheet> createState() => _EditPackageSheetState();
}

class _EditPackageSheetState extends State<_EditPackageSheet> {
  late final _name = TextEditingController(text: widget.name);
  late final _description = TextEditingController(text: widget.description);
  late final _price = TextEditingController(
    text: widget.price == 0 ? '' : widget.price.toStringAsFixed(0),
  );
  late bool _isStartingPrice = widget.isStartingPrice;

  @override
  void dispose() {
    _name.dispose();
    _description.dispose();
    _price.dispose();
    super.dispose();
  }

  void _save() {
    if (_name.text.trim().isEmpty) return;
    final price = double.tryParse(_price.text.trim()) ?? 0;
    Navigator.of(context).pop(
      EditPackageResult(
        name: _name.text.trim(),
        description: _description.text.trim(),
        price: price,
        isStartingPrice: _isStartingPrice,
      ),
    );
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
            const Text('Pacote', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18)),
            const SizedBox(height: 16),
            TextField(
              controller: _name,
              decoration: const InputDecoration(labelText: 'Nome'),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _description,
              maxLines: 3,
              minLines: 2,
              decoration: const InputDecoration(labelText: 'Descrição'),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _price,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Preço (€)'),
            ),
            CheckboxListTile(
              value: _isStartingPrice,
              onChanged: (v) => setState(() => _isStartingPrice = v ?? false),
              controlAffinity: ListTileControlAffinity.leading,
              contentPadding: EdgeInsets.zero,
              title: const Text('Mostrar como "A partir de"', style: TextStyle(fontSize: 13.5)),
            ),
            const SizedBox(height: 8),
            PrimaryButton(label: 'Guardar', onPressed: _save),
          ],
        ),
      ),
    );
  }
}
