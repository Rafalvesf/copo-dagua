import '../../core/moderation/word_filter.dart';
import 'package:flutter/material.dart';
import '../hero_icons.dart';
import 'line_icon.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import '../money.dart';
import 'snappy_tap.dart';
import 'dense_card.dart' show PriceBox;
import 'v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

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
              decoration: BoxDecoration(color: const Color(0xFFE6E6E6), borderRadius: BorderRadius.circular(999)),
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
      // Grupos: «Visto por 4» em texto. Conversas a dois: o ícone (pedido
      // 2026-11-24) — um visto cinzento «enviada», dois verdes «vista».
      final groupSeen = me && seenLabel != null ? seenLabel(m) : '';
      final seenByOther = me && seenLabel == null && seenUntil != null && !seenUntil.isBefore(m.sentAt);
      const meta = TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppTheme.inkMuted);
      out.add(
        Padding(
          padding: const EdgeInsets.only(top: 4, bottom: 12),
          child: Align(
            alignment: me ? Alignment.centerRight : Alignment.centerLeft,
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Text(groupSeen.isEmpty ? _hhmm(local) : '${_hhmm(local)} · $groupSeen', style: meta),
              if (me && seenLabel == null) ...[
                const SizedBox(width: 4),
                Semantics(
                  label: seenByOther ? 'Vista' : 'Enviada',
                  child: seenByOther
                      ? const LineIcon('M2 12.5l4.5 4.5L16 7.5M11 15.5l1.5 1.5L22 7.5',
                          size: 16, color: AppTheme.brandGreen, stroke: 2.4)
                      : const LineIcon('M5 12.5l4.5 4.5L19 7.5', size: 14, color: AppTheme.inkMuted, stroke: 2.4),
                ),
              ],
            ]),
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
        decoration: BoxDecoration(color: const Color(0xFFF2F2F2), borderRadius: BorderRadius.circular(999)),
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
                    : Image.network(imageUrl!, fit: BoxFit.cover, errorBuilder: (_, _, _) => Container(color: const Color(0xFFE7D9C3)), frameBuilder: skeletonImageFrame),
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
                    style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w400, color: AppTheme.ink)),
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

  /// A cada tecla (para o "está a escrever…").
  final ValueChanged<String>? onChanged;

  /// Palavras bloqueadas (186): avisa e não envia.
  void _send(BuildContext context) {
    if (!WordFilter.allowed(controller.text)) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text(WordFilter.message)));
      return;
    }
    onSend();
  }

  const ChatComposer({
    super.key,
    required this.controller,
    required this.onSend,
    this.onAttach,
    this.hint = 'Escreve uma mensagem',
    this.onChanged,
  });

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
                    decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                    child: const Icon(Hi.plus, size: 20, color: Colors.white),
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
                    onChanged: onChanged,
                    onSubmitted: (_) => _send(context),
                    textInputAction: TextInputAction.send,
                    style: const TextStyle(fontSize: 15, color: AppTheme.ink),
                    decoration: InputDecoration(
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
                onTap: () => _send(context),
                child: Container(
                  width: 44,
                  height: 44,
                  alignment: Alignment.center,
                  decoration: const BoxDecoration(
                    color: AppTheme.ink,
                    shape: BoxShape.circle,
                  ),
                  child: const LineIcon(LineIcon.sendUp, size: 18, color: Colors.white, stroke: 2.4),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// "A Marta está a escrever…" por baixo das mensagens (mockup "Grupo").
class ChatTypingLine extends StatelessWidget {
  final String? text;
  const ChatTypingLine(this.text, {super.key});

  @override
  Widget build(BuildContext context) => AnimatedSize(
        duration: const Duration(milliseconds: 200),
        curve: Curves.easeOut,
        alignment: Alignment.bottomCenter,
        child: text == null
            ? const SizedBox(width: double.infinity)
            : Padding(
                padding: const EdgeInsets.fromLTRB(16, 2, 16, 8),
                child: Center(
                  child: Text(text!,
                      style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                ),
              ),
      );
}

/// Descida rápida (pedido 2026-11-24, prancheta «Conversa · descida
/// rápida»): botão redondo preto 44 no canto inferior direito da conversa,
/// com a seta para baixo. Aparece quando se sobe na conversa e leva até à
/// mensagem mais recente; o contador diz quantas chegaram entretanto.
/// Para listas invertidas (`reverse: true`): a mais recente está no 0.
class JumpToLatest extends StatefulWidget {
  final ScrollController controller;
  final int messageCount;
  final Widget child;
  const JumpToLatest({super.key, required this.controller, required this.messageCount, required this.child});

  @override
  State<JumpToLatest> createState() => _JumpToLatestState();
}

class _JumpToLatestState extends State<JumpToLatest> {
  bool _away = false;
  int _seenCount = 0;

  @override
  void initState() {
    super.initState();
    _seenCount = widget.messageCount;
    widget.controller.addListener(_onScroll);
  }

  @override
  void didUpdateWidget(JumpToLatest old) {
    super.didUpdateWidget(old);
    if (old.controller != widget.controller) {
      old.controller.removeListener(_onScroll);
      widget.controller.addListener(_onScroll);
    }
    if (!_away) _seenCount = widget.messageCount;
  }

  @override
  void dispose() {
    widget.controller.removeListener(_onScroll);
    super.dispose();
  }

  void _onScroll() {
    if (!widget.controller.hasClients) return;
    final away = widget.controller.offset > 300;
    if (away != _away) {
      setState(() {
        _away = away;
        if (!away) _seenCount = widget.messageCount;
      });
    }
  }

  void _jump() {
    if (!widget.controller.hasClients) return;
    if (MediaQuery.of(context).disableAnimations) {
      widget.controller.jumpTo(0);
    } else {
      widget.controller.animateTo(0, duration: const Duration(milliseconds: 400), curve: Curves.easeOutCubic);
    }
  }

  @override
  Widget build(BuildContext context) {
    final fresh = (widget.messageCount - _seenCount).clamp(0, 99);
    return Stack(children: [
      Positioned.fill(child: widget.child),
      if (_away)
        Positioned(
          right: AppTheme.screenMargin,
          bottom: 16,
          child: Semantics(
            button: true,
            label: fresh > 0 ? 'Descer até às $fresh mensagens novas' : 'Descer até à última mensagem',
            child: SnappyTap(
              onTap: _jump,
              child: Stack(clipBehavior: Clip.none, children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle, boxShadow: AppTheme.navBarShadow),
                  alignment: Alignment.center,
                  child: const Icon(Hi.arrowDown, size: 20, color: Colors.white),
                ),
                if (fresh > 0)
                  Positioned(
                    top: -6,
                    right: -6,
                    child: Container(
                      constraints: const BoxConstraints(minWidth: 20),
                      height: 20,
                      padding: const EdgeInsets.symmetric(horizontal: 5),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: AppTheme.ink, width: 2),
                      ),
                      alignment: Alignment.center,
                      child: Text('$fresh', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                  ),
              ]),
            ),
          ),
        ),
    ]);
  }
}
