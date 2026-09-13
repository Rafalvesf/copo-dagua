import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';

/// Ativação de pagamentos via Stripe Connect (Express) — ver
/// `mobile-app/payments/stripe-connect.md`. Só o parceiro consegue abrir
/// este ecrã (RLS de `partner_profiles`, "Owner can view own profile").
class PartnerPaymentsScreen extends ConsumerStatefulWidget {
  const PartnerPaymentsScreen({super.key});

  @override
  ConsumerState<PartnerPaymentsScreen> createState() =>
      _PartnerPaymentsScreenState();
}

class _PartnerPaymentsScreenState extends ConsumerState<PartnerPaymentsScreen> {
  bool _launching = false;
  bool _openingDashboard = false;

  Future<void> _startOnboarding() async {
    setState(() => _launching = true);
    try {
      final url = await createConnectOnboardingUrl();
      if (!mounted) return;
      final opened = await launchUrl(
        Uri.parse(url),
        mode: LaunchMode.externalApplication,
      );
      if (!opened && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Não foi possível abrir a configuração de pagamentos.',
            ),
          ),
        );
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Não foi possível iniciar a configuração. Tenta novamente.',
            ),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _launching = false);
    }
  }

  Future<void> _openDashboard() async {
    setState(() => _openingDashboard = true);
    try {
      final url = await createConnectLoginUrl();
      if (!mounted) return;
      final opened = await launchUrl(
        Uri.parse(url),
        mode: LaunchMode.externalApplication,
      );
      if (!opened && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Não foi possível abrir o Stripe Dashboard.'),
          ),
        );
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Não foi possível abrir o Stripe Dashboard. Tenta novamente.',
            ),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _openingDashboard = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final statusAsync = ref.watch(partnerStripeStatusProvider);

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(0, 8, 0, 40),
          children: [
            const PageHeader(
              title: 'Pagamentos',
              subtitle: 'Recebe os sinais das tuas reservas diretamente.',
            ),
            const SizedBox(height: 20),
            Padding(
              padding: const EdgeInsets.symmetric(
                horizontal: AppTheme.screenMargin,
              ),
              child: statusAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) => const Text(
                  'Não foi possível carregar o estado dos pagamentos.',
                  style: TextStyle(color: AppTheme.inkMuted),
                ),
                data: (status) => Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _StatusRow(
                      label: 'Conta Stripe',
                      ok: status.hasAccount,
                      okLabel: 'Criada',
                      pendingLabel: 'Por criar',
                    ),
                    const SizedBox(height: 10),
                    _StatusRow(
                      label: 'Pode receber pagamentos',
                      ok: status.chargesEnabled,
                      okLabel: 'Ativo',
                      pendingLabel: 'Por ativar',
                    ),
                    const SizedBox(height: 10),
                    _StatusRow(
                      label: 'Pode receber transferências',
                      ok: status.payoutsEnabled,
                      okLabel: 'Ativo',
                      pendingLabel: 'Por ativar',
                    ),
                    const SizedBox(height: 24),
                    if (!status.chargesEnabled)
                      PrimaryButton(
                        label: status.hasAccount
                            ? 'Continuar configuração'
                            : 'Ativar pagamentos',
                        loading: _launching,
                        onPressed: _launching ? null : _startOnboarding,
                      )
                    else
                      const Text(
                        'Já podes receber sinais de reservas por cartão.',
                        style: TextStyle(
                          color: AppTheme.inkMuted,
                          fontSize: 13.5,
                        ),
                      ),
                    const SizedBox(height: 16),
                    const Text(
                      'A configuração é feita numa página segura da Stripe — nunca partilhas dados de cartão ou de conta bancária com a Copo d\'Água.',
                      style: TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: 12.5,
                        height: 1.4,
                      ),
                    ),
                    if (status.hasAccount) ...[
                      const SizedBox(height: 32),
                      _BalanceSection(
                        payoutsEnabled: status.payoutsEnabled,
                        openingDashboard: _openingDashboard,
                        onWithdraw: _openDashboard,
                      ),
                    ],
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Saldo real — pedido explícito do utilizador (2026-09-04): "adiciona
/// um saldo... para saberem quanto vão receber e quando... botão para
/// clicar para retirar para a conta bancária". Ver nota de arquitetura
/// em `PartnerBalanceProvider` (`partner_app_providers.dart`) sobre
/// porque não mostra "60% retido, liberta em 3 dias" — a integração
/// Stripe atual já transfere o sinal para a conta do parceiro no
/// momento do pagamento, a plataforma nunca o retém.
class _BalanceSection extends ConsumerWidget {
  final bool payoutsEnabled;
  final bool openingDashboard;
  final VoidCallback onWithdraw;

  const _BalanceSection({
    required this.payoutsEnabled,
    required this.openingDashboard,
    required this.onWithdraw,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final balanceAsync = ref.watch(partnerBalanceProvider);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Saldo',
          style: TextStyle(
            fontWeight: FontWeight.w700,
            fontSize: 16,
            color: AppTheme.ink,
          ),
        ),
        const SizedBox(height: 12),
        balanceAsync.when(
          loading: () => const Center(child: CircularProgressIndicator()),
          error: (err, st) => const Text(
            'Não foi possível carregar o saldo.',
            style: TextStyle(color: AppTheme.inkMuted),
          ),
          data: (balance) => Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: AppTheme.surface,
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _BalanceRow(
                  label: 'Recebido (já na tua conta Stripe)',
                  amount: balance.received,
                ),
                const SizedBox(height: 8),
                _BalanceRow(
                  label: 'Sinais a aguardar pagamento do casal',
                  amount: balance.pendingDeposits,
                ),
                const SizedBox(height: 8),
                _BalanceRow(
                  label: 'Restante por cobrar (fora dos sinais)',
                  amount: balance.uncollectedBalance,
                ),
                const SizedBox(height: 16),
                SizedBox(
                  width: double.infinity,
                  child: PrimaryButton(
                    label: 'Levantar para o IBAN',
                    loading: openingDashboard,
                    onPressed: payoutsEnabled ? onWithdraw : null,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  payoutsEnabled
                      ? 'Abre o teu Dashboard Stripe — é lá que confirmas o IBAN e pedes o levantamento, nunca dentro desta app.'
                      : 'Disponível assim que "Pode receber transferências" ficar ativo acima.',
                  style: TextStyle(
                    color: AppTheme.inkMuted,
                    fontSize: 12,
                    height: 1.4,
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class _BalanceRow extends StatelessWidget {
  final String label;
  final double amount;

  const _BalanceRow({required this.label, required this.amount});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Text(
            label,
            style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
          ),
        ),
        Text(
          '${amount.toStringAsFixed(0)} €',
          style: const TextStyle(
            fontWeight: FontWeight.w700,
            fontSize: 14,
            color: AppTheme.ink,
          ),
        ),
      ],
    );
  }
}

class _StatusRow extends StatelessWidget {
  final String label;
  final bool ok;
  final String okLabel;
  final String pendingLabel;

  const _StatusRow({
    required this.label,
    required this.ok,
    required this.okLabel,
    required this.pendingLabel,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(
          ok ? Icons.check_circle : Icons.radio_button_unchecked,
          size: 18,
          color: ok ? AppTheme.accentOliveDark : AppTheme.inkMuted,
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Text(
            label,
            style: const TextStyle(fontSize: 14, color: AppTheme.ink),
          ),
        ),
        Text(
          ok ? okLabel : pendingLabel,
          style: TextStyle(
            fontSize: 12.5,
            fontWeight: FontWeight.w600,
            color: ok ? AppTheme.accentOliveDark : AppTheme.inkMuted,
          ),
        ),
      ],
    );
  }
}
