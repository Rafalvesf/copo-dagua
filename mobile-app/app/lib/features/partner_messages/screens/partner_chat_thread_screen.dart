import 'package:flutter/material.dart';
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
      _scrollController.animateTo(
        _scrollController.position.maxScrollExtent,
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
            child: ChatHeader(name: widget.conversation.name),
          ),
          Expanded(
            child: chat.loading && chat.messages.isEmpty
                ? const Center(child: CircularProgressIndicator())
                : ListView(
                    controller: _scrollController,
                    padding: const EdgeInsets.all(16),
                    children: chatTimeline(
                      messages: chat.messages,
                      // Do lado do parceiro, "minha" é a mensagem do parceiro.
                      isMine: (m) => m.fromPartner,
                      content: (message, isMe) => message.isProposal
                          ? ChatProposalCard(
                              eyebrow: 'PROPOSTA ENVIADA',
                              title: message.proposalTitle ?? 'Proposta',
                              price: message.proposalPrice,
                              deposit: message.proposalDepositAmount,
                            )
                          : ChatBubble(text: message.text ?? '', isMe: isMe),
                    ),
                  ),
          ),
          ChatComposer(controller: _messageController, onSend: _send),
        ],
      ),
    );
  }
}
