import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/seating/seating_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/snappy_tap.dart';

enum _PlanView { plan, list }

/// "Lugares" — matriz de mesas em forma de tabuleiro de xadrez. Cada
/// célula é uma mesa, nunca um lugar físico ou um convidado individual;
/// só mostra se essa mesa já foi preenchida/configurada. As mesas têm
/// de ser preenchidas em sequência da esquerda para a direita — a única
/// mesa selecionável é sempre a que fica logo a seguir à última mesa
/// preenchida (ver [SeatingState.nextIndex]).
///
/// A grelha e a lógica de preenchimento sequencial (`_TableCell`,
/// `_openTable`, `_TableConfigSheet`) mantêm-se inalteradas — só o
/// resto do ecrã (cabeçalho, estatísticas, alternância Planta/Lista,
/// legenda e o cartão de detalhe da mesa selecionada) é novo.
class SeatingScreen extends ConsumerStatefulWidget {
  const SeatingScreen({super.key});

  @override
  ConsumerState<SeatingScreen> createState() => _SeatingScreenState();
}

class _SeatingScreenState extends ConsumerState<SeatingScreen> {
  _PlanView _view = _PlanView.plan;
  int? _selectedIndex;

  Future<void> _openTable(
    WidgetRef ref, {
    required int index,
    required bool isNextCell,
    SeatingTable? existing,
  }) async {
    final guests = ref.read(guestsControllerProvider).guests;
    final tables = ref.read(seatingControllerProvider).tables;
    final assignedElsewhere = <String>{
      for (final t in tables)
        if (t.id != existing?.id) ...t.guestIds,
    };

    final result = await showModalBottomSheet<_TableConfigResult>(
      context: context,
      isScrollControlled: true,
      builder: (sheetContext) => _TableConfigSheet(
        tableNumber: index + 1,
        guests: guests,
        initiallySelected: existing?.guestIds.toSet() ?? const {},
        assignedElsewhere: assignedElsewhere,
        canRemove: existing != null,
        // Mesas já completas têm de se manter completas ao editar, para
        // nunca abrir um "buraco" antes de outras mesas preenchidas. Só
        // a mesa "próxima" (ainda em preenchimento) aceita guardar
        // abaixo da capacidade, como rascunho.
        requireFull: !isNextCell,
      ),
    );
    if (result == null || !mounted) return;

    final notifier = ref.read(seatingControllerProvider.notifier);
    if (result.remove) {
      if (existing != null) await notifier.removeTable(existing.id);
      if (!mounted) return;
      setState(() => _selectedIndex = null);
    } else if (isNextCell) {
      await notifier.saveNextTable(result.guestIds);
    } else if (existing != null) {
      await notifier.updateTableGuests(existing.id, result.guestIds);
    }
  }

  void _select(int index) => setState(() => _selectedIndex = index);

  /// Senta [guest] na mesa [index] (arrastar e largar, ou tocar com uma
  /// mesa selecionada). As mesas enchem-se por ordem: só a mesa "próxima"
  /// recebe convidados; as completas estão cheias e as seguintes ainda
  /// bloqueadas.
  Future<void> _seat(Guest guest, int index) async {
    final state = ref.read(seatingControllerProvider);
    final messenger = ScaffoldMessenger.of(context);
    void say(String m) => messenger.showSnackBar(SnackBar(content: Text(m)));
    if (state.isFull) {
      say('Já não há mesas livres.');
      return;
    }
    final next = state.nextIndex;
    if (index < next) {
      say('A Mesa ${index + 1} está cheia.');
      return;
    }
    if (index > next) {
      say('Preenche primeiro a Mesa ${next + 1}.');
      return;
    }
    final draft = state.nextTable;
    final ids = [...?draft?.guestIds, guest.id];
    setState(() => _selectedIndex = next);
    await ref.read(seatingControllerProvider.notifier).saveNextTable(ids);
    if (!mounted) return;
    say('${guest.name.split(' ').first} já tem lugar na Mesa ${next + 1}.');
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(seatingControllerProvider);
    final guestsState = ref.watch(guestsControllerProvider);
    final wedding = ref.watch(weddingControllerProvider).wedding;

    final filled = state.nextIndex;
    final total = state.totalTables;
    final loading = state.loading || wedding == null;
    final seatedIds = {for (final t in state.tables) ...t.guestIds};
    final invited = guestsState.guests.where((g) => g.rsvpStatus != RsvpStatus.declined).toList();
    final unseated = invited.where((g) => !seatedIds.contains(g.id)).toList();
    final noTables = !loading && total == 0;

    return GradientScaffold(
      background: AppBackground.feed,
      body: loading
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 8,
                    bottomFadeHeight: 32,
                    child: ListView(
                      padding: EdgeInsets.zero,
                      children: [
                        PageHeader(
                          title: 'Lugares',
                          centered: true,
                          trailing: AddActionButton(
                            onTap: state.isFull
                                ? () => ScaffoldMessenger.of(context).showSnackBar(
                                    SnackBar(
                                      content: Text(
                                        !state.hasVenue
                                            ? 'Escolhe primeiro o local do casamento.'
                                            : total == 0
                                            ? 'O local ainda não configurou mesas disponíveis.'
                                            : 'Já criaste o número máximo de mesas.',
                                      ),
                                    ),
                                  )
                                : () => _openTable(
                                    ref,
                                    index: filled,
                                    isNextCell: true,
                                    existing: state.nextTable,
                                  ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            16,
                            AppTheme.screenMargin,
                            40,
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              _StatsHero(
                                totalGuests: invited.length,
                                seated: seatedIds.length,
                                totalTables: total,
                                hasVenue: state.hasVenue,
                              ),
                              const SizedBox(height: 20),
                              if (noTables)
                                _NoTablesCard(hasVenue: state.hasVenue)
                              else ...[
                                Row(
                                  children: [
                                    Expanded(
                                      child: _ViewToggle(
                                        selected: _view,
                                        onChanged: (v) => setState(() => _view = v),
                                      ),
                                    ),
                                    const SizedBox(width: 10),
                                    SnappyTap(
                                      onTap: () => _showMoreOptions(context),
                                      child: Container(
                                        width: 46,
                                        height: 46,
                                        alignment: Alignment.center,
                                        decoration: whiteLineCard(radius: 999),
                                        child: const Icon(
                                          Icons.more_horiz,
                                          color: AppTheme.ink,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 18),
                                if (_view == _PlanView.plan)
                                  _PlanGrid(
                                    state: state,
                                    selectedIndex: _selectedIndex,
                                    onSelect: _select,
                                    onDrop: (i, g) => _seat(g, i),
                                  )
                                else
                                  _TableListView(
                                    state: state,
                                    selectedIndex: _selectedIndex,
                                    onSelect: _select,
                                    onDrop: (i, g) => _seat(g, i),
                                  ),
                                if (_view == _PlanView.plan) ...[
                                  const SizedBox(height: 14),
                                  const _Legend(),
                                ],
                                if (state.venueTypes.isNotEmpty) _TableTypes(types: state.venueTypes),
                                _UnseatedStrip(
                                  guests: unseated,
                                  onTap: (g) => _seat(g, _selectedIndex ?? state.nextIndex),
                                ),
                                if (_selectedIndex != null) ...[
                                  const SizedBox(height: 22),
                                  _SelectedTableCard(
                                    index: _selectedIndex!,
                                    state: state,
                                    guests: guestsState.guests,
                                    onEdit: () {
                                      final index = _selectedIndex!;
                                      final isNext = index == state.nextIndex;
                                      final existing = index < state.tables.length
                                          ? state.tables[index]
                                          : null;
                                      _openTable(
                                        ref,
                                        index: index,
                                        isNextCell: isNext,
                                        existing: existing,
                                      );
                                    },
                                  ),
                                ],
                              ],
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
    );
  }
}

/// Canvas "Mesas — redesign": cartão verde "LUGARES SENTADOS".
class _StatsHero extends StatelessWidget {
  final int totalGuests;
  final int seated;
  final int totalTables;
  final bool hasVenue;

  const _StatsHero({
    required this.totalGuests,
    required this.seated,
    required this.totalTables,
    required this.hasVenue,
  });

  @override
  Widget build(BuildContext context) {
    final left = (totalGuests - seated) < 0 ? 0 : totalGuests - seated;
    return GreenHero(
      label: 'LUGARES SENTADOS',
      value: '$seated',
      suffix: 'de $totalGuests ${totalGuests == 1 ? 'convidado' : 'convidados'}',
      progress: totalGuests == 0 ? 0 : seated / totalGuests,
      doodles: const [Icons.table_restaurant_outlined, Icons.favorite_border, Icons.wine_bar_outlined],
      footer: Wrap(
        spacing: 8,
        runSpacing: 8,
        children: [
          HeroPill(hasVenue ? '$totalTables ${totalTables == 1 ? 'mesa' : 'mesas'}' : 'Sem espaço reservado', solid: true),
          HeroPill('$left por sentar'),
        ],
      ),
    );
  }
}

class _ViewToggle extends StatelessWidget {
  final _PlanView selected;
  final ValueChanged<_PlanView> onChanged;

  const _ViewToggle({required this.selected, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    Widget tab(String label, _PlanView v) {
      final on = selected == v;
      return Expanded(
        child: SnappyTap(
          onTap: () => onChanged(v),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            height: 38,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: on ? AppTheme.accentOliveDark : Colors.transparent,
              borderRadius: BorderRadius.circular(999),
            ),
            child: Text(label,
                style: TextStyle(
                  fontSize: AppFontSize.md,
                  fontWeight: FontWeight.w700,
                  color: on ? Colors.white : AppTheme.inkMuted,
                )),
          ),
        ),
      );
    }

    return Container(
      padding: const EdgeInsets.all(4),
      decoration: whiteLineCard(radius: 999),
      child: Row(children: [tab('Planta', _PlanView.plan), const SizedBox(width: 4), tab('Lista', _PlanView.list)]),
    );
  }
}

/// Estado de uma mesa na planta/lista.
enum _CellState { filled, next, locked }

/// Planta da sala: Mesa de Honra em cima, mesas desenhadas com os
/// lugares à volta (cheio = ocupado) e a pista de dança em baixo. Cada
/// mesa aceita convidados largados de "Por sentar".
class _PlanGrid extends StatelessWidget {
  final SeatingState state;
  final int? selectedIndex;
  final ValueChanged<int> onSelect;
  final void Function(int index, Guest guest) onDrop;

  const _PlanGrid({
    required this.state,
    required this.selectedIndex,
    required this.onSelect,
    required this.onDrop,
  });

  @override
  Widget build(BuildContext context) {
    final filled = state.nextIndex;
    final total = state.totalTables;
    final c = AppTheme.accentOliveDark;

    return Container(
      padding: const EdgeInsets.fromLTRB(14, 16, 14, 14),
      decoration: whiteLineCard(radius: 26),
      child: Column(
        children: [
          Container(
            width: 190,
            height: 30,
            alignment: Alignment.center,
            decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(10)),
            child: const Text('Mesa de Honra',
                style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: Colors.white)),
          ),
          const SizedBox(height: 16),
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: total,
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              mainAxisSpacing: 8,
              crossAxisSpacing: 8,
              childAspectRatio: 1,
            ),
            itemBuilder: (context, index) {
              final isFilled = index < filled;
              final isNext = index == filled;
              final table = index < state.tables.length ? state.tables[index] : null;
              final cellState = isFilled
                  ? _CellState.filled
                  : isNext
                      ? _CellState.next
                      : _CellState.locked;
              return DragTarget<Guest>(
                onWillAcceptWithDetails: (_) => cellState != _CellState.locked,
                onAcceptWithDetails: (d) => onDrop(index, d.data),
                builder: (context, candidates, _) => _TableCell(
                  number: index + 1,
                  state: cellState,
                  count: table?.guestIds.length ?? 0,
                  selected: selectedIndex == index,
                  hovering: candidates.isNotEmpty,
                  rectangular: table?.rectangular ?? false,
                  onTap: cellState == _CellState.locked ? null : () => onSelect(index),
                ),
              );
            },
          ),
          const SizedBox(height: 12),
          Container(
            width: 120,
            height: 24,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0xFF9DB098), width: 1.4),
            ),
            child: const Text('Pista de dança',
                style: TextStyle(fontSize: AppFontSize.xxs, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          ),
        ],
      ),
    );
  }
}

/// Mesa desenhada: redonda ou retangular, com os [seatsPerTable] lugares
/// à volta (cheios os ocupados), número e "n/8" ao centro.
class _TableCell extends StatelessWidget {
  final int number;
  final _CellState state;
  final int count;
  final bool selected;
  final bool hovering;
  final bool rectangular;
  final VoidCallback? onTap;

  const _TableCell({
    required this.number,
    required this.state,
    required this.count,
    this.selected = false,
    this.hovering = false,
    this.rectangular = false,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final locked = state == _CellState.locked;
    final full = state == _CellState.filled;
    final c = AppTheme.accentOliveDark;
    final fg = locked || count == 0 ? const Color(0xFF9DB098) : c;
    final fill = full ? c.withValues(alpha: 0.16) : Colors.white;

    final cell = AnimatedScale(
      scale: hovering ? 1.08 : 1,
      duration: const Duration(milliseconds: 160),
      child: Container(
        decoration: BoxDecoration(
          color: hovering ? c.withValues(alpha: 0.12) : Colors.transparent,
          borderRadius: BorderRadius.circular(rectangular ? 16 : 999),
          border: selected || hovering ? Border.all(color: c, width: 2) : null,
        ),
        child: Opacity(
          opacity: locked ? 0.55 : 1,
          child: CustomPaint(
            painter: _TablePainter(
              seats: seatsPerTable,
              taken: count,
              color: fg,
              fill: fill,
              rectangular: rectangular,
            ),
            child: Center(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  if (locked)
                    const Icon(Icons.lock_outline_rounded, size: 14, color: AppTheme.inkMuted)
                  else
                    Text('$number', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: fg)),
                  Text(locked ? 'M$number' : '$count/$seatsPerTable',
                      style: const TextStyle(fontSize: 9.5, color: AppTheme.inkMuted)),
                ],
              ),
            ),
          ),
        ),
      ),
    );
    if (onTap == null) return cell;
    return SnappyTap(onTap: onTap, child: cell);
  }
}

class _TablePainter extends CustomPainter {
  final int seats;
  final int taken;
  final Color color;
  final Color fill;
  final bool rectangular;

  _TablePainter({required this.seats, required this.taken, required this.color, required this.fill, required this.rectangular});

  @override
  void paint(Canvas canvas, Size size) {
    final c = size.center(Offset.zero);
    final r = size.shortestSide * 0.30;
    final stroke = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;
    final body = Paint()..color = fill;
    final dot = Paint()..color = color;
    final empty = Paint()..color = Colors.white;
    final points = <Offset>[];
    if (rectangular) {
      final rect = Rect.fromCenter(center: c, width: r * 2.6, height: r * 1.3);
      canvas.drawRRect(RRect.fromRectAndRadius(rect, const Radius.circular(8)), body);
      canvas.drawRRect(RRect.fromRectAndRadius(rect, const Radius.circular(8)), stroke);
      final per = (seats / 2).ceil();
      for (var k = 0; k < per; k++) {
        final x = rect.left + rect.width * (k + 0.5) / per;
        points.add(Offset(x, rect.top - 7));
      }
      for (var k = 0; k < seats - per; k++) {
        final x = rect.left + rect.width * (k + 0.5) / per;
        points.add(Offset(x, rect.bottom + 7));
      }
    } else {
      canvas.drawCircle(c, r, body);
      canvas.drawCircle(c, r, stroke);
      for (var k = 0; k < seats; k++) {
        final a = 2 * math.pi * k / seats - math.pi / 2;
        points.add(Offset(c.dx + (r + 8) * math.cos(a), c.dy + (r + 8) * math.sin(a)));
      }
    }
    for (var k = 0; k < points.length; k++) {
      canvas.drawCircle(points[k], 4.2, k < taken ? dot : empty);
      canvas.drawCircle(points[k], 4.2, stroke..strokeWidth = 1.2);
    }
  }

  @override
  bool shouldRepaint(covariant _TablePainter old) =>
      old.taken != taken || old.color != color || old.fill != fill || old.rectangular != rectangular || old.seats != seats;
}

class _TableListView extends StatelessWidget {
  final SeatingState state;
  final int? selectedIndex;
  final ValueChanged<int> onSelect;
  final void Function(int index, Guest guest) onDrop;

  const _TableListView({
    required this.state,
    required this.selectedIndex,
    required this.onSelect,
    required this.onDrop,
  });

  @override
  Widget build(BuildContext context) {
    final filled = state.nextIndex;
    final c = AppTheme.accentOliveDark;
    return Column(
      children: [
        Container(
          height: 48,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(18)),
          child: const Row(
            children: [
              Expanded(
                child: Text('Mesa de Honra',
                    style: TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: Colors.white)),
              ),
            ],
          ),
        ),
        const SizedBox(height: 10),
        for (var index = 0; index < state.totalTables; index++) ...[
          Builder(builder: (context) {
            final table = index < state.tables.length ? state.tables[index] : null;
            final count = table?.guestIds.length ?? 0;
            final locked = index > filled;
            return DragTarget<Guest>(
              onWillAcceptWithDetails: (_) => !locked,
              onAcceptWithDetails: (d) => onDrop(index, d.data),
              builder: (context, candidates, _) {
                final row = Container(
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                  decoration: whiteLineCard(
                    radius: 20,
                    line: selectedIndex == index || candidates.isNotEmpty ? c : null,
                    width: selectedIndex == index || candidates.isNotEmpty ? 2 : 1,
                  ),
                  child: Row(
                    children: [
                      Transform.rotate(
                        angle: StickerIcon.tilt(index) * 6.283,
                        child: Container(
                          width: 40,
                          height: 40,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(14),
                            boxShadow: StickerIcon.shadow,
                          ),
                          child: locked
                              ? const Icon(Icons.lock_outline_rounded, size: 18, color: AppTheme.inkMuted)
                              : Text('${index + 1}', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: c)),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Expanded(
                                  child: Text(
                                    'Mesa ${index + 1} · ${(table?.rectangular ?? false) ? 'Retangular' : 'Redonda'}',
                                    style: const TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700),
                                  ),
                                ),
                                Text(locked ? 'Bloqueada' : '$count de $seatsPerTable',
                                    style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                              ],
                            ),
                            const SizedBox(height: 6),
                            ClipRRect(
                              borderRadius: BorderRadius.circular(999),
                              child: LinearProgressIndicator(
                                value: count / seatsPerTable,
                                minHeight: 6,
                                backgroundColor: const Color(0xFFEEF2EC),
                                color: c,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                );
                if (locked) return Opacity(opacity: 0.6, child: row);
                return SnappyTap(onTap: () => onSelect(index), child: row);
              },
            );
          }),
          if (index != state.totalTables - 1) const SizedBox(height: 10),
        ],
      ],
    );
  }
}

class _Legend extends StatelessWidget {
  const _Legend();

  @override
  Widget build(BuildContext context) {
    final c = AppTheme.accentOliveDark;
    Widget item(String label, Color fill, Color border, {bool dashed = false}) => Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 10,
              height: 10,
              decoration: BoxDecoration(
                color: fill,
                shape: BoxShape.circle,
                border: Border.all(color: border, width: dashed ? 2 : 1.5),
              ),
            ),
            const SizedBox(width: 6),
            Text(label, style: const TextStyle(fontSize: AppFontSize.xs, color: AppTheme.inkMuted)),
          ],
        );
    return Wrap(
      spacing: 14,
      runSpacing: 8,
      children: [
        item('Completa', c.withValues(alpha: 0.16), c),
        item('Com lugares', Colors.white, c),
        item('Bloqueada', Colors.white, const Color(0xFF9DB098)),
        item('Selecionada', Colors.white, c, dashed: true),
      ],
    );
  }
}

/// Tipos de mesa que o espaço reservado definiu (no futuro, cada
/// empresa define os seus e aparecem aqui).
class _TableTypes extends StatelessWidget {
  final List<VenueTableType> types;
  const _TableTypes({required this.types});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SectionTitle('Tipos de mesa',
            trailing: Text('Definidos pelo espaço', style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted))),
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          clipBehavior: Clip.none,
          child: Row(
            children: [
              for (final (i, t) in types.indexed) ...[
                if (i > 0) const SizedBox(width: 10),
                Container(
                  height: 56,
                  padding: const EdgeInsets.fromLTRB(8, 0, 14, 0),
                  decoration: whiteLineCard(radius: 16),
                  child: Row(
                    children: [
                      StickerIcon(
                        switch (t.shape) {
                          'rectangular' => Icons.rectangle_outlined,
                          'square' => Icons.crop_square_rounded,
                          _ => Icons.circle_outlined,
                        },
                        size: 36,
                        turns: StickerIcon.tilt(i),
                      ),
                      const SizedBox(width: 10),
                      Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(t.label, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700)),
                          Text('${t.quantity} × ${t.seats} lugares',
                              style: const TextStyle(fontSize: AppFontSize.xs, color: AppTheme.inkMuted)),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ],
          ),
        ),
      ],
    );
  }
}

String _initialsOf(String name) {
  final parts = name.trim().split(RegExp(r'\s+')).where((w) => w.isNotEmpty).toList();
  if (parts.isEmpty) return '?';
  if (parts.length == 1) return parts.first[0].toUpperCase();
  return '${parts.first[0]}${parts.last[0]}'.toUpperCase();
}

class _GuestAvatar extends StatelessWidget {
  final String name;
  final double size;
  const _GuestAvatar({required this.name, this.size = 48});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      alignment: Alignment.center,
      decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle, boxShadow: StickerIcon.shadow),
      child: Text(_initialsOf(name),
          style: TextStyle(fontSize: size * 0.3, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
    );
  }
}

/// "Por sentar": convidados sem mesa. Arrastar para uma mesa senta-os;
/// tocar senta na mesa selecionada.
class _UnseatedStrip extends StatelessWidget {
  final List<Guest> guests;
  final ValueChanged<Guest> onTap;
  const _UnseatedStrip({required this.guests, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SectionTitle('Por sentar',
            trailing: Text(guests.isEmpty ? 'Todos sentados' : 'Arrasta para uma mesa',
                style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted))),
        if (guests.isNotEmpty)
          SizedBox(
            height: 82,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              clipBehavior: Clip.none,
              itemCount: guests.length,
              separatorBuilder: (_, __) => const SizedBox(width: 6),
              itemBuilder: (context, i) {
                final g = guests[i];
                final item = SizedBox(
                  width: 64,
                  child: Column(
                    children: [
                      _GuestAvatar(name: g.name),
                      const SizedBox(height: 6),
                      Text(g.name.split(' ').first,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontSize: AppFontSize.xs, color: AppTheme.ink)),
                    ],
                  ),
                );
                return LongPressDraggable<Guest>(
                  data: g,
                  delay: const Duration(milliseconds: 150),
                  hapticFeedbackOnStart: true,
                  feedback: Material(
                    color: Colors.transparent,
                    child: Transform.rotate(angle: -0.1, child: Transform.scale(scale: 1.12, child: _GuestAvatar(name: g.name, size: 52))),
                  ),
                  childWhenDragging: Opacity(opacity: 0.3, child: item),
                  child: Semantics(
                    button: true,
                    label: 'Sentar ${g.name}',
                    child: GestureDetector(onTap: () => onTap(g), child: item),
                  ),
                );
              },
            ),
          ),
      ],
    );
  }
}

class _SelectedTableCard extends StatelessWidget {
  final int index;
  final SeatingState state;
  final List<Guest> guests;
  final VoidCallback onEdit;

  const _SelectedTableCard({
    required this.index,
    required this.state,
    required this.guests,
    required this.onEdit,
  });

  @override
  Widget build(BuildContext context) {
    final table = index < state.tables.length ? state.tables[index] : null;
    final guestIds = table?.guestIds ?? const <String>[];
    final seated = [
      for (final id in guestIds) guests.where((g) => g.id == id).firstOrNull,
    ].whereType<Guest>().toList();
    final c = AppTheme.accentOliveDark;

    return Container(
      padding: const EdgeInsets.all(14),
      decoration: whiteLineCard(line: c, width: 2),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Mesa ${index + 1}', style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700)),
                    Text('${seated.length} de $seatsPerTable lugares',
                        style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                  ],
                ),
              ),
              SnappyTap(
                onTap: onEdit,
                child: Container(
                  height: 36,
                  padding: const EdgeInsets.symmetric(horizontal: 14),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
                  child: Text('Editar mesa', style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: c)),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          GridView.count(
            crossAxisCount: 2,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            mainAxisSpacing: 8,
            crossAxisSpacing: 8,
            childAspectRatio: 3.6,
            children: [
              for (final g in seated)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  decoration: whiteLineCard(radius: 14),
                  child: Row(
                    children: [
                      _GuestAvatar(name: g.name, size: 28),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(g.name,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700)),
                      ),
                    ],
                  ),
                ),
              if (seated.length < seatsPerTable)
                Container(
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: c, width: 1.5),
                  ),
                  child: Text('Larga aqui um convidado',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: AppFontSize.xs, fontWeight: FontWeight.w700, color: c)),
                ),
            ],
          ),
        ],
      ),
    );
  }
}
/// Mostrado em vez da planta/lista quando ainda não há nenhuma mesa real
/// disponível — ou porque o casal ainda não reservou o local
/// ([SeatingState.hasVenue] `false`), ou porque o reservou mas esse
/// local ainda não configurou nenhum tipo de mesa (`hasVenue` `true`,
/// [SeatingState.totalTables] em 0).
class _NoTablesCard extends StatelessWidget {
  final bool hasVenue;

  const _NoTablesCard({required this.hasVenue});

  @override
  Widget build(BuildContext context) {
    // Redesign 2026-10: sem caixa de fundo (pedido do utilizador: "remove
    // o fundo") — ilustração da mesa, título em Bold e, sem local
    // reservado, um atalho para procurar espaços.
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Column(
        children: [
          const TchinMascot(pose: MascotPose.sleep, width: 210),
          const SizedBox(height: 16),
          Text(
            hasVenue ? 'Mesas por configurar' : 'Ainda sem local reservado',
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: AppFontSize.h3,
              color: AppTheme.ink,
            ),
          ),
          const SizedBox(height: 8),
          ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 300),
            child: Text(
              hasVenue
                  ? 'O local que reservaste ainda não indicou as mesas disponíveis. Assim que o fizer, aparecem aqui.'
                  : 'Assim que reservares um espaço, o número real de mesas aparece aqui e podes começar a organizar os lugares.',
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: AppTheme.inkMuted,
                fontWeight: FontWeight.w300,
                fontSize: AppFontSize.base,
                height: 1.5,
              ),
            ),
          ),
          if (!hasVenue) ...[
            const SizedBox(height: 24),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () => context.go('/partners'),
                child: const Text('Procurar espaços'),
              ),
            ),
          ],
        ],
      ),
    );
  }
}

class _TableConfigResult {
  final List<String> guestIds;
  final bool remove;

  const _TableConfigResult.save(this.guestIds) : remove = false;
  const _TableConfigResult.remove() : guestIds = const [], remove = true;
}

class _TableConfigSheet extends StatefulWidget {
  final int tableNumber;
  final List<Guest> guests;
  final Set<String> initiallySelected;
  final Set<String> assignedElsewhere;
  final bool canRemove;
  // true para mesas já completas (✓): têm de se manter em
  // [seatsPerTable] convidados ao guardar, para nunca abrir um "buraco"
  // antes de outra mesa preenchida. false só para a mesa "próxima",
  // que aceita guardar como rascunho, abaixo da capacidade.
  final bool requireFull;

  const _TableConfigSheet({
    required this.tableNumber,
    required this.guests,
    required this.initiallySelected,
    required this.assignedElsewhere,
    required this.canRemove,
    required this.requireFull,
  });

  @override
  State<_TableConfigSheet> createState() => _TableConfigSheetState();
}

class _TableConfigSheetState extends State<_TableConfigSheet> {
  late final Set<String> _selected = {...widget.initiallySelected};

  bool get _canSave => widget.requireFull
      ? _selected.length == seatsPerTable
      : _selected.isNotEmpty;

  void _toggle(String guestId) {
    setState(() {
      if (_selected.contains(guestId)) {
        _selected.remove(guestId);
      } else if (_selected.length < seatsPerTable) {
        _selected.add(guestId);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  'Mesa ${widget.tableNumber}',
                  style: Theme.of(context).textTheme.titleLarge,
                ),
              ),
              if (widget.canRemove)
                TextButton(
                  onPressed: () => Navigator.of(
                    context,
                  ).pop(const _TableConfigResult.remove()),
                  child: const Text(
                    'Remover',
                    style: TextStyle(color: AppStatusColors.declined),
                  ),
                ),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            '${_selected.length}/$seatsPerTable convidados',
            style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.md),
          ),
          const SizedBox(height: 2),
          Text(
            widget.requireFull
                ? 'Esta mesa já está completa — mantém $seatsPerTable convidados para guardar.'
                : 'Só fica marcada como concluída ao chegar aos $seatsPerTable convidados. Podes guardar antes disso e continuar depois.',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.xs),
          ),
          const SizedBox(height: 12),
          ConstrainedBox(
            constraints: BoxConstraints(
              maxHeight: MediaQuery.of(context).size.height * 0.5,
            ),
            child: widget.guests.isEmpty
                ? const Padding(
                    padding: EdgeInsets.symmetric(vertical: 24),
                    child: Text('Sem convidados ainda.'),
                  )
                : ListView.builder(
                    shrinkWrap: true,
                    itemCount: widget.guests.length,
                    itemBuilder: (context, index) {
                      final guest = widget.guests[index];
                      final isSelected = _selected.contains(guest.id);
                      final isTaken = widget.assignedElsewhere.contains(
                        guest.id,
                      );
                      return _GuestPickRow(
                        guest: guest,
                        selected: isSelected,
                        disabled: isTaken,
                        onTap: isTaken ? null : () => _toggle(guest.id),
                      );
                    },
                  ),
          ),
          const SizedBox(height: 12),
          PrimaryButton(
            label: 'Guardar',
            onPressed: _canSave
                ? () => Navigator.of(
                    context,
                  ).pop(_TableConfigResult.save(_selected.toList()))
                : null,
          ),
        ],
      ),
    );
  }
}

class _GuestPickRow extends StatelessWidget {
  final Guest guest;
  final bool selected;
  final bool disabled;
  final VoidCallback? onTap;

  const _GuestPickRow({
    required this.guest,
    required this.selected,
    required this.disabled,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final content = Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: BoxDecoration(
        color: selected ? AppColors.green : Colors.white,
        borderRadius: BorderRadius.circular(AppRadius.md),
        border: Border.all(
          color: selected ? AppStatusColors.confirmed : AppTheme.borderMuted,
        ),
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 18,
            backgroundColor: AppColors.gray,
            backgroundImage: NetworkImage(
              'https://api.dicebear.com/7.x/notionists/png?seed=${guest.id}',
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  guest.name,
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: AppFontSize.base,
                  ),
                ),
                if (disabled)
                  Text(
                    'Já sentado noutra mesa',
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.xs),
                  )
                else if (guest.group.isNotEmpty)
                  Text(
                    guest.group,
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.xs),
                  ),
              ],
            ),
          ),
          Icon(
            selected ? Icons.check_circle : Icons.circle_outlined,
            color: selected ? AppStatusColors.confirmed : AppTheme.inkMuted,
          ),
        ],
      ),
    );

    return Opacity(
      opacity: disabled ? 0.45 : 1,
      child: onTap == null ? content : SnappyTap(onTap: onTap, child: content),
    );
  }
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}


/// "Mais opções" de Lugares — copiar a distribuição das mesas (para
/// enviar ao local/catering) e recomeçar a distribuição. Antes mostrava
/// "Mais opções em breve".
Future<void> _showMoreOptions(BuildContext context) async {
  final container = ProviderScope.containerOf(context);
  final tables = container.read(seatingControllerProvider).tables;
  final guests = {for (final g in container.read(guestsControllerProvider).guests) g.id: g};

  final action = await showModalBottomSheet<String>(
    context: context,
    backgroundColor: Colors.white,
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
    ),
    builder: (context) => SafeArea(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const SizedBox(height: 8),
          ListTile(
            leading: const Icon(Icons.copy_all_outlined),
            title: const Text('Copiar lista das mesas'),
            subtitle: const Text('Para enviar ao local ou ao catering.'),
            enabled: tables.isNotEmpty,
            onTap: () => Navigator.of(context).pop('copy'),
          ),
          ListTile(
            leading: const Icon(Icons.restart_alt, color: AppStatusColors.declined),
            title: const Text('Recomeçar distribuição', style: TextStyle(color: AppStatusColors.declined)),
            subtitle: const Text('Remove todas as mesas preenchidas.'),
            enabled: tables.isNotEmpty,
            onTap: () => Navigator.of(context).pop('reset'),
          ),
          const SizedBox(height: 8),
        ],
      ),
    ),
  );
  if (!context.mounted || action == null) return;

  if (action == 'copy') {
    final buf = StringBuffer();
    for (var i = 0; i < tables.length; i++) {
      final names = [
        for (final id in tables[i].guestIds)
          if (guests[id] != null) guests[id]!.name,
      ];
      buf.writeln('Mesa ${i + 1} (${names.length})');
      for (final n in names) {
        buf.writeln('  • $n');
      }
      buf.writeln();
    }
    await Clipboard.setData(ClipboardData(text: buf.toString().trim()));
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Lista das mesas copiada.')),
      );
    }
    return;
  }

  final confirmed = await showDialog<bool>(
    context: context,
    builder: (context) => AlertDialog(
      title: const Text('Recomeçar distribuição?'),
      content: const Text('Todas as mesas ficam vazias. Os convidados não são apagados.'),
      actions: [
        TextButton(onPressed: () => Navigator.of(context).pop(false), child: const Text('Cancelar')),
        FilledButton(onPressed: () => Navigator.of(context).pop(true), child: const Text('Recomeçar')),
      ],
    ),
  );
  if (confirmed != true) return;
  final controller = container.read(seatingControllerProvider.notifier);
  try {
    for (final t in List.of(tables.reversed)) {
      await controller.removeTable(t.id);
    }
  } catch (_) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível recomeçar. Tenta outra vez.')),
      );
    }
  }
}
