import 'package:flutter/material.dart';
import '../../../core/moderation/moderation.dart';
import '../../../core/chat/chat_attachments.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/chat/partner_chat_thread_controller.dart';
import '../../../core/models/models.dart';
import '../../../shared/widgets/chat_header.dart';
import '../../../shared/widgets/chat_ui.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

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
      background: AppBackground.subtle,
      body: Column(
        children: [
          SafeArea(
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
                ? const Center(child: CircularProgressIndicator())
                : ListView(
                    controller: _scrollController,
                    // Abre sempre nas mensagens mais recentes (2026-10-18).
                    reverse: true,
                    padding: const EdgeInsets.all(16),
                    children: chatTimeline(
                      messages: chat.messages,
                      // Do lado do parceiro, "minha" é a mensagem do parceiro.
                      isMine: (m) => m.fromPartner,
                      content: (message, isMe) => message.hasAttachment
                          ? ChatAttachmentView(url: message.attachmentUrl!, type: message.attachmentType ?? 'file', name: message.attachmentName, isMe: isMe)
                          : message.isProposal
                          ? ChatProposalCard(
                              eyebrow: 'PROPOSTA ENVIADA',
                              title: message.proposalTitle ?? 'Proposta',
                              price: message.proposalPrice,
                              deposit: message.proposalDepositAmount,
                            )
                          : isMe
                          ? ChatBubble(text: message.text ?? '', isMe: isMe)
                          : GestureDetector(
                              // Toque longo: denunciar a mensagem.
                              onLongPress: () => showModerationSheet(context, ref,
                                  kind: ReportKind.message, targetId: message.id, allowBlock: false),
                              child: ChatBubble(text: message.text ?? '', isMe: isMe),
                            ),
                    ).reversed.toList(),
                  ),
          ),
          ChatComposer(controller: _messageController, onSend: _send, onAttach: _attach),
        ],
      ),
    );
  }
}
