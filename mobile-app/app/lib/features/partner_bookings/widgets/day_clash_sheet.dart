import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/chat/chat_helpers.dart';
import '../../../core/models/models.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/hero_icons.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';

/// «Já tens uma marcação nesse dia / a essa hora» (pedido do Rafael,
/// 2026-11-24, mockup «Já tens uma marcação nesse dia/hora»): antes de o
/// parceiro aceitar um pedido ou enviar a proposta, se já tem uma reserva
/// (aceite ou confirmada) no mesmo dia, avisa e dá duas saídas — «É
/// possível, aceitar» ou «Propor outro dia».

enum DayClashChoice { accept, proposeDay }

class DayClash {
  final Booking booking;
  final String? hour;
  const DayClash(this.booking, this.hour);
}

const _weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
String _day(DateTime d) => '${_weekdays[d.weekday - 1]}, ${d.day} ${_months[d.month - 1]}';
bool _sameDay(DateTime a, DateTime b) => a.year == b.year && a.month == b.month && a.day == b.day;

/// «16:00» → minutos desde a meia-noite; `null` se não se percebe.
int? _minutes(String? h) {
  final m = RegExp(r'^(\d{1,2})[:h](\d{2})').firstMatch((h ?? '').trim());
  if (m == null) return null;
  return int.parse(m.group(1)!) * 60 + int.parse(m.group(2)!);
}

/// Hora de cada evento (`events.ceremony_time`); vazio se não se pode ler.
Future<Map<String, String>> _hours(Iterable<String> eventIds) async {
  final ids = eventIds.where((e) => e.isNotEmpty).toSet().toList();
  if (ids.isEmpty) return {};
  try {
    final rows = await supabase.from('events').select('id, ceremony_time').inFilter('id', ids);
    return {
      for (final r in rows as List)
        if ((r['ceremony_time'] as String?)?.trim().isNotEmpty ?? false) r['id'] as String: (r['ceremony_time'] as String).trim(),
    };
  } catch (_) {
    return {};
  }
}

/// As outras reservas do parceiro nesse dia, e a hora do pedido.
Future<({List<DayClash> clashes, String? hour})> findDayClashes(Booking request, List<Booking> all) async {
  final others = all
      .where((b) =>
          b.id != request.id &&
          !b.fromQuoteRequest &&
          (b.status == BookingStatus.aceite || b.status == BookingStatus.confirmado) &&
          _sameDay(b.eventDate, request.eventDate))
      .toList();
  if (others.isEmpty) return (clashes: const <DayClash>[], hour: null);
  final hours = await _hours([request.eventId, ...others.map((b) => b.eventId)]);
  return (
    clashes: [for (final b in others) DayClash(b, hours[b.eventId])],
    hour: hours[request.eventId],
  );
}

/// O aviso. `null` se fechou sem escolher.
Future<DayClashChoice?> showDayClashSheet(
  BuildContext context, {
  required Booking request,
  required List<DayClash> clashes,
  String? hour,
}) {
  // «A essa hora»: as duas horas conhecidas e a menos de 3 h uma da outra.
  final mine = _minutes(hour);
  final sameHour = mine != null &&
      clashes.any((c) {
        final o = _minutes(c.hour);
        return o != null && (o - mine).abs() < 180;
      });
  return showIslandSheet<DayClashChoice>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _ClashSheet(request: request, clashes: clashes, hour: hour, sameHour: sameHour),
  );
}

class _ClashSheet extends StatelessWidget {
  final Booking request;
  final List<DayClash> clashes;
  final String? hour;
  final bool sameHour;
  const _ClashSheet({required this.request, required this.clashes, required this.hour, required this.sameHour});

  static const _caps = TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted);

  @override
  Widget build(BuildContext context) {
    final day = _day(request.eventDate);
    final tone = sameHour ? AlertTone.urgent : AlertTone.pending;
    final firstName = request.clientName.split(' ').first;
    final meta = [
      if (request.city.isNotEmpty) request.city,
      if ((request.people ?? 0) > 0) '${request.people} pessoas',
    ].join(' · ');
    return SafeArea(
      top: false,
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(sameHour ? 'Já tens uma marcação a essa hora' : 'Já tens uma marcação nesse dia',
                    style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 2),
                Text('Pedido de ${request.clientName} · ${request.eventType.label}',
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            const SizedBox(width: 10),
            _Round(onTap: () => Navigator.of(context).pop()),
          ]),
        ),
        Flexible(
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              AlertOutline(
                tone: tone,
                radius: 16,
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Container(
                    margin: const EdgeInsets.only(top: 6),
                    width: 8,
                    height: 8,
                    decoration: BoxDecoration(color: alertColor(tone), shape: BoxShape.circle),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(sameHour ? '$day às $hour já está marcado' : '$day já está marcado',
                          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      const SizedBox(height: 2),
                      Text(
                        sameHour
                            ? 'A essa hora já tens outra marcação. Se consegues fazer as duas, aceita; se não, propõe outro dia.'
                            : 'Tens outra marcação nesse dia${hour == null ? '' : ', a outra hora'}. Se dá para fazer as duas, aceita; se não, propõe outro dia.',
                        style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4),
                      ),
                    ]),
                  ),
                ]),
              ),
              const SizedBox(height: 16),
              const Text('ESTE PEDIDO', style: _caps),
              const SizedBox(height: 8),
              _Group(children: [
                _Line(title: hour == null ? day : '$day · $hour', meta: meta),
              ]),
              const SizedBox(height: 16),
              Text('JÁ MARCADO NESSE DIA · ${clashes.length}', style: _caps),
              const SizedBox(height: 8),
              _Group(children: [
                for (final c in clashes)
                  _Line(
                    avatar: V2Avatar(c.booking.clientName, size: 44, imageUrl: c.booking.clientAvatarUrl),
                    title: c.booking.clientName,
                    meta: [
                      c.booking.eventType.label,
                      if (c.hour != null) c.hour!,
                      if (c.booking.city.isNotEmpty) c.booking.city,
                    ].join(' · '),
                    tag: c.booking.status == BookingStatus.confirmado ? 'Confirmada' : 'Aceite',
                  ),
              ]),
              const SizedBox(height: 16),
              Text('Ao aceitar, as duas marcações ficam na tua agenda. Ao propor outro dia, $firstName escolhe se aceita.',
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4)),
            ]),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
          child: Row(children: [
            Expanded(
              child: _Pill(
                label: 'Propor outro dia',
                outlined: true,
                onTap: () => Navigator.of(context).pop(DayClashChoice.proposeDay),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: _Pill(
                label: 'É possível, aceitar',
                outlined: false,
                onTap: () => Navigator.of(context).pop(DayClashChoice.accept),
              ),
            ),
          ]),
        ),
      ]),
    );
  }
}

/// «Propor outro dia» para um pedido (mockup «Propor outro dia»): o dia
/// pedido (ocupado), os dias livres mais perto e a mensagem. Envia a
/// proposta de dia na conversa. `true` se enviou.
Future<bool> showProposeOtherDaySheet(
  BuildContext context, {
  required Booking request,
  required List<Booking> all,
  String? hour,
}) async {
  final sent = await showIslandSheet<bool>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _ProposeDaySheet(request: request, all: all, hour: hour),
  );
  return sent == true;
}

class _ProposeDaySheet extends StatefulWidget {
  final Booking request;
  final List<Booking> all;
  final String? hour;
  const _ProposeDaySheet({required this.request, required this.all, this.hour});

  @override
  State<_ProposeDaySheet> createState() => _ProposeDaySheetState();
}

class _ProposeDaySheetState extends State<_ProposeDaySheet> {
  late final List<(DateTime, String)> _days = _freeDays();
  late int _picked = _days.length > 1 ? 1 : 0;
  late final _msg = TextEditingController(
      text: 'Nesse dia já tenho outra marcação.${_days.isEmpty ? '' : ' ${_day(_days[_picked].$1)} fica bem?'}');
  bool _busy = false;

  /// «PREÇO» (prancheta «Propor outro dia», migração 236): o total da
  /// proposta já enviada (se houver), «Mesmo preço» ou «Outro preço».
  double? _current;
  bool _otherPrice = false;
  final _newTotal = TextEditingController();

  @override
  void initState() {
    super.initState();
    supabase
        .from('proposals')
        .select('price')
        .eq('quote_request_id', widget.request.id)
        .eq('status', 'sent')
        .order('created_at', ascending: false)
        .limit(1)
        .maybeSingle()
        .then((p) {
      if (mounted && p != null) setState(() => _current = (p['price'] as num?)?.toDouble());
    }).catchError((_) {});
  }

  double? get _price => _otherPrice ? double.tryParse(_newTotal.text.trim().replaceAll(' ', '').replaceAll(',', '.')) : null;

  Widget _pricePill(String label, bool on, VoidCallback onTap) => Semantics(
        button: true,
        selected: on,
        child: GestureDetector(
          onTap: onTap,
          child: Container(
            height: 38,
            padding: const EdgeInsets.symmetric(horizontal: 14),
            alignment: Alignment.center,
            decoration: BoxDecoration(color: on ? AppTheme.brandGreen : AppTheme.background, borderRadius: BorderRadius.circular(19)),
            child: Text(label, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
          ),
        ),
      );

  /// Dia antes, dia a seguir, uma e duas semanas depois — sem os dias com
  /// reservas.
  List<(DateTime, String)> _freeDays() {
    final d = widget.request.eventDate;
    final now = DateTime.now();
    final busy = widget.all
        .where((b) => !b.fromQuoteRequest && (b.status == BookingStatus.aceite || b.status == BookingStatus.confirmado))
        .map((b) => b.eventDate)
        .toList();
    bool free(DateTime x) => !busy.any((b) => _sameDay(b, x)) && x.isAfter(now);
    return [
      (DateTime(d.year, d.month, d.day - 1), 'Dia antes'),
      (DateTime(d.year, d.month, d.day + 1), 'Dia a seguir'),
      (DateTime(d.year, d.month, d.day + 7), 'Uma semana depois'),
      (DateTime(d.year, d.month, d.day + 14), 'Duas semanas depois'),
    ].where((e) => free(e.$1)).toList();
  }

  @override
  void dispose() {
    _msg.dispose();
    _newTotal.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    if (_busy || _days.isEmpty) return;
    if (_otherPrice && (_price == null || _price! <= 0)) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Escreve o novo total.')));
      return;
    }
    setState(() => _busy = true);
    try {
      final r = widget.request;
      final picked = _days[_picked].$1;
      final text = _msg.text.trim();
      if (!r.fromQuoteRequest) {
        // Reserva já feita (vindo de «Cancelar reserva» → «O QUE PODES
        // FAZER», 2026-11-25): o mesmo cartão, pela 233.
        await supabase.rpc('request_booking_change', params: {
          'p_booking': r.id,
          'p_kind': 'date',
          'p_to': '${picked.year}-${picked.month.toString().padLeft(2, '0')}-${picked.day.toString().padLeft(2, '0')}',
          'p_message': text.isEmpty ? null : text,
        });
        if (mounted) Navigator.of(context).pop(true);
        return;
      }
      try {
        // Cartão «Proposta de outro dia» na conversa (migração 235):
        // aceite, o dia do pedido muda sozinho.
        await supabase.rpc('propose_request_day', params: {
          'p_quote_request': r.id,
          'p_date': '${picked.year}-${picked.month.toString().padLeft(2, '0')}-${picked.day.toString().padLeft(2, '0')}',
          'p_message': text.isEmpty ? null : text,
          if (_price != null) 'p_price': _price,
        });
      } on PostgrestException catch (e) {
        // Sem a 235: fica como mensagem na conversa.
        if (e.code != 'PGRST202' && e.code != '42883') rethrow;
        final conv = await getOrCreateConversation(eventId: r.eventId, partnerId: r.partnerId);
        await supabase.from('messages').insert({
          'conversation_id': conv,
          'sender_role': 'partner',
          'sender_id': supabase.auth.currentUser!.id,
          'body': 'Proposta de outro dia: ${_day(picked)}.${text.isEmpty ? '' : '\n$text'}',
        });
      }
      if (mounted) Navigator.of(context).pop(true);
    } catch (_) {
      if (mounted) {
        setState(() => _busy = false);
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível enviar. Tenta novamente.')),
        );
      }
    }
  }

  static const _caps = TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted);

  @override
  Widget build(BuildContext context) {
    final r = widget.request;
    final firstName = r.clientName.split(' ').first;
    final meta = [
      if (r.city.isNotEmpty) r.city,
      if ((r.people ?? 0) > 0) '${r.people} pessoas',
    ].join(' · ');
    return SafeArea(
      top: false,
      child: Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
            child: Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  const Text('Propor outro dia', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(height: 2),
                  Text('Pedido de ${r.clientName} · ${r.eventType.label}', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              const SizedBox(width: 10),
              _Round(onTap: () => Navigator.of(context).pop()),
            ]),
          ),
          Flexible(
            child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                  decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
                  child: Row(children: [
                    Expanded(
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        const Text('DIA PEDIDO', style: _caps),
                        const SizedBox(height: 2),
                        Text(widget.hour == null ? _day(r.eventDate) : '${_day(r.eventDate)} · ${widget.hour}',
                            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                      ]),
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(color: const Color(0xFFE6E6E6), borderRadius: BorderRadius.circular(999)),
                      child: const Text('Ocupado', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3A3733))),
                    ),
                  ]),
                ),
                const SizedBox(height: 16),
                const Text('DIAS LIVRES NA TUA AGENDA', style: _caps),
                const SizedBox(height: 8),
                if (_days.isEmpty)
                  const Text('Não há dias livres perto deste. Combina outro dia na conversa.',
                      style: TextStyle(fontSize: 13, color: AppTheme.inkMuted))
                else
                  _Group(children: [
                    for (var i = 0; i < _days.length; i++)
                      InkWell(
                        onTap: () => setState(() => _picked = i),
                        child: _Line(
                          title: _day(_days[i].$1),
                          meta: _days[i].$2,
                          trailing: _Tick(on: i == _picked),
                        ),
                      ),
                  ]),
                if (r.fromQuoteRequest) ...[
                  const SizedBox(height: 16),
                  const Text('PREÇO', style: _caps),
                  const SizedBox(height: 8),
                  Wrap(spacing: 8, runSpacing: 8, children: [
                    _pricePill(_current == null ? 'Mesmo preço' : 'Mesmo preço · ${euros(_current!)}', !_otherPrice,
                        () => setState(() => _otherPrice = false)),
                    _pricePill('Outro preço', _otherPrice, () => setState(() => _otherPrice = true)),
                  ]),
                  if (_otherPrice) ...[
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
                            controller: _newTotal,
                            keyboardType: const TextInputType.numberWithOptions(decimal: true),
                            style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink),
                            decoration: const InputDecoration(isCollapsed: true, border: InputBorder.none, hintText: '0'),
                          ),
                        ),
                        const Text('€', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      ]),
                    ),
                  ],
                ],
                const SizedBox(height: 16),
                Text('MENSAGEM PARA ${firstName.toUpperCase()}', style: _caps),
                const SizedBox(height: 8),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
                  decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
                  child: TextField(
                    controller: _msg,
                    minLines: 2,
                    maxLines: 4,
                    style: const TextStyle(fontSize: 15, color: AppTheme.ink, height: 1.4),
                    decoration: const InputDecoration(isCollapsed: true, border: InputBorder.none),
                  ),
                ),
                const SizedBox(height: 16),
                Text('Se $firstName aceitar, o dia do pedido muda para este. O dia do evento não muda sozinho.',
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4)),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
            child: _Pill(
              label: _days.isEmpty ? 'Propor' : 'Propor ${_day(_days[_picked].$1)}',
              outlined: false,
              onTap: _busy || _days.isEmpty ? null : _send,
            ),
          ),
        ]),
      ),
    );
  }
}

class _Group extends StatelessWidget {
  final List<Widget> children;
  const _Group({required this.children});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
      decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
      child: Column(children: [
        for (var i = 0; i < children.length; i++)
          DecoratedBox(
            decoration: BoxDecoration(
              border: i == children.length - 1 ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9))),
            ),
            child: children[i],
          ),
      ]),
    );
  }
}

class _Line extends StatelessWidget {
  final Widget? avatar;
  final String title;
  final String meta;
  final String? tag;
  final Widget? trailing;
  const _Line({this.avatar, required this.title, required this.meta, this.tag, this.trailing});

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: const BoxConstraints(minHeight: 56),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 6),
        child: Row(children: [
          if (avatar != null) ...[avatar!, const SizedBox(width: 12)],
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          if (tag != null)
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
              decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
              child: Text(tag!, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
            ),
          ?trailing,
        ]),
      ),
    );
  }
}

class _Tick extends StatelessWidget {
  final bool on;
  const _Tick({required this.on});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 24,
      height: 24,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: on ? AppTheme.brandGreen : Colors.transparent,
        border: on ? null : Border.all(color: const Color(0xFFC9C3B8), width: 1.5),
      ),
      alignment: Alignment.center,
      child: on ? const Icon(Icons.check_rounded, size: 16, color: Colors.white) : null,
    );
  }
}

class _Pill extends StatelessWidget {
  final String label;
  final bool outlined;
  final VoidCallback? onTap;
  const _Pill({required this.label, required this.outlined, required this.onTap});

  @override
  Widget build(BuildContext context) {
    const style = TextStyle(
      fontFamily: AppTheme.fontFamily,
      fontFamilyFallback: AppTheme.fontFamilyFallback,
      fontSize: 15,
      fontWeight: FontWeight.w700,
    );
    return SizedBox(
      height: 52,
      child: outlined
          ? OutlinedButton(
              onPressed: onTap,
              style: OutlinedButton.styleFrom(
                foregroundColor: AppTheme.ink,
                backgroundColor: Colors.white,
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                shape: const StadiumBorder(),
                padding: const EdgeInsets.symmetric(horizontal: 10),
                textStyle: style,
              ),
              child: Text(label, textAlign: TextAlign.center),
            )
          : FilledButton(
              onPressed: onTap,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                shape: const StadiumBorder(),
                padding: const EdgeInsets.symmetric(horizontal: 10),
                textStyle: style,
              ),
              child: Text(label, textAlign: TextAlign.center),
            ),
    );
  }
}

class _Round extends StatelessWidget {
  final VoidCallback onTap;
  const _Round({required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      label: 'Fechar',
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          width: 44,
          height: 44,
          decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
          alignment: Alignment.center,
          child: const Icon(Hi.xMark, size: 20, color: Colors.white),
        ),
      ),
    );
  }
}
