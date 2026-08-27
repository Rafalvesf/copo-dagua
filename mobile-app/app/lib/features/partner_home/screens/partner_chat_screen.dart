import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/chat/chat_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// Chat mínimo entre o parceiro e o casal cliente, com a possibilidade
/// de "enviar contrato" como um cartão na própria conversa — o pedido
/// concreto era "adiciona chat ao botão Contratos, para os contratos
/// poderem ser enviados no chat com os clientes". Módulo completo
/// (múltiplos clientes, PDF real, assinatura) fica para
/// `partner-app/chat/` e `partner-app/contracts/`.
class PartnerChatScreen extends ConsumerStatefulWidget {
  const PartnerChatScreen({super.key});

  @override
  ConsumerState<PartnerChatScreen> createState() => _PartnerChatScreenState();
}

class _PartnerChatScreenState extends ConsumerState<PartnerChatScreen> {
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
    await ref.read(chatControllerProvider.notifier).sendText(text);
    _scrollToBottom();
  }

  Future<void> _sendContract() async {
    final controller = TextEditingController(text: 'Contrato de prestação de serviços');
    final title = await showDialog<String>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Enviar contrato'),
        content: TextField(
          controller: controller,
          autofocus: true,
          decoration: const InputDecoration(labelText: 'Nome do contrato'),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cancelar'),
          ),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(controller.text),
            child: const Text('Enviar'),
          ),
        ],
      ),
    );
    if (title == null || title.trim().isEmpty) return;
    await ref.read(chatControllerProvider.notifier).sendContract(title);
    _scrollToBottom();
  }

  @override
  Widget build(BuildContext context) {
    final chat = ref.watch(chatControllerProvider);

    ref.listen(chatControllerProvider, (previous, next) {
      if ((previous?.messages.length ?? 0) != next.messages.length) {
        _scrollToBottom();
      }
    });

    return GradientScaffold(
      background: AppBackground.subtle,
      appBar: AppBar(
        title: const Text('Ana & Miguel'),
      ),
      body: Column(
        children: [
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
                          child: message.isContract
                              ? _ContractBubble(
                                  title: message.contractTitle!,
                                  fromPartner: message.fromPartner,
                                )
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
                  IconButton(
                    tooltip: 'Enviar contrato',
                    onPressed: _sendContract,
                    icon: const Icon(Icons.description_outlined),
                  ),
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
          style: TextStyle(
            color: fromPartner ? Colors.white : AppTheme.ink,
          ),
        ),
      ),
    );
  }
}

class _ContractBubble extends StatelessWidget {
  final String title;
  final bool fromPartner;

  const _ContractBubble({required this.title, required this.fromPartner});

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: BoxConstraints(
        maxWidth: MediaQuery.of(context).size.width * 0.72,
      ),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: AppColors.greenDark, width: 1.5),
          boxShadow: AppTheme.cardShadow,
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(
              Icons.description_outlined,
              color: AppColors.greenDark,
            ),
            const SizedBox(width: 10),
            Flexible(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    title,
                    style: const TextStyle(fontWeight: FontWeight.w700),
                  ),
                  const SizedBox(height: 2),
                  const Text(
                    'Contrato',
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 12),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
