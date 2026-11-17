import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/guest_facing.dart';

/// Secção "Programa" do painel do evento (por baixo de "Esta semana").
///
/// O dia ao minuto: etapas com um parceiro ou à mão (ex.: "Passeio no
/// parque"). Dá para editar nome/data/hora, remover e **arrastar para
/// reordenar**. É guardado em `events.program` (via `saveGuestFacingInfo`),
/// o mesmo sítio que o convidado vê na página do convite.
///
/// Nota: o programa vive aqui, no painel — saiu da "Página dos convidados".
class EventProgramSection extends ConsumerStatefulWidget {
  final String weddingId;
  const EventProgramSection({super.key, required this.weddingId});

  @override
  ConsumerState<EventProgramSection> createState() => _EventProgramSectionState();
}

class _EventProgramSectionState extends ConsumerState<EventProgramSection> {
  GuestFacingInfo? _info;
  List<ProgramItem> _items = [];
  bool _loading = true;

  // Verde da marca (DESIGN.md §1). Literal porque AppTheme.accentOliveDark
  // é temável (não const).
  static const _green = Color(0xFF4F6B4A);
  static const _shadow = [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))];
  // Altura fixa de cada linha. É o que torna a lista determinística: com uma
  // altura total conhecida (linhas × _rowHeight) a ReorderableListView vive
  // numa caixa limitada e deixa de medir mal / sobrepor as linhas.
  static const _rowHeight = 64.0;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final info = await loadGuestFacingInfo(widget.weddingId);
      if (!mounted) return;
      setState(() {
        _info = info;
        _items = List.of(info.program);
        _loading = false;
      });
    } catch (_) {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _persist() async {
    final info = _info;
    if (info == null) return;
    final next = GuestFacingInfo(
      joinMode: info.joinMode,
      ceremonyTime: info.ceremonyTime,
      welcomeMessage: info.welcomeMessage,
      giftListUrl: info.giftListUrl,
      giftIban: info.giftIban,
      giftMessage: info.giftMessage,
      giftsAvailable: info.giftsAvailable,
      program: _items,
      dressCode: info.dressCode,
      venueAddress: info.venueAddress,
      themeColors: info.themeColors,
      venueLatitude: info.venueLatitude,
      venueLongitude: info.venueLongitude,
      programAvailable: info.programAvailable,
      coordsAvailable: info.coordsAvailable,
    );
    try {
      await saveGuestFacingInfo(widget.weddingId, next);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não deu para guardar o programa. Tenta de novo.')),
        );
      }
    }
  }

  void _reorder(int oldIndex, int newIndex) {
    setState(() {
      if (newIndex > oldIndex) newIndex -= 1;
      final it = _items.removeAt(oldIndex);
      _items.insert(newIndex, it);
    });
    _persist();
  }

  Future<void> _add() async {
    final withPartner = await showModalBottomSheet<bool>(
      context: context,
      backgroundColor: Colors.transparent,
      builder: (_) => const _AddChooser(),
    );
    if (withPartner == null || !mounted) return;

    // Com um parceiro: leva à página dos parceiros para explorar e escolher
    // lá um (pedido do Rafael, 2026-11-17), em vez de um seletor inline.
    if (withPartner) {
      context.push('/partners');
      return;
    }

    // Sem parceiro: cria a etapa à mão.
    final item = await _editItem(const ProgramItem(), partnerMode: false);
    if (item != null && !item.isEmpty) {
      setState(() => _items.add(item));
      _persist();
    }
  }

  Future<void> _editExisting(int index) async {
    final edited = await _editItem(_items[index], partnerMode: _items[index].partner.trim().isNotEmpty, allowDelete: true);
    if (edited == null) return; // cancelado
    setState(() {
      if (edited.isEmpty) {
        _items.removeAt(index);
      } else {
        _items[index] = edited;
      }
    });
    _persist();
  }

  Future<ProgramItem?> _editItem(ProgramItem item, {required bool partnerMode, bool allowDelete = false}) {
    return showModalBottomSheet<ProgramItem>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => _EditSheet(item: item, partnerMode: partnerMode, allowDelete: allowDelete),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) return const SizedBox.shrink();
    final info = _info;
    if (info == null || !info.programAvailable) return const SizedBox.shrink();

    return Padding(
      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Título como grupo em maiúsculas (a força de "O EVENTO" nas
          // Definições), sem o botão "+" (adicionar é o botão em baixo).
          const Text('PROGRAMA',
              style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
          const SizedBox(height: 8),
          const Text('O dia ao minuto. Arrasta para reordenar.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(height: 12),
          if (_items.isEmpty)
            _EmptyCard(onAdd: _add)
          else
            Container(
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22), boxShadow: _shadow),
              clipBehavior: Clip.antiAlias,
              // Caixa com altura exata (linhas × _rowHeight): dá à
              // ReorderableListView limites fixos, por isso não precisa de
              // shrinkWrap e as linhas deixam de se sobrepor.
              child: SizedBox(
                height: _items.length * _rowHeight,
                child: ReorderableListView.builder(
                  padding: EdgeInsets.zero,
                  physics: const NeverScrollableScrollPhysics(),
                  buildDefaultDragHandles: false,
                  itemCount: _items.length,
                  onReorder: _reorder,
                  itemBuilder: (context, i) {
                    final it = _items[i];
                    return _ProgramRow(
                      // Identidade estável por instância: sobrevive ao reordenar
                      // (as mesmas instâncias são movidas na lista).
                      key: ValueKey(identityHashCode(it)),
                      index: i,
                      item: it,
                      first: i == 0,
                      height: _rowHeight,
                      onTap: () => _editExisting(i),
                    );
                  },
                ),
              ),
            ),
          const SizedBox(height: 10),
          if (_items.isNotEmpty)
            TextButton.icon(
              onPressed: _add,
              icon: const Icon(Icons.add, size: 18, color: _green),
              label: const Text('Adicionar etapa', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: _green)),
            ),
        ],
      ),
    );
  }
}

class _ProgramRow extends StatelessWidget {
  final int index;
  final ProgramItem item;
  final bool first;
  final double height;
  final VoidCallback onTap;
  const _ProgramRow({super.key, required this.index, required this.item, required this.first, required this.height, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final sub = item.partner.trim().isNotEmpty
        ? item.partner.trim()
        : (item.place.trim().isNotEmpty ? item.place.trim() : 'Sem parceiro');
    // Linha de altura fixa que estica à largura toda. A divisória é a borda
    // de topo (menos a primeira), por isso a altura total é exatamente
    // linhas × height — sem sobreposição.
    return SizedBox(
      height: height,
      child: InkWell(
        onTap: onTap,
        child: Container(
          decoration: BoxDecoration(
            border: first ? null : const Border(top: BorderSide(color: Color(0xFFECE7DC), width: 1)),
          ),
          padding: const EdgeInsets.symmetric(horizontal: 12),
          child: Row(
            children: [
              ReorderableDragStartListener(
                index: index,
                child: const Padding(
                  padding: EdgeInsets.only(right: 6),
                  child: Icon(Icons.drag_indicator, size: 22, color: Color(0xFFC9C4B8)),
                ),
              ),
              SizedBox(
                width: 52,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(item.time.trim().isEmpty ? '—' : item.time.trim(),
                        style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    if (item.date.trim().isNotEmpty)
                      Text(_shortDate(item.date), style: const TextStyle(fontSize: 11, color: AppTheme.inkMuted, letterSpacing: .5)),
                  ],
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(item.title.trim().isEmpty ? 'Etapa' : item.title.trim(),
                        maxLines: 1, overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(height: 2),
                    Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ],
                ),
              ),
              const Icon(Icons.chevron_right, size: 20, color: AppTheme.inkMuted),
            ],
          ),
        ),
      ),
    );
  }
}

String _shortDate(String iso) {
  final d = DateTime.tryParse(iso);
  if (d == null) return iso;
  const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  return '${d.day} ${meses[d.month - 1]}';
}

class _EmptyCard extends StatelessWidget {
  final VoidCallback onAdd;
  const _EmptyCard({required this.onAdd});
  @override
  Widget build(BuildContext context) => Container(
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22),
            boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))]),
        padding: const EdgeInsets.all(18),
        child: Column(
          children: [
            const Text('Ainda sem programa', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 4),
            const Text('Adiciona a primeira etapa — com um parceiro ou à tua maneira.',
                textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            const SizedBox(height: 14),
            SizedBox(
              height: 44,
              width: double.infinity,
              child: ElevatedButton(onPressed: onAdd, child: const Text('Adicionar etapa')),
            ),
          ],
        ),
      );
}

/// Folha "Adicionar ao programa": com um parceiro ou sem parceiro.
class _AddChooser extends StatelessWidget {
  const _AddChooser();
  @override
  Widget build(BuildContext context) {
    return _Sheet(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text('Adicionar ao programa', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 4),
          const Text('Uma etapa com um parceiro do evento, ou uma à tua maneira.',
              style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(height: 16),
          _ChooserCard(
            title: 'Com um parceiro',
            subtitle: 'Escreve o nome do parceiro do teu evento',
            onTap: () => Navigator.of(context).pop(true),
          ),
          const SizedBox(height: 12),
          _ChooserCard(
            title: 'Etapa sem parceiro',
            subtitle: 'Ex.: Passeio no parque, pausa, transporte',
            onTap: () => Navigator.of(context).pop(false),
          ),
        ],
      ),
    );
  }
}

class _ChooserCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final VoidCallback onTap;
  const _ChooserCard({required this.title, required this.subtitle, required this.onTap});
  @override
  Widget build(BuildContext context) => InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(22),
        child: Container(
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22),
              boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))]),
          padding: const EdgeInsets.all(18),
          child: Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(height: 2),
                    Text(subtitle, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ],
                ),
              ),
              const Icon(Icons.chevron_right, size: 20, color: AppTheme.inkMuted),
            ],
          ),
        ),
      );
}

/// Folha "Editar etapa": nome, (parceiro), data e hora.
class _EditSheet extends StatefulWidget {
  final ProgramItem item;
  final bool partnerMode;
  final bool allowDelete;
  const _EditSheet({required this.item, required this.partnerMode, required this.allowDelete});
  @override
  State<_EditSheet> createState() => _EditSheetState();
}

class _EditSheetState extends State<_EditSheet> {
  late final TextEditingController _name;
  late final TextEditingController _partner;
  late String _date; // ISO ou ''
  late String _time; // 'HH:mm' ou ''

  @override
  void initState() {
    super.initState();
    _name = TextEditingController(text: widget.item.title);
    _partner = TextEditingController(text: widget.item.partner);
    _date = widget.item.date;
    _time = widget.item.time;
  }

  @override
  void dispose() {
    _name.dispose();
    _partner.dispose();
    super.dispose();
  }

  Future<void> _pickDate() async {
    final now = DateTime.now();
    final initial = DateTime.tryParse(_date) ?? now;
    final d = await showDatePicker(
      context: context,
      initialDate: initial,
      firstDate: DateTime(now.year - 1),
      lastDate: DateTime(now.year + 5),
    );
    if (d != null) {
      setState(() => _date = '${d.year.toString().padLeft(4, '0')}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}');
    }
  }

  Future<void> _pickTime() async {
    final parts = _time.split(':');
    final initial = parts.length == 2
        ? TimeOfDay(hour: int.tryParse(parts[0]) ?? 16, minute: int.tryParse(parts[1]) ?? 0)
        : const TimeOfDay(hour: 16, minute: 0);
    final t = await showTimePicker(context: context, initialTime: initial);
    if (t != null) {
      setState(() => _time = '${t.hour.toString().padLeft(2, '0')}:${t.minute.toString().padLeft(2, '0')}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return _Sheet(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(widget.item.isEmpty ? 'Nova etapa' : 'Editar etapa',
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 16),
          const _Label('NOME'),
          _PillField(controller: _name, hint: widget.partnerMode ? 'Ex.: Cerimónia' : 'Ex.: Passeio no parque'),
          if (widget.partnerMode) ...[
            const SizedBox(height: 14),
            const _Label('PARCEIRO'),
            _PillField(controller: _partner, hint: 'Nome do parceiro'),
          ],
          const SizedBox(height: 14),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                const _Label('DATA'),
                _PillButton(text: _date.trim().isEmpty ? 'Dia do evento' : _shortDate(_date), icon: Icons.event, onTap: _pickDate),
              ])),
              const SizedBox(width: 10),
              Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                const _Label('HORA'),
                _PillButton(text: _time.trim().isEmpty ? '--:--' : _time, icon: Icons.schedule, onTap: _pickTime),
              ])),
            ],
          ),
          const SizedBox(height: 20),
          SizedBox(
            height: 52,
            child: ElevatedButton(
              onPressed: () => Navigator.of(context).pop(widget.item.copyWith(
                title: _name.text,
                partner: widget.partnerMode ? _partner.text : '',
                date: _date,
                time: _time,
              )),
              child: const Text('Guardar'),
            ),
          ),
          if (widget.allowDelete) ...[
            const SizedBox(height: 6),
            TextButton(
              onPressed: () => Navigator.of(context).pop(const ProgramItem()), // vazio = remover
              child: const Text('Remover etapa', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: Color(0xFFC8553D))),
            ),
          ],
        ],
      ),
    );
  }
}

class _Sheet extends StatelessWidget {
  final Widget child;
  const _Sheet({required this.child});
  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.of(context).viewInsets.bottom;
    return Container(
      decoration: const BoxDecoration(
        color: AppTheme.background,
        borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
      ),
      padding: EdgeInsets.fromLTRB(20, 14, 20, 24 + bottom),
      child: SafeArea(
        top: false,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(width: 40, height: 4, decoration: BoxDecoration(color: const Color(0xFFD8D3C8), borderRadius: BorderRadius.circular(999))),
            const SizedBox(height: 14),
            child,
          ],
        ),
      ),
    );
  }
}

class _Label extends StatelessWidget {
  final String text;
  const _Label(this.text);
  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(bottom: 8, left: 2),
        child: Text(text, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
      );
}

class _PillField extends StatelessWidget {
  final TextEditingController controller;
  final String hint;
  const _PillField({required this.controller, required this.hint});
  @override
  Widget build(BuildContext context) => TextField(
        controller: controller,
        style: const TextStyle(fontSize: 15, color: AppTheme.ink),
        decoration: InputDecoration(
          hintText: hint,
          hintStyle: const TextStyle(fontSize: 15, color: AppTheme.inkMuted),
          filled: true,
          fillColor: Colors.white,
          contentPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(999), borderSide: BorderSide.none),
        ),
      );
}

class _PillButton extends StatelessWidget {
  final String text;
  final IconData icon;
  final VoidCallback onTap;
  const _PillButton({required this.text, required this.icon, required this.onTap});
  @override
  Widget build(BuildContext context) => InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(999),
        child: Container(
          height: 52,
          padding: const EdgeInsets.symmetric(horizontal: 18),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(999)),
          child: Row(
            children: [
              Expanded(child: Text(text, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 15, color: AppTheme.ink))),
              Icon(icon, size: 20, color: AppTheme.inkMuted),
            ],
          ),
        ),
      );
}
