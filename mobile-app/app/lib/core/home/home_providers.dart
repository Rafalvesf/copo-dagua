import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../models/models.dart';
import '../supabase/supabase_config.dart';

/// Providers para o painel do casal (`home_feed_screen.dart`) — mesmo
/// padrão de `core/partner_app/partner_app_providers.dart`, num ficheiro
/// próprio porque não existe ainda um "core/home_app" equivalente ao
/// `core/partner_app` (o lado casal está espalhado por
/// `core/wedding`, `core/budget`, `core/checklist`, cada módulo com o
/// seu próprio provider — este ficheiro cobre só o que é novo para o
/// dashboard, não substitui os outros).
///
/// Liga-se à tabela `bookings` real (`database/migrations/009_quotations_bookings.sql`)
/// — substitui `MockBackend.listBookingsForCouple`. Filtra por `couple_id`
/// (não por `wedding_id`) porque é assim que a RLS de `bookings` decide
/// visibilidade (`Participants can view bookings`) — filtrar pela mesma
/// coluna evita depender de `weddingControllerProvider` já ter carregado.
/// Ver `ROADMAP.md`, 2026-08-31, Fase 4.
final coupleBookingsProvider = FutureProvider<List<CoupleBooking>>((ref) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return const [];

  final rows = await supabase
      .from('bookings')
      .select(
        'id, wedding_id, event_date, total_amount, deposit_amount, status, '
        'partner_profiles(business_name, cover_photo_url, partner_profile_categories(partner_categories(label_pt))), '
        'payments(id, type, status, amount)',
      )
      .eq('couple_id', userId)
      .order('event_date', ascending: true);

  return rows.map<CoupleBooking>(_coupleBookingFromRow).toList();
});

CoupleBooking _coupleBookingFromRow(Map<String, dynamic> row) {
  final partner = row['partner_profiles'] as Map<String, dynamic>?;
  final categoryLinks =
      (partner?['partner_profile_categories'] as List?) ?? const [];
  final firstCategory = categoryLinks.isEmpty
      ? null
      : (categoryLinks.first as Map<String, dynamic>)['partner_categories']
            as Map<String, dynamic>?;

  final payments = (row['payments'] as List?) ?? const [];
  final pendingDeposit = payments.cast<Map<String, dynamic>>().firstWhere(
    (p) => p['type'] == 'deposit' && p['status'] == 'pending',
    orElse: () => const {},
  );
  final pendingFinalPayment = payments.cast<Map<String, dynamic>>().firstWhere(
    (p) => p['type'] == 'final_payment' && p['status'] == 'pending',
    orElse: () => const {},
  );

  return CoupleBooking(
    id: row['id'] as String,
    weddingId: row['wedding_id'] as String,
    partnerName: (partner?['business_name'] as String?) ?? 'Parceiro',
    partnerLogoUrl: partner?['cover_photo_url'] as String?,
    category: firstCategory?['label_pt'] as String?,
    serviceDate: DateTime.parse(row['event_date'] as String),
    amount: (row['total_amount'] as num).toDouble(),
    status: mapRealBookingStatus(row['status'] as String),
    pendingDepositPaymentId: pendingDeposit['id'] as String?,
    depositAmount: (row['deposit_amount'] as num?)?.toDouble(),
    pendingFinalPaymentId: pendingFinalPayment['id'] as String?,
    finalPaymentAmount: (pendingFinalPayment['amount'] as num?)?.toDouble(),
  );
}

/// Propostas reais (`proposals`, `009_quotations_bookings.sql`) enviadas
/// por um parceiro e ainda por aceitar/recusar pelo casal — até
/// `send_proposal_screen.dart` (lado parceiro) existir não havia nenhuma
/// forma real de chegar a uma linha aqui; sem isto o casal nunca tinha
/// nada para aceitar e `bookings` ficava sempre vazia. `status = 'sent'`
/// só — `accepted`/`rejected`/`expired` já não interessam nesta lista.
final pendingProposalsProvider = FutureProvider<List<ReceivedProposal>>((
  ref,
) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return const [];

  final rows = await supabase
      .from('proposals')
      .select(
        'id, title, description, price, deposit_amount, '
        'quote_requests(wedding_id, event_date), '
        'partner_profiles(business_name, partner_profile_categories(partner_categories(label_pt)))',
      )
      .eq('couple_id', userId)
      .eq('status', 'sent')
      .order('created_at', ascending: false);

  return rows.map<ReceivedProposal>(_receivedProposalFromRow).toList();
});

ReceivedProposal _receivedProposalFromRow(Map<String, dynamic> row) {
  final partner = row['partner_profiles'] as Map<String, dynamic>?;
  final quoteRequest = row['quote_requests'] as Map<String, dynamic>?;
  final categoryLinks =
      (partner?['partner_profile_categories'] as List?) ?? const [];
  final firstCategory = categoryLinks.isEmpty
      ? null
      : (categoryLinks.first as Map<String, dynamic>)['partner_categories']
            as Map<String, dynamic>?;
  final eventDate = quoteRequest?['event_date'] as String?;

  return ReceivedProposal(
    id: row['id'] as String,
    weddingId: quoteRequest?['wedding_id'] as String,
    partnerName: (partner?['business_name'] as String?) ?? 'Parceiro',
    category: firstCategory?['label_pt'] as String?,
    title: row['title'] as String,
    description: row['description'] as String?,
    price: (row['price'] as num).toDouble(),
    depositAmount: (row['deposit_amount'] as num).toDouble(),
    eventDate: eventDate == null ? null : DateTime.parse(eventDate),
  );
}

/// Aceita a proposta (`accept_proposal()`) — cria a linha real em
/// `bookings`. Quem chama é responsável por invalidar
/// [pendingProposalsProvider] e [coupleBookingsProvider] depois (mesmo
/// padrão de `acceptProposal` não guardar estado próprio, ver
/// `couple_bookings_screen.dart`).
Future<void> acceptProposal(String proposalId) async {
  await supabase.rpc('accept_proposal', params: {'p_proposal_id': proposalId});
}

/// Cancela uma booking em curso pelo lado do casal
/// (`059_cancel_booking.sql`) — `backend/bookings/tasks.md`,
/// "cancel_booking_by_couple()/cancel_booking_by_partner()". Quem chama
/// é responsável por invalidar [coupleBookingsProvider] depois, mesmo
/// padrão de [acceptProposal].
Future<void> cancelBookingByCouple(String bookingId, {String? reason}) async {
  await supabase.rpc(
    'cancel_booking_by_couple',
    params: {'p_booking_id': bookingId, 'p_reason': reason},
  );
}

/// Estado atual de uma proposta (`proposals.status`) — usado quando
/// `accept_proposal()` falha com `P0001` (`invalid_state`) para
/// distinguir "já foi aceite noutro ecrã" (sem culpa nenhuma, só a UI
/// que estava desatualizada — `pendingProposalsProvider`/o cartão do
/// chat não sabem em tempo real do que acontece no outro) de "foi
/// recusada/expirou" (esse sim um erro real a mostrar). Bug real
/// reportado pelo utilizador (2026-09-05): aceitar pelo chat depois de
/// já ter aceite pelas Reservas dava "não está disponível" em vez de
/// simplesmente refletir que já estava aceite.
Future<String?> fetchProposalStatus(String proposalId) async {
  final row = await supabase
      .from('proposals')
      .select('status')
      .eq('id', proposalId)
      .maybeSingle();
  return row?['status'] as String?;
}

/// `booking_status` real (`database/migrations/009_quotations_bookings.sql`)
/// -> [BookingStatus] de mock, reutilizado nos ecrãs existentes
/// (`StatusPill`/`bookingStatusColor`) sem os reescrever. `awaiting_deposit`/
/// `payment_overdue`/`disputed` caem em [BookingStatus.emAnalise] — ainda
/// não confirmados, mas já lá para além de "novo" (que só existe do lado
/// `quote_requests`, ver `partnerBookingsProvider`).
BookingStatus mapRealBookingStatus(String status) => switch (status) {
  'awaiting_deposit' => BookingStatus.aceite,
  'confirmed' => BookingStatus.confirmado,
  'completed' => BookingStatus.concluido,
  'expired' ||
  'cancelled_by_couple' ||
  'cancelled_by_partner' => BookingStatus.recusado,
  _ => BookingStatus.emAnalise,
};

/// Abre o checkout Stripe hospedado para o sinal de uma reserva — chama
/// a Edge Function `create-deposit-checkout`
/// (`supabase/functions/create-deposit-checkout/`, ver
/// `mobile-app/payments/stripe-connect.md`) e devolve o URL a abrir no
/// browser. `success_url`/`cancel_url` usam um esquema próprio
/// (`copodagua://`) para o caso de vir a existir deep linking — ainda
/// não está registado em nenhuma plataforma, por isso o retorno à app
/// não é automático ainda; o pagamento em si e a confirmação via webhook
/// não dependem disso.
Future<String> createDepositCheckoutUrl(String paymentId) async {
  final response = await supabase.functions.invoke(
    'create-deposit-checkout',
    body: {
      'payment_id': paymentId,
      'success_url': 'copodagua://payment-success',
      'cancel_url': 'copodagua://payment-cancelled',
    },
  );
  final data = response.data as Map<String, dynamic>?;
  final url = data?['url'] as String?;
  if (url == null) {
    throw Exception('Checkout sem URL devolvido');
  }
  return url;
}

/// `platform_settings.platform_commission_percentage` — legível por
/// qualquer autenticado (`019_platform_settings.sql`). Usado só para
/// mostrar ao casal, antes de abrir o checkout, o valor exato que a
/// Stripe vai cobrar (ver [amountWithCommission]).
final platformCommissionPercentageProvider = FutureProvider<double>((
  ref,
) async {
  final row = await supabase
      .from('platform_settings')
      .select('platform_commission_percentage')
      .eq('id', 1)
      .single();
  return (row['platform_commission_percentage'] as num).toDouble();
});

/// `platform_settings.deposit_percentage` (`062_deposit_and_cancellation_rules.sql`)
/// — o sinal deixou de ser um valor livre que o parceiro escrevia
/// (`send_proposal_screen.dart` antigo); passou a ser sempre calculado a
/// partir desta percentagem, só editável pelo administrador
/// (`/admin/commissions`). Usado aqui só para mostrar ao parceiro, antes
/// de enviar, o valor exato que `send_proposal()` vai calcular a seguir.
final platformDepositPercentageProvider = FutureProvider<double>((ref) async {
  final row = await supabase
      .from('platform_settings')
      .select('deposit_percentage')
      .eq('id', 1)
      .single();
  return (row['deposit_percentage'] as num).toDouble();
});

/// Valor que o casal paga de facto — o valor do parceiro mais a
/// comissão da plataforma por cima (pedido explícito do utilizador,
/// 2026-09-05: "ao valor que o parceiro cobra nós adicionamos a nossa
/// comissão sobre o valor"; o parceiro continua a receber
/// `partnerAmount` por inteiro). Mesma matemática em cêntimos que
/// `supabase/functions/create-deposit-checkout/index.ts` — tem de dar
/// exatamente o mesmo valor que a Stripe vai mostrar a seguir, nunca só
/// uma aproximação.
double amountWithCommission(double partnerAmount, double commissionPercentage) {
  final partnerCents = (partnerAmount * 100).round();
  final feeCents = (partnerCents * commissionPercentage / 100).round();
  return (partnerCents + feeCents) / 100;
}

final coupleSupportTicketsProvider = FutureProvider<List<SupportTicket>>((
  ref,
) async {
  final userId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (userId == null) return const [];
  final rows = await supabase
      .from('support_tickets')
      .select()
      .eq('user_id', userId)
      .order('created_at', ascending: false);
  return (rows as List)
      .map((r) => SupportTicket.fromRow(r as Map<String, dynamic>))
      .toList();
});
