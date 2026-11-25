import 'package:flutter/material.dart';

/// Botões a encolher ao carregar (skill `animacoes`, pedido 2026-11-25):
/// enquanto o dedo está em cima, o botão fica a 0,97 e volta em 150 ms
/// (ease-out). Envolve os botões do Material (`FilledButton`,
/// `OutlinedButton`, `TextButton`, `ElevatedButton`, `IconButton`), que
/// não deixam animar o tamanho pelo tema; os botões da app (`SnappyTap`)
/// já o fazem sozinhos. Desligado com «reduzir movimento» e em botões
/// desativados.
class PressScale extends StatefulWidget {
  const PressScale({super.key, required this.child});

  final Widget child;

  @override
  State<PressScale> createState() => _PressScaleState();
}

class _PressScaleState extends State<PressScale> {
  bool _pressed = false;

  bool get _enabled {
    final c = widget.child;
    if (c is ButtonStyleButton) return c.enabled;
    if (c is IconButton) return c.onPressed != null;
    return true;
  }

  void _set(bool v) {
    if (_pressed != v) setState(() => _pressed = v);
  }

  @override
  Widget build(BuildContext context) {
    final still = MediaQuery.maybeDisableAnimationsOf(context) ?? false;
    return Listener(
      onPointerDown: (_) {
        if (_enabled && !still) _set(true);
      },
      onPointerUp: (_) => _set(false),
      onPointerCancel: (_) => _set(false),
      child: AnimatedScale(
        scale: _pressed ? 0.97 : 1,
        duration: const Duration(milliseconds: 150),
        curve: Curves.easeOut,
        child: widget.child,
      ),
    );
  }
}
