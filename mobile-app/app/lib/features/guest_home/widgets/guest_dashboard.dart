import 'dart:async';
import 'dart:math' as math;

import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import '../../../shared/widgets/count_badge.dart';

import '../../../core/guest_home/guest_home_providers.dart' show TableMate;
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/event/date_format_pt.dart';
import '../../../core/event/pastel_colors.dart';
import '../../../shared/widgets/app_progress.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/sized_network_image.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart' show V2Avatar, V2RoundButton;
import 'guest_home_sections.dart' show programMinutes;

// Painel do convidado novo (mockups «Painel do convidado», 2026-11-21;
// DESIGN.md §6.4): sem caixas brancas, só o destaque (resumo / agora / a tua
// resposta) numa caixa branca com contorno; uma linha antes de cada bloco.

const _caps = TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted);
const _meta = TextStyle(fontSize: 13, color: AppTheme.inkMuted);
const _title17 = TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink);

/// Caixa branca de destaque: contorno preto 1,5, cantos 22, sem sombra.
BoxDecoration dashHighlight() =>
    BoxDecoration(color: Colors.white, border: AppTheme.cardBorder, borderRadius: BorderRadius.circular(22));

/// Botão 36 (preto, ou com contorno quando é secundário).
class DashButton36 extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  final bool outlined;
  const DashButton36(this.label, {super.key, required this.onTap, this.outlined = false});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          height: 36,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: outlined ? Colors.white : AppTheme.action,
            border: outlined ? Border.all(color: AppTheme.ink, width: 1.5) : null,
            borderRadius: BorderRadius.circular(18),
          ),
          child: Text(label,
              style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: outlined ? AppTheme.ink : Colors.white)),
        ),
      );
}

/// Topo: a foto do evento com a seta para sair à esquerda e, à direita, o
/// grupo do evento e «Como chegar» (botões redondos pretos, §2).
class DashCover extends StatelessWidget {
  final GuestEvent event;
  final String title;
  final String meta;
  final VoidCallback onExit;
  final VoidCallback? onGroup;
  final VoidCallback? onMap;

  /// Mensagens por ler no grupo (0 = sem contador).
  final int groupUnread;
  const DashCover({
    super.key,
    required this.event,
    required this.title,
    required this.meta,
    required this.onExit,
    this.onGroup,
    this.onMap,
    this.groupUnread = 0,
  });

  @override
  Widget build(BuildContext context) {
    final inset = MediaQuery.paddingOf(context).top;
    final photo = event.coverPhotoUrl;
    return ClipRRect(
      borderRadius: const BorderRadius.vertical(bottom: Radius.circular(40)),
      child: SizedBox(
        height: 260 + inset,
        child: Stack(fit: StackFit.expand, children: [
          photo == null
              ? const ColoredBox(color: Color(0xFF8E7A62))
              : SizedNetworkImage(photo,
                  fit: BoxFit.cover, errorBuilder: (context, error, stack) => const ColoredBox(color: Color(0xFF8E7A62))),
          const DecoratedBox(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [Color(0x26171713), Color(0x00171713), Color(0x8C171713)],
                stops: [0, 0.35, 1],
              ),
            ),
          ),
          Positioned(
            left: AppTheme.screenMargin,
            right: AppTheme.screenMargin,
            top: inset + 12,
            child: Row(children: [
              V2RoundButton(icon: Hi.chevronLeft, tooltip: 'Sair', onTap: onExit),
              const Spacer(),
              if (onGroup != null)
                WithCount(
                  count: groupUnread,
                  child: V2RoundButton(icon: Hi.chatBubbleOvalLeft, tooltip: 'Grupo do evento', onTap: onGroup),
                ),
              if (onGroup != null && onMap != null) const SizedBox(width: 8),
              if (onMap != null) V2RoundButton(icon: Hi.mapPin, tooltip: 'Como chegar', onTap: onMap),
            ]),
          ),
          Positioned(
            left: AppTheme.screenMargin,
            right: AppTheme.screenMargin,
            bottom: 22,
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(event.eventType.label.toUpperCase(),
                  style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: Color(0xE6FFFFFF))),
              const SizedBox(height: 4),
              Text(title,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 28, height: 1.15, fontWeight: FontWeight.w700, color: Colors.white)),
              if (meta.isNotEmpty) ...[
                const SizedBox(height: 4),
                Text(meta, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: Color(0xEBFFFFFF))),
              ],
            ]),
          ),
        ]),
      ),
    );
  }
}

/// O resumo do topo (o destaque): quando é e, para quem vai, «Vais com…».
class DashSummary extends StatelessWidget {
  final String label;
  final String big;
  final String unit;
  final String? who;
  final String? whoSub;
  final List<String> whoNames;
  final VoidCallback? onChange;

  /// «Alterar» (com contorno) para quem vai; «Mudar» (preto) para quem disse
  /// que não vai.
  final String changeLabel;
  final bool changeFilled;
  const DashSummary({
    super.key,
    required this.label,
    required this.big,
    required this.unit,
    this.who,
    this.whoSub,
    this.whoNames = const [],
    this.onChange,
    this.changeLabel = 'Alterar',
    this.changeFilled = false,
  });

  @override
  Widget build(BuildContext context) => Container(
        margin: const EdgeInsets.only(top: 16),
        padding: const EdgeInsets.all(18),
        decoration: dashHighlight(),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text(label.toUpperCase(), style: _caps),
          const SizedBox(height: 4),
          Row(crossAxisAlignment: CrossAxisAlignment.baseline, textBaseline: TextBaseline.alphabetic, children: [
            Text(big, style: const TextStyle(fontSize: 40, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(width: 8),
            Expanded(child: Text(unit, maxLines: 1, overflow: TextOverflow.ellipsis, style: _meta)),
          ]),
          if (who != null) ...[
            const SizedBox(height: 12),
            const Divider(height: 1, thickness: 1, color: AppTheme.line),
            const SizedBox(height: 12),
            Row(children: [
              if (whoNames.isNotEmpty) ...[
              SizedBox(
                width: 32.0 + 22 * (math.min(whoNames.length, 3) - 1).clamp(0, 2).toDouble(),
                height: 32,
                child: Stack(children: [
                  for (final (i, n) in whoNames.take(3).indexed)
                    Positioned(left: 22.0 * i, child: V2Avatar(n, size: 32)),
                ]),
              ),
              const SizedBox(width: 10),
              ],
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(who!, style: _title17),
                  if (whoSub != null) Text(whoSub!, style: _meta),
                ]),
              ),
              if (onChange != null) DashButton36(changeLabel, onTap: onChange!, outlined: !changeFilled),
            ]),
          ],
        ]),
      );
}

/// «Agora»: o momento do programa a decorrer, a barra e «A seguir» — o
/// destaque do dia (caixa branca com contorno).
class DashNow extends StatefulWidget {
  final List<ProgramItem> program;
  const DashNow({super.key, required this.program});

  /// Há algum momento do programa já a decorrer?
  static bool started(List<ProgramItem> program) {
    final now = DateTime.now();
    final nowMin = now.hour * 60 + now.minute;
    return program.any((p) {
      final m = programMinutes(p.time);
      return m != null && m <= nowMin;
    });
  }

  @override
  State<DashNow> createState() => _DashNowState();
}

class _DashNowState extends State<DashNow> {
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(minutes: 1), (_) => mounted ? setState(() {}) : null);
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final timed = [
      for (final p in widget.program)
        if (programMinutes(p.time) != null) (p, programMinutes(p.time)!),
    ]..sort((a, b) => a.$2.compareTo(b.$2));
    final now = DateTime.now();
    final nowMin = now.hour * 60 + now.minute;
    var cur = -1;
    for (var i = 0; i < timed.length; i++) {
      if (timed[i].$2 <= nowMin) cur = i;
    }
    if (cur < 0) return const SizedBox.shrink();
    final current = timed[cur];
    final next = cur + 1 < timed.length ? timed[cur + 1] : null;
    final progress = next == null ? 1.0 : ((nowMin - current.$2) / (next.$2 - current.$2)).clamp(0.0, 1.0).toDouble();
    String hm(int m) => '${(m ~/ 60).toString().padLeft(2, '0')}:${(m % 60).toString().padLeft(2, '0')}';
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: dashHighlight(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text(current.$1.title, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        Text(
          [
            next == null ? 'Desde as ${hm(current.$2)}' : '${hm(current.$2)} – ${hm(next.$2)}',
            if (current.$1.place.isNotEmpty) current.$1.place,
          ].join(' · '),
          style: _meta,
        ),
        const SizedBox(height: 8),
        AppProgressBar(value: progress),
        if (next != null) ...[
          const SizedBox(height: 8),
          Text('A seguir: ${next.$1.title} · ${hm(next.$2)}', style: _meta),
        ],
      ]),
    );
  }
}

/// A tua mesa: o número no centro do círculo e as pessoas à volta (tu a
/// preto, em cima).
class DashTable extends StatelessWidget {
  final int table;
  final List<TableMate> mates;
  final VoidCallback onTap;
  const DashTable({super.key, required this.table, required this.mates, required this.onTap});

  @override
  Widget build(BuildContext context) {
    const box = 120.0;
    const r = 46.0;
    final people = ['Tu', for (final m in mates) m.fullName].take(10).toList();
    return SnappyTap(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 8),
        child: Column(children: [
          SizedBox(
            width: box,
            height: box,
            child: Stack(children: [
              Positioned(
                left: box / 2 - 28,
                top: box / 2 - 28,
                child: Container(
                  width: 56,
                  height: 56,
                  alignment: Alignment.center,
                  decoration: const BoxDecoration(color: Color(0xFFE6E6E6), shape: BoxShape.circle),
                  child: Text('$table', style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
              ),
              for (final (i, n) in people.indexed)
                Positioned(
                  left: box / 2 + r * math.cos(-math.pi / 2 + i * 2 * math.pi / people.length) - 13,
                  top: box / 2 + r * math.sin(-math.pi / 2 + i * 2 * math.pi / people.length) - 13,
                  child: i == 0
                      ? Container(
                          width: 26,
                          height: 26,
                          alignment: Alignment.center,
                          decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                          child: const Text('T', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.white)),
                        )
                      : V2Avatar(n, size: 26),
                ),
            ]),
          ),
          const SizedBox(height: 8),
          const Text('A TUA MESA', style: _caps),
        ]),
      ),
    );
  }
}

/// «Está tudo tratado» com a estrela a piscar o olho (pedido 2026-11-21).
class DashAllDone extends StatelessWidget {
  /// O que ficou feito (o organizador tem outro texto).
  final String done;
  const DashAllDone({super.key, this.done = 'Menus escolhidos e a tua parte paga.'});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 6),
        child: Row(children: [
          const EstrelaMascot(Estrela.piscar, size: 64, semanticLabel: ''),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Está tudo tratado', style: _title17),
              Text(done, style: _meta),
            ]),
          ),
        ]),
      );
}

/// «Para fazer» ainda sem tarefas: diz o que vai aparecer (DESIGN.md §4,
/// estados de uma secção).
class DashTasksEmpty extends StatelessWidget {
  final bool star;

  /// O que vai aparecer (o organizador tem outro texto).
  final String what;
  const DashTasksEmpty({super.key, this.star = true, this.what = 'Menus para escolher e a tua parte para pagar.'});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 6),
        child: Row(children: [
          if (star) ...[
            const EstrelaMascot(Estrela.dormir, size: 64, semanticLabel: ''),
            const SizedBox(width: 12),
          ],
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Aparecem aqui as tuas tarefas', style: _title17),
              Text(what, style: _meta),
            ]),
          ),
        ]),
      );
}

/// Os anfitriões ainda não juntaram nada: a estrela a dormir.
class DashWaiting extends StatelessWidget {
  final String hosts;
  const DashWaiting({super.key, required this.hosts});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 16),
        child: Column(children: [
          const EstrelaMascot(Estrela.dormir, size: 120, semanticLabel: ''),
          const SizedBox(height: 8),
          const Text('Ainda à espera dos anfitriões', textAlign: TextAlign.center, style: _title17),
          const SizedBox(height: 2),
          Text('O local, o programa, a mesa e o dress code aparecem aqui quando $hosts os juntarem.',
              textAlign: TextAlign.center, style: _meta),
        ]),
      );
}

/// O programa (linhas no fundo): hora, momento e local; o atual com «Agora».
class DashProgram extends StatelessWidget {
  final List<ProgramItem> program;
  final bool live;
  final int max;
  final VoidCallback? onAll;
  const DashProgram({super.key, required this.program, this.live = false, this.max = 4, this.onAll});

  @override
  Widget build(BuildContext context) {
    final now = DateTime.now();
    final nowMin = now.hour * 60 + now.minute;
    var cur = -1;
    if (live) {
      for (var i = 0; i < program.length; i++) {
        final m = programMinutes(program[i].time);
        if (m != null && m <= nowMin) cur = i;
      }
    }
    final shown = live ? program : program.take(max).toList();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      KitGroup([
        for (final (i, p) in shown.indexed)
          KitRow(
            // Hora e o ícone do momento (2026-11-21): a foto/iniciais do
            // parceiro escolhido ou, sem parceiro, as iniciais do local
            // (ou do momento).
            lead: Row(mainAxisSize: MainAxisSize.min, children: [
              SizedBox(
                width: 52,
                child: Text(p.time, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              V2Avatar(
                p.partner.isNotEmpty ? p.partner : (p.place.isNotEmpty ? p.place : p.title),
                size: 34,
                imageUrl: p.partnerAvatarUrl.isEmpty ? null : p.partnerAvatarUrl,
              ),
            ]),
            title: p.title,
            sub: p.place.isEmpty ? null : p.place,
            trailing: !live
                ? null
                : i < cur
                    ? const KitTag('Feito')
                    : i == cur
                        ? const KitTag('Agora')
                        : null,
          ),
      ]),
      if (!live && program.length > max && onAll != null)
        Padding(
          padding: const EdgeInsets.only(top: 4),
          child: Align(
            alignment: Alignment.centerLeft,
            child: DashButton36('Ver o programa todo (${program.length})', onTap: onAll!, outlined: true),
          ),
        ),
    ]);
  }
}

/// O que vestir em cada estilo do dress code (os estilos que o organizador
/// escolhe em «Para os convidados»).
const dressStyleHints = {
  'Formal': 'Fato e gravata; vestido midi ou comprido.',
  'Cocktail': 'Fato sem gravata ou blazer; vestido pelo joelho.',
  'Casual chique': 'Calças de tecido e camisa; vestido ou conjunto leve.',
  'Black tie': 'Smoking e laço; vestido comprido de cerimónia.',
  'Tema': 'Segue o tema que os anfitriões escolheram.',
};

/// Dress code: o cabide, o estilo, o que vestir e a nota dos anfitriões.
/// Guardado como «Estilo · nota» (ou só a nota).
class DashDressCode extends StatelessWidget {
  final String text;

  /// Cores escolhidas pelo organizador (`theme_colors`), em hex.
  final List<String> colors;
  const DashDressCode({super.key, required this.text, this.colors = const []});

  @override
  Widget build(BuildContext context) {
    final style = dressStyleHints.keys.where((st) => text == st || text.startsWith('$st · ')).firstOrNull;
    final note = style == null ? text : text.substring(style.length).replaceFirst(RegExp(r'^\s*·\s*'), '');
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Container(
          width: 64,
          height: 64,
          decoration: BoxDecoration(color: const Color(0xFFE6E6E6), borderRadius: BorderRadius.circular(20)),
          padding: const EdgeInsets.all(16),
          child: const CustomPaint(painter: _HangerPainter()),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            if (style != null) ...[
              Text(style, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text(dressStyleHints[style]!, style: const TextStyle(fontSize: 14, height: 1.35, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ],
            if (note.isNotEmpty) ...[
              if (style != null) const SizedBox(height: 6),
              Text(note,
                  style: style == null
                      ? const TextStyle(fontSize: 16, height: 1.35, fontWeight: FontWeight.w700, color: AppTheme.ink)
                      : const TextStyle(fontSize: 13, height: 1.35, color: AppTheme.inkMuted)),
            ],
            // As cores do organizador, só se as escolheu (2026-11-21).
            if (colors.isNotEmpty) ...[
              const SizedBox(height: 8),
              Row(children: [
                for (final hex in colors) ...[
                  Container(width: 22, height: 22, decoration: BoxDecoration(color: colorFromHex(hex), shape: BoxShape.circle)),
                  const SizedBox(width: 6),
                ],
                const SizedBox(width: 4),
                Expanded(
                  child: Text(
                    [for (final hex in colors) ?pastelName(hex)].join(', '),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                  ),
                ),
              ]),
            ],
          ]),
        ),
      ]),
    );
  }
}

/// O cabide (traço preto), como no mockup.
class _HangerPainter extends CustomPainter {
  const _HangerPainter();

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final p = Paint()
      ..color = AppTheme.ink
      ..style = PaintingStyle.stroke
      ..strokeWidth = w * 0.07
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;
    final path = Path()
      // gancho
      ..moveTo(w * 0.40, h * 0.22)
      ..arcToPoint(Offset(w * 0.5, h * 0.12), radius: Radius.circular(w * 0.1))
      ..arcToPoint(Offset(w * 0.5, h * 0.32), radius: Radius.circular(w * 0.1))
      ..lineTo(w * 0.5, h * 0.42)
      // ombros e barra
      ..lineTo(w * 0.04, h * 0.80)
      ..lineTo(w * 0.96, h * 0.80)
      ..lineTo(w * 0.5, h * 0.42);
    canvas.drawPath(path, p);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Fotos no dia: a grelha das últimas, quantas há e «Juntar as minhas» +
/// «Ver fotos».
class DashPhotos extends StatelessWidget {
  final VoidCallback onOpen;
  final List<String> urls;
  final int count;
  const DashPhotos({super.key, required this.onOpen, this.urls = const [], this.count = 0});

  @override
  Widget build(BuildContext context) => Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        if (urls.isNotEmpty) ...[
          SnappyTap(
            onTap: onOpen,
            child: GridView.count(
              crossAxisCount: 3,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              padding: EdgeInsets.zero,
              mainAxisSpacing: 6,
              crossAxisSpacing: 6,
              children: [
                for (final u in urls.take(6))
                  ClipRRect(
                    borderRadius: BorderRadius.circular(14),
                    child: SizedNetworkImage(u,
                        fit: BoxFit.cover, errorBuilder: (context, error, stack) => const ColoredBox(color: Color(0xFFE6E6E6))),
                  ),
              ],
            ),
          ),
          const SizedBox(height: 12),
        ],
        if (count > 0) ...[
          Row(crossAxisAlignment: CrossAxisAlignment.baseline, textBaseline: TextBaseline.alphabetic, children: [
            Text('$count', style: const TextStyle(fontSize: 40, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(width: 8),
            Expanded(child: Text(count == 1 ? 'foto partilhada pelos convidados' : 'fotos partilhadas pelos convidados', style: _meta)),
          ]),
          const SizedBox(height: 12),
        ],
        Row(children: [
          Expanded(child: _big('Juntar as minhas', onOpen, outlined: true)),
          const SizedBox(width: 8),
          Expanded(child: _big('Ver fotos', onOpen)),
        ]),
      ]);
}

Widget _big(String label, VoidCallback onTap, {bool outlined = false}) => SnappyTap(
      onTap: onTap,
      child: Container(
        height: 52,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: outlined ? Colors.white : AppTheme.action,
          border: outlined ? Border.all(color: AppTheme.ink, width: 1.5) : null,
          borderRadius: BorderRadius.circular(26),
        ),
        child: Text(label, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: outlined ? AppTheme.ink : Colors.white)),
      ),
    );

/// Quando é, para o resumo: (rótulo, número grande, unidade).
(String, String, String) dashWhen(GuestEvent w) => dashWhenAt(w.eventDate, w.ceremonyTime);

/// O mesmo para qualquer evento (data e hora de início); depois do evento,
/// «Foi há N dias» (painel do organizador, 2026-11-21).
(String, String, String) dashWhenAt(DateTime? date, String? time) {
  if (date == null) return ('Quando', '—', 'Data por anunciar');
  final today = DateTime.now();
  final days = DateTime(date.year, date.month, date.day).difference(DateTime(today.year, today.month, today.day)).inDays;
  final day = formatShortDatePt(date).toLowerCase().replaceFirstMapped(RegExp(r'^.'), (m) => m[0]!.toUpperCase());
  final start = time?.isNotEmpty == true ? time! : null;
  if (days < 0) return ('Foi há', '${-days}', [-days == 1 ? 'dia' : 'dias', day].join(' · '));
  if (days == 1) return ('Amanhã', start ?? day, start == null ? '' : day);
  if (days == 0) {
    final m = start == null ? null : programMinutes(start);
    final nowMin = today.hour * 60 + today.minute;
    if (m != null && m > nowMin) {
      final d = m - nowMin;
      return ('Começa daqui a', d < 60 ? '$d min' : '${d ~/ 60} h', 'às $start');
    }
    return ('Hoje', start ?? '—', day);
  }
  return ('Faltam', '$days', [days == 1 ? 'dia' : 'dias', day, if (start != null) 'começa às $start'].join(' · '));
}
