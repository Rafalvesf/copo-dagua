import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

class PartnerPortfolioScreen extends ConsumerStatefulWidget {
  const PartnerPortfolioScreen({super.key});

  @override
  ConsumerState<PartnerPortfolioScreen> createState() =>
      _PartnerPortfolioScreenState();
}

class _PartnerPortfolioScreenState
    extends ConsumerState<PartnerPortfolioScreen> {
  PortfolioCategory? _filter;

  @override
  Widget build(BuildContext context) {
    final itemsAsync = ref.watch(partnerPortfolioProvider(_filter));

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            PageHeader(
              title: 'Portefólio',
              subtitle: 'Mostra o teu melhor trabalho.',
              trailing: const AccountSwitcherBadge(),
            ),
            const SizedBox(height: 16),
            Padding(
              padding: const EdgeInsets.symmetric(
                horizontal: AppTheme.screenMargin,
              ),
              child: Row(
                children: [
                  _FilterPill(
                    label: 'Todas',
                    selected: _filter == null,
                    onTap: () => setState(() => _filter = null),
                  ),
                  const SizedBox(width: 8),
                  for (final category in PortfolioCategory.values) ...[
                    _FilterPill(
                      label: category.label,
                      selected: _filter == category,
                      onTap: () => setState(() => _filter = category),
                    ),
                    const SizedBox(width: 8),
                  ],
                ],
              ),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: itemsAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) =>
                    const Center(child: Text('Não foi possível carregar.')),
                data: (items) => GridView.builder(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    0,
                    AppTheme.screenMargin,
                    16,
                  ),
                  gridDelegate:
                      const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        mainAxisSpacing: 12,
                        crossAxisSpacing: 12,
                        childAspectRatio: 0.95,
                      ),
                  itemCount: items.length,
                  itemBuilder: (context, index) => ClipRRect(
                    borderRadius: BorderRadius.circular(18),
                    child: Image.network(
                      items[index].imageUrl,
                      fit: BoxFit.cover,
                      loadingBuilder: (context, child, progress) =>
                          progress == null ? child : const SizedBox.shrink(),
                      errorBuilder: (context, error, stackTrace) =>
                          Container(color: AppColors.gray),
                    ),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                0,
                AppTheme.screenMargin,
                16,
              ),
              child: SnappyTap.builder(
                onTap: () async {
                  final partnerId = ref
                      .read(authControllerProvider)
                      .profile!
                      .id;
                  await MockBackend.instance.addPortfolioItem(
                    partnerId,
                    _filter ?? PortfolioCategory.casamentos,
                  );
                  ref.invalidate(partnerPortfolioProvider);
                },
                builder: (context, hovered) => Container(
                  height: 52,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: AppTheme.accentOliveDark,
                    borderRadius: BorderRadius.circular(999),
                    boxShadow: hovered
                        ? AppTheme.cardShadowStrong
                        : AppTheme.cardShadow,
                  ),
                  child: const Text(
                    '+ Adicionar fotos',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w700,
                      fontSize: 15,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _FilterPill extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _FilterPill({
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : Colors.white,
          borderRadius: BorderRadius.circular(999),
          boxShadow: AppTheme.cardShadow,
        ),
        child: Text(
          label,
          style: TextStyle(
            color: selected ? Colors.white : AppTheme.ink,
            fontWeight: FontWeight.w600,
            fontSize: 13,
          ),
        ),
      ),
    );
  }
}
