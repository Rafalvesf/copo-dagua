import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// Envolve um botão/pill/card tocável com o feedback padrão da app: ao
/// pairar o rato (web/desktop), é a sombra do próprio elemento que fica
/// mais definida (via [builder]) — não um escurecimento da superfície.
/// Ao pressionar, a superfície escurece ligeiramente, sempre a mesma cor
/// base, sem alterar tamanho, posição ou border-radius.
class SnappyTap extends StatefulWidget {
  final Widget? child;
  // Alternativa a `child`: para cartões cuja própria sombra (na sua
  // BoxDecoration) deve ficar mais carregada ao pairar — em vez de uma
  // sombra nova sobreposta, é o próprio widget que escolhe a sombra
  // certa (respeita a forma/raio de cada cartão).
  final Widget Function(BuildContext context, bool hovered)? builder;
  final VoidCallback? onTap;
  final double darkenAmount;

  /// Nome para leitores de ecrã quando o conteúdo é só um ícone
  /// (acessibilidade, 2026-11-03). Sem ele, lê-se o texto que estiver lá dentro.
  final String? semanticLabel;

  const SnappyTap({
    super.key,
    required this.child,
    this.onTap,
    this.darkenAmount = 0.1,
    this.semanticLabel,
  }) : builder = null;

  const SnappyTap.builder({
    super.key,
    required this.builder,
    this.onTap,
    this.darkenAmount = 0.1,
    this.semanticLabel,
  }) : child = null;

  @override
  State<SnappyTap> createState() => _SnappyTapState();
}

class _SnappyTapState extends State<SnappyTap> {
  bool _pressed = false;
  bool _hovered = false;
  bool _focused = false;

  // Só o toque/clique escurece a superfície — o hover é comunicado só
  // pela sombra (via builder) e pelo cursor, nunca por um tom mais
  // escuro.
  double get _amount => _pressed ? widget.darkenAmount : 0.0;

  void _setPressed(bool value) {
    if (_pressed == value) return;
    setState(() => _pressed = value);
  }

  void _setHovered(bool value) {
    if (_hovered == value) return;
    setState(() => _hovered = value);
  }

  @override
  Widget build(BuildContext context) {
    final content = widget.builder != null
        ? widget.builder!(context, _hovered)
        : widget.child!;
    // Anunciado como botão aos leitores de ecrã (acessibilidade, 2026-11-03).
    // Teclado (acessibilidade, 2026-11-08): Tab chega aqui, Enter/Espaço
    // ativa e um contorno verde mostra onde está o foco.
    final focusable = Focus(
      canRequestFocus: widget.onTap != null,
      skipTraversal: widget.onTap == null,
      onFocusChange: (f) {
        if (_focused != f) setState(() => _focused = f);
      },
      onKeyEvent: (node, event) {
        if (widget.onTap == null || event is! KeyDownEvent) return KeyEventResult.ignored;
        final k = event.logicalKey;
        if (k == LogicalKeyboardKey.enter || k == LogicalKeyboardKey.numpadEnter || k == LogicalKeyboardKey.space) {
          widget.onTap!();
          return KeyEventResult.handled;
        }
        return KeyEventResult.ignored;
      },
      child: _focused && FocusManager.instance.highlightMode == FocusHighlightMode.traditional
          ? DecoratedBox(
              position: DecorationPosition.foreground,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFF4F6B4A), width: 2),
              ),
              child: content,
            )
          : content,
    );
    return Semantics(
      button: widget.onTap != null,
      enabled: widget.onTap != null,
      label: widget.semanticLabel,
      child: MouseRegion(
      cursor: widget.onTap == null
          ? MouseCursor.defer
          : SystemMouseCursors.click,
      onEnter: (_) => _setHovered(true),
      onExit: (_) => _setHovered(false),
      child: GestureDetector(
        onTap: widget.onTap,
        onTapDown: (_) => _setPressed(true),
        onTapUp: (_) => _setPressed(false),
        onTapCancel: () => _setPressed(false),
        // Redesign 2026-10 (painel "Movimento"): encolhe para 96% ao tocar
        // e volta com um ligeiro ressalto.
        child: AnimatedScale(
          scale: _pressed ? 0.96 : 1.0,
          duration: Duration(milliseconds: _pressed ? 120 : 220),
          curve: _pressed ? Curves.easeOut : Curves.easeOutBack,
          child: TweenAnimationBuilder<double>(
          tween: Tween(end: _amount),
          duration: const Duration(milliseconds: 100),
          builder: (context, amount, child) {
            if (amount <= 0) return child!;
            return ColorFiltered(
              colorFilter: ColorFilter.mode(
                Colors.black.withValues(alpha: amount),
                BlendMode.srcATop,
              ),
              child: child,
            );
          },
          child: focusable,
        ),
        ),
      ),
    ));
  }
}
