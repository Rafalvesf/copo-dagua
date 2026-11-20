import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';

import '../../../core/models/models.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/address_picker.dart' show AddressField;
import '../../../shared/widgets/snappy_tap.dart';

/// Pedido de reserva em passos (mockups «Reservar por categoria»,
/// 2026-11-20): 1 Para que evento? · 2 Confirma as pessoas · 3 Quem paga?
/// (só onde faz sentido) · 4 o que falta saber (horas, entrega, partida…)
/// · 5 Tudo certo? → «Pedir reserva». O dia, o local e as pessoas vêm do
/// evento e não voltam a ser perguntados. Os extras e o pagamento vêm
/// depois de o parceiro aceitar.

/// Que perguntas faz o passo «quando», conforme a categoria do parceiro.
enum ReserveKind { mesa, atividade, espaco, servico, encomenda, transporte }

ReserveKind reserveKindFor(String? slug) => switch (slug) {
      'restaurants' || 'bars_nightlife' || 'catering' => ReserveKind.mesa,
      'adventure_activities' || 'experiences_tours' || 'games_escape' || 'spa_wellness' => ReserveKind.atividade,
      'venue' || 'lodging' => ReserveKind.espaco,
      'cake' || 'flowers_decor' || 'invitations' || 'rentals' => ReserveKind.encomenda,
      'transport' => ReserveKind.transporte,
      _ => ReserveKind.servico,
    };

/// «Quem paga?» só nestas categorias e em eventos de grupo (nos de família
/// paga quem organiza — pedido de 2026-11-15).
bool reserveAsksWhoPays(ReserveKind kind, Wedding event) =>
    const {ReserveKind.mesa, ReserveKind.atividade, ReserveKind.transporte}.contains(kind) &&
    !const {
      EventType.wedding, EventType.baptism, EventType.communion,
      EventType.engagement, EventType.vowRenewal, EventType.babyShower,
    }.contains(event.eventType);

class ReserveFlowResult {
  final Wedding event;
  final int adults;
  final int children;
  final bool eachPays;

  /// O que foi respondido no passo «quando», já em texto («Hora · 20:00»).
  final List<(String, String)> details;
  const ReserveFlowResult({required this.event, required this.adults, required this.children, required this.eachPays, required this.details});

  int get people => adults + children;

  /// Uma linha para a mensagem ao parceiro.
  String summary() => [
        '$people ${people == 1 ? 'pessoa' : 'pessoas'} ($adults ${adults == 1 ? 'adulto' : 'adultos'}${children > 0 ? ' + $children ${children == 1 ? 'criança' : 'crianças'}' : ''})',
        for (final (k, v) in details) '$k: $v',
        if (eachPays) 'cada convite paga o seu',
      ].join(' · ');
}

/// Pessoas de um evento: adultos e crianças da lista de convidados (sem os
/// que disseram que não vão) e o número do evento.
Future<(int, int, int)> eventPeople(Wedding event) async {
  var adults = 0, children = 0;
  try {
    final rows = await supabase
        .from('guests')
        .select('age_group, rsvp_status, plus_one_name')
        .eq('wedding_id', event.id);
    for (final r in rows) {
      if (r['rsvp_status'] == 'declined') continue;
      if (r['age_group'] == 'child') {
        children++;
      } else {
        adults++;
      }
      if ((r['plus_one_name'] as String?)?.trim().isNotEmpty == true) adults++;
    }
  } catch (_) {}
  final listed = adults + children;
  final total = event.estimatedGuests ?? listed;
  if (listed == 0) adults = total;
  return (adults, children, total);
}

const _weekdays = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'];
const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

String _day(DateTime d) {
  final w = _weekdays[d.weekday - 1];
  return '${w[0].toUpperCase()}${w.substring(1)}, ${d.day} ${_months[d.month - 1]}';
}

String _place(Wedding w) => (w.venue?.trim().isNotEmpty == true) ? w.venue!.trim() : (w.location ?? '').trim();

String _eventLine(Wedding w) => [
      if (w.weddingDate != null) '${_day(w.weddingDate!)} ${w.weddingDate!.year}',
      if (_place(w).isNotEmpty) _place(w),
    ].join(' · ');

List<String> _times(int fromHour, int toHour) => [
      for (var h = fromHour; h <= toHour; h++) ...['${(h % 24).toString().padLeft(2, '0')}:00', '${(h % 24).toString().padLeft(2, '0')}:30'],
    ];

class ReserveFlowSheet extends StatefulWidget {
  final String partnerName;
  final ReserveKind kind;

  /// `null` = reservar mesa (cada convidado escolhe o seu menu depois).
  final ServicePackage? package;
  final List<Wedding> events;

  const ReserveFlowSheet({super.key, required this.partnerName, required this.kind, this.package, required this.events});

  @override
  State<ReserveFlowSheet> createState() => _ReserveFlowSheetState();
}

class _ReserveFlowSheetState extends State<ReserveFlowSheet> {
  late Wedding _event = widget.events.first;
  int _step = 0;

  // Pessoas (vêm do evento).
  int? _eventTotal;
  int _adults = 0, _children = 0;
  bool _loadingPeople = false;
  String? _loadedFor;

  bool _eachPays = false;

  // O que falta saber (passo «quando»).
  String? _time;
  String? _endTime;
  int _duration = 4;
  int _rooms = 0;
  bool _roomsEach = true;
  bool _delivery = true;
  String? _window;
  String? _returnTime;
  int _seats = 0;
  final _departure = TextEditingController();

  @override
  void dispose() {
    _departure.dispose();
    super.dispose();
  }

  bool get _asksWhoPays => reserveAsksWhoPays(widget.kind, _event);

  List<String> get _steps => ['event', 'people', if (_asksWhoPays) 'pays', 'when', 'confirm'];

  Future<void> _loadPeople() async {
    if (_loadedFor == _event.id) return;
    setState(() => _loadingPeople = true);
    final (a, c, t) = await eventPeople(_event);
    if (!mounted) return;
    setState(() {
      _adults = a;
      _children = c;
      _eventTotal = t;
      _loadedFor = _event.id;
      _loadingPeople = false;
    });
  }

  void _next() {
    final steps = _steps;
    if (steps[_step] == 'event') _loadPeople();
    if (_step < steps.length - 1) setState(() => _step++);
  }

  void _back() {
    if (_step > 0) setState(() => _step--);
  }

  // ---------- o que foi respondido ----------
  List<(String, String)> get _details => switch (widget.kind) {
        ReserveKind.mesa => [if (_time != null) ('Hora', _time!)],
        ReserveKind.atividade => [if (_time != null) ('Sessão', _time!)],
        ReserveKind.espaco => [
            if (_time != null) ('Horário', '${_time!}${_endTime != null ? '–${_endTime!}' : ''}'),
            if (_rooms > 0) ('Quartos', '$_rooms · ${_roomsEach ? 'cada hóspede paga o seu' : 'pagamos nós'}'),
          ],
        ReserveKind.servico => [
            if (_time != null) ('Começa às', _time!),
            ('Duração', '$_duration h'),
          ],
        ReserveKind.encomenda => [
            (_delivery ? 'Entrega' : 'Recolha', _delivery ? 'No local do evento' : 'Na loja'),
            if (_window != null) ('Janela', _window!),
          ],
        ReserveKind.transporte => [
            if (_departure.text.trim().isNotEmpty) ('Partida', _departure.text.trim()),
            if (_time != null) ('Ida', _time!),
            ('Regresso', _returnTime ?? 'Sem regresso'),
            if (_seats > 0) ('Cadeirinhas', '$_seats'),
          ],
      };

  bool get _whenReady => switch (widget.kind) {
        ReserveKind.encomenda => _window != null,
        ReserveKind.transporte => _time != null && _departure.text.trim().isNotEmpty,
        _ => _time != null,
      };

  // ---------- peças ----------
  Widget _caps(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(t, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
      );

  Widget _option(String title, String sub, bool on, VoidCallback onTap) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Semantics(
          button: true,
          selected: on,
          child: SnappyTap(
            onTap: onTap,
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 160),
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(color: on ? AppTheme.accentOliveDark : AppTheme.background, borderRadius: BorderRadius.circular(22)),
              child: Row(children: [
                Container(
                  width: 22,
                  height: 22,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: Colors.white,
                    border: on ? null : Border.all(color: AppTheme.inkMuted, width: 1.5),
                  ),
                  alignment: Alignment.center,
                  child: on
                      ? Container(width: 12, height: 12, decoration: const BoxDecoration(shape: BoxShape.circle, color: AppTheme.accentOliveDark))
                      : null,
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(title, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
                    if (sub.isNotEmpty)
                      Text(sub, style: TextStyle(fontSize: 13, color: on ? Colors.white.withValues(alpha: 0.85) : AppTheme.inkMuted)),
                  ]),
                ),
              ]),
            ),
          ),
        ),
      );

  Widget _pills(List<String> items, String? selected, ValueChanged<String> onTap) => Wrap(spacing: 8, runSpacing: 8, children: [
        for (final it in items)
          Semantics(
            button: true,
            selected: it == selected,
            child: SnappyTap(
              onTap: () => onTap(it),
              child: Container(
                height: 38,
                padding: const EdgeInsets.symmetric(horizontal: 14),
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: it == selected ? AppTheme.accentOliveDark : AppTheme.background,
                  borderRadius: BorderRadius.circular(19),
                ),
                child: Text(it,
                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: it == selected ? Colors.white : AppTheme.ink)),
              ),
            ),
          ),
      ]);

  Widget _counter(String name, String meta, int value, ValueChanged<int> onChange, {int min = 0, int max = 9999, String Function(int)? label}) => Container(
        constraints: const BoxConstraints(minHeight: 64),
        child: Row(children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          _Step(icon: Hi.minus, label: 'Menos', onTap: value > min ? () => onChange(value - 1) : null),
          SizedBox(
            width: 48,
            child: Text(label?.call(value) ?? '$value',
                textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          _Step(icon: Hi.plus, label: 'Mais', onTap: value < max ? () => onChange(value + 1) : null),
        ]),
      );

  Widget _group(List<Widget> rows) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
        decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
        child: Column(children: [
          for (final (i, r) in rows.indexed)
            Container(
              decoration: i == 0 ? null : const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFFECE7DC)))),
              child: r,
            ),
        ]),
      );

  Widget _note(String t, {bool green = false}) => green
      ? Align(
          alignment: Alignment.centerLeft,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
            child: Text(t, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
          ),
        )
      : Text(t, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4));

  // ---------- passos ----------
  List<Widget> _eventStep() {
    final p = widget.package;
    return [
      if (p != null) ...[
        _caps('PACOTE'),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(22), border: Border.all(color: AppTheme.ink, width: 1.5)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(p.name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            Text(
              [
                if (p.minPeople != null && p.maxPeople != null) 'Para ${p.minPeople} a ${p.maxPeople} pessoas'
                else if (p.maxPeople != null) 'Até ${p.maxPeople} pessoas',
                '${p.isStartingPrice ? 'desde ' : ''}${euros(p.price)}${priceUnitSuffix(p.priceUnit)}',
              ].join(' · '),
              style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
            ),
          ]),
        ),
        const SizedBox(height: 16),
      ],
      _caps('EVENTO'),
      for (final e in widget.events)
        _option(e.displayNames, _eventLine(e), e.id == _event.id, () => setState(() => _event = e)),
      _note('O dia, o local e as pessoas vêm do evento: não voltamos a perguntar.'),
    ];
  }

  List<Widget> _peopleStep() {
    if (_loadingPeople || _eventTotal == null) {
      return const [Padding(padding: EdgeInsets.all(24), child: Center(child: CircularProgressIndicator()))];
    }
    final n = _adults + _children;
    final ev = _eventTotal!;
    final p = widget.package;
    final minP = p?.minPeople, maxP = p?.maxPeople;
    final outOfPackage = (minP != null && n < minP) || (maxP != null && n > maxP);
    return [
      _group([
        _counter('Adultos', '13 anos ou mais', _adults, (v) => setState(() => _adults = v)),
        _counter('Crianças', 'Até 12 anos', _children, (v) => setState(() => _children = v)),
        if (widget.kind == ReserveKind.transporte)
          _counter('Cadeirinhas', 'Para crianças pequenas', _seats, (v) => setState(() => _seats = v), max: _children),
      ]),
      const SizedBox(height: 12),
      if (n != ev)
        Container(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 12),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(22), border: Border.all(color: const Color(0xFFF2A01B), width: 1.5)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Container(
                margin: const EdgeInsets.only(top: 7),
                width: 8,
                height: 8,
                decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFF2A01B)),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('Selecionaste ${n > ev ? 'mais' : 'menos'} convidados do que no evento',
                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text('No evento há $ev. Qual está certo?', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
            ]),
            const SizedBox(height: 10),
            _pills(['Só $n nesta reserva', 'Os $ev do evento'], 'Só $n nesta reserva', (v) {
              if (v.startsWith('Os ')) {
                _loadedFor = null;
                _loadPeople();
              }
            }),
          ]),
        )
      else
        _note('Do evento e das respostas dos convidados · $n', green: true),
      const SizedBox(height: 10),
      _note([
        if (minP != null && maxP != null) 'O pacote é para $minP a $maxP pessoas.' else if (maxP != null) 'O pacote é até $maxP pessoas.',
        'Muda só se não forem todos.',
      ].join(' ')),
      if (outOfPackage) ...[
        const SizedBox(height: 6),
        const Text('Este número não cabe no pacote.', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppStatusColors.declined)),
      ],
    ];
  }

  List<Widget> _paysStep() => [
        _option('Pagamos nós', 'Uma só conta, paga por quem reserva', !_eachPays, () => setState(() => _eachPays = false)),
        _option('Cada convite paga o seu', 'Quem recebe o convite paga por si e por quem leva (acompanhantes e filhos), na app, 3 dias antes',
            _eachPays, () => setState(() => _eachPays = true)),
      ];

  List<Widget> _whenStep() {
    const gap = SizedBox(height: 16);
    switch (widget.kind) {
      case ReserveKind.mesa:
        return [_caps('HORA'), _pills(_times(12, 22), _time, (v) => setState(() => _time = v))];
      case ReserveKind.atividade:
        return [_caps('SESSÃO'), _pills(_times(9, 20), _time, (v) => setState(() => _time = v))];
      case ReserveKind.servico:
        return [
          _caps('COMEÇA ÀS'),
          _pills(_times(9, 22), _time, (v) => setState(() => _time = v)),
          gap,
          _group([_counter('Duração', 'Horas de serviço', _duration, (v) => setState(() => _duration = v), min: 1, max: 16, label: (v) => '$v h')]),
        ];
      case ReserveKind.espaco:
        return [
          _group([_counter('Quartos', 'Para quem fica a dormir · opcional', _rooms, (v) => setState(() => _rooms = v))]),
          if (_rooms > 0) ...[
            gap,
            _caps('QUEM PAGA OS QUARTOS'),
            _pills(['Nós', 'Cada hóspede o seu'], _roomsEach ? 'Cada hóspede o seu' : 'Nós', (v) => setState(() => _roomsEach = v != 'Nós')),
          ],
          gap,
          _caps('COMEÇA ÀS'),
          _pills(_times(10, 20), _time, (v) => setState(() => _time = v)),
          gap,
          _caps('ACABA ÀS'),
          _pills(_times(20, 28), _endTime, (v) => setState(() => _endTime = v)),
        ];
      case ReserveKind.encomenda:
        return [
          _option('Entrega no local do evento', _place(_event), _delivery, () => setState(() => _delivery = true)),
          _option('Recolha na loja', widget.partnerName, !_delivery, () => setState(() => _delivery = false)),
          gap,
          _caps(_delivery ? 'JANELA DE ENTREGA' : 'JANELA DE RECOLHA'),
          _pills(const ['08:00–10:00', '10:00–12:00', '12:00–14:00', '14:00–16:00', '16:00–18:00'], _window,
              (v) => setState(() => _window = v)),
        ];
      case ReserveKind.transporte:
        return [
          AddressField(
            controller: _departure,
            label: 'PARTIDA',
            hint: 'De onde sai',
            pickerTitle: 'De onde sai o transporte?',
            onPicked: (_) => setState(() {}),
          ),
          gap,
          _caps('IDA'),
          _pills(_times(8, 22), _time, (v) => setState(() => _time = v)),
          gap,
          _caps('REGRESSO'),
          _pills(['Sem regresso', ..._times(20, 28)], _returnTime ?? 'Sem regresso',
              (v) => setState(() => _returnTime = v == 'Sem regresso' ? null : v)),
        ];
    }
  }

  (String, String) get _whenTitle => switch (widget.kind) {
        ReserveKind.mesa || ReserveKind.servico => ('A que horas?', ''),
        ReserveKind.atividade => ('A que horas?', ''),
        ReserveKind.espaco => ('Horário e quartos', ''),
        ReserveKind.encomenda => ('Entrega ou recolha?', ''),
        ReserveKind.transporte => ('De onde e a que horas?', ''),
      };

  List<Widget> _confirmStep() {
    final p = widget.package;
    final n = _adults + _children;
    final rows = <(String, String)>[
      if (_event.weddingDate != null) ('Quando', _day(_event.weddingDate!)),
      ('Pessoas', '$_adults ${_adults == 1 ? 'adulto' : 'adultos'}${_children > 0 ? ' + $_children ${_children == 1 ? 'criança' : 'crianças'}' : ''}'),
      ..._details,
      if (_asksWhoPays) ('Quem paga', _eachPays ? 'Cada convite paga o seu' : 'Pagamos nós'),
      if (p != null) ('Pacote', p.name) else ('Menus', 'Cada convidado escolhe o seu'),
    ];
    final total = p == null || p.isStartingPrice ? null : (p.perPerson ? p.price * n : p.price);
    return [
      _group([
        for (final (k, v) in rows)
          Container(
            constraints: const BoxConstraints(minHeight: 48),
            padding: const EdgeInsets.symmetric(vertical: 8),
            child: Row(children: [
              Text(k, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(width: 12),
              Expanded(
                child: Text(v,
                    textAlign: TextAlign.right, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ]),
          ),
      ]),
      if (total != null) ...[
        const SizedBox(height: 12),
        Row(children: [
          Expanded(child: Text(p!.perPerson ? 'Total previsto' : 'Total', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
          Text(euros(total), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
      ],
      const SizedBox(height: 12),
      _note(p == null
          ? 'Não pagas nada agora. O organizador não escolhe menus: cada convidado escolhe o seu na app${_eachPays ? ' e cada convite paga a sua parte 3 dias antes' : ''}.'
          : _eachPays
              ? 'Não pagas nada agora. Cada convite paga a sua parte na app 3 dias antes. ${widget.partnerName} aceita ou recusa.'
              : 'Não pagas nada agora. ${widget.partnerName} aceita ou recusa e avisamos-te; depois pagas na app.'),
    ];
  }

  @override
  Widget build(BuildContext context) {
    final steps = _steps;
    if (_step >= steps.length) _step = steps.length - 1;
    final st = steps[_step];
    final (title, sub) = switch (st) {
      'event' => ('Para que evento?', widget.partnerName),
      'people' => ('Confirma as pessoas', 'Já vem preenchido do evento.'),
      'pays' => ('Quem paga?', 'Podes mudar até a reserva ser aceite.'),
      'when' => (_whenTitle.$1, [_eventLine(_event), 'do evento'].where((s) => s.isNotEmpty).join(' · ')),
      _ => ('Tudo certo?', widget.partnerName),
    };
    final body = switch (st) {
      'event' => _eventStep(),
      'people' => _peopleStep(),
      'pays' => _paysStep(),
      'when' => _whenStep(),
      _ => _confirmStep(),
    };
    final canNext = switch (st) {
      'people' => !_loadingPeople && _eventTotal != null && _adults + _children > 0,
      'when' => _whenReady,
      _ => true,
    };
    final primary = switch (st) {
      'people' => 'Confirmar',
      'confirm' => 'Pedir reserva',
      _ => 'Continuar',
    };
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Expanded(
            child: ClipRRect(
              borderRadius: BorderRadius.circular(5),
              child: LinearProgressIndicator(
                value: (_step + 1) / steps.length,
                minHeight: 10,
                backgroundColor: const Color(0xFFECE7DC),
                color: AppTheme.accentOliveDark,
              ),
            ),
          ),
          const SizedBox(width: 10),
          Text('${_step + 1} DE ${steps.length}', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        const SizedBox(height: 16),
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (sub.isNotEmpty) ...[
                const SizedBox(height: 4),
                Text(sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ],
            ]),
          ),
          const SizedBox(width: 12),
          Semantics(
            button: true,
            label: 'Fechar',
            child: SnappyTap(
              onTap: () => Navigator.of(context).pop(),
              child: Container(
                width: 44,
                height: 44,
                decoration: const BoxDecoration(color: AppTheme.background, shape: BoxShape.circle),
                child: const Icon(Hi.xMark, size: 20, color: AppTheme.ink),
              ),
            ),
          ),
        ]),
        const SizedBox(height: 16),
        ...body,
        const SizedBox(height: 20),
        Row(children: [
          if (_step > 0) ...[
            Expanded(child: _Btn('Voltar', outlined: true, onTap: _back)),
            const SizedBox(width: 8),
          ],
          Expanded(
            flex: 2,
            child: _Btn(primary,
                onTap: !canNext
                    ? null
                    : st == 'confirm'
                        ? () => Navigator.of(context).pop(ReserveFlowResult(
                              event: _event,
                              adults: _adults,
                              children: _children,
                              eachPays: _asksWhoPays && _eachPays,
                              details: _details,
                            ))
                        : _next),
          ),
        ]),
      ]),
    );
  }
}

class _Step extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback? onTap;
  const _Step({required this.icon, required this.label, this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        label: label,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            width: 36,
            height: 36,
            decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
            child: Icon(icon, size: 16, color: onTap == null ? const Color(0xFFCFC8B8) : AppTheme.ink),
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
  Widget build(BuildContext context) => Semantics(
        button: true,
        enabled: onTap != null,
        child: SnappyTap(
          onTap: onTap,
          child: AnimatedOpacity(
            duration: const Duration(milliseconds: 150),
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
        ),
      );
}
