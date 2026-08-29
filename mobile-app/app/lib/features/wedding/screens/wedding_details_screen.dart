import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

/// "Os noivos" — perfil simples do casal (foto, nome, frase, dados
/// essenciais). O formulário de edição, as estatísticas de orçamento/
/// convidados e o Wedding Copilot que antes viviam aqui mudaram-se
/// para `features/settings/screens/settings_screen.dart`, acedido pelo
/// "..." abaixo.
class WeddingDetailsScreen extends ConsumerWidget {
  const WeddingDetailsScreen({super.key});

  void _showComingSoon(BuildContext context, String message) {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(SnackBar(content: Text(message)));
  }

  String _locationLabel(Wedding wedding) {
    final venue = wedding.venue;
    final location = wedding.location;
    if (venue != null && venue.isNotEmpty && location != null && location.isNotEmpty) {
      return '$venue, $location';
    }
    return venue ?? location ?? '—';
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 24,
                    bottomFadeHeight: 140,
                    child: ListView(
                      padding: const EdgeInsets.fromLTRB(
                        AppTheme.screenMargin,
                        40,
                        AppTheme.screenMargin,
                        140,
                      ),
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            SnappyTap.builder(
                              onTap: () => context.push('/settings'),
                              builder: (context, hovered) => Container(
                                width: 46,
                                height: 46,
                                alignment: Alignment.center,
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  shape: BoxShape.circle,
                                  boxShadow: hovered
                                      ? AppTheme.cardShadowStrong
                                      : AppTheme.cardShadow,
                                ),
                                child: const Icon(
                                  Icons.more_horiz,
                                  color: AppTheme.ink,
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 18),
                        Center(
                          child: Stack(
                            clipBehavior: Clip.none,
                            children: [
                              Container(
                                width: 140,
                                height: 140,
                                padding: const EdgeInsets.all(4),
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  shape: BoxShape.circle,
                                  boxShadow: AppTheme.cardShadowStrong,
                                ),
                                child: ClipOval(
                                  child: Image.network(
                                    'https://picsum.photos/seed/${wedding.id}-couple/400/400',
                                    fit: BoxFit.cover,
                                    errorBuilder: (context, error, stackTrace) =>
                                        Container(color: AppColors.green),
                                  ),
                                ),
                              ),
                              Positioned(
                                bottom: 0,
                                right: 0,
                                child: SnappyTap.builder(
                                  onTap: () => _showComingSoon(
                                    context,
                                    'Em breve: escolher nova foto.',
                                  ),
                                  builder: (context, hovered) => Container(
                                    width: 38,
                                    height: 38,
                                    decoration: BoxDecoration(
                                      color: Colors.white,
                                      shape: BoxShape.circle,
                                      border: Border.all(
                                        color: AppTheme.background,
                                        width: 3,
                                      ),
                                      boxShadow: hovered
                                          ? AppTheme.cardShadowStrong
                                          : AppTheme.cardShadow,
                                    ),
                                    child: const Icon(
                                      Icons.camera_alt_outlined,
                                      size: 17,
                                      color: AppTheme.accentOliveDark,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(height: 20),
                        Text(
                          wedding.displayNames,
                          textAlign: TextAlign.center,
                          style: AppTypography.displaySerif(
                            fontSize: 30,
                            color: AppTheme.ink,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          'Noivos',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: AppTheme.inkMuted,
                            fontSize: 13.5,
                            fontWeight: FontWeight.w600,
                            letterSpacing: 0.4,
                          ),
                        ),
                        const SizedBox(height: 14),
                        Row(
                          children: [
                            Expanded(
                              child: Divider(color: AppTheme.borderMuted),
                            ),
                            const Padding(
                              padding: EdgeInsets.symmetric(horizontal: 8),
                              child: Icon(
                                Icons.favorite,
                                size: 12,
                                color: AppTheme.accentOliveDark,
                              ),
                            ),
                            Expanded(
                              child: Divider(color: AppTheme.borderMuted),
                            ),
                          ],
                        ),
                        const SizedBox(height: 16),
                        Text(
                          '"${wedding.displayQuote}"',
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                            fontStyle: FontStyle.italic,
                            color: AppTheme.inkMuted,
                            fontSize: 14.5,
                            height: 1.5,
                          ),
                        ),
                        const SizedBox(height: 28),
                        Container(
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(20),
                            boxShadow: AppTheme.cardShadow,
                          ),
                          padding: const EdgeInsets.symmetric(
                            horizontal: 16,
                            vertical: 4,
                          ),
                          child: Column(
                            children: [
                              _InfoRow(
                                icon: Icons.calendar_today_outlined,
                                label: 'Data',
                                value: wedding.weddingDate == null
                                    ? 'Por definir'
                                    : formatWeddingDateCaps(
                                        wedding.weddingDate!,
                                      ),
                              ),
                              const Divider(
                                height: 1,
                                color: AppTheme.borderMuted,
                              ),
                              _InfoRow(
                                icon: Icons.place_outlined,
                                label: 'Local',
                                value: _locationLabel(wedding),
                              ),
                              const Divider(
                                height: 1,
                                color: AppTheme.borderMuted,
                              ),
                              _InfoRow(
                                icon: Icons.language,
                                label: 'Website',
                                value: wedding.websiteDomain,
                              ),
                              const Divider(
                                height: 1,
                                color: AppTheme.borderMuted,
                              ),
                              _InfoRow(
                                icon: Icons.card_giftcard_outlined,
                                label: 'Lista de presentes',
                                trailingLabel: 'Ver lista',
                                onTap: () => _showComingSoon(
                                  context,
                                  'Em breve: lista de presentes.',
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingBottomNav(current: AppTab.wedding),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

class _InfoRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String? value;
  final String? trailingLabel;
  final VoidCallback? onTap;

  const _InfoRow({
    required this.icon,
    required this.label,
    this.value,
    this.trailingLabel,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final row = Padding(
      padding: const EdgeInsets.symmetric(vertical: 14),
      child: Row(
        children: [
          Container(
            width: 34,
            height: 34,
            decoration: BoxDecoration(
              color: AppColors.green,
              borderRadius: BorderRadius.circular(11),
            ),
            child: Icon(icon, size: 16, color: AppTheme.accentOliveDark),
          ),
          const SizedBox(width: 12),
          Text(
            label,
            style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13.5),
          ),
          const Spacer(),
          if (trailingLabel != null) ...[
            Text(
              trailingLabel!,
              style: const TextStyle(
                color: AppTheme.accentOliveDark,
                fontWeight: FontWeight.w700,
                fontSize: 13,
              ),
            ),
            const SizedBox(width: 4),
            const Icon(
              Icons.chevron_right,
              size: 18,
              color: AppTheme.accentOliveDark,
            ),
          ] else
            Flexible(
              child: Text(
                value ?? '—',
                textAlign: TextAlign.right,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                  color: AppTheme.inkMuted,
                  fontSize: 13,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
        ],
      ),
    );

    if (onTap == null) return row;
    return SnappyTap(onTap: onTap, child: row);
  }
}
