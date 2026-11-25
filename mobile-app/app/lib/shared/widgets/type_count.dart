import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// O número de um contador «−» / «+» que também se escreve (pedido do
/// Rafael, 2026-11-25: «quero poder editar o número de pessoas com texto»).
/// Fica com o mesmo aspeto (16 negrito ao centro); ao tocar abre o teclado
/// de números.
class TypeCount extends StatefulWidget {
  final int value;
  final ValueChanged<int> onChanged;
  final int min;
  final int max;
  final double width;
  const TypeCount({super.key, required this.value, required this.onChanged, this.min = 0, this.max = 9999, this.width = 48});

  @override
  State<TypeCount> createState() => _TypeCountState();
}

class _TypeCountState extends State<TypeCount> {
  late final _ctrl = TextEditingController(text: '${widget.value}');
  final _focus = FocusNode();

  @override
  void initState() {
    super.initState();
    _focus.addListener(() {
      if (!_focus.hasFocus) _ctrl.text = '${widget.value}';
    });
  }

  @override
  void didUpdateWidget(TypeCount old) {
    super.didUpdateWidget(old);
    if (!_focus.hasFocus && _ctrl.text != '${widget.value}') _ctrl.text = '${widget.value}';
  }

  @override
  void dispose() {
    _ctrl.dispose();
    _focus.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: widget.width,
      child: TextField(
        controller: _ctrl,
        focusNode: _focus,
        keyboardType: TextInputType.number,
        textAlign: TextAlign.center,
        maxLength: '${widget.max}'.length,
        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink, fontFeatures: [FontFeature.tabularFigures()]),
        decoration: const InputDecoration(border: InputBorder.none, isCollapsed: true, counterText: ''),
        onTap: () => _ctrl.selection = TextSelection(baseOffset: 0, extentOffset: _ctrl.text.length),
        onChanged: (t) {
          final v = int.tryParse(t.replaceAll(RegExp(r'[^0-9]'), ''));
          if (v != null && v >= widget.min && v <= widget.max) widget.onChanged(v);
        },
      ),
    );
  }
}
