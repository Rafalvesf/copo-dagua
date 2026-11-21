import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';

/// Botão de voltar que reage ao scroll (DESIGN.md §6).
///
/// Fica **sempre** no ecrã (é um overlay fixo, não desce com a lista). Ao
/// descer a página:
///  - o ícone **roda de ← para ↑** (animado);
///  - o toque deixa de ser "voltar" e passa a **subir a página até ao topo**;
///  - ao chegar ao topo, volta a ser a seta de voltar.
///
/// Aspeto: o **preto 44 com o ícone branco** do §2, sempre — sobre fotos
/// também (pedido 2026-11-21; já não há botões translúcidos).
///
/// A rotação é sempre animada.
class ScrollAwareBackButton extends StatefulWidget {
  /// Controlador da lista/scroll do ecrã. É por ele que lemos o offset e
  /// subimos ao topo.
  final ScrollController controller;

  /// Ação de "voltar" (quando está no topo).
  final VoidCallback onBack;

  /// Distância de scroll (px) durante a qual ainda há imagem por trás do
  /// botão. Já não muda o aspeto (o botão é sempre preto); fica para quem a
  /// passa.
  final double imageExtent;

  /// A partir de quantos px o ícone roda para ↑ e o toque sobe ao topo.
  final double rotateAfter;

  final String backLabel;

  const ScrollAwareBackButton({
    super.key,
    required this.controller,
    required this.onBack,
    this.imageExtent = 0,
    this.rotateAfter = 80,
    this.backLabel = 'Voltar',
  });

  @override
  State<ScrollAwareBackButton> createState() => _ScrollAwareBackButtonState();
}

class _ScrollAwareBackButtonState extends State<ScrollAwareBackButton> {
  double _offset = 0;

  @override
  void initState() {
    super.initState();
    widget.controller.addListener(_onScroll);
  }

  @override
  void didUpdateWidget(ScrollAwareBackButton old) {
    super.didUpdateWidget(old);
    if (old.controller != widget.controller) {
      old.controller.removeListener(_onScroll);
      widget.controller.addListener(_onScroll);
    }
  }

  @override
  void dispose() {
    widget.controller.removeListener(_onScroll);
    super.dispose();
  }

  void _onScroll() {
    if (!widget.controller.hasClients) return;
    final o = widget.controller.offset;
    if (o != _offset && mounted) setState(() => _offset = o);
  }

  @override
  Widget build(BuildContext context) {
    final scrolled = _offset > widget.rotateAfter;

    return Semantics(
      button: true,
      label: scrolled ? 'Voltar ao topo' : widget.backLabel,
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () {
          if (scrolled) {
            widget.controller.animateTo(0,
                duration: const Duration(milliseconds: 320), curve: Curves.easeOut);
          } else {
            widget.onBack();
          }
        },
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          width: 44,
          height: 44,
          // Sempre preto com o ícone branco, sobre fotos também (DESIGN.md §2,
          // pedido 2026-11-21).
          decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
          child: AnimatedRotation(
            // ← (chevron para a esquerda) + 90° no sentido dos ponteiros = ↑.
            turns: scrolled ? 0.25 : 0,
            duration: const Duration(milliseconds: 220),
            curve: Curves.easeOut,
            child: const Icon(Hi.chevronLeft, size: 20, color: Colors.white),
          ),
        ),
      ),
    );
  }
}
