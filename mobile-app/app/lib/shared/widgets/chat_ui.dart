import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import '../money.dart';
import 'snappy_tap.dart';

/// Peças da conversa exatamente como no design (canvas "Conversa"):
/// bolhas com o canto do lado de quem fala mais fechado, separador de
/// dia ("Hoje"), hora por baixo do último balão de cada grupo, cartão de
/// proposta com "Total" / "Sinal para reservar" e botões em baixo, e a
/// caixa de escrever cinzenta com o botão verde de enviar.
/// Partilhado pelo casal (`chat_thread_screen.dart`) e pelo parceiro
/// (`partner_chat_thread_screen.dart`).

const _border = Color(0xFFE6E0D2);

String _hhmm(DateTime t) =>
    '${t.hour.toString().padLeft(2, '0')}:${t.minute.toString().padLeft(2, '0')}';

const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

String _dayLabel(DateTime t) {
  final now = DateTime.now();
  final today = DateTime(now.year, now.month, now.day);
  final day = DateTime(t.year, t.month, t.day);
  final diff = today.difference(day).inDays;
  if (diff == 0) return 'Hoje';
  if (diff == 1) return 'Ontem';
  return '${t.day} ${_months[t.month - 1]}${t.year == now.year ? '' : ' ${t.year}'}';
}

/// Linha do tempo da conversa: separador de dia quando o dia muda e a
/// hora por baixo do último balão de cada sequência da mesma pessoa.
List<Widget> chatTimeline({
  required List<ChatMessage> messages,
  required bool Function(ChatMessage m) isMine,
  required Widget Function(ChatMessage m, bool isMe) content,
}) {
  final out = <Widget>[];
  for (var i = 0; i < messages.length; i++) {
    final m = messages[i];
    final local = m.sentAt.toLocal();
    final prev = i == 0 ? null : messages[i - 1].sentAt.toLocal();
    if (prev == null ||
        prev.year != local.year ||
        prev.month != local.month ||
        prev.day != local.day) {
      out.add(
        Padding(
          padding: EdgeInsets.only(top: i == 0 ? 0 : 8, bottom: 12),
          child: Center(
            child: Text(
              _dayLabel(local),
              style: const TextStyle(fontSize: AppFontSize.xs, color: AppTheme.inkMuted),
            ),
          ),
        ),
      );
    }
    final me = isMine(m);
    final next = i + 1 < messages.length ? messages[i + 1] : null;
    final lastOfGroup = next == null ||
        isMine(next) != me ||
        next.sentAt.toLocal().difference(local).inMinutes > 10;
    out.add(
      Align(
        alignment: me ? Alignment.centerRight : Alignment.centerLeft,
        child: content(m, me),
      ),
    );
    if (lastOfGroup) {
      out.add(
        Padding(
          padding: const EdgeInsets.only(top: 4, bottom: 12),
          child: Align(
            alignment: me ? Alignment.centerRight : Alignment.centerLeft,
            child: Text(
              _hhmm(local),
              style: const TextStyle(fontSize: 11, color: AppTheme.inkMuted),
            ),
          ),
        ),
      );
    } else {
      out.add(const SizedBox(height: 8));
    }
  }
  return out;
}

class ChatBubble extends StatelessWidget {
  final String text;
  final bool isMe;

  const ChatBubble({super.key, required this.text, required this.isMe});

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.78),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        decoration: BoxDecoration(
          color: isMe ? AppTheme.accentOliveDark : AppTheme.surface,
          borderRadius: BorderRadius.only(
            topLeft: const Radius.circular(18),
            topRight: const Radius.circular(18),
            bottomLeft: Radius.circular(isMe ? 18 : 4),
            bottomRight: Radius.circular(isMe ? 4 : 18),
          ),
        ),
        child: Text(
          text,
          style: TextStyle(
            fontSize: 15,
            height: 21 / 15,
            color: isMe ? Colors.white : AppTheme.ink,
          ),
        ),
      ),
    );
  }
}

/// Botão do fundo do cartão de proposta.
class ChatCardAction {
  final String label;
  final VoidCallback? onTap;
  final bool primary;

  const ChatCardAction(this.label, this.onTap, {this.primary = false});
}

class ChatProposalCard extends StatelessWidget {
  final String eyebrow;
  final String title;

  /// Linha por baixo do título (design: "120 pessoas · espaço + catering").
  final String? subtitle;
  final double? price;
  final double? deposit;
  final List<ChatCardAction> actions;

  const ChatProposalCard({
    super.key,
    this.eyebrow = 'PROPOSTA',
    required this.title,
    this.subtitle,
    required this.price,
    required this.deposit,
    this.actions = const [],
    this.note,
  });

  /// Linha pequena por baixo dos valores (ex.: "Inclui a comissão …").
  final String? note;

  Widget _row(String label, String value, {bool big = false}) => Row(
        crossAxisAlignment: CrossAxisAlignment.baseline,
        textBaseline: TextBaseline.alphabetic,
        children: [
          Expanded(
            child: Text(label, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ),
          Text(
            value,
            style: TextStyle(fontSize: big ? 17 : 14, fontWeight: FontWeight.w700, color: AppTheme.ink),
          ),
        ],
      );

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width * 0.78,
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
        ),
        // Borda por cima do conteúdo, para os botões de baixo não a
        // taparem nos cantos.
        foregroundDecoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: _border),
        ),
        clipBehavior: Clip.antiAlias,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.all(14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    eyebrow,
                    style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.w700,
                      letterSpacing: 0.6,
                      color: AppTheme.accentOliveDark,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (subtitle != null && subtitle!.isNotEmpty) ...[
                    const SizedBox(height: 2),
                    Text(subtitle!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ],
                  const SizedBox(height: 10),
                  _row('Total', price == null ? '—' : euros(price!), big: true),
                  const SizedBox(height: 2),
                  _row('Sinal para reservar', deposit == null ? '—' : euros(deposit!)),
                  if (note != null) ...[
                    const SizedBox(height: 6),
                    Text(note!, style: const TextStyle(fontSize: 11, color: AppTheme.inkMuted)),
                  ],
                ],
              ),
            ),
            if (actions.isNotEmpty)
              DecoratedBox(
                decoration: const BoxDecoration(border: Border(top: BorderSide(color: _border))),
                child: Row(
                  children: [
                    for (var i = 0; i < actions.length; i++)
                      Expanded(
                        child: DecoratedBox(
                          decoration: BoxDecoration(
                            border: i == 0 ? null : const Border(left: BorderSide(color: _border)),
                          ),
                          child: SnappyTap(
                            onTap: actions[i].onTap,
                            child: Container(
                              height: 44,
                              alignment: Alignment.center,
                              color: Colors.white,
                              child: Text(
                                actions[i].label,
                                style: TextStyle(
                                  fontSize: 14,
                                  fontWeight: actions[i].primary ? FontWeight.w700 : FontWeight.w300,
                                  color: actions[i].onTap == null
                                      ? AppTheme.inkMuted
                                      : actions[i].primary
                                          ? AppTheme.accentOliveDark
                                          : AppTheme.inkMuted,
                                ),
                              ),
                            ),
                          ),
                        ),
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

/// Caixa de escrever do fundo: pílula cinzenta + botão verde redondo.
class ChatComposer extends StatelessWidget {
  final TextEditingController controller;
  final VoidCallback onSend;

  const ChatComposer({super.key, required this.controller, required this.onSend});

  @override
  Widget build(BuildContext context) {
    return Container(
      // Sem linha por cima (pedido 2026-10-17).
      color: Colors.white,
      child: SafeArea(
        top: false,
        minimum: const EdgeInsets.only(bottom: 20),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 10, 16, 0),
          child: Row(
            children: [
              Expanded(
                child: Container(
                  height: 44,
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  alignment: Alignment.centerLeft,
                  decoration: BoxDecoration(
                    color: AppTheme.surface,
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                  ),
                  child: TextField(
                    controller: controller,
                    onSubmitted: (_) => onSend(),
                    textInputAction: TextInputAction.send,
                    style: const TextStyle(fontSize: 15, color: AppTheme.ink),
                    decoration: const InputDecoration(
                      hintText: 'Escrever mensagem',
                      isDense: true,
                      filled: false,
                      border: InputBorder.none,
                      enabledBorder: InputBorder.none,
                      focusedBorder: InputBorder.none,
                      contentPadding: EdgeInsets.zero,
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 8),
              SnappyTap(
                onTap: onSend,
                child: Container(
                  width: 44,
                  height: 44,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: AppTheme.accentOliveDark,
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.arrow_upward_rounded, color: Colors.white, size: 20),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
