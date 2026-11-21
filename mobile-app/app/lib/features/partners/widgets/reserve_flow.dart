import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';

import '../../../core/models/models.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/address_picker.dart' show AddressField;
import '../../../shared/widgets/alert_outline.dart' show AlertTone, toneForDue;
import '../../../shared/widgets/pay_later_sheet.dart';
import '../../../shared/widgets/island_sheet.dart' show IslandBackButton, IslandCloseButton;
import '../../../shared/widgets/snappy_tap.dart';
import 'package:copo_dagua_app/shared/widgets/app_progress.dart';

/// Pedido de reserva em passos (mockups «Reservar por categoria»,
/// 2026-11-20/21) — o mesmo fluxo em todas as categorias: Para que evento?
/// · Confirma as pessoas · Quem paga? (só onde faz sentido) · o que falta
/// saber (horas, entrega, partida…) · Tudo certo? · Queres juntar alguma
/// coisa? (extras) · Pedir reserva. O dia, o local e as pessoas vêm do
/// evento e não voltam a ser perguntados; a reserva só é pedida depois dos
/// extras. O voltar é sempre o círculo no canto de cima (DESIGN.md §6.1).

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

  /// Extras escolhidos no passo «Queres juntar alguma coisa?».
  final List<ServiceExtra> extras;

  /// Pedido de orçamento: a mensagem para o parceiro.
  final String? message;

  /// «Pagar o sinal» no fim do pedido (migração 207): o sinal paga-se já e
  /// fica cativo até o parceiro responder. `false` = «Pagar mais tarde».
  final bool payNow;
  const ReserveFlowResult({
    required this.event,
    required this.adults,
    required this.children,
    required this.eachPays,
    required this.details,
    this.extras = const [],
    this.message,
    this.payNow = false,
  });

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

/// «Sáb, 12 jun» — para os textos dos popups de reserva.
String reserveShortDay(DateTime d) => _day(d);

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

  /// Extras do parceiro que se aplicam ao pacote (ou à mesa).
  final List<ServiceExtra> extras;

  /// Percentagem do sinal do parceiro (`partner_deposit_pct`, 191): 100 =
  /// sem sinal, paga-se tudo de uma vez nos 6 dias antes do prazo.
  final double depositPct;

  /// Pedido de orçamento (só orçamento): o mesmo fluxo, sem pacote nem
  /// extras — acaba em «Pedir orçamento» e o parceiro responde com uma
  /// proposta. [reference] é o valor de referência do parceiro.
  final bool quote;
  final double? reference;
  final String? initialMessage;

  const ReserveFlowSheet({
    super.key,
    required this.partnerName,
    required this.kind,
    this.package,
    required this.events,
    this.extras = const [],
    this.depositPct = 30,
    this.quote = false,
    this.reference,
    this.initialMessage,
  });

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
  final Set<String> _extras = {};

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
  late final _message = TextEditingController(text: widget.initialMessage ?? '');

  @override
  void dispose() {
    _departure.dispose();
    _message.dispose();
    super.dispose();
  }

  bool get _asksWhoPays => !widget.quote && reserveAsksWhoPays(widget.kind, _event);

  List<String> get _steps => [
        'event',
        'people',
        if (_asksWhoPays) 'pays',
        'when',
        'confirm',
        if (!widget.quote && widget.extras.isNotEmpty) 'extras',
        if (!widget.quote) 'request',
      ];

  int get _people => _adults + _children;

  double _amount(String unit, double price) => unit == 'person' ? price * _people : price;

  /// Total do pacote, ou `null` se o preço é «desde» ou é uma mesa.
  double? get _packageTotal {
    final p = widget.package;
    if (p == null || p.isStartingPrice) return null;
    return _amount(p.priceUnit, p.price);
  }

  double get _extrasTotal => widget.extras
      .where((e) => _extras.contains(e.id))
      .fold<double>(0, (t, e) => t + _amount(e.priceUnit, e.price));

  bool get _noDeposit => widget.depositPct >= 100;

  /// Último passo com sinal: «Pagar o sinal» ou «Pagar mais tarde».
  bool get _paysDeposit =>
      !widget.quote && widget.package != null && !(_asksWhoPays && _eachPays) && !_noDeposit && _packageTotal != null;

  double get _depositNow => double.parse(((_packageTotal! + _extrasTotal) * widget.depositPct / 100).toStringAsFixed(2));

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

  ReserveFlowResult _resultWith({required bool payNow}) => ReserveFlowResult(
        event: _event,
        adults: _adults,
        children: _children,
        eachPays: _asksWhoPays && _eachPays,
        details: _details,
        extras: widget.extras.where((e) => _extras.contains(e.id)).toList(),
        message: _message.text.trim().isEmpty ? null : _message.text.trim(),
        payNow: payNow,
      );

  /// «Pagar mais tarde» no fim do pedido: o aviso de que sem o sinal se pode
  /// perder a reserva; confirmando, pede-se sem pagar.
  Future<void> _payLater() async {
    final ev = _event.weddingDate;
    final due = ev?.subtract(const Duration(days: 30));
    final tone = due == null ? AlertTone.pending : toneForDue(due);
    final urgent = tone == AlertTone.urgent;
    final later = await askPayLater(
      context,
      partnerName: widget.partnerName,
      tone: tone,
      head: urgent && due != null ? '${payLaterDaysLeft(due)} para pagar o sinal' : 'Sem o sinal, podes perder a reserva',
      sub: '${widget.partnerName} pode aceitar outro pedido para este dia.',
      note: '${due != null && !urgent ? 'Tens até ${payLaterDay(due)} (30 dias antes do evento)' : 'Paga o sinal assim que ${widget.partnerName} aceitar'}. '
          'Avisamos-te 6 dias antes do prazo e nos últimos 3 dias. Pagas em Reservas, no evento.',
    );
    if (later && mounted) Navigator.of(context).pop(_resultWith(payNow: false));
  }

  ReserveFlowResult get _result => _resultWith(payNow: false);

  // ---------- o que foi respondido ----------
  List<(String, String)> get _details => widget.quote ? [if (_time != null) ('Começa às', _time!)] : switch (widget.kind) {
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

  bool get _whenReady => widget.quote || switch (widget.kind) {
        ReserveKind.encomenda => _window != null,
        ReserveKind.transporte => _time != null && _departure.text.trim().isNotEmpty,
        _ => _time != null,
      };

  // ---------- peças ----------
  Widget _caps(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(t, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
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
                      ? Container(width: 12, height: 12, decoration: BoxDecoration(shape: BoxShape.circle, color: AppTheme.accentOliveDark))
                      : null,
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(title, style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
                    if (sub.isNotEmpty)
                      Text(sub, style: TextStyle(fontSize: 14, color: on ? Colors.white.withValues(alpha: 0.85) : AppTheme.inkMuted)),
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
                    style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: it == selected ? Colors.white : AppTheme.ink)),
              ),
            ),
          ),
      ]);

  Widget _counter(String name, String meta, int value, ValueChanged<int> onChange, {int min = 0, int max = 9999, String Function(int)? label}) => Container(
        constraints: const BoxConstraints(minHeight: 64),
        child: Row(children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(name, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
            ]),
          ),
          _Step(icon: Hi.minus, label: 'Menos', onTap: value > min ? () => onChange(value - 1) : null),
          SizedBox(
            width: 48,
            child: Text(label?.call(value) ?? '$value',
                textAlign: TextAlign.center, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
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
              decoration: i == 0 ? null : const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFFD9D9D9)))),
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
            child: Text(t, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
          ),
        )
      : Text(t, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted, height: 1.4));

  // ---------- passos ----------
  List<Widget> _eventStep() {
    final p = widget.package;
    return [
      if (widget.quote) ...[
        _caps('PEDIDO'),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(22), border: Border.all(color: AppTheme.ink, width: 1.5)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Só orçamento', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            Text(
              [if (widget.reference != null) 'Referência ≈ ${euros(widget.reference!)}', 'responde com uma proposta'].join(' · '),
              style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted),
            ),
          ]),
        ),
        const SizedBox(height: 16),
      ],
      if (p != null) ...[
        _caps('PACOTE'),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(22), border: Border.all(color: AppTheme.ink, width: 1.5)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(p.name, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            Text(
              [
                if (p.minPeople != null && p.maxPeople != null) 'Para ${p.minPeople} a ${p.maxPeople} pessoas'
                else if (p.maxPeople != null) 'Até ${p.maxPeople} pessoas',
                '${p.isStartingPrice ? 'desde ' : ''}${euros(p.price)}${priceUnitSuffix(p.priceUnit)}',
              ].join(' · '),
              style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted),
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
      // Mais do que no evento: avisa e pergunta qual está certo. Menos é
      // normal (nem todos vão): só uma linha neutra.
      if (n > ev)
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
                  const Text('Selecionaste mais convidados do que no evento',
                      style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text('No evento há $ev. Qual está certo?', style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
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
      else if (n < ev)
        _note('$n de $ev do evento')
      else
        _note('Do evento e das respostas dos convidados · $n', green: true),
      const SizedBox(height: 10),
      _note([
        if (minP != null && maxP != null) 'O pacote é para $minP a $maxP pessoas.' else if (maxP != null) 'O pacote é até $maxP pessoas.',
        'Muda só se não forem todos.',
      ].join(' ')),
      if (outOfPackage) ...[
        const SizedBox(height: 6),
        const Text('Este número não cabe no pacote.', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppStatusColors.declined)),
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
    if (widget.quote) {
      return [
        _caps('COMEÇA ÀS'),
        _pills(_times(9, 22), _time, (v) => setState(() => _time = _time == v ? null : v)),
        gap,
        _caps('MENSAGEM'),
        TextField(
          controller: _message,
          minLines: 3,
          maxLines: 6,
          maxLength: 1000,
          textCapitalization: TextCapitalization.sentences,
          style: const TextStyle(fontSize: 16, color: AppTheme.ink),
          decoration: InputDecoration(
            hintText: 'O que procuras, o estilo, o que é importante para vocês…',
            filled: true,
            fillColor: AppTheme.background,
            counterText: '',
            contentPadding: const EdgeInsets.all(16),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(22), borderSide: BorderSide.none),
            enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(22), borderSide: BorderSide.none),
            focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(22), borderSide: const BorderSide(color: AppTheme.ink, width: 1.5)),
          ),
        ),
      ];
    }
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

  (String, String) get _whenTitle => widget.quote ? ('O que procuras?', '') : switch (widget.kind) {
        ReserveKind.mesa || ReserveKind.servico => ('A que horas?', ''),
        ReserveKind.atividade => ('A que horas?', ''),
        ReserveKind.espaco => ('Horário e quartos', ''),
        ReserveKind.encomenda => ('Entrega ou recolha?', ''),
        ReserveKind.transporte => ('De onde e a que horas?', ''),
      };

  List<Widget> _confirmStep() {
    final p = widget.package;
    final rows = <(String, String)>[
      if (p != null) ('Pacote', p.name),
      if (_event.weddingDate != null) ('Quando', _day(_event.weddingDate!)),
      ('Pessoas', '$_adults ${_adults == 1 ? 'adulto' : 'adultos'}${_children > 0 ? ' + $_children ${_children == 1 ? 'criança' : 'crianças'}' : ''}'),
      ..._details,
      if (_asksWhoPays) ('Quem paga', _eachPays ? 'Cada convite paga o seu' : 'Pagamos nós'),
      if (widget.quote && _place(_event).isNotEmpty) ('Onde', _place(_event)),
      if (p == null && !widget.quote) ('Menus', 'Cada convidado escolhe o seu'),
    ];
    final total = _packageTotal;
    return [
      _group([
        for (final (k, v) in rows)
          Container(
            constraints: const BoxConstraints(minHeight: 48),
            padding: const EdgeInsets.symmetric(vertical: 8),
            child: Row(children: [
              Text(k, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
              const SizedBox(width: 12),
              Expanded(
                child: Text(v,
                    textAlign: TextAlign.right, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ]),
          ),
      ]),
      if (total != null) ...[
        const SizedBox(height: 12),
        Row(children: [
          Expanded(child: Text(p!.perPerson ? 'Total previsto' : 'Total', style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted))),
          Text(euros(total), style: const TextStyle(fontSize: 21, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
      ],
      if (widget.quote) ...[
        if (widget.reference != null) ...[
          const SizedBox(height: 12),
          _line('Referência', '≈ ${euros(widget.reference!)}', big: true),
        ],
        const SizedBox(height: 12),
        _note('Não pagas nada agora. ${widget.partnerName} responde com uma proposta; se a aceitares, segue como uma reserva.'),
      ] else if (p == null) ...[
        const SizedBox(height: 12),
        _note('O organizador não escolhe menus: cada convidado escolhe o seu na app.'),
      ],
    ];
  }

  // Extras (antes de pedir: a reserva só é pedida depois dos extras).
  List<Widget> _extrasStep() {
    final base = _packageTotal;
    final total = base == null ? null : base + _extrasTotal;
    return [
      _group([
        for (final e in widget.extras)
          Semantics(
            button: true,
            selected: _extras.contains(e.id),
            child: SnappyTap(
              onTap: () => setState(() => _extras.contains(e.id) ? _extras.remove(e.id) : _extras.add(e.id)),
              child: Container(
                constraints: const BoxConstraints(minHeight: 64),
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: Row(children: [
                  Container(
                    width: 22,
                    height: 22,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: _extras.contains(e.id) ? AppTheme.accentOliveDark : Colors.white,
                      border: _extras.contains(e.id) ? null : Border.all(color: AppTheme.inkMuted, width: 1.5),
                    ),
                    child: _extras.contains(e.id) ? const Icon(Hi.check, size: 13, color: Colors.white) : null,
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                      Text(e.name, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      if (e.details.isNotEmpty || e.priceUnit == 'person')
                        Text(
                          [
                            ...e.details,
                            if (e.priceUnit == 'person') '${euros(e.price)} por pessoa · $_people',
                          ].join(' · '),
                          style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted),
                        ),
                    ]),
                  ),
                  const SizedBox(width: 10),
                  Text('+ ${euros(_amount(e.priceUnit, e.price))}',
                      style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ]),
              ),
            ),
          ),
      ]),
      if (total != null) ...[
        const SizedBox(height: 16),
        _line(_noDeposit || widget.package == null ? 'Total' : 'Reserva + extras', euros(total), big: _noDeposit),
        if (!_noDeposit && widget.package != null && !_eachPays) ...[
          const SizedBox(height: 6),
          _line('Sinal (${widget.depositPct.round()} %)', euros(total * widget.depositPct / 100, cents: true), big: true),
        ],
      ],
    ];
  }

  Widget _line(String label, String value, {bool big = false}) => Row(children: [
        Expanded(child: Text(label, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted))),
        Text(value,
            style: big
                ? const TextStyle(fontSize: 21, fontWeight: FontWeight.w700, color: AppTheme.ink)
                : const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
      ]);

  /// O último passo: o que se paga e quando. Nada se paga aqui (o sinal
  /// paga-se quando o parceiro aceitar; sem sinal, nos 6 dias antes do
  /// prazo; cada convite paga a sua parte até 3 dias antes).
  List<Widget> _requestStep() {
    final p = widget.package;
    final base = _packageTotal;
    final total = base == null ? null : base + _extrasTotal;
    final chosen = widget.extras.where((e) => _extras.contains(e.id)).toList();
    final rows = <(String, String)>[
      if (p != null) (p.name, base == null ? 'desde ${euros(p.price)}${priceUnitSuffix(p.priceUnit)}' : euros(base)) else ('Mesa', 'Grátis'),
      for (final e in chosen) (e.name, euros(_amount(e.priceUnit, e.price))),
    ];
    final due = _event.weddingDate?.subtract(const Duration(days: 3));
    if (_paysDeposit) {
      return [
        _group([
          for (final (k, v) in rows)
            Container(
              constraints: const BoxConstraints(minHeight: 48),
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: Row(children: [
                Expanded(child: Text(k, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted))),
                const SizedBox(width: 12),
                Text(v, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ]),
            ),
        ]),
        const SizedBox(height: 12),
        _line('Reserva + extras', euros(total!)),
        const SizedBox(height: 6),
        _line('Sinal (${widget.depositPct.round()} %) agora', euros(_depositNow, cents: true), big: true),
        const Align(
          alignment: Alignment.centerRight,
          child: Text('+ taxa de serviço no passo seguinte', style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
        ),
        const SizedBox(height: 12),
        _note('Paga já para garantir a data: o sinal fica cativo até ${widget.partnerName} responder (48 h) e, se recusar, é libertado. '
            'Cancelável apenas nas 48 h depois de pagar; depois de aceitar, não é reembolsável.'),
      ];
    }
    final String text;
    if (_asksWhoPays && _eachPays) {
      text = 'Não pagas nada agora. Cada convite paga a sua parte${due != null ? ' até ${_day(due).toLowerCase()}' : ' até 3 dias antes'}'
          '${p == null ? ' e cada convidado escolhe o seu menu' : ''}.';
    } else if (p == null) {
      text = 'Não pagas nada agora. A mesa é grátis: cada convidado escolhe o seu menu na app.';
    } else if (_noDeposit) {
      text = 'Não pagas nada agora. Sem sinal: pagas tudo de uma vez, nos 6 dias antes do prazo. Avisamos-te 6 dias antes do prazo e nos últimos 3 dias.';
    } else {
      text = 'Não pagas nada agora. Quando ${widget.partnerName} aceitar, paga o sinal (${widget.depositPct.round()} %) para garantir a data: '
          'tens até 30 dias antes do evento, mas sem ele podes perder a reserva.';
    }
    return [
      _group([
        for (final (k, v) in rows)
          Container(
            constraints: const BoxConstraints(minHeight: 48),
            padding: const EdgeInsets.symmetric(vertical: 8),
            child: Row(children: [
              Expanded(child: Text(k, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted))),
              const SizedBox(width: 12),
              Text(v, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
      ]),
      if (total != null) ...[
        const SizedBox(height: 12),
        _line(p!.perPerson ? 'Total previsto' : 'Total', euros(total), big: true),
      ],
      const SizedBox(height: 12),
      _note(text),
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
      'extras' => ('Queres juntar alguma coisa?', '${widget.partnerName} tem extras para ${widget.package == null ? 'a mesa' : 'o teu pacote'}.'),
      'request' => (_paysDeposit ? 'Pagar o sinal' : 'Pedir reserva', widget.partnerName),
      _ => ('Tudo certo?', widget.partnerName),
    };
    final body = switch (st) {
      'event' => _eventStep(),
      'people' => _peopleStep(),
      'pays' => _paysStep(),
      'when' => _whenStep(),
      'extras' => _extrasStep(),
      'request' => _requestStep(),
      _ => _confirmStep(),
    };
    final canNext = switch (st) {
      'people' => !_loadingPeople && _eventTotal != null && _adults + _children > 0,
      'when' => _whenReady,
      _ => true,
    };
    final primary = switch (st) {
      'people' => 'Confirmar',
      'request' when _paysDeposit => 'Pagar · ${euros(_depositNow, cents: true)}',
      'request' => 'Pedir reserva',
      'confirm' when widget.quote => 'Pedir orçamento',
      _ => 'Continuar',
    };
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Expanded(
            child: AppProgressBar(value: (_step + 1) / steps.length, height: 10, track: const Color(0xFFD9D9D9)),
          ),
          const SizedBox(width: 10),
          Text('${_step + 1} DE ${steps.length}', style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        const SizedBox(height: 16),
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          if (_step > 0) ...[
            IslandBackButton(onTap: _back),
            const SizedBox(width: 12),
          ],
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: const TextStyle(fontSize: 23, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (sub.isNotEmpty) ...[
                const SizedBox(height: 4),
                Text(sub, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
              ],
            ]),
          ),
          const SizedBox(width: 12),
          const IslandCloseButton(),
        ]),
        const SizedBox(height: 16),
        ...body,
        const SizedBox(height: 20),
        // Em baixo só ações (o voltar está em cima, DESIGN.md §6.1).
        Row(children: [
          if (st == 'request' && _paysDeposit) ...[
            Expanded(child: _Btn('Pagar mais tarde', outlined: true, onTap: _payLater)),
            const SizedBox(width: 8),
          ],
          if (st == 'extras') ...[
            Expanded(
              child: _Btn('Sem extras', outlined: true, onTap: () {
                setState(_extras.clear);
                _next();
              }),
            ),
            const SizedBox(width: 8),
          ],
          Expanded(
            flex: 2,
            child: _Btn(primary,
                onTap: !canNext
                    ? null
                    : st == 'request' && _paysDeposit
                        ? () => Navigator.of(context).pop(_resultWith(payNow: true))
                        : st == 'request' || (st == 'confirm' && widget.quote)
                        ? () => Navigator.of(context).pop(_result)
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
            // Botão redondo preto, ícone branco (DESIGN.md §2); sem ação fica esbatido.
            decoration: BoxDecoration(
                color: onTap == null ? AppTheme.ink.withValues(alpha: 0.25) : AppTheme.ink, shape: BoxShape.circle),
            child: Icon(icon, size: 16, color: Colors.white),
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
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: outlined ? AppTheme.ink : Colors.white)),
            ),
          ),
        ),
      );
}
