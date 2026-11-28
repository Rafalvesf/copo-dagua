import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import '../../../shared/widgets/alert_outline.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/home/home_providers.dart' show PartnerFeeConfig, partnerFeeConfigProvider;
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/payments/partner_connect.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/green_hero.dart' show SectionTitle;
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/page_kit.dart' show KitTitle;
import '../../../shared/widgets/line_icon.dart';
import '../../../shared/widgets/onb_kit.dart';
import '../../../shared/widgets/dense_card.dart' show AlertStrip;
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/export_card.dart';
import '../../../core/exports/exports.dart';
import '../../payments/screens/pay_done_screen.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

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
          _SheetRow(icon: Hi.buildingLibrary, text: 'Para o IBAN •••• ${s.bankLast4 ?? '—'}'),
          const SizedBox(height: 8),
          const _SheetRow(icon: Hi.clock, text: 'Chega em 1 a 3 dias úteis'),
          const SizedBox(height: 8),
          const _SheetRow(icon: Hi.banknotes, text: 'Sem custos de levantamento'),
        ]),
        actions: [
          PressScale(child: TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Cancelar'))),
          PressScale(child: FilledButton(onPressed: () => Navigator.of(ctx).pop(true), child: const Text('Levantar'))),
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
              Hi.calendar,
              arrival == null
                  ? 'Chega em 1 a 3 dias úteis.'
                  : 'Previsto até ${arrival.day.toString().padLeft(2, '0')}/${arrival.month.toString().padLeft(2, '0')}.',
            ),
            (Hi.buildingLibrary, 'IBAN •••• ${s.bankLast4 ?? '—'}'),
            (Hi.clock, 'Acompanha o estado em Pagamentos › Levantamentos.'),
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
      body: SafeArea(top: false, 
        child: RefreshIndicator(
          color: AppTheme.accentOliveDark,
          onRefresh: () async {
            ref.invalidate(partnerConnectStatusProvider);
            ref.invalidate(partnerBalanceProvider);
            await ref.read(partnerConnectStatusProvider.future);
          },
          child: ListView(
            padding: ( const EdgeInsets.fromLTRB(0, 8, 0, 40)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 4, AppTheme.screenMargin, 0),
                child: Row(children: [OnbBackButton(onTap: () => context.canPop() ? context.pop() : context.go('/partner-home'))]),
              ),
              const Padding(
                padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 20),
                child: KitTitle('Pagamentos', subtitle: 'O que recebeste e o que está para chegar.'),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                child: async.when(
                  loading: () => Padding(
                    padding: EdgeInsets.all(40),
                    child: const SkeletonList(count: 4, padding: EdgeInsets.zero),
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
                child: SectionFrame(title: 'Exportar', children: [
                  ExportCard(reportLabel: 'Lucros e clientes', partnerSide: true, load: loadPartnerReport),
                ]),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _notActive(ConnectStatus s) => Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
          child: const Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('Recebe pagamentos na app', style: TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            SizedBox(height: 6),
            Text('Os clientes pagam dentro da À Nossa! e o dinheiro vai para a tua conta.',
                style: TextStyle(fontSize: 14, height: 1.45, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
          ]),
        ),
        const SectionTitle('Como funciona'),
        const _Step(i: 0, icon: Hi.clipboardDocumentCheck, title: 'Confirma os teus dados',
            text: 'Identidade, morada e IBAN — pedidos pela Stripe, cerca de 5 minutos.'),
        const SizedBox(height: 10),
        const _Step(i: 1, icon: Hi.heartOutline, title: 'Os clientes pagam na app',
            text: 'O sinal e o restante entram no teu saldo, já sem a taxa de serviço.'),
        const SizedBox(height: 10),
        const _Step(i: 2, icon: Hi.buildingLibrary, title: 'Levantas para o IBAN',
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
      // Saldo (mockup "Pagamentos ativos").
      Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(22),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
            child: Text(s.active ? 'Pagamentos ativos' : 'Em verificação',
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
          ),
          const SizedBox(height: 10),
          const Text('Disponível para receber', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
          const SizedBox(height: 6),
          Text(_eur(s.availableCents), style: const TextStyle(fontSize: 40, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 8),
          Text(
            [
              if (s.pendingCents > 0) 'A chegar ${_eur(s.pendingCents)}.',
              if (!s.manualPayouts && s.bankLast4 != null) 'Vai sozinho para a conta ···· ${s.bankLast4} ${_nextAuto(s.payoutSchedule)}.',
              if (s.manualPayouts && s.bankLast4 != null) 'Levantas para a conta ···· ${s.bankLast4}.',
            ].join(' '),
            style: const TextStyle(fontSize: 13, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.inkMuted),
          ),
          // Em automático também se pode levantar já (pedido 2026-11-14).
          if (!s.manualPayouts && s.payoutsEnabled && s.availableCents > 0) ...[
            const SizedBox(height: 14),
            OnbButton(
              label: _paying ? 'A pedir…' : 'Levantar já ${_eur(s.availableCents)}',
              secondary: true,
              onPressed: canWithdraw ? () => _withdraw(s) : null,
            ),
          ],
          if (s.manualPayouts) ...[
            const SizedBox(height: 14),
            OnbButton(
              label: _paying
                  ? 'A pedir…'
                  : !s.payoutsEnabled
                      ? 'Levantamentos por ativar'
                      : s.availableCents > 0
                          ? 'Levantar ${_eur(s.availableCents)}'
                          : 'Sem saldo para levantar',
              onPressed: canWithdraw ? () => _withdraw(s) : null,
            ),
          ],
        ]),
      ),
      const _OwedNote(),
      if (s.needsData) ...[
        const SizedBox(height: 12),
        AlertStrip(
          tone: AlertTone.pending,
          text: 'A Stripe precisa de mais dados para não parar os pagamentos.',
          cta: 'Completar',
          onTap: () => context.push('/partner-payments/setup'),
        ),
      ],
      const SectionFrame(title: 'A caminho', children: [_Incoming()]),
      const SectionFrame(title: 'Por cobrar', children: [_ToReceive()]),
      SectionFrame(title: 'Levantamentos', children: [_Rows([
        if (s.payouts.isEmpty)
          const _RowData('Ainda não fizeste nenhum levantamento.', null, null)
        else
          for (final p in s.payouts) _RowData(euros(p.amountCents / 100, cents: true), _payoutDate(p), p.statusLabel),
      ])]),
      SectionFrame(title: 'Conta', children: [_Rows([
        _RowData('Dados e IBAN', null, s.bankLast4 == null ? (s.needsData ? 'Em falta' : '') : '···· ${s.bankLast4}',
            onTap: () => context.push('/partner-payments/setup')),
        _RowData('Modo de levantamento', null, PayoutMode.of(s.payoutSchedule).label, onTap: () => _pickMode(s)),
      ])]),
    ]);
  }

  static String _payoutDate(ConnectPayout p) {
    final d = p.created ?? p.arrival;
    return d == null ? '' : '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}';
  }
}

class _RowData {
  final String title;
  final String? sub;
  final String? value;
  final VoidCallback? onTap;
  const _RowData(this.title, this.sub, this.value, {this.onTap});
}

/// Grupo de linhas (DESIGN.md §4): cartão branco 22, linhas 56,
/// divisórias #ECE7DC, valor 14 + seta à direita quando abre.
class _Rows extends StatelessWidget {
  final List<_RowData> rows;
  const _Rows(this.rows);

  @override
  Widget build(BuildContext context) => Container(
        // Dentro da moldura, sem caixa (mockup «Parceiro · Pagamentos»).
        padding: EdgeInsets.zero,
        child: Column(children: [
          for (final (i, r) in rows.indexed)
            GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTap: r.onTap,
              child: Container(
                constraints: const BoxConstraints(minHeight: 56),
                decoration: i < rows.length - 1
                    ? const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFD9D9D9))))
                    : null,
                child: Row(children: [
                  Expanded(
                    child: Column(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(r.title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      if (r.sub != null && r.sub!.isNotEmpty)
                        Text(r.sub!, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                    ]),
                  ),
                  if (r.value != null && r.value!.isNotEmpty)
                    Text(r.value!, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                  if (r.onTap != null) ...[
                    const SizedBox(width: 6),
                    const LineIcon(LineIcon.forward, size: 16, color: AppTheme.inkMuted, stroke: 1.8),
                  ],
                ]),
              ),
            ),
        ]),
      );
}

/// "A caminho": cada pagamento já pago e ainda retido, por cliente.
class _Incoming extends ConsumerWidget {
  const _Incoming();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final b = ref.watch(partnerBalanceProvider).value;
    final list = b?.incoming ?? const <IncomingPayment>[];
    String date(DateTime d) => '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}';
    if (list.isEmpty) {
      return _Rows([
        (b?.held ?? 0) > 0.009
            ? _RowData('Pago, por libertar', null, euros(b!.held))
            : const _RowData('Nada a caminho', 'Os pagamentos aparecem aqui quando os clientes pagam.', null),
      ]);
    }
    return _Rows([
      for (final p in list)
        _RowData(
          p.client,
          p.deposit
              ? (p.releaseAt == null ? 'Sinal · liberta em 48 h' : 'Sinal · liberta a ${date(p.releaseAt!.toLocal())}')
              : (p.releaseAt == null ? 'Resto · 3 dias depois do evento' : 'Resto · liberta a ${date(p.releaseAt!.toLocal())}'),
          euros(p.amount, cents: true),
        ),
    ]);
  }
}

class _ToReceive extends ConsumerWidget {
  const _ToReceive();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final b = ref.watch(partnerBalanceProvider).value;
    final feeCfg = ref.watch(partnerFeeConfigProvider).value ?? const PartnerFeeConfig();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      _Rows([
        _RowData('Sinais por pagar', 'Os clientes ainda não pagaram', euros(b?.pendingDeposits ?? 0)),
        _RowData('Restante por cobrar', 'Pago até 30 dias antes do evento', euros(b?.uncollectedBalance ?? 0)),
      ]),
      const SizedBox(height: 8),
      Text(
        'O sinal é libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento.'
        '${feeCfg.isZero ? '' : ' Valores antes da taxa da À Nossa! (${feeCfg.describe((v) => euros(v))} do valor da reserva, IVA incluído), descontada nessa altura.'}',
        style: const TextStyle(fontSize: 13, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.inkMuted),
      ),
    ]);
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

class _PillButton extends StatelessWidget {
  final String label;
  final IconData? icon;
  final VoidCallback? onPressed;
  const _PillButton({required this.label, this.icon, this.onPressed});

  @override
  Widget build(BuildContext context) => SizedBox(
        height: 54,
        child: PressScale(child: FilledButton(
          onPressed: onPressed,
          style: FilledButton.styleFrom(
            backgroundColor: AppTheme.action,
            disabledBackgroundColor: AppTheme.ink.withValues(alpha: 0.35),
            foregroundColor: Colors.white,
            disabledForegroundColor: Colors.white,
            shape: const StadiumBorder(),
            textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: AppFontSize.lg, fontWeight: FontWeight.w700),
          ),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            if (icon != null) ...[Icon(icon, size: 20), const SizedBox(width: 8)],
            Flexible(child: Text(label, maxLines: 1, overflow: TextOverflow.ellipsis)),
          ]),
        )),
      );
}

class _SheetRow extends StatelessWidget {
  final IconData icon;
  final String text;
  const _SheetRow({required this.icon, required this.text});

  @override
  Widget build(BuildContext context) => Row(children: [
        Icon(icon, size: 18, color: AppTheme.accentOliveDark),
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
          PressScale(child: TextButton(onPressed: onRetry, child: const Text('Tentar outra vez'))),
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
                line: _sel == m ? AppTheme.accentOliveDark : null,
                width: _sel == m ? 2 : 1,
              ),
              child: Row(children: [
                Icon(m == PayoutMode.manual ? Hi.cursorArrowRays : Hi.arrowPath,
                    color: AppTheme.accentOliveDark),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(m.label, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    Text(m.hint, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                  ]),
                ),
                Icon(_sel == m ? Icons.radio_button_checked : Icons.radio_button_off,
                    color: _sel == m ? AppTheme.accentOliveDark : AppTheme.borderMuted),
              ]),
            ),
          ),
          const SizedBox(height: 8),
        ],
      ]),
      actions: [
        PressScale(child: TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Cancelar'))),
        PressScale(child: FilledButton(onPressed: () => Navigator.of(context).pop(_sel), child: const Text('Guardar'))),
      ],
    );
  }
}


/// Taxas de cancelamento em dívida (migração 175): descontadas nos
/// próximos pagamentos. Sem a migração ou sem dívida, nada.
final _owedProvider = FutureProvider.autoDispose<double>((ref) async {
  try {
    final rows = await supabase.from('partner_charges').select('amount, settled_amount');
    var sum = 0.0;
    for (final r in rows as List) {
      sum += ((r['amount'] as num?) ?? 0).toDouble() - ((r['settled_amount'] as num?) ?? 0).toDouble();
    }
    return sum;
  } catch (_) {
    return 0;
  }
});

class _OwedNote extends ConsumerWidget {
  const _OwedNote();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final owed = ref.watch(_owedProvider).value ?? 0;
    if (owed <= 0.004) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(top: 12),
      child: AlertOutline(
        tone: AlertTone.pending,
        padding: const EdgeInsets.all(12),
        child: Text(
          'Taxas de serviço de reservas que cancelaste: ${euros(owed, cents: true)}. São descontadas nos próximos pagamentos.',
          style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.ink),
        ),
      ),
    );
  }
}
