import 'package:flutter/material.dart';
import 'package:flutter/physics.dart';
import 'package:flutter/services.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/hero_icons.dart';
import '../../../shared/widgets/sized_network_image.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/type_count.dart';

/// Peças dos popups de reservar e pagar (pranchetas «FPayEvento»,
/// «FPayNovo», «FPayDia», «FPayHora», «FPay1» e «FPay2», 2026-11-27).
/// Sem visto nem barra de progresso: a escolha vê-se só pela linha
/// cinzenta por dentro (ou o verde nas pílulas) e pelo encolher a 0,97.

/// A linha por dentro do que está escolhido (cartões e mosaicos).
const kPickLine = Color(0xFF8A8580);
const kPickGrey = Color(0xFFF2F2F2);
const kStruck = Color(0xFFCFCFCF);
const kRowLine = Color(0xFFD9D9D9);

bool _still(BuildContext context) => MediaQuery.maybeDisableAnimationsOf(context) ?? false;

Duration _t(BuildContext context) => _still(context) ? Duration.zero : const Duration(milliseconds: 150);

ShapeBorder _shape(double r, {BorderSide side = BorderSide.none}) =>
    RoundedSuperellipseBorder(borderRadius: BorderRadius.circular(r), side: side);

/// Título de grupo em maiúsculas (12, espaçamento 2).
class ReserveCaps extends StatelessWidget {
  final String text;
  const ReserveCaps(this.text, {super.key});

  @override
  Widget build(BuildContext context) => Text(text,
      style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted));
}

/// Cartão ou mosaico que se escolhe: `#F2F2F2`; escolhido fica branco com a
/// linha `#8A8580` de 2 por dentro.
class ReservePick extends StatelessWidget {
  final bool selected;
  final VoidCallback? onTap;
  final Widget child;
  final double radius;
  final EdgeInsetsGeometry padding;
  final double? height;
  final double? minHeight;
  final String? semanticLabel;
  const ReservePick({
    super.key,
    required this.selected,
    required this.onTap,
    required this.child,
    this.radius = 22,
    this.padding = const EdgeInsets.symmetric(horizontal: 16),
    this.height,
    this.minHeight,
    this.semanticLabel,
  });

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: selected,
        label: semanticLabel,
        child: SnappyTap(
          onTap: onTap,
          child: AnimatedContainer(
            duration: _t(context),
            curve: Curves.easeOut,
            height: height,
            constraints: minHeight == null ? null : BoxConstraints(minHeight: minHeight!),
            padding: padding,
            decoration: ShapeDecoration(
              color: selected ? Colors.white : kPickGrey,
              shape: _shape(radius,
                  side: BorderSide(color: selected ? kPickLine : kPickGrey, width: 2)),
            ),
            child: child,
          ),
        ),
      );
}

/// Pílula 38 que fica verde quando escolhida (filtros, «Quem paga»).
class ReserveGreenPill extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;
  const ReserveGreenPill({super.key, required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: selected,
        child: SnappyTap(
          onTap: onTap,
          child: AnimatedContainer(
            duration: _t(context),
            curve: Curves.easeOut,
            height: 38,
            padding: const EdgeInsets.symmetric(horizontal: 12),
            alignment: Alignment.center,
            decoration: ShapeDecoration(
              color: selected ? AppTheme.accentOliveDark : kPickGrey,
              shape: const StadiumBorder(),
            ),
            child: Text(label,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
          ),
        ),
      );
}

/// Botão preto 52 a toda a largura (ou com contorno).
class ReserveButton extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  final bool outlined;
  final bool busy;
  const ReserveButton(this.label, {super.key, this.onTap, this.outlined = false, this.busy = false});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        enabled: onTap != null && !busy,
        child: SnappyTap(
          onTap: busy ? null : onTap,
          child: AnimatedOpacity(
            duration: _t(context),
            opacity: onTap == null ? 0.4 : 1,
            child: Container(
              height: 52,
              alignment: Alignment.center,
              decoration: ShapeDecoration(
                color: outlined ? Colors.white : AppTheme.ink,
                shape: StadiumBorder(side: outlined ? const BorderSide(color: AppTheme.ink, width: 1.5) : BorderSide.none),
              ),
              child: busy
                  ? SizedBox(
                      width: 20,
                      height: 20,
                      child: CircularProgressIndicator(strokeWidth: 2, color: outlined ? AppTheme.ink : Colors.white),
                    )
                  : Text(label,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: outlined ? AppTheme.ink : Colors.white)),
            ),
          ),
        ),
      );
}

/// Ação secundária em texto cinzento («Voltar», «Pedir sem pagar agora»):
/// menos preto, mais cinzento (pedido do Rafael, 2026-11-27).
class ReserveGreyText extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  const ReserveGreyText(this.label, {super.key, this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            constraints: const BoxConstraints(minHeight: 44),
            padding: const EdgeInsets.symmetric(horizontal: 6),
            alignment: Alignment.center,
            child: Text(label, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          ),
        ),
      );
}

/// Pílula branca 34 sem contorno («Mudar», «Editar»).
class ReserveWhitePill extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  const ReserveWhitePill(this.label, {super.key, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            height: 34,
            padding: const EdgeInsets.symmetric(horizontal: 12),
            alignment: Alignment.center,
            decoration: const ShapeDecoration(color: Colors.white, shape: StadiumBorder()),
            child: Text(label, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
        ),
      );
}

/// Foto (ou cor com a inicial) num quadrado de cantos contínuos.
class ReserveSquare extends StatelessWidget {
  final String? imageUrl;
  final String name;
  final double size;
  final double radius;
  const ReserveSquare({super.key, this.imageUrl, required this.name, this.size = 52, this.radius = 16});

  static const _colors = [
    Color(0xFF4F6B4A), Color(0xFF8A4B3C), Color(0xFF3E5A7A), Color(0xFF6B5A2E), Color(0xFF6A4A6E), Color(0xFF3A3733),
  ];

  @override
  Widget build(BuildContext context) {
    final color = _colors[name.codeUnits.fold<int>(0, (t, c) => t + c) % _colors.length];
    final initial = name.trim().isEmpty ? '?' : name.trim().substring(0, 1).toUpperCase();
    final fallback = Container(
      color: color,
      alignment: Alignment.center,
      child: Text(initial, style: TextStyle(fontSize: size * 0.4, fontWeight: FontWeight.w700, color: Colors.white)),
    );
    return SizedBox(
      width: size,
      height: size,
      child: ClipRSuperellipse(
        borderRadius: BorderRadius.circular(radius),
        child: (imageUrl ?? '').isEmpty
            ? fallback
            : SizedNetworkImage(imageUrl!, width: size, height: size, fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) => fallback),
      ),
    );
  }
}

/// A linha do parceiro no topo dos popups: foto 52, «Terraço Lx, Pacote
/// Sunset» 16 e o evento 13.
class ReservePartnerRow extends StatelessWidget {
  final String? imageUrl;
  final String name;
  final String title;
  final String subtitle;
  const ReservePartnerRow({super.key, this.imageUrl, required this.name, required this.title, required this.subtitle});

  @override
  Widget build(BuildContext context) => Row(children: [
        ReserveSquare(imageUrl: imageUrl, name: name),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
            Text(title,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (subtitle.isNotEmpty)
              Text(subtitle,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
      ]);
}

/// Grupo `#F2F2F2` com as linhas separadas por `#D9D9D9`.
class ReserveGroup extends StatelessWidget {
  final List<Widget> rows;
  const ReserveGroup(this.rows, {super.key});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
        decoration: ShapeDecoration(color: kPickGrey, shape: _shape(22)),
        child: Column(children: [
          for (final (i, r) in rows.indexed)
            Container(
              decoration: i == 0 ? null : const BoxDecoration(border: Border(top: BorderSide(color: kRowLine))),
              child: r,
            ),
        ]),
      );
}

/// O dia num calendário pequeno: faixa cinzenta com o mês e o número.
class ReserveDayBadge extends StatelessWidget {
  final DateTime date;
  const ReserveDayBadge(this.date, {super.key});

  static const _m = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

  @override
  Widget build(BuildContext context) => SizedBox(
        width: 48,
        height: 52,
        child: ClipRSuperellipse(
          borderRadius: BorderRadius.circular(12),
          child: ColoredBox(
            color: Colors.white,
            child: Column(children: [
              Container(
                height: 18,
                color: kPickLine,
                alignment: Alignment.center,
                child: Text(_m[date.month - 1],
                    style: const TextStyle(fontSize: 11, letterSpacing: 1, fontWeight: FontWeight.w700, color: Colors.white)),
              ),
              Expanded(
                child: Center(
                  child: Text('${date.day}',
                      style: const TextStyle(
                          fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink, fontFeatures: [FontFeature.tabularFigures()])),
                ),
              ),
            ]),
          ),
        ),
      );
}

/// Pílula 52 `#F2F2F2` com «−» e «+» pretos 34 e o número ao meio (que
/// também se escreve, como o `TypeCount`). Sem número: [placeholder].
class ReserveStepper extends StatelessWidget {
  final int? value;
  final ValueChanged<int> onChanged;
  final int min;
  final int max;
  final String placeholder;
  final int start;
  const ReserveStepper({
    super.key,
    required this.value,
    required this.onChanged,
    this.min = 1,
    this.max = 9999,
    this.placeholder = 'Mais ou menos',
    this.start = 10,
  });

  Widget _round(IconData icon, String label, VoidCallback? onTap) => Semantics(
        button: true,
        label: label,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            width: 34,
            height: 34,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: onTap == null ? AppTheme.ink.withValues(alpha: 0.25) : AppTheme.ink,
            ),
            child: Icon(icon, size: 16, color: Colors.white),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final v = value;
    return Container(
      height: 52,
      padding: const EdgeInsets.symmetric(horizontal: 9),
      decoration: const ShapeDecoration(color: kPickGrey, shape: StadiumBorder()),
      child: Row(children: [
        _round(Hi.minus, 'Menos', v == null ? () => onChanged(start) : (v > min ? () => onChanged(v - 1) : null)),
        Expanded(
          child: Center(
            child: v == null
                ? SnappyTap(
                    onTap: () => onChanged(start),
                    child: Text(placeholder, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  )
                : TypeCount(value: v, onChanged: onChanged, min: min, max: max, width: 64),
          ),
        ),
        _round(Hi.plus, 'Mais', v == null ? () => onChanged(start) : (v < max ? () => onChanged(v + 1) : null)),
      ]),
    );
  }
}

const reserveMonthNames = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];
const reserveWeekdayNames = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];

/// «sábado, 14 de março».
String reserveLongDay(DateTime d) => '${reserveWeekdayNames[d.weekday - 1]}, ${d.day} de ${reserveMonthNames[d.month - 1]}';

String reserveCap(String s) => s.isEmpty ? s : '${s[0].toUpperCase()}${s.substring(1)}';

/// Calendário do mês (segunda primeiro): o dia escolhido num círculo
/// verde; os que não dá riscados a `#CFCFCF` e sem toque.
class ReserveCalendar extends StatelessWidget {
  final DateTime month;
  final DateTime? selected;
  final bool Function(DateTime day) blocked;
  final ValueChanged<DateTime> onPick;
  final ValueChanged<DateTime> onMonth;
  final DateTime firstMonth;
  const ReserveCalendar({
    super.key,
    required this.month,
    required this.selected,
    required this.blocked,
    required this.onPick,
    required this.onMonth,
    required this.firstMonth,
  });

  static bool same(DateTime a, DateTime b) => a.year == b.year && a.month == b.month && a.day == b.day;

  Widget _arrow(String t, String label, VoidCallback? onTap) => Semantics(
        button: true,
        label: label,
        child: SnappyTap(
          onTap: onTap,
          child: Opacity(
            opacity: onTap == null ? 0.3 : 1,
            child: SizedBox(
              width: 36,
              height: 36,
              child: Center(child: Text(t, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            ),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final first = DateTime(month.year, month.month);
    final days = DateTime(month.year, month.month + 1, 0).day;
    final lead = first.weekday - 1;
    final canBack = DateTime(month.year, month.month).isAfter(DateTime(firstMonth.year, firstMonth.month));
    final title = reserveCap(reserveMonthNames[month.month - 1]) + (month.year == DateTime.now().year ? '' : ' ${month.year}');
    final cells = <Widget>[
      for (var i = 0; i < lead; i++) const SizedBox(),
      for (var d = 1; d <= days; d++) _day(context, DateTime(month.year, month.month, d)),
    ];
    while (cells.length % 7 != 0) {
      cells.add(const SizedBox());
    }
    return Container(
      padding: const EdgeInsets.fromLTRB(12, 14, 12, 14),
      decoration: ShapeDecoration(color: kPickGrey, shape: _shape(22)),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(4, 0, 4, 6),
          child: Row(children: [
            _arrow('‹', 'Mês anterior', canBack ? () => onMonth(DateTime(month.year, month.month - 1)) : null),
            Expanded(
              child: Text(title,
                  textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
            _arrow('›', 'Mês seguinte', () => onMonth(DateTime(month.year, month.month + 1))),
          ]),
        ),
        Row(children: [
          for (final l in const ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'])
            Expanded(
              child: Text(l,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 12, letterSpacing: 1, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            ),
        ]),
        const SizedBox(height: 6),
        for (var r = 0; r < cells.length ~/ 7; r++)
          Padding(
            padding: const EdgeInsets.only(top: 4),
            child: Row(children: [for (var c = 0; c < 7; c++) Expanded(child: cells[r * 7 + c])]),
          ),
      ]),
    );
  }

  Widget _day(BuildContext context, DateTime d) {
    final off = blocked(d);
    final on = selected != null && same(selected!, d);
    final text = Text('${d.day}',
        style: TextStyle(
          fontSize: 15,
          fontWeight: FontWeight.w700,
          color: off ? kStruck : (on ? Colors.white : AppTheme.ink),
          decoration: off ? TextDecoration.lineThrough : null,
          decorationColor: kStruck,
          fontFeatures: const [FontFeature.tabularFigures()],
        ));
    final cell = Center(
      child: AnimatedContainer(
        duration: _t(context),
        width: 42,
        height: 42,
        alignment: Alignment.center,
        decoration: BoxDecoration(shape: BoxShape.circle, color: on ? AppTheme.accentOliveDark : Colors.transparent),
        child: text,
      ),
    );
    if (off) return ExcludeSemantics(child: cell);
    return Semantics(
      button: true,
      selected: on,
      label: reserveLongDay(d),
      child: SnappyTap(onTap: () => onPick(d), child: cell),
    );
  }
}

/// «Desliza para pagar»: pílula preta 60 com o botão branco 48; arrasta-se
/// até ao fim para pagar. Ao largar antes do fim volta com uma mola que
/// mantém a velocidade do dedo (skill `animacoes`). Tocar, Enter / Espaço
/// e os leitores de ecrã também pagam.
class SlideToPay extends StatefulWidget {
  final String label;

  /// Chamado de forma síncrona no gesto (a janela do Apple Pay / Google
  /// Pay na web tem de abrir no próprio toque).
  final VoidCallback? onComplete;
  final bool busy;
  const SlideToPay({super.key, this.label = 'Desliza para pagar', required this.onComplete, this.busy = false});

  @override
  State<SlideToPay> createState() => _SlideToPayState();
}

class _SlideToPayState extends State<SlideToPay> with SingleTickerProviderStateMixin {
  late final AnimationController _x = AnimationController.unbounded(vsync: this);
  double _max = 1;

  @override
  void didUpdateWidget(SlideToPay old) {
    super.didUpdateWidget(old);
    // Acabou de pagar (ou falhou): o botão volta ao início.
    if (old.busy && !widget.busy) _springTo(0, 0);
  }

  @override
  void dispose() {
    _x.dispose();
    super.dispose();
  }

  bool get _enabled => widget.onComplete != null && !widget.busy;

  void _springTo(double target, double velocity) {
    if (_still(context)) {
      _x.value = target;
      return;
    }
    _x.animateWith(SpringSimulation(
      const SpringDescription(mass: 1, stiffness: 500, damping: 45),
      _x.value,
      target,
      velocity,
    ));
  }

  void _complete() {
    if (!_enabled) return;
    HapticFeedback.mediumImpact();
    _springTo(_max, 0);
    widget.onComplete!();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _max = (c.maxWidth - 60).clamp(1, double.infinity);
        return FocusableActionDetector(
          enabled: _enabled,
          actions: {ActivateIntent: CallbackAction<ActivateIntent>(onInvoke: (_) => _complete())},
          child: Semantics(
            button: true,
            enabled: _enabled,
            label: widget.label,
            onTap: _enabled ? _complete : null,
            child: AnimatedOpacity(
              duration: _t(context),
              opacity: widget.onComplete == null ? 0.4 : 1,
              child: GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: _complete,
                onHorizontalDragUpdate: _enabled ? (d) => _x.value = (_x.value + d.delta.dx).clamp(0, _max) : null,
                onHorizontalDragEnd: _enabled
                    ? (d) {
                        if (_x.value >= _max * 0.85) {
                          _complete();
                        } else {
                          _springTo(0, d.velocity.pixelsPerSecond.dx);
                        }
                      }
                    : null,
                child: Container(
                  height: 60,
                  padding: const EdgeInsets.all(6),
                  decoration: const ShapeDecoration(color: AppTheme.ink, shape: StadiumBorder()),
                  child: Stack(alignment: Alignment.centerLeft, children: [
                    Positioned.fill(
                      child: Padding(
                        padding: const EdgeInsets.only(left: 54),
                        child: Center(
                          child: widget.busy
                              ? const SizedBox(
                                  width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                              : ExcludeSemantics(
                                  child: Text(widget.label,
                                      style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: Colors.white)),
                                ),
                        ),
                      ),
                    ),
                    AnimatedBuilder(
                      animation: _x,
                      builder: (context, child) => Transform.translate(offset: Offset(_x.value.clamp(0, _max), 0), child: child),
                      child: Container(
                        width: 48,
                        height: 48,
                        decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.white),
                        alignment: Alignment.center,
                        child: const Text('»', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      ),
                    ),
                  ]),
                ),
              ),
            ),
          ),
        );
      });
}
