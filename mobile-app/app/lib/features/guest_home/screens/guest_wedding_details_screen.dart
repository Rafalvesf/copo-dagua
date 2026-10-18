import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/pastel_colors.dart';
import '../../../core/wedding/wedding_venue.dart';
import '../../../shared/widgets/navigation_sheet.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';

/// "Detalhes do casamento" do lado do convidado — pedido explícito do
/// utilizador (mockup de referência), aberto a partir do cartão de
/// citação em [GuestHomeScreen]. `wedding.venue`/`location`/`quote` já
/// existiam; `ceremonyTime`/`welcomeMessage`/`themeColors` são novos
/// (`067_guest_self_service.sql`) — todos opcionais, mostrados só
/// quando o casal os preencher (ainda sem ecrã de edição próprio).
class GuestWeddingDetailsScreen extends ConsumerWidget {
  final GuestWedding wedding;

  /// Aberto pelo casal em "Para os convidados" para ver como fica — sem
  /// a navbar do convidado.
  final bool preview;

  const GuestWeddingDetailsScreen({super.key, required this.wedding, this.preview = false});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Sem morada escrita pelo casal, usa a do local escolhido na app.
    final appVenue = (wedding.venueAddress?.isNotEmpty == true && wedding.venueLatitude != null)
        ? null
        : ref.watch(weddingVenueProvider(wedding.weddingId)).asData?.value;
    final placeName = wedding.venue?.isNotEmpty == true ? wedding.venue : (appVenue?.name ?? wedding.location);
    final placeAddress = wedding.venueAddress?.isNotEmpty == true
        ? wedding.venueAddress
        : (appVenue?.address ?? (wedding.venue?.isNotEmpty == true ? wedding.location : null));
    final lat = wedding.venueLatitude ?? (wedding.venueAddress?.isNotEmpty == true ? null : appVenue?.latitude);
    final lng = wedding.venueLongitude ?? (wedding.venueAddress?.isNotEmpty == true ? null : appVenue?.longitude);
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                PageHeader(title: 'Programa', subtitle: preview ? 'Pré-visualização · como os convidados veem' : null),
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 120),
                    children: [
                      // Redesign 2026-10-17 (canvas "Convidado · Programa").
                      if (wedding.welcomeMessage?.isNotEmpty == true) ...[
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                          decoration: BoxDecoration(color: const Color(0xFFFBF6E9), borderRadius: BorderRadius.circular(18)),
                          child: Text.rich(
                            TextSpan(
                              children: [
                                TextSpan(
                                  text: '“${wedding.welcomeMessage}” ',
                                  style: const TextStyle(fontStyle: FontStyle.italic, color: Color(0xFF3F3A2E)),
                                ),
                                TextSpan(text: '— ${wedding.displayNames}', style: const TextStyle(color: AppTheme.inkMuted)),
                              ],
                            ),
                            style: const TextStyle(fontSize: AppFontSize.base, height: 1.5),
                          ),
                        ),
                        const SizedBox(height: 18),
                      ],
                      // Programa feito pelo casal (085); sem ele, só a
                      // cerimónia como antes.
                      if (wedding.program.isNotEmpty) ...[
                        if (wedding.weddingDate != null)
                          Padding(
                            padding: const EdgeInsets.only(bottom: 12),
                            child: Text(
                              formatWeddingDateCaps(wedding.weddingDate!),
                              style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFF8F8B84)),
                            ),
                          ),
                        for (var i = 0; i < wedding.program.length; i++)
                          _TimelineItem(
                            time: wedding.program[i].time,
                            title: wedding.program[i].title,
                            subtitle: wedding.program[i].place,
                            first: i == 0,
                            last: i == wedding.program.length - 1,
                          ),
                      ] else
                        _TimelineItem(
                          time: wedding.ceremonyTime?.isNotEmpty == true ? wedding.ceremonyTime! : 'Hora a confirmar',
                          title: wedding.weddingDate == null ? 'Data por definir' : formatWeddingDateCaps(wedding.weddingDate!),
                          subtitle: wedding.venue?.isNotEmpty == true ? wedding.venue! : 'Local a confirmar',
                          last: true,
                        ),
                      const SizedBox(height: 8),
                      if (placeName?.isNotEmpty == true || placeAddress?.isNotEmpty == true)
                        _PlaceCard(name: placeName, address: placeAddress, latitude: lat, longitude: lng),
                      if (wedding.dressCode?.isNotEmpty == true || wedding.themeColors.isNotEmpty) ...[
                        const SizedBox(height: 14),
                        Row(
                          children: [
                            const Text('Dress code', style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, color: AppTheme.ink)),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Text(
                                wedding.dressCode?.isNotEmpty == true ? wedding.dressCode! : 'Cores do evento',
                                style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted, height: 1.4),
                              ),
                            ),
                            for (final hex in wedding.themeColors) ...[
                              const SizedBox(width: 6),
                              Tooltip(message: pastelName(hex) ?? hex, child: _ColorSwatch(hex: hex)),
                            ],
                          ],
                        ),
                      ],
                      if (wedding.quote?.isNotEmpty == true) ...[
                        const SizedBox(height: 24),
                        Text(
                          '"${wedding.quote}"',
                          textAlign: TextAlign.center,
                          style: const TextStyle(fontStyle: FontStyle.italic, color: AppTheme.ink, fontSize: AppFontSize.base),
                        ),
                      ],
                    ],
                  ),
                ),
              ],
            ),
          ),
          if (!preview)
            const Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: GuestBottomNav(current: GuestTab.home),
            ),
        ],
      ),
    );
  }
}

class _DetailRow extends StatelessWidget {
  final IconData icon;
  final String label;

  const _DetailRow({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, size: 18, color: AppTheme.inkMuted),
        const SizedBox(width: 10),
        Expanded(
          child: Text(label, style: const TextStyle(color: AppTheme.ink, fontSize: AppFontSize.base)),
        ),
      ],
    );
  }
}

class _ColorSwatch extends StatelessWidget {
  final String hex;

  const _ColorSwatch({required this.hex});

  Color get _color => colorFromHex(hex);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 22,
      height: 22,
      decoration: BoxDecoration(color: _color, shape: BoxShape.circle, border: Border.all(color: const Color(0x14000000))),
    );
  }
}

class _TimelineItem extends StatelessWidget {
  final String time;
  final String title;
  final String subtitle;
  final bool first;
  final bool last;
  const _TimelineItem({required this.time, required this.title, required this.subtitle, this.first = true, this.last = false});

  @override
  Widget build(BuildContext context) {
    // Como no canvas: primeiro ponto cheio, os outros só com contorno,
    // ligados por uma linha (exceto depois do último).
    return IntrinsicHeight(
      child: Row(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(
          width: 14,
          child: Column(
            children: [
              Container(
                margin: const EdgeInsets.only(top: 4),
                width: 12,
                height: 12,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: first ? AppTheme.accentOliveDark : Colors.white,
                  border: Border.all(color: AppTheme.accentOliveDark, width: 2),
                ),
              ),
              if (!last) Expanded(child: Container(width: 2, color: const Color(0xFFE6E0D2))),
            ],
          ),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.only(bottom: 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (time.isNotEmpty) Text(time, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: Color(0xFF3E5539))),
                if (title.isNotEmpty) Text(title, style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                if (subtitle.isNotEmpty) Text(subtitle, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
              ],
            ),
          ),
        ),
      ],
    ),
    );
  }
}

class _PlaceCard extends StatelessWidget {
  final String? name;
  final String? address;
  final double? latitude;
  final double? longitude;
  const _PlaceCard({this.name, this.address, this.latitude, this.longitude});

  @override
  Widget build(BuildContext context) {
    final title = name?.isNotEmpty == true ? name! : (address ?? '');
    final sub = name?.isNotEmpty == true ? address : null;
    return Container(
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFFEFEBE3)),
      ),
      child: Column(
        children: [
          Container(
            height: 92,
            color: const Color(0xFFEEF2E9),
            alignment: Alignment.center,
            child: Icon(Icons.place_outlined, size: 30, color: AppTheme.accentOliveDark),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      if (sub?.isNotEmpty == true)
                        Text(sub!, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                    ],
                  ),
                ),
                const SizedBox(width: 10),
                FilledButton(
                  onPressed: () => showNavigationSheet(context, label: title, address: sub, latitude: latitude, longitude: longitude),
                  style: FilledButton.styleFrom(
                    minimumSize: const Size(0, 38),
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: AppFontSize.md, fontWeight: FontWeight.w700),
                  ),
                  child: const Text('Como chegar'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
