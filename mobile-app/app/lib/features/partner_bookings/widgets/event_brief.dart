import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/page_kit.dart' show KitTag;
import '../../../shared/widgets/venue_map.dart';
import '../../../shared/widgets/navigation_sheet.dart';

/// Informação do evento para o parceiro (`partner_event_brief`, migração
/// 226): cada categoria vê só o que precisa — todos a hora, o local e o
/// programa; a comida também as pessoas, os menus, as alergias e as mesas;
/// foto e música o dress code; flores e decoração as cores; transporte e
/// animação as pessoas e as idades das crianças. Só depois de o sinal estar
/// pago. Sem contactos (fala-se pela conversa da app).
final partnerEventBriefProvider = FutureProvider.autoDispose.family<Map<String, dynamic>?, String>((ref, bookingId) async {
  try {
    final res = await supabase.rpc('partner_event_brief', params: {'p_booking': bookingId});
    return (res as Map).cast<String, dynamic>();
  } catch (_) {
    return null;
  }
});

class PartnerEventBrief extends ConsumerWidget {
  final String bookingId;
  const PartnerEventBrief({super.key, required this.bookingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final brief = ref.watch(partnerEventBriefProvider(bookingId));
    return brief.when(
      loading: () => const SizedBox.shrink(),
      error: (_, _) => const SizedBox.shrink(),
      data: (b) {
        if (b == null) return const SizedBox.shrink();
        if (b['available'] != true) {
          return const SectionFrame(title: 'Informação do evento', top: 0, children: [
            FrameNote('A hora, o local, o programa e o que precisas de saber dos convidados aparecem aqui quando o cliente pagar o sinal.'),
          ]);
        }
        String? str(String k) => (b[k] as String?)?.trim().isNotEmpty == true ? (b[k] as String).trim() : null;
        final time = str('start_time');
        final venue = str('venue');
        final address = str('address');
        final lat = (b['latitude'] as num?)?.toDouble();
        final lng = (b['longitude'] as num?)?.toDouble();
        final estimated = (b['estimated_guests'] as num?)?.toInt();
        final program = ((b['program'] as List?) ?? const []).cast<Map>();
        final dress = str('dress_code');
        final colors = [
          for (final c in ((b['colors'] as List?) ?? const []))
            if (_hex(c) != null) _hex(c)!,
        ];
        final showPeople = b['show_people'] == true;
        final showFood = b['show_food'] == true;
        final total = (b['total'] as num?)?.toInt() ?? 0;
        final children = (b['children'] as num?)?.toInt() ?? 0;
        final ages = [for (final a in ((b['child_ages'] as List?) ?? const [])) (a as num).toInt()];
        final menus = ((b['menus'] as List?) ?? const []).cast<Map>();
        final dietary = ((b['dietary'] as List?) ?? const []).cast<Map>();
        final tables = ((b['tables'] as List?) ?? const []).cast<Map>();

        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          SectionFrame(title: 'Quando e onde', top: 0, children: [
            _Row('Hora', time ?? 'Por indicar'),
            if (venue != null) _Row('Local', venue),
            if (address != null) _Row('Morada', address),
            if (estimated != null && estimated > 0) _Row('Convidados previstos', '$estimated', last: true),
            if (address != null || (lat != null && lng != null)) ...[
              const SizedBox(height: 12),
              VenueMap(label: venue ?? 'Local do evento', address: address, latitude: lat, longitude: lng),
              FrameButton44('Como chegar', outlined: true,
                  onTap: () => showNavigationSheet(context,
                      label: venue ?? 'Local do evento', address: address ?? venue ?? '', latitude: lat, longitude: lng)),
            ],
          ]),
          if (program.isNotEmpty)
            SectionFrame(title: 'Programa · ${program.length}', children: [
              for (final (i, m) in program.indexed)
                _ProgramRow(
                  time: '${m['time'] ?? ''}',
                  title: '${m['title'] ?? ''}',
                  place: m['place'] as String?,
                  mine: m['mine'] == true,
                  last: i == program.length - 1,
                ),
            ]),
          if (dress != null || colors.isNotEmpty)
            SectionFrame(title: 'Estilo', children: [
              if (dress != null) _Row('Dress code', dress, last: colors.isEmpty),
              if (colors.isNotEmpty) ...[
                const SizedBox(height: 10),
                Wrap(spacing: 8, runSpacing: 8, children: [
                  for (final c in colors)
                    Container(
                      width: 22,
                      height: 22,
                      decoration: BoxDecoration(color: c, shape: BoxShape.circle, border: Border.all(color: const Color(0xFFCFCFCF))),
                    ),
                ]),
              ],
            ]),
          if (showPeople)
            SectionFrame(title: 'Pessoas', children: [
              FrameNumbers([
                FrameNumber('Confirmados', '$total', total == 1 ? 'pessoa' : 'pessoas'),
                FrameNumber('Crianças', '$children', ages.isEmpty ? (children == 1 ? 'criança' : 'crianças') : 'com ${_ages(ages)}'),
              ]),
            ]),
          if (showFood) ...[
            SectionFrame(title: 'Menus', children: [
              if (menus.isEmpty) const FrameNote('Ainda ninguém escolheu menu.'),
              for (final (i, m) in menus.indexed) _Row('${m['menu']}', '${m['count']}', last: i == menus.length - 1),
            ]),
            SectionFrame(title: dietary.isEmpty ? 'Alergias' : 'Alergias · ${dietary.length}', children: [
              if (dietary.isEmpty) const FrameNote('Nenhuma indicada.'),
              for (final (i, d) in dietary.indexed)
                _Row('${d['name']}${d['table'] != null ? ' · ${d['table']}' : ''}', '${d['restriction']}', last: i == dietary.length - 1),
            ]),
            if (tables.isNotEmpty)
              SectionFrame(title: 'Mesas · ${tables.length}', children: [
                for (final t in tables)
                  Theme(
                    data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
                    child: ExpansionTile(
                      tilePadding: EdgeInsets.zero,
                      title: Text('${t['name']}', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      subtitle: Text('${t['people']} ${t['people'] == 1 ? 'pessoa' : 'pessoas'}',
                          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                      children: [
                        for (final g in ((t['guests'] as List?) ?? const []).cast<Map>())
                          Padding(
                            padding: const EdgeInsets.only(bottom: 6),
                            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                              Expanded(child: Text('${g['name']}', style: const TextStyle(fontSize: 14, color: AppTheme.ink))),
                              Flexible(
                                child: Text([if (g['menu'] != null) g['menu'], if (g['dietary'] != null) 'Alergia: ${g['dietary']}'].join(' · '),
                                    textAlign: TextAlign.right, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                              ),
                            ]),
                          ),
                      ],
                    ),
                  ),
              ]),
          ],
        ]);
      },
    );
  }

  static String _ages(List<int> ages) {
    final words = [for (final a in ages) a == 1 ? '1 ano' : '$a anos'];
    return words.length == 1 ? words.first : '${words.sublist(0, words.length - 1).join(', ')} e ${words.last}';
  }

  static Color? _hex(Object? v) {
    final s = '$v'.replaceAll('#', '').trim();
    if (s.length != 6) return null;
    final n = int.tryParse(s, radix: 16);
    return n == null ? null : Color(0xFF000000 | n);
  }
}

/// Linha de 48: rótulo 13 `#57534E` à esquerda, valor 14 negrito à direita.
class _Row extends StatelessWidget {
  final String label;
  final String value;
  final bool last;
  const _Row(this.label, this.value, {this.last = false});

  @override
  Widget build(BuildContext context) => Container(
        constraints: const BoxConstraints(minHeight: 48),
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(border: last ? null : const Border(bottom: BorderSide(color: AppTheme.line))),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(child: Text(label, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
          const SizedBox(width: 12),
          Flexible(
            child: Text(value, textAlign: TextAlign.right,
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
        ]),
      );
}

/// Um momento do programa: hora, título 16 e local 13; os deste parceiro
/// com a etiqueta verde «Contigo».
class _ProgramRow extends StatelessWidget {
  final String time;
  final String title;
  final String? place;
  final bool mine;
  final bool last;
  const _ProgramRow({required this.time, required this.title, this.place, required this.mine, required this.last});

  @override
  Widget build(BuildContext context) => Container(
        constraints: const BoxConstraints(minHeight: 56),
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(border: last ? null : const Border(bottom: BorderSide(color: AppTheme.line))),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SizedBox(
            width: 56,
            child: Text(time, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (place?.trim().isNotEmpty == true)
                Text(place!.trim(), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          if (mine) const KitTag('Contigo'),
        ]),
      );
}
