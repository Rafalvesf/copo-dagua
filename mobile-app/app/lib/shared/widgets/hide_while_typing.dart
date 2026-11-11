import 'package:flutter/widgets.dart';

/// Esconde a barra de baixo enquanto se escreve (deep fix 2026-11-11:
/// "navbars sem teclado a aparecer"): com um campo de texto ativo ou o
/// teclado aberto, a barra sai e o campo fica à vista.
class HideWhileTyping extends StatefulWidget {
  final Widget child;
  const HideWhileTyping({super.key, required this.child});

  @override
  State<HideWhileTyping> createState() => _HideWhileTypingState();
}

class _HideWhileTypingState extends State<HideWhileTyping> {
  bool _typing = false;

  static bool _isText(FocusNode? n) {
    final c = n?.context;
    if (c == null || !c.mounted) return false;
    if (c.widget is EditableText) return true;
    return c.findAncestorStateOfType<EditableTextState>() != null;
  }

  void _onFocus() {
    final t = _isText(FocusManager.instance.primaryFocus);
    if (t != _typing && mounted) setState(() => _typing = t);
  }

  @override
  void initState() {
    super.initState();
    FocusManager.instance.addListener(_onFocus);
    _typing = _isText(FocusManager.instance.primaryFocus);
  }

  @override
  void dispose() {
    FocusManager.instance.removeListener(_onFocus);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final keyboard = MediaQuery.viewInsetsOf(context).bottom > 0;
    final hide = _typing || keyboard;
    return IgnorePointer(
      ignoring: hide,
      child: AnimatedSlide(
        offset: hide ? const Offset(0, 1.4) : Offset.zero,
        duration: const Duration(milliseconds: 180),
        curve: Curves.easeOut,
        child: AnimatedOpacity(
          opacity: hide ? 0 : 1,
          duration: const Duration(milliseconds: 150),
          child: widget.child,
        ),
      ),
    );
  }
}
