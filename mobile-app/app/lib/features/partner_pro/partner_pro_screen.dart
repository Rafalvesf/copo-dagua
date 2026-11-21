import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/auth/auth_controller.dart';
import '../../core/gifts/gift_shop.dart' show giftEuros;
import '../../core/partner_app/partner_analytics.dart';
import '../../core/partners/partner_pro.dart';
import '../../core/home/home_providers.dart' show partnerFeeRatesProvider;
import '../../core/payments/payments.dart';
import '../../core/theme/app_theme.dart';
import '../../shared/widgets/estrela.dart';
import '../../shared/widgets/gradient_scaffold.dart';
import '../../shared/widgets/page_kit.dart';
import '../../shared/widgets/premium_kit.dart';
import 'package:copo_dagua_app/shared/widgets/island_sheet.dart';

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

  /// Premium grátis (migração 209): põe o cartão e fica Premium já; só paga
  /// no fim dos meses grátis, se não cancelar antes. Só com cartão.
  void _startTrial(PartnerPro pro) {
    final yearly = _yearly;
    final months = pro.trialMonths;
    context.push('/pay', extra: PayArgs(
      paymentId: '',
      partnerName: 'À Nossa!',
      kind: 'pro',
      amount: 0,
      titleOverride: 'Premium · $months ${months == 1 ? 'mês' : 'meses'} grátis',
      actionLabel: 'Começar $months ${months == 1 ? 'mês' : 'meses'} grátis',
      methods: const [PayMethod.card],
      // Cria primeiro o método de pagamento com o cartão escrito.
      cardFee: true,
      create: (m, {phone, paymentMethodId}) => startProTrial(yearly: yearly, paymentMethodId: paymentMethodId),
      state: proPayState,
      onPaid: (ctx) => ctx.pushReplacement('/partner-pro?ok=1'),
      errorText: (c) => ProError(c).message,
    ));
  }

  Future<void> _setCancelling(bool cancel) async {
    if (cancel) {
      final ok = await showIslandDialog<bool>(
        context: context,
        builder: (c) => IslandAlert(
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

  static const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  String _date(DateTime d) => '${d.day} ${_months[d.month - 1]} ${d.year}';

  bool _celebrated = false;

  /// Voltou do cartão / do pagamento e já é Premium: «És Premium» com a
  /// estrela de parabéns (mockup «Definições · Pagamentos e Premium»).
  void _celebrate(PartnerPro pro) {
    if (_celebrated || !widget.returned || !pro.active) return;
    _celebrated = true;
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;
      final until = pro.until;
      final monthly = pro.interval == 'year' ? '${giftEuros(pro.priceYearly)}/ano' : '${giftEuros(pro.priceMonthly)}/mês';
      showIslandSheet<void>(
        context: context,
        builder: (c) => Padding(
          padding: const EdgeInsets.fromLTRB(20, 28, 20, 20),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            const Center(child: EstrelaMascot(Estrela.parabens, size: 120)),
            const SizedBox(height: 16),
            const Text('És Premium', textAlign: TextAlign.center,
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 6),
            Text(
              until == null
                  ? 'Já tens tudo o que o Premium dá.'
                  : pro.hasSubscription
                      ? 'Até ${_date(until)}. Depois, $monthly, até cancelares.'
                      : 'Até ${_date(until)}.',
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted, height: 1.4),
            ),
            const SizedBox(height: 16),
            PillButton('OK', onPressed: () => Navigator.of(c).pop()),
          ]),
        ),
      );
    });
  }

  /// O mesmo quadro na página e em «Gerir»: o que muda com o Premium.
  List<(String, String, String)> _compare(PartnerPro pro, double baseFee) => [
        ('Taxa de serviço', '${_pts(baseFee)} %', '${_pts((baseFee - pro.feeDiscount).clamp(0, 100).toDouble())} %'),
        ('Destaque', '+${_pts(pro.promotionExtraPct)} %', '+${_pts(pro.proPromotionExtraPct)} %'),
        ('Produtos na loja', 'Até ${pro.freeShopProducts}', 'Sem limite'),
        ('Selo Premium', '—', 'Sim'),
      ];

  @override
  Widget build(BuildContext context) {
    final pro = ref.watch(myPartnerProProvider).value ?? const PartnerPro();
    _celebrate(pro);
    // A taxa do parceiro de que partem as contas (o 1.º escalão, 4 %).
    final me = ref.watch(authControllerProvider).profile?.id;
    final rates = me == null ? null : ref.watch(partnerFeeRatesProvider(me)).value;
    final baseFee = rates?.partner.tiers.isNotEmpty == true ? rates!.partner.tiers.first.pct : (rates?.partner.flatPct ?? 4);
    final monthlyOfYear = pro.priceYearly / 12;
    final yearSaving = (pro.priceMonthly * 12 - pro.priceYearly).clamp(0, double.infinity);

    final List<Widget> body;
    Widget? bar;
    if (!pro.enabled && !pro.active) {
      body = [
        const KitCaps('Premium'),
        const Text('O Premium ainda não está disponível.', style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
      ];
    } else if (!pro.active) {
      final trial = pro.trialAvailable;
      final months = pro.trialMonths;
      final example = 2000 * pro.feeDiscount / 100;
      final breakEven = pro.feeDiscount <= 0 ? null : pro.priceMonthly / (pro.feeDiscount / 100);
      body = [
        HeroSummary(
          label: 'À Nossa! Premium',
          number: trial ? '0 €' : giftEuros(_yearly ? monthlyOfYear : pro.priceMonthly),
          unit: trial ? 'durante $months ${months == 1 ? 'mês' : 'meses'}' : '/mês',
          tag: trial ? '$months ${months == 1 ? 'mês' : 'meses'} grátis' : null,
          line: trial
              ? 'Depois ${giftEuros(pro.priceMonthly)}/mês ou ${giftEuros(pro.priceYearly)}/ano. Cancelas quando quiseres.'
              : 'Cancelas quando quiseres.',
        ),
        const SizedBox(height: 16),
        Wrap(spacing: 8, runSpacing: 8, children: [
          KitPill(label: 'Mensal · ${giftEuros(pro.priceMonthly)}', selected: !_yearly, onTap: () => setState(() => _yearly = false)),
          KitPill(label: 'Anual · ${giftEuros(pro.priceYearly)}', selected: _yearly, onTap: () => setState(() => _yearly = true)),
        ]),
        if (_yearly && yearSaving > 0)
          Padding(
            padding: const EdgeInsets.only(top: 8),
            child: Text('${giftEuros(monthlyOfYear)}/mês · poupas ${giftEuros(yearSaving.toDouble())} por ano',
                style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
          ),
        const KitCaps('Sem e com Premium'),
        CompareTable(_compare(pro, baseFee)),
        const SizedBox(height: 12),
        NumberCard(
          label: 'As contas',
          number: giftEuros(example),
          unit: 'a menos numa reserva de 2 000 €',
          line: breakEven == null ? null : 'Com ${giftEuros(breakEven)} de reservas por mês, o Premium já se paga.',
        ),
      ];
      bar = StickyActionBar(
        button: PillButton(
          _busy
              ? 'A abrir…'
              : trial
                  ? 'Experimentar $months ${months == 1 ? 'mês' : 'meses'} grátis'
                  : 'Ser Premium',
          onPressed: _busy ? null : () => trial ? _startTrial(pro) : _subscribe(pro),
        ),
        note: trial ? 'Pões o cartão e ficas Premium já. Hoje pagas 0 €.' : null,
      );
    } else {
      final stats = ref.watch(partnerAnalyticsProvider(AnalyticsPeriod.month)).value;
      final saving = stats == null ? null : stats.revenue * pro.feeDiscount / 100;
      final until = pro.until;
      final days = until == null ? null : until.difference(DateTime.now()).inDays.clamp(0, 9999);
      final price = pro.interval == 'year' ? '${giftEuros(pro.priceYearly)}/ano' : '${giftEuros(pro.priceMonthly)}/mês';
      body = [
        HeroSummary(
          label: 'Poupaste este mês',
          number: giftEuros(saving ?? 0),
          unit: 'na taxa',
          tag: 'És Premium',
          line: saving != null && saving > pro.priceMonthly ? 'Mais do que os ${giftEuros(pro.priceMonthly)} do Premium.' : null,
        ),
        const KitCaps('Sem e com Premium'),
        CompareTable(_compare(pro, baseFee)),
        if (until != null) ...[
          const SizedBox(height: 12),
          NumberCard(
            label: pro.interval == 'gift'
                ? 'Oferta ainda'
                : (pro.hasSubscription && !_cancelling)
                    ? 'Renova em'
                    : 'Premium ainda',
            number: '$days',
            unit: '${days == 1 ? 'dia' : 'dias'} · até ${_date(until)}',
            line: pro.interval == 'gift'
                ? 'Oferta da À Nossa!.'
                : (pro.hasSubscription && !_cancelling)
                    ? 'Depois $price, até cancelares.'
                    : 'Depois não é renovado.',
          ),
        ],
      ];
      if (pro.hasSubscription) {
        bar = StickyActionBar(
          button: PillButton(
            _cancelling ? 'Continuar com o Premium' : 'Cancelar subscrição',
            outlined: !_cancelling,
            onPressed: _busy ? null : () => _setCancelling(!_cancelling),
          ),
          note: _cancelling && until != null ? 'Cancelado: és Premium até ${_date(until)}.' : 'Continuas Premium até ao fim do período.',
        );
      }
    }

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(children: [
        KitPage(
          pinnedBack: true,
          bottom: bar == null ? 40 : 160,
          children: [
            const KitHeader(),
            KitTitle('Premium', subtitle: pro.active ? 'És Premium' : 'Pagas menos taxa, apareces primeiro e sabes mais.'),
            const SizedBox(height: 20),
            ...body,
            if (_error != null)
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: AppStatusColors.declined)),
              ),
          ],
        ),
        if (bar != null) bar,
      ]),
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
        // Visto de verificado (antes era o mesmo troféu do Fundador).
        child: Icon(Hi.checkBadge, size: 18, color: AppTheme.accentOliveDark, semanticLabel: 'Verificado'),
      ),
    );
  }
}
