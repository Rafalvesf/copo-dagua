import 'package:flutter/material.dart';

import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';

/// Fio de conversa com um cliente específico das Mensagens — versão
/// parametrizada de `PartnerChatScreen` (que fica hardcoded a uma única
/// conversa, ligada ao botão Contratos do dashboard). Usa
/// `MockBackend.listMessages`/`sendMessage` diretamente com
/// `conversation.id` como chave da thread, em vez do
/// `chatControllerProvider` global (que assume uma só conversa por
/// utilizador autenticado).
class PartnerChatThreadScreen extends StatefulWidget {
  final ChatConversation conversation;

  const PartnerChatThreadScreen({super.key, required this.conversation});

  @override
  State<PartnerChatThreadScreen> createState() =>
      _PartnerChatThreadScreenState();
}

class _PartnerChatThreadScreenState extends State<PartnerChatThreadScreen> {
  final _messageController = TextEditingController();
  final _scrollController = ScrollController();
  final _backend = MockBackend.instance;

  bool _loading = true;
  List<ChatMessage> _messages = const [];

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void dispose() {
    _messageController.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final messages = await _backend.listMessages(widget.conversation.id);
    if (!mounted) return;
    setState(() {
      _messages = messages;
      _loading = false;
    });
    _scrollToBottom();
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
    final message = await _backend.sendMessage(
      partnerId: widget.conversation.id,
      fromPartner: true,
      text: text.trim(),
    );
    setState(() => _messages = [..._messages, message]);
    _scrollToBottom();
  }

  @override
  Widget build(BuildContext context) {
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
            child: _loading
                ? const Center(child: CircularProgressIndicator())
                : ListView.builder(
                    controller: _scrollController,
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      16,
                      AppTheme.screenMargin,
                      16,
                    ),
                    itemCount: _messages.length,
                    itemBuilder: (context, index) {
                      final message = _messages[index];
                      return Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: Align(
                          alignment: message.fromPartner
                              ? Alignment.centerRight
                              : Alignment.centerLeft,
                          child: _TextBubble(
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
                        boxShadow: AppTheme.cardShadow,
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
          color: fromPartner ? AppColors.greenDark : Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: AppTheme.cardShadow,
        ),
        child: Text(
          text,
          style: TextStyle(color: fromPartner ? Colors.white : AppTheme.ink),
        ),
      ),
    );
  }
}
