import 'package:flutter/material.dart';

import '../../core/page_transitions.dart' show ExpandOrigin;
import '../../core/theme/app_theme.dart';
import 'alert_outline.dart';
import 'snappy_tap.dart';

/// Cartão com foto — **o mesmo em toda a app** para eventos e parceiros
/// (pedido do Rafael, 2026-11-22; DESIGN.md §4 «Cartões com foto»):
///
/// * **sem caixa nem sombra**: o texto fica direto no fundo `#F2F2F2`;
/// * foto **150** com os **quatro cantos redondos (22)**;
/// * por cima da foto: etiqueta à esquerda e pílula branca à direita;
/// * círculo **44** com aro branco 3 a sobrepor o canto de baixo da foto;
/// * título **19** negrito (com selos e uma ação à direita), meta **13**;
/// * divisória `#D9D9D9` e o rodapé: uma etiqueta à esquerda e uma caixa
///   (rótulo 9 + valor 16) à direita.
class PhotoCard extends StatelessWidget {
  final Widget photo;
  final Widget? leftTag;
  final Widget? rightTag;

  /// Por cima da foto, em baixo à direita (p. ex. partilhar).
  final Widget? photoAction;
  final Widget? avatar;
  final String title;
  final int titleLines;

  /// Ao lado do título (selos: verificado, Premium, fundador).
  final Widget? titleBadges;

  /// À direita do título (coração, partilhar).
  final Widget? titleAction;
  final List<String> meta;
  final Widget? footerLeft;
  final Widget? footerRight;

  /// Por baixo do rodapé (p. ex. o aviso «Para fazer»).
  final Widget? below;

  /// Largura fixa (carrossel) ou `null` (a que houver).
  final double? width;

  /// Altura fixa (carrosséis com altura certa) ou `null` (o conteúdo).
  final double? height;
  final VoidCallback? onTap;
  final VoidCallback? onLongPress;

  /// Moldura (pedido 2026-11-22): todos os cartões com foto têm uma linha à
  /// volta, cantos 22, interior 8, sem fundo — cinzenta subtil 1 `#E3E3E3`;
  /// com coisas por fazer, 1,5 da cor do tom. Sem brilho.
  final AlertTone? frameTone;

  /// Fundo branco dentro da moldura («Os meus eventos», pedido do Rafael
  /// 2026-11-22). Os outros cartões ficam sem fundo.
  final bool filled;

  const PhotoCard({
    super.key,
    required this.photo,
    required this.title,
    this.leftTag,
    this.rightTag,
    this.photoAction,
    this.avatar,
    this.titleLines = 1,
    this.titleBadges,
    this.titleAction,
    this.meta = const [],
    this.footerLeft,
    this.footerRight,
    this.below,
    this.width,
    this.height,
    this.onTap,
    this.onLongPress,
    this.frameTone,
    this.filled = false,
  });

  static const double photoHeight = 150;
  static const Color divider = Color(0xFFD9D9D9);

  @override
  Widget build(BuildContext context) {
    final info = Padding(
      padding: EdgeInsets.fromLTRB(12, avatar != null ? 28 : 12, 12, 0),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
        // O título e os selos ocupam o espaço que houver; a ação (coração,
        // partilhar) fica sempre encostada à direita, seja o nome curto ou
        // comprido (antes dividiam o espaço com um Spacer e o coração mudava
        // de sítio de cartão para cartão).
        Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
          Expanded(
            child: Row(children: [
              Flexible(
                child: Text(title,
                    maxLines: titleLines,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 19, height: 1.2, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              if (titleBadges != null) ...[const SizedBox(width: 4), titleBadges!],
            ]),
          ),
          if (titleAction != null) ...[const SizedBox(width: 8), titleAction!],
        ]),
        for (final m in meta)
          if (m.isNotEmpty)
            Padding(
              // 3 entre o título e cada linha de meta, como no mockup (2026-11-22).
              padding: const EdgeInsets.only(top: 3),
              child: Text(m,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ),
      ]),
    );
    final hasFooter = footerLeft != null || footerRight != null;
    final footer = !hasFooter
        ? null
        : Padding(
            padding: const EdgeInsets.fromLTRB(12, 12, 12, 0),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              const Divider(height: 1, thickness: 1, color: divider),
              const SizedBox(height: 10),
              Row(children: [
                Expanded(child: Align(alignment: Alignment.centerLeft, child: footerLeft ?? const SizedBox.shrink())),
                if (footerRight != null) ...[const SizedBox(width: 8), footerRight!],
              ]),
            ]),
          );

    final cover = SizedBox(
      height: photoHeight,
      child: Stack(clipBehavior: Clip.none, fit: StackFit.expand, children: [
        // A foto vai até à linha da moldura (proposta B, 2026-11-22), com
        // os quatro cantos redondos por dentro da linha.
        ClipRSuperellipse(borderRadius: BorderRadius.circular(21), child: photo),
        if (leftTag != null) Positioned(left: 12, top: 12, child: leftTag!),
        if (rightTag != null) Positioned(right: 12, top: 12, child: rightTag!),
        if (photoAction != null) Positioned(right: 12, bottom: 12, child: photoAction!),
        if (avatar != null)
          Positioned(
            left: 12,
            bottom: -22,
            child: Container(
              padding: const EdgeInsets.all(3),
              decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
              child: avatar,
            ),
          ),
      ]),
    );

    final body = height != null
        ? Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            cover,
            Expanded(child: Align(alignment: Alignment.topLeft, child: info)),
            if (footer != null) footer,
            if (below != null) ...[const SizedBox(height: 10), Padding(padding: const EdgeInsets.symmetric(horizontal: 8), child: below!)],
            const SizedBox(height: 8),
          ])
        : Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            cover,
            info,
            if (footer != null) footer,
            if (below != null) ...[const SizedBox(height: 10), Padding(padding: const EdgeInsets.symmetric(horizontal: 8), child: below!)],
            const SizedBox(height: 8),
          ]);

    // Moldura: cinzenta 1 sem nada por fazer; com coisas por fazer, a linha
    // 1,5 da cor do tom, com o brilho só na linha (para dentro).
    final framed = frameTone == null
        ? Container(
            decoration: ShapeDecoration(color: filled ? Colors.white : null, shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.circular(22), side: BorderSide(color: AppTheme.line))),
            child: body,
          )
        : AlertOutline(tone: frameTone!, radius: 22, fill: filled ? Colors.white : Colors.transparent, child: body);
    final card = SizedBox(width: width, height: height, child: framed);
    if (onTap == null && onLongPress == null) return card;
    return GestureDetector(
      onLongPress: onLongPress,
      // Cartão que cresce até à página (2026-11-25): guarda onde está antes
      // de abrir, para a página crescer daqui e voltar para aqui.
      child: Builder(
        builder: (context) => SnappyTap(
          onTap: () {
            ExpandOrigin.capture(context);
            onTap?.call();
          },
          child: card,
        ),
      ),
    );
  }
}

/// Linha grossa entre cartões com foto empilhados na vertical (2 px
/// `#CFCFCF`, 16 acima e abaixo — DESIGN.md §4, pedido 2026-11-22). Nunca
/// nos carrosséis.
class CardsDivider extends StatelessWidget {
  const CardsDivider({super.key});

  @override
  Widget build(BuildContext context) => const Padding(
        padding: EdgeInsets.symmetric(vertical: 16),
        child: SizedBox(height: 2, child: ColoredBox(color: AppTheme.sectionLine)),
      );
}
