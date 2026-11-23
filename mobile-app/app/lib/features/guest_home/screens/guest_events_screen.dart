import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import '../../../shared/text_case.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../widgets/guest_home_sections.dart' show guestCard;
import '../../../core/event/date_format_pt.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'guest_mode_screen.dart' show showGuestModeSheet;
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';

/// "Os teus eventos" (canvas "Convidado · Os teus eventos") — todos os
/// eventos para onde a conta foi convidada, com o estado da resposta.
class GuestEventsScreen extends ConsumerWidget {
  const GuestEventsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final eventsAsync = ref.watch(guestEventsProvider);
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: eventsAsync.when(
          loading: () => const Center(child: CircularProgressIndicator()),
          error: (e, st) => AsyncErrorView(onRetry: () => ref.invalidate(guestEventsProvider)),
          data: (events) => ListView(
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
              for (final w in events)
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 10),
                  child: GuestEventCard(event: w),
                ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                child: SnappyTap(
                // Abre logo o campo do código (antes ia parar às Definições).
                onTap: () => showGuestModeSheet(context),
                // Canvas "Convidado — eventos (redesign)": botão tracejado.
                child: CustomPaint(
                  painter: DashedBorderPainter(),
                  child: SizedBox(
                    height: 56,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Hi.qrCode, size: 20, color: AppTheme.accentOliveDark),
                        SizedBox(width: 10),
                        Text('Tenho um código',
                            style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
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

class DashedBorderPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = AppTheme.accentOliveDark
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
  bool shouldRepaint(DashedBorderPainter old) => false;
}

class GuestEventCard extends ConsumerWidget {
  final GuestEvent event;
  const GuestEventCard({super.key, required this.event});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final guest = ref.watch(myGuestRowProvider(event.eventId)).value;
    final d = event.eventDate;
    final n = DateTime.now();
    final past = d != null && DateTime(d.year, d.month, d.day).isBefore(DateTime(n.year, n.month, n.day));
    final (label, bg, fg) = switch (guest?.rsvpStatus) {
      _ when past => ('Já foi', AppTheme.surface, AppTheme.inkMuted),
      RsvpStatus.confirmed => ('Vais', AppTheme.accentOliveDark, Colors.white),
      RsvpStatus.declined => ('Não vais', AppTheme.surface, AppTheme.inkMuted),
      _ => ('Por responder', const Color(0xFFFBEFD3), const Color(0xFF8A5A00)),
    };
    final meta = [
      if (event.eventDate != null) formatEventDateCaps(event.eventDate!),
      if (event.venue?.isNotEmpty == true) event.venue! else if (event.location?.isNotEmpty == true) event.location!,
    ].join(' · ');
    return SnappyTap(
      onTap: () => context.go('/guest-home/${event.eventId}'),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: guestCard(),
        child: Row(
          children: [
            event.coverPhotoUrl == null
                ? StickerIcon(switch (event.eventType) {
                    EventType.wedding => Hi.heartOutline,
                    EventType.birthday => Hi.cake,
                    EventType.baptism => Hi.sparkles,
                    _ => Hi.sparkles,
                  }, turns: StickerIcon.tilt(event.eventId.hashCode))
                : ClipRRect(
                    borderRadius: BorderRadius.circular(14),
                    child: SizedNetworkImage(event.coverPhotoUrlCacheBusted!, width: 44, height: 44, fit: BoxFit.cover),
                  ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    event.eventType.label.toUpperCase(),
                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 0.8, color: AppTheme.accentOliveDark),
                  ),
                  const SizedBox(height: 2),
                  Text(capFirst(event.displayNames), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
              decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
              child: Text(label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: fg)),
            ),
          ],
        ),
      ),
    );
  }
}
