import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/payments/partner_connect.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/export_card.dart';
import '../../../core/exports/exports.dart';
import '../../payments/screens/pay_done_screen.dart';

/// Pagamentos do parceiro, tudo dentro da app (2026-10-19): saldo real da
/// Stripe, botão "Levantar" para o IBAN, histórico de levantamentos e o
/// caminho para confirmar os dados (`/partner-payments/setup`). Nunca abre
/// o browser.
class PartnerPaymentsScreen extends ConsumerStatefulWidget {
  const PartnerPaymentsScreen({super.key});

  @override
  ConsumerState<PartnerPaymentsScreen> createState() => _PartnerPaymentsScreenState();
}

class _PartnerPaymentsScreenState extends ConsumerState<PartnerPaymentsScreen> {
  bool _paying = false;

  String _eur(int cents) => euros(cents / 100, cents: true);

  Future<void> _withdraw(ConnectStatus s) async {
    final ok = await showIslandDialog<bool>(
      context: context,
      builder: (ctx) => IslandAlert(
        title: const Text('Levantar saldo'),
        content: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text(_eur(s.availableCents),
              style: const TextStyle(fontSize: 36, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 12),
          _SheetRow(icon: Icons.account_balance_outlined, text: 'Para o IBAN •••• ${s.bankLast4 ?? '—'}'),
          const SizedBox(height: 8),
          const _SheetRow(icon: Icons.schedule, text: 'Chega em 1 a 3 dias úteis'),
          const SizedBox(height: 8),
          const _SheetRow(icon: Icons.money_off_csred_outlined, text: 'Sem custos de levantamento'),
        ]),
        actions: [
          TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Cancelar')),
          FilledButton(onPressed: () => Navigator.of(ctx).pop(true), child: const Text('Levantar')),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    setState(() => _paying = true);
    try {
      final p = await requestPayout(amountCents: s.availableCents);
      if (!mounted) return;
      ref.invalidate(partnerConnectStatusProvider);
      final arrival = p.arrival;
      context.push(
        '/pay/done',
        extra: PayDoneArgs(
          partnerName: '',
          title: '',
          amountLabel: _eur(p.amountCents),
          headline: 'Levantamento pedido!',
          subtitle: '${_eur(p.amountCents)} a caminho do teu IBAN',
          lines: [
            (
              Icons.event_outlined,
              arrival == null
                  ? 'Chega em 1 a 3 dias úteis.'
                  : 'Previsto até ${arrival.day.toString().padLeft(2, '0')}/${arrival.month.toString().padLeft(2, '0')}.',
            ),
            (Icons.account_balance_outlined, 'IBAN •••• ${s.bankLast4 ?? '—'}'),
            (Icons.history_rounded, 'Acompanha o estado em Pagamentos › Levantamentos.'),
          ],
          primaryLabel: 'Ver pagamentos',
          primaryRoute: '/partner-payments',
          secondaryLabel: 'Voltar ao início',
          secondaryRoute: '/partner-home',
        ),
      );
    } on ConnectError catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(connectErrorMessage(e.code))));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível levantar. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _paying = false);
    }
  }

  static String _nextAuto(String interval) => switch (interval) {
        'weekly' => 'às sextas-feiras',
        'monthly' => 'no dia 1 de cada mês',
        _ => 'todos os dias',
      };

  /// Manual ou automático — escolha do parceiro (2026-10-19).
  Future<void> _pickMode(ConnectStatus s) async {
    final current = PayoutMode.of(s.payoutSchedule);
    final picked = await showIslandSheet<PayoutMode>(
      context: context,
      builder: (ctx) => _ModeSheet(current: current),
    );
    if (picked == null || picked == current || !mounted) return;
    try {
      await setPayoutMode(picked);
      ref.invalidate(partnerConnectStatusProvider);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Levantamentos: ${picked.label.toLowerCase()}')),
        );
      }
    } on ConnectError catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(connectErrorMessage(e.code))));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível mudar. Tenta novamente.')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(partnerConnectStatusProvider);
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: RefreshIndicator(
          color: AppTheme.brandGreen,
          onRefresh: () async {
            ref.invalidate(partnerConnectStatusProvider);
            ref.invalidate(partnerBalanceProvider);
            await ref.read(partnerConnectStatusProvider.future);
          },
          child: ListView(
            padding: const EdgeInsets.fromLTRB(0, 8, 0, 40),
            children: [
              const PageHeader(title: 'Pagamentos', centered: true),
              const SizedBox(height: 12),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                child: async.when(
                  loading: () => const Padding(
                    padding: EdgeInsets.all(40),
                    child: Center(child: CircularProgressIndicator(color: AppTheme.brandGreen)),
                  ),
                  error: (e, _) => _ErrorCard(
                    text: e is ConnectError ? connectErrorMessage(e.code) : 'Não foi possível carregar os pagamentos.',
                    onRetry: () => ref.invalidate(partnerConnectStatusProvider),
                  ),
                  data: (s) => s.hasAccount && s.detailsSubmitted ? _active(s) : _notActive(s),
                ),
              ),
              // Relatórios para descarregar (2026-10-20).
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                child: SectionTitle('Exportar'),
              ),
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                child: ExportCard(reportLabel: 'Lucros e clientes', partnerSide: true, load: loadPartnerReport),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _notActive(ConnectStatus s) => Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        GreenHero(
          label: 'RECEBE NA APP',
          value: 'Ativa os pagamentos',
          doodles: const [Icons.euro_rounded, Icons.auto_awesome_outlined, Icons.favorite_border],
          footer: const Wrap(spacing: 6, runSpacing: 6, children: [
            HeroPill('Sinais pagos na app', solid: true),
            HeroPill('Levantas quando quiseres'),
          ]),
        ),
        const SectionTitle('Como funciona'),
        const _Step(i: 0, icon: Icons.fact_check_outlined, title: 'Confirma os teus dados',
            text: 'Identidade, morada e IBAN — pedidos pela Stripe, cerca de 5 minutos.'),
        const SizedBox(height: 10),
        const _Step(i: 1, icon: Icons.favorite_border, title: 'Os casais pagam na app',
            text: 'O sinal e o restante entram no teu saldo, sem comissão descontada.'),
        const SizedBox(height: 10),
        const _Step(i: 2, icon: Icons.account_balance_outlined, title: 'Levantas para o IBAN',
            text: 'Um toque em Levantar e o dinheiro chega em 1 a 3 dias úteis.'),
        const SizedBox(height: 20),
        _PillButton(
          label: s.hasAccount ? 'Continuar ativação' : 'Ativar pagamentos',
          onPressed: () => context.push('/partner-payments/setup'),
        ),
      ]);

  Widget _active(ConnectStatus s) {
    final canWithdraw = s.payoutsEnabled && s.availableCents > 0 && !_paying;
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      GreenHero(
        label: 'DISPONÍVEL PARA LEVANTAR',
        value: _eur(s.availableCents),
        doodles: const [Icons.euro_rounded, Icons.auto_awesome_outlined, Icons.favorite_border],
        footer: Wrap(spacing: 6, runSpacing: 6, children: [
          HeroPill('A chegar ${_eur(s.pendingCents)}', solid: true),
          if (s.bankLast4 != null) HeroPill('IBAN •••• ${s.bankLast4}'),
        ]),
      ),
      const SizedBox(height: 14),
      if (s.manualPayouts)
        _PillButton(
          label: _paying
              ? 'A pedir…'
              : !s.payoutsEnabled
                  ? 'Levantamentos por ativar'
                  : s.availableCents > 0
                      ? 'Levantar ${_eur(s.availableCents)}'
                      : 'Sem saldo para levantar',
          icon: Icons.south_rounded,
          onPressed: canWithdraw ? () => _withdraw(s) : null,
        )
      else
        Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(color: AppColors.green, borderRadius: BorderRadius.circular(22)),
          child: Row(children: [
            const Icon(Icons.autorenew_rounded, color: AppTheme.brandGreen),
            const SizedBox(width: 10),
            Expanded(
              child: Text(
                'Levantamento automático ${_nextAuto(s.payoutSchedule)} — o saldo disponível vai sozinho para o IBAN.',
                style: const TextStyle(color: AppTheme.ink, height: 1.35, fontSize: AppFontSize.md),
              ),
            ),
          ]),
        ),
      if (s.pendingCents > 0) ...[
        const SizedBox(height: 8),
        const Text(
          'Os pagamentos novos ficam disponíveis passados alguns dias (prazo da Stripe).',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
        ),
      ],
      if (s.needsData) ...[
        const SizedBox(height: 14),
        _ActionCard(
          icon: Icons.priority_high_rounded,
          title: 'A Stripe precisa de mais dados',
          text: 'Completa para não ficares com os pagamentos parados.',
          color: AppColors.yellow,
          onTap: () => context.push('/partner-payments/setup'),
        ),
      ],
      const SectionTitle('Por receber'),
      const _ToReceive(),
      SectionTitle('Levantamentos', trailing: s.payouts.isEmpty ? null : Text('${s.payouts.length}',
          style: const TextStyle(color: AppTheme.inkMuted, fontWeight: FontWeight.w700))),
      if (s.payouts.isEmpty)
        Container(
          padding: const EdgeInsets.all(16),
          decoration: whiteLineCard(),
          child: const Text('Ainda não fizeste nenhum levantamento.',
              style: TextStyle(color: AppTheme.inkMuted)),
        )
      else
        for (final (i, p) in s.payouts.indexed) ...[
          _PayoutRow(payout: p, index: i),
          const SizedBox(height: 8),
        ],
      const SectionTitle('Conta'),
      _ActionCard(
        icon: Icons.tune_rounded,
        title: 'Modo de levantamento',
        text: PayoutMode.of(s.payoutSchedule).label,
        color: Colors.white,
        onTap: () => _pickMode(s),
      ),
      const SizedBox(height: 10),
      _ActionCard(
        icon: Icons.verified_user_outlined,
        title: 'Os meus dados na Stripe',
        text: s.needsData ? 'Há dados em falta' : 'Identidade, morada e IBAN confirmados',
        color: Colors.white,
        onTap: () => context.push('/partner-payments/setup'),
      ),
    ]);
  }
}

class _ToReceive extends ConsumerWidget {
  const _ToReceive();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final b = ref.watch(partnerBalanceProvider).value;
    Widget tile(String label, double v, Color c) => Expanded(
          child: Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(20)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(label, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              const SizedBox(height: 4),
              Text(euros(v),
                  style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
        );
    return Row(children: [
      tile('Sinais a aguardar', b?.pendingDeposits ?? 0, AppColors.pink),
      const SizedBox(width: 10),
      tile('Restante por cobrar', b?.uncollectedBalance ?? 0, AppColors.green),
    ]);
  }
}

class _PayoutRow extends StatelessWidget {
  final ConnectPayout payout;
  final int index;
  const _PayoutRow({required this.payout, required this.index});

  @override
  Widget build(BuildContext context) {
    final d = payout.created ?? payout.arrival;
    final date = d == null ? '' : '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}';
    final (bg, fg) = switch (payout.status) {
      'paid' => (const Color(0xFFE4EFE5), const Color(0xFF2F6B45)),
      'failed' || 'canceled' => (const Color(0xFFFBE3E1), const Color(0xFFB3261E)),
      _ => (const Color(0xFFFCEFD6), const Color(0xFF7A5000)),
    };
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: whiteLineCard(),
      child: Row(children: [
        StickerIcon(Icons.south_rounded, size: 36, turns: StickerIcon.tilt(index)),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(euros(payout.amountCents / 100, cents: true),
                style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink, fontSize: AppFontSize.base)),
            Text(date, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
          ]),
        ),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
          decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
          child: Text(payout.statusLabel,
              style: TextStyle(fontSize: AppFontSize.xs, fontWeight: FontWeight.w700, color: fg)),
        ),
      ]),
    );
  }
}

class _Step extends StatelessWidget {
  final int i;
  final IconData icon;
  final String title;
  final String text;
  const _Step({required this.i, required this.icon, required this.title, required this.text});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(14),
        decoration: whiteLineCard(),
        child: Row(children: [
          StickerIcon(icon, turns: StickerIcon.tilt(i)),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text(text, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.3)),
            ]),
          ),
        ]),
      );
}

class _ActionCard extends StatelessWidget {
  final IconData icon;
  final String title;
  final String text;
  final Color color;
  final VoidCallback onTap;
  const _ActionCard({required this.icon, required this.title, required this.text, required this.color, required this.onTap});

  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: color == Colors.white
              ? whiteLineCard()
              : BoxDecoration(color: color, borderRadius: BorderRadius.circular(22)),
          child: Row(children: [
            StickerIcon(icon, size: 36),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(title, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(text, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              ]),
            ),
            const Icon(Icons.chevron_right_rounded, color: AppTheme.inkMuted),
          ]),
        ),
      );
}

class _PillButton extends StatelessWidget {
  final String label;
  final IconData? icon;
  final VoidCallback? onPressed;
  const _PillButton({required this.label, this.icon, this.onPressed});

  @override
  Widget build(BuildContext context) => SizedBox(
        height: 54,
        child: FilledButton(
          onPressed: onPressed,
          style: FilledButton.styleFrom(
            backgroundColor: AppTheme.brandGreen,
            disabledBackgroundColor: AppTheme.brandGreen.withValues(alpha: 0.35),
            foregroundColor: Colors.white,
            disabledForegroundColor: Colors.white,
            shape: const StadiumBorder(),
            textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: AppFontSize.lg, fontWeight: FontWeight.w700),
          ),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            if (icon != null) ...[Icon(icon, size: 20), const SizedBox(width: 8)],
            Flexible(child: Text(label, maxLines: 1, overflow: TextOverflow.ellipsis)),
          ]),
        ),
      );
}

class _SheetRow extends StatelessWidget {
  final IconData icon;
  final String text;
  const _SheetRow({required this.icon, required this.text});

  @override
  Widget build(BuildContext context) => Row(children: [
        Icon(icon, size: 18, color: AppTheme.brandGreen),
        const SizedBox(width: 10),
        Expanded(child: Text(text, style: const TextStyle(color: AppTheme.ink))),
      ]);
}

class _ErrorCard extends StatelessWidget {
  final String text;
  final VoidCallback onRetry;
  const _ErrorCard({required this.text, required this.onRetry});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(16),
        decoration: whiteLineCard(),
        child: Column(children: [
          Text(text, textAlign: TextAlign.center, style: const TextStyle(color: AppTheme.inkMuted)),
          TextButton(onPressed: onRetry, child: const Text('Tentar outra vez')),
        ]),
      );
}

class _ModeSheet extends StatefulWidget {
  final PayoutMode current;
  const _ModeSheet({required this.current});

  @override
  State<_ModeSheet> createState() => _ModeSheetState();
}

class _ModeSheetState extends State<_ModeSheet> {
  late PayoutMode _sel = widget.current;

  @override
  Widget build(BuildContext context) {
    return IslandAlert(
      title: const Text('Modo de levantamento'),
      content: Column(mainAxisSize: MainAxisSize.min, children: [
        for (final m in PayoutMode.values) ...[
          GestureDetector(
            onTap: () => setState(() => _sel = m),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 150),
              padding: const EdgeInsets.all(12),
              decoration: whiteLineCard(
                radius: 18,
                line: _sel == m ? AppTheme.brandGreen : null,
                width: _sel == m ? 2 : 1,
              ),
              child: Row(children: [
                Icon(m == PayoutMode.manual ? Icons.touch_app_outlined : Icons.autorenew_rounded,
                    color: AppTheme.brandGreen),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(m.label, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    Text(m.hint, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                  ]),
                ),
                Icon(_sel == m ? Icons.radio_button_checked : Icons.radio_button_off,
                    color: _sel == m ? AppTheme.brandGreen : AppTheme.borderMuted),
              ]),
            ),
          ),
          const SizedBox(height: 8),
        ],
      ]),
      actions: [
        TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Cancelar')),
        FilledButton(onPressed: () => Navigator.of(context).pop(_sel), child: const Text('Guardar')),
      ],
    );
  }
}
