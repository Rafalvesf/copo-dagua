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
/// Migração 211 (mockups «Reservar por categoria», 2026-11-21): quem
/// recebe o convite escolhe o menu de cada pessoa do seu convite («Para
/// quem»); o organizador nunca escolhe pelos outros.
class ChooseMenuScreen extends ConsumerStatefulWidget {
  final String weddingId;
  final EventTable table;
  const ChooseMenuScreen({super.key, required this.weddingId, required this.table});

  @override
  ConsumerState<ChooseMenuScreen> createState() => _ChooseMenuScreenState();
}

class _ChooseMenuScreenState extends ConsumerState<ChooseMenuScreen> {
  String? _packageId;

  // Menus por pessoa do convite (211): chave da pessoa → menu.
  final Map<String, String> _menus = {};
  String _current = 'self';
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
      for (final p in (c['people'] as List? ?? const [])) {
        if (p is Map && p['key'] is String && p['package_id'] is String) _menus[p['key'] as String] = p['package_id'] as String;
      }
      if (_menus.isEmpty && _packageId != null) _menus['self'] = _packageId!;
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

  Future<void> _save(List<InvitePerson> people) async {
    setState(() => _saving = true);
    try {
      final allergies = _allergies.text.trim().isEmpty ? null : _allergies.text.trim();
      // Só eu no convite: a função de sempre (funciona antes da 211).
      final r = people.length <= 1
          ? await chooseMyMenu(
              bookingId: t.bookingId,
              packageId: _menus['self']!,
              extraIds: _extras.toList(),
              allergies: allergies,
            )
          : await chooseInviteMenus(
              bookingId: t.bookingId,
              menus: {for (final p in people) p.key: _menus[p.key]!},
              extraIds: _extras.toList(),
              allergies: allergies,
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
    final people = ref.watch(invitePeopleProvider(widget.weddingId)).value ?? const [InvitePerson('self', 'Tu', 'adult', true)];
    final many = people.length > 1;
    if (!people.any((p) => p.key == _current)) _current = people.first.key;
    final current = people.firstWhere((p) => p.key == _current);
    final pkgFor = {for (final p in packages) p.id: p};
    final chosen = [for (final p in people) if (pkgFor[_menus[p.key]] != null) pkgFor[_menus[p.key]]!];
    final allChosen = chosen.length == people.length;
    final pkg = pkgFor[_menus[_current]];
    final pkgExtras = extras.where((e) => chosen.any((c) => e.appliesTo(c.id))).toList();
    final amount = chosen.fold<double>(0, (s, p) => s + p.price) +
        pkgExtras.where((e) => _extras.contains(e.id)).fold<double>(0, (s, e) => s + e.price);
    final deadline = t.choiceDeadline;
    String first(String n) => n.trim().split(RegExp(r'\s+')).first;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: KitPage(
        pinnedBack: true,
        onBack: () => context.canPop() ? context.pop() : context.go('/guest-home'),
        bottom: 140,
        children: [
        const KitHeader(),
        KitTitle(many ? 'Escolhe os menus' : 'O teu menu',
            subtitle: [t.partnerName, if (deadline != null) 'escolhe até ${shortDate(deadline)}'].join(' · ')),
        if (many) ...[
          const KitCaps('Para quem'),
          Wrap(spacing: 8, runSpacing: 8, children: [
            for (final p in people)
              KitPill(
                label: [p.self ? 'Tu' : first(p.name), if (pkgFor[_menus[p.key]] != null) pkgFor[_menus[p.key]]!.name].join(' · '),
                selected: p.key == _current,
                onTap: () => setState(() => _current = p.key),
              ),
          ]),
        ],
        KitCaps(many ? 'Menu ${current.self ? 'para ti' : 'para ${first(current.name)}'} · ${packages.length}' : 'A carta · ${packages.length}'),
        for (var i = 0; i < packages.length; i++)
          Padding(
            padding: EdgeInsets.only(top: i == 0 ? 0 : 10),
            child: PackageChoiceCard(
              package: packages[i],
              selected: packages[i].id == _menus[_current],
              onTap: () => setState(() {
                _menus[_current] = packages[i].id;
                _packageId = _menus['self'];
                final ids = _menus.values.toSet();
                _extras.removeWhere((id) => !extras.any((e) => e.id == id && ids.any(e.appliesTo)));
                // Passa à pessoa seguinte que ainda não tem menu.
                final next = people.where((p) => !pkgFor.containsKey(_menus[p.key])).firstOrNull;
                if (next != null) _current = next.key;
              }),
            ),
          ),
        if (pkgExtras.isNotEmpty) ...[
          KitSection(many ? 'Juntar ao convite' : 'Juntar ao ${pkg?.name ?? 'menu'}'),
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
        if (chosen.isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: Row(children: [
              Expanded(
                child: Text(
                  [
                    many ? '${chosen.length} de ${people.length} menus' : chosen.first.name,
                    if (_extras.isNotEmpty) '+ ${_extras.length} extra',
                  ].join(' · '),
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                ),
              ),
              Text(euros(amount), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
        FilledButton(
          onPressed: !allChosen || _saving ? null : () => _save(people),
          style: FilledButton.styleFrom(
            backgroundColor: AppTheme.ink,
            foregroundColor: Colors.white,
            minimumSize: const Size.fromHeight(52),
            shape: const StadiumBorder(),
            textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
          ),
          child: Text(!allChosen
              ? (many ? 'Falta o menu de ${people.length - chosen.length}' : 'Escolhe um menu')
              : t.eachPays
                  ? 'Escolher e pagar · ${euros(amount)}'
                  : 'Guardar escolha'),
        ),
        const SizedBox(height: 8),
        Text(
          t.eachPays
              ? (many
                  ? 'Pagas por ti e por quem vem no teu convite, na app. A taxa de serviço é paga por quem paga.'
                  : 'Pagas a tua parte na app. A taxa de serviço é paga por quem paga.')
              : 'Pagam os organizadores. Podes mudar até a escolha fechar.',
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
        ),
      ]),
    );
  }
}
