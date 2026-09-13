import 'package:flutter/material.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';

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
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 0),
                  child: Row(
                    children: [
                      const CircleBackButton(),
                      const SizedBox(width: 4),
                      const Text(
                        'Detalhes do casamento',
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 120),
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(24),
                    child: AspectRatio(
                      aspectRatio: 16 / 9,
                      child: wedding.coverPhotoUrl == null
                          ? Container(
                              color: AppTheme.surface,
                              alignment: Alignment.center,
                              child: const Icon(Icons.villa_outlined, size: 40, color: AppTheme.inkMuted),
                            )
                          : Image.network(wedding.coverPhotoUrlCacheBusted!, fit: BoxFit.cover),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Text(
                    wedding.displayNames,
                    textAlign: TextAlign.center,
                    style: AppTypography.displaySerif(fontSize: 24, color: AppTheme.ink),
                  ),
                  const SizedBox(height: 20),
                  _DetailRow(
                    icon: Icons.calendar_today_outlined,
                    label: wedding.weddingDate == null
                        ? 'Data por definir'
                        : formatWeddingDateCaps(wedding.weddingDate!),
                  ),
                  if (wedding.ceremonyTime?.isNotEmpty == true) ...[
                    const SizedBox(height: 10),
                    _DetailRow(icon: Icons.access_time, label: wedding.ceremonyTime!),
                  ],
                  if (wedding.venue?.isNotEmpty == true || wedding.location?.isNotEmpty == true) ...[
                    const SizedBox(height: 10),
                    _DetailRow(
                      icon: Icons.place_outlined,
                      label: [
                        if (wedding.venue?.isNotEmpty == true) wedding.venue!,
                        if (wedding.location?.isNotEmpty == true) wedding.location!,
                      ].join('\n'),
                    ),
                  ],
                  if (wedding.welcomeMessage?.isNotEmpty == true) ...[
                    const SizedBox(height: 24),
                    Text(
                      wedding.welcomeMessage!,
                      style: const TextStyle(color: AppTheme.ink, fontSize: 14.5, height: 1.5),
                    ),
                  ],
                  if (wedding.themeColors.isNotEmpty) ...[
                    const SizedBox(height: 24),
                    const Text(
                      'Cores do casamento',
                      style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15, color: AppTheme.ink),
                    ),
                    const SizedBox(height: 12),
                    Row(
                      children: [
                        for (final hex in wedding.themeColors) ...[
                          _ColorSwatch(hex: hex),
                          const SizedBox(width: 10),
                        ],
                        const Icon(Icons.eco_outlined, size: 22, color: AppTheme.inkMuted),
                      ],
                    ),
                  ],
                  const SizedBox(height: 28),
                  RichText(
                    textAlign: TextAlign.center,
                    text: TextSpan(
                      children: [
                        TextSpan(
                          text: '"${wedding.quote?.isNotEmpty == true ? wedding.quote : 'O amor está nos detalhes.'}"  ',
                          style: const TextStyle(fontStyle: FontStyle.italic, color: AppTheme.ink, fontSize: 14.5),
                        ),
                        const WidgetSpan(
                          alignment: PlaceholderAlignment.middle,
                          child: Icon(Icons.favorite_border, size: 14, color: AppTheme.accentOliveDark),
                        ),
                      ],
                    ),
                  ),
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
          child: Text(label, style: const TextStyle(color: AppTheme.ink, fontSize: 14.5)),
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
      width: 32,
      height: 32,
      decoration: BoxDecoration(color: _color, shape: BoxShape.circle),
    );
  }
}
