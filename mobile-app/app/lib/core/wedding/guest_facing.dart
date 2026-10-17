import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../models/models.dart' show ProgramItem;
import '../supabase/supabase_config.dart';

/// O que os convidados veem do casamento e o casal edita em "Para os
/// convidados": entrada (071/076), boas-vindas e hora (067), presentes
/// (075), programa, dress code e morada (085) e coordenadas do local
/// (087).
class GuestFacingInfo {
  final String? ceremonyTime;
  final String? welcomeMessage;
  final String? giftListUrl;
  final String? giftIban;
  final String? giftMessage;

  /// `false` quando a migração 075 ainda não correu.
  final bool giftsAvailable;

  /// `weddings.guest_join_mode`: 'code_open', 'code_with_match' ou
  /// 'invite_only'.
  final String? joinMode;

  final List<ProgramItem> program;
  final String? dressCode;
  final String? venueAddress;
  final List<String> themeColors;
  final double? venueLatitude;
  final double? venueLongitude;

  /// `false` quando a migração 085 ainda não correu.
  final bool programAvailable;

  /// `false` quando a 087 ainda não correu (sem coordenadas).
  final bool coordsAvailable;

  const GuestFacingInfo({
    this.joinMode,
    this.ceremonyTime,
    this.welcomeMessage,
    this.giftListUrl,
    this.giftIban,
    this.giftMessage,
    this.giftsAvailable = true,
    this.program = const [],
    this.dressCode,
    this.venueAddress,
    this.themeColors = const [],
    this.venueLatitude,
    this.venueLongitude,
    this.programAvailable = false,
    this.coordsAvailable = false,
  });
}

const _base = 'ceremony_time, welcome_message, guest_join_mode, theme_colors';
const _gifts = 'gift_list_url, gift_iban, gift_message';
const _program = 'program, dress_code, venue_address';
const _coords = 'venue_latitude, venue_longitude';

Future<GuestFacingInfo> loadGuestFacingInfo(String weddingId) async {
  // Do mais novo para o mais antigo: cada nível cai para o anterior se
  // a migração correspondente ainda não correu.
  final tiers = [
    '$_base, $_gifts, $_program, $_coords',
    '$_base, $_gifts, $_program',
    '$_base, $_gifts',
    _base,
  ];
  for (var i = 0; i < tiers.length; i++) {
    try {
      final r = await supabase.from('weddings').select(tiers[i]).eq('id', weddingId).single();
      return GuestFacingInfo(
        ceremonyTime: r['ceremony_time'] as String?,
        welcomeMessage: r['welcome_message'] as String?,
        joinMode: r['guest_join_mode'] as String?,
        themeColors: (r['theme_colors'] as List?)?.cast<String>() ?? const [],
        giftListUrl: r['gift_list_url'] as String?,
        giftIban: r['gift_iban'] as String?,
        giftMessage: r['gift_message'] as String?,
        giftsAvailable: i <= 2,
        program: ProgramItem.listFrom(r['program']),
        dressCode: r['dress_code'] as String?,
        venueAddress: r['venue_address'] as String?,
        programAvailable: i <= 1,
        venueLatitude: (r['venue_latitude'] as num?)?.toDouble(),
        venueLongitude: (r['venue_longitude'] as num?)?.toDouble(),
        coordsAvailable: i == 0,
      );
    } on PostgrestException {
      if (i == tiers.length - 1) rethrow;
    }
  }
  throw StateError('unreachable');
}

String? _clean(String? v) => (v == null || v.trim().isEmpty) ? null : v.trim();

Future<void> saveGuestFacingInfo(String weddingId, GuestFacingInfo info) async {
  await supabase.from('weddings').update({
    'ceremony_time': _clean(info.ceremonyTime),
    'welcome_message': _clean(info.welcomeMessage),
    'theme_colors': info.themeColors,
    if (info.joinMode != null) 'guest_join_mode': info.joinMode,
    if (info.programAvailable) ...{
      'program': [for (final i in info.program) if (!i.isEmpty) i.toJson()],
      'dress_code': _clean(info.dressCode),
      'venue_address': _clean(info.venueAddress),
    },
    if (info.coordsAvailable) ...{
      'venue_latitude': info.venueLatitude,
      'venue_longitude': info.venueLongitude,
    },
    if (info.giftsAvailable) ...{
      'gift_list_url': _clean(info.giftListUrl),
      'gift_iban': _clean(info.giftIban),
      'gift_message': _clean(info.giftMessage),
    },
    'updated_at': DateTime.now().toIso8601String(),
  }).eq('id', weddingId);
}
