import 'package:flutter/material.dart';
import '../../../core/moderation/moderation.dart';
import '../../../core/chat/chat_attachments.dart';
import '../../../core/chat/chat_delete.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/chat/partner_chat_thread_controller.dart';
import '../../../core/chat/presence.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/home/home_providers.dart' show fetchProposalStatus, fetchProposalBookingState;
import '../../../shared/widgets/chat_header.dart';
import '../../../shared/widgets/chat_ui.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import '../../../shared/widgets/change_request_card.dart';
import '../../../shared/widgets/deal_sheets.dart';
import '../../../shared/widgets/request_card.dart';
import '../../../shared/widgets/chat_summary_sheets.dart';
import '../../../core/social/social.dart' show publicProfileProvider;
import '../../../shared/money.dart';
import '../../../shared/hero_icons.dart';
import '../../../core/supabase/supabase_config.dart';
import 'package:go_router/go_router.dart';

/// Fio de conversa com um cliente específico das Mensagens — versão
/// parametrizada de `PartnerChatScreen` (que fica hardcoded a uma única
/// conversa, ligada ao botão Contratos do dashboard). Liga-se a
/// `messages` real via [partnerChatThreadControllerProvider]
/// (036_chat.sql), substitui as chamadas diretas a
/// `MockBackend.listMessages`/`sendMessage`.
class PartnerChatThreadScreen extends ConsumerStatefulWidget {
  final ChatConversation conversation;

  const PartnerChatThreadScreen({super.key, required this.conversation});

  @override
  ConsumerState<PartnerChatThreadScreen> createState() =>
      _PartnerChatThreadScreenState();
}

class _PartnerChatThreadScreenState
    extends ConsumerState<PartnerChatThreadScreen> {
  final _messageController = TextEditingController();
  final _scrollController = ScrollController();

  @override
  void dispose() {
    _messageController.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!_scrollController.hasClients) return;
      // Lista invertida: a mais recente está no offset 0.
      _scrollController.animateTo(
        0,
        duration: const Duration(milliseconds: 250),
        curve: Curves.easeOut,
      );
    });
  }

  Future<void> _send() async {
    final text = _messageController.text;
    if (text.trim().isEmpty) return;
    _messageController.clear();
    ref.read(typingNowProvider('c:${widget.conversation.id}').notifier).stop();
    await ref
        .read(
          partnerChatThreadControllerProvider(widget.conversation.threadKey).notifier,
        )
        .sendText(text);
    _scrollToBottom();
  }

  /// Fotos, ficheiros, stickers e GIFs (2026-10-20).
  Future<void> _attach() async {
    try {
      final a = await pickChatAttachment(context);
      if (a == null || !mounted) return;
      await ref.read(partnerChatThreadControllerProvider(widget.conversation.threadKey).notifier).sendAttachment(a);
      _scrollToBottom();
    } catch (_) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível enviar o anexo. Tenta novamente.')),
      );
    }
  }

  /// Toque longo numa mensagem minha: apagar (`delete_message`, 179).
  Widget _ownDeletable(bool isMe, ChatMessage message, Widget child) {
    if (!isMe || message.isQuoteRequestNotice) return child;
    return GestureDetector(
      onLongPress: () async {
        final ok = await confirmChatDelete(context,
            title: 'Apagar a mensagem?', body: 'A mensagem desaparece para os dois lados.', cta: 'Apagar mensagem');
        if (!ok || !mounted) return;
        await runChatDelete(context, () => ref.read(partnerChatThreadControllerProvider(widget.conversation.threadKey).notifier).delete(message.id));
      },
      child: child,
    );
  }

  /// Etiqueta do evento de uma mensagem, quando há mais de um evento com
  /// este cliente (conversas juntas, 2026-11-25).
  String? _labelOf(ChatMessage m) =>
      widget.conversation.merged.isEmpty ? null : widget.conversation.of(m.conversationId).eventLabel;

  /// «Organiza 3 eventos» por baixo do nome.
  String? _organizes() {
    final id = widget.conversation.clientId;
    if (id == null) return null;
    final n = ref.watch(publicProfileProvider(id)).value?.events ?? 0;
    return n <= 0 ? null : (n == 1 ? 'Organiza 1 evento' : 'Organiza $n eventos');
  }

  /// «Pedir alteração» (prancheta «Pedir ou editar alteração»): só com uma
  /// reserva aceite ou confirmada com esta conversa.
  Future<void> _requestChange() async {
    final ev = widget.conversation.eventId;
    final pid = supabase.auth.currentUser?.id;
    if (ev == null || pid == null) return;
    Map<String, dynamic>? b;
    try {
      b = await supabase
          .from('bookings')
          .select('id, people')
          .eq('wedding_id', ev)
          .eq('partner_id', pid)
          .inFilter('status', ['awaiting_deposit', 'confirmed'])
          .order('created_at', ascending: false)
          .limit(1)
          .maybeSingle();
    } catch (_) {}
    if (!mounted) return;
    if (b == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Ainda não há uma reserva aceite nesta conversa.')),
      );
      return;
    }
    await showChangeSheet(
      context,
      bookingId: b['id'] as String,
      otherName: widget.conversation.name,
      subtitle: 'Reserva · ${widget.conversation.name}',
      currentPeople: (b['people'] as num?)?.toInt() ?? 1,
    );
  }

  @override
  Widget build(BuildContext context) {
    final chat = ref.watch(
      partnerChatThreadControllerProvider(widget.conversation.threadKey),
    );

    ref.listen(partnerChatThreadControllerProvider(widget.conversation.threadKey), (
      previous,
      next,
    ) {
      if ((previous?.messages.length ?? 0) != next.messages.length) {
        _scrollToBottom();
      }
    });

    return GradientScaffold(
      background: AppBackground.cream,
      body: Column(
        children: [
          SafeArea(
            top: false,
            bottom: false,
            child: ChatHeader(
              name: widget.conversation.name,
              avatarUrl: widget.conversation.avatarUrl,
              // «Organiza N eventos» e, ao tocar, o resumo deste cliente
              // (prancheta «Conversa única com o parceiro · resumo»).
              pill: _organizes(),
              onOpenProfile: widget.conversation.clientId == null
                  ? null
                  : () => showClientSummary(
                        context,
                        clientId: widget.conversation.clientId!,
                        name: widget.conversation.name,
                        avatarUrl: widget.conversation.avatarUrl,
                        eventLabels: {
                          for (final c in widget.conversation.all)
                            if (c.eventId != null) c.eventId!: c.eventLabel ?? 'Evento',
                        },
                      ),
              menu: [('Pedir alteração', _requestChange)],
              onReport: () => showReportPicker(context, ref,
                  kind: ReportKind.message,
                  allowBlock: false,
                  recentFirst: [
                    for (final m in chat.messages.reversed)
                      if (!m.fromPartner && !m.isProposal && !m.isQuoteRequestNotice) ReportableMessage(id: m.id, text: m.text ?? m.attachmentName ?? ''),
                  ]),
            ),
          ),
          Expanded(
            child: chat.loading && chat.messages.isEmpty
                ? const SkeletonChat()
                : JumpToLatest(
                    controller: _scrollController,
                    messageCount: chat.messages.length,
                    child: ListView(
                    controller: _scrollController,
                    // Abre sempre nas mensagens mais recentes (2026-10-18).
                    reverse: true,
                    padding: const EdgeInsets.all(16),
                    children: chatTimeline(
                      messages: chat.messages,
                      // Do lado do parceiro, "minha" é a mensagem do parceiro.
                      isMine: (m) => m.fromPartner,
                      content: (message, isMe) => message.hasAttachment
                          ? _ownDeletable(
                              isMe,
                              message,
                              ChatAttachmentView(url: message.attachmentUrl!, type: message.attachmentType ?? 'file', name: message.attachmentName, isMe: isMe),
                            )
                          : message.changeRequestId != null
                          ? ChangeRequestCard(changeRequestId: message.changeRequestId!, mine: isMe, eventLabel: _labelOf(message))
                          : message.isQuoteRequestNotice &&
                                  (message.text ?? '').startsWith('Pediu um orçamento') &&
                                  widget.conversation.of(message.conversationId).eventId != null
                          ? RequestCard(
                              eventLabel: _labelOf(message),
                              eventId: widget.conversation.of(message.conversationId).eventId!,
                              partnerId: widget.conversation.partnerId ?? supabase.auth.currentUser!.id,
                              partnerSide: true,
                              otherName: widget.conversation.name,
                            )
                          : message.isProposal
                          ? _PartnerProposalCard(message: message, clientName: widget.conversation.name, eventLabel: _labelOf(message))
                          : isMe
                          ? _ownDeletable(isMe, message, ChatBubble(text: message.text ?? '', isMe: isMe))
                          : GestureDetector(
                              // Toque longo: denunciar a mensagem.
                              onLongPress: () => showModerationSheet(context, ref,
                                  kind: ReportKind.message, targetId: message.id, allowBlock: false),
                              child: ChatBubble(text: message.text ?? '', isMe: isMe),
                            ),
                    ).reversed.toList(),
                  ),
                  ),
          ),
          ColoredBox(
            color: const Color(0xFFF2F2F2),
            child: ChatTypingLine(typingLine(ref.watch(typingNowProvider('c:${widget.conversation.id}')))),
          ),
          ChatComposer(
            controller: _messageController,
            onSend: _send,
            onAttach: _attach,
            onChanged: (_) {
              final p = ref.read(authControllerProvider).profile;
              final name = (p?.businessName?.trim().isNotEmpty ?? false) ? p!.businessName!.trim() : (p?.fullName ?? '');
              ref.read(typingNowProvider('c:${widget.conversation.id}').notifier).typing(name);
            },
          ),
        ],
      ),
    );
  }
}

/// A proposta do lado do parceiro, com o estado (prancheta «Cartões nas
/// mensagens», 2026-11-24): enviada, aceite à espera do sinal, sinal
/// recebido (linha verde) ou recusada.
class _PartnerProposalCard extends StatefulWidget {
  final ChatMessage message;
  final String clientName;
  final String? eventLabel;
  const _PartnerProposalCard({required this.message, required this.clientName, this.eventLabel});

  @override
  State<_PartnerProposalCard> createState() => _PartnerProposalCardState();
}

class _PartnerProposalCardState extends State<_PartnerProposalCard> {
  String? _status;
  String? _booking;

  @override
  void initState() {
    super.initState();
    _load();
  }

  void _load() {
    final id = widget.message.proposalId;
    if (id == null) return;
    fetchProposalStatus(id).then((s) async {
      if (!mounted) return;
      setState(() => _status = s);
      if (s == 'accepted') {
        final b = await fetchProposalBookingState(id);
        if (mounted) setState(() => _booking = b);
      }
    }).catchError((_) {});
  }

  /// «Editar proposta» / «Enviar outra proposta»: o popup da prancheta
  /// «Enviar ou editar proposta», com o pedido e os valores anteriores.
  Future<void> _openSheet({required bool edit}) async {
    final id = widget.message.proposalId;
    if (id == null) return;
    Map<String, dynamic>? p;
    try {
      p = await supabase
          .from('proposals')
          .select('id, title, description, price, deposit_amount, created_at, quote_request_id, lines, '
              'quote_requests(id, wedding_id, event_date, people, message, location, start_time, end_time)')
          .eq('id', id)
          .maybeSingle();
    } catch (_) {}
    if (p == null || !mounted) return;
    final q = p['quote_requests'] as Map<String, dynamic>?;
    final d = DateTime.tryParse('${q?['event_date'] ?? ''}');
    const wd = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const mo = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    final line = [
      if (d != null) '${wd[d.weekday - 1]}, ${d.day} ${mo[d.month - 1]}',
      if ((q?['start_time'] as String?)?.isNotEmpty ?? false)
        [q!['start_time'], if ((q['end_time'] as String?)?.isNotEmpty ?? false) q['end_time']].join(' – '),
      if (q?['people'] != null) '${q!['people']} pessoas',
      if ((q?['location'] as String?)?.isNotEmpty ?? false) q!['location'] as String,
    ].join(' · ');
    final changed = await showProposalSheet(
      context,
      quoteRequestId: '${p['quote_request_id']}',
      eventId: '${q?['wedding_id'] ?? ''}',
      clientName: widget.clientName,
      eventLabel: d == null ? 'Pedido' : '${d.day} ${mo[d.month - 1]}',
      requestTitle: 'Pedido de orçamento',
      requestLine: line,
      requestMessage: q?['message'] as String?,
      existing: edit
          ? SentProposal(
              id: id,
              title: '${p['title'] ?? ''}',
              description: p['description'] as String?,
              price: ((p['price'] as num?) ?? 0).toDouble(),
              deposit: ((p['deposit_amount'] as num?) ?? 0).toDouble(),
              sentAt: DateTime.tryParse('${p['created_at'] ?? ''}'),
              lines: [
                for (final j in (p['lines'] is List ? p['lines'] as List : const []))
                  ?ProposalLine.fromJson(j),
              ],
            )
          : null,
    );
    if (changed && mounted) _load();
  }

  @override
  Widget build(BuildContext context) {
    final m = widget.message;
    final title = (m.proposalTitle ?? '').trim().isEmpty ? 'Proposta' : m.proposalTitle!.trim();
    // Cada estado como na prancheta «Todos os cartões» (2026-11-24/25).
    if (_status == 'accepted' && (_booking == 'deposit_paid' || _booking == 'final_due' || _booking == 'paid' || _booking == 'completed')) {
      return ChatProposalCard(
        eventLabel: widget.eventLabel,
        icon: Hi.checkCircle,
        eyebrow: 'Reserva confirmada',
        status: 'Dia reservado na tua agenda',
        tone: ChatCardTone.doneLine,
        title: '${widget.clientName} · $title',
        price: null,
        deposit: null,
        rows: [if (m.proposalDepositAmount != null) ('Sinal', euros(m.proposalDepositAmount!))],
        actions: [ChatCardAction('Ver reserva', () => context.push('/partner-requests'))],
      );
    }
    if (_status == 'accepted' && _booking == 'cancelled') {
      return ChatProposalCard(
        eventLabel: widget.eventLabel,
        icon: Hi.xCircle,
        eyebrow: 'Reserva cancelada',
        status: 'Cancelada',
        tone: ChatCardTone.neutral,
        title: '${widget.clientName} · $title',
        price: null,
        deposit: null,
      );
    }
    if (_status == 'accepted') {
      return ChatProposalCard(
        eventLabel: widget.eventLabel,
        status: 'Aceite · à espera do sinal',
        tone: ChatCardTone.pending,
        title: title,
        price: null,
        deposit: null,
        rows: [if (m.proposalDepositAmount != null) ('Sinal', euros(m.proposalDepositAmount!))],
        note: 'Avisamos-te quando o sinal for pago.',
      );
    }
    if (_status == 'rejected' || _status == 'declined' || _status == 'expired') {
      return ChatProposalCard(
        eventLabel: widget.eventLabel,
        icon: Hi.xCircle,
        status: _status == 'expired' ? 'Expirou' : 'Recusada',
        tone: ChatCardTone.neutral,
        title: title,
        subtitle: m.proposalPrice == null ? null : euros(m.proposalPrice!),
        price: null,
        deposit: null,
        actions: [ChatCardAction('Enviar outra proposta', () => _openSheet(edit: false), primary: true)],
      );
    }
    return ChatProposalCard(
      eventLabel: widget.eventLabel,
      status: 'Enviada · à espera da resposta',
      tone: ChatCardTone.neutral,
      title: title,
      price: m.proposalPrice,
      deposit: m.proposalDepositAmount,
      note: m.proposalPrice == null ? null : 'Recebes ${euros(m.proposalPrice!)} menos a taxa de serviço.',
      actions: [ChatCardAction('Editar proposta', () => _openSheet(edit: true))],
    );
  }
}
