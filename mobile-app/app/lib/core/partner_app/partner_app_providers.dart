import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../mock/mock_backend.dart';
import '../models/models.dart';

String _partnerId(Ref ref) =>
    ref.watch(authControllerProvider.select((s) => s.profile!.id));

final partnerBookingsProvider =
    FutureProvider.family<List<Booking>, BookingStatus?>((ref, status) {
      final partnerId = _partnerId(ref);
      return MockBackend.instance.listBookingsForPartner(
        partnerId,
        status: status,
      );
    });

final partnerPortfolioProvider =
    FutureProvider.family<List<PortfolioItem>, PortfolioCategory?>((
      ref,
      category,
    ) {
      final partnerId = _partnerId(ref);
      return MockBackend.instance.listPortfolioItems(
        partnerId,
        category: category,
      );
    });

final partnerReviewsProvider = FutureProvider<List<Review>>((ref) {
  final partnerId = _partnerId(ref);
  return MockBackend.instance.listReviewsForPartner(partnerId);
});

final partnerReviewSummaryProvider = Provider<PartnerReviewSummary>((ref) {
  final partnerId = _partnerId(ref);
  return MockBackend.instance.getReviewSummary(partnerId);
});

final partnerStatsProvider = FutureProvider.family<PartnerStats, String>((
  ref,
  period,
) async {
  final partnerId = _partnerId(ref);
  return MockBackend.instance.getPartnerStats(partnerId, period: period);
});

final partnerConversationsProvider = FutureProvider<List<ChatConversation>>((
  ref,
) {
  final partnerId = _partnerId(ref);
  return MockBackend.instance.listConversationsForPartner(partnerId);
});

class PartnerPricingState {
  final bool loading;
  final List<ServicePackage> packages;
  final List<ServiceExtra> extras;

  const PartnerPricingState({
    this.loading = false,
    this.packages = const [],
    this.extras = const [],
  });

  PartnerPricingState copyWith({
    bool? loading,
    List<ServicePackage>? packages,
    List<ServiceExtra>? extras,
  }) {
    return PartnerPricingState(
      loading: loading ?? this.loading,
      packages: packages ?? this.packages,
      extras: extras ?? this.extras,
    );
  }
}

/// Estado de Serviços e preços — separado de [partnerPortfolioProvider]
/// (um `FutureProvider` simples chega lá porque a grelha é só leitura)
/// porque os toggles dos pacotes/extras precisam de atualização local
/// otimista, ao estilo de [ChatController].
class PartnerPricingController extends Notifier<PartnerPricingState> {
  final _backend = MockBackend.instance;

  @override
  PartnerPricingState build() {
    final partnerId = ref.watch(
      authControllerProvider.select((s) => s.profile!.id),
    );
    Future.microtask(() => load(partnerId));
    return const PartnerPricingState();
  }

  Future<void> load(String partnerId) async {
    state = state.copyWith(loading: true);
    final packages = await _backend.listServicePackages(partnerId);
    final extras = await _backend.listServiceExtras(partnerId);
    state = PartnerPricingState(
      loading: false,
      packages: packages,
      extras: extras,
    );
  }

  Future<void> togglePackage(String id, bool active) async {
    final updated = await _backend.togglePackageActive(id, active);
    state = state.copyWith(
      packages: [
        for (final p in state.packages) p.id == id ? updated : p,
      ],
    );
  }

  Future<void> toggleExtra(String id, bool active) async {
    final updated = await _backend.toggleExtraActive(id, active);
    state = state.copyWith(
      extras: [for (final e in state.extras) e.id == id ? updated : e],
    );
  }

  Future<void> editPackage(
    String id, {
    required String name,
    required double price,
    required List<String> features,
  }) async {
    final updated = await _backend.updateServicePackage(
      id,
      name: name,
      price: price,
      features: features,
    );
    state = state.copyWith(
      packages: [
        for (final p in state.packages) p.id == id ? updated : p,
      ],
    );
  }

  Future<void> editExtra(
    String id, {
    required String name,
    required double price,
  }) async {
    final updated = await _backend.updateServiceExtra(
      id,
      name: name,
      price: price,
    );
    state = state.copyWith(
      extras: [for (final e in state.extras) e.id == id ? updated : e],
    );
  }
}

final partnerPricingControllerProvider =
    NotifierProvider<PartnerPricingController, PartnerPricingState>(
      PartnerPricingController.new,
    );
