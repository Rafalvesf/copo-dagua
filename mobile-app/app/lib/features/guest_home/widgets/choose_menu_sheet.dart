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

/// «Escolher e pagar» do «Para fazer» do convidado (pedido do Rafael,
/// 2026-11-22; mockups «Reservar por categoria» · Restaurante): popups por
/// cima da página, nunca uma página à parte — «Escolhe o teu menu» →
/// «Queres juntar alguma coisa?» (só se o menu tiver extras) → «A tua
/// parte» (o pagamento). O voltar de cada passo regressa ao anterior.
Future<void> chooseMenuAndPay(BuildContext context, WidgetRef ref, String weddingId, EventTable t) async {
  List<ServicePackage> packages;
  List<ServiceExtra> extras;
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
  if (!context.mounted) return;
  if (packages.isEmpty) {
    context.push('/mesa/$weddingId', extra: t);
    return;
  }
  String? pkgId = t.myChoice?['package_id'] as String?;
  final picked = <String>{
    for (final e in (t.myChoice?['extras_snapshot'] as List? ?? const []))
      if (e is Map && e['id'] is String) e['id'] as String,
  };
  final allergies = t.myChoice?['allergies'] as String?;
  final deadline = t.choiceDeadline;
  final sub = [t.partnerName, if (deadline != null) 'escolhe até ${shortDate(deadline)}'].join(' · ');
  var stage = 0; // 0 menu · 1 extras · 2 pagar
  while (context.mounted) {
    final pkg = packages.where((p) => p.id == pkgId).firstOrNull;
    final pkgExtras = pkg == null ? const <ServiceExtra>[] : extras.where((e) => e.appliesTo(pkg.id)).toList();
    final total = (pkgExtras.isEmpty ? 1 : 2) + (t.eachPays ? 1 : 0);
    if (stage == 0 || pkg == null) {
      final r = await showIslandSheet<String>(
        confirmExit: t.eachPays,
        context: context,
        isScrollControlled: true,
        builder: (_) => _MenuStep(
          packages: packages,
          selected: pkgId,
          step: (1, total),
          subtitle: sub,
          note: t.eachPays
              ? 'Pagas a tua parte na app. Podes mudar até a escolha fechar.'
              : 'Pagam os organizadores. Podes mudar até a escolha fechar.',
        ),
      );
      if (r == null) return;
      pkgId = r;
      picked.removeWhere((id) => !extras.any((e) => e.id == id && e.appliesTo(r)));
      stage = 1;
      continue;
    }
    if (stage == 1 && pkgExtras.isNotEmpty) {
      final r = await showIslandSheet<Object>(
        confirmExit: t.eachPays,
        context: context,
        isScrollControlled: true,
        builder: (_) => _ExtrasStep(
          extras: pkgExtras,
          picked: picked,
          base: pkg.price,
          step: (2, total),
          subtitle: sub,
          last: !t.eachPays,
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
    // Guardar a escolha e pagar.
    ({String? paymentId, double amount}) res;
    try {
      res = await chooseMyMenu(bookingId: t.bookingId, packageId: pkg.id, extraIds: picked.toList(), allergies: allergies);
    } on PostgrestException catch (e) {
      if (context.mounted) {
        final msg = e.message.contains('closed')
            ? 'A escolha já fechou.'
            : e.message.contains('already_paid')
                ? 'Já pagaste a tua parte: não dá para mudar.'
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
    ref.invalidate(myEventTablesProvider(weddingId));
    if (!context.mounted) return;
    final paymentId = res.paymentId;
    if (paymentId == null) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Escolha guardada.')));
      return;
    }
    final pct = await guestShareFeePct(ref, t.partnerId,
        (t.totalAmount ?? 0) - ((t.myChoice?['amount'] as num?)?.toDouble() ?? 0) + res.amount, res.amount);
    if (!context.mounted) return;
    final back = await context.push<Object?>('/pay', extra: PayArgs(
      paymentId: paymentId,
      partnerName: t.partnerName,
      kind: 'guest_share',
      amount: amountWithCommission(res.amount, pct),
      baseAmount: res.amount,
      step: (total, total),
    ));
    ref.invalidate(myEventTablesProvider(weddingId));
    if (back != 'back') return;
    stage = pkgExtras.isEmpty ? 0 : 1;
  }
}

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
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: outlined ? AppTheme.ink : Colors.white)),
          ),
        ),
      );
}

class _MenuStep extends StatefulWidget {
  final List<ServicePackage> packages;
  final String? selected;
  final (int, int) step;
  final String subtitle;
  final String note;
  const _MenuStep({required this.packages, this.selected, required this.step, required this.subtitle, required this.note});

  @override
  State<_MenuStep> createState() => _MenuStepState();
}

class _MenuStepState extends State<_MenuStep> {
  late String? _id = widget.selected;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        StepSheetHead(step: widget.step, title: 'Escolhe o teu menu', subtitle: widget.subtitle),
        const SizedBox(height: 16),
        _Group([
          for (final p in widget.packages)
            _Row(
              title: p.name,
              meta: p.description,
              trailing: euros(p.price),
              on: p.id == _id,
              onTap: () => setState(() => _id = p.id),
            ),
        ]),
        const SizedBox(height: 16),
        Text(widget.note, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        const SizedBox(height: 20),
        _Btn(_id == null ? 'Escolhe um menu' : 'Continuar',
            onTap: _id == null ? null : () => Navigator.of(context).pop(_id)),
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

  /// Sem pagamento a seguir (pagam os organizadores): o botão guarda.
  final bool last;
  const _ExtrasStep({
    required this.extras,
    required this.picked,
    required this.base,
    required this.step,
    required this.subtitle,
    required this.last,
  });

  @override
  State<_ExtrasStep> createState() => _ExtrasStepState();
}

class _ExtrasStepState extends State<_ExtrasStep> {
  late final Set<String> _on = {...widget.picked};

  @override
  Widget build(BuildContext context) {
    final add = widget.extras.where((e) => _on.contains(e.id)).fold<double>(0, (s, e) => s + e.price);
    final go = widget.last ? 'Guardar escolha' : 'Continuar';
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
          const Expanded(child: Text('Menu + extras', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
          Text(euros(widget.base + add), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        if (!widget.last)
          const Align(
            alignment: Alignment.centerRight,
            child: Text('+ taxa de serviço no passo seguinte', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ),
        const SizedBox(height: 20),
        Row(children: [
          Expanded(child: _Btn('Sem extras', outlined: true, onTap: () => Navigator.of(context).pop(<String>{}))),
          const SizedBox(width: 8),
          Expanded(flex: 2, child: _Btn(go, onTap: () => Navigator.of(context).pop({..._on}))),
        ]),
      ]),
    );
  }
}
