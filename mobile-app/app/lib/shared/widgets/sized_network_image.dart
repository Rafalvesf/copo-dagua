import 'dart:math' as math;

import 'package:flutter/widgets.dart';

/// Fotos da internet descodificadas no tamanho em que aparecem no ecrã
/// (pedido 2026-10-25: "limita o tamanho de cada foto ao tamanho em que
/// aparece no ecrã"). Sem isto, uma foto de 4000 px mostrada como
/// miniatura de 120 px ficava inteira em memória.
///
/// O tamanho é o lado maior da caixa × densidade do ecrã × 1,5 (margem
/// para `BoxFit.cover` com proporções diferentes), dentro de um quadrado
/// e sem deformar. Nunca aumenta uma foto pequena.
int decodeSizeFor(Size box, double dpr) {
  final side = math.max(box.width, box.height);
  final px = (side.isFinite && side > 0 ? side : 600) * dpr * 1.5;
  return px.round().clamp(48, 2400);
}

/// [NetworkImage] limitada a [logicalSize] (em pontos do ecrã). Para
/// `CircleAvatar.backgroundImage` e `DecorationImage`.
ImageProvider sizedNetworkImage(String url, double logicalSize, BuildContext context) {
  final s = decodeSizeFor(Size.square(logicalSize), MediaQuery.devicePixelRatioOf(context));
  return ResizeImage(NetworkImage(url), width: s, height: s, policy: ResizeImagePolicy.fit);
}

/// Substituto de `Image.network` que mede a caixa onde está e descodifica
/// a foto só nesse tamanho.
class SizedNetworkImage extends StatelessWidget {
  const SizedNetworkImage(
    this.url, {
    super.key,
    this.width,
    this.height,
    this.fit,
    this.alignment = Alignment.center,
    this.loadingBuilder,
    this.errorBuilder,
  });

  final String url;
  final double? width;
  final double? height;
  final BoxFit? fit;
  final AlignmentGeometry alignment;
  final ImageLoadingBuilder? loadingBuilder;
  final ImageErrorWidgetBuilder? errorBuilder;

  @override
  Widget build(BuildContext context) {
    final dpr = MediaQuery.devicePixelRatioOf(context);
    final screen = MediaQuery.sizeOf(context);
    Widget image(Size box) {
      final s = decodeSizeFor(box, dpr);
      return Image(
        image: ResizeImage(NetworkImage(url), width: s, height: s, policy: ResizeImagePolicy.fit),
        width: width,
        height: height,
        fit: fit,
        alignment: alignment,
        loadingBuilder: loadingBuilder,
        errorBuilder: errorBuilder,
        gaplessPlayback: true,
      );
    }

    if (width != null && height != null) return image(Size(width!, height!));
    return LayoutBuilder(builder: (context, c) {
      final w = width ?? (c.hasBoundedWidth ? c.maxWidth : screen.width);
      final h = height ?? (c.hasBoundedHeight ? c.maxHeight : w);
      return image(Size(w, h));
    });
  }
}
