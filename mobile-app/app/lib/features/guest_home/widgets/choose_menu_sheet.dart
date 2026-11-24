import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/guest_home/event_tables.dart';
import '../../../core/home/home_providers.dart' show amountWithCommission, guestShareFeePct;
import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/payments/payments.dart' show PayArgs;
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/step_sheet_head.dart';
import '../../payments/open_payment.dart';
import '../../partners/widgets/reserve_flow.dart' show PaidForSheet;
import '../../../core/supabase/supabase_config.dart';

/// O que fica escolhido para uma pessoa.
class _Pick {
  /// Escolho o menu (pago a comida desta pessoa).
  final bool menu;

  /// Eu ou quem vem comigo: as alergias são obrigatórias.
  final bool mine;
  String? packageId;
  String allergies;
  bool none;

  /// O menu que está guardado e o preço do menu de quem paga (219): sem
  /// [menu], posso trocar por um do mesmo valor ou mais caro.
  final String? savedPackageId;
  final double? basePrice;
  _Pick({
    required this.menu,
    required this.mine,
    this.packageId,
    this.allergies = '',
    this.none = false,
    this.savedPackageId,
    this.basePrice,
  });

  /// Posso trocar o menu que outro paga (já escolhido por ele).
  bool get canUpgrade => !menu && mine && basePrice != null && savedPackageId != null;
  bool get answered => none || allergies.trim().isNotEmpty;
  bool get done => (!menu || packageId != null) && (!mine || answered);

  /// O que vai para o servidor: o menu (só se o escolho) e as alergias (se
  /// respondidas). `null` = nada a guardar desta pessoa.
  ({String key, String? packageId, String? allergies})? payload(String key) {
    final pkg = menu ? packageId : (canUpgrade && packageId != savedPackageId ? packageId : null);
    final a = answered ? (none ? '' : allergies.trim()) : null;
    if (pkg == null && a == null) return null;
    return (key: key, packageId: pkg, allergies: a);
  }
}

/// «Escolher e pagar» / «Escolher os menus» (pedido do Rafael, 2026-11-22;
/// mockup «Escolher o menu · popup»): popups por cima da página, para o
/// convidado e para o organizador —
///   1. «Escolhe os menus»: «PARA QUEM» com uma pílula por pessoa. O menu
///      escolhe-o **quem paga** a comida (pedido 2026-11-22): eu por mim e
///      por quem vem no meu convite quando cada um paga o seu; os
///      organizadores por quem pagam («Pagamos nós» ou «Nós pagamos por»).
///      Quem tem a comida paga por outros só diz as alergias (sempre;
///      «Nenhuma» conta);
///   2. «Queres juntar alguma coisa?» (os extras, depois dos menus — pagos
///      por quem os junta);
///   3. pagar (cartão, Apple Pay ou Google Pay), se houver a minha parte.
/// O voltar de cada passo regressa ao anterior.
Future<void> chooseMenuAndPay(BuildContext context, WidgetRef ref, String eventId, EventTable t) async {
  List<ServicePackage> packages;
  List<ServiceExtra> extras;
  List<MenuPerson> people;
  var legacy = false; // antes da migração 216: só a minha escolha
  try {
    packages = [
      for (final p in await ref.read(partnerPackagesForProvider(t.partnerId).future))
        if (p.perPerson && !p.isStartingPrice) p,
    ];
    extras = await ref.read(partnerExtrasForProvider(t.partnerId).future);
  } catch (_) {
    packages = const [];
    extras = const [];
  }
  try {
    people = await fetchMenuPeople(t.bookingId);
  } on PostgrestException catch (e) {
    if (e.code != 'PGRST202' && e.code != '42883') rethrow;
    legacy = true;
    people = [
      MenuPerson(
        key: 'me',
        name: 'Tu',
        ageGroup: 'adult',
        isMe: true,
        iPay: t.eachPays,
        menu: true,
        packageId: t.myChoice?['package_id'] as String?,
        allergies: t.myChoice?['allergies'] as String?,
      ),
    ];
  } catch (_) {
    people = const [];
  }
  if (!context.mounted) return;
  if (packages.isEmpty || people.isEmpty) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      content: Text(packages.isEmpty ? 'Ainda não há menus para escolher.' : 'Aqui não tens nada para escolher.'),
    ));
    return;
  }

  var paidFor = [...t.paidFor];
  final picks = <String, _Pick>{
    for (final p in people)
      p.key: _Pick(
        menu: p.menu,
        mine: p.mine,
        savedPackageId: p.packageId,
        basePrice: p.basePrice,
        packageId: packages.any((k) => k.id == p.packageId) ? p.packageId : null,
        allergies: p.allergies ?? '',
        none: p.allergies != null && p.allergies!.trim().isEmpty,
      ),
  };
  final picked = <String>{for (final p in people) ...p.extraIds};
  // Pago menus aqui? (Os extras que juntar, pago-os sempre eu.)
  bool anyIPayNow() => people.any((p) => p.iPay && p.menu);
  var anyIPay = anyIPayNow();
  // Com «Pagamos nós», quem paga a mesa é o organizador: o pagamento da
  // reserva; os outros pagam a sua parte.
  bool organizerBill() => !t.eachPays && anyIPay;
  final deadline = t.choiceDeadline;
  final sub = [t.partnerName, if (deadline != null) 'escolhe até ${shortDate(deadline)}'].join(' · ');
  var stage = 0; // 0 menus · 1 extras · 2 guardar e pagar
  while (context.mounted) {
    anyIPay = anyIPayNow();
    final chosenPkgs = {for (final p in picks.values) ?p.packageId};
    final inviteExtras = extras
        .where((e) => chosenPkgs.isEmpty || e.packageIds.isEmpty || e.packageIds.any(chosenPkgs.contains))
        .toList();
    final upgrade = _upgradeTotal(picks, packages);
    final total = 1 + (inviteExtras.isEmpty ? 0 : 1) + (anyIPay || picked.isNotEmpty || upgrade > 0 ? 1 : 0);
    if (stage == 0) {
      final ok = await showIslandSheet<Object>(
        confirmExit: anyIPay,
        context: context,
        isScrollControlled: true,
        builder: (_) => _MenusStep(
          people: people,
          packages: packages,
          picks: picks,
          step: (1, total),
          subtitle: sub,
          last: inviteExtras.isEmpty && !anyIPay && picked.isEmpty && upgrade <= 0,
          paidForCount: t.iOrganize && t.eachPays && !legacy ? paidFor.length : null,
        ),
      );
      if (ok == 'paidFor') {
        // «Nós pagamos por» depois da reserva: escolher, guardar e voltar a
        // carregar as pessoas (passo a escolher o menu delas).
        final keys = await _editPaidFor(context, eventId, paidFor);
        if (keys == null || !context.mounted) continue;
        try {
          await setPaidFor(t.bookingId, keys);
          paidFor = keys;
          final fresh = await fetchMenuPeople(t.bookingId);
          people = fresh;
          for (final p in fresh) {
            final old = picks[p.key];
            picks[p.key] = _Pick(
              menu: p.menu,
              mine: p.mine,
              savedPackageId: p.packageId,
              basePrice: p.basePrice,
              packageId: old?.packageId ?? (packages.any((k) => k.id == p.packageId) ? p.packageId : null),
              allergies: old?.allergies ?? p.allergies ?? '',
              none: old?.none ?? (p.allergies != null && p.allergies!.trim().isEmpty),
            );
          }
          picks.removeWhere((k, _) => !fresh.any((p) => p.key == k));
          ref.invalidate(myEventTablesProvider(eventId));
        } catch (_) {
          if (context.mounted) {
            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
          }
        }
        continue;
      }
      if (ok != true) return;
      stage = 1;
      continue;
    }
    if (stage == 1 && inviteExtras.isNotEmpty) {
      final r = await showIslandSheet<Object>(
        confirmExit: true,
        context: context,
        isScrollControlled: true,
        builder: (_) => _ExtrasStep(
          extras: inviteExtras,
          picked: picked,
          base: _menusTotal([for (final p in people) if (p.iPay && p.menu) p], picks, packages) + upgrade,
          step: (2, total),
          subtitle: sub,
          payAfterMenus: anyIPay || upgrade > 0,
        ),
      );
      if (r == null) return;
      if (r == 'back') {
        stage = 0;
        continue;
      }
      picked
        ..clear()
        ..addAll(r as Set<String>);
    }
    // Guardar as escolhas.
    ({String? paymentId, double amount}) res;
    try {
      if (legacy) {
        final p = picks['me']!;
        res = await chooseMyMenu(
          bookingId: t.bookingId,
          packageId: p.packageId!,
          extraIds: picked.toList(),
          allergies: p.none ? '' : p.allergies.trim(),
        );
      } else {
        res = await chooseMenus(
          bookingId: t.bookingId,
          people: [
            // Os menus que escolho e as alergias respondidas.
            for (final p in people) ?picks[p.key]!.payload(p.key),
          ],
          extraIds: picked.toList(),
        );
      }
    } on PostgrestException catch (e) {
      if (context.mounted) {
        final msg = e.message.contains('closed')
            ? 'A escolha já fechou.'
            : e.message.contains('already_paid')
                ? 'Já está pago: não dá para mudar.'
                : 'Não foi possível guardar. Tenta outra vez.';
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
      }
      return;
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
      }
      return;
    }
    ref.invalidate(myEventTablesProvider(eventId));
    if (!context.mounted) return;
    final paymentId = res.paymentId;
    if (paymentId == null || res.amount <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(anyIPay || people.any((p) => p.menu) ? 'Menus guardados.' : 'Alergias guardadas.')),
      );
      return;
    }
    final Object? back;
    if (!organizerBill()) {
      final pct = await guestShareFeePct(ref, t.partnerId, t.totalAmount ?? res.amount, res.amount);
      if (!context.mounted) return;
      back = await context.push<Object?>('/pay', extra: PayArgs(
        paymentId: paymentId,
        partnerName: t.partnerName,
        kind: 'guest_share',
        amount: amountWithCommission(res.amount, pct),
        baseAmount: res.amount,
        step: (total, total),
      ));
    } else {
      // Pagamos nós: o pagamento da reserva, como no «Para fazer».
      back = await openPaymentFlow(context, ref, paymentId, step: (total, total));
    }
    ref.invalidate(myEventTablesProvider(eventId));
    if (back != 'back') return;
    stage = inviteExtras.isEmpty ? 0 : 1;
  }
}

/// O que pago a mais por trocar menus que outros pagam (219).
double _upgradeTotal(Map<String, _Pick> picks, List<ServicePackage> packages) {
  var sum = 0.0;
  for (final p in picks.values) {
    if (!p.canUpgrade) continue;
    final pkg = packages.where((k) => k.id == p.packageId).firstOrNull;
    if (pkg != null && pkg.price > p.basePrice!) sum += pkg.price - p.basePrice!;
  }
  return sum;
}

double _menusTotal(List<MenuPerson> people, Map<String, _Pick> picks, List<ServicePackage> packages) {
  var sum = 0.0;
  for (final p in people) {
    final id = picks[p.key]?.packageId;
    final pkg = packages.where((k) => k.id == id).firstOrNull;
    if (pkg != null) sum += pkg.price;
  }
  return sum;
}

String _firstName(String s) => s.trim().split(RegExp(r'\s+')).first;

/// «Menu Carne» → «Carne».
String _shortMenu(String s) => s.replaceFirst(RegExp(r'^menu\s+', caseSensitive: false), '');

/// Grupo `#F2F2F2` do molde do popup (DESIGN.md §6.3).
class _Group extends StatelessWidget {
  final List<Widget> children;
  const _Group(this.children);

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
        decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
        child: Column(children: [
          for (final (i, c) in children.indexed)
            Container(
              decoration: i == 0 ? null : const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFFD9D9D9)))),
              child: c,
            ),
        ]),
      );
}

class _Caps extends StatelessWidget {
  final String text;
  const _Caps(this.text);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: Text(text,
            style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      );
}

class _Row extends StatelessWidget {
  final String title;
  final String? meta;
  final String trailing;
  final bool on;
  final VoidCallback onTap;
  const _Row({required this.title, this.meta, required this.trailing, required this.on, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: on,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            constraints: const BoxConstraints(minHeight: 64),
            padding: const EdgeInsets.symmetric(vertical: 10),
            child: Row(children: [
              Container(
                width: 22,
                height: 22,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: on ? AppTheme.accentOliveDark : Colors.white,
                  border: on ? null : Border.all(color: AppTheme.inkMuted, width: 1.5),
                ),
                child: on ? Icon(Hi.check, size: 13, color: Colors.white) : null,
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                  Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (meta?.isNotEmpty == true)
                    Text(meta!, maxLines: 2, overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              const SizedBox(width: 10),
              Text(trailing, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
        ),
      );
}

/// Pílula 38 (verde quando escolhida).
class _Pill extends StatelessWidget {
  final String label;
  final bool on;
  final VoidCallback onTap;
  const _Pill(this.label, {required this.on, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          height: 38,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: on ? AppTheme.accentOliveDark : AppTheme.background,
            borderRadius: BorderRadius.circular(19),
          ),
          child: Text(label,
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
        ),
      );
}

class _Btn extends StatelessWidget {
  final String label;
  final bool outlined;
  final VoidCallback? onTap;
  const _Btn(this.label, {this.outlined = false, this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Opacity(
          opacity: onTap == null ? 0.4 : 1,
          child: Container(
            height: 52,
            alignment: Alignment.center,
            decoration: ShapeDecoration(
              color: outlined ? Colors.white : AppTheme.ink,
              shape: StadiumBorder(side: outlined ? const BorderSide(color: AppTheme.ink, width: 1.5) : BorderSide.none),
            ),
            child: Text(label,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: outlined ? AppTheme.ink : Colors.white)),
          ),
        ),
      );
}

class _MenusStep extends StatefulWidget {
  final List<MenuPerson> people;
  final List<ServicePackage> packages;
  final Map<String, _Pick> picks;
  final (int, int) step;
  final String subtitle;

  /// Sem extras nem pagamento a seguir: o botão guarda.
  final bool last;

  /// Organizador, cada convite paga o seu: «Nós pagamos por» (218). `null`
  /// = não aparece; senão, quantas pessoas.
  final int? paidForCount;
  const _MenusStep({
    required this.people,
    required this.packages,
    required this.picks,
    required this.step,
    required this.subtitle,
    required this.last,
    this.paidForCount,
  });

  @override
  State<_MenusStep> createState() => _MenusStepState();
}

/// «Todos»: um menu para todas as pessoas por quem escolho (muitos
/// convidados, pedido 2026-11-22).
const _kAll = '*';

/// A partir de quantas pessoas abre em «Todos» e esconde as pílulas por
/// pessoa atrás de «Por pessoa».
const _kMany = 8;

class _MenusStepState extends State<_MenusStep> {
  late final List<MenuPerson> _menuPeople = [for (final p in widget.people) if (p.menu) p];
  late String _cur = _menuPeople.length > _kMany
      ? _kAll
      : (widget.people.firstWhere((p) => !widget.picks[p.key]!.done, orElse: () => widget.people.first)).key;
  bool _expand = false;
  final _allergy = TextEditingController();

  @override
  void initState() {
    super.initState();
    if (_cur != _kAll) _allergy.text = widget.picks[_cur]!.allergies;
  }

  @override
  void dispose() {
    _allergy.dispose();
    super.dispose();
  }

  String _label(MenuPerson p) => p.isMe ? 'Tu' : _firstName(p.name);
  String _who(MenuPerson p) => p.isMe ? 'TEU' : 'DE ${_firstName(p.name).toUpperCase()}';

  void _select(String key) {
    setState(() {
      _cur = key;
      if (key != _kAll) _allergy.text = widget.picks[key]!.allergies;
    });
  }

  /// Depois de escolher o menu e as alergias, passa à pessoa seguinte que falta.
  void _maybeAdvance() {
    if (_cur == _kAll || !widget.picks[_cur]!.done) return;
    if (_menuPeople.length > _kMany) return;
    final next = widget.people.where((p) => !widget.picks[p.key]!.done).firstOrNull;
    if (next != null && next.key != _cur) _select(next.key);
  }

  @override
  Widget build(BuildContext context) {
    final picks = widget.picks;
    final all = _cur == _kAll;
    final p = all ? null : widget.people.firstWhere((x) => x.key == _cur);
    final pick = all ? null : picks[_cur]!;
    final chosen = _menuPeople.where((x) => picks[x.key]!.packageId != null).length;
    // O menu é obrigatório para quem pago; as alergias, para mim e para quem
    // vem comigo (dos outros, se as souber).
    final missing = widget.people.where((x) => !picks[x.key]!.done).firstOrNull;
    final String cta;
    if (missing == null) {
      cta = widget.last ? 'Guardar' : 'Continuar';
    } else if (missing.menu && picks[missing.key]!.packageId == null) {
      final left = _menuPeople.where((x) => picks[x.key]!.packageId == null).length;
      cta = left > 1
          ? 'Faltam $left menus'
          : missing.isMe
              ? 'Falta o teu menu'
              : 'Falta o menu de ${_firstName(missing.name)}';
    } else {
      cta = missing.isMe ? 'Faltam as tuas alergias' : 'Faltam as alergias de ${_firstName(missing.name)}';
    }
    final total = _menusTotal(_menuPeople, picks, widget.packages);
    final many = widget.people.length > 1;
    final anyMenu = _menuPeople.isNotEmpty;
    final title = !anyMenu
        ? (many ? 'As alergias' : 'As tuas alergias')
        : many
            ? 'Escolhe os menus'
            : 'Escolhe o teu menu';
    final chosenPkg = pick == null ? null : widget.packages.where((k) => k.id == pick.packageId).firstOrNull;
    // «Todos»: o menu que todos têm (se for o mesmo).
    final common = {for (final x in _menuPeople) picks[x.key]!.packageId};
    final allPkg = common.length == 1 ? common.first : null;
    final collapsed = widget.people.length > _kMany && !_expand;

    String pillFor(MenuPerson x) => [
          _label(x),
          if (x.key != _cur && picks[x.key]!.packageId != null)
            _shortMenu(widget.packages.firstWhere((k) => k.id == picks[x.key]!.packageId).name),
        ].join(' · ');

    return SingleChildScrollView(
      padding: EdgeInsets.fromLTRB(20, 20, 20, 20 + MediaQuery.viewInsetsOf(context).bottom),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        StepSheetHead(step: widget.step, title: title, subtitle: widget.subtitle),
        const SizedBox(height: 16),
        if (widget.paidForCount != null) ...[
          // «Nós pagamos por» também depois da reserva (pedido 2026-11-22).
          _Group([
            Container(
              constraints: const BoxConstraints(minHeight: 56),
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: Row(children: [
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                    const Text('Nós pagamos por', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    Text(
                      widget.paidForCount == 0
                          ? 'Ninguém · cada convite paga o seu'
                          : '${widget.paidForCount} ${widget.paidForCount == 1 ? 'pessoa' : 'pessoas'} · escolhes o menu delas',
                      style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                    ),
                  ]),
                ),
                SnappyTap(
                  onTap: () => Navigator.of(context).pop('paidFor'),
                  child: Container(
                    height: 36,
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    alignment: Alignment.center,
                    decoration: const ShapeDecoration(
                      shape: StadiumBorder(side: BorderSide(color: AppTheme.ink, width: 1.5)),
                    ),
                    child: const Text('Escolher', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                ),
              ]),
            ),
          ]),
          const SizedBox(height: 16),
        ],
        if (many) ...[
          const _Caps('PARA QUEM'),
          Wrap(spacing: 8, runSpacing: 8, children: [
            if (_menuPeople.length > 1) _Pill('Todos · ${_menuPeople.length}', on: all, onTap: () => _select(_kAll)),
            for (final x in widget.people)
              if (!collapsed || x.isMe || x.key == _cur) _Pill(pillFor(x), on: x.key == _cur, onTap: () => _select(x.key)),
            if (collapsed)
              _Pill('Por pessoa (${widget.people.length})', on: false, onTap: () => setState(() => _expand = true)),
          ]),
          if (p != null && p.ownerName != null && !p.isMe) ...[
            const SizedBox(height: 8),
            Text('Vem com ${_firstName(p.ownerName!)}${p.iPay && p.menu ? ' · pagas tu' : ''}',
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ],
          const SizedBox(height: 16),
        ],
        if (all) ...[
          _Caps('MENU PARA TODOS · ${_menuPeople.length}'),
          _Group([
            for (final k in widget.packages)
              _Row(
                title: k.name,
                meta: k.description,
                trailing: euros(k.price),
                on: allPkg == k.id,
                onTap: () => setState(() {
                  for (final x in _menuPeople) {
                    picks[x.key]!.packageId = k.id;
                  }
                }),
              ),
          ]),
          const SizedBox(height: 10),
          const Text(
            'O mesmo menu para todos. Muda o de alguém em «Por pessoa»; as alergias, cada convidado diz na app.',
            style: TextStyle(fontSize: 13, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 16),
        ] else if (p!.menu) ...[
          _Caps('MENU ${_who(p)}'),
          _Group([
            for (final k in widget.packages)
              _Row(
                title: k.name,
                meta: k.description,
                trailing: euros(k.price),
                on: pick!.packageId == k.id,
                onTap: () {
                  setState(() => pick.packageId = k.id);
                  _maybeAdvance();
                },
              ),
          ]),
          const SizedBox(height: 16),
        ] else if (pick!.canUpgrade) ...[
          // O menu paga-o outro, mas posso trocar por um do mesmo valor ou
          // mais caro e pagar a diferença (pedido 2026-11-22, migração 219).
          _Caps('MENU ${_who(p)}'),
          _Group([
            for (final k in widget.packages)
              Opacity(
                opacity: k.price < pick.basePrice! ? 0.4 : 1,
                child: _Row(
                  title: k.name,
                  meta: k.id == pick.savedPackageId && k.price == pick.basePrice
                      ? 'Escolhido por quem paga'
                      : k.price < pick.basePrice!
                          ? 'Mais barato: não dá para trocar'
                          : k.price > pick.basePrice!
                              ? '+ ${euros(k.price - pick.basePrice!)} · pagas tu'
                              : k.description,
                  trailing: euros(k.price),
                  on: pick.packageId == k.id,
                  onTap: () {
                    if (k.price < pick.basePrice!) return;
                    setState(() => pick.packageId = k.id);
                  },
                ),
              ),
          ]),
          const SizedBox(height: 10),
          Text(
            '${p.pays == 'organizers' ? 'Os anfitriões pagam' : 'Quem paga escolheu'} um menu de ${euros(pick.basePrice!)}. '
            'Podes trocar por um do mesmo valor ou mais caro: pagas tu a diferença.',
            style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 16),
        ] else ...[
          // A comida paga-a outro: quem paga escolhe o menu (pedido
          // 2026-11-22); aqui só as alergias (e, a seguir, os extras).
          _Caps('MENU ${_who(p)}'),
          _Group([
            Container(
              constraints: const BoxConstraints(minHeight: 56),
              padding: const EdgeInsets.symmetric(vertical: 10),
              alignment: Alignment.centerLeft,
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Text(chosenPkg?.name ?? 'Ainda por escolher',
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(
                  p.pays == 'organizers' ? 'Escolhem os anfitriões: são eles que pagam.' : 'Escolhe quem paga a comida.',
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                ),
              ]),
            ),
          ]),
          const SizedBox(height: 16),
        ],
        if (!all) ...[
          _Caps('ALERGIAS ${_who(p!)}'),
          Row(children: [
            Expanded(
              child: Container(
                height: 52,
                padding: const EdgeInsets.symmetric(horizontal: 18),
                alignment: Alignment.centerLeft,
                decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(26)),
                child: TextField(
                  controller: _allergy,
                  maxLength: 200,
                  textCapitalization: TextCapitalization.sentences,
                  style: const TextStyle(fontSize: 15, color: AppTheme.ink),
                  decoration: const InputDecoration(
                    isCollapsed: true,
                    border: InputBorder.none,
                    counterText: '',
                    hintText: 'Ex.: sem glúten, marisco',
                    hintStyle: TextStyle(fontSize: 15, color: AppTheme.inkMuted),
                  ),
                  onChanged: (v) => setState(() {
                    pick!.allergies = v;
                    if (v.trim().isNotEmpty) pick.none = false;
                  }),
                ),
              ),
            ),
            const SizedBox(width: 8),
            _Pill('Nenhuma', on: pick!.none, onTap: () {
              setState(() {
                pick.none = !pick.none;
                if (pick.none) {
                  pick.allergies = '';
                  _allergy.clear();
                }
              });
              _maybeAdvance();
            }),
          ]),
          const SizedBox(height: 16),
        ],
        Row(children: [
          Expanded(
            child: Text(
                !anyMenu
                    ? (_upgradeTotal(picks, widget.packages) > 0 ? 'Pagas a diferença' : 'Os menus escolhem-nos os anfitriões')
                    : many
                        ? '$chosen de ${_menuPeople.length} menus'
                        : 'O teu menu',
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ),
          if (total + _upgradeTotal(picks, widget.packages) > 0)
            Text(euros(total + _upgradeTotal(picks, widget.packages)),
                style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        const SizedBox(height: 16),
        _Btn(cta, onTap: missing == null ? () => Navigator.of(context).pop(true) : null),
        const SizedBox(height: 10),
        Text(
          widget.last
              ? 'Podes mudar até a escolha fechar.'
              : anyMenu
                  ? 'A seguir: os extras e depois pagar${_menuPeople.length > 1 ? ' tudo junto' : ''}.'
                  : 'A seguir: se quiseres, extras (pagas tu).',
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
        ),
      ]),
    );
  }
}

class _ExtrasStep extends StatefulWidget {
  final List<ServiceExtra> extras;
  final Set<String> picked;
  final double base;
  final (int, int) step;
  final String subtitle;

  /// Há menus meus para pagar a seguir (senão, sem extras, guarda).
  final bool payAfterMenus;
  const _ExtrasStep({
    required this.extras,
    required this.picked,
    required this.base,
    required this.step,
    required this.subtitle,
    required this.payAfterMenus,
  });

  @override
  State<_ExtrasStep> createState() => _ExtrasStepState();
}

class _ExtrasStepState extends State<_ExtrasStep> {
  late final Set<String> _on = {...widget.picked};

  @override
  Widget build(BuildContext context) {
    final add = widget.extras.where((e) => _on.contains(e.id)).fold<double>(0, (s, e) => s + e.price);
    final last = !widget.payAfterMenus && _on.isEmpty;
    final go = last ? 'Guardar' : 'Continuar · ${euros(widget.base + add)}';
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        StepSheetHead(
          step: widget.step,
          title: 'Queres juntar alguma coisa?',
          subtitle: widget.subtitle,
          onBack: () => Navigator.of(context).pop('back'),
        ),
        const SizedBox(height: 16),
        _Group([
          for (final e in widget.extras)
            _Row(
              title: e.name,
              meta: e.details.join(' · '),
              trailing: '+ ${euros(e.price)}',
              on: _on.contains(e.id),
              onTap: () => setState(() => _on.contains(e.id) ? _on.remove(e.id) : _on.add(e.id)),
            ),
        ]),
        const SizedBox(height: 16),
        Row(children: [
          Expanded(
            child: Text(
                widget.base <= 0
                    ? (_on.isEmpty ? 'Sem extras' : '${_on.length} ${_on.length == 1 ? 'extra' : 'extras'} · pagas tu')
                    : _on.isEmpty
                        ? 'Menus'
                        : 'Menus + ${_on.length} ${_on.length == 1 ? 'extra' : 'extras'}',
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ),
          Text(euros(widget.base + add), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        const SizedBox(height: 16),
        Row(children: [
          Expanded(child: _Btn('Sem extras', outlined: true, onTap: () => Navigator.of(context).pop(<String>{}))),
          const SizedBox(width: 8),
          Expanded(flex: 2, child: _Btn(go, onTap: () => Navigator.of(context).pop({..._on}))),
        ]),
        if (!last) ...[
          const SizedBox(height: 10),
          const Text('+ taxa de serviço no passo seguinte',
              textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ],
      ]),
    );
  }
}

/// «Por quem pagamos?» a partir do popup dos menus. Devolve as chaves
/// escolhidas, ou `null` se fechar.
Future<List<String>?> _editPaidFor(BuildContext context, String eventId, List<String> current) async {
  List<Map<String, dynamic>> people;
  try {
    final res = await supabase.rpc('event_people_for_paying', params: {'p_wedding_id': eventId});
    people = [
      for (final r in (res as List? ?? const []))
        if (r is Map && r['is_organizer'] != true) Map<String, dynamic>.from(r),
    ];
  } catch (_) {
    people = const [];
  }
  if (!context.mounted) return null;
  if (people.isEmpty) {
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Ainda não há convidados confirmados.')));
    return null;
  }
  final chosen = await showIslandSheet<Map<String, String>>(
    context: context,
    isScrollControlled: true,
    builder: (_) => PaidForSheet(
      people: people,
      initial: {
        for (final p in people)
          if (current.contains(p['key'])) p['key'] as String: '${p['name']}',
      },
    ),
  );
  return chosen?.keys.toList();
}
