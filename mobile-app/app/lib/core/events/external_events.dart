import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';

/// Evento real em Portugal continental (migração 222, pedido do Rafael
/// 2026-11-23): só informativo — a À Nossa! não vende estes bilhetes; os
/// pagos levam ao site do organizador (`ticketUrl`).
class ExternalEvent {
  final String id;
  final String title;
  final String category;
  final String? description;
  final DateTime startsOn;
  final DateTime? endsOn;
  final String? timeLabel;
  final String? venue;
  final String? address;
  final String city;
  final String? district;
  final double? latitude;
  final double? longitude;
  final bool isFree;
  final double? priceFrom;
  final String? priceNote;
  final String? ticketUrl;
  final String? sourceUrl;
  final String? organizer;
  final String? imageUrl;

  const ExternalEvent({
    required this.id,
    required this.title,
    required this.category,
    this.description,
    required this.startsOn,
    this.endsOn,
    this.timeLabel,
    this.venue,
    this.address,
    required this.city,
    this.district,
    this.latitude,
    this.longitude,
    required this.isFree,
    this.priceFrom,
    this.priceNote,
    this.ticketUrl,
    this.sourceUrl,
    this.organizer,
    this.imageUrl,
  });

  factory ExternalEvent.fromRow(Map<String, dynamic> r) => ExternalEvent(
        id: r['id'] as String,
        title: r['title'] as String,
        category: r['category'] as String? ?? 'festa',
        description: r['description'] as String?,
        startsOn: DateTime.parse(r['starts_on'] as String),
        endsOn: r['ends_on'] == null ? null : DateTime.parse(r['ends_on'] as String),
        timeLabel: r['time_label'] as String?,
        venue: r['venue'] as String?,
        address: r['address'] as String?,
        city: r['city'] as String,
        district: r['district'] as String?,
        latitude: (r['latitude'] as num?)?.toDouble(),
        longitude: (r['longitude'] as num?)?.toDouble(),
        isFree: r['is_free'] as bool? ?? true,
        priceFrom: (r['price_from'] as num?)?.toDouble(),
        priceNote: r['price_note'] as String?,
        ticketUrl: r['ticket_url'] as String?,
        sourceUrl: r['source_url'] as String?,
        organizer: r['organizer'] as String?,
        imageUrl: r['image_url'] as String?,
      );

  DateTime get lastDay => endsOn ?? startsOn;

  /// Nome da categoria para a etiqueta («Concerto», «Mercado»…).
  String get categoryLabel => switch (category) {
        'concerto' => 'Concerto',
        'mercado' => 'Mercado',
        'feira' => 'Feira',
        'festival' => 'Festival',
        'festa' => 'Festa',
        'desporto' => 'Desporto',
        'cultura' => 'Cultura',
        _ => 'Evento',
      };
}

/// Os que ainda não acabaram, do mais perto para o mais longe. Lista vazia
/// antes da migração 222.
final externalEventsProvider = FutureProvider<List<ExternalEvent>>((ref) async {
  final today = DateTime.now();
  final d = '${today.year}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')}';
  try {
    final rows = await supabase
        .from('external_events')
        .select()
        .eq('published', true)
        .or('ends_on.gte.$d,and(ends_on.is.null,starts_on.gte.$d)')
        .order('starts_on')
        .limit(60);
    return [for (final r in (rows as List).cast<Map<String, dynamic>>()) ExternalEvent.fromRow(r)];
  } catch (_) {
    return const [];
  }
});
