import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../core/theme/app_theme.dart';
import 'island_sheet.dart';

/// "Como chegar": deixa escolher a app de navegação (pedido 2026-10-17).
/// Links universais — abrem a app se estiver instalada, senão o site.
Future<void> showNavigationSheet(
  BuildContext context, {
  required String label,
  String? address,
  double? latitude,
  double? longitude,
}) {
  final hasCoords = latitude != null && longitude != null;
  final query = [label, address].whereType<String>().where((s) => s.trim().isNotEmpty).join(', ');
  final ll = hasCoords ? '$latitude,$longitude' : null;

  final options = <(String, IconData, Uri)>[
    (
      'Google Maps',
      Icons.map_outlined,
      Uri.https('www.google.com', '/maps/dir/', {'api': '1', 'destination': ll ?? query}),
    ),
    (
      'Apple Maps',
      Icons.explore_outlined,
      Uri.https('maps.apple.com', '/', {'daddr': ll ?? query, if (hasCoords) 'q': label}),
    ),
    (
      'Waze',
      Icons.navigation_outlined,
      Uri.https('waze.com', '/ul', {if (hasCoords) 'll': ll! else 'q': query, 'navigate': 'yes'}),
    ),
  ];

  return showIslandSheet<void>(
    context: context,
    backgroundColor: Colors.white,
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
    builder: (sheetContext) => SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text('Como chegar', textAlign: TextAlign.center, style: TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 4),
            Text(
              query.isEmpty ? 'Escolhe a app de navegação' : query,
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
            ),
            const SizedBox(height: 14),
            for (final (name, icon, uri) in options)
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Material(
                  color: AppTheme.surface,
                  borderRadius: BorderRadius.circular(AppRadius.lg),
                  child: InkWell(
                    borderRadius: BorderRadius.circular(AppRadius.lg),
                    onTap: () {
                      Navigator.of(sheetContext).pop();
                      launchUrl(
                        uri,
                        mode: kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication,
                        webOnlyWindowName: '_blank',
                      );
                    },
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                      child: Row(
                        children: [
                          Icon(icon, size: 22, color: AppTheme.accentOliveDark),
                          const SizedBox(width: 12),
                          Expanded(child: Text(name, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink))),
                          const Icon(Icons.chevron_right, size: 18, color: Color(0xFFB5B0A6)),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    ),
  );
}
