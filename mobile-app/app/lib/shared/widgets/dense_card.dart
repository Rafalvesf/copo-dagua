import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';
import 'v2_kit.dart' show softCard;

/// Peças dos cartões compactos (mockup "Cartões densos", 2026-11-11):
/// menos espaço vazio, mais informação útil em cada cartão.

const kAlertBg = Color(0xFFF7EACA);
const kAlertInk = Color(0xFF5A3E0C);
const kTrackBg = Color(0xFFE2DED4);
const _chipBg = Color(0xFFF2F0EB);
const _doneBg = Color(0xFFE6EDE1);
const _doneInk = Color(0xFF3F7A4F);

/// Etiqueta cinza clara ("Ao ar livre", "Grupos até 40").
class DenseChip extends StatelessWidget {
  final String text;
  final bool done;
  const DenseChip(this.text, {super.key, this.done = false});

  @override
  Widget build(BuildContext context) => Container(
        height: 26,
        padding: const EdgeInsets.symmetric(horizontal: 10),
        decoration: BoxDecoration(color: done ? _doneBg : _chipBg, borderRadius: BorderRadius.circular(999)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          if (done) ...[
            const Icon(Hi.check, size: 13, color: _doneInk),
            const SizedBox(width: 3),
          ],
          Flexible(
            child: Text(text,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: done ? _doneInk : const Color(0xFF3A3733))),
          ),
        ]),
      );
}

/// Etiquetas numa só linha: as que não cabem ficam de fora.
class DenseChipRow extends StatelessWidget {
  final List<Widget> chips;
  const DenseChipRow(this.chips, {super.key});

  @override
  Widget build(BuildContext context) => SizedBox(
        height: 26,
        child: ClipRect(
          child: Wrap(spacing: 6, runSpacing: 20, clipBehavior: Clip.hardEdge, children: chips),
        ),
      );
}

/// Linha de dados com ícone: data, local…
class MetaRow extends StatelessWidget {
  final List<(IconData, String)> items;
  const MetaRow(this.items, {super.key});

  @override
  Widget build(BuildContext context) => Wrap(spacing: 12, runSpacing: 2, children: [
        for (final (icon, text) in items)
          Row(mainAxisSize: MainAxisSize.min, children: [
            Icon(icon, size: 14, color: AppTheme.inkMuted),
            const SizedBox(width: 4),
            ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 220),
              child: Text(text,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            ),
          ]),
      ]);
}

/// Botão dos cartões: branco, contorno e letra pretos ("Ver evento",
/// pedido 2026-11-11 — o mesmo em todos os cartões).
class CtaPill extends StatelessWidget {
  final String text;
  final double height;
  const CtaPill(this.text, {super.key, this.height = 36});

  @override
  Widget build(BuildContext context) => Container(
        height: height,
        padding: const EdgeInsets.symmetric(horizontal: 16),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(height / 2),
          border: Border.all(color: AppTheme.ink, width: 1.5),
        ),
        child: Text(text, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800, color: AppTheme.ink)),
      );
}

/// Etiqueta por cima de uma foto (branca, ou preta com [dark]).
class PhotoPill extends StatelessWidget {
  final String text;
  final bool dark;
  final IconData? icon;
  final String? muted;
  const PhotoPill(this.text, {super.key, this.dark = false, this.icon, this.muted});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        decoration: BoxDecoration(color: dark ? AppTheme.ink : Colors.white, borderRadius: BorderRadius.circular(999)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          if (icon != null) ...[
            Icon(icon, size: 13, color: const Color(0xFFC9A24A)),
            const SizedBox(width: 3),
          ],
          Text(text, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: dark ? Colors.white : AppTheme.ink)),
          if (muted != null)
            Text(' $muted', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        ]),
      );
}

/// Barra de progresso com título e valor à direita.
class ProgressLine extends StatelessWidget {
  final String label;
  final String value;
  final double progress;
  const ProgressLine({super.key, required this.label, required this.value, required this.progress});

  @override
  Widget build(BuildContext context) => Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: AppTheme.ink)),
          const Spacer(),
          Text(value, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: AppTheme.accentOliveDark)),
        ]),
        const SizedBox(height: 6),
        ClipRRect(
          borderRadius: BorderRadius.circular(4),
          child: LinearProgressIndicator(
            value: progress.clamp(0, 1).toDouble(),
            minHeight: 8,
            color: AppTheme.accentOliveDark,
            backgroundColor: kTrackBg,
          ),
        ),
      ]);
}

/// Alerta amarelo com o próximo passo e um botão preto.
class AlertStrip extends StatelessWidget {
  final String text;
  final String cta;
  final VoidCallback onTap;
  const AlertStrip({super.key, required this.text, required this.cta, required this.onTap});

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.fromLTRB(12, 8, 8, 8),
          decoration: BoxDecoration(color: kAlertBg, borderRadius: BorderRadius.circular(14)),
          child: Row(children: [
            Expanded(
              child: Text(text,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800, color: kAlertInk)),
            ),
            const SizedBox(width: 10),
            CtaPill(cta, height: 32),
          ]),
        ),
      );
}

/// Bolinhas sobrepostas (quantas pessoas vão).
class AvatarDots extends StatelessWidget {
  final int count;
  const AvatarDots(this.count, {super.key});

  static const _colors = [Color(0xFFA88B5C), Color(0xFF6E8B68), Color(0xFFB9767C), Color(0xFFC9A24A)];

  @override
  Widget build(BuildContext context) {
    final n = count.clamp(0, 4);
    return SizedBox(
      width: n == 0 ? 0 : 24 + (n - 1) * 17,
      height: 24,
      child: Stack(children: [
        for (var i = 0; i < n; i++)
          Positioned(
            left: i * 17,
            child: Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                color: _colors[i],
                shape: BoxShape.circle,
                border: Border.all(color: Colors.white, width: 2),
              ),
            ),
          ),
      ]),
    );
  }
}

/// Ninguém vai ainda: três lugares livres tracejados, sobrepostos como
/// as bolinhas de [AvatarDots] (cada um tapa o tracejado do anterior).
class GhostDots extends StatelessWidget {
  const GhostDots({super.key});

  @override
  Widget build(BuildContext context) => SizedBox(
        width: 24 + 2 * 17,
        height: 24,
        child: Stack(children: [
          for (var i = 0; i < 3; i++)
            Positioned(
              left: i * 17,
              child: Container(
                width: 24,
                height: 24,
                padding: const EdgeInsets.all(2),
                decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                child: const CustomPaint(painter: _DashedCircle()),
              ),
            ),
        ]),
      );
}

class _DashedCircle extends CustomPainter {
  const _DashedCircle();

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFFBDB8AD)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;
    final r = size.width / 2 - 0.75;
    final c = Offset(size.width / 2, size.height / 2);
    const dashes = 10;
    const sweep = 3.14159265 * 2 / dashes;
    for (var i = 0; i < dashes; i++) {
      canvas.drawArc(Rect.fromCircle(center: c, radius: r), i * sweep, sweep * 0.55, false, paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Três números pequenos lado a lado (só os que existem).
class MiniStats extends StatelessWidget {
  final List<(String, String)> items;
  const MiniStats(this.items, {super.key});

  @override
  Widget build(BuildContext context) => Row(children: [
        for (var i = 0; i < items.length; i++) ...[
          if (i > 0) const SizedBox(width: 6),
          Expanded(
            child: Container(
              // Pedido 2026-11-12: fundo branco, linha preta à volta e
              // conteúdo ao centro.
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: AppTheme.ink, width: 1.5),
              ),
              child: Column(crossAxisAlignment: CrossAxisAlignment.center, children: [
                Text(items[i].$1, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                Text(items[i].$2,
                    maxLines: 1,
                    textAlign: TextAlign.center,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              ]),
            ),
          ),
        ],
      ]);
}

/// Preço por cima da foto, como o dia (mockup "Eventos — com eventos",
/// 2026-11-11): caixa branca com a etiqueta pequena ("DESDE",
/// "ENTRADA") e o valor um pouco maior do que o número do dia.
class PriceBox extends StatelessWidget {
  final String label;
  final String value;
  const PriceBox(this.label, this.value, {super.key});

  @override
  Widget build(BuildContext context) => Container(
        // Proporcional à caixa da data (2026-11-12: "um pouco grandes").
        constraints: const BoxConstraints(minWidth: 40),
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(10)),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Text(label,
              style: const TextStyle(fontSize: 9, height: 1.2, letterSpacing: 0.4, fontWeight: FontWeight.w800, color: AppTheme.inkMuted)),
          Text(value, style: const TextStyle(fontSize: 16, height: 1.1, fontWeight: FontWeight.w800, color: AppTheme.ink)),
        ]),
      );
}

/// Cartão de parceiro, produto ou sugestão — o mesmo desenho dos
/// eventos do Descobrir: foto com a nota à esquerda e o preço à direita;
/// por baixo nome, zona, etiquetas e "Ver".
class FeaturedOverlayCard extends StatelessWidget {
  final VoidCallback onTap;
  final Widget image;
  final Widget? badge;
  final (String, String)? price;
  final String title;
  final String subtitle;
  final List<String> chips;
  const FeaturedOverlayCard({
    super.key,
    required this.onTap,
    required this.image,
    required this.title,
    required this.subtitle,
    this.badge,
    this.price,
    this.chips = const [],
  });

  static const double height = 268;

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Semantics(
          button: true,
          label: [title, subtitle, if (price != null) '${price!.$1} ${price!.$2}'].join(', '),
          excludeSemantics: true,
          child: Container(
            height: height,
            clipBehavior: Clip.antiAlias,
            decoration: softCard(radius: 22),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              // Foto um pouco maior (2026-11-11).
              SizedBox(
                height: 140,
                child: Stack(fit: StackFit.expand, children: [
                  image,
                  if (badge != null) Positioned(left: 12, top: 12, child: badge!),
                  if (price != null) Positioned(right: 12, top: 12, child: PriceBox(price!.$1, price!.$2)),
                ]),
              ),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(14, 12, 14, 14),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(title,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(height: 3),
                    if (subtitle.isNotEmpty) MetaRow([(Hi.mapPin, subtitle)]),
                    const Spacer(),
                    Row(children: [
                      Expanded(child: DenseChipRow([for (final c in chips) DenseChip(c)])),
                      const SizedBox(width: 8),
                      const CtaPill('Ver'),
                    ]),
                  ]),
                ),
              ),
            ]),
          ),
        ),
      );
}
