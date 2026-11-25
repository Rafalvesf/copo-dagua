import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../core/chat/chat_helpers.dart';
import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import '../money.dart';
import 'alert_outline.dart';
import 'island_sheet.dart';
import 'vat_confirm.dart';

/// Popups das pranchetas das Mensagens (2026-11-24/25), iguais aos
/// mockups: «Editar pedido» (organizador), «Enviar / Editar proposta»
/// (parceiro) e «Pedir / Editar alteração» (os dois). Falam com as funções
/// da migração 233 (`update_quote_request`, `cancel_quote_request`,
/// `update_proposal`, `withdraw_proposal`, `request_booking_change`,
/// `update_booking_change`, `cancel_booking_change`).

// ───────────────────────── peças do molde (§6.3) ─────────────────────────

const _caps = TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted);
const _muted = TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4);

class _Head extends StatelessWidget {
  final String title;
  final String subtitle;
  const _Head(this.title, this.subtitle);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
        const SizedBox(width: 10),
        Semantics(
          button: true,
          label: 'Fechar',
          child: GestureDetector(
            onTap: () => Navigator.of(context).pop(),
            child: Container(
              width: 44,
              height: 44,
              decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
              child: const Icon(Hi.xMark, size: 20, color: Colors.white),
            ),
          ),
        ),
      ]),
    );
  }
}

class _Alert extends StatelessWidget {
  final String title;
  final String text;
  const _Alert(this.title, this.text);

  @override
  Widget build(BuildContext context) {
    return AlertOutline(
      tone: AlertTone.pending,
      radius: 16,
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Container(
          margin: const EdgeInsets.only(top: 6),
          width: 8,
          height: 8,
          decoration: BoxDecoration(color: alertColor(AlertTone.pending), shape: BoxShape.circle),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(text, style: _muted),
          ]),
        ),
      ]),
    );
  }
}

class _Pills extends StatelessWidget {
  final List<String> labels;
  final int selected;
  final ValueChanged<int> onPick;
  const _Pills({required this.labels, required this.selected, required this.onPick});

  @override
  Widget build(BuildContext context) {
    return Wrap(spacing: 8, runSpacing: 8, children: [
      for (var i = 0; i < labels.length; i++)
        Semantics(
          button: true,
          selected: i == selected,
          child: GestureDetector(
            onTap: () => onPick(i),
            child: Container(
              height: 38,
              padding: const EdgeInsets.symmetric(horizontal: 14),
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: i == selected ? AppTheme.brandGreen : AppTheme.background,
                borderRadius: BorderRadius.circular(19),
              ),
              child: Text(labels[i],
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: i == selected ? Colors.white : AppTheme.ink)),
            ),
          ),
        ),
    ]);
  }
}

class _Box extends StatelessWidget {
  final TextEditingController controller;
  final String? hint;
  final int lines;
  final TextInputType? keyboard;
  const _Box(this.controller, {this.hint, this.lines = 1, this.keyboard});

  @override
  Widget build(BuildContext context) {
    final multi = lines > 1;
    return Container(
      height: multi ? null : 52,
      padding: EdgeInsets.symmetric(horizontal: 18, vertical: multi ? 14 : 0),
      alignment: Alignment.centerLeft,
      decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(multi ? 22 : 26)),
      child: TextField(
        controller: controller,
        minLines: lines,
        maxLines: multi ? lines + 2 : 1,
        keyboardType: keyboard,
        style: const TextStyle(fontSize: 15, color: AppTheme.ink, height: 1.4),
        decoration: InputDecoration(
          isCollapsed: true,
          border: InputBorder.none,
          hintText: hint,
          hintStyle: const TextStyle(fontSize: 15, color: AppTheme.inkMuted),
        ),
      ),
    );
  }
}

class _Stepper extends StatelessWidget {
  final String top;
  final int value;
  final String note;
  final ValueChanged<int> onChanged;
  const _Stepper({required this.top, required this.value, required this.note, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    Widget btn(String t, bool dark, VoidCallback onTap) => GestureDetector(
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: dark ? AppTheme.ink : Colors.white,
              shape: BoxShape.circle,
              border: dark ? null : Border.all(color: AppTheme.ink, width: 1.5),
            ),
            child: Text(t, style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: dark ? Colors.white : AppTheme.ink)),
          ),
        );
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            if (top.isNotEmpty) Text(top, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            Text('$value pessoas', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (note.isNotEmpty) Text(note, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
        btn('−', false, () => onChanged(value > 1 ? value - 1 : 1)),
        const SizedBox(width: 12),
        btn('+', true, () => onChanged(value + 1)),
      ]),
    );
  }
}

class _Buttons extends StatelessWidget {
  final String? outline;
  final VoidCallback? onOutline;
  final String main;
  final VoidCallback? onMain;
  final int mainFlex;
  const _Buttons({this.outline, this.onOutline, required this.main, this.onMain, this.mainFlex = 1});

  @override
  Widget build(BuildContext context) {
    const style = TextStyle(
      fontFamily: AppTheme.fontFamily,
      fontFamilyFallback: AppTheme.fontFamilyFallback,
      fontSize: 15,
      fontWeight: FontWeight.w700,
    );
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
      child: Row(children: [
        if (outline != null) ...[
          Expanded(
            child: SizedBox(
              height: 52,
              child: OutlinedButton(
                onPressed: onOutline,
                style: OutlinedButton.styleFrom(
                  foregroundColor: AppTheme.ink,
                  backgroundColor: Colors.white,
                  side: const BorderSide(color: AppTheme.ink, width: 1.5),
                  shape: const StadiumBorder(),
                  textStyle: style,
                ),
                child: Text(outline!),
              ),
            ),
          ),
          const SizedBox(width: 8),
        ],
        Expanded(
          flex: mainFlex,
          child: SizedBox(
            height: 52,
            child: FilledButton(
              onPressed: onMain,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                shape: const StadiumBorder(),
                textStyle: style,
              ),
              child: Text(main, maxLines: 1, overflow: TextOverflow.ellipsis),
            ),
          ),
        ),
      ]),
    );
  }
}

Widget _sheet(BuildContext context, {required Widget head, required List<Widget> body, required Widget buttons}) {
  return SafeArea(
    top: false,
    child: Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: ConstrainedBox(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.92),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          head,
          Flexible(
            child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                for (var i = 0; i < body.length; i++) ...[if (i > 0) const SizedBox(height: 16), body[i]],
              ]),
            ),
          ),
          buttons,
        ]),
      ),
    ),
  );
}

/// Caixa de hora em pílula 52 («Início 14:00»).
class _HourBox extends StatelessWidget {
  final String label;
  final TextEditingController controller;
  const _HourBox(this.label, this.controller);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 52,
      padding: const EdgeInsets.symmetric(horizontal: 18),
      decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(26)),
      child: Row(children: [
        Text(label, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        const SizedBox(width: 8),
        Expanded(
          child: TextField(
            controller: controller,
            keyboardType: TextInputType.datetime,
            inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[0-9:]'))],
            style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink),
            decoration: const InputDecoration(isCollapsed: true, border: InputBorder.none, hintText: '00:00'),
          ),
        ),
      ]),
    );
  }
}

Widget _section(String caps, Widget child) => Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Text(caps, style: _caps),
      const SizedBox(height: 8),
      child,
    ]);

void _toast(BuildContext context, String text) =>
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(text)));

// ───────────────────────────── Editar pedido ─────────────────────────────

/// «Editar pedido» (prancheta «Editar pedido de orçamento»). `true` se
/// guardou ou cancelou.
Future<bool> showEditRequestSheet(
  BuildContext context, {
  required String quoteRequestId,
  required String partnerName,
  required String eventTitle,
  required String eventLine,
  required int people,
  int? eventPeople,
  String? message,
  bool hasProposal = false,
  String? startTime,
  String? endTime,
}) async {
  final r = await showIslandSheet<bool>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _EditRequest(
      id: quoteRequestId,
      partnerName: partnerName,
      eventTitle: eventTitle,
      eventLine: eventLine,
      people: people,
      eventPeople: eventPeople,
      message: message,
      hasProposal: hasProposal,
      startTime: startTime,
      endTime: endTime,
    ),
  );
  return r == true;
}

class _EditRequest extends StatefulWidget {
  final String id;
  final String partnerName;
  final String eventTitle;
  final String eventLine;
  final int people;
  final int? eventPeople;
  final String? message;
  final bool hasProposal;
  final String? startTime;
  final String? endTime;
  const _EditRequest({
    required this.id,
    required this.partnerName,
    required this.eventTitle,
    required this.eventLine,
    required this.people,
    this.eventPeople,
    this.message,
    required this.hasProposal,
    this.startTime,
    this.endTime,
  });

  @override
  State<_EditRequest> createState() => _EditRequestState();
}

class _EditRequestState extends State<_EditRequest> {
  late int _people = widget.people < 1 ? 1 : widget.people;
  late final _msg = TextEditingController(text: widget.message ?? '');
  late final _start = TextEditingController(text: widget.startTime ?? '');
  late final _end = TextEditingController(text: widget.endTime ?? '');
  bool _busy = false;

  @override
  void dispose() {
    _msg.dispose();
    _start.dispose();
    _end.dispose();
    super.dispose();
  }

  Future<void> _run(Future<void> Function() f, String ok) async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await f();
      if (!mounted) return;
      _toast(context, ok);
      Navigator.of(context).pop(true);
    } catch (_) {
      if (!mounted) return;
      setState(() => _busy = false);
      _toast(context, 'Não foi possível guardar. Vê se as horas estão como 14:00.');
    }
  }

  @override
  Widget build(BuildContext context) {
    final ev = widget.eventPeople;
    final peopleNote = ev == null
        ? ''
        : _people == ev
            ? 'Como no evento'
            : _people > ev
                ? '${_people - ev} a mais do que no evento'
                : '$_people de $ev do evento';
    return _sheet(
      context,
      head: _Head('Editar pedido', 'Pedido de orçamento · ${widget.partnerName}'),
      body: [
        if (widget.hasProposal)
          _Alert('Já tem uma proposta',
              'Ao guardar, ${widget.partnerName} é avisado e pode enviar uma proposta nova. A atual deixa de valer.'),
        _section(
          'PARA QUE EVENTO',
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
            child: ConstrainedBox(
              constraints: const BoxConstraints(minHeight: 56),
              child: Row(children: [
                Expanded(
                  child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(widget.eventTitle, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    if (widget.eventLine.isNotEmpty) Text(widget.eventLine, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ]),
                ),
                Container(
                  width: 24,
                  height: 24,
                  decoration: const BoxDecoration(color: AppTheme.brandGreen, shape: BoxShape.circle),
                  child: const Icon(Icons.check_rounded, size: 16, color: Colors.white),
                ),
              ]),
            ),
          ),
        ),
        _section('PESSOAS', _Stepper(top: '', value: _people, note: peopleNote, onChanged: (v) => setState(() => _people = v))),
        _section(
          'HORA',
          Row(children: [
            Expanded(child: _HourBox('Início', _start)),
            const SizedBox(width: 8),
            Expanded(child: _HourBox('Fim', _end)),
          ]),
        ),
        _section('O QUE PROCURAS', _Box(_msg, lines: 4, hint: 'O que procuras')),
        const Text('O dia e o local vêm do evento: mudam-se nas Definições do evento.', style: _muted),
      ],
      buttons: _Buttons(
        outline: 'Cancelar pedido',
        onOutline: _busy
            ? null
            : () async {
                final sure = await showIslandDialog<bool>(
                  context: context,
                  builder: (c) => IslandAlert(
                    title: const Text('Cancelar o pedido?'),
                    content: Text('${widget.partnerName} é avisado. Se havia sinal cativo, é libertado.'),
                    actions: [
                      TextButton(onPressed: () => Navigator.of(c).pop(false), child: const Text('Voltar')),
                      FilledButton(onPressed: () => Navigator.of(c).pop(true), child: const Text('Cancelar pedido')),
                    ],
                  ),
                );
                if (sure != true || !mounted) return;
                await _run(() => supabase.rpc('cancel_quote_request', params: {'p_id': widget.id}), 'Pedido cancelado.');
              },
        main: 'Guardar',
        onMain: _busy
            ? null
            : () => _run(
                () => supabase.rpc('update_quote_request', params: {
                  'p_id': widget.id,
                  'p_people': _people,
                  'p_message': _msg.text.trim().isEmpty ? null : _msg.text.trim(),
                  'p_start': _start.text.trim().isEmpty ? null : _start.text.trim(),
                  'p_end': _end.text.trim().isEmpty ? null : _end.text.trim(),
                }),
                'Pedido atualizado.',
              ),
      ),
    );
  }
}

// ────────────────────────── Enviar / Editar proposta ──────────────────────────

/// Linha do «O que inclui».
class ProposalLine {
  final String name;
  final String meta;
  final double value;
  const ProposalLine(this.name, this.meta, this.value);

  String encode() => '• $name${meta.isEmpty ? '' : ' ($meta)'} — ${euros(value)}';

  Map<String, dynamic> toJson() => {'name': name, 'meta': meta, 'value': value};

  static ProposalLine? fromJson(Object? j) {
    if (j is! Map) return null;
    final v = (j['value'] as num?)?.toDouble();
    final n = (j['name'] as String?)?.trim() ?? '';
    if (v == null || n.isEmpty) return null;
    return ProposalLine(n, (j['meta'] as String?)?.trim() ?? '', v);
  }

  static final _re = RegExp(r'^• (.+?)(?: \((.*)\))? — ([\d\s.,]+) ?€$');
  static ProposalLine? decode(String line) {
    final m = _re.firstMatch(line.trim());
    if (m == null) return null;
    final v = double.tryParse(m.group(3)!.replaceAll(RegExp(r'[\s.]'), '').replaceAll(',', '.'));
    if (v == null) return null;
    return ProposalLine(m.group(1)!, m.group(2) ?? '', v);
  }
}

/// A proposta já enviada (para editar).
class SentProposal {
  final String id;
  final String title;
  final String? description;
  final double price;
  final double deposit;
  final DateTime? sentAt;

  /// `proposals.lines` (236).
  final List<ProposalLine> lines;
  const SentProposal({
    required this.id,
    required this.title,
    this.description,
    required this.price,
    required this.deposit,
    this.sentAt,
    this.lines = const [],
  });
}

/// «Enviar proposta» / «Editar proposta» (prancheta «Enviar ou editar
/// proposta»). `true` se enviou, guardou ou retirou.
Future<bool> showProposalSheet(
  BuildContext context, {
  required String quoteRequestId,
  required String eventId,
  required String clientName,
  required String eventLabel,
  required String requestTitle,
  required String requestLine,
  String? requestMessage,
  SentProposal? existing,
}) async {
  final r = await showIslandSheet<bool>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _ProposalSheet(
      quoteRequestId: quoteRequestId,
      eventId: eventId,
      clientName: clientName,
      eventLabel: eventLabel,
      requestTitle: requestTitle,
      requestLine: requestLine,
      requestMessage: requestMessage,
      existing: existing,
    ),
  );
  return r == true;
}

class _ProposalSheet extends StatefulWidget {
  final String quoteRequestId;
  final String eventId;
  final String clientName;
  final String eventLabel;
  final String requestTitle;
  final String requestLine;
  final String? requestMessage;
  final SentProposal? existing;
  const _ProposalSheet({
    required this.quoteRequestId,
    required this.eventId,
    required this.clientName,
    required this.eventLabel,
    required this.requestTitle,
    required this.requestLine,
    this.requestMessage,
    this.existing,
  });

  @override
  State<_ProposalSheet> createState() => _ProposalSheetState();
}

class _ProposalSheetState extends State<_ProposalSheet> {
  static const _deps = [0, 20, 30, 50];
  static const _days = [3, 7, 14];
  late final _title = TextEditingController(text: widget.existing?.title ?? '');
  final _note = TextEditingController();
  final _lines = <ProposalLine>[];
  int _dep = 1;
  int _valid = 1;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    final e = widget.existing;
    if (e != null) {
      final notes = <String>[];
      _lines.addAll(e.lines);
      for (final l in (e.description ?? '').split('\n')) {
        final p = ProposalLine.decode(l);
        if (p != null) {
          if (e.lines.isEmpty) _lines.add(p);
        } else if (l.trim().isNotEmpty) {
          notes.add(l.trim());
        }
      }
      if (_lines.isEmpty) _lines.add(ProposalLine(e.title, '', e.price));
      _note.text = notes.join('\n');
      final pct = e.price > 0 ? (e.deposit / e.price * 100).round() : 20;
      final i = _deps.indexOf(pct);
      _dep = i < 0 ? 1 : i;
    }
  }

  @override
  void dispose() {
    _title.dispose();
    _note.dispose();
    super.dispose();
  }

  double get _total => _lines.fold(0, (a, l) => a + l.value);
  double get _deposit => double.parse((_total * _deps[_dep] / 100).toStringAsFixed(2));
  String get _first => widget.clientName.split(' ').first;

  Future<void> _addLine() async {
    final name = TextEditingController();
    final meta = TextEditingController();
    final value = TextEditingController();
    final line = await showIslandSheet<ProposalLine>(
      context: context,
      isScrollControlled: true,
      builder: (c) => _sheet(
        c,
        head: const _Head('Juntar linha', 'O que inclui a proposta'),
        body: [
          _section('O QUÊ', _Box(name, hint: 'Reportagem do dia todo')),
          _section('DETALHE (OPCIONAL)', _Box(meta, hint: '14:00 – 00:00 · 2 fotógrafos')),
          _section('VALOR', _Box(value, hint: '0 €', keyboard: const TextInputType.numberWithOptions(decimal: true))),
        ],
        buttons: _Buttons(
          main: 'Juntar',
          onMain: () {
            final v = double.tryParse(value.text.trim().replaceAll(',', '.'));
            if (name.text.trim().isEmpty || v == null || v <= 0) return;
            Navigator.of(c).pop(ProposalLine(name.text.trim(), meta.text.trim(), v));
          },
        ),
      ),
    );
    if (line != null && mounted) setState(() => _lines.add(line));
  }

  String _description() =>
      [..._lines.map((l) => l.encode()), if (_note.text.trim().isNotEmpty) '', if (_note.text.trim().isNotEmpty) _note.text.trim()].join('\n');

  Future<void> _save() async {
    if (_busy) return;
    final title = _title.text.trim();
    if (title.isEmpty || _lines.isEmpty || _total <= 0) {
      _toast(context, 'Escreve o título e junta pelo menos uma linha.');
      return;
    }
    if (!await confirmVatIncluded(context, _total)) return;
    if (!mounted) return;
    setState(() => _busy = true);
    final expires = DateTime.now().add(Duration(days: _days[_valid])).toUtc().toIso8601String();
    try {
      final e = widget.existing;
      if (e != null) {
        await supabase.rpc('update_proposal', params: {
          'p_id': e.id,
          'p_title': title,
          'p_description': _description(),
          'p_price': _total,
          'p_deposit': _deposit,
          'p_expires_at': expires,
          'p_lines': _lines.map((l) => l.toJson()).toList(),
        });
      } else {
        final id = await supabase.rpc('send_proposal', params: {
          'p_quote_request_id': widget.quoteRequestId,
          'p_title': title,
          'p_description': _description(),
          'p_price': _total,
          'p_payment_terms': null,
          'p_deposit_refundable': true,
        }) as String;
        // O sinal e a validade escolhidos no popup (233).
        try {
          await supabase.rpc('update_proposal', params: {
            'p_id': id,
            'p_title': title,
            'p_description': _description(),
            'p_price': _total,
            'p_deposit': _deposit,
            'p_expires_at': expires,
            'p_lines': _lines.map((l) => l.toJson()).toList(),
          });
        } catch (_) {}
        try {
          final conv = await getOrCreateConversation(eventId: widget.eventId, partnerId: supabase.auth.currentUser!.id);
          await sendProposalMessage(conversationId: conv, proposalId: id, title: title, price: _total, depositAmount: _deposit);
        } catch (_) {}
      }
      if (!mounted) return;
      _toast(context, e != null ? 'Proposta atualizada.' : 'Proposta enviada.');
      Navigator.of(context).pop(true);
    } on PostgrestException catch (err) {
      if (!mounted) return;
      setState(() => _busy = false);
      _toast(
          context,
          err.code == 'P0008'
              ? 'Este cliente já tem uma reserva contigo.'
              : err.code == 'P0001'
                  ? 'Este pedido já não está disponível.'
                  : 'Não foi possível enviar a proposta.');
    } catch (_) {
      if (!mounted) return;
      setState(() => _busy = false);
      _toast(context, 'Não foi possível enviar a proposta.');
    }
  }

  Future<void> _withdraw() async {
    final e = widget.existing;
    if (e == null || _busy) return;
    setState(() => _busy = true);
    try {
      await supabase.rpc('withdraw_proposal', params: {'p_id': e.id});
      if (!mounted) return;
      _toast(context, 'Proposta retirada.');
      Navigator.of(context).pop(true);
    } catch (_) {
      if (!mounted) return;
      setState(() => _busy = false);
      _toast(context, 'Não foi possível retirar a proposta.');
    }
  }

  @override
  Widget build(BuildContext context) {
    final editing = widget.existing != null;
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    final sent = widget.existing?.sentAt?.toLocal();
    Widget row(String l, String v, {bool last = false}) => Container(
          constraints: const BoxConstraints(minHeight: 48),
          decoration: BoxDecoration(border: last ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9)))),
          child: Row(children: [
            Expanded(child: Text(l, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
            Text(v, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
        );
    return _sheet(
      context,
      head: _Head(editing ? 'Editar proposta' : 'Enviar proposta', 'Para ${widget.clientName} · ${widget.eventLabel}'),
      body: [
        if (editing)
          _Alert('Enviada${sent == null ? '' : ' a ${sent.day} ${months[sent.month - 1]}'} · por responder',
              'Ao guardar, $_first recebe a versão nova no lugar da antiga.'),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('O PEDIDO', style: _caps),
            const SizedBox(height: 4),
            Text(widget.requestTitle, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (widget.requestLine.isNotEmpty) Text(widget.requestLine, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            if ((widget.requestMessage ?? '').trim().isNotEmpty) Text('«${widget.requestMessage!.trim()}»', style: _muted),
          ]),
        ),
        _section('TÍTULO', _Box(_title, hint: 'Reportagem completa + álbum')),
        _section(
          'O QUE INCLUI · ${_lines.length}',
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              for (var i = 0; i < _lines.length; i++)
                Container(
                  constraints: const BoxConstraints(minHeight: 56),
                  decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFD9D9D9)))),
                  child: Row(children: [
                    Expanded(
                      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Text(_lines[i].name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        if (_lines[i].meta.isNotEmpty) Text(_lines[i].meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                      ]),
                    ),
                    Text(euros(_lines[i].value), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(width: 10),
                    Semantics(
                      button: true,
                      label: 'Tirar ${_lines[i].name}',
                      child: GestureDetector(
                        onTap: () => setState(() => _lines.removeAt(i)),
                        child: Container(
                          width: 32,
                          height: 32,
                          decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                          child: const Icon(Hi.xMark, size: 14, color: AppTheme.ink),
                        ),
                      ),
                    ),
                  ]),
                ),
              GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: _addLine,
                child: const SizedBox(
                  height: 48,
                  child: Center(child: Text('+ Juntar linha', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink))),
                ),
              ),
            ]),
          ),
        ),
        _section('SINAL PARA CONFIRMAR',
            _Pills(labels: const ['Sem sinal', '20 %', '30 %', '50 %'], selected: _dep, onPick: (i) => setState(() => _dep = i))),
        _section('VÁLIDA DURANTE',
            _Pills(labels: const ['3 dias', '7 dias', '14 dias'], selected: _valid, onPick: (i) => setState(() => _valid = i))),
        _section('NOTA PARA ${_first.toUpperCase()}', _Box(_note, lines: 3)),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
          decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
          child: Column(children: [
            row('Total para $_first', euros(_total)),
            row('Sinal', _deps[_dep] == 0 ? 'Sem sinal' : '${euros(_deposit)} (${_deps[_dep]} %)'),
            row('Resto', euros(_total - _deposit), last: true),
          ]),
        ),
        Text('Recebes o total menos a taxa de serviço. $_first vê os valores já com a taxa dela.', style: _muted),
      ],
      buttons: _Buttons(
        outline: editing ? 'Retirar' : null,
        onOutline: _busy ? null : _withdraw,
        main: editing ? 'Guardar e reenviar' : 'Enviar proposta · ${euros(_total)}',
        onMain: _busy ? null : _save,
        mainFlex: 2,
      ),
    );
  }
}

// ───────────────────────────── Editar outro dia ─────────────────────────────

/// «Editar outro dia» (prancheta «Propor outro dia», modo «Já enviado»;
/// 2026-11-25): o aviso «Enviado · por responder», o dia pedido (ocupado),
/// os dias livres na agenda, o preço, a mensagem e «Cancelar» + «Guardar».
/// `true` se guardou ou cancelou.
Future<bool> showEditOtherDaySheet(
  BuildContext context, {
  required String changeId,
  required String otherName,
  required String subtitle,
  required DateTime fromDate,
  required DateTime toDate,
  String? message,
  double? newPrice,
  double? currentPrice,
}) async {
  final r = await showIslandSheet<bool>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _EditOtherDay(
      changeId: changeId,
      otherName: otherName,
      subtitle: subtitle,
      fromDate: fromDate,
      toDate: toDate,
      message: message,
      newPrice: newPrice,
      currentPrice: currentPrice,
    ),
  );
  return r == true;
}

class _EditOtherDay extends StatefulWidget {
  final String changeId;
  final String otherName;
  final String subtitle;
  final DateTime fromDate;
  final DateTime toDate;
  final String? message;
  final double? newPrice;
  final double? currentPrice;
  const _EditOtherDay({
    required this.changeId,
    required this.otherName,
    required this.subtitle,
    required this.fromDate,
    required this.toDate,
    this.message,
    this.newPrice,
    this.currentPrice,
  });

  @override
  State<_EditOtherDay> createState() => _EditOtherDayState();
}

class _EditOtherDayState extends State<_EditOtherDay> {
  static const _wd = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  static const _mo = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  String _d(DateTime d) => '${_wd[d.weekday - 1]}, ${d.day} ${_mo[d.month - 1]}';
  bool _same(DateTime a, DateTime b) => a.year == b.year && a.month == b.month && a.day == b.day;

  List<(DateTime, String)> _days = const [];
  late DateTime _picked = widget.toDate;
  late bool _other = widget.newPrice != null;
  late final _total = TextEditingController(text: widget.newPrice == null ? '' : widget.newPrice!.toStringAsFixed(0));
  late final _msg = TextEditingController(text: widget.message ?? '');
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    _loadDays();
  }

  /// Dia antes, dia a seguir, uma e duas semanas depois — sem os dias com
  /// reservas — e o dia já proposto.
  Future<void> _loadDays() async {
    final busy = <DateTime>[];
    try {
      final me = supabase.auth.currentUser?.id;
      final rows = await supabase
          .from('bookings')
          .select('event_date')
          .eq('partner_id', me ?? '')
          .inFilter('status', ['awaiting_deposit', 'confirmed']);
      for (final r in rows as List) {
        final d = DateTime.tryParse('${r['event_date'] ?? ''}');
        if (d != null) busy.add(d);
      }
    } catch (_) {}
    final f = widget.fromDate;
    final now = DateTime.now();
    final opts = <(DateTime, String)>[
      (DateTime(f.year, f.month, f.day - 1), 'Dia antes'),
      (DateTime(f.year, f.month, f.day + 1), 'Dia a seguir'),
      (DateTime(f.year, f.month, f.day + 7), 'Uma semana depois'),
      (DateTime(f.year, f.month, f.day + 14), 'Duas semanas depois'),
    ].where((e) => e.$1.isAfter(now) && !busy.any((b) => _same(b, e.$1))).toList();
    if (!opts.any((e) => _same(e.$1, widget.toDate))) opts.insert(0, (widget.toDate, 'O dia que propuseste'));
    if (mounted) setState(() => _days = opts);
  }

  @override
  void dispose() {
    _total.dispose();
    _msg.dispose();
    super.dispose();
  }

  Future<void> _run(Future<void> Function() f, String ok) async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await f();
      if (!mounted) return;
      _toast(context, ok);
      Navigator.of(context).pop(true);
    } catch (_) {
      if (!mounted) return;
      setState(() => _busy = false);
      _toast(context, 'Não foi possível guardar. Tenta novamente.');
    }
  }

  @override
  Widget build(BuildContext context) {
    final price = double.tryParse(_total.text.trim().replaceAll(' ', '').replaceAll(',', '.'));
    final first = widget.otherName.split(' ').first;
    return _sheet(
      context,
      head: _Head('Editar outro dia', widget.subtitle),
      body: [
        _Alert('Enviado · por responder', 'Enquanto $first não responder, podes mudar o dia ou cancelar.'),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('DIA PEDIDO', style: _caps),
                const SizedBox(height: 2),
                Text(_d(widget.fromDate), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ]),
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
              decoration: BoxDecoration(color: const Color(0xFFE6E6E6), borderRadius: BorderRadius.circular(999)),
              child: const Text('Ocupado', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3A3733))),
            ),
          ]),
        ),
        _section(
          'DIAS LIVRES NA TUA AGENDA',
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              for (var i = 0; i < _days.length; i++)
                GestureDetector(
                  behavior: HitTestBehavior.opaque,
                  onTap: () => setState(() => _picked = _days[i].$1),
                  child: Container(
                    constraints: const BoxConstraints(minHeight: 56),
                    decoration: BoxDecoration(
                      border: i == _days.length - 1 ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9))),
                    ),
                    child: Row(children: [
                      Expanded(
                        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text(_d(_days[i].$1), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          Text(_days[i].$2, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                        ]),
                      ),
                      Container(
                        width: 24,
                        height: 24,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: _same(_days[i].$1, _picked) ? AppTheme.brandGreen : Colors.transparent,
                          border: _same(_days[i].$1, _picked) ? null : Border.all(color: const Color(0xFFC9C3B8), width: 1.5),
                        ),
                        child: _same(_days[i].$1, _picked) ? const Icon(Icons.check_rounded, size: 16, color: Colors.white) : null,
                      ),
                    ]),
                  ),
                ),
            ]),
          ),
        ),
        _section(
          'PREÇO',
          Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            _Pills(
              labels: [widget.currentPrice == null ? 'Mesmo preço' : 'Mesmo preço · ${euros(widget.currentPrice!)}', 'Outro preço'],
              selected: _other ? 1 : 0,
              onPick: (i) => setState(() => _other = i == 1),
            ),
            if (_other) ...[
              const SizedBox(height: 8),
              Container(
                height: 52,
                padding: const EdgeInsets.symmetric(horizontal: 18),
                decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(26)),
                child: Row(children: [
                  const Text('Novo total', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  const SizedBox(width: 10),
                  Expanded(
                    child: TextField(
                      controller: _total,
                      onChanged: (_) => setState(() {}),
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink),
                      decoration: const InputDecoration(isCollapsed: true, border: InputBorder.none, hintText: '0'),
                    ),
                  ),
                  const Text('€', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ]),
              ),
            ],
          ]),
        ),
        _section('MENSAGEM PARA ${first.toUpperCase()}', _Box(_msg, lines: 2)),
        Text('Se $first aceitar, o dia do pedido muda para este. O dia do evento não muda sozinho.', style: _muted),
      ],
      buttons: _Buttons(
        outline: 'Cancelar',
        onOutline: _busy ? null : () => _run(() => supabase.rpc('cancel_booking_change', params: {'p_id': widget.changeId}), 'Cancelado.'),
        main: 'Guardar',
        onMain: _busy || (_other && (price == null || price <= 0))
            ? null
            : () => _run(
                  () => supabase.rpc('update_booking_change', params: {
                    'p_id': widget.changeId,
                    'p_to': '${_picked.year}-${_picked.month.toString().padLeft(2, '0')}-${_picked.day.toString().padLeft(2, '0')}',
                    'p_message': _msg.text.trim().isEmpty ? null : _msg.text.trim(),
                    'p_price': _other ? price : 0,
                  }),
                  'Outro dia atualizado.',
                ),
      ),
    );
  }
}

// ───────────────────────────── Pedir alteração ─────────────────────────────

/// Alteração já enviada (para editar).
class SentChange {
  final String id;
  final String kind;
  final String toValue;
  final String? message;
  const SentChange({required this.id, required this.kind, required this.toValue, this.message});
}

/// «Pedir alteração» / «Editar alteração» (prancheta «Pedir ou editar
/// alteração»). `true` se enviou, guardou ou cancelou.
Future<bool> showChangeSheet(
  BuildContext context, {
  required String bookingId,
  required String otherName,
  required String subtitle,
  required int currentPeople,
  SentChange? existing,
}) async {
  final r = await showIslandSheet<bool>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _ChangeSheet(
      bookingId: bookingId,
      otherName: otherName,
      subtitle: subtitle,
      currentPeople: currentPeople,
      existing: existing,
    ),
  );
  return r == true;
}

class _ChangeSheet extends StatefulWidget {
  final String bookingId;
  final String otherName;
  final String subtitle;
  final int currentPeople;
  final SentChange? existing;
  const _ChangeSheet({
    required this.bookingId,
    required this.otherName,
    required this.subtitle,
    required this.currentPeople,
    this.existing,
  });

  @override
  State<_ChangeSheet> createState() => _ChangeSheetState();
}

class _ChangeSheetState extends State<_ChangeSheet> {
  static const _kinds = ['people', 'time', 'scope', 'other'];
  int _kind = 0;
  late int _people = widget.currentPeople + 1;
  final _start = TextEditingController();
  final _end = TextEditingController();
  final _text = TextEditingController();
  final _msg = TextEditingController();
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    final e = widget.existing;
    if (e != null) {
      _kind = _kinds.indexOf(e.kind).clamp(0, 3);
      _msg.text = e.message ?? '';
      if (e.kind == 'people') _people = int.tryParse(e.toValue) ?? _people;
      if (e.kind == 'time') {
        final parts = e.toValue.split('–').map((x) => x.trim()).toList();
        _start.text = parts.first;
        if (parts.length > 1) _end.text = parts[1];
      }
      if (e.kind == 'scope' || e.kind == 'other') _text.text = e.toValue;
    }
  }

  @override
  void dispose() {
    _start.dispose();
    _end.dispose();
    _text.dispose();
    _msg.dispose();
    super.dispose();
  }

  String? get _to => switch (_kinds[_kind]) {
        'people' => '$_people',
        'time' => _start.text.trim().isEmpty ? null : [_start.text.trim(), if (_end.text.trim().isNotEmpty) _end.text.trim()].join(' – '),
        _ => _text.text.trim().isEmpty ? null : _text.text.trim(),
      };

  Future<void> _run(Future<void> Function() f, String ok) async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await f();
      if (!mounted) return;
      _toast(context, ok);
      Navigator.of(context).pop(true);
    } catch (_) {
      if (!mounted) return;
      setState(() => _busy = false);
      _toast(context, 'Não foi possível enviar. Tenta novamente.');
    }
  }

  Widget _hour(String label, TextEditingController c) => Expanded(
        child: Container(
          height: 52,
          padding: const EdgeInsets.symmetric(horizontal: 18),
          decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(26)),
          child: Row(children: [
            Text(label, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            const SizedBox(width: 8),
            Expanded(
              child: TextField(
                controller: c,
                onChanged: (_) => setState(() {}),
                keyboardType: TextInputType.datetime,
                inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[0-9:]'))],
                style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink),
                decoration: const InputDecoration(isCollapsed: true, border: InputBorder.none, hintText: '00:00'),
              ),
            ),
          ]),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final editing = widget.existing != null;
    final kind = _kinds[_kind];
    return _sheet(
      context,
      head: _Head(editing ? 'Editar alteração' : 'Pedir alteração', widget.subtitle),
      body: [
        if (editing)
          _Alert('Enviado · por responder', 'Enquanto ${widget.otherName} não responder, podes mudar ou cancelar.'),
        _section(
          'O QUE MUDA',
          _Pills(
            labels: const ['Pessoas', 'Hora', 'O que inclui', 'Outra coisa'],
            selected: _kind,
            onPick: editing ? (_) {} : (i) => setState(() => _kind = i),
          ),
        ),
        if (kind == 'people')
          _Stepper(top: 'Agora ${widget.currentPeople} · passa a', value: _people, note: '', onChanged: (v) => setState(() => _people = v))
        else if (kind == 'time')
          Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            const Text('Passa a', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            const SizedBox(height: 8),
            Row(children: [_hour('Início', _start), const SizedBox(width: 8), _hour('Fim', _end)]),
          ])
        else
          _Box(_text, lines: 3, hint: kind == 'scope' ? 'Trocar o álbum de 30 pelo de 50 páginas.' : 'Escreve o que querem mudar.'),
        _section('MENSAGEM (OPCIONAL)', _Box(_msg, lines: 2)),
        Text('${widget.otherName} aceita ou recusa. Se o preço mudar, chega uma proposta nova para aceitar.', style: _muted),
      ],
      buttons: _Buttons(
        outline: editing ? 'Cancelar pedido' : null,
        onOutline: _busy
            ? null
            : () => _run(() => supabase.rpc('cancel_booking_change', params: {'p_id': widget.existing!.id}), 'Pedido cancelado.'),
        main: editing ? 'Guardar' : 'Enviar pedido',
        onMain: _busy
            ? null
            : () {
                final to = _to;
                if (to == null) {
                  _toast(context, 'Diz o que muda.');
                  return;
                }
                _run(
                  () => editing
                      ? supabase.rpc('update_booking_change', params: {
                          'p_id': widget.existing!.id,
                          'p_to': to,
                          'p_message': _msg.text.trim().isEmpty ? null : _msg.text.trim(),
                        })
                      : supabase.rpc('request_booking_change', params: {
                          'p_booking': widget.bookingId,
                          'p_kind': kind,
                          'p_to': to,
                          'p_message': _msg.text.trim().isEmpty ? null : _msg.text.trim(),
                        }),
                  editing ? 'Alteração guardada.' : 'Pedido de alteração enviado.',
                );
              },
      ),
    );
  }
}
