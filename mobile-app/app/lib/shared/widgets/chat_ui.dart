import '../../core/moderation/word_filter.dart';
import 'package:flutter/material.dart';
import '../hero_icons.dart';
import 'line_icon.dart';

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
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3A3733)),
              ),
            ),
          ),
        ),
      );
    }
    final me = isMine(m);
    // Prancheta «Conversa» (2026-11-24): a hora por baixo de cada mensagem.
    out.add(
      Align(
        alignment: me ? Alignment.centerRight : Alignment.centerLeft,
        child: content(m, me),
      ),
    );
    {
      // Grupos: «Visto por 4» em texto. Conversas a dois: o ícone (pedido
      // 2026-11-24) — um visto cinzento «enviada», dois verdes «vista».
      final groupSeen = me && seenLabel != null ? seenLabel(m) : '';
      final seenByOther = me && seenLabel == null && seenUntil != null && !seenUntil.isBefore(m.sentAt);
      const meta = TextStyle(fontSize: 12, fontWeight: FontWeight.w400, color: AppTheme.inkMuted);
      out.add(
        Padding(
          padding: const EdgeInsets.fromLTRB(4, 3, 4, 8),
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
    this.status,
    this.tone = ChatCardTone.neutral,
    this.icon = Hi.tag,
    this.rows = const [],
    this.eventLabel,
  });

  /// Etiqueta do evento (uma só conversa por pessoa, 2026-11-25): «Casamento
  /// · Sáb, 12 jun 2027», para se saber de que evento é o cartão.
  final String? eventLabel;

  /// Ícone do tipo no círculo 28 (prancheta «Todos os cartões»): pedido,
  /// reserva, proposta, confirmada, recusada, pagamento, alteração, dia.
  final IconData icon;

  /// Linhas rótulo / valor (além de Total e Sinal): «Pessoas · 122»,
  /// «Hora · 14:00 – 00:00», «Diferença · + 0 €».
  final List<(String, String)> rows;

  /// Linha pequena por baixo dos valores (ex.: "Inclui a comissão …").
  final String? note;

  /// Foto do parceiro no topo do cartão (mockup "Conversa").
  final String? imageUrl;

  /// Estado do cartão (prancheta «Cartões nas mensagens», 2026-11-24):
  /// «Por responder · até 27 nov», «Aceite · falta o sinal», «Reservado»…
  final String? status;
  final ChatCardTone tone;

  @override
  Widget build(BuildContext context) {
    final (Color? line, Color pillBg, Color pillFg, Color dot, Border? pillBorder) = switch (tone) {
      ChatCardTone.pending => (const Color(0xFFF2A01B), Colors.white, AppTheme.ink, const Color(0xFFF2A01B), Border.all(color: const Color(0xFFF2A01B), width: 1.5)),
      ChatCardTone.urgent => (const Color(0xFFC8553D), Colors.white, AppTheme.ink, const Color(0xFFC8553D), Border.all(color: const Color(0xFFC8553D), width: 1.5)),
      ChatCardTone.done => (null, const Color(0xFFE6EDE1), const Color(0xFF3F7A4F), const Color(0xFF3F7A4F), null),
      ChatCardTone.doneLine => (AppTheme.brandGreen, const Color(0xFFE6EDE1), const Color(0xFF3F7A4F), const Color(0xFF3F7A4F), null),
      ChatCardTone.neutral => (null, const Color(0xFFE6E6E6), const Color(0xFF3A3733), AppTheme.inkMuted, null),
    };
    Widget valueRow(String l, String v) => Container(
          padding: const EdgeInsets.symmetric(vertical: 8),
          decoration: const BoxDecoration(border: Border(top: BorderSide(color: AppTheme.line))),
          child: Row(children: [
            Expanded(child: Text(l, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
            Text(v, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
        );
    return SizedBox(
      width: (MediaQuery.of(context).size.width * 0.78).clamp(260.0, 320.0),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(22),
          border: line == null ? null : Border.all(color: line, width: 1.5),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            Container(
              width: 28,
              height: 28,
              decoration: const BoxDecoration(color: AppTheme.background, shape: BoxShape.circle),
              alignment: Alignment.center,
              child: Icon(icon, size: 16, color: const Color(0xFF3A3733)),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Text(eyebrow.toUpperCase(),
                  style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            ),
          ]),
          if (status != null) ...[
            const SizedBox(height: 10),
            Align(
              alignment: Alignment.centerLeft,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(color: pillBg, borderRadius: BorderRadius.circular(999), border: pillBorder),
                child: Row(mainAxisSize: MainAxisSize.min, children: [
                  Container(width: 7, height: 7, decoration: BoxDecoration(color: dot, shape: BoxShape.circle)),
                  const SizedBox(width: 6),
                  Text(status!, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: pillFg)),
                ]),
              ),
            ),
          ],
          const SizedBox(height: 10),
          Text(title,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          if (subtitle != null && subtitle!.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 2),
              child: Text(subtitle!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ),
          if (eventLabel != null && eventLabel!.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 8),
              child: Align(
                alignment: Alignment.centerLeft,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(999)),
                  child: Row(mainAxisSize: MainAxisSize.min, children: [
                    const Icon(Hi.calendar, size: 12, color: Color(0xFF3A3733)),
                    const SizedBox(width: 6),
                    Flexible(
                      child: Text(eventLabel!,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3A3733))),
                    ),
                  ]),
                ),
              ),
            ),
          const SizedBox(height: 10),
          for (final r in rows) valueRow(r.$1, r.$2),
          if (price != null) valueRow('Total', euros(price!)),
          if (deposit != null) valueRow('Sinal para confirmar', euros(deposit!)),
          if (note != null) ...[
            const SizedBox(height: 4),
            Text(note!, style: const TextStyle(fontSize: 12, height: 1.4, color: AppTheme.inkMuted)),
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
                        height: 36,
                        alignment: Alignment.center,
                        padding: const EdgeInsets.symmetric(horizontal: 8),
                        decoration: BoxDecoration(
                          color: actions[i].primary && actions[i].onTap != null ? AppTheme.action : Colors.white,
                          borderRadius: BorderRadius.circular(999),
                          border: actions[i].primary && actions[i].onTap != null
                              ? null
                              : Border.all(color: actions[i].onTap == null ? AppTheme.line : AppTheme.ink, width: 1.5),
                        ),
                        child: Text(
                          actions[i].label,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(
                            fontSize: 13,
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
    );
  }
}

/// Tom do cartão da conversa (DESIGN §7): amarelo por responder/pagar,
/// vermelho com o prazo a 3 dias ou menos, verde feito (com a linha verde
/// na reserva confirmada), cinzento enviado/recusado.
enum ChatCardTone { pending, urgent, done, doneLine, neutral }

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

  /// Respostas rápidas por cima da caixa (pílulas 34 com contorno,
  /// prancheta «Conversa»): tocar envia o texto.
  final List<String> quickReplies;
  final ValueChanged<String>? onQuickReply;

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
    this.quickReplies = const [],
    this.onQuickReply,
  });

  @override
  Widget build(BuildContext context) {
    // Prancheta «Conversa» (2026-11-24): folha branca colada ao fundo,
    // cantos 35 em cima, sombra da navbar; respostas rápidas, «+», caixa 48
    // e enviar.
    final input = Row(
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
            height: 48,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            alignment: Alignment.centerLeft,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(24), border: Border.all(color: AppTheme.ink, width: 1.5)),
            child: TextField(
              controller: controller,
              onChanged: onChanged,
              onSubmitted: (_) => _send(context),
              textInputAction: TextInputAction.send,
              style: const TextStyle(fontSize: 15, color: AppTheme.ink),
              decoration: InputDecoration(
                hintText: hint,
                hintStyle: const TextStyle(fontSize: 15, color: AppTheme.inkMuted),
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
        Semantics(
          button: true,
          label: 'Enviar',
          child: SnappyTap(
            onTap: () => _send(context),
            child: Container(
              width: 44,
              height: 44,
              alignment: Alignment.center,
              decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
              child: const Icon(Hi.paperAirplane, size: 20, color: Colors.white),
            ),
          ),
        ),
      ],
    );
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: const BorderRadius.vertical(top: Radius.circular(35)),
        boxShadow: [BoxShadow(color: AppTheme.ink.withValues(alpha: 0.12), blurRadius: 24, offset: const Offset(0, 8))],
      ),
      child: SafeArea(
        top: false,
        minimum: const EdgeInsets.only(bottom: 24),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 0),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            if (quickReplies.isNotEmpty && onQuickReply != null) ...[
              SizedBox(
                height: 34,
                child: ListView.separated(
                  physics: const BouncingScrollPhysics(),
                  scrollDirection: Axis.horizontal,
                  itemCount: quickReplies.length,
                  separatorBuilder: (_, _) => const SizedBox(width: 8),
                  itemBuilder: (_, i) => SnappyTap(
                    onTap: () => onQuickReply!(quickReplies[i]),
                    child: Container(
                      height: 34,
                      padding: const EdgeInsets.symmetric(horizontal: 14),
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(17),
                        border: Border.all(color: AppTheme.ink, width: 1.5),
                      ),
                      child: Text(quickReplies[i],
                          style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 10),
            ],
            input,
          ]),
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

/// Uma linha do «Por tratar».
class PendingItem {
  final String title;
  final String status;
  final ChatCardTone tone;

  /// O cartão todo, que aparece ao tocar na linha.
  final Widget card;
  const PendingItem({required this.title, required this.status, required this.tone, required this.card});
}

/// «POR TRATAR · N» por cima da caixa de escrever (prancheta «Conversa com
/// cartões», 2026-11-24): os pedidos e propostas em aberto, uma linha cada;
/// tocar abre o cartão todo; «Esconder» deixa só a barra.
class PendingTray extends StatefulWidget {
  final List<PendingItem> items;
  const PendingTray({super.key, required this.items});

  @override
  State<PendingTray> createState() => _PendingTrayState();
}

class _PendingTrayState extends State<PendingTray> {
  bool _hidden = false;
  int? _open;

  @override
  Widget build(BuildContext context) {
    final items = widget.items;
    if (items.isEmpty) return const SizedBox.shrink();
    final maxH = MediaQuery.sizeOf(context).height * 0.5;
    return Padding(
      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 8),
      child: Container(
        constraints: BoxConstraints(maxHeight: maxH),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: SingleChildScrollView(
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Semantics(
              button: true,
              expanded: !_hidden,
              child: SnappyTap(
                onTap: () => setState(() {
                  _hidden = !_hidden;
                  _open = null;
                }),
                child: SizedBox(
                  height: 44,
                  child: Row(children: [
                    Expanded(
                      child: Text('POR TRATAR · ${items.length}',
                          style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                    ),
                    Text(_hidden ? 'Mostrar' : 'Esconder',
                        style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(width: 6),
                    LineIcon(_hidden ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6', size: 16, color: AppTheme.ink, stroke: 2.2),
                  ]),
                ),
              ),
            ),
            if (!_hidden)
              for (var i = 0; i < items.length; i++) ...[
                const Divider(height: 1, thickness: 1, color: AppTheme.line),
                Semantics(
                  button: true,
                  expanded: _open == i,
                  child: SnappyTap(
                    onTap: () => setState(() => _open = _open == i ? null : i),
                    child: ConstrainedBox(
                      constraints: const BoxConstraints(minHeight: 56),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(vertical: 6),
                        child: Row(children: [
                          Container(
                            width: 32,
                            height: 32,
                            decoration: const BoxDecoration(color: AppTheme.background, shape: BoxShape.circle),
                            alignment: Alignment.center,
                            child: const LineIcon('M3 3h8l10 10-8 8L3 11V3zM7 6.5a1 1 0 1 0 0 .01', size: 15, color: Color(0xFF3A3733), stroke: 2),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                              Text(items[i].title,
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                              const SizedBox(height: 3),
                              _TrayStatus(items[i].status, items[i].tone),
                            ]),
                          ),
                          LineIcon(_open == i ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6', size: 16, color: AppTheme.inkMuted, stroke: 2.2),
                        ]),
                      ),
                    ),
                  ),
                ),
                if (_open == i) Padding(padding: const EdgeInsets.only(bottom: 10), child: Center(child: items[i].card)),
              ],
          ]),
        ),
      ),
    );
  }
}

class _TrayStatus extends StatelessWidget {
  final String text;
  final ChatCardTone tone;
  const _TrayStatus(this.text, this.tone);

  @override
  Widget build(BuildContext context) {
    final line = switch (tone) {
      ChatCardTone.pending => const Color(0xFFF2A01B),
      ChatCardTone.urgent => const Color(0xFFC8553D),
      _ => null,
    };
    final green = tone == ChatCardTone.done || tone == ChatCardTone.doneLine;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
      decoration: BoxDecoration(
        color: line != null ? Colors.white : (green ? const Color(0xFFE6EDE1) : const Color(0xFFE6E6E6)),
        borderRadius: BorderRadius.circular(999),
        border: line == null ? null : Border.all(color: line, width: 1.5),
      ),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        Container(width: 6, height: 6, decoration: BoxDecoration(color: line ?? (green ? const Color(0xFF3F7A4F) : AppTheme.inkMuted), shape: BoxShape.circle)),
        const SizedBox(width: 5),
        Text(text,
            style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: line != null ? AppTheme.ink : (green ? const Color(0xFF3F7A4F) : const Color(0xFF3A3733)))),
      ]),
    );
  }
}
