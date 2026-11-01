import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/v2_kit.dart';

/// Informação do evento para o parceiro (migração 140,
/// `partner_event_brief`): convidados confirmados, menus, alergias e
/// mesas. Só depois de o sinal estar pago. Sem contactos dos convidados.
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
      error: (_, __) => const SizedBox.shrink(),
      data: (b) {
        if (b == null) return const SizedBox.shrink();
        if (b['available'] != true) {
          return _card(const Text('A lista de convidados, os menus, as alergias e as mesas aparecem aqui quando o cliente pagar o sinal.',
              style: TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4)));
        }
        final total = (b['total'] as num?)?.toInt() ?? 0;
        final children = (b['children'] as num?)?.toInt() ?? 0;
        final menus = ((b['menus'] as List?) ?? const []).cast<Map>();
        final dietary = ((b['dietary'] as List?) ?? const []).cast<Map>();
        final tables = ((b['tables'] as List?) ?? const []).cast<Map>();
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _card(Row(children: [
            Expanded(child: _stat('$total', total == 1 ? 'convidado confirmado' : 'convidados confirmados')),
            Expanded(child: _stat('$children', children == 1 ? 'criança' : 'crianças')),
            Expanded(child: _stat('${tables.length}', tables.length == 1 ? 'mesa' : 'mesas')),
          ])),
          const SizedBox(height: 10),
          _card(Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            _title(Icons.restaurant_menu_rounded, 'Menus'),
            const SizedBox(height: 8),
            if (menus.isEmpty) const Text('Ainda ninguém escolheu menu.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            for (final m in menus)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 3),
                child: Row(children: [
                  Expanded(child: Text('${m['menu']}', style: const TextStyle(fontSize: 14, color: AppTheme.ink))),
                  Text('${m['count']}', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ]),
              ),
          ])),
          const SizedBox(height: 10),
          _card(Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            _title(Icons.health_and_safety_outlined, 'Alergias e restrições'),
            const SizedBox(height: 8),
            if (dietary.isEmpty) const Text('Nenhuma indicada.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            for (final d in dietary)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 4),
                child: Text.rich(TextSpan(children: [
                  TextSpan(text: '${d['name']}', style: const TextStyle(fontWeight: FontWeight.w700)),
                  TextSpan(text: ' · ${d['restriction']}'),
                  if (d['table'] != null) TextSpan(text: ' · ${d['table']}', style: const TextStyle(color: AppTheme.inkMuted)),
                ]), style: const TextStyle(fontSize: 14, color: AppTheme.ink)),
              ),
          ])),
          if (tables.isNotEmpty) ...[
            const SizedBox(height: 10),
            _card(Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              _title(Icons.event_seat_outlined, 'Mesas'),
              for (final t in tables)
                Theme(
                  data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
                  child: ExpansionTile(
                    tilePadding: EdgeInsets.zero,
                    title: Text('${t['name']}', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    subtitle: Text('${t['people']} ${t['people'] == 1 ? 'pessoa' : 'pessoas'}', style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                    children: [
                      for (final g in ((t['guests'] as List?) ?? const []).cast<Map>())
                        Padding(
                          padding: const EdgeInsets.only(bottom: 6),
                          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                            Expanded(child: Text('${g['name']}', style: const TextStyle(fontSize: 13, color: AppTheme.ink))),
                            Flexible(
                              child: Text([if (g['menu'] != null) g['menu'], if (g['dietary'] != null) 'Alergia: ${g['dietary']}'].join(' · '),
                                  textAlign: TextAlign.right, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                            ),
                          ]),
                        ),
                    ],
                  ),
                ),
            ])),
          ],
        ]);
      },
    );
  }

  Widget _card(Widget child) => Container(padding: const EdgeInsets.all(14), decoration: softCard(), child: child);

  Widget _title(IconData icon, String text) => Row(children: [
        Icon(icon, size: 18, color: AppTheme.accentOliveDark),
        const SizedBox(width: 8),
        Text(text, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      ]);

  Widget _stat(String value, String label) => Column(children: [
        Text(value, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        Text(label, textAlign: TextAlign.center, style: const TextStyle(fontSize: 11, color: AppTheme.inkMuted)),
      ]);
}
