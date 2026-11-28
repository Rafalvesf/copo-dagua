import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

/// Portefólio real — liga-se a `partner_portfolio_items`
/// (`database/migrations/023_portfolio_storage.sql`). Mín. 3 imagens
/// obrigatórias, máx. 1 vídeo opcional (pedido explícito do utilizador,
/// "at least 3 images (mandatory) and 1 video (optional)"), reforçado do
/// lado da base de dados por `submit_partner_profile_for_review()` e
/// `enforce_portfolio_video_limit()` — este ecrã só reflete essas regras
/// na UI, não é a fonte de verdade delas.
class PartnerPortfolioScreen extends ConsumerStatefulWidget {
  const PartnerPortfolioScreen({super.key});

  @override
  ConsumerState<PartnerPortfolioScreen> createState() =>
      _PartnerPortfolioScreenState();
}

const _minImages = 3;

class _PartnerPortfolioScreenState extends ConsumerState<PartnerPortfolioScreen> {
  bool _uploading = false;

  Future<void> _addImages() async {
    final picker = ImagePicker();
    final files = await picker.pickMultiImage();
    if (files.isEmpty) return;
    await _upload(files, PortfolioMediaType.image);
  }

  Future<void> _addVideo() async {
    final picker = ImagePicker();
    final file = await picker.pickVideo(source: ImageSource.gallery);
    if (file == null) return;
    await _upload([file], PortfolioMediaType.video);
  }

  Future<void> _upload(List<XFile> files, PortfolioMediaType type) async {
    setState(() => _uploading = true);
    final currentCount = ref.read(partnerPortfolioProvider).maybeWhen(
          data: (items) => items.length,
          orElse: () => 0,
        );
    var position = currentCount;
    try {
      for (final file in files) {
        await uploadPortfolioMedia(file: file, mediaType: type, position: position);
        position++;
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              type == PortfolioMediaType.video
                  ? 'Só é permitido 1 vídeo no portefólio.'
                  : 'Não foi possível enviar o ficheiro. Tenta novamente.',
            ),
          ),
        );
      }
    }
    ref.invalidate(partnerPortfolioProvider);
    // Portefólio alimenta a submissão automática
    // (`maybe_auto_submit_partner_profile()`,
    // `026_partner_auto_submission.sql`) — relê o estado real para a UI
    // refletir uma transição que pode ter acabado de acontecer sozinha.
    await ref.read(partnerProfileControllerProvider.notifier).refreshReviewStatus();
    if (mounted) setState(() => _uploading = false);
  }

  Future<void> _remove(PortfolioItem item) async {
    await removePortfolioItem(item);
    ref.invalidate(partnerPortfolioProvider);
    await ref.read(partnerProfileControllerProvider.notifier).refreshReviewStatus();
  }

  @override
  Widget build(BuildContext context) {
    final itemsAsync = ref.watch(partnerPortfolioProvider);

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
            Expanded(
              child: itemsAsync.when(
                loading: () => const SkeletonGrid(),
                error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(partnerPortfolioProvider)),
                data: (items) {
                  final images = items.where((i) => i.mediaType == PortfolioMediaType.image).toList();
                  final videos = items.where((i) => i.mediaType == PortfolioMediaType.video).toList();
                  return ListView(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      0,
                      AppTheme.screenMargin,
                      16,
                    ),
                    children: [
                      // Mockup «Páginas do parceiro» → Portefólio (2026-11-14).
                      if (images.length < _minImages)
                        KitAlert(
                          top: 0,
                          text: 'Faltam ${_minImages - images.length} ${_minImages - images.length == 1 ? 'foto' : 'fotos'}: '
                              'são o mínimo para submeter o perfil.',
                          action: 'Adicionar',
                          onAction: _uploading ? null : _addImages,
                        ),
                      if (images.isEmpty && videos.isEmpty)
                        const Padding(
                          padding: EdgeInsets.only(top: 40),
                          child: Column(children: [
                            EstrelaMascot(Estrela.dormir, size: 88),
                            SizedBox(height: 16),
                            Text('Ainda não tens fotos',
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                            SizedBox(height: 4),
                            Text('São a primeira coisa que os clientes veem.',
                                textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                          ]),
                        )
                      else ...[
                        const SizedBox(height: 16),
                        GridView.builder(
                          shrinkWrap: true,
                          physics: const NeverScrollableScrollPhysics(),
                          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                            crossAxisCount: 2,
                            mainAxisSpacing: 12,
                            crossAxisSpacing: 12,
                            childAspectRatio: 0.95,
                          ),
                          itemCount: images.length + videos.length,
                          itemBuilder: (context, index) {
                            final item = index < images.length ? images[index] : videos[index - images.length];
                            return _PortfolioTile(item: item, onDelete: () => _remove(item));
                          },
                        ),
                      ],
                      const SizedBox(height: 20),
                      SnappyTap(
                        onTap: _uploading ? () {} : _addImages,
                        child: _ActionPill(
                          label: _uploading ? 'A enviar...' : 'Adicionar fotos',
                        ),
                      ),
                      const SizedBox(height: 10),
                      if (videos.isEmpty)
                        SnappyTap(
                          onTap: _uploading ? () {} : _addVideo,
                          child: _ActionPill(
                            label: _uploading ? 'A enviar...' : 'Adicionar vídeo (opcional)',
                            outlined: true,
                          ),
                        ),
                    ],
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _RequirementBanner extends StatelessWidget {
  final int imageCount;

  const _RequirementBanner({required this.imageCount});

  @override
  Widget build(BuildContext context) {
    final complete = imageCount >= _minImages;
    // Nunca fundo amarelo (DESIGN §7): branco + linha fina do tom.
    return AlertOutline(
      tone: complete ? AlertTone.invite : AlertTone.pending,
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      child: Row(
        children: [
          AlertDot(complete ? AlertTone.invite : AlertTone.pending),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              complete
                  ? 'Já tens o mínimo de $_minImages fotos para poderes submeter o perfil.'
                  : '$imageCount/$_minImages fotos — mínimo obrigatório para submeter o perfil.',
              style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w600, color: AppTheme.ink),
            ),
          ),
        ],
      ),
    );
  }
}

class _ActionPill extends StatelessWidget {
  final String label;
  final bool outlined;

  const _ActionPill({required this.label, this.outlined = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 52,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        // Botões pretos / brancos com contorno preto (DESIGN §2: verde
        // nunca em botões).
        color: outlined ? Colors.white : AppTheme.action,
        border: outlined ? Border.all(color: AppTheme.ink, width: 1.5) : null,
        borderRadius: BorderRadius.circular(AppRadius.pill),
      ),
      child: Text(
        label,
        style: TextStyle(
          color: outlined ? AppTheme.ink : Colors.white,
          fontWeight: FontWeight.w700,
          fontSize: 15,
        ),
      ),
    );
  }
}

class _PortfolioTile extends StatelessWidget {
  final PortfolioItem item;
  final VoidCallback onDelete;

  const _PortfolioTile({required this.item, required this.onDelete});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(AppRadius.lg),
      child: Stack(
        fit: StackFit.expand,
        children: [
          if (item.mediaType == PortfolioMediaType.video)
            Container(
              color: AppTheme.ink,
              alignment: Alignment.center,
              child: const Icon(Hi.playCircle, color: Colors.white, size: 40),
            )
          else
            SizedNetworkImage(
              item.mediaUrl,
              fit: BoxFit.cover,
              // Sem loadingBuilder (2026-11-24): esqueleto enquanto a foto carrega.
              errorBuilder: (context, error, stackTrace) => Container(color: AppColors.gray),
            ),
          Positioned(
            top: 6,
            right: 6,
            child: SnappyTap(
              onTap: onDelete,
              child: Container(
                width: 28,
                height: 28,
                decoration: const BoxDecoration(color: Colors.black54, shape: BoxShape.circle),
                child: const Icon(Hi.xMark, size: 16, color: Colors.white),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
