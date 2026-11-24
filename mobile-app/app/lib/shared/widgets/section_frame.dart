import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'alert_outline.dart';
import 'estrela.dart';
import 'snappy_tap.dart';
import 'v2_kit.dart' show V2Avatar;

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

/// Botão 36 (preto, ou com contorno) para as linhas dentro das molduras.
class FrameButton36 extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  final bool outlined;
  const FrameButton36(this.label, {super.key, required this.onTap, this.outlined = false});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        semanticLabel: label,
        child: Container(
          height: 36,
          padding: const EdgeInsets.symmetric(horizontal: 14),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: outlined ? Colors.transparent : AppTheme.ink,
            border: outlined ? Border.all(color: AppTheme.ink, width: 1.5) : null,
            borderRadius: BorderRadius.circular(18),
          ),
          child: Text(label,
              style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: outlined ? AppTheme.ink : Colors.white)),
        ),
      );
}

/// Botão 44 a toda a largura dentro de uma moldura: preto ou com contorno.
class FrameButton44 extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  final bool outlined;
  const FrameButton44(this.label, {super.key, required this.onTap, this.outlined = false});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(top: 10),
        child: SnappyTap(
          onTap: onTap,
          semanticLabel: label,
          child: Container(
            height: 44,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: outlined ? Colors.transparent : AppTheme.ink,
              border: outlined ? Border.all(color: AppTheme.ink, width: 1.5) : null,
              borderRadius: BorderRadius.circular(22),
            ),
            child: Text(label,
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: outlined ? AppTheme.ink : Colors.white)),
          ),
        ),
      );
}

/// Um aviso dentro de uma moldura (o mesmo do «Para fazer» do painel): a
/// sua linha amarela ou vermelha com o brilho, sem fundo; à esquerda a
/// imagem, título 16 e meta 13 numa linha só, e o botão preto 36.
class FrameTaskRow extends StatelessWidget {
  final Widget lead;
  final String title;
  final String sub;
  final String action;
  final VoidCallback onTap;
  final bool urgent;
  const FrameTaskRow({
    super.key,
    required this.lead,
    required this.title,
    required this.sub,
    required this.action,
    required this.onTap,
    this.urgent = false,
  });

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(top: 8),
        child: SnappyTap(
          onTap: onTap,
          child: AlertOutline(
            tone: urgent ? AlertTone.urgent : AlertTone.pending,
            fill: Colors.transparent,
            radius: 22,
            padding: const EdgeInsets.all(10),
            child: Row(children: [
              lead,
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                  Text(title, maxLines: 1, overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              const SizedBox(width: 8),
              FrameButton36(action, onTap: onTap),
            ]),
          ),
        ),
      );
}

/// Um número numa caixa com a linha da moldura (como os «Números» do
/// painel): rótulo 12 em maiúsculas, valor 28 negrito e uma linha 13.
class FrameNumber {
  final String label;
  final String value;
  final String sub;
  final VoidCallback? onTap;
  const FrameNumber(this.label, this.value, this.sub, {this.onTap});
}

/// Os números 2 por linha, as caixas de cada fila com a mesma altura.
class FrameNumbers extends StatelessWidget {
  final List<FrameNumber> items;
  const FrameNumbers(this.items, {super.key});

  Widget _box(FrameNumber n) {
    final box = Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: SectionFrame.lineColor, width: 1.5),
      ),
      child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
        Text(n.label.toUpperCase(),
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        const SizedBox(height: 4),
        FittedBox(
          fit: BoxFit.scaleDown,
          child: Text(n.value, maxLines: 1, style: const TextStyle(fontSize: 28, height: 1.1, fontWeight: FontWeight.w400, color: AppTheme.ink)),
        ),
        const SizedBox(height: 4),
        Text(n.sub, maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 13, height: 1.3, color: AppTheme.inkMuted)),
      ]),
    );
    return n.onTap == null ? box : SnappyTap(onTap: n.onTap!, semanticLabel: '${n.label}: ${n.value}', child: box);
  }

  @override
  Widget build(BuildContext context) => Column(children: [
        for (var i = 0; i < items.length; i += 2) ...[
          if (i > 0) const SizedBox(height: 10),
          IntrinsicHeight(
            child: Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Expanded(child: _box(items[i])),
              const SizedBox(width: 10),
              Expanded(child: i + 1 < items.length ? _box(items[i + 1]) : const SizedBox.shrink()),
            ]),
          ),
        ],
      ]);
}

/// Moldura vazia: a mascote animada (a dormir; a piscar o olho quando está
/// tudo tratado), o título 16, o que vai aparecer (13) e a ação.
class FrameEmpty extends StatelessWidget {
  final String title;
  final String text;
  final Estrela reaction;
  final double size;
  final List<Widget> actions;
  const FrameEmpty({
    super.key,
    required this.title,
    required this.text,
    this.reaction = Estrela.dormir,
    this.size = 96,
    this.actions = const [],
  });

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(top: 4),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Center(child: EstrelaMascot(reaction, size: size)),
          const SizedBox(height: 8),
          Text(title, textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 2),
          Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 13, height: 1.35, color: AppTheme.inkMuted)),
          ...actions,
        ]),
      );
}

/// Nota 13 `#57534E` dentro de uma moldura.
class FrameNote extends StatelessWidget {
  final String text;
  final double top;
  const FrameNote(this.text, {super.key, this.top = 0});

  @override
  Widget build(BuildContext context) => Padding(
        padding: EdgeInsets.only(top: top),
        child: Text(text, style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted)),
      );
}

/// Quantas linhas mostra uma lista de pessoas ou parceiros antes do «+X»
/// (regra geral, pedido do Rafael 2026-11-23).
const kListPreview = 4;

/// Fim de uma lista com mais de [kListPreview] pessoas ou parceiros: as
/// fotos dos seguintes sobrepostas (até 3, 28 com aro), «+X pessoas» 14
/// negrito e «Ver todos» (36). Em toda a app.
class MoreFacesRow extends StatelessWidget {
  /// (nome, foto) dos que ficaram de fora.
  final List<(String, String?)> rest;
  final String noun;
  final String nounPlural;
  final String action;
  final VoidCallback onTap;
  final Color ring;
  const MoreFacesRow({
    super.key,
    required this.rest,
    required this.onTap,
    this.noun = 'pessoa',
    this.nounPlural = 'pessoas',
    this.action = 'Ver todos',
    this.ring = AppTheme.background,
  });

  @override
  Widget build(BuildContext context) {
    final faces = rest.take(3).toList();
    final n = rest.length;
    return Padding(
      padding: const EdgeInsets.only(top: 10),
      child: SnappyTap(
        onTap: onTap,
        semanticLabel: '$action: mais $n',
        child: Row(children: [
          SizedBox(
            width: 32 + (faces.length - 1) * 22,
            height: 32,
            child: Stack(children: [
              for (var i = 0; i < faces.length; i++)
                Positioned(
                  left: i * 22.0,
                  child: Container(
                    decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: ring, width: 2)),
                    child: V2Avatar(faces[i].$1, size: 28, imageUrl: faces[i].$2),
                  ),
                ),
            ]),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Text('+$n ${n == 1 ? noun : nounPlural}',
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          FrameButton36(action, onTap: onTap),
        ]),
      ),
    );
  }
}
