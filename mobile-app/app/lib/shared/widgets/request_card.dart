import 'package:flutter/material.dart';

import '../../core/supabase/supabase_config.dart';
import '../hero_icons.dart';
import 'chat_ui.dart';
import 'deal_sheets.dart';

/// Cartão «Pedido de orçamento» / «Pedido de reserva» nas conversas
/// (prancheta «Todos os cartões», 2026-11-24/25), no lugar do aviso de
/// texto «Pediu um orçamento…». O organizador vê o estado e «Editar
/// pedido»; o parceiro vê «Recusar» + «Enviar proposta» (ou «Aceitar»,
/// nos pacotes).
class RequestCard extends StatefulWidget {
  final String eventId;
  final String partnerId;

  /// `true` do lado do parceiro.
  final bool partnerSide;

  /// Nome da outra parte (parceiro, para o organizador; cliente, para o
  /// parceiro).
  final String otherName;

  /// Para «Editar pedido» (organizador): «Casamento», «Sáb, 12 jun ·
  /// Quinta do Freixo» e as pessoas do evento.
  final String? eventTitle;
  final String? eventLine;
  final int? eventPeople;

  const RequestCard({
    super.key,
    required this.eventId,
    required this.partnerId,
    required this.partnerSide,
    required this.otherName,
    this.eventTitle,
    this.eventLine,
    this.eventPeople,
    this.eventLabel,
  });

  /// Etiqueta do evento no cartão (conversas juntas, 2026-11-25).
  final String? eventLabel;

  @override
  State<RequestCard> createState() => _RequestCardState();
}

const _wd = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const _mo = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

class _RequestCardState extends State<RequestCard> {
  Map<String, dynamic>? _q;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final r = await supabase
          .from('quote_requests')
          .select('id, status, people, message, event_date, location, cancelled_at, package_snapshot, start_time, end_time')
          .eq('wedding_id', widget.eventId)
          .eq('partner_id', widget.partnerId)
          .order('created_at', ascending: false)
          .limit(1)
          .maybeSingle();
      if (mounted) setState(() => _q = r);
    } catch (_) {}
  }

  Future<void> _rpc(String fn, Map<String, dynamic> params, String ok) async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await supabase.rpc(fn, params: params);
      await _load();
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(ok)));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível concluir. Tenta novamente.')));
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  String _line(Map<String, dynamic> q) {
    final d = DateTime.tryParse('${q['event_date'] ?? ''}');
    return [
      if (d != null) '${_wd[d.weekday - 1]}, ${d.day} ${_mo[d.month - 1]}',
      if ((q['location'] as String?)?.trim().isNotEmpty ?? false) (q['location'] as String).trim(),
    ].join(' · ');
  }

  @override
  Widget build(BuildContext context) {
    final q = _q;
    if (q == null) return const SizedBox(height: 40);
    final id = q['id'] as String;
    final status = q['status'] as String? ?? 'pending';
    final cancelled = q['cancelled_at'] != null;
    final pkg = q['package_snapshot'] is Map ? q['package_snapshot'] as Map : null;
    final isPackage = pkg != null;
    final open = !cancelled && (status == 'pending' || status == 'viewed' || status == 'proposal_sent');
    final waiting = !cancelled && (status == 'pending' || status == 'viewed');
    final people = (q['people'] as num?)?.toInt();
    final msg = (q['message'] as String?)?.trim();
    final pkgName = (pkg?['name'] as String?)?.trim() ?? '';
    // Hora do pedido (236): «14:00 – 00:00».
    final start = (q['start_time'] as String?)?.trim();
    final end = (q['end_time'] as String?)?.trim();
    final hour = (start == null || start.isEmpty) ? null : (end == null || end.isEmpty ? start : '$start – $end');
    final title = pkgName.isEmpty ? 'Pedido de orçamento' : 'Pacote $pkgName';

    final (String label, ChatCardTone tone) = cancelled
        ? ('Cancelado', ChatCardTone.neutral)
        : switch (status) {
            'proposal_sent' => widget.partnerSide ? ('Proposta enviada', ChatCardTone.neutral) : ('Proposta recebida', ChatCardTone.done),
            'accepted' => ('Aceite', ChatCardTone.done),
            'declined' || 'expired' => (widget.partnerSide ? 'Recusado' : 'Sem resposta ou recusado', ChatCardTone.neutral),
            _ => widget.partnerSide
                ? ('Por responder', ChatCardTone.pending)
                : (isPackage ? 'À espera do parceiro · até 48 h' : 'Enviado · à espera da resposta', isPackage ? ChatCardTone.pending : ChatCardTone.neutral),
          };

    final actions = <ChatCardAction>[];
    if (!_busy && widget.partnerSide && waiting) {
      actions.add(ChatCardAction('Recusar', () => _rpc('decline_quote_request', {'p_quote_request_id': id}, 'Pedido recusado.')));
      if (isPackage) {
        actions.add(ChatCardAction('Aceitar', () => _rpc('accept_package_request', {'p_quote_request_id': id}, 'Pedido aceite.'), primary: true));
      } else {
        actions.add(ChatCardAction('Enviar proposta', () async {
          final sent = await showProposalSheet(
            context,
            quoteRequestId: id,
            eventId: widget.eventId,
            clientName: widget.otherName,
            eventLabel: _line(q).split(' · ').first,
            requestTitle: title,
            requestLine: [_line(q), ?hour, if (people != null) '$people pessoas'].where((x) => x.isNotEmpty).join(' · '),
            requestMessage: msg,
          );
          if (sent) await _load();
        }, primary: true));
      }
    } else if (!_busy && !widget.partnerSide && open) {
      if (isPackage) {
        actions.add(ChatCardAction('Cancelar pedido', () => _rpc('cancel_quote_request', {'p_id': id}, 'Pedido cancelado.')));
      }
      actions.add(ChatCardAction('Editar pedido', () async {
        final changed = await showEditRequestSheet(
          context,
          quoteRequestId: id,
          partnerName: widget.otherName,
          eventTitle: widget.eventTitle ?? 'Evento',
          eventLine: widget.eventLine ?? _line(q),
          people: people ?? widget.eventPeople ?? 1,
          eventPeople: widget.eventPeople,
          message: msg,
          hasProposal: status == 'proposal_sent',
          startTime: start,
          endTime: end,
        );
        if (changed) await _load();
      }));
    }

    return ChatProposalCard(
      icon: isPackage ? Hi.archiveBox : Hi.documentText,
      eventLabel: widget.eventLabel,
      eyebrow: isPackage ? 'Pedido de reserva' : 'Pedido de orçamento',
      status: label,
      tone: tone,
      title: title,
      subtitle: _line(q).isEmpty ? null : _line(q),
      price: null,
      deposit: null,
      rows: [
        if (people != null) ('Pessoas', '$people'),
        if (hour != null) ('Hora', hour),
      ],
      note: (msg == null || msg.isEmpty)
          ? (isPackage && waiting && !widget.partnerSide ? 'Se não aceitar em 48 h, o sinal é libertado.' : null)
          : '«$msg»',
      actions: actions,
    );
  }
}
