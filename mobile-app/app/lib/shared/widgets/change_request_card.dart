import 'package:flutter/material.dart';

import '../../core/supabase/supabase_config.dart';
import 'chat_ui.dart';

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
          .select('kind, from_value, to_value, message, status')
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

  @override
  Widget build(BuildContext context) {
    final r = _row;
    if (r == null) return const SizedBox(height: 40);
    final kind = r['kind'] as String? ?? 'other';
    final status = r['status'] as String? ?? 'open';
    final to = _fmt(kind, r['to_value'] as String?);
    final from = _fmt(kind, r['from_value'] as String?);
    final (String label, ChatCardTone tone) = switch (status) {
      'accepted' => ('Aceite', ChatCardTone.doneLine),
      'declined' => ('Recusada', ChatCardTone.neutral),
      'cancelled' => ('Cancelada', ChatCardTone.neutral),
      _ => (widget.mine ? 'Enviada · à espera da resposta' : 'Por responder', ChatCardTone.pending),
    };
    final id = widget.changeRequestId;
    final open = status == 'open';
    return ChatProposalCard(
      eyebrow: kind == 'date' ? 'Proposta de outro dia' : 'Pedido de alteração',
      title: from.isEmpty ? to : '$to em vez de $from',
      subtitle: r['message'] as String?,
      price: null,
      deposit: null,
      imageUrl: widget.imageUrl,
      status: label,
      tone: tone,
      note: open && kind == 'date' ? 'Se aceitares, o dia do pedido muda. O dia do evento não muda sozinho.' : null,
      actions: !open || _busy
          ? const []
          : widget.mine
              ? [ChatCardAction('Cancelar', () => _act('cancel_booking_change', {'p_id': id}, 'Cancelado.'))]
              : [
                  ChatCardAction('Recusar', () => _act('respond_booking_change', {'p_id': id, 'p_accept': false}, 'Recusaste.')),
                  ChatCardAction('Aceitar',
                      () => _act('respond_booking_change', {'p_id': id, 'p_accept': true}, 'Aceite.'),
                      primary: true),
                ],
    );
  }
}
