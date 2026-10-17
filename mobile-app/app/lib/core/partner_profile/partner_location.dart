import 'dart:convert';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:geolocator/geolocator.dart';
import 'package:http/http.dart' as http;

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Localização do parceiro (`080_partner_location.sql`). Pedido do
/// utilizador (2026-10-17): usar a localização atual ou escrever a morada.
class PartnerLocation {
  final String addressLine;
  final String postalCode;
  final String city;
  final String region;
  final double? latitude;
  final double? longitude;

  const PartnerLocation({
    this.addressLine = '',
    this.postalCode = '',
    this.city = '',
    this.region = '',
    this.latitude,
    this.longitude,
  });

  bool get isEmpty => addressLine.isEmpty && city.isEmpty && postalCode.isEmpty && region.isEmpty;

  /// "Rua X 12, Sintra" — para mostrar numa linha.
  String get summary => [
        if (addressLine.isNotEmpty) addressLine,
        if (city.isNotEmpty) city else if (region.isNotEmpty) region,
      ].join(', ');

  PartnerLocation copyWith({
    String? addressLine,
    String? postalCode,
    String? city,
    String? region,
    double? latitude,
    double? longitude,
  }) =>
      PartnerLocation(
        addressLine: addressLine ?? this.addressLine,
        postalCode: postalCode ?? this.postalCode,
        city: city ?? this.city,
        region: region ?? this.region,
        latitude: latitude ?? this.latitude,
        longitude: longitude ?? this.longitude,
      );
}

/// `null` se a migração 080 ainda não correu.
final partnerLocationProvider = FutureProvider<PartnerLocation?>((ref) async {
  final id = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (id == null) return null;
  try {
    final row = await supabase
        .from('partner_profiles')
        .select('address_line, postal_code, city, region, latitude, longitude')
        .eq('id', id)
        .maybeSingle();
    if (row == null) return const PartnerLocation();
    return PartnerLocation(
      addressLine: (row['address_line'] as String?) ?? '',
      postalCode: (row['postal_code'] as String?) ?? '',
      city: (row['city'] as String?) ?? '',
      region: (row['region'] as String?) ?? '',
      latitude: (row['latitude'] as num?)?.toDouble(),
      longitude: (row['longitude'] as num?)?.toDouble(),
    );
  } catch (_) {
    return null;
  }
});

Future<void> savePartnerLocation(String partnerId, PartnerLocation l) async {
  await supabase.from('partner_profiles').update({
    'address_line': l.addressLine.trim().isEmpty ? null : l.addressLine.trim(),
    'postal_code': l.postalCode.trim().isEmpty ? null : l.postalCode.trim(),
    'city': l.city.trim().isEmpty ? null : l.city.trim(),
    'region': l.region.trim().isEmpty ? null : l.region.trim(),
    'latitude': l.latitude,
    'longitude': l.longitude,
  }).eq('id', partnerId);
}

/// Erro legível para mostrar ao utilizador quando a localização falha.
class LocationException implements Exception {
  final String message;
  const LocationException(this.message);
  @override
  String toString() => message;
}

/// Pede autorização e devolve a posição atual do telemóvel.
Future<Position> currentPosition() async {
  if (!await Geolocator.isLocationServiceEnabled()) {
    throw const LocationException('A localização está desligada no telemóvel.');
  }
  var permission = await Geolocator.checkPermission();
  if (permission == LocationPermission.denied) {
    permission = await Geolocator.requestPermission();
  }
  if (permission == LocationPermission.denied || permission == LocationPermission.deniedForever) {
    throw const LocationException('Sem autorização para usar a localização. Podes escrever a morada.');
  }
  return Geolocator.getCurrentPosition(
    locationSettings: const LocationSettings(accuracy: LocationAccuracy.high, timeLimit: Duration(seconds: 15)),
  );
}

PartnerLocation _fromNominatim(Map<String, dynamic> r) {
  final a = (r['address'] as Map?)?.cast<String, dynamic>() ?? const {};
  final street = [a['road'], a['house_number']].whereType<String>().join(' ');
  return PartnerLocation(
    addressLine: street,
    postalCode: (a['postcode'] as String?) ?? '',
    city: (a['city'] ?? a['town'] ?? a['village'] ?? a['municipality'] ?? '') as String,
    region: (a['county'] ?? a['state_district'] ?? a['state'] ?? '') as String,
    latitude: double.tryParse('${r['lat']}'),
    longitude: double.tryParse('${r['lon']}'),
  );
}

/// Morada a partir de coordenadas (OpenStreetMap Nominatim).
Future<PartnerLocation> reverseGeocode(double lat, double lng) async {
  final uri = Uri.https('nominatim.openstreetmap.org', '/reverse', {
    'format': 'jsonv2',
    'lat': '$lat',
    'lon': '$lng',
    'addressdetails': '1',
    'accept-language': 'pt',
  });
  final res = await http.get(uri);
  if (res.statusCode != 200) {
    return PartnerLocation(latitude: lat, longitude: lng);
  }
  final loc = _fromNominatim(jsonDecode(res.body) as Map<String, dynamic>);
  return loc.copyWith(latitude: lat, longitude: lng);
}

/// Pesquisa de moradas (só Portugal), para escolher da lista.
Future<List<(String label, PartnerLocation location)>> searchAddress(String query) async {
  if (query.trim().length < 3) return const [];
  final uri = Uri.https('nominatim.openstreetmap.org', '/search', {
    'format': 'jsonv2',
    'q': query,
    'addressdetails': '1',
    'countrycodes': 'pt',
    'limit': '6',
    'accept-language': 'pt',
  });
  final res = await http.get(uri);
  if (res.statusCode != 200) return const [];
  final list = (jsonDecode(res.body) as List).cast<Map<String, dynamic>>();
  return [
    for (final r in list) ((r['display_name'] as String?) ?? '', _fromNominatim(r)),
  ];
}
