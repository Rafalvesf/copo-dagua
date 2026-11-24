import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/vat_confirm.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/onb_kit.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

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

  Future<void> _saveAveragePrice(double? price, String note) => _withBusy(() => setAverageQuotePrice(price, note: note));

  Future<void> _addPackage(int currentCount) async {
    final result = await showEditPackageSheet(context);
    if (result == null) return;
    await _withBusy(() => addServicePackage(
          name: result.name,
          description: result.description,
          price: result.price,
          isStartingPrice: result.isStartingPrice,
          position: currentCount,
          includes: result.includes,
          excludes: result.excludes,
          priceUnit: result.priceUnit,
          minPeople: result.minPeople,
          maxPeople: result.maxPeople,
        ));
  }

  Future<void> _editPackage(ServicePackage pkg) async {
    final result = await showEditPackageSheet(
      context,
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      isStartingPrice: pkg.isStartingPrice,
      includes: pkg.includes,
      excludes: pkg.excludes,
      priceUnit: pkg.priceUnit,
      minPeople: pkg.minPeople,
      maxPeople: pkg.maxPeople,
    );
    if (result == null) return;
    await _withBusy(() => editServicePackage(
          pkg.id,
          name: result.name,
          description: result.description,
          price: result.price,
          isStartingPrice: result.isStartingPrice,
          includes: result.includes,
          excludes: result.excludes,
          priceUnit: result.priceUnit,
          minPeople: result.minPeople,
          maxPeople: result.maxPeople,
        ));
  }

  Future<void> _removePackage(ServicePackage pkg) => _withBusy(() => removeServicePackage(pkg.id));

  Future<void> _editExtra(List<ServicePackage> packages, List<ServiceExtra> extras, [ServiceExtra? extra]) async {
    final result = await showIslandSheet<_ExtraResult>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => _EditExtraSheet(extra: extra, packages: packages),
    );
    if (result == null) return;
    await _withBusy(() => saveServiceExtra(
          id: extra?.id,
          name: result.name,
          details: result.details,
          price: result.price,
          priceUnit: result.priceUnit,
          packageIds: result.packageIds,
          position: extras.length,
        ));
    ref.invalidate(partnerOwnExtrasProvider);
  }

  Future<void> _removeExtra(ServiceExtra e) async {
    await _withBusy(() => removeServiceExtra(e.id));
    ref.invalidate(partnerOwnExtrasProvider);
  }

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
              subtitle: 'Escolhe como os clientes veem os teus preços.',
              trailing: const AccountSwitcherBadge(),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: pricingAsync.when(
                loading: () => const SkeletonList(),
                error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(partnerPricingProvider)),
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
                      // Mockup «Páginas do parceiro» → Serviços e preços.
                      KitPills(top: 0, [
                        KitPill(label: 'Pacotes', selected: isPackages, onTap: _busy ? null : () => _setMode('packages')),
                        KitPill(label: 'Só orçamento', selected: !isPackages, onTap: _busy ? null : () => _setMode('quote_only')),
                      ]),
                      const SizedBox(height: 16),
                      if (!isPackages)
                        Container(
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                'Os clientes vão pedir-te um orçamento à medida — sem pacotes fixos com preço.',
                                style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md, height: 1.4),
                              ),
                              const SizedBox(height: 16),
                              _AverageQuoteField(
                                initialValue: pricing.averageQuotePrice,
                                initialNote: pricing.referenceNote,
                                busy: _busy,
                                onSave: _saveAveragePrice,
                              ),
                            ],
                          ),
                        )
                      else ...[
                        if (packages.isNotEmpty)
                          KitGroup([
                            for (final pkg in packages)
                              KitRow(
                                title: pkg.name,
                                sub: [
                                  '${pkg.isStartingPrice ? 'Desde ' : ''}${euros(pkg.price)}${priceUnitSuffix(pkg.priceUnit)}',
                                  if (pkg.includes.isNotEmpty) '${pkg.includes.length} ${pkg.includes.length == 1 ? 'coisa incluída' : 'coisas incluídas'}',
                                  if (pkg.description.trim().isNotEmpty) pkg.description.trim(),
                                ].join(' · '),
                                onTap: _busy ? null : () => _editPackage(pkg),
                                trailing: IslandMenuButton<String>(
                                  tooltip: 'Mais opções',
                                  padding: EdgeInsets.zero,
                                  icon: const Icon(Hi.ellipsisHorizontal, size: 18, color: AppTheme.inkMuted),
                                  onSelected: (v) {
                                    if (_busy) return;
                                    if (v == 'edit') _editPackage(pkg);
                                    if (v == 'delete') _removePackage(pkg);
                                  },
                                  itemBuilder: (_) => const [
                                    PopupMenuItem(value: 'edit', child: Text('Editar')),
                                    PopupMenuItem(value: 'delete', child: Text('Remover')),
                                  ],
                                ),
                              ),
                          ]),
                        const SizedBox(height: 16),
                        if (packages.length < _maxPackages)
                          SnappyTap(
                            onTap: _busy ? () {} : () => _addPackage(packages.length),
                            child: Container(
                              height: 52,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                color: Colors.white,
                                border: Border.all(color: AppTheme.ink, width: 1.5),
                                borderRadius: BorderRadius.circular(AppRadius.pill),
                              ),
                              child: const Text(
                                '+ Adicionar pacote',
                                style: TextStyle(
                                  color: AppTheme.ink,
                                  fontWeight: FontWeight.w700,
                                  fontSize: 15,
                                ),
                              ),
                            ),
                          ),
                        // Extras (188): só aparecem ao cliente depois de ele
                        // escolher um dos pacotes marcados.
                        if (packages.isNotEmpty) ...[
                          KitSection('Extras', action: '+ Adicionar', onAction: _busy ? null : () => _editExtra(packages, ref.read(partnerOwnExtrasProvider).value ?? const [])),
                          const Text(
                            'Aparecem ao cliente só depois de escolher um dos pacotes que marcares.',
                            style: TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                          ),
                          const SizedBox(height: 10),
                          Builder(builder: (context) {
                            final extras = ref.watch(partnerOwnExtrasProvider).value ?? const <ServiceExtra>[];
                            if (extras.isEmpty) return const SizedBox.shrink();
                            String where(ServiceExtra e) => e.packageIds.isEmpty
                                ? 'Em todos os pacotes'
                                : packages.where((p) => e.packageIds.contains(p.id)).map((p) => p.name).join(', ');
                            return KitGroup([
                              for (final e in extras)
                                KitRow(
                                  title: e.name,
                                  sub: where(e),
                                  onTap: _busy ? null : () => _editExtra(packages, extras, e),
                                  trailing: Row(mainAxisSize: MainAxisSize.min, children: [
                                    Text('${euros(e.price)}${priceUnitSuffix(e.priceUnit)}',
                                        style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                                    IslandMenuButton<String>(
                                      tooltip: 'Mais opções',
                                      padding: EdgeInsets.zero,
                                      icon: const Icon(Hi.ellipsisHorizontal, size: 18, color: AppTheme.inkMuted),
                                      onSelected: (v) {
                                        if (_busy) return;
                                        if (v == 'edit') _editExtra(packages, extras, e);
                                        if (v == 'delete') _removeExtra(e);
                                      },
                                      itemBuilder: (_) => const [
                                        PopupMenuItem(value: 'edit', child: Text('Editar')),
                                        PopupMenuItem(value: 'delete', child: Text('Remover')),
                                      ],
                                    ),
                                  ]),
                                ),
                            ]);
                          }),
                        ],
                      ],
                      const SizedBox(height: 16),
                      const _FinalPaymentDaysCard(),
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
          borderRadius: BorderRadius.circular(AppRadius.pill),
        ),
        child: Text(
          label,
          style: TextStyle(
            color: selected ? Colors.white : AppTheme.ink,
            fontWeight: FontWeight.w700,
            fontSize: AppFontSize.md,
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
  final String? initialNote;
  final bool busy;
  final void Function(double? price, String note) onSave;

  const _AverageQuoteField({
    required this.initialValue,
    this.initialNote,
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
  late final _note = TextEditingController(text: widget.initialNote ?? '');

  @override
  void dispose() {
    _price.dispose();
    _note.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // Valor de referência (pedido do Rafael, 2026-11-20): aparece aos
    // clientes em «Quanto pode custar», na barra de baixo e no popup
    // «Pedir orçamento», com a nota a dizer para que é.
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      TextField(
        controller: _note,
        maxLength: 80,
        decoration: const InputDecoration(
          labelText: 'Para quê',
          hintText: 'Ex.: bolo de 3 andares para 100 pessoas',
        ),
      ),
      const SizedBox(height: 8),
      Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: TextField(
            controller: _price,
            keyboardType: const TextInputType.numberWithOptions(decimal: true),
            decoration: const InputDecoration(labelText: 'Valor de referência (€)'),
          ),
        ),
        const SizedBox(width: 12),
        Padding(
          padding: const EdgeInsets.only(top: 6),
          child: FilledButton(
            onPressed: widget.busy
                ? null
                : () async {
                    final v = double.tryParse(_price.text.trim().replaceAll(',', '.'));
                    if (v != null && v > 0 && !await confirmVatIncluded(context, v)) return;
                    if (!mounted) return;
                    widget.onSave(v, _note.text);
                  },
            child: const Text('Guardar'),
          ),
        ),
      ],
      ),
    ]);
  }
}

class _PackageCard extends StatelessWidget {
  final ServicePackage pkg;
  final VoidCallback? onEdit;
  final VoidCallback? onDelete;

  const _PackageCard({required this.pkg, required this.onEdit, required this.onDelete});

  @override
  Widget build(BuildContext context) {
    final priceLabel = '${pkg.isStartingPrice ? "A partir de " : ""}${euros(pkg.price)}';
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              // Nome numa linha e o preço por baixo (antes partia a meio).
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      pkg.name,
                      style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.lg, color: AppTheme.ink),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      priceLabel,
                      style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, color: AppTheme.accentOliveDark),
                    ),
                  ],
                ),
              ),
              SnappyTap(
                onTap: onEdit ?? () {},
                child: const Padding(
                  padding: EdgeInsets.all(4),
                  child: Icon(Hi.pencil, size: 18, color: AppTheme.inkMuted),
                ),
              ),
              const SizedBox(width: 4),
              SnappyTap(
                onTap: onDelete ?? () {},
                child: const Padding(
                  padding: EdgeInsets.all(4),
                  child: Icon(Hi.trash, size: 18, color: AppTheme.inkMuted),
                ),
              ),
            ],
          ),
          if (pkg.description.isNotEmpty) ...[
            const SizedBox(height: 8),
            Text(
              pkg.description,
              style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
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
  final List<String> includes;
  final String? excludes;
  final String priceUnit;
  final int? minPeople;
  final int? maxPeople;

  const EditPackageResult({
    required this.name,
    required this.description,
    required this.price,
    required this.isStartingPrice,
    this.includes = const [],
    this.excludes,
    this.priceUnit = 'total',
    this.minPeople,
    this.maxPeople,
  });
}

Future<EditPackageResult?> showEditPackageSheet(
  BuildContext context, {
  String name = '',
  String description = '',
  double price = 0,
  bool isStartingPrice = false,
  List<String> includes = const [],
  String? excludes,
  String priceUnit = 'total',
  int? minPeople,
  int? maxPeople,
}) {
  return showIslandSheet<EditPackageResult>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (context) => _EditPackageSheet(
      name: name,
      description: description,
      price: price,
      isStartingPrice: isStartingPrice,
      includes: includes,
      excludes: excludes,
      priceUnit: priceUnit,
      minPeople: minPeople,
      maxPeople: maxPeople,
    ),
  );
}

/// Linha vaga (2026-11-15: «pede ao parceiro para ser específico»): sem
/// um número nem uma unidade (horas, pessoas, unidades…).
bool isVagueLine(String line) {
  final t = line.trim().toLowerCase();
  if (t.isEmpty) return false;
  if (RegExp(r'\d').hasMatch(t)) return false;
  const units = ['hora', 'pessoa', 'unidade', 'minuto', 'dia', 'noite', 'página', 'foto', 'garrafa', 'prato', 'convidado'];
  final hasNumberWord = RegExp(r'\b(um|uma|dois|duas|três|quatro|cinco|seis|sete|oito|nove|dez|meio|meia)\b').hasMatch(t);
  return !(hasNumberWord && units.any(t.contains));
}

/// Folha do pacote (mockup «Perfis dos parceiros» → Novo menu / pacote,
/// 2026-11-15): nome, preço e unidade, «O que inclui» uma linha por
/// coisa (as vagas ficam a vermelho), «Não inclui» e nº de pessoas.
class _EditPackageSheet extends StatefulWidget {
  final String name;
  final String description;
  final double price;
  final bool isStartingPrice;
  final List<String> includes;
  final String? excludes;
  final String priceUnit;
  final int? minPeople;
  final int? maxPeople;

  const _EditPackageSheet({
    required this.name,
    required this.description,
    required this.price,
    required this.isStartingPrice,
    required this.includes,
    required this.excludes,
    required this.priceUnit,
    required this.minPeople,
    required this.maxPeople,
  });

  @override
  State<_EditPackageSheet> createState() => _EditPackageSheetState();
}

class _EditPackageSheetState extends State<_EditPackageSheet> {
  late final _name = TextEditingController(text: widget.name);
  late final _description = TextEditingController(text: widget.description);
  late final _price = TextEditingController(text: widget.price == 0 ? '' : widget.price.toStringAsFixed(0));
  late final _excludes = TextEditingController(text: widget.excludes ?? '');
  late final _min = TextEditingController(text: widget.minPeople?.toString() ?? '');
  late final _max = TextEditingController(text: widget.maxPeople?.toString() ?? '');
  late final List<TextEditingController> _lines = [
    for (final l in widget.includes) TextEditingController(text: l),
    if (widget.includes.isEmpty) ...[TextEditingController(), TextEditingController()],
  ];
  // 'total' | 'person' | 'from' (desde)
  late String _unit = widget.isStartingPrice ? 'from' : widget.priceUnit;
  bool _tried = false;

  @override
  void dispose() {
    for (final c in [_name, _description, _price, _excludes, _min, _max, ..._lines]) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _save() async {
    setState(() => _tried = true);
    if (_name.text.trim().isEmpty) return;
    final price = double.tryParse(_price.text.trim().replaceAll(',', '.')) ?? 0;
    final includes = [for (final c in _lines) if (c.text.trim().isNotEmpty) c.text.trim()];
    if (includes.isEmpty) return;
    if (includes.any(isVagueLine)) {
      final go = await showIslandDialog<bool>(
        context: context,
        builder: (d) => IslandAlert(
          title: const Text('Algumas linhas não dizem quantidades'),
          content: const Text('Os clientes escolhem melhor quando sabem quantos, quantas horas ou para quantas pessoas. Guardar mesmo assim?'),
          actions: [
            TextButton(onPressed: () => Navigator.of(d).pop(false), child: const Text('Corrigir')),
            FilledButton(onPressed: () => Navigator.of(d).pop(true), child: const Text('Guardar')),
          ],
        ),
      );
      if (go != true || !mounted) return;
    }
    if (price > 0 && !await confirmVatIncluded(context, price)) return;
    if (!mounted) return;
    Navigator.of(context).pop(
      EditPackageResult(
        name: _name.text.trim(),
        description: _description.text.trim(),
        price: price,
        isStartingPrice: _unit == 'from',
        includes: includes,
        excludes: _excludes.text.trim().isEmpty ? null : _excludes.text.trim(),
        priceUnit: _unit == 'person' ? 'person' : 'total',
        minPeople: int.tryParse(_min.text.trim()),
        maxPeople: int.tryParse(_max.text.trim()),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    const red = Color(0xFFC8553D);
    final noIncludes = _tried && _lines.every((c) => c.text.trim().isEmpty);
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.9),
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 24),
        decoration: const BoxDecoration(
          color: AppTheme.background,
          borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
        ),
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(widget.name.isEmpty ? 'Novo pacote' : 'Pacote',
                  style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 22, color: AppTheme.ink)),
              const SizedBox(height: 4),
              const Text('Diz exatamente o que o cliente recebe. É isto que ele vê antes de pedir e o que fica combinado.',
                  style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(height: 16),
              OnbField(controller: _name, label: 'Nome', maxLength: 40, error: _tried && _name.text.trim().isEmpty ? 'Dá um nome ao pacote.' : null),
              const SizedBox(height: 14),
              OnbField(controller: _price, label: 'Preço (€)', keyboardType: TextInputType.number),
              const SizedBox(height: 10),
              KitPills(top: 0, [
                KitPill(label: 'Total', selected: _unit == 'total', onTap: () => setState(() => _unit = 'total')),
                KitPill(label: 'Por pessoa', selected: _unit == 'person', onTap: () => setState(() => _unit = 'person')),
                KitPill(label: 'Desde', selected: _unit == 'from', onTap: () => setState(() => _unit = 'from')),
              ]),
              const SizedBox(height: 18),
              const OnbGroupLabel('O que inclui'),
              const SizedBox(height: 4),
              const Text('Uma coisa por linha, com quantidades, horas ou número de pessoas.',
                  style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(height: 8),
              for (final c in _lines) ...[
                OnbField(
                  controller: c,
                  hint: 'Ex.: Mesa de doces com 6 sobremesas',
                  error: isVagueLine(c.text) ? 'Diz quantos: «6 sobremesas», «3 horas», «até 120 pessoas».' : null,
                  onChanged: (_) => setState(() {}),
                ),
                const SizedBox(height: 8),
              ],
              if (noIncludes)
                const Padding(
                  padding: EdgeInsets.only(bottom: 8),
                  child: Text('Escreve pelo menos uma coisa que o pacote inclui.', style: TextStyle(fontSize: 13, color: red)),
                ),
              OutlinedButton(
                onPressed: _lines.length >= 12 ? null : () => setState(() => _lines.add(TextEditingController())),
                style: OutlinedButton.styleFrom(
                  foregroundColor: AppTheme.ink,
                  minimumSize: const Size(0, 44),
                  side: const BorderSide(color: AppTheme.ink, width: 1.5),
                  shape: const StadiumBorder(),
                  textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 14, fontWeight: FontWeight.w700),
                ),
                child: const Text('Juntar linha'),
              ),
              const SizedBox(height: 18),
              OnbField(controller: _excludes, label: 'Não inclui', hint: 'Ex.: bolo, bar depois do jantar'),
              const SizedBox(height: 4),
              const Text('Evita surpresas: o que costumam perguntar e não está no preço.',
                  style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(height: 18),
              const OnbGroupLabel('Para quantas pessoas'),
              const SizedBox(height: 8),
              Row(children: [
                Expanded(child: OnbField(controller: _min, hint: 'Mínimo', keyboardType: TextInputType.number)),
                const SizedBox(width: 10),
                Expanded(child: OnbField(controller: _max, hint: 'Máximo', keyboardType: TextInputType.number)),
              ]),
              const SizedBox(height: 14),
              OnbField(controller: _description, label: 'Descrição curta (opcional)'),
              const SizedBox(height: 20),
              PrimaryButton(label: 'Guardar pacote', onPressed: _save),
            ],
          ),
        ),
      ),
    );
  }
}

class _ExtraResult {
  final String name;
  final List<String> details;
  final double price;
  final String priceUnit;
  final List<String> packageIds;
  const _ExtraResult(this.name, this.details, this.price, this.priceUnit, this.packageIds);
}

/// Folha do extra (mockup «Perfis dos parceiros» → Novo extra): o que é,
/// exatamente, o preço e a unidade, e depois de que pacotes aparece.
class _EditExtraSheet extends StatefulWidget {
  final ServiceExtra? extra;
  final List<ServicePackage> packages;
  const _EditExtraSheet({required this.extra, required this.packages});

  @override
  State<_EditExtraSheet> createState() => _EditExtraSheetState();
}

class _EditExtraSheetState extends State<_EditExtraSheet> {
  late final _name = TextEditingController(text: widget.extra?.name ?? '');
  late final _price = TextEditingController(text: widget.extra == null ? '' : widget.extra!.price.toStringAsFixed(0));
  late final List<TextEditingController> _lines = [
    for (final l in widget.extra?.details ?? const <String>[]) TextEditingController(text: l),
    if ((widget.extra?.details ?? const []).isEmpty) TextEditingController(),
  ];
  late String _unit = widget.extra?.priceUnit ?? 'total';
  late final Set<String> _pkgs = {...?widget.extra?.packageIds};
  bool _tried = false;

  @override
  void dispose() {
    for (final c in [_name, _price, ..._lines]) {
      c.dispose();
    }
    super.dispose();
  }

  void _save() {
    setState(() => _tried = true);
    final price = double.tryParse(_price.text.trim().replaceAll(',', '.'));
    final details = [for (final c in _lines) if (c.text.trim().isNotEmpty) c.text.trim()];
    if (_name.text.trim().isEmpty || price == null || details.isEmpty) return;
    // Todos marcados = vazio (aparece em qualquer pacote).
    final ids = _pkgs.length == widget.packages.length ? <String>[] : _pkgs.toList();
    Navigator.of(context).pop(_ExtraResult(_name.text.trim(), details, price, _unit, ids));
  }

  @override
  Widget build(BuildContext context) {
    final allOn = _pkgs.isEmpty || _pkgs.length == widget.packages.length;
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.9),
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 24),
        decoration: const BoxDecoration(
          color: AppTheme.background,
          borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
        ),
        child: SingleChildScrollView(
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Text(widget.extra == null ? 'Novo extra' : 'Extra',
                style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 22, color: AppTheme.ink)),
            const SizedBox(height: 4),
            const Text('Aparece ao cliente só depois de ele escolher um dos pacotes que marcares.',
                style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            const SizedBox(height: 16),
            OnbField(controller: _name, label: 'Nome', maxLength: 40, error: _tried && _name.text.trim().isEmpty ? 'Dá um nome ao extra.' : null),
            const SizedBox(height: 14),
            const OnbGroupLabel('O que é, exatamente'),
            const SizedBox(height: 8),
            for (final c in _lines) ...[
              OnbField(
                controller: c,
                hint: 'Ex.: Gin, 3 cocktails da casa e cerveja',
                error: isVagueLine(c.text) ? 'Diz quanto: «3 horas», «1 barman por 40 pessoas».' : null,
                onChanged: (_) => setState(() {}),
              ),
              const SizedBox(height: 8),
            ],
            OutlinedButton(
              onPressed: _lines.length >= 6 ? null : () => setState(() => _lines.add(TextEditingController())),
              style: OutlinedButton.styleFrom(
                foregroundColor: AppTheme.ink,
                minimumSize: const Size(0, 44),
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 14, fontWeight: FontWeight.w700),
              ),
              child: const Text('Juntar linha'),
            ),
            const SizedBox(height: 14),
            OnbField(controller: _price, label: 'Preço (€)', keyboardType: TextInputType.number,
                error: _tried && double.tryParse(_price.text.trim().replaceAll(',', '.')) == null ? 'Indica o preço.' : null),
            const SizedBox(height: 10),
            KitPills(top: 0, [
              KitPill(label: 'Total', selected: _unit == 'total', onTap: () => setState(() => _unit = 'total')),
              KitPill(label: 'Por pessoa', selected: _unit == 'person', onTap: () => setState(() => _unit = 'person')),
              KitPill(label: 'Por unidade', selected: _unit == 'unit', onTap: () => setState(() => _unit = 'unit')),
            ]),
            const SizedBox(height: 18),
            const OnbGroupLabel('Aparece depois de escolherem'),
            const SizedBox(height: 8),
            KitGroup([
              for (final p in widget.packages)
                KitRow(
                  title: p.name,
                  trailing: Checkbox(
                    value: allOn || _pkgs.contains(p.id),
                    onChanged: (v) => setState(() {
                      if (_pkgs.isEmpty) _pkgs.addAll(widget.packages.map((x) => x.id));
                      v == true ? _pkgs.add(p.id) : _pkgs.remove(p.id);
                    }),
                  ),
                ),
            ]),
            const SizedBox(height: 20),
            PrimaryButton(label: 'Guardar extra', onPressed: _save),
          ]),
        ),
      ),
    );
  }
}

/// Prazo do resto (migrações 204/205): até quantos dias antes do evento o
/// cliente tem de pagar o resto — 14 por defeito, pode baixar até 1. O
/// pagamento abre 6 dias antes desse prazo. Pedido do Rafael, 2026-11-20.
final _finalPaymentDaysProvider = FutureProvider.autoDispose<int?>((ref) async {
  final id = supabase.auth.currentUser?.id;
  if (id == null) return null;
  try {
    final row = await supabase.from('partner_profiles').select('final_payment_days').eq('id', id).maybeSingle();
    return (row?['final_payment_days'] as num?)?.toInt() ?? 14;
  } catch (_) {
    return null; // migração 205 por correr
  }
});

class _FinalPaymentDaysCard extends ConsumerStatefulWidget {
  const _FinalPaymentDaysCard();

  @override
  ConsumerState<_FinalPaymentDaysCard> createState() => _FinalPaymentDaysCardState();
}

class _FinalPaymentDaysCardState extends ConsumerState<_FinalPaymentDaysCard> {
  int? _days;

  Future<void> _set(int days) async {
    final id = supabase.auth.currentUser?.id;
    if (id == null) return;
    setState(() => _days = days);
    try {
      await supabase.from('partner_profiles').update({'final_payment_days': days}).eq('id', id);
    } catch (_) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível guardar. Tenta novamente.')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final loaded = ref.watch(_finalPaymentDaysProvider).value;
    if (loaded == null && _days == null) return const SizedBox.shrink();
    final days = _days ?? loaded!;
    Widget step(IconData icon, String label, int? to) => Semantics(
          button: true,
          label: label,
          child: SnappyTap(
            onTap: to == null ? null : () => _set(to),
            child: Container(
              width: 36,
              height: 36,
              // Botão redondo preto, ícone branco (DESIGN.md §2); sem ação fica esbatido.
              decoration: BoxDecoration(
                  color: to == null ? AppTheme.ink.withValues(alpha: 0.25) : AppTheme.ink, shape: BoxShape.circle),
              child: Icon(icon, size: 16, color: Colors.white),
            ),
          ),
        );
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          const Expanded(
            child: Text('Prazo para pagar o resto',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          step(Hi.minus, 'Menos um dia', days > 1 ? days - 1 : null),
          SizedBox(
            width: 72,
            child: Text('$days ${days == 1 ? 'dia' : 'dias'}',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          step(Hi.plus, 'Mais um dia', days < 14 ? days + 1 : null),
        ]),
        const SizedBox(height: 6),
        Text(
          'O cliente paga o resto (ou o valor todo, se não houver sinal) até $days ${days == 1 ? 'dia (24 h)' : 'dias'} antes do evento — 14 por defeito. '
          'O pagamento abre 6 dias antes desse prazo e, sem pagamento, a reserva é cancelada. '
          'O sinal paga-se até 30 dias antes e não se ajusta.',
          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4),
        ),
      ]),
    );
  }
}
