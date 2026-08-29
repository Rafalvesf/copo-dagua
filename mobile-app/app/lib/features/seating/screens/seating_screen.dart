import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/seating/seating_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

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
      setState(() => _selectedIndex = null);
    } else if (isNextCell) {
      await notifier.saveNextTable(result.guestIds);
    } else if (existing != null) {
      await notifier.updateTableGuests(existing.id, result.guestIds);
    }
  }

  void _select(int index) => setState(() => _selectedIndex = index);

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(seatingControllerProvider);
    final guestsState = ref.watch(guestsControllerProvider);
    final wedding = ref.watch(weddingControllerProvider).wedding;

    final filled = state.nextIndex;
    final total = state.totalTables;

    return GradientScaffold(
      background: AppBackground.feed,
      body: total == 0 || wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 8,
                    bottomFadeHeight: 140,
                    child: ListView(
                      padding: EdgeInsets.zero,
                      children: [
                        PageHeader(
                          title: 'Lugares',
                          titleFontSize: 26,
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              SnappyTap.builder(
                                onTap: () =>
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(
                                        content: Text('Mais opções em breve.'),
                                      ),
                                    ),
                                builder: (context, hovered) => Container(
                                  width: 46,
                                  height: 46,
                                  alignment: Alignment.center,
                                  decoration: BoxDecoration(
                                    color: Colors.white,
                                    shape: BoxShape.circle,
                                    boxShadow: hovered
                                        ? AppTheme.cardShadowStrong
                                        : AppTheme.cardShadow,
                                  ),
                                  child: const Icon(
                                    Icons.more_horiz,
                                    color: AppTheme.ink,
                                  ),
                                ),
                              ),
                              const SizedBox(width: 8),
                              AddActionButton(
                                onTap: state.isFull
                                    ? () => ScaffoldMessenger.of(context)
                                          .showSnackBar(
                                            const SnackBar(
                                              content: Text(
                                                'Já criaste o número máximo de mesas.',
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
                            ],
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            20,
                            AppTheme.screenMargin,
                            140,
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              _StatsRow(
                                totalGuests: guestsState.guests.length,
                                estimatedGuests: wedding.estimatedGuests,
                                totalTables: total,
                                tables: state.tables,
                              ),
                              const SizedBox(height: 20),
                              _ViewToggle(
                                selected: _view,
                                onChanged: (v) => setState(() => _view = v),
                              ),
                              const SizedBox(height: 18),
                              if (_view == _PlanView.plan)
                                _PlanGrid(
                                  state: state,
                                  selectedIndex: _selectedIndex,
                                  onSelect: _select,
                                )
                              else
                                _TableListView(
                                  state: state,
                                  selectedIndex: _selectedIndex,
                                  onSelect: _select,
                                ),
                              const SizedBox(height: 18),
                              const _Legend(),
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
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingBottomNav(current: AppTab.wedding),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

class _StatsRow extends StatelessWidget {
  final int totalGuests;
  final int? estimatedGuests;
  final int totalTables;
  final List<SeatingTable> tables;

  const _StatsRow({
    required this.totalGuests,
    required this.estimatedGuests,
    required this.totalTables,
    required this.tables,
  });

  @override
  Widget build(BuildContext context) {
    final rectCount = tables.where((t) => t.rectangular).length;
    final roundCount = totalTables - rectCount;
    final seated = tables.fold<int>(0, (sum, t) => sum + t.guestIds.length);
    final capacity = totalTables * seatsPerTable;
    final available = (capacity - seated).clamp(0, capacity);
    final seatedPct = capacity == 0 ? 0.0 : (seated / capacity) * 100;
    final availablePct = capacity == 0 ? 0.0 : (available / capacity) * 100;

    return GridView.count(
      crossAxisCount: 2,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      mainAxisSpacing: 10,
      crossAxisSpacing: 10,
      childAspectRatio: 1.8,
      children: [
        _StatCard(
          icon: Icons.groups_outlined,
          label: 'Convidados',
          value: '$totalGuests',
          caption: estimatedGuests == null ? null : 'de $estimatedGuests',
        ),
        _StatCard(
          icon: Icons.event_seat_outlined,
          label: 'Mesas',
          value: '$totalTables',
          caption: '$roundCount redondas · $rectCount retangulares',
        ),
        _StatCard(
          icon: Icons.check_circle_outline,
          label: 'Atribuídos',
          value: '$seated',
          caption: '${seatedPct.toStringAsFixed(1)}%',
        ),
        _StatCard(
          icon: Icons.favorite_border,
          label: 'Disponíveis',
          value: '$available',
          caption: '${availablePct.toStringAsFixed(1)}%',
        ),
      ],
    );
  }
}

class _StatCard extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;
  final String? caption;

  const _StatCard({
    required this.icon,
    required this.label,
    required this.value,
    this.caption,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Row(
            children: [
              Icon(icon, size: 14, color: AppTheme.accentOliveDark),
              const SizedBox(width: 5),
              Flexible(
                child: Text(
                  label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.inkMuted,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            value,
            style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 18),
          ),
          if (caption != null)
            Text(
              caption!,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 10.5, color: AppTheme.inkMuted),
            ),
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
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Row(
        children: [
          Expanded(
            child: _ViewToggleTab(
              icon: Icons.grid_view_rounded,
              label: 'Planta',
              selected: selected == _PlanView.plan,
              onTap: () => onChanged(_PlanView.plan),
            ),
          ),
          Expanded(
            child: _ViewToggleTab(
              icon: Icons.list_rounded,
              label: 'Lista',
              selected: selected == _PlanView.list,
              onTap: () => onChanged(_PlanView.list),
            ),
          ),
        ],
      ),
    );
  }
}

class _ViewToggleTab extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _ViewToggleTab({
    required this.icon,
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(
          color: selected ? AppColors.green : Colors.transparent,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon,
              size: 16,
              color: selected ? AppTheme.accentOliveDark : AppTheme.inkMuted,
            ),
            const SizedBox(width: 6),
            Text(
              label,
              style: TextStyle(
                fontWeight: FontWeight.w700,
                fontSize: 13,
                color: selected ? AppTheme.accentOliveDark : AppTheme.inkMuted,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PlanGrid extends StatelessWidget {
  final SeatingState state;
  final int? selectedIndex;
  final ValueChanged<int> onSelect;

  const _PlanGrid({
    required this.state,
    required this.selectedIndex,
    required this.onSelect,
  });

  @override
  Widget build(BuildContext context) {
    final filled = state.nextIndex;
    final total = state.totalTables;

    return Container(
      padding: const EdgeInsets.fromLTRB(18, 22, 18, 18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          const Positioned(
            top: -6,
            left: -6,
            child: Opacity(
              opacity: 0.15,
              child: Icon(
                Icons.local_florist_outlined,
                size: 34,
                color: AppTheme.accentOliveDark,
              ),
            ),
          ),
          const Positioned(
            top: -6,
            right: -6,
            child: Opacity(
              opacity: 0.15,
              child: Icon(
                Icons.local_florist_outlined,
                size: 34,
                color: AppTheme.accentOliveDark,
              ),
            ),
          ),
          Column(
            children: [
              const _HonorTableStrip(),
              const SizedBox(height: 18),
              GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: total,
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                  mainAxisSpacing: 12,
                  crossAxisSpacing: 12,
                  childAspectRatio: 1,
                ),
                itemBuilder: (context, index) {
                  final isFilled = index < filled;
                  final isNext = index == filled;
                  final draft = isNext ? state.nextTable : null;
                  final table = isFilled ? state.tables[index] : draft;
                  return _TableCell(
                    number: index + 1,
                    state: isFilled
                        ? _CellState.filled
                        : isNext
                        ? _CellState.next
                        : _CellState.locked,
                    draftCount: draft?.guestIds.length,
                    selected: selectedIndex == index,
                    rectangular: table?.rectangular ?? false,
                    onTap: isFilled || isNext ? () => onSelect(index) : null,
                  );
                },
              ),
            ],
          ),
        ],
      ),
    );
  }
}

/// Faixa decorativa da mesa dos noivos/padrinhos — só visual, não faz
/// parte da sequência de mesas numeradas nem do modelo de dados.
class _HonorTableStrip extends StatelessWidget {
  const _HonorTableStrip();

  @override
  Widget build(BuildContext context) {
    return const Text(
      'Mesa de Honra',
      style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12.5),
    );
  }
}

class _TableListView extends StatelessWidget {
  final SeatingState state;
  final int? selectedIndex;
  final ValueChanged<int> onSelect;

  const _TableListView({
    required this.state,
    required this.selectedIndex,
    required this.onSelect,
  });

  @override
  Widget build(BuildContext context) {
    final filled = state.nextIndex;
    return Column(
      children: [
        for (var index = 0; index < state.totalTables; index++) ...[
          _TableListRow(
            index: index,
            isFilled: index < filled,
            isNext: index == filled,
            table: index < state.tables.length ? state.tables[index] : null,
            selected: selectedIndex == index,
            onTap: index < filled || index == filled
                ? () => onSelect(index)
                : null,
          ),
          if (index != state.totalTables - 1) const SizedBox(height: 8),
        ],
      ],
    );
  }
}

class _TableListRow extends StatelessWidget {
  final int index;
  final bool isFilled;
  final bool isNext;
  final SeatingTable? table;
  final bool selected;
  final VoidCallback? onTap;

  const _TableListRow({
    required this.index,
    required this.isFilled,
    required this.isNext,
    required this.table,
    required this.selected,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final count = table?.guestIds.length ?? 0;
    final content = Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: selected
            ? Border.all(color: AppTheme.accentOliveDark, width: 1.5)
            : null,
        boxShadow: AppTheme.cardShadow,
      ),
      child: Row(
        children: [
          Icon(
            isFilled
                ? Icons.check_circle
                : isNext
                ? Icons.add_circle_outline
                : Icons.lock_outline_rounded,
            size: 18,
            color: isFilled
                ? AppStatusColors.confirmed
                : isNext
                ? AppStatusColors.confirmed
                : AppTheme.inkMuted,
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              'Mesa ${index + 1}',
              style: const TextStyle(
                fontWeight: FontWeight.w700,
                fontSize: 13.5,
              ),
            ),
          ),
          Text(
            isFilled || isNext ? '$count/$seatsPerTable lugares' : 'Bloqueada',
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12),
          ),
        ],
      ),
    );
    if (onTap == null) return Opacity(opacity: 0.6, child: content);
    return SnappyTap(onTap: onTap, child: content);
  }
}

class _Legend extends StatelessWidget {
  const _Legend();

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 16,
      runSpacing: 8,
      children: const [
        _LegendItem(color: AppStatusColors.confirmed, label: 'Atribuída'),
        _LegendItem(color: AppColors.green, label: 'Disponível'),
        _LegendItem(color: AppStatusColors.pending, label: 'Em edição'),
        _LegendItem(color: AppTheme.inkMuted, label: 'Bloqueada'),
      ],
    );
  }
}

class _LegendItem extends StatelessWidget {
  final Color color;
  final String label;

  const _LegendItem({required this.color, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 9,
          height: 9,
          decoration: BoxDecoration(color: color, shape: BoxShape.circle),
        ),
        const SizedBox(width: 6),
        Text(
          label,
          style: const TextStyle(fontSize: 11.5, color: AppTheme.inkMuted),
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

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Expanded(
              child: Row(
                children: [
                  Text(
                    'Mesa ${index + 1}',
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                  const SizedBox(width: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 9,
                      vertical: 3,
                    ),
                    decoration: BoxDecoration(
                      color: AppColors.muted,
                      borderRadius: BorderRadius.circular(999),
                    ),
                    child: Text(
                      '${seated.length} lugares',
                      style: const TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w700,
                        color: AppTheme.inkMuted,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            SnappyTap.builder(
              onTap: onEdit,
              builder: (context, hovered) => Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: 12,
                  vertical: 8,
                ),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(999),
                  boxShadow: hovered
                      ? AppTheme.cardShadowStrong
                      : AppTheme.cardShadow,
                ),
                child: const Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.edit_outlined, size: 14, color: AppTheme.ink),
                    SizedBox(width: 5),
                    Text(
                      'Editar mesa',
                      style: TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: 12.5,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 12),
        if (seated.isEmpty)
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              boxShadow: AppTheme.cardShadow,
            ),
            child: const Text('Ainda sem convidados nesta mesa.'),
          )
        else
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: seated.length,
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,
              mainAxisSpacing: 8,
              crossAxisSpacing: 8,
              childAspectRatio: 3.4,
            ),
            itemBuilder: (context, i) => _SeatedGuestTile(guest: seated[i]),
          ),
      ],
    );
  }
}

class _SeatedGuestTile extends StatelessWidget {
  final Guest guest;

  const _SeatedGuestTile({required this.guest});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 15,
            backgroundColor: AppColors.gray,
            backgroundImage: NetworkImage(
              'https://api.dicebear.com/7.x/notionists/png?seed=${guest.id}',
            ),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  guest.name,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: 12,
                  ),
                ),
                if (guest.group.isNotEmpty)
                  Text(
                    guest.group,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      fontSize: 10.5,
                      color: AppTheme.inkMuted,
                    ),
                  ),
              ],
            ),
          ),
          const Icon(
            Icons.drag_indicator,
            size: 16,
            color: AppTheme.borderMuted,
          ),
        ],
      ),
    );
  }
}

enum _CellState { filled, next, locked }

const _seatingTableAsset = 'assets/images/seating_table_1.png';

/// Dessatura a ilustração para as mesas bloqueadas — mesma imagem que
/// as outras células, só a preto e branco, para ficar claramente
/// "por preencher" sem precisar de outra ilustração.
const _grayscaleMatrix = <double>[
  0.2126,
  0.7152,
  0.0722,
  0,
  0,
  0.2126,
  0.7152,
  0.0722,
  0,
  0,
  0.2126,
  0.7152,
  0.0722,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
];

/// Célula da matriz — representa uma mesa, nunca um lugar ou
/// convidado. Todas as células mostram a mesma ilustração da mesa
/// posta; o que muda é o selo no canto (✓ / + / cadeado) e, para as
/// bloqueadas, a imagem a preto e branco — `filled` é a única com
/// check; `next` é a única selecionável (a seguir à última mesa
/// preenchida); `locked` fica sem interação até lá chegar.
class _TableCell extends StatelessWidget {
  final int number;
  final _CellState state;
  final VoidCallback? onTap;
  // Nº de convidados já guardados no rascunho da mesa "próxima", se
  // já foi começada — mostra o progresso até [seatsPerTable] em vez do
  // número da mesa, para ficar claro que ainda falta completá-la.
  final int? draftCount;
  final bool selected;
  final bool rectangular;

  const _TableCell({
    required this.number,
    required this.state,
    this.onTap,
    this.draftCount,
    this.selected = false,
    this.rectangular = false,
  });

  @override
  Widget build(BuildContext context) {
    final isLocked = state == _CellState.locked;
    final isNext = state == _CellState.next;

    // A ilustração já vem com a base/ilha e sombra embutidas — sem
    // cartão nem sombra artificial à volta, só a imagem tal como está.
    final image = isLocked
        ? ColorFiltered(
            colorFilter: const ColorFilter.matrix(_grayscaleMatrix),
            child: Image.asset(_seatingTableAsset, fit: BoxFit.contain),
          )
        : Image.asset(_seatingTableAsset, fit: BoxFit.contain);

    final island = Opacity(
      opacity: isLocked ? 0.55 : 1,
      child: Container(
        decoration: selected
            ? BoxDecoration(
                color: AppColors.green,
                borderRadius: BorderRadius.circular(rectangular ? 14 : 999),
              )
            : null,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Expanded(
              child: Padding(padding: const EdgeInsets.all(2), child: image),
            ),
            const SizedBox(height: 2),
            Text(
              isNext && draftCount != null
                  ? '$draftCount/$seatsPerTable'
                  : 'M$number',
              style: TextStyle(
                fontSize: 9.5,
                fontWeight: FontWeight.w700,
                color: isLocked ? AppTheme.inkMuted : AppTheme.ink,
              ),
            ),
          ],
        ),
      ),
    );

    final content = Stack(
      clipBehavior: Clip.none,
      children: [
        island,
        Positioned(top: -4, right: -2, child: _StatusBadge(state: state)),
      ],
    );

    if (onTap == null) return content;
    return SnappyTap(onTap: onTap, child: content);
  }
}

/// Selo sobreposto no canto do cartão — comunica o estado da mesa sem
/// depender só da cor de fundo, para ficar legível mesmo em cima da
/// ilustração.
class _StatusBadge extends StatelessWidget {
  final _CellState state;

  const _StatusBadge({required this.state});

  @override
  Widget build(BuildContext context) {
    final (background, icon) = switch (state) {
      _CellState.filled => (AppStatusColors.confirmed, Icons.check_rounded),
      _CellState.next => (AppStatusColors.confirmed, Icons.add_rounded),
      _CellState.locked => (AppTheme.inkMuted, Icons.lock_outline_rounded),
    };
    return Container(
      width: 22,
      height: 22,
      decoration: BoxDecoration(
        color: background,
        shape: BoxShape.circle,
        border: Border.all(color: Colors.white, width: 2),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Icon(icon, size: 13, color: Colors.white),
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
            style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13),
          ),
          const SizedBox(height: 2),
          Text(
            widget.requireFull
                ? 'Esta mesa já está completa — mantém $seatsPerTable convidados para guardar.'
                : 'Só fica marcada como concluída ao chegar aos $seatsPerTable convidados. Podes guardar antes disso e continuar depois.',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
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
        borderRadius: BorderRadius.circular(16),
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
                    fontSize: 14,
                  ),
                ),
                if (disabled)
                  Text(
                    'Já sentado noutra mesa',
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
                  )
                else if (guest.group.isNotEmpty)
                  Text(
                    guest.group,
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
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
