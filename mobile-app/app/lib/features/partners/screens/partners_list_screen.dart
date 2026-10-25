import 'dart:async';

import 'package:flutter/material.dart';
import '../../../shared/widgets/permissions_step.dart' show ensurePermission, AppPermission;
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/partners/favorite_partners_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../partner_style.dart';
import 'partner_detail_screen.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/money.dart';
import '../../../core/partner_profile/partner_location.dart';
import '../../../shared/widgets/island_sheet.dart';

class PartnersListScreen extends ConsumerStatefulWidget {
  final String? categorySlug;
  final bool selectionMode;

  const PartnersListScreen({
    super.key,
    this.categorySlug,
    this.selectionMode = false,
  });

  @override
  ConsumerState<PartnersListScreen> createState() => _PartnersListScreenState();
}

class _PartnersListScreenState extends ConsumerState<PartnersListScreen> {
  late String? _filter = widget.categorySlug;
  final _search = TextEditingController();

  /// Localização escolhida pelo cliente para filtrar parceiros — `null`
  /// = ainda não escolheu nada, usa a localização do casamento como
  /// sugestão inicial; `''` = escolheu explicitamente "Todas as
  /// localizações" (sem filtro); qualquer outro valor filtra a lista.
  String? _selectedLocation;

  /// Filtros avançados (folha do botão de filtros) — tudo do lado do
  /// cliente, sobre os parceiros já carregados.
  double? _maxPrice;
  double? _minRating;
  _PartnerSort _sort = _PartnerSort.relevance;

  bool get _hasAdvancedFilters =>
      _maxPrice != null || _minRating != null || _sort != _PartnerSort.relevance;

  @override
  void initState() {
    super.initState();
    _search.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  void _showFavoritesSheet() {
    showIslandSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => const _FavoritesSheet(),
    );
  }

  Future<void> _showFilters() async {
    final result = await showIslandSheet<_AdvancedFilters>(
      context: context,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
      ),
      builder: (_) => _FiltersSheet(
        initial: _AdvancedFilters(_maxPrice, _minRating, _sort),
      ),
    );
    if (result == null) return;
    setState(() {
      _maxPrice = result.maxPrice;
      _minRating = result.minRating;
      _sort = result.sort;
    });
  }

  List<Partner> _applyAdvanced(List<Partner> list) {
    double? price(Partner p) => p.startingPrice ?? p.averageQuotePrice;
    var out = list.where((p) {
      if (_maxPrice != null) {
        final v = price(p);
        if (v == null || v > _maxPrice!) return false;
      }
      if (_minRating != null && (p.rating ?? 0) < _minRating!) return false;
      return true;
    }).toList();
    switch (_sort) {
      case _PartnerSort.relevance:
        break;
      case _PartnerSort.priceAsc:
        out.sort((a, b) => (price(a) ?? double.infinity).compareTo(price(b) ?? double.infinity));
      case _PartnerSort.rating:
        out.sort((a, b) => (b.rating ?? 0).compareTo(a.rating ?? 0));
    }
    return out;
  }

  /// Localizações disponíveis para o cliente escolher — derivadas dos
  /// parceiros já carregados (`service_areas`, via `Partner.location`)
  /// em vez de uma lista fixa, para refletir sempre onde os parceiros
  /// reais estão, e nunca oferecer uma área sem nenhum parceiro.
  /// Pedido do utilizador (2026-10-17): "aplica a localização atual e
  /// outras opções quando vais escolher o parceiro" — localização do
  /// telemóvel, local do evento, pesquisa de localidade ou as zonas onde
  /// já há parceiros.
  Future<void> _showLocationPicker(List<String> options) async {
    final weddingLocation = ref.read(weddingControllerProvider).wedding?.location;
    final result = await showIslandSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xxl))),
      builder: (context) => LocationPickerSheet(options: options, eventLocation: weddingLocation),
    );
    if (result != null && mounted) setState(() => _selectedLocation = result);
  }

  @override
  Widget build(BuildContext context) {
    final categoryOptionsAsync = ref.watch(partnerCategoryOptionsProvider);
    final partnersAsync = ref.watch(
      partnersProvider(widget.selectionMode ? widget.categorySlug : _filter),
    );
    final selectedLabel = categoryOptionsAsync.maybeWhen(
      data: (options) => options.where((o) => o.slug == _filter).firstOrNull?.label,
      orElse: () => null,
    );
    final weddingLocation = ref.watch(weddingControllerProvider).wedding?.location;
    // Localização efetiva: o que o cliente escolheu explicitamente
    // (incluindo "Todas as localizações", `''`), ou a localização do
    // casamento como sugestão inicial antes de escolher alguma.
    final effectiveLocation = _selectedLocation ?? weddingLocation ?? '';
    final locationOptions = partnersAsync
        .maybeWhen(
          data: (list) => list
              .where((p) => p.location != 'Âmbito nacional')
              .expand((p) => p.location.split(', '))
              .where((l) => l.isNotEmpty),
          orElse: () => const Iterable<String>.empty(),
        )
        .toSet()
        .toList()
      ..sort();

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                // Redesign 2026-10: título "Parceiros" com a localização
                // ao lado direito, na mesma linha.
                PageHeader(
                  title: widget.selectionMode ? null : 'Parceiros',
                  topPadding: 8,
                  showBack: widget.selectionMode,
                  trailing: SnappyTap(
                    onTap: () => _showLocationPicker(locationOptions),
                    child: Container(
                      height: 44,
                      constraints: const BoxConstraints(maxWidth: 170),
                      padding: const EdgeInsets.symmetric(horizontal: 14),
                      decoration: BoxDecoration(
                        color: AppTheme.surface,
                        borderRadius: BorderRadius.circular(AppRadius.pill),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(Icons.location_on_outlined, size: 16, color: AppTheme.inkMuted),
                          const SizedBox(width: 4),
                          Flexible(
                            child: Text(
                              effectiveLocation.isEmpty ? 'Todas' : effectiveLocation,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(
                                color: AppTheme.inkMuted,
                                fontWeight: FontWeight.w700,
                                fontSize: AppFontSize.md,
                              ),
                            ),
                          ),
                          const SizedBox(width: 2),
                          const Icon(Icons.expand_more, size: 16, color: AppTheme.inkMuted),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: Container(
                          decoration: softCard(radius: AppRadius.pill),
                          child: TextField(
                            controller: _search,
                            decoration: InputDecoration(
                              hintText: 'Espaços, fotografia, flores…',
                              prefixIcon: const Icon(Icons.search, size: 20),
                              filled: true,
                              fillColor: Colors.white,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(AppRadius.pill),
                                borderSide: BorderSide.none,
                              ),
                              enabledBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(AppRadius.pill),
                                borderSide: BorderSide.none,
                              ),
                              focusedBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(AppRadius.pill),
                                borderSide: BorderSide(color: AppTheme.accentOliveDark),
                              ),
                              contentPadding: const EdgeInsets.symmetric(
                                vertical: 12,
                              ),
                            ),
                          ),
                        ),
                      ),
                      if (!widget.selectionMode) ...[
                        const SizedBox(width: 10),
                        SnappyTap(
                          onTap: _showFavoritesSheet,
                          child: Container(
                            width: 46,
                            height: 46,
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: AppTheme.surface,
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(
                              Icons.favorite_border,
                              size: 18,
                              color: AppTheme.ink,
                            ),
                          ),
                        ),
                      ],
                      const SizedBox(width: 10),
                      SnappyTap(
                        onTap: _showFilters,
                        child: Container(
                          width: 46,
                          height: 46,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: AppTheme.surface,
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(
                            Icons.tune,
                            size: 18,
                            color: AppTheme.ink,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                // Categorias em pílulas por baixo da pesquisa (mockup,
                // 2026-10-19) — antes estavam na barra de baixo.
                if (!widget.selectionMode)
                  categoryOptionsAsync.maybeWhen(
                    data: (options) {
                      final all = <PartnerCategoryOption?>[null, ...options];
                      return SizedBox(
                        height: 52,
                        child: ListView.separated(
                          scrollDirection: Axis.horizontal,
                          clipBehavior: Clip.none,
                          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 6),
                          itemCount: all.length,
                          separatorBuilder: (context, i) => const SizedBox(width: 8),
                          itemBuilder: (context, i) {
                            final o = all[i];
                            final on = o?.slug == _filter;
                            return SnappyTap(
                              onTap: () => setState(() => _filter = o?.slug),
                              child: AnimatedContainer(
                                duration: const Duration(milliseconds: 180),
                                padding: const EdgeInsets.symmetric(horizontal: 14),
                                alignment: Alignment.center,
                                // Sem sombra: a lista horizontal cortava-a e
                                // ficava uma linha por baixo das pílulas.
                                decoration: BoxDecoration(
                                  color: on ? AppTheme.accentOliveDark : const Color(0xFFF2F0EB),
                                  borderRadius: BorderRadius.circular(999),
                                ),
                                child: Text(o?.label ?? 'Todos',
                                    style: TextStyle(
                                        fontSize: 13,
                                        fontWeight: FontWeight.w700,
                                        color: on ? Colors.white : v2Muted)),
                              ),
                            );
                          },
                        ),
                      );
                    },
                    orElse: () => const SizedBox(height: 52),
                  ),
                if (widget.selectionMode)
                  Padding(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      12,
                      AppTheme.screenMargin,
                      0,
                    ),
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Text(
                        selectedLabel == null
                            ? 'Escolhe um parceiro para esta tarefa.'
                            : 'Escolhe um parceiro de ${selectedLabel.toLowerCase()} para esta tarefa.',
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                    ),
                  ),
                Expanded(
                  child: partnersAsync.when(
                    loading: () =>
                        const Center(child: CircularProgressIndicator()),
                    error: (err, st) => AsyncErrorView(message: 'Não foi possível carregar parceiros.', onRetry: () => ref.invalidate(
                      partnersProvider(widget.selectionMode ? widget.categorySlug : _filter),
                    )),
                    data: (allPartners) {
                      // Filtra pela localização escolhida pelo cliente
                      // — "Âmbito nacional" nunca é excluído (esse
                      // parceiro serve qualquer área).
                      final byLocation = effectiveLocation.isEmpty
                          ? allPartners
                          : allPartners
                                .where(
                                  (s) =>
                                      s.location == 'Âmbito nacional' ||
                                      _near(s.location, effectiveLocation),
                                )
                                .toList();
                      final query = _search.text.trim().toLowerCase();
                      // Sem ninguém na zona escolhida: mostra todos, com
                      // um aviso, em vez de uma página vazia.
                      final noneNear = effectiveLocation.isNotEmpty && byLocation.isEmpty && allPartners.isNotEmpty;
                      final pool = noneNear ? allPartners : byLocation;
                      final partners = _applyAdvanced(query.isEmpty
                          ? pool
                          : pool
                                .where(
                                  (s) => s.name.toLowerCase().contains(query),
                                )
                                .toList());
                      if (partners.isEmpty) {
                        return Center(
                          child: Text(
                            _hasAdvancedFilters
                                ? 'Sem parceiros com estes filtros.'
                                : query.isEmpty
                                ? 'Sem parceiros nesta localização.'
                                : 'Sem parceiros para "${_search.text.trim()}".',
                          ),
                        );
                      }
                      return EdgeFade(
                        topFadeHeight: 32,
                        bottomFadeHeight: 140,
                        child: ListView(
                          padding: EdgeInsets.fromLTRB(
                            0,
                            12,
                            0,
                            widget.selectionMode ? 40 : 140,
                          ),
                          children: [
                            // Como no mockup (2026-10-19): destaques num
                            // carrossel e, por baixo, todos os parceiros
                            // numa lista com foto, preço e favorito.
                            if (noneNear && !widget.selectionMode)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 14),
                                child: InfoNote(
                                  'Ainda não há parceiros em $effectiveLocation. Mostramos todos os parceiros.',
                                  icon: Icons.info_outline_rounded,
                                ),
                              ),
                            if (!widget.selectionMode && query.isEmpty && _filter == null && partners.isNotEmpty) ...[
                              _SectionHeader(
                                title: effectiveLocation.isEmpty || noneNear ? 'Em destaque' : 'Em destaque perto de ti',
                                strong: true,
                              ),
                              SizedBox(
                                height: 176,
                                child: ListView.separated(
                                  scrollDirection: Axis.horizontal,
                                  clipBehavior: Clip.none,
                                  padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                                  itemCount: featured(partners).length,
                                  separatorBuilder: (context, i) => const SizedBox(width: 10),
                                  itemBuilder: (context, i) {
                                    final p = featured(partners)[i];
                                    return _FeaturedCard(partner: p, onTap: () => _openDetails(context, p));
                                  },
                                ),
                              ),
                              const SizedBox(height: 14),
                            ],
                            if (!widget.selectionMode)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 4, AppTheme.screenMargin, 12),
                                child: Row(
                                  children: [
                                    Expanded(
                                      child: Text(
                                        '${partners.length} ${partners.length == 1 ? 'parceiro' : 'parceiros'}',
                                        style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink),
                                      ),
                                    ),
                                    SnappyTap(
                                      onTap: _showFilters,
                                      child: Text(
                                        _hasAdvancedFilters ? 'Filtros ativos' : 'Filtrar',
                                        style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            for (final partner in partners)
                              Padding(
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 10),
                                child: _PartnerCard(
                                  partner: partner,
                                  onTap: () => _openDetails(context, partner),
                                ),
                              ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          if (!widget.selectionMode)
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: FloatingBottomNav(current: AppTab.partners),
            ),
        ],
      ),
    );
  }

  Future<void> _openDetails(BuildContext context, Partner partner) async {
    final chosen = await PartnerDetailScreen.show(
      context,
      partner,
      selectionMode: widget.selectionMode,
    );
    if (chosen != null && context.mounted) {
      Navigator.of(context).pop(chosen);
    }
  }
}

/// "Perto de ti": a zona do parceiro bate com a localização escolhida
/// nos dois sentidos — "Grande Lisboa" encontra quem serve "Lisboa" e
/// vice-versa (antes só um sentido, e o evento em "Grande Lisboa" não
/// via os parceiros de Lisboa).
bool _near(String partnerAreas, String wanted) {
  final w = wanted.toLowerCase().trim();
  if (w.isEmpty) return true;
  for (final area in partnerAreas.toLowerCase().split(', ')) {
    final a = area.trim();
    if (a.isEmpty) continue;
    if (a.contains(w) || w.contains(a)) return true;
  }
  return false;
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}

/// Carrossel de categorias estilo "escolhas populares" (ícone numa
/// bolha + rótulo por baixo, como em apps de entregas). Ao contrário do
/// [CoverFlowPicker] partilhado (que centra a opção), aqui a opção
/// selecionada fica maior e encostada à esquerda — mostra sempre 3 a 4
/// categorias de cada vez, com espaço visível entre elas.

/// Os mais bem avaliados (com avaliações reais), para o carrossel.
/// Carrossel "Em destaque" (2026-10-20): primeiro os escolhidos à mão no
/// admin, depois o automático (melhor avaliação), até 6.
List<Partner> featured(List<Partner> all) {
  final manual = all.where((p) => p.featured).toList();
  final rest = all.where((p) => !p.featured).toList();
  final rated = rest.where((p) => (p.rating ?? 0) > 0).toList()
    ..sort((a, b) => (b.rating ?? 0).compareTo(a.rating ?? 0));
  final auto = rated.length >= 3 ? rated : [...rated, ...rest.where((p) => (p.rating ?? 0) <= 0)];
  return [...manual, ...auto].take(6).toList();
}

String _priceLabel(Partner p) {
  if (p.startingPrice != null) return 'desde ${euros(p.startingPrice!)}';
  if (p.averageQuotePrice != null) return 'média ${euros(p.averageQuotePrice!)}';
  return 'Pedir orçamento';
}

String? _ratingLabel(Partner p) {
  final r = p.rating;
  if (r == null || r <= 0) return null;
  return r.toStringAsFixed(1).replaceAll('.', ',');
}

class _SectionHeader extends StatelessWidget {
  final String title;
  final String? trailing;
  final bool strong;
  const _SectionHeader({required this.title, this.trailing, this.strong = false});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 4, AppTheme.screenMargin, 12),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.baseline,
          textBaseline: TextBaseline.alphabetic,
          children: [
            Expanded(
              child: Text(title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: strong
                      ? AppTypography.displaySerif(fontSize: 22, fontWeight: FontWeight.w800, color: AppTheme.ink)
                      : const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
            if (trailing != null) ...[
              const SizedBox(width: 8),
              ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 120),
                child: Text(trailing!,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
              ),
            ],
          ],
        ),
      );
}

/// Foto do parceiro (ou a cor da categoria enquanto não há foto).
class _PartnerPhoto extends StatelessWidget {
  final Partner partner;
  const _PartnerPhoto(this.partner);

  @override
  Widget build(BuildContext context) => Stack(
        fit: StackFit.expand,
        children: [
          Container(color: colorForCategorySlug(partner.primaryCategorySlug)),
          if (partner.imageUrl == null)
            Center(child: Icon(iconForCategorySlug(partner.primaryCategorySlug), color: Colors.white, size: 26))
          else
            Image.network(
              partner.imageUrl!,
              fit: BoxFit.cover,
              loadingBuilder: (context, child, progress) => progress == null ? child : const SizedBox.shrink(),
              errorBuilder: (context, error, stackTrace) => const SizedBox.shrink(),
            ),
        ],
      );
}

class _RatingChip extends StatelessWidget {
  final String rating;
  const _RatingChip(this.rating);

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
        decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(999)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          const Icon(Icons.star_rounded, size: 12, color: Colors.white),
          const SizedBox(width: 2),
          Text(rating, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.white)),
        ]),
      );
}

/// Destaque: cartão estreito com foto, nota e nome (carrossel).
class _FeaturedCard extends StatelessWidget {
  final Partner partner;
  final VoidCallback onTap;
  const _FeaturedCard({required this.partner, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final rating = _ratingLabel(partner);
    return SnappyTap(
      onTap: onTap,
      child: Container(
        width: 150,
        clipBehavior: Clip.antiAlias,
        decoration: softCard(radius: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              height: 96,
              width: double.infinity,
              child: Stack(fit: StackFit.expand, children: [
                _PartnerPhoto(partner),
                if (rating != null) Positioned(left: 8, top: 8, child: _RatingChip(rating)),
              ]),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(11, 9, 11, 0),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(partner.name,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 2),
                Text(partner.primaryCategoryLabel,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 12, color: v2Muted)),
                const SizedBox(height: 4),
                Text(_priceLabel(partner),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
              ]),
            ),
          ],
        ),
      ),
    );
  }
}

/// Linha de parceiro: foto quadrada, nome, categoria · zona · nota,
/// preço e favorito (redesign 2026-10-19).
class _PartnerCard extends ConsumerWidget {
  final Partner partner;
  final VoidCallback onTap;

  const _PartnerCard({required this.partner, required this.onTap});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final favorited = ref.watch(
      favoritePartnersControllerProvider.select((s) => s.partnerIds.contains(partner.id)),
    );
    final rating = _ratingLabel(partner);
    final meta = [partner.primaryCategoryLabel, partner.location].join(' · ');
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(10),
        decoration: softCard(radius: 22),
        child: Row(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(16),
              child: SizedBox(width: 76, height: 76, child: _PartnerPhoto(partner)),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(partner.name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 15, color: AppTheme.ink)),
                  const SizedBox(height: 2),
                  Text.rich(
                    TextSpan(children: [
                      TextSpan(text: meta),
                      if (rating != null) ...[
                        const TextSpan(text: ' · '),
                        WidgetSpan(
                          alignment: PlaceholderAlignment.middle,
                          child: Icon(Icons.star_rounded, size: 13, color: AppTheme.accentOliveDark),
                        ),
                        TextSpan(text: ' $rating (${partner.reviewCount})'),
                      ],
                    ]),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(color: v2Muted, fontSize: 12),
                  ),
                  const SizedBox(height: 6),
                  Text(_priceLabel(partner),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700, fontSize: 13)),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Tooltip(
              message: favorited ? 'Tirar dos favoritos' : 'Guardar nos favoritos',
              child: SnappyTap(
                onTap: () => ref.read(favoritePartnersControllerProvider.notifier).toggle(partner.id),
                child: Container(
                  width: 38,
                  height: 38,
                  decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle, boxShadow: softShadow),
                  child: Icon(favorited ? Icons.favorite : Icons.favorite_border,
                      size: 18, color: favorited ? const Color(0xFFA3412E) : AppTheme.accentOliveDark),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Sheet de favoritos — pedido explícito do utilizador: "mesmo estilo
/// de janela que a página de notificações" (`_NotificationsSheet` em
/// `home_feed_screen.dart`). Mesma arquitetura: `DraggableScrollableSheet`
/// branco com cantos arredondados a subir do fundo, sobre `favorite_partners`
/// real (não uma lista inventada).
class _FavoritesSheet extends ConsumerWidget {
  const _FavoritesSheet();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final favoriteIds = ref.watch(favoritePartnersControllerProvider.select((s) => s.partnerIds));
    final partnersAsync = ref.watch(partnersProvider(null));

    return DraggableScrollableSheet(
      initialChildSize: 0.75,
      minChildSize: 0.4,
      maxChildSize: 0.92,
      expand: false,
      builder: (context, scrollController) {
        return Container(
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
          ),
          child: SafeArea(
            child: Column(
              children: [
                const SizedBox(height: 10),
                Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(
                    color: AppTheme.borderMuted,
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
                  child: Row(
                    children: [
                      Text('Favoritos', style: Theme.of(context).textTheme.titleLarge),
                      const Spacer(),
                      Icon(Icons.favorite, size: 18, color: AppTheme.accentOliveDark),
                    ],
                  ),
                ),
                const SizedBox(height: 14),
                Expanded(
                  child: partnersAsync.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (err, st) => AsyncErrorView(message: 'Não foi possível carregar os favoritos.', onRetry: () => ref.invalidate(partnersProvider(null))),
                    data: (allPartners) {
                      final favorites = allPartners.where((p) => favoriteIds.contains(p.id)).toList();
                      if (favorites.isEmpty) {
                        return Center(
                          child: Padding(
                            padding: const EdgeInsets.all(24),
                            child: Text(
                              'Ainda não guardaste nenhum favorito — toca no coração de um parceiro para o guardares aqui.',
                              textAlign: TextAlign.center,
                              style: TextStyle(color: AppTheme.inkMuted),
                            ),
                          ),
                        );
                      }
                      return ListView(
                        controller: scrollController,
                        padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
                        children: [
                          for (final partner in favorites) ...[
                            _PartnerCard(
                              partner: partner,
                              onTap: () async {
                                await PartnerDetailScreen.show(context, partner);
                              },
                            ),
                            const SizedBox(height: 16),
                          ],
                        ],
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}


enum _PartnerSort { relevance, priceAsc, rating }

class _AdvancedFilters {
  final double? maxPrice;
  final double? minRating;
  final _PartnerSort sort;

  const _AdvancedFilters(this.maxPrice, this.minRating, this.sort);
}

/// Filtros avançados de parceiros — preço máximo, avaliação mínima e
/// ordenação. Antes o botão mostrava "Filtros avançados em breve".
class _FiltersSheet extends StatefulWidget {
  final _AdvancedFilters initial;

  const _FiltersSheet({required this.initial});

  @override
  State<_FiltersSheet> createState() => _FiltersSheetState();
}

class _FiltersSheetState extends State<_FiltersSheet> {
  late double? _maxPrice = widget.initial.maxPrice;
  late double? _minRating = widget.initial.minRating;
  late _PartnerSort _sort = widget.initial.sort;

  static const _prices = <double?>[null, 1000, 2500, 5000, 10000];
  static const _ratings = <double?>[null, 4, 4.5];

  Widget _chips<T>(List<T> values, T selected, String Function(T) label, ValueChanged<T> onTap) {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: [
        for (final v in values)
          ChoiceChip(
            label: Text(label(v)),
            selected: v == selected,
            showCheckmark: false,
            selectedColor: AppTheme.accentOliveDark,
            labelStyle: TextStyle(
              color: v == selected ? Colors.white : AppTheme.ink,
              fontWeight: FontWeight.w600,
            ),
            onSelected: (_) => setState(() => onTap(v)),
          ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final title = Theme.of(context).textTheme.titleMedium;
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(24, 20, 24, 20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Filtros', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 18),
            Text('Preço até', style: title),
            const SizedBox(height: 8),
            _chips<double?>(_prices, _maxPrice, (v) => v == null ? 'Qualquer' : euros(v), (v) => _maxPrice = v),
            const SizedBox(height: 18),
            Text('Avaliação', style: title),
            const SizedBox(height: 8),
            _chips<double?>(
              _ratings,
              _minRating,
              (v) => v == null ? 'Qualquer' : '${v.toString().replaceAll('.', ',')}+',
              (v) => _minRating = v,
            ),
            const SizedBox(height: 18),
            Text('Ordenar por', style: title),
            const SizedBox(height: 8),
            _chips<_PartnerSort>(
              _PartnerSort.values,
              _sort,
              (v) => switch (v) {
                _PartnerSort.relevance => 'Relevância',
                _PartnerSort.priceAsc => 'Preço mais baixo',
                _PartnerSort.rating => 'Melhor avaliação',
              },
              (v) => _sort = v,
            ),
            const SizedBox(height: 24),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: () => Navigator.of(context).pop(
                      const _AdvancedFilters(null, null, _PartnerSort.relevance),
                    ),
                    child: const Text('Limpar'),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: ElevatedButton(
                    onPressed: () => Navigator.of(context).pop(
                      _AdvancedFilters(_maxPrice, _minRating, _sort),
                    ),
                    child: const Text('Aplicar'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}


class LocationPickerSheet extends StatefulWidget {
  final List<String> options;
  final String? eventLocation;

  const LocationPickerSheet({super.key, required this.options, this.eventLocation});

  @override
  State<LocationPickerSheet> createState() => _LocationPickerSheetState();
}

class _LocationPickerSheetState extends State<LocationPickerSheet> {
  final _query = TextEditingController();
  Timer? _debounce;
  bool _locating = false;
  List<String> _results = const [];

  @override
  void dispose() {
    _query.dispose();
    _debounce?.cancel();
    super.dispose();
  }

  Future<void> _useCurrent() async {
    // Pede a localização outra vez, se for preciso (2026-10-25).
    if (!await ensurePermission(context, AppPermission.location)) return;
    if (!mounted) return;
    setState(() => _locating = true);
    try {
      final pos = await currentPosition();
      final loc = await reverseGeocode(pos.latitude, pos.longitude);
      final place = loc.city.isNotEmpty ? loc.city : loc.region;
      if (!mounted) return;
      if (place.isEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível perceber a localidade.')));
      } else {
        Navigator.of(context).pop(place);
      }
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(e is LocationException ? e.message : 'Não foi possível obter a localização.')),
      );
    } finally {
      if (mounted) setState(() => _locating = false);
    }
  }

  void _onSearch(String q) {
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 450), () async {
      try {
        final r = await searchAddress(q);
        final places = <String>{
          for (final (_, l) in r)
            if (l.city.isNotEmpty) l.city else if (l.region.isNotEmpty) l.region,
        }.toList();
        if (mounted) setState(() => _results = places);
      } catch (_) {}
    });
  }

  Widget _tile(IconData icon, String title, {String? subtitle, required VoidCallback onTap, Widget? leading}) {
    return ListTile(
      contentPadding: EdgeInsets.zero,
      leading: leading ?? Icon(icon, color: AppTheme.accentOliveDark),
      title: Text(title, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
      subtitle: subtitle == null ? null : Text(subtitle, style: const TextStyle(color: AppTheme.inkMuted)),
      onTap: onTap,
    );
  }

  @override
  Widget build(BuildContext context) {
    final event = widget.eventLocation?.trim() ?? '';
    return SafeArea(
      child: Padding(
        padding: EdgeInsets.fromLTRB(24, 16, 24, 16 + MediaQuery.of(context).viewInsets.bottom),
        child: ConstrainedBox(
          constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.8),
          child: ListView(
            shrinkWrap: true,
            children: [
              Center(
                child: Container(width: 40, height: 4, decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2))),
              ),
              const SizedBox(height: 14),
              const Text('Onde procurar parceiros?', style: TextStyle(fontSize: AppFontSize.h3, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 8),
              _tile(
                Icons.my_location,
                'Usar a minha localização atual',
                subtitle: 'Parceiros perto de onde estás',
                leading: _locating
                    ? const SizedBox(width: 24, height: 24, child: CircularProgressIndicator(strokeWidth: 2.5))
                    : null,
                onTap: _locating ? () {} : _useCurrent,
              ),
              if (event.isNotEmpty)
                _tile(Icons.celebration_outlined, 'Local do evento', subtitle: event, onTap: () => Navigator.of(context).pop(event)),
              _tile(Icons.public, 'Todas as localizações', onTap: () => Navigator.of(context).pop('')),
              const SizedBox(height: 8),
              TextField(
                controller: _query,
                onChanged: _onSearch,
                decoration: const InputDecoration(hintText: 'Escreve uma localidade', prefixIcon: Icon(Icons.search)),
              ),
              for (final r in _results)
                _tile(Icons.location_on_outlined, r, onTap: () => Navigator.of(context).pop(r)),
              if (widget.options.isNotEmpty) ...[
                const SizedBox(height: 16),
                const Text('ONDE HÁ PARCEIROS', style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFF8F8B84))),
                for (final o in widget.options)
                  _tile(Icons.location_on_outlined, o, onTap: () => Navigator.of(context).pop(o)),
              ],
            ],
          ),
        ),
      ),
    );
  }
}
