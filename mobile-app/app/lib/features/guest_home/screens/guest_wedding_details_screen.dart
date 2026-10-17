import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';

/// "Detalhes do casamento" do lado do convidado — pedido explícito do
/// utilizador (mockup de referência), aberto a partir do cartão de
/// citação em [GuestHomeScreen]. `wedding.venue`/`location`/`quote` já
/// existiam; `ceremonyTime`/`welcomeMessage`/`themeColors` são novos
/// (`067_guest_self_service.sql`) — todos opcionais, mostrados só
/// quando o casal os preencher (ainda sem ecrã de edição próprio).
class GuestWeddingDetailsScreen extends StatelessWidget {
  final GuestWedding wedding;

  const GuestWeddingDetailsScreen({super.key, required this.wedding});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                const PageHeader(title: 'Programa'),
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
                      _TimelineItem(
                        time: wedding.ceremonyTime?.isNotEmpty == true ? wedding.ceremonyTime! : 'Hora a confirmar',
                        title: wedding.weddingDate == null ? 'Data por definir' : formatWeddingDateCaps(wedding.weddingDate!),
                        subtitle: wedding.venue?.isNotEmpty == true ? wedding.venue! : 'Local a confirmar',
                      ),
                      const SizedBox(height: 8),
                      if (wedding.venue?.isNotEmpty == true || wedding.location?.isNotEmpty == true)
                        _PlaceCard(venue: wedding.venue, location: wedding.location),
                      if (wedding.themeColors.isNotEmpty) ...[
                        const SizedBox(height: 16),
                        Row(
                          children: [
                            const Text('Cores do evento', style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, color: AppTheme.ink)),
                            const Spacer(),
                            for (final hex in wedding.themeColors) ...[
                              _ColorSwatch(hex: hex),
                              const SizedBox(width: 6),
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

  Color get _color {
    var value = hex.replaceAll('#', '');
    if (value.length == 6) value = 'FF$value';
    return Color(int.tryParse(value, radix: 16) ?? 0xFFCCCCCC);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 22,
      height: 22,
      decoration: BoxDecoration(color: _color, shape: BoxShape.circle),
    );
  }
}

class _TimelineItem extends StatelessWidget {
  final String time;
  final String title;
  final String subtitle;
  const _TimelineItem({required this.time, required this.title, required this.subtitle});

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          margin: const EdgeInsets.only(top: 4),
          width: 12,
          height: 12,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: AppTheme.accentOliveDark,
            border: Border.all(color: AppTheme.accentOliveDark, width: 2),
          ),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.only(bottom: 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(time, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: Color(0xFF4A5D35))),
                Text(title, style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(subtitle, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class _PlaceCard extends StatelessWidget {
  final String? venue;
  final String? location;
  const _PlaceCard({this.venue, this.location});

  @override
  Widget build(BuildContext context) {
    final query = [venue, location].whereType<String>().where((s) => s.isNotEmpty).join(', ');
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
            color: AppColors.gray,
            alignment: Alignment.center,
            child: const Icon(Icons.place_outlined, size: 30, color: AppTheme.accentOliveDark),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(venue?.isNotEmpty == true ? venue! : (location ?? ''), style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      if (venue?.isNotEmpty == true && location?.isNotEmpty == true)
                        Text(location!, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                    ],
                  ),
                ),
                FilledButton(
                  onPressed: () => launchUrl(
                    Uri.https('www.google.com', '/maps/search/', {'api': '1', 'query': query}),
                    mode: LaunchMode.externalApplication,
                  ),
                  style: FilledButton.styleFrom(
                    minimumSize: const Size(0, 38),
                    padding: const EdgeInsets.symmetric(horizontal: 14),
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
