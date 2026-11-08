import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../core/partner_profile/partner_location.dart' show searchAddress;
import '../../core/theme/app_theme.dart';
import 'navigation_sheet.dart';

/// Mapa embutido do local (pedido 2026-11-08: "o local não tem o mapa
/// embutido"). Mosaicos do OpenStreetMap, sem chave nem SDK; o pino fica
/// ao centro. Sem coordenadas, procura a morada (Nominatim) uma vez.
/// Tocar abre "Como chegar".
class VenueMap extends StatefulWidget {
  final String label;
  final String? address;
  final double? latitude;
  final double? longitude;
  final double height;

  const VenueMap({
    super.key,
    required this.label,
    this.address,
    this.latitude,
    this.longitude,
    this.height = 170,
  });

  @override
  State<VenueMap> createState() => _VenueMapState();
}

class _VenueMapState extends State<VenueMap> {
  static final Map<String, (double, double)?> _geoCache = {};
  (double, double)? _coords;
  bool _looking = false;

  @override
  void initState() {
    super.initState();
    _resolve();
  }

  @override
  void didUpdateWidget(covariant VenueMap old) {
    super.didUpdateWidget(old);
    if (old.latitude != widget.latitude || old.longitude != widget.longitude || old.address != widget.address) _resolve();
  }

  Future<void> _resolve() async {
    if (widget.latitude != null && widget.longitude != null) {
      setState(() => _coords = (widget.latitude!, widget.longitude!));
      return;
    }
    final q = [widget.label, widget.address].whereType<String>().where((s) => s.trim().isNotEmpty).join(', ');
    if (q.isEmpty) return;
    if (_geoCache.containsKey(q)) {
      setState(() => _coords = _geoCache[q]);
      return;
    }
    setState(() => _looking = true);
    (double, double)? found;
    try {
      // Primeiro a morada sozinha (mais certeira), depois com o nome.
      for (final query in [widget.address, q].whereType<String>()) {
        final r = await searchAddress(query);
        final loc = r.isEmpty ? null : r.first.$2;
        if (loc?.latitude != null && loc?.longitude != null) {
          found = (loc!.latitude!, loc.longitude!);
          break;
        }
      }
    } catch (_) {}
    _geoCache[q] = found;
    if (mounted) {
      setState(() {
        _coords = found;
        _looking = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = _coords;
    if (c == null && !_looking) return const SizedBox.shrink();
    return Semantics(
      button: true,
      label: 'Mapa de ${widget.label}. Toca para ver como chegar.',
      child: GestureDetector(
        onTap: () => showNavigationSheet(
          context,
          label: widget.label,
          address: widget.address,
          latitude: c?.$1 ?? widget.latitude,
          longitude: c?.$2 ?? widget.longitude,
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(AppRadius.sm),
          child: Container(
            height: widget.height,
            color: const Color(0xFFEDEBE5),
            child: c == null ? const SizedBox.expand() : _Tiles(lat: c.$1, lng: c.$2),
          ),
        ),
      ),
    );
  }
}

class _Tiles extends StatelessWidget {
  final double lat;
  final double lng;
  const _Tiles({required this.lat, required this.lng});

  static const _zoom = 15;
  static const _tile = 256.0;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, box) {
      final w = box.maxWidth;
      final h = box.maxHeight;
      final n = math.pow(2, _zoom).toDouble();
      final px = (lng + 180) / 360 * n * _tile;
      final latRad = lat * math.pi / 180;
      final py = (1 - math.log(math.tan(latRad) + 1 / math.cos(latRad)) / math.pi) / 2 * n * _tile;
      final left = px - w / 2;
      final top = py - h / 2;
      final x0 = (left / _tile).floor();
      final x1 = ((left + w) / _tile).floor();
      final y0 = (top / _tile).floor();
      final y1 = ((top + h) / _tile).floor();
      return Stack(
        clipBehavior: Clip.hardEdge,
        children: [
          for (var x = x0; x <= x1; x++)
            for (var y = y0; y <= y1; y++)
              Positioned(
                left: x * _tile - left,
                top: y * _tile - top,
                width: _tile,
                height: _tile,
                child: Image.network(
                  'https://tile.openstreetmap.org/$_zoom/${x % n.toInt()}/$y.png',
                  fit: BoxFit.cover,
                  gaplessPlayback: true,
                  excludeFromSemantics: true,
                  errorBuilder: (context, error, stack) => const SizedBox.shrink(),
                ),
              ),
          // Pino: a ponta fica no ponto exato.
          Positioned(
            left: w / 2 - 18,
            top: h / 2 - 36,
            child: const Icon(Icons.location_on_rounded, size: 36, color: Color(0xFF4F6B4A),
                shadows: [Shadow(color: Color(0x40000000), blurRadius: 6, offset: Offset(0, 2))]),
          ),
          Positioned(
            right: 0,
            bottom: 0,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
              color: const Color(0xCCFFFFFF),
              child: const Text('© OpenStreetMap', style: TextStyle(fontSize: 9, color: AppTheme.inkMuted)),
            ),
          ),
        ],
      );
    });
  }
}
