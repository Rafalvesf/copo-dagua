import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Notificações reais para o parceiro (`notifications.partner_id`,
/// `063_cancellation_notifications.sql`) — antes desta migração
/// `notifications` só servia o casal (`wedding_id`), o parceiro não
/// tinha nenhuma forma de saber que uma reserva foi cancelada sem abrir
/// a lista de reservas manualmente. Âmbito deliberadamente pequeno
/// (lista simples, sem os separadores Todas/Não lidas/Lidas do sino do
/// casal em `home_feed_screen.dart`) — só o essencial para fechar
/// "notificações para ambas as partes" do checklist de cancelamento.
class PartnerNotification {
  final String id;
  final String title;
  final String? body;
  final bool read;
  final DateTime createdAt;

  const PartnerNotification({
    required this.id,
    required this.title,
    this.body,
    required this.read,
    required this.createdAt,
  });
}

final partnerNotificationsProvider = FutureProvider<List<PartnerNotification>>((
  ref,
) async {
  final partnerId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (partnerId == null) return const [];

  final rows = await supabase
      .from('notifications')
      .select('id, title, body, read, created_at')
      .eq('partner_id', partnerId)
      .order('created_at', ascending: false)
      .limit(50);

  return rows
      .map(
        (r) => PartnerNotification(
          id: r['id'] as String,
          title: r['title'] as String,
          body: r['body'] as String?,
          read: r['read'] as bool? ?? false,
          createdAt: DateTime.parse(r['created_at'] as String),
        ),
      )
      .toList();
});

final partnerUnreadNotificationsCountProvider = Provider<int>((ref) {
  return ref
      .watch(partnerNotificationsProvider)
      .maybeWhen(
        data: (list) => list.where((n) => !n.read).length,
        orElse: () => 0,
      );
});

Future<void> markPartnerNotificationRead(String id) async {
  await supabase.from('notifications').update({'read': true}).eq('id', id);
}
