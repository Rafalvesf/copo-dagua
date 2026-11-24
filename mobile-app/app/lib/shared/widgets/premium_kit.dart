import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'estrela.dart';
import 'page_kit.dart' show KitTag, KitTagKind;

/// Blocos das páginas «chamativas» (mockups «Definições · Pagamentos e
/// Premium», 2026-11-21; DESIGN.md §6.3). Usar estes em vez de refazer à
/// mão: o mesmo bloco tem sempre o mesmo aspeto.

const _caps = TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted);
const _meta = TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted, height: 1.4);

/// Número grande (40) com a unidade (13) ao lado.
class BigNumber extends StatelessWidget {
  final String number;
  final String unit;
  final bool center;
  const BigNumber(this.number, this.unit, {super.key, this.center = false});

  @override
  Widget build(BuildContext context) => Row(
        mainAxisSize: center ? MainAxisSize.min : MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.baseline,
        textBaseline: TextBaseline.alphabetic,
        children: [
          Text(number, softWrap: false,
              style: const TextStyle(fontSize: 40, fontWeight: FontWeight.w400, height: 1.1, color: AppTheme.ink)),
          const SizedBox(width: 6),
          Flexible(child: Text(unit, style: _meta)),
        ],
      );
}

/// Topo chamativo: cartão branco (cantos 22, interior 18, sem sombra) com a
/// estrela grande ao centro, rótulo em maiúsculas, número 40, etiqueta
/// verde e uma linha 13.
class HeroSummary extends StatelessWidget {
  final Estrela star;
  final String label;
  final String number;
  final String unit;
  final String? tag;
  final String? line;
  const HeroSummary({
    super.key,
    this.star = Estrela.fixe,
    required this.label,
    required this.number,
    required this.unit,
    this.tag,
    this.line,
  });

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: Column(children: [
          EstrelaMascot(star, size: 150),
          const SizedBox(height: 8),
          Text(label.toUpperCase(), style: _caps, textAlign: TextAlign.center),
          const SizedBox(height: 4),
          BigNumber(number, unit, center: true),
          if (tag != null) ...[const SizedBox(height: 8), KitTag(tag!)],
          if (line != null) ...[const SizedBox(height: 8), Text(line!, style: _meta, textAlign: TextAlign.center)],
        ]),
      );
}

/// Cartão de número: rótulo em maiúsculas, número 40 + unidade, linha 13
/// («As contas», «Grátis ainda»).
class NumberCard extends StatelessWidget {
  final String label;
  final String number;
  final String unit;
  final String? line;
  final Color color;
  const NumberCard({super.key, required this.label, required this.number, required this.unit, this.line, this.color = Colors.white});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(22)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(label.toUpperCase(), style: _caps),
          const SizedBox(height: 4),
          BigNumber(number, unit),
          if (line != null) ...[const SizedBox(height: 6), Text(line!, style: _meta)],
        ]),
      );
}

/// Quadro «Sem e com»: grupo branco, cabeçalho SEM/COM e linhas de 56 com o
/// nome 16, o valor sem (14, #57534E) e o valor com numa etiqueta verde.
class CompareTable extends StatelessWidget {
  final List<(String, String, String)> rows;
  final String without;
  final String with_;
  const CompareTable(this.rows, {super.key, this.without = 'Sem', this.with_ = 'Com'});

  @override
  Widget build(BuildContext context) {
    Widget head(String t, double w) =>
        SizedBox(width: w, child: Text(t.toUpperCase(), textAlign: TextAlign.center, style: _caps));
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(children: [
        SizedBox(height: 40, child: Row(children: [const Spacer(), head(without, 64), head(with_, 96)])),
        for (final (name, a, b) in rows)
          Container(
            constraints: const BoxConstraints(minHeight: 56),
            decoration: const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFFD9D9D9)))),
            child: Row(children: [
              Expanded(child: Text(name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink))),
              SizedBox(
                width: 64,
                child: Text(a, textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
              ),
              SizedBox(width: 96, child: Center(child: KitTag(b))),
            ]),
          ),
      ]),
    );
  }
}

/// Barra fixa de baixo: branca, cantos 35, 20 dos lados e em baixo, sombra
/// da navbar; um botão de 52 e, se houver, uma linha 13 por baixo.
class StickyActionBar extends StatelessWidget {
  final Widget button;
  final String? note;
  const StickyActionBar({super.key, required this.button, this.note});

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.paddingOf(context).bottom;
    return Positioned(
      left: AppTheme.screenMargin,
      right: AppTheme.screenMargin,
      bottom: bottom > 20 ? bottom : 20,
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(35),
          boxShadow: const [BoxShadow(color: Color(0x1F171713), blurRadius: 24, offset: Offset(0, 8))],
        ),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          button,
          if (note != null) ...[const SizedBox(height: 8), Text(note!, textAlign: TextAlign.center, style: _meta)],
        ]),
      ),
    );
  }
}

/// Cartão em destaque (Definições): sombra suave, estrela 76 à esquerda com
/// etiqueta, título 19 e meta 13; por baixo o conteúdo e o botão de 44.
class FeaturedCard extends StatelessWidget {
  final Estrela star;
  final String tag;
  final KitTagKind tagKind;
  final String title;
  final String meta;
  final List<Widget> children;
  const FeaturedCard({
    super.key,
    this.star = Estrela.fixe,
    required this.tag,
    this.tagKind = KitTagKind.green,
    required this.title,
    required this.meta,
    this.children = const [],
  });

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(22),
          boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            EstrelaMascot(star, size: 76),
            const SizedBox(width: 14),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                KitTag(tag, kind: tagKind),
                const SizedBox(height: 4),
                Text(title, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w400, color: AppTheme.ink)),
                Text(meta, style: _meta),
              ]),
            ),
          ]),
          for (final c in children) ...[const SizedBox(height: 14), c],
        ]),
      );
}

/// Botões de página (pílula): preto ou com contorno, 52 (ou 44 em cartões).
class PillButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final bool outlined;
  final double height;
  const PillButton(this.label, {super.key, this.onPressed, this.outlined = false, this.height = 52});

  @override
  Widget build(BuildContext context) {
    final text = TextStyle(fontSize: height >= 52 ? 15 : 14, fontWeight: FontWeight.w700);
    if (outlined) {
      return OutlinedButton(
        onPressed: onPressed,
        style: OutlinedButton.styleFrom(
          minimumSize: Size.fromHeight(height),
          foregroundColor: AppTheme.ink,
          side: const BorderSide(color: AppTheme.ink, width: 1.5),
          shape: const StadiumBorder(),
          textStyle: text,
        ),
        child: Text(label),
      );
    }
    return FilledButton(
      onPressed: onPressed,
      style: FilledButton.styleFrom(
        minimumSize: Size.fromHeight(height),
        backgroundColor: AppTheme.ink,
        foregroundColor: Colors.white,
        shape: const StadiumBorder(),
        textStyle: text,
      ),
      child: Text(label),
    );
  }
}
