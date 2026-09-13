import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/chat/chat_helpers.dart';
import '../../../core/models/models.dart';
import '../../../core/partners/favorite_partners_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/reviews/review_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../partner_style.dart';

enum _DetailTab { about, packages, gallery, reviews }

class PartnerDetailScreen extends ConsumerStatefulWidget {
  final Partner partner;
  final bool selectionMode;

  const PartnerDetailScreen({
    super.key,
    required this.partner,
    this.selectionMode = false,
  });

  @override
  ConsumerState<PartnerDetailScreen> createState() =>
      _PartnerDetailScreenState();
}

class _PartnerDetailScreenState extends ConsumerState<PartnerDetailScreen> {
  _DetailTab _tab = _DetailTab.about;
  bool _openingChat = false;
  bool _requestingQuote = false;

  void _comingSoon(String message) {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(SnackBar(content: Text(message)));
  }

  Future<void> _openChat() async {
    final wedding = ref.read(weddingControllerProvider).wedding;
    if (wedding == null || _openingChat) return;
    setState(() => _openingChat = true);
    try {
      final partner = widget.partner;
      final conversationId = await getOrCreateConversation(
        weddingId: wedding.id,
        partnerId: partner.id,
      );
      if (!mounted) return;
      context.push(
        '/chat/$conversationId',
        extra: ChatConversation(
          id: conversationId,
          weddingId: wedding.id,
          partnerId: partner.id,
          name: partner.name,
          avatarSeed: partner.id,
          avatarUrl: partner.imageUrl,
        ),
      );
    } catch (_) {
      if (mounted) _comingSoon('Não foi possível abrir o chat.');
    } finally {
      if (mounted) setState(() => _openingChat = false);
    }
  }

  Future<void> _requestQuote() async {
    final wedding = ref.read(weddingControllerProvider).wedding;
    if (wedding == null || _requestingQuote) return;

    final result = await showModalBottomSheet<_RequestQuoteResult>(
      context: context,
      isScrollControlled: true,
      builder: (context) => _RequestQuoteSheet(
        initialDate: wedding.weddingDate,
        initialLocation: wedding.location,
      ),
    );
    if (result == null || !mounted) return;

    setState(() => _requestingQuote = true);
    try {
      await supabase.rpc(
        'request_quote',
        params: {
          'p_partner_id': widget.partner.id,
          'p_wedding_id': wedding.id,
          'p_event_date': result.eventDate?.toIso8601String().split('T').first,
          'p_location': result.location,
          // O parceiro define o preço na proposta (`send_proposal_screen.dart`)
          // — o casal deixou de indicar orçamento min./máx. aqui, pedido
          // explícito do utilizador (2026-09-04): só envia o pedido, sem
          // pré-condicionar o valor.
          'p_budget_min': null,
          'p_budget_max': null,
          'p_message': result.message,
        },
      );
      // Pedido explícito do utilizador: o pedido de orçamento tem de
      // aparecer no chat tal como a proposta — melhor esforço, não
      // desfaz o pedido já criado se isto falhar.
      try {
        await sendQuoteRequestMessage(
          weddingId: wedding.id,
          partnerId: widget.partner.id,
          partnerName: widget.partner.name,
          eventDate: result.eventDate,
          location: result.location,
          message: result.message,
        );
      } catch (_) {}
      if (mounted) {
        _comingSoon(
          'Pedido de orçamento enviado! O parceiro vai responder em breve.',
        );
      }
    } on PostgrestException catch (e) {
      if (!mounted) return;
      final message = switch (e.code) {
        'P0002' => 'Este parceiro já não está disponível.',
        'P0003' => 'Escolhe uma data com pelo menos 7 dias de antecedência.',
        _ => 'Não foi possível enviar o pedido de orçamento.',
      };
      _comingSoon(message);
    } catch (_) {
      if (mounted)
        _comingSoon('Não foi possível enviar o pedido de orçamento.');
    } finally {
      if (mounted) setState(() => _requestingQuote = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final partner = widget.partner;
    final favorited = ref.watch(
      favoritePartnersControllerProvider.select(
        (s) => s.partnerIds.contains(partner.id),
      ),
    );
    // `null` enquanto a verificação real não responde ainda (ou falha) —
    // tratado como "não deixar enviar", nunca como "livre para pedir",
    // para nunca haver uma janela otimista em que um duplo pedido escapa.
    final relationshipStatus = ref
        .watch(partnerRelationshipStatusProvider(partner.id))
        .maybeWhen(data: (s) => s, orElse: () => null);
    final alreadyRelated =
        !widget.selectionMode && relationshipStatus != PartnerRelationshipStatus.none;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SingleChildScrollView(
            padding: const EdgeInsets.only(bottom: 110),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Stack(
                  children: [
                    SizedBox(
                      height: 280,
                      width: double.infinity,
                      child: Stack(
                        fit: StackFit.expand,
                        children: [
                          Container(
                            color: colorForCategorySlug(
                              partner.primaryCategorySlug,
                            ),
                          ),
                          if (partner.imageUrl != null)
                            Image.network(
                              partner.imageUrl!,
                              fit: BoxFit.cover,
                              loadingBuilder: (context, child, progress) =>
                                  progress == null
                                  ? child
                                  : const SizedBox.shrink(),
                              errorBuilder: (context, error, stackTrace) =>
                                  const SizedBox.shrink(),
                            ),
                        ],
                      ),
                    ),
                    Positioned(
                      top: 12,
                      left: 12,
                      child: SafeArea(
                        bottom: false,
                        child: CircleIconButton(
                          icon: Icons.arrow_back_rounded,
                          background: Colors.white.withValues(alpha: 0.9),
                          size: 46,
                          onTap: () => Navigator.of(context).pop(),
                        ),
                      ),
                    ),
                    Positioned(
                      top: 12,
                      right: 12,
                      child: SafeArea(
                        bottom: false,
                        child: CircleIconButton(
                          icon: favorited
                              ? Icons.favorite
                              : Icons.favorite_border,
                          background: Colors.white.withValues(alpha: 0.9),
                          size: 46,
                          onTap: () => ref
                              .read(favoritePartnersControllerProvider.notifier)
                              .toggle(partner.id),
                        ),
                      ),
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    18,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        partner.name,
                        style: const TextStyle(
                          fontWeight: FontWeight.w800,
                          fontSize: 20,
                        ),
                      ),
                      const SizedBox(height: 6),
                      Builder(
                        builder: (context) {
                          final summary = ref.watch(
                            publicReviewSummaryForPartnerProvider(partner.id),
                          );
                          return Row(
                            children: [
                              if (summary.count > 0) ...[
                                const Icon(
                                  Icons.star_rounded,
                                  size: 17,
                                  color: Colors.amber,
                                ),
                                const SizedBox(width: 3),
                                Text(
                                  summary.average.toStringAsFixed(1),
                                  style: const TextStyle(
                                    fontWeight: FontWeight.w700,
                                    fontSize: 13.5,
                                  ),
                                ),
                                const SizedBox(width: 4),
                                Text(
                                  '(${summary.count} avaliações)',
                                  style: TextStyle(
                                    color: AppTheme.inkMuted,
                                    fontSize: 12.5,
                                  ),
                                ),
                                const SizedBox(width: 10),
                              ],
                              const Icon(
                                Icons.place_outlined,
                                size: 15,
                                color: AppTheme.inkMuted,
                              ),
                              const SizedBox(width: 2),
                              Expanded(
                                child: Text(
                                  partner.location,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                    color: AppTheme.inkMuted,
                                    fontSize: 12.5,
                                  ),
                                ),
                              ),
                            ],
                          );
                        },
                      ),
                      const SizedBox(height: 18),
                      _DetailTabs(
                        selected: _tab,
                        onChanged: (t) => setState(() => _tab = t),
                      ),
                      const SizedBox(height: 18),
                      switch (_tab) {
                        _DetailTab.about => _AboutSection(partner: partner),
                        _DetailTab.packages => _PackagesSection(
                          partnerId: partner.id,
                          averageQuotePrice: partner.averageQuotePrice,
                        ),
                        _DetailTab.gallery => _GallerySection(
                          partnerId: partner.id,
                        ),
                        _DetailTab.reviews => _ReviewsSection(
                          partnerId: partner.id,
                        ),
                      },
                    ],
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: SafeArea(
              top: false,
              child: Container(
                padding: const EdgeInsets.fromLTRB(
                  AppTheme.screenMargin,
                  12,
                  AppTheme.screenMargin,
                  12,
                ),
                decoration: BoxDecoration(
                  color: Colors.white,
                  boxShadow: [
                    BoxShadow(
                      color: AppTheme.accentOliveDark.withValues(alpha: 0.12),
                      blurRadius: 24,
                      offset: const Offset(0, -6),
                    ),
                  ],
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: _openingChat ? null : _openChat,
                        icon: const Icon(Icons.chat_bubble_outline, size: 18),
                        label: const Text('Chat'),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: AppTheme.ink,
                          side: const BorderSide(color: AppTheme.borderMuted),
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      flex: 2,
                      child: ElevatedButton.icon(
                        onPressed: _requestingQuote || alreadyRelated
                            ? null
                            : () {
                                if (widget.selectionMode) {
                                  Navigator.of(context).pop(partner);
                                } else {
                                  _requestQuote();
                                }
                              },
                        icon: Icon(
                          widget.selectionMode ? Icons.check : Icons.add,
                          size: 18,
                        ),
                        label: Text(
                          widget.selectionMode
                              ? 'Escolher parceiro'
                              : switch (relationshipStatus) {
                                  PartnerRelationshipStatus.booked =>
                                    'Já reservado',
                                  PartnerRelationshipStatus.requestPending =>
                                    'Pedido já enviado',
                                  _ => 'Reservar',
                                },
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _DetailTabs extends StatelessWidget {
  final _DetailTab selected;
  final ValueChanged<_DetailTab> onChanged;

  const _DetailTabs({required this.selected, required this.onChanged});

  static const _labels = {
    _DetailTab.about: 'Sobre',
    _DetailTab.packages: 'Pacotes',
    _DetailTab.gallery: 'Galeria',
    _DetailTab.reviews: 'Reviews',
  };

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        children: [
          for (final entry in _labels.entries)
            Padding(
              padding: const EdgeInsets.only(right: 22),
              child: GestureDetector(
                onTap: () => onChanged(entry.key),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      entry.value,
                      style: TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: 14,
                        color: selected == entry.key
                            ? AppTheme.ink
                            : AppTheme.inkMuted,
                      ),
                    ),
                    const SizedBox(height: 6),
                    Container(
                      height: 3,
                      width: 28,
                      decoration: BoxDecoration(
                        color: selected == entry.key
                            ? AppTheme.ink
                            : Colors.transparent,
                        borderRadius: BorderRadius.circular(999),
                      ),
                    ),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _AboutSection extends StatelessWidget {
  final Partner partner;

  const _AboutSection({required this.partner});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (partner.categoryLabels.isNotEmpty) ...[
            Wrap(
              spacing: 6,
              runSpacing: 6,
              children: [
                for (final label in partner.categoryLabels)
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 10,
                      vertical: 5,
                    ),
                    decoration: BoxDecoration(
                      color: AppColors.gray,
                      borderRadius: BorderRadius.circular(999),
                    ),
                    child: Text(
                      label,
                      style: const TextStyle(
                        fontSize: 11.5,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
              ],
            ),
            const SizedBox(height: 12),
          ],
          Text(
            partner.location,
            style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13.5),
          ),
          const SizedBox(height: 10),
          Text(
            partner.description.isEmpty
                ? 'Sem descrição.'
                : partner.description,
            style: const TextStyle(fontSize: 13.5, height: 1.5),
          ),
        ],
      ),
    );
  }
}

class _PackagesSection extends ConsumerWidget {
  final String partnerId;
  final double? averageQuotePrice;

  const _PackagesSection({required this.partnerId, this.averageQuotePrice});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final packagesAsync = ref.watch(partnerPackagesForProvider(partnerId));
    return packagesAsync.when(
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (err, st) => const _ComingSoonSection(
        message: 'Não foi possível carregar os pacotes.',
      ),
      data: (packages) {
        if (packages.isEmpty) {
          final price = averageQuotePrice;
          return _ComingSoonSection(
            message: price == null
                ? 'Este parceiro só trabalha por orçamento — pede uma proposta à medida.'
                : 'Este parceiro só trabalha por orçamento — pede uma proposta à medida.\n'
                      'Valor médio dos orçamentos: cerca de ${price.toStringAsFixed(0)} €.',
          );
        }
        return IntrinsicHeight(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              for (final package in packages) ...[
                Expanded(child: _PackageCard(package: package)),
                if (package != packages.last) const SizedBox(width: 10),
              ],
            ],
          ),
        );
      },
    );
  }
}

class _PackageCard extends StatelessWidget {
  final ServicePackage package;

  const _PackageCard({required this.package});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(12, 16, 12, 14),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(18),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            package.name,
            style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13),
          ),
          const SizedBox(height: 4),
          Text(
            '${package.isStartingPrice ? "Desde " : ""}€${package.price.toStringAsFixed(0)}',
            style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 16),
          ),
          if (package.description.isNotEmpty) ...[
            const SizedBox(height: 8),
            Text(
              package.description,
              style: const TextStyle(fontSize: 11, color: AppTheme.inkMuted),
            ),
          ],
        ],
      ),
    );
  }
}

class _GallerySection extends ConsumerWidget {
  final String partnerId;

  const _GallerySection({required this.partnerId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final portfolioAsync = ref.watch(partnerPortfolioForProvider(partnerId));
    return portfolioAsync.when(
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (err, st) => const _ComingSoonSection(
        message: 'Não foi possível carregar a galeria.',
      ),
      data: (items) {
        if (items.isEmpty) {
          return const _ComingSoonSection(
            message: 'Este parceiro ainda não adicionou fotos.',
          );
        }
        return GridView.count(
          crossAxisCount: 2,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          mainAxisSpacing: 10,
          crossAxisSpacing: 10,
          childAspectRatio: 1,
          children: [
            for (final item in items)
              ClipRRect(
                borderRadius: BorderRadius.circular(16),
                child: item.mediaType == PortfolioMediaType.video
                    ? Container(
                        color: AppTheme.ink,
                        alignment: Alignment.center,
                        child: const Icon(
                          Icons.play_circle_outline,
                          color: Colors.white,
                          size: 32,
                        ),
                      )
                    : Image.network(
                        item.mediaUrl,
                        fit: BoxFit.cover,
                        errorBuilder: (context, error, stackTrace) =>
                            Container(color: AppColors.pink),
                      ),
              ),
          ],
        );
      },
    );
  }
}

/// Avaliações publicadas do parceiro (`reviews`, 045_reviews.sql) —
/// mostra o nome e foto do casal autor (`get_review_authors()`,
/// `069_public_review_authors.sql`) a QUALQUER visitante do
/// Marketplace, pedido explícito do utilizador (2026-09-13), confirmado
/// mesmo sabendo que expõe isso além de a quem tem uma relação real com
/// o casal (o próprio parceiro avaliado).
class _ReviewsSection extends ConsumerWidget {
  final String partnerId;

  const _ReviewsSection({required this.partnerId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final reviewsAsync = ref.watch(publicReviewsForPartnerProvider(partnerId));
    return reviewsAsync.when(
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (err, st) => const _ComingSoonSection(
        message: 'Não foi possível carregar as avaliações.',
      ),
      data: (reviews) {
        if (reviews.isEmpty) {
          return const _ComingSoonSection(
            message:
                'Ainda sem avaliações — sê o primeiro casal a partilhar a vossa experiência.',
          );
        }
        return Column(
          children: [
            for (final review in reviews) ...[
              _ReviewCard(review: review),
              const SizedBox(height: 12),
            ],
          ],
        );
      },
    );
  }
}

class _ReviewCard extends StatelessWidget {
  final Review review;

  const _ReviewCard({required this.review});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(18),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              review.coupleAvatarUrl == null
                  ? InitialsAvatar(name: review.coupleDisplayName, radius: 16)
                  : CircleAvatar(
                      radius: 16,
                      backgroundColor: AppColors.gray,
                      backgroundImage: NetworkImage(review.coupleAvatarUrl!),
                    ),
              const SizedBox(width: 10),
              Expanded(
                child: Text(
                  review.coupleDisplayName,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: 13.5,
                    color: AppTheme.ink,
                  ),
                ),
              ),
              Text(
                '${review.createdAt.day.toString().padLeft(2, '0')}/${review.createdAt.month.toString().padLeft(2, '0')}/${review.createdAt.year}',
                style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              for (var i = 1; i <= 5; i++)
                Icon(
                  i <= review.rating ? Icons.star_rounded : Icons.star_border_rounded,
                  size: 14,
                  color: Colors.amber,
                ),
            ],
          ),
          if (review.comment != null) ...[
            const SizedBox(height: 6),
            Text(
              review.comment!,
              style: TextStyle(
                color: AppTheme.inkMuted,
                fontSize: 13,
                height: 1.4,
              ),
            ),
          ],
          if (review.response != null) ...[
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: AppColors.muted,
                borderRadius: BorderRadius.circular(14),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Resposta do parceiro',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 11.5,
                      color: AppTheme.accentOliveDark,
                    ),
                  ),
                  const SizedBox(height: 3),
                  Text(
                    review.response!,
                    style: TextStyle(
                      color: AppTheme.ink,
                      fontSize: 12.5,
                      height: 1.4,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}

class _ComingSoonSection extends StatelessWidget {
  final String message;

  const _ComingSoonSection({required this.message});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Text(
        message,
        textAlign: TextAlign.center,
        style: TextStyle(color: AppTheme.inkMuted),
      ),
    );
  }
}

class _RequestQuoteResult {
  final DateTime? eventDate;
  final String? location;
  final String? message;

  const _RequestQuoteResult({this.eventDate, this.location, this.message});
}

/// Formulário de "Pedir orçamento" — liga o botão "Reservar" ao RPC
/// real `request_quote()` (`009_quotations_bookings.sql`). Todos os
/// campos são opcionais (o RPC já trata `null` em cada um), exceto a
/// regra RN de a data do evento ter de ter pelo menos 7 dias de
/// antecedência (`p_event_date < current_date + 7` → erro `P0003`) —
/// aplicada aqui também no `firstDate` do date picker, para o casal
/// nunca conseguir escolher uma data que o servidor ia recusar.
class _RequestQuoteSheet extends StatefulWidget {
  final DateTime? initialDate;
  final String? initialLocation;

  const _RequestQuoteSheet({this.initialDate, this.initialLocation});

  @override
  State<_RequestQuoteSheet> createState() => _RequestQuoteSheetState();
}

class _RequestQuoteSheetState extends State<_RequestQuoteSheet> {
  late final _location = TextEditingController(
    text: widget.initialLocation ?? '',
  );
  final _message = TextEditingController();
  DateTime? _eventDate;

  DateTime get _minSelectableDate =>
      DateTime.now().add(const Duration(days: 7));

  @override
  void initState() {
    super.initState();
    final initial = widget.initialDate;
    _eventDate = (initial != null && !initial.isBefore(_minSelectableDate))
        ? initial
        : null;
  }

  @override
  void dispose() {
    _location.dispose();
    _message.dispose();
    super.dispose();
  }

  Future<void> _pickDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _eventDate ?? _minSelectableDate,
      firstDate: _minSelectableDate,
      lastDate: DateTime.now().add(const Duration(days: 365 * 3)),
    );
    if (picked != null) setState(() => _eventDate = picked);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Pedir orçamento',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 4),
          Text(
            'Envia os detalhes do teu casamento — o parceiro responde diretamente pelo Chat.',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
          ),
          const SizedBox(height: 16),
          InkWell(
            borderRadius: BorderRadius.circular(12),
            onTap: _pickDate,
            child: InputDecorator(
              decoration: const InputDecoration(
                labelText: 'Data do evento (opcional)',
              ),
              child: Text(
                _eventDate == null
                    ? 'A combinar'
                    : '${_eventDate!.day.toString().padLeft(2, '0')}/${_eventDate!.month.toString().padLeft(2, '0')}/${_eventDate!.year}',
              ),
            ),
          ),
          const SizedBox(height: 12),
          AuthTextField(label: 'Localização (opcional)', controller: _location),
          const SizedBox(height: 12),
          AuthTextField(label: 'Mensagem (opcional)', controller: _message),
          const SizedBox(height: 16),
          PrimaryButton(
            label: 'Enviar pedido',
            onPressed: () {
              Navigator.of(context).pop(
                _RequestQuoteResult(
                  eventDate: _eventDate,
                  location: _location.text.trim().isEmpty
                      ? null
                      : _location.text.trim(),
                  message: _message.text.trim().isEmpty
                      ? null
                      : _message.text.trim(),
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
