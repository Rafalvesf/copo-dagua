import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/event/event_controller.dart';
import '../../../core/home/home_providers.dart' show coupleBookingsProvider, organizerFeeForPartnerProvider;
import '../../../core/models/models.dart';
import '../../../core/payments/fee_config.dart';
import '../../../core/payments/payments.dart';
import '../../../core/payments/stripe_element.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/address_picker.dart' show AddressField;
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/island_sheet.dart' show IslandBackButton, IslandCloseButton, showIslandSheet;
import '../../../shared/widgets/opening_hours.dart' show OpeningHours, partnerOpeningHoursProvider;
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/step_slide.dart';
import '../../../shared/widgets/time_wheels.dart';
import '../../../shared/widgets/type_count.dart';
import '../../payments/open_payment.dart' show openPaymentFlow;
import 'reserve_pieces.dart';

/// Reservar e pagar a partir da página de um parceiro (pranchetas
/// «FPayEvento», «FPayNovo», «FPayDia», «FPayHora», «FPay1» e «FPay2»,
/// pedido do Rafael, 2026-11-27): Para que evento? (ou criar um novo aqui)
/// · Que dia? · Para que horas? · o que falta saber da categoria · extras
/// · «Está certo?» com o valor, o dia, a hora, as pessoas, quem paga e
/// «Desliza para pagar» · «Pedido enviado e sinal pago». Sem barra de
/// progresso nem vistos: a escolha vê-se pela linha cinzenta ou pelo verde.

/// Que perguntas faz o passo «o que falta saber», conforme a categoria.
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
bool reserveAsksWhoPays(ReserveKind kind, Event event) =>
    const {ReserveKind.mesa, ReserveKind.atividade, ReserveKind.transporte}.contains(kind) &&
    !const {
      EventType.wedding, EventType.baptism, EventType.communion,
      EventType.engagement, EventType.vowRenewal, EventType.babyShower,
    }.contains(event.eventType);

class ReserveFlowResult {
  final Event event;

  /// O dia do pedido (o do evento, ou o escolhido em «Que dia?»).
  final DateTime? date;
  final int adults;
  final int children;
  final bool eachPays;

  /// O que foi respondido («Hora», «20:00»).
  final List<(String, String)> details;

  /// Extras escolhidos.
  final List<ServiceExtra> extras;

  /// Pedido de orçamento: a mensagem para o parceiro.
  final String? message;

  /// O sinal paga-se já (migração 207) e fica cativo até o parceiro
  /// responder. `false` = «Pedir sem pagar agora».
  final bool payNow;

  /// «Nós pagamos por» (216): as pessoas cuja comida os organizadores
  /// pagam quando cada convite paga o seu (chave → nome).
  final Map<String, String> paidFor;

  /// Pedido de orçamento: a hora (238) — «14:00» e «00:00» (ou nulo).
  final String? startTime;
  final String? endTime;
  const ReserveFlowResult({
    this.startTime,
    this.endTime,
    required this.event,
    this.date,
    required this.adults,
    required this.children,
    required this.eachPays,
    required this.details,
    this.extras = const [],
    this.message,
    this.payNow = false,
    this.paidFor = const {},
  });

  int get people => adults + children;

  /// O dia que vai no pedido.
  DateTime? get day => date ?? event.eventDate;

  /// Uma linha para a mensagem ao parceiro (sem «·», regra do Rafael).
  String summary() => [
        '$people ${people == 1 ? 'pessoa' : 'pessoas'} ($adults ${adults == 1 ? 'adulto' : 'adultos'}${children > 0 ? ' e $children ${children == 1 ? 'criança' : 'crianças'}' : ''})',
        for (final (k, v) in details) '$k: $v',
        if (eachPays) 'cada convite paga o seu',
        if (eachPays && paidFor.isNotEmpty) 'nós pagamos por ${paidFor.values.join(', ')}',
      ].join(', ');
}

/// O pedido não seguiu: [message] diz porquê (vai para o popup).
class ReserveRequestError implements Exception {
  final String message;
  const ReserveRequestError(this.message);
  @override
  String toString() => message;
}

/// Como acabou o popup: o evento e se se tocou em «Ver conversa».
class ReserveOutcome {
  final Event event;
  final bool openChat;
  const ReserveOutcome(this.event, {this.openChat = false});
}

/// Cria o pedido (reserva, mesa ou orçamento) e devolve o
/// `quote_requests.id`; falha com [ReserveRequestError].
typedef ReserveSender = Future<String?> Function(ReserveFlowResult result);

/// Pessoas de um evento: adultos e crianças da lista de convidados (sem os
/// que disseram que não vão) e o número do evento.
Future<(int, int, int)> eventPeople(Event event) async {
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

String _place(Event w) => (w.venue?.trim().isNotEmpty == true) ? w.venue!.trim() : (w.location ?? '').trim();

/// «à segunda», «ao sábado».
String _onDay(int weekday) => '${weekday >= 6 ? 'ao' : 'à'} ${reserveWeekdayNames[weekday - 1]}';

int _mins(String hhmm) {
  final p = hhmm.split(':');
  return (int.tryParse(p.first) ?? 0) * 60 + (p.length > 1 ? int.tryParse(p[1]) ?? 0 : 0);
}

String _hhmm(int m) => '${((m ~/ 60) % 24).toString().padLeft(2, '0')}:${(m % 60).toString().padLeft(2, '0')}';

List<String> _times(int fromHour, int toHour) => [
      for (var h = fromHour; h <= toHour; h++) ...['${(h % 24).toString().padLeft(2, '0')}:00', '${(h % 24).toString().padLeft(2, '0')}:30'],
    ];

String _pct(double p) => (p % 1 == 0 ? p.toStringAsFixed(0) : p.toStringAsFixed(1)).replaceAll('.', ',');

/// Os tipos que se escolhem ao criar um evento aqui, com o nome curto do
/// mosaico (prancheta «FPayNovo»).
const _newTypes = [
  (EventType.birthday, 'Aniversário'),
  (EventType.wedding, 'Casamento'),
  (EventType.party, 'Festa'),
  (EventType.corporate, 'Empresa'),
  (EventType.baptism, 'Batizado'),
  (EventType.newYear, 'Passagem de Ano'),
  (EventType.other, 'Outro'),
];

const _hows = ['Comer fora', 'Num espaço', 'Em casa'];
const _howDb = {'Comer fora': 'fora', 'Num espaço': 'espaco', 'Em casa': 'casa'};

enum _S { event, novo, dia, hora, pessoas, detalhes, extras, confirm, done }

class ReserveFlowSheet extends ConsumerStatefulWidget {
  final String partnerId;
  final String partnerName;
  final String? partnerImage;
  final ReserveKind kind;

  /// `null` = reservar mesa (cada convidado escolhe o seu menu depois).
  final ServicePackage? package;
  final List<Event> events;

  /// Extras do parceiro que se aplicam ao pacote (ou à mesa).
  final List<ServiceExtra> extras;

  /// Percentagem do sinal do parceiro (`partner_deposit_pct`, 191): 100 =
  /// sem sinal, paga-se tudo de uma vez nos 6 dias antes do prazo.
  final double depositPct;

  /// Pedido de orçamento (só orçamento): sem pacote nem extras — acaba em
  /// «Pedir orçamento». [reference] é o valor de referência do parceiro.
  final bool quote;
  final double? reference;
  final String? initialMessage;

  /// «Responde em ~2 h» (`responseLabel`), para o fim.
  final String? responds;

  /// Cria o pedido no servidor (a página do parceiro sabe como).
  final ReserveSender onRequest;

  const ReserveFlowSheet({
    super.key,
    required this.partnerId,
    required this.partnerName,
    this.partnerImage,
    required this.kind,
    this.package,
    required this.events,
    this.extras = const [],
    this.depositPct = 30,
    this.quote = false,
    this.reference,
    this.initialMessage,
    this.responds,
    required this.onRequest,
  });

  @override
  ConsumerState<ReserveFlowSheet> createState() => _ReserveFlowSheetState();
}

class _ReserveFlowSheetState extends ConsumerState<ReserveFlowSheet> {
  late final List<Event> _events = List.of(widget.events);
  Event? _event;
  bool _creating = false;
  bool _createdHere = false;
  final List<_S> _stack = [_S.event];
  _S get _st => _stack.last;

  // Evento novo.
  EventType _type = EventType.birthday;
  String _how = _hows.first;
  final _name = TextEditingController();
  int? _newPeople;
  String? _novoError;

  // Dia e hora.
  DateTime? _date;
  String? _time;
  String? _endTime;
  DateTime? _dayPick;
  late DateTime _month;
  String? _wheelTime;
  String? _wheelEnd;
  final Set<DateTime> _busyDays = {};
  int _finalDays = 14;

  // Pessoas (vêm do evento).
  int _adults = 0, _children = 0;
  int? _eventTotal;
  bool _loadingPeople = false;
  String? _loadedFor;
  int? _peoplePick;

  bool _eachPays = false;
  final Map<String, String> _paidFor = {};
  final Set<String> _extras = {};
  bool _visitedDetails = false, _visitedExtras = false;

  // O que falta saber (categoria).
  int _duration = 4;
  int _rooms = 0;
  bool _roomsEach = true;
  bool _delivery = true;
  String? _window;
  String? _returnTime;
  int _seats = 0;
  final _departure = TextEditingController();
  late final _message = TextEditingController(text: widget.initialMessage ?? '');

  // Pagar.
  final StripePay _stripe = createStripePay();
  String _wallet = ''; // apple_pay | google_pay | ''
  bool _useWallet = true;
  int? _walletCents;
  bool _busy = false;
  String? _error;
  bool _paid = false;
  double? _paidAmount;

  @override
  void initState() {
    super.initState();
    final now = DateTime.now();
    _month = DateTime(now.year, now.month);
    final upcoming = [for (final e in _events) if (e.eventDate == null || !e.eventDate!.isBefore(DateTime(now.year, now.month, now.day))) e];
    if (_events.isEmpty) {
      _creating = true;
    } else if (upcoming.length == 1) {
      _choose(upcoming.first);
    } else if (_events.length == 1) {
      _choose(_events.first);
    }
    _loadPartnerData();
  }

  @override
  void dispose() {
    _name.dispose();
    _departure.dispose();
    _message.dispose();
    _stripe.dispose();
    super.dispose();
  }

  /// Prazo do resto e os dias já marcados (se o servidor os der).
  Future<void> _loadPartnerData() async {
    try {
      final r = await supabase.from('partner_profiles').select('final_payment_days').eq('id', widget.partnerId).maybeSingle();
      final d = (r?['final_payment_days'] as num?)?.toInt();
      if (d != null && mounted) setState(() => _finalDays = d.clamp(1, 14));
    } catch (_) {}
    try {
      // Dias em que o parceiro já tem reserva (função opcional; sem ela só
      // se riscam os dias fechados e os que já passaram).
      final r = await supabase.rpc('partner_busy_days', params: {'p_partner_id': widget.partnerId});
      final days = <DateTime>{
        for (final x in (r as List? ?? const []))
          if (DateTime.tryParse('${x is Map ? (x['day'] ?? x['event_date']) : x}') case final d?) DateTime(d.year, d.month, d.day),
      };
      if (days.isNotEmpty && mounted) setState(() => _busyDays.addAll(days));
    } catch (_) {}
  }

  void _choose(Event e) {
    _event = e;
    _creating = false;
    _date = e.eventDate == null ? null : DateTime(e.eventDate!.year, e.eventDate!.month, e.eventDate!.day);
    _time = null;
    _loadTime(e);
    _loadPeople();
  }

  Future<void> _loadTime(Event e) async {
    try {
      final r = await supabase.from('events').select('ceremony_time').eq('id', e.id).maybeSingle();
      final t = (r?['ceremony_time'] as String?)?.trim();
      final m = RegExp(r'^(\d{1,2})[:h](\d{2})').firstMatch(t ?? '');
      if (m != null && mounted && _event?.id == e.id && _time == null) {
        setState(() => _time = '${m.group(1)!.padLeft(2, '0')}:${m.group(2)}');
      }
    } catch (_) {}
  }

  Future<void> _loadPeople() async {
    final e = _event;
    if (e == null || _loadedFor == e.id) return;
    setState(() => _loadingPeople = true);
    final (a, c, t) = await eventPeople(e);
    if (!mounted || _event?.id != e.id) return;
    setState(() {
      _adults = a;
      _children = c;
      _eventTotal = t;
      _loadedFor = e.id;
      _loadingPeople = false;
    });
  }

  // ---------- regras ----------
  bool get _needsTime => widget.quote || widget.kind != ReserveKind.encomenda;
  bool get _hasDetails => !widget.quote && widget.kind != ReserveKind.mesa && widget.kind != ReserveKind.atividade;
  bool get _asksWhoPays => !widget.quote && _event != null && reserveAsksWhoPays(widget.kind, _event!);
  bool get _each => _asksWhoPays && _eachPays;
  int get _people => _adults + _children;

  double _amount(String unit, double price) => unit == 'person' ? price * _people : price;

  /// Total do pacote, ou `null` se o preço é «desde» ou é uma mesa.
  double? get _packageTotal {
    final p = widget.package;
    if (p == null || p.isStartingPrice) return null;
    return _amount(p.priceUnit, p.price);
  }

  double get _extrasTotal => widget.extras.where((e) => _extras.contains(e.id)).fold<double>(0, (t, e) => t + _amount(e.priceUnit, e.price));
  double? get _total => _packageTotal == null ? null : _packageTotal! + _extrasTotal;
  bool get _noDeposit => widget.depositPct >= 100;

  /// Paga-se o sinal já (ou mais tarde): pacote com preço, quem reserva paga.
  bool get _paysDeposit => !widget.quote && widget.package != null && !_each && !_noDeposit && (_total ?? 0) > 0;
  double get _deposit => double.parse(((_total ?? 0) * widget.depositPct / 100).toStringAsFixed(2));

  FeeConfig? get _fee => ref.read(organizerFeeForPartnerProvider(widget.partnerId)).value;

  /// O que se paga agora com a taxa de serviço (o valor certo vem da Stripe).
  double get _payNowWithFee {
    final f = _fee;
    return f == null ? _deposit : organizerPays(_deposit, _total ?? 0, f);
  }

  OpeningHours? get _hours => ref.read(partnerOpeningHoursProvider(widget.partnerId)).value;

  DateTime get _firstDay {
    final n = DateTime.now();
    // Os pedidos fazem-se com 7 dias de antecedência (P0003).
    return DateTime(n.year, n.month, n.day + 7);
  }

  bool _blocked(DateTime d) {
    if (d.isBefore(_firstDay)) return true;
    final h = _hours;
    if (h != null && !h.days.containsKey(d.weekday)) return true;
    return _busyDays.any((b) => ReserveCalendar.same(b, d));
  }

  List<(String, String)> get _details => widget.quote
      ? [if (_time != null) ('Começa às', _time!), if (_endTime != null) ('Acaba às', _endTime!)]
      : [
          if (_createdHere) ('Como vai ser', _how),
          ...switch (widget.kind) {
            ReserveKind.mesa => [if (_time != null) ('Hora', _time!)],
            ReserveKind.atividade => [if (_time != null) ('Sessão', _time!)],
            ReserveKind.espaco => [
                if (_time != null) ('Horário', '${_time!}${_endTime != null ? ' às ${_endTime!}' : ''}'),
                if (_rooms > 0) ('Quartos', '$_rooms, ${_roomsEach ? 'cada hóspede paga o seu' : 'pagamos nós'}'),
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
          },
        ];

  bool get _detailsReady => switch (widget.kind) {
        ReserveKind.encomenda => _window != null,
        ReserveKind.transporte => _departure.text.trim().isNotEmpty,
        _ => true,
      };

  ReserveFlowResult _result({required bool payNow}) => ReserveFlowResult(
        event: _event!,
        date: _date,
        adults: _adults,
        children: _children,
        eachPays: _each,
        details: _details,
        extras: widget.extras.where((e) => _extras.contains(e.id)).toList(),
        message: _message.text.trim().isEmpty ? null : _message.text.trim(),
        payNow: payNow,
        paidFor: _each ? Map.of(_paidFor) : const {},
        startTime: widget.quote ? _time : null,
        endTime: widget.quote ? _endTime : null,
      );

  // ---------- navegação ----------
  void _push(_S s) {
    setState(() {
      _error = null;
      if (s == _S.dia) {
        _dayPick = _date != null && !_blocked(_date!) ? _date : null;
        final m = _date ?? _firstDay;
        _month = DateTime(m.year, m.month);
      }
      if (s == _S.hora) {
        _wheelTime = _time;
        _wheelEnd = _endTime;
      }
      if (s == _S.pessoas) _peoplePick = _people;
      _stack.add(s);
    });
    if (s == _S.confirm) _prepareWallet();
  }

  void _pop() {
    if (_stack.length > 1) setState(() => _stack.removeLast());
    if (_st == _S.confirm) _prepareWallet();
  }

  /// O próximo passo que falta (dia, hora, categoria, extras, «Está certo?»).
  void _goNext() {
    if (_date == null) return _push(_S.dia);
    if (_needsTime && _time == null) return _push(_S.hora);
    if (_hasDetails && !_visitedDetails) {
      _visitedDetails = true;
      return _push(_S.detalhes);
    }
    if (!widget.quote && widget.extras.isNotEmpty && !_visitedExtras) {
      _visitedExtras = true;
      return _push(_S.extras);
    }
    _push(_S.confirm);
  }

  /// Fim de um passo: aberto a partir do evento novo ou do «Está certo?»,
  /// volta lá; senão segue.
  void _stepDone() {
    final prev = _stack.length > 1 ? _stack[_stack.length - 2] : null;
    if (prev == _S.novo || prev == _S.confirm) {
      _pop();
    } else {
      _goNext();
    }
  }

  Future<void> _continueFromEvent() async {
    if (_creating) return _push(_S.novo);
    if (_event == null) return;
    await _loadPeople();
    if (mounted) _goNext();
  }

  /// O dia ou a hora vão também para o evento quando ele ainda não os tem.
  Future<void> _saveToEvent({DateTime? date, String? time}) async {
    final e = _event;
    if (e == null) return;
    try {
      if (date != null && e.eventDate == null) {
        final updated = e.copyWith(eventDate: date);
        await ref.read(eventControllerProvider.notifier).update(updated);
        if (mounted) setState(() => _event = updated);
      }
      if (time != null) {
        await supabase.from('events').update({'ceremony_time': time}).eq('id', e.id).isFilter('ceremony_time', null);
      }
    } catch (_) {}
  }

  /// «Continuar» no evento novo: cria-o já (como no onboarding).
  Future<void> _createEvent() async {
    final name = _name.text.trim();
    final missing = [
      if (name.isEmpty) 'o nome',
      if (_date == null) 'o dia',
      if (_needsTime && _time == null) 'a hora',
      if (_newPeople == null) 'as pessoas',
    ];
    if (missing.isNotEmpty) {
      setState(() => _novoError = 'Falta ${missing.length == 1 ? missing.first : '${missing.sublist(0, missing.length - 1).join(', ')} e ${missing.last}'}.');
      return;
    }
    setState(() {
      _busy = true;
      _novoError = null;
    });
    try {
      final ctrl = ref.read(eventControllerProvider.notifier);
      final event = await ctrl.create(
        partnerName1: name,
        eventDate: _date,
        estimatedGuests: _newPeople,
        eventType: _type,
      );
      try {
        await ctrl.saveOnboardingExtras(eventId: event.id, eventTypes: [_type]);
      } catch (_) {}
      // «Como vai ser?» (`events.event_format`, migração 245). As pessoas
      // ficam só como previstas (`estimated_guests`), sem limite de entradas.
      try {
        await supabase.from('events').update({'event_format': _howDb[_how]}).eq('id', event.id);
      } catch (_) {}
      if (_time != null) {
        try {
          await supabase.from('events').update({'ceremony_time': _time}).eq('id', event.id);
        } catch (_) {}
      }
      if (ref.read(authControllerProvider).profile?.role == UserRole.guest) {
        await ref.read(authControllerProvider.notifier).becomeOrganizer();
      }
      if (!mounted) return;
      setState(() {
        _events.insert(0, event);
        _event = event;
        _creating = false;
        _createdHere = true;
        _adults = _newPeople!;
        _children = 0;
        _eventTotal = _newPeople;
        _loadedFor = event.id;
        _busy = false;
        _stack
          ..clear()
          ..add(_S.event);
      });
      _goNext();
    } catch (_) {
      if (mounted) {
        setState(() {
          _busy = false;
          _novoError = 'Não foi possível criar o evento. Tenta outra vez.';
        });
      }
    }
  }

  // ---------- pagar ----------
  Future<void> _prepareWallet() async {
    if (!_paysDeposit || !_stripe.supported) return;
    final cents = (_payNowWithFee * 100).round();
    if (_walletCents == cents) return;
    _walletCents = cents;
    try {
      final pk = await stripePublishableKey();
      if (pk == null || !mounted) return;
      final w = await _stripe.wallet(pk, cents, 'À Nossa! Sinal ${widget.partnerName}');
      if (mounted) setState(() => _wallet = w);
    } catch (_) {}
  }

  Future<String> _prepay(String? quoteId) async {
    if (quoteId == null) throw const ReserveRequestError('Não foi possível abrir o pagamento.');
    final id = await supabase.rpc('prepay_request_deposit', params: {'p_quote_request_id': quoteId});
    if (id is! String) throw const ReserveRequestError('Não foi possível abrir o pagamento.');
    return id;
  }

  /// «Desliza para pagar»: pede a reserva e paga o sinal. Com Apple Pay /
  /// Google Pay a janela do telemóvel abre logo no gesto e o pedido só é
  /// criado quando se autoriza.
  void _slidePay() {
    if (_busy || _event == null) return;
    setState(() {
      _busy = true;
      _error = null;
    });
    final r = _result(payNow: true);
    if (_wallet.isNotEmpty && _useWallet) {
      var sent = false;
      String? payId;
      int? cents;
      Object? err;
      _stripe.payWallet(() async {
        try {
          final quoteId = await widget.onRequest(r);
          sent = true;
          payId = await _prepay(quoteId);
          final info = await createPaymentIntent(payId!, PayMethod.wallet);
          cents = info.amountCents;
          return info.clientSecret;
        } catch (e) {
          err = e;
          return null;
        }
      }).then((res) async {
        if (!mounted) return;
        if (!sent) {
          setState(() {
            _busy = false;
            _error = err is ReserveRequestError ? '$err' : (err != null ? 'Não foi possível enviar o pedido.' : res['error'] as String?);
          });
          return;
        }
        var paid = res['status'] == 'succeeded';
        if (!paid && payId != null && res['error'] == null && res['cancelled'] != true) paid = await _waitPaid(payId!);
        if (paid && payId != null) await paymentState(payId!);
        _finish(paid: paid, amount: cents == null ? null : cents! / 100);
      });
    } else {
      _payCard(r);
    }
  }

  Future<bool> _waitPaid(String paymentId) async {
    for (var i = 0; i < 4; i++) {
      await Future<void>.delayed(const Duration(seconds: 2));
      final (s, _) = await paymentState(paymentId);
      if (s == 'paid') return true;
    }
    return false;
  }

  Future<void> _payCard(ReserveFlowResult r) async {
    String? quoteId;
    try {
      quoteId = await widget.onRequest(r);
    } on ReserveRequestError catch (e) {
      _fail(e.message);
      return;
    } catch (_) {
      _fail('Não foi possível enviar o pedido.');
      return;
    }
    var paid = false;
    try {
      final payId = await _prepay(quoteId);
      if (!mounted) return;
      await openPaymentFlow(context, ref, payId, onPaid: (c) => Navigator.of(c).pop(), methods: const [PayMethod.card]);
      final (s, _) = await paymentState(payId);
      paid = s == 'paid';
    } catch (_) {}
    _finish(paid: paid);
  }

  void _fail(String message) {
    if (!mounted) return;
    setState(() {
      _busy = false;
      _error = message;
    });
  }

  /// «Pedir sem pagar agora» e os pedidos sem nada a pagar já.
  Future<void> _requestOnly() async {
    if (_busy || _event == null) return;
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      await widget.onRequest(_result(payNow: false));
      _finish(paid: false);
    } on ReserveRequestError catch (e) {
      _fail(e.message);
    } catch (_) {
      _fail('Não foi possível enviar o pedido.');
    }
  }

  void _finish({required bool paid, double? amount}) {
    if (!mounted) return;
    ref.invalidate(coupleBookingsProvider);
    setState(() {
      _busy = false;
      _paid = paid;
      _paidAmount = paid ? (amount ?? _payNowWithFee) : null;
      _stack
        ..clear()
        ..add(_S.done);
    });
  }

  /// «Por quem pagamos?»: os convidados que vão e quem trazem.
  Future<void> _pickPaidFor() async {
    final e = _event;
    if (e == null) return;
    List<Map<String, dynamic>> people;
    try {
      final res = await supabase.rpc('event_people_for_paying', params: {'p_wedding_id': e.id});
      people = [for (final r in (res as List? ?? const [])) if (r is Map) Map<String, dynamic>.from(r)];
    } catch (_) {
      people = const [];
    }
    if (!mounted) return;
    people = [for (final p in people) if (p['is_organizer'] != true) p];
    if (people.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Ainda não há convidados confirmados. Podes escolher depois.')),
      );
      return;
    }
    final chosen = await showIslandSheet<Map<String, String>>(
      context: context,
      isScrollControlled: true,
      builder: (_) => PaidForSheet(people: people, initial: _paidFor),
    );
    if (chosen != null && mounted) {
      setState(() {
        _paidFor
          ..clear()
          ..addAll(chosen);
      });
    }
  }

  // ---------- peças ----------
  static const _gap = SizedBox(height: 14);

  Widget _title(String t) => Text(t, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink));

  Widget _note(String t) => Text(t, style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted));

  Widget _errorLine(String? t) => t == null
      ? const SizedBox.shrink()
      : Text(t, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppStatusColors.declined));

  String get _what => widget.package?.name ?? (widget.quote ? 'Pedido de orçamento' : 'Mesa');

  Widget _partnerRow(String subtitle) => ReservePartnerRow(
        imageUrl: widget.partnerImage,
        name: widget.partnerName,
        title: '${widget.partnerName}, $_what',
        subtitle: subtitle,
      );

  String get _eventLabel => _creating ? 'Evento novo' : (_event?.displayNames ?? '');

  Widget _bottom(String label, VoidCallback? onTap, {bool back = true}) => Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisSize: MainAxisSize.min,
        children: [
          ReserveButton(label, onTap: onTap, busy: _busy),
          if (back && _stack.length > 1) ...[
            const SizedBox(height: 4),
            ReserveGreyText('Voltar', onTap: _busy ? null : _pop),
          ],
        ],
      );

  // ---------- passos ----------
  List<Widget> _eventStep() {
    String meta(Event e) {
      final parts = [
        if (e.eventDate != null) reserveShortDay(e.eventDate!) else 'Ainda sem dia',
        if (e.estimatedGuests != null) '${e.estimatedGuests} ${e.estimatedGuests == 1 ? 'pessoa' : 'pessoas'}',
      ];
      return parts.join(', ');
    }

    return [
      _title('Para que evento?'),
      if (_events.isNotEmpty) const ReserveCaps('OS TEUS EVENTOS'),
      for (final e in _events) ...[
        ReservePick(
          selected: !_creating && _event?.id == e.id,
          minHeight: 68,
          onTap: () => setState(() => _choose(e)),
          child: Row(children: [
            ReserveSquare(imageUrl: e.coverPhotoUrlCacheBusted, name: e.displayNames, size: 44, radius: 12),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Text(e.displayNames,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 2),
                Text(meta(e), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
          ]),
        ),
        const SizedBox(height: 8),
      ],
      ReservePick(
        selected: _creating,
        minHeight: 68,
        onTap: () => setState(() {
          _creating = true;
          _event = null;
          _date = null;
          _time = null;
        }),
        child: Row(children: [
          Container(
            width: 44,
            height: 44,
            decoration: const BoxDecoration(shape: BoxShape.circle, color: AppTheme.ink),
            child: const Icon(Hi.plus, size: 20, color: Colors.white),
          ),
          const SizedBox(width: 12),
          const Expanded(
            child: Text('Criar um novo evento', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
        ]),
      ),
      _bottom('Continuar', _creating || _event != null ? _continueFromEvent : null, back: false),
    ];
  }

  Widget _whenPill(IconData icon, String label, VoidCallback onTap) => Semantics(
        button: true,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            height: 52,
            padding: const EdgeInsets.fromLTRB(18, 0, 16, 0),
            decoration: const ShapeDecoration(color: kPickGrey, shape: StadiumBorder()),
            child: Row(children: [
              Icon(icon, size: 18, color: AppTheme.ink),
              const SizedBox(width: 10),
              Expanded(
                child: Text(label,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              const Text('›', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
        ),
      );

  List<Widget> _novoStep() {
    Widget tile((EventType, String) t) {
      final on = _type == t.$1;
      return Expanded(
        child: ReservePick(
          selected: on,
          height: 64,
          radius: 18,
          padding: const EdgeInsets.symmetric(horizontal: 4),
          onTap: () => setState(() => _type = t.$1),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            AnimatedContainer(
              duration: const Duration(milliseconds: 150),
              width: 20,
              height: 20,
              decoration: BoxDecoration(shape: BoxShape.circle, color: on ? kPickLine : const Color(0xFFE0E0E0)),
            ),
            const SizedBox(height: 5),
            Text(t.$2,
                textAlign: TextAlign.center,
                maxLines: 2,
                style: const TextStyle(fontSize: 12, height: 1.1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
        ),
      );
    }

    Widget row(List<(EventType, String)> items) => Row(children: [
          for (final (i, t) in items.indexed) ...[if (i > 0) const SizedBox(width: 8), tile(t)],
        ]);

    return [
      _partnerRow('Evento novo'),
      const ReserveCaps('QUE EVENTO É?'),
      Column(children: [row(_newTypes.sublist(0, 4)), const SizedBox(height: 8), row(_newTypes.sublist(4))]),
      const ReserveCaps('COMO VAI SER?'),
      Row(children: [
        for (final (i, h) in _hows.indexed) ...[
          if (i > 0) const SizedBox(width: 8),
          Expanded(child: ReserveGreenPill(label: h, selected: _how == h, onTap: () => setState(() => _how = h))),
        ],
      ]),
      const ReserveCaps('NOME'),
      Container(
        height: 52,
        padding: const EdgeInsets.symmetric(horizontal: 20),
        alignment: Alignment.centerLeft,
        decoration: const ShapeDecoration(color: kPickGrey, shape: StadiumBorder()),
        child: TextField(
          controller: _name,
          maxLength: 40,
          textCapitalization: TextCapitalization.sentences,
          style: const TextStyle(fontSize: 15, color: AppTheme.ink),
          onChanged: (_) => setState(() => _novoError = null),
          decoration: const InputDecoration(
            filled: false,
            isCollapsed: true,
            counterText: '',
            border: InputBorder.none,
            enabledBorder: InputBorder.none,
            focusedBorder: InputBorder.none,
            hintText: 'Ex.: Os 30 da Rita',
            hintStyle: TextStyle(fontSize: 15, color: AppTheme.inkMuted),
          ),
        ),
      ),
      const ReserveCaps('QUANDO?'),
      Row(children: [
        Expanded(child: _whenPill(Hi.calendar, _date == null ? 'Dia' : reserveShortDay(_date!), () => _push(_S.dia))),
        const SizedBox(width: 8),
        Expanded(child: _whenPill(Hi.clock, _time ?? 'Hora', () => _push(_S.hora))),
      ]),
      // O título por cima do contador, como os outros blocos.
      const ReserveCaps('QUANTAS PESSOAS?'),
      ReserveStepper(
        value: _newPeople,
        min: 1,
        onChanged: (v) => setState(() {
          _newPeople = v;
          _novoError = null;
        }),
      ),
      if (_novoError != null) _errorLine(_novoError),
      _bottom('Continuar', _createEvent),
    ];
  }

  List<Widget> _diaStep() {
    final h = _hours;
    final closed = h == null ? const <int>[] : [for (var d = 1; d <= 7; d++) if (!h.days.containsKey(d)) d];
    final reasons = [
      if (closed.isNotEmpty && closed.length < 7) 'fecha ${closed.map(_onDay).join(' e ')}',
      if (_busyDays.isNotEmpty) 'já tem reserva',
    ];
    final pick = _dayPick;
    final now = DateTime.now();
    return [
      _partnerRow(_eventLabel),
      _title('Que dia?'),
      ReserveCalendar(
        month: _month,
        firstMonth: DateTime(now.year, now.month),
        selected: pick,
        blocked: _blocked,
        onPick: (d) => setState(() => _dayPick = d),
        onMonth: (m) => setState(() => _month = m),
      ),
      _note(reasons.isEmpty
          ? 'Os dias riscados já não dão: os pedidos fazem-se com 7 dias de antecedência.'
          : '${widget.partnerName} não pode nos dias riscados: ${reasons.join(' ou ')}. Os pedidos fazem-se com 7 dias de antecedência.'),
      _bottom(
        pick == null ? 'Escolhe um dia' : 'Escolher ${reserveLongDay(pick)}',
        pick == null
            ? null
            : () {
                setState(() => _date = pick);
                if (!_creating) _saveToEvent(date: pick);
                _stepDone();
              },
      ),
    ];
  }

  /// Horas em que o parceiro está aberto nesse dia (`null` sem horário).
  (int, int)? get _openRange {
    final d = _date;
    final h = _hours;
    if (d == null || h == null) return null;
    final day = h.days[d.weekday];
    if (day == null) return null;
    final from = _mins(day.$1);
    var to = _mins(day.$2);
    if (to <= from) to += 24 * 60;
    return (from, to);
  }

  List<Widget> _horaStep() {
    final range = _openRange;
    final defaultHour = widget.kind == ReserveKind.mesa ? 20 : 14;
    final List<int> hours;
    if (range != null) {
      hours = [for (var m = range.$1 - range.$1 % 60; m < range.$2; m += 60) m ~/ 60];
    } else {
      final (a, b) = switch (widget.kind) {
        ReserveKind.mesa => (12, 23),
        ReserveKind.atividade => (9, 20),
        ReserveKind.transporte => (6, 23),
        _ => (8, 23),
      };
      hours = [for (var x = a; x <= b; x++) x];
    }
    final hourOpts = [for (final x in hours) (x % 24).toString().padLeft(2, '0')];
    const minuteOpts = ['00', '15', '30', '45'];
    final current = _wheelTime ?? _time;
    var hNow = current?.split(':').first;
    var mNow = current?.split(':').last;
    if (hNow == null || !hourOpts.contains(hNow)) {
      final want = defaultHour.toString().padLeft(2, '0');
      hNow = hourOpts.contains(want) ? want : hourOpts[hourOpts.length ~/ 2];
    }
    if (mNow == null || !minuteOpts.contains(mNow)) mNow = '00';

    /// A hora escolhida, dentro do horário.
    String clamp(String h, String m) {
      var t = int.parse(h) * 60 + int.parse(m);
      if (range != null) {
        if (t < range.$1 && t + 24 * 60 < range.$2) t += 24 * 60;
        if (t < range.$1) t = range.$1;
        if (t > range.$2 - 15) t = range.$2 - 15;
      }
      return _hhmm(t);
    }

    final chosen = clamp(hNow, mNow);
    final withEnd = widget.quote || widget.kind == ReserveKind.espaco;
    final d = _date;
    final dayOpen = d == null || _hours == null || _hours!.days.containsKey(d.weekday);
    return [
      _partnerRow([_eventLabel, if (d != null) reserveLongDay(d)].join(', ')),
      _title('Para que horas queres reservar?'),
      TimeWheels(
        key: ValueKey('hora-$d'),
        columns: [
          WheelColumn(label: 'HORA', options: hourOpts, value: hNow, onChanged: (v) => setState(() => _wheelTime = '$v:${mNow ?? '00'}')),
          WheelColumn(label: 'MINUTOS', options: minuteOpts, value: mNow, onChanged: (v) => setState(() => _wheelTime = '${hNow ?? '00'}:$v')),
        ],
      ),
      if (withEnd)
        TimeWheels(
          key: ValueKey('fim-$d'),
          columns: [
            WheelColumn(
              label: 'ACABA ÀS',
              options: ['Sem fim', ..._times(10, 30)],
              value: _wheelEnd ?? 'Sem fim',
              onChanged: (v) => setState(() => _wheelEnd = v == 'Sem fim' ? null : v),
            ),
          ],
        ),
      if (range != null)
        _note('${widget.partnerName} abre das ${_hhmm(range.$1)} às ${_hhmm(range.$2)}. A roda só mostra as horas em que está aberto.')
      else if (!dayOpen)
        _note('${widget.partnerName} costuma estar fechado ${_onDay(d.weekday)}. Confirma na conversa.'),
      _bottom('Escolher $chosen', () {
        setState(() {
          _time = chosen;
          _endTime = withEnd ? _wheelEnd : _endTime;
        });
        if (!_creating) _saveToEvent(time: chosen);
        _stepDone();
      }),
    ];
  }

  List<Widget> _pessoasStep() {
    final p = widget.package;
    final minP = p?.minPeople, maxP = p?.maxPeople;
    final n = _peoplePick ?? _people;
    final ev = _eventTotal;
    return [
      _partnerRow(_eventLabel),
      _title('Quantas pessoas?'),
      ReserveStepper(value: n, min: 1, onChanged: (v) => setState(() => _peoplePick = v)),
      _note([
        if (ev != null && n < ev) '$n de $ev do evento.' else if (ev != null && n > ev) 'No evento há $ev.',
        if (minP != null && maxP != null) 'O pacote é para $minP a $maxP pessoas.' else if (maxP != null) 'O pacote é até $maxP pessoas.',
      ].join(' ')),
      if ((minP != null && n < minP) || (maxP != null && n > maxP)) _errorLine('Este número não cabe no pacote.'),
      _bottom('Continuar', () {
        setState(() {
          final kids = _children.clamp(0, n);
          _children = kids;
          _adults = n - kids;
          if (_seats > _children) _seats = _children;
        });
        _pop();
      }),
    ];
  }

  Widget _counter(String name, String meta, int value, ValueChanged<int> onChange, {int min = 0, int max = 9999, String Function(int)? label}) {
    Widget round(IconData icon, String l, VoidCallback? onTap) => Semantics(
          button: true,
          label: l,
          child: SnappyTap(
            onTap: onTap,
            child: Container(
              width: 34,
              height: 34,
              decoration: BoxDecoration(shape: BoxShape.circle, color: onTap == null ? AppTheme.ink.withValues(alpha: 0.25) : AppTheme.ink),
              child: Icon(icon, size: 16, color: Colors.white),
            ),
          ),
        );
    return Container(
      constraints: const BoxConstraints(minHeight: 64),
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
            Text(name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
        round(Hi.minus, 'Menos', value > min ? () => onChange(value - 1) : null),
        if (label == null)
          TypeCount(value: value, onChanged: onChange, min: min, max: max)
        else
          SizedBox(
            width: 48,
            child: Text(label(value),
                textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
        round(Hi.plus, 'Mais', value < max ? () => onChange(value + 1) : null),
      ]),
    );
  }

  Widget _choice(String title, String sub, bool on, VoidCallback onTap) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: ReservePick(
          selected: on,
          minHeight: 64,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          onTap: onTap,
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
            Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (sub.isNotEmpty) Text(sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
      );

  Widget _pillWrap(List<String> items, String? selected, ValueChanged<String> onTap) => Wrap(spacing: 8, runSpacing: 8, children: [
        for (final it in items) ReserveGreenPill(label: it, selected: it == selected, onTap: () => onTap(it)),
      ]);

  (String, List<Widget>) get _detailsBody => switch (widget.kind) {
        ReserveKind.espaco => (
            'Quartos',
            [
              ReserveGroup([_counter('Quartos', 'Para quem fica a dormir, se quiserem', _rooms, (v) => setState(() => _rooms = v))]),
              if (_rooms > 0) ...[
                const ReserveCaps('QUEM PAGA OS QUARTOS'),
                _pillWrap(['Nós', 'Cada hóspede o seu'], _roomsEach ? 'Cada hóspede o seu' : 'Nós', (v) => setState(() => _roomsEach = v != 'Nós')),
              ],
            ],
          ),
        ReserveKind.servico => (
            'Quanto tempo?',
            [
              ReserveGroup([
                _counter('Duração', 'Horas de serviço', _duration, (v) => setState(() => _duration = v), min: 1, max: 16, label: (v) => '$v h'),
              ]),
            ],
          ),
        ReserveKind.encomenda => (
            'Entrega ou recolha?',
            [
              _choice('Entrega no local do evento', _event == null ? '' : _place(_event!), _delivery, () => setState(() => _delivery = true)),
              _choice('Recolha na loja', widget.partnerName, !_delivery, () => setState(() => _delivery = false)),
              ReserveCaps(_delivery ? 'JANELA DE ENTREGA' : 'JANELA DE RECOLHA'),
              _pillWrap(const ['08:00 às 10:00', '10:00 às 12:00', '12:00 às 14:00', '14:00 às 16:00', '16:00 às 18:00'], _window,
                  (v) => setState(() => _window = v)),
            ],
          ),
        ReserveKind.transporte => (
            'De onde e quando volta?',
            [
              AddressField(
                controller: _departure,
                label: 'PARTIDA',
                hint: 'De onde sai',
                pickerTitle: 'De onde sai o transporte?',
                onPicked: (_) => setState(() {}),
              ),
              TimeWheels(columns: [
                WheelColumn(
                  label: 'REGRESSO',
                  options: ['Sem regresso', ..._times(12, 30)],
                  value: _returnTime ?? 'Sem regresso',
                  onChanged: (v) => setState(() => _returnTime = v == 'Sem regresso' ? null : v),
                ),
              ]),
              if (_children > 0)
                ReserveGroup([
                  _counter('Cadeirinhas', 'Para crianças pequenas', _seats, (v) => setState(() => _seats = v), max: _children),
                ]),
            ],
          ),
        _ => ('', const <Widget>[]),
      };

  List<Widget> _detalhesStep() {
    final (title, body) = _detailsBody;
    return [
      _partnerRow(_eventLabel),
      _title(title),
      ...body,
      _bottom('Continuar', _detailsReady ? _stepDone : null),
    ];
  }

  List<Widget> _extrasStep() => [
        _partnerRow(_eventLabel),
        _title('Queres juntar alguma coisa?'),
        for (final e in widget.extras)
          Padding(
            padding: const EdgeInsets.only(bottom: 8),
            child: ReservePick(
              selected: _extras.contains(e.id),
              minHeight: 64,
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              onTap: () => setState(() => _extras.contains(e.id) ? _extras.remove(e.id) : _extras.add(e.id)),
              child: Row(children: [
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                    Text(e.name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    if (e.details.isNotEmpty || e.priceUnit == 'person')
                      Text(
                        [...e.details, if (e.priceUnit == 'person') '${euros(e.price)} por pessoa, $_people'].join(', '),
                        style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                      ),
                  ]),
                ),
                const SizedBox(width: 10),
                Text('+ ${euros(_amount(e.priceUnit, e.price))}',
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ]),
            ),
          ),
        if (_total != null) _note('Com os extras, o total fica em ${euros(_total!)}.'),
        _bottom(_extras.isEmpty ? 'Continuar sem extras' : 'Continuar', _stepDone),
      ];

  Widget _row(String label, String value, {String? action, VoidCallback? onAction, bool big = true}) => Container(
        constraints: const BoxConstraints(minHeight: 48),
        padding: const EdgeInsets.symmetric(vertical: 7),
        child: Row(children: [
          Text(label, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(width: 10),
          Expanded(
            child: Text(value,
                textAlign: TextAlign.right,
                style: TextStyle(fontSize: big ? 20 : 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          if (action != null) ...[const SizedBox(width: 10), ReserveWhitePill(action, onTap: onAction!)],
        ]),
      );

  /// O valor grande do topo e a linha por baixo.
  (String, String, String?) get _headline {
    final total = _total;
    final p = widget.package;
    if (widget.quote) {
      return (
        widget.reference == null ? 'Orçamento' : '≈ ${euros(widget.reference!)}',
        'responde com uma proposta, não pagas nada agora',
        null,
      );
    }
    if (p == null) return ('Grátis', 'a mesa, cada convidado escolhe e paga o seu menu', null);
    if (total == null) return ('desde ${euros(p.price)}', '${widget.partnerName} confirma o valor na resposta', null);
    final f = _fee;
    final fee = f == null ? null : '+ taxa de serviço de ${_pct(f.effectivePct(total))} % + ${euros(kFixedFee)}';
    if (_each) return (euros(total), 'cada convite paga a sua parte', null);
    if (_noDeposit) return (euros(total), 'sem sinal, pagas tudo de uma vez nos 6 dias antes do prazo', fee);
    return (euros(_deposit, cents: _deposit % 1 != 0), 'sinal de ${widget.depositPct.round()} %, total ${euros(total)}', fee);
  }

  List<Widget> _confirmStep() {
    final (big, sub, fee) = _headline;
    final d = _date;
    final today = DateTime.now();
    final days = d == null ? 0 : DateTime(d.year, d.month, d.day).difference(DateTime(today.year, today.month, today.day)).inDays;
    final detailRows = [for (final (k, v) in _details) if (k != 'Hora' && k != 'Começa às' && k != 'Sessão' && k != 'Ida') (k, v)];
    return [
      _partnerRow(_event?.displayNames ?? ''),
      Wrap(crossAxisAlignment: WrapCrossAlignment.end, spacing: 8, children: [
        Text(big,
            style: const TextStyle(
                fontSize: 40, height: 1.1, fontWeight: FontWeight.w700, color: AppTheme.ink, fontFeatures: [FontFeature.tabularFigures()])),
        Padding(padding: const EdgeInsets.only(bottom: 6), child: Text(sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
      ]),
      if (fee != null) Padding(padding: const EdgeInsets.only(top: 0), child: _note(fee)),
      const ReserveCaps('ESTÁ CERTO?'),
      ReserveGroup([
        if (d != null)
          Container(
            constraints: const BoxConstraints(minHeight: 68),
            padding: const EdgeInsets.symmetric(vertical: 8),
            child: Row(children: [
              ReserveDayBadge(d),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                  Text(reserveCap(reserveLongDay(d)), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text(days <= 0 ? 'Hoje' : days == 1 ? 'Amanhã' : 'Daqui a $days dias',
                      style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              ReserveWhitePill('Mudar', onTap: () => _push(_S.dia)),
            ]),
          )
        else
          _row('Dia', 'Por escolher', action: 'Escolher', onAction: () => _push(_S.dia), big: false),
        if (_needsTime) _row('Hora', _time ?? 'Por escolher', action: 'Mudar', onAction: () => _push(_S.hora)),
        _row('Pessoas', '$_people', action: 'Editar', onAction: () => _push(_S.pessoas)),
        for (final (i, (k, v)) in detailRows.indexed)
          _row(k, v, big: false, action: i == 0 && _hasDetails ? 'Mudar' : null, onAction: () => _push(_S.detalhes)),
        if (widget.extras.isNotEmpty && !widget.quote)
          _row('Extras', _extras.isEmpty ? 'Nenhum' : '${_extras.length}', big: false, action: 'Mudar', onAction: () => _push(_S.extras)),
      ]),
      if (_asksWhoPays) ...[
        const ReserveCaps('QUEM PAGA'),
        Row(children: [
          Expanded(child: ReserveGreenPill(label: 'Pagamos nós', selected: !_eachPays, onTap: () => setState(() => _eachPays = false))),
          const SizedBox(width: 8),
          Expanded(child: ReserveGreenPill(label: 'Cada um paga o seu', selected: _eachPays, onTap: () => setState(() => _eachPays = true))),
        ]),
        if (_eachPays) _paidForCard(),
      ],
      if (widget.quote) ...[
        const ReserveCaps('MENSAGEM'),
        TextField(
          controller: _message,
          minLines: 3,
          maxLines: 6,
          maxLength: 1000,
          textCapitalization: TextCapitalization.sentences,
          style: const TextStyle(fontSize: 15, color: AppTheme.ink),
          decoration: InputDecoration(
            hintText: 'O que procuras, o estilo, o que é importante para vocês',
            filled: true,
            fillColor: kPickGrey,
            counterText: '',
            contentPadding: const EdgeInsets.all(16),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(22), borderSide: BorderSide.none),
            enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(22), borderSide: BorderSide.none),
            focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(22), borderSide: const BorderSide(color: AppTheme.ink, width: 1.5)),
          ),
        ),
      ],
      if (_paysDeposit) ...[
        _methodRow(),
        if (_error != null) _errorLine(_error),
        SlideToPay(onComplete: d == null || (_needsTime && _time == null) ? null : _slidePay, busy: _busy),
        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
          ReserveGreyText('Voltar', onTap: _busy ? null : _pop),
          ReserveGreyText('Pedir sem pagar agora', onTap: _busy ? null : _requestOnly),
        ]),
      ] else ...[
        if (_error != null) _errorLine(_error),
        _bottom(widget.quote ? 'Pedir orçamento' : 'Pedir reserva', d == null ? null : _requestOnly),
      ],
    ];
  }

  Widget _paidForCard() => Container(
        padding: const EdgeInsets.all(16),
        decoration: const ShapeDecoration(color: kPickGrey, shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.all(Radius.circular(22)))),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                const Text('Nós pagamos por', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(
                  _paidFor.isEmpty ? 'Se quiseres, escolhe pelo nome' : '${_paidFor.length} ${_paidFor.length == 1 ? 'pessoa escolhida' : 'pessoas escolhidas'}',
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                ),
              ]),
            ),
            const SizedBox(width: 12),
            ReserveWhitePill('Escolher', onTap: _pickPaidFor),
          ]),
          if (_paidFor.isNotEmpty) ...[
            const SizedBox(height: 12),
            Wrap(spacing: 8, runSpacing: 8, children: [
              for (final e in _paidFor.entries) PaidForChip(e.value, onRemove: () => setState(() => _paidFor.remove(e.key))),
            ]),
          ],
          const SizedBox(height: 10),
          _note('Cada convite paga por si e por quem traz, na app, até 3 dias antes. Os menus escolhem-se por pessoa.'),
        ]),
      );

  Widget _methodRow() {
    final wallet = _wallet.isNotEmpty && _useWallet;
    final name = wallet ? (_wallet == 'apple_pay' ? 'Apple Pay' : 'Google Pay') : 'Cartão';
    return Semantics(
      button: _wallet.isNotEmpty,
      label: _wallet.isNotEmpty ? 'Pagar com $name. Mudar a forma de pagar' : null,
      child: SnappyTap(
        onTap: _wallet.isEmpty || _busy ? null : () => setState(() => _useWallet = !_useWallet),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: const ShapeDecoration(color: kPickGrey, shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.all(Radius.circular(16)))),
          child: Row(children: [
            Container(
              width: 36,
              height: 24,
              alignment: Alignment.center,
              decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(6)),
              child: wallet
                  ? const Text('Pay', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.white))
                  : const Icon(Hi.creditCard, size: 15, color: Colors.white),
            ),
            const SizedBox(width: 10),
            Expanded(child: Text(name, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            if (_wallet.isNotEmpty) const Text('Mudar', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
      ),
    );
  }

  List<Widget> _doneStep() {
    final name = widget.partnerName;
    final responds = widget.responds == null ? 'responde em até 48 h' : widget.responds!.replaceFirst('Responde', 'responde');
    final total = _total;
    final d = _event?.eventDate ?? _date;
    final String title;
    final String text;
    if (widget.quote) {
      title = 'Orçamento pedido';
      text = '$name responde com uma proposta e avisamos-te. Não pagas nada agora.';
    } else if (_paid) {
      title = 'Pedido enviado e sinal pago';
      text = '$name $responds. Se recusar, devolvemos os ${euros(_paidAmount ?? _payNowWithFee, cents: true)} no mesmo dia.';
    } else {
      title = 'Pedido enviado';
      final due = d?.subtract(const Duration(days: 3));
      text = _each
          ? '$name aceita ou recusa e avisamos-te. Cada convite paga a sua parte${due != null ? ' até ${reserveShortDay(due).toLowerCase()}' : ''}.'
          : widget.package == null
              ? '$name aceita ou recusa e avisamos-te. Depois, cada convidado escolhe o seu menu na app.'
              : _noDeposit
                  ? '$name aceita ou recusa e avisamos-te. Sem sinal: pagas tudo de uma vez, nos 6 dias antes do prazo.'
                  : '$name $responds. Sem o sinal, $name pode aceitar outro pedido para este dia: pagas em Reservas, até 30 dias antes do evento.';
    }
    final line = [_what, '$_people ${_people == 1 ? 'pessoa' : 'pessoas'}', ?_time].join(', ');
    final rest = total == null ? 0.0 : total - _deposit;
    final restDue = d?.subtract(Duration(days: _finalDays));
    return [
      Padding(
        padding: const EdgeInsets.only(top: 8),
        child: Center(child: EstrelaMascot(_paid ? Estrela.piscar : Estrela.contente, size: 120)),
      ),
      Text(title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted)),
      if (!widget.quote)
        ReserveGroup([
          _row(line, total == null ? (widget.package == null ? 'Grátis' : 'Por confirmar') : euros(total), big: false),
          if (_paid && rest > 0 && restDue != null)
            _row('Falta pagar até ${restDue.day} ${_months[restDue.month - 1]}', euros(rest), big: false),
        ]),
      Row(children: [
        Expanded(child: ReserveButton('Ver conversa', outlined: true, onTap: () => Navigator.of(context).pop(ReserveOutcome(_event!, openChat: true)))),
        const SizedBox(width: 8),
        Expanded(child: ReserveButton('OK', onTap: () => Navigator.of(context).pop(ReserveOutcome(_event!)))),
      ]),
    ];
  }

  @override
  Widget build(BuildContext context) {
    // Os getters leem (`ref.read`); aqui fica-se à escuta.
    ref.watch(organizerFeeForPartnerProvider(widget.partnerId));
    ref.watch(partnerOpeningHoursProvider(widget.partnerId));
    final st = _st;
    final body = switch (st) {
      _S.event => _eventStep(),
      _S.novo => _novoStep(),
      _S.dia => _diaStep(),
      _S.hora => _horaStep(),
      _S.pessoas => _pessoasStep(),
      _S.detalhes => _detalhesStep(),
      _S.extras => _extrasStep(),
      _S.confirm => _confirmStep(),
      _S.done => _doneStep(),
    };
    if (st == _S.pessoas && (_loadingPeople || _eventTotal == null) && _event != null) {
      body
        ..clear()
        ..add(const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator(strokeWidth: 2))));
    }
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
      child: StepSlide(
        id: '$st-${_stack.length}',
        order: st == _S.done ? 99 : _stack.length,
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          for (final (i, w) in body.indexed) ...[
            if (i > 0 && w is! SizedBox && body[i - 1] is! SizedBox) _gap,
            w,
          ],
        ]),
      ),
    );
  }
}

/// Pílula verde com o nome e um «×» num círculo branco (mockup «Quem
/// paga?»): uma pessoa por quem pagamos.
class PaidForChip extends StatelessWidget {
  final String name;
  final VoidCallback onRemove;
  const PaidForChip(this.name, {super.key, required this.onRemove});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onRemove,
        child: Container(
          height: 38,
          padding: const EdgeInsets.only(left: 16, right: 6),
          decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(19)),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            Text(name.split(' ').first, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: Colors.white)),
            const SizedBox(width: 8),
            Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: 0.25)),
              alignment: Alignment.center,
              child: Icon(Hi.xMark, size: 13, color: Colors.white),
            ),
          ]),
        ),
      );
}

/// «Por quem pagamos?» (mockup «Menus por convite e cadeirinhas»,
/// 2026-11-22): voltar + «×», «N pessoas escolhidas», procurar e um grupo
/// por convite — «**João** traz Ana e Manuel» por cima, e uma linha por
/// pessoa (avatar 44 branco com as iniciais, nome 16, «Paga por si» /
/// «Pagas tu» a verde / «Paga João», e o visto verde à direita).
class PaidForSheet extends StatefulWidget {
  final List<Map<String, dynamic>> people;
  final Map<String, String> initial;
  const PaidForSheet({super.key, required this.people, required this.initial});

  @override
  State<PaidForSheet> createState() => _PaidForSheetState();
}

class _PaidForSheetState extends State<PaidForSheet> {
  late final Map<String, String> _on = Map.of(widget.initial);
  String _q = '';

  static String _first(String s) => s.trim().split(RegExp(r'\s+')).first;

  static String _initials(String s) {
    final parts = s.trim().split(RegExp(r'\s+')).where((x) => x.isNotEmpty).toList();
    if (parts.isEmpty) return '?';
    if (parts.length == 1) return parts.first.substring(0, 1).toUpperCase();
    return (parts.first.substring(0, 1) + parts.last.substring(0, 1)).toUpperCase();
  }

  /// Convites: o convidado e quem traz (pela chave do convite).
  List<(Map<String, dynamic>?, List<Map<String, dynamic>>)> _invites(List<Map<String, dynamic>> people) {
    final byKey = {for (final p in people) p['key'] as String: p};
    final groups = <String, List<Map<String, dynamic>>>{};
    final order = <String>[];
    for (final p in people) {
      final owner = (p['owner_key'] as String?) ?? (p['key'] as String);
      if (!groups.containsKey(owner)) order.add(owner);
      groups.putIfAbsent(owner, () => []).add(p);
    }
    return [
      for (final k in order) (byKey[k], [for (final p in groups[k]!) if (p['key'] != k) p]),
    ];
  }

  @override
  Widget build(BuildContext context) {
    final q = _q.trim().toLowerCase();
    bool match(Map<String, dynamic> p) => q.isEmpty || '${p['name']}'.toLowerCase().contains(q);
    final invites = [
      for (final (host, comp) in _invites(widget.people))
        if ((host != null && match(host)) || comp.any(match)) (host, comp),
    ];
    final solo = [for (final (h, c) in invites) if (c.isEmpty && h != null) h];
    final withCompanions = [for (final i in invites) if (i.$2.isNotEmpty) i];
    return SingleChildScrollView(
      padding: EdgeInsets.fromLTRB(20, 20, 20, 20 + MediaQuery.viewInsetsOf(context).bottom),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          IslandBackButton(onTap: () => Navigator.of(context).pop()),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Por quem pagamos?', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 4),
              Text(_on.isEmpty ? 'Ninguém escolhido' : '${_on.length} ${_on.length == 1 ? 'pessoa escolhida' : 'pessoas escolhidas'}',
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 12),
          const IslandCloseButton(),
        ]),
        const SizedBox(height: 16),
        Container(
          height: 52,
          padding: const EdgeInsets.symmetric(horizontal: 18),
          alignment: Alignment.centerLeft,
          decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(26)),
          child: TextField(
            style: const TextStyle(fontSize: 15, color: AppTheme.ink),
            decoration: const InputDecoration(filled: false, enabledBorder: InputBorder.none, focusedBorder: InputBorder.none, 
              isCollapsed: true,
              border: InputBorder.none,
              hintText: 'Procurar convidado',
              hintStyle: TextStyle(fontSize: 15, color: AppTheme.inkMuted),
            ),
            onChanged: (v) => setState(() => _q = v),
          ),
        ),
        for (final (host, comp) in withCompanions) ...[
          const SizedBox(height: 16),
          Text.rich(
            TextSpan(children: [
              TextSpan(text: _first('${host?['name'] ?? comp.first['owner_name'] ?? ''}'), style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
              TextSpan(text: ' traz ${_list([for (final c in comp) _first('${c['name']}')])}'),
            ]),
            style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 8),
          _group([?host, ...comp]),
        ],
        if (solo.isNotEmpty) ...[
          const SizedBox(height: 16),
          if (withCompanions.isNotEmpty) ...[
            const Text('Vêm sozinhos', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            const SizedBox(height: 8),
          ],
          _group(solo),
        ],
        const SizedBox(height: 20),
        SnappyTap(
          onTap: () => Navigator.of(context).pop(Map.of(_on)),
          child: Container(
            height: 52,
            alignment: Alignment.center,
            decoration: const ShapeDecoration(color: AppTheme.ink, shape: StadiumBorder()),
            child: Text(_on.isEmpty ? 'Guardar' : 'Guardar (${_on.length} ${_on.length == 1 ? 'pessoa' : 'pessoas'})',
                style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Colors.white)),
          ),
        ),
      ]),
    );
  }

  static String _list(List<String> xs) =>
      xs.length <= 1 ? xs.join() : '${xs.sublist(0, xs.length - 1).join(', ')} e ${xs.last}';

  Widget _group(List<Map<String, dynamic>> rows) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
        decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
        child: Column(children: [
          for (final (i, p) in rows.indexed)
            Container(
              decoration: i == 0 ? null : const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFFD9D9D9)))),
              child: _row(p),
            ),
        ]),
      );

  Widget _row(Map<String, dynamic> p) {
    final key = p['key'] as String;
    final name = '${p['name']}';
    final owner = p['owner_name'] as String?;
    final on = _on.containsKey(key);
    return Semantics(
      button: true,
      selected: on,
      child: SnappyTap(
        onTap: () => setState(() => on ? _on.remove(key) : _on[key] = name),
        child: Container(
          constraints: const BoxConstraints(minHeight: 64),
          padding: const EdgeInsets.symmetric(vertical: 10),
          child: Row(children: [
            Container(
              width: 44,
              height: 44,
              decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.white),
              alignment: Alignment.center,
              child: Text(_initials(name), style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Text(name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(
                  on ? 'Pagas tu' : owner != null ? 'Paga ${_first(owner)}' : 'Paga por si',
                  style: TextStyle(fontSize: 13, color: on ? const Color(0xFF3F7A4F) : AppTheme.inkMuted),
                ),
              ]),
            ),
            const SizedBox(width: 12),
            Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: on ? AppTheme.accentOliveDark : Colors.white,
                border: on ? null : Border.all(color: AppTheme.inkMuted, width: 1.5),
              ),
              child: on ? Icon(Hi.check, size: 14, color: Colors.white) : null,
            ),
          ]),
        ),
      ),
    );
  }
}
