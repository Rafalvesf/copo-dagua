import 'package:flutter/material.dart';

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

  const SnappyTap({
    super.key,
    required this.child,
    this.onTap,
    this.darkenAmount = 0.1,
  }) : builder = null;

  const SnappyTap.builder({
    super.key,
    required this.builder,
    this.onTap,
    this.darkenAmount = 0.1,
  }) : child = null;

  @override
  State<SnappyTap> createState() => _SnappyTapState();
}

class _SnappyTapState extends State<SnappyTap> {
  bool _pressed = false;
  bool _hovered = false;

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
    return MouseRegion(
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
          child: content,
        ),
      ),
    );
  }
}
