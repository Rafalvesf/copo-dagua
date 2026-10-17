import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';

/// Convite do par por link (`079_partner_invite_link.sql`).

/// Token aberto antes de ter sessão — aplicado pelo `AuthController`
/// assim que a pessoa entra ou cria conta.
class PendingPartnerInviteNotifier extends Notifier<String?> {
  @override
  String? build() => null;

  void set(String? token) => state = token;
}

final pendingPartnerInviteProvider =
    NotifierProvider<PendingPartnerInviteNotifier, String?>(PendingPartnerInviteNotifier.new);

/// Nomes do casal e se o link ainda é válido — `null` se o link não existe.
Future<({String names, bool valid})?> fetchPartnerInvite(String token) async {
  final rows = await supabase.rpc('get_partner_invite', params: {'p_token': token}) as List;
  if (rows.isEmpty) return null;
  final r = rows.first as Map<String, dynamic>;
  final n1 = (r['partner_name_1'] as String?) ?? '';
  final n2 = r['partner_name_2'] as String?;
  return (
    names: (n2 == null || n2.isEmpty) ? n1 : '$n1 & $n2',
    valid: r['valid'] as bool? ?? false,
  );
}

Future<String> acceptPartnerInvite(String token) async {
  final id = await supabase.rpc('accept_partner_invite', params: {'p_token': token});
  return id as String;
}
