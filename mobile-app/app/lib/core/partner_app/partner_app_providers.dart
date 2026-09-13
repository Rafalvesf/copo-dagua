import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FileOptions;

import '../auth/auth_controller.dart';
import '../home/home_providers.dart' show mapRealBookingStatus;
import '../mock/mock_backend.dart';
import '../models/models.dart';
import '../supabase/supabase_config.dart';

String _partnerId(Ref ref) =>
    ref.watch(authControllerProvider.select((s) => s.profile!.id));

/// União de `quote_requests` ("Recebidos" — ainda sem reserva) e
/// `bookings` (Confirmados/Concluídos) — substitui
/// `MockBackend.listBookingsForPartner`. As duas tabelas reais mapeiam
/// para o mesmo [Booking] de mock para não obrigar a reescrever
/// `partner_bookings_screen.dart`/`partner_calendar_screen.dart`/
/// `booking_detail_screen.dart`, que já filtram por [BookingStatus] em
/// vez de saberem de que tabela cada linha veio (ver
/// [Booking.fromQuoteRequest] para as ações que precisam de distinguir).
/// `accepted` é excluído do lado de `quote_requests` porque
/// `accept_proposal()` já cria a linha equivalente em `bookings` — incluir
/// os dois lados duplicaria o mesmo pedido. Ver `ROADMAP.md`, 2026-08-31,
/// Fase 4.
final partnerBookingsProvider = FutureProvider.family<List<Booking>, BookingStatus?>((
  ref,
  status,
) async {
  final partnerId = _partnerId(ref);
  final categoryLabels = ref.watch(
    authControllerProvider.select((s) => s.profile?.categoryLabels),
  );
  // Nem `quote_requests` nem `bookings` guardam a categoria do pedido em
  // concreto (um parceiro é contactado como entidade, não por categoria) —
  // só é seguro assumir uma categoria específica quando o parceiro só tem
  // uma. Com várias, mostrar sempre `categoryLabels.first` etiquetava
  // pedidos de outras categorias (ex: vídeo) com a primeira configurada
  // (ex: fotografia), incluindo o texto pré-preenchido em
  // `send_proposal_screen.dart`.
  final category = (categoryLabels != null && categoryLabels.length == 1)
      ? categoryLabels.first
      : null;

  final quoteRows = await supabase
      .from('quote_requests')
      .select(
        'id, partner_id, wedding_id, couple_id, event_date, location, message, status, profiles(full_name), weddings(partner_name_1, partner_name_2)',
      )
      .eq('partner_id', partnerId)
      .neq('status', 'accepted')
      .order('created_at', ascending: false);

  final bookingRows = await supabase
      .from('bookings')
      .select(
        'id, partner_id, wedding_id, couple_id, event_date, status, profiles(full_name), proposals(title), weddings(location, partner_name_1, partner_name_2)',
      )
      .eq('partner_id', partnerId)
      .order('event_date', ascending: false);

  final all = [
    ...quoteRows.map((row) => _bookingFromQuoteRequestRow(row, category)),
    ...bookingRows.map((row) => _bookingFromBookingRow(row, category)),
  ];

  if (status == null) return all;
  return all.where((b) => b.status == status).toList();
});

BookingStatus _mapQuoteRequestStatus(String status) => switch (status) {
  'pending' => BookingStatus.novo,
  'viewed' || 'proposal_sent' => BookingStatus.emAnalise,
  _ => BookingStatus.recusado, // declined, expired
};

/// Nomes do casal ("Rafael & Inês"), tal como preenchidos no
/// onboarding do casamento — muito mais identificável para o parceiro
/// do que o nome da conta individual de quem enviou o pedido
/// (`profiles.full_name`), que só serve de segundo fallback.
String _clientDisplayName(
  Map<String, dynamic>? wedding,
  Map<String, dynamic>? profile,
) {
  final name1 = wedding?['partner_name_1'] as String?;
  final name2 = wedding?['partner_name_2'] as String?;
  if (name1 != null && name1.isNotEmpty) {
    return (name2 == null || name2.isEmpty) ? name1 : '$name1 & $name2';
  }
  final fullName = profile?['full_name'] as String?;
  return (fullName != null && fullName.isNotEmpty) ? fullName : 'Casal';
}

Booking _bookingFromQuoteRequestRow(
  Map<String, dynamic> row,
  String? category,
) {
  final couple = row['profiles'] as Map<String, dynamic>?;
  final wedding = row['weddings'] as Map<String, dynamic>?;
  final coupleId = row['couple_id'] as String;
  return Booking(
    id: row['id'] as String,
    partnerId: row['partner_id'] as String,
    weddingId: row['wedding_id'] as String,
    clientName: _clientDisplayName(wedding, couple),
    avatarSeed: coupleId,
    // `event_date` é opcional em `quote_requests` (o casal pode não ter
    // escolhido data ainda) — sem equivalente honesto, cai em "hoje" só
    // para a linha ter uma data a mostrar.
    eventDate: row['event_date'] == null
        ? DateTime.now()
        : DateTime.parse(row['event_date'] as String),
    city: (row['location'] as String?) ?? 'Localização a combinar',
    category: category,
    packageLabel: 'Pedido de orçamento',
    status: _mapQuoteRequestStatus(row['status'] as String),
    messageFromCouple: row['message'] as String?,
    fromQuoteRequest: true,
    proposalSent: row['status'] == 'proposal_sent',
  );
}

Booking _bookingFromBookingRow(Map<String, dynamic> row, String? category) {
  final couple = row['profiles'] as Map<String, dynamic>?;
  final proposal = row['proposals'] as Map<String, dynamic>?;
  final wedding = row['weddings'] as Map<String, dynamic>?;
  final coupleId = row['couple_id'] as String;
  return Booking(
    id: row['id'] as String,
    partnerId: row['partner_id'] as String,
    weddingId: row['wedding_id'] as String,
    clientName: _clientDisplayName(wedding, couple),
    avatarSeed: coupleId,
    eventDate: DateTime.parse(row['event_date'] as String),
    city: (wedding?['location'] as String?) ?? 'Localização a combinar',
    category: category,
    packageLabel: (proposal?['title'] as String?) ?? 'Serviço contratado',
    status: mapRealBookingStatus(row['status'] as String),
    fromQuoteRequest: false,
  );
}

/// Liga-se a `partner_portfolio_items` real
/// (`database/migrations/005_partner_profile.sql`,
/// `023_portfolio_storage.sql`) — substitui `MockBackend.listPortfolioItems`.
/// Sem parâmetro de categoria (a tabela real nunca teve essa coluna, ver
/// nota em [PortfolioItem]).
final partnerPortfolioProvider = FutureProvider<List<PortfolioItem>>((
  ref,
) async {
  final partnerId = _partnerId(ref);
  final rows = await supabase
      .from('partner_portfolio_items')
      .select()
      .eq('partner_id', partnerId)
      .order('position', ascending: true);
  return rows.map(_portfolioItemFromRow).toList();
});

PortfolioItem _portfolioItemFromRow(Map<String, dynamic> row) => PortfolioItem(
  id: row['id'] as String,
  partnerId: row['partner_id'] as String,
  mediaUrl: row['media_url'] as String,
  mediaType: row['media_type'] == 'video'
      ? PortfolioMediaType.video
      : PortfolioMediaType.image,
  position: row['position'] as int,
);

/// Faz upload de uma imagem/vídeo para o bucket `portfolio`
/// (`023_portfolio_storage.sql`, público — mesmo raciocínio de qualquer
/// galeria pública, ver comentário da migração) e regista a linha em
/// `partner_portfolio_items`. `enforce_portfolio_video_limit()` recusa um
/// segundo vídeo do lado da base de dados — este método deixa esse erro
/// (`P0006`/`video_limit_reached`) propagar para quem chama tratar.
Future<PortfolioItem> uploadPortfolioMedia({
  required XFile file,
  required PortfolioMediaType mediaType,
  required int position,
}) async {
  final partnerId = supabase.auth.currentUser!.id;
  final bytes = await file.readAsBytes();
  final ext = file.name.contains('.')
      ? file.name.split('.').last.toLowerCase()
      : (mediaType == PortfolioMediaType.video ? 'mp4' : 'jpg');
  final path = '$partnerId/${DateTime.now().microsecondsSinceEpoch}.$ext';

  await supabase.storage
      .from('portfolio')
      .uploadBinary(
        path,
        bytes,
        fileOptions: FileOptions(
          contentType: mediaType == PortfolioMediaType.video
              ? 'video/$ext'
              : 'image/$ext',
        ),
      );
  final mediaUrl = supabase.storage.from('portfolio').getPublicUrl(path);

  final row = await supabase
      .from('partner_portfolio_items')
      .insert({
        'partner_id': partnerId,
        'media_url': mediaUrl,
        'media_type': mediaType == PortfolioMediaType.video ? 'video' : 'image',
        'position': position,
      })
      .select()
      .single();
  return _portfolioItemFromRow(row);
}

/// Apaga a linha e, em melhor esforço, o ficheiro no Storage — a falha a
/// apagar o ficheiro (ex: URL já não bate certo com o padrão esperado)
/// não deve impedir a linha de desaparecer da lista do parceiro.
Future<void> removePortfolioItem(PortfolioItem item) async {
  await supabase.from('partner_portfolio_items').delete().eq('id', item.id);
  try {
    final uri = Uri.parse(item.mediaUrl);
    const marker = '/object/public/portfolio/';
    final idx = uri.path.indexOf(marker);
    if (idx != -1) {
      final path = uri.path.substring(idx + marker.length);
      await supabase.storage.from('portfolio').remove([path]);
    }
  } catch (_) {
    // Melhor esforço, ver nota acima.
  }
}

/// Avaliações reais do próprio parceiro (`reviews`, 045_reviews.sql) —
/// inclui `flagged`/`removed` aqui (o parceiro vê o que denunciou e o
/// que o admin removeu, só o Marketplace público esconde essas).
/// `weddings`/`profiles` embutidos — pedido explícito do utilizador:
/// "as reviews devem mostrar o nome dos noivos e o icon deles, tal
/// como o perfil deles. a quanto tempo tem conta e outras informações
/// que aches interessantes mas não secretas ou pessoais". Só campos já
/// públicos no perfil do próprio casal (nome, foto, data, localização,
/// nº estimado de convidados) — nunca orçamento, contactos ou
/// qualquer coisa de `partner_verification`-like sensibilidade.
final partnerReviewsProvider = FutureProvider<List<Review>>((ref) async {
  final partnerId = _partnerId(ref);
  final rows = await supabase
      .from('reviews')
      .select(
        'id, booking_id, partner_id, rating, comment, partner_response, partner_response_at, status, created_at, '
        'weddings(partner_name_1, partner_name_2, cover_photo_url, wedding_date, location, estimated_guests), '
        'profiles(created_at)',
      )
      .eq('partner_id', partnerId)
      .order('created_at', ascending: false);
  return (rows as List)
      .map((r) => Review.fromRow(r as Map<String, dynamic>))
      .toList();
});

final partnerReviewSummaryProvider = Provider<PartnerReviewSummary>((ref) {
  final reviewsAsync = ref.watch(partnerReviewsProvider);
  final all = reviewsAsync.maybeWhen(
    data: (v) => v,
    orElse: () => const <Review>[],
  );
  final published = all.where((r) => r.status != 'removed').toList();
  if (published.isEmpty)
    return const PartnerReviewSummary(average: 0, count: 0);
  final avg =
      published.map((r) => r.rating).reduce((a, b) => a + b) / published.length;
  return PartnerReviewSummary(average: avg, count: published.length);
});

Future<void> respondToReview(
  WidgetRef ref,
  String reviewId,
  String response,
) async {
  await supabase.rpc(
    'respond_to_review',
    params: {'p_review_id': reviewId, 'p_response': response},
  );
  ref.invalidate(partnerReviewsProvider);
}

Future<void> flagReview(WidgetRef ref, String reviewId) async {
  await supabase.rpc('flag_review', params: {'p_review_id': reviewId});
  ref.invalidate(partnerReviewsProvider);
}

/// Só `revenue`/`revenueDeltaPct` são reais aqui (soma de
/// `bookings.total_amount` confirmadas/concluídas no período) — os
/// restantes campos (`views`, `requestCount`, `conversionPct`,
/// `avgRating`, `viewsTrend`) continuam a vir do mock porque não existe
/// nenhum evento de "visualização de perfil" nem sistema de avaliações
/// ligado ainda (fora do âmbito desta ronda, ver `ROADMAP.md`, Fase 4).
final partnerStatsProvider = FutureProvider.family<PartnerStats, String>((
  ref,
  period,
) async {
  final partnerId = _partnerId(ref);
  final mock = MockBackend.instance.getPartnerStats(partnerId, period: period);

  final now = DateTime.now();
  final currentStart = switch (period) {
    'Últimos 3 meses' => DateTime(now.year, now.month - 2, 1),
    'Este ano' => DateTime(now.year, 1, 1),
    _ => DateTime(now.year, now.month, 1), // 'Este mês' e default
  };
  final spanDays = now.difference(currentStart).inDays.clamp(1, 3650);
  final previousStart = currentStart.subtract(Duration(days: spanDays));

  final rows = await supabase
      .from('bookings')
      .select('total_amount, status, event_date')
      .eq('partner_id', partnerId)
      .inFilter('status', ['confirmed', 'completed']);

  double sumSince(DateTime start, DateTime end) {
    double total = 0;
    for (final row in rows) {
      final eventDate = DateTime.parse(row['event_date'] as String);
      if (!eventDate.isBefore(start) && eventDate.isBefore(end)) {
        total += (row['total_amount'] as num).toDouble();
      }
    }
    return total;
  }

  final currentRevenue = sumSince(currentStart, now);
  final previousRevenue = sumSince(previousStart, currentStart);
  final revenueDeltaPct = previousRevenue == 0
      ? (currentRevenue > 0 ? 100.0 : 0.0)
      : ((currentRevenue - previousRevenue) / previousRevenue) * 100;

  return PartnerStats(
    views: mock.views,
    viewsDeltaPct: mock.viewsDeltaPct,
    requestCount: mock.requestCount,
    requestDeltaPct: mock.requestDeltaPct,
    conversionPct: mock.conversionPct,
    conversionDeltaPct: mock.conversionDeltaPct,
    avgRating: mock.avgRating,
    avgRatingDelta: mock.avgRatingDelta,
    revenue: currentRevenue,
    revenueDeltaPct: revenueDeltaPct,
    viewsTrend: mock.viewsTrend,
  );
});

/// Liga-se a `conversations` real (036_chat.sql) — substitui
/// `MockBackend.listConversationsForPartner`.
final partnerConversationsProvider = FutureProvider<List<ChatConversation>>((
  ref,
) async {
  final partnerId = _partnerId(ref);
  final rows = await supabase
      .from('conversations')
      .select(
        'id, wedding_id, partner_id, last_message, last_message_at, weddings(partner_name_1, partner_name_2)',
      )
      .eq('partner_id', partnerId)
      .order('last_message_at', ascending: false);
  return (rows as List).map((r) {
    final row = r as Map<String, dynamic>;
    final wedding = row['weddings'] as Map<String, dynamic>?;
    final name1 = wedding?['partner_name_1'] as String?;
    final name2 = wedding?['partner_name_2'] as String?;
    final name = (name1 == null || name1.isEmpty)
        ? 'Casal'
        : (name2 == null || name2.isEmpty)
        ? name1
        : '$name1 & $name2';
    return ChatConversation(
      id: row['id'] as String,
      weddingId: row['wedding_id'] as String,
      partnerId: row['partner_id'] as String,
      name: name,
      avatarSeed: row['wedding_id'] as String,
      lastMessage: row['last_message'] as String?,
      lastMessageAt: row['last_message_at'] == null
          ? null
          : DateTime.parse(row['last_message_at'] as String),
    );
  }).toList();
});

/// Total de mensagens não lidas do parceiro, em todas as conversas —
/// para o selo no separador "Chat" de `partner_bottom_nav.dart`, mesmo
/// padrão de `unreadMessagesCountProvider` (`core/chat/chat_list_controller.dart`)
/// do lado do casal. Pedido explícito do utilizador (2026-09-05).
final partnerUnreadMessagesCountProvider = FutureProvider<int>((ref) async {
  final partnerId = _partnerId(ref);
  final rows = await supabase
      .from('conversations')
      .select('id, partner_last_read_at')
      .eq('partner_id', partnerId);
  final conversations = (rows as List).cast<Map<String, dynamic>>();
  if (conversations.isEmpty) return 0;

  final lastReadByConversation = <String, DateTime?>{
    for (final row in conversations)
      row['id'] as String: (row['partner_last_read_at'] as String?) == null
          ? null
          : DateTime.parse(row['partner_last_read_at'] as String),
  };

  final messageRows = await supabase
      .from('messages')
      .select('conversation_id, created_at')
      .inFilter(
        'conversation_id',
        conversations.map((r) => r['id'] as String).toList(),
      )
      .eq('sender_role', 'couple');

  var total = 0;
  for (final row in (messageRows as List).cast<Map<String, dynamic>>()) {
    final lastRead = lastReadByConversation[row['conversation_id'] as String];
    final createdAt = DateTime.parse(row['created_at'] as String);
    if (lastRead == null || createdAt.isAfter(lastRead)) total++;
  }
  return total;
});

final partnerSupportTicketsProvider = FutureProvider<List<SupportTicket>>((
  ref,
) async {
  final partnerId = _partnerId(ref);
  final rows = await supabase
      .from('support_tickets')
      .select()
      .eq('user_id', partnerId)
      .order('created_at', ascending: false);
  return (rows as List)
      .map((r) => SupportTicket.fromRow(r as Map<String, dynamic>))
      .toList();
});

class PartnerStripeStatus {
  final bool hasAccount;
  final bool chargesEnabled;
  final bool payoutsEnabled;

  const PartnerStripeStatus({
    required this.hasAccount,
    required this.chargesEnabled,
    required this.payoutsEnabled,
  });
}

/// Estado da conta Stripe Connect do parceiro — lido diretamente de
/// `partner_profiles` (RLS: "Owner can view own profile",
/// `005_partner_profile.sql`) em vez de estender [Profile]/
/// `auth_controller.dart`, que já é usado em ~15 ecrãs e não precisa
/// deste detalhe em mais nenhum sítio além do ecrã de pagamentos. Ver
/// `mobile-app/payments/stripe-connect.md`.
final partnerStripeStatusProvider = FutureProvider<PartnerStripeStatus>((
  ref,
) async {
  final partnerId = _partnerId(ref);
  final row = await supabase
      .from('partner_profiles')
      .select(
        'stripe_account_id, stripe_charges_enabled, stripe_payouts_enabled',
      )
      .eq('id', partnerId)
      .single();
  return PartnerStripeStatus(
    hasAccount: row['stripe_account_id'] != null,
    chargesEnabled: row['stripe_charges_enabled'] as bool,
    payoutsEnabled: row['stripe_payouts_enabled'] as bool,
  );
});

/// Chama a Edge Function `create-connect-onboarding-link`
/// (`supabase/functions/create-connect-onboarding-link/`) e devolve o
/// URL de onboarding da Stripe a abrir no browser.
///
/// `return_url`/`refresh_url` têm de ser `https://` reais — ao contrário
/// da Checkout Session (`createDepositCheckoutUrl`, que aceita esquemas
/// próprios como `copodagua://` para redireccionar de volta à app), o
/// endpoint `account_links` da Stripe recusa qualquer URL que não seja
/// `http(s)`, confirmado ao testar contra a API real (`url_invalid`).
/// Sem nenhuma página web pública própria ainda para este projeto, usa-se
/// o domínio do próprio projeto Supabase como destino neutro — a Stripe
/// desaconselha depender do conteúdo desta página de qualquer forma,
/// recomendando voltar a verificar o estado da conta pela API depois do
/// utilizador regressar à app; é exatamente isso que o webhook
/// `account.updated` (`sync_stripe_account_status()`) já faz. Ver
/// `mobile-app/payments/stripe-connect.md`.
Future<String> createConnectOnboardingUrl() async {
  final response = await supabase.functions.invoke(
    'create-connect-onboarding-link',
    body: {
      'return_url': 'https://yknbtsmcmjxzzhijyiav.supabase.co',
      'refresh_url': 'https://yknbtsmcmjxzzhijyiav.supabase.co',
    },
  );
  final data = response.data as Map<String, dynamic>?;
  final url = data?['url'] as String?;
  if (url == null) {
    throw Exception('Onboarding sem URL devolvido');
  }
  return url;
}

/// Chama a Edge Function `create-connect-login-link` e devolve o URL do
/// Express Dashboard da Stripe — onde o parceiro vê o saldo real na
/// Stripe e pede levantamentos para o IBAN. Só funciona depois do
/// onboarding estar concluído (`stripe_account_id` já existe); o botão
/// que chama isto (`partner_payments_screen.dart`) já fica escondido
/// antes disso.
Future<String> createConnectLoginUrl() async {
  final response = await supabase.functions.invoke('create-connect-login-link');
  final data = response.data as Map<String, dynamic>?;
  final url = data?['url'] as String?;
  if (url == null) {
    throw Exception('Dashboard sem URL devolvido');
  }
  return url;
}

/// Saldo do parceiro — pedido explícito do utilizador (2026-09-04):
/// "adiciona um saldo... reflete os pagamentos que vão receber e quando".
///
/// Nota de arquitetura importante (decidida com o utilizador antes de
/// implementar): a integração Stripe atual usa *destination charges*
/// (`mobile-app/payments/stripe-connect.md`) — o valor do parceiro é
/// transferido para a conta Stripe dele no momento do pagamento, a
/// plataforma nunca o retém. Por isso este ecrã NÃO implementa a
/// retenção de 60%/3 dias descrita originalmente (isso exigiria mudar
/// para separate charges + transfers, ronda futura) — mostra só números
/// reais: sinais já pagos (já na conta Stripe do parceiro, disponíveis)
/// e sinais pendentes + o saldo por cobrar (diferença entre o valor
/// total e o sinal, que ainda não tem nenhum fluxo de cobrança em lado
/// nenhum da plataforma — só `deposit` é cobrado, ver `020_payments.sql`).
class PartnerBalanceData {
  final double received;
  final double pendingDeposits;
  final double uncollectedBalance;

  const PartnerBalanceData({
    required this.received,
    required this.pendingDeposits,
    required this.uncollectedBalance,
  });
}

final partnerBalanceProvider = FutureProvider<PartnerBalanceData>((ref) async {
  final partnerId = _partnerId(ref);

  final paymentRows = await supabase
      .from('payments')
      .select('amount, status')
      .eq('partner_id', partnerId)
      .eq('type', 'deposit');

  double received = 0;
  double pendingDeposits = 0;
  for (final row in paymentRows) {
    final amount = (row['amount'] as num).toDouble();
    if (row['status'] == 'paid') {
      received += amount;
    } else if (row['status'] == 'pending') {
      pendingDeposits += amount;
    }
  }

  final bookingRows = await supabase
      .from('bookings')
      .select('total_amount, deposit_amount, status')
      .eq('partner_id', partnerId)
      .inFilter('status', ['confirmed', 'completed']);

  double uncollectedBalance = 0;
  for (final row in bookingRows) {
    final total = (row['total_amount'] as num).toDouble();
    final deposit = (row['deposit_amount'] as num).toDouble();
    uncollectedBalance += (total - deposit);
  }

  return PartnerBalanceData(
    received: received,
    pendingDeposits: pendingDeposits,
    uncollectedBalance: uncollectedBalance,
  );
});

/// Modo de preços + pacotes reais de um parceiro
/// (`database/migrations/028_partner_service_packages.sql`) — substitui
/// `MockBackend.servicePackages`/`serviceExtras` (100% mock). Desenho
/// pedido explícito do utilizador: "up to 3 options or por orcamento
/// only. partner can choose" — só existe o conceito de "pacote"
/// (`packages`) ou "só orçamento" (`quote_only`), nunca os dois ao mesmo
/// tempo; `ServiceExtra` (mock) não tinha equivalente pedido, por isso
/// foi removido em vez de deixado a fingir que é real.
class PartnerPricingData {
  final String pricingMode;
  final List<ServicePackage> packages;

  /// Só relevante quando [pricingMode] é `'quote_only'` — ver
  /// `database/migrations/049_partner_average_quote_price.sql`. `null`
  /// enquanto o parceiro ainda não o preencheu.
  final double? averageQuotePrice;

  const PartnerPricingData({
    required this.pricingMode,
    required this.packages,
    this.averageQuotePrice,
  });
}

final partnerPricingProvider = FutureProvider<PartnerPricingData>((ref) async {
  final partnerId = _partnerId(ref);
  final profileRow = await supabase
      .from('partner_profiles')
      .select('pricing_mode, average_quote_price')
      .eq('id', partnerId)
      .single();
  final rows = await supabase
      .from('partner_service_packages')
      .select()
      .eq('partner_id', partnerId)
      .order('position', ascending: true);
  return PartnerPricingData(
    pricingMode: profileRow['pricing_mode'] as String,
    packages: rows.map(_servicePackageFromRow).toList(),
    averageQuotePrice: (profileRow['average_quote_price'] as num?)?.toDouble(),
  );
});

ServicePackage _servicePackageFromRow(Map<String, dynamic> row) =>
    ServicePackage(
      id: row['id'] as String,
      partnerId: row['partner_id'] as String,
      name: row['name'] as String,
      description: row['description'] as String? ?? '',
      price: (row['price'] as num).toDouble(),
      isStartingPrice: row['is_starting_price'] as bool? ?? false,
      position: row['position'] as int? ?? 0,
    );

Future<void> setPartnerPricingMode(String pricingMode) async {
  final partnerId = supabase.auth.currentUser!.id;
  await supabase
      .from('partner_profiles')
      .update({
        'pricing_mode': pricingMode,
        'updated_at': DateTime.now().toIso8601String(),
      })
      .eq('id', partnerId);
}

/// Ver `PartnerPricingData.averageQuotePrice` — só faz sentido em
/// `pricing_mode = 'quote_only'`, mas escreve sem validar isso aqui (o
/// valor só é lido/mostrado nesse modo, ver `partner_pricing_screen.dart`/
/// `partner_detail_screen.dart`).
Future<void> setAverageQuotePrice(double? price) async {
  final partnerId = supabase.auth.currentUser!.id;
  await supabase
      .from('partner_profiles')
      .update({
        'average_quote_price': price,
        'updated_at': DateTime.now().toIso8601String(),
      })
      .eq('id', partnerId);
}

/// Insere um pacote — `enforce_partner_package_limit()`
/// (`028_partner_service_packages.sql`) recusa do lado da base de dados
/// um 4º pacote; este método deixa esse erro propagar para quem chama
/// tratar (mesmo padrão de [uploadPortfolioMedia] com o limite de vídeo).
Future<void> addServicePackage({
  required String name,
  required String description,
  required double price,
  required bool isStartingPrice,
  required int position,
}) async {
  final partnerId = supabase.auth.currentUser!.id;
  await supabase.from('partner_service_packages').insert({
    'partner_id': partnerId,
    'name': name,
    'description': description,
    'price': price,
    'is_starting_price': isStartingPrice,
    'position': position,
  });
}

Future<void> editServicePackage(
  String id, {
  required String name,
  required String description,
  required double price,
  required bool isStartingPrice,
}) async {
  await supabase
      .from('partner_service_packages')
      .update({
        'name': name,
        'description': description,
        'price': price,
        'is_starting_price': isStartingPrice,
        'updated_at': DateTime.now().toIso8601String(),
      })
      .eq('id', id);
}

Future<void> removeServicePackage(String id) async {
  await supabase.from('partner_service_packages').delete().eq('id', id);
}
