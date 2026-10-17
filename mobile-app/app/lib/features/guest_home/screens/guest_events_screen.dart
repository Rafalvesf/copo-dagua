import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// "Os teus eventos" (canvas "Convidado · Os teus eventos") — todos os
/// eventos para onde a conta foi convidada, com o estado da resposta.
class GuestEventsScreen extends ConsumerWidget {
  const GuestEventsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingsAsync = ref.watch(guestWeddingsProvider);
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: weddingsAsync.when(
          loading: () => const Center(child: CircularProgressIndicator()),
          error: (e, st) => AsyncErrorView(onRetry: () => ref.invalidate(guestWeddingsProvider)),
          data: (weddings) => ListView(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 40),
            children: [
              const Align(alignment: Alignment.centerLeft, child: CircleBackButton()),
              const SizedBox(height: 12),
              const Text(
                'Os teus eventos',
                style: TextStyle(fontSize: AppFontSize.display, height: 40 / 34, fontWeight: FontWeight.w700, color: AppTheme.ink),
              ),
              const SizedBox(height: 4),
              const Text(
                'Tudo para onde foste convidado, num só lugar.',
                style: TextStyle(fontSize: AppFontSize.base + 1, color: AppTheme.inkMuted),
              ),
              const SizedBox(height: 22),
              for (final w in weddings) ...[
                _EventCard(wedding: w),
                const SizedBox(height: 12),
              ],
              SnappyTap(
                onTap: () => context.push('/settings'),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(color: const Color(0xFFCFC8B8), width: 1.5),
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 40,
                        height: 40,
                        decoration: const BoxDecoration(color: AppColors.gray, shape: BoxShape.circle),
                        child: const Icon(Icons.key_outlined, size: 20, color: AppTheme.accentOliveDark),
                      ),
                      const SizedBox(width: 12),
                      const Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tenho um código', style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          Text('Junta-te a outro evento', style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _EventCard extends ConsumerWidget {
  final GuestWedding wedding;
  const _EventCard({required this.wedding});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final guest = ref.watch(myGuestRowProvider(wedding.weddingId)).value;
    final (label, bg, fg) = switch (guest?.rsvpStatus) {
      RsvpStatus.confirmed => ('Vais', AppColors.gray, AppTheme.accentOliveDark),
      RsvpStatus.declined => ('Não vais', AppTheme.surface, AppTheme.inkMuted),
      _ => ('Por responder', const Color(0xFFFBEFD3), const Color(0xFF8A5A00)),
    };
    final meta = [
      if (wedding.weddingDate != null) formatWeddingDateCaps(wedding.weddingDate!),
      if (wedding.venue?.isNotEmpty == true) wedding.venue! else if (wedding.location?.isNotEmpty == true) wedding.location!,
    ].join(' · ');
    return SnappyTap(
      onTap: () => context.go('/guest-home/${wedding.weddingId}'),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: const Color(0xFFEFEBE3)),
          boxShadow: const [BoxShadow(color: Color(0x143F4A30), blurRadius: 22, offset: Offset(0, 8))],
        ),
        child: Row(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(16),
              child: SizedBox(
                width: 78,
                height: 92,
                child: wedding.coverPhotoUrl == null
                    ? const DecoratedBox(
                        decoration: BoxDecoration(
                          gradient: LinearGradient(colors: [Color(0xFFDDE5D3), Color(0xFFF7EACA)]),
                        ),
                      )
                    : Image.network(wedding.coverPhotoUrlCacheBusted!, fit: BoxFit.cover),
              ),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    wedding.eventType.label.toUpperCase(),
                    style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 0.5, color: AppTheme.accentOliveDark),
                  ),
                  const SizedBox(height: 4),
                  Text(wedding.displayNames, style: const TextStyle(fontSize: AppFontSize.lg + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
                  const SizedBox(height: 6),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                    decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
                    child: Text(label, style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: fg)),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
