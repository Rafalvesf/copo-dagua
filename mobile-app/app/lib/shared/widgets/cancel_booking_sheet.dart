import 'package:flutter/material.dart';

import '../../core/payments/refunds.dart';
import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import '../money.dart';
import 'alert_outline.dart';
import 'island_sheet.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

/// Cancelar uma reserva — popups dos mockups «Cancelar reserva ·
/// organizador» e «… · parceiro» (pedido do Rafael, 2026-11-24; migração
/// 234). O sinal fica cativo no cartão durante as primeiras 48 h depois de
/// pago: nesse tempo, quem cancelar devolve-o todo. Depois disso o sinal é
/// do parceiro: o organizador pode cancelar mas perde-o; o parceiro já não
/// pode cancelar.

/// O que o servidor diz sobre o sinal desta reserva.
class BookingCancelState {
  /// Quanto já foi pago (0 se nada).
  final double paid;

  /// Até quando o sinal está cativo (`null` se ainda não há nada pago).
  final DateTime? heldUntil;

  const BookingCancelState({required this.paid, required this.heldUntil});

  bool get held => heldUntil == null || DateTime.now().isBefore(heldUntil!);
}

/// `booking_cancel_state()` (234); sem ela, as contas da 112.
Future<BookingCancelState> fetchBookingCancelState(String bookingId, {double? depositAmount}) async {
  try {
    final d = await supabase.rpc('booking_cancel_state', params: {'p_booking_id': bookingId});
    if (d is Map) {
      return BookingCancelState(
        paid: ((d['paid'] as num?) ?? 0).toDouble(),
        heldUntil: DateTime.tryParse('${d['held_until'] ?? ''}')?.toLocal(),
      );
    }
  } catch (_) {}
  final info = await bookingRefundInfo(bookingId);
  final at = info.depositPaidAt;
  return BookingCancelState(
    paid: at == null ? 0 : (depositAmount ?? 0),
    heldUntil: at?.toLocal().add(Duration(hours: info.windowHours)),
  );
}

const _weekdays = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'];
const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/// «qui, 26 nov às 21:30».
String _when(DateTime d) =>
    '${_weekdays[d.weekday - 1]}, ${d.day} ${_months[d.month - 1]} às '
    '${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';

/// O organizador cancela. Devolve o motivo (pode ser vazio) se confirmou;
/// `null` se ficou com a reserva.
Future<String?> showCoupleCancelSheet(
  BuildContext context, {
  required String partnerName,
  required String subtitle,
  required BookingCancelState state,
  double? rest,
}) {
  return showIslandSheet<String>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _CancelSheet(
      title: 'Cancelar reserva?',
      subtitle: subtitle,
      partnerSide: false,
      who: partnerName,
      state: state,
      rest: rest,
    ),
  );
}

/// O parceiro cancela. Com o sinal já dele, só explica que não pode.
/// Devolve o motivo se confirmou; `null` se ficou com a reserva.
Future<String?> showPartnerCancelSheet(
  BuildContext context, {
  required String clientName,
  required String subtitle,
  required BookingCancelState state,
  VoidCallback? onTalkToTeam,
  VoidCallback? onOtherDay,
  VoidCallback? onChange,
}) {
  return showIslandSheet<String>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _CancelSheet(
      title: state.held ? 'Cancelar reserva?' : 'Já não podes cancelar',
      subtitle: subtitle,
      partnerSide: true,
      who: clientName,
      state: state,
      onTalkToTeam: onTalkToTeam,
      onOtherDay: onOtherDay,
      onChange: onChange,
    ),
  );
}

class _CancelSheet extends StatefulWidget {
  final String title;
  final String subtitle;
  final bool partnerSide;
  final String who;
  final BookingCancelState state;
  final double? rest;
  final VoidCallback? onTalkToTeam;

  /// «O QUE PODES FAZER» do parceiro (mockup «Cancelar reserva ·
  /// parceiro»): «Propor outro dia» e «Pedir alteração» antes de cancelar.
  final VoidCallback? onOtherDay;
  final VoidCallback? onChange;

  const _CancelSheet({
    this.onOtherDay,
    this.onChange,
    required this.title,
    required this.subtitle,
    required this.partnerSide,
    required this.who,
    required this.state,
    this.rest,
    this.onTalkToTeam,
  });

  @override
  State<_CancelSheet> createState() => _CancelSheetState();
}

class _CancelSheetState extends State<_CancelSheet> {
  final _reason = TextEditingController();

  @override
  void dispose() {
    _reason.dispose();
    super.dispose();
  }

  static const _muted = TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4);
  static const _caps = TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted);

  @override
  Widget build(BuildContext context) {
    final s = widget.state;
    final paid = s.paid;
    final held = s.held;
    final locked = widget.partnerSide && !held;
    final lose = !widget.partnerSide && !held && paid > 0;
    final until = s.heldUntil;

    final String alertTitle;
    final String alertBody;
    if (widget.partnerSide) {
      if (locked) {
        alertTitle = 'O sinal já é teu';
        alertBody = 'Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. '
            'A partir daqui, a reserva só pode ser cancelada pelo organizador.';
      } else {
        alertTitle = 'O cliente recebe tudo de volta';
        alertBody = paid > 0 && until != null
            ? 'O sinal ainda está cativo (até ${_when(until)}). Se cancelares, o cliente recebe os ${euros(paid, cents: true)} de volta.'
            : 'O cliente ainda não pagou nada. Se cancelares, a reserva fica sem efeito.';
      }
    } else if (lose) {
      alertTitle = 'Perdes o sinal de ${euros(paid, cents: true)}';
      alertBody = 'Pagaste o sinal há mais de 48 h: já é de ${widget.who}. Se cancelares, não é devolvido.';
    } else if (paid > 0 && until != null) {
      alertTitle = 'O sinal ainda é devolvido';
      alertBody = 'Pagaste o sinal há menos de 48 h. Se cancelares até ${_when(until)}, recebes o sinal todo de volta.';
    } else {
      alertTitle = 'Ainda não pagaste nada';
      alertBody = 'Se cancelares, ${widget.who} é avisado e a reserva fica sem efeito.';
    }
    final tone = (locked || lose) ? AlertTone.urgent : AlertTone.pending;

    final note = locked
        ? 'Se não conseguires mesmo fazer o evento, fala com a equipa À Nossa!.'
        : widget.partnerSide
            ? 'O cliente é avisado na conversa. Esta ação não pode ser desfeita.'
            : (paid > 0 && held && until != null)
                ? 'Depois dessa hora, o sinal deixa de ser devolvido. Esta ação não pode ser desfeita.'
                : '${widget.who} é avisado na conversa. Esta ação não pode ser desfeita.';

    final rows = <(String, String)>[
      if (paid > 0) (widget.partnerSide ? 'Sinal pago pelo cliente' : 'Sinal pago', euros(paid, cents: true)),
      if (widget.partnerSide && paid > 0) ('Devolvido ao cliente', euros(paid, cents: true)),
      if (!widget.partnerSide && (widget.rest ?? 0) > 0) ('Resto (${euros(widget.rest!, cents: true)})', 'Já não pagas'),
    ];

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
                  Text(widget.title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(height: 2),
                  Text(widget.subtitle, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              const SizedBox(width: 10),
              _RoundButton(icon: Hi.xMark, label: 'Fechar', onTap: () => Navigator.of(context).pop()),
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
                        Text(alertTitle, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        const SizedBox(height: 2),
                        Text(alertBody, style: _muted),
                      ]),
                    ),
                  ]),
                ),
                if (widget.partnerSide && (widget.onOtherDay != null || widget.onChange != null)) ...[
                  const SizedBox(height: 16),
                  const Text('O QUE PODES FAZER', style: _caps),
                  const SizedBox(height: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                    decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
                    child: Column(children: [
                      if (widget.onOtherDay != null)
                        _DoRow('Propor outro dia', 'O sinal fica para o dia novo', () {
                          Navigator.of(context).pop();
                          widget.onOtherDay!();
                        }),
                      if (widget.onOtherDay != null && widget.onChange != null)
                        const Divider(height: 1, thickness: 1, color: Color(0xFFD9D9D9)),
                      if (widget.onChange != null)
                        _DoRow('Pedir alteração', 'Pessoas, hora ou o que está incluído', () {
                          Navigator.of(context).pop();
                          widget.onChange!();
                        }),
                    ]),
                  ),
                ],
                if (rows.isNotEmpty && !locked) ...[
                  const SizedBox(height: 16),
                  const Text('AS CONTAS', style: _caps),
                  const SizedBox(height: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                    decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
                    child: Column(children: [
                      for (var i = 0; i < rows.length; i++)
                        Container(
                          height: 48,
                          decoration: BoxDecoration(
                            border: i == rows.length - 1 ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9))),
                          ),
                          child: Row(children: [
                            Expanded(child: Text(rows[i].$1, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
                            Text(rows[i].$2, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          ]),
                        ),
                    ]),
                  ),
                  if (!widget.partnerSide && paid > 0) ...[
                    const SizedBox(height: 8),
                    Row(crossAxisAlignment: CrossAxisAlignment.baseline, textBaseline: TextBaseline.alphabetic, children: [
                      const Expanded(child: Text('Recebes de volta', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
                      Text(euros(lose ? 0 : paid, cents: true),
                          style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ]),
                  ],
                ],
                if (!locked) ...[
                  const SizedBox(height: 16),
                  Text(widget.partnerSide ? 'PORQUÊ' : 'PORQUÊ (SE QUISERES)', style: _caps),
                  const SizedBox(height: 8),
                  Container(
                    height: 52,
                    padding: const EdgeInsets.symmetric(horizontal: 18),
                    alignment: Alignment.centerLeft,
                    decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(26)),
                    child: TextField(
                      controller: _reason,
                      style: const TextStyle(fontSize: 15, color: AppTheme.ink),
                      decoration: InputDecoration(filled: false, enabledBorder: InputBorder.none, focusedBorder: InputBorder.none, 
                        isCollapsed: true,
                        border: InputBorder.none,
                        hintText: widget.partnerSide ? 'Diz ao cliente porque cancelas' : 'Diz a ${widget.who} o que mudou',
                        hintStyle: const TextStyle(fontSize: 15, color: AppTheme.inkMuted),
                      ),
                    ),
                  ),
                ],
                const SizedBox(height: 16),
                Text(note, style: _muted),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
            child: Row(children: [
              Expanded(
                child: _PillButton(
                  label: locked
                      ? 'Falar com a equipa'
                      : lose
                          ? 'Cancelar e perder o sinal'
                          : 'Cancelar reserva',
                  outlined: true,
                  onTap: locked
                      ? () {
                          Navigator.of(context).pop();
                          widget.onTalkToTeam?.call();
                        }
                      : () => Navigator.of(context).pop(_reason.text.trim()),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _PillButton(
                  label: locked ? 'OK' : 'Manter reserva',
                  outlined: false,
                  onTap: () => Navigator.of(context).pop(),
                ),
              ),
            ]),
          ),
        ]),
      ),
    );
  }
}

class _DoRow extends StatelessWidget {
  final String title;
  final String meta;
  final VoidCallback onTap;
  const _DoRow(this.title, this.meta, this.onTap);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      child: ConstrainedBox(
        constraints: const BoxConstraints(minHeight: 60),
        child: Row(children: [
          Expanded(
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          const Icon(Icons.chevron_right_rounded, color: AppTheme.inkMuted),
        ]),
      ),
    );
  }
}

class _PillButton extends StatelessWidget {
  final String label;
  final bool outlined;
  final VoidCallback onTap;
  const _PillButton({required this.label, required this.outlined, required this.onTap});

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
          ? PressScale(child: OutlinedButton(
              onPressed: onTap,
              style: OutlinedButton.styleFrom(
                foregroundColor: AppTheme.ink,
                backgroundColor: Colors.white,
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                shape: const StadiumBorder(),
                padding: const EdgeInsets.symmetric(horizontal: 10),
                textStyle: style,
              ),
              child: Text(label, textAlign: TextAlign.center, maxLines: 2),
            ))
          : PressScale(child: FilledButton(
              onPressed: onTap,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                shape: const StadiumBorder(),
                padding: const EdgeInsets.symmetric(horizontal: 10),
                textStyle: style,
              ),
              child: Text(label, textAlign: TextAlign.center, maxLines: 2),
            )),
    );
  }
}

class _RoundButton extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  const _RoundButton({required this.icon, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      label: label,
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          width: 44,
          height: 44,
          decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
          alignment: Alignment.center,
          child: Icon(icon, size: 20, color: Colors.white),
        ),
      ),
    );
  }
}
