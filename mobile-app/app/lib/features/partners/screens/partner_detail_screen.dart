import 'package:flutter/material.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../partner_style.dart';

enum _DetailTab { about, packages, gallery, reviews }

class PartnerDetailScreen extends StatefulWidget {
  final Partner partner;
  final bool selectionMode;

  const PartnerDetailScreen({
    super.key,
    required this.partner,
    this.selectionMode = false,
  });

  @override
  State<PartnerDetailScreen> createState() => _PartnerDetailScreenState();
}

class _PartnerDetailScreenState extends State<PartnerDetailScreen> {
  _DetailTab _tab = _DetailTab.packages;
  bool _favorited = false;

  void _comingSoon(String message) {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(SnackBar(content: Text(message)));
  }

  @override
  Widget build(BuildContext context) {
    final partner = widget.partner;
    final packages = packagesFor(partner);
    final galleryUrls = List.generate(
      4,
      (i) => 'https://picsum.photos/seed/${partner.id}-g$i/600/600',
    );

    return Scaffold(
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
                            color: colorForPartnerCategory(partner.category),
                          ),
                          Image.network(
                            partner.imageUrl,
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
                          icon: _favorited
                              ? Icons.favorite
                              : Icons.favorite_border,
                          background: Colors.white.withValues(alpha: 0.9),
                          onTap: () => setState(() => _favorited = !_favorited),
                        ),
                      ),
                    ),
                    Positioned(
                      bottom: 12,
                      right: 12,
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 10,
                          vertical: 5,
                        ),
                        decoration: BoxDecoration(
                          color: Colors.black.withValues(alpha: 0.5),
                          borderRadius: BorderRadius.circular(999),
                        ),
                        child: const Text(
                          '1/24',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                          ),
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
                      Row(
                        children: [
                          const Icon(
                            Icons.star_rounded,
                            size: 17,
                            color: Colors.amber,
                          ),
                          const SizedBox(width: 3),
                          Text(
                            '${partner.rating}',
                            style: const TextStyle(
                              fontWeight: FontWeight.w700,
                              fontSize: 13.5,
                            ),
                          ),
                          const SizedBox(width: 4),
                          Text(
                            '(${partner.reviewCount} avaliações)',
                            style: TextStyle(
                              color: AppTheme.inkMuted,
                              fontSize: 12.5,
                            ),
                          ),
                          const SizedBox(width: 10),
                          const Icon(
                            Icons.place_outlined,
                            size: 15,
                            color: AppTheme.inkMuted,
                          ),
                          const SizedBox(width: 2),
                          Text(
                            partner.city,
                            style: TextStyle(
                              color: AppTheme.inkMuted,
                              fontSize: 12.5,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Resposta média: ${responseMinutesFor(partner)} min',
                        style: TextStyle(
                          color: AppTheme.inkMuted,
                          fontSize: 12.5,
                        ),
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
                          packages: packages,
                        ),
                        _DetailTab.gallery => _GallerySection(
                          imageUrls: galleryUrls,
                        ),
                        _DetailTab.reviews => const _ComingSoonSection(
                          message: 'Ainda sem reviews reais — em breve.',
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
                      color: Colors.black.withValues(alpha: 0.06),
                      blurRadius: 12,
                      offset: const Offset(0, -4),
                    ),
                  ],
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: () => _comingSoon('Chat em breve.'),
                        icon: const Icon(Icons.chat_bubble_outline, size: 18),
                        label: const Text('Chat'),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: AppTheme.ink,
                          side: const BorderSide(color: Color(0xFFE2D9CF)),
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      flex: 2,
                      child: ElevatedButton.icon(
                        onPressed: () {
                          if (widget.selectionMode) {
                            Navigator.of(context).pop(partner);
                          } else {
                            _comingSoon('Reservas em breve.');
                          }
                        },
                        icon: Icon(
                          widget.selectionMode ? Icons.check : Icons.add,
                          size: 18,
                        ),
                        label: Text(
                          widget.selectionMode
                              ? 'Escolher parceiro'
                              : 'Reservar',
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
    return Row(
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
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            '${partner.category.label} · ${partner.city}',
            style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13.5),
          ),
          const SizedBox(height: 10),
          Text(
            partner.description,
            style: const TextStyle(fontSize: 13.5, height: 1.5),
          ),
        ],
      ),
    );
  }
}

class _PackagesSection extends StatelessWidget {
  final List<PartnerPackage> packages;

  const _PackagesSection({required this.packages});

  @override
  Widget build(BuildContext context) {
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
  }
}

class _PackageCard extends StatelessWidget {
  final PartnerPackage package;

  const _PackageCard({required this.package});

  @override
  Widget build(BuildContext context) {
    final highlighted = package.highlighted;
    return Stack(
      clipBehavior: Clip.none,
      children: [
        Container(
          margin: EdgeInsets.only(top: highlighted ? 14 : 0),
          padding: const EdgeInsets.fromLTRB(12, 16, 12, 14),
          decoration: BoxDecoration(
            color: highlighted
                ? Colors.white
                : Colors.white.withValues(alpha: 0.6),
            borderRadius: BorderRadius.circular(18),
            border: highlighted
                ? Border.all(color: AppTheme.ink, width: 1.5)
                : null,
            boxShadow: highlighted
                ? [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: 0.1),
                      blurRadius: 14,
                      offset: const Offset(0, 4),
                    ),
                  ]
                : null,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                package.name,
                style: const TextStyle(
                  fontWeight: FontWeight.w700,
                  fontSize: 13,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                '€${package.price.toStringAsFixed(0)}',
                style: const TextStyle(
                  fontWeight: FontWeight.w800,
                  fontSize: 16,
                ),
              ),
              const SizedBox(height: 10),
              for (final feature in package.features)
                Padding(
                  padding: const EdgeInsets.only(bottom: 6),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Icon(
                        Icons.check,
                        size: 13,
                        color: AppStatusColors.confirmed,
                      ),
                      const SizedBox(width: 4),
                      Expanded(
                        child: Text(
                          feature,
                          style: const TextStyle(fontSize: 11),
                        ),
                      ),
                    ],
                  ),
                ),
            ],
          ),
        ),
        if (highlighted)
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            child: Center(
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: AppTheme.ink,
                  borderRadius: BorderRadius.circular(999),
                ),
                child: const Text(
                  'Mais escolhido',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 9,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ),
            ),
          ),
      ],
    );
  }
}

class _GallerySection extends StatelessWidget {
  final List<String> imageUrls;

  const _GallerySection({required this.imageUrls});

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 2,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      mainAxisSpacing: 10,
      crossAxisSpacing: 10,
      childAspectRatio: 1,
      children: [
        for (final url in imageUrls)
          ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: Image.network(
              url,
              fit: BoxFit.cover,
              errorBuilder: (context, error, stackTrace) =>
                  Container(color: AppColors.pink),
            ),
          ),
      ],
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
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Text(
        message,
        textAlign: TextAlign.center,
        style: TextStyle(color: AppTheme.inkMuted),
      ),
    );
  }
}
