import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/menu_style.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Abre o seletor de aparência por cima da página, como mudar o mostrador
/// no Apple Watch (pedido 2026-10-18): a página "encolhe" e aparecem os
/// estilos lado a lado. Usado no toque longo da página do evento.
Future<void> showMenuStylePicker(BuildContext context) {
  HapticFeedback.mediumImpact();
  return Navigator.of(context).push(
    PageRouteBuilder<void>(
      opaque: false,
      barrierColor: const Color(0x66171713),
      transitionDuration: const Duration(milliseconds: 320),
      reverseTransitionDuration: const Duration(milliseconds: 220),
      pageBuilder: (context, animation, secondary) => const MenuStyleScreen(asOverlay: true),
      transitionsBuilder: (context, animation, secondary, child) {
        final curved = CurvedAnimation(parent: animation, curve: Curves.easeOutCubic);
        return FadeTransition(
          opacity: curved,
          child: ScaleTransition(scale: Tween(begin: 1.12, end: 1.0).animate(curved), child: child),
        );
      },
    ),
  );
}

/// "Aparência do menu" (098): um mockup de cada estilo, a deslizar para os
/// lados, e as cores numa fila que também desliza. Nas Definições e no
/// toque longo da página do evento.
class MenuStyleScreen extends ConsumerStatefulWidget {
  final bool asOverlay;
  const MenuStyleScreen({super.key, this.asOverlay = false});

  @override
  ConsumerState<MenuStyleScreen> createState() => _MenuStyleScreenState();
}

class _MenuStyleScreenState extends ConsumerState<MenuStyleScreen> {
  late final EventMenuStyle _initial = ref.read(currentMenuStyleProvider);
  late int _layout = MenuLayout.values.indexOf(_initial.layout);
  late int _color = MenuColor.all.indexWhere((c) => c.id == _initial.color.id).clamp(0, MenuColor.all.length - 1);
  late final _layoutPager = PageController(viewportFraction: 0.62, initialPage: _layout);
  late final _colorPager = PageController(viewportFraction: 0.2, initialPage: _color);
  bool _saving = false;

  @override
  void dispose() {
    _layoutPager.dispose();
    _colorPager.dispose();
    super.dispose();
  }

  Future<void> _done() async {
    final layout = MenuLayout.values[_layout];
    final color = MenuColor.all[_color];
    setState(() => _saving = true);
    try {
      if (layout != _initial.layout || color.id != _initial.color.id) {
        await saveMenuStyle(ref, layout: layout, color: color);
      }
      if (mounted) Navigator.of(context).maybePop();
    } catch (_) {
      if (mounted) {
        setState(() => _saving = false);
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final type = ref.watch(weddingControllerProvider.select((s) => s.wedding?.eventType)) ?? EventType.wedding;
    final color = MenuColor.all[_color];
    final decor = EventDecor.of(type);
    final layout = MenuLayout.values[_layout];

    final content = Column(
      children: [
        if (widget.asOverlay)
          Padding(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 18, AppTheme.screenMargin, 0),
            child: Row(
              children: [
                const Expanded(
                  child: Text('Aparência do menu', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
                IconButton(
                  tooltip: 'Fechar',
                  onPressed: () => Navigator.of(context).maybePop(),
                  icon: const Icon(Icons.close_rounded),
                ),
              ],
            ),
          )
        else
          const PageHeader(title: 'Aparência do menu', centered: true),
        const SizedBox(height: 4),
        const Text('Desliza para escolher o estilo e a cor.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        const SizedBox(height: 14),
        Expanded(
          child: PageView.builder(
            controller: _layoutPager,
            itemCount: MenuLayout.values.length,
            onPageChanged: (i) {
              HapticFeedback.selectionClick();
              setState(() => _layout = i);
            },
            itemBuilder: (context, i) => AnimatedBuilder(
              animation: _layoutPager,
              builder: (context, child) {
                final page = _layoutPager.hasClients && _layoutPager.position.haveDimensions ? (_layoutPager.page ?? _layout.toDouble()) : _layout.toDouble();
                final d = (page - i).abs().clamp(0.0, 1.0);
                return Transform.scale(scale: 1 - d * 0.14, child: Opacity(opacity: 1 - d * 0.45, child: child));
              },
              child: GestureDetector(
                onTap: () => _layoutPager.animateToPage(i, duration: const Duration(milliseconds: 280), curve: Curves.easeOutCubic),
                child: Center(
                  child: AspectRatio(
                    aspectRatio: 9 / 18.5,
                    child: _PhoneMockup(layout: MenuLayout.values[i], color: color, decor: decor),
                  ),
                ),
              ),
            ),
          ),
        ),
        const SizedBox(height: 12),
        Text(
          layout == MenuLayout.classic ? '${layout.label} · recomendado' : layout.label,
          style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink),
        ),
        const SizedBox(height: 2),
        Text(layout.description, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
        const SizedBox(height: 8),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            for (var i = 0; i < MenuLayout.values.length; i++)
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                margin: const EdgeInsets.symmetric(horizontal: 3),
                width: i == _layout ? 18 : 6,
                height: 6,
                decoration: BoxDecoration(color: i == _layout ? color.accent : AppTheme.borderMuted, borderRadius: BorderRadius.circular(3)),
              ),
          ],
        ),
        const SizedBox(height: 16),
        Text(color.label, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 6),
        SizedBox(
          height: 74,
          child: PageView.builder(
            controller: _colorPager,
            itemCount: MenuColor.all.length,
            onPageChanged: (i) {
              HapticFeedback.selectionClick();
              setState(() => _color = i);
            },
            itemBuilder: (context, i) {
              final c = MenuColor.all[i];
              final selected = i == _color;
              return Semantics(
                button: true,
                selected: selected,
                label: c.label,
                child: GestureDetector(
                  onTap: () => _colorPager.animateToPage(i, duration: const Duration(milliseconds: 260), curve: Curves.easeOutCubic),
                  child: Center(
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      curve: Curves.easeOutBack,
                      width: selected ? 62 : 42,
                      height: selected ? 62 : 42,
                      decoration: BoxDecoration(
                        color: c.color,
                        shape: BoxShape.circle,
                        border: Border.all(color: Colors.white, width: 3),
                        boxShadow: [
                          BoxShadow(
                            color: selected ? c.accent : const Color(0x22171713),
                            spreadRadius: selected ? 2 : 0,
                            blurRadius: selected ? 0 : 8,
                          ),
                        ],
                      ),
                      child: selected ? Icon(Icons.check, color: c.on, size: 24) : null,
                    ),
                  ),
                ),
              );
            },
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 14, AppTheme.screenMargin, 18),
          child: SizedBox(
            width: double.infinity,
            height: 54,
            child: FilledButton(
              onPressed: _saving ? null : _done,
              style: FilledButton.styleFrom(
                backgroundColor: color.color,
                foregroundColor: color.on,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
              ),
              child: _saving
                  ? SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.5, color: color.on))
                  : const Text('Usar este estilo', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
            ),
          ),
        ),
        if (!widget.asOverlay)
          const Padding(
            padding: EdgeInsets.only(bottom: 18),
            child: Text(
              'Dica: na página do evento, mantém o dedo carregado para mudar.',
              style: TextStyle(fontSize: 12, color: AppTheme.inkMuted),
            ),
          ),
      ],
    );

    if (!widget.asOverlay) {
      return Scaffold(backgroundColor: Colors.white, body: SafeArea(child: content));
    }
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: SafeArea(
        child: Container(
          margin: const EdgeInsets.fromLTRB(10, 16, 10, 10),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(32),
            boxShadow: const [BoxShadow(color: Color(0x33171713), blurRadius: 40, offset: Offset(0, 16))],
          ),
          child: content,
        ),
      ),
    );
  }
}

/// Mockup de um ecrã com o estilo e a cor escolhidos — desenhado com
/// formas simples, como as miniaturas dos mostradores.
class _PhoneMockup extends StatelessWidget {
  final MenuLayout layout;
  final MenuColor color;
  final EventDecor decor;
  const _PhoneMockup({required this.layout, required this.color, required this.decor});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(30),
        border: Border.all(color: const Color(0xFF171713), width: 5),
        boxShadow: const [BoxShadow(color: Color(0x29171713), blurRadius: 24, offset: Offset(0, 10))],
      ),
      clipBehavior: Clip.antiAlias,
      child: LayoutBuilder(
        builder: (context, box) {
          final w = box.maxWidth;
          return Padding(
            padding: EdgeInsets.fromLTRB(w * 0.07, w * 0.09, w * 0.07, w * 0.05),
            child: switch (layout) {
              MenuLayout.classic => _classic(w),
              MenuLayout.stickers => _stickers(w),
              MenuLayout.mural => _mural(w),
              MenuLayout.clothesline => _clothesline(w),
            },
          );
        },
      ),
    );
  }

  Widget _bar(double w, double f, {Color c = const Color(0xFFE9E5DC), double h = 6}) =>
      Container(width: w * f, height: h, decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(3)));

  Widget _nav(double w) => Container(
        height: w * 0.13,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(w * 0.07),
          boxShadow: const [BoxShadow(color: Color(0x1A171713), blurRadius: 8, offset: Offset(0, -2))],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _dot(w * 0.045, const Color(0xFFBDB8AE)),
            Container(
              width: w * 0.09,
              height: w * 0.09,
              decoration: BoxDecoration(color: color.color, shape: BoxShape.circle),
              child: Icon(decor.motif, size: w * 0.05, color: color.on),
            ),
            _dot(w * 0.045, const Color(0xFFBDB8AE)),
            _dot(w * 0.045, const Color(0xFFBDB8AE)),
          ],
        ),
      );

  Widget _dot(double d, Color c) => Container(width: d, height: d, decoration: BoxDecoration(color: c, shape: BoxShape.circle));

  Widget _tile(double w, int i, {double? h}) => Container(
        height: h ?? w * 0.2,
        decoration: BoxDecoration(color: i.isEven ? color.tint : color.comp, borderRadius: BorderRadius.circular(w * 0.04)),
        alignment: Alignment.topLeft,
        padding: EdgeInsets.all(w * 0.025),
        child: Container(
          width: w * 0.07,
          height: w * 0.07,
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(w * 0.02)),
          child: Icon(const [Icons.savings_outlined, Icons.people_outline, Icons.event_seat_outlined, Icons.photo_library_outlined][i % 4],
              size: w * 0.045, color: color.accent),
        ),
      );

  Widget _polaroid(double w, double width, double angle, Color photo, {IconData? icon, bool names = false}) => Transform.rotate(
        angle: angle,
        child: Container(
          width: width,
          padding: EdgeInsets.fromLTRB(width * 0.06, width * 0.06, width * 0.06, width * 0.16),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(2),
            boxShadow: const [BoxShadow(color: Color(0x26171713), blurRadius: 10, offset: Offset(0, 4))],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                height: width * 0.8,
                color: photo,
                alignment: Alignment.center,
                child: icon == null ? null : Icon(icon, size: width * 0.25, color: color.accent),
              ),
              if (names) ...[
                SizedBox(height: width * 0.06),
                _bar(width, 0.6, c: color.accent, h: 4),
              ],
            ],
          ),
        ),
      );

  Widget _classic(double w) => Column(
        children: [
          Container(
            padding: EdgeInsets.all(w * 0.04),
            decoration: BoxDecoration(color: color.color, borderRadius: BorderRadius.circular(w * 0.06)),
            child: Column(
              children: [
                Container(
                  height: w * 0.38,
                  decoration: BoxDecoration(color: color.tint, borderRadius: BorderRadius.circular(w * 0.04)),
                  alignment: Alignment.topRight,
                  padding: EdgeInsets.all(w * 0.025),
                  child: Container(
                    padding: EdgeInsets.symmetric(horizontal: w * 0.025, vertical: w * 0.01),
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(99)),
                    child: Icon(decor.motif, size: w * 0.045, color: color.accent),
                  ),
                ),
                SizedBox(height: w * 0.04),
                _bar(w, 0.4, c: color.on.withValues(alpha: 0.85)),
                SizedBox(height: w * 0.04),
                Row(
                  children: [
                    for (var i = 0; i < 4; i++) ...[
                      if (i > 0) SizedBox(width: w * 0.02),
                      Expanded(
                        child: Container(
                          height: w * 0.09,
                          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(w * 0.02)),
                        ),
                      ),
                    ],
                  ],
                ),
              ],
            ),
          ),
          SizedBox(height: w * 0.05),
          Row(children: [Expanded(child: _tile(w, 0)), SizedBox(width: w * 0.03), Expanded(child: _tile(w, 1))]),
          SizedBox(height: w * 0.03),
          Row(children: [Expanded(child: _tile(w, 3)), SizedBox(width: w * 0.03), Expanded(child: _tile(w, 2))]),
          const Spacer(),
          _nav(w),
        ],
      );

  Widget _stickers(double w) => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _bar(w, 0.45, c: const Color(0xFF171713), h: 9),
          SizedBox(height: w * 0.025),
          Row(children: [_bar(w, 0.12), SizedBox(width: w * 0.02), _bar(w, 0.16, c: color.color, h: 8), SizedBox(width: w * 0.02), _bar(w, 0.25)]),
          SizedBox(height: w * 0.03),
          SizedBox(
            height: w * 0.62,
            child: Stack(
              clipBehavior: Clip.none,
              alignment: Alignment.center,
              children: [
                _polaroid(w, w * 0.55, -0.06, color.tint, names: true),
                Positioned(left: w * 0.04, top: 0, child: _sticker(w, decor.doodles[0], color.color, color.on)),
                Positioned(right: w * 0.04, top: w * 0.08, child: _sticker(w, decor.doodles[2], color.comp, color.accent)),
                Positioned(right: w * 0.1, bottom: 0, child: _sticker(w, decor.doodles[4], color.tint, color.accent)),
              ],
            ),
          ),
          SizedBox(height: w * 0.05),
          for (var r = 0; r < 2; r++) ...[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                for (var c = 0; c < 3; c++)
                  Transform.rotate(
                    angle: [-0.12, 0.1, -0.06][c] * (r.isEven ? 1 : -1),
                    child: Container(
                      width: w * 0.2,
                      height: w * 0.2,
                      decoration: BoxDecoration(color: (r * 3 + c).isEven ? color.tint : color.comp, borderRadius: BorderRadius.circular(w * 0.06)),
                    ),
                  ),
              ],
            ),
            SizedBox(height: w * 0.04),
          ],
          const Spacer(),
          _nav(w),
        ],
      );

  Widget _sticker(double w, IconData icon, Color bg, Color fg) => Container(
        width: w * 0.14,
        height: w * 0.14,
        decoration: BoxDecoration(color: bg, shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
        child: Icon(icon, size: w * 0.07, color: fg),
      );

  Widget _mural(double w) => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _bar(w, 0.5, c: const Color(0xFF171713), h: 9),
          SizedBox(height: w * 0.03),
          SizedBox(
            height: w * 0.72,
            child: Stack(
              clipBehavior: Clip.none,
              alignment: Alignment.topCenter,
              children: [
                Positioned(left: 0, top: w * 0.07, child: _polaroid(w, w * 0.42, -0.16, color.comp, icon: decor.doodles[0])),
                Positioned(right: 0, top: w * 0.05, child: _polaroid(w, w * 0.42, 0.14, color.tint, icon: decor.doodles[2])),
                Positioned(top: w * 0.04, child: _polaroid(w, w * 0.52, -0.04, color.tint, names: true)),
                Positioned(top: w * 0.015, child: Container(width: w * 0.18, height: w * 0.05, color: color.color.withValues(alpha: 0.6))),
                Positioned(
                  right: w * 0.04,
                  bottom: 0,
                  child: Container(
                    width: w * 0.17,
                    height: w * 0.17,
                    decoration: BoxDecoration(color: color.color, shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
                  ),
                ),
              ],
            ),
          ),
          SizedBox(height: w * 0.05),
          for (var r = 0; r < 2; r++) ...[
            Row(
              children: [
                for (var c = 0; c < 2; c++) ...[
                  if (c > 0) SizedBox(width: w * 0.05),
                  Expanded(
                    child: Stack(
                      clipBehavior: Clip.none,
                      alignment: Alignment.topCenter,
                      children: [
                        Transform.rotate(
                          angle: c.isEven ? -0.05 : 0.04,
                          child: Container(
                            padding: EdgeInsets.all(w * 0.02),
                            color: Colors.white,
                            child: Container(height: w * 0.17, color: (r * 2 + c).isEven ? color.tint : color.comp),
                          ),
                        ),
                        Positioned(top: -w * 0.012, child: _dot(w * 0.035, color.accent)),
                      ],
                    ),
                  ),
                ],
              ],
            ),
            SizedBox(height: w * 0.045),
          ],
          const Spacer(),
          _nav(w),
        ],
      );

  Widget _clothesline(double w) => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _bar(w, 0.3, c: color.accent),
          SizedBox(height: w * 0.02),
          _bar(w, 0.55, c: const Color(0xFF171713), h: 9),
          SizedBox(height: w * 0.03),
          SizedBox(
            height: w * 0.62,
            child: Stack(
              clipBehavior: Clip.none,
              alignment: Alignment.topCenter,
              children: [
                Positioned.fill(child: CustomPaint(painter: _MiniLine())),
                Positioned(left: -w * 0.1, top: w * 0.07, child: _polaroid(w, w * 0.32, -0.12, color.comp, icon: decor.doodles[0])),
                Positioned(right: -w * 0.1, top: w * 0.07, child: _polaroid(w, w * 0.32, 0.12, color.tint, icon: decor.doodles[2])),
                Positioned(top: w * 0.09, child: _polaroid(w, w * 0.5, 0.04, color.tint, names: true)),
              ],
            ),
          ),
          SizedBox(height: w * 0.03),
          Container(
            height: w * 0.12,
            padding: EdgeInsets.all(w * 0.02),
            decoration: BoxDecoration(color: const Color(0xFF171713), borderRadius: BorderRadius.circular(3)),
            child: Row(
              children: [
                for (var i = 0; i < 4; i++) ...[
                  if (i > 0) SizedBox(width: w * 0.015),
                  Expanded(child: Container(color: const Color(0xFF2A2A25))),
                ],
              ],
            ),
          ),
          SizedBox(height: w * 0.05),
          Row(
            children: [
              for (var c = 0; c < 2; c++) ...[
                if (c > 0) SizedBox(width: w * 0.04),
                Expanded(
                  child: Container(
                    padding: EdgeInsets.all(w * 0.02),
                    decoration: BoxDecoration(color: Colors.white, border: Border.all(color: const Color(0xFFECE7DC))),
                    child: Container(height: w * 0.18, color: c.isEven ? color.tint : color.comp),
                  ),
                ),
              ],
            ],
          ),
          const Spacer(),
          _nav(w),
        ],
      );
}

class _MiniLine extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = const Color(0xFF8F8B84)
      ..strokeWidth = 1
      ..style = PaintingStyle.stroke;
    canvas.drawPath(
      Path()
        ..moveTo(-20, 6)
        ..quadraticBezierTo(size.width / 2, 30, size.width + 20, 6),
      p,
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
