import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../guest_home/guest_home_providers.dart' show GuestCompanion;
import '../models/models.dart';
import '../supabase/supabase_config.dart';

/// Convite geral (migração 162): todos recebem o mesmo link do evento
/// (`/invite/<código>`) e respondem sem conta — nome, acompanhantes, menu
/// e alergias. A conta é sempre sugerida, nunca obrigatória.
class InviteEvent {
  final String weddingId;
  final String code;
  final EventType eventType;
  final String name1;
  final String? name2;
  final DateTime? date;
  final String? time;
  final String? venue;
  final String? location;
  final String? address;
  final double? latitude;
  final double? longitude;
  final String? coverPhotoUrl;
  final String? message;
  final List<ProgramItem> program;
  final String? dressCode;
  /// Cores do evento (dress code), em hex.
  final List<String> themeColors;
  final int maxCompanions;
  final bool isPaid;
  final double? entryPrice;
  final bool isPublic;

  const InviteEvent({
    required this.weddingId,
    required this.code,
    required this.eventType,
    required this.name1,
    this.name2,
    this.date,
    this.time,
    this.venue,
    this.location,
    this.address,
    this.latitude,
    this.longitude,
    this.coverPhotoUrl,
    this.message,
    this.program = const [],
    this.dressCode,
    this.themeColors = const [],
    this.maxCompanions = 0,
    this.isPaid = false,
    this.entryPrice,
    this.isPublic = false,
  });

  bool get isCouple => (name2 ?? '').trim().isNotEmpty;
  String get displayNames => isCouple ? '$name1 & $name2' : name1;

  factory InviteEvent.fromJson(Map<String, dynamic> j, String code) {
    String? s(String k) {
      final v = (j[k] as String?)?.trim();
      return v == null || v.isEmpty ? null : v;
    }

    final quote = s('welcome_message') ?? s('quote');
    return InviteEvent(
      weddingId: j['wedding_id'] as String,
      code: (j['guest_code'] as String?) ?? code.trim().toUpperCase(),
      eventType: EventType.fromDb(j['event_type'] as String?),
      name1: s('partner_name_1') ?? '',
      name2: s('partner_name_2'),
      date: j['wedding_date'] == null ? null : DateTime.tryParse(j['wedding_date'] as String),
      time: s('ceremony_time'),
      venue: s('venue'),
      location: s('location'),
      address: s('venue_address'),
      latitude: (j['venue_latitude'] as num?)?.toDouble(),
      longitude: (j['venue_longitude'] as num?)?.toDouble(),
      coverPhotoUrl: s('cover_photo_url'),
      message: quote,
      program: ProgramItem.listFrom(j['program']),
      dressCode: s('dress_code'),
      themeColors: [for (final c in (j['theme_colors'] as List?) ?? const []) if (c is String && c.trim().isNotEmpty) c.trim()],
      maxCompanions: (j['max_companions'] as num?)?.toInt() ?? 0,
      isPaid: j['is_paid'] == true,
      entryPrice: (j['entry_price'] as num?)?.toDouble(),
      isPublic: j['is_public'] == true,
    );
  }

  GuestWedding toGuestWedding() => GuestWedding(
        weddingId: weddingId,
        partnerName1: name1,
        partnerName2: name2,
        weddingDate: date,
        venue: venue,
        location: location,
        coverPhotoUrl: coverPhotoUrl,
        ceremonyTime: time,
        eventType: eventType,
        program: program,
        dressCode: dressCode,
        venueAddress: address,
        venueLatitude: latitude,
        venueLongitude: longitude,
      );
}

/// Só para as capturas de ecrã: devolve um convite de exemplo.
InviteEvent? Function(String code)? debugInviteEventLoader;

Future<InviteEvent?> loadInviteEvent(String code) async {
  final debug = debugInviteEventLoader;
  if (debug != null) return debug(code);
  try {
    final res = await supabase.rpc('get_public_event', params: {'p_code': code});
    if (res is! Map) return null;
    return InviteEvent.fromJson(res.cast<String, dynamic>(), code);
  } catch (_) {
    // Antes da migração 162: só nomes, data, local e foto (075).
    final rows = await supabase.rpc('get_public_invite', params: {'p_code': code}) as List;
    if (rows.isEmpty) return null;
    return InviteEvent.fromJson((rows.first as Map).cast<String, dynamic>(), code);
  }
}

/// O que a pessoa já respondeu neste telemóvel (pelo token guardado).
class MyInviteAnswer {
  final String token;

  /// pending | confirmed | declined | awaiting_approval |
  /// awaiting_approval_confirmed | awaiting_approval_declined
  final String state;
  final String name;
  final int maxCompanions;
  final String? menu;
  final String? dietary;
  final String ageGroup;
  final List<GuestCompanion> companions;

  const MyInviteAnswer({
    required this.token,
    required this.state,
    required this.name,
    this.maxCompanions = 0,
    this.menu,
    this.dietary,
    this.ageGroup = 'adult',
    this.companions = const [],
  });

  bool get awaitingApproval => state.startsWith('awaiting_approval');
  bool get answered => state == 'confirmed' || state == 'declined' || state.startsWith('awaiting_approval_');
  bool get declined => state == 'declined' || state == 'awaiting_approval_declined';

  Guest toGuest(String weddingId) => Guest(
        id: '',
        weddingId: weddingId,
        name: name,
        maxCompanions: maxCompanions,
        plusOneAllowed: maxCompanions > 0,
        ageGroup: ageGroup,
        menuSelection: menu,
        dietaryRestrictions: dietary,
        rsvpToken: token,
      );
}

class InviteRsvpError implements Exception {
  /// invalid_name | ticket_required | rate_limited | not_found | unknown
  final String code;
  const InviteRsvpError(this.code);
}

/// Começa a resposta só com o nome. Devolve o token (guardado no
/// telemóvel) e se fica à espera do organizador (evento privado).
Future<({String token, bool pending, int maxCompanions})> startPublicRsvp(String code, String name) async {
  try {
    final res = await supabase.rpc('start_public_rsvp', params: {'p_code': code, 'p_name': name});
    final m = (res as Map).cast<String, dynamic>();
    final token = m['token'] as String;
    await _saveToken(code, token);
    return (token: token, pending: m['pending'] == true, maxCompanions: (m['max_companions'] as num?)?.toInt() ?? 0);
  } catch (e) {
    final msg = e.toString();
    for (final c in const ['invalid_name', 'ticket_required', 'rate_limited', 'not_found']) {
      if (msg.contains(c)) throw InviteRsvpError(c);
    }
    throw const InviteRsvpError('unknown');
  }
}

/// "Não vou poder": recusa logo, sem mais perguntas.
Future<void> declinePublicRsvp(String token) => supabase.rpc('submit_rsvp_full', params: {
      'p_token': token,
      'p_attending': false,
      'p_menu': null,
      'p_dietary': null,
      'p_age_group': null,
      'p_side': null,
      'p_group_label': null,
      'p_message': null,
      'p_companions': null,
    });

Future<MyInviteAnswer?> loadMyInviteAnswer(String code) async {
  final token = await storedInviteToken(code);
  if (token == null) return null;
  try {
    final res = await supabase.rpc('get_public_rsvp', params: {'p_token': token});
    if (res is! Map) {
      // O organizador recusou ou apagou: esquece o token.
      await _forgetToken(code);
      return null;
    }
    final m = res.cast<String, dynamic>();
    final allergies = (m['dietary'] as String?)?.trim();
    return MyInviteAnswer(
      token: token,
      state: (m['state'] as String?) ?? 'pending',
      name: (m['name'] as String?) ?? '',
      maxCompanions: (m['max_companions'] as num?)?.toInt() ?? 0,
      menu: m['menu'] as String?,
      dietary: allergies == null || allergies.isEmpty ? null : allergies,
      ageGroup: (m['age_group'] as String?) ?? 'adult',
      companions: [
        for (final c in ((m['companions'] as List?) ?? const []).whereType<Map>())
          GuestCompanion(
            name: (c['name'] as String?) ?? '',
            ageGroup: (c['age_group'] as String?) ?? 'adult',
            isChild: c['age_group'] == 'child',
            childAge: (c['child_age'] as num?)?.toInt(),
            menu: c['menu'] as String?,
            allergies: ((c['allergies'] as List?) ?? const []).whereType<String>().toList(),
          ),
      ],
    );
  } catch (_) {
    return null;
  }
}

// ---------- tokens guardados no telemóvel ----------

const _tokensKey = 'public_rsvp_tokens';

Future<Map<String, String>> _tokens() async {
  try {
    final raw = (await SharedPreferences.getInstance()).getString(_tokensKey);
    if (raw == null) return {};
    return (jsonDecode(raw) as Map).map((k, v) => MapEntry(k as String, v as String));
  } catch (_) {
    return {};
  }
}

Future<void> _writeTokens(Map<String, String> t) async {
  try {
    await (await SharedPreferences.getInstance()).setString(_tokensKey, jsonEncode(t));
  } catch (_) {}
}

Future<String?> storedInviteToken(String code) async => (await _tokens())[code.trim().toUpperCase()];

Future<void> _saveToken(String code, String token) async {
  final t = await _tokens();
  t[code.trim().toUpperCase()] = token;
  await _writeTokens(t);
}

Future<void> _forgetToken(String code) async {
  final t = await _tokens();
  t.remove(code.trim().toUpperCase());
  await _writeTokens(t);
}

const _claimKey = 'public_rsvp_claim';

/// "Criar conta" a partir de um convite já respondido: marca essa
/// resposta para ser ligada à conta que se criar ou entrar a seguir.
/// Só estas — num telemóvel partilhado, outra pessoa que entre não fica
/// com as respostas de quem respondeu sem conta.
Future<void> markInviteClaim(String code) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final set = {...(prefs.getStringList(_claimKey) ?? const <String>[]), code.trim().toUpperCase()};
    await prefs.setStringList(_claimKey, set.toList());
    await prefs.setString('${_claimKey}_at', DateTime.now().toIso8601String());
  } catch (_) {}
}

/// Depois de entrar ou criar conta: liga à conta as respostas marcadas
/// com [markInviteClaim] na última hora (`claim_public_rsvp`). Nunca
/// bloqueia o login.
Future<void> claimStoredPublicRsvps() async {
  if (supabase.auth.currentUser == null) return;
  List<String> codes;
  try {
    final prefs = await SharedPreferences.getInstance();
    codes = prefs.getStringList(_claimKey) ?? const [];
    final at = DateTime.tryParse(prefs.getString('${_claimKey}_at') ?? '');
    await prefs.remove(_claimKey);
    await prefs.remove('${_claimKey}_at');
    if (at == null || DateTime.now().difference(at) > const Duration(hours: 1)) return;
  } catch (_) {
    return;
  }
  if (codes.isEmpty) return;
  final t = await _tokens();
  for (final code in codes) {
    final token = t[code];
    if (token == null) continue;
    try {
      await supabase.rpc('claim_public_rsvp', params: {'p_token': token});
    } catch (_) {}
  }
}

// ---------- código à espera de a app ser instalada ----------

/// "Descarregar a app" no convite: o código fica guardado e, ao abrir a
/// app instalada pela primeira vez, o convite abre sozinho (canvas
/// "2b · Na app: código já aplicado"). Vale 7 dias.
class PendingInvite {
  static const _key = 'pending_invite_code';
  static String? _code;

  static Future<void> load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final v = prefs.getString(_key);
      final at = DateTime.tryParse(prefs.getString('${_key}_at') ?? '');
      if (v != null && at != null && DateTime.now().difference(at) < const Duration(days: 7)) {
        _code = v;
      } else {
        await prefs.remove(_key);
      }
    } catch (_) {}
  }

  static void save(String code) {
    _code = code.trim().toUpperCase();
    SharedPreferences.getInstance().then((p) {
      p.setString(_key, _code!);
      p.setString('${_key}_at', DateTime.now().toIso8601String());
    }).catchError((_) {});
  }

  static String? get code => _code;

  /// Devolve e esquece.
  static String? take() {
    final v = _code;
    _code = null;
    SharedPreferences.getInstance().then((p) => p.remove(_key)).catchError((_) => false);
    return v;
  }
}
