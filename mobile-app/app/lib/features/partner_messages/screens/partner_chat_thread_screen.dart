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
          partnerChatThreadControllerProvider(widget.conversation.id).notifier,
        )
        .sendText(text);
    _scrollToBottom();
  }

  /// Fotos, ficheiros, stickers e GIFs (2026-10-20).
  Future<void> _attach() async {
    try {
      final a = await pickChatAttachment(context);
      if (a == null || !mounted) return;
      await ref.read(partnerChatThreadControllerProvider(widget.conversation.id).notifier).sendAttachment(a);
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
        await runChatDelete(context, () => ref.read(partnerChatThreadControllerProvider(widget.conversation.id).notifier).delete(message.id));
      },
      child: child,
    );
  }

  @override
  Widget build(BuildContext context) {
    final chat = ref.watch(
      partnerChatThreadControllerProvider(widget.conversation.id),
    );

    ref.listen(partnerChatThreadControllerProvider(widget.conversation.id), (
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
                          : message.isProposal
                          ? _PartnerProposalCard(message: message)
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
  const _PartnerProposalCard({required this.message});

  @override
  State<_PartnerProposalCard> createState() => _PartnerProposalCardState();
}

class _PartnerProposalCardState extends State<_PartnerProposalCard> {
  String? _status;
  String? _booking;

  @override
  void initState() {
    super.initState();
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

  @override
  Widget build(BuildContext context) {
    final m = widget.message;
    final (String status, ChatCardTone tone) = switch (_status) {
      'accepted' => switch (_booking) {
          'deposit_paid' || 'final_due' => ('Aceite · sinal recebido', ChatCardTone.doneLine),
          'paid' || 'completed' => ('Tudo pago', ChatCardTone.doneLine),
          'cancelled' => ('Reserva cancelada', ChatCardTone.neutral),
          _ => ('Aceite · à espera do sinal', ChatCardTone.pending),
        },
      'rejected' || 'declined' => ('Recusada', ChatCardTone.neutral),
      'expired' => ('Expirou', ChatCardTone.neutral),
      _ => ('Enviada · à espera da resposta', ChatCardTone.neutral),
    };
    return ChatProposalCard(
      eyebrow: 'PROPOSTA',
      status: status,
      tone: tone,
      title: (m.proposalTitle ?? '').trim().isEmpty ? 'Proposta' : m.proposalTitle!.trim(),
      price: m.proposalPrice,
      deposit: m.proposalDepositAmount,
      note: _status == null || _status == 'sent' ? 'Recebes o total menos a taxa de serviço.' : null,
    );
  }
}
