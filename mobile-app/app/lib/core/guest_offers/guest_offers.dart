import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../shared/public_link.dart';
import '../home/home_providers.dart' show CheckoutUnavailable;
import '../supabase/supabase_config.dart';

/// Reservas para os convidados (`099_guest_offers.sql`): o organizador
/// combina com um parceiro um bloco de quartos ou lugares; cada convidado
/// reserva o seu e paga na app (Edge Function
/// `create-guest-reservation-checkout`, comissão por cima do valor do
/// parceiro, como nas reservas do casal).
enum GuestOfferKind {
  lodging('lodging', 'Alojamento', 'quarto', 'quartos'),
  transport('transport', 'Transporte', 'lugar', 'lugares');

  const GuestOfferKind(this.db, this.label, this.unit, this.units);
  final String db;
  final String label;
  final String unit;
  final String units;

  String count(int n) => '$n ${n == 1 ? unit : units}';

  static GuestOfferKind fromDb(String? v) => v == 'transport' ? transport : lodging;
}

class GuestOffer {
  final String id;
  final GuestOfferKind kind;
  final String title;
  final String? details;
  final int capacity;
  final double price;
  final DateTime? startsOn;
  final DateTime? endsOn;
  final DateTime? departureAt;
  final bool isActive;
  final String partnerId;
  final String partnerName;

  /// O parceiro tem a conta Stripe pronta para receber pagamentos.
  final bool payable;
  final int taken;

  const GuestOffer({
    required this.id,
    required this.kind,
    required this.title,
    this.details,
    required this.capacity,
    required this.price,
    this.startsOn,
    this.endsOn,
    this.departureAt,
    required this.isActive,
    required this.partnerId,
    required this.partnerName,
    required this.payable,
    required this.taken,
  });

  int get remaining => capacity - taken < 0 ? 0 : capacity - taken;

  /// Noites sugeridas para o alojamento (entre as duas datas).
  int get defaultNights {
    if (startsOn == null || endsOn == null) return 1;
    final n = endsOn!.difference(startsOn!).inDays;
    return n < 1 ? 1 : n;
  }

  factory GuestOffer.fromRow(Map<String, dynamic> r) => GuestOffer(
        id: r['id'] as String,
        kind: GuestOfferKind.fromDb(r['kind'] as String?),
        title: r['title'] as String? ?? '',
        details: r['details'] as String?,
        capacity: (r['capacity'] as num?)?.toInt() ?? 0,
        price: (r['price'] as num?)?.toDouble() ?? 0,
        startsOn: DateTime.tryParse(r['starts_on'] as String? ?? ''),
        endsOn: DateTime.tryParse(r['ends_on'] as String? ?? ''),
        departureAt: DateTime.tryParse(r['departure_at'] as String? ?? '')?.toLocal(),
        isActive: r['is_active'] as bool? ?? true,
        partnerId: r['partner_id'] as String? ?? '',
        partnerName: r['partner_name'] as String? ?? '',
        payable: r['payable'] as bool? ?? false,
        taken: (r['taken'] as num?)?.toInt() ?? 0,
      );
}

enum GuestReservationStatus { pendingPayment, paid, cancelled }

GuestReservationStatus _status(String? v) => switch (v) {
      'paid' => GuestReservationStatus.paid,
      'cancelled' => GuestReservationStatus.cancelled,
      _ => GuestReservationStatus.pendingPayment,
    };

class GuestReservation {
  final String id;
  final String offerId;
  final String offerTitle;
  final GuestOfferKind kind;
  final String? guestName;
  final String? guestAvatarUrl;
  final int quantity;
  final int nights;
  final double amount;
  final GuestReservationStatus status;
  final DateTime createdAt;

  const GuestReservation({
    required this.id,
    required this.offerId,
    required this.offerTitle,
    required this.kind,
    this.guestName,
    this.guestAvatarUrl,
    required this.quantity,
    required this.nights,
    required this.amount,
    required this.status,
    required this.createdAt,
  });

  /// Reserva por pagar cujo bloqueio (35 min) já expirou.
  bool get expired =>
      status == GuestReservationStatus.pendingPayment &&
      DateTime.now().difference(createdAt) > const Duration(minutes: 35);

  String get summary =>
      kind == GuestOfferKind.lodging ? '${kind.count(quantity)} · $nights ${nights == 1 ? 'noite' : 'noites'}' : kind.count(quantity);

  factory GuestReservation.fromRow(Map<String, dynamic> r) {
    final offer = r['guest_offers'] as Map<String, dynamic>?;
    return GuestReservation(
      id: r['id'] as String,
      offerId: r['offer_id'] as String? ?? '',
      offerTitle: (r['offer_title'] ?? offer?['title']) as String? ?? '',
      kind: GuestOfferKind.fromDb((r['kind'] ?? offer?['kind']) as String?),
      guestName: r['guest_name'] as String?,
      guestAvatarUrl: r['guest_avatar_url'] as String?,
      quantity: (r['quantity'] as num?)?.toInt() ?? 1,
      nights: (r['nights'] as num?)?.toInt() ?? 1,
      amount: (r['amount'] as num?)?.toDouble() ?? 0,
      status: _status(r['status'] as String?),
      createdAt: DateTime.tryParse(r['created_at'] as String? ?? '')?.toLocal() ?? DateTime.now(),
    );
  }
}

/// Interruptor geral (`platform_settings.guest_offers_enabled`, 100):
/// enquanto estiver desligado, convidados e organizadores veem a secção
/// com um cadeado ("Em breve") e o servidor recusa ofertas e reservas.
final guestOffersEnabledProvider = FutureProvider<bool>((ref) async {
  try {
    final row = await supabase.from('platform_settings').select('guest_offers_enabled').eq('id', 1).maybeSingle();
    return row?['guest_offers_enabled'] as bool? ?? false;
  } catch (_) {
    return false;
  }
});

/// Ofertas de um evento (o organizador vê também as escondidas).
final guestOffersProvider = FutureProvider.autoDispose.family<List<GuestOffer>, String>((ref, weddingId) async {
  final rows = await supabase.rpc('get_guest_offers', params: {'p_wedding_id': weddingId}) as List;
  return rows.map((r) => GuestOffer.fromRow(r as Map<String, dynamic>)).toList();
});

/// Reservas de todos os convidados (só o organizador).
final weddingGuestReservationsProvider =
    FutureProvider.autoDispose.family<List<GuestReservation>, String>((ref, weddingId) async {
  final rows = await supabase.rpc('get_guest_offer_reservations', params: {'p_wedding_id': weddingId}) as List;
  return rows.map((r) => GuestReservation.fromRow(r as Map<String, dynamic>)).toList();
});

/// As reservas do próprio convidado neste evento.
final myGuestReservationsProvider =
    FutureProvider.autoDispose.family<List<GuestReservation>, String>((ref, weddingId) async {
  final uid = supabase.auth.currentUser?.id;
  if (uid == null) return const [];
  final rows = await supabase
      .from('guest_offer_reservations')
      .select('id, offer_id, quantity, nights, amount, status, created_at, guest_offers(title, kind)')
      .eq('wedding_id', weddingId)
      .eq('guest_id', uid)
      .neq('status', 'cancelled')
      .order('created_at', ascending: false);
  return rows.map(GuestReservation.fromRow).where((r) => !r.expired).toList();
});

/// Parceiros com quem o evento já tem reserva — só a esses se pode ligar
/// uma oferta (é para a conta deles que vai o pagamento).
final bookedPartnersProvider =
    FutureProvider.autoDispose.family<List<({String id, String name})>, String>((ref, weddingId) async {
  final rows = await supabase
      .from('bookings')
      .select('partner_id, partner_profiles(business_name)')
      .eq('wedding_id', weddingId);
  final seen = <String>{};
  final out = <({String id, String name})>[];
  for (final r in rows) {
    final id = r['partner_id'] as String?;
    if (id == null || !seen.add(id)) continue;
    final name = (r['partner_profiles'] as Map<String, dynamic>?)?['business_name'] as String? ?? 'Parceiro';
    out.add((id: id, name: name));
  }
  return out;
});

String _date(DateTime d) =>
    '${d.year.toString().padLeft(4, '0')}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

Future<void> createGuestOffer({
  required String weddingId,
  required String partnerId,
  required GuestOfferKind kind,
  required String title,
  String? details,
  required int capacity,
  required double price,
  DateTime? startsOn,
  DateTime? endsOn,
  DateTime? departureAt,
}) async {
  await supabase.from('guest_offers').insert({
    'wedding_id': weddingId,
    'partner_id': partnerId,
    'kind': kind.db,
    'title': title.trim(),
    if (details != null && details.trim().isNotEmpty) 'details': details.trim(),
    'capacity': capacity,
    'price': price,
    if (startsOn != null) 'starts_on': _date(startsOn),
    if (endsOn != null) 'ends_on': _date(endsOn),
    if (departureAt != null) 'departure_at': departureAt.toUtc().toIso8601String(),
  });
}

Future<void> setGuestOfferActive(String offerId, bool active) async {
  await supabase
      .from('guest_offers')
      .update({'is_active': active, 'updated_at': DateTime.now().toUtc().toIso8601String()}).eq('id', offerId);
}

Future<void> cancelGuestReservation(String reservationId) async {
  await supabase.rpc('cancel_guest_reservation', params: {'p_reservation_id': reservationId});
}

/// Reserva e devolve o URL do checkout Stripe. Erros conhecidos chegam
/// como [CheckoutUnavailable] (`sold_out`, `partner_not_onboarded`, …).
Future<String> createGuestReservationCheckoutUrl({
  required String weddingId,
  required String offerId,
  required int quantity,
  int nights = 1,
}) async {
  final back = kIsWeb ? publicLink('/guest-stay/$weddingId') : 'anossa://payment-success';
  final FunctionResponse response;
  try {
    response = await supabase.functions.invoke(
      'create-guest-reservation-checkout',
      body: {
        'offer_id': offerId,
        'quantity': quantity,
        'nights': nights,
        'success_url': back,
        'cancel_url': back,
      },
    );
  } on FunctionException catch (e) {
    final details = e.details;
    final code = details is Map ? details['error'] as String? : null;
    if (code != null) throw CheckoutUnavailable(code);
    rethrow;
  }
  final url = (response.data as Map<String, dynamic>?)?['url'] as String?;
  if (url == null) throw Exception('Checkout sem URL devolvido');
  return url;
}

String guestCheckoutErrorMessage(String code) => switch (code) {
      'sold_out' => 'Já não há lugares suficientes. Tenta com menos.',
      'partner_not_onboarded' => 'O parceiro ainda não ativou os pagamentos na app. Tenta mais tarde.',
      'offer_unavailable' || 'not_found' => 'Esta opção já não está disponível.',
      'forbidden' => 'Só os convidados deste evento podem reservar.',
      'feature_locked' => 'As reservas de alojamento e transporte chegam em breve.',
      _ => 'Não foi possível abrir o pagamento. Tenta novamente.',
    };
