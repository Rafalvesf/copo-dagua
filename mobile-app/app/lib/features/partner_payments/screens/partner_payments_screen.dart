import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/money.dart';

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
              centered: true,
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
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    // Redesign 2026-10, igual ao canvas "Parceiro —
                    // pagamentos": saldo num cartão verde, conta Stripe
                    // num cartão com os dois pontos de situação.
                    if (status.hasAccount) ...[
                      const _BalanceCard(),
                      const SizedBox(height: 16),
                    ],
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: AppTheme.surface,
                        borderRadius: BorderRadius.circular(AppRadius.lg),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              const Expanded(
                                child: Text(
                                  'Conta Stripe',
                                  style: TextStyle(
                                    fontSize: AppFontSize.base + 1,
                                    fontWeight: FontWeight.w700,
                                    color: AppTheme.ink,
                                  ),
                                ),
                              ),
                              _Pill(
                                label: !status.hasAccount
                                    ? 'Por criar'
                                    : status.chargesEnabled
                                        ? 'Ativo'
                                        : 'Por ativar',
                                ok: status.chargesEnabled,
                              ),
                            ],
                          ),
                          const SizedBox(height: 6),
                          _StatusRow(
                            label: 'Pode receber pagamentos',
                            ok: status.chargesEnabled,
                          ),
                          _StatusRow(
                            label: 'Pode receber transferências',
                            ok: status.payoutsEnabled,
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 20),
                    if (!status.chargesEnabled)
                      _BigButton(
                        label: status.hasAccount
                            ? 'Continuar configuração'
                            : 'Ativar pagamentos',
                        loading: _launching,
                        onPressed: _launching ? null : _startOnboarding,
                      )
                    else if (!status.payoutsEnabled)
                      // Antes ficava um "Levantar para o IBAN" desativado,
                      // sem caminho; agora leva a concluir os dados
                      // bancários na Stripe (revisão 2026-10-17).
                      _BigButton(
                        label: 'Concluir dados bancários',
                        loading: _launching,
                        onPressed: _launching ? null : _startOnboarding,
                      )
                    else
                      _BigButton(
                        label: 'Levantar para o IBAN',
                        loading: _openingDashboard,
                        onPressed: _openingDashboard ? null : _openDashboard,
                      ),
                    const SizedBox(height: 12),
                    Text(
                      status.chargesEnabled
                          ? (status.payoutsEnabled
                              ? 'O levantamento é feito no teu Dashboard Stripe — é lá que confirmas o IBAN, nunca dentro desta app.'
                              : 'Falta indicar a conta bancária na Stripe para poderes receber transferências.')
                          : 'A configuração é feita numa página segura da Stripe — nunca partilhas dados de cartão ou de conta bancária com o Tchin Tchin.',
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: AppFontSize.sm,
                        height: 1.4,
                      ),
                    ),
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
/// um saldo... para saberem quanto vão receber". A Stripe já transfere o
/// sinal para a conta do parceiro no momento do pagamento (ver
/// `PartnerBalanceProvider`), por isso "Recebido" é o que já lá está.
class _BalanceCard extends ConsumerWidget {
  const _BalanceCard();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final balanceAsync = ref.watch(partnerBalanceProvider);
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppTheme.accentOliveDark,
        borderRadius: BorderRadius.circular(AppRadius.xxl),
      ),
      child: balanceAsync.when(
        loading: () => const SizedBox(
          height: 120,
          child: Center(child: CircularProgressIndicator(color: Colors.white)),
        ),
        error: (err, st) => const Text(
          'Não foi possível carregar o saldo.',
          style: TextStyle(color: Colors.white),
        ),
        data: (balance) => Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'SALDO',
              style: TextStyle(
                fontSize: AppFontSize.sm,
                fontWeight: FontWeight.w700,
                letterSpacing: 1,
                color: AppColors.green,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              _eur(balance.received),
              style: const TextStyle(
                fontSize: 40,
                height: 46 / 40,
                fontWeight: FontWeight.w700,
                color: Colors.white,
              ),
            ),
            const Text(
              'Recebido · já na tua conta Stripe',
              style: TextStyle(fontSize: AppFontSize.md, color: AppColors.green),
            ),
            const SizedBox(height: 14),
            Row(
              children: [
                Expanded(
                  child: _BalanceTile(
                    label: 'Sinais a aguardar',
                    amount: balance.pendingDeposits,
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: _BalanceTile(
                    label: 'Restante por cobrar',
                    amount: balance.uncollectedBalance,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

String _eur(double v) => euros(v);

class _BalanceTile extends StatelessWidget {
  final String label;
  final double amount;

  const _BalanceTile({required this.label, required this.amount});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(AppRadius.md),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: const TextStyle(fontSize: AppFontSize.sm, color: AppColors.green),
          ),
          const SizedBox(height: 2),
          Text(
            _eur(amount),
            style: const TextStyle(
              fontSize: AppFontSize.xl,
              fontWeight: FontWeight.w700,
              color: Colors.white,
            ),
          ),
        ],
      ),
    );
  }
}

class _Pill extends StatelessWidget {
  final String label;
  final bool ok;

  const _Pill({required this.label, required this.ok});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: ok ? const Color(0xFFE4EFE5) : const Color(0xFFFCEFD6),
        borderRadius: BorderRadius.circular(AppRadius.pill),
      ),
      child: Text(
        label,
        style: TextStyle(
          fontSize: AppFontSize.xs,
          fontWeight: FontWeight.w700,
          color: ok ? const Color(0xFF2F6B45) : const Color(0xFF7A5000),
        ),
      ),
    );
  }
}

class _StatusRow extends StatelessWidget {
  final String label;
  final bool ok;

  const _StatusRow({required this.label, required this.ok});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        children: [
          Container(
            width: 22,
            height: 22,
            decoration: BoxDecoration(
              color: ok ? AppTheme.accentOliveDark : AppTheme.borderMuted,
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.check_rounded, size: 14, color: Colors.white),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              label,
              style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.ink),
            ),
          ),
        ],
      ),
    );
  }
}

class _BigButton extends StatelessWidget {
  final String label;
  final bool loading;
  final VoidCallback? onPressed;

  const _BigButton({required this.label, required this.loading, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 54,
      child: FilledButton(
        onPressed: loading ? () {} : onPressed,
        style: FilledButton.styleFrom(
          backgroundColor: AppTheme.accentOliveDark,
          disabledBackgroundColor: AppTheme.surface,
          disabledForegroundColor: AppTheme.inkMuted,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(AppRadius.md),
          ),
          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, 
            fontSize: AppFontSize.lg,
            fontWeight: FontWeight.w700,
          ),
        ),
        child: loading
            ? const SizedBox(
                width: 20,
                height: 20,
                child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white),
              )
            : Text(label),
      ),
    );
  }
}
