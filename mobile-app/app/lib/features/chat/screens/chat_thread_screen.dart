import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/chat/chat_thread_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../partners/screens/partner_detail_screen.dart';

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

  String get _conversationKey => widget.conversation.id;

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
    Navigator.of(context).push(
      MaterialPageRoute(builder: (_) => PartnerDetailScreen(partner: partner)),
    );
  }

  Future<void> _send() async {
    final text = _messageController.text;
    if (text.trim().isEmpty) return;
    _messageController.clear();
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

  @override
  Widget build(BuildContext context) {
    final chat = ref.watch(chatThreadControllerProvider(_conversationKey));

    ref.listen(chatThreadControllerProvider(_conversationKey), (
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
                      // Aqui é sempre o casal a enviar — `fromPartner`
                      // significa "veio da outra parte" (parceiro ou
                      // contacto do cortejo), por isso a bolha própria
                      // fica à direita quando `!fromPartner`.
                      final isMe = !message.fromPartner;
                      return Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: Align(
                          alignment: isMe
                              ? Alignment.centerRight
                              : Alignment.centerLeft,
                          child: message.isProposal
                              ? _ProposalCard(message: message)
                              : message.isQuoteRequestNotice
                              ? GestureDetector(
                                  onTap: _openPartnerProfile,
                                  child: _TextBubble(
                                    text: message.text ?? '',
                                    isMe: isMe,
                                  ),
                                )
                              : _TextBubble(
                                  text: message.text ?? '',
                                  isMe: isMe,
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
                    background: AppTheme.accentOliveDark,
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
  final bool isMe;

  const _TextBubble({required this.text, required this.isMe});

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: BoxConstraints(
        maxWidth: MediaQuery.of(context).size.width * 0.72,
      ),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        decoration: BoxDecoration(
          color: isMe ? AppTheme.accentOliveDark : AppTheme.surface,
          borderRadius: BorderRadius.circular(18),
        ),
        child: Text(
          text,
          style: TextStyle(color: isMe ? Colors.white : AppTheme.ink),
        ),
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

  const _ProposalCard({required this.message});

  @override
  ConsumerState<_ProposalCard> createState() => _ProposalCardState();
}

class _ProposalCardState extends ConsumerState<_ProposalCard> {
  bool _accepting = false;
  bool _accepted = false;

  Future<void> _accept() async {
    setState(() => _accepting = true);
    try {
      await acceptProposal(widget.message.proposalId!);
      if (!mounted) return;
      ref.invalidate(pendingProposalsProvider);
      ref.invalidate(coupleBookingsProvider);
      setState(() => _accepted = true);
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
          return;
        }
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

  @override
  Widget build(BuildContext context) {
    final message = widget.message;
    return ConstrainedBox(
      constraints: BoxConstraints(
        maxWidth: MediaQuery.of(context).size.width * 0.78,
      ),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(
            color: AppTheme.accentOliveDark.withValues(alpha: 0.4),
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Proposta',
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
            const SizedBox(height: 10),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: (_accepting || _accepted) ? null : _accept,
                style: FilledButton.styleFrom(
                  backgroundColor: AppTheme.accentOliveDark,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                child: Text(
                  _accepted
                      ? 'Aceite'
                      : (_accepting ? 'A aceitar...' : 'Aceitar proposta'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
