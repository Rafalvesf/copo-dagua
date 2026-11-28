import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/hero_icons.dart';

import '../../../core/chat/chat_delete.dart';
import '../../../core/moderation/moderation.dart';
import '../../../core/chat/chat_attachments.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/chat/chat_thread_controller.dart';
import '../../../core/chat/presence.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../core/social/social.dart' show partnerPublicStatsProvider;
import '../../../core/home/home_providers.dart';
import '../../../core/bookings/hire_privacy.dart';
import '../../../core/chat/chat_helpers.dart' show PartnerUnavailableException;
import '../../../core/payments/payments.dart' show PayArgs;
import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/event/event_controller.dart';
import '../../../shared/widgets/chat_header.dart';
import '../../../shared/widgets/chat_ui.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../partners/screens/partner_detail_screen.dart';
import 'package:copo_dagua_app/shared/widgets/island_sheet.dart';
import '../../payments/booking_extras_sheet.dart';
import '../../bookings/widgets/reject_proposal.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import '../../../shared/widgets/change_request_card.dart';
import '../../../shared/widgets/request_card.dart';
import '../../../shared/widgets/auto_booking_card.dart';
import '../../../shared/widgets/chat_summary_sheets.dart';
import '../../../shared/widgets/deal_sheets.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

/// Fio de conversa genérico do separador Chat — parceiros contratados
/// e contactos do cortejo partilham este mesmo ecrã (ver
/// [ChatThreadController]); o chat dedicado do lado do parceiro
/// (`features/partner_home/screens/partner_chat_screen.dart`) mantém-se
/// inalterado.
class ChatThreadScreen extends ConsumerStatefulWidget {
  final ChatConversation conversation;

  const ChatThreadScreen({super.key, required this.conversation});

  @override
  ConsumerState<ChatThreadScreen> createState() => _ChatThreadScreenState();
}

class _ChatThreadScreenState extends ConsumerState<ChatThreadScreen> {
  final _messageController = TextEditingController();
  final _scrollController = ScrollController();

  // Uma só conversa por parceiro (2026-11-25): as de todos os eventos.
  String get _conversationKey => widget.conversation.threadKey;

  @override
  void dispose() {
    _messageController.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!_scrollController.hasClients) return;
      // Lista invertida: a mensagem mais recente está no offset 0.
      _scrollController.animateTo(
        0,
        duration: const Duration(milliseconds: 250),
        curve: Curves.easeOut,
      );
    });
  }

  /// Abre o perfil do parceiro desta conversa — pedido explícito do
  /// utilizador (2026-09-05): o aviso de pedido de orçamento no chat
  /// "deve remeter ao perfil do parceiro". Busca o [Partner] completo
  /// (`partnerByIdProvider`) porque só temos o id/nome resumido em
  /// [ChatConversation]; mesmo modal-sheet de `partners_list_screen.dart`.
  Future<void> _openPartnerProfile() async {
    final partnerId = widget.conversation.partnerId;
    if (partnerId == null) return;
    final partner = await ref.read(partnerByIdProvider(partnerId).future);
    if (!mounted || partner == null) return;
    PartnerDetailScreen.show(context, partner);
  }

  /// Respostas rápidas (mockup "Conversa", 2026-11-12).
  Future<void> _quick(String text) async {
    _messageController.text = text;
    await _send();
  }

  /// Nome que o parceiro vê em "… está a escrever".
  String _myName() {
    final p = ref.read(authControllerProvider).profile;
    return (p?.fullName ?? '').trim();
  }

  Future<void> _send() async {
    final text = _messageController.text;
    if (text.trim().isEmpty) return;
    _messageController.clear();
    ref.read(typingNowProvider('c:${widget.conversation.id}').notifier).stop();
    try {
      await ref
          .read(chatThreadControllerProvider(_conversationKey).notifier)
          .sendText(text);
      _scrollToBottom();
    } catch (_) {
      if (!mounted) return;
      _messageController.text = text;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível enviar a mensagem. Tenta novamente.')),
      );
    }
  }

  /// Fotos, ficheiros, stickers e GIFs (2026-10-20).
  Future<void> _attach() async {
    try {
      final a = await pickChatAttachment(context);
      if (a == null || !mounted) return;
      await ref.read(chatThreadControllerProvider(_conversationKey).notifier).sendAttachment(a);
      _scrollToBottom();
    } catch (_) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível enviar o anexo. Tenta novamente.')),
      );
    }
  }

  /// «Por tratar» por cima da caixa de escrever (prancheta «Conversa com
  /// cartões», 2026-11-24): propostas por responder e aceites com
  /// pagamento por fazer.
  Widget _pendingTray(List<ChatMessage> messages) {
    final proposals = [for (final m in messages) if (m.isProposal && m.proposalId != null) m];
    if (proposals.isEmpty) return const SizedBox.shrink();
    final states = ref.watch(_proposalStatesProvider(proposals.map((m) => m.proposalId!).join(','))).value ?? const {};
    final items = <PendingItem>[];
    for (final m in proposals.reversed) {
      final st = states[m.proposalId];
      if (st == null) continue;
      final (status, booking) = st;
      final (String? label, ChatCardTone tone) = status == 'sent'
          ? ('Por responder', ChatCardTone.pending)
          : status == 'accepted' && (booking == null || booking == 'deposit_due')
              ? ('Aceite · falta o sinal', ChatCardTone.pending)
              : status == 'accepted' && booking == 'final_due'
                  ? ('Falta pagar o resto', ChatCardTone.pending)
                  : (null, ChatCardTone.neutral);
      if (label == null) continue;
      items.add(PendingItem(
        title: (m.proposalTitle ?? '').trim().isEmpty ? 'Proposta' : m.proposalTitle!.trim(),
        status: label,
        tone: tone,
        card: _ProposalCard(
          message: m,
          partnerId: widget.conversation.partnerId,
          partnerName: widget.conversation.name,
          conversationId: widget.conversation.id,
          imageUrl: widget.conversation.avatarUrl,
          onRequestNew: _openPartnerProfile,
        ),
      ));
    }
    return PendingTray(items: items);
  }

  /// Toque longo numa mensagem minha: apagar (`delete_message`, 179).
  Widget _ownDeletable(bool isMe, ChatMessage message, Widget child) {
    if (!isMe) return child;
    return GestureDetector(
      onLongPress: () async {
        final ok = await confirmChatDelete(context,
            title: 'Apagar a mensagem?', body: 'A mensagem desaparece para os dois lados.', cta: 'Apagar mensagem');
        if (!ok || !mounted) return;
        await runChatDelete(context, () => ref.read(chatThreadControllerProvider(widget.conversation.id).notifier).delete(message.id));
      },
      child: child,
    );
  }

  /// «Pedir alteração» (prancheta «Pedir ou editar alteração»): só com uma
  /// reserva aceite ou confirmada com esta conversa.
  Future<void> _requestChange() async {
    final ev = widget.conversation.eventId;
    final pid = widget.conversation.partnerId;
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

  /// O evento de uma mensagem (a conversa dela, entre as juntas).
  Event? _eventOf(List<Event> events, ChatMessage m) {
    final id = widget.conversation.of(m.conversationId).eventId;
    return events.where((e) => e.id == id).firstOrNull;
  }

  /// «Casamento · Sáb, 12 jun 2027» — só quando há mais de um evento com
  /// este parceiro (senão a etiqueta não diz nada de novo).
  String? _labelOf(List<Event> events, ChatMessage m) {
    if (widget.conversation.merged.isEmpty) return null;
    final c = widget.conversation.of(m.conversationId);
    final e = _eventOf(events, m);
    return c.eventLabel ?? (e == null ? null : eventLabelOf(e.eventType, e.eventDate));
  }

  String _lineOf(Event e) {
    const wd = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const mo = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    final d = e.eventDate;
    return [
      if (d != null) '${wd[d.weekday - 1]}, ${d.day} ${mo[d.month - 1]}',
      if ((e.venue ?? '').trim().isNotEmpty) e.venue!.trim() else if ((e.location ?? '').trim().isNotEmpty) e.location!.trim(),
    ].join(' · ');
  }

  /// Resumo dos trabalhos com este parceiro, em todos os meus eventos.
  void _openSummary(List<Event> events) {
    final pid = widget.conversation.partnerId;
    if (pid == null) return;
    showPartnerSummary(
      context,
      partnerId: pid,
      name: widget.conversation.name,
      avatarUrl: widget.conversation.avatarUrl,
      eventLabels: {for (final e in events) e.id: eventLabelOf(e.eventType, e.eventDate)},
      onOpenProfile: _openPartnerProfile,
    );
  }

  @override
  Widget build(BuildContext context) {
    final chat = ref.watch(chatThreadControllerProvider(_conversationKey));
    final seenUntil = ref.watch(_partnerReadProvider(widget.conversation.id)).value;
    final partner = widget.conversation.partnerId == null
        ? null
        : ref.watch(partnerByIdProvider(widget.conversation.partnerId!)).value;
    // Faixa do evento: "Sofia & Tiago · 12 set 2027".
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    final events = ref.watch(eventControllerProvider).events;
    final ev = events.where((w) => w.id == widget.conversation.eventId).firstOrNull;
    final evDate = ev?.eventDate;
    // Ilha do evento (prancheta «Conversa», 2026-11-24): «Casamento · Sáb,
    // 12 jun · Quinta do Freixo».
    const weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    final eventTitle = ev?.eventType.label;
    final eventLine = ev == null
        ? null
        : [
            if (evDate != null) '${weekdays[evDate.weekday - 1]}, ${evDate.day} ${months[evDate.month - 1]}',
            if ((ev.venue ?? '').trim().isNotEmpty) ev.venue!.trim() else if ((ev.location ?? '').trim().isNotEmpty) ev.location!.trim(),
          ].join(' · ');
    final partnerId = widget.conversation.partnerId;
    final online = partnerId != null && ref.watch(isOnlineProvider(partnerId));
    final responds = partnerId == null ? null : responseLabel(ref.watch(partnerPublicStatsProvider(partnerId)).value?.responseMinutes);
    final respondsLower = responds == null ? null : responds[0].toLowerCase() + responds.substring(1);
    final typing = typingLine(ref.watch(typingNowProvider('c:${widget.conversation.id}')));

    ref.listen(chatThreadControllerProvider(_conversationKey), (
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
              // Online agora (presença) e "responde em ~1 h" (184).
              // Pílula verde por baixo do nome (prancheta «Conversa»):
              // «Online» ou «Responde em ~1 h».
              pill: online ? (respondsLower == null ? 'Online' : 'Online · $respondsLower') : responds,
              verified: partner != null,
              subtitle: partner == null
                  ? null
                  : [if (partner.categoryLabels.isNotEmpty) partner.categoryLabels.first, if ((partner.location ?? '').isNotEmpty) partner.location!]
                      .join(' · '),
              // Tocar no topo: o resumo dos trabalhos com este parceiro
              // (prancheta «Conversa única com o parceiro · resumo»).
              onOpenProfile: widget.conversation.partnerId == null ? null : () => _openSummary(events),
              menu: widget.conversation.partnerId == null ? const [] : [('Pedir alteração', _requestChange)],
              onReport: () => showReportPicker(context, ref,
                  kind: ReportKind.message,
                  allowBlock: false,
                  recentFirst: [
                    for (final m in chat.messages.reversed)
                      if (m.fromPartner && !m.isProposal && !m.isQuoteRequestNotice) ReportableMessage(id: m.id, text: m.text ?? m.attachmentName ?? ''),
                  ]),
            ),
          ),
          Expanded(
            child: ColoredBox(
            color: const Color(0xFFF2F2F2),
            child: chat.loading && chat.messages.isEmpty
                ? const SkeletonChat()
                // Invertida para abrir SEMPRE nas mensagens mais recentes
                // (antes saltava para o fim com animação e, com cartões
                // a crescer depois de desenhados, ficava a meio —
                // reportado 2026-10-18).
                // Sem a ilha «Ver evento» (2026-11-25): tocar no topo abre
                // o resumo.
                : JumpToLatest(
                    controller: _scrollController,
                    messageCount: chat.messages.length,
                    child: ListView(
                    controller: _scrollController,
                    reverse: true,
                    padding: const EdgeInsets.all(16),
                    children: chatTimeline(
                      messages: chat.messages,
                      // Aqui é sempre o casal a enviar — `fromPartner`
                      // significa "veio da outra parte".
                      isMine: (m) => !m.fromPartner,
                      seenUntil: seenUntil,
                      content: (message, isMe) => message.hasAttachment
                          ? _ownDeletable(
                              isMe,
                              message,
                              ChatAttachmentView(url: message.attachmentUrl!, type: message.attachmentType ?? 'file', name: message.attachmentName, isMe: isMe),
                            )
                          // Cartões automáticos (239): lembrete, avaliar, resto, menus, cancelada.
                          : message.autoKind != null && message.bookingId != null
                          ? AutoBookingCard(bookingId: message.bookingId!, kind: message.autoKind!, partnerSide: false, otherName: widget.conversation.name, eventLabel: _labelOf(events, message))
                          : message.changeRequestId != null
                          ? ChangeRequestCard(changeRequestId: message.changeRequestId!, mine: isMe, imageUrl: widget.conversation.avatarUrl, eventLabel: _labelOf(events, message))
                          : message.isProposal
                          ? _ProposalCard(message: message, partnerId: widget.conversation.partnerId, partnerName: widget.conversation.name, conversationId: widget.conversation.id, imageUrl: widget.conversation.avatarUrl, onRequestNew: _openPartnerProfile, eventLabel: _labelOf(events, message))
                          // Cartão do pedido (prancheta «Todos os cartões»).
                          : message.isQuoteRequestNotice &&
                                  (message.text ?? '').startsWith('Pediu um orçamento') &&
                                  widget.conversation.of(message.conversationId).eventId != null &&
                                  widget.conversation.partnerId != null
                          ? RequestCard(
                              eventId: widget.conversation.of(message.conversationId).eventId!,
                              partnerId: widget.conversation.partnerId!,
                              partnerSide: false,
                              otherName: widget.conversation.name,
                              eventTitle: _eventOf(events, message)?.eventType.label ?? eventTitle,
                              eventLine: _eventOf(events, message) == null ? eventLine : _lineOf(_eventOf(events, message)!),
                              eventLabel: _labelOf(events, message),
                            )
                          : message.isQuoteRequestNotice
                          ? GestureDetector(
                              onTap: _openPartnerProfile,
                              child: ChatBubble(text: message.text ?? '', isMe: isMe),
                            )
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
          ),
          ColoredBox(color: const Color(0xFFF2F2F2), child: _pendingTray(chat.messages)),
          ColoredBox(color: const Color(0xFFF2F2F2), child: ChatTypingLine(typing)),
          ChatComposer(
            controller: _messageController,
            onSend: _send,
            onAttach: _attach,
            onChanged: (_) => ref.read(typingNowProvider('c:${widget.conversation.id}').notifier).typing(_myName()),
            quickReplies: widget.conversation.partnerId == null ? const [] : const ['Posso visitar?', 'Obrigado!', 'Qual é o prazo?'],
            onQuickReply: _quick,
          ),
        ],
      ),
    );
  }
}

/// Cartão de proposta real (`message.isProposal`,
/// `051_proposal_chat_card.sql`) — o parceiro só recebe/envia texto pela
/// mesma tabela (`partner_chat_thread_screen.dart` mostra o mesmo
/// cartão, sem botão de aceitar), mas só o casal pode aceitar
/// (`accept_proposal()`, mesma RPC de `couple_bookings_screen.dart`).
class _ProposalCard extends ConsumerStatefulWidget {
  final ChatMessage message;

  final VoidCallback? onRequestNew;
  final String? partnerId;
  final String partnerName;
  final String conversationId;
  final String? imageUrl;
  /// Etiqueta do evento (conversas juntas, 2026-11-25).
  final String? eventLabel;

  const _ProposalCard({
    this.eventLabel,
    required this.message,
    this.partnerId,
    required this.partnerName,
    required this.conversationId,
    this.imageUrl,
    this.onRequestNew,
  });

  // Taxa do organizador para este parceiro (migração 180).
  FeeConfig? fee(WidgetRef ref, {bool watch = false}) {
    final id = partnerId;
    if (id == null) return watch ? ref.watch(organizerFeeConfigProvider).value : ref.read(organizerFeeConfigProvider).value;
    return watch ? ref.watch(organizerFeeForPartnerProvider(id)).value : ref.read(organizerFeeForPartnerProvider(id)).value;
  }

  @override
  ConsumerState<_ProposalCard> createState() => _ProposalCardState();
}

class _ProposalCardState extends ConsumerState<_ProposalCard> {
  bool _accepting = false;
  bool _accepted = false;

  @override
  void initState() {
    super.initState();
    // Estado real da proposta logo ao abrir: uma proposta já aceite (ou
    // recusada) mostrava "Aceitar" e tocar não fazia nada visível
    // (reportado 2026-10-18).
    final id = widget.message.proposalId;
    if (id != null) {
      fetchProposalStatus(id).then((status) async {
        if (!mounted || status == null) return;
        setState(() {
          _accepted = status == 'accepted';
          _unavailable = status != 'sent' && status != 'accepted';
        });
        if (status == 'accepted') {
          // O sinal pode já estar pago — não pedir para pagar outra vez
          // (reportado 2026-10-18).
          final booking = await fetchProposalBookingState(id);
          if (mounted) setState(() => _bookingState = booking);
        }
      }).catchError((_) {});
    }
  }

  bool _unavailable = false;
  String? _bookingState;

  /// Texto do botão depois de aceite, conforme o pagamento da reserva.

  void _acceptedFeedback() {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: const Text('Proposta aceite! Paga para confirmar.'),
        action: SnackBarAction(
          label: 'Pagar',
          onPressed: () => _openPay(
            (widget.fee(ref) ?? const FeeConfig())
                .effectivePct(widget.message.proposalPrice ?? 0),
          ),
        ),
      ),
    );
  }

  /// Abre o pagamento dentro da app para o que estiver pendente.
  Future<void> _openPay(double pct) async {
    final id = widget.message.proposalId;
    if (id == null) return;
    final p = await fetchProposalPendingPayment(id);
    if (!mounted) return;
    if (p == null) {
      context.push('/bookings');
      return;
    }
    final (paymentId, type, amount, partner) = p;
    await context.push('/pay', extra: PayArgs(
      paymentId: paymentId,
      partnerName: partner,
      kind: type,
      amount: amountWithCommission(amount, pct),
      baseAmount: amount,
      // Já estamos na conversa: só fecha a folha.
      onChat: (ctx) => Navigator.of(ctx).pop(),
    ));
    if (!mounted) return;
    final booking = await fetchProposalBookingState(id);
    if (mounted) setState(() => _bookingState = booking);
  }

  /// Depois de aceitar a proposta: folha de "pagar ou pagar depois". A mais de
  /// 3 dias do prazo não deixa pagar já (só "OK"); a 3 dias ou menos mostra
  /// "Pagar €sinal" (ou o total, se não houver sinal). "Pagar" abre o
  /// pagamento que já existe; "Pagar depois"/"OK" fecham.
  Future<void> _showPayOrLater() async {
    final msg = widget.message;
    final total = msg.proposalPrice ?? 0;
    final sinal = msg.proposalDepositAmount ?? 0;
    final hasSinal = sinal > 0 && sinal < total;
    final payAmount = hasSinal ? sinal : total;

    // Sem sinal, paga-se tudo de uma vez só nos 6 dias antes do prazo
    // (regra de 2026-11-20); com sinal paga-se já.
    DateTime? deadline;
    try {
      final r = await supabase
          .from('payments')
          .select('due_at, bookings!inner(proposal_id)')
          .eq('bookings.proposal_id', msg.proposalId!)
          .eq('status', 'pending')
          .limit(1)
          .maybeSingle();
      final d = r?['due_at'];
      if (d is String) deadline = DateTime.tryParse(d);
    } catch (_) {}
    if (!mounted) return;
    final days = deadline?.difference(DateTime.now()).inDays;
    final canPayNow = hasSinal || days == null || days <= 6;
    final pct = (widget.fee(ref) ?? const FeeConfig()).effectivePct(total);

    await showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (ctx) => _PayOrLaterSheet(
        title: (msg.proposalTitle ?? '').trim().isEmpty ? 'Reserva' : msg.proposalTitle!.trim(),
        total: total,
        sinal: hasSinal ? sinal : null,
        payAmount: payAmount,
        canPayNow: canPayNow,
        onPay: () {
          Navigator.of(ctx).pop();
          _openPay(pct);
        },
        onLater: () => Navigator.of(ctx).pop(),
      ),
    );
  }

  /// «Recusar» (mockup 2026-11-21): pergunta o motivo (e uma mensagem,
  /// opcional); o parceiro recebe-os na conversa (migração 206).
  Future<void> _reject() async {
    final id = widget.message.proposalId;
    if (id == null) return;
    setState(() => _accepting = true);
    final done = await rejectProposalFlow(
      context,
      proposalId: id,
      partnerName: widget.partnerName,
      sendMessage: (text) => ref.read(chatThreadControllerProvider(widget.conversationId).notifier).sendText(text),
    );
    if (!mounted) return;
    if (done) ref.invalidate(pendingProposalsProvider);
    setState(() {
      _accepting = false;
      if (done) _unavailable = true;
    });
  }

  Future<void> _accept() async {
    // Partilhar com os outros organizadores ou guardar em segredo (2026-10-21).
    final secret = await askHirePrivacy(context, ref.read(eventControllerProvider).event?.id, 'este parceiro');
    if (secret == null || !mounted) return;
    setState(() => _accepting = true);
    try {
      await acceptProposal(widget.message.proposalId!, private: secret);
      if (!mounted) return;
      ref.invalidate(pendingProposalsProvider);
      ref.invalidate(coupleBookingsProvider);
      setState(() => _accepted = true);
      // Mockup (2026-11-21): aceitar → extras do parceiro → pagar o sinal
      // (com «Pagar mais tarde» no ecrã de pagar).
      try {
        final b = await supabase.from('bookings').select('id').eq('proposal_id', widget.message.proposalId!).maybeSingle();
        final bookingId = b?['id'] as String?;
        if (bookingId != null && mounted) await offerBookingExtras(context, bookingId, partnerName: widget.partnerName);
      } catch (_) {}
      if (!mounted) return;
      final msg = widget.message;
      final total = msg.proposalPrice ?? 0;
      final sinal = msg.proposalDepositAmount ?? 0;
      if (sinal > 0 && sinal < total) {
        await _openPay((widget.fee(ref) ?? const FeeConfig()).effectivePct(total));
      } else {
        await _showPayOrLater();
      }
    } on PostgrestException catch (e) {
      // `P0001` = já não está `sent`. Verifica o estado real em vez de
      // assumir logo um erro — se já foi aceite (ex: pelas Reservas,
      // este cartão do chat não sabia), reflete isso como sucesso em
      // vez de assustar com "não disponível".
      if (e.code == 'P0001') {
        final status = await fetchProposalStatus(widget.message.proposalId!);
        if (status == 'accepted') {
          if (!mounted) return;
          ref.invalidate(pendingProposalsProvider);
          ref.invalidate(coupleBookingsProvider);
          setState(() => _accepted = true);
          _acceptedFeedback();
          return;
        }
        if (mounted) setState(() => _unavailable = true);
      }
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              e.code == 'P0001'
                  ? 'Esta proposta já não está disponível — foi recusada ou expirou.'
                  // `P0007` = `partner_already_booked` (backend/bookings/tasks.md,
                  // "Prevenir overbooking") — o parceiro já tem outra reserva
                  // ativa na mesma data.
                  : e.code == 'P0007'
                      ? 'Este parceiro já tem outra reserva confirmada nessa data. Não é possível aceitar esta proposta.'
                      // `P0008` = `already_booked_with_partner` (migração 102).
                      : e.code == 'P0010'
                          ? PartnerUnavailableException.message
                      : e.code == 'P0008'
                          ? 'Já tens uma reserva com este parceiro. Só podes aceitar outra se essa for cancelada sem nada pago.'
                          : 'Não foi possível aceitar a proposta. Tenta novamente.',
            ),
          ),
        );
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Não foi possível aceitar a proposta. Tenta novamente.',
            ),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _accepting = false);
    }
  }

  /// «Ver detalhe» abre a página desta reserva com o parceiro (pedido do
  /// Rafael, 2026-11-24), não a lista geral. Sem ela, a lista das reservas.
  Future<void> _openDetail() async {
    CoupleBooking? found;
    try {
      final all = await ref.read(coupleBookingsProvider.future);
      final mine = all.where((b) => b.partnerId != null && b.partnerId == widget.partnerId).toList();
      found = mine.where((b) => b.status != BookingStatus.recusado).firstOrNull ?? mine.firstOrNull;
    } catch (_) {}
    if (!mounted) return;
    if (found == null) {
      context.push('/bookings');
    } else {
      context.push('/bookings/detail', extra: found);
    }
  }

  @override
  Widget build(BuildContext context) {
    final message = widget.message;
    // Como no design: "Casamento · 12 jun 2027" e o serviço por baixo.
    final event = ref.watch(eventControllerProvider).event;
    final date = event?.eventDate;
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    final heading = date == null
        ? null
        : '${event!.eventType.label} · ${date.day} ${months[date.month - 1]} ${date.year}';
    final pct = (widget.fee(ref, watch: true) ?? const FeeConfig())
        .effectivePct(message.proposalPrice ?? 0);
    double withFee(double v) => amountWithCommission(v, pct);
    // Estado e cor (prancheta «Cartões nas mensagens», 2026-11-24).
    final (String status, ChatCardTone tone) = _unavailable && !_accepted
        ? ('Recusada ou expirada', ChatCardTone.neutral)
        : !_accepted
            ? ('Por responder', ChatCardTone.pending)
            : switch (_bookingState) {
                'deposit_paid' => ('Aceite e sinal pago', ChatCardTone.doneLine),
                'final_due' => ('Falta pagar o resto', ChatCardTone.pending),
                'paid' => ('Tudo pago', ChatCardTone.doneLine),
                'completed' => ('Concluído', ChatCardTone.done),
                'cancelled' => ('Reserva cancelada', ChatCardTone.neutral),
                _ => ('Aceite · falta o sinal', ChatCardTone.pending),
              };
    // Cada estado como na prancheta «Todos os cartões» (2026-11-24/25).
    final title = (message.proposalTitle ?? '').trim().isEmpty ? 'Proposta' : message.proposalTitle!.trim();
    final total = message.proposalPrice == null
        ? null
        : totalWithCommission(message.proposalPrice!, message.proposalDepositAmount, pct);
    final sinal = message.proposalDepositAmount == null ? null : withFee(message.proposalDepositAmount!);
    final booked = _accepted && (_bookingState == 'deposit_paid' || _bookingState == 'paid' || _bookingState == 'completed');
    final payDue = _accepted && (_bookingState == null || _bookingState == 'deposit_due');
    if (_unavailable && !_accepted) {
      // Recusada ou expirada.
      return ChatProposalCard(
        icon: Hi.xCircle,
        imageUrl: widget.imageUrl,
        status: 'Recusada ou expirada',
        tone: ChatCardTone.neutral,
        title: title,
        subtitle: total == null ? null : euros(total),
        price: null,
        deposit: null,
        actions: [ChatCardAction('Nova proposta', widget.onRequestNew)],
      );
    }
    if (booked) {
      return ChatProposalCard(
        icon: Hi.checkCircle,
        eyebrow: 'Reserva confirmada',
        imageUrl: widget.imageUrl,
        status: _bookingState == 'completed' ? 'Concluído' : (_bookingState == 'paid' ? 'Tudo pago' : 'Reservado'),
        tone: _bookingState == 'completed' ? ChatCardTone.done : ChatCardTone.doneLine,
        title: '${widget.partnerName} · ${event?.eventType.label ?? 'Evento'}',
        subtitle: date == null ? null : '${date.day} ${months[date.month - 1]} ${date.year}',
        price: null,
        deposit: null,
        rows: [if (sinal != null) ('Sinal', '${euros(sinal)} pago')],
        note: 'Cancelamento com devolução até 48 h depois de pagar.',
        actions: [ChatCardAction('Ver reserva', _openDetail)],
      );
    }
    if (_accepted && _bookingState == 'cancelled') {
      return ChatProposalCard(
        icon: Hi.xCircle,
        eyebrow: 'Reserva cancelada',
        imageUrl: widget.imageUrl,
        status: 'Cancelada',
        tone: ChatCardTone.neutral,
        title: '${widget.partnerName} · ${event?.eventType.label ?? 'Evento'}',
        price: null,
        deposit: null,
        actions: [ChatCardAction('Nova proposta', widget.onRequestNew)],
      );
    }
    if (_accepted) {
      // Aceite: falta o sinal (ou o resto).
      return ChatProposalCard(
        imageUrl: widget.imageUrl,
        status: status,
        tone: tone,
        title: title,
        subtitle: widget.eventLabel != null || heading == null ? null : 'Para o $heading',
      eventLabel: widget.eventLabel,
        price: null,
        deposit: null,
        rows: [
          if (payDue && sinal != null) ('Sinal', euros(sinal)),
          if (!payDue && total != null) ('A pagar', euros(total - (sinal ?? 0))),
        ],
        note: payDue ? 'Sem o sinal, o parceiro pode aceitar outro pedido.' : 'Sem o pagamento, a reserva é cancelada.',
        actions: [
          ChatCardAction(
            payDue ? (sinal == null ? 'Pagar' : 'Pagar sinal · ${euros(sinal)}') : 'Pagar',
            () => _openPay(pct),
            primary: true,
          ),
        ],
      );
    }
    return ChatProposalCard(
      imageUrl: widget.imageUrl,
      status: status,
      tone: tone,
      title: title,
      subtitle: widget.eventLabel != null || heading == null ? null : 'Para o $heading',
      eventLabel: widget.eventLabel,
      // O cliente vê logo o que vai pagar: valor do parceiro + comissão
      // (mesma conta do checkout). Pedido 2026-10-17.
      price: total,
      deposit: sinal,
      note: pct > 0 ? 'Valores já com a taxa de serviço.' : null,
      actions: [
        // Por responder: «Recusar» + «Aceitar» (mockup 2026-11-21).
        ChatCardAction('Recusar', _accepting ? null : _reject),
        ChatCardAction(
          _accepting ? 'A aceitar…' : 'Aceitar',
          _accepting ? null : _accept,
          primary: true,
        ),
      ],
    );
  }
}

/// Até quando o parceiro leu esta conversa ("Visto").
final _partnerReadProvider = FutureProvider.autoDispose.family<DateTime?, String>((ref, id) async {
  try {
    final r = await supabase.from('conversations').select('partner_last_read_at').eq('id', id).maybeSingle();
    final v = r?['partner_last_read_at'] as String?;
    return v == null ? null : DateTime.parse(v);
  } catch (_) {
    return null;
  }
});

/// Folha "pagar ou pagar depois" a seguir a aceitar uma proposta
/// (mockup «Parceiro — Reservar», artboard Reservar-pagar, 2026-11-17).
/// A 3 dias ou menos do prazo deixa pagar já; a mais de 3 dias é só "OK".
class _PayOrLaterSheet extends StatelessWidget {
  final String title;
  final double total;
  final double? sinal;
  final double payAmount;
  final bool canPayNow;
  final VoidCallback onPay;
  final VoidCallback onLater;
  const _PayOrLaterSheet({
    required this.title,
    required this.total,
    required this.sinal,
    required this.payAmount,
    required this.canPayNow,
    required this.onPay,
    required this.onLater,
  });

  @override
  Widget build(BuildContext context) {
    // Dentro da ilha (showIslandSheet), que dá o fundo, os cantos e a margem.
    return SafeArea(
      top: false,
      child: Container(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 18),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Center(
            child: Container(
              width: 40,
              height: 4,
              margin: const EdgeInsets.only(bottom: 14),
              decoration: BoxDecoration(color: const Color(0xFFD8D3C8), borderRadius: BorderRadius.circular(999)),
            ),
          ),
          Text(canPayNow ? 'Paga para confirmar' : 'Reservado!',
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 6),
          Text(
            canPayNow
                ? 'Falta pouco para o prazo. Paga para confirmar.'
                : 'Guardámos a tua reserva. Ainda não é preciso pagar.',
            style: const TextStyle(fontSize: 14, height: 1.5, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 14),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: AppTheme.background,
              borderRadius: BorderRadius.circular(22),
            ),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text('Total ${euros(total)}', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              if (sinal != null) ...[
                const Divider(height: 22, color: Color(0xFFD9D9D9)),
                Row(children: [
                  const Expanded(
                      child: Text('Sinal para confirmar', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
                  Text(euros(sinal!), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ]),
              ],
            ]),
          ),
          const SizedBox(height: 16),
          SizedBox(
            height: 52,
            child: PressScale(child: FilledButton(
              onPressed: canPayNow ? onPay : onLater,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.action,
                foregroundColor: Colors.white,
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, fontFamily: AppTheme.fontFamily),
              ),
              child: Text(canPayNow ? 'Pagar ${euros(payAmount)}' : 'OK'),
            )),
          ),
          const SizedBox(height: 10),
          PressScale(child: TextButton(
            onPressed: onLater,
            style: TextButton.styleFrom(
              foregroundColor: AppTheme.ink,
              minimumSize: const Size(0, 36),
              textStyle: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, fontFamily: AppTheme.fontFamily),
            ),
            child: const Text('Pagar depois'),
          )),
          if (!canPayNow) ...[
            const SizedBox(height: 6),
            const Text('Avisamos-te 3 dias antes do prazo para pagares!',
                textAlign: TextAlign.center, style: TextStyle(fontSize: 13, height: 1.5, color: AppTheme.inkMuted)),
          ],
        ]),
      ),
    );
  }
}

/// Estado de cada proposta da conversa (e da reserva, se aceite), para o
/// «Por tratar». A chave são os ids separados por vírgulas.
final _proposalStatesProvider =
    FutureProvider.autoDispose.family<Map<String, (String?, String?)>, String>((ref, joined) async {
  final out = <String, (String?, String?)>{};
  for (final id in joined.split(',').where((s) => s.isNotEmpty)) {
    try {
      final s = await fetchProposalStatus(id);
      final b = s == 'accepted' ? await fetchProposalBookingState(id) : null;
      out[id] = (s, b);
    } catch (_) {}
  }
  return out;
});
