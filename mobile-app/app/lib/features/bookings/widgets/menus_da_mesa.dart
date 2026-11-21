import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/event_tables.dart';
import '../../../core/models/models.dart' show CoupleBooking;
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/widgets/island_sheet.dart';

/// «Menus da mesa» (migração 211, mockups «Reservar por categoria»,
/// 2026-11-21): numa mesa em que cada convite escolhe os seus menus, o
/// organizador vê quantos já escolheram, por convite, e o total previsto.
/// Nunca escolhe pelos outros: pode lembrar quem falta e escolher o seu.

String _day(DateTime d) {
  const m = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  return '${d.day} ${m[d.month - 1]}';
}

String _meta(BookingMenus m) => [
      '${m.chosen} de ${m.people}',
      if (m.deadline != null) 'fecha a ${_day(m.deadline!)}',
    ].join(' · ');

/// Linha em Reservas: «Menus da mesa · 14 de 22 · fecha a 9 jun · Ver».
class MenusDaMesaLine extends ConsumerWidget {
  final CoupleBooking booking;
  const MenusDaMesaLine({super.key, required this.booking});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final m = ref.watch(bookingMenusProvider(booking.id)).value;
    if (m == null) return const SizedBox.shrink();
    final done = m.people > 0 && m.chosen >= m.people;
    final tone = toneForDue(m.deadline);
    final row = Row(children: [
      if (!done) ...[AlertDot(tone), const SizedBox(width: 10)],
      Expanded(
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Text('Menus da mesa', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          Text(done ? 'Todos escolhidos · ${m.people}' : _meta(m),
              style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
        ]),
      ),
      const SizedBox(width: 10),
      SizedBox(
        height: 36,
        child: FilledButton(
          onPressed: () => showMenusDaMesa(context, booking),
          style: FilledButton.styleFrom(
            backgroundColor: AppTheme.ink,
            foregroundColor: Colors.white,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            shape: const StadiumBorder(),
            textStyle: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700),
          ),
          child: const Text('Ver'),
        ),
      ),
    ]);
    return Padding(
      padding: const EdgeInsets.only(top: 12),
      child: done
          ? row
          : AlertOutline(tone: tone, radius: 22, padding: const EdgeInsets.fromLTRB(16, 12, 12, 12), child: row),
    );
  }
}

Future<void> showMenusDaMesa(BuildContext context, CoupleBooking booking) => showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      // Só se vê: não há nada preenchido para perder.
      confirmExit: false,
      builder: (_) => _MenusDaMesaSheet(booking: booking),
    );

class _MenusDaMesaSheet extends ConsumerStatefulWidget {
  final CoupleBooking booking;
  const _MenusDaMesaSheet({required this.booking});

  @override
  ConsumerState<_MenusDaMesaSheet> createState() => _MenusDaMesaSheetState();
}

class _MenusDaMesaSheetState extends ConsumerState<_MenusDaMesaSheet> {
  bool _reminding = false;
  bool _opening = false;

  Future<void> _remind() async {
    setState(() => _reminding = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      final n = await remindMenuChoices(widget.booking.id);
      messenger.showSnackBar(SnackBar(
        content: Text(n == 0
            ? 'Não há ninguém para lembrar com a app.'
            : n == 1
                ? 'Lembrámos 1 convite.'
                : 'Lembrámos $n convites.'),
      ));
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível lembrar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _reminding = false);
    }
  }

  Future<void> _myMenu() async {
    setState(() => _opening = true);
    final b = widget.booking;
    try {
      final tables = await ref.read(myEventTablesProvider(b.weddingId).future);
      final t = tables.where((x) => x.bookingId == b.id).firstOrNull;
      if (!mounted) return;
      if (t == null) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('A escolha ainda não está aberta.')));
        return;
      }
      final router = GoRouter.of(context);
      Navigator.of(context).pop();
      await router.push('/mesa/${b.weddingId}', extra: t);
      ref.invalidate(bookingMenusProvider(b.id));
    } finally {
      if (mounted) setState(() => _opening = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final b = widget.booking;
    final m = ref.watch(bookingMenusProvider(b.id)).value;
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Menus da mesa', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 4),
              Text(b.partnerName, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 12),
          const IslandCloseButton(),
        ]),
        const SizedBox(height: 16),
        if (m == null)
          const Padding(padding: EdgeInsets.all(24), child: Center(child: CircularProgressIndicator()))
        else ...[
          ClipRRect(
            borderRadius: BorderRadius.circular(5),
            child: LinearProgressIndicator(
              value: m.people <= 0 ? 0 : (m.chosen / m.people).clamp(0.0, 1.0),
              minHeight: 10,
              backgroundColor: const Color(0xFFECE7DC),
              color: AppTheme.accentOliveDark,
            ),
          ),
          const SizedBox(height: 6),
          Text('${m.chosen} de ${m.people} menus escolhidos${m.deadline != null ? ' · fecha a ${_day(m.deadline!)}' : ''}',
              style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
          const SizedBox(height: 16),
          Flexible(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
              decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
              child: ListView(shrinkWrap: true, padding: EdgeInsets.zero, children: [
                for (final (i, inv) in m.invites.indexed) _row(inv, i == 0),
                Container(
                  decoration: const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFFECE7DC)))),
                  constraints: const BoxConstraints(minHeight: 52),
                  child: Row(children: [
                    const Expanded(
                      child: Text('Total previsto', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    Text(euros(m.total), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ]),
                ),
              ]),
            ),
          ),
          const SizedBox(height: 10),
          const Text(
            'Não escolhes por ninguém: cada convite escolhe os seus. Podes lembrar quem ainda não escolheu.',
            style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted, height: 1.35),
          ),
          const SizedBox(height: 16),
          Row(children: [
            Expanded(
              child: OutlinedButton(
                onPressed: _reminding || m.chosen >= m.people ? null : _remind,
                style: OutlinedButton.styleFrom(
                  minimumSize: const Size.fromHeight(52),
                  foregroundColor: AppTheme.ink,
                  side: const BorderSide(color: AppTheme.ink, width: 1.5),
                  shape: const StadiumBorder(),
                  textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
                ),
                child: Text(_reminding ? 'A lembrar…' : 'Lembrar'),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: FilledButton(
                onPressed: _opening ? null : _myMenu,
                style: FilledButton.styleFrom(
                  minimumSize: const Size.fromHeight(52),
                  backgroundColor: AppTheme.ink,
                  foregroundColor: Colors.white,
                  shape: const StadiumBorder(),
                  textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
                ),
                child: const Text('O meu menu'),
              ),
            ),
          ]),
        ],
      ]),
    );
  }

  Widget _row(MenuInvite inv, bool first) {
    final who = [inv.mine ? 'Tu' : inv.name, if (inv.others != null && inv.others!.isNotEmpty) inv.others!].join(', ');
    final status = inv.done
        ? 'Escolhido'
        : inv.chosen > 0
            ? '${inv.chosen} de ${inv.people}'
            : inv.hasApp
                ? 'Por escolher'
                : 'Sem a app';
    return Container(
      constraints: const BoxConstraints(minHeight: 52),
      decoration: BoxDecoration(border: first ? null : const Border(top: BorderSide(color: Color(0xFFECE7DC)))),
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(children: [
        Expanded(
          child: Text('$who · ${inv.people}',
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.ink)),
        ),
        const SizedBox(width: 10),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
          decoration: BoxDecoration(
            color: inv.done ? const Color(0xFFE6EDE1) : Colors.white,
            borderRadius: BorderRadius.circular(999),
          ),
          child: Text(status,
              style: TextStyle(
                  fontSize: 12, fontWeight: FontWeight.w700, color: inv.done ? const Color(0xFF3F7A4F) : const Color(0xFF3A3733))),
        ),
      ]),
    );
  }
}
