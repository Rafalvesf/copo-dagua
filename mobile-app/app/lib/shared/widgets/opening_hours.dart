import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import 'island_sheet.dart';
import 'page_kit.dart' show KitTag, KitTagKind;
import 'time_wheels.dart';
import '../../core/riverpod_cache.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

/// Horário de funcionamento do parceiro (migração 241, pedido do Rafael,
/// 2026-11-25): os dias abertos de 1 (segunda) a 7 (domingo), cada um com a
/// hora de abrir e de fechar. Um dia fechado não aparece.
class OpeningHours {
  final Map<int, (String, String)> days;
  const OpeningHours(this.days);

  static const empty = OpeningHours({});

  /// Por omissão no onboarding: segunda a sexta, 10:00 – 19:00.
  static OpeningHours get standard => OpeningHours({for (var d = 1; d <= 5; d++) d: ('10:00', '19:00')});

  bool get isEmpty => days.isEmpty;

  static OpeningHours? fromJson(Object? json) {
    if (json is! Map) return null;
    final out = <int, (String, String)>{};
    json.forEach((k, v) {
      final d = int.tryParse('$k');
      if (d == null || d < 1 || d > 7 || v is! Map) return;
      final from = '${v['from'] ?? ''}';
      final to = '${v['to'] ?? ''}';
      if (from.isNotEmpty && to.isNotEmpty) out[d] = (from, to);
    });
    return OpeningHours(out);
  }

  Map<String, dynamic> toJson() => {
        for (final e in days.entries) '${e.key}': {'from': e.value.$1, 'to': e.value.$2},
      };

  OpeningHours withDay(int day, (String, String)? value) {
    final m = Map<int, (String, String)>.of(days);
    if (value == null) {
      m.remove(day);
    } else {
      m[day] = value;
    }
    return OpeningHours(m);
  }

  static int _min(String hhmm) {
    final p = hhmm.split(':');
    return (int.tryParse(p.first) ?? 0) * 60 + (p.length > 1 ? int.tryParse(p[1]) ?? 0 : 0);
  }

  /// «Aberto agora · fecha às 19:00» ou «Fechado agora» (`null` sem horário).
  String? nowLabel([DateTime? at]) {
    if (isEmpty) return null;
    final now = at ?? DateTime.now();
    final today = days[now.weekday];
    final m = now.hour * 60 + now.minute;
    if (today != null) {
      final from = _min(today.$1);
      var to = _min(today.$2);
      if (to <= from) to += 24 * 60; // fecha depois da meia-noite
      if (m >= from && m < to) return 'Aberto agora · fecha às ${today.$2}';
      if (m < from) return 'Fechado agora · abre às ${today.$1}';
    }
    for (var i = 1; i <= 7; i++) {
      final d = (now.weekday - 1 + i) % 7 + 1;
      final h = days[d];
      if (h != null) {
        final when = i == 1 ? 'amanhã' : weekdayNamesPt[d - 1].toLowerCase();
        return 'Fechado agora · abre $when às ${h.$1}';
      }
    }
    return 'Fechado agora';
  }

  bool isOpenNow([DateTime? at]) => nowLabel(at)?.startsWith('Aberto') ?? false;
}

const weekdayNamesPt = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

/// O horário de um parceiro; `null` se ainda não indicou (ou sem a 241).
final partnerOpeningHoursProvider = FutureProvider.autoDispose.family<OpeningHours?, String>((ref, partnerId) async {
  ref.staleWhileRevalidate();
  try {
    final r = await supabase.from('partner_profiles').select('opening_hours').eq('id', partnerId).maybeSingle();
    final h = OpeningHours.fromJson(r?['opening_hours']);
    return (h == null || h.isEmpty) ? null : h;
  } catch (_) {
    return null;
  }
});

/// Guarda o horário do parceiro com sessão.
Future<void> saveMyOpeningHours(OpeningHours hours) async {
  final me = supabase.auth.currentUser?.id;
  if (me == null) return;
  await supabase.from('partner_profiles').update({'opening_hours': hours.isEmpty ? null : hours.toJson()}).eq('id', me);
}

/// Horas de 30 em 30 minutos para a roda.
final List<String> _hourOptions = [
  for (var m = 0; m < 24 * 60; m += 30) '${(m ~/ 60).toString().padLeft(2, '0')}:${(m % 60).toString().padLeft(2, '0')}',
];

/// Editor do horário (mockup «Onboarding · Horário»): uma linha por dia com
/// o nome 16, as horas numa pílula (abre a roda «ABRE ÀS / FECHA ÀS») e o
/// interruptor aberto / fechado.
class OpeningHoursEditor extends StatelessWidget {
  final OpeningHours value;
  final ValueChanged<OpeningHours> onChanged;

  /// Fundo das linhas: branco no onboarding, #F2F2F2 dentro de molduras.
  final Color fill;
  const OpeningHoursEditor({super.key, required this.value, required this.onChanged, this.fill = Colors.white});

  /// As horas mais usadas nos dias abertos (para «Todos os dias»).
  (String, String) get _common {
    final counts = <(String, String), int>{};
    for (final h in value.days.values) {
      counts[h] = (counts[h] ?? 0) + 1;
    }
    if (counts.isEmpty) return ('10:00', '19:00');
    return (counts.entries.toList()..sort((a, b) => b.value.compareTo(a.value))).first.key;
  }

  bool get _allSame => value.days.values.toSet().length <= 1;

  /// «Todos os dias» (pedido 2026-11-25: «aplicar a todas ou editar uma em
  /// específico»): as mesmas horas em todos os dias abertos; sem nenhum
  /// aberto, abre de segunda a sexta.
  Future<void> _pickAll(BuildContext context) async {
    final picked = await _wheel(context, 'Todos os dias', _common);
    if (picked == null) return;
    final open = value.days.isEmpty ? [1, 2, 3, 4, 5] : value.days.keys.toList();
    onChanged(OpeningHours({for (final d in open) d: picked}));
  }

  Future<void> _pick(BuildContext context, int day) async {
    final picked = await _wheel(context, weekdayNamesPt[day - 1], value.days[day] ?? ('10:00', '19:00'));
    if (picked != null) onChanged(value.withDay(day, picked));
  }

  Future<(String, String)?> _wheel(BuildContext context, String title, (String, String) cur) async {
    var from = cur.$1;
    var to = cur.$2;
    final ok = await showIslandSheet<bool>(
      context: context,
      builder: (c) => SafeArea(
        top: false,
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Row(children: [
              Expanded(
                child: Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              GestureDetector(
                onTap: () => Navigator.of(c).pop(),
                child: Container(
                  width: 44,
                  height: 44,
                  decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                  child: const Icon(Hi.xMark, size: 20, color: Colors.white),
                ),
              ),
            ]),
            const SizedBox(height: 16),
            TimeWheels(columns: [
              WheelColumn(label: 'ABRE ÀS', options: _hourOptions, value: from, onChanged: (v) => from = v),
              WheelColumn(label: 'FECHA ÀS', options: _hourOptions, value: to, onChanged: (v) => to = v),
            ]),
            const SizedBox(height: 16),
            SizedBox(
              height: 52,
              child: PressScale(child: FilledButton(
                style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, shape: const StadiumBorder()),
                onPressed: () => Navigator.of(c).pop(true),
                child: const Text('OK', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Colors.white)),
              )),
            ),
          ]),
        ),
      ),
    );
    return ok == true ? (from, to) : null;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
      decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(22)),
      child: Column(children: [
        // Todos os dias: as mesmas horas de uma vez.
        Container(
          constraints: const BoxConstraints(minHeight: 64),
          decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFCFCFCF), width: 2))),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                const Text('Todos os dias', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(
                  value.days.isEmpty ? 'Escolhe as horas e aplica' : (_allSame ? 'Iguais em todos os dias abertos' : 'Há dias com horas diferentes'),
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                ),
              ]),
            ),
            GestureDetector(
              onTap: () => _pickAll(context),
              child: Container(
                height: 36,
                padding: const EdgeInsets.symmetric(horizontal: 14),
                alignment: Alignment.center,
                decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(18)),
                child: Text(
                  value.days.isEmpty || !_allSame ? 'Aplicar a todos' : '${_common.$1} – ${_common.$2}',
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white),
                ),
              ),
            ),
          ]),
        ),
        for (var d = 1; d <= 7; d++)
          Container(
            constraints: const BoxConstraints(minHeight: 56),
            decoration: BoxDecoration(
              border: d == 7 ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9))),
            ),
            child: Row(children: [
              Expanded(
                child: Text(weekdayNamesPt[d - 1], style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              if (value.days[d] != null)
                GestureDetector(
                  onTap: () => _pick(context, d),
                  child: Container(
                    height: 36,
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: fill == Colors.white ? AppTheme.background : Colors.white,
                      borderRadius: BorderRadius.circular(18),
                    ),
                    child: Text('${value.days[d]!.$1} – ${value.days[d]!.$2}',
                        style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                )
              else
                const Text('Fechado', style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
              const SizedBox(width: 10),
              Switch(
                value: value.days[d] != null,
                activeTrackColor: AppTheme.accentOliveDark,
                onChanged: (on) {
                  if (on) {
                    final prev = value.days.values.isEmpty ? ('10:00', '19:00') : value.days.values.last;
                    onChanged(value.withDay(d, prev));
                  } else {
                    onChanged(value.withDay(d, null));
                  }
                },
              ),
            ]),
          ),
      ]),
    );
  }
}

/// «Horário» na página do parceiro (pedido 2026-11-25: «linha curta que
/// abre»): uma linha com o ponto (verde aberto, cinzento fechado),
/// «Aberto agora · fecha às 19:00» e a seta; tocar abre o popup com os 7
/// dias (hoje a negrito). Sem horário, não aparece.
class OpeningHoursSection extends ConsumerWidget {
  final String partnerId;
  final Widget Function(String title) titleBuilder;
  const OpeningHoursSection({super.key, required this.partnerId, required this.titleBuilder});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final h = ref.watch(partnerOpeningHoursProvider(partnerId)).value;
    if (h == null) return const SizedBox.shrink();
    final open = h.isOpenNow();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      titleBuilder('Horário'),
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Semantics(
          button: true,
          label: 'Ver o horário da semana',
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTap: () => showOpeningHoursSheet(context, h),
            child: ConstrainedBox(
              constraints: const BoxConstraints(minHeight: 48),
              child: Row(children: [
                Container(
                  width: 10,
                  height: 10,
                  decoration: BoxDecoration(color: open ? AppTheme.accentOliveDark : const Color(0xFFB8B2A6), shape: BoxShape.circle),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Text(h.nowLabel() ?? '', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
                const Icon(Hi.chevronRight, size: 18, color: AppTheme.inkMuted),
              ]),
            ),
          ),
        ),
      ),
    ]);
  }
}

/// Horário resumido por baixo do cartão do parceiro (perto da bio):
/// o ponto e «Aberto agora · fecha às 19:00» 13; tocar abre a semana.
class OpeningHoursInline extends ConsumerWidget {
  final String partnerId;
  const OpeningHoursInline({super.key, required this.partnerId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final h = ref.watch(partnerOpeningHoursProvider(partnerId)).value;
    if (h == null) return const SizedBox.shrink();
    final open = h.isOpenNow();
    return Padding(
      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 10, AppTheme.screenMargin, 0),
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () => showOpeningHoursSheet(context, h),
        child: Row(children: [
          Container(
            width: 8,
            height: 8,
            decoration: BoxDecoration(color: open ? AppTheme.accentOliveDark : const Color(0xFFB8B2A6), shape: BoxShape.circle),
          ),
          const SizedBox(width: 8),
          Flexible(child: Text(h.nowLabel() ?? '', style: const TextStyle(fontSize: 13, color: AppTheme.ink))),
          const SizedBox(width: 4),
          const Icon(Hi.chevronRight, size: 14, color: AppTheme.inkMuted),
        ]),
      ),
    );
  }
}

/// Popup «Horário»: os 7 dias, hoje a negrito, e o estado de agora.
Future<void> showOpeningHoursSheet(BuildContext context, OpeningHours h) {
  final today = DateTime.now().weekday;
  final now = h.nowLabel();
  return showIslandSheet<void>(
    context: context,
    builder: (c) => SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            const Expanded(child: Text('Horário', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            GestureDetector(
              onTap: () => Navigator.of(c).pop(),
              child: Container(
                width: 44,
                height: 44,
                decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                child: const Icon(Hi.xMark, size: 20, color: Colors.white),
              ),
            ),
          ]),
          if (now != null) ...[
            const SizedBox(height: 8),
            Align(alignment: Alignment.centerLeft, child: KitTag(now, kind: h.isOpenNow() ? KitTagKind.green : KitTagKind.neutral)),
          ],
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              for (var d = 1; d <= 7; d++)
                Container(
                  height: 48,
                  decoration: BoxDecoration(border: d == 7 ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9)))),
                  child: Row(children: [
                    Expanded(
                      child: Text('${weekdayNamesPt[d - 1]}${d == today ? ' · hoje' : ''}',
                          style: TextStyle(fontSize: 14, fontWeight: d == today ? FontWeight.w700 : FontWeight.w600, color: AppTheme.ink)),
                    ),
                    Text(
                      h.days[d] == null ? 'Fechado' : '${h.days[d]!.$1} – ${h.days[d]!.$2}',
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: d == today ? FontWeight.w700 : FontWeight.w600,
                        color: h.days[d] == null ? AppTheme.inkMuted : AppTheme.ink,
                      ),
                    ),
                  ]),
                ),
            ]),
          ),
        ]),
      ),
    ),
  );
}
