import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/seating/seating_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

/// "Lugares" — matriz de mesas em forma de tabuleiro de xadrez. Cada
/// célula é uma mesa, nunca um lugar físico ou um convidado individual;
/// só mostra se essa mesa já foi preenchida/configurada. As mesas têm
/// de ser preenchidas em sequência da esquerda para a direita — a única
/// mesa selecionável é sempre a que fica logo a seguir à última mesa
/// preenchida (ver [SeatingState.nextIndex]).
class SeatingScreen extends ConsumerWidget {
  const SeatingScreen({super.key});

  Future<void> _openTable(
    BuildContext context,
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
    if (result == null || !context.mounted) return;

    final notifier = ref.read(seatingControllerProvider.notifier);
    if (result.remove) {
      if (existing != null) await notifier.removeTable(existing.id);
    } else if (isNextCell) {
      await notifier.saveNextTable(result.guestIds);
    } else if (existing != null) {
      await notifier.updateTableGuests(existing.id, result.guestIds);
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(seatingControllerProvider);
    // Garante que a lista de convidados está pronta para o seletor
    // assim que se abre uma mesa.
    ref.watch(guestsControllerProvider);

    final filled = state.nextIndex;
    final total = state.totalTables;
    final progress = total == 0
        ? 0.0
        : (filled / total).clamp(0.0, 1.0).toDouble();

    return Scaffold(
      body: total == 0
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: Column(
                    children: [
                      const Padding(
                        padding: EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          20,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: Row(children: [CircleBackButton()]),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          16,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: _SeatingProgressCard(
                          filled: filled,
                          total: total,
                          progress: progress,
                        ),
                      ),
                      Expanded(
                        child: EdgeFade(
                          topFadeHeight: 32,
                          bottomFadeHeight: 140,
                          child: ListView(
                            padding: const EdgeInsets.fromLTRB(
                              AppTheme.screenMargin,
                              24,
                              AppTheme.screenMargin,
                              140,
                            ),
                            children: [
                              GridView.builder(
                                shrinkWrap: true,
                                physics: const NeverScrollableScrollPhysics(),
                                itemCount: total,
                                gridDelegate:
                                    const SliverGridDelegateWithFixedCrossAxisCount(
                                      crossAxisCount: 3,
                                      mainAxisSpacing: 12,
                                      crossAxisSpacing: 12,
                                      childAspectRatio: 1,
                                    ),
                                itemBuilder: (context, index) {
                                  final isFilled = index < filled;
                                  final isNext = index == filled;
                                  final draft = isNext
                                      ? state.nextTable
                                      : null;
                                  final table = isFilled
                                      ? state.tables[index]
                                      : draft;
                                  return _TableCell(
                                    number: index + 1,
                                    state: isFilled
                                        ? _CellState.filled
                                        : isNext
                                        ? _CellState.next
                                        : _CellState.locked,
                                    draftCount: draft?.guestIds.length,
                                    onTap: isFilled
                                        ? () => _openTable(
                                            context,
                                            ref,
                                            index: index,
                                            isNextCell: false,
                                            existing: table,
                                          )
                                        : isNext
                                        ? () => _openTable(
                                            context,
                                            ref,
                                            index: index,
                                            isNextCell: true,
                                            existing: table,
                                          )
                                        : null,
                                  );
                                },
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const Positioned(
                  left: AppTheme.screenMargin,
                  right: AppTheme.screenMargin,
                  bottom: 24,
                  child: FloatingBottomNav(current: AppTab.seating),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

class _SeatingProgressCard extends StatelessWidget {
  final int filled;
  final int total;
  final double progress;

  const _SeatingProgressCard({
    required this.filled,
    required this.total,
    required this.progress,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18),
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
              const Text(
                'Mesas preenchidas',
                style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14),
              ),
              const Spacer(),
              Text(
                '$filled/$total',
                style: const TextStyle(
                  fontWeight: FontWeight.w800,
                  fontSize: 14,
                  color: AppTheme.ink,
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          ClipRRect(
            borderRadius: BorderRadius.circular(999),
            child: LinearProgressIndicator(
              value: progress,
              minHeight: 8,
              backgroundColor: AppColors.muted,
              valueColor: const AlwaysStoppedAnimation(AppColors.green),
            ),
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
  0.2126, 0.7152, 0.0722, 0, 0,
  0.2126, 0.7152, 0.0722, 0, 0,
  0.2126, 0.7152, 0.0722, 0, 0,
  0, 0, 0, 1, 0,
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

  const _TableCell({
    required this.number,
    required this.state,
    this.onTap,
    this.draftCount,
  });

  @override
  Widget build(BuildContext context) {
    final isLocked = state == _CellState.locked;
    final isNext = state == _CellState.next;

    final image = Image.asset(_seatingTableAsset, fit: BoxFit.contain);

    // Sem cartão nem cor de fundo à volta — só a ilustração a "flutuar"
    // com uma sombra elíptica desfocada por baixo, como se cada mesa
    // fosse uma ilha, em vez de um retângulo preso à grelha.
    final island = Opacity(
      opacity: isLocked ? 0.55 : 1,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Expanded(
            child: Stack(
              alignment: Alignment.center,
              children: [
                Positioned(
                  bottom: 2,
                  child: Container(
                    width: 34,
                    height: 8,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(999),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.3),
                          blurRadius: 9,
                          spreadRadius: 2,
                        ),
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(2),
                  child: isLocked
                      ? ColorFiltered(
                          colorFilter: const ColorFilter.matrix(
                            _grayscaleMatrix,
                          ),
                          child: image,
                        )
                      : image,
                ),
              ],
            ),
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
            style: const TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: 13,
            ),
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
          color: selected
              ? AppStatusColors.confirmed
              : const Color(0xFFE3E4E7),
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
