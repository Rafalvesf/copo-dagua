import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import '../money.dart';
import 'snappy_tap.dart';
import 'dense_card.dart' show PriceBox;
import 'v2_kit.dart';

/// Peças da conversa exatamente como no design (canvas "Conversa"):
/// bolhas com o canto do lado de quem fala mais fechado, separador de
/// dia ("Hoje"), hora por baixo do último balão de cada grupo, cartão de
/// proposta com "Total" / "Sinal para reservar" e botões em baixo, e a
/// caixa de escrever cinzenta com o botão verde de enviar.
/// Partilhado pelo casal (`chat_thread_screen.dart`) e pelo parceiro
/// (`partner_chat_thread_screen.dart`).


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
  /// Até quando a outra parte leu: "Visto" nas minhas mensagens.
  DateTime? seenUntil,
  /// Texto em vez de "Visto" (grupos: "Visto por 4").
  String Function(ChatMessage m)? seenLabel,
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
          // Pílula do dia (mockup "Conversa", 2026-11-12).
          child: Center(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
              decoration: BoxDecoration(color: const Color(0xFFE9E5DC), borderRadius: BorderRadius.circular(999)),
              child: Text(
                _dayLabel(local),
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted),
              ),
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
      final seen = me && seenLabel != null
          ? seenLabel(m)
          : (me && seenUntil != null && !seenUntil.isBefore(m.sentAt) ? 'Visto' : '');
      out.add(
        Padding(
          padding: const EdgeInsets.only(top: 4, bottom: 12),
          child: Align(
            alignment: me ? Alignment.centerRight : Alignment.centerLeft,
            child: Text(
              seen.isEmpty ? _hhmm(local) : '${_hhmm(local)} · $seen',
              style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppTheme.inkMuted),
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

  /// Nos grupos: nome de quem escreveu, dentro da bolha (mockup "Grupo").
  final String? sender;

  const ChatBubble({super.key, required this.text, required this.isMe, this.sender});

  static const _senderColors = [Color(0xFF9A4F57), Color(0xFF3F7A4F), Color(0xFF8A6A2E), Color(0xFF4F5E8A), Color(0xFF7A4F8A)];
  static Color senderColor(String name) {
    var h = 0;
    for (final c in name.codeUnits) {
      h = (h * 31 + c) & 0x7fffffff;
    }
    return _senderColors[h % _senderColors.length];
  }

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.78),
      child: Container(
        padding: EdgeInsets.fromLTRB(14, sender == null ? 10 : 8, 14, 10),
        decoration: BoxDecoration(
          // As minhas a preto, as da outra parte a branco (mockup).
          color: isMe ? AppTheme.ink : Colors.white,
          borderRadius: BorderRadius.only(
            topLeft: const Radius.circular(18),
            topRight: const Radius.circular(18),
            bottomLeft: Radius.circular(isMe ? 18 : 6),
            bottomRight: Radius.circular(isMe ? 6 : 18),
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            if (sender != null)
              Padding(
                padding: const EdgeInsets.only(bottom: 2),
                child: Text(sender!,
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: senderColor(sender!))),
              ),
            Text(
              text,
              style: TextStyle(
                fontSize: 15,
                height: 21 / 15,
                fontWeight: FontWeight.w600,
                color: isMe ? Colors.white : AppTheme.ink,
              ),
            ),
          ],
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
    this.imageUrl,
  });

  /// Linha pequena por baixo dos valores (ex.: "Inclui a comissão …").
  final String? note;

  /// Foto do parceiro no topo do cartão (mockup "Conversa").
  final String? imageUrl;

  Widget _chip(String t) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(999)),
        child: Text(t, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3A3733))),
      );

  @override
  Widget build(BuildContext context) {
    // Mockup "Conversa com parceiro" (2026-11-12): o cartão dos eventos —
    // foto com "Proposta" e o total, título, etiquetas e os botões.
    return SizedBox(
      width: MediaQuery.of(context).size.width * 0.84,
      child: Container(
        clipBehavior: Clip.antiAlias,
        decoration: softCard(radius: 22),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            SizedBox(
              height: 120,
              child: Stack(fit: StackFit.expand, children: [
                imageUrl == null
                    ? Container(color: const Color(0xFFE7D9C3))
                    : Image.network(imageUrl!, fit: BoxFit.cover, errorBuilder: (_, _, _) => Container(color: const Color(0xFFE7D9C3))),
                Positioned(
                  left: 12,
                  top: 12,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(999)),
                    child: Text(eyebrow == 'PROPOSTA' ? 'Proposta' : eyebrow,
                        style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.white)),
                  ),
                ),
                Positioned(right: 12, top: 12, child: PriceBox('TOTAL', price == null ? '—' : euros(price!))),
              ]),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 12, 14, 14),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Text(title,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 10),
                Wrap(spacing: 6, runSpacing: 6, children: [
                  if (subtitle != null && subtitle!.isNotEmpty) _chip(subtitle!),
                  if (deposit != null) _chip('Sinal ${euros(deposit!)}'),
                ]),
                if (note != null) ...[
                  const SizedBox(height: 8),
                  Text(note!, style: const TextStyle(fontSize: 11, color: AppTheme.inkMuted)),
                ],
                if (actions.isNotEmpty) ...[
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      for (var i = 0; i < actions.length; i++) ...[
                        if (i > 0) const SizedBox(width: 8),
                        Expanded(
                          child: SnappyTap(
                            onTap: actions[i].onTap,
                            child: Container(
                              height: 40,
                              alignment: Alignment.center,
                              padding: const EdgeInsets.symmetric(horizontal: 8),
                              decoration: BoxDecoration(
                                color: actions[i].primary && actions[i].onTap != null ? AppTheme.ink : Colors.white,
                                borderRadius: BorderRadius.circular(999),
                                border: actions[i].primary && actions[i].onTap != null
                                    ? null
                                    : Border.all(color: actions[i].onTap == null ? const Color(0xFFE4E1D8) : AppTheme.ink, width: 1.5),
                              ),
                              child: Text(
                                actions[i].label,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                  fontSize: 14,
                                  fontWeight: FontWeight.w700,
                                  color: actions[i].onTap == null
                                      ? AppTheme.inkMuted
                                      : actions[i].primary
                                          ? Colors.white
                                          : AppTheme.ink,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ],
                  ),
                ],
              ]),
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

  /// Botão "+" para anexos (fotos, ficheiros, stickers e GIFs).
  final VoidCallback? onAttach;

  /// Texto de exemplo na caixa (mockup: "Escreve uma mensagem";
  /// nos grupos "Mensagem para o grupo").
  final String hint;

  const ChatComposer({super.key, required this.controller, required this.onSend, this.onAttach, this.hint = 'Escreve uma mensagem'});

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
              if (onAttach != null) ...[
                SnappyTap(
                  onTap: onAttach!,
                  child: Container(
                    width: 44,
                    height: 44,
                    alignment: Alignment.center,
                    decoration: const BoxDecoration(color: Color(0xFFF2F0EB), shape: BoxShape.circle),
                    child: const Icon(Hi.plus, color: AppTheme.ink, size: 22),
                  ),
                ),
                const SizedBox(width: 8),
              ],
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
                      hintText: hint,
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
                  decoration: const BoxDecoration(
                    color: AppTheme.ink,
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Hi.arrowUp, color: Colors.white, size: 20),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
