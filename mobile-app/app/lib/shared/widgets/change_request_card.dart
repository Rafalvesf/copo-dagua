import 'package:flutter/material.dart';

import '../../core/supabase/supabase_config.dart';
import '../hero_icons.dart';
import 'chat_ui.dart';
import 'deal_sheets.dart';

/// Cartão «Proposta de outro dia» / «Pedido de alteração» nas conversas
/// (`messages.change_request_id` → `booking_change_requests`, migrações
/// 233 e 235; prancheta «Todos os cartões»). Quem recebe vê «Recusar» +
/// «Aceitar»; quem enviou pode «Cancelar» enquanto ninguém respondeu.
class ChangeRequestCard extends StatefulWidget {
  final String changeRequestId;

  /// Fui eu que fiz o pedido (esta mensagem é minha).
  final bool mine;
  final String? imageUrl;

  const ChangeRequestCard({super.key, required this.changeRequestId, required this.mine, this.imageUrl});

  @override
  State<ChangeRequestCard> createState() => _ChangeRequestCardState();
}

const _weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

String _fmt(String kind, String? v) {
  if (v == null) return '';
  if (kind == 'date') {
    final d = DateTime.tryParse(v);
    if (d != null) return '${_weekdays[d.weekday - 1]}, ${d.day} ${_months[d.month - 1]}';
  }
  if (kind == 'people') return '$v pessoas';
  return v;
}

class _ChangeRequestCardState extends State<ChangeRequestCard> {
  Map<String, dynamic>? _row;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final r = await supabase
          .from('booking_change_requests')
          .select('kind, from_value, to_value, message, status, booking_id')
          .eq('id', widget.changeRequestId)
          .maybeSingle();
      if (mounted) setState(() => _row = r);
    } catch (_) {}
  }

  Future<void> _act(String fn, Map<String, dynamic> params, String ok) async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await supabase.rpc(fn, params: params);
      await _load();
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(ok)));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível concluir. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  /// «Editar»: o outro dia muda com o calendário; as outras alterações
  /// abrem «Editar alteração».
  Future<void> _edit(Map<String, dynamic> r) async {
    final kind = r['kind'] as String? ?? 'other';
    if (kind == 'date') {
      final cur = DateTime.tryParse('${r['to_value'] ?? ''}') ?? DateTime.now();
      final now = DateTime.now();
      final picked = await showDatePicker(
        context: context,
        initialDate: cur.isBefore(now) ? now : cur,
        firstDate: now,
        lastDate: DateTime(now.year + 3),
        locale: const Locale('pt', 'PT'),
      );
      if (picked == null || !mounted) return;
      final v = '${picked.year}-${picked.month.toString().padLeft(2, '0')}-${picked.day.toString().padLeft(2, '0')}';
      await _act('update_booking_change', {'p_id': widget.changeRequestId, 'p_to': v}, 'Dia mudado.');
      return;
    }
    final bookingId = r['booking_id'] as String?;
    if (bookingId == null) return;
    var people = 0;
    try {
      final b = await supabase.from('bookings').select('people').eq('id', bookingId).maybeSingle();
      people = (b?['people'] as num?)?.toInt() ?? 0;
    } catch (_) {}
    if (!mounted) return;
    final changed = await showChangeSheet(
      context,
      bookingId: bookingId,
      otherName: 'A outra parte',
      subtitle: 'Pedido de alteração',
      currentPeople: int.tryParse('${r['from_value'] ?? ''}') ?? people,
      existing: SentChange(
        id: widget.changeRequestId,
        kind: kind,
        toValue: '${r['to_value'] ?? ''}',
        message: r['message'] as String?,
      ),
    );
    if (changed) await _load();
  }

  @override
  Widget build(BuildContext context) {
    final r = _row;
    if (r == null) return const SizedBox(height: 40);
    final kind = r['kind'] as String? ?? 'other';
    final status = r['status'] as String? ?? 'open';
    final to = _fmt(kind, r['to_value'] as String?);
    final from = _fmt(kind, r['from_value'] as String?);
    // Prancheta «Todos os cartões» (2026-11-24): «OUTRO DIA» / «PEDIDO DE
    // ALTERAÇÃO», «Sáb, 12 jun → Dom, 13 jun» / «Mais pessoas: 122 → 130»,
    // a mensagem entre «», «Cancelar» + «Editar» para quem pede e
    // «Recusar» + «Aceitar» para quem recebe.
    final (String label, ChatCardTone tone) = switch (status) {
      'accepted' => ('Aceite', ChatCardTone.doneLine),
      'declined' => ('Recusado', ChatCardTone.neutral),
      'cancelled' => ('Cancelado', ChatCardTone.neutral),
      _ => (widget.mine ? 'Enviado · à espera' : 'Por responder', widget.mine ? ChatCardTone.neutral : ChatCardTone.pending),
    };
    final id = widget.changeRequestId;
    final open = status == 'open';
    final String title;
    if (kind == 'people') {
      final a = int.tryParse('${r['from_value'] ?? ''}');
      final b = int.tryParse('${r['to_value'] ?? ''}');
      title = '${a != null && b != null && b < a ? 'Menos' : 'Mais'} pessoas: ${r['from_value'] ?? '?'} → ${r['to_value']}';
    } else if (kind == 'time') {
      title = 'Hora: $to';
    } else {
      title = from.isEmpty ? to : '$from → $to';
    }
    final msg = (r['message'] as String?)?.trim();
    final kindLabel = switch (kind) {
      'date' => 'Outro dia',
      'scope' => 'O que inclui',
      'other' => 'Outra coisa',
      _ => null,
    };
    return ChatProposalCard(
      icon: kind == 'date' ? Hi.calendar : Hi.pencil,
      eyebrow: kind == 'date' ? 'Outro dia' : 'Pedido de alteração',
      title: title,
      subtitle: kind == 'date'
          ? (widget.mine ? 'O dia pedido já está ocupado' : null)
          : (kindLabel != null && kind != 'date' ? kindLabel : null),
      price: null,
      deposit: null,
      imageUrl: widget.imageUrl,
      status: label,
      tone: tone,
      note: (msg == null || msg.isEmpty) ? null : '«$msg»',
      actions: !open || _busy
          ? const []
          : widget.mine
              ? [
                  ChatCardAction('Cancelar', () => _act('cancel_booking_change', {'p_id': id}, 'Cancelado.')),
                  ChatCardAction('Editar', () => _edit(r)),
                ]
              : [
                  ChatCardAction('Recusar', () => _act('respond_booking_change', {'p_id': id, 'p_accept': false}, 'Recusaste.')),
                  ChatCardAction('Aceitar',
                      () => _act('respond_booking_change', {'p_id': id, 'p_accept': true}, 'Aceite.'),
                      primary: true),
                ],
    );
  }
}
