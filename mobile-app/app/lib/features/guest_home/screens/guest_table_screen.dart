import 'dart:math' as math;

import 'package:flutter/material.dart';
import '../../../shared/widgets/page_header.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/v2_kit.dart';

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
            const PageHeader(title: 'A tua mesa', centered: true),
            Expanded(
              child: rosterAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(myTableRosterProvider(weddingId))),
                data: (roster) {
                  if (roster.isEmpty) {
                    return const EmptyStateView(
                      message: 'Ainda não foste colocado em nenhuma mesa.',
                      icon: Icons.table_restaurant_outlined,
                    );
                  }
                  final groups = roster.map((m) => m.group).where((g) => g.isNotEmpty).toSet().toList();
                  final myGuestId = myGuestAsync.maybeWhen(data: (g) => g?.id, orElse: () => null);

                  // Redesign 2026-10-19 (canvas "Convidado — a tua mesa
                  // (redesign)"): cartão verde, a mesa desenhada com os
                  // lugares à volta e a lista de quem está contigo.
                  return ListView(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 18, AppTheme.screenMargin, 40),
                    children: [
                      GreenHero(
                        label: tableNumber == null ? 'A TUA MESA' : 'MESA $tableNumber',
                        value: groups.isEmpty ? 'Os teus lugares' : groups.join(' e '),
                        suffix: '${roster.length} ${roster.length == 1 ? 'lugar' : 'lugares'}',
                        doodles: const [Icons.table_restaurant_outlined, Icons.favorite_border, Icons.eco_outlined],
                      ),
                      const SizedBox(height: 14),
                      Container(
                        height: 270,
                        decoration: softCard(),
                        child: LayoutBuilder(builder: (context, c) {
                          final cx = c.maxWidth / 2, cy = 135.0, r = 96.0;
                          final n = roster.length;
                          return Stack(clipBehavior: Clip.none, children: [
                            Positioned(
                              left: cx - 54,
                              top: cy - 54,
                              child: Container(
                                width: 108,
                                height: 108,
                                decoration: BoxDecoration(
                                  color: AppTheme.accentTint,
                                  shape: BoxShape.circle,
                                  border: Border.all(color: AppTheme.accentOliveDark, width: 1.6),
                                ),
                                alignment: Alignment.center,
                                child: Column(mainAxisSize: MainAxisSize.min, children: [
                                  Text(tableNumber == null ? '—' : '$tableNumber',
                                      style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                                  if (groups.isNotEmpty)
                                    SizedBox(
                                      width: 90,
                                      child: Text(groups.first,
                                          textAlign: TextAlign.center,
                                          maxLines: 1,
                                          overflow: TextOverflow.ellipsis,
                                          style: TextStyle(fontSize: 11, color: AppTheme.accentOliveDark)),
                                    ),
                                ]),
                              ),
                            ),
                            for (var k = 0; k < n; k++)
                              () {
                                final ang = 2 * math.pi * k / n - math.pi / 2;
                                final me = roster[k].guestId == myGuestId;
                                return Positioned(
                                  left: cx + r * math.cos(ang) - 28,
                                  top: cy + r * math.sin(ang) - 22,
                                  child: SizedBox(
                                    width: 56,
                                    child: Column(children: [
                                      V2Avatar(roster[k].fullName, size: 30, filled: me),
                                      const SizedBox(height: 2),
                                      Text(me ? 'Tu' : roster[k].fullName.split(' ').first,
                                          maxLines: 1,
                                          overflow: TextOverflow.ellipsis,
                                          style: TextStyle(fontSize: 10, fontWeight: me ? FontWeight.w700 : FontWeight.w400, color: AppTheme.ink)),
                                    ]),
                                  ),
                                );
                              }(),
                          ]);
                        }),
                      ),
                      const SectionTitle('Contigo na mesa'),
                      for (final mate in roster.where((m) => m.guestId != myGuestId))
                        Padding(
                          padding: const EdgeInsets.only(bottom: 10),
                          child: V2RowCard(
                            lead: V2Avatar(mate.fullName),
                            title: mate.fullName,
                            sub: [
                              if (mate.group.isNotEmpty) mate.group,
                              if (mate.plusOneName?.isNotEmpty == true) 'com ${mate.plusOneName}',
                            ].join(' · '),
                            trailing: mate.plusOneAllowed ? const V2Chip('+1') : null,
                          ),
                        ),
                      const SizedBox(height: 2),
                      const Text('Os anfitriões ainda podem mudar a disposição até ao dia.',
                          style: TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
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
