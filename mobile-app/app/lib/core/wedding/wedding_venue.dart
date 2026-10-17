import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';

/// Local escolhido na app (`get_wedding_venue`, 087): o parceiro da
/// categoria "Espaço" com reserva ativa, ou o escolhido na checklist.
class WeddingVenue {
  final String partnerId;
  final String name;
  final String? address;
  final double? latitude;
  final double? longitude;

  const WeddingVenue({
    required this.partnerId,
    required this.name,
    this.address,
    this.latitude,
    this.longitude,
  });
}

/// `null` quando não há local escolhido na app (ou a 087 não correu).
final weddingVenueProvider = FutureProvider.family<WeddingVenue?, String>((ref, weddingId) async {
  try {
    final rows = await supabase.rpc('get_wedding_venue', params: {'p_wedding_id': weddingId}) as List;
    if (rows.isEmpty) return null;
    final r = rows.first as Map<String, dynamic>;
    return WeddingVenue(
      partnerId: r['partner_id'] as String,
      name: (r['business_name'] as String?) ?? 'Local',
      address: r['address'] as String?,
      latitude: (r['latitude'] as num?)?.toDouble(),
      longitude: (r['longitude'] as num?)?.toDouble(),
    );
  } catch (_) {
    return null;
  }
});
