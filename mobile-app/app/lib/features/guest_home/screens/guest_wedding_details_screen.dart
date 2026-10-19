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
import '../../../shared/widgets/v2_kit.dart';

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
                PageHeader(title: 'Programa', centered: true, subtitle: preview ? 'Pré-visualização · como os convidados veem' : null),
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 120),
                    children: [
                      // Redesign 2026-10-19 (canvas "Convidado — programa
                      // (redesign)"): mensagem num cartão verde, o dia em
                      // cartões com hora e autocolante, local e dress code.
                      if (wedding.welcomeMessage?.isNotEmpty == true) ...[
                        GreenHero(
                          label: 'DOS ANFITRIÕES',
                          value: '',
                          doodles: const [Icons.favorite_border, Icons.local_bar_outlined, Icons.auto_awesome_outlined],
                          footer: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                            Text('“${wedding.welcomeMessage}”',
                                style: const TextStyle(fontSize: 17, height: 25 / 17, fontStyle: FontStyle.italic, color: Colors.white)),
                            const SizedBox(height: 10),
                            Text('— ${wedding.displayNames}',
                                style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white)),
                          ]),
                        ),
                      ],
                      SectionTitle(
                        'O dia',
                        trailing: wedding.weddingDate == null
                            ? null
                            : Text(formatWeddingDateCaps(wedding.weddingDate!),
                                style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                      ),
                      if (wedding.program.isNotEmpty)
                        for (var i = 0; i < wedding.program.length; i++)
                          _ProgramCard(
                            index: i,
                            time: wedding.program[i].time,
                            title: wedding.program[i].title,
                            subtitle: wedding.program[i].place,
                          )
                      else
                        _ProgramCard(
                          index: 0,
                          time: wedding.ceremonyTime?.isNotEmpty == true ? wedding.ceremonyTime! : '—',
                          title: 'Cerimónia',
                          subtitle: wedding.venue?.isNotEmpty == true ? wedding.venue! : 'Local a confirmar',
                        ),
                      if (placeName?.isNotEmpty == true || placeAddress?.isNotEmpty == true) ...[
                        const SectionTitle('Onde'),
                        _PlaceCard(name: placeName, address: placeAddress, latitude: lat, longitude: lng),
                      ],
                      if (wedding.dressCode?.isNotEmpty == true || wedding.themeColors.isNotEmpty) ...[
                        const SizedBox(height: 10),
                        V2RowCard(
                          lead: StickerIcon(Icons.checkroom_outlined, turns: StickerIcon.tilt(2)),
                          title: 'Dress code',
                          sub: wedding.dressCode?.isNotEmpty == true ? wedding.dressCode! : 'Cores do evento',
                          trailing: wedding.themeColors.isEmpty
                              ? null
                              : Row(mainAxisSize: MainAxisSize.min, children: [
                                  for (final hex in wedding.themeColors.take(4)) ...[
                                    const SizedBox(width: 4),
                                    Tooltip(message: pastelName(hex) ?? hex, child: _ColorSwatch(hex: hex)),
                                  ],
                                ]),
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

class _ProgramCard extends StatelessWidget {
  final int index;
  final String time;
  final String title;
  final String subtitle;
  const _ProgramCard({required this.index, required this.time, required this.title, required this.subtitle});

  IconData get _icon {
    final t = title.toLowerCase();
    if (t.contains('cerim') || t.contains('igreja') || t.contains('missa')) return Icons.church_outlined;
    if (t.contains('cocktail') || t.contains('aperitivo') || t.contains('brinde')) return Icons.local_bar_outlined;
    if (t.contains('jantar') || t.contains('almoço') || t.contains('refei')) return Icons.restaurant_outlined;
    if (t.contains('bolo') || t.contains('festa') || t.contains('dança')) return Icons.cake_outlined;
    if (t.contains('foto')) return Icons.photo_camera_outlined;
    return Icons.schedule_outlined;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: softCard(),
        child: Row(children: [
          SizedBox(
            width: 58,
            child: Text(time,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.brandGreen)),
          ),
          StickerIcon(_icon, size: 36, turns: StickerIcon.tilt(index)),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              if (title.isNotEmpty)
                Text(title, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (subtitle.isNotEmpty)
                Text(subtitle, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
            ]),
          ),
        ]),
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
    return V2RowCard(
      lead: StickerIcon(Icons.place_outlined, turns: StickerIcon.tilt(1)),
      title: title,
      sub: sub,
      trailing: GestureDetector(
        onTap: () => showNavigationSheet(context, label: title, address: sub, latitude: latitude, longitude: longitude),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          decoration: BoxDecoration(color: AppTheme.brandGreen, borderRadius: BorderRadius.circular(999)),
          child: const Text('Como chegar',
              style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.white)),
        ),
      ),
    );
  }
}
