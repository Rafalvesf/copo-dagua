import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'guest_mode_screen.dart' show showGuestModeSheet;

/// "Os teus eventos" (canvas "Convidado · Os teus eventos") — todos os
/// eventos para onde a conta foi convidada, com o estado da resposta.
class GuestEventsScreen extends ConsumerWidget {
  const GuestEventsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingsAsync = ref.watch(guestWeddingsProvider);
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: weddingsAsync.when(
          loading: () => const Center(child: CircularProgressIndicator()),
          error: (e, st) => AsyncErrorView(onRetry: () => ref.invalidate(guestWeddingsProvider)),
          data: (weddings) => ListView(
            padding: const EdgeInsets.fromLTRB(0, 0, 0, 40),
            children: [
              // Mesmo cabeçalho de "Convidados"/"Orçamento" do organizador
              // (pedido 2026-10-17).
              const PageHeader(title: 'Os teus eventos', centered: true),
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                child: Text(
                  'Tudo para onde foste convidado, num só lugar.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                ),
              ),
              const SizedBox(height: 18),
              for (final w in weddings)
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 10),
                  child: _EventCard(wedding: w),
                ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                child: SnappyTap(
                // Abre logo o campo do código (antes ia parar às Definições).
                onTap: () => showGuestModeSheet(context),
                // Canvas "Convidado — eventos (redesign)": botão tracejado.
                child: CustomPaint(
                  painter: _DashedBorder(),
                  child: const SizedBox(
                    height: 56,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.qr_code_2_rounded, size: 20, color: AppTheme.brandGreen),
                        SizedBox(width: 10),
                        Text('Tenho um código',
                            style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.brandGreen)),
                      ],
                    ),
                  ),
                ),
              ),
              ),
              const Padding(
                padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 0),
                child: Text('Junta-te a outro evento com o código dos anfitriões.',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _DashedBorder extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = AppTheme.brandGreen
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;
    final path = Path()
      ..addRRect(RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(18)).deflate(0.75));
    for (final m in path.computeMetrics()) {
      var d = 0.0;
      while (d < m.length) {
        canvas.drawPath(m.extractPath(d, d + 6), paint);
        d += 10;
      }
    }
  }

  @override
  bool shouldRepaint(_DashedBorder old) => false;
}

class _EventCard extends ConsumerWidget {
  final GuestWedding wedding;
  const _EventCard({required this.wedding});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final guest = ref.watch(myGuestRowProvider(wedding.weddingId)).value;
    final (label, bg, fg) = switch (guest?.rsvpStatus) {
      RsvpStatus.confirmed => ('Vais', AppTheme.brandGreen, Colors.white),
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
        decoration: softCard(),
        child: Row(
          children: [
            wedding.coverPhotoUrl == null
                ? StickerIcon(switch (wedding.eventType) {
                    EventType.wedding => Icons.favorite_border,
                    EventType.birthday => Icons.cake_outlined,
                    EventType.baptism => Icons.water_drop_outlined,
                    _ => Icons.celebration_outlined,
                  }, turns: StickerIcon.tilt(wedding.weddingId.hashCode))
                : ClipRRect(
                    borderRadius: BorderRadius.circular(14),
                    child: Image.network(wedding.coverPhotoUrlCacheBusted!, width: 44, height: 44, fit: BoxFit.cover),
                  ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    wedding.eventType.label.toUpperCase(),
                    style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 0.8, color: AppTheme.brandGreen),
                  ),
                  const SizedBox(height: 2),
                  Text(wedding.displayNames, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
              decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
              child: Text(label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: fg)),
            ),
          ],
        ),
      ),
    );
  }
}
