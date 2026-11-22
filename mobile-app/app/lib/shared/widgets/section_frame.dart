import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Secção numa moldura cinzenta (pedido do Rafael, 2026-11-22, mockup
/// «Painel do organizador · secções com moldura»): a mesma linha 1,5 do
/// destaque, mas `#CFCFCF`, cantos 22, interior 16, **sem fundo** — para se
/// perceber o que é cada coisa. O título de grupo em maiúsculas (12,
/// espaçamento 2) vai lá dentro, alinhado com o conteúdo.
class SectionFrame extends StatelessWidget {
  final String title;
  final Widget? trailing;
  final List<Widget> children;
  final double top;

  const SectionFrame({super.key, required this.title, this.trailing, required this.children, this.top = 16});

  static const lineColor = Color(0xFFCFCFCF);

  @override
  Widget build(BuildContext context) => Container(
        margin: EdgeInsets.only(top: top),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: lineColor, width: 1.5),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
          Row(children: [
            Expanded(
              child: Text(
                title.toUpperCase(),
                style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted),
              ),
            ),
            ?trailing,
          ]),
          const SizedBox(height: 8),
          ...children,
        ]),
      );
}

/// Botão com contorno 44 a toda a largura dentro de uma moldura
/// («+ Adicionar momento»).
class FrameOutlineButton extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  const FrameOutlineButton(this.label, {super.key, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        child: InkWell(
          onTap: onTap,
          customBorder: const StadiumBorder(),
          child: Container(
            height: 44,
            alignment: Alignment.center,
            decoration: const ShapeDecoration(
              shape: StadiumBorder(side: BorderSide(color: AppTheme.ink, width: 1.5)),
            ),
            child: Text(label, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
        ),
      );
}
