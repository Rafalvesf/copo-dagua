import 'package:flutter/widgets.dart';

import 'theme_color_stub.dart' if (dart.library.js_interop) 'theme_color_web.dart' as impl;

/// Cor da barra do topo do telemóvel (`<meta name="theme-color">` na
/// web). Pedido do utilizador (2026-10-17): a barra fica com a cor do
/// fundo da página nesse momento — verde na abertura, branca no resto.
///
/// Enquanto uma abertura/brinde está no ecrã a cor fica presa
/// ([lockBarColor]) — os ecrãs por baixo não a podem mudar para branco.
void setBarColor(Color c) {
  if (_locked) return;
  _apply(c);
}

bool _locked = false;

void lockBarColor(Color c) {
  _locked = true;
  _apply(c);
}

void unlockBarColor([Color c = const Color(0xFFFFFFFF)]) {
  _locked = false;
  _apply(c);
}

void _apply(Color c) {
  final hex = '#${(c.toARGB32() & 0xFFFFFF).toRadixString(16).padLeft(6, '0').toUpperCase()}';
  impl.setThemeColor(hex);
}

/// Põe a barra com [color] enquanto este widget está no ecrã e volta ao
/// branco quando sai.
class BarColorScope extends StatefulWidget {
  final Color color;
  final Widget child;
  const BarColorScope({super.key, required this.color, required this.child});

  @override
  State<BarColorScope> createState() => _BarColorScopeState();
}

class _BarColorScopeState extends State<BarColorScope> {
  @override
  void initState() {
    super.initState();
    setBarColor(widget.color);
  }

  @override
  void didUpdateWidget(BarColorScope old) {
    super.didUpdateWidget(old);
    if (old.color != widget.color) setBarColor(widget.color);
  }

  @override
  void dispose() {
    setBarColor(const Color(0xFFFFFFFF));
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => widget.child;
}
