import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import 'address_picker.dart' show showAddressPicker;
import 'island_sheet.dart';
import '../hero_icons.dart';
import 'line_icon.dart';
import 'snappy_tap.dart';
import 'app_progress.dart';

/// Peças do onboarding (mockup "Onboarding", 2026-11-12), com os
/// tamanhos do DESIGN.md: título 28, subtítulo 14, botões 52, filtros 38,
/// cartões cantos 22, grupos 12 com espaçamento 2.

const _green = Color(0xFF4F6B4A);
const _track = Color(0xFFE0E0E0);

/// Barra de progresso (10, verde) com a percentagem à direita.
class OnbProgress extends StatelessWidget {
  final double value; // 0..1
  final Color labelColor;
  const OnbProgress({super.key, required this.value, this.labelColor = AppTheme.inkMuted});

  @override
  Widget build(BuildContext context) {
    return Row(children: [
      // A barra da app: a estrela na ponta e animada (DESIGN.md §6, 2026-11-21).
      Expanded(child: AppProgressBar(value: value, height: 10, track: _track)),
      const SizedBox(width: 12),
      SizedBox(
        width: 34,
        child: Text('${(value * 100).round()}%',
            textAlign: TextAlign.right,
            style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: labelColor)),
      ),
    ]);
  }
}

/// Botão redondo branco 44 com a seta.
class OnbBackButton extends StatelessWidget {
  final VoidCallback onTap;
  const OnbBackButton({super.key, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        label: 'Voltar',
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
            alignment: Alignment.center,
            child: const Icon(Hi.chevronLeft, size: 20, color: Colors.white),
          ),
        ),
      );
}

/// Botão em pílula 52: principal preto ou secundário branco com contorno.
class OnbButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final bool secondary;
  final bool loading;
  const OnbButton({super.key, required this.label, this.onPressed, this.secondary = false, this.loading = false});

  @override
  Widget build(BuildContext context) {
    const text = TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 17, fontWeight: FontWeight.w700);
    final child = loading
        ? SizedBox(
            width: 20,
            height: 20,
            child: CircularProgressIndicator(strokeWidth: 2, color: secondary ? AppTheme.ink : Colors.white))
        : Text(label);
    return SizedBox(
      height: 56,
      width: double.infinity,
      child: secondary
          ? OutlinedButton(
              onPressed: loading ? null : onPressed,
              style: OutlinedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: AppTheme.ink,
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                shape: const StadiumBorder(),
                textStyle: text,
              ),
              child: child,
            )
          : FilledButton(
              onPressed: loading ? null : onPressed,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                disabledBackgroundColor: AppTheme.ink.withValues(alpha: 0.35),
                disabledForegroundColor: Colors.white,
                shape: const StadiumBorder(),
                textStyle: text,
              ),
              child: child,
            ),
    );
  }
}

/// Título de grupo em maiúsculas: 12, espaçamento 2, negrito, cinzento.
class OnbGroupLabel extends StatelessWidget {
  final String text;
  const OnbGroupLabel(this.text, {super.key});

  @override
  Widget build(BuildContext context) => Text(text.toUpperCase(),
      style: const TextStyle(fontSize: 13, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted));
}

/// Texto pequeno de apoio (13, cinzento).
class OnbMeta extends StatelessWidget {
  final String text;
  final TextAlign align;
  const OnbMeta(this.text, {super.key, this.align = TextAlign.start});

  @override
  Widget build(BuildContext context) => Text(text,
      textAlign: align, style: const TextStyle(fontSize: 13, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.inkMuted));
}

/// Ecrã de uma pergunta: topo (voltar + barra + saltar), "N DE M", título
/// 28, subtítulo 14, conteúdo e botão em baixo.
class OnbStep extends StatelessWidget {
  final VoidCallback? onBack;
  final double progress;
  final String? kicker;
  final String title;
  final String? subtitle;
  final Widget child;
  final String? skipLabel;
  final VoidCallback? onSkip;
  final Widget? bottom;
  final bool scroll;

  const OnbStep({
    super.key,
    this.onBack,
    required this.progress,
    this.kicker,
    required this.title,
    this.subtitle,
    required this.child,
    this.skipLabel,
    this.onSkip,
    this.bottom,
    this.scroll = true,
  });

  @override
  Widget build(BuildContext context) {
    final body = Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      const SizedBox(height: 28),
      if (kicker != null) ...[OnbGroupLabel(kicker!), const SizedBox(height: 8)],
      // Escala de primeiro contacto (DESIGN.md §6): título 32.
      Text(title, style: const TextStyle(fontSize: 32, height: 1.15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      if (subtitle != null) ...[
        const SizedBox(height: 8),
        Text(subtitle!, style: const TextStyle(fontSize: 17, height: 1.45, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
      ],
      const SizedBox(height: 24),
      child,
      const SizedBox(height: 16),
    ]);
    return Scaffold(
      backgroundColor: AppTheme.background,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 24),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            SizedBox(
              height: 44,
              child: Row(children: [
                if (onBack != null) ...[OnbBackButton(onTap: onBack!), const SizedBox(width: 12)],
                Expanded(child: OnbProgress(value: progress)),
                if (skipLabel != null) ...[
                  const SizedBox(width: 12),
                  SnappyTap(
                    onTap: onSkip,
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 10),
                      child: Text(skipLabel!,
                          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                    ),
                  ),
                ],
              ]),
            ),
            Expanded(child: scroll ? SingleChildScrollView(child: body) : body),
            ?bottom,
          ]),
        ),
      ),
    );
  }
}

/// Cartão de opção: branco, cantos 22, sem linha; escolhido = verde.
class OnbOption extends StatelessWidget {
  final String title;
  final String subtitle;
  final bool selected;
  final VoidCallback onTap;
  const OnbOption({super.key, required this.title, required this.subtitle, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      selected: selected,
      child: SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(color: selected ? _green : Colors.white, borderRadius: BorderRadius.circular(22)),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(title,
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
                const SizedBox(height: 4),
                Text(subtitle,
                    style: TextStyle(
                        fontSize: 13,
                        height: 1.4,
                        fontWeight: FontWeight.w600,
                        color: selected ? Colors.white.withValues(alpha: 0.85) : AppTheme.inkMuted)),
              ]),
            ),
            const SizedBox(width: 14),
            Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                color: selected ? Colors.white : null,
                shape: BoxShape.circle,
                border: selected ? null : Border.all(color: const Color(0xFFC9C3B8), width: 1.5),
              ),
              alignment: Alignment.center,
              child: selected ? const LineIcon(LineIcon.check, size: 14, color: _green, stroke: 3) : null,
            ),
          ]),
        ),
      ),
    );
  }
}

/// Filtros em pílula 38: verde quando escolhido, branco sem contorno.
class OnbChips extends StatelessWidget {
  final List<String> items;
  final Set<String> selected;
  final ValueChanged<String> onTap;
  const OnbChips({super.key, required this.items, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Wrap(spacing: 8, runSpacing: 8, children: [
      for (final i in items)
        SnappyTap(
          onTap: () => onTap(i),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 140),
            height: 38,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            decoration: BoxDecoration(color: selected.contains(i) ? _green : Colors.white, borderRadius: BorderRadius.circular(19)),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Flexible(
                child: Text(i,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                        fontSize: 14, fontWeight: FontWeight.w700, color: selected.contains(i) ? Colors.white : AppTheme.ink)),
              ),
            ]),
          ),
        ),
    ]);
  }
}

/// Caixa de texto em pílula 52 (texto 15), com contador e erro (linha
/// vermelha 1,5 + ponto + frase).
class OnbField extends StatelessWidget {
  final TextEditingController controller;
  final String? label;
  final String? hint;
  final int? maxLength;
  final String? error;
  final Color fill;
  final bool autofocus;
  final TextInputType? keyboardType;
  final Widget? trailing;
  final ValueChanged<String>? onChanged;

  const OnbField({
    super.key,
    required this.controller,
    this.label,
    this.hint,
    this.maxLength,
    this.error,
    this.fill = Colors.white,
    this.autofocus = false,
    this.keyboardType,
    this.trailing,
    this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    const red = Color(0xFFC8553D);
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      if (label != null) ...[OnbGroupLabel(label!), const SizedBox(height: 8)],
      Container(
        height: 52,
        padding: const EdgeInsets.symmetric(horizontal: 18),
        decoration: BoxDecoration(
          color: fill,
          borderRadius: BorderRadius.circular(26),
          border: error != null ? Border.all(color: red, width: 1.5) : null,
        ),
        child: Row(children: [
          Expanded(
            child: TextField(
              controller: controller,
              autofocus: autofocus,
              keyboardType: keyboardType,
              onChanged: onChanged,
              inputFormatters: [if (maxLength != null) LengthLimitingTextInputFormatter(maxLength)],
              cursorColor: error != null ? red : _green,
              style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.ink),
              decoration: InputDecoration(
                isCollapsed: true,
                filled: false,
                border: InputBorder.none,
                enabledBorder: InputBorder.none,
                focusedBorder: InputBorder.none,
                hintText: hint,
                hintStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: Color(0xFF9A948A)),
              ),
            ),
          ),
          if (maxLength != null)
            ValueListenableBuilder(
              valueListenable: controller,
              builder: (context, v, _) => Text('${v.text.characters.length}/$maxLength',
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
            ),
          ?trailing,
        ]),
      ),
      if (error != null) ...[
        const SizedBox(height: 10),
        Row(children: [
          Container(width: 8, height: 8, decoration: const BoxDecoration(color: red, shape: BoxShape.circle)),
          const SizedBox(width: 8),
          Expanded(child: Text(error!, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: red))),
        ]),
      ],
    ]);
  }
}

/// Grupo de linhas (cartão branco 22, linhas 56, divisórias #ECE7DC).
class OnbRows extends StatelessWidget {
  final List<(String, String, VoidCallback)> rows;
  const OnbRows({super.key, required this.rows});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(children: [
        for (var i = 0; i < rows.length; i++)
          SnappyTap(
            onTap: rows[i].$3,
            child: Container(
              constraints: const BoxConstraints(minHeight: 56),
              decoration: BoxDecoration(
                  border: i < rows.length - 1 ? const Border(bottom: BorderSide(color: Color(0xFFD9D9D9))) : null),
              child: Row(children: [
                Text(rows[i].$1, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(rows[i].$2,
                      textAlign: TextAlign.right,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                ),
                const SizedBox(width: 6),
                const LineIcon(LineIcon.forward, size: 16, color: AppTheme.inkMuted, stroke: 1.8),
              ]),
            ),
          ),
      ]),
    );
  }
}

/// Ícones dos tipos de evento (traço, como no mockup).
const onbTypeIcons = <EventType, (String, List<(double, double, double)>)>{
  EventType.wedding: ('M10 4l2 3 2-3', [(9, 14, 5), (15, 14, 5)]),
  EventType.birthday: ('M4 21h16M5 21v-7h14v7M5 17c2 1.5 4 1.5 7 0s5-1.5 7 0M12 14V9M12 6.5c-1-1-1-2 0-3 1 1 1 2 0 3z', []),
  EventType.baptism: ('M12 3c3.5 4.5 6 7.6 6 11a6 6 0 0 1-12 0c0-3.4 2.5-6.5 6-11z', []),
  EventType.communion: ('M4 15c4 0 6-2 8-6 1 3 4 5 8 5-2 4-6 6-10 6-3 0-5-2-6-5zM12 9c-1-3-3-5-6-5 0 3 2 5 6 5z', []),
  EventType.engagement: ('M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z', []),
  EventType.babyShower: ('M10 9h.01M14 9h.01M10.5 11.5c1 .7 2 .7 3 0M7 21c1-3 3-4 5-4s4 1 5 4', [(12, 9, 5)]),
  EventType.graduation: ('M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5M22 9v6', []),
  EventType.vowRenewal: ('M10 4l2 3 2-3', [(9, 14, 5), (15, 14, 5)]),
  EventType.corporate: ('M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM9 7V5h6v2M3 12h18', []),
  EventType.party: ('M4 20l5-14 9 9zM14 4v2M18 8h2M17 5l1.5-1.5', []),
  EventType.nightlife: ('M20 14A8 8 0 1 1 10 4a6.5 6.5 0 0 0 10 10z', []),
  EventType.concert: ('M9 18V5l11-2v13', [(6, 18, 3), (17, 16, 3)]),
  EventType.festival: ('M3 20L12 4l9 16zM12 4v16M8 20l4-6 4 6', []),
  // Passagem de Ano: fogo de artifício.
  EventType.newYear: ('M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8', []),
  EventType.other: ('M12 5v14M5 12h14', []),
};

/// Nome curto na grelha ("Noite" em vez de "Discoteca / noite").
String onbTypeLabel(EventType t) => t == EventType.nightlife ? 'Noite' : t.label;

/// Grelha de 3 colunas com os tipos de evento.
class OnbTypeGrid extends StatelessWidget {
  final EventType? selected;
  final ValueChanged<EventType> onTap;
  const OnbTypeGrid({super.key, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    // Só os sete que se escolhem (migração 230); os outros ícones ficam
    // para mostrar eventos antigos.
    final types = EventType.selectable;
    return GridView(
      shrinkWrap: true,
      padding: EdgeInsets.zero,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3, mainAxisSpacing: 8, crossAxisSpacing: 8, mainAxisExtent: 82),
      children: [
        for (final t in types)
          SnappyTap(
            onTap: () => onTap(t),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 140),
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 10),
              decoration: BoxDecoration(color: t == selected ? _green : Colors.white, borderRadius: BorderRadius.circular(22)),
              child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                LineIcon(onbTypeIcons[t]!.$1,
                    circles: onbTypeIcons[t]!.$2, size: 24, stroke: 1.8, color: t == selected ? Colors.white : AppTheme.ink),
                const SizedBox(height: 6),
                Text(onbTypeLabel(t),
                    textAlign: TextAlign.center,
                    maxLines: 2,
                    style: TextStyle(
                        fontSize: 12, height: 1.15, fontWeight: FontWeight.w700, color: t == selected ? Colors.white : AppTheme.ink)),
              ]),
            ),
          ),
      ],
    );
  }
}


// ---- Folhas do passo "Quando e onde?" (mockup Ev3b / Ev3c, 2026-11-14) ----

const _months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const _monthsShort = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const _weekdays = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];

/// Cabeçalho das folhas: título 22 + fechar redondo 36.
class OnbSheetHeader extends StatelessWidget {
  final String title;
  const OnbSheetHeader(this.title, {super.key});

  @override
  Widget build(BuildContext context) => Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Center(
          child: Container(
            width: 40,
            height: 5,
            decoration: BoxDecoration(color: const Color(0xFFD8D3C9), borderRadius: BorderRadius.circular(3)),
          ),
        ),
        const SizedBox(height: 14),
        Row(children: [
          Expanded(child: Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink))),
          _SheetRound(icon: Hi.xMark, onTap: () => Navigator.of(context).pop()),
        ]),
      ]);
}

class _SheetRound extends StatelessWidget {
  final IconData icon;
  final VoidCallback? onTap;
  const _SheetRound({required this.icon, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Opacity(
          opacity: onTap == null ? 0.35 : 1,
          child: Container(
            // Botão redondo preto 44, ícone branco sólido 20 (DESIGN.md §2).
            width: 44,
            height: 44,
            decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
            alignment: Alignment.center,
            child: Icon(icon, size: 20, color: Colors.white),
          ),
        ),
      );
}

/// Calendário numa folha: mês com setas, semana a começar à segunda,
/// dia escolhido num círculo verde 40; botão "Escolher {dia}".
Future<DateTime?> showOnbDateSheet(
  BuildContext context, {
  DateTime? initial,
  required DateTime first,
  required DateTime last,
  String title = 'Quando é?',
}) =>
    showIslandSheet<DateTime>(
      context: context,
      isScrollControlled: true,
      builder: (ctx) => _DateSheet(initial: initial, first: first, last: last, title: title),
    );

class _DateSheet extends StatefulWidget {
  final DateTime? initial;
  final DateTime first;
  final DateTime last;
  final String title;
  const _DateSheet({required this.initial, required this.first, required this.last, required this.title});

  @override
  State<_DateSheet> createState() => _DateSheetState();
}

class _DateSheetState extends State<_DateSheet> {
  late DateTime? _picked = widget.initial;
  late DateTime _month = DateTime((widget.initial ?? widget.first).year, (widget.initial ?? widget.first).month);

  DateTime get _firstMonth => DateTime(widget.first.year, widget.first.month);
  DateTime get _lastMonth => DateTime(widget.last.year, widget.last.month);

  bool _allowed(DateTime d) => !d.isBefore(DateTime(widget.first.year, widget.first.month, widget.first.day)) && !d.isAfter(widget.last);

  @override
  Widget build(BuildContext context) {
    final daysInMonth = DateTime(_month.year, _month.month + 1, 0).day;
    final lead = DateTime(_month.year, _month.month, 1).weekday - 1; // segunda = 0
    final cells = <Widget>[
      for (final w in const ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'])
        Center(
          child: Text(w, style: const TextStyle(fontSize: 12, letterSpacing: 1, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        ),
      for (var i = 0; i < lead; i++) const SizedBox.shrink(),
      for (var d = 1; d <= daysInMonth; d++) _day(DateTime(_month.year, _month.month, d)),
    ];
    final p = _picked;
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 10, 20, 20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        OnbSheetHeader(widget.title),
        const SizedBox(height: 16),
        Row(children: [
          _SheetRound(
            icon: Hi.chevronLeft,
            onTap: _month.isAfter(_firstMonth) ? () => setState(() => _month = DateTime(_month.year, _month.month - 1)) : null,
          ),
          Expanded(
            child: Text('${_capFirst(_months[_month.month - 1])} de ${_month.year}',
                textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          _SheetRound(
            icon: Hi.chevronRight,
            onTap: _month.isBefore(_lastMonth) ? () => setState(() => _month = DateTime(_month.year, _month.month + 1)) : null,
          ),
        ]),
        const SizedBox(height: 12),
        GridView.count(
          crossAxisCount: 7,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          mainAxisSpacing: 2,
          childAspectRatio: 1.15,
          children: cells,
        ),
        const SizedBox(height: 14),
        OnbButton(
          label: p == null ? 'Escolher' : 'Escolher ${_weekdays[p.weekday - 1]}, ${p.day} ${_monthsShort[p.month - 1]}',
          onPressed: p == null ? null : () => Navigator.of(context).pop(p),
        ),
      ]),
    );
  }

  Widget _day(DateTime d) {
    final ok = _allowed(d);
    final sel = _picked != null && _picked!.year == d.year && _picked!.month == d.month && _picked!.day == d.day;
    return SnappyTap(
      onTap: ok ? () => setState(() => _picked = d) : null,
      child: Center(
        child: Container(
          width: 40,
          height: 40,
          alignment: Alignment.center,
          decoration: sel ? const BoxDecoration(color: _green, shape: BoxShape.circle) : null,
          child: Text(
            '${d.day}',
            style: TextStyle(
              fontSize: 15,
              fontWeight: sel ? FontWeight.w700 : FontWeight.w600,
              color: sel ? Colors.white : ok ? AppTheme.ink : const Color(0xFFC9C3B8),
            ),
          ),
        ),
      ),
    );
  }
}

String _capFirst(String s) => s.isEmpty ? s : s[0].toUpperCase() + s.substring(1);

/// "Onde é?": caixa de texto + atalho para a zona da conta.
Future<String?> showOnbPlaceSheet(
  BuildContext context, {
  required String current,
  String? homeZone,
  String? Function(String)? validate,
}) async {
  // Seletor de moradas com o Google (pedido do Rafael, 2026-11-20): em vez
  // de escrever à mão, procura-se o espaço ou a morada e escolhe-se.
  final zone = homeZone?.trim() ?? '';
  final picked = await showAddressPicker(
    context,
    title: 'Onde é?',
    initialQuery: current.trim().isEmpty ? null : current.trim(),
    shortcut: zone.isNotEmpty && zone != current.trim() ? ('Usar a tua zona', zone) : null,
  );
  if (picked == null) return null;
  final v = picked.label;
  return validate?.call(v) == null ? v : null;
}

