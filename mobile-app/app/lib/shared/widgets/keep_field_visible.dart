import 'package:flutter/widgets.dart';

/// Quando o teclado abre e o ecrã encolhe (no telemóvel pela web a app
/// encolhe até ao topo do teclado, sem `viewInsets`), traz o campo onde se
/// está a escrever para a vista (deep fix 2026-11-11: "a caixa de texto
/// sobe quando vou escrever").
class KeepFieldVisible extends StatefulWidget {
  final Widget child;
  const KeepFieldVisible({super.key, required this.child});

  @override
  State<KeepFieldVisible> createState() => _KeepFieldVisibleState();
}

class _KeepFieldVisibleState extends State<KeepFieldVisible> with WidgetsBindingObserver {
  Size? _last;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    FocusManager.instance.addListener(_onFocus);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    FocusManager.instance.removeListener(_onFocus);
    super.dispose();
  }

  BuildContext? _field() {
    final c = FocusManager.instance.primaryFocus?.context;
    if (c == null || !c.mounted) return null;
    if (c.widget is EditableText || c.findAncestorStateOfType<EditableTextState>() != null) return c;
    return null;
  }

  void _reveal() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final c = _field();
      if (c == null || !c.mounted) return;
      // "Lock" (pedido 2026-11-12): o campo onde se escreve (pesquisa,
      // mensagens, formulários) sobe para perto do topo e fica lá, bem
      // longe do teclado — em vez de ficar encostado ao teclado ou tapado.
      Scrollable.ensureVisible(
        c,
        duration: const Duration(milliseconds: 220),
        curve: Curves.easeOut,
        alignment: 0.12,
      );
    });
  }

  void _onFocus() {
    // Dá tempo ao teclado de abrir e ao ecrã de encolher.
    if (_field() != null) Future.delayed(const Duration(milliseconds: 350), _reveal);
  }

  @override
  void didChangeMetrics() {
    final view = WidgetsBinding.instance.platformDispatcher.views.firstOrNull;
    if (view == null) return;
    final size = view.physicalSize;
    if (_last != null && size.height < _last!.height) _reveal();
    _last = size;
  }

  @override
  Widget build(BuildContext context) => widget.child;
}
