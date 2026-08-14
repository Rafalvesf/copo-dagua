import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Área do parceiro (fornecedor) — versão mínima. Os módulos reais
/// (Quotations, Bookings, Calendar, Profile, Contracts, Payouts) estão
/// documentados em `partner-app/` mas ainda não implementados nesta app;
/// este ecrã só desbloqueia a conta para deixar de cair num beco sem
/// saída depois do registo.
class PartnerHomeScreen extends ConsumerWidget {
  const PartnerHomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final firstName = profile?.fullName.split(' ').first ?? '';

    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(
            AppTheme.screenMargin,
            20,
            AppTheme.screenMargin,
            24,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Text(
                      firstName.isEmpty
                          ? 'Olá!'
                          : 'Olá, $firstName',
                      style: Theme.of(context).textTheme.headlineMedium,
                    ),
                  ),
                  PopupMenuButton<String>(
                    icon: const GradientMark(
                      size: 40,
                      icon: Icons.storefront_outlined,
                    ),
                    onSelected: (value) {
                      if (value == 'logout') {
                        ref.read(authControllerProvider.notifier).logout();
                      } else if (value == 'switch') {
                        ref
                            .read(authControllerProvider.notifier)
                            .switchDemoAccount();
                      }
                    },
                    itemBuilder: (context) => const [
                      PopupMenuItem(
                        value: 'switch',
                        child: Text('Ver como Noivo/a'),
                      ),
                      PopupMenuItem(value: 'logout', child: Text('Sair')),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 4),
              const Text(
                'Área do parceiro',
                style: TextStyle(color: AppTheme.inkMuted),
              ),
              const SizedBox(height: 24),
              Expanded(
                child: GridView.count(
                  crossAxisCount: 2,
                  mainAxisSpacing: 14,
                  crossAxisSpacing: 14,
                  childAspectRatio: 1.05,
                  children: const [
                    _PartnerTile(
                      color: AppColors.blue,
                      icon: Icons.request_quote_outlined,
                      label: 'Pedidos de orçamento',
                    ),
                    _PartnerTile(
                      color: AppColors.green,
                      icon: Icons.event_available_outlined,
                      label: 'Reservas',
                    ),
                    _PartnerTile(
                      color: AppColors.yellow,
                      icon: Icons.calendar_month_outlined,
                      label: 'Calendário',
                    ),
                    _PartnerTile(
                      color: AppColors.pink,
                      icon: Icons.storefront_outlined,
                      label: 'Perfil de negócio',
                    ),
                    _PartnerTile(
                      color: AppColors.gray,
                      icon: Icons.description_outlined,
                      label: 'Contratos',
                    ),
                    _PartnerTile(
                      color: AppColors.purple,
                      icon: Icons.payments_outlined,
                      label: 'Pagamentos',
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _PartnerTile extends StatelessWidget {
  final Color color;
  final IconData icon;
  final String label;

  const _PartnerTile({
    required this.color,
    required this.icon,
    required this.label,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap.builder(
      onTap: () => ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Em breve.')),
      ),
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(24),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Stack(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Icon(icon, color: AppTheme.ink, size: AppTypography.iconSize),
                const SizedBox(height: 10),
                Text(label, style: AppTypography.moduleTitle),
              ],
            ),
            Positioned(
              top: 0,
              right: 0,
              child: Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: 8,
                  vertical: 4,
                ),
                decoration: BoxDecoration(
                  color: Colors.white.withValues(alpha: 0.7),
                  borderRadius: BorderRadius.circular(999),
                ),
                child: const Text(
                  'Em breve',
                  style: TextStyle(fontSize: 10, color: AppTheme.inkMuted),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
