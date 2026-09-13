import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/initials_avatar.dart';

/// "A tua mesa" — pedido explícito do utilizador (mockup de
/// referência), aberto a partir da linha "A tua mesa" em
/// [GuestProfileScreen]. Mostra só quem está sentado na MESMA mesa que
/// o convidado (`get_my_table_roster()`, `068_guest_table_roster.sql`)
/// — nunca o mapa completo de lugares, que continua restrito ao casal.
/// Sem ilustração de mesa real (nenhum asset próprio existe) — usa um
/// ícone em vez de inventar uma imagem.
class GuestTableScreen extends ConsumerWidget {
  final String weddingId;
  final int? tableNumber;

  const GuestTableScreen({super.key, required this.weddingId, this.tableNumber});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final rosterAsync = ref.watch(myTableRosterProvider(weddingId));
    final myGuestAsync = ref.watch(myGuestRowProvider(weddingId));

    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 0),
              child: Row(
                children: [
                  const CircleBackButton(),
                  const SizedBox(width: 4),
                  const Text(
                    'A tua mesa',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink),
                  ),
                ],
              ),
            ),
            Expanded(
              child: rosterAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) => const Center(child: Text('Não foi possível carregar.')),
                data: (roster) {
                  if (roster.isEmpty) {
                    return const Center(
                      child: Padding(
                        padding: EdgeInsets.all(AppTheme.screenMargin),
                        child: Text(
                          'Ainda não foste colocado em nenhuma mesa.',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: AppTheme.inkMuted),
                        ),
                      ),
                    );
                  }
                  final groups = roster.map((m) => m.group).where((g) => g.isNotEmpty).toSet().toList();
                  final myGuestId = myGuestAsync.maybeWhen(data: (g) => g?.id, orElse: () => null);

                  return ListView(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 40),
                    children: [
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(vertical: 20),
                        decoration: BoxDecoration(
                          color: AppColors.pink,
                          borderRadius: BorderRadius.circular(24),
                        ),
                        child: Column(
                          children: [
                            Text(
                              tableNumber == null ? 'A tua mesa' : 'Mesa $tableNumber',
                              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink),
                            ),
                            if (groups.isNotEmpty) ...[
                              const SizedBox(height: 4),
                              Text(
                                groups.join(' e '),
                                style: const TextStyle(color: AppTheme.inkMuted, fontSize: 13),
                              ),
                            ],
                          ],
                        ),
                      ),
                      const SizedBox(height: 24),
                      Center(
                        child: Icon(Icons.table_restaurant_outlined, size: 90, color: AppTheme.accentOliveDark.withValues(alpha: 0.5)),
                      ),
                      const SizedBox(height: 28),
                      const Text(
                        'Com quem vais estar?',
                        style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15, color: AppTheme.ink),
                      ),
                      const SizedBox(height: 12),
                      for (final mate in roster)
                        Padding(
                          padding: const EdgeInsets.only(bottom: 12),
                          child: Row(
                            children: [
                              InitialsAvatar(name: mate.fullName, radius: 20, background: AppTheme.surface),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Text(
                                  mate.fullName,
                                  style: const TextStyle(fontWeight: FontWeight.w600, color: AppTheme.ink),
                                ),
                              ),
                              if (mate.guestId == myGuestId)
                                const _Badge(label: 'Tu')
                              else if (mate.plusOneAllowed)
                                const _Badge(label: '+1'),
                            ],
                          ),
                        ),
                    ],
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _Badge extends StatelessWidget {
  final String label;

  const _Badge({required this.label});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        label,
        style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.ink),
      ),
    );
  }
}
