import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';

import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import '../../shared/money.dart';
import '../../shared/widgets/island_sheet.dart';
import '../../shared/widgets/snappy_tap.dart';

/// «Queres juntar alguma coisa?» depois de aceitar uma proposta, antes de
/// pagar (mockups «Reservar por categoria» · Só orçamento, 2026-11-21;
/// migração 206). Só aparece se o parceiro tiver extras que ainda não foram
/// juntados. Devolve o novo (total, a pagar agora) se se juntou alguma
/// coisa; `null` se não. (Nas reservas de pacotes os extras escolhem-se
/// antes de pedir, no `ReserveFlowSheet`.)
Future<(double, double)?> offerBookingExtras(BuildContext context, String bookingId, {required String partnerName}) async {
  List<Map<String, dynamic>> options;
  double total, deposit;
  try {
    final r = await supabase.rpc('booking_extra_options', params: {'p_booking_id': bookingId});
    options = [for (final o in (r as List? ?? const [])) (o as Map).cast<String, dynamic>()];
    if (options.isEmpty) return null;
    final b = await supabase.from('bookings').select('total_amount, deposit_amount').eq('id', bookingId).single();
    total = (b['total_amount'] as num).toDouble();
    deposit = (b['deposit_amount'] as num).toDouble();
  } catch (_) {
    // Antes da migração 206: segue direto para pagar.
    return null;
  }
  if (!context.mounted) return null;
  final chosen = await showIslandSheet<Set<String>>(
    // Reserva/pagamento: sair pergunta antes (DESIGN.md §6.1).
    confirmExit: true,
    context: context,
    isScrollControlled: true,
    builder: (_) => _ExtrasSheet(options: options, total: total, deposit: deposit, partnerName: partnerName),
  );
  if (chosen == null || chosen.isEmpty) return null;
  try {
    final r = await supabase.rpc('add_booking_extras', params: {'p_booking_id': bookingId, 'p_extra_ids': chosen.toList()});
    final m = (r as Map).cast<String, dynamic>();
    return ((m['total'] as num).toDouble(), (m['deposit'] as num).toDouble());
  } catch (_) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível juntar os extras. Segue sem eles.')));
    }
    return null;
  }
}

class _ExtrasSheet extends StatefulWidget {
  final List<Map<String, dynamic>> options;
  final double total;
  final double deposit;
  final String partnerName;
  const _ExtrasSheet({required this.options, required this.total, required this.deposit, required this.partnerName});

  @override
  State<_ExtrasSheet> createState() => _ExtrasSheetState();
}

class _ExtrasSheetState extends State<_ExtrasSheet> {
  final Set<String> _on = {};

  @override
  Widget build(BuildContext context) {
    final full = widget.deposit >= widget.total - 0.005;
    final pct = widget.total <= 0 ? 1.0 : widget.deposit / widget.total;
    final add = widget.options.where((o) => _on.contains(o['id'])).fold<double>(0, (t, o) => t + (o['amount'] as num).toDouble());
    final newTotal = widget.total + add;
    final now = full ? newTotal : double.parse((newTotal * pct).toStringAsFixed(2));
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Queres juntar alguma coisa?', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 4),
              Text('Aceitaste a proposta. ${widget.partnerName} tem extras para o teu pedido.',
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 12),
          const IslandCloseButton(),
        ]),
        const SizedBox(height: 16),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
          decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
          child: Column(children: [
            for (final (i, o) in widget.options.indexed)
              Semantics(
                button: true,
                selected: _on.contains(o['id']),
                child: SnappyTap(
                  onTap: () => setState(() => _on.contains(o['id']) ? _on.remove(o['id']) : _on.add(o['id'] as String)),
                  child: Container(
                    constraints: const BoxConstraints(minHeight: 64),
                    decoration: i == 0 ? null : const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFFD9D9D9)))),
                    child: Row(children: [
                      Container(
                        width: 22,
                        height: 22,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: _on.contains(o['id']) ? AppTheme.accentOliveDark : Colors.white,
                          border: _on.contains(o['id']) ? null : Border.all(color: AppTheme.inkMuted, width: 1.5),
                        ),
                        child: _on.contains(o['id']) ? const Icon(Hi.check, size: 13, color: Colors.white) : null,
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                          Text(o['name'] as String, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          if (((o['details'] as List?) ?? const []).isNotEmpty)
                            Text(((o['details'] as List).join(' · ')),
                                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                        ]),
                      ),
                      const SizedBox(width: 10),
                      Text('+ ${euros((o['amount'] as num).toDouble())}',
                          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ]),
                  ),
                ),
              ),
          ]),
        ),
        const SizedBox(height: 16),
        if (!full)
          Row(children: [
            const Expanded(child: Text('Reserva + extras', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
            Text(euros(newTotal), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        const SizedBox(height: 6),
        Row(children: [
          Expanded(
            child: Text(full ? 'A pagar agora' : 'Sinal (${(pct * 100).round()} %) agora',
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ),
          Text(euros(now, cents: true), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        // A taxa só entra no passo de pagar: dizê-lo já (mockups 2026-11-21).
        const Align(
          alignment: Alignment.centerRight,
          child: Text('+ taxa de serviço no passo seguinte', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ),
        const SizedBox(height: 20),
        Row(children: [
          Expanded(
            child: SnappyTap(
              onTap: () => Navigator.of(context).pop(<String>{}),
              child: Container(
                height: 52,
                alignment: Alignment.center,
                decoration: const ShapeDecoration(
                  color: Colors.white,
                  shape: StadiumBorder(side: BorderSide(color: AppTheme.ink, width: 1.5)),
                ),
                child: const Text('Sem extras', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ),
          ),
          const SizedBox(width: 8),
          Expanded(
            flex: 2,
            child: SnappyTap(
              onTap: () => Navigator.of(context).pop({..._on}),
              child: Container(
                height: 52,
                alignment: Alignment.center,
                decoration: const ShapeDecoration(color: AppTheme.ink, shape: StadiumBorder()),
                child: Text('Continuar · ${euros(now, cents: true)}',
                    maxLines: 1, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Colors.white)),
              ),
            ),
          ),
        ]),
      ]),
    );
  }
}
