import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Dados de faturação opcionais (migração 132): NIF e nome que aparecem
/// nas faturas da taxa de serviço. Sem NIF a fatura sai como
/// "Consumidor final".
class BillingDetails {
  final String? nif;
  final String? name;
  const BillingDetails({this.nif, this.name});
}

final billingDetailsProvider = FutureProvider<BillingDetails>((ref) async {
  final me = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (me == null) return const BillingDetails();
  try {
    final row = await supabase.from('billing_details').select('nif, name').eq('profile_id', me).maybeSingle();
    return BillingDetails(nif: row?['nif'] as String?, name: row?['name'] as String?);
  } catch (_) {
    return const BillingDetails();
  }
});

/// NIF português válido (9 dígitos + dígito de controlo).
bool isValidNif(String raw) {
  final n = raw.replaceAll(RegExp(r'\s'), '');
  if (!RegExp(r'^[0-9]{9}$').hasMatch(n)) return false;
  if (!'1235689'.contains(n[0]) && !['45', '70', '71', '72', '74', '75', '77', '79', '90', '91', '98', '99'].contains(n.substring(0, 2))) {
    return false;
  }
  var sum = 0;
  for (var i = 0; i < 8; i++) {
    sum += int.parse(n[i]) * (9 - i);
  }
  final check = 11 - sum % 11;
  return int.parse(n[8]) == (check >= 10 ? 0 : check);
}

Future<void> saveBillingDetails(WidgetRef ref, {String? nif, String? name}) async {
  final me = ref.read(authControllerProvider).profile?.id;
  if (me == null) return;
  final n = nif?.replaceAll(RegExp(r'\s'), '');
  await supabase.from('billing_details').upsert({
    'profile_id': me,
    'nif': (n == null || n.isEmpty) ? null : n,
    'name': (name == null || name.trim().isEmpty) ? null : name.trim(),
    'updated_at': DateTime.now().toUtc().toIso8601String(),
  });
  ref.invalidate(billingDetailsProvider);
}
