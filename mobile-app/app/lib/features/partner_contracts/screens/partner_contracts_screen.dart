import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../core/exports/exports.dart' show bookingRef;

/// Um contrato = uma reserva com a proposta que o casal aceitou: o que
/// foi combinado (título, descrição, condições), o valor e o estado dos
/// pagamentos. Antes este ecrã só dizia "Contratos em breve" (revisão da
/// app, 2026-10-17: botões e páginas sem saída).
class PartnerContract {
  final String id;
  final String? number;
  final String couple;
  final String? coupleAvatarUrl;
  final DateTime? date;
  final String? place;
  final String title;
  final String? description;
  final String? terms;
  final double total;
  final double deposit;
  final double paid;
  final String status;

  const PartnerContract({
    required this.id,
    required this.number,
    required this.couple,
    this.coupleAvatarUrl,
    required this.date,
    required this.place,
    required this.title,
    required this.description,
    required this.terms,
    required this.total,
    required this.deposit,
    required this.paid,
    required this.status,
  });
}

final partnerContractsProvider = FutureProvider<List<PartnerContract>>((ref) async {
  final partnerId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (partnerId == null) return const [];
  final rows = await supabase
      .from('bookings')
      .select(
        'id, booking_number, event_date, total_amount, deposit_amount, status, '
        'proposals(title, description, payment_terms), '
        'weddings(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), '
        'payments(status, amount), partner_profiles(business_name)',
      )
      .eq('partner_id', partnerId)
      .order('event_date', ascending: true);
  return [
    for (final r in (rows as List).cast<Map<String, dynamic>>())
      () {
        final w = r['weddings'] as Map<String, dynamic>?;
        final p = r['proposals'] as Map<String, dynamic>?;
        final n1 = (w?['partner_name_1'] as String?) ?? '';
        final n2 = (w?['partner_name_2'] as String?) ?? '';
        final pays = ((r['payments'] as List?) ?? const []).cast<Map<String, dynamic>>();
        return PartnerContract(
          id: r['id'] as String,
          number: r['booking_number'] == null
              ? null
              : bookingRef(r['booking_number'], ((r['partner_profiles'] as Map?)?['business_name'] ?? '').toString()),
          couple: n1.isEmpty ? 'Cliente' : (n2.isEmpty ? n1 : '$n1 & $n2'),
          coupleAvatarUrl: (w?['profile_photo_url'] as String?) ?? (w?['cover_photo_url'] as String?),
          date: r['event_date'] == null ? null : DateTime.parse(r['event_date'] as String),
          place: (w?['venue'] as String?)?.isNotEmpty == true ? w!['venue'] as String : w?['location'] as String?,
          title: (p?['title'] as String?) ?? 'Serviço',
          description: p?['description'] as String?,
          terms: p?['payment_terms'] as String?,
          total: (r['total_amount'] as num?)?.toDouble() ?? 0,
          deposit: (r['deposit_amount'] as num?)?.toDouble() ?? 0,
          paid: pays.where((x) => x['status'] == 'paid').fold<double>(0, (s, x) => s + (x['amount'] as num).toDouble()),
          status: r['status'] as String,
        );
      }(),
  ];
});

(String, Color, Color) _statusChip(PartnerContract c) => switch (c.status) {
      'awaiting_deposit' => ('Aguarda sinal', const Color(0xFFFBEFD3), const Color(0xFF8A5A00)),
      'confirmed' => ('Em vigor', AppColors.gray, AppTheme.accentOliveDark),
      'completed' => c.paid + 0.009 >= c.total
          ? ('Concluído', AppColors.gray, AppTheme.accentOliveDark)
          : ('Falta o restante', const Color(0xFFFBEFD3), const Color(0xFF8A5A00)),
      'cancelled_by_couple' || 'cancelled_by_partner' => ('Cancelado', AppTheme.surface, AppTheme.inkMuted),
      'expired' => ('Expirado', AppTheme.surface, AppTheme.inkMuted),
      _ => ('Em análise', AppTheme.surface, AppTheme.inkMuted),
    };

class PartnerContractsScreen extends ConsumerWidget {
  const PartnerContractsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final async = ref.watch(partnerContractsProvider);
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(
          children: [
            const PageHeader(title: 'Contratos', centered: true),
            Expanded(
              child: async.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (e, st) => AsyncErrorView(onRetry: () => ref.invalidate(partnerContractsProvider)),
                data: (list) => list.isEmpty
                    ? const _Empty()
                    : RefreshIndicator(
                        onRefresh: () async => ref.invalidate(partnerContractsProvider),
                        child: ListView(
                          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 40),
                          children: [
                            // Cartão verde com o total contratado (redesign
                            // 2026-10-19, estilo do "Menu · Casamento").
                            Builder(builder: (_) {
                              final total = list.fold<double>(0, (a, c) => a + c.total);
                              final paid = list.fold<double>(0, (a, c) => a + c.paid);
                              return GreenHero(
                                label: 'CONTRATADO',
                                value: euros(total),
                                suffix: '${list.length} ${list.length == 1 ? 'contrato' : 'contratos'}',
                                progress: total <= 0 ? 0 : paid / total,
                                doodles: const [Icons.description_outlined, Icons.favorite_border, Icons.auto_awesome_outlined],
                                footer: Wrap(spacing: 8, runSpacing: 8, children: [
                                  HeroPill('Recebido ${euros(paid)}', solid: true),
                                  HeroPill('Falta ${euros((total - paid).clamp(0, double.infinity))}'),
                                ]),
                              );
                            }),
                            const SizedBox(height: 16),
                            for (final c in list)
                              Padding(padding: const EdgeInsets.only(bottom: 12), child: _ContractCard(contract: c)),
                          ],
                        ),
                      ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _ContractCard extends StatelessWidget {
  final PartnerContract contract;
  const _ContractCard({required this.contract});

  @override
  Widget build(BuildContext context) {
    final c = contract;
    final (label, bg, fg) = _statusChip(c);
    final progress = c.total <= 0 ? 0.0 : (c.paid / c.total).clamp(0.0, 1.0);
    return SnappyTap(
      onTap: () => _showDetails(context, c),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: softCard(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                V2Avatar(c.couple, imageUrl: c.coupleAvatarUrl),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(c.couple, style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
                  child: Text(label, style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: fg)),
                ),
              ],
            ),
            const SizedBox(height: 2),
            Text(
              [c.title, if (c.date != null) formatWeddingDateCaps(c.date!)].join(' · '),
              style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
            ),
            const SizedBox(height: 12),
            ClipRRect(
              borderRadius: BorderRadius.circular(3),
              child: LinearProgressIndicator(value: progress, minHeight: 5, backgroundColor: AppTheme.borderMuted, color: AppTheme.accentOliveDark),
            ),
            const SizedBox(height: 6),
            Text(
              'Recebido ${euros(c.paid, cents: true)} de ${euros(c.total, cents: true)}',
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
            ),
          ],
        ),
      ),
    );
  }

  void _showDetails(BuildContext context, PartnerContract c) {
    Widget row(String k, String v) => Padding(
          padding: const EdgeInsets.symmetric(vertical: 8),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(width: 110, child: Text(k, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted))),
              Expanded(child: Text(v, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            ],
          ),
        );
    showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
      builder: (sheet) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 18, AppTheme.screenMargin, 20),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(c.number == null ? 'Contrato' : 'Contrato ${c.number}',
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 14),
                row('Cliente', c.couple),
                row('Serviço', c.title),
                if (c.date != null) row('Data', formatWeddingDateCaps(c.date!)),
                if (c.place?.isNotEmpty == true) row('Local', c.place!),
                row('Valor', euros(c.total, cents: true)),
                row('Sinal', euros(c.deposit, cents: true)),
                row('Recebido', euros(c.paid, cents: true)),
                if (c.description?.isNotEmpty == true) row('Descrição', c.description!),
                if (c.terms?.isNotEmpty == true) row('Condições', c.terms!),
                const SizedBox(height: 14),
                OutlinedButton.icon(
                  onPressed: () {
                    Navigator.of(sheet).pop();
                    context.go('/partner-messages');
                  },
                  icon: const Icon(Icons.chat_bubble_outline_rounded, size: 18),
                  label: const Text('Falar com o cliente'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _Empty extends StatelessWidget {
  const _Empty();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 28),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const StickerIcon(Icons.description_outlined, size: 96, turns: -0.016),
            const SizedBox(height: 24),
            const Text(
              'Ainda sem contratos',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: AppFontSize.h3, fontWeight: FontWeight.w700, color: AppTheme.ink),
            ),
            const SizedBox(height: 8),
            const Text(
              'Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condições e os pagamentos.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: AppFontSize.base, height: 1.5, color: AppTheme.inkMuted),
            ),
            const SizedBox(height: 20),
            V2BigButton(label: 'Ver pedidos', onTap: () => context.go('/partner-requests')),
          ],
        ),
      ),
    );
  }
}
