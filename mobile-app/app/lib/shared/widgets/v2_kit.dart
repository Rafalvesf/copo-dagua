import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';
import 'sticker_icon.dart';

export 'green_hero.dart' show GreenHero, HeroPill, SectionTitle;
export 'sticker_icon.dart' show StickerIcon, DateSticker;

/// Peças do redesign de parceiros e convidados (canvas "Parceiro —
/// redesign" / "Convidado — redesign", 2026-10-19), no estilo do
/// "Menu · Casamento" dos organizadores: cartões brancos com sombra suave
/// (sem linha), mosaicos de cor suave com o autocolante branco, pílulas
/// e listas agrupadas.

const softShadow = [
  BoxShadow(color: Color(0x12171713), blurRadius: 18, offset: Offset(0, 6)),
  BoxShadow(color: Color(0x0D171713), blurRadius: 3, offset: Offset(0, 1)),
];

BoxDecoration softCard({double radius = 22, Color color = Colors.white}) => BoxDecoration(
      color: color,
      borderRadius: BorderRadius.circular(radius),
      boxShadow: softShadow,
    );

const _tileColors = [Color(0xFFDCE4D8), Color(0xFFF3EBDD), Color(0xFFF3EBDD), Color(0xFFDCE4D8)];
const v2Muted = Color(0xFF57534E);

/// Mosaico de cor (verde-salva / areia alternados) com autocolante branco.
class V2Tile extends StatelessWidget {
  final IconData icon;
  final String label;
  final String? sub;
  final int index;
  final int badge;
  final VoidCallback? onTap;
  const V2Tile({super.key, required this.icon, required this.label, this.sub, required this.index, this.badge = 0, this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        height: 116,
        padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
        decoration: softCard(color: _tileColors[index % 4]),
        child: Stack(children: [
          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            StickerIcon(icon, turns: StickerIcon.tilt(index)),
            const Spacer(),
            Text(label,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (sub != null)
              Text(sub!,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 12, color: v2Muted)),
          ]),
          if (badge > 0) Positioned(top: 0, right: 0, child: V2Count(badge)),
        ]),
      ),
    );
  }
}

/// Grelha de 2 colunas de [V2Tile].
class V2Grid extends StatelessWidget {
  final List<Widget> tiles;
  const V2Grid(this.tiles, {super.key});

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      for (var i = 0; i < tiles.length; i += 2) ...[
        if (i > 0) const SizedBox(height: 12),
        Row(children: [
          Expanded(child: tiles[i]),
          const SizedBox(width: 12),
          Expanded(child: i + 1 < tiles.length ? tiles[i + 1] : const SizedBox()),
        ]),
      ],
    ]);
  }
}

class V2Count extends StatelessWidget {
  final int n;
  const V2Count(this.n, {super.key});

  @override
  Widget build(BuildContext context) => Container(
        constraints: const BoxConstraints(minWidth: 22),
        height: 22,
        padding: const EdgeInsets.symmetric(horizontal: 6),
        alignment: Alignment.center,
        decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(999)),
        child: Text('$n', style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.white)),
      );
}

/// Cartão branco de linha: [lead] + título/subtítulo + [trailing] e,
/// opcionalmente, uma faixa por baixo ([extra]).
class V2RowCard extends StatelessWidget {
  final Widget? lead;
  final String title;
  final String? sub;
  final Widget? trailing;
  final Widget? extra;
  final VoidCallback? onTap;
  const V2RowCard({super.key, this.lead, required this.title, this.sub, this.trailing, this.extra, this.onTap});

  @override
  Widget build(BuildContext context) {
    final body = Container(
      padding: const EdgeInsets.all(14),
      decoration: softCard(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          if (lead != null) ...[lead!, const SizedBox(width: 12)],
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (sub != null && sub!.isNotEmpty) ...[
                const SizedBox(height: 2),
                Text(sub!,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 12, color: v2Muted)),
              ],
            ]),
          ),
          if (trailing != null) ...[const SizedBox(width: 8), trailing!],
        ]),
        if (extra != null) ...[
          const SizedBox(height: 12),
          const Divider(height: 1, color: Color(0xFFEEF2EC)),
          const SizedBox(height: 12),
          extra!,
        ],
      ]),
    );
    return onTap == null ? body : SnappyTap(onTap: onTap, child: body);
  }
}

/// Avatar de iniciais (ou foto) com aro branco e sombra.
class V2Avatar extends StatelessWidget {
  final String name;
  final double size;
  final String? imageUrl;
  final bool filled;
  const V2Avatar(this.name, {super.key, this.size = 44, this.imageUrl, this.filled = false});

  static String initials(String name) {
    final parts = name
        .replaceAll('&', ' ')
        .split(RegExp(r'\s+'))
        .where((p) => p.isNotEmpty && p[0].toUpperCase() != p[0].toLowerCase())
        .toList();
    if (parts.isEmpty) return '?';
    if (parts.length == 1) return parts.first.substring(0, parts.first.length >= 2 ? 2 : 1).toUpperCase();
    // Primeira e última palavra, como o InitialsAvatar ("Quinta do Lago
    // Azul" → QA em todo o lado, não QD numa lista e QA noutra).
    return (parts.first[0] + parts.last[0]).toUpperCase();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        color: filled ? AppTheme.accentOliveDark : Colors.white,
        shape: BoxShape.circle,
        border: Border.all(color: Colors.white, width: 2),
        boxShadow: StickerIcon.shadow,
        image: imageUrl == null ? null : DecorationImage(image: NetworkImage(imageUrl!), fit: BoxFit.cover),
      ),
      alignment: Alignment.center,
      child: imageUrl != null
          ? null
          : Text(initials(name),
              style: TextStyle(
                fontSize: size >= 40 ? 14 : 11,
                fontWeight: FontWeight.w700,
                color: filled ? Colors.white : AppTheme.accentOliveDark,
              )),
    );
  }
}

enum V2Tone { green, amber, red, grey }

class V2Chip extends StatelessWidget {
  final String text;
  final V2Tone tone;
  final bool strong;
  const V2Chip(this.text, {super.key, this.tone = V2Tone.green, this.strong = false});

  @override
  Widget build(BuildContext context) {
    final (fg, bg) = strong
        ? (Colors.white, AppTheme.accentOliveDark)
        : switch (tone) {
            V2Tone.green => (AppTheme.accentOliveDark, AppTheme.accentTint),
            V2Tone.amber => (const Color(0xFF7A5000), const Color(0xFFFCEFD6)),
            V2Tone.red => (const Color(0xFFA3412E), const Color(0xFFF7E3DC)),
            V2Tone.grey => (v2Muted, const Color(0xFFF2F0EB)),
          };
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
      child: Text(text, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: fg)),
    );
  }
}

/// Controlo segmentado em pílula (fundo branco, opção ativa verde).
class V2Segment extends StatelessWidget {
  final List<String> options;
  final int selected;
  final ValueChanged<int> onChanged;
  const V2Segment({super.key, required this.options, required this.selected, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: softCard(radius: 999),
      child: Row(children: [
        for (var i = 0; i < options.length; i++) ...[
          if (i > 0) const SizedBox(width: 4),
          Expanded(
            child: GestureDetector(
              onTap: () => onChanged(i),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 180),
                height: 38,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: i == selected ? AppTheme.accentOliveDark : Colors.transparent,
                  borderRadius: BorderRadius.circular(999),
                ),
                child: Text(options[i],
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.w700,
                      color: i == selected ? Colors.white : v2Muted,
                    )),
              ),
            ),
          ),
        ],
      ]),
    );
  }
}

/// Rótulo de secção em maiúsculas (ex.: "NEGÓCIO").
class V2Caps extends StatelessWidget {
  final String text;
  const V2Caps(this.text, {super.key});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(top: 24, bottom: 12),
        child: Text(text.toUpperCase(),
            style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1, color: v2Muted)),
      );
}

/// Cartão com linhas separadas por um traço fino.
class V2Group extends StatelessWidget {
  final List<Widget> rows;
  const V2Group(this.rows, {super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 2),
      decoration: softCard(),
      child: Column(children: [
        for (var i = 0; i < rows.length; i++) ...[
          if (i > 0) const Divider(height: 1, color: Color(0xFFEEF2EC)),
          rows[i],
        ],
      ]),
    );
  }
}

/// Linha de definições: autocolante + rótulo + valor/interruptor/seta.
class V2SetRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String? value;
  final int index;
  final VoidCallback? onTap;
  final bool? toggle;
  final ValueChanged<bool>? onToggle;
  final Color? labelColor;
  const V2SetRow({
    super.key,
    required this.icon,
    required this.label,
    this.value,
    this.index = 0,
    this.onTap,
    this.toggle,
    this.onToggle,
    this.labelColor,
  });

  @override
  Widget build(BuildContext context) {
    final row = Padding(
      padding: const EdgeInsets.symmetric(vertical: 12),
      child: Row(children: [
        StickerIcon(icon, size: 36, turns: StickerIcon.tilt(index)),
        const SizedBox(width: 12),
        Expanded(
          child: Text(label, style: TextStyle(fontSize: 14, color: labelColor ?? AppTheme.ink)),
        ),
        if (value != null)
          Flexible(
            child: Text(value!,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.right,
                style: const TextStyle(fontSize: 13, color: v2Muted)),
          ),
        if (toggle != null)
          Switch(
            value: toggle!,
            onChanged: onToggle,
            activeTrackColor: AppTheme.accentOliveDark,
            activeThumbColor: Colors.white,
          )
        else if (onTap != null) ...[
          const SizedBox(width: 4),
          const Icon(Icons.chevron_right_rounded, size: 20, color: Color(0xFF8F8B84)),
        ],
      ]),
    );
    return onTap == null ? row : InkWell(onTap: onTap, borderRadius: BorderRadius.circular(12), child: row);
  }
}

/// Botão redondo branco (ou verde) de cabeçalho.
class V2RoundButton extends StatelessWidget {
  final IconData icon;
  final String tooltip;
  final VoidCallback? onTap;
  final bool solid;
  const V2RoundButton({super.key, required this.icon, required this.tooltip, this.onTap, this.solid = false});

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: tooltip,
      child: SnappyTap(
        onTap: onTap,
        child: Container(
          width: 44,
          height: 44,
          decoration: BoxDecoration(
            color: solid ? AppTheme.accentOliveDark : Colors.white,
            shape: BoxShape.circle,
            boxShadow: solid
                ? const [BoxShadow(color: Color(0x594F6B4A), blurRadius: 14, offset: Offset(0, 6))]
                : softShadow,
          ),
          child: Icon(icon, size: solid ? 22 : 20, color: solid ? Colors.white : AppTheme.ink),
        ),
      ),
    );
  }
}

/// Botão grande (verde ou contorno).
class V2BigButton extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  final bool solid;
  final IconData? icon;
  const V2BigButton({super.key, required this.label, this.onTap, this.solid = true, this.icon});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 54,
      width: double.infinity,
      child: solid
          ? FilledButton(
              onPressed: onTap,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.accentOliveDark,
                foregroundColor: Colors.white,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
                textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 16, fontWeight: FontWeight.w700),
              ),
              child: _label(),
            )
          : OutlinedButton(
              onPressed: onTap,
              style: OutlinedButton.styleFrom(
                foregroundColor: AppTheme.accentOliveDark,
                side: BorderSide(color: AppTheme.accentOliveDark, width: 1.5),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
                textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 16, fontWeight: FontWeight.w700),
              ),
              child: _label(),
            ),
    );
  }

  Widget _label() => Row(mainAxisSize: MainAxisSize.min, children: [
        if (icon != null) ...[Icon(icon, size: 20), const SizedBox(width: 8)],
        Flexible(child: Text(label, overflow: TextOverflow.ellipsis)),
      ]);
}
