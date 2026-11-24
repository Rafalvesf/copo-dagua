import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/budget/booked_partners.dart';
import '../../../core/models/models.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/event/guest_facing.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/island_sheet.dart';

/// Secção "Programa" do painel do evento (por baixo de "Esta semana").
///
/// O dia ao minuto: etapas com um parceiro ou à mão (ex.: "Passeio no
/// parque"). Dá para editar nome/data/hora, remover e **arrastar para
/// reordenar**. É guardado em `events.program` (via `saveGuestFacingInfo`),
/// o mesmo sítio que o convidado vê na página do convite.
///
/// Nota: o programa vive aqui, no painel — saiu da "Página dos convidados".
class EventProgramSection extends ConsumerStatefulWidget {
  final String eventId;
  const EventProgramSection({super.key, required this.eventId});

  @override
  ConsumerState<EventProgramSection> createState() => _EventProgramSectionState();
}

class _EventProgramSectionState extends ConsumerState<EventProgramSection> {
  GuestFacingInfo? _info;
  List<ProgramItem> _items = [];
  bool _loading = true;

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
      final info = await loadGuestFacingInfo(widget.eventId);
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
      await saveGuestFacingInfo(widget.eventId, next);
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
    final withPartner = await showIslandSheet<bool>(
      context: context,
      builder: (_) => const _AddChooser(),
    );
    if (withPartner == null || !mounted) return;
    // "Com um parceiro" abre já o seletor de parceiros; "sem parceiro" vai
    // direto à etapa à mão. Em qualquer caso dá para juntar/mudar o parceiro
    // depois, na própria edição (pedido do Rafael, 2026-11-18).
    final item = await _editItem(const ProgramItem(), autoPickPartner: withPartner);
    if (item != null && !item.isEmpty) {
      setState(() => _items.add(item));
      _persist();
    }
  }

  Future<void> _editExisting(int index) async {
    final edited = await _editItem(_items[index], allowDelete: true);
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

  Future<ProgramItem?> _editItem(ProgramItem item, {bool autoPickPartner = false, bool allowDelete = false}) {
    return showIslandSheet<ProgramItem>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _EditSheet(
        item: item,
        eventId: widget.eventId,
        autoPickPartner: autoPickPartner,
        allowDelete: allowDelete,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) return const SizedBox.shrink();
    final info = _info;
    if (info == null || !info.programAvailable) return const SizedBox.shrink();

    // Parceiros já com reserva ativa (aceites). Uma etapa com um parceiro que
    // ainda não está aqui fica "à espera que aceite".
    final confirmed = ref.watch(confirmedPartnerIdsProvider(widget.eventId)).value ?? const <String>{};

    // Mockup «Painel do organizador · secções com moldura» (2026-11-22):
    // o programa todo numa moldura cinzenta e «+ Adicionar momento» em
    // baixo; vazio, a estrela a dormir.
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
      child: SectionFrame(
        title: 'Programa',
        children: [
          if (_items.isEmpty)
            _EmptyCard(onAdd: _add)
          else ...[
            // Altura exata (linhas × _rowHeight): limites fixos para a
            // ReorderableListView, sem linhas sobrepostas.
            SizedBox(
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
                    key: ValueKey(identityHashCode(it)),
                    index: i,
                    item: it,
                    first: i == 0,
                    height: _rowHeight,
                    pending: it.partnerId.trim().isNotEmpty && !confirmed.contains(it.partnerId.trim()),
                    onTap: () => _editExisting(i),
                  );
                },
              ),
            ),
            const SizedBox(height: 12),
            FrameOutlineButton('+ Adicionar momento', onTap: _add),
          ],
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
  final bool pending;
  final VoidCallback onTap;
  const _ProgramRow(
      {super.key,
      required this.index,
      required this.item,
      required this.first,
      required this.height,
      required this.onTap,
      this.pending = false});

  @override
  Widget build(BuildContext context) {
    final hasPartner = item.partner.trim().isNotEmpty;
    final sub = hasPartner
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
            border: first ? null : const Border(top: BorderSide(color: AppTheme.line, width: 1)),
          ),
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
              // Foto/avatar do parceiro da etapa (plano por nome, como as
              // pessoas na app). Só quando a etapa tem parceiro; esbatido
              // enquanto o parceiro ainda não aceitou.
              if (hasPartner) ...[
                Opacity(
                  opacity: pending ? 0.5 : 1,
                  child: V2Avatar(item.partner.trim(), size: 34,
                      imageUrl: item.partnerAvatarUrl.trim().isEmpty ? null : item.partnerAvatarUrl.trim()),
                ),
                const SizedBox(width: 10),
              ],
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
                    if (pending)
                      Row(mainAxisSize: MainAxisSize.min, children: [
                        Container(width: 7, height: 7, margin: const EdgeInsets.only(right: 6),
                            decoration: const BoxDecoration(color: Color(0xFFF2A01B), shape: BoxShape.circle)),
                        const Flexible(
                          child: Text('À espera que aceite', maxLines: 1, overflow: TextOverflow.ellipsis,
                              style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                        ),
                      ])
                    else
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
  Widget build(BuildContext context) => Column(
        children: [
          const EstrelaMascot(Estrela.dormir, size: 76),
          const SizedBox(height: 8),
          const Text('Ainda sem programa', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 4),
          const Text('Junta os momentos do dia: a cerimónia, o jantar, a festa. Os convidados veem-no no painel deles.',
              textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(height: 14),
          FrameOutlineButton('+ Adicionar momento', onTap: onAdd),
        ],
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
            subtitle: 'Escolhe um parceiro do teu evento',
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
          decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
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

/// Folha "Editar etapa": nome, parceiro (opcional), data e hora. Dá para
/// juntar um parceiro a qualquer etapa; enquanto o parceiro não aceita (não
/// tem reserva ativa), a etapa fica "à espera que aceite" (2026-11-18).
class _EditSheet extends ConsumerStatefulWidget {
  final ProgramItem item;
  final String eventId;
  final bool autoPickPartner;
  final bool allowDelete;
  const _EditSheet(
      {required this.item, required this.eventId, required this.autoPickPartner, required this.allowDelete});
  @override
  ConsumerState<_EditSheet> createState() => _EditSheetState();
}

class _EditSheetState extends ConsumerState<_EditSheet> {
  late final TextEditingController _name;
  late String _date; // ISO ou ''
  late String _time; // 'HH:mm' ou ''
  late String _partner; // nome
  late String _partnerAvatar;
  late String _partnerId;

  @override
  void initState() {
    super.initState();
    _name = TextEditingController(text: widget.item.title);
    _date = widget.item.date;
    _time = widget.item.time;
    _partner = widget.item.partner;
    _partnerAvatar = widget.item.partnerAvatarUrl;
    _partnerId = widget.item.partnerId;
    // "Com um parceiro": abre já o seletor.
    if (widget.autoPickPartner && _partner.trim().isEmpty) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) _pickPartner();
      });
    }
  }

  @override
  void dispose() {
    _name.dispose();
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

  Future<void> _pickPartner() async {
    final picks = await ref.read(eventPartnerPicksProvider(widget.eventId).future);
    if (!mounted) return;
    if (picks.isEmpty) {
      final go = await showIslandSheet<bool>(
        context: context,
        builder: (_) => const _NoPartnersSheet(),
      );
      if (go == true && mounted) {
        Navigator.of(context).pop(); // fecha a edição e vai explorar
        context.push('/partners');
      }
      return;
    }
    final chosen = await showIslandSheet<EventPartnerPick>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _PartnerPicker(picks: picks),
    );
    if (chosen == null || !mounted) return;
    setState(() {
      _partner = chosen.name;
      _partnerAvatar = chosen.photoUrl ?? '';
      _partnerId = chosen.id;
    });
  }

  void _removePartner() => setState(() {
        _partner = '';
        _partnerAvatar = '';
        _partnerId = '';
      });

  @override
  Widget build(BuildContext context) {
    final hasPartner = _partner.trim().isNotEmpty;
    final confirmed = ref.watch(confirmedPartnerIdsProvider(widget.eventId)).value ?? const <String>{};
    final pending = _partnerId.trim().isNotEmpty && !confirmed.contains(_partnerId.trim());
    return _Sheet(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(widget.item.isEmpty ? 'Nova etapa' : 'Editar etapa',
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 16),
          const _Label('NOME'),
          _PillField(controller: _name, hint: hasPartner ? 'Ex.: Jantar' : 'Ex.: Passeio no parque'),
          const SizedBox(height: 14),
          const _Label('PARCEIRO'),
          if (!hasPartner)
            // Etapa sem parceiro: dá para juntar um.
            InkWell(
              onTap: _pickPartner,
              borderRadius: BorderRadius.circular(999),
              child: Container(
                height: 52,
                padding: const EdgeInsets.symmetric(horizontal: 18),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(999),
                  border: Border.all(color: AppTheme.ink, width: 1.5),
                ),
                child: Row(children: [
                  const Icon(Icons.person_add_alt_1, size: 20, color: AppTheme.ink),
                  const SizedBox(width: 10),
                  const Expanded(
                    child: Text('Adicionar parceiro',
                        style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                  const Icon(Icons.chevron_right, size: 20, color: AppTheme.inkMuted),
                ]),
              ),
            )
          else
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: AppTheme.background,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: pending ? const Color(0xFFF2A01B) : const Color(0xFFD9D9D9), width: pending ? 1.5 : 1),
              ),
              child: Row(children: [
                Opacity(
                  opacity: pending ? 0.5 : 1,
                  child: V2Avatar(_partner, size: 34, imageUrl: _partnerAvatar.isEmpty ? null : _partnerAvatar),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                    Text(_partner,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    if (pending) ...[
                      const SizedBox(height: 2),
                      Row(mainAxisSize: MainAxisSize.min, children: [
                        Container(width: 7, height: 7, margin: const EdgeInsets.only(right: 6),
                            decoration: const BoxDecoration(color: Color(0xFFF2A01B), shape: BoxShape.circle)),
                        const Text('À espera que aceite', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                      ]),
                    ],
                  ]),
                ),
                IconButton(
                  onPressed: _removePartner,
                  icon: const Icon(Icons.close, size: 18, color: Color(0xFFC8553D)),
                  tooltip: 'Remover parceiro',
                ),
              ]),
            ),
          if (hasPartner && pending) ...[
            const SizedBox(height: 8),
            Text('Se o $_partner aceitar, aparece aqui no programa. Até lá, a etapa fica sem ele.',
                style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted)),
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
                date: _date,
                time: _time,
                partner: _partner,
                partnerAvatarUrl: _partnerAvatar,
                partnerId: _partnerId,
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
    // Dentro da ilha (showIslandSheet): ela já dá o fundo branco, os cantos
    // e afasta o teclado.
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 14, 20, 20),
      child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(width: 40, height: 4, decoration: BoxDecoration(color: const Color(0xFFD8D3C8), borderRadius: BorderRadius.circular(999))),
            const SizedBox(height: 14),
          child,
        ],
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
          fillColor: AppTheme.background,
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
          decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(999)),
          child: Row(
            children: [
              Expanded(child: Text(text, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 15, color: AppTheme.ink))),
              Icon(icon, size: 20, color: AppTheme.inkMuted),
            ],
          ),
        ),
      );
}

/// Escolher um parceiro do evento para uma etapa: reservados (aceites) ou
/// com pedido por responder (à espera que aceite). 2026-11-18.
class _PartnerPicker extends StatelessWidget {
  final List<EventPartnerPick> picks;
  const _PartnerPicker({required this.picks});

  @override
  Widget build(BuildContext context) {
    return _Sheet(
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Text('Escolher parceiro', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 4),
        const Text('Parceiros do teu evento. Se ainda não aceitaram, a etapa fica à espera.',
            style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        const SizedBox(height: 12),
        ConstrainedBox(
          constraints: const BoxConstraints(maxHeight: 360),
          child: SingleChildScrollView(
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              for (var i = 0; i < picks.length; i++) ...[
                if (i > 0) const Divider(height: 1, color: Color(0xFFD9D9D9)),
                InkWell(
                  onTap: () => Navigator.of(context).pop(picks[i]),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    child: Row(children: [
                      Opacity(
                        opacity: picks[i].accepted ? 1 : 0.5,
                        child: V2Avatar(picks[i].name, size: 44,
                            imageUrl: (picks[i].photoUrl?.isEmpty ?? true) ? null : picks[i].photoUrl),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text(picks[i].name,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          if (picks[i].accepted)
                            const Text('Reservado', style: TextStyle(fontSize: 13, color: Color(0xFF3F7A4F)))
                          else
                            Row(mainAxisSize: MainAxisSize.min, children: [
                              Container(width: 7, height: 7, margin: const EdgeInsets.only(right: 6),
                                  decoration: const BoxDecoration(color: Color(0xFFF2A01B), shape: BoxShape.circle)),
                              const Text('À espera que aceite', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                            ]),
                        ]),
                      ),
                      const Icon(Icons.chevron_right, size: 20, color: AppTheme.inkMuted),
                    ]),
                  ),
                ),
              ],
            ]),
          ),
        ),
      ]),
    );
  }
}

/// Sem parceiros no evento: convida a explorar/pedir primeiro.
class _NoPartnersSheet extends StatelessWidget {
  const _NoPartnersSheet();
  @override
  Widget build(BuildContext context) {
    return _Sheet(
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Text('Ainda sem parceiros', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 6),
        const Text(
            'Ainda não pediste a nenhum parceiro neste evento. Explora e pede a um; depois escolhe-o aqui e, se aceitar, aparece no programa.',
            style: TextStyle(fontSize: 14, height: 1.5, color: AppTheme.inkMuted)),
        const SizedBox(height: 18),
        SizedBox(
          height: 52,
          child: ElevatedButton(
            onPressed: () => Navigator.of(context).pop(true),
            child: const Text('Explorar parceiros'),
          ),
        ),
      ]),
    );
  }
}
