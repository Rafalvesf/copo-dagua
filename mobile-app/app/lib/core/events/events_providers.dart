import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../auth/auth_controller.dart';
import '../models/models.dart';
import '../supabase/supabase_config.dart';

/// Evento público ("Aberto a todos", migração 141) — só os campos que
/// o organizador mostra a toda a gente, nunca contactos.
class PublicEvent {
  final String weddingId;
  final EventType eventType;
  final String partnerName1;
  final String? partnerName2;
  final DateTime? date;
  final String? time;
  final String? venue;
  final String? location;
  final String? coverPhotoUrl;
  final String? welcomeMessage;
  final bool joined;
  final bool isPaid;
  final double? entryPrice;

  /// Evento que eu organizo (aparece também em Descobrir).
  final bool mine;

  /// Quantas pessoas já vão (migração 178; 0 antes de correr).
  final int goingCount;

  /// Limite de pessoas (migração 182; null = sem limite) e lugares ocupados.
  final int? maxAttendees;
  final int spotsTaken;

  bool get isFull => maxAttendees != null && spotsTaken >= maxAttendees!;
  int? get spotsLeft => maxAttendees == null ? null : (maxAttendees! - spotsTaken).clamp(0, maxAttendees!);

  const PublicEvent({
    required this.weddingId,
    required this.eventType,
    required this.partnerName1,
    this.partnerName2,
    this.date,
    this.time,
    this.venue,
    this.location,
    this.coverPhotoUrl,
    this.welcomeMessage,
    this.joined = false,
    this.isPaid = false,
    this.entryPrice,
    this.mine = false,
    this.goingCount = 0,
    this.maxAttendees,
    this.spotsTaken = 0,
  });

  /// "Grátis" ou "25 € por pessoa".
  String get priceLabel {
    if (!isPaid) return 'Grátis';
    final p = entryPrice;
    if (p == null) return 'Pago';
    final txt = p == p.roundToDouble() ? p.toStringAsFixed(0) : p.toStringAsFixed(2).replaceAll('.', ',');
    return '$txt € por pessoa';
  }

  String get displayNames =>
      partnerName2 == null || partnerName2!.isEmpty ? partnerName1 : '$partnerName1 & $partnerName2';

  String? get place => venue?.isNotEmpty == true ? venue : (location?.isNotEmpty == true ? location : null);

  factory PublicEvent.fromRow(Map<String, dynamic> r) {
    final d = r['wedding_date'] as String?;
    return PublicEvent(
      weddingId: r['wedding_id'] as String,
      eventType: EventType.fromDb(r['event_type'] as String?),
      partnerName1: (r['partner_name_1'] as String?) ?? 'Evento',
      partnerName2: r['partner_name_2'] as String?,
      date: d == null ? null : DateTime.parse(d),
      time: r['ceremony_time'] as String?,
      venue: r['venue'] as String?,
      location: r['location'] as String?,
      coverPhotoUrl: r['cover_photo_url'] as String?,
      welcomeMessage: r['welcome_message'] as String?,
      joined: r['joined'] == true,
      isPaid: r['is_paid'] == true,
      entryPrice: (r['entry_price'] as num?)?.toDouble(),
      mine: r['mine'] == true,
      goingCount: (r['going_count'] as num?)?.toInt() ?? 0,
      maxAttendees: (r['max_attendees'] as num?)?.toInt(),
      spotsTaken: (r['spots_taken'] as num?)?.toInt() ?? (r['going_count'] as num?)?.toInt() ?? 0,
    );
  }
}

/// Eventos públicos, incluindo os meus (marcados com `mine`).
/// Vazio enquanto a migração 141 não correu.
final publicEventsProvider = FutureProvider<List<PublicEvent>>((ref) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return const [];
  try {
    final rows = await supabase.rpc('list_public_events') as List;
    return [for (final r in rows.cast<Map<String, dynamic>>()) PublicEvent.fromRow(r)];
  } on PostgrestException {
    return const [];
  }
});

/// Junta a conta a um evento público e põe-na na lista de convidados.
Future<void> joinPublicEvent(String weddingId) async {
  await supabase.rpc('join_public_event', params: {'p_wedding': weddingId});
}

/// "Evento público" do evento que organizo (interruptor nas Definições).
final eventIsPublicProvider = FutureProvider.family<bool, String>((ref, weddingId) async {
  try {
    final row = await supabase.from('weddings').select('is_public').eq('id', weddingId).maybeSingle();
    return row?['is_public'] == true;
  } on PostgrestException {
    return false;
  }
});

Future<void> setEventPublic(String weddingId, bool value) async {
  await supabase.from('weddings').update({'is_public': value}).eq('id', weddingId);
}

/// Limite de pessoas do evento que organizo (migração 182; null = sem limite).
final eventMaxAttendeesProvider = FutureProvider.family<int?, String>((ref, weddingId) async {
  try {
    final row = await supabase.from('weddings').select('max_attendees').eq('id', weddingId).maybeSingle();
    return (row?['max_attendees'] as num?)?.toInt();
  } on PostgrestException {
    return null;
  }
});

/// O máximo de pessoas é um só número (pedido 2026-11-12): o limite de
/// entradas e os convidados previstos andam sempre juntos.
Future<void> setEventMaxAttendees(String weddingId, int? value) async {
  await supabase.from('weddings').update({
    'max_attendees': value,
    if (value != null) 'estimated_guests': value,
  }).eq('id', weddingId);
}

/// O evento já não tem lugares (`event_full`, migração 182).
bool isEventFull(Object e) => e is PostgrestException && e.message.contains('event_full');

/// Pedido para entrar num evento privado (migração 143): a pessoa já
/// entrou com o código/link; o organizador confirma ou recusa.
class JoinRequest {
  final String id;
  final String name;
  final String? email;
  final String? phone;
  final DateTime createdAt;

  /// Respostas dadas pelo link sem conta (162): vai?, acompanhantes,
  /// menu e alergias. `null` enquanto não respondeu.
  final Map<String, dynamic>? answers;

  const JoinRequest({required this.id, required this.name, this.email, this.phone, required this.createdAt, this.answers});

  factory JoinRequest.fromRow(Map<String, dynamic> r) => JoinRequest(
        id: r['id'] as String,
        name: (r['full_name'] as String?)?.trim().isNotEmpty == true ? r['full_name'] as String : 'Sem nome',
        email: r['email'] as String?,
        phone: r['phone'] as String?,
        createdAt: DateTime.parse(r['created_at'] as String),
        answers: (r['answers'] as Map?)?.cast<String, dynamic>(),
      );

  /// "Vai com 1 pessoa · Carne · sem alergias" — para o organizador decidir.
  String? get answerSummary {
    final a = answers;
    if (a == null) return null;
    if (a['attending'] == false) return 'Respondeu que não vai';
    final comps = ((a['companions'] as List?) ?? const []).whereType<Map>().toList();
    final dietary = (a['dietary'] as String?)?.trim();
    return [
      comps.isEmpty ? 'Vai sozinho/a' : 'Vai com ${comps.map((c) => c['name']).join(', ')}',
      if (a['menu'] != null) a['menu'] as String,
      dietary == null || dietary.isEmpty ? 'sem alergias' : dietary,
    ].join(' · ');
  }
}

final joinRequestsProvider = FutureProvider.family<List<JoinRequest>, String>((ref, weddingId) async {
  try {
    List rows;
    try {
      rows = await supabase
          .from('guest_join_requests')
          .select('id, full_name, email, phone, created_at, answers')
          .eq('wedding_id', weddingId)
          .order('created_at');
    } on PostgrestException {
      // Antes da migração 162 (sem `answers`).
      rows = await supabase
          .from('guest_join_requests')
          .select('id, full_name, email, phone, created_at')
          .eq('wedding_id', weddingId)
          .order('created_at');
    }
    return [for (final r in rows.cast<Map<String, dynamic>>()) JoinRequest.fromRow(r)];
  } on PostgrestException {
    return const [];
  }
});

/// O meu pedido está à espera neste evento?
final myJoinRequestPendingProvider = FutureProvider.family<bool, String>((ref, weddingId) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return false;
  try {
    final row = await supabase
        .from('guest_join_requests')
        .select('id')
        .eq('wedding_id', weddingId)
        .eq('profile_id', userId)
        .maybeSingle();
    return row != null;
  } on PostgrestException {
    return false;
  }
});

Future<void> reviewJoinRequest(String requestId, {required bool approve}) async {
  await supabase.rpc('review_join_request', params: {'p_request': requestId, 'p_approve': approve});
}

/// Entrada do evento que organizo: grátis ou preço por pessoa (142).
final eventEntryProvider = FutureProvider.family<({bool paid, double? price}), String>((ref, weddingId) async {
  try {
    final row = await supabase.from('weddings').select('is_paid, entry_price').eq('id', weddingId).maybeSingle();
    return (paid: row?['is_paid'] == true, price: (row?['entry_price'] as num?)?.toDouble());
  } on PostgrestException {
    return (paid: false, price: null);
  }
});

Future<void> setEventEntry(String weddingId, {required bool paid, double? price}) async {
  await supabase.from('weddings').update({'is_paid': paid, 'entry_price': paid ? price : null}).eq('id', weddingId);
}

/// O organizador já ativou os pagamentos (conta Stripe pronta para
/// receber o dinheiro dos bilhetes)? Antes de pôr preço numa entrada,
/// tem de os ativar em `/bilhetes/ativar` (pedido 2026-11-12).
Future<bool> organizerPaymentsReady() async {
  final id = supabase.auth.currentUser?.id;
  if (id == null) return false;
  try {
    final row = await supabase.from('profiles').select('stripe_charges_enabled').eq('id', id).maybeSingle();
    return row?['stripe_charges_enabled'] == true;
  } catch (_) {
    return false;
  }
}
