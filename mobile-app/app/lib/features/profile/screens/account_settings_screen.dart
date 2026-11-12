import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/social/social.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../home/screens/home_feed_screen.dart' show SupportSummaryCard;
import '../../settings/screens/settings_screen.dart' show CoupleAccountSections, GuestAccountSections;

/// Definições num botão (mockup "Definições (botão)", 2026-11-12): o que
/// antes estava no Perfil, mais "Quem vê o meu perfil".
class AccountSettingsScreen extends ConsumerWidget {
  const AccountSettingsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider.select((s) => s.profile));
    final organizer = profile?.role == UserRole.couple;
    final me = profile?.id;
    final pub = me == null ? null : ref.watch(publicProfileProvider(me)).value;
    return GradientScaffold(
      background: AppBackground.feed,
      body: ListView(
        padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, MediaQuery.paddingOf(context).top + 16, AppTheme.screenMargin, 60),
        children: [
          Row(children: [
            SnappyTap(
              onTap: () => Navigator.of(context).maybePop(),
              child: Container(
                width: 44,
                height: 44,
                alignment: Alignment.center,
                decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                child: const Icon(Hi.chevronLeft, size: 22, color: AppTheme.ink),
              ),
            ),
            const SizedBox(width: 10),
            const Text('Definições', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
          const SizedBox(height: 8),
          if (pub != null) ...[
            const Padding(
              padding: EdgeInsets.fromLTRB(4, 16, 4, 8),
              child: Text('PERFIL',
                  style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            ),
            Container(
              decoration: softCard(radius: 22),
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: SnappyTap(
                onTap: () async {
                  try {
                    await setProfilePublic(!pub.isPublic);
                    ref.invalidate(publicProfileProvider(pub.id));
                  } catch (_) {}
                },
                child: SizedBox(
                  height: 56,
                  child: Row(children: [
                    const Expanded(
                      child: Text('Quem vê o meu perfil',
                          style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    Text(pub.isPublic ? 'Toda a gente' : 'Só quem me segue',
                        style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                    const SizedBox(width: 6),
                    const Icon(Hi.chevronRight, size: 16, color: AppTheme.inkMuted),
                  ]),
                ),
              ),
            ),
          ],
          const SizedBox(height: 16),
          const SupportSummaryCard(),
          if (organizer && ref.watch(weddingControllerProvider).wedding != null)
            const CoupleAccountSections()
          else
            const GuestAccountSections(),
        ],
      ),
    );
  }
}
