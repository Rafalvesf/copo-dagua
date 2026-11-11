import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/gifts/gift_shop.dart' show giftEuros;
import '../../core/partners/partner_pro.dart';
import '../../core/payments/payments.dart';
import '../../core/theme/app_theme.dart';
import '../../shared/widgets/gradient_scaffold.dart';
import '../../shared/widgets/page_header.dart';

/// Plano Pro do parceiro (migração 161).
class PartnerProScreen extends ConsumerStatefulWidget {
  /// Voltou da Stripe depois de pagar.
  final bool returned;
  const PartnerProScreen({super.key, this.returned = false});
  @override
  ConsumerState<PartnerProScreen> createState() => _PartnerProScreenState();
}

class _PartnerProScreenState extends ConsumerState<PartnerProScreen> {
  bool _yearly = true;
  bool _busy = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    // Ao voltar da Stripe (ou ao abrir), acerta o estado com a subscrição.
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      await syncPro();
      final cancelling = await proCancelling();
      if (!mounted) return;
      setState(() => _cancelling = cancelling);
      ref.invalidate(myPartnerProProvider);
      ref.invalidate(proPartnerIdsProvider);
      ref.invalidate(partnerProStatsProvider);
    });
  }

  bool _cancelling = false;

  /// Pagamento dentro da app (2026-11-09: nunca com link) — cartão,
  /// Apple Pay ou Google Pay; a subscrição fica ativa quando é paga.
  void _subscribe(PartnerPro pro) {
    final yearly = _yearly;
    context.push('/pay', extra: PayArgs(
      paymentId: '',
      partnerName: 'À Nossa!',
      kind: 'pro',
      amount: yearly ? pro.priceYearly : pro.priceMonthly,
      titleOverride: yearly ? 'Premium anual' : 'Premium mensal',
      methods: const [PayMethod.wallet, PayMethod.card],
      create: (m, {phone, paymentMethodId}) => createProIntent(yearly: yearly),
      state: proPayState,
      onPaid: (ctx) => ctx.pushReplacement('/partner-pro?ok=1'),
      errorText: (c) => const {'method_unavailable', 'declined', 'not_configured'}.contains(c) ? payErrorMessage(c) : ProError(c).message,
    ));
  }

  Future<void> _setCancelling(bool cancel) async {
    if (cancel) {
      final ok = await showDialog<bool>(
        context: context,
        builder: (c) => AlertDialog(
          title: const Text('Cancelar o Premium?'),
          content: const Text('Continuas Premium até ao fim do período que já pagaste. Depois não é renovado.'),
          actions: [
            TextButton(onPressed: () => Navigator.of(c).pop(false), child: const Text('Voltar')),
            FilledButton(onPressed: () => Navigator.of(c).pop(true), child: const Text('Cancelar subscrição')),
          ],
        ),
      );
      if (ok != true) return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final c = await setProCancelling(cancel);
      if (!mounted) return;
      setState(() => _cancelling = c);
      ref.invalidate(myPartnerProProvider);
    } on ProError catch (e) {
      if (mounted) setState(() => _error = e.message);
    } catch (_) {
      if (mounted) setState(() => _error = const ProError('unknown').message);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  String _pts(double v) => v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(1).replaceAll('.', ',');

  String _date(DateTime d) => '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}';

  @override
  Widget build(BuildContext context) {
    final pro = ref.watch(myPartnerProProvider).value ?? const PartnerPro();
    final green = AppTheme.accentOliveDark;
    final monthlyOfYear = pro.priceYearly / 12;
    final saving = (pro.priceMonthly * 12 - pro.priceYearly).clamp(0, double.infinity);
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(top: false, 
        child: ListView(
          padding: ( const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 40)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            const PageHeader(title: 'À Nossa! Premium', subtitle: 'Pagas menos taxa de serviço, apareces mais e sabes mais.', centered: true),
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.all(18),
              decoration: BoxDecoration(color: green, borderRadius: BorderRadius.circular(AppRadius.lg)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(children: [
                  const Icon(Hi.trophy, color: Colors.white),
                  const SizedBox(width: 8),
                  Text(pro.active ? 'És Premium' : 'Premium', style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w800, color: Colors.white)),
                ]),
                const SizedBox(height: 6),
                Text(
                  pro.active
                      ? (pro.interval == 'gift'
                          ? 'Oferta da À Nossa! até ${pro.until == null ? '—' : _date(pro.until!)}.'
                          : (pro.hasSubscription
                              ? 'Renova a ${pro.until == null ? '—' : _date(pro.until!)}.'
                              : 'Ativo até ${pro.until == null ? '—' : _date(pro.until!)} (subscrição cancelada).'))
                      : '${giftEuros(pro.priceMonthly)}/mês ou ${giftEuros(pro.priceYearly)}/ano. Cancelas quando quiseres.',
                  style: TextStyle(fontSize: 14, height: 1.4, color: Colors.white.withValues(alpha: 0.9)),
                ),
              ]),
            ),
            const SizedBox(height: 16),
            for (final b in [
              (Hi.percentBadge, 'Taxa de serviço mais baixa',
                  '−${_pts(pro.feeDiscount)}% em todas as reservas (ex.: 5% passa a ${_pts(5 - pro.feeDiscount)}%).'),
              (Hi.userPlus, 'Convites valem mais',
                  'Cada ${pro.proReferralFreeEvery}.º cliente que trazes fica sem taxa de serviço (sem o Premium, o ${pro.referralFreeEvery}.º).'),
              (Hi.megaphone, 'Destaque mais barato',
                  '+${_pts(pro.proPromotionExtraPct)}% nas reservas que vêm do destaque (sem o Premium, +${_pts(pro.promotionExtraPct)}%).'),
              (Hi.trophy, 'Selo Premium e mais visibilidade', 'Selo no perfil e na pesquisa, e apareces antes dos outros parceiros.'),
              (Hi.chartBar, 'Estatísticas detalhadas', 'Visitas ao perfil por semana, pedidos começados e conversão.'),
              (Hi.buildingStorefront, 'Loja sem limites', 'Se vendes produtos: sem o Premium até ${pro.freeShopProducts}, com o Premium os que quiseres.'),
            ])
              Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(color: AppTheme.accentTint, borderRadius: BorderRadius.circular(12)),
                    child: Icon(b.$1, color: green),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(b.$2, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      Text(b.$3, style: const TextStyle(fontSize: 13, height: 1.35, color: AppTheme.inkMuted)),
                    ]),
                  ),
                ]),
              ),
            const SizedBox(height: 8),
            if (!pro.enabled && !pro.active)
              const Text('O Premium ainda não está disponível.', textAlign: TextAlign.center, style: TextStyle(color: AppTheme.inkMuted))
            else if (!pro.active) ...[
              SegmentedButton<bool>(
                segments: [
                  ButtonSegment(value: false, label: Text('Mensal · ${giftEuros(pro.priceMonthly)}')),
                  ButtonSegment(value: true, label: Text('Anual · ${giftEuros(pro.priceYearly)}')),
                ],
                selected: {_yearly},
                onSelectionChanged: (s) => setState(() => _yearly = s.first),
              ),
              if (_yearly && saving > 0)
                Padding(
                  padding: const EdgeInsets.only(top: 6),
                  child: Text('${giftEuros(monthlyOfYear)}/mês · poupas ${giftEuros(saving)} por ano',
                      textAlign: TextAlign.center, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: green)),
                ),
              const SizedBox(height: 12),
              FilledButton(
                onPressed: _busy ? null : () => _subscribe(pro),
                style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, minimumSize: const Size.fromHeight(52), shape: const StadiumBorder()),
                child: Text(_busy ? 'A abrir…' : 'Ser Premium'),
              ),
            ] else if (pro.hasSubscription) ...[
              // Gerir dentro da app, sem página da Stripe (2026-11-09).
              if (_cancelling)
                Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: Text('Cancelado: termina a ${pro.until == null ? '—' : _date(pro.until!)}.',
                      textAlign: TextAlign.center, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ),
              OutlinedButton(
                onPressed: _busy ? null : () => _setCancelling(!_cancelling),
                style: OutlinedButton.styleFrom(foregroundColor: AppTheme.ink, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
                child: Text(_cancelling ? 'Continuar com o Premium' : 'Cancelar subscrição'),
              ),
            ],
            if (_error != null)
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFB3261E))),
              ),
          ],
        ),
      ),
    );
  }
}

/// Selo "Premium" (migração 161; era "Pro" até 2026-11-07).
class ProBadge extends ConsumerWidget {
  final String partnerId;
  const ProBadge(this.partnerId, {super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isPro = ref.watch(proPartnerIdsProvider).value?.contains(partnerId) ?? false;
    if (!isPro) return const SizedBox.shrink();
    return Tooltip(
      message: 'Parceiro verificado',
      child: Container(
        margin: const EdgeInsets.only(left: 4),
        child: Icon(Hi.trophy, size: 17, color: AppTheme.accentOliveDark, semanticLabel: 'Premium'),
      ),
    );
  }
}
