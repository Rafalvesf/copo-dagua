import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../core/gifts/gift_shop.dart' show giftEuros;
import '../../core/partners/partner_pro.dart';
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
      if (!mounted) return;
      ref.invalidate(myPartnerProProvider);
      ref.invalidate(proPartnerIdsProvider);
      ref.invalidate(partnerProStatsProvider);
    });
  }

  Future<void> _open(Future<String> Function() get) async {
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final url = await get();
      final ok = await launchUrl(
        Uri.parse(url),
        mode: kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication,
        webOnlyWindowName: kIsWeb ? '_self' : null,
      );
      if (!ok && mounted) setState(() => _error = 'Não foi possível abrir a página de pagamento.');
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
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 40),
          children: [
            const PageHeader(title: 'À Nossa! Premium', subtitle: 'Pagas menos taxa de serviço, apareces mais e sabes mais.', centered: true),
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.all(18),
              decoration: BoxDecoration(color: green, borderRadius: BorderRadius.circular(AppRadius.lg)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(children: [
                  const Icon(Icons.workspace_premium_rounded, color: Colors.white),
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
              (Icons.percent_rounded, 'Taxa de serviço mais baixa',
                  '−${_pts(pro.feeDiscount)}% em todas as reservas (ex.: 4% passa a ${_pts(4 - pro.feeDiscount)}%).'),
              (Icons.group_add_outlined, 'Convites valem mais',
                  'Cada ${pro.proReferralFreeEvery}.º cliente que trazes fica sem taxa de serviço (sem o Premium, o ${pro.referralFreeEvery}.º).'),
              (Icons.campaign_outlined, 'Destaque mais barato',
                  '+${_pts(pro.proPromotionExtraPct)}% nas reservas que vêm do destaque (sem o Premium, +${_pts(pro.promotionExtraPct)}%).'),
              (Icons.workspace_premium_outlined, 'Selo Premium e mais visibilidade', 'Selo no perfil e na pesquisa, e apareces antes dos outros parceiros.'),
              (Icons.insights_outlined, 'Estatísticas detalhadas', 'Visitas ao perfil por semana, pedidos começados e conversão.'),
              (Icons.storefront_outlined, 'Loja sem limites', 'Se vendes produtos: sem o Premium até ${pro.freeShopProducts}, com o Premium os que quiseres.'),
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
                onPressed: _busy ? null : () => _open(() => proCheckoutUrl(yearly: _yearly)),
                style: FilledButton.styleFrom(backgroundColor: green, minimumSize: const Size.fromHeight(52), shape: const StadiumBorder()),
                child: Text(_busy ? 'A abrir…' : 'Ser Premium'),
              ),
            ] else if (pro.hasSubscription)
              OutlinedButton(
                onPressed: _busy ? null : () => _open(proPortalUrl),
                style: OutlinedButton.styleFrom(foregroundColor: AppTheme.ink, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
                child: const Text('Gerir ou cancelar a subscrição'),
              ),
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
        child: Icon(Icons.workspace_premium_rounded, size: 17, color: AppTheme.accentOliveDark, semanticLabel: 'Premium'),
      ),
    );
  }
}
