import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException, PostgrestFilterBuilder;

import '../models/models.dart';
import '../partner_profile/partner_profile_controller.dart';
import '../supabase/supabase_config.dart';
import '../event/event_controller.dart';

/// Marketplace real, do lado do casal — substitui
/// `MockBackend.listPartners`. Só `status = 'published'` é visível
/// (`is_partner_profile_visible()`, `partner-app/profile/database.md`)
/// — a mesma RLS já usada por `admin-web`/pelo próprio parceiro, nunca
/// precisou de policy nova. Filtra por `categorySlug` (taxonomia real,
/// 14 valores) do lado do Dart, não da query — filtrar um embed
/// aninhado a dois níveis (`partner_profile_categories.partner_categories.slug`)
/// via PostgREST exigiria `!inner` e não é fiável nos dois níveis;
/// à escala do MVP (poucas dezenas de parceiros), ler tudo e filtrar
/// em memória é simples e correto.
final partnersProvider = FutureProvider.family<List<Partner>, String?>((
  ref,
  categorySlug,
) async {
  final rows = await _selectPartners((q) => q.eq('status', 'published'));
  final partners = rows.map(_partnerFromRow).toList();
  if (categorySlug == null) return partners;
  return partners.where((p) => p.categorySlugs.contains(categorySlug)).toList();
});

const _partnerColumns =
    'id, business_name, description, cover_photo_url, service_areas, nationwide, '
    'pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, '
    'partner_service_packages(price, is_starting_price), '
    'partner_profile_categories(partner_categories(label_pt, slug))';

/// Valor de referência de quem só trabalha por orçamento (migração 203).
const _referenceColumns = ', reference_note';

/// Lê os parceiros com as colunas novas; antes da migração 203 correr,
/// repete sem elas (a consulta falharia por coluna inexistente).
Future<List<Map<String, dynamic>>> _selectPartners(
  PostgrestFilterBuilder<List<Map<String, dynamic>>> Function(
    PostgrestFilterBuilder<List<Map<String, dynamic>>> q,
  ) filter,
) async {
  try {
    return await filter(supabase.from('partner_profiles').select(_partnerColumns + _referenceColumns));
  } on PostgrestException {
    return await filter(supabase.from('partner_profiles').select(_partnerColumns));
  }
}

/// Um único parceiro publicado, por id — usado para abrir o perfil a
/// partir de sítios que só têm o `partnerId` à mão (ex: o aviso de
/// pedido de orçamento no chat, `chat_thread_screen.dart`), sem carregar
/// o Marketplace inteiro. Mesma RLS/mapeamento de [partnersProvider].
final partnerByIdProvider = FutureProvider.family<Partner?, String>((
  ref,
  partnerId,
) async {
  final rows = await _selectPartners((q) => q.eq('id', partnerId).eq('status', 'published'));
  if (rows.isEmpty) return null;
  return _partnerFromRow(rows.first);
});

/// O meu perfil de parceiro como os clientes o veem, mesmo antes de
/// publicado (pedido 2026-11-25: o Perfil do parceiro é a mesma página que
/// os organizadores veem). O próprio pode ler o seu perfil em qualquer estado.
final myPartnerPageProvider = FutureProvider.family<Partner?, String>((ref, partnerId) async {
  final rows = await _selectPartners((q) => q.eq('id', partnerId));
  if (rows.isEmpty) return null;
  return _partnerFromRow(rows.first);
});

Partner _partnerFromRow(Map<String, dynamic> row) {
  final categoryLinks =
      (row['partner_profile_categories'] as List?) ?? const [];
  final labels = <String>[];
  final slugs = <String>[];
  for (final link in categoryLinks) {
    final category =
        (link as Map<String, dynamic>)['partner_categories']
            as Map<String, dynamic>?;
    if (category == null) continue;
    labels.add(category['label_pt'] as String);
    slugs.add(category['slug'] as String);
  }

  final packages = (row['partner_service_packages'] as List?) ?? const [];
  double? startingPrice;
  if (row['pricing_mode'] == 'packages' && packages.isNotEmpty) {
    startingPrice = packages
        .map((p) => ((p as Map<String, dynamic>)['price'] as num).toDouble())
        .reduce((a, b) => a < b ? a : b);
  }

  final serviceAreas =
      (row['service_areas'] as List?)?.cast<String>() ?? const [];
  final location = (row['nationwide'] as bool? ?? false)
      ? 'Âmbito nacional'
      : (serviceAreas.isEmpty
            ? 'Localização a combinar'
            : serviceAreas.join(', '));

  return Partner(
    id: row['id'] as String,
    name: row['business_name'] as String,
    categoryLabels: labels,
    categorySlugs: slugs,
    location: location,
    startingPrice: startingPrice,
    averageQuotePrice: row['pricing_mode'] == 'quote_only'
        ? (row['average_quote_price'] as num?)?.toDouble()
        : null,
    description: row['description'] as String? ?? '',
    imageUrl: row['cover_photo_url'] as String?,
    featured: row['featured'] as bool? ?? false,
    createdAt: DateTime.tryParse(row['created_at'] as String? ?? ''),
    yearsExperience: (row['years_experience'] as num?)?.toInt(),
    maxTravelDistanceKm: (row['max_travel_distance_km'] as num?)?.toInt(),
    referenceNote: row['pricing_mode'] == 'quote_only' ? (row['reference_note'] as String?)?.trim() : null,
  );
}

/// Taxonomia real de categorias, para a barra de filtro do Marketplace
/// — substitui a lista fixa `PartnerCategory.values`.
final partnerCategoryOptionsProvider =
    FutureProvider<List<PartnerCategoryOption>>((ref) async {
      final rows = await supabase
          .from('partner_categories')
          .select('id, label_pt, slug')
          .eq('is_active', true)
          .order('label_pt', ascending: true);
      // Só categorias com pelo menos um parceiro publicado (pedido
      // 2026-11-09). Os parceiros, ao criar o perfil, continuam a ver todas
      // (`loadCategoryOptions`). Se a consulta falhar, mostra todas.
      Set<String>? withPartners;
      try {
        final links = await supabase
            .from('partner_profiles')
            .select('partner_profile_categories(partner_categories(slug))')
            .eq('status', 'published');
        withPartners = {
          for (final p in links as List)
            for (final l in (p['partner_profile_categories'] as List? ?? const []))
              if ((l['partner_categories'] as Map?)?['slug'] case final String slug) slug,
        };
      } catch (_) {}
      return rows
          .where((r) => withPartners == null || withPartners.contains(r['slug']))
          .map(
            (r) => PartnerCategoryOption(
              id: r['id'] as String,
              label: r['label_pt'] as String,
              slug: r['slug'] as String,
            ),
          )
          .toList();
    });

/// Pacotes reais de um parceiro específico (não o próprio utilizador —
/// ver `core/partner_app/partner_app_providers.dart#partnerPricingProvider`
/// para essa versão) — usado no separador "Pacotes" do perfil público.
final partnerPackagesForProvider =
    FutureProvider.family<List<ServicePackage>, String>((ref, partnerId) async {
      final rows = await supabase
          .from('partner_service_packages')
          .select()
          .eq('partner_id', partnerId)
          .order('position', ascending: true);
      return rows.map(ServicePackage.fromRow).toList();
    });

/// Extras de um parceiro (188). Antes da migração a tabela não existe:
/// devolve vazio em vez de falhar o perfil.
final partnerExtrasForProvider =
    FutureProvider.family<List<ServiceExtra>, String>((ref, partnerId) async {
      try {
        final rows = await supabase
            .from('partner_service_extras')
            .select()
            .eq('partner_id', partnerId)
            .order('position', ascending: true);
        return rows.map(ServiceExtra.fromRow).toList();
      } catch (_) {
        return const <ServiceExtra>[];
      }
    });

/// Capacidade de um espaço: soma de lugares (`seats × quantity`) dos
/// tipos de mesa que o parceiro indicou (`022_venue_tables.sql`). `null`
/// quando não há mesas registadas (ex: parceiros que não são espaços).
final partnerVenueCapacityProvider =
    FutureProvider.family<int?, String>((ref, partnerId) async {
      final rows = await supabase
          .from('partner_venue_tables')
          .select('seats, quantity')
          .eq('partner_id', partnerId);
      if (rows.isEmpty) return null;
      var total = 0;
      for (final row in rows) {
        total += (row['seats'] as int) * (row['quantity'] as int);
      }
      return total;
    });

/// Número de referência do parceiro (`partner_profiles.key_figure`,
/// `077_partner_key_figure.sql`) — o significado depende da categoria
/// (`category_figure.dart`). `null` se não indicou ou se a migração
/// ainda não correu (nunca parte o perfil).
final partnerKeyFigureProvider =
    FutureProvider.family<int?, String>((ref, partnerId) async {
      try {
        final row = await supabase
            .from('partner_profiles')
            .select('key_figure')
            .eq('id', partnerId)
            .maybeSingle();
        return row?['key_figure'] as int?;
      } catch (_) {
        return null;
      }
    });

/// Portefólio real de um parceiro específico — usado no separador
/// "Galeria" do perfil público.
final partnerPortfolioForProvider =
    FutureProvider.family<List<PortfolioItem>, String>((ref, partnerId) async {
      final rows = await supabase
          .from('partner_portfolio_items')
          .select()
          .eq('partner_id', partnerId)
          .order('position', ascending: true);
      return rows
          .map(
            (row) => PortfolioItem(
              id: row['id'] as String,
              partnerId: row['partner_id'] as String,
              mediaUrl: row['media_url'] as String,
              mediaType: row['media_type'] == 'video'
                  ? PortfolioMediaType.video
                  : PortfolioMediaType.image,
              position: row['position'] as int? ?? 0,
            ),
          )
          .toList();
    });

class PartnerPickerArgs {
  final String? categorySlug;
  final bool selectionMode;

  const PartnerPickerArgs({this.categorySlug, this.selectionMode = false});
}

/// Relação já existente entre este casamento e este parceiro — usado por
/// `partner_detail_screen.dart` para decidir se "Reservar" (na verdade
/// "Pedir orçamento", `request_quote()`) deve continuar disponível.
/// Bug real reportado pelo utilizador (2026-09-12): o botão reenviava um
/// novo pedido de orçamento ao mesmo parceiro mesmo depois de o casal já
/// ter uma proposta aceite/reserva com ele — `request_quote()` em si
/// permite isto de propósito (`backend/quotations/edge-cases.md`: pedir
/// de novo depois de recusar uma proposta é legítimo), o gap era só do
/// lado do cliente, que nunca verificava se já havia uma relação ativa.
enum PartnerRelationshipStatus { none, requestPending, booked }

/// `pending`/`viewed`/`proposal_sent` (ainda sem `booking`) ou
/// `awaiting_deposit`/`confirmed`/`completed` (já reservado) para este
/// casamento + parceiro → bloqueia um novo pedido. Um `quote_request`
/// `declined`/`expired` ou uma `booking` `cancelled_by_*`/`expired` não
/// contam — pedir de novo nesses casos continua legítimo (edge-cases.md).
// autoDispose (2026-10-21): volta a perguntar sempre que o perfil abre —
// antes ficava "Reservado" depois de a reserva ser cancelada.
final partnerRelationshipStatusProvider =
    FutureProvider.autoDispose.family<PartnerRelationshipStatus, String>((
      ref,
      partnerId,
    ) async {
      final eventId = ref.watch(
        eventControllerProvider.select((s) => s.event?.id),
      );
      if (eventId == null) return PartnerRelationshipStatus.none;

      final bookingRows = await supabase
          .from('bookings')
          .select('id')
          .eq('wedding_id', eventId)
          .eq('partner_id', partnerId)
          .inFilter('status', ['awaiting_deposit', 'confirmed', 'completed']);
      if (bookingRows.isNotEmpty) return PartnerRelationshipStatus.booked;

      final quoteRows = await supabase
          .from('quote_requests')
          .select('id')
          .eq('wedding_id', eventId)
          .eq('partner_id', partnerId)
          .inFilter('status', ['pending', 'viewed', 'proposal_sent']);
      if (quoteRows.isNotEmpty) return PartnerRelationshipStatus.requestPending;

      return PartnerRelationshipStatus.none;
    });
