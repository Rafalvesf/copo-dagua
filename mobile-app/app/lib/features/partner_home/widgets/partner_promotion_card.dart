import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/partners/promotions.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';

/// Destaque pago (migração 155, pedido 2026-11-03): sem mensalidade; as
/// reservas que vêm do destaque pagam +6% de taxa de serviço. Liga e desliga
/// quando quiser; no máximo 6 parceiros por categoria e zona (fila).
class PartnerPromotionCard extends ConsumerStatefulWidget {
  const PartnerPromotionCard({super.key});

  @override
  ConsumerState<PartnerPromotionCard> createState() => _PartnerPromotionCardState();
}

class _PartnerPromotionCardState extends ConsumerState<PartnerPromotionCard> {
  bool _busy = false;

  String _pct(double v) => v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(1).replaceAll('.', ',');

  Future<void> _start(MyPromotion p) async {
    final opts = await ref.read(myPromotionOptionsProvider.future);
    if (!mounted) return;
    if (opts.categories.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Escolhe primeiro as tuas categorias no perfil.')));
      return;
    }
    var cat = opts.categories.first.slug;
    String? region = opts.nationwide || opts.areas.isEmpty ? null : opts.areas.first;
    final ok = await showIslandDialog<bool>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setLocal) => IslandAlert(
          title: const Text('Pôr em destaque'),
          content: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Text(
              'Apareces em "Em destaque" a quem procura o teu serviço. Sem mensalidade: '
              'só as reservas que vierem do destaque pagam +${_pct(p.extraPct)}% de taxa de serviço. '
              'Desligas quando quiseres. Máximo ${p.slots} parceiros por categoria e zona — se estiver cheio, ficas na fila.',
            ),
            if (opts.categories.length > 1) ...[
              const SizedBox(height: 14),
              const Text('Categoria', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 6),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (final c in opts.categories)
                  ChoiceChip(
                    label: Text(c.label),
                    selected: cat == c.slug,
                    showCheckmark: false,
                    onSelected: (_) => setLocal(() => cat = c.slug),
                  ),
              ]),
            ],
            const SizedBox(height: 14),
            const Text('Zona', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 6),
            Wrap(spacing: 8, runSpacing: 8, children: [
              ChoiceChip(
                label: const Text('Todo o país'),
                selected: region == null,
                showCheckmark: false,
                onSelected: (_) => setLocal(() => region = null),
              ),
              for (final a in opts.areas)
                ChoiceChip(
                  label: Text(a),
                  selected: region == a,
                  showCheckmark: false,
                  onSelected: (_) => setLocal(() => region = a),
                ),
            ]),
          ]),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancelar')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Ligar destaque')),
          ],
        ),
      ),
    );
    if (ok != true || !mounted) return;
    setState(() => _busy = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      final status = await startPromotion(categorySlug: cat, region: region);
      messenger.showSnackBar(SnackBar(
        content: Text(status == 'active'
            ? 'Estás em destaque.'
            : 'Os ${p.slots} lugares desta categoria e zona estão ocupados: ficaste na fila e entras assim que abrir um.'),
      ));
    } on PromotionError catch (e) {
      messenger.showSnackBar(SnackBar(content: Text(e.message)));
    } finally {
      ref.invalidate(myPromotionProvider);
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _stop() async {
    final ok = await showIslandDialog<bool>(
      context: context,
      builder: (ctx) => IslandAlert(
        title: const Text('Desligar o destaque?'),
        content: const Text('Deixas de aparecer em "Em destaque". As reservas que já vieram do destaque continuam com a taxa de serviço do destaque.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Voltar')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Desligar')),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    setState(() => _busy = true);
    try {
      await stopPromotion();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível desligar. Tenta outra vez.')));
      }
    } finally {
      ref.invalidate(myPromotionProvider);
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final p = ref.watch(myPromotionProvider).value;
    if (p == null || !p.available) return const SizedBox.shrink();
    final green = AppTheme.accentOliveDark;
    final zone = p.region ?? 'todo o país';
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: softCard(radius: 24),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Icon(Hi.sparkles, color: green, size: 20),
          const SizedBox(width: 8),
          const Expanded(
            child: Text('Destaque', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppTheme.ink)),
          ),
          if (p.on)
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
              decoration: BoxDecoration(color: AppTheme.accentTint, borderRadius: BorderRadius.circular(999)),
              child: Text(p.status == 'active' ? 'Ativo' : 'Na fila · ${p.queuePosition ?? 1}.º',
                  style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w800, color: green)),
            ),
        ]),
        const SizedBox(height: 6),
        Text(
          p.on
              ? '${p.categoryLabel ?? ''} · $zone. As reservas que vierem do destaque pagam +${_pct(p.extraPct)}% de taxa de serviço.'
              : 'Aparece primeiro a quem procura o teu serviço. Sem mensalidade: só pagas +${_pct(p.extraPct)}% nas reservas que vierem do destaque.',
          style: const TextStyle(fontSize: AppFontSize.sm + 1, height: 1.4, color: AppTheme.inkMuted),
        ),
        if (p.status == 'active') ...[
          const SizedBox(height: 10),
          Row(children: [
            Expanded(child: _Stat(label: 'Toques (30 dias)', value: '${p.clicks30d}')),
            const SizedBox(width: 10),
            Expanded(child: _Stat(label: 'Reservas do destaque', value: '${p.bookingsFromPromo}')),
          ]),
        ],
        const SizedBox(height: 12),
        p.on
            ? OutlinedButton(
                onPressed: _busy ? null : _stop,
                style: OutlinedButton.styleFrom(minimumSize: const Size.fromHeight(46), shape: const StadiumBorder()),
                child: const Text('Desligar destaque'),
              )
            : FilledButton.icon(
                onPressed: _busy ? null : () => _start(p),
                icon: const Icon(Hi.sparkles, size: 18),
                label: const Text('Pôr em destaque'),
                style: FilledButton.styleFrom(
                  backgroundColor: AppTheme.ink,
                  foregroundColor: Colors.white,
                  minimumSize: const Size.fromHeight(46),
                  shape: const StadiumBorder(),
                ),
              ),
      ]),
    );
  }
}

class _Stat extends StatelessWidget {
  final String label;
  final String value;
  const _Stat({required this.label, required this.value});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        decoration: BoxDecoration(color: const Color(0xFFF4F2EC), borderRadius: BorderRadius.circular(14)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(value, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppTheme.ink)),
          Text(label, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
        ]),
      );
}
