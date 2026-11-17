import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/guest_home/event_tables.dart';
import '../../../core/home/home_providers.dart' show amountWithCommission, platformCommissionPercentageProvider;
import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/payments/payments.dart' show PayArgs;
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/onb_kit.dart' show OnbField;
import '../../../shared/widgets/page_kit.dart';
import '../../partners/screens/partner_detail_screen.dart' show PackageChoiceCard, ExtraChoiceRow;

/// «O teu menu» (190): a mesa foi reservada e cada convidado escolhe o seu
/// menu e extras na app, antes de pagar (mockup «Restaurante · perfil»,
/// «Cada um escolhe»). Se cada um paga o seu, segue para o pagamento.
class ChooseMenuScreen extends ConsumerStatefulWidget {
  final String weddingId;
  final EventTable table;
  const ChooseMenuScreen({super.key, required this.weddingId, required this.table});

  @override
  ConsumerState<ChooseMenuScreen> createState() => _ChooseMenuScreenState();
}

class _ChooseMenuScreenState extends ConsumerState<ChooseMenuScreen> {
  String? _packageId;
  final Set<String> _extras = {};
  final _allergies = TextEditingController();
  bool _saving = false;

  EventTable get t => widget.table;

  @override
  void initState() {
    super.initState();
    final c = t.myChoice;
    if (c != null) {
      _packageId = c['package_id'] as String?;
      for (final e in (c['extras_snapshot'] as List? ?? const [])) {
        if (e is Map && e['id'] is String) _extras.add(e['id'] as String);
      }
      _allergies.text = (c['allergies'] as String?) ?? '';
    }
  }

  @override
  void dispose() {
    _allergies.dispose();
    super.dispose();
  }

  Future<void> _save(ServicePackage pkg, double amount) async {
    setState(() => _saving = true);
    try {
      final r = await chooseMyMenu(
        bookingId: t.bookingId,
        packageId: pkg.id,
        extraIds: _extras.toList(),
        allergies: _allergies.text.trim().isEmpty ? null : _allergies.text.trim(),
      );
      ref.invalidate(myEventTablesProvider(widget.weddingId));
      if (!mounted) return;
      final paymentId = r.paymentId;
      if (paymentId == null) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Escolha guardada.')));
        context.pop();
        return;
      }
      final pct = await ref.read(platformCommissionPercentageProvider.future);
      if (!mounted) return;
      await context.push('/pay', extra: PayArgs(
        paymentId: paymentId,
        partnerName: t.partnerName,
        kind: 'guest_share',
        amount: amountWithCommission(r.amount, pct),
        baseAmount: r.amount,
      ));
      ref.invalidate(myEventTablesProvider(widget.weddingId));
      if (mounted) context.pop();
    } on PostgrestException catch (e) {
      if (!mounted) return;
      final msg = e.message.contains('closed')
          ? 'A escolha já fechou.'
          : e.message.contains('already_paid')
              ? 'Já pagaste a tua parte: não dá para mudar.'
              : 'Não foi possível guardar. Tenta outra vez.';
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    } catch (_) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final packages = (ref.watch(partnerPackagesForProvider(t.partnerId)).value ?? const <ServicePackage>[])
        .where((p) => p.perPerson && !p.isStartingPrice)
        .toList();
    final extras = ref.watch(partnerExtrasForProvider(t.partnerId)).value ?? const <ServiceExtra>[];
    final pkg = packages.where((p) => p.id == _packageId).firstOrNull;
    final pkgExtras = pkg == null ? const <ServiceExtra>[] : extras.where((e) => e.appliesTo(pkg.id)).toList();
    final amount = pkg == null ? 0.0 : pkg.price + pkgExtras.where((e) => _extras.contains(e.id)).fold<double>(0, (s, e) => s + e.price);
    final deadline = t.choiceDeadline;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: KitPage(
        pinnedBack: true,
        onBack: () => context.canPop() ? context.pop() : context.go('/guest-home'),
        bottom: 140,
        children: [
        const KitHeader(),
        KitTitle('O teu menu',
            subtitle: [t.partnerName, if (deadline != null) 'escolhe até ${shortDate(deadline)}'].join(' · ')),
        KitCaps('A carta · ${packages.length}'),
        for (var i = 0; i < packages.length; i++)
          Padding(
            padding: EdgeInsets.only(top: i == 0 ? 0 : 10),
            child: PackageChoiceCard(
              package: packages[i],
              selected: packages[i].id == _packageId,
              onTap: () => setState(() {
                _packageId = packages[i].id;
                _extras.removeWhere((id) => !extras.any((e) => e.id == id && e.appliesTo(packages[i].id)));
              }),
            ),
          ),
        if (pkgExtras.isNotEmpty) ...[
          KitSection('Juntar ao ${pkg!.name}'),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              for (var i = 0; i < pkgExtras.length; i++)
                ExtraChoiceRow(
                  extra: pkgExtras[i],
                  on: _extras.contains(pkgExtras[i].id),
                  last: i == pkgExtras.length - 1,
                  onTap: () => setState(() =>
                      _extras.contains(pkgExtras[i].id) ? _extras.remove(pkgExtras[i].id) : _extras.add(pkgExtras[i].id)),
                ),
            ]),
          ),
        ],
        const KitCaps('Alergias'),
        OnbField(controller: _allergies, hint: 'Ex.: sem glúten, marisco', maxLength: 120),
        const SizedBox(height: 20),
        if (pkg != null)
          Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: Row(children: [
              Expanded(
                child: Text(
                  [pkg.name, if (_extras.isNotEmpty) '+ ${_extras.length} extra'].join(' · '),
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                ),
              ),
              Text(euros(amount), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
        FilledButton(
          onPressed: pkg == null || _saving ? null : () => _save(pkg, amount),
          style: FilledButton.styleFrom(
            backgroundColor: AppTheme.ink,
            foregroundColor: Colors.white,
            minimumSize: const Size.fromHeight(52),
            shape: const StadiumBorder(),
            textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
          ),
          child: Text(pkg == null
              ? 'Escolhe um menu'
              : t.eachPays
                  ? 'Escolher e pagar · ${euros(amount)}'
                  : 'Guardar escolha'),
        ),
        const SizedBox(height: 8),
        Text(
          t.eachPays
              ? 'Pagas a tua parte na app. A taxa de serviço é paga por quem paga.'
              : 'Pagam os organizadores. Podes mudar até a escolha fechar.',
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
        ),
      ]),
    );
  }
}
