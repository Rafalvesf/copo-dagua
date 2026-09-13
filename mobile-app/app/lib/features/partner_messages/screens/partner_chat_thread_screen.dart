import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/chat/partner_chat_thread_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';

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
            child: PageHeader(
              title: widget.conversation.name,
              titleFontSize: 26,
            ),
          ),
          Expanded(
            child: chat.loading && chat.messages.isEmpty
                ? const Center(child: CircularProgressIndicator())
                : ListView.builder(
                    controller: _scrollController,
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      16,
                      AppTheme.screenMargin,
                      16,
                    ),
                    itemCount: chat.messages.length,
                    itemBuilder: (context, index) {
                      final message = chat.messages[index];
                      return Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: Align(
                          alignment: message.fromPartner
                              ? Alignment.centerRight
                              : Alignment.centerLeft,
                          child: message.isProposal
                              ? _ProposalCard(message: message)
                              : _TextBubble(
                                  text: message.text ?? '',
                                  fromPartner: message.fromPartner,
                                ),
                        ),
                      );
                    },
                  ),
          ),
          SafeArea(
            top: false,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                8,
                AppTheme.screenMargin,
                12,
              ),
              child: Row(
                children: [
                  Expanded(
                    child: Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(999),
                      ),
                      child: TextField(
                        controller: _messageController,
                        onSubmitted: (_) => _send(),
                        decoration: InputDecoration(
                          hintText: 'Escreve uma mensagem...',
                          filled: true,
                          fillColor: Colors.white,
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(999),
                            borderSide: BorderSide.none,
                          ),
                          contentPadding: const EdgeInsets.symmetric(
                            horizontal: 18,
                            vertical: 12,
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 8),
                  CircleIconButton(
                    icon: Icons.send_rounded,
                    onTap: _send,
                    background: AppColors.greenDark,
                    foreground: Colors.white,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _TextBubble extends StatelessWidget {
  final String text;
  final bool fromPartner;

  const _TextBubble({required this.text, required this.fromPartner});

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: BoxConstraints(
        maxWidth: MediaQuery.of(context).size.width * 0.72,
      ),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        decoration: BoxDecoration(
          color: fromPartner ? AppColors.greenDark : AppTheme.surface,
          borderRadius: BorderRadius.circular(18),
        ),
        child: Text(
          text,
          style: TextStyle(color: fromPartner ? Colors.white : AppTheme.ink),
        ),
      ),
    );
  }
}

/// Cartão de proposta real (`message.isProposal`,
/// `051_proposal_chat_card.sql`) — versão do lado do parceiro, só
/// leitura (quem aceita é o casal, ver `chat_thread_screen.dart`).
class _ProposalCard extends StatelessWidget {
  final ChatMessage message;

  const _ProposalCard({required this.message});

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: BoxConstraints(
        maxWidth: MediaQuery.of(context).size.width * 0.78,
      ),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: AppColors.greenDark.withValues(alpha: 0.4)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Proposta enviada',
              style: TextStyle(
                color: AppTheme.inkMuted,
                fontSize: 11,
                fontWeight: FontWeight.w700,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              message.proposalTitle ?? 'Proposta',
              style: const TextStyle(
                fontWeight: FontWeight.w700,
                fontSize: 14.5,
                color: AppTheme.ink,
              ),
            ),
            const SizedBox(height: 2),
            Text(
              '${message.proposalPrice?.toStringAsFixed(0)} € · sinal ${message.proposalDepositAmount?.toStringAsFixed(0)} €',
              style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
            ),
          ],
        ),
      ),
    );
  }
}
