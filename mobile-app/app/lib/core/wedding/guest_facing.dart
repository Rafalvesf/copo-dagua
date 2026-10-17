import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../models/models.dart' show ProgramItem;
import '../supabase/supabase_config.dart';

/// O que os convidados veem do casamento e que até agora não tinha onde
/// ser editado pelo casal: hora da cerimónia e mensagem de boas-vindas
/// (`067_guest_self_service.sql`) e presentes (`075_connect_remaining.sql`).
class GuestFacingInfo {
  final String? ceremonyTime;
  final String? welcomeMessage;
  final String? giftListUrl;
  final String? giftIban;
  final String? giftMessage;

  /// `false` quando a migração 075 ainda não correu — os campos de
  /// presentes ficam escondidos em vez de falharem ao guardar.
  final bool giftsAvailable;

  /// `weddings.guest_join_mode` (071/076): 'code_open', 'code_with_match'
  /// ou 'invite_only'.
  final String? joinMode;

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
    this.programAvailable = false,
  });

  /// Programa (085): momentos, dress code e morada do local.
  final List<ProgramItem> program;
  final String? dressCode;
  final String? venueAddress;

  /// `false` quando a migração 085 ainda não correu.
  final bool programAvailable;
}

const _base = 'ceremony_time, welcome_message, guest_join_mode';
const _gifts = 'gift_list_url, gift_iban, gift_message';

const _program = 'program, dress_code, venue_address';

Future<GuestFacingInfo> loadGuestFacingInfo(String weddingId) async {
  try {
    final r = await supabase.from('weddings').select('$_base, $_gifts, $_program').eq('id', weddingId).single();
    return GuestFacingInfo(
      ceremonyTime: r['ceremony_time'] as String?,
      welcomeMessage: r['welcome_message'] as String?,
      giftListUrl: r['gift_list_url'] as String?,
      giftIban: r['gift_iban'] as String?,
      giftMessage: r['gift_message'] as String?,
      joinMode: r['guest_join_mode'] as String?,
      program: ProgramItem.listFrom(r['program']),
      dressCode: r['dress_code'] as String?,
      venueAddress: r['venue_address'] as String?,
      programAvailable: true,
    );
  } on PostgrestException {
    // 085 por correr — continua abaixo.
  }
  try {
    final r = await supabase.from('weddings').select('$_base, $_gifts').eq('id', weddingId).single();
    return GuestFacingInfo(
      ceremonyTime: r['ceremony_time'] as String?,
      welcomeMessage: r['welcome_message'] as String?,
      giftListUrl: r['gift_list_url'] as String?,
      giftIban: r['gift_iban'] as String?,
      giftMessage: r['gift_message'] as String?,
      joinMode: r['guest_join_mode'] as String?,
    );
  } on PostgrestException {
    final r = await supabase.from('weddings').select(_base).eq('id', weddingId).single();
    return GuestFacingInfo(
      ceremonyTime: r['ceremony_time'] as String?,
      welcomeMessage: r['welcome_message'] as String?,
      joinMode: r['guest_join_mode'] as String?,
      giftsAvailable: false,
    );
  }
}

String? _clean(String? v) => (v == null || v.trim().isEmpty) ? null : v.trim();

Future<void> saveGuestFacingInfo(String weddingId, GuestFacingInfo info) async {
  await supabase.from('weddings').update({
    'ceremony_time': _clean(info.ceremonyTime),
    'welcome_message': _clean(info.welcomeMessage),
    if (info.joinMode != null) 'guest_join_mode': info.joinMode,
    if (info.programAvailable) ...{
      'program': [for (final i in info.program) if (!i.isEmpty) i.toJson()],
      'dress_code': _clean(info.dressCode),
      'venue_address': _clean(info.venueAddress),
    },
    if (info.giftsAvailable) ...{
      'gift_list_url': _clean(info.giftListUrl),
      'gift_iban': _clean(info.giftIban),
      'gift_message': _clean(info.giftMessage),
    },
    'updated_at': DateTime.now().toIso8601String(),
  }).eq('id', weddingId);
}
