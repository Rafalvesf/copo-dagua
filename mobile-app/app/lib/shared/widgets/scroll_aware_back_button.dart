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
/// Transparência (independente do scroll): **translúcido só enquanto há
/// imagem por trás** — enquanto a capa/herói ainda está atrás do botão
/// (`controller.offset < imageExtent`), é branco a ~55% com a sombra suave e
/// o ícone preto; quando a imagem sai de trás, fica o **branco cheio 44** do
/// §2. Com `imageExtent <= 0` (sem imagem) é sempre branco cheio.
///
/// A transição (rotação e transparência) é sempre animada.
class ScrollAwareBackButton extends StatefulWidget {
  /// Controlador da lista/scroll do ecrã. É por ele que lemos o offset e
  /// subimos ao topo.
  final ScrollController controller;

  /// Ação de "voltar" (quando está no topo).
  final VoidCallback onBack;

  /// Distância de scroll (px) durante a qual ainda há imagem por trás do
  /// botão. 0 = não há imagem → nunca translúcido.
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
    // Translúcido só enquanto a imagem ainda está por trás do botão.
    final overImage = widget.imageExtent > 0 && _offset < widget.imageExtent;

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
          decoration: BoxDecoration(
            color: overImage ? Colors.white.withValues(alpha: 0.55) : Colors.white,
            shape: BoxShape.circle,
            boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
          ),
          child: AnimatedRotation(
            // ← (chevron para a esquerda) + 90° no sentido dos ponteiros = ↑.
            turns: scrolled ? 0.25 : 0,
            duration: const Duration(milliseconds: 220),
            curve: Curves.easeOut,
            child: const Icon(Hi.chevronLeft, size: 20, color: AppTheme.ink),
          ),
        ),
      ),
    );
  }
}
