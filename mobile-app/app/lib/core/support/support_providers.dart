import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../home/home_providers.dart';
import '../models/models.dart';
import '../partner_app/partner_app_providers.dart';
import '../supabase/supabase_config.dart';

/// Cria um pedido de suporte real (`support_tickets`,
/// 047_support_tickets.sql) — usado tanto pelo casal como pelo
/// parceiro, distinguidos só por `user_id = auth.uid()` (a policy RLS
/// já garante isto, não é preciso passar o id explicitamente).
/// `category = disputeDelay` é a mesma tabela, só uma categoria — sem
/// módulo `admin-web/disputes/` separado, pedido explícito do
/// utilizador.
Future<void> createSupportTicket(
  WidgetRef ref, {
  required String subject,
  required String description,
  SupportTicketCategory category = SupportTicketCategory.general,
  String? bookingId,
}) async {
  final userId = supabase.auth.currentUser?.id;
  if (userId == null) return;
  await supabase.from('support_tickets').insert({
    'user_id': userId,
    'subject': subject,
    'description': description,
    'category': category.toDb(),
    if (bookingId != null) 'booking_id': bookingId,
  });
  ref.invalidate(coupleSupportTicketsProvider);
  ref.invalidate(partnerSupportTicketsProvider);
}
